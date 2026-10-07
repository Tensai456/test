import { test } from 'node:test';
import assert from 'node:assert/strict';
import { descendOptions } from '../lib/home/descend.mjs';

test('มีหลังคาเป็นขั้น ≤3 → เดินลงไม่เสียเลือด (ก่อน MLG)', () => {
  // ยืนบนสันหลังคา feet 12 · หลังคาลดทีละ 1 ไปทางตะวันออกจนถึงพื้น (feet 1)
  const tops = new Map(); for (let i = 1; i <= 11; i++) tops.set(`${i},0`, 11 - i);
  const o = descendOptions({ tops, start: { x: 0, z: 0, feet: 12 }, ground: 1, inv: ['water_bucket'] });
  assert.equal(o[0].kind, 'walk-down'); assert.equal(o[0].damage, 0);
});

test('เสาลอยไม่มีทางเดิน: มีเสาตัวเอง → ขุดลง · ไม่มี → MLG ถังน้ำ · ไม่มีของ → กระโดดถ้าไม่ตาย', () => {
  const s = { start: { x: 0, z: 0, feet: 10 }, ground: 1 };
  assert.equal(descendOptions({ ...s, pillarH: 9, inv: ['water_bucket'] })[0].kind, 'dig-down');
  assert.equal(descendOptions({ ...s, inv: ['water_bucket'] })[0].kind, 'mlg');
  const j = descendOptions({ ...s, inv: [], hp: 20 });
  assert.equal(j[0].kind, 'jump'); assert.ok(j[0].damage < 16);
  assert.equal(descendOptions({ ...s, inv: [], hp: 6 }).length, 0);   // เลือดน้อย กระโดดตาย → ไม่มีทางเลือก (ต้องต่อทางลง/รอ)
});
