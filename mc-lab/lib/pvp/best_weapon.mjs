// best_weapon.mjs — เลือกอาวุธจากของที่มี ตามเป้าหมาย/สถานการณ์ (ใช้ตัวเลขจาก weapons.mjs)
// ctx: { dist, targetShield, fallHeight, targetRanged, arrows }
import { WEAPONS, cooldownTicks } from './weapons.mjs';

const MELEE = Object.keys(WEAPONS).filter((w) => w !== 'fist');
// DPS ต่อวินาที (ชาร์จเต็ม) · คริ ×1.5 ถ้ากระโดดคริได้ (ทุกอาวุธยกเว้นหอก — 26.x: หอกไม่มีคริ)
export function dps(name, { crit = true } = {}) {
  const w = WEAPONS[name];
  const c = crit && !name.endsWith('_spear') ? 1.5 : 1;
  const hitsPerSec = Math.min(20 / cooldownTicks(w.speed), 2);   // ช่วงอมตะ 10 tick → ตีโดนได้สูงสุด 2 ครั้ง/วิ
  return w.dmg * c * hitsPerSec;
}

export function bestWeapon(inv, ctx = {}) {
  const has = (n) => (inv[n] ?? 0) > 0;
  const arrows = ctx.arrows ?? inv.arrow ?? 0;
  // 1) เป้ายิงไกลและอยู่ไกล → ธนู/หน้าไม้
  if ((ctx.dist ?? 0) > 6 && arrows > 0) {
    if (has('bow')) return { item: 'bow', why: 'เป้าไกล >6 บล็อก + มีลูกธนู' };
    if (has('crossbow')) return { item: 'crossbow', why: 'เป้าไกล + มีลูกธนู' };
  }
  // 2) เป้ายกโล่ → ขวาน (ปิดโล่ 5 วิ)
  if (ctx.targetShield) {
    const axe = ['netherite_axe', 'diamond_axe', 'iron_axe'].find(has);
    if (axe) return { item: axe, why: 'เป้ายกโล่ → ขวานปิดโล่ 5 วิ' };
  }
  // 3) ตกมาจากที่สูง ≥1.5 → กระบองทุบ
  if ((ctx.fallHeight ?? 0) >= 1.5 && has('mace')) return { item: 'mace', why: `ทุบจากความสูง ${ctx.fallHeight}` };
  // 4) ระยะประชิด: DPS สูงสุด
  const melee = MELEE.filter(has).sort((a, b) => dps(b) - dps(a));
  if (melee.length) return { item: melee[0], why: `DPS สูงสุด ${dps(melee[0]).toFixed(1)}/วิ` };
  if ((ctx.dist ?? 0) > 3 && arrows > 0 && (has('bow') || has('crossbow'))) return { item: has('bow') ? 'bow' : 'crossbow', why: 'ไม่มีอาวุธประชิด' };
  return { item: 'fist', why: 'ไม่มีอาวุธ' };
}
