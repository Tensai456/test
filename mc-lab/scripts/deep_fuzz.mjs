// deep_fuzz.mjs — เจาะทีละเหตุการณ์: สุ่ม N สถานะ/เหตุการณ์ (ค่าเริ่ม 2,000,000) ส่วนอื่นสุ่มกว้าง → decide() → invariant
// node scripts/deep_fuzz.mjs [N] [event...] → docs/DEEP_FUZZ.md · ช่องโหว่จัดกลุ่มตาม "เหตุการณ์ | กฎที่ผิด | สิ่งที่บอตเลือก"
import fs from 'node:fs';
import path from 'node:path';
import { decide } from '../lib/chain.mjs';
import { rng32 } from '../lib/pvp/duel_sim.mjs';
import { bestWeapon } from '../lib/pvp/best_weapon.mjs';
import { WEAPONS } from '../lib/pvp/weapons.mjs';
import { tactic } from '../lib/pvp/weapon_tactics.mjs';
import { chooseClutch, clutchWindow, fallDamage } from '../lib/fall_safety.mjs';
import { EXT_EVENTS } from './fuzz_events_ext.mjs';

const KB = path.join(ROOT0(), 'kb');
function ROOT0() { return path.resolve(path.dirname(new URL(import.meta.url).pathname), '..'); }
const KB_OK = new Map();
const kbExists = (p) => { if (!KB_OK.has(p)) KB_OK.set(p, fs.existsSync(path.join(KB, p))); return KB_OK.get(p); };
const CAT = (f) => JSON.parse(fs.readFileSync(path.join(ROOT0(), 'data', 'catalog_26.1', f), 'utf8'));
const ALL_HOSTILE = CAT('entities.json').filter((e) => e.category === 'Hostile mobs').map((e) => e.name);
const ALL_BLOCKS = CAT('blocks.json');
const DANGER_BLOCKS = ALL_BLOCKS.filter((b) => b.tags.includes('danger')).map((b) => b.name);
const TIER_RANK = { any: -1, wooden: 0, stone: 1, copper: 1, golden: 0, iron: 2, diamond: 3, netherite: 4 };
const NEUTRAL = ['iron_golem', 'zombified_piglin', 'bee', 'polar_bear', 'wolf', 'llama', 'goat', 'spider', 'enderman', 'piglin', 'dolphin', 'hoglin', 'piglin_brute'];
const AQUA = ['drowned', 'guardian', 'elder_guardian', 'pufferfish'];
const BIOMES = {
  desert: (s, r) => { s.woodNearby = false; if (r() < 0.5) s.nearby.push(m0('husk', r)); },
  badlands: (s, r) => { s.woodNearby = r() < 0.5; s.edgeDepth = Math.round(r() * 30); },
  snowy: (s, r) => { if (r() < 0.3) s.freezing = true; if (r() < 0.5) s.nearby.push(m0('stray', r)); },
  swamp: (s, r) => { s.nearby.push(m0(['slime', 'witch', 'bogged', 'drowned'][Math.floor(r() * 4)], r)); if (r() < 0.3) s.inWater = true; },
  deep_dark: (s, r) => { s.nearBlocks = [{ type: 'sculk_shrieker', dist: Math.round(r() * 12) }]; if (r() < 0.4) s.nearby.push(m0('warden', r)); },
  ocean: (s, r) => { s.inWater = true; s.air = Math.floor(r() * 16); s.nearby.push(m0(AQUA[Math.floor(r() * 4)], r)); },
  mountains: (s, r) => { s.edgeDepth = 5 + Math.round(r() * 60); if (r() < 0.3) s.freezing = true; if (r() < 0.3) s.nearby.push({ ...m0('goat', r), hostile: false, provoked: true }); },
  mushroom: () => {},
  jungle: (s, r) => { if (r() < 0.3) s.nearby.push(m0('spider', r)); },
  crimson: (s, r) => { s.dim = 'the_nether'; s.nearby.push(m0(['hoglin', 'piglin'][Math.floor(r() * 2)], r)); },
  warped: (s, r) => { s.dim = 'the_nether'; s.nearby.push({ ...m0('enderman', r), hostile: false }); },
  soul_valley: (s, r) => { s.dim = 'the_nether'; s.nearby.push(m0(['skeleton', 'ghast'][Math.floor(r() * 2)], r)); },
  basalt: (s, r) => { s.dim = 'the_nether'; s.edgeDepth = Math.round(r() * 40); s.nearby.push(m0('magma_cube', r)); },
  wastes: (s, r) => { s.dim = 'the_nether'; s.nearby.push({ ...m0('zombified_piglin', r), hostile: false, provoked: r() < 0.3 }); },
  end: (s, r) => { s.dim = 'the_end'; s.edgeDepth = 100; s.nearby.push(r() < 0.5 ? { ...m0('enderman', r), hostile: false } : m0('shulker', r)); },
};
function m0(type, r) { return { type, dist: Math.round(r() * 20 * 2) / 2, hostile: true }; }
const snake = (n) => n.replace(/([a-z])([A-Z])/g, '$1_$2').toLowerCase();
const EFFECTS_BAD = CAT('effects.json').filter((e) => e.type === 'bad').map((e) => snake(e.name));
const CLUTCH_ITEMS = ['water_bucket', 'slime_block', 'hay_block', 'honey_block', 'oak_boat', 'ladder', 'scaffolding', 'cobweb', 'powder_snow_bucket', 'ender_pearl', 'twisting_vines'];
const mlgStats = {};
const WEAPON_ITEMS = [...Object.keys(WEAPONS).filter((w) => w !== 'fist'), 'bow', 'crossbow'];

