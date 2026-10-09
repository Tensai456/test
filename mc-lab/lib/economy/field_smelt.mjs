// field_smelt.mjs — วางแผน "เผาไป ตะเวนไป" ตามที่ตั้งเตา (บ้าน / ผิวดินนอกบ้าน / ในเหมือง) · ฟังก์ชันล้วน
// แหล่งค่า: kb/progression/smelting-fuel (W/Furnace, W/Blast_Furnace, W/Charcoal, W/Tutorial:Smelting)
// กติกา jing (7 ต.ค. 2026): นอกบ้าน → ดูของรอบตัว ไม้ไม่พอตัดแถวนั้น ไม่มีออกหา ≈50 บล็อก ระหว่างเผาเดินเก็บของ แล้วจำทางกลับ
//   ในบ้าน → เผาแล้วรอในบ้าน · ในเหมือง → เผาที่จุดนั้น ตะเวนสำรวจเท่าที่ไปได้ จำทางกลับ

export const SMELT_SEC = { furnace: 10, blast_furnace: 5, smoker: 5 };
// เชื้อเพลิง → จำนวนชิ้นที่เผาได้ (furnace)
export const FUEL_ITEMS = { coal: 8, charcoal: 8, coal_block: 80, lava_bucket: 100, blaze_rod: 12, dried_kelp_block: 20, stick: 0.5 };
const PLANK_ITEMS = 1.5, LOG_ITEMS = 1.5;   // ซุง = เผาได้ 1.5 ชิ้นเท่าแผ่นไม้ แต่ซุง 1 ท่อน → แผ่นไม้ 4 แผ่น = 6 ชิ้น (คราฟต์ก่อนคุ้มกว่า)
// ของที่ต้องเผาถึงจะใช้ได้ · เพชร/ถ่าน/เรดสโตน/ลาพิส/มรกต ขุดแล้วได้ของเลย → ห้ามเผา (เปลืองเชื้อเพลิง)
export const NEEDS_SMELT = { raw_iron: 'iron_ingot', raw_gold: 'gold_ingot', raw_copper: 'copper_ingot', ancient_debris: 'netherite_scrap', iron_ore: 'iron_ingot', deepslate_iron_ore: 'iron_ingot', gold_ore: 'gold_ingot', copper_ore: 'copper_ingot' };
export const NO_SMELT = ['diamond', 'coal', 'redstone', 'lapis_lazuli', 'emerald', 'raw_diamond'];
// ความเร็วตะเวน (เดิน+มอง+เก็บ) ≈ ช้ากว่าเดินปกติ 4.317 m/s (W/Walking) มาก (ASSUME) · ขุดในเหมืองช้ากว่าอีก (ASSUME)
export const ROAM_SPEED = { surface: 1.5, mine: 0.6, home: 0 };
export const ROAM_CAP = 50;          // กติกา jing: ออกหาไม้/อาหารรอบเตา ≈50 บล็อก
// เตาหยุดเผาเมื่อชังก์ไม่โหลด (W/Smelting) → รัศมีต้องอยู่ในระยะจำลองของเซิร์ฟ (simulation-distance × 16) เผื่อ 1 ชังก์
export const DEFAULT_SIM_CHUNKS = 10;   // ค่าเริ่ม server.properties [ไม่แน่ใจ: ค่าที่เซิร์ฟ s39 ตั้ง]
// อาหารขั้นต่ำนอกบ้าน = หลอดหิวเต็ม 1 หลอด (เกณฑ์แล็บ) · การตะเวนเองกินน้อยมาก: เดิน 0 · วิ่ง 0.1/ม. · ขุด 0.025/บล็อก
// · ครบ 4 exhaustion = หิว/อิ่มแฝงลด 1 (W/Hunger) → วิ่ง 100 ม. ≈ 2.5 แต้ม · ที่กินจริงคือการฟื้นเลือดและการสู้ → เผื่อ 20
export const FOOD_MIN_POINTS = 20;
import fs from 'node:fs';
import path from 'node:path';
const FOODS = Object.fromEntries(JSON.parse(fs.readFileSync(path.join(path.dirname(new URL(import.meta.url).pathname), '..', '..', 'data', 'catalog_26.1', 'foods.json'), 'utf8')).map((f) => [f.name, f.food]));
const BAD_FOOD = new Set(['rotten_flesh', 'chicken', 'spider_eye', 'poisonous_potato', 'pufferfish']);   // ไม่นับ (มีผลเสีย)
// อาหารในกระเป๋า → แต้มหิวรวม (ไม่นับของมีผลเสีย)
export function foodPoints(inv = {}) {
  return Object.entries(inv).reduce((a, [k, v]) => a + (FOODS[k] && !BAD_FOOD.has(k) ? FOODS[k] * v : 0), 0);
}

