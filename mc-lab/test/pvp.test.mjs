import { test } from 'node:test';
import assert from 'node:assert/strict';
import { weapon } from '../lib/pvp/weapons.mjs';
import { chargeFactor, smashBonus, meleeRaw, armorReduce, applyHit } from '../lib/pvp/damage.mjs';
import { newShield, raise, onMelee, isBlocking } from '../lib/pvp/shield_logic.mjs';
import { knockback } from '../lib/pvp/kb_model.mjs';
import { bowPower, arrowDamage, solvePitch, leadAim } from '../lib/pvp/bow_lead.mjs';
import { apexHeight, JUMP_VY, smashPlan } from '../lib/pvp/mace_timing.mjs';
import { chargeCheck } from '../lib/pvp/spear_reach.mjs';
import { duel, matchup } from '../lib/pvp/duel_sim.mjs';

test('cooldown: ดาบ 12.5 tick, ตีทันที = 20%, ชาร์จเต็ม = 100%', () => {
  const s = weapon('iron_sword');
  assert.equal(s.cooldown, 12.5);
  assert.ok(Math.abs(chargeFactor(-0.5, 12.5).factor - 0.2) < 1e-9);
  assert.equal(chargeFactor(20, 12.5).factor, 1);
});

test('คริ ×1.5 เฉพาะตอนตก + ไม่วิ่ง', () => {
  const s = weapon('iron_sword');
  assert.equal(meleeRaw(s, { falling: true }).dmg, 9);
  assert.equal(meleeRaw(s, { falling: true, sprinting: true }).crit, false);
});

test('กระบองทุบ: ตก 3 = +12 (ตรงวิกิ 12 ขั้นต่ำของ smash), ตก 8 = +22, ตก 10 = +24', () => {
  assert.equal(smashBonus(1), 0);
  assert.equal(smashBonus(3), 12);
  assert.equal(smashBonus(8), 22);
  assert.equal(smashBonus(10), 24);
});

test('เกราะ: เหล็กเต็ม (15) ลด ~58% ดาเมจเล็ก, เพชรเต็มลด ~79%, ดาเมจใหญ่ทะลุเหล็กมากกว่า', () => {
  assert.ok(Math.abs(armorReduce(1, { armor: 15 }) - 0.42) < 0.001);
  assert.ok(Math.abs(armorReduce(1, { armor: 20, toughness: 8 }) - 0.21) < 0.001);
  assert.ok(armorReduce(20, { armor: 15 }) / 20 > armorReduce(20, { armor: 20, toughness: 8 }) / 20);
});

test('i-frames: โดนซ้ำภายใน 10 tick ได้แค่ส่วนต่าง', () => {
  const t = { hp: 20, lastHurt: -99, lastDmg: 0 };
  assert.equal(applyHit(t, 5, 0), 5);
  assert.equal(applyHit(t, 4, 3), 0);
  assert.equal(applyHit(t, 7, 5), 2);
  assert.equal(applyHit(t, 4, 12), 4);
});

test('โล่: ต้องยกครบ 5 tick, ขวานปิด 100 tick', () => {
  const s = newShield();
  raise(s, 0);
  assert.equal(isBlocking(s, 3), false);
  assert.equal(onMelee(s, 6, { axe: true }).disabled, true);
  assert.equal(raise(s, 50), false);
  assert.equal(raise(s, 106), true);
});

test('knockback ฐาน 1.552, เนเธอไรต์ลด 40%', () => {
  assert.equal(knockback(), 1.552);
  assert.ok(Math.abs(knockback({ kbRes: 0.4 }) - 0.9312) < 1e-9);
});

test('ธนู: ง้าง 20 tick = แรงเต็ม, ดาเมจคริ 6–11, เล็งดักเป้าวิ่ง', () => {
  assert.equal(bowPower(20), 1);
  for (let i = 0; i < 50; i++) { const d = arrowDamage(3, { crit: true }); assert.ok(d >= 6 && d <= 11); }
  const s = solvePitch(3, 30, 0);
  assert.ok(s.pitchDeg > 0 && s.pitchDeg < 10);
  const l = leadAim({ x: 20, z: 0, vz: 0.28 });
  assert.ok(l.leadBlocks > 1);
});

test('กระโดดปกติสูง ~1.25 บล็อก (วิกิ 1.2522)', () => {
  assert.ok(Math.abs(apexHeight(JUMP_VY) - 1.2522) < 0.01);
  assert.ok(smashPlan(8).raw > 20);
});

test('หอก charge: ต้องเข้าหากัน ≥4.6 และระยะ 2–4.5', () => {
  assert.equal(chargeCheck(3, 5.6).damages, true);
  assert.equal(chargeCheck(3, 1.3).damages, false);
  assert.equal(chargeCheck(1.5, 9).inRange, false);
});

test('ดวล: deterministic ตาม seed, ของเหมือนกัน ≈ 50/50', () => {
  const a = duel({}, {}, { seed: 7 }), b = duel({}, {}, { seed: 7 });
  assert.deepEqual(a, b);
  const m = matchup({}, {}, { n: 400 });
  assert.ok(Math.abs(m.winA - m.winB) < 0.15, JSON.stringify(m));
});
