// think_scenarios.mjs — ห้องทดลองความคิด: สถานการณ์ → decide() → เทียบกับคำตอบที่ควรเป็น
// node scripts/think_scenarios.mjs → docs/THINK_SCENARIOS.md (ข้อไม่ตรง = ช่องโหว่ของกฎ ต้องแก้ data/triggers.json หรือ chains.json)
import fs from 'node:fs';
import path from 'node:path';
import { decide } from '../lib/chain.mjs';

const ROOT = path.resolve(path.dirname(new URL(import.meta.url).pathname), '..');
const base = { hp: 20, food: 20, dim: 'overworld', time: 3000, sheltered: true, inv: {}, nearby: [] };
const S = (o) => ({ ...base, ...o });
const mob = (type, dist, hostile = true) => ({ type, dist, hostile });

// [หมวด, สถานการณ์, state, goal, คาดว่า (rule id หรือ 'plan:<step id>')]
const CASES = [
  ['ตก', 'ตกจากหน้าผา 20 บล็อก มีถังน้ำ', S({ fallDistance: 20, inv: { water_bucket: 1 } }), 'first_night', 'falling'],
  ['ตก', 'ตก 20 บล็อก ในนรก มีแค่ถังน้ำ', S({ dim: 'the_nether', fallDistance: 20, inv: { water_bucket: 1, golden_boots: 1 } }), 'end', 'falling'],
  ['ตก', 'เดินขอบหน้าผาลึก 10', S({ edgeDepth: 10 }), 'iron_kit', 'edge'],
  ['ลาวา', 'ตกลงลาวา', S({ inLava: true, onFire: true }), 'iron_kit', 'in-lava'],
  ['ไฟ', 'ติดไฟ (โดนลูกไฟ)', S({ onFire: true }), 'iron_kit', 'on-fire'],
  ['น้ำ', 'ดำน้ำ อากาศเหลือ 3 วิ', S({ air: 3 }), 'iron_kit', 'drowning'],
  ['ติด', 'ทรายร่วงทับหัว', S({ suffocating: true }), 'first_night', 'suffocating'],
  ['ม็อบ', 'ครีปเปอร์ห่าง 2 บล็อก', S({ nearby: [mob('creeper', 2)] }), 'iron_kit', 'creeper-fusing'],
  ['ม็อบ', 'ซอมบี้ 3 ตัวห่าง 3', S({ nearby: [mob('zombie', 3), mob('zombie', 3.5), mob('zombie', 4)] }), 'iron_kit', 'hostile-close'],
  ['ม็อบ', 'โครงกระดูกห่าง 12 ในที่โล่ง', S({ nearby: [mob('skeleton', 12)] }), 'iron_kit', 'skeleton-open'],
  ['ม็อบ', 'เลือด 5 ซอมบี้ห่าง 3 มีขนมปัง', S({ hp: 5, food: 12, inv: { bread: 4 }, nearby: [mob('zombie', 3)] }), 'iron_kit', 'low-hp-in-combat'],
  ['ม็อบ', 'warden ห่าง 15', S({ nearby: [mob('warden', 15)] }), 'iron_kit', 'warden-near'],
  ['ม็อบ', 'enderman ห่าง 20 (ยังไม่โกรธ)', S({ nearby: [mob('enderman', 20, false)] }), 'end', 'enderman-near'],
  ['ม็อบ', 'แมงมุมห่าง 2 กลางคืน', S({ time: 15000, sheltered: false, nearby: [mob('spider', 2)] }), 'first_night', 'hostile-close'],
  ['ม็อบ', 'phantom โฉบลงมา (ไม่ได้นอน 3 คืน)', S({ time: 16000, sheltered: false, nearby: [mob('phantom', 6)] }), 'iron_kit', 'phantom-attack'],
  ['ม็อบ', 'witch ห่าง 8 กำลังปายา', S({ nearby: [mob('witch', 8)] }), 'iron_kit', 'witch-ranged'],
  ['อาหาร', 'เลือด 9 หิว 14 ไม่มีศัตรู มีสเต๊ก', S({ hp: 9, food: 14, inv: { cooked_beef: 3 } }), 'iron_kit', 'eat-to-regen'],
  ['อาหาร', 'หิว 5 มีขนมปัง', S({ food: 5, inv: { bread: 2 } }), 'iron_kit', 'hungry'],
  ['อาหาร', 'หิว 5 ไม่มีอาหารเลย', S({ food: 5 }), 'iron_kit', 'no-food'],
  ['อาหาร', 'โดน husk ตีจนติด Hunger', S({ food: 12, effects: ['hunger'], inv: { bread: 2 }, nearby: [mob('husk', 8)] }), 'iron_kit', 'eat-after-hunger-effect'],
  ['กลางคืน', 'ค่ำแล้ว อยู่ที่โล่ง ยังไม่มีเตียง', S({ time: 13500, sheltered: false, inv: { oak_log: 6 } }), 'first_night', 'night-exposed'],
  ['กลางคืน', 'จะนอนในนรก', S({ dim: 'the_nether', action: 'sleep', inv: { golden_boots: 1 } }), 'end', 'bed-wrong-dimension'],
  ['นรก', 'เข้านรกไม่มีทอง', S({ dim: 'the_nether' }), 'end', 'nether-no-gold'],
  ['นรก', 'ghast ยิงลูกไฟห่าง 30', S({ dim: 'the_nether', inv: { golden_boots: 1, bow: 1, arrow: 16 }, nearby: [mob('ghast', 30)] }), 'end', 'ghast-fireball'],
  ['นรก', 'piglin brute ห่าง 6 ใน bastion', S({ dim: 'the_nether', inv: { golden_boots: 1 }, nearby: [mob('piglin_brute', 6)] }), 'end', 'brute-near'],
  ['End', 'ยืนขอบเกาะ End ใต้เท้าเป็น void', S({ dim: 'the_end', edgeDepth: 200 }), 'end', 'edge'],
  ['End', 'โดน shulker ลอยขึ้น (levitation)', S({ dim: 'the_end', effects: ['levitation'] }), 'end', 'levitation'],
  ['ขุด', 'ขุดหินด้วยมือเปล่า', S({ digging: { block: 'stone', canHarvest: false } }), 'first_night', 'wrong-tool'],
  ['ขุด', 'ขุดแร่เหล็กด้วยอีเต้อไม้', S({ digging: { block: 'iron_ore', canHarvest: false }, inv: { wooden_pickaxe: 1 } }), 'iron_kit', 'wrong-tool'],
  ['ขุด', 'จะขุดบล็อกใต้เท้าตรง ๆ', S({ digging: { block: 'stone', canHarvest: true, belowFeet: true }, inv: { stone_pickaxe: 1 } }), 'iron_kit', 'dig-straight-down'],
  ['ว่าง', 'ยืนนิ่ง 40 วิ ไม่มีอะไรทำ', S({ idleSeconds: 40 }), 'first_night', 'plan:logs'],
  ['ความหนาว', 'ติดผงหิมะ กำลังแข็ง', S({ freezing: true }), 'iron_kit', 'freezing'],
  ['แผน', 'เกิดใหม่มือเปล่า', S({}), 'first_night', 'plan:logs'],
  ['แผน', 'มีซุง 4 ยังไม่มีโต๊ะ', S({ inv: { oak_log: 4 } }), 'first_night', 'plan:table'],
  ['แผน', 'มีอีเต้อเหล็ก+เตา ยังไม่มีเกราะ', S({ inv: { iron_pickaxe: 1, furnace: 1 } }), 'iron_kit', 'plan:chestplate'],
  ['แผน', 'ชุดเหล็กครบ จะไปนรก มีเพชร 1 อัน', S({ inv: { diamond_pickaxe: 1 } }), 'nether', 'plan:obsidian'],
  ['แผน', 'มีตา 12 ยังไม่เจอป้อม', S({ inv: { ender_eye: 12 } }), 'end', 'plan:stronghold'],
];

