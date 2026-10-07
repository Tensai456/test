import { test } from 'node:test';
import assert from 'node:assert/strict';
import { EventEmitter } from 'node:events';
import { brainPlugin } from '../lib/adapter/mineflayer_brain.mjs';

// บอตจำลองแบบ mineflayer (EventEmitter + ฟิลด์ที่ตรวจกับซอร์ส 4.39)
const V = (x, y, z) => ({ x, y, z, distanceTo: (o) => Math.hypot(o.x - x, o.y - y, o.z - z), offset: (a, b, c) => V(x + a, y + b, z + c), clone() { return V(x, y, z); } });
function fakeBot(o = {}) {
  const bot = new EventEmitter();
  const me = { id: 0, position: V(0, 64, 0), velocity: V(0, 0, 0), onGround: true, effects: {}, metadata: {} };
  Object.assign(bot, { entity: me, entities: { 0: me, ...(o.ents ?? {}) }, health: o.hp ?? 20, food: 20, oxygenLevel: o.oxygen ?? 20,
    game: { dimension: o.dim ?? 'overworld' }, time: { timeOfDay: 1000, age: 100 }, player: { ping: 30 }, players: {},
    inventory: { items: () => [], slots: [] }, registry: { effects: {} }, blockAt: () => ({ name: 'stone', boundingBox: 'empty' }),
    controls: {}, setControlState(k, v) { this.controls[k] = v; }, clearControlStates() { this.controls = {}; } });
  bot.loadPlugin = (p) => p(bot);
  return bot;
}
const ticks = (bot, n) => { for (let i = 0; i < n; i++) bot.emit('physicsTick'); };

test('ปลั๊กอิน: ส่ง brain:decision + executor จมน้ำกดกระโดด', () => {
  const bot = fakeBot({ oxygen: 2 });
  bot.loadPlugin(brainPlugin({ goal: 'iron_kit' }));
  let got = null; bot.on('brain:decision', (d) => (got = d));
  ticks(bot, 4);
  assert.equal(got.rule.id, 'drowning');
  assert.equal(bot.controls.jump, true);
});

test('allowed(): นอนในนรก = veto · นอนใน overworld ได้', () => {
  const nether = fakeBot({ dim: 'the_nether' }); nether.loadPlugin(brainPlugin({}));
  assert.equal(nether.brain.allowed('sleep').ok, false);
  assert.equal(nether.brain.allowed('sleep').vetoes[0].id, 'bed-wrong-dimension');
  const ow = fakeBot(); ow.loadPlugin(brainPlugin({}));
  assert.equal(ow.brain.allowed('sleep').ok, true);
  assert.equal(ow.brain.allowed('drop_weapon').ok, false);   // กฎแล็บ
});

test('entityHurt: เราตี golem → golem นับว่าโกรธ', () => {
  const golem = { id: 7, name: 'iron_golem', type: 'mob', position: V(3, 64, 0) };
  const bot = fakeBot({ ents: { 7: golem } }); bot.loadPlugin(brainPlugin({}));
  bot.emit('entityHurt', golem, bot.entity);
  assert.ok(bot.brain.tracker.provoked.has(7));
  assert.equal(bot.brain.think().d.rule.id, 'provoked-flee');
});

test('เผาไปตะเวนไป: จำรอยเท้า + เกินรัศมีต้องหันกลับ', () => {
  const bot = fakeBot(); bot.loadPlugin(brainPlugin({ goal: 'iron_kit' }));
  bot.brain.startSmelt(V(0, 64, 0), { roamRadius: 10, sec: 80, fuelAction: 'ok', foodAction: 'ok' });
  for (const x of [5, 10, 15, 20]) { bot.entity.position = V(x, 64, 0); bot.emit('physicsTick'); }
  assert.equal(bot.brain.trailBack().length, 5);
  assert.equal(bot.brain.trailBack()[0].x, 20);
  assert.equal(bot.brain.think().d.rule.id, 'smelt-roam-too-far');
  assert.equal(bot.brain.allowed('smelt', { item: 'diamond' }).ok, false);
});

test('ทางขึ้นบ้าน: วางบล็อกบนทาง = veto · ถูกขวาง = ต้องเคลียร์', () => {
  const bot = fakeBot(); bot.loadPlugin(brainPlugin({ goal: 'iron_kit' }));
  bot.brain.setPassages([{ x: 5, y: 64, z: 5 }]);
  assert.equal(bot.brain.allowed('place_block', { pos: { x: 5, y: 65, z: 5 } }).ok, false);
  assert.equal(bot.brain.allowed('place_block', { pos: { x: 9, y: 64, z: 9 } }).ok, true);
  bot.blockAt = (p) => (p.x === 5 && p.y === 64 ? { name: 'dirt', boundingBox: 'block' } : { name: 'air', boundingBox: 'empty' });
  for (let i = 0; i < 20; i++) bot.emit('physicsTick');
  assert.equal(bot.brain.blockedPassage()[0].block, 'dirt');
  assert.equal(bot.brain.think().d.rule.id, 'entrance-blocked');
});
