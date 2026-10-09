# tick และเซิร์ฟแล็ก

<!-- สร้างอัตโนมัติโดย scripts/split_kb.mjs จาก docs/wiki/advanced.md · ห้ามแก้มือ -->
> W = https://minecraft.wiki/w/ · Java ปัจจุบัน · ข้อความย่อ WebSearch

- 1 game tick = 0.05 วิ (20 TPS) · 1 redstone tick = 2 game tick (W/Tick) · เซิร์ฟแล็ก → TPS ตก → ทุกอย่างในเกมช้าลง แต่นาฬิกาจริงไม่ช้าตาม
- ช่วงอมตะ 10 tick, cooldown อาวุธ, ฟิวส์ครีปเปอร์ 30 tick ฯลฯ นับเป็น **tick** ไม่ใช่วินาทีจริง

บอตควร:
- จับเวลาทุกอย่างด้วย tick ของเกม (`bot.time.age`) ไม่ใช่นาฬิกาเครื่อง — ตัวแปลง `lib/adapter/mineflayer_state.mjs` ใช้ tick ถ้ามี
- เกณฑ์แล็บที่เขียนเป็น "วินาที" = วินาทีเกม (×20 tick)

ตัดสินผล: ตัดสินผิด/ถูกตอน TPS <18 ให้แปลงเป็น tick ก่อน (เกณฑ์แล็บ)