const rows = [], miss = [];
for (const [cat, title, st, goal, expect] of CASES) {
  const d = decide(st, goal);
  const got = d.mode === 'reflex' ? d.rule.id : d.mode === 'plan' ? `plan:${d.step.id}` : 'goal-done';
  const ok = got === expect;
  const what = d.mode === 'reflex' ? d.rule.do : d.mode === 'plan' ? d.step.title : 'จบเป้าหมาย';
  const kb = (d.mode === 'reflex' ? d.rule.kb : d.step?.kb ?? []).slice(0, 2).map((k) => `\`${k}\``).join(' ');
  rows.push(`| ${ok ? '✅' : '❌'} | ${cat} | ${title} | ${got} | ${what} | ${kb} |`);
  if (!ok) miss.push(`- **${title}** — ได้ \`${got}\` ควรเป็น \`${expect}\``);
}
const md = ['# THINK_SCENARIOS — เจอแบบนี้ บอตจะทำอะไร (ห้องทดลองความคิด)', '',
  '> สร้างโดย `node scripts/think_scenarios.mjs` · ใช้ `lib/chain.mjs` decide() กับกฎใน `data/triggers.json` + `data/chains.json`',
  '> ✅ = ตรงกับที่ควรทำ · ❌ = ช่องโหว่ของกฎ (ต้องแก้ data/) · **ยืนยันระดับจำลองเท่านั้น** — เอาไปเทียบตอนลองจริง', '',
  `ผล: ตรง ${CASES.length - miss.length}/${CASES.length}`, '',
  '| ผล | หมวด | สถานการณ์ | ตัดสินใจ | ทำอะไร | ความรู้ที่ใช้ |', '|---|---|---|---|---|---|', ...rows, '',
  '## ช่องโหว่ที่ต้องแก้', '', ...(miss.length ? miss : ['- ไม่มี']), ''];
fs.writeFileSync(path.join(ROOT, 'docs', 'THINK_SCENARIOS.md'), md.join('\n'));
console.log(`ตรง ${CASES.length - miss.length}/${CASES.length}`);
for (const m of miss) console.log(m);
