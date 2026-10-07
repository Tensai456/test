// survival_sim.mjs — บอต vs ม็อบ (1 มิติ, รายติ๊ก) · ใช้ฟิสิกส์/ดาเมจชุดเดียวกับ PvP
// ม็อบอยู่ฝั่ง +x ของบอต · ใช้เทียบ "อุปกรณ์ × กลยุทธ์ × ฉากม็อบ" → % รอด ไม่ใช่ค่าจริง

import { weapon, ARMOR } from '../pvp/weapons.mjs';
import { meleeRaw, armorReduce, applyHit } from '../pvp/damage.mjs';
import { newBody, tick as physTick, applyKnockback, attackerAfterSprintHit, isFalling } from '../pvp/physics.mjs';
import { rng32 } from '../pvp/duel_sim.mjs';
import { MOBS, explosionDamage } from './mobs.mjs';

const WALK_PER_TICK = 4.317 / 20;

export const DEFAULT_BOT = {
  weapon: 'iron_sword', armor: 'iron', hp: 20, food: 20,
  aim: 0.9, crit: false,
  creeperTactic: 'hit_back',   // 'hit_back' = ตีแรงวิ่งแล้วถอย · 'stand' = ยืนฟันอย่างเดียว · 'flee' = หนีไกล
  eatBelow: 0,                 // กินเมื่อ HP < ค่านี้ (ใช้ 1.6 วิ ฟื้น 4 HP — ASSUME แบบหยาบ, ไม่ใช่สูตรอิ่ม/ฟื้นจริง)
  meals: 0,
};

function mkMob(type, x) {
  const m = MOBS[type];
  return { type, m, hp: m.hp, body: newBody(x), lastHurt: -99, lastDmg: 0, cdAt: 0, fuse: -1, dead: false };
}

function hitMob(bot, mob, t, rnd) {
  const since = t - bot.lastAtk;
  const falling = isFalling(bot.body);
  const r = meleeRaw(bot.w, { ticksSinceAttack: since, falling, sprinting: bot.sprint });
  bot.lastAtk = t; bot.st.swings++;
  if (rnd() >= bot.p.aim) return;
  if (applyHit(mob, r.dmg, t) > 0) {
    bot.st.hits++; if (r.crit) bot.st.crits++;
    applyKnockback(mob.body, 1, r.sprintKb ? 1 : 0, 0);
    if (r.sprintKb) { bot.sprint = false; attackerAfterSprintHit(bot.body); }
  }
}

function hurtBot(bot, raw, t) {
  const d = applyHit(bot, armorReduce(raw, bot.arm), t);
  if (d > 0) applyKnockback(bot.body, -1, 0, bot.arm.kbRes);
  return d;
}

// scenario: [{type, dist}] · คืน { alive, hp, ticks, ... }
export function survive(botProfile, scenario, { seed = 1, maxTicks = 1200 } = {}) {
  const rnd = rng32(seed);
  const p = { ...DEFAULT_BOT, ...botProfile };
  const bot = { p, w: weapon(p.weapon), arm: ARMOR[p.armor], body: newBody(0), hp: p.hp, lastHurt: -99, lastDmg: 0,
    lastAtk: -99, sprint: p.food > 6, meals: p.meals, eatUntil: -1, st: { swings: 0, hits: 0, crits: 0, dmgTaken: 0, blasts: 0 } };
  const mobs = scenario.map(s => mkMob(s.type, s.dist));

  for (let t = 0; t < maxTicks; t++) {
    const live = mobs.filter(m => !m.dead);
    if (live.length === 0) return { alive: true, hp: bot.hp, ticks: t, ...bot.st };
    live.sort((a, b) => a.body.x - b.body.x);
    const tgt = live[0];
    const dist = Math.max(0, tgt.body.x - bot.body.x - 0.6);
    const input = { move: 0, sprint: false, jump: false, slow: 1 };
    const ready = t - bot.lastAtk + 0.5 >= bot.w.cooldown * 0.95;

    // กิน
    if (t < bot.eatUntil) input.slow = 0.2;
    else if (bot.hp < p.eatBelow && bot.meals > 0) { bot.meals--; bot.eatUntil = t + 32; bot._heal = t + 32; }
    if (bot._heal === t) bot.hp = Math.min(20, bot.hp + 4);

    // ครีปเปอร์ติดชนวน + กลยุทธ์
    const fusing = tgt.type === 'creeper' && tgt.fuse >= 0;
    if (fusing && p.creeperTactic !== 'stand' && !(p.creeperTactic === 'hit_back' && ready && dist <= bot.w.reach)) {
      input.move = -1; input.sprint = p.food > 6;
    } else if (t >= bot.eatUntil) {
      if (dist > bot.w.reach - 0.3) { input.move = 1; input.sprint = p.food > 6; bot.sprint = input.sprint; }
      if (p.crit && bot.body.onGround && dist <= bot.w.reach + 0.5 && t - bot.lastAtk + 7 >= bot.w.cooldown) { input.jump = true; bot.sprint = false; input.sprint = false; }
      const critOk = !p.crit || isFalling(bot.body);
      if (dist <= bot.w.reach && ready && critOk && t >= bot.eatUntil) hitMob(bot, tgt, t, rnd);
    }
    physTick(bot.body, input);

    // ม็อบ
    for (const mob of live) {
      const d = Math.max(0, mob.body.x - bot.body.x - 0.6);
      const m = mob.m;
      let move = 0;
      if (m.kind === 'melee') {
        if (d > m.reach - 0.3) move = -1;
        else if (t >= mob.cdAt) { mob.cdAt = t + m.cd; const x = hurtBot(bot, m.dmg, t); bot.st.dmgTaken += x; }
      } else if (m.kind === 'ranged') {
        move = d > m.keep + 1 ? -1 : d < m.keep - 2 ? 1 : 0;
        if (d <= m.range && t >= mob.cdAt) {
          mob.cdAt = t + m.cd;
          const hitP = Math.max(0.2, 0.9 - d / 30);              // ASSUME: ยิงโดนลดตามระยะ
          if (rnd() < hitP) { const x = hurtBot(bot, m.dmgMin + Math.floor(rnd() * (m.dmgMax - m.dmgMin + 1)), t); bot.st.dmgTaken += x; }
        }
      } else if (m.kind === 'creeper') {
        if (mob.fuse < 0) { if (d <= m.fuseRange) mob.fuse = 0; else move = -1; }
        else if (d > m.cancelRange) mob.fuse = -1;
        else if (++mob.fuse >= m.fuse) {
          const raw = explosionDamage(d + 0.6, m.power);
          const x = raw > 0 ? hurtBot(bot, raw, t) : 0;
          bot.st.dmgTaken += x; bot.st.blasts++; mob.dead = true;
        }
      }
      physTick(mob.body, { move, slow: m.speed / WALK_PER_TICK });
      if (mob.hp <= 0) mob.dead = true;
    }
    if (bot.hp <= 0) return { alive: false, hp: 0, ticks: t, ...bot.st };
  }
  return { alive: true, hp: bot.hp, ticks: maxTicks, timeout: true, ...bot.st };
}

export function surviveRate(bot, scenario, { n = 300, seed = 1 } = {}) {
  let alive = 0, hp = 0, ticks = 0, blasts = 0;
  for (let i = 0; i < n; i++) {
    const r = survive(bot, scenario, { seed: seed + i });
    if (r.alive) { alive++; hp += r.hp; }
    ticks += r.ticks; blasts += r.blasts;
  }
  return { n, rate: alive / n, avgHpLeft: alive ? hp / alive : 0, avgSec: ticks / n / 20, blastsPerRun: blasts / n };
}
