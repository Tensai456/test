// fall_safety.mjs — ฟังก์ชันล้วนเรื่องการตก (ไม่แตะ mineflayer) · อ้างอิง docs/VANILLA_MOVEMENT.md
// ยืนยันระดับจำลองเท่านั้น — ค่าคงที่มาจาก minecraft.wiki (ข้อความย่อ) + ฟิสิกส์มาตรฐาน Java

export const SAFE_FALL = 3;          // บล็อก ไม่เสียเลือด (Damage)
export const GRAVITY = 0.08;         // บล็อก/tick²
export const DRAG = 0.98;            // คูณความเร็วแนวตั้งทุก tick
export const EYE_HEIGHT = 1.62;      // บล็อก (ยืนปกติ)
export const DEFAULT_REACH = 4.5;    // [ไม่แน่ใจ] ระยะวางบล็อกโหมด survival ใน 26.x

// ตัวคูณ "ดาเมจ" หรือ "ระยะ" ตามพื้นที่ตกใส่ (VANILLA_MOVEMENT §2.1)
const LANDING = {
  normal: { dist: 1, dmg: 1 },
  bed: { dist: 0.5, dmg: 1 },
  hay_block: { dist: 1, dmg: 0.2 },
  honey_block: { dist: 1, dmg: 0.2 },
  scaffolding: { dist: 0, dmg: 0 },   // ต้องย่อ (sneak) ตอนลง
  pointed_dripstone: { dist: 2, dmg: 1 },
  water: { dist: 0, dmg: 0 },
  powder_snow: { dist: 0, dmg: 0 },
  cobweb: { dist: 0, dmg: 0 },
  slime_block: { dist: 0, dmg: 0 },
  sweet_berry_bush: { dist: 0, dmg: 0 },
};

// ดาเมจตก (HP) · การปัดเศษขึ้น = [ไม่แน่ใจ] ใช้ ceil เพื่อฝั่งปลอดภัย
export function fallDamage(distance, { landing = 'normal', featherFalling = 0, slowFalling = false } = {}) {
  if (slowFalling) return 0;
  const l = LANDING[landing] ?? LANDING.normal;
  const raw = Math.max(0, distance * l.dist - SAFE_FALL) * l.dmg;
  const ff = 1 - 0.12 * Math.min(Math.max(featherFalling, 0), 4);
  return Math.max(0, Math.ceil(raw * ff - 1e-9));
}

// จำลองการตกจาก height (ระยะเท้าเหนือพื้น) → รายการ {tick, h, vy} จนถึงพื้น
export function simulateFall(height, vy0 = 0) {
  const out = [];
  let h = height, vy = vy0, tick = 0;
  while (h > 0 && tick < 2000) {
    out.push({ tick, h, vy });
    h += vy;
    vy = (vy - GRAVITY) * DRAG;
    tick++;
  }
  out.push({ tick, h: 0, vy });
  return out;
}

// tick ที่ "วางของใต้เท้าได้" ก่อนถึงพื้น (ตาอยู่ในระยะเอื้อมจากหน้าบนของพื้น)
export function clutchWindow(height, { reach = DEFAULT_REACH, vy0 = 0 } = {}) {
  const ticks = simulateFall(height, vy0).filter(s => s.h > 0 && s.h + EYE_HEIGHT <= reach);
  return { ticks: ticks.map(s => s.tick), count: ticks.length, landTick: simulateFall(height, vy0).at(-1).tick };
}

// เลือก clutch ตามของในกระเป๋า/มิติ/มีผนังข้างตัว · inventory = Set หรือ array ของชื่อไอเทม
export function chooseClutch({ inventory = [], dimension = 'overworld', wallAdjacent = false } = {}) {
  const inv = new Set(inventory);
  const nether = dimension === 'the_nether' || dimension === 'nether';
  const order = nether
    ? ['powder_snow_bucket', 'twisting_vines', 'weeping_vines', 'slime_block', 'hay_block', 'honey_block', 'scaffolding', 'ender_pearl']
    : ['water_bucket', 'slime_block', 'hay_block', 'honey_block', 'oak_boat', 'ladder', 'scaffolding', 'cobweb', 'powder_snow_bucket', 'ender_pearl'];
  for (const item of order) {
    if (item === 'ladder' && !wallAdjacent) continue;
    if (item === 'oak_boat') {
      const boat = [...inv].find(i => i.endsWith('_boat') || i.endsWith('_raft'));
      if (boat) return boat;
      continue;
    }
    if (inv.has(item)) return item;
  }
  return null;
}

// ต้องรีบ clutch ไหม: ดาเมจคาด ≥ hp − margin
export function mustClutch(distance, hp, opts = {}) {
  const margin = opts.margin ?? 4;
  return fallDamage(distance, opts) >= hp - margin;
}

// ช่องว่างแนวนอน (บล็อก) → วิธีข้าม (VANILLA_MOVEMENT §1)
export function canJumpGap(gap, { food = 20 } = {}) {
  if (gap <= 1) return 'walk';
  const canSprint = food > 6;
  if (gap <= 3) return canSprint ? 'sprint_jump' : (gap <= 2 ? 'jump' : 'bridge');
  if (gap === 4) return canSprint ? 'risky_sprint_jump' : 'bridge';
  return 'bridge';
}
