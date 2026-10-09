// home_site.mjs — เลือกที่ตั้งบ้าน (handoff A5) · ฟังก์ชันล้วน: กริดความสูง + ชนิดบล็อกผิว → คะแนนทุกตำแหน่ง
// กฎ jing: บ้านต้องอยู่พื้นราบปลอดภัย (ปัญหาเดิม s37: บ้าน/เตียงข้างหลุม) · ใกล้ไม้/หินได้คะแนนเพิ่ม
// grid[z][x] = { h: ความสูงผิว, top: ชื่อบล็อกผิว } · size = ขนาดบ้าน (W×L ของแบบ เช่น 9×11 + ชายคา/ทางเดิน 2)
const HAZARD = { lava: 'ลาวา', water: 'น้ำ', magma_block: 'magma', powder_snow: 'ผงหิมะ', cactus: 'กระบองเพชร', sweet_berry_bush: 'พุ่มเบอร์รี' };
const WOODY = /_log$|_leaves$/;
const STONY = /^(stone|cobblestone|andesite|diorite|granite|deepslate|tuff)$/;

// ตัวชี้วัดของกรอบ x0,z0 ขนาด w×l · margin = ขอบรอบบ้านที่ต้องปลอดภัยด้วย (ไม่มีหลุม/ลาวา/น้ำ/หน้าผา)
export function siteMetrics(grid, x0, z0, w, l, { margin = 3, near = 16 } = {}) {
  const H = grid.length, W = grid[0].length;
  const inside = [], ring = [];
  for (let z = z0 - margin; z < z0 + l + margin; z++) for (let x = x0 - margin; x < x0 + w + margin; x++) {
    if (z < 0 || x < 0 || z >= H || x >= W) return null;              // หลุดแผนที่ = ไม่รู้ = ไม่เลือก
    (x >= x0 && x < x0 + w && z >= z0 && z < z0 + l ? inside : ring).push(grid[z][x]);
  }
  const hs = inside.map((c) => c.h).sort((a, b) => a - b), floorY = hs[Math.floor(hs.length / 2)];
  const work = inside.reduce((a, c) => a + Math.abs(c.h - floorY), 0);              // บล็อกที่ต้องขุด/ถม
  const span = hs.at(-1) - hs[0];
  const hazards = [...inside, ...ring].filter((c) => HAZARD[c.top]).map((c) => HAZARD[c.top]);
  const holes = ring.filter((c) => c.h <= floorY - 3).length;                       // ขอบรอบบ้านต่ำกว่าพื้น ≥3 = หลุม/หน้าผา (ตกได้)
  const cliffs = ring.filter((c) => c.h >= floorY + 4).length;                      // กำแพงหิน/หน้าผาสูงชิดบ้าน (ม็อบโดดลง/มืด)
  let wood = 0, stone = 0;
  for (let z = Math.max(0, z0 - near); z < Math.min(H, z0 + l + near); z++) for (let x = Math.max(0, x0 - near); x < Math.min(W, x0 + w + near); x++) {
    if (WOODY.test(grid[z][x].top)) wood++; if (STONY.test(grid[z][x].top)) stone++;
  }
  return { floorY, work, span, hazards: [...new Set(hazards)], hazardCount: hazards.length, holes, cliffs, wood, stone };
}

// คะแนน (สูง = ดี) · ตกทันที (null) ถ้า: มีอันตรายในกรอบ+ขอบ · ชันเกิน maxSpan · มีหลุมรอบบ้าน
export function scoreSite(m, { maxSpan = 3 } = {}) {
  if (!m || m.hazardCount || m.span > maxSpan || m.holes) return null;
  return 100 - m.work * 2 - m.cliffs * 3 + Math.min(m.wood, 30) * 0.8 + Math.min(m.stone, 30) * 0.5;
}

// ค้นทั้งแผนที่ → อันดับที่ดีสุด k อัน (เว้นทับกันเกินครึ่ง) · from = จุดที่บอตอยู่ (ใกล้กว่าดีกว่าเล็กน้อย)
export function bestSites(grid, { w = 11, l = 13, k = 3, from = null, ...opt } = {}) {
  const out = [];
  for (let z0 = 0; z0 < grid.length; z0++) for (let x0 = 0; x0 < grid[0].length; x0++) {
    const m = siteMetrics(grid, x0, z0, w, l, opt);
    const s = scoreSite(m, opt);
    if (s == null) continue;
    const dist = from ? Math.hypot(x0 + w / 2 - from.x, z0 + l / 2 - from.z) : 0;
    out.push({ x0, z0, score: +(s - dist * 0.05).toFixed(2), ...m });
  }
  out.sort((a, b) => b.score - a.score);
  const picked = [];
  for (const c of out) { if (picked.every((p) => Math.abs(p.x0 - c.x0) >= w / 2 || Math.abs(p.z0 - c.z0) >= l / 2)) picked.push(c); if (picked.length >= k) break; }
  return picked;
}

// อ่านกริดจากบอตจริง: สแกนผิวรอบตัว r บล็อก (blockAt ไล่ลงจาก yTop) — ช้า ใช้ครั้งเดียวก่อนเลือกที่ [ตรวจ: ความเร็วบนเซิร์ฟจริง]
export function scanGrid(bot, Vec3, { r = 40, yTop = 120, yBottom = 40 } = {}) {
  const c = bot.entity.position.floored ? bot.entity.position.floored() : bot.entity.position;
  const grid = [];
  for (let dz = -r; dz <= r; dz++) {
    const row = [];
    for (let dx = -r; dx <= r; dx++) {
      let cell = { h: yBottom, top: 'unknown' };
      for (let y = yTop; y >= yBottom; y--) {
        const b = bot.blockAt(new Vec3(c.x + dx, y, c.z + dz));
        if (b === null) { cell = { h: yBottom, top: 'unloaded' }; break; }
        if (b.name !== 'air' && b.name !== 'cave_air' && !/grass$|fern|flower|tulip|poppy|dandelion|short_grass|tall_grass/.test(b.name)) { cell = { h: y, top: b.name }; break; }
      }
      row.push(cell);
    }
    grid.push(row);
  }
  return { grid, origin: { x: c.x - r, z: c.z - r } };
}
