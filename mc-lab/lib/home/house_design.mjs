// house_design.mjs — แบบบ้านของแล็บเอง (ออกแบบจากหลักในวิกิ ไม่ได้ลอกแบบใคร) + คำนวณวัตถุดิบดิบจากสูตรเกม
// หลัก (W/Tutorial:Construction, W/Tutorial:Roof_types, W/Tutorial:Roof_construction_guidelines, W/Tutorial:Adding_beauty_to_constructions):
//  · มีมิติ: เสาซุงที่มุม + ฐานหินกรวด + ผนังแผ่นไม้ (วัสดุผสม) · ผนังสูง 4 + ชายคายื่น 1 = กันแมงมุมปีนเข้า
//  · หลังคาจั่ว (gable) บันได 45° ยาวตามแนวยาว — เหมาะกับบ้านกว้าง ≤12 · หน้าจั่วอุดแผ่นไม้ · สันหลังคาเป็นแผ่นครึ่ง
// พิกัด: x = กว้าง (0..W-1) · z = ยาว (0..L-1) · y = 0 คือชั้นพื้นบ้าน (พื้นดินจริงอยู่ y = −1)
import fs from 'node:fs';
import path from 'node:path';

const ROOT = path.resolve(path.dirname(new URL(import.meta.url).pathname), '..', '..');
const RECIPES = JSON.parse(fs.readFileSync(path.join(ROOT, 'data', 'catalog_26.1', 'recipes.json'), 'utf8'));

// วัสดุชุดต่าง ๆ (ชื่อบล็อกจริง 26.1) · stone = กันระเบิด: หินกรวด/อิฐหิน ต้านแรงระเบิด 6 (kb/shelter/blast-resistance) + ประตูเหล็ก (ซอมบี้ Hard พังประตูไม้ — kb/advanced/regional-difficulty)
export const MATS = {
  wood: { base: 'cobblestone', floor: 'oak_planks', wall: 'spruce_planks', post: 'spruce_log', beam: 'stripped_spruce_log', roof: 'spruce_stairs', ridge: 'spruce_slab', gable: 'oak_planks', door: 'oak_door', button: null },
  stone: { base: 'cobblestone', floor: 'stone_bricks', wall: 'cobblestone', post: 'stone_bricks', beam: 'stone_bricks', roof: 'cobblestone_stairs', ridge: 'cobblestone_slab', gable: 'cobblestone', door: 'iron_door', button: 'stone_button' },
};

