import { test } from 'node:test';
import assert from 'node:assert/strict';
import { route, norm } from '../src/wake.mjs';

const BOTS = [
  { id: 'jarvis', login: 'Jarvis', display: 'จาร์วิส', aliases: ['jarvis'], online: true },
  { id: 'fable', login: 'Fable', display: 'เฟเบิล', aliases: ['fable'], online: true },
];
test('การันต์+สระใกล้กัน: จาร์วิส ≈ จอวิส ≈ จาวิส', () => {
  for (const t of ['จอวิส มานี่', 'จาวิส มานี่', 'จาร์วิสมานี่', 'Jarvis come', 'จาวิด มาหาหน่อย']) {
    const r = route(t, BOTS);
    assert.equal(r?.bot.id, 'jarvis', t);
    assert.equal(r.command, 'come', t);
  }
});
test('ไม่เรียกใคร → null', () => { assert.equal(route('วันนี้กินอะไรดี', BOTS), null); });
test('เรียกเฟเบิลไม่ไปจาร์วิส', () => { assert.equal(route('เฟเบิ้ล หยุด', BOTS).bot.id, 'fable'); assert.equal(route('เฟเบิ้ล หยุด', BOTS).command, 'stop'); });
test('ออนไลน์ตัวเดียว: เรียกชื่อตัวอื่น/คำเรียกก็ไปหาตัวนั้น', () => {
  const one = BOTS.map((b) => ({ ...b, online: b.id === 'fable' }));
  assert.equal(route('จาร์วิส มานี่', one).bot.id, 'fable');
  assert.equal(route('บอท ตามมา', one).bot.id, 'fable');
  assert.equal(route('บอท ตามมา', one).command, 'follow');
});
test('norm ตัดวรรณยุกต์/การันต์', () => { assert.equal(norm('จาร์วิส'), norm('จาวิส')); });
