// fuzz_decide.mjs — สร้างทุกชุดความเป็นไปได้ (เลือด × หิว × มิติ × เวลา × อันตราย × ม็อบ × ของ) → decide()
// ตรวจ invariant (กฎที่ต้องไม่ผิด) → docs/DECISION_COVERAGE.md · node scripts/fuzz_decide.mjs
import fs from 'node:fs';
import path from 'node:path';
import { decide } from '../lib/chain.mjs';

const ROOT = path.resolve(path.dirname(new URL(import.meta.url).pathname), '..');
const HP = [2, 6, 10, 15, 20];
const FOOD = [3, 6, 10, 17, 20];
const DIM = ['overworld', 'the_nether', 'the_end'];
const TIME = [3000, 15000];
const HAZ = {
  none: {}, lava: { inLava: true, onFire: true }, fire: { onFire: true }, fall10: { fallDistance: 10 }, fall30: { fallDistance: 30 },
  drowning: { air: 2 }, suffocating: { suffocating: true }, freezing: { freezing: true }, edge: { edgeDepth: 10 }, levitation: { effects: ['levitation'] },
};
const MOB = {
  none: [], zombie2: [{ type: 'zombie', dist: 2, hostile: true }], zombie7: [{ type: 'zombie', dist: 7, hostile: true }], creeper2: [{ type: 'creeper', dist: 2, hostile: true }],
  skeleton12: [{ type: 'skeleton', dist: 12, hostile: true }], warden4: [{ type: 'warden', dist: 4, hostile: true }],
  enderman20: [{ type: 'enderman', dist: 20, hostile: false }], ghast30: [{ type: 'ghast', dist: 30, hostile: true }],
  brute6: [{ type: 'piglin_brute', dist: 6, hostile: true }], phantom6: [{ type: 'phantom', dist: 6, hostile: true }], witch8: [{ type: 'witch', dist: 8, hostile: true }],
};
const INV = { empty: {}, food: { bread: 4 }, water: { water_bucket: 1, bread: 4 }, nether_kit: { hay_block: 2, bread: 4, golden_boots: 1 } };
const GOAL = { overworld: 'iron_kit', the_nether: 'end', the_end: 'dragon' };

const DANGER = (s) => s.inLava || s.onFire || (s.air ?? 15) < 5 || s.suffocating || (s.fallDistance ?? 0) > 3 || s.freezing || (s.effects ?? []).includes('levitation')
  || (s.nearby ?? []).some((e) => (e.type === 'creeper' && e.dist <= 3) || (e.type === 'warden' && e.dist <= 20));
const INV_RULES = [
  ['อยู่ในลาวา → ต้องหนีลาวาก่อนทุกอย่าง', (s, d) => !s.inLava || (d.mode === 'reflex' && d.rule.id === 'in-lava')],
  ['สถานะอันตราย → ห้ามทำแผนต่อ (ต้องเป็น reflex)', (s, d) => !DANGER(s) || d.mode === 'reflex'],
  ['ห้ามกินตอนศัตรูอยู่ในระยะ 6', (s, d) => !(d.mode === 'reflex' && ['eat-to-regen', 'hungry', 'eat-after-hunger-effect'].includes(d.rule.id) && (s.nearby ?? []).some((e) => e.hostile && e.dist <= 6))],
  ['ห้ามสั่ง "สู้" ตอน warden อยู่ใกล้', (s, d) => !((s.nearby ?? []).some((e) => e.type === 'warden') && d.mode === 'reflex' && d.rule.id === 'hostile-close')],
  ['นรก: ห้ามเลือก clutch ด้วยถังน้ำ', (s, d) => !(s.dim === 'the_nether' && d.mode === 'reflex' && d.rule.id === 'falling' && !s.inv.hay_block)],
  ['เลือด <8 และไม่มีอันตราย/ศัตรู → ห้ามทำแผนต่อ (ต้องพักฟื้น/กิน)', (s, d) => !(s.hp < 8 && !DANGER(s) && !(s.nearby ?? []).some((e) => e.hostile && e.dist <= 16)) || d.mode === 'reflex'],
  ['ศัตรูอยู่ในระยะ 10 → ห้ามทำแผนต่อเฉย ๆ', (s, d) => !(s.nearby ?? []).some((e) => e.hostile && e.dist <= 10) || d.mode === 'reflex'],
  ['ทุกการตัดสินใจต้องชี้ความรู้ใน kb', (s, d) => d.mode === 'goal-done' || (d.mode === 'reflex' ? d.rule.kb.length : d.step.kb.length) > 0],
];

const viol = Object.fromEntries(INV_RULES.map(([n]) => [n, []]));
const topCount = {};
const table = {}; // hazard|mob → {decision: n}
let n = 0;
for (const hp of HP) for (const food of FOOD) for (const dim of DIM) for (const time of TIME)
  for (const [hk, h] of Object.entries(HAZ)) for (const [mk, m] of Object.entries(MOB)) for (const [ik, inv] of Object.entries(INV)) {
    const s = { hp, food, dim, time, sheltered: time < 12542, inv, nearby: m, ...h };
    const d = decide(s, GOAL[dim]);
    n++;
    const key = d.mode === 'reflex' ? d.rule.id : d.mode === 'plan' ? `plan:${d.step.id}` : 'goal-done';
    topCount[key] = (topCount[key] ?? 0) + 1;
    const tk = `${hk} | ${mk}`;
    (table[tk] ??= {})[key] = (table[tk][key] ?? 0) + 1;
    for (const [name, f] of INV_RULES) if (!f(s, d) && viol[name].length < 5) viol[name].push(`hp${hp} food${food} ${dim} t${time} ${hk} ${mk} ${ik} → ${key}`);
  }

const total = Object.values(viol).reduce((a, v) => a + v.length, 0);
const md = ['# DECISION_COVERAGE — ทุกชุดความเป็นไปได้ → บอตตัดสินใจอะไร', '',
  `> สร้างโดย \`node scripts/fuzz_decide.mjs\` · ${n.toLocaleString()} สถานะ (เลือด ${HP.length} × หิว ${FOOD.length} × มิติ 3 × เวลา 2 × อันตราย ${Object.keys(HAZ).length} × ม็อบ ${Object.keys(MOB).length} × ของ ${Object.keys(INV).length})`,
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
md.push('', '## 3. การตัดสินใจที่ถูกเลือกบ่อยสุด', '', '| การตัดสินใจ | จำนวนสถานะ |', '|---|---|',
  ...Object.entries(topCount).sort((a, b) => b[1] - a[1]).map(([k, c]) => `| ${k} | ${c.toLocaleString()} |`), '');
fs.writeFileSync(path.join(ROOT, 'docs', 'DECISION_COVERAGE.md'), md.join('\n'));
console.log(`${n} สถานะ · invariant ผิด ${total} ตัวอย่าง`);
for (const [k, v] of Object.entries(viol)) if (v.length) console.log(`✗ ${k}\n   ${v.slice(0, 3).join('\n   ')}`);
