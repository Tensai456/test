import { test as t } from 'node:test';
import assert from 'node:assert/strict';
import { createLadder } from '../src/ladder.mjs';
import { CHAINS, test } from '../../mc-lab/lib/chain.mjs';

t('บันได: เริ่ม 0% · มีของขั้นแรก ๆ แล้วขยับ · จำสูงสุด · ค้าง', () => {
  const L = createLadder({ chains: CHAINS, test, stuckMin: 1 });
  assert.equal(L.total, 31);
  const a = L.update({ inv: {}, worn: [], flags: {} }, 0);
  assert.equal(a.pct, 0); assert.equal(a.stage, 'first_night');
  const b = L.update({ inv: { oak_log: 20, crafting_table: 1 }, worn: [], flags: {} }, 100);
  assert.ok(b.done >= 2, JSON.stringify(b));
  const c = L.update({ inv: {}, worn: [], flags: {} }, 200);   // ของหมด → ปัจจุบันถอย แต่สูงสุดคงไว้
  assert.equal(c.done, 0); assert.equal(c.best, b.done);
  const d = L.update({ inv: {}, worn: [], flags: {} }, 200 + 1300);
  assert.equal(d.stuck, true);
});