const ROOT = path.resolve(path.dirname(new URL(import.meta.url).pathname), '..');
const N = Number(process.argv[2] ?? 2_000_000);
const ROUND = Number((process.argv.find((a) => a.startsWith('--round=')) ?? '--round=1').split('=')[1]);
const OUT = (process.argv.find((a) => a.startsWith('--out=')) ?? '--out=docs/DEEP_FUZZ.md').split('=')[1];
const ONLY = process.argv.slice(3).filter((a) => !a.startsWith('--'));

const HOSTILE = ['zombie', 'husk', 'drowned', 'skeleton', 'stray', 'bogged', 'parched', 'spider', 'cave_spider', 'creeper', 'witch', 'pillager', 'vindicator', 'blaze', 'wither_skeleton', 'piglin_brute', 'breeze', 'phantom', 'ghast', 'slime', 'silverfish', 'warden'];
const RANGED = ['skeleton', 'stray', 'bogged', 'parched', 'witch', 'blaze', 'breeze', 'ghast', 'pillager'];
const ITEMS = ['bread', 'cooked_beef', 'golden_apple', 'water_bucket', 'hay_block', 'ender_pearl', 'ladder', 'shield', 'iron_sword', 'golden_boots', 'milk_bucket', 'totem_of_undying', 'cobblestone', 'torch', 'bow'];
const DIMS = ['overworld', 'overworld', 'the_nether', 'the_end'];
const GOAL = { overworld: 'iron_kit', the_nether: 'end', the_end: 'dragon' };

function baseState(r) {
  const inv = {};
  for (const it of ITEMS) if (r() < 0.3) inv[it] = 1 + Math.floor(r() * 8);
  const dim = DIMS[Math.floor(r() * DIMS.length)];
  const time = Math.floor(r() * 24000);
  const s = { hp: 1 + Math.floor(r() * 20), food: Math.floor(r() * 21), dim, time, sheltered: r() < 0.4, inv, nearby: [] };
  if (r() < 0.3) for (let i = 0, k = 1 + Math.floor(r() * 2); i < k; i++) s.nearby.push({ type: HOSTILE[Math.floor(r() * HOSTILE.length)], dist: Math.round(r() * 40 * 2) / 2, hostile: true });
  // อันตรายเสริมสุ่ม (ซ้อน)
  if (r() < 0.08) s.onFire = true;
  if (r() < 0.05) s.fallDistance = Math.round(r() * 60);
  if (r() < 0.05) s.air = Math.floor(r() * 15);
  if (r() < 0.05) s.edgeDepth = Math.round(r() * 30);
  if (r() < 0.03) s.inLava = true;
  return s;
}

const near = (s, f) => (s.nearby ?? []).filter(f);
const top = (d) => (d.mode === 'reflex' ? d.rule.id : `${d.mode}`);
const isAction = (d) => d.mode === 'reflex' && !d.rule.veto;

