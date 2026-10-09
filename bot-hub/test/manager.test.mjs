import { test } from 'node:test';
import assert from 'node:assert/strict';
import { BotManager } from '../src/manager.mjs';

test('โหมดจำลอง: เปิดบอต → ได้สถานะ hp/บันได/ความคิด · สลับหน้าที่ · ปิด', async () => {
  const hub = new BotManager({ sim: true, persist: false });
  const got = new Promise((ok) => hub.on('update', (u) => { if (u.id === 'sonar27' && u.status.ladder) ok(u.status); }));
  hub.start('sonar27');
  const s = await got;
  assert.equal(s.online, true); assert.equal(typeof s.hp, 'number'); assert.ok(s.thought);
  hub.swap('jarvis', 'sonar27');
  assert.equal(hub.get('sonar27').role, 'senior'); assert.equal(hub.get('jarvis').role, 'intern'); assert.equal(hub.get('jarvis').watching, 'sonar27');
  const w = hub.update('jarvis', { login: 'Jarvis2' });
  assert.ok(w.warn);
  const exited = new Promise((ok) => hub.on('update', (u) => { if (u.id === 'sonar27' && u.status.online === false) ok(); }));
  hub.stop('sonar27'); await exited;
});
