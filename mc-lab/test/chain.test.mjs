import { test } from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import path from 'node:path';
import { TRIGGERS, CHAINS, matchTriggers, nextStep, decide } from '../lib/chain.mjs';

const KB = path.resolve(path.dirname(new URL(import.meta.url).pathname), '..', 'kb');

test('ทุกไฟล์ kb ที่ trigger/chain อ้างถึง มีอยู่จริง', () => {
  const refs = [...TRIGGERS.flatMap((t) => t.kb), ...Object.values(CHAINS).flat().flatMap((s) => s.kb)];
  const missing = [...new Set(refs)].filter((r) => !fs.existsSync(path.join(KB, r)));
  assert.deepEqual(missing, []);
});

test('ตกจากที่สูง + มีครีปเปอร์ → clutch มาก่อน', () => {
  const r = matchTriggers({ hp: 20, food: 20, dim: 'overworld', fallDistance: 12, nearby: [{ type: 'creeper', dist: 2, hostile: true }] });
  assert.equal(r[0].id, 'falling');
  assert.ok(r.some((t) => t.id === 'creeper-fusing'));
});

test('เลือดต่ำ + ซอมบี้ใกล้ → ถอยก่อนกิน (ไม่ใช่กินกลางวง)', () => {
  const d = decide({ hp: 5, food: 10, dim: 'overworld', inv: { bread: 3 }, nearby: [{ type: 'zombie', dist: 3, hostile: true }] }, 'first_night');
  assert.equal(d.rule.id, 'low-hp-in-combat');
  assert.ok(!matchTriggers({ hp: 5, food: 10, inv: { bread: 3 }, nearby: [{ type: 'zombie', dist: 3, hostile: true }] }).some((t) => t.id === 'eat-to-regen'));
});

test('ไฟล์ม็อบที่ใกล้สุดถูกแนบใน hostile-close', () => {
  const r = matchTriggers({ hp: 20, food: 20, nearby: [{ type: 'spider', dist: 2, hostile: true }] });
  assert.equal(r.find((t) => t.id === 'hostile-close').kb[0], 'mobs/spider.md');
});

test('นอนในนรก = ห้าม (prio สูงสุด)', () => {
  assert.equal(matchTriggers({ action: 'sleep', dim: 'the_nether', hp: 20, food: 20 })[0].id, 'bed-wrong-dimension');
});

test('chain first_night: ไล่ขั้นตามของในกระเป๋า', () => {
  assert.equal(nextStep('first_night', { inv: {} }).id, 'logs');
  assert.equal(nextStep('first_night', { inv: { oak_log: 2, birch_log: 2 } }).id, 'table');
  const all = { oak_log: 4, crafting_table: 1, stone_pickaxe: 1, stone_sword: 1, bread: 5, red_bed: 1, torch: 8 };
  assert.equal(nextStep('first_night', { inv: all }), null);
});

test('chain iron_kit: เสื้อเกราะก่อนดาบ (กฎ jing) · ใส่แล้วนับด้วย', () => {
  assert.equal(nextStep('iron_kit', { inv: { iron_pickaxe: 1, furnace: 1 } }).id, 'chestplate');
  assert.equal(nextStep('iron_kit', { inv: { iron_pickaxe: 1, furnace: 1 }, worn: ['iron_chestplate'] }).id, 'sword');
});

test('decide: ไม่มีอันตราย → ทำตามแผน', () => {
  const d = decide({ hp: 20, food: 20, dim: 'overworld', time: 1000, inv: {} }, 'end');
  assert.equal(d.mode, 'plan');
  assert.equal(d.step.id, 'blaze-rods');
});
