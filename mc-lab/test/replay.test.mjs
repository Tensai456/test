import { test } from 'node:test';
import assert from 'node:assert/strict';
import { rowToState, createReplayTracker } from '../tools/replay/row_to_state.mjs';
import { actionClasses } from '../tools/replay/action_class.mjs';
import { replaySenior } from '../tools/replay/replay.mjs';
import { summarize } from '../tools/replay/metrics.mjs';

const base = (tick, o = {}) => ({ tick, who: 'X', pos: [0, 64, 0], vel: [0, 0, 0], onGround: true, hp: 20, food: 20, inv: { bread: 3 }, dim: 'overworld', act: {}, events: [],
  flagsRaw: { lava: false, water: false, fire: false }, sheltered: true, edgeDepth: 0, standingOn: 'stone', suffocating: false, nearby: [], timeOfDay: 1000, ...o });

test('rowToState: ขาด food → อยู่ใน _missing · ตาย→เกิด = respawnGrace 60 tick', () => {
  const tr = createReplayTracker();
  const s = rowToState(base(1, { food: undefined }), tr);
  assert.ok(s._missing.includes('food'));
  rowToState(base(10, { events: ['death'] }), tr);
  assert.equal(rowToState(base(12, { events: ['spawn'] }), tr).flags.respawnGrace, true);
  assert.equal(rowToState(base(100), tr).flags.respawnGrace, undefined);
});

test('actionClasses: หนีครีปเปอร์ = ระยะเพิ่ม ≥1.5', () => {
  const c = { type: 'creeper', id: 1, hostile: true };
  const cl = actionClasses([base(0, { nearby: [{ ...c, dist: 2, pos: [2, 64, 0] }] }), base(20, { pos: [-2, 64, 0], nearby: [{ ...c, dist: 4, pos: [2, 64, 0] }] })]);
  assert.ok(cl.has('flee'));
});

test('replay: หิว+ไม่กิน = miss · หิว+กิน = match · ขุดลงตรง = veto-breach', () => {
  const hungryEat = [0, 5, 10, 15].map((t, i) => base(t, { food: 5, act: i === 2 ? { use: 'eat' } : {} }));
  const r1 = replaySenior(hungryEat, { who: 'X' });
  assert.equal(r1[0].pred.id, 'hungry'); assert.equal(r1[0].cls, 'match');
  const r2 = replaySenior([0, 5, 10].map((t) => base(t, { food: 5 })), { who: 'X' });
  assert.equal(r2[0].cls, 'miss');
  const r3 = replaySenior([0, 5].map((t) => base(t, { act: { dig: 'stone', digBelowFeet: true } })), { who: 'X' });
  assert.ok(r3[0].breach.includes('dig-straight-down'));
  const S = summarize({ results: { X: [...r1, ...r2] }, objections: {}, qc: {} });
  assert.ok(S.agreement > 0 && S.agreement < 1);
});
