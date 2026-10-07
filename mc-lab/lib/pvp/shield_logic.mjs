// shield_logic.mjs — โล่: ยกแล้วต้องรอก่อนกันได้, โดนขวานปิด 5 วิ (100 ticks)

export const SHIELD_RAISE_TICKS = 5;   // [ไม่แน่ใจ] ค่าที่รู้กันทั่วไปของ Java 1.9+ — ยังไม่ได้ยืนยันกับวิกิรอบนี้
export const AXE_DISABLE_TICKS = 100;  // Shield: 5 วินาที
export const FRONT_ARC_DEG = 90;       // [ไม่แน่ใจ] กันได้เมื่อผู้โจมตีอยู่ภายใน ±90° ของทิศที่มอง

export function newShield() {
  return { raisedAt: null, disabledUntil: -1 };
}

export function raise(s, now) {
  if (now < s.disabledUntil) return false;
  if (s.raisedAt === null) s.raisedAt = now;
  return true;
}

export function lower(s) {
  s.raisedAt = null;
}

export function isBlocking(s, now, attackerAngleDeg = 0) {
  if (s.raisedAt === null || now < s.disabledUntil) return false;
  if (now - s.raisedAt < SHIELD_RAISE_TICKS) return false;
  return Math.abs(attackerAngleDeg) <= FRONT_ARC_DEG;
}

// ผลเมื่อโดนตีขณะยกโล่: blocked=true = ดาเมจ 0 · ขวานทำให้โล่ใช้ไม่ได้
export function onMelee(s, now, { axe = false, attackerAngleDeg = 0 } = {}) {
  if (!isBlocking(s, now, attackerAngleDeg)) return { blocked: false, disabled: false };
  if (axe) {
    s.disabledUntil = now + AXE_DISABLE_TICKS;
    s.raisedAt = null;
    return { blocked: true, disabled: true };
  }
  return { blocked: true, disabled: false };
}
