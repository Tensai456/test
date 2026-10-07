// sim_build.mjs — ออกแบบบ้าน + จำลองบอตวางทุกบล็อกจนเสร็จ → docs/HOUSE_BUILD.md · node scripts/sim_build.mjs [W] [L]
import fs from 'node:fs';
import path from 'node:path';
import { cottage, countBlocks, rawMaterials } from '../lib/home/house_design.mjs';
import { simulateBuild, layers } from '../lib/home/build_sim.mjs';

const ROOT = path.resolve(path.dirname(new URL(import.meta.url).pathname), '..');
const [W = 9, L = 11] = process.argv.slice(2).map(Number);
const h = cottage({ W, L });
const items = countBlocks(h.blocks);
const raw = rawMaterials(items);
const sim = simulateBuild(h);
const logs = Object.entries(raw.need).filter(([k]) => k.endsWith('_log')).reduce((a, [, v]) => a + v, 0);
// ตัวแปรทดลอง: ขนาดอื่น
const sizes = [[7, 9], [9, 11], [11, 13]].map(([w, l]) => { const d = cottage({ W: w, L: l }); const r = simulateBuild(d); const m = rawMaterials(countBlocks(d.blocks)).need;
  return `| ${w}×${l} | ${d.blocks.length} | ${r.done ? '✅' : `❌ ${r.problems.length}`} | ${(r.timeSec / 60).toFixed(1)} | ${r.scaffoldBlocks} (สูงสุด ${r.maxScaffold}) | ${Object.entries(m).filter(([k]) => k.endsWith('_log')).reduce((a, [, v]) => a + v, 0)} |`; });

