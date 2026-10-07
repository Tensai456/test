# การตรวจจับการกัดสำหรับบอต

<!-- สร้างอัตโนมัติโดย scripts/split_kb.mjs จาก docs/wiki/fishing.md · ห้ามแก้มือ -->
> W = https://minecraft.wiki/w/ · หน้าอ้างอิง: Fishing, Fishing_Rod, Luck_of_the_Sea, Lure, Cooked_Cod, Cooked_Salmon, Pufferfish_(item), Tropical_Fish_(item) · ตัวเลขทุกตัวมาจาก snippet ของวิกิ

| สัญญาณ | วิกิยืนยัน | มองเห็นได้ใน mineflayer |
|---|---|---|
| ทุ่นจมลง | ใช่ (W/Fishing) | [ไม่แน่ใจ] — ต้องดูตำแหน่ง/ความเร็ว entity ทุ่น |
| อนุภาค/สปลาช | ใช่ (W/Fishing, ไม่เห็นถ้า Particles=Minimal) | [ไม่แน่ใจ] — ขึ้นกับ packet particle |
| เสียง splash | ใช่ (W/Fishing) | [ไม่แน่ใจ] — พึ่ง event ของไลบรารี (soundEffectHeard/ plugin) |

บอตควร: ใช้เสียง splash หรือการเปลี่ยนของ velocity ทุ่นเป็นสัญญาณหลัก; ทดสอบจริงในแล็บก่อนเชื่อถือ.
ตัดสินผล: (เกณฑ์แล็บ) ตรวจจับสำเร็จ ≥ 90% ของการกัดจริงใน 20 รอบ; ต่ำกว่านี้ = ใช้วิธีสำรอง.
