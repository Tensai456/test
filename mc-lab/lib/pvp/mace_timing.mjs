// mace_timing.mjs — กระบอง: ความสูงจากแรงพุ่ง, ดาเมจทุบตามความสูง, จังหวะทุบ
// ฟิสิกส์ผู้เล่น: vy ← (vy − 0.08) × 0.98 ต่อ tick · แรงกระโดดปกติ 0.42 บล็อก/tick [ไม่แน่ใจ: ค่าจากโค้ดเกม]

import { smashBonus } from './damage.mjs';
import { weapon } from './weapons.mjs';
import { armorReduce } from './damage.mjs';

export const JUMP_VY = 0.42;

// เส้นทางแนวตั้งจาก vy0 จนกลับลงพื้นเดิม (y=0) → [{t, y, vy}]
export function verticalPath(vy0) {
  const out = [];
  let y = 0, vy = vy0, t = 0;
  do {
    out.push({ t, y, vy });
    y += vy; vy = (vy - 0.08) * 0.98; t++;
  } while (y > 0 && t < 600);
  out.push({ t, y: 0, vy });
  return out;
}

export const apexHeight = (vy0) => Math.max(...verticalPath(vy0).map(p => p.y));

// vy0 ที่ต้องใช้เพื่อขึ้นสูง H บล็อก (bisection)
export function vyForHeight(H) {
  let lo = 0, hi = 10;
  for (let i = 0; i < 60; i++) {
    const m = (lo + hi) / 2;
    if (apexHeight(m) < H) lo = m; else hi = m;
  }
  return hi;
}

// ทุบตอนตกลงมาถึงระดับหัวเป้า (ตีจากเหนือหัวได้ในระยะ reach) → fall = apex − hitY
export function smashPlan(H, { hitY = 1.0, density = 0, armor = 'none', armorStats } = {}) {
  const fall = Math.max(0, H - hitY);
  const raw = weapon('mace').dmg + smashBonus(fall, density);
  const after = armorStats ? armorReduce(raw, armorStats) : raw;
  const path = verticalPath(vyForHeight(H));
  const apexT = path.reduce((a, p) => (p.y > a.y ? p : a)).t;
  const hitT = path.find(p => p.t > apexT && p.y <= hitY)?.t ?? path.at(-1).t;
  return { fall, raw, afterArmor: after, airTicks: path.at(-1).t, hitTick: hitT, armor };
}
