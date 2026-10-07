// chain.mjs — เชื่อมความรู้ใน kb/ ให้ใช้งานได้ทันที: 2 ชั้นทำงานพร้อมกัน
//  1) matchTriggers(state) — reflex: เงื่อนไขอันตราย/เร่งด่วน (data/triggers.json) เรียงตาม prio
//  2) nextStep(goal, state) — แผน: ขั้นแรกที่ยังไม่เสร็จของ chain (data/chains.json)
//  decide(state, goal) — ถ้ามี reflex prio ≥ REFLEX_MIN ทำ reflex ก่อน ไม่งั้นทำตามแผน
// state (สร้างจาก mineflayer ได้): { hp, food, dim, inLava, onFire, air, fallDistance, suffocating,
//   nearby:[{type, dist, hostile}], inv:{item:n}, worn:[item], flags:{}, time, sheltered, edgeDepth,
//   digging:{block, canHarvest, belowFeet, gravityAbove}, touching:[block], standingOn, inWater, idleSeconds, action, effects:[name], freezing }
import fs from 'node:fs';
import path from 'node:path';
import { chooseClutch } from './fall_safety.mjs';
import { blockInfo } from './kb.mjs';

// ม็อบ → ไฟล์ kb ที่มีจริง (ม็อบนรก/End อยู่คนละโฟลเดอร์) · ไม่เจอ = กฎรวม
const MOB_KB = {
  blaze: 'nether-end/m2-blaze.md', ghast: 'nether-end/m1-ghast.md', zombified_piglin: 'nether-end/m3-zombified-piglin.md',
  piglin: 'nether-end/m4-piglin-brute.md', piglin_brute: 'nether-end/m4-piglin-brute.md', hoglin: 'nether-end/m5-hoglin-zoglin.md',
  zoglin: 'nether-end/m5-hoglin-zoglin.md', magma_cube: 'nether-end/m6-magma-cube-strider.md', strider: 'nether-end/m6-magma-cube-strider.md',
  wither_skeleton: 'nether-end/nether-mobs-table.md', ender_dragon: 'nether-end/d3-ender-dragon.md', end_crystal: 'nether-end/d3-ender-dragon.md',
  shulker: 'nether-end/d5-shulker-levitation.md', wither: 'nether-end/wither.md', giant: 'mobs/_rules.md',
};
const KB_DIR = path.join(path.resolve(path.dirname(new URL(import.meta.url).pathname), '..'), 'kb');
export function mobKb(type) {
  if (MOB_KB[type]) return MOB_KB[type];
  const p = `mobs/${type}.md`;
  return fs.existsSync(path.join(KB_DIR, p)) ? p : 'mobs/_rules.md';
}
const tagsOf = (name) => blockInfo(name)?.tags ?? [];

const ROOT = path.resolve(path.dirname(new URL(import.meta.url).pathname), '..');
const load = (f) => JSON.parse(fs.readFileSync(path.join(ROOT, 'data', f), 'utf8'));
export const TRIGGERS = load('triggers.json');
export const CHAINS = load('chains.json');
export const REFLEX_MIN = 50;

const FOODS = ['cooked_beef', 'cooked_porkchop', 'cooked_mutton', 'cooked_chicken', 'cooked_cod', 'cooked_salmon', 'bread', 'baked_potato', 'golden_apple', 'enchanted_golden_apple', 'carrot', 'apple', 'cooked_rabbit', 'golden_carrot'];
const count = (s, item) => (s.inv?.[item] ?? 0) + ((s.worn ?? []).includes(item) ? 1 : 0);
const sumAny = (s, alts) => alts.split('|').reduce((n, it) => n + count(s, it), 0);

function nearMatch(s, q) {
  return (s.nearby ?? []).some((e) => e.dist <= q.within && (!q.type || q.type.includes(e.type)) && (!q.hostile || e.hostile) && (!q.provoked || e.provoked) && (!q.notType || !q.notType.includes(e.type)) && (!q.charged || e.charged) && (!q.armored || e.armored));
}

