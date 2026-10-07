// deep_fuzz.mjs — เจาะทีละเหตุการณ์: สุ่ม N สถานะ/เหตุการณ์ (ค่าเริ่ม 2,000,000) ส่วนอื่นสุ่มกว้าง → decide() → invariant
// node scripts/deep_fuzz.mjs [N] [event...] → docs/DEEP_FUZZ.md · ช่องโหว่จัดกลุ่มตาม "เหตุการณ์ | กฎที่ผิด | สิ่งที่บอตเลือก"
import fs from 'node:fs';
import path from 'node:path';
import { decide } from '../lib/chain.mjs';
import { rng32 } from '../lib/pvp/duel_sim.mjs';

const ROOT = path.resolve(path.dirname(new URL(import.meta.url).pathname), '..');
const N = Number(process.argv[2] ?? 2_000_000);
const ROUND = Number((process.argv.find((a) => a.startsWith('--round=')) ?? '--round=1').split('=')[1]);
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
const GLOBAL = [
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
      if (g.ex.length < 3) g.ex.push(JSON.stringify({ hp: s.hp, food: s.food, dim: s.dim, nearby: s.nearby, eff: s.effects, fall: s.fallDistance, air: s.air, edge: s.edgeDepth, lava: s.inLava, fire: s.onFire, act: s.action, inv: Object.keys(s.inv) }));
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
fs.writeFileSync(path.join(ROOT, 'docs', 'DEEP_FUZZ.md'), md.join('\n'));
