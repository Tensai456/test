import { test } from 'node:test';
import assert from 'node:assert/strict';
import { makeBrain } from '../src/brains.mjs';
import { parseBrain } from '../src/config.mjs';

const reflex = { mode: 'reflex', rule: { id: 'creeper-fusing', prio: 90, do: 'หนี' }, vetoes: [] };
const plan = { mode: 'plan', step: { id: 'logs', title: 'ตัดไม้', goal: 'first_night', index: 0, total: 7 }, vetoes: [{ id: 'no-sleep' }] };

test('parseBrain: smart = fly-small+rules · ชิ้นผิดโยน error', () => {
  assert.deepEqual(parseBrain('smart'), ['fly-small', 'rules']);
  assert.throws(() => parseBrain('cat'));
});
test('rules ล้วน', async () => {
  const b = await makeBrain('rules', { rulesDecide: () => plan });
  assert.equal(b.decide({}, 'x').source, 'rules');
  assert.match(b.decide({}, 'x').thought, /ตัดไม้/);
});
test('fly ยังไม่เสียบ → missing + ตกไปใช้กฎ', async () => {
  delete process.env.FLY_SMALL_PATH;
  const b = await makeBrain('smart', { rulesDecide: () => plan });
  assert.deepEqual(b.missing, ['fly-small']);
  assert.equal(b.decide({}, 'x').source, 'rules');
});
test('smart: fly ตอบ → ใช้ fly แต่ reflex ด่วนของกฎชนะ + veto ติดไป', async () => {
  process.env.FLY_SMALL_PATH = 'brains/example_fly.mjs';
  let r = plan;
  const b = await makeBrain('smart', { rulesDecide: () => r });
  const d = b.decide({ food: 5, nearby: [] }, 'x');
  assert.equal(d.source, 'fly-small'); assert.equal(d.step.id, 'fly-small:eat'); assert.equal(d.vetoes[0].id, 'no-sleep');
  r = reflex;
  assert.equal(b.decide({ food: 5 }, 'x').source, 'rules');
  delete process.env.FLY_SMALL_PATH;
});
test('fly ล้วนไม่มีกฎ ไม่ตอบ → idle', async () => {
  process.env.FLY_SMALL_PATH = 'brains/example_fly.mjs';
  const b = await makeBrain('fly-small', {});
  assert.equal(b.decide({ food: 20, nearby: [] }, 'x').mode, 'idle');
  delete process.env.FLY_SMALL_PATH;
});
