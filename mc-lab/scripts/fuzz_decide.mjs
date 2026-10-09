// fuzz_decide.mjs — สร้างทุกชุดความเป็นไปได้ (เลือด × หิว × มิติ × เวลา × อันตราย × ม็อบ × ของ) → decide()
// ตรวจ invariant (กฎที่ต้องไม่ผิด) → docs/DECISION_COVERAGE.md · node scripts/fuzz_decide.mjs
import fs from 'node:fs';
import path from 'node:path';
import { decide } from '../lib/chain.mjs';

const ROOT = path.resolve(path.dirname(new URL(import.meta.url).pathname), '..');
const HP = [1, 3, 5, 7, 10, 13, 16, 20];
const FOOD = [0, 3, 6, 10, 15, 17, 20];
const DIM = ['overworld', 'the_nether', 'the_end'];
const TIME = { day: { time: 3000, sheltered: true }, dusk: { time: 12600, sheltered: false }, nightOpen: { time: 15000, sheltered: false }, nightHome: { time: 15000, sheltered: true } };
const HAZ = {
  none: {}, lava: { inLava: true, onFire: true }, fire: { onFire: true }, fall5: { fallDistance: 5 }, fall10: { fallDistance: 10 }, fall30: { fallDistance: 30 }, fall60: { fallDistance: 60 },
  drowning: { air: 2 }, suffocating: { suffocating: true }, freezing: { freezing: true }, edge: { edgeDepth: 10 }, levitation: { effects: ['levitation'] },
  fall10fire: { fallDistance: 10, onFire: true }, drownFire: { air: 3, onFire: true },
};
const m = (type, dist, hostile = true) => ({ type, dist, hostile });
const MOB = {
  none: [], zombie2: [m('zombie', 2)], zombie7: [m('zombie', 7)], husk3: [m('husk', 3)], drowned3: [m('drowned', 3)], spider3: [m('spider', 3)],
  creeper2: [m('creeper', 2)], creeper8: [m('creeper', 8)], skeleton6: [m('skeleton', 6)], skeleton12: [m('skeleton', 12)],
  warden4: [m('warden', 4)], warden25: [m('warden', 25)], enderman20: [m('enderman', 20, false)], ghast30: [m('ghast', 30)],
  brute6: [m('piglin_brute', 6)], blaze10: [m('blaze', 10)], witherSk3: [m('wither_skeleton', 3)], breeze8: [m('breeze', 8)],
  pair_creeper_zombie: [m('creeper', 2), m('zombie', 2)], pair_skeleton_zombie: [m('skeleton', 12), m('zombie', 3)],
};
const INV = {
  empty: {}, food: { bread: 4 }, water: { water_bucket: 1, bread: 4 }, nether_kit: { hay_block: 2, bread: 4, golden_boots: 1 },
  full: { water_bucket: 1, cooked_beef: 8, iron_sword: 1, shield: 1, golden_boots: 1, golden_apple: 2, totem_of_undying: 1 },
  gapple_only: { golden_apple: 1 }, pearl_only: { ender_pearl: 2 }, ladder_wall: { ladder: 6, wall: true },
};
const BIG = process.argv.includes('--10m');
const CTX_ALL = {
  normal: {}, desert: { woodNearby: false }, sculk: { nearBlocks: [{ type: 'sculk_shrieker', dist: 5 }] },
  teammate: { team: [{ name: 'Fable', hp: 4, dist: 10 }] }, digWrong: { digging: { block: 'stone', canHarvest: false } },
  digDown: { digging: { block: 'stone', canHarvest: true, belowFeet: true } }, sleep: { action: 'sleep' },
  poisonDied: { effects: ['poison', 'hunger'], flags: { justDied: true } },
};
// ค่าเริ่มต้น ~2M: ใช้บริบทรวม 2 แบบ (ปกติ + สุ่มบริบทพิเศษต่อสถานะแบบกำหนดได้) · --10m = ทุกบริบท
const CTX = BIG ? CTX_ALL : { normal: {}, mixed: null };
const MIXED = Object.values(CTX_ALL).slice(1);
const GOAL = { overworld: 'iron_kit', the_nether: 'end', the_end: 'dragon' };
const RANGED = ['skeleton', 'stray', 'bogged', 'parched', 'witch', 'blaze', 'breeze', 'ghast', 'pillager'];
const NETHER_CLUTCH = ['hay_block', 'slime_block', 'ender_pearl', 'powder_snow_bucket', 'twisting_vines', 'weeping_vines'];

