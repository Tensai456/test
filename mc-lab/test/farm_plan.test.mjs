import { test } from 'node:test';
import assert from 'node:assert/strict';
import { farmPlan, LIGHT_REACH_CROP } from '../lib/home/farm_plan.mjs';

test('แปลง 9×9: น้ำ 1 · farmland ทุกช่องห่างน้ำ ≤4 (ชุ่ม) · ทุกช่องได้แสง ≥9 · รั้วรอบมีประตู 1', () => {
  const p = farmPlan({ plots: [1, 1] });
  assert.equal(p.water.length, 1);
  for (const f of p.farmland) assert.ok(Math.max(Math.abs(f.x - p.water[0].x), Math.abs(f.z - p.water[0].z)) <= 4);
  for (const f of p.farmland) assert.ok(p.torches.some((t) => Math.abs(t.x - f.x) + Math.abs(t.z - f.z) + (t.y ?? 0) <= LIGHT_REACH_CROP), `${f.x},${f.z} มืด`);
  const g = farmPlan({ plots: [1, 1], entrance: 'gate' });
  assert.ok(!g.fences.some((c) => c.x === g.gate.x && c.z === g.gate.z));
  assert.equal(g.fences.length + 1, 4 * 13 - 4);    // กรอบ 13×13 (แปลง 9 + ทางเดิน 1×2 + รั้ว 1×2)
  assert.equal(p.gate.kind, 'carpet'); assert.equal(p.fences.length, 48); assert.equal(p.need.wool, 2);
  assert.ok(p.torches.length <= 4, `คบเพลิง ${p.torches.length}`);
  assert.ok(p.need.seeds > 70 && p.need.logs > 0);
});

test('2×2 แปลง: น้ำ 4 · ใช้ถังน้ำ 2 ใบทำแหล่งน้ำไม่จำกัด', () => {
  const p = farmPlan({ plots: [2, 2] });
  assert.equal(p.water.length, 4);
  assert.equal(p.need.water_bucket, 2);
});

test('เลือกที่ตั้งฟาร์ม: เลี่ยงทางขึ้นบ้าน · เลือกที่เรียบที่สุด', async () => {
  const { chooseFarmSite } = await import('../lib/home/farm_plan.mjs');
  const h = Array.from({ length: 30 }, (_, z) => Array.from({ length: 30 }, (_, x) => (x < 15 ? 64 + (x % 3) : 64)));
  // ซ้าย (x<15) ขรุขระ · ขวาเรียบ · ทางขึ้นบ้านแถว z 0–3 ฝั่งขวา
  const s = chooseFarmSite(h, { size: 13, keep: [{ x0: 15, z0: 0, x1: 29, z1: 3 }] });
  assert.ok(s.x0 >= 15 && s.z0 >= 4 && s.work === 0, JSON.stringify(s));
});
