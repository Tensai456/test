# เชื้อเพลิงไม่พอ

<!-- สร้างอัตโนมัติโดย scripts/split_kb.mjs จาก docs/wiki/field-smelting.md · ห้ามแก้มือ -->
> W = https://minecraft.wiki/w/ · เวลาเผา/เชื้อเพลิง: kb/progression/smelting-fuel · โค้ด: `lib/economy/field_smelt.mjs` (smeltPlan) + `bot.brain.startSmelt / trailBack` (lib/adapter/mineflayer_brain.mjs)

- นับเชื้อเพลิงก่อนเริ่ม: ถ่าน 1 = 8 ชิ้น · ซุง 1 → แผ่นไม้ 4 = 6 ชิ้น · ไม้ 1 แผ่น = 1.5 (kb/progression/smelting-fuel)
- ไม่พอ → **ผิวดิน:** ตัดไม้แถวนั้นก่อน ไม่มี → ออกหา ≤50 บล็อกรอบเตา · **ในเหมือง:** ใช้ถ่านที่ขุดได้ระหว่างทาง
- ซุงที่ต้องตัด = ceil(ชิ้นที่ขาด ÷ 6)
