// physics.mjs — ฟิสิกส์ผู้เล่นรายติ๊กแบบวานิลลา (Paper ใช้ชุดเดียวกัน) ในแกน x (แนวนอน) + y (แนวตั้ง)
// ค่าคงที่จากโค้ดเกม Java (ความรู้ทั่วไป) [ไม่แน่ใจ: ยังไม่ได้เปิดซอร์ส 26.x ยืนยัน]
// ตรวจกลับด้วยตัวเลขวิกิใน test: วิ่ง ~5.6 บล็อก/วิ, กระโดดสูง ~1.25, knockback ฐาน ~1.55 บล็อก

export const PHYS = {
  walkSpeed: 0.1,            // attribute movement_speed
  sprintMult: 1.3,
  groundFriction: 0.6 * 0.91, // slipperiness บล็อกปกติ × 0.91 = 0.546
  airFriction: 0.91,
  airAccel: 0.02, airAccelSprint: 0.026,
  gravity: 0.08, vDrag: 0.98,
  jumpVy: 0.42, sprintJumpBoost: 0.2,
  inputMult: 0.98,           // เกมคูณค่าปุ่มเดิน ×0.98 → วิ่ง 5.612 / เดิน 4.317 ตรงวิกิ
  // knockback: โค้ดเกมใช้ strength 0.4 (+0.5/เลเวล) แต่จำลองได้ไกลกว่าวิกิ ~2 เท่า → ปรับค่าให้ตรงระยะวิกิแทน
  // (ฐาน 1.552 บล็อก สูง 0.8125 · +2.586/เลเวล สูง 1.0) — CALIBRATED ไม่ใช่ค่าจากซอร์ส
  kbH: 0.2037, kbHPerLevel: 0.3383, kbVy: 0.3289, kbVyLevel: 0.3681,
  attackerSlow: 0.6,         // ผู้ตีด้วย sprint-KB: ความเร็วแนวนอน ×0.6 (Melee attack wiki)
};

export function newBody(x = 0) {
  return { x, y: 0, vx: 0, vy: 0, onGround: true };
}

// input: { move: -1|0|1 (ทิศ x), sprint, jump, slow: ตัวคูณการเดิน (ยกโล่/ง้าง = 0.2) }
export function tick(b, { move = 0, sprint = false, jump = false, slow = 1 } = {}) {
  const sprinting = sprint && move !== 0;
  if (jump && b.onGround) {
    b.vy = PHYS.jumpVy;
    if (sprinting) b.vx += move * PHYS.sprintJumpBoost;
    b.onGround = false;
  }
  const speed = PHYS.walkSpeed * (sprinting ? PHYS.sprintMult : 1) * slow;
  const fr = b.onGround ? PHYS.groundFriction : PHYS.airFriction;
  // บนพื้น: accel = speed × 0.16277 / fr³ (= speed เมื่อพื้นปกติ)
  const accel = b.onGround ? speed * (0.16277136 / fr ** 3) : (sprinting ? PHYS.airAccelSprint : PHYS.airAccel) * slow;
  b.vx += move * PHYS.inputMult * accel;
  b.x += b.vx;
  b.y += b.vy;
  if (b.y <= 0) { b.y = 0; b.vy = 0; b.onGround = true; } else b.onGround = false;
  b.vx *= fr;
  if (!b.onGround) b.vy = (b.vy - PHYS.gravity) * PHYS.vDrag;
  if (Math.abs(b.vx) < 0.003) b.vx = 0;
  return b;
}

// knockback รูปแบบวานิลลา: vx = vx/2 + dir × แรง · ถ้าอยู่บนพื้น ลอยขึ้น
// level = เลเวล Knockback + 1 ถ้าตีด้วยแรงวิ่ง · dir = ทิศที่ผู้โดนถูกผลัก (+1/−1) · kbRes 0–1
export function applyKnockback(b, dir, level = 0, kbRes = 0) {
  const k = 1 - Math.min(Math.max(kbRes, 0), 1);
  if (k <= 0) return;
  const h = (PHYS.kbH + PHYS.kbHPerLevel * level) * k;
  b.vx = b.vx / 2 + dir * h;
  if (b.onGround || b.y < 0.01) { b.vy = (level > 0 ? PHYS.kbVyLevel : PHYS.kbVy) * k; b.y = 1e-6; b.onGround = false; }
}

// ผู้ตีด้วยแรงวิ่ง: หยุดวิ่ง + ความเร็วแนวนอน ×0.6
export function attackerAfterSprintHit(b) {
  b.vx *= PHYS.attackerSlow;
}

export const isFalling = (b) => !b.onGround && b.vy < 0;
