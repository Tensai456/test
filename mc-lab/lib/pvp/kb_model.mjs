// kb_model.mjs — ระยะกระเด็น (บล็อก) จากการตีระยะประชิด
// ฐาน 1.552 · +2.586 ต่อเลเวล Knockback (Knockback wiki)
// sprint-knockback นับเป็น +1 เลเวล = [ไม่แน่ใจ] (วิกิบอกแค่ว่า "ซ้อนกันได้")

export const KB_BASE = 1.552;
export const KB_PER_LEVEL = 2.586;

export function knockback({ sprint = false, enchant = 0, kbRes = 0 } = {}) {
  const level = enchant + (sprint ? 1 : 0);
  return (KB_BASE + KB_PER_LEVEL * level) * (1 - Math.min(Math.max(kbRes, 0), 1));
}
