// home_keep.mjs — งานบ้านตอนว่าง (รอเผา/รอเช้า): จัดของแยกหมวด + ปรับพื้นรอบบ้าน/ในบ้านให้เรียบ · ทีละนิด + วัดผล
// หมวดตาม W/Tutorial:Organization (≤13 หมวด = ป้ายไม้ 13 สีติดหน้าหีบ) · หีบ 27 ช่อง (W/Chest, W/Barrel)
// ฟังก์ชันล้วน — ปลั๊กอิน/บอตเป็นคนเดินและคลิกจริง · เวลาต่อท่า = ASSUME (วัดจริงแล้วแก้ใน TIME)
import fs from 'node:fs';
import path from 'node:path';

const ROOT = path.resolve(path.dirname(new URL(import.meta.url).pathname), '..', '..');
const ITEMS = Object.fromEntries(JSON.parse(fs.readFileSync(path.join(ROOT, 'data', 'catalog_26.1', 'items.json'), 'utf8')).map((i) => [i.name, i]));
export const CHEST_SLOTS = 27;
export const stackOf = (name) => ITEMS[name]?.stack ?? 64;

// 13 หมวด (ลำดับ = ลำดับตรวจ ตัวแรกที่ตรงชนะ) · ป้ายสีไม้ตามหมวด (ใช้ติดหน้าหีบ ไม่ต้องเขียน)
export const CATEGORIES = [
  ['combat', 'oak', /(_sword|_spear|_helmet|_chestplate|_leggings|_boots|^bow$|^crossbow$|arrow|^shield$|^mace$|^trident$|totem)/],
  ['tools', 'spruce', /(_pickaxe|_axe|_shovel|_hoe$|^shears$|flint_and_steel|fishing_rod|compass|^clock$|spyglass|brush|^map$|filled_map)/],
  ['supplies', 'birch', /^(torch|soul_torch|ladder|scaffolding|water_bucket|lava_bucket|bucket|milk_bucket|cobweb|powder_snow_bucket|ender_pearl|bed|.*_bed|.*_boat)$/],
  ['food', 'jungle', null],                                                     // ตรวจด้วย foods.json
  ['farming', 'acacia', /(seeds|wheat|carrot$|potato$|beetroot$|sugar_cane|bamboo$|cocoa|melon|pumpkin|bone_meal|egg$|sapling|propagule)/],
  ['minerals', 'dark_oak', /(_ingot|_nugget|^raw_|_ore$|^diamond$|^emerald$|^lapis_lazuli$|^coal$|^charcoal$|^redstone$|^quartz$|amethyst_shard|netherite_scrap|ancient_debris|_block$(?<=(iron|gold|diamond|emerald|lapis|coal|redstone|copper|netherite)_block))/],
  ['mob_drops', 'mangrove', /^(rotten_flesh|bone|string|spider_eye|gunpowder|slime_ball|leather|feather|ink_sac|glow_ink_sac|phantom_membrane|rabbit_hide|blaze_rod|ghast_tear|ender_eye|prismarine_shard|prismarine_crystals|shulker_shell|breeze_rod)$/],
  ['brewing', 'cherry', /(potion|glass_bottle|nether_wart|blaze_powder|fermented_spider_eye|glistering|magma_cream|brewing_stand|dragon_breath|glowstone_dust)/],
  ['nether_end', 'pale_oak', /(netherrack|nether_brick|basalt|blackstone|soul_s|crimson|warped|end_stone|purpur|chorus|obsidian|shroomlight|magma_block)/],
  ['wood', 'bamboo', /(_log|_wood|_planks|_stem|_hyphae|stick|_slab$(?<=(oak|spruce|birch|jungle|acacia|cherry|mangrove|bamboo)_slab)|_stairs$(?<=(oak|spruce|birch|jungle|acacia|cherry|mangrove|bamboo)_stairs)|_fence|_door|_trapdoor)/],
  ['stone', 'crimson', /(stone|cobble|deepslate|granite|diorite|andesite|tuff|calcite|brick|sandstone|_slab|_stairs|_wall$|glass)/],
  ['natural', 'warped', /(dirt|grass|sand$|gravel|clay|mud|moss|snow|ice|leaves|flower|tulip|poppy|dandelion|mushroom|kelp|vine|cactus)/],
  ['redstone_misc', 'poplar', /./],                                             // ที่เหลือทั้งหมด (เรดสโตน/อื่น ๆ)
];
const BAD_FOOD = new Set(['rotten_flesh', 'spider_eye', 'poisonous_potato', 'pufferfish', 'chorus_fruit']);   // ของกินได้แต่มีผลเสีย/เป็นวัตถุดิบ → ไม่ใช่หมวดอาหาร
const FOODS = new Set(JSON.parse(fs.readFileSync(path.join(ROOT, 'data', 'catalog_26.1', 'foods.json'), 'utf8')).map((f) => f.name));
export function categoryOf(name) {
  for (const [cat, , re] of CATEGORIES) {
    if (cat === 'food') { if (FOODS.has(name) && !BAD_FOOD.has(name) && !/seeds|carrot$|potato$|beetroot$|melon_slice/.test(name)) return 'food'; continue; }
    if (re.test(name)) return cat;
  }
  return 'redstone_misc';
}

