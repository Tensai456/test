import { test } from 'node:test';
import assert from 'node:assert/strict';
import { fallDamage, simulateFall, clutchWindow, chooseClutch, mustClutch, canJumpGap } from '../lib/fall_safety.mjs';

test('ตก ≤3 บล็อก ไม่เสียเลือด, 23 บล็อก = 20 HP', () => {
  assert.equal(fallDamage(3), 0);
  assert.equal(fallDamage(4), 1);
  assert.equal(fallDamage(23), 20);
});

test('ฟาง/น้ำผึ้งเหลือ 20%, เตียงระยะครึ่ง, หินย้อยระยะ x2, น้ำ 0', () => {
  assert.equal(fallDamage(103, { landing: 'hay_block' }), 20);
  assert.equal(fallDamage(26, { landing: 'bed' }), 10);
  assert.equal(fallDamage(12, { landing: 'pointed_dripstone' }), 21);
  assert.equal(fallDamage(200, { landing: 'water' }), 0);
});

test('Feather Falling IV ลด 48%, Slow Falling = 0', () => {
  assert.equal(fallDamage(23, { featherFalling: 4 }), Math.ceil(20 * 0.52));
  assert.equal(fallDamage(100, { slowFalling: true }), 0);
});

test('ความเร็วตกเข้าใกล้ปลายทาง ~3.92 บล็อก/tick', () => {
  const s = simulateFall(5000);
  const vmax = Math.min(...s.map(x => x.vy));
  assert.ok(vmax < -3.8 && vmax > -3.93, `vmax=${vmax}`);
});

test('clutch window: ตกต่ำมีหลาย tick, ตกสูงมีได้ 0–1 tick (ความเร็ว > ช่วงเอื้อม)', () => {
  assert.ok(clutchWindow(10).count >= 2);
  const counts = [];
  for (let h = 100; h <= 300; h += 0.5) counts.push(clutchWindow(h).count);
  assert.ok(counts.every(c => c <= 1));
  assert.ok(counts.includes(0), 'ควรมีบางความสูงที่ไม่มี tick ให้วาง');
});

test('chooseClutch: นรกห้ามน้ำ, บันไดต้องมีผนัง, เรือชนิดใดก็ได้', () => {
  assert.equal(chooseClutch({ inventory: ['water_bucket', 'hay_block'], dimension: 'the_nether' }), 'hay_block');
  assert.equal(chooseClutch({ inventory: ['water_bucket'] }), 'water_bucket');
  assert.equal(chooseClutch({ inventory: ['ladder'] }), null);
  assert.equal(chooseClutch({ inventory: ['ladder'], wallAdjacent: true }), 'ladder');
  assert.equal(chooseClutch({ inventory: ['birch_boat'] }), 'birch_boat');
});

test('mustClutch + canJumpGap', () => {
  assert.equal(mustClutch(10, 20), false);
  assert.equal(mustClutch(20, 20), true);
  assert.equal(canJumpGap(1), 'walk');
  assert.equal(canJumpGap(3), 'sprint_jump');
  assert.equal(canJumpGap(3, { food: 6 }), 'bridge');
  assert.equal(canJumpGap(4), 'risky_sprint_jump');
  assert.equal(canJumpGap(5), 'bridge');
});

test('นั่งร้านชั้นเดียว: ใช้ได้เฉพาะตกไม่สูง (W/Scaffolding)', () => {
  assert.equal(chooseClutch({ inventory: ['scaffolding'], fallDistance: 15 }), 'scaffolding');
  assert.equal(chooseClutch({ inventory: ['scaffolding'], fallDistance: 60 }), null);
  assert.equal(chooseClutch({ inventory: ['scaffolding', 'ender_pearl'], fallDistance: 60 }), 'ender_pearl');
});
