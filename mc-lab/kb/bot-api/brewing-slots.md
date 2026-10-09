# ช่องแท่นปรุงยา (Gemini ผิด)

<!-- สร้างอัตโนมัติโดย scripts/split_kb.mjs จาก docs/wiki/bot-api.md · ห้ามแก้มือ -->
> ตรวจกับ: ซอร์ส mineflayer 4.39.0 (npm, 7 ต.ค. 2026) · minecraft-data · W = https://minecraft.wiki/w/ · กลไกเกมการปรุงยาอยู่ที่ kb/brewing/* แล้ว (ไม่ซ้ำ) · ไฟล์นี้ = ชั้น API ของบอต

| ช่อง | ใส่อะไร | แหล่ง |
|---|---|---|
| 0, 1, 2 | ขวด (น้ำ/ยา) ซ้าย-กลาง-ขวา | W/Brewing_Stand, W/Java_Edition_protocol/Inventory |
| 3 | ส่วนผสม (nether wart, sugar ฯลฯ) | W/Brewing_Stand |
| 4 | เชื้อเพลิง blaze powder | W/Brewing_Stand |
| 5–31 / 32–40 | กระเป๋าหลัก / hotbar | W/Java_Edition_protocol/Inventory |
- ❌ Gemini เขียนว่าช่อง 0 = ส่วนผสม, 1–3 = ขวด — **ผิด** ถ้าใช้ตามนั้นบอตจะยัดขวดใส่ช่องส่วนผสม
- mineflayer 4.39 **ไม่มี API ปรุงยาเฉพาะ** (ค้นซอร์สไม่พบ "brewing") → ใช้ `bot.openContainer(block)` / `bot.openBlock(block)` แล้วย้ายของด้วย `window`/`bot.moveSlotItem` เอง [ตรวจ: ชื่อเมธอดย้ายช่องที่สะดวกสุดตอนต่อจริง]
- เวลาต้ม 400 tick (kb/brewing/brewing-stand) → `await bot.waitForTicks(400)` ✅ ตรง

บอตควร: เติมช่อง 4 ก่อน → ขวดช่อง 0–2 → ส่วนผสมช่อง 3 → รอ 400 tick → ตรวจช่อง 0–2 ว่าเปลี่ยนชนิดแล้วค่อยใส่ขั้นถัดไป

ตัดสินผล: ใส่ขวดในช่อง 3 = ผิด (ต้มไม่เกิด)