// ---------- จัดหีบ ----------
// chests: [{ id, label?: หมวด, items: [{name, count}] }] → ให้แต่ละหีบมีหมวด (label เดิม หรือหมวดที่มีของมากสุด)
// score = สัดส่วนของ (ชิ้น) ที่อยู่ในหีบหมวดถูก · moves = รายการย้าย (ของที่อยู่ผิดหีบ → หีบหมวดนั้น)
export function sortPlan(chests) {
  const label = new Map();
  for (const c of chests) {
    if (c.label) { label.set(c.id, c.label); continue; }
    const tally = {};
    for (const it of c.items) tally[categoryOf(it.name)] = (tally[categoryOf(it.name)] ?? 0) + it.count;
    const best = Object.entries(tally).sort((a, b) => b[1] - a[1]).find(([cat]) => ![...label.values()].includes(cat));
    if (best) label.set(c.id, best[0]);
  }
  const home = new Map([...label].map(([id, cat]) => [cat, id]));
  let total = 0, right = 0;
  const moves = [];
  for (const c of chests) for (const it of c.items) {
    total += it.count;
    const cat = categoryOf(it.name);
    if (label.get(c.id) === cat) { right += it.count; continue; }
    moves.push({ item: it.name, count: it.count, from: c.id, to: home.get(cat) ?? 'new-chest', cat, stacks: Math.ceil(it.count / stackOf(it.name)) });
  }
  const newChests = [...new Set(moves.filter((m) => m.to === 'new-chest').map((m) => m.cat))];
  return { labels: Object.fromEntries(label), moves, newChests, score: total ? right / total : 1 };
}

// ---------- ปรับพื้นให้เรียบ ----------
// heights: ตาราง (2D) ความสูงพื้นจริง รอบจุดกลางบ้าน · floorY = ระดับพื้นบ้าน · ใกล้บ้านก่อน (ทีละนิดเริ่มจากตรงที่เห็นบ่อยสุด)
// action: dig (สูงกว่าพื้น) / fill (ต่ำกว่าพื้น) · จำนวนบล็อก = |ต่าง| · score = สัดส่วนช่องที่เรียบแล้ว
// keep: พื้นที่ที่ห้ามแตะ (กติกา jing: "ที่ไว้สำหรับขุด เว้นไว้") — ปากเหมือง/บันไดลง/หลุมขุด/ฟาร์ม · [{x0,z0,x1,z1,why}]
export function tidyPlan(heights, floorY, { center = null, maxDiff = 6, keep = [] } = {}) {
  const kept = (x, z) => keep.some((k) => x >= k.x0 && x <= k.x1 && z >= k.z0 && z <= k.z1);
  const H = heights.length, W = heights[0]?.length ?? 0;
  const cz = center?.[0] ?? Math.floor(H / 2), cx = center?.[1] ?? Math.floor(W / 2);
  const actions = [];
  let flat = 0;
  for (let z = 0; z < H; z++) for (let x = 0; x < W; x++) {
    const d = heights[z][x] - floorY;
    if (kept(x, z)) { flat++; continue; }             // พื้นที่ขุด/ฟาร์ม = ถือว่าเรียบร้อยตามหน้าที่ ไม่นับเป็นจุดเลอะ
    if (d === 0) { flat++; continue; }
    if (Math.abs(d) > maxDiff) continue;            // หน้าผา/หลุมลึก = ไม่ใช่งานเก็บบ้าน (ข้าม — กฎบ้านบนพื้นเรียบ)
    actions.push({ x, z, kind: d > 0 ? 'dig' : 'fill', blocks: Math.abs(d), dist: Math.hypot(x - cx, z - cz) });
  }
  actions.sort((a, b) => a.dist - b.dist);
  return { actions, score: H * W ? flat / (H * W) : 1 };
}

