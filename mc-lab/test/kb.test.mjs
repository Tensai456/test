import { test } from 'node:test';
import assert from 'node:assert/strict';
import { findKb, readKb, blockInfo } from '../lib/kb.mjs';

test('ค้น creeper ได้ไฟล์ม็อบก่อน', () => {
  const r = findKb('creeper');
  assert.equal(r[0].path, 'mobs/creeper.md');
  assert.match(readKb(r[0].path), /Creeper/);
});

test('จำกัดหมวดได้', () => {
  assert.ok(findKb('drowning', { group: 'hazards' }).every((i) => i.group === 'hazards'));
});

test('blockInfo: เหล็กต้องอีเต้อหิน, หินขุดอีเต้อไม้ 1.15 วิ, obsidian เพชร 9.4 วิ', () => {
  assert.equal(blockInfo('iron_ore').minTier, 'stone');
  assert.equal(blockInfo('stone').time.wooden, 1.15);
  assert.equal(blockInfo('obsidian').time.diamond, 9.4);
  assert.equal(blockInfo('not_a_block'), null);
});

test('ห้ามอ่านนอก kb/', () => {
  assert.throws(() => readKb('../package.json'));
});
