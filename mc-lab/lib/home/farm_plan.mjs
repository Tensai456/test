// farm_plan.mjs — วางผังฟาร์มพืช + ล้อมรั้ว + คบเพลิง + วัสดุที่ต้องใช้ (ฟังก์ชันล้วน)
// วิกิ: น้ำ 1 ช่องทำให้ farmland ชุ่มในระยะ 4 บล็อกแนวนอน (รวมทแยง) ระดับเดียวกันหรือต่ำกว่า 1 (W/Farmland)
//   → แปลง 9×9 น้ำกลาง = farmland 80 ช่อง · พืชโตเมื่อแสงที่ต้น ≥9 (W/Tutorial:Crop_farming) → คบเพลิงแสง 14 ครอบ ≤5 บล็อก (taxicab)
//   รั้วสูง 1.5 ม็อบส่วนใหญ่กระโดดข้ามไม่ได้ ยกเว้นแมงมุม (ปีน) และกระต่าย (กระโดด) · ประตูรั้วปิดก็สูง 1.5 (W/Fence, W/Fence_Gate)
//   สูตร: รั้ว = แผ่นไม้ 4 + ไม้ 2 → 3 · ประตูรั้ว = ไม้ 4 + แผ่นไม้ 2 → 1 · คบเพลิง = ถ่าน 1 + ไม้ 1 → 4 (data/catalog_26.1/recipes.json)
export const PLOT = 9;                 // แปลงมาตรฐาน 9×9 (น้ำ 1 ช่องกลาง)
export const LIGHT_REACH_CROP = 5;     // 14 − 9 = ไกลสุด 5 บล็อกที่ยังได้แสง ≥9

// origin = มุมแปลงแรก {x, z} · plots = [กว้าง, ยาว] (จำนวนแปลง) · path = ทางเดิน 1 ช่องรอบแปลงในรั้ว (เผื่อเดินไม่เหยียบ farmland)
// entrance: 'carpet' = รั้ว + พรมบนหัว (ผู้เล่นกระโดดขึ้นได้ ม็อบขึ้นไม่ได้ ยกเว้นกระต่าย/อูฐ — W/Fence) · 'gate' = ประตูรั้ว
export function farmPlan({ origin = { x: 0, z: 0 }, plots = [1, 1], path = true, gateSide = 'south', entrance = 'carpet' } = {}) {
  const [px, pz] = plots;
  const water = [], farmland = [];
  for (let i = 0; i < px; i++) for (let j = 0; j < pz; j++) {
    const x0 = origin.x + i * PLOT, z0 = origin.z + j * PLOT;
    for (let dx = 0; dx < PLOT; dx++) for (let dz = 0; dz < PLOT; dz++) {
      const c = { x: x0 + dx, z: z0 + dz };
      (dx === 4 && dz === 4 ? water : farmland).push(c);
    }
  }
  // รั้ว: กรอบรอบพื้นที่ทั้งหมด (+ทางเดิน 1 ช่องถ้า path)
  const m = path ? 1 : 0;
  const X0 = origin.x - m - 1, Z0 = origin.z - m - 1, X1 = origin.x + px * PLOT + m, Z1 = origin.z + pz * PLOT + m;
  const ring = [];
  for (let x = X0; x <= X1; x++) { ring.push({ x, z: Z0 }); ring.push({ x, z: Z1 }); }
  for (let z = Z0 + 1; z < Z1; z++) { ring.push({ x: X0, z }); ring.push({ x: X1, z }); }
  const gx = Math.floor((X0 + X1) / 2), gz = gateSide === 'north' ? Z0 : Z1;
  const gate = { x: gx, z: gz, kind: entrance };
  // carpet: จุดเข้าเป็นรั้วธรรมดา + พรมบนหัว → นับเป็นรั้วด้วย · gate: เว้นช่องไว้ใส่ประตูรั้ว
  const fences = entrance === 'carpet' ? ring : ring.filter((c) => !(c.x === gate.x && c.z === gate.z));
  // คบเพลิง: ให้ทุก farmland ได้แสง ≥9 (taxicab ≤5) · เลือกช่องที่ครอบช่องมืดได้มากสุดก่อน (greedy) · ช่องคบเพลิงไม่ไถ (ดินธรรมดา)
  const torches = [];
  const reach = (t, f) => Math.abs(t.x - f.x) + Math.abs(t.z - f.z) <= LIGHT_REACH_CROP;
  let dark = farmland.slice();
  while (dark.length) {
    let best = null, bestN = -1;
    for (const c of farmland) { if (torches.some((t) => t.x === c.x && t.z === c.z)) continue; const n = dark.filter((f) => reach(c, f)).length; if (n > bestN) { best = c; bestN = n; } }
    torches.push({ ...best, y: 0, onFarmland: true });
    dark = dark.filter((f) => !reach(best, f) && !(f.x === best.x && f.z === best.z));
  }
  // วัสดุ
  const fenceCrafts = Math.ceil(fences.length / 3);
  const torchCrafts = Math.ceil(torches.length / 4);
  const need = {
    planks: fenceCrafts * 4 + (entrance === 'gate' ? 2 : 0),          // + ประตูรั้ว 2
    sticks: fenceCrafts * 2 + (entrance === 'gate' ? 4 : 0) + torchCrafts,
    ...(entrance === 'carpet' ? { wool: 2 } : {}),                      // ขนแกะ 2 → พรม 3 (recipes.json)
    coal: torchCrafts,
    water_bucket: water.length <= 1 ? 1 : 2,            // ถัง 2 ใบ + แหล่งน้ำ 2 ช่อง = น้ำไม่จำกัด (W/Water) [ทำเองได้]
    seeds: farmland.length - torches.filter((t) => t.onFarmland).length,
    hoe: 1,
  };
  need.logs = Math.ceil((need.planks + Math.ceil(need.sticks / 4) * 2) / 4);   // ไม้ 2 แผ่น → 4 อัน
  return { water, farmland: farmland.filter((f) => !torches.some((t) => t.onFarmland && t.x === f.x && t.z === f.z)), fences, gate, torches, need, box: { x0: X0, z0: Z0, x1: X1, z1: Z1 } };
}

