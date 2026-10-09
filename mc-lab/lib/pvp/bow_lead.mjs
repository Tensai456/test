// bow_lead.mjs — ธนู: แรงตามเวลาง้าง, วิถีลูกธนู, มุมยิง, เล็งดักเป้าวิ่ง
// ลูกธนู: ความเร็วสูงสุด 3 บล็อก/tick (หน้าไม้ 3.15) · drag 0.99 · gravity 0.05 (Arrow / Bow wiki)

export const ARROW_GRAVITY = 0.05;
export const ARROW_DRAG = 0.99;
export const BOW_MAX_SPEED = 3.0;
export const CROSSBOW_SPEED = 3.15;

// แรงง้าง (0–1) จาก tick ที่ง้าง: f=(t²+2t)/3, t=ticks/20 — สูตรจากโค้ดเกม [ไม่แน่ใจ: ไม่ได้ยืนยันกับวิกิรอบนี้]
export function bowPower(drawTicks) {
  const t = drawTicks / 20;
  return Math.min(1, (t * t + 2 * t) / 3);
}

// ดาเมจฐาน = ceil(2 × speed) · คริ (ง้างเต็ม) สุ่มเพิ่มได้ → ช่วง 6–11 ที่ความเร็ว 3
export function arrowDamage(speed, { crit = false, rng = Math.random } = {}) {
  const base = Math.ceil(2 * speed);
  return crit ? base + Math.floor(rng() * (base / 2 + 2)) : base;
}

// จำลองวิถีในระนาบ (x แนวนอน, y แนวตั้ง) จนผ่านระยะ x หรือหมดเวลา
export function flyTo(speed, pitchDeg, dx, maxTicks = 200) {
  const r = (pitchDeg * Math.PI) / 180;
  let x = 0, y = 0, vx = speed * Math.cos(r), vy = speed * Math.sin(r);
  for (let t = 1; t <= maxTicks; t++) {
    const nx = x + vx, ny = y + vy;
    if (nx >= dx) {
      const k = (dx - x) / (nx - x);
      return { ticks: t - 1 + k, y: y + (ny - y) * k };
    }
    x = nx; y = ny;
    vx *= ARROW_DRAG; vy = vy * ARROW_DRAG - ARROW_GRAVITY;
  }
  return null;
}

// หามุมเงย (องศา) ที่ทำให้ลูกธนูผ่านจุด (dx, dy) — เลือกวิถีต่ำ (bisection −45°…45°)
export function solvePitch(speed, dx, dy) {
  let lo = -45, hi = 45;
  const f = (p) => { const r = flyTo(speed, p, dx); return r ? r.y - dy : -Infinity; };
  if (f(hi) < 0) return null;            // ไกลเกินยิงถึง
  for (let i = 0; i < 50; i++) {
    const mid = (lo + hi) / 2;
    if (f(mid) < 0) lo = mid; else hi = mid;
  }
  const pitch = (lo + hi) / 2;
  return { pitchDeg: pitch, ticks: flyTo(speed, pitch, dx).ticks };
}

// เล็งดัก: เป้าอยู่ที่ (x,z) เทียบผู้ยิง สูงต่าง dy วิ่งด้วย (vx,vz) บล็อก/tick → จุดเล็ง + มุม
export function leadAim({ x, z, dy = 0, vx = 0, vz = 0, speed = BOW_MAX_SPEED }) {
  let px = x, pz = z, sol = null;
  for (let i = 0; i < 6; i++) {
    sol = solvePitch(speed, Math.hypot(px, pz), dy);
    if (!sol) return null;
    px = x + vx * sol.ticks;
    pz = z + vz * sol.ticks;
  }
  const yawDeg = (Math.atan2(pz, px) * 180) / Math.PI;
  const leadBlocks = Math.hypot(px - x, pz - z);
  return { aimX: px, aimZ: pz, yawDeg, pitchDeg: sol.pitchDeg, ticks: sol.ticks, leadBlocks };
}
