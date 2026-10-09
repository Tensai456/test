// weapon_tactics.mjs — วิธีใช้อาวุธ/เอนชานต์ตามสถานการณ์ (ฟังก์ชันล้วน)
// ctx: { weapon, ench:{name:lvl}, dist, inWater, raining, thunder, openSky, fallHeight, onGround, windCharges, hp,
//        targetHp, targetArmor:{armor,toughness}, closing (บล็อก/วิ), targetFleeing, rodRange }
import { smashBonus, armorReduce } from './damage.mjs';
import { fallDamage, chooseClutch } from '../fall_safety.mjs';

export const WIND_MAX_H = 11;        // ลูกลมพุ่งได้สูงสุด ~11 บล็อก (Wind Charge wiki)
export const ROD_RANGE = 33;         // เบ็ดระยะสูงสุด 33 บล็อก (kb/fishing)

// กระบอง: หาความสูงต่ำสุดที่ทุบแล้วเป้าตาย · ถ้าพลาดต้องไม่ตกตายเอง
export function maceHeight({ targetHp = 20, targetArmor = { armor: 0, toughness: 0 }, density = 0, hp = 20, featherFalling = 0 } = {}) {
  for (let h = 1.5; h <= WIND_MAX_H; h += 0.5) {
    const dmg = armorReduce(6 + smashBonus(h, density), targetArmor);
    if (dmg >= targetHp) {
      const missFall = fallDamage(h + 1, { featherFalling });     // พลาดแล้วตกจากความสูงนั้น (+1 กระโดด)
      return { height: h, dmg, missFall, safeIfMiss: missFall < hp };
    }
  }
  const h = WIND_MAX_H;
  return { height: h, dmg: armorReduce(6 + smashBonus(h, density), targetArmor), missFall: fallDamage(h + 1, { featherFalling }), safeIfMiss: fallDamage(h + 1, { featherFalling }) < hp, notLethal: true };
}

export function tactic(ctx) {
  const e = ctx.ench ?? {};
  const w = ctx.weapon;
  if (w === 'mace') {
    if ((ctx.fallHeight ?? 0) >= 1.5) {
      // ทุบโดน = รีเซ็ตระยะตก · พลาด = โดนดาเมจตกเต็ม → ถ้าเป้าไม่อยู่ใต้ตัวตอนลงถึง ให้สลับไปของกันตก (ใช้คู่กัน)
      if (ctx.targetBelowInReach !== false) return { act: 'smash', why: `ตกมา ${ctx.fallHeight} บล็อก ≥1.5 + เป้าอยู่ในระยะ → ทุบ (รีเซ็ตระยะตก)` };
      const fd = fallDamage(ctx.fallHeight);
      const c = chooseClutch({ inventory: Object.keys(ctx.inv ?? {}), dimension: ctx.dim ?? 'overworld', wallAdjacent: !!ctx.wallAdjacent });
      if (fd < (ctx.hp ?? 20)) return { act: 'land', why: `เป้าหลุดระยะ · ตกเสีย ${fd} < HP → ลงพื้นได้` };
      return c ? { act: 'abort-to-clutch', item: c, why: `เป้าหลุดระยะ · ตกเสีย ${fd} ≥ HP → สลับ ${c} ทันที` } : { act: 'steer-to-soft', why: `เป้าหลุดระยะ · ไม่มีของกันตก → บังคับตัวไปหาน้ำ/ใบไม้` };
    }
    if ((ctx.windCharges ?? 0) > 0) {
      const plan = maceHeight(ctx);
      if (!plan.safeIfMiss) return { act: 'melee', why: `ความสูงที่ต้องใช้ ${plan.height} พลาดแล้วตก ${plan.missFall} ≥ HP → ไม่คุ้ม ตีปกติ/สลับดาบ` };
      return { act: 'wind-jump-smash', height: plan.height, why: `กระโดดก่อน → ลูกลมใต้เท้า → ขึ้น ${plan.height} บล็อก → ทุบ ${plan.dmg.toFixed(1)}${plan.notLethal ? ' (ไม่ตายในทีเดียว)' : ''}` };
    }
    return { act: 'swap-sword', why: 'ไม่มีความสูง/ลูกลม → กระบองแย่กว่าดาบ (5.4 vs 14.4 DPS) สลับดาบ' };
  }
  if (w === 'trident') {
    if (e.riptide) return (ctx.inWater || ctx.raining) ? { act: 'riptide', why: 'Riptide ใช้ได้เฉพาะในน้ำ/ฝน → พุ่งหนีหรือพุ่งเข้า' } : { act: 'melee', why: 'Riptide ขว้างไม่ได้และพุ่งไม่ได้นอกน้ำ/ฝน → ตีประชิด' };
    if (e.channeling && ctx.thunder && ctx.openSky) return { act: 'throw-channeling', why: 'พายุ + เป้าใต้ฟ้าเปิด → ขว้างเรียกฟ้าผ่า' };
    if ((ctx.dist ?? 0) > 4) return e.loyalty ? { act: 'throw', why: 'Loyalty กลับมือ → ขว้างได้' } : { act: 'throw-then-retrieve', why: 'ไม่มี Loyalty → ขว้างแล้วต้องไปเก็บ (เสี่ยง)' };
    return { act: 'melee', why: 'ใกล้ → ตีประชิด 9' };
  }
  if (w?.endsWith('_spear')) {
    const ok = (ctx.dist ?? 0) >= 2 && (ctx.dist ?? 0) <= 4.5 && (ctx.closing ?? 0) >= 4.6;
    return ok ? { act: 'charge', why: 'ระยะ 2–4.5 + เข้าหากัน ≥4.6 บล็อก/วิ → charge' } : { act: 'jab-or-swap', why: 'charge ไม่เข้าเงื่อนไข → jab (DPS ต่ำ) หรือสลับดาบ' };
  }
  if (w === 'fishing_rod') {
    if (ctx.targetFleeing && (ctx.dist ?? 0) <= ROD_RANGE) return { act: 'rod-pull', why: 'เป้าหนี → ดึงเข้ามาแล้วสลับดาบ' };
    return { act: 'swap-melee', why: 'เบ็ดไม่ทำดาเมจ (Java 1.9+) → ใช้ดาบ' };
  }
  if (w === 'bow' || w === 'crossbow') {
    if ((ctx.dist ?? 0) <= 3) return { act: 'swap-melee', why: 'ใกล้ ≤3 → ง้างไม่ทัน สลับอาวุธประชิด' };
    return { act: 'shoot', why: w === 'bow' ? 'ง้างเต็ม 1 วิ (คริ 6–11) · เล็งดัก (leadAim)' : 'ขึ้นสายไว้ก่อน (1.25 วิ) แล้วยิง' };
  }
  return { act: 'melee', why: 'ตีเมื่อชาร์จ ≥95% · กระโดดคริ (ปล่อยวิ่ง)' };
}