// เชื้อเพลิงในกระเป๋า → เผาได้กี่ชิ้น (แผ่นไม้/ซุงนับรวม)
export function fuelCapacity(inv = {}) {
  let n = 0;
  for (const [k, v] of Object.entries(inv)) {
    if (FUEL_ITEMS[k] != null) n += FUEL_ITEMS[k] * v;
    else if (k.endsWith('_planks')) n += PLANK_ITEMS * v;
    else if (/_(log|stem)$/.test(k)) n += LOG_ITEMS * 4 * v;   // ซุง → คราฟต์เป็นแผ่นไม้ 4 ก่อน (6 ชิ้น/ท่อน)
  }
  return n;
}

// แผน: { smelt:[{item,n}], items, sec, fuelNeed, fuelHave, logsToChop, wait, roamRadius, returnAtSec }
export function smeltPlan({ inv = {}, location = 'surface', furnace = 'furnace', need = { iron: Infinity, gold: Infinity, copper: 0 }, woodNearby = true, simChunks = DEFAULT_SIM_CHUNKS } = {}) {
  const want = { iron_ingot: need.iron ?? Infinity, gold_ingot: need.gold ?? Infinity, copper_ingot: need.copper ?? 0, netherite_scrap: Infinity };
  const smelt = [];
  for (const [k, v] of Object.entries(inv)) {
    const out = NEEDS_SMELT[k];
    if (!out || v <= 0) continue;
    const n = Math.min(v, want[out]);
    if (n > 0) { smelt.push({ item: k, n }); want[out] -= n; }
  }
  const items = smelt.reduce((a, s) => a + s.n, 0);
  const per = furnace === 'blast_furnace' ? SMELT_SEC.blast_furnace : SMELT_SEC.furnace;
  const sec = items * per;
  const fuelHave = fuelCapacity(inv);
  const short = Math.max(0, items - fuelHave);
  const logsToChop = Math.ceil(short / (LOG_ITEMS * 4));
  // ตะเวน: ไป-กลับให้ทันเผาเสร็จ → รัศมี ≤ เวลา × ความเร็ว ÷ 2 · ไม่เกิน 50 · ในบ้าน = รอ
  const roamRadius = location === 'home' ? 0 : Math.min(ROAM_CAP, (simChunks - 1) * 16, Math.floor((sec * ROAM_SPEED[location]) / 2));
  return {
    smelt, items, sec, fuelHave, fuelNeed: items, logsToChop,
    fuelAction: short === 0 ? 'ok' : woodNearby ? 'chop-nearby' : location === 'mine' ? 'use-mined-coal' : `search-wood-${ROAM_CAP}`,
    wait: location === 'home' ? 'wait-home' : location === 'mine' ? 'explore-mine' : 'roam-surface',
    roamRadius, returnAtSec: sec,
    skipped: Object.keys(inv).filter((k) => NO_SMELT.includes(k)),
    food: foodPoints(inv), foodAction: foodPoints(inv) >= FOOD_MIN_POINTS ? 'ok' : location === 'home' ? 'eat-from-chest' : `forage-${ROAM_CAP}`,
  };
}
