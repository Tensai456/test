# การตรวจจับการกัดสำหรับบอต

<!-- สร้างอัตโนมัติโดย scripts/split_kb.mjs จาก docs/wiki/fishing.md · ห้ามแก้มือ -->
> W = https://minecraft.wiki/w/ · หน้าอ้างอิง: Fishing, Fishing_Rod, Luck_of_the_Sea, Lure, Cooked_Cod, Cooked_Salmon, Pufferfish_(item), Tropical_Fish_(item) · ตัวเลขทุกตัวมาจาก snippet ของวิกิ

| สัญญาณ | วิกิยืนยัน | มองเห็นได้ใน mineflayer |
|---|---|---|
| ทุ่นจมลง | ใช่ (W/Fishing): ทุ่นจมใต้ผิวน้ำ; เริ่มกัดตั้งความเร็วแนวดิ่ง 0.4×(0.6–1.0) บล็อก/tick (W/Fishing_Rod) | entity `fishing_bobber` (W/Fishing_Rod) — ดูการเปลี่ยน velocity/Y ของ entity ทุ่น; ค่าเกณฑ์ที่ client เห็นจริง [ไม่แน่ใจ] |
| อนุภาค/สปลาช | ใช่ (W/Fishing, ไม่เห็นถ้า Particles=Minimal); วิกิลิสต์ particle ที่ทุ่นสร้าง: `fish_hook_particle` (ว่ายเข้าหา) และ `water_splash_particle_manual` (สปลาช) (W/Particles) | ชื่อ packet particle ฝั่งไลบรารี [ไม่แน่ใจ]; ไม่ควรเป็นสัญญาณหลัก |
| เสียง splash | ใช่ `entity.fishing_bobber.splash` เล่นเมื่อทุ่นถูกกัด (W/Category:Fishing_rod_sounds) | ชื่อ event ของ mineflayer (เช่น soundEffectHeard) [ไม่แน่ใจ] ไม่ได้ยืนยันจากวิกิ |
ค่าฟิสิกส์ทุ่น: gravity -0.03, drag แนวดิ่ง 0.92, ความเร็วปลายทาง 0.345 บล็อก/tick (W/Fishing_Rod).

บอตควร: ใช้เสียง splash หรือการเปลี่ยนของ velocity ทุ่นเป็นสัญญาณหลัก; ทดสอบจริงในแล็บก่อนเชื่อถือ.
ตัดสินผล: (เกณฑ์แล็บ) ตรวจจับสำเร็จ ≥ 90% ของการกัดจริงใน 20 รอบ; ต่ำกว่านี้ = ใช้วิธีสำรอง.