// แบบบ้านหลังคาจั่ว W×L · stories ชั้น (ชั้นละ storyH) · ประตูกลางด้านหน้า (z = 0) · หน้าต่างกระจกด้านข้างทุกชั้น
// 2 ชั้น: พื้นชั้นบน = แผ่นไม้ที่ y = storyH (เว้นช่องบันไดลิง) · บันไดลิงชิดผนังซ้ายหน้า
export function cottage({ W = 9, L = 11, storyH = 4, stories = 1, mats = 'wood', name } = {}) {
  const M = typeof mats === 'string' ? MATS[mats] : mats;
  const wallH = storyH * stories;
  const B = [];
  const add = (x, y, z, n, props) => B.push({ x, y, z, name: n, ...(props ? { props } : {}) });
  const corner = (x, z) => (x === 0 || x === W - 1) && (z === 0 || z === L - 1);
  const edge = (x, z) => x === 0 || x === W - 1 || z === 0 || z === L - 1;
  const midPost = (x, z) => edge(x, z) && ((z === 0 || z === L - 1) ? x === Math.floor(W / 2) - 2 || x === Math.floor(W / 2) + 2 : z === Math.floor(L / 2));
  const door = (x, z) => z === 0 && x === Math.floor(W / 2);
  const ladderX = 1, ladderZ = 1;                                   // ชิดผนังหน้า (z = 0) ด้านซ้าย
  const window = (x, y, z) => { const ly = ((y - 1) % storyH) + 1; return (ly === 1 || ly === 2) && ((x === 0 || x === W - 1) && (z === 2 || z === 3 || z === L - 3 || z === L - 4)
    || (z === L - 1 && (x === 2 || x === W - 3)) || (y > storyH && z === 0 && (x === 2 || x === W - 3))); };
  // พื้นชั้นล่าง: ฐานรอบนอก + พื้นใน (y = 0)
  for (let x = 0; x < W; x++) for (let z = 0; z < L; z++) add(x, 0, z, edge(x, z) ? M.base : M.floor);
  // ผนัง
  for (let y = 1; y <= wallH; y++) for (let x = 0; x < W; x++) for (let z = 0; z < L; z++) {
    if (!edge(x, z)) continue;
    if (door(x, z) && y <= 2) { add(x, y, z, M.door, { half: y === 1 ? 'lower' : 'upper', facing: 'south' }); continue; }
    if (corner(x, z) || midPost(x, z)) add(x, y, z, M.post);
    else if (window(x, y, z)) add(x, y, z, 'glass_pane');
    else add(x, y, z, y % storyH === 0 ? M.beam : M.wall);          // คานทุกชั้น (เส้นคาดแบ่งชั้น)
  }
  // พื้นชั้นบน + บันไดลิง (ชั้นละ 1 เส้น ต่อกันขึ้นไป)
  for (let k = 1; k < stories; k++) {
    const fy = storyH * k;
    for (let x = 1; x < W - 1; x++) for (let z = 1; z < L - 1; z++) if (!(x === ladderX && z === ladderZ)) add(x, fy, z, M.floor === 'stone_bricks' ? 'stone_brick_slab' : M.floor, M.floor === 'stone_bricks' ? { type: 'top' } : undefined);
    for (let y = fy - storyH + 1; y <= fy + 1; y++) add(ladderX, y, ladderZ, 'ladder', { facing: 'south' });
  }
  // หลังคาจั่ว: ยาวตาม z · ชายคายื่น 1 · ชั้นละ 1 บล็อกเข้าหากลาง · หน้าจั่วอุด
  const half = Math.floor((W + 2) / 2);
  for (let k = 0; k < half; k++) {
    const y = wallH + 1 + k, xl = -1 + k, xr = W - k;
    if (xl > xr) break;
    for (let z = -1; z <= L; z++) {
      if (xl === xr) { add(xl, y, z, M.ridge, { type: 'bottom' }); continue; }
      add(xl, y, z, M.roof, { facing: 'east' });
      add(xr, y, z, M.roof, { facing: 'west' });
    }
    for (const z of [0, L - 1]) for (let x = xl + 1; x < xr; x++) add(x, y, z, M.gable);
  }
  // ของในบ้าน + แสงทุกชั้น (กันม็อบเกิดในบ้าน — kb/home-keeping/torches)
  const inside = [
    [W - 2, 1, L - 2, 'chest'], [W - 3, 1, L - 2, 'chest'], [W - 2, 1, L - 4, 'crafting_table'],
    [W - 2, 1, 2, 'furnace'], [W - 2, 1, 3, 'furnace'], [1, 1, L - 5, 'barrel'],
    [Math.floor(W / 2) - 1, 2, -1, 'wall_torch'], [Math.floor(W / 2) + 1, 2, -1, 'wall_torch'],
  ];
  const bedY = stories > 1 ? storyH + 1 : 1;                        // 2 ชั้น: เตียงขึ้นชั้นบน
  inside.push([1, bedY, L - 2, 'white_bed', { part: 'foot' }], [1, bedY, L - 3, 'white_bed', { part: 'head' }]);
  for (let k = 0; k < stories; k++) {
    const ty = storyH * k + 3;
    inside.push([Math.floor(W / 2), ty, L - 2, 'wall_torch'], [Math.floor(W / 2) + 1, ty, 1, 'wall_torch'], [1, ty, Math.floor(L / 2), 'wall_torch'], [W - 2, ty, Math.floor(L / 2), 'wall_torch']);
  }
  if (M.button) inside.push([Math.floor(W / 2) + 1, 2, 1, 'stone_button'], [Math.floor(W / 2) - 1, 2, -1, 'stone_button']);   // ปุ่มเปิดประตูเหล็ก ใน/นอก
  for (const [x, y, z, n, p] of inside) if (!(n === 'wall_torch' && M.button && x === Math.floor(W / 2) - 1 && z === -1)) add(x, y, z, n, p);
  const floors = Array.from({ length: stories }, (_, k) => storyH * k);
  return { name: name ?? `${mats === 'stone' ? 'บ้านหิน' : 'บ้านไม้'}${stories > 1 ? ` ${stories} ชั้น` : ''} หลังคาจั่ว ${W}×${L}`, W, L, wallH, storyH, stories, floors, blocks: B };
}
export const DESIGNS = {
  cottage: () => cottage(),
  twoStory: () => cottage({ stories: 2 }),
  stone: () => cottage({ mats: 'stone' }),
};

