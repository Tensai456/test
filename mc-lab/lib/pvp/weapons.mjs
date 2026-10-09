// weapons.mjs — ตารางอาวุธ/เกราะ (Java) · แหล่งอยู่ใน docs/PVP_SIM.md §1
// dmg = HP ต่อครั้งเมื่อชาร์จเต็ม · speed = attack speed (ครั้ง/วิ) · reach = ระยะตีสูงสุด (บล็อก)

export const WEAPONS = {
  wooden_sword: { dmg: 4, speed: 1.6, reach: 3, sweep: true },   // [ไม่แน่ใจ: ค่าจากความรู้ ยังไม่ได้เช็กวิกิรอบนี้]
  stone_sword: { dmg: 5, speed: 1.6, reach: 3, sweep: true },    // [ไม่แน่ใจ: เช่นเดียวกัน]
  iron_sword: { dmg: 6, speed: 1.6, reach: 3, sweep: true },
  diamond_sword: { dmg: 7, speed: 1.6, reach: 3, sweep: true },
  netherite_sword: { dmg: 8, speed: 1.6, reach: 3, sweep: true },
  iron_axe: { dmg: 9, speed: 0.9, reach: 3, disablesShield: true },
  diamond_axe: { dmg: 9, speed: 1.0, reach: 3, disablesShield: true },
  netherite_axe: { dmg: 10, speed: 1.0, reach: 3, disablesShield: true },
  mace: { dmg: 6, speed: 0.6, reach: 3, smash: true },
  // หอก: ค่า jab · charge = ตัวคูณ · ระยะ charge 2–4.5 บล็อก · jab reach [ไม่แน่ใจ] ใช้ 3
  iron_spear: { dmg: 3, speed: 1.05, reach: 3, charge: 0.95, chargeReach: [2, 4.5] },
  diamond_spear: { dmg: 4, speed: 0.95, reach: 3, charge: 1.075, chargeReach: [2, 4.5] },
  trident: { dmg: 9, speed: 1.1, reach: 3 },      // ตีประชิด (Trident wiki) · ขว้าง 8
  fist: { dmg: 1, speed: 4, reach: 3 },
};

// เกราะเต็มชุด: armor points, toughness, knockback resistance (0–1)
export const ARMOR = {
  none: { armor: 0, toughness: 0, kbRes: 0 },
  leather: { armor: 7, toughness: 0, kbRes: 0 },               // [ไม่แน่ใจ: ค่าจากความรู้]
  iron: { armor: 15, toughness: 0, kbRes: 0 },
  diamond: { armor: 20, toughness: 8, kbRes: 0 },
  netherite: { armor: 20, toughness: 12, kbRes: 0.4 },
};

export const cooldownTicks = (speed) => 20 / speed;

export function weapon(name) {
  const w = WEAPONS[name];
  if (!w) throw new Error(`unknown weapon ${name}`);
  return { name, ...w, cooldown: cooldownTicks(w.speed) };
}
