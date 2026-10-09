// รันชุดเทียบกลยุทธ์ → ตาราง markdown · node scripts/run_duel_matrix.mjs [n]
import { matchup } from '../lib/pvp/duel_sim.mjs';

const n = Number(process.argv[2] ?? 400);
// คู่ต่อสู้อ้างอิง "สแปม": ดาบเหล็ก ตีรัวทุก 4 tick ไม่รอ cooldown (สมมติว่าคล้ายบอตเก่า [ไม่แน่ใจ])
const SPAM = { weapon: 'iron_sword', fullCharge: false };
const CLEAN = { weapon: 'iron_sword' };

const rows = [
  ['ดาบเหล็ก ชาร์จเต็ม vs สแปม', CLEAN, SPAM],
  ['ดาบเหล็ก ชาร์จเต็ม+w-tap vs ชาร์จเต็ม', { ...CLEAN, wtap: true }, CLEAN],
  ['ดาบเหล็ก คริ vs ชาร์จเต็ม', { ...CLEAN, crit: true }, CLEAN],
  ['ดาบเหล็ก ยกโล่ระหว่างรอ vs ชาร์จเต็ม', { ...CLEAN, shield: true }, CLEAN],
  ['ดาบเหล็ก คริ+โล่ vs ชาร์จเต็ม', { ...CLEAN, crit: true, shield: true }, CLEAN],
  ['ขวานเหล็ก vs ดาบ+โล่', { weapon: 'iron_axe' }, { ...CLEAN, shield: true }],
  ['ดาบเพชร vs ดาบเหล็ก (เกราะเหล็กทั้งคู่)', { weapon: 'diamond_sword' }, CLEAN],
  ['กระบองเดี่ยว (ไม่มีลูกลม) vs ดาบเหล็ก', { weapon: 'mace' }, CLEAN],
  ['กระบอง+ลูกลม สูง 8 vs ดาบเหล็ก', { weapon: 'mace', mace: { height: 8, charges: 16 } }, CLEAN],
  ['กระบอง+ลูกลม สูง 4 vs ดาบเหล็ก', { weapon: 'mace', mace: { height: 4, charges: 16 } }, CLEAN],
  ['หอกเหล็ก (jab) vs ดาบเหล็ก', { weapon: 'iron_spear' }, CLEAN],
  ['ดาบ+ธนู vs ดาบเหล็ก', { ...CLEAN, bow: { minDist: 6, aim: 0.6, arrows: 16 } }, CLEAN],
  ['ping 10 vs ping 50 (ดาบเท่ากัน)', { ...CLEAN, ping: 10 }, { ...CLEAN, ping: 50 }],
  ['ping 10 vs ping 150 (เทียบ)', { ...CLEAN, ping: 10 }, { ...CLEAN, ping: 150 }],
];

const pct = (x) => `${(x * 100).toFixed(0)}%`;
console.log(`| แมตช์ (n=${n}, สลับฝั่ง) | A ชนะ | B ชนะ | เสมอ/หมดเวลา | เวลาเฉลี่ย (วิ) | A คริ/ฮิต | A smash |`);
console.log('|---|---|---|---|---|---|---|');
for (const [name, a, b] of rows) {
  const m = matchup(a, b, { n });
  const s = m.sum.A;
  console.log(`| ${name} | ${pct(m.winA)} | ${pct(m.winB)} | ${pct(m.drawOrTimeout)} | ${m.avgSec.toFixed(1)} | ${s.crits}/${s.hits} | ${s.smashes} |`);
}
