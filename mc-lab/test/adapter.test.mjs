import { test } from 'node:test';
import assert from 'node:assert/strict';
import { createTracker, toState } from '../lib/adapter/mineflayer_state.mjs';
import { decide } from '../lib/chain.mjs';

// บอตจำลอง เลียนรูปแบบ mineflayer (Vec3 แบบย่อ)
const V = (x, y, z) => ({ x, y, z, distanceTo: (o) => Math.hypot(o.x - x, o.y - y, o.z - z), offset: (a, b, c) => V(x + a, y + b, z + c), clone() { return V(x, y, z); } });
function fakeBot(o = {}) {
  const me = { position: o.pos ?? V(0, 64, 0), velocity: o.vel ?? V(0, 0, 0), onGround: o.onGround ?? true, isInWater: !!o.water, isInLava: !!o.lava, effects: o.effects ?? {}, metadata: {} };
  const ents = { me, ...Object.fromEntries((o.mobs ?? []).map((m, i) => [i + 1, { id: i + 1, name: m.name, type: 'mob', position: V(m.x, 64, 0) }])) };
  return { entity: me, entities: ents, health: o.hp ?? 20, food: o.food ?? 20, oxygenLevel: o.oxygen ?? 20, game: { dimension: o.dim ?? 'minecraft:overworld' }, time: { timeOfDay: o.time ?? 1000 },
    inventory: { items: () => o.items ?? [], slots: o.slots ?? [] }, registry: { effects: { 20: { name: 'Wither' } } }, blockAt: () => ({ name: 'stone', boundingBox: 'block' }) };
}

test('แปลงพื้นฐาน: มิติ, ม็อบใกล้, ของ', () => {
  const s = toState(fakeBot({ dim: 'minecraft:the_nether', mobs: [{ name: 'creeper', x: 2 }], items: [{ name: 'bread', count: 3 }] }), createTracker());
  assert.equal(s.dim, 'the_nether');
  assert.deepEqual(s.nearby[0], { type: 'creeper', dist: 2, hostile: true, provoked: undefined });
  assert.equal(s.inv.bread, 3);
});

test('ติดตามระยะตก: ลอยจาก Y80 ลงมา Y60 = ตก 20', () => {
  const tr = createTracker();
  toState(fakeBot({ pos: V(0, 80, 0), onGround: false, vel: V(0, 0.1, 0) }), tr);
  const s = toState(fakeBot({ pos: V(0, 60, 0), onGround: false, vel: V(0, -2, 0), items: [{ name: 'water_bucket', count: 1 }] }), tr);
  assert.equal(s.fallDistance, 20);
  assert.equal(decide(s, 'iron_kit').rule.id, 'falling');
});

test('เอฟเฟกต์จาก id → ชื่อ · ใส่รองเท้าทองนับเป็น worn', () => {
  const s = toState(fakeBot({ effects: { 20: { amplifier: 1 } }, slots: { 8: { name: 'golden_boots' } } }), createTracker());
  assert.deepEqual(s.effects, ['wither']);
  assert.ok(s.worn.includes('golden_boots'));
});

test('อากาศ: oxygen 4/20 → 3 วินาที → ว่ายขึ้น', () => {
  const s = toState(fakeBot({ oxygen: 4, water: true }), createTracker());
  assert.equal(s.air, 3);
});