// เงื่อนไขทุก key ต้องจริง (AND) · anyOf = OR
export function test(c, s) {
  for (const [k, v] of Object.entries(c)) {
    const ok = {
      action: () => s.action === v,
      dim: () => s.dim === v,
      notDim: () => s.dim !== v,
      inLava: () => !!s.inLava === v,
      onFire: () => !!s.onFire === v,
      suffocating: () => !!s.suffocating === v,
      sheltered: () => !!s.sheltered === v,
      hpBelow: () => s.hp < v,
      foodBelow: () => s.food < v,
      airBelow: () => (s.air ?? 15) < v,
      fallingOver: () => (s.fallDistance ?? 0) > v,
      edgeDepthOver: () => (s.edgeDepth ?? 0) > v,
      idleSecondsOver: () => (s.idleSeconds ?? 0) > v,
      timeBetween: () => s.time >= v[0] && s.time <= v[1],
      near: () => nearMatch(s, v),
      notNear: () => !nearMatch(s, v),
      hasFood: () => FOODS.some((f) => count(s, f) > 0) === v,
      has: () => Object.entries(v).every(([it, n]) => count(s, it) >= n),
      hasOrWear: () => Object.entries(v).every(([it, n]) => count(s, it) >= n),
      hasAny: () => Object.entries(v).every(([alts, n]) => sumAny(s, alts) >= n),
      hasAnySuffix: () => Object.entries(v).every(([suf, n]) => Object.entries(s.inv ?? {}).filter(([it]) => it.endsWith(suf)).reduce((a, [, x]) => a + x, 0) >= n),
      lacksAll: () => v.every((it) => count(s, it) === 0),
      flag: () => !!s.flags?.[v],
      notFlag: () => !s.flags?.[v],
      clutch: () => !!chooseClutch({ inventory: Object.keys(s.inv ?? {}).filter((k) => s.inv[k] > 0), dimension: s.dim, wallAdjacent: !!s.wallAdjacent, fallDistance: s.fallDistance ?? null, hp: s.hp ?? 20 }) === v,
      teammateNeeds: () => (s.team ?? []).some((m) => m.hp < v.hpBelow && m.dist <= v.within),
      teamAny: () => (s.team ?? []).some((m) => m.dist <= (v.within ?? 1e9) && (v.hpBelow == null || m.hp < v.hpBelow) && (v.foodBelow == null || (m.food ?? 20) < v.foodBelow)),
      over: () => Object.entries(v).every(([kk, vv]) => s[kk] != null && s[kk] > vv),
      under: () => Object.entries(v).every(([kk, vv]) => s[kk] != null && s[kk] < vv),
      flagAny: () => v.some((f) => !!s.flags?.[f]),
      nearBlockAll: () => v.every((q) => (s.nearBlocks ?? []).some((b) => q.type.includes(b.type) && b.dist <= q.within)),
      selfHpAtLeast: () => s.hp >= v,
      countNear: () => (s.nearby ?? []).filter((e) => e.dist <= v.within && (!v.hostile || e.hostile) && (!v.provoked || e.provoked) && (!v.armored || e.armored)).length >= v.atLeast,
      nearBlock: () => (s.nearBlocks ?? []).some((b) => v.type.includes(b.type) && b.dist <= v.within),
      woodNearby: () => (s.woodNearby ?? true) === v,
      inWater: () => !!s.inWater === v,
      actionIn: () => v.includes(s.action),
      wearsAny: () => v.some((it) => (s.worn ?? []).includes(it)),
      hasAnyEffect: () => v.some((x) => (s.effects ?? []).includes(x)),
      notWearsAny: () => !v.some((it) => (s.worn ?? []).includes(it)),
      attackingNeutral: () => !!(s.action === 'attack' && s.target && !s.target.hostile && !s.target.provoked) === v,
      touchingTag: () => [...(s.touching ?? []), ...(s.standingOn ? [s.standingOn] : [])].some((b) => tagsOf(b).includes(v)),
      hasEffect: () => (s.effects ?? []).includes(v),
      freezing: () => !!s.freezing === v,
      digging: () => !!s.digging && Object.entries(v).every(([kk, vv]) => s.digging[kk] === vv),
      anyOf: () => v.some((cc) => test(cc, s)),
    }[k];
    if (!ok) throw new Error(`เงื่อนไขไม่รู้จัก: ${k}`);
    if (!ok()) return false;
  }
  return true;
}

// reflex ที่เข้าเงื่อนไข เรียง prio มาก→น้อย · ใส่ไฟล์ kb ของม็อบที่ใกล้สุดให้ด้วย
export function matchTriggers(state) {
  return TRIGGERS.filter((t) => test(t.when, state))
    .map((t) => {
      const kb = [...t.kb];
      if (t.kbByMob) {
        const m = (state.nearby ?? []).filter((e) => e.hostile || e.provoked).sort((a, b) => a.dist - b.dist)[0];
        if (m) kb.unshift(mobKb(m.type));
      }
      return { ...t, kb };
    })
    .sort((a, b) => b.prio - a.prio);
}

// ขั้นแรกของ goal ที่ยังไม่เสร็จ (null = จบ chain)
export function nextStep(goal, state) {
  const steps = CHAINS[goal];
  if (!steps) throw new Error(`ไม่มี chain: ${goal}`);
  // step ที่มี roles ใช้เฉพาะบทบาทนั้น (เช่น อีเต้อเหล็กให้นักขุด 1 ตัว — กฎ jing) · ไม่ระบุ role = ทำทุกขั้น
  const i = steps.findIndex((st) => !(st.roles && state.role && !st.roles.includes(state.role)) && !test(st.done, state));
  return i < 0 ? null : { goal, index: i, total: steps.length, ...steps[i] };
}

// veto = "ห้ามทำ" (เช่น นอนในนรก, ขุดลงตรง) — บังคับใช้เสมอ แต่ไม่แย่งลำดับกับ reflex ที่ต้องทำ (เช่น หนีลาวา)
export function decide(state, goal) {
  const all = matchTriggers(state);
  const vetoes = all.filter((t) => t.veto);
  const reflex = all.filter((t) => !t.veto);
  if (reflex.length && reflex[0].prio >= REFLEX_MIN) return { mode: 'reflex', rule: reflex[0], also: reflex.slice(1, 3), vetoes };
  if (vetoes.length) return { mode: 'reflex', rule: vetoes[0], also: reflex.slice(0, 2), vetoes };
  const step = nextStep(goal, state);
  return step ? { mode: 'plan', step, minor: reflex, vetoes } : { mode: 'goal-done', goal, minor: reflex, vetoes };
}
