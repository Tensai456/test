// gen_catalog.cjs — สร้างแคตตาล็อกทุกบล็อก/ไอเทม/อาหาร/เอนทิตี/เอนชานต์/เอฟเฟกต์ จาก minecraft-data
// ใช้: node scripts/gen_catalog.cjs [version=26.1]  (ต้องมี minecraft-data — มากับ mineflayer)
// เวลาขุด: สูตรวานิลลา (Breaking wiki) damage/tick = speed / hardness / (ขุดได้ของ ? 30 : 100) · ticks = ceil(1/damage)

const fs = require('fs');
const path = require('path');
const ver = process.argv[2] || '26.1';
const d = require('minecraft-data')(ver);
if (!d) throw new Error(`minecraft-data ไม่มีข้อมูล ${ver}`);

const OUT = path.join(__dirname, '..', 'data', `catalog_${ver}`);
fs.mkdirSync(OUT, { recursive: true });
const item = (id) => d.items[id]?.name;

const TIERS = ['wooden', 'stone', 'copper', 'golden', 'iron', 'diamond', 'netherite'];
const FAMILIES = ['pickaxe', 'axe', 'shovel', 'hoe', 'sword'];

// บล็อกพิเศษด้านอันตราย/ฟิสิกส์ (คัดมือ — รายละเอียดใน docs/playbook/BLOCK_PHYSICS.md)
const TAGS = {
  danger: ['lava', 'fire', 'soul_fire', 'magma_block', 'cactus', 'sweet_berry_bush', 'wither_rose', 'campfire', 'soul_campfire', 'powder_snow', 'pointed_dripstone', 'tnt', 'sculk_shrieker', 'sculk_sensor', 'calibrated_sculk_sensor'],
  gravity: ['sand', 'red_sand', 'suspicious_sand', 'gravel', 'suspicious_gravel', 'anvil', 'chipped_anvil', 'damaged_anvil', 'dragon_egg', 'pointed_dripstone', 'scaffolding'],
  slows: ['cobweb', 'soul_sand', 'honey_block', 'sweet_berry_bush', 'powder_snow', 'mud', 'water', 'lava'],
  slippery: ['ice', 'packed_ice', 'blue_ice', 'frosted_ice', 'slime_block'],
  climbable: ['ladder', 'vine', 'scaffolding', 'twisting_vines', 'twisting_vines_plant', 'weeping_vines', 'weeping_vines_plant', 'cave_vines', 'cave_vines_plant'],
  fallSafe: ['water', 'powder_snow', 'cobweb', 'slime_block', 'hay_block', 'honey_block', 'sweet_berry_bush', 'scaffolding', 'ladder', 'vine', 'twisting_vines', 'weeping_vines'],
};
const tagOf = (n) => Object.entries(TAGS).filter(([, l]) => l.includes(n) || (l.includes('anvil') && n.endsWith('anvil'))).map(([k]) => k)
  .concat(n.endsWith('concrete_powder') ? ['gravity'] : [])
  .concat(/_bed$/.test(n) ? ['fallSafe'] : []);

function speedFor(block, itemId) {
  if (itemId == null) return 1;
  let best = 1;
  for (const mat of block.material.split(';')) {
    const key = mat.startsWith('incorrect_for_') ? 'mineable/pickaxe' : mat;
    const v = d.materials[key]?.[itemId];
    if (v && v > best) best = v;
  }
  return best;
}
const canHarvest = (block, itemId) => !block.harvestTools || (itemId != null && !!block.harvestTools[itemId]);

function digSeconds(block, itemId) {
  if (block.hardness == null || block.hardness < 0) return null;       // ทุบไม่ได้
  if (block.hardness === 0) return 0;
  const ok = canHarvest(block, itemId);
  const dmg = speedFor(block, itemId) / block.hardness / (ok ? 30 : 100);
  return dmg >= 1 ? 0 : Math.ceil(1 / dmg) / 20;
}

const blocks = d.blocksArray.map((b) => {
  // ครอบครัวเครื่องมือที่เร็วสุด (ดูที่ระดับเหล็ก)
  let family = 'hand', bestT = digSeconds(b, null);
  for (const f of FAMILIES) {
    const id = d.itemsByName[`iron_${f}`]?.id;
    const t = digSeconds(b, id);
    if (t != null && bestT != null && t < bestT - 1e-9) { bestT = t; family = f; }
  }
  const harvestList = b.harvestTools ? Object.keys(b.harvestTools).map(item) : [];
  const minTier = b.harvestTools ? TIERS.find((t) => harvestList.some((n) => n?.startsWith(t + '_'))) ?? harvestList[0] : 'any';
  const time = { hand: digSeconds(b, null) };
  for (const t of ['wooden', 'stone', 'iron', 'diamond', 'netherite']) {
    const id = family === 'hand' ? null : d.itemsByName[`${t}_${family}`]?.id;
    time[t] = digSeconds(b, id ?? null);
  }
  return {
    name: b.name, display: b.displayName, hardness: b.hardness, blastRes: b.resistance,
    tool: family, minTier, needsTool: !!b.harvestTools, time, light: b.emitLight,
    transparent: b.transparent, collision: b.boundingBox, tags: tagOf(b.name),
    drops: (b.drops || []).map(item).filter(Boolean),
  };
});

