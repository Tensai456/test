// iron_race.mjs — โมเดลค่าคาดหวัง (ไม่สุ่ม) เวลาเก็บเหล็ก: ไม้ → หิน → ลงเหมือง → ขุดหาแร่ → เผา → กลับ
// เวลาขุดจาก minecraft-data 26.1 (kb/blocks) · เวลาเผา/เชื้อเพลิงจาก วิกิ · ค่าที่ไม่มีแหล่ง = ASSUME (ปรับได้)
// pVein (โอกาสบล็อกที่เห็นเป็นสายแร่เหล็กใหม่) ไม่มีในวิกิ → calibrate จากเวลาจริงของแล็บ (40 นาที)

export const DIG = { // วินาที (catalog_26.1)
  log: { hand: 3.0, wooden: 1.5, stone: 0.75, iron: 0.5 },
  stone: { wooden: 1.15, stone: 0.6, iron: 0.4 },
  iron_ore: { stone: 1.15, iron: 0.75 },
  coal_ore: { wooden: 2.3, stone: 1.15, iron: 0.75 },
};
export const SPRINT = 5.612;          // m/s (วิกิ)
export const SMELT = { furnace: 10, blast: 5 };   // วิ/ชิ้น (วิกิ)

export const DEFAULTS = {
  targetIngots: 88,          // ชุดเกราะ 24 + 1 stack 64 (เป้าที่ jing ให้)
  logsNeeded: 8,             // โต๊ะ + ไม้ + อีเต้อ/ดาบไม้ + เผื่อ (ASSUME)
  logWalkSec: 1.8,           // เดิน/ปีนต่อซุง 1 ท่อน (ASSUME)
  descendBlocks: 48,         // Y64 → Y16 (กลยุทธ์ขุดที่ Y≈16 — kb/progression/ores-y-levels)
  stairDigsPerStep: 3,       // บันไดลงต่อขั้น (ASSUME)
  veinSize: 4,               // แร่ต่อสาย (ASSUME — วิกิไม่ระบุค่าเฉลี่ย)
  coalPerIronVein: 1.0,      // สายถ่านที่เจอต่อสายเหล็ก (ASSUME)
  overheadSec: 90,           // คราฟต์ + เดินกลับ + จัดของ (ASSUME)
  pVein: null,               // calibrate
};

// strategy: { chop: 'hand'|'wooden'|'stone', spacing: 2|6, ironPickFirst, furnaces, blast, parallelSmelt, miners, choppers, spelunk }
export function simulate(st, p0 = {}) {
  const p = { ...DEFAULTS, ...p0 };
  const b = {};
  const choppers = st.choppers ?? 1;
  b.wood = (p.logsNeeded * (DIG.log[st.chop ?? 'hand'] + p.logWalkSec)) / choppers;
  // หิน: 3 ก้อนด้วยอีเต้อไม้ + หินทำเตา 8/เตา (ขุดระหว่างทางลง — คิดเฉพาะส่วนเกินจากบันได)
  const furnaces = st.furnaces ?? 1;
  b.stone = 3 * (DIG.stone.wooden + 1.5) + Math.max(0, furnaces * 8 + 2 - p.descendBlocks * p.stairDigsPerStep * 0.5) * DIG.stone.stone;
  b.descend = p.descendBlocks * (p.stairDigsPerStep * DIG.stone.stone + 1 / SPRINT);
  // ขุดหา: แต่ละเมตรขุด 2 บล็อก · เห็นบล็อกใหม่ต่อเมตร: เว้นกิ่ง 6 = 6, เว้น 2 = 4 (ผนังซ้ำ) · spelunk = ไม่ต้องขุด แต่เดินอ้อม (ASSUME ×3 ระยะ)
  const exposure = st.spelunk ? 6 : st.spacing === 6 ? 6 : 4;
  const veinsNeeded = (p.targetIngots + (st.ironPickFirst ? 3 : 0)) / p.veinSize;
  const metersPerVein = 1 / (exposure * p.pVein);
  const minersN = st.miners ?? 1;
  const pickAt = (i) => (st.ironPickFirst && i * p.veinSize >= 3 ? 'iron' : 'stone');
  let mine = 0;
  for (let v = 0; v < Math.ceil(veinsNeeded); v++) {
    const pick = pickAt(v);
    const perMeter = st.spelunk ? 3 / SPRINT + 0.4 : 2 * DIG.stone[pick] + 1 / SPRINT + 0.1;
    mine += metersPerVein * perMeter + p.veinSize * (DIG.iron_ore[pick] + 0.6) + p.coalPerIronVein * 2 * DIG.coal_ore[pick];
  }
  b.mine = mine / minersN;
  // เผา: ขนานกับการขุด (เผาไปเรื่อย ๆ เหลือแค่ล็อตสุดท้าย) หรือเผาตอนจบ
  const per = st.blast ? SMELT.blast : SMELT.furnace;
  const total = p.targetIngots + (st.ironPickFirst ? 3 : 0);
  const smeltAll = (total * per) / furnaces;
  b.smelt = st.parallelSmelt ? Math.min(smeltAll, (p.veinSize * 4 * per) / furnaces) : smeltAll;
  // blast furnace: ต้องใช้เหล็ก 5 + หินเรียบ 3 (เผาหิน 6 ครั้ง) → ต้นทุนเวลา
  b.blastCost = st.blast ? 5 * (DIG.iron_ore.stone + 2) + 6 * SMELT.furnace : 0;
  b.overhead = p.overheadSec;
  const totalSec = Object.values(b).reduce((a, x) => a + x, 0);
  return { totalSec, totalMin: totalSec / 60, breakdown: b };
}

// หา pVein ที่ทำให้กลยุทธ์ baseline = targetMin
export function calibrate(baseline, targetMin, p0 = {}) {
  let lo = 1e-5, hi = 0.5;
  for (let i = 0; i < 80; i++) {
    const mid = Math.sqrt(lo * hi);
    if (simulate(baseline, { ...p0, pVein: mid }).totalMin > targetMin) lo = mid; else hi = mid;
  }
  return Math.sqrt(lo * hi);
}