const md = [`# HOUSE_BUILD — ${h.name}: ออกแบบเอง + จำลองวางทุกบล็อก`, '',
  '> สร้างโดย `node scripts/sim_build.mjs` · แบบ: `lib/home/house_design.mjs` · ตัวจำลอง: `lib/home/build_sim.mjs` · **ยืนยันระดับจำลอง** (ยังไม่ได้วางจริงในเซิร์ฟ)',
  '> ไม่ได้ลอกบ้านใคร — ออกแบบจากหลักในวิกิ: [Tutorial:Construction](https://minecraft.wiki/w/Tutorial:Construction) · [Roof types](https://minecraft.wiki/w/Tutorial:Roof_types) · [Roof construction guidelines](https://minecraft.wiki/w/Tutorial:Roof_construction_guidelines)', '',
  '## 1. หลักออกแบบที่ใช้',
  '- **มีมิติ ไม่แบน:** เสาซุงสนที่มุม + กลางผนัง · ฐานหินกรวด · ผนังแผ่นไม้สน · คานบนสุดซุงลอกเปลือก (เส้นคาด) · พื้นในแผ่นไม้โอ๊ก (วัสดุผสม)',
  '- **หลังคาจั่ว 45°** ด้วยบันไดไม้ ยาวตามแนวยาว · สันเป็นแผ่นครึ่ง · หน้าจั่วอุดแผ่นไม้ (จั่วเหมาะกับกว้าง ≤12 — W/Tutorial:Roof_types)',
  '- **กันแมงมุม:** ผนังสูง 4 + ชายคายื่น 1 รอบ (W/Tutorial:Construction)',
  '- **ใช้งาน:** เตียง หีบ 2 ถัง 1 โต๊ะคราฟต์ เตา 2 · คบเพลิงในบ้าน 4 + หน้าประตู 2 (กันม็อบเกิดในบ้าน) · หน้าต่างกระจก 16 ช่อง', '',
  '## 2. ผลจำลองการวาง', '',
  `| รายการ | ค่า |`, '|---|---|',
  `| บล็อกทั้งหมด | ${sim.total} |`, `| วางสำเร็จ | ${sim.placed} ${sim.done ? '✅ ครบ' : '❌'} |`,
  `| บล็อกที่วางไม่ได้ | ${sim.problems.length} |`, `| เวลาวาง (เดิน+วาง+นั่งร้าน) | ${(sim.timeSec / 60).toFixed(1)} นาที (ASSUME เวลาต่อท่า) |`,
  `| นั่งร้าน (ต่อแล้วรื้อ) | ${sim.scaffoldBlocks} ชั้นรวม · สูงสุด ${sim.maxScaffold} ชั้น |`,
  `| ระยะเอื้อมไกลสุดที่ใช้ | ${Math.max(...sim.steps.map((s) => s.reach))} บล็อก (เกณฑ์ ≤4.5) |`, '',
  ...(sim.problems.length ? ['### บล็อกที่มีปัญหา', ...sim.problems.slice(0, 20).map((p) => `- ${p.name} @${p.x},${p.y},${p.z} — ${p.why}`), ''] : []),
  '## 3. ของที่ต้องใช้', '', '| ไอเทม | จำนวน |', '|---|---|', ...Object.entries(items).sort((a, b) => b[1] - a[1]).map(([k, v]) => `| ${k} | ${v} |`), '',
  `**วัตถุดิบดิบ (ไล่สูตรจาก recipes.json):** ${Object.entries(raw.need).map(([k, v]) => `${k} ${v}`).join(' · ')} → **ซุงรวม ≈${logs} ท่อน**`, '',
  '## 4. ขนาดอื่น (จำลองเหมือนกัน)', '', '| ขนาด | บล็อก | วางครบ | นาที | นั่งร้าน | ซุง |', '|---|---|---|---|---|---|', ...sizes, '',
  '## 5. ลำดับวาง (20 ก้อนแรก / 10 ก้อนสุดท้าย)', '', '| # | บล็อก | ที่ | ยืนที่ (x,เท้า,z) | นั่งร้าน | ระยะ |', '|---|---|---|---|---|---|',
  ...[...sim.steps.slice(0, 20), ...sim.steps.slice(-10)].map((s) => `| ${s.i} | ${s.block} | ${s.at.join(',')} | ${s.stand.join(',')} | ${s.scaffold} | ${s.reach} |`), '',
  '## 6. แผนผังทีละชั้น (มองจากบน · แถวบน = หลังบ้าน)', '',
  '`#` หินกรวด · `O` ซุง · `=` แผ่นไม้ · `+` กระจก · `D` ประตู · `^` บันไดหลังคา · `-` แผ่นครึ่ง · `B` เตียง · `C` หีบ/ถัง · `F` เตา · `T` โต๊ะ · `i` คบเพลิง', '',
  ...layers(h).flatMap(({ y, rows }) => [`y=${y}`, '```', ...rows, '```']), '',
  '## 7. ข้อควรระวังตอนสร้างจริง',
  '- **ทิศบันได:** mineflayer วางบันไดหันตามทิศที่บอตมองอยู่ · ครึ่งบน/ล่างตามหน้าที่คลิก → ต้องหันหน้าเข้าหาบ้าน (ด้านที่ต่ำ) ก่อนวางแต่ละแถว [ไม่แน่ใจ: ต้องลองบนเซิร์ฟ]',
  '- **ประตู/เตียง 2 ช่อง:** วางครั้งเดียวได้ทั้ง 2 ช่อง (นับเป็น 1 ชิ้น) · ต้องมีที่ว่างพอ',
  '- **นั่งร้านสูงสุด ' + sim.maxScaffold + ' ชั้น:** ใช้ดิน/หินกรวด ต่อแล้วรื้อทันที (กฎ "ห้ามขังตัว" ไม่เกี่ยว — แต่ห้ามลืมรื้อ: house-clean จะเจอเป็นบล็อกมั่ว) · พกถังน้ำกันตกเสมอ',
  '- **ที่ตั้ง:** พื้นเรียบตามกฎ jing → เลือกด้วย chooseFarmSite/tidyPlan ก่อน · หลังสร้างเสร็จ `bot.brain.snapshotHouse(...)` แล้ว `setPassages` ประตูหน้า',
  '- **ซุงเยอะ (≈' + logs + '):** ทำตอนมีขวานเหล็ก + หลังชุดเหล็ก (IRON_RACE) · ช่วงแรกใช้ที่หลบเล็กก่อน', ''];
fs.writeFileSync(path.join(ROOT, 'docs', 'HOUSE_BUILD.md'), md.join('\n'));
console.log(`${h.name}: ${sim.placed}/${sim.total} · ${(sim.timeSec / 60).toFixed(1)} นาที · ซุง ${logs} · ปัญหา ${sim.problems.length}`);
console.log(sizes.join('\n'));
