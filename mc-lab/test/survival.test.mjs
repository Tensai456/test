import { test } from 'node:test';
import assert from 'node:assert/strict';
import { explosionDamage } from '../lib/survival/mobs.mjs';
import { survive, surviveRate } from '../lib/survival/survival_sim.mjs';
import { meleeRaw } from '../lib/pvp/damage.mjs';
import { weapon } from '../lib/pvp/weapons.mjs';

test('ครีปเปอร์ Normal ระเบิดติดตัว = 43 (วิกิ), ห่าง 6 บล็อก = 0', () => {
  assert.equal(explosionDamage(0), 43);
  assert.equal(explosionDamage(6), 0);
  assert.ok(explosionDamage(3) < 43 && explosionDamage(3) > 5);
});

test('คริเฉพาะตอนลอยและกำลังตก + ไม่วิ่ง + ชาร์จพอ', () => {
  const s = weapon('iron_sword');
  assert.equal(meleeRaw(s, { falling: false }).crit, false);                 // ยืนพื้น
  assert.equal(meleeRaw(s, { falling: true }).crit, true);                   // กระโดดแล้วตีตอนขาลง
  assert.equal(meleeRaw(s, { falling: true, sprinting: true }).crit, false); // วิ่งอยู่
  assert.equal(meleeRaw(s, { falling: true, ticksSinceAttack: 3 }).crit, false); // ชาร์จไม่พอ
});

test('ซอมบี้ 1 ตัว: ดาบเหล็ก+เกราะเหล็ก รอดเกือบเสมอ', () => {
  assert.ok(surviveRate({}, [{ type: 'zombie', dist: 6 }], { n: 50 }).rate > 0.95);
});

test('ครีปเปอร์: ยืนฟันมือเปล่าไม่มีเกราะ แย่กว่า ตีแล้วถอย', () => {
  const sc = [{ type: 'creeper', dist: 8 }];
  const stand = surviveRate({ weapon: 'fist', armor: 'none', creeperTactic: 'stand' }, sc, { n: 100 });
  const hb = surviveRate({ weapon: 'fist', armor: 'none', creeperTactic: 'hit_back' }, sc, { n: 100 });
  assert.ok(hb.blastsPerRun <= stand.blastsPerRun);
});

test('deterministic ตาม seed', () => {
  assert.deepEqual(survive({}, [{ type: 'skeleton', dist: 12 }], { seed: 3 }), survive({}, [{ type: 'skeleton', dist: 12 }], { seed: 3 }));
});
