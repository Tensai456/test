import { test } from 'node:test';
import assert from 'node:assert/strict';
import { cottage, countBlocks, rawMaterials } from '../lib/home/house_design.mjs';
import { simulateBuild, REACH } from '../lib/home/build_sim.mjs';

test('บ้าน 9×11: วางครบทุกบล็อก · เอื้อม ≤4.5 · ทุกก้อนมีที่ยึด', () => {
  const r = simulateBuild(cottage());
  assert.equal(r.done, true);
  assert.equal(r.problems.length, 0);
  assert.ok(r.steps.every((s) => s.reach <= REACH));
});

test('วัตถุดิบ: ใช้ไม้ตามแบบ (ไม่หลุดเป็น cherry) · ซุงลอกเปลือก = ซุงปกติ', () => {
  const need = rawMaterials(countBlocks(cottage().blocks)).need;
  assert.ok(!Object.keys(need).some((k) => k.startsWith('cherry') || k.startsWith('stripped')));
  assert.ok(need.spruce_log > 0 && need.cobblestone > 0);
});

test('คำสั่งวางจริง: ทุกก้อนมีหน้าที่คลิก · บันไดครึ่งล่าง · รันกับบอตจำลองจนครบ และหยุดเมื่อมีภัย', async () => {
  const { planActions, runBuild } = await import('../lib/home/build_exec.mjs');
  const d = cottage(); const acts = planActions(d, simulateBuild(d));
  assert.equal(acts.length, d.blocks.length);
  assert.ok(acts.filter((a) => a.block.endsWith('_stairs')).every((a) => a.half === 'bottom'));
  assert.ok(acts.every((a) => Math.abs(a.face[0]) + Math.abs(a.face[1]) + Math.abs(a.face[2]) === 1));
  const placed = [];
  const bot = { inventory: { items: () => [{ name: 'x' }].concat(acts.map((a) => ({ name: a.item }))) }, equip: async () => {}, blockAt: () => ({}),
    _placeBlockWithOptions: async () => placed.push(1), brain: { think: () => ({ d: { mode: 'plan' } }), allowed: () => ({ ok: true }) } };
  const io = { goto: async () => {}, pillar: async () => {}, unpillar: async () => {}, vec: (x, y, z) => ({ x, y, z }) };
  const r = await runBuild(bot, acts, io);
  assert.equal(r.done, true); assert.equal(placed.length, acts.length);
  bot.brain.think = () => ({ d: { mode: 'reflex', rule: { id: 'hostile-close' } } });
  const r2 = await runBuild(bot, acts, io, { from: 10 });
  assert.equal(r2.done, false); assert.equal(r2.at, 10); assert.match(r2.reason, /hostile-close/);
});