// เหตุการณ์: gen ปรับ state ให้โฟกัส · inv = invariant เฉพาะเหตุการณ์ [ชื่อ, ฟังก์ชัน]
const EVENTS = {
  lava: { gen: (s, r) => { s.inLava = true; s.onFire = r() < 0.9; if (r() < 0.3) s.action = 'sleep'; }, inv: [['อยู่ในลาวา → หนีลาวาเป็นอันดับแรก', (s, d) => top(d) === 'in-lava']] },
  veto: { gen: (s, r) => { if (r() < 0.5) s.action = 'sleep'; else s.digging = { block: 'stone', canHarvest: r() < 0.5, belowFeet: true }; },
    inv: [['นอนนอก overworld → มี veto เสมอ', (s, d) => !(s.action === 'sleep' && s.dim !== 'overworld') || d.vetoes.some((v) => v.id === 'bed-wrong-dimension')],
      ['ขุดลงตรง → มี veto เสมอ', (s, d) => !s.digging?.belowFeet || d.vetoes.some((v) => v.id === 'dig-straight-down')]] },
  ranged: { gen: (s, r) => { s.nearby.push({ type: RANGED[Math.floor(r() * RANGED.length)], dist: Math.round(r() * 24 * 2) / 2, hostile: true }); },
    inv: [['ม็อบยิงไกลในระยะ 16 → ห้ามแผนต่อ/ห้ามยืนรอ', (s, d) => !near(s, (e) => RANGED.includes(e.type) && e.dist <= 16).length || (isAction(d) && top(d) !== 'hostile-approach')]] },
  creeper: { gen: (s, r) => { s.nearby.push({ type: 'creeper', dist: Math.round(r() * 12 * 2) / 2, hostile: true }); },
    inv: [['ครีปเปอร์ ≤3 → ห้ามสู้แบบยืนฟัน/ห้ามกิน/ห้ามแผน', (s, d) => !near(s, (e) => e.type === 'creeper' && e.dist <= 3).length || (isAction(d) && !['hostile-close', 'eat-to-regen', 'hungry', 'recover'].includes(top(d)))]] },
  fall: { gen: (s, r) => { s.fallDistance = 4 + Math.round(r() * 80); if (r() < 0.3) s.wallAdjacent = true; },
    inv: [['ตก >3 → ต้องเป็นเรื่องตก (หรืออันตรายที่ด่วนกว่า: ลาวา)', (s, d) => ['falling', 'falling-no-clutch', 'in-lava'].includes(top(d))]] },
  drowning: { gen: (s, r) => { s.air = Math.floor(r() * 5); },
    inv: [['อากาศ <5 → ว่ายขึ้น (เว้นลาวา/ตก/ติดบล็อก)', (s, d) => ['drowning', 'in-lava', 'falling', 'falling-no-clutch', 'suffocating'].includes(top(d))]] },
  warden: { gen: (s, r) => { s.nearby.push({ type: 'warden', dist: Math.round(r() * 30 * 2) / 2, hostile: true }); if (r() < 0.5) s.nearBlocks = [{ type: 'sculk_shrieker', dist: Math.round(r() * 10) }]; },
    inv: [['warden ≤20 → ห้ามสู้/ห้ามกิน/ห้ามยืนรอ', (s, d) => !near(s, (e) => e.type === 'warden' && e.dist <= 20).length || (isAction(d) && !['hostile-close', 'hostile-approach', 'eat-to-regen', 'hungry', 'recover', 'teammate-down'].includes(top(d)))]] },
  crowd: { gen: (s, r) => { const k = 2 + Math.floor(r() * 5); for (let i = 0; i < k; i++) s.nearby.push({ type: ['zombie', 'husk', 'skeleton', 'spider', 'drowned', 'vindicator'][Math.floor(r() * 6)], dist: Math.round(r() * 8 * 2) / 2, hostile: true }); s.armor = r() < 0.5 ? 'none' : 'iron'; },
    inv: [['ถูกรุม ≥4 ตัวในระยะ 6 + เลือด <14 → ห้ามยืนสู้ตรง ๆ', (s, d) => !(near(s, (e) => e.hostile && e.dist <= 6).length >= 4 && s.hp < 14) || top(d) !== 'hostile-close']] },
  effects: { gen: (s, r) => { s.effects = [['wither'], ['poison'], ['hunger'], ['levitation'], ['wither', 'hunger']][Math.floor(r() * 5)]; if (r() < 0.5) s.inv.milk_bucket = 1; },
    inv: [['ติด Wither + มีนม → ต้องจัดการ Wither (เว้นอันตรายที่ด่วนกว่า)', (s, d) => !((s.effects ?? []).includes('wither') && s.inv.milk_bucket) || (d.mode === 'reflex' && d.rule.prio >= 80)]] },
  edgeKnock: { gen: (s, r) => { s.edgeDepth = 4 + Math.round(r() * 60); s.nearby.push({ type: ['creeper', 'breeze', 'zombie', 'skeleton', 'enderman'][Math.floor(r() * 5)], dist: Math.round(r() * 8 * 2) / 2, hostile: true }); },
    inv: [['ขอบลึก + ม็อบผลักได้ ≤4 → ต้องไม่ทำแผนต่อ', (s, d) => !near(s, (e) => e.dist <= 4).length || d.mode === 'reflex']] },
};
Object.assign(EVENTS, {
  mixedCrowd: { gen: (s, r) => { const k = 3 + Math.floor(r() * 6); const pool = ['zombie', 'husk', 'skeleton', 'spider', 'creeper', 'witch', 'drowned', 'vindicator', 'pillager', 'stray', 'cave_spider', 'slime'];
      for (let i = 0; i < k; i++) s.nearby.push({ type: pool[Math.floor(r() * pool.length)], dist: Math.round(r() * 10 * 2) / 2, hostile: true }); },
    inv: [['ครีปเปอร์ ≤3 กลางฝูง → ห้ามยืนสู้/กิน/แผน', (s, d) => !near(s, (e) => e.type === 'creeper' && e.dist <= 3).length || (isAction(d) && !['hostile-close', 'eat-to-regen', 'hungry', 'recover'].includes(top(d)))],
      ['ถูกรุม ≥4 ในระยะ 6 + เลือด <14 → ห้ามยืนสู้ตรง ๆ', (s, d) => !(near(s, (e) => e.hostile && e.dist <= 6).length >= 4 && s.hp < 14) || top(d) !== 'hostile-close']] },
  creeperBait: { gen: (s, r) => { const cd = Math.round(r() * 6 * 2) / 2; s.nearby.push({ type: 'creeper', dist: cd, hostile: true });
      for (let i = 0, k = 2 + Math.floor(r() * 4); i < k; i++) s.nearby.push({ type: ['zombie', 'skeleton', 'spider'][Math.floor(r() * 3)], dist: Math.max(0.5, cd + (r() - 0.5) * 4), hostile: true }); },
    inv: [['ครีปเปอร์ ≤5 + ฝูง ≥3 → ต้องใช้กลยุทธ์ล่อ/ถอย (หรืออันตรายที่ด่วนกว่า)', (s, d) => !(near(s, (e) => e.type === 'creeper' && e.dist <= 5).length && near(s, (e) => e.hostile && e.dist <= 8).length >= 3) || (d.mode === 'reflex' && d.rule.prio >= 88)]] },
  underwater: { gen: (s, r) => { s.inWater = true; s.air = Math.floor(r() * 16); s.nearby.push({ type: AQUA[Math.floor(r() * AQUA.length)], dist: Math.round(r() * 20 * 2) / 2, hostile: true }); if (r() < 0.2) s.effects = ['mining_fatigue']; },
    inv: [['ใต้น้ำ อากาศ <5 → ขึ้นหายใจ (หรืออันตรายที่ด่วนกว่า)', (s, d) => (s.air ?? 15) >= 5 || (d.mode === 'reflex' && d.rule.prio >= 90)],
      ['guardian ≤16 → ห้ามแผน/ห้ามยืนรอ', (s, d) => !near(s, (e) => ['guardian', 'elder_guardian'].includes(e.type) && e.dist <= 16).length || (isAction(d) && top(d) !== 'hostile-approach')],
      ['ใต้น้ำ อากาศ <10 + ศัตรู ≤8 → ต้อง reflex', (s, d) => !((s.air ?? 15) < 10 && near(s, (e) => e.hostile && e.dist <= 8).length) || d.mode === 'reflex']] },
  allMobs: { gen: (s, r) => { s.nearby.push({ type: ALL_HOSTILE[Math.floor(r() * ALL_HOSTILE.length)], dist: Math.round(r() * 16 * 2) / 2, hostile: true }); },
    inv: [['ม็อบศัตรูทุกชนิด ≤4 → ต้อง reflex (สู้/หนี)', (s, d) => !near(s, (e) => e.hostile && e.dist <= 4).length || d.mode === 'reflex']] },
  neutral: { gen: (s, r) => { const k = 1 + Math.floor(r() * 4); const t = NEUTRAL[Math.floor(r() * NEUTRAL.length)]; const prov = r() < 0.6;
      for (let i = 0; i < k; i++) s.nearby.push({ type: t, dist: Math.round(r() * 16 * 2) / 2, hostile: false, provoked: prov });
      if (!prov && r() < 0.5) { s.action = 'attack'; s.target = s.nearby[s.nearby.length - 1]; } },
    inv: [['ม็อบโกรธ ≤16 → ต้องหนีหรือสู้ (ห้ามแผน)', (s, d) => !near(s, (e) => e.provoked && e.dist <= 16).length || isAction(d)],
      ['จะตีม็อบเป็นกลางที่ยังไม่โกรธ → ต้องมี veto', (s, d) => !(s.action === 'attack' && s.target && !s.target.provoked) || d.vetoes.some((v) => v.id === 'dont-provoke')]] },
  blocks: { gen: (s, r) => { const b = ALL_BLOCKS[Math.floor(r() * ALL_BLOCKS.length)]; const mode = r();
      if (mode < 0.4) s.touching = [r() < 0.5 ? b.name : DANGER_BLOCKS[Math.floor(r() * DANGER_BLOCKS.length)]];
      else { const tiers = ['hand', 'wooden', 'stone', 'iron', 'diamond']; const t = tiers[Math.floor(r() * tiers.length)];
        const ok = !b.needsTool || (t !== 'hand' && b.tool !== 'hand' && TIER_RANK[t] >= TIER_RANK[b.minTier]);
        s.digging = { block: b.name, canHarvest: ok, belowFeet: r() < 0.1, gravityAbove: r() < 0.1 }; } },
    inv: [['แตะบล็อกอันตราย → ต้อง reflex prio ≥82', (s, d) => !(s.touching ?? []).some((n) => DANGER_BLOCKS.includes(n)) || (d.mode === 'reflex' && d.rule.prio >= 82)],
      ['ขุดไม่ได้ของ/ทรายเหนือหัว → ต้อง reflex', (s, d) => !(s.digging && (!s.digging.canHarvest || s.digging.gravityAbove)) || d.mode === 'reflex']] },
  piglin: { gen: (s, r) => { s.dim = 'the_nether'; s.worn = r() < 0.5 ? ['golden_boots'] : []; const k = 1 + Math.floor(r() * 4);
      for (let i = 0; i < k; i++) s.nearby.push({ type: r() < 0.8 ? 'piglin' : 'piglin_brute', dist: Math.round(r() * 24 * 2) / 2, hostile: false, provoked: r() < 0.3 });
      s.nearby.forEach((e) => { if (e.type === 'piglin_brute') { e.hostile = true; } });
      if (r() < 0.4) s.action = ['open_container', 'break_container', 'mine_gold', 'attack'][Math.floor(r() * 4)]; if (s.action === 'attack') s.target = s.nearby[0]; },
    inv: [['เปิดหีบ/ขุดทอง ใกล้ piglin ≤16 → ต้องมี veto', (s, d) => !(['open_container', 'break_container', 'mine_gold'].includes(s.action) && near(s, (e) => e.type === 'piglin' && e.dist <= 16).length) || d.vetoes.some((v) => v.id === 'piglin-container')],
      ['piglin ≤16 + ไม่ได้สวมทอง → ต้อง reflex (สวมทอง/ถอย/สู้)', (s, d) => !(near(s, (e) => e.type === 'piglin' && e.dist <= 16).length && !(s.worn ?? []).some((w) => w.startsWith('golden_'))) || d.mode === 'reflex'],
      ['brute ≤16 → ต้อง reflex (ไม่สนทอง)', (s, d) => !near(s, (e) => e.type === 'piglin_brute' && e.dist <= 16).length || d.mode === 'reflex']] },
  weaponTactics: { gen: (s, r) => { const ws = ['mace', 'trident', 'iron_spear', 'diamond_spear', 'fishing_rod', 'bow', 'crossbow', 'iron_sword'];
      s.tc = { weapon: ws[Math.floor(r() * ws.length)], ench: {}, dist: Math.round(r() * 40 * 2) / 2, inWater: r() < 0.3, raining: r() < 0.3, thunder: r() < 0.2, openSky: r() < 0.6,
        fallHeight: r() < 0.4 ? Math.round(r() * 80 * 2) / 2 : 0, targetBelowInReach: r() < 0.6, windCharges: r() < 0.5 ? 1 + Math.floor(r() * 5) : 0, hp: s.hp, targetHp: 10 + Math.floor(r() * 11),
        targetArmor: [{ armor: 0, toughness: 0 }, { armor: 15, toughness: 0 }, { armor: 20, toughness: 8 }][Math.floor(r() * 3)], closing: Math.round(r() * 12 * 2) / 2, targetFleeing: r() < 0.4, inv: s.inv, dim: s.dim };
      for (const e of ['riptide', 'loyalty', 'channeling', 'density', 'breach']) if (r() < 0.25) s.tc.ench[e] = 1;
      if (s.tc.ench.riptide) { delete s.tc.ench.loyalty; delete s.tc.ench.channeling; }  // Riptide ขัดกับ Loyalty/Channeling (kb enchantments)
      s.ta = tactic(s.tc); },
    inv: [['Riptide ใช้ได้เฉพาะในน้ำ/ฝน', (s) => s.ta.act !== 'riptide' || s.tc.inWater || s.tc.raining],
      ['Channeling ต้องพายุ + ฟ้าเปิด', (s) => s.ta.act !== 'throw-channeling' || (s.tc.thunder && s.tc.openSky)],
      ['หอก charge ต้องระยะ 2–4.5 + เข้าหากัน ≥4.6', (s) => s.ta.act !== 'charge' || (s.tc.dist >= 2 && s.tc.dist <= 4.5 && s.tc.closing >= 4.6)],
      ['ธนูระยะ ≤3 → ห้ามยิง', (s) => !(['bow', 'crossbow'].includes(s.tc.weapon) && s.tc.dist <= 3) || s.ta.act !== 'shoot'],
      ['เบ็ดดึงต้องเป้าหนี + ระยะ ≤33', (s) => s.ta.act !== 'rod-pull' || (s.tc.targetFleeing && s.tc.dist <= 33)],
      ['กระบองดิ่งแล้วเป้าหลุด + ตกตาย + มีของกันตก → ต้องสลับไปกันตก', (s) => !(s.tc.weapon === 'mace' && s.tc.fallHeight >= 1.5 && s.tc.targetBelowInReach === false && fallDamage(s.tc.fallHeight) >= s.tc.hp && chooseClutch({ inventory: Object.keys(s.inv), dimension: s.dim })) || s.ta.act === 'abort-to-clutch'],
      ['ลูกลม-ทุบ ต้องปลอดภัยถ้าพลาด', (s) => s.ta.act !== 'wind-jump-smash' || fallDamage(s.ta.height + 1) < s.tc.hp]] },
  effectsAll: { gen: (s, r) => { const k = 1 + Math.floor(r() * 3); s.effects = []; for (let i = 0; i < k; i++) s.effects.push(EFFECTS_BAD[Math.floor(r() * EFFECTS_BAD.length)]); if (r() < 0.4) s.inv.milk_bucket = 1; },
    inv: [['เอฟเฟกต์ร้าย (ยกเว้น glowing/bad_luck) → ต้อง reflex', (s, d) => !s.effects.some((e) => !['glowing', 'bad_luck', 'instant_damage'].includes(e)) || d.mode === 'reflex'],
      ['Wither → ต้องจัดการด้วย prio ≥80', (s, d) => !s.effects.includes('wither') || (d.mode === 'reflex' && d.rule.prio >= 80)]] },
  mlg: { gen: (s, r) => { s.fallDistance = 4 + Math.round(r() * 120); s.inv = {}; for (const c of CLUTCH_ITEMS) if (r() < 0.2) s.inv[c] = 1; s.wallAdjacent = r() < 0.3;
      s.inLava = false; s.air = 15;
      const c = chooseClutch({ inventory: Object.keys(s.inv), dimension: s.dim, wallAdjacent: s.wallAdjacent, fallDistance: s.fallDistance, hp: s.hp });
      s.clutchPick = c;
      const win = clutchWindow(s.fallDistance).count; const dmg = fallDamage(s.fallDistance);
      const residual = c && ['hay_block', 'honey_block'].includes(c) ? fallDamage(s.fallDistance, { landing: c }) : 0;
      // ผลลัพธ์: ของกันตกส่วนใหญ่ต้องมี tick ให้วาง (ไข่มุก/บันไดชิดผนังไม่ต้อง) · ASSUME ความแม่นวาง 90%
      const needsWindow = c && !['ender_pearl', 'ladder'].includes(c);
      const saved = c && (!needsWindow || win > 0) && r() < 0.9 && residual < s.hp;
      const survive = saved || dmg < s.hp;
      const bucket = s.fallDistance < 24 ? '4–23' : s.fallDistance < 50 ? '24–49' : s.fallDistance < 100 ? '50–99' : '100+';
      const k = `${bucket} | ${c ? (needsWindow && win === 0 ? `${c} (0 tick ให้วาง)` : c) : 'ไม่มีของ'}`;
      const st = (mlgStats[k] ??= { n: 0, ok: 0 }); st.n++; if (survive) st.ok++; },
    inv: [['ตก + มีของกันตกที่รอดได้ → ต้องเลือก falling (clutch)', (s, d) => !s.clutchPick || ['falling', 'in-lava'].includes(top(d))],
      ['ของที่เลือกต้องไม่ใช่ฟาง/น้ำผึ้งที่ยังตาย', (s) => !(s.clutchPick && ['hay_block', 'honey_block'].includes(s.clutchPick) && fallDamage(s.fallDistance, { landing: s.clutchPick }) >= s.hp)]] },
  biomes: { gen: (s, r) => { const ks = Object.keys(BIOMES); const k = ks[Math.floor(r() * ks.length)]; s.biome = k; BIOMES[k](s, r); }, inv: [] },
  weapons: { gen: (s, r) => { s.inv = {}; for (const w of WEAPON_ITEMS) if (r() < 0.25) s.inv[w] = 1; if (r() < 0.5) s.inv.arrow = 16;
      s.wctx = { dist: Math.round(r() * 20), targetShield: r() < 0.3, fallHeight: r() < 0.3 ? Math.round(r() * 10) : 0 }; s.weapon = bestWeapon(s.inv, s.wctx).item; },
    inv: [['มีอาวุธประชิด → ห้ามใช้มือเปล่า', (s) => s.weapon !== 'fist' || !Object.keys(s.inv).some((k) => WEAPONS[k] && k !== 'fist')],
      ['เป้ายกโล่ + มีขวาน → ต้องใช้ขวาน (เว้นยิงไกล)', (s) => !(s.wctx.targetShield && ['netherite_axe', 'diamond_axe', 'iron_axe'].some((a) => s.inv[a])) || s.weapon.endsWith('_axe') || ((s.wctx.dist > 6) && s.inv.arrow && (s.inv.bow || s.inv.crossbow))],
      ['อาวุธที่เลือกต้องมีอยู่จริง', (s) => s.weapon === 'fist' || !!s.inv[s.weapon]],
      ['ไกล >6 + มีธนู + ลูกธนู → ต้องยิง', (s) => !(s.wctx.dist > 6 && s.inv.arrow && (s.inv.bow || s.inv.crossbow)) || ['bow', 'crossbow'].includes(s.weapon)]] },
});

