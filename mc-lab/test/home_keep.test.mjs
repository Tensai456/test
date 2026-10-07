import { test } from 'node:test';
import assert from 'node:assert/strict';
import { categoryOf, sortPlan, tidyPlan, fitInWindow, createHomeMeter, stackOf, stashPlan } from '../lib/home/home_keep.mjs';

test('แยกหมวด: ของหลักไปหมวดถูก', () => {
  const want = { iron_sword: 'combat', iron_pickaxe: 'tools', torch: 'supplies', bread: 'food', wheat_seeds: 'farming', raw_iron: 'minerals', iron_ingot: 'minerals',
    rotten_flesh: 'mob_drops', nether_wart: 'brewing', netherrack: 'nether_end', oak_log: 'wood', cobblestone: 'stone', dirt: 'natural', repeater: 'redstone_misc' };
  for (const [k, v] of Object.entries(want)) assert.equal(categoryOf(k), v, k);
  assert.equal(stackOf('ender_pearl'), 16);
});

test('จัดหีบ: ของที่อยู่ผิดหีบต้องถูกย้าย · คะแนนเพิ่มเมื่อจัดแล้ว', () => {
  const chests = [{ id: 'A', items: [{ name: 'cobblestone', count: 128 }, { name: 'bread', count: 5 }] }, { id: 'B', items: [{ name: 'cooked_beef', count: 20 }, { name: 'dirt', count: 10 }] }];
  const p = sortPlan(chests);
  assert.deepEqual(p.labels, { A: 'stone', B: 'food' });
  assert.deepEqual(p.moves.map((m) => [m.item, m.to]), [['bread', 'B'], ['dirt', 'new-chest']]);
  assert.ok(p.score > 0.8 && p.score < 1);
});

test('ปรับพื้น: เริ่มใกล้บ้าน · ข้ามหน้าผา >6 · วัดว่ารอ 30 วิทำได้กี่ท่า', () => {
  const h = [[64, 65, 64], [63, 64, 64], [64, 64, 80]];
  const t = tidyPlan(h, 64);
  assert.equal(t.actions.length, 2);                 // 80 = หน้าผา ข้าม
  assert.equal(t.actions[0].dist, 1);
  const f = fitInWindow({ tidy: t, waitSec: 30 });
  assert.equal(f.tidyActions, 2);
  const m = createHomeMeter(); m.record({ waitSec: 60, sortBefore: 0.5, sortAfter: 0.8, tidyBefore: 0.6, tidyAfter: 0.7 });
  assert.equal(m.summary().sortGainPerMin.toFixed(2), '0.30');
});

test('เว้นพื้นที่ขุด: ปากเหมืองไม่ถูกถม', () => {
  const h = [[64, 64, 64], [64, 50, 64], [64, 64, 63]];
  const keep = [{ x0: 1, z0: 1, x1: 1, z1: 1, why: 'mine-entrance' }];
  const t = tidyPlan(h, 64, { keep, maxDiff: 20 });
  assert.deepEqual(t.actions.map((a) => [a.x, a.z]), [[2, 2]]);
});

test('ฝากของ: เครื่องมือขุด/คบเพลิง/อาวุธ/ของกันตก เว้นไว้ · ของอื่นฝาก', () => {
  const { keep, deposit } = stashPlan({ iron_pickaxe: 1, torch: 30, iron_sword: 1, water_bucket: 1, cobblestone: 200, raw_iron: 20, rotten_flesh: 8, bread: 10 });
  assert.deepEqual(Object.keys(keep).sort(), ['bread', 'cobblestone', 'iron_pickaxe', 'iron_sword', 'torch', 'water_bucket']);
  assert.equal(keep.cobblestone, 64); assert.equal(deposit.cobblestone, 136);
  assert.ok(deposit.raw_iron && deposit.rotten_flesh);
});

test('คบเพลิง: ทุกช่องต้องอยู่ ≤13 จากคบเพลิงสักดวง · ดวงเดิมไม่รื้อ', async () => {
  const { torchPlan } = await import('../lib/home/home_keep.mjs');
  const h = Array.from({ length: 41 }, () => Array(41).fill(64));
  const { place, total } = torchPlan(h, 64, { torches: [{ x: 20, z: 20 }] });
  const all = [{ x: 20, z: 20, y: 64 }, ...place];
  for (let z = 0; z < 41; z++) for (let x = 0; x < 41; x++) assert.ok(all.some((t) => Math.abs(t.x - x) + Math.abs(t.z - z) <= 13), `${x},${z}`);
  assert.equal(total, place.length + 1);
  assert.ok(place.length <= 12, `ใช้ ${place.length} ดวง`);
});

test('ทางเดินขึ้นบ้าน (house-passage) ไม่ถูกถม/ขุด', () => {
  const h = [[64, 64, 64, 64], [64, 60, 61, 62], [64, 64, 64, 64]];   // บันไดจากเหมืองขึ้นบ้าน
  const keep = [{ x0: 1, z0: 1, x1: 3, z1: 1, why: 'house-passage' }];
  assert.equal(tidyPlan(h, 64, { keep }).actions.length, 0);
});
