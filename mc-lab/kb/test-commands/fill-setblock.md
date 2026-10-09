# วางบล็อก (fill / setblock)

<!-- สร้างอัตโนมัติโดย scripts/split_kb.mjs จาก docs/wiki/test-commands.md · ห้ามแก้มือ -->
> W = https://minecraft.wiki/w/ · ยืนยันจากผลค้นหา wiki เท่านั้น · รายการค้างดูท้ายไฟล์ · ต้องเป็น OP (permission level 2)

- `fill <from> <to> <block> [outline|hollow|destroy|strict|replace|keep]` หรือ `fill <from> <to> <block> replace <filter> [outline|hollow|destroy|strict]` (W/Commands/fill)
- โหมด: `replace` (ค่าเริ่มต้น, ไม่ดรอป) · `destroy` (ดรอปเหมือนขุด) · `keep` (เปลี่ยนเฉพาะอากาศ) · `outline` (เฉพาะผิวนอก) · `hollow` (ผิวนอก + ข้างในเป็นอากาศ) · `strict` (ไม่ trigger block update)
- ตั้งแต่ 1.21.5 `replace` ต่อด้วยออปชันอื่นได้ (W/Java_Edition_1.21.5)
- `setblock <pos> <block> [destroy|keep|replace|strict]` ค่าเริ่มต้น replace (W/Commands/setblock)
- ตัวอย่าง: `/fill ~-10 ~ ~-10 ~10 ~ ~10 minecraft:stone`, `/setblock ~ ~1 ~ minecraft:air`
- ขีดจำกัดจำนวนบล็อกต่อคำสั่ง = [ไม่แน่ใจ]
