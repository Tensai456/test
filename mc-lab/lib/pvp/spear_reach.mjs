// spear_reach.mjs — หอก charge attack (Java 1.21.11+)
// ระยะ 2–4.5 บล็อก · ต้องวิ่งเข้าหากัน ≥4.6 บล็อก/วิ จึงมีดาเมจ · ≥5.1 จึงกระเด็น (Spear wiki)
// สูตรดาเมจ charge ละเอียด = [ไม่แน่ใจ] → คืนแค่ "เข้าเงื่อนไขหรือไม่" + ตัวคูณวัสดุ

export const CHARGE_MIN_REACH = 2;
export const CHARGE_MAX_REACH = 4.5;
export const CHARGE_DMG_SPEED = 4.6;
export const CHARGE_KB_SPEED = 5.1;

// closing = ความเร็วที่เข้าหากัน (บล็อก/วิ) = ความเร็วเรา·ทิศ + ความเร็วเป้า·ทิศ
export function chargeCheck(dist, closing) {
  const inRange = dist >= CHARGE_MIN_REACH && dist <= CHARGE_MAX_REACH;
  return { inRange, damages: inRange && closing >= CHARGE_DMG_SPEED, knocks: inRange && closing >= CHARGE_KB_SPEED };
}

// วิ่งอย่างเดียว (5.612) เข้าหาเป้าที่ยืนนิ่ง → ผ่านเกณฑ์ดาเมจ · ถ้าเป้าถอยหนีด้วยความเร็วเดิน 4.317 → ไม่ผ่าน
export function closingSpeed(mySpeed, targetSpeedToward) {
  return mySpeed + targetSpeedToward;
}
