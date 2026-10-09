# เตา (API มีจริง)

<!-- สร้างอัตโนมัติโดย scripts/split_kb.mjs จาก docs/wiki/bot-api.md · ห้ามแก้มือ -->
> ตรวจกับ: ซอร์ส mineflayer 4.39.0 (npm, 7 ต.ค. 2026) · minecraft-data · W = https://minecraft.wiki/w/ · กลไกเกมการปรุงยาอยู่ที่ kb/brewing/* แล้ว (ไม่ซ้ำ) · ไฟล์นี้ = ชั้น API ของบอต

- `const f = await bot.openFurnace(block)` → `f.putFuel(type, meta, n)` · `f.putInput(type, meta, n)` · `f.takeOutput()` (mineflayer/lib/plugins/furnace.js) — ใช้กับ smoker/blast furnace ได้ [ตรวจ: ชนิดบล็อกที่ openFurnace รับ]
- ช่องเตา: 0 = วัตถุดิบ · 1 = เชื้อเพลิง · 2 = ผลผลิต ✅ (Gemini ถูก)
- smoker เผาอาหารเร็ว 2 เท่าเตาปกติ (kb/progression/smelting-fuel)

บอตควร: วางเตาในฐาน/ในเหมือง (IRON_RACE S3) · เติมเชื้อเพลิงก่อน วัตถุดิบตาม · กลับมาเก็บตามเวลา (10 วิ/ชิ้น เตา, 5 วิ smoker/blast)