const DANGER = (s) => s.inLava || s.onFire || (s.air ?? 15) < 5 || s.suffocating || (s.fallDistance ?? 0) > 3 || s.freezing || (s.effects ?? []).includes('levitation')
  || (s.nearby ?? []).some((e) => (e.type === 'creeper' && e.dist <= 3) || (e.type === 'warden' && e.dist <= 20));
const top = (d) => (d.mode === 'reflex' ? d.rule.id : d.mode);
const INV_RULES = [
  ['อยู่ในลาวา → ต้องหนีลาวาก่อนทุกอย่าง', (s, d) => !s.inLava || top(d) === 'in-lava'],
  ['สถานะอันตราย → ห้ามทำแผนต่อ (ต้องเป็น reflex)', (s, d) => !DANGER(s) || d.mode === 'reflex'],
  ['ห้ามกินตอนศัตรูอยู่ในระยะ 6', (s, d) => !(['eat-to-regen', 'hungry', 'eat-after-hunger-effect'].includes(top(d)) && (s.nearby ?? []).some((e) => e.hostile && e.dist <= 6))],
  ['ห้ามสั่ง "สู้" ตอน warden อยู่ใกล้', (s, d) => !((s.nearby ?? []).some((e) => e.type === 'warden') && top(d) === 'hostile-close')],
  ['นรก: มีแค่ถังน้ำ ห้ามเลือก clutch (น้ำระเหย)', (s, d) => !(s.dim === 'the_nether' && top(d) === 'falling' && !NETHER_CLUTCH.some((k) => s.inv[k]) && !s.inv.ladder)],
  ['เลือด <8 และไม่มีอันตราย/ศัตรู → ห้ามทำแผนต่อ', (s, d) => !(s.hp < 8 && !DANGER(s) && !(s.nearby ?? []).some((e) => e.hostile && e.dist <= 16)) || d.mode === 'reflex'],
  ['ศัตรูอยู่ในระยะ 10 → ห้ามทำแผนต่อเฉย ๆ', (s, d) => !(s.nearby ?? []).some((e) => e.hostile && e.dist <= 10) || d.mode === 'reflex'],
  ['ม็อบยิงไกลในระยะ 16 → ห้าม "ยืนรอให้เข้ามา"', (s, d) => !((s.nearby ?? []).some((e) => RANGED.includes(e.type) && e.dist <= 16) && top(d) === 'hostile-approach')],
  ['ครีปเปอร์ + ซอมบี้ประชิด → จัดการครีปเปอร์ก่อน (เว้นอันตรายที่สูงกว่า)', (s, d) => !((s.nearby ?? []).some((e) => e.type === 'creeper' && e.dist <= 3) && top(d) === 'hostile-close')],
  ['นอนนอก overworld → ต้องมี veto ห้ามนอนเสมอ', (s, d) => !(s.action === 'sleep' && s.dim !== 'overworld') || d.vetoes.some((v) => v.id === 'bed-wrong-dimension')],
  ['ขุดลงตรง → ต้องมี veto · เครื่องมือผิด → ห้ามทำแผนต่อเฉย ๆ', (s, d) => (!s.digging?.belowFeet || d.vetoes.some((v) => v.id === 'dig-straight-down')) && (!(s.digging && !s.digging.canHarvest) || d.mode === 'reflex')],
  ['เพิ่งตาย + ปลอดภัย → ต้องกลับไปเก็บของ (หรือเรื่องที่ด่วนกว่า)', (s, d) => !(s.flags?.justDied && !DANGER(s) && s.hp >= 8 && !(s.nearby ?? []).some((e) => e.hostile && e.dist <= 16)) || d.mode === 'reflex'],
  ['ทะเลทรายไม่มีไม้ + ปลอดภัย → ห้ามวนหาไม้แบบเดิม (plan:logs)', (s, d) => !(s.woodNearby === false && !DANGER(s)) || top(d) !== 'plan'  || d.step.id !== 'logs'],
  ['ทุกการตัดสินใจต้องชี้ความรู้ใน kb', (s, d) => d.mode === 'goal-done' || (d.mode === 'reflex' ? d.rule.kb.length : d.step.kb.length) > 0],
];

