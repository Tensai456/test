// build_sim.mjs — จำลอง "บอตวางทุกบล็อกจนบ้านเสร็จ" · ตรวจทีละก้อน: มีที่ยึด · เอื้อมถึง · ต้องตั้งนั่งร้านไหม · เวลา
// กติกาที่ใช้ (mineflayer/เกม):
//  · bot.placeBlock(ref, face) ต้องมีบล็อกข้างเคียง 1 ใน 6 ด้าน (หรือพื้นดิน y = −1) ให้ยึด
//  · ระยะเอื้อม survival 4.5 จากตา (ยืน +1.62) ถึงหน้าบล็อกที่ยึด — kb/movement (ใช้ระยะถึงจุดกลางบล็อก − 0.5 แบบหยาบ)
//  · ยืนได้: พื้นดินรอบบ้าน (y = 0 ยืนบนดิน y = −1) · พื้นในบ้าน (ยืนบน y = 0 → เท้า y = 1) · ยอดนั่งร้าน (ดิน) ที่ตั้งชั่วคราว
//  · นั่งร้านตั้งได้ทั้งนอกบ้านและในบ้าน (บนพื้น) ไม่ทับบล็อกที่วางแล้ว · ใช้เสร็จรื้อทันที (นับขึ้น+ลงทุกครั้ง)
// เวลา (ASSUME จนวัดจริง): วาง 0.3 วิ · เดิน 4.317 บล็อก/วิ (W/Walking) · ต่อนั่งร้าน 1 ชั้น 0.6 วิ · รื้อ 1 ชั้น 0.4 วิ
export const REACH = 4.5, EYE = 1.62;
export const T = { place: 0.3, walk: 1 / 4.317, pillarUp: 0.6, pillarDown: 0.4 };
const key = (x, y, z) => `${x},${y},${z}`;
const NB = [[1, 0, 0], [-1, 0, 0], [0, 1, 0], [0, -1, 0], [0, 0, 1], [0, 0, -1]];
const NONSOLID = /(torch|door|bed|pane|carpet|sign|button|lever)$/;   // ยึดเกาะไม่ได้/ไม่ใช่ที่ยืน (แบบหยาบ)

