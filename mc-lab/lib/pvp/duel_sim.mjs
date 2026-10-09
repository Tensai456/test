// duel_sim.mjs — ดวล 1v1 รายติ๊ก (20 tick = 1 วิ) บนฟิสิกส์วานิลลา (physics.mjs) + ping
// ใช้เทียบ "กลยุทธ์" ไม่ใช่ทำนาย % จริง: แกนเดียว (เดินหน้า/ถอย) ไม่มี strafe ด้านข้าง/สิ่งกีดขวาง/การเล็งจริง
// ping: แต่ละฝั่งล็อกค่า (ms) ต่อแมตช์ · มองเห็นคู่ต่อสู้ช้าไป (pingเรา+pingเขา)/2 · การตีไปถึงเซิร์ฟช้า pingเรา/2
//       knockback ไปถึงตัวผู้โดนช้า pingเขา/2 · เซิร์ฟเช็กระยะด้วยตำแหน่งที่เซิร์ฟรู้ (ช้าตาม ping แต่ละฝั่ง)
// ค่าที่เป็นสมมติฐาน (ไม่ใช่วิกิ) ติด ASSUME

import { weapon, ARMOR } from './weapons.mjs';
import { meleeRaw, armorReduce, applyHit, smashBonus } from './damage.mjs';
import { newShield, raise, lower, onMelee } from './shield_logic.mjs';
import { arrowDamage, solvePitch } from './bow_lead.mjs';
import { vyForHeight } from './mace_timing.mjs';
import { newBody, tick as physTick, applyKnockback, attackerAfterSprintHit, isFalling } from './physics.mjs';
import { fallDamage } from '../fall_safety.mjs';

const USE_ITEM_SLOW = 0.2;   // ASSUME: ยกโล่/ง้างธนู เดินช้าเหลือ 20%
const WIND_CD = 10;          // ลูกลม cooldown 10 tick (Wind Charge wiki)

