// gen_recipes_md.mjs — สูตรคราฟต์ทั้งหมด (data/catalog_26.1/recipes.json ← minecraft-data 26.1) → docs/wiki/recipes.md แยกหมวด
// node scripts/gen_recipes_md.mjs && node scripts/split_kb.mjs → kb/recipes/<หมวด>.md
import fs from 'node:fs';
import path from 'node:path';

const ROOT = path.resolve(path.dirname(new URL(import.meta.url).pathname), '..');
const R = JSON.parse(fs.readFileSync(path.join(ROOT, 'data', 'catalog_26.1', 'recipes.json'), 'utf8'));
const COLORS = 'white|orange|magenta|light_blue|yellow|lime|pink|gray|light_gray|cyan|purple|blue|brown|green|red|black';
const WOOD = 'oak|spruce|birch|jungle|acacia|dark_oak|mangrove|cherry|pale_oak|bamboo|crimson|warped|poplar';

// หมวดเรียงตามความสำคัญต่อการรอด · ตัวแรกที่ตรง = หมวดนั้น
const CATS = [
  ['tools', 'เครื่องมือ', /(_pickaxe|_axe|_shovel|_hoe)$|^(shears|flint_and_steel|fishing_rod|brush|spyglass|compass|recovery_compass|clock|map|lead|bundle|carrot_on_a_stick|warped_fungus_on_a_stick)$/],
  ['weapons', 'อาวุธ', /(_sword|_spear)$|^(bow|crossbow|arrow|spectral_arrow|shield|mace|trident|wind_charge|tipped_arrow)$/],
  ['armor', 'เกราะ', /(_helmet|_chestplate|_leggings|_boots|_horse_armor|_nautilus_armor)$|^(turtle_helmet|wolf_armor)$/],
  ['food', 'อาหาร', /^(bread|cake|cookie|pumpkin_pie|mushroom_stew|rabbit_stew|beetroot_soup|suspicious_stew|golden_apple|golden_carrot|glistering_melon_slice|sugar|honey_bottle|melon_seeds|pumpkin_seeds|dried_kelp|dried_kelp_block|hay_block|wheat|melon|honey_block)$/],
  ['utility', 'ของใช้/สถานี', /^(crafting_table|furnace|blast_furnace|smoker|chest|trapped_chest|barrel|ender_chest|torch|soul_torch|copper_torch|lantern|soul_lantern|campfire|soul_campfire|bucket|ladder|scaffolding|anvil|enchanting_table|brewing_stand|cauldron|grindstone|stonecutter|smithing_table|cartography_table|fletching_table|loom|composter|bookshelf|chiseled_bookshelf|book|writable_book|paper|bowl|glass_bottle|item_frame|glow_item_frame|painting|armor_stand|beacon|conduit|lodestone|respawn_anchor|end_crystal|ender_eye|fire_charge|bone_meal|beehive|jukebox|crafter|lectern|flower_pot|decorated_pot|candle|stick|charcoal)$|_bed$|^shulker_box$/],
  ['transport', 'การเดินทาง', /(_boat|_chest_boat|_raft|_chest_raft|minecart|rail)$|^(saddle|harness)$|_harness$/],
  ['redstone', 'เรดสโตน', /^(redstone_torch|repeater|comparator|piston|sticky_piston|observer|hopper|dropper|dispenser|lever|tnt|daylight_detector|target|note_block|tripwire_hook|redstone_lamp|lightning_rod|sculk_sensor|calibrated_sculk_sensor|tinted_glass|slime_block)$|(_button|_pressure_plate)$/],
  ['metals', 'แท่ง/บล็อกแร่/เศษ', /(_ingot|_nugget|_block)$|^(iron_bars|chain|iron_chain|copper_chain|netherite_ingot|diamond|emerald|lapis_lazuli|redstone|coal|raw_iron|raw_gold|raw_copper|iron_door|iron_trapdoor|heavy_weighted_pressure_plate|light_weighted_pressure_plate)$/],
  ['dyes', 'สีย้อม', /_dye$/],
  ['colored', 'ของมีสี (ขนแกะ/พรม/ป้าย/แก้วสี/คอนกรีต)', new RegExp(`^(${COLORS})_`)],
  ['wood', 'ไม้', new RegExp(`^(stripped_)?(${WOOD})_|_(planks|log|wood|hyphae|stem)$`)],
  ['copper', 'ทองแดง', /copper/],
  ['templates', 'แม่แบบ smithing', /_smithing_template$/],
];
const cat = (n) => (CATS.find(([, , re]) => re.test(n)) ?? ['building', 'บล็อกก่อสร้าง/อื่น ๆ'])[0];
const TITLE = Object.fromEntries([...CATS.map(([k, t]) => [k, t]), ['building', 'บล็อกก่อสร้าง/อื่น ๆ']]);
const NOTE = {
  tools: 'บอตควร: ลำดับคราฟต์แรก: โต๊ะ → อีเต้อไม้ → อีเต้อหิน → (เหล็ก 3) อีเต้อเหล็ก ให้นักขุด 1 ตัว (กฎ jing) · ถือเครื่องมือสำรองเสมอ',
  weapons: 'บอตควร: ดาบหิน/เหล็กก่อน · โล่ (เหล็ก 1 + ไม้กระดาน 6) ทำเร็วที่สุดเมื่อมีเหล็กเกิน · ห้ามทิ้งอาวุธ (กฎแล็บ)',
  armor: 'บอตควร: **เสื้อก่อนเสมอ** ทุกวัสดุ · ทองใช้ทำรองเท้าเท่านั้น (กฎ jing) · ไปนรกสวมทอง 1 ชิ้นกัน piglin',
  food: 'บอตควร: ขนมปัง (ข้าวสาลี 3) คือสูตรอาหารแรกที่คราฟต์ได้ · แอปเปิลทอง (ทอง 8 แท่ง + แอปเปิล) สำรองสำหรับสู้',
  utility: 'บอตควร: เตา (หินกรวด 8) ทำหลายเตาพร้อมกันเพื่อเผาเหล็กขนาน (IRON_RACE) · ถัง (เหล็ก 3) = ของกันตกหลัก',
  redstone: 'บอตควร: ใช้เฉพาะประตู/ปุ่ม/คันโยก/ประตูเหล็ก (kb/redstone-basics) · TNT ห้ามใช้ใกล้ฐาน',
};

