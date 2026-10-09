# คราฟต์

<!-- สร้างอัตโนมัติโดย scripts/split_kb.mjs จาก docs/wiki/bot-api.md · ห้ามแก้มือ -->
> ตรวจกับ: ซอร์ส mineflayer 4.39.0 (npm, 7 ต.ค. 2026) · minecraft-data · W = https://minecraft.wiki/w/ · กลไกเกมการปรุงยาอยู่ที่ kb/brewing/* แล้ว (ไม่ซ้ำ) · ไฟล์นี้ = ชั้น API ของบอต

- `bot.recipesFor(itemId, metadata, minResultCount, craftingTableBlock)` → `bot.craft(recipe, count, craftingTableBlock)` ✅ ตรงซอร์ส (craft.js) · สูตรทั้งหมด: kb/recipes/*
- ของ 2x2 คราฟต์ในกระเป๋าได้ (ส่ง craftingTable = null)