// ---------- วัตถุดิบดิบ: ไล่สูตรย้อนจาก recipes.json จนถึงของเก็บได้ ----------
const BASE = new Set(['cobblestone', 'sand', 'coal', 'charcoal', 'white_wool', 'iron_ingot', 'stick', 'leather']);
const ALIAS = { wall_torch: 'torch', red_bed: 'white_bed', glass: 'glass' };
const SMELT = { glass: 'sand', stone: 'cobblestone', smooth_stone: 'stone' };   // เผา 1:1 (W/Smelting)
// prefer: ชนิดวัสดุที่ใช้ในแบบ (สูตรที่มีหลายแบบ เช่น หีบ = แผ่นไม้ชนิดใดก็ได้ → เลือกชนิดที่มี) · ไม่ใช้สีย้อม
export function rawMaterials(counts, { prefer = ['oak', 'spruce', 'cobblestone'] } = {}) {
  const need = {}, crafted = {};
  const score = (r) => Object.keys(r.in).reduce((a, k) => a + (prefer.some((p) => k.startsWith(p)) ? 2 : 0) - (k.includes('_dye') ? 5 : 0), 0);
  const want = (item, n) => {
    if (n <= 0) return;
    const strip = item.match(/^stripped_(.+_(log|wood|stem|hyphae))$/);
    if (strip) { crafted[item] = (crafted[item] ?? 0) + n; return want(strip[1], n); }   // ลอกเปลือกด้วยขวาน (ไม่ใช่สูตรคราฟต์)
    if (/_log$/.test(item) || BASE.has(item)) { need[item] = (need[item] ?? 0) + n; return; }
    if (SMELT[item]) { crafted[item] = (crafted[item] ?? 0) + n; want(SMELT[item], n); need.coal_for_smelting = (need.coal_for_smelting ?? 0) + n / 8; return; }
    const r = (RECIPES[item] ?? []).slice().sort((a, b) => score(b) - score(a))[0];
    if (!r) { need[item] = (need[item] ?? 0) + n; return; }   // หาสูตรไม่เจอ = ต้องหาเอง
    const times = Math.ceil(n / r.out);
    crafted[item] = (crafted[item] ?? 0) + times * r.out;
    for (const [k, v] of Object.entries(r.in)) want(k, v * times);
  };
  for (const [k, v] of Object.entries(counts)) want(ALIAS[k] ?? k, v);
  if (need.stick) { want('oak_planks', Math.ceil(need.stick / 4) * 2); delete need.stick; }   // ไม้ 2 แผ่น → 4 อัน
  if (need.coal_for_smelting) need.coal_for_smelting = Math.ceil(need.coal_for_smelting);
  return { need, crafted };
}

export function countBlocks(blocks) {
  const c = {};
  for (const b of blocks) {
    const key = b.name === 'white_bed' || b.name.endsWith('_door') ? `${b.name}` : b.name;
    // เตียง/ประตู 2 ช่อง = ไอเทม 1 ชิ้น
    if ((b.name.endsWith('_bed') && b.props?.part === 'head') || (b.name.endsWith('_door') && b.props?.half === 'upper')) continue;
    c[key] = (c[key] ?? 0) + 1;
  }
  return c;
}
