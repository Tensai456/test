# จำทางกลับ

<!-- สร้างอัตโนมัติโดย scripts/split_kb.mjs จาก docs/wiki/field-smelting.md · ห้ามแก้มือ -->
> W = https://minecraft.wiki/w/ · เวลาเผา/เชื้อเพลิง: kb/progression/smelting-fuel · โค้ด: `lib/economy/field_smelt.mjs` (smeltPlan) + `bot.brain.startSmelt / trailBack` (lib/adapter/mineflayer_brain.mjs)

- ปลั๊กอินบันทึกรอยเท้าทุก 4 บล็อกตั้งแต่ `bot.brain.startSmelt(pos, plan)` (สูงสุด 500 จุด) · `bot.brain.trailBack()` = จุดย้อนกลับ ส่งให้ pathfinder ทีละจุด
- เผาเสร็จ (tick เกมถึงเวลา) + ห่างเตา >6 → กลับไปเก็บ (กฎ smelt-done-return prio 52) · นอกบ้าน: เก็บเตาคืนด้วย (เตาใช้ซ้ำได้)
- ในเหมืองใช้รอยเท้าสำคัญที่สุด (ทางแยกเยอะ หลงง่าย — kb/navigation)

ตัดสินผล: ทิ้งของในเตานอกบ้านแล้วไม่กลับมาเก็บ = ผิด