Object.assign(EVENTS, EXT_EVENTS);   // ชุด 2: 12 หมวด (scripts/fuzz_events_ext.mjs)
if (process.argv.includes('--list')) { console.log(Object.keys(EVENTS).join(' ')); process.exit(0); }

const GLOBAL = [
  ['ทุกไฟล์ kb ที่ชี้ต้องมีอยู่จริง', (s, d) => (d.mode === 'goal-done' ? [] : d.mode === 'reflex' ? d.rule.kb : d.step.kb).every(kbExists)],
  ['ทุกการตัดสินใจต้องชี้ความรู้ใน kb', (s, d) => d.mode === 'goal-done' || (d.mode === 'reflex' ? d.rule.kb.length : d.step.kb.length) > 0],
  ['ห้ามกินตอนศัตรูอยู่ในระยะ 6', (s, d) => !(['eat-to-regen', 'hungry', 'eat-after-hunger-effect'].includes(top(d)) && near(s, (e) => e.hostile && e.dist <= 6).length)],
];

const report = [];
const t0 = Date.now();
for (const [ev, E] of Object.entries(EVENTS)) {
  if (ONLY.length && !ONLY.includes(ev)) continue;
  const r = rng32((0xC0FFEE ^ (ev.length * 7919)) + ROUND * 1_000_003);
  const groups = new Map();
  const tops = {};
  for (let i = 0; i < N; i++) {
    const s = baseState(r);
    E.gen(s, r);
    const d = decide(s, GOAL[s.dim]);
    const tk = top(d) === 'plan' ? `plan:${d.step.id}` : top(d);
    tops[tk] = (tops[tk] ?? 0) + 1;
    for (const [name, f] of [...E.inv, ...GLOBAL]) {
      if (f(s, d)) continue;
      const key = `${name} | ${tk}`;
      const g = groups.get(key) ?? { n: 0, ex: [] };
      g.n++;
      if (g.ex.length < 3) g.ex.push(JSON.stringify({ hp: s.hp, food: s.food, dim: s.dim, nearby: s.nearby, eff: s.effects, fall: s.fallDistance, air: s.air, edge: s.edgeDepth, lava: s.inLava, fire: s.onFire, act: s.action, inv: Object.keys(s.inv), flags: s.flags, nb: s.nearBlocks }));
      groups.set(key, g);
    }
  }
  report.push({ ev, groups: [...groups.entries()].sort((a, b) => b[1].n - a[1].n), tops });
  const bad = [...groups.values()].reduce((a, g) => a + g.n, 0);
  console.log(`${ev.padEnd(10)} ${N.toLocaleString()} สถานะ · ผิด ${bad.toLocaleString()} · ${((Date.now() - t0) / 1000).toFixed(0)}s`);
}

