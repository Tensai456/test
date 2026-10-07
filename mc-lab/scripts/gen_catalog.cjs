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

const write = (n, v) => { fs.mkdirSync(path.dirname(path.join(OUT, n)), { recursive: true }); fs.writeFileSync(path.join(OUT, n), JSON.stringify(v, null, 1)); };
write('blocks.json', blocks); write('items.json', items); write('foods.json', foods);
write('entities.json', entities); write('enchantments.json', enchants); write('effects.json', effects);

// ---------- แยกบล็อกเป็นกลุ่มเล็ก (ตามเครื่องมือ · อีเต้อแยกตามขั้นต่ำ) ----------
const groupOf = (b) => (b.tool === 'pickaxe' ? `pickaxe-${b.needsTool ? b.minTier : 'any'}` : b.tool);
const groups = {};
for (const b of blocks) (groups[groupOf(b)] ??= []).push(b);
const blockIndex = {};
for (const [g, list] of Object.entries(groups)) {
  write(`blocks/${g}.json`, list);
  for (const b of list) blockIndex[b.name] = { group: g, json: `blocks/${g}.json`, md: `kb/blocks/${g}.md` };
}
write('blocks/index.json', blockIndex);

// ---------- markdown → kb/blocks/ (1 หัวข้อ/ไฟล์) ----------
const KBB = path.join(__dirname, '..', 'kb', 'blocks');
fs.rmSync(KBB, { recursive: true, force: true });
fs.mkdirSync(KBB, { recursive: true });
const fmt = (t) => (t == null ? '—' : t === 0 ? 'ทันที' : t.toFixed(2));
const HEAD = (title) => [`# ${title}`, '', `<!-- สร้างอัตโนมัติโดย scripts/gen_catalog.cjs ${ver} จาก minecraft-data · ห้ามแก้มือ -->`,
  '> เวลาขุด = วินาที, ไม่มีเอนชานต์/ยา, ยืนบนพื้น, ไม่อยู่ในน้ำ (อยู่ในน้ำหรือลอย ×5 ต่ออย่าง) · สูตร [Breaking](https://minecraft.wiki/w/Breaking)',
  '> "ขั้นต่ำ" = ขั้นเครื่องมือต่ำสุดที่ขุดแล้วได้ของ · **ตัวหนา** = ขุดได้แต่ไม่ได้ของ · ค้นบล็อก→ไฟล์: `data/catalog_' + ver + '/blocks/index.json`', ''];
const writeMd = (f, lines) => fs.writeFileSync(path.join(KBB, f), lines.join('\n') + '\n');
const TOOL_TH = { pickaxe: 'อีเต้อ', axe: 'ขวาน', shovel: 'พลั่ว', hoe: 'จอบ', sword: 'ดาบ', hand: 'มือ (ไม่มีเครื่องมือที่เร็วกว่า)' };
for (const [g, list] of Object.entries(groups).sort()) {
  const [tool, tier] = g.split('-');
  const title = `บล็อกขุดด้วย${TOOL_TH[tool] ?? tool}${tier ? (tier === 'any' ? ' (ขั้นไหนก็ได้ของ)' : ` (ต้องขั้น ${tier} ขึ้นไป)`) : ''} — ${list.length} ชนิด`;
  const md = HEAD(title);
  md.push('| บล็อก | ความแข็ง | กันระเบิด | ขั้นต่ำ | มือ | ไม้ | หิน | เหล็ก | เพชร | เนเธอไรต์ | แสง | แท็ก |', '|---|---|---|---|---|---|---|---|---|---|---|---|');
  for (const b of [...list].sort((a, z) => a.name.localeCompare(z.name))) {
    const cell = (t) => {
      const v = b.time[t];
      const id = t === 'hand' ? null : d.itemsByName[`${t}_${b.tool}`]?.id;
      const bad = b.needsTool && !canHarvest(d.blocksByName[b.name], id ?? null);
      return bad && v != null ? `**${fmt(v)}**` : fmt(v);
    };
    md.push(`| ${b.name} | ${b.hardness ?? '—'} | ${b.blastRes} | ${b.needsTool ? b.minTier : '—'} | ${cell('hand')} | ${cell('wooden')} | ${cell('stone')} | ${cell('iron')} | ${cell('diamond')} | ${cell('netherite')} | ${b.light || ''} | ${b.tags.join(' ')} |`);
  }
  writeMd(`${g}.md`, md);
}
const special = HEAD('บล็อกพิเศษ (อันตราย / ร่วง / ช้า / ลื่น / ปีน / กันตก)');
for (const [k, label] of [['danger', 'อันตราย'], ['gravity', 'ร่วงได้'], ['slows', 'ทำให้ช้า'], ['slippery', 'ลื่น/เด้ง'], ['climbable', 'ปีนได้'], ['fallSafe', 'ลดหรือกันดาเมจตก']]) {
  special.push(`- **${label}:** ${blocks.filter((b) => b.tags.includes(k)).map((b) => b.name).join(', ')}`);
}
special.push('', 'รายละเอียดพฤติกรรม: `kb/physics/` · แท็กคัดมือใน `scripts/gen_catalog.cjs` (TAGS)');
writeMd('_special.md', special);
writeMd('_foods.md', [...HEAD(`อาหารทั้งหมด ${foods.length} ชนิด (เรียงตาม อิ่ม + saturation)`), '| อาหาร | อิ่ม | saturation |', '|---|---|---|', ...foods.map((f) => `| ${f.display} | ${f.food} | ${f.saturation} |`)]);
writeMd('_entities.md', [...HEAD(`เอนทิตีทั้งหมด ${entities.length} ชนิด (ขนาดกล่องชน)`), '| เอนทิตี | ประเภท | หมวด | กว้าง | สูง |', '|---|---|---|---|---|', ...entities.map((e) => `| ${e.name} | ${e.type} | ${e.category ?? ''} | ${e.width} | ${e.height} |`)]);
writeMd('_enchantments.md', [...HEAD(`เอนชานต์ทั้งหมด ${enchants.length} ชนิด`), '| เอนชานต์ | เลเวลสูงสุด | ใช้กับ | treasure | ห้ามคู่กับ |', '|---|---|---|---|---|', ...enchants.map((e) => `| ${e.name} | ${e.maxLevel} | ${e.category ?? ''} | ${e.treasure ? '✓' : ''} | ${(e.exclude || []).join(', ')} |`)]);
writeMd('_effects.md', [...HEAD(`เอฟเฟกต์ทั้งหมด ${effects.length} ชนิด`), '| เอฟเฟกต์ | ดี/ร้าย |', '|---|---|', ...effects.map((e) => `| ${e.name} | ${e.type === 'good' ? 'ดี' : 'ร้าย'} |`)]);
console.log(`OK ${ver}: blocks ${blocks.length} (${Object.keys(groups).length} กลุ่ม), items ${items.length}, foods ${foods.length}, entities ${entities.length}, enchants ${enchants.length}, effects ${effects.length}`);