export function rng32(seed) {
  let a = seed >>> 0;
  return () => {
    a = (a + 0x6d2b79f5) >>> 0;
    let t = a;
    t = Math.imul(t ^ (t >>> 15), t | 1);
    t ^= t + Math.imul(t ^ (t >>> 7), t | 61);
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

export const DEFAULT_PROFILE = {
  weapon: 'iron_sword', armor: 'iron', hp: 20,
  aim: 0.85,             // โอกาสตีโดนเมื่อเซิร์ฟยืนยันว่าอยู่ในระยะ (แทนการเล็ง/strafe ของคู่ต่อสู้)
  fullCharge: true, chargeAt: 0.95, spamTicks: 4,
  crit: false,           // กระโดดแล้วตีตอนขาลง
  wtap: false,           // รีเซ็ตวิ่งหลังทุกฮิต → sprint-KB ทุกฮิต
  shield: false,         // ยกโล่ระหว่างรอ cooldown
  spacing: 2.8,          // ระยะที่พยายามยืน (บล็อก)
  ping: [10, 50],        // ms: ตัวเลข = ล็อกค่า · [min,max] = สุ่มล็อกต่อแมตช์
  mace: null,            // { height: 8, charges: 8, density: 0 } — ลูกลมพุ่งขึ้นแล้วทุบ (สูงสุด ~11)
  bow: null,             // { minDist: 6, aim: 0.6, arrows: 16 }
};

function pickPing(p, rnd) {
  return Array.isArray(p) ? p[0] + rnd() * (p[1] - p[0]) : p;
}

function makeAgent(p, x, dir, rnd) {
  const prof = { ...DEFAULT_PROFILE, ...p };
  return {
    p: prof, w: weapon(prof.weapon), arm: ARMOR[prof.armor], dir, body: newBody(x), hist: [],
    ping: pickPing(prof.ping, rnd), hp: prof.hp, lastHurt: -99, lastDmg: 0, lastAtk: -99,
    sprint: true, shield: newShield(), apexY: 0, windAt: -99, launched: false, draw: 0,
    charges: prof.mace?.charges ?? 0, arrows: prof.bow?.arrows ?? 0,
    st: { swings: 0, hits: 0, crits: 0, blocked: 0, smashes: 0, arrows: 0, dmg: 0, fallDmg: 0 },
  };
}

// ตำแหน่ง {x,y} ย้อนหลัง d tick (เศษส่วน → interpolate)
function posAt(a, t, d) {
  const h = a.hist, tt = t - d;
  if (h.length === 0 || tt >= h.length - 1) return { x: a.body.x, y: a.body.y };
  if (tt <= 0) return h[0];
  const i = Math.floor(tt), f = tt - i;
  return { x: h[i].x * (1 - f) + h[i + 1].x * f, y: h[i].y * (1 - f) + h[i + 1].y * f };
}

// ระยะตี: แนวนอน + แนวตั้ง (ตาผู้ตี 1.62 ถึงช่วงตัวเป้า 0–1.8) — ใช้ระยะใกล้สุดถึงกล่องเป้า
function reachDist(ax, ay, bx, by) {
  const eye = ay + 1.62;
  const dy = eye > by + 1.8 ? eye - (by + 1.8) : eye < by ? by - eye : 0;
  return Math.hypot(Math.max(0, Math.abs(ax - bx) - 0.3), dy);
}

const msToTicks = (ms) => ms / 50;

function schedule(q, at, fn) { q.push({ at, fn }); }

function step(a, b, t, rnd, q) {
  const ob = posAt(b, t, msToTicks((a.ping + b.ping) / 2));
  const dObs = reachDist(a.body.x, a.body.y, ob.x, ob.y);
  const since = t - a.lastAtk;
  const ready = since + 0.5 >= a.w.cooldown * a.p.chargeAt;
  const input = { move: 0, sprint: a.sprint, jump: false, slow: 1 };
  if (a.body.onGround) a.apexY = 0; else a.apexY = Math.max(a.apexY, a.body.y);

  // ธนูเมื่อไกล: ยืนง้าง 20 tick แล้วยิง
  if (a.p.bow && a.arrows > 0 && dObs >= a.p.bow.minDist) {
    a.draw++; input.slow = USE_ITEM_SLOW;
    if (a.draw >= 20) {
      a.draw = 0; a.arrows--;
      const sol = solvePitch(3, dObs, 0);
      if (sol) {
        const p = a.p.bow.aim * Math.max(0.15, 1 - dObs / 40);
        const at = t + msToTicks(a.ping / 2) + sol.ticks;
        schedule(q, at, (now) => {
          if (rnd() < p && dealt(a, b, arrowDamage(3, { crit: true, rng: rnd }), now, {}) > 0) a.st.arrows++;
        });
      }
    }
    physTick(a.body, input);
    return;
  }
  a.draw = 0;

  // กระบอง: บนพื้น + ในระยะ + มีลูกลม → พุ่งขึ้น (ต้องกระโดดก่อน: ปาใส่พื้นตอนยืนไม่ลอย)
  if (a.p.mace && a.charges > 0 && a.body.onGround && dObs <= a.w.reach + 1 && t - a.windAt >= WIND_CD) {
    input.jump = true; a.launched = 'pending';
  } else if (a.launched === 'pending' && !a.body.onGround) {
    a.charges--; a.windAt = t; a.body.vy = vyForHeight(Math.min(a.p.mace.height, 11)); a.launched = true;
  }

  // ทุบตอนตกลงมาในระยะ
  if (a.launched === true && isFalling(a.body) && a.apexY - a.body.y >= 1.5 && dObs <= a.w.reach) {
    const fall = a.apexY - a.body.y;
    a.launched = false; a.apexY = a.body.y; a.st.swings++;
    schedule(q, t + msToTicks(a.ping / 2), (now) => {
      if (serverDist(a, b, now) > a.w.reach + 0.3 || rnd() >= a.p.aim) return;
      const raw = 6 + smashBonus(fall, a.p.mace.density ?? 0);
      if (dealt(a, b, raw, now, { kbLevel: 0 }) > 0) a.st.smashes++;
    });
  }

  // โล่
  if (a.p.shield) {
    if (!ready && dObs <= a.w.reach + 1.5) { raise(a.shield, t); input.slow = USE_ITEM_SLOW; } else lower(a.shield);
  }

  // คริ: กระโดดเมื่อใกล้ชาร์จเต็ม
  if (a.p.crit && a.body.onGround && !a.launched && dObs <= a.w.reach + 0.8 && since + 7 >= a.w.cooldown * a.p.chargeAt) {
    input.jump = true; a.sprint = false;     // คริต้องไม่วิ่ง → ปล่อยวิ่งก่อนกระโดด
  }

  // ตี
  const falling = isFalling(a.body);
  const canSwing = a.p.fullCharge ? ready : since >= a.p.spamTicks;
  if (!a.launched && dObs <= a.w.reach && canSwing && (!a.p.crit || falling)) {
    a.lastAtk = t; a.st.swings++;
    const sprinting = a.sprint;              // วิ่งอยู่ = ได้ sprint-KB แต่คริไม่ได้
    const r = meleeRaw(a.w, { ticksSinceAttack: since, falling, sprinting });
    if (r.sprintKb) { a.sprint = false; attackerAfterSprintHit(a.body); }
    schedule(q, t + msToTicks(a.ping / 2), (now) => {
      if (serverDist(a, b, now) > a.w.reach || rnd() >= a.p.aim) return;
      if (dealt(a, b, r.dmg, now, { axe: !!a.w.disablesShield, kbLevel: r.sprintKb ? 1 : 0 }) > 0) {
        a.st.hits++; if (r.crit) a.st.crits++;
      }
    });
    if (a.p.wtap) a.sprint = true;
  }

  // เดิน: เข้าหาจนถึง spacing · ไม่ w-tap = วิ่งใหม่ได้เมื่อหลุดระยะ
  if (Math.abs(a.body.x - ob.x) > a.p.spacing) {
    input.move = a.dir;
    if (dObs > a.w.reach + 1) a.sprint = true;
  }
  input.sprint = a.sprint;
  physTick(a.body, input);

  // ดาเมจตก (กระบองที่ไม่ได้ทุบ)
  if (a.body.onGround && a.apexY > 3) {
    const d = fallDamage(a.apexY); a.hp -= d; a.st.fallDmg += d; a.apexY = 0; a.launched = false;
  }
}

function serverDist(a, b, now) {
  const pa = posAt(a, now, msToTicks(a.ping / 2)), pb = posAt(b, now, msToTicks(b.ping / 2));
  return reachDist(pa.x, pa.y, pb.x, pb.y);
}

let _q = null;
function dealt(a, b, raw, now, { axe = false, kbLevel = 0 }) {
  const sh = b.p.shield ? onMelee(b.shield, now, { axe }) : { blocked: false };
  if (sh.blocked) { b.st.blocked++; return 0; }
  const d = applyHit(b, armorReduce(raw, b.arm), now);
  if (d > 0) {
    a.st.dmg += d;
    const dir = Math.sign(b.body.x - a.body.x) || b.dir * -1;
    schedule(_q, now + msToTicks(b.ping / 2), () => applyKnockback(b.body, dir, kbLevel, b.arm.kbRes));
  }
  return d;
}

export function duel(pa, pb, { seed = 1, maxTicks = 2400, startDist = 8, trace = null } = {}) {
  const rnd = rng32(seed);
  const A = makeAgent(pa, 0, 1, rnd), B = makeAgent(pb, startDist, -1, rnd);
  const q = []; _q = q;
  for (let t = 0; t < maxTicks; t++) {
    for (let i = q.length - 1; i >= 0; i--) if (q[i].at <= t) { const e = q.splice(i, 1)[0]; e.fn(t); }
    const order = rnd() < 0.5 ? [[A, B], [B, A]] : [[B, A], [A, B]];
    for (const [x, y] of order) step(x, y, t, rnd, q);
    A.hist.push({ x: A.body.x, y: A.body.y }); B.hist.push({ x: B.body.x, y: B.body.y });
    if (trace) trace.push({ t, ax: A.body.x, ay: A.body.y, bx: B.body.x, by: B.body.y, ahp: A.hp, bhp: B.hp });
    if (A.hp <= 0 || B.hp <= 0) {
      const winner = A.hp <= 0 && B.hp <= 0 ? 'draw' : A.hp > 0 ? 'A' : 'B';
      return { winner, ticks: t, A: { hp: A.hp, ping: A.ping, ...A.st }, B: { hp: B.hp, ping: B.ping, ...B.st } };
    }
  }
  return { winner: 'timeout', ticks: maxTicks, A: { hp: A.hp, ping: A.ping, ...A.st }, B: { hp: B.hp, ping: B.ping, ...B.st } };
}

const STAT_KEYS = ['swings', 'hits', 'crits', 'blocked', 'smashes', 'arrows', 'dmg', 'fallDmg'];

// หลายรอบ สลับฝั่งเริ่มทุกรอบ (กันลำเอียงฝั่ง)
export function matchup(pa, pb, { n = 200, seed = 1 } = {}) {
  let winA = 0, winB = 0, other = 0, ticks = 0;
  const sum = { A: Object.fromEntries(STAT_KEYS.map(k => [k, 0])), B: Object.fromEntries(STAT_KEYS.map(k => [k, 0])) };
  for (let i = 0; i < n; i++) {
    const flip = i % 2 === 1;
    const r = flip ? duel(pb, pa, { seed: seed + i }) : duel(pa, pb, { seed: seed + i });
    const w = r.winner === 'A' ? (flip ? 'B' : 'A') : r.winner === 'B' ? (flip ? 'A' : 'B') : 'x';
    if (w === 'A') winA++; else if (w === 'B') winB++; else other++;
    ticks += r.ticks;
    const [ra, rb] = flip ? [r.B, r.A] : [r.A, r.B];
    for (const k of STAT_KEYS) { sum.A[k] += ra[k]; sum.B[k] += rb[k]; }
  }
  return { n, winA: winA / n, winB: winB / n, drawOrTimeout: other / n, avgSec: ticks / n / 20, sum };
}
