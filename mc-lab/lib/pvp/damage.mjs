// damage.mjs — ดาเมจระยะประชิด: cooldown, คริ, กระบองทุบ, เกราะ, ช่วงอมตะ (i-frames)

export const CRIT_MULT = 1.5;
export const CRIT_MIN_CHARGE = 0.848;   // ต้องชาร์จ ≥84.8% (คริ/sprint-KB/sweep)
export const HURT_TICKS = 10;           // ช่วงอมตะหลังโดนตี (ticks)

// ตัวคูณจาก cooldown: 0.2 + ((t+0.5)/T)² × 0.8 (สูงสุด 1)
export function chargeFactor(ticksSinceAttack, cooldown) {
  const p = Math.min(1, (ticksSinceAttack + 0.5) / cooldown);
  return { factor: 0.2 + p * p * 0.8, progress: p };
}

// โบนัสกระบองทุบ: +4/บล็อก (3 แรก) · +2/บล็อก (5 ถัดไป) · +1/บล็อก (ที่เหลือ) · Density +0.5/บล็อก/เลเวล
export function smashBonus(fall, density = 0) {
  if (fall < 1.5) return 0;
  const a = Math.min(fall, 3) * 4;
  const b = Math.min(Math.max(fall - 3, 0), 5) * 2;
  const c = Math.max(fall - 8, 0);
  return a + b + c + fall * 0.5 * density;
}

// ดาเมจก่อนเกราะ
export function meleeRaw(w, { ticksSinceAttack = Infinity, falling = false, sprinting = false, fall = 0, density = 0 } = {}) {
  const { factor, progress } = chargeFactor(ticksSinceAttack, w.cooldown);
  let dmg = w.dmg * factor;
  const crit = falling && !sprinting && progress >= CRIT_MIN_CHARGE;
  if (crit) dmg *= CRIT_MULT;
  if (w.smash && fall >= 1.5) dmg += smashBonus(fall, density);
  return { dmg, crit, progress, sprintKb: sprinting && progress >= CRIT_MIN_CHARGE };
}

// เกราะ: dmg × (1 − min(20, max(armor/5, armor − dmg/(toughness/4+2)))/25)
export function armorReduce(dmg, { armor = 0, toughness = 0 } = {}) {
  const eff = Math.min(20, Math.max(armor / 5, armor - dmg / (toughness / 4 + 2)));
  return dmg * (1 - eff / 25);
}

// ใช้ i-frames: ระหว่างอมตะ โดนได้เฉพาะส่วนที่มากกว่าครั้งก่อน
export function applyHit(target, dmg, now) {
  const inIframe = now - target.lastHurt < HURT_TICKS;
  let dealt;
  if (inIframe) {
    if (dmg <= target.lastDmg) return 0;
    dealt = dmg - target.lastDmg;
    target.lastDmg = dmg;
  } else {
    dealt = dmg;
    target.lastDmg = dmg;
    target.lastHurt = now;
  }
  target.hp -= dealt;
  return dealt;
}
