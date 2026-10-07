// house_design.mjs — แบบบ้านของแล็บเอง (ออกแบบจากหลักในวิกิ ไม่ได้ลอกแบบใคร) + คำนวณวัตถุดิบดิบจากสูตรเกม
// หลัก (W/Tutorial:Construction, W/Tutorial:Roof_types, W/Tutorial:Roof_construction_guidelines, W/Tutorial:Adding_beauty_to_constructions):
//  · มีมิติ: เสาซุงที่มุม + ฐานหินกรวด + ผนังแผ่นไม้ (วัสดุผสม) · ผนังสูง 4 + ชายคายื่น 1 = กันแมงมุมปีนเข้า
//  · หลังคาจั่ว (gable) บันได 45° ยาวตามแนวยาว — เหมาะกับบ้านกว้าง ≤12 · หน้าจั่วอุดแผ่นไม้ · สันหลังคาเป็นแผ่นครึ่ง
// พิกัด: x = กว้าง (0..W-1) · z = ยาว (0..L-1) · y = 0 คือชั้นพื้นบ้าน (พื้นดินจริงอยู่ y = −1)
import fs from 'node:fs';
import path from 'node:path';

const ROOT = path.resolve(path.dirname(new URL(import.meta.url).pathname), '..', '..');
const RECIPES = JSON.parse(fs.readFileSync(path.join(ROOT, 'data', 'catalog_26.1', 'recipes.json'), 'utf8'));

// แบบ "บ้านไม้หลังคาจั่ว" W×L (ค่าเริ่ม 9×11 ภายใน 7×9) · ประตูกลางด้านหน้า (z = 0) · หน้าต่างกระจกด้านข้าง
export function cottage({ W = 9, L = 11, wallH = 4, wood = 'spruce', trim = 'oak' } = {}) {
  const B = [];
  const add = (x, y, z, name, props) => B.push({ x, y, z, name, ...(props ? { props } : {}) });
  const corner = (x, z) => (x === 0 || x === W - 1) && (z === 0 || z === L - 1);
  const edge = (x, z) => x === 0 || x === W - 1 || z === 0 || z === L - 1;
  const midPost = (x, z) => edge(x, z) && ((z === 0 || z === L - 1) ? x === Math.floor(W / 2) - 2 || x === Math.floor(W / 2) + 2 : z === Math.floor(L / 2));
  const door = (x, z) => z === 0 && x === Math.floor(W / 2);
  const window = (x, y, z) => (y === 1 || y === 2) && ((x === 0 || x === W - 1) && (z === 2 || z === 3 || z === L - 3 || z === L - 4)
    || (z === L - 1 && (x === 2 || x === W - 3)));
  // พื้น: ฐานหินกรวดรอบนอก + พื้นแผ่นไม้ข้างใน (y = 0)
  for (let x = 0; x < W; x++) for (let z = 0; z < L; z++) add(x, 0, z, edge(x, z) ? 'cobblestone' : `${trim}_planks`);
  // ผนัง y = 1..wallH
  for (let y = 1; y <= wallH; y++) for (let x = 0; x < W; x++) for (let z = 0; z < L; z++) {
    if (!edge(x, z)) continue;
    if (door(x, z) && y <= 2) { if (y === 1) add(x, y, z, `${trim}_door`, { half: 'lower', facing: 'south' }); else add(x, y, z, `${trim}_door`, { half: 'upper', facing: 'south' }); continue; }
    if (corner(x, z) || midPost(x, z)) add(x, y, z, `${wood}_log`);
    else if (window(x, y, z)) add(x, y, z, 'glass_pane');
    else add(x, y, z, y === wallH ? `stripped_${wood}_log` : `${wood}_planks`);   // คานบนสุดเป็นซุงลอกเปลือก (เส้นคาด)
  }
  // หลังคาจั่ว: ยาวตาม z · ชายคายื่น 1 ทั้งข้าง (x) และหน้า-หลัง (z) · ชั้นละ 1 บล็อกเข้าหากลาง
  const half = Math.floor((W + 2) / 2);                     // รวมชายคา 2 ข้าง
  for (let k = 0; k < half; k++) {
    const y = wallH + 1 + k, xl = -1 + k, xr = W - k;
    if (xl > xr) break;
    for (let z = -1; z <= L; z++) {
      if (xl === xr) { add(xl, y, z, `${wood}_slab`, { type: 'bottom' }); continue; }   // สันหลังคา
      add(xl, y, z, `${wood}_stairs`, { facing: 'east' });
      add(xr, y, z, `${wood}_stairs`, { facing: 'west' });
    }
    // หน้าจั่ว (gable end) อุดแผ่นไม้ ระหว่างแนวหลังคา ที่ z = 0 และ z = L−1
    for (const z of [0, L - 1]) for (let x = xl + 1; x < xr; x++) add(x, y, z, `${trim}_planks`);
  }
  // ของในบ้าน (ใช้งาน) + แสง ≥ ไม่ให้ม็อบเกิดในบ้าน (kb/home-keeping/torches)
  const inside = [
    [1, 1, L - 2, 'white_bed', { part: 'foot' }], [1, 1, L - 3, 'white_bed', { part: 'head' }],
    [W - 2, 1, L - 2, 'chest'], [W - 3, 1, L - 2, 'chest'], [W - 2, 1, L - 4, 'crafting_table'],
    [W - 2, 1, 2, 'furnace'], [W - 2, 1, 3, 'furnace'], [1, 1, 2, 'barrel'],
    [Math.floor(W / 2), 3, L - 2, 'wall_torch'], [Math.floor(W / 2), 3, 1, 'wall_torch'], [1, 3, Math.floor(L / 2), 'wall_torch'], [W - 2, 3, Math.floor(L / 2), 'wall_torch'],
    [Math.floor(W / 2) - 1, 2, -1, 'wall_torch'], [Math.floor(W / 2) + 1, 2, -1, 'wall_torch'],   // ข้างประตูด้านนอก
  ];
  for (const [x, y, z, n, p] of inside) add(x, y, z, n, p);
  return { name: `บ้านไม้หลังคาจั่ว ${W}×${L}`, W, L, wallH, blocks: B };
}

// ---------- วัตถุดิบดิบ: ไล่สูตรย้อนจาก recipes.json จนถึงของเก็บได้ ----------
const BASE = new Set(['cobblestone', 'sand', 'coal', 'charcoal', 'white_wool', 'white_wool', 'iron_ingot', 'stick']);
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
