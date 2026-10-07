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