const items = d.itemsArray.map((i) => ({ name: i.name, display: i.displayName, stack: i.stackSize, durability: i.maxDurability ?? null }));
const foods = d.foodsArray.map((f) => ({ name: f.name, display: f.displayName, food: f.foodPoints, saturation: f.saturation })).sort((a, b) => b.food + b.saturation - (a.food + a.saturation));
const entities = d.entitiesArray.map((e) => ({ name: e.name, display: e.displayName, type: e.type, category: e.category, width: e.width, height: e.height }));
const enchants = (d.enchantmentsArray || []).map((e) => ({ name: e.name, display: e.displayName, maxLevel: e.maxLevel, category: e.category, treasure: e.treasureOnly, curse: e.curse, exclude: e.exclude }));
const effects = (d.effectsArray || []).map((e) => ({ name: e.name, display: e.displayName, type: e.type }));

const write = (n, v) => fs.writeFileSync(path.join(OUT, n), JSON.stringify(v, null, 1));
write('blocks.json', blocks); write('items.json', items); write('foods.json', foods);
write('entities.json', entities); write('enchantments.json', enchants); write('effects.json', effects);

// ---------- markdown ----------
const fmt = (t) => (t == null ? '—' : t === 0 ? 'ทันที' : t.toFixed(2));
const md = [];
md.push(`# BLOCK_CATALOG — ทุกบล็อกใน Java ${ver} (สร้างอัตโนมัติจาก minecraft-data)`, '');
md.push(`> สร้างด้วย \`node scripts/gen_catalog.cjs ${ver}\` · ห้ามแก้มือ · JSON เต็มอยู่ \`data/catalog_${ver}/\``);
md.push('> เวลาขุด = วินาที, ไม่มีเอนชานต์/ยา, ยืนบนพื้น, ไม่อยู่ในน้ำ (อยู่ในน้ำหรือลอย ×5 ต่ออย่าง) · สูตร [Breaking](https://minecraft.wiki/w/Breaking)');
md.push('> "เครื่องมือ" = ชนิดที่ขุดเร็วสุด · "ขั้นต่ำ" = ขั้นเครื่องมือต่ำสุดที่ขุดแล้วได้ของ · ตัวหนา = ขุดแล้วไม่ได้ของ', '');
md.push(`จำนวน: บล็อก ${blocks.length} · ไอเทม ${items.length} · อาหาร ${foods.length} · เอนทิตี ${entities.length} · เอนชานต์ ${enchants.length} · เอฟเฟกต์ ${effects.length}`, '');

md.push('## 1. บล็อกพิเศษ (อันตราย/ฟิสิกส์)', '');
for (const [k, label] of [['danger', 'อันตราย'], ['gravity', 'ร่วงได้'], ['slows', 'ทำให้ช้า'], ['slippery', 'ลื่น/เด้ง'], ['climbable', 'ปีนได้'], ['fallSafe', 'ลดหรือกันดาเมจตก']]) {
  md.push(`- **${label}:** ${blocks.filter((b) => b.tags.includes(k)).map((b) => b.name).join(', ')}`);
}
md.push('', '## 2. อาหารทั้งหมด (เรียงตาม อิ่ม + saturation)', '', '| อาหาร | อิ่ม | saturation |', '|---|---|---|');
for (const f of foods) md.push(`| ${f.display} | ${f.food} | ${f.saturation} |`);

md.push('', '## 3. ทุกบล็อก', '', '| บล็อก | ความแข็ง | กันระเบิด | เครื่องมือ | ขั้นต่ำ | มือ | ไม้ | หิน | เหล็ก | เพชร | เนเธอไรต์ | แสง | แท็ก |', '|---|---|---|---|---|---|---|---|---|---|---|---|---|');
for (const b of [...blocks].sort((a, z) => a.name.localeCompare(z.name))) {
  const cell = (tier) => {
    const t = b.time[tier];
    const id = tier === 'hand' ? null : d.itemsByName[`${tier}_${b.tool}`]?.id;
    const bad = b.needsTool && !canHarvest(d.blocksByName[b.name], id ?? null);
    return bad && t != null ? `**${fmt(t)}**` : fmt(t);
  };
  md.push(`| ${b.name} | ${b.hardness ?? '—'} | ${b.blastRes} | ${b.tool} | ${b.needsTool ? b.minTier : '—'} | ${cell('hand')} | ${cell('wooden')} | ${cell('stone')} | ${cell('iron')} | ${cell('diamond')} | ${cell('netherite')} | ${b.light || ''} | ${b.tags.join(' ')} |`);
}
md.push('', '## 4. เอนทิตีทั้งหมด (ขนาดกล่องชน)', '', '| เอนทิตี | ประเภท | หมวด | กว้าง | สูง |', '|---|---|---|---|---|');
for (const e of entities) md.push(`| ${e.name} | ${e.type} | ${e.category ?? ''} | ${e.width} | ${e.height} |`);
md.push('', '## 5. เอนชานต์ทั้งหมด', '', '| เอนชานต์ | เลเวลสูงสุด | ใช้กับ | treasure | ห้ามคู่กับ |', '|---|---|---|---|---|');
for (const e of enchants) md.push(`| ${e.name} | ${e.maxLevel} | ${e.category ?? ''} | ${e.treasure ? '✓' : ''} | ${(e.exclude || []).join(', ')} |`);
md.push('', '## 6. เอฟเฟกต์ทั้งหมด', '', effects.map((e) => `${e.name} (${e.type === 'good' ? 'ดี' : 'ร้าย'})`).join(' · '));
const docs = path.join(__dirname, '..', 'docs', 'BLOCK_CATALOG.md');
fs.writeFileSync(docs, md.join('\n') + '\n');
console.log(`OK ${ver}: blocks ${blocks.length}, items ${items.length}, foods ${foods.length}, entities ${entities.length}, enchants ${enchants.length}, effects ${effects.length}`);