export function simulateBuild(design, { maxPillar = 8 } = {}) {
  const want = design.blocks.slice();
  const placed = new Set();
  const solid = (x, y, z) => y < 0 || (placed.has(key(x, y, z)) && !NONSOLID.test(design._names.get(key(x, y, z)) ?? ''));
  design._names = new Map(want.map((b) => [key(b.x, b.y, b.z), b.name]));
  const occupied = new Set(want.map((b) => key(b.x, b.y, b.z)));
  const xs = want.map((b) => b.x), zs = want.map((b) => b.z);
  const box = { x0: Math.min(...xs), x1: Math.max(...xs), z0: Math.min(...zs), z1: Math.max(...zs) };
  // จุดยืนที่เป็นไปได้: วงรอบนอกบ้าน 1–2 บล็อก + ในบ้าน (บนพื้น y=0)
  const stands = [];
  for (let x = box.x0 - 2; x <= box.x1 + 2; x++) for (let z = box.z0 - 2; z <= box.z1 + 2; z++) {
    const inside = x > box.x0 && x < box.x1 && z > box.z0 && z < box.z1;
    const ring = x < box.x0 || x > box.x1 || z < box.z0 || z > box.z1;
    if (ring) stands.push({ x, z, feet: 0, outside: true });
    else if (inside) stands.push({ x, z, feet: 1, outside: false });
  }
  const dist = (s, feet, b) => Math.hypot(s.x + 0.5 - (b.x + 0.5), feet + EYE - (b.y + 0.5), s.z + 0.5 - (b.z + 0.5)) - 0.5;
  const steps = [], problems = [];
  let pos = { x: box.x0 - 1, z: box.z0 - 1, feet: 0 }, time = 0, scaffoldBlocks = 0, maxScaffold = 0;
  let remaining = want.slice();
  let guard = 0;
  while (remaining.length && guard++ < 100000) {
    // บล็อกที่วางได้ตอนนี้ = มีที่ยึด · เรียงจากล่างขึ้นบน แล้วใกล้ตำแหน่งปัจจุบัน
    const ready = remaining.filter((b) => NB.some(([dx, dy, dz]) => solid(b.x + dx, b.y + dy, b.z + dz)));
    if (!ready.length) { problems.push(...remaining.map((b) => ({ ...b, why: 'ไม่มีที่ยึด' }))); break; }
    ready.sort((a, b) => a.y - b.y || Math.hypot(a.x - pos.x, a.z - pos.z) - Math.hypot(b.x - pos.x, b.z - pos.z));
    const b = ready[0];
    // หาจุดยืน: ไม่ทับบล็อกบ้าน · ยืนพื้นได้ (ในบ้านต้องมีพื้น y=0 วางแล้ว) · เอื้อมถึง · ถ้าไม่ถึงลองนั่งร้านสูงขึ้นทีละ 1 (นอกบ้าน)
    let best = null;
    for (let h = 0; h <= maxPillar && !best; h++) {
      for (const s of stands) {
        const feet = s.feet + h;
        if (occupied.has(key(s.x, feet, s.z)) && placed.has(key(s.x, feet, s.z))) continue;
        if (occupied.has(key(s.x, feet + 1, s.z)) && placed.has(key(s.x, feet + 1, s.z))) continue;
        if (!s.outside && !placed.has(key(s.x, 0, s.z))) continue;
        if (s.x === b.x && s.z === b.z && (b.y === feet || b.y === feet + 1)) continue;   // ห้ามวางทับตัวเอง
        const d = dist(s, feet, b);
        if (d > REACH) continue;
        const walk = Math.hypot(s.x - pos.x, s.z - pos.z);
        if (!best || walk < best.walk) best = { s, feet, h, walk, d };
      }
    }
    if (!best) { problems.push({ ...b, why: `เอื้อมไม่ถึงแม้ตั้งนั่งร้าน ${maxPillar}` }); remaining = remaining.filter((x) => x !== b); continue; }
    time += best.walk * T.walk;
    if (best.h > 0) { time += best.h * (T.pillarUp + T.pillarDown); scaffoldBlocks += best.h; maxScaffold = Math.max(maxScaffold, best.h); }
    time += T.place;
    placed.add(key(b.x, b.y, b.z));
    remaining = remaining.filter((x) => x !== b);
    pos = { x: best.s.x, z: best.s.z, feet: best.feet };
    steps.push({ i: steps.length + 1, block: b.name, at: [b.x, b.y, b.z], stand: [best.s.x, best.feet, best.s.z], scaffold: best.h, reach: +best.d.toFixed(2) });
  }
  return { placed: placed.size, total: want.length, steps, problems, timeSec: time, scaffoldBlocks, maxScaffold, done: placed.size === want.length };
}

// แผนผังทีละชั้น (ASCII) สำหรับดู/ตรวจ
const GLYPH = (n) => n.includes('cobble') ? '#' : n.endsWith('_log') ? 'O' : n.includes('planks') ? '=' : n.includes('stairs') ? (n.includes('roof') ? '^' : '^') : n.includes('slab') ? '-' : n.includes('pane') ? '+' : n.includes('door') ? 'D' : n.includes('torch') ? 'i' : n.includes('bed') ? 'B' : n.includes('chest') || n.includes('barrel') ? 'C' : n.includes('furnace') ? 'F' : n.includes('crafting') ? 'T' : '?';
export function layers(design) {
  const xs = design.blocks.map((b) => b.x), zs = design.blocks.map((b) => b.z), ys = design.blocks.map((b) => b.y);
  const [x0, x1, z0, z1] = [Math.min(...xs), Math.max(...xs), Math.min(...zs), Math.max(...zs)];
  const out = [];
  for (let y = Math.min(...ys); y <= Math.max(...ys); y++) {
    const rows = [];
    for (let z = z1; z >= z0; z--) { let r = ''; for (let x = x0; x <= x1; x++) { const b = design.blocks.find((q) => q.x === x && q.y === y && q.z === z); r += b ? GLYPH(b.name) : '.'; } rows.push(r); }
    out.push({ y, rows });
  }
  return out;
}
