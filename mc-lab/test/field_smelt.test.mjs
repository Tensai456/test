import { test } from 'node:test';
import assert from 'node:assert/strict';
import { smeltPlan, fuelCapacity } from '../lib/economy/field_smelt.mjs';

test('เชื้อเพลิง: ถ่าน 1 = 8 ชิ้น · ซุง 1 = 6 ชิ้น (คราฟต์เป็นแผ่นไม้ก่อน)', () => {
  assert.equal(fuelCapacity({ coal: 1 }), 8);
  assert.equal(fuelCapacity({ oak_log: 1 }), 6);
});

test('เผาเฉพาะเหล็ก/ทอง/ทองแดงที่ต้องใช้ · เพชรไม่เผา', () => {
  const p = smeltPlan({ inv: { raw_iron: 10, raw_gold: 4, raw_copper: 20, diamond: 3, coal: 2 }, need: { iron: Infinity, gold: 4, copper: 0 } });
  assert.deepEqual(p.smelt.map((s) => s.item).sort(), ['raw_gold', 'raw_iron']);
  assert.equal(p.items, 14);
  assert.ok(p.skipped.includes('diamond'));
  assert.equal(p.fuelAction, 'ok');               // ถ่าน 2 = 16 ชิ้น ≥ 14
});

test('ที่ตั้งเตา: บ้าน = รอ · ผิวดิน = ตะเวน ≤50 · เหมือง = สำรวจ · เชื้อเพลิงไม่พอ', () => {
  const home = smeltPlan({ inv: { raw_iron: 8, coal: 1 }, location: 'home' });
  assert.equal(home.wait, 'wait-home'); assert.equal(home.roamRadius, 0);
  const out = smeltPlan({ inv: { raw_iron: 64 }, location: 'surface', woodNearby: false });
  assert.equal(out.fuelAction, 'search-wood-50'); assert.equal(out.roamRadius, 50); assert.equal(out.logsToChop, 11);
  const short = smeltPlan({ inv: { raw_iron: 8, coal: 1 }, location: 'surface' });
  assert.equal(short.roamRadius, 60 > 50 ? 50 : 60);     // 80 วิ × 1.5 ÷ 2 = 60 → ตัดที่ 50
  const mine = smeltPlan({ inv: { raw_iron: 8 }, location: 'mine', woodNearby: false });
  assert.equal(mine.fuelAction, 'use-mined-coal'); assert.equal(mine.roamRadius, 24);   // 80 × 0.6 ÷ 2
});

test('อาหารนอกบ้าน: <20 แต้ม → หารอบเตา ≤50 · ไม่นับเนื้อเน่า', () => {
  assert.equal(smeltPlan({ inv: { raw_iron: 4, bread: 2, rotten_flesh: 10 }, location: 'surface' }).foodAction, 'forage-50');
  assert.equal(smeltPlan({ inv: { raw_iron: 4, cooked_beef: 3 }, location: 'mine' }).foodAction, 'ok');   // 24 แต้ม
});
