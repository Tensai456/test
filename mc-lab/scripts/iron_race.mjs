// iron_race.mjs — เทียบกลยุทธ์เก็บเหล็ก (ชุดเกราะ + 1 stack) · node scripts/iron_race.mjs → docs/IRON_RACE.md
import fs from 'node:fs';
import path from 'node:path';
import { simulate, calibrate, DEFAULTS, ironDensity } from '../lib/economy/iron_race.mjs';

const ROOT = path.resolve(path.dirname(new URL(import.meta.url).pathname), '..');
const BASE = { chop: 'hand', spacing: 2, ironPickFirst: false, furnaces: 1, blast: false, parallelSmelt: false, miners: 1 };
const pVein = calibrate(BASE, 40);

const STRATS = [
  ['S0 ปัจจุบัน (คาดจากข้อมูลแล็บ 40 นาที)', BASE],
  ['S1 เว้นกิ่ง 6 บล็อก (แทน 2)', { ...BASE, spacing: 6 }],
  ['S2 เหล็ก 3 ก้อนแรก → อีเต้อเหล็กทันที', { ...BASE, ironPickFirst: true }],
  ['S3 เผาไปพร้อมขุด (วางเตาในเหมือง)', { ...BASE, parallelSmelt: true }],
  ['S4 เตา 4 เตา (หิน 8 ก้อน/เตา)', { ...BASE, furnaces: 4 }],
  ['S5 blast furnace 1 เตา', { ...BASE, blast: true }],
  ['S6 ทีม: นักขุด 2 + คนตัดไม้ 2', { ...BASE, miners: 2, choppers: 2 }],
  ['S7 เข้าถ้ำแทนขุดอุโมงค์ (spelunk)', { ...BASE, spelunk: true }],
  ['S8 รวม S1+S2+S3+S4', { ...BASE, spacing: 6, ironPickFirst: true, parallelSmelt: true, furnaces: 4 }],
  ['S9 รวม S8 + ทีม 2 นักขุด', { ...BASE, spacing: 6, ironPickFirst: true, parallelSmelt: true, furnaces: 4, miners: 2, choppers: 2 }],
  ['S10 รวม S9 + เข้าถ้ำ', { ...BASE, spelunk: true, ironPickFirst: true, parallelSmelt: true, furnaces: 4, miners: 2, choppers: 2 }],
  ['S11 ขุดในภูเขา Y≈200 (ไม่ลงเหมือง)', { ...BASE, mountain: true }],
  ['S12 รวม S9 + ภูเขา', { ...BASE, mountain: true, spacing: 6, ironPickFirst: true, parallelSmelt: true, furnaces: 4, miners: 2, choppers: 2 }],
];

const base = simulate(BASE, { pVein });
const rows = STRATS.map(([name, st]) => {
  const r = simulate(st, { pVein });
  const b = r.breakdown;
  const f = (x) => (x / 60).toFixed(1);
  return `| ${name} | **${r.totalMin.toFixed(1)}** | ${(((base.totalSec - r.totalSec) / base.totalSec) * 100).toFixed(0)}% | ${f(b.wood)} | ${f(b.descend + b.stone)} | ${f(b.mine)} | ${f(b.smelt + b.blastCost)} | ${f(b.overhead)} |`;
});

// sensitivity: ค่าที่ไม่แน่ใจ ±50% กระทบผลแค่ไหน (กลยุทธ์ S9)
const S9 = STRATS[9][1];
const sens = ['veinSize', 'logWalkSec', 'overheadSec', 'coalPerIronVein'].map((k) => {
  const lo = simulate(S9, { pVein, [k]: DEFAULTS[k] * 0.5 }).totalMin, hi = simulate(S9, { pVein, [k]: DEFAULTS[k] * 1.5 }).totalMin;
  return `| ${k} (ASSUME ${DEFAULTS[k]}) | ${lo.toFixed(1)} – ${hi.toFixed(1)} นาที |`;
});
const S12 = STRATS[12][1];
const mt = [[160, 60], [200, 120], [232, 120], [200, 300]].map(([y, t]) => `| ภูเขา Y${y} · เดินไป ${t} วิ | ความหนาแน่น ×${(ironDensity(y) / ironDensity(16)).toFixed(2)} ของ Y16 | S12 ${simulate(S12, { pVein, mountainY: y, mountainTravelSec: t }).totalMin.toFixed(1)} นาที |`);
const pv = [0.5, 2].map((m) => `| pVein ×${m} (ถ้าแร่ถี่/ห่างกว่าที่ calibrate) | S0 ${simulate(BASE, { pVein: pVein * m }).totalMin.toFixed(1)} · S9 ${simulate(S9, { pVein: pVein * m }).totalMin.toFixed(1)} นาที |`);

const md = ['# IRON_RACE — เก็บเหล็กให้เร็วที่สุด (ชุดเกราะเหล็กครบ + เหล็กเผาแล้ว 1 stack = 88 แท่ง)', '',
  '> สร้างโดย `node scripts/iron_race.mjs` · โมเดล `lib/economy/iron_race.mjs` · **ยืนยันระดับจำลอง** (ค่าคาดหวัง ไม่สุ่ม)',
  '> เวลาขุด = minecraft-data 26.1 · เวลาเผา = วิกิ (เตา 10 วิ, blast 5 วิ/ชิ้น) · ค่าที่ไม่มีแหล่ง = ASSUME',
  `> ค่าความถี่เจอสายแร่ (pVein) ไม่มีในวิกิ → **calibrate ให้ S0 = 40 นาที (เวลาจริงของแล็บ)** ได้ pVein = ${pVein.toExponential(2)} ต่อบล็อกที่เห็น`, '',
  '## 1. เทียบกลยุทธ์ (นาที)', '', '| กลยุทธ์ | รวม | เร็วขึ้น | ไม้ | ลงเหมือง+หิน | ขุดหาแร่ | เผา | อื่น ๆ |', '|---|---|---|---|---|---|---|---|', ...rows, '',
  '## 2. ค่าที่ไม่แน่ใจกระทบผลแค่ไหน (กลยุทธ์ S9)', '', '| ค่า ±50% | ช่วงเวลารวม |', '|---|---|', ...sens, ...pv, '',
  '### 2.1 ภูเขา: ความสูง × ระยะเดิน (กลยุทธ์ S12)', '',
  '> ความหนาแน่นคิดจาก 3 ชุดการเกิด (W/Iron_Ore) · ชุดบนพยายามเกิด 90 ครั้ง/chunk (9 เท่าชุดกลาง) แต่กระจายในช่วงสูง 304 บล็อก (ชุดกลาง 80) → ที่ยอดเข้มข้นกว่า Y16 ราว 2 เท่า ไม่ใช่ 9 เท่า · blob เฉลี่ย = ครึ่งหนึ่งของสูงสุด (ASSUME)', '',
  '| สถานการณ์ | ความหนาแน่น | เวลา |', '|---|---|---|', ...mt, '',
];
// ส่วน 3 ขึ้นไปเขียนมือ (SWOT/ตำรา/แผน) → เก็บไว้ ไม่ทับ
const F = path.join(ROOT, 'docs', 'IRON_RACE.md');
const old = fs.existsSync(F) ? fs.readFileSync(F, 'utf8') : '';
const keep = old.indexOf('## 3.') >= 0 ? old.slice(old.indexOf('## 3.')) : '';
fs.writeFileSync(F, md.join('\n') + (keep ? '\n' + keep : ''));
console.log(md.slice(5, 9 + STRATS.length).join('\n'));
console.log(sens.join('\n')); console.log(pv.join('\n'));