const md = [`# DEEP_FUZZ — รอบ ${ROUND} (สุ่มเหตุการณ์ละ ${N.toLocaleString()} สถานะ)`, '',
  '> `node scripts/deep_fuzz.mjs [N] [event...]` · seed คงที่ (ทำซ้ำได้) · ช่องโหว่จัดกลุ่ม "กฎที่ผิด | สิ่งที่บอตเลือก" · ยืนยันระดับจำลอง', ''];
for (const { ev, groups, tops } of report) {
  const bad = groups.reduce((a, [, g]) => a + g.n, 0);
  md.push(`## ${ev} — ${bad ? `❌ ช่องโหว่ ${groups.length} กลุ่ม (${bad.toLocaleString()} สถานะ)` : '✅ ไม่พบช่องโหว่'}`, '');
  for (const [k, g] of groups.slice(0, 8)) md.push(`- **${k}** — ${g.n.toLocaleString()} สถานะ`, ...g.ex.map((e) => `  - \`${e}\``));
  const tt = Object.entries(tops).sort((a, b) => b[1] - a[1]).slice(0, 6).map(([k, c]) => `${k} ${((c / N) * 100).toFixed(1)}%`).join(' · ');
  md.push('', `การตัดสินใจหลัก: ${tt}`, '');
}
if (Object.keys(mlgStats).length) {
  md.push('## MLG — อัตรารอดตามความสูง × ของกันตก (ผลลัพธ์จำลอง: clutchWindow + ความแม่นวาง 90% ASSUME)', '', '| ความสูง | ของที่ใช้ | ตัวอย่าง | รอด |', '|---|---|---|---|');
  for (const [k, v] of Object.entries(mlgStats).sort()) { const [b, c] = k.split(' | '); md.push(`| ${b} | ${c} | ${v.n.toLocaleString()} | ${((v.ok / v.n) * 100).toFixed(1)}% |`); }
  md.push('');
}
fs.mkdirSync(path.dirname(path.join(ROOT, OUT)), { recursive: true });
fs.writeFileSync(path.join(ROOT, OUT), md.join('\n'));
