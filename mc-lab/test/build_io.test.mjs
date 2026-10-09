import { test } from 'node:test';
import assert from 'node:assert/strict';
import { makeBuildIO } from '../lib/adapter/build_io.mjs';

const V = (x, y, z) => ({ x, y, z, offset: (a, b, c) => V(x + a, y + b, z + c) });
function Vec3(x, y, z) { return V(x, y, z); }

test('pillar: กระโดด→วางใต้เท้าครบ h ชั้น · unpillar: ขุดเฉพาะบล็อกนั่งร้าน', async () => {
  const placed = [], dug = [];
  const bot = { entity: { position: V(0.5, 64, 0.5), yaw: 0 }, controls: {},
    inventory: { items: () => [{ name: 'dirt' }] }, equip: async () => {}, look: async () => {},
    setControlState(k, v) { this.controls[k] = v; if (k === 'jump' && v) this.entity.position = V(0.5, this.entity.position.y + 1.1, 0.5); },
    waitForTicks: async () => {}, blockAt: (p) => ({ name: p.y >= 64 ? 'dirt' : 'grass_block', position: p }),
    placeBlock: async (ref) => placed.push(ref.position.y), dig: async (b) => { dug.push(b.name); bot.entity.position = V(0.5, bot.entity.position.y - 1, 0.5); } };
  const io = makeBuildIO(bot, { Vec3, goals: {} });
  await io.pillar(3);
  assert.equal(placed.length, 3);
  await io.unpillar(5);                            // ขุดลงจนเจอพื้นจริง (grass) แล้วหยุด
  assert.ok(dug.every((n) => n === 'dirt'));
  assert.ok(dug.length <= 4);
});
