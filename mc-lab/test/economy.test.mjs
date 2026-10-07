import { test } from 'node:test';
import assert from 'node:assert/strict';
import { ironDensity, simulate } from '../lib/economy/iron_race.mjs';

test('ความหนาแน่นเหล็ก: ยอดภูเขา Y232 > Y16 ราว 2 เท่า · นอกช่วงทุกชุด = 0', () => {
  const r = ironDensity(232) / ironDensity(16);
  assert.ok(r > 1.8 && r < 2.5, `ratio ${r}`);
  assert.equal(ironDensity(400), 0);
  assert.ok(ironDensity(-60) > 0);   // ชุดเล็กสม่ำเสมอถึง -64
});

test('ภูเขาไกลมาก → ช้ากว่าลงเหมือง', () => {
  const st = { chop: 'hand', spacing: 2, furnaces: 1, miners: 1 };
  const mine = simulate(st, { pVein: 0.002 }).totalSec;
  const far = simulate({ ...st, mountain: true }, { pVein: 0.002, mountainTravelSec: 3600 }).totalSec;
  assert.ok(far > mine);
});
