// example_fly.mjs — ตัวอย่างไฟล์สมองภายนอก (แม่แบบให้เสียบสมองแมลงวัน/สมองเดิม) · ตั้ง FLY_SMALL_PATH=brains/example_fly.mjs เพื่อลอง
// สัญญา: export function decide(state, goal) → null (ไม่มีความเห็น ให้ชิ้นถัดไปตัดสิน) | { action, thought }
// state = mc-lab/lib/adapter/mineflayer_state.mjs toState(): { hp, food, air, dim, pos, inv, worn, nearby:[{type,dist,hostile}], nearBlocks, flags, time, ... }
// ⚠ ฟังก์ชันนี้ถูกเรียก 5 ครั้ง/วิ/บอต → ห้ามรอ I/O (เรียก Ollama ต้องทำแบบ async แยก แล้วเก็บคำตอบล่าสุดไว้คืนตรงนี้)
export function decide(state) {
  const m = (state.nearby ?? []).filter((e) => e.hostile).sort((a, b) => a.dist - b.dist)[0];
  if (m && m.dist < 4) return { action: 'flee', thought: `แมลงวัน: ${m.type} ใกล้ ${m.dist.toFixed(1)} → หนี` };
  if (state.food < 10) return { action: 'eat', thought: 'แมลงวัน: หิว → กิน' };
  return null;
}