// พื้นที่ฟาร์ม → keep zone ให้ tidyPlan/torchPlan (home_keep) ไม่ไปถม/ปักทับ
export const farmKeepZone = (plan) => ({ ...plan.box, why: 'farm' });

// ---------- ลำดับทำฟาร์ม (กติกา jing): ไม่ทำทันที → หาของมาก่อน → เลือกที่เหมาะ → เคลียร์พื้น → ค่อยเริ่มทำฟาร์ม ----------
export const FARM_STEPS = ['gather', 'site', 'clear', 'build'];   // gather: เมล็ด/ถังน้ำ/ไม้ทำรั้ว/ถ่าน/จอบ ครบตาม need
// เลือกที่ตั้ง: heights (2D รอบบ้าน) · หาตำแหน่งกรอบฟาร์ม (box ของ farmPlan) ที่ต้องขุด/ถมน้อยสุด · ไม่ทับ keep (ทางขึ้นบ้าน/ปากเหมือง) · ใกล้บ้านเป็นตัวตัดสินรอง
export function chooseFarmSite(heights, { size = 13, keep = [], center = null, maxDiff = 2 } = {}) {
  const H = heights.length, W = heights[0]?.length ?? 0;
  const cz = center?.[0] ?? Math.floor(H / 2), cx = center?.[1] ?? Math.floor(W / 2);
  const hit = (x0, z0) => keep.some((k) => !(x0 + size - 1 < k.x0 || x0 > k.x1 || z0 + size - 1 < k.z0 || z0 > k.z1));
  let best = null;
  for (let z0 = 0; z0 + size <= H; z0++) for (let x0 = 0; x0 + size <= W; x0++) {
    if (hit(x0, z0)) continue;
    const hs = []; for (let z = z0; z < z0 + size; z++) for (let x = x0; x < x0 + size; x++) hs.push(heights[z][x]);
    const sorted = hs.slice().sort((a, b) => a - b), floorY = sorted[Math.floor(sorted.length / 2)];
    if (sorted.at(-1) - sorted[0] > maxDiff * 2) continue;            // ชันเกิน → ไม่เหมาะ (กฎบ้าน/ฟาร์มบนพื้นเรียบ)
    const work = hs.reduce((a, h) => a + Math.abs(h - floorY), 0);
    const dist = Math.abs(x0 + size / 2 - cx) + Math.abs(z0 + size / 2 - cz);
    const score = work * 10 + dist;
    if (!best || score < best.score) best = { x0, z0, floorY, work, dist, score };
  }
  return best;   // null = ไม่มีที่เหมาะในเขต → ขยายเขต/ทำทีหลัง
}