// ---------- วัดผล: ช่วงรอทำได้แค่ไหน ----------
// เวลาต่อท่า (วิ) — ASSUME จนกว่าจะวัดจริง: ย้าย 1 กอง (เปิดหีบ/คลิก) · ขุด 1 บล็อกดินด้วยพลั่ว · วาง 1 บล็อก · เดินระหว่างจุด
export const TIME = { moveStack: 1.0, openChest: 1.0, dig: 0.5, place: 0.3, walkPerBlock: 1 / 4.317 };
export function fitInWindow({ sort = { moves: [] }, tidy = { actions: [] }, waitSec }) {
  let t = 0; const doneSort = [], doneTidy = [];
  for (const m of sort.moves) { const c = TIME.openChest + m.stacks * TIME.moveStack; if (t + c > waitSec) break; t += c; doneSort.push(m); }
  let prev = null;
  for (const a of tidy.actions) {
    const walk = prev ? Math.hypot(a.x - prev.x, a.z - prev.z) * TIME.walkPerBlock : 0;
    const c = walk + a.blocks * (a.kind === 'dig' ? TIME.dig : TIME.place);
    if (t + c > waitSec) break; t += c; doneTidy.push(a); prev = a;
  }
  return { usedSec: t, sortMoves: doneSort.length, tidyActions: doneTidy.length, doneSort, doneTidy };
}

// บันทึกวัดผลจริงต่อรอบรอ: ก่อน/หลัง → ดูว่าบ้าน "ดีขึ้นเรื่อย ๆ" จริงไหม
export function createHomeMeter() {
  const log = [];
  return {
    record: ({ waitSec, sortBefore, sortAfter, tidyBefore, tidyAfter, sortMoves = 0, tidyActions = 0 }) =>
      log.push({ waitSec, sortBefore, sortAfter, tidyBefore, tidyAfter, sortMoves, tidyActions }),
    summary: () => ({
      rounds: log.length,
      waitSec: log.reduce((a, r) => a + r.waitSec, 0),
      sortScore: log.at(-1)?.sortAfter ?? null, tidyScore: log.at(-1)?.tidyAfter ?? null,
      sortGainPerMin: log.length ? log.reduce((a, r) => a + (r.sortAfter - r.sortBefore), 0) / (log.reduce((a, r) => a + r.waitSec, 0) / 60 || 1) : 0,
      tidyGainPerMin: log.length ? log.reduce((a, r) => a + (r.tidyAfter - r.tidyBefore), 0) / (log.reduce((a, r) => a + r.waitSec, 0) / 60 || 1) : 0,
      log,
    }),
  };
}

// ---------- ฝากของเข้าหีบ: อะไรเก็บติดตัว (เว้นไว้) ----------
// กติกา jing: "ถ้าเป็นของสำหรับขุดก็เว้นเอาไว้" → เครื่องมือขุด/คบเพลิง/บันได/อาหาร/อาวุธ/เกราะ/ของกันตก ไม่ฝาก
const KEEP_ON_BOT = /(_pickaxe|_shovel|_axe$|^torch$|^ladder$|^scaffolding$|_sword|_spear|^bow$|^crossbow$|^arrow$|^shield$|water_bucket|ender_pearl|^bucket$|_helmet|_chestplate|_leggings|_boots)/;
export function stashPlan(inv = {}, { keepFoodPoints = 20, keepBlocks = 64 } = {}) {
  const keep = {}, deposit = {};
  let foodLeft = keepFoodPoints, blocksLeft = keepBlocks;
  for (const [k, v] of Object.entries(inv)) {
    const cat = categoryOf(k);
    if (KEEP_ON_BOT.test(k)) { keep[k] = v; continue; }
    if (cat === 'food' && foodLeft > 0) { const n = Math.min(v, Math.ceil(foodLeft / 4)); keep[k] = n; foodLeft -= n * 4; if (v > n) deposit[k] = v - n; continue; }   // ≈4 แต้ม/ชิ้น
    if (/^(cobblestone|cobbled_deepslate|dirt)$/.test(k) && blocksLeft > 0) { const n = Math.min(v, blocksLeft); keep[k] = n; blocksLeft -= n; if (v > n) deposit[k] = v - n; continue; }   // บล็อกถมทาง/ปิดลาวา
    deposit[k] = v;
  }
  return { keep, deposit };
}