const fmt = (r) => Object.entries(r.in).map(([k, v]) => `${k}×${v}`).join(' + ');
const groups = {};
for (const [item, list] of Object.entries(R)) (groups[cat(item)] ??= []).push([item, list]);
const order = [...CATS.map(([k]) => k), 'building'].filter((k) => groups[k]);

const md = ['# สูตรคราฟต์ทั้งหมด (Java 26.1 · 887 สูตร)', '',
  '> แหล่ง: minecraft-data 3.117.0 (ข้อมูลเกม 26.1 — 26.2 ยังไม่มีข้อมูล) · สร้างอัตโนมัติด้วย `scripts/gen_recipes_md.mjs` · ห้ามแก้มือ · ช่อง "ตาราง" = ขนาดช่องคราฟต์ขั้นต่ำ (2x2 = ในกระเป๋าได้) · วัตถุดิบที่ใช้แทนกันได้ (เช่น ไม้กระดานชนิดใดก็ได้) อาจแสดงเป็นชนิดเดียว [ไม่แน่ใจ: การรวม tag ของ minecraft-data]', ''];
for (const k of order) {
  const rows = groups[k].sort((a, b) => a[0].localeCompare(b[0]));
  md.push(`## ${k} · ${TITLE[k]} (${rows.length} สูตร)`, '', '| ไอเทม | วัตถุดิบ | ได้ | ตาราง |', '|---|---|---|---|');
  for (const [item, list] of rows) for (const r of list) md.push(`| ${item} | ${fmt(r)} | ${r.out} | ${r.grid ?? '-'} |`);
  md.push('', NOTE[k] ?? 'บอตควร: ค้นจากตารางนี้เมื่อต้องการ · ของที่ไม่จำเป็นต่อการรอด ไม่ต้องคราฟต์ช่วง 3 วันแรก', '',
    'ตัดสินผล: คราฟต์สำเร็จในเกมจริง = สูตรถูก · ถ้าเซิร์ฟปฏิเสธ → ตรวจ data pack/เวอร์ชัน (kb/advanced/data-driven)', '');
}
fs.writeFileSync(path.join(ROOT, 'docs', 'wiki', 'recipes.md'), md.join('\n'));
console.log(order.map((k) => `${k}:${groups[k].length}`).join(' '));
