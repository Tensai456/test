// mobs.mjs — ค่าม็อบ (ระดับ Normal) สำหรับจำลองเอาชีวิตรอด · แหล่งใน docs/SURVIVAL_SIM.md
// speed = บล็อก/tick ตอนไล่ = ASSUME (ไม่ได้ค่าจากวิกิรอบนี้ — ปรับได้)

export const MOBS = {
  zombie: { hp: 20, kind: 'melee', dmg: 3, reach: 2.0, cd: 20, speed: 0.115 },
  husk: { hp: 20, kind: 'melee', dmg: 3, reach: 2.0, cd: 20, speed: 0.115, hunger: true },
  spider: { hp: 16, kind: 'melee', dmg: 2, reach: 2.0, cd: 20, speed: 0.15 },
  skeleton: { hp: 20, kind: 'ranged', dmgMin: 3, dmgMax: 5, range: 15, cd: 60, keep: 8, speed: 0.125 },
  creeper: { hp: 20, kind: 'creeper', fuseRange: 3, fuse: 30, cancelRange: 7, power: 3, speed: 0.1 },
};

// ระเบิด: impact = (1 − d/(2·power)) · ดาเมจ = floor((impact² + impact)/2 · 7 · 2·power + 1) → สูงสุด 43 ที่ power 3
export function explosionDamage(dist, power = 3, exposure = 1) {
  const impact = (1 - dist / (2 * power)) * exposure;
  if (impact <= 0) return 0;
  return Math.floor(((impact * impact + impact) / 2) * 7 * 2 * power + 1);
}