const viol = Object.fromEntries(INV_RULES.map(([n]) => [n, []]));
const topCount = {};
const table = {}; // hazard|mob → {decision: n}
const ctxTable = {}; // ctx → {decision: n}
let n = 0;
for (const hp of HP) for (const food of FOOD) for (const dim of DIM) for (const [tk0, tm] of Object.entries(TIME))
  for (const [hk, h] of Object.entries(HAZ)) for (const [mk, mb] of Object.entries(MOB)) for (const [ik, inv] of Object.entries(INV)) for (const [ck, cx] of Object.entries(CTX)) {
    const { wall, ...items } = inv;
    const s = { hp, food, dim, ...tm, inv: items, wallAdjacent: !!wall, nearby: mb, ...h, ...(cx ?? MIXED[n % MIXED.length]) };
    const d = decide(s, GOAL[dim]);
    n++;
    const key = d.mode === 'reflex' ? d.rule.id : d.mode === 'plan' ? `plan:${d.step.id}` : 'goal-done';
    topCount[key] = (topCount[key] ?? 0) + 1;
    const tk = `${hk} | ${mk}`;
    (table[tk] ??= {})[key] = (table[tk][key] ?? 0) + 1;
    (ctxTable[ck] ??= {})[key] = (ctxTable[ck][key] ?? 0) + 1;
    for (const [name, f] of INV_RULES) if (!f(s, d) && viol[name].length < 5) viol[name].push(`hp${hp} food${food} ${dim} ${tk0} ${hk} ${mk} ${ik} ${ck} → ${key}`);
  }

const total = Object.values(viol).reduce((a, v) => a + v.length, 0);
const md = ['# DECISION_COVERAGE — ทุกชุดความเป็นไปได้ → บอตตัดสินใจอะไร', '',
  `> สร้างโดย \`node scripts/fuzz_decide.mjs\` · ${n.toLocaleString()} สถานะ (เลือด ${HP.length} × หิว ${FOOD.length} × มิติ 3 × เวลา ${Object.keys(TIME).length} × อันตราย ${Object.keys(HAZ).length} × ม็อบ ${Object.keys(MOB).length} × ของ ${Object.keys(INV).length} × บริบท ${Object.keys(CTX).length})`,
  '> ใช้ตอนลองจริง: ดูแถวที่ตรงกับเหตุการณ์ → บอตควรทำตามคอลัมน์ "ส่วนใหญ่ทำ" · ถ้าบอตจริงทำต่าง = บั๊ก หรือกฎใน data/ ต้องปรับ · ยืนยันระดับจำลองเท่านั้น', '',
  '## 1. กฎที่ต้องไม่ผิด (invariant)', '', '| กฎ | ผล | ตัวอย่างที่ผิด |', '|---|---|---|',
  ...INV_RULES.map(([name]) => `| ${name} | ${viol[name].length ? `❌ ${viol[name].length}+` : '✅ ผ่านทุกสถานะ'} | ${viol[name].slice(0, 2).join('<br>')} |`), '',
  '## 2. ตารางตัดสินใจ: อันตราย × ม็อบ (รวมทุกเลือด/หิว/มิติ/เวลา/ของ)', '', '| อันตราย | ม็อบ | ส่วนใหญ่ทำ | อื่น ๆ |', '|---|---|---|---|'];
for (const [k, v] of Object.entries(table)) {
  const [hk, mk] = k.split(' | ');
  const sorted = Object.entries(v).sort((a, b) => b[1] - a[1]);
  const tot = sorted.reduce((a, [, c]) => a + c, 0);
  const pct = (c) => `${Math.round((c / tot) * 100)}%`;
  md.push(`| ${hk} | ${mk} | ${sorted[0][0]} (${pct(sorted[0][1])}) | ${sorted.slice(1, 4).map(([d, c]) => `${d} ${pct(c)}`).join(' · ')} |`);
}
md.push('', '## 3. ตามบริบท', '', '| บริบท | ส่วนใหญ่ทำ | อื่น ๆ |', '|---|---|---|');
for (const [ck, v] of Object.entries(ctxTable)) {
  const sorted = Object.entries(v).sort((a, b) => b[1] - a[1]); const tot = sorted.reduce((a, [, c]) => a + c, 0);
  md.push(`| ${ck} | ${sorted[0][0]} (${Math.round((sorted[0][1] / tot) * 100)}%) | ${sorted.slice(1, 5).map(([dd, c]) => `${dd} ${Math.round((c / tot) * 100)}%`).join(' · ')} |`);
}
md.push('', '## 4. การตัดสินใจที่ถูกเลือกบ่อยสุด', '', '| การตัดสินใจ | จำนวนสถานะ |', '|---|---|',
  ...Object.entries(topCount).sort((a, b) => b[1] - a[1]).map(([k, c]) => `| ${k} | ${c.toLocaleString()} |`), '');
fs.writeFileSync(path.join(ROOT, 'docs', 'DECISION_COVERAGE.md'), md.join('\n'));
console.log(`${n} สถานะ · invariant ผิด ${total} ตัวอย่าง`);
for (const [k, v] of Object.entries(viol)) if (v.length) console.log(`✗ ${k}\n   ${v.slice(0, 3).join('\n   ')}`);
