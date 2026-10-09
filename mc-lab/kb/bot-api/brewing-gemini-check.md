# ข้อความปรุงยาอื่นของ Gemini

<!-- สร้างอัตโนมัติโดย scripts/split_kb.mjs จาก docs/wiki/bot-api.md · ห้ามแก้มือ -->
> ตรวจกับ: ซอร์ส mineflayer 4.39.0 (npm, 7 ต.ค. 2026) · minecraft-data · W = https://minecraft.wiki/w/ · กลไกเกมการปรุงยาอยู่ที่ kb/brewing/* แล้ว (ไม่ซ้ำ) · ไฟล์นี้ = ชั้น API ของบอต

- ✅ ต้องเริ่ม nether wart → awkward ยกเว้นยาอ่อนแอ (Weakness = ขวดน้ำ + ตาแมงมุมหมัก) (kb/brewing/base-chain)
- ✅ redstone = นานขึ้น · glowstone = แรงขึ้นแต่สั้นลง · gunpowder = ยาปา (kb/brewing/modifiers)
- ⚠ "ยาฮีล + ตาแมงมุมหมัก → **ยาพิษ**/ยาลดเลือด" — ถูกคือ **Harming (ลดเลือดทันที)** ไม่ใช่ยาพิษ (kb/brewing/corruption)
- ✅ เมนูส่วนผสม: sugar = Swiftness · glistering melon = Healing · golden carrot = Night Vision · blaze powder = Strength (kb/brewing/recipes)
