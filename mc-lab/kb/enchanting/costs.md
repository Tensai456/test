# ค่า XP และ Lapis

<!-- สร้างอัตโนมัติโดย scripts/split_kb.mjs จาก docs/wiki/enchanting.md · ห้ามแก้มือ -->
> W = https://minecraft.wiki/w/ (เช่น W/Enchanting_table_mechanics = https://minecraft.wiki/w/Enchanting_table_mechanics) · ค้นผ่าน snippet เท่านั้น ไม่ได้เปิดหน้าเต็ม · เกณฑ์แล็บ = ค่าที่แล็บตั้งเอง ไม่ใช่ค่าวานิลลา

| ข้อเท็จจริง | ค่า | แหล่ง |
|---|---|---|
| ช่องเลเวล 30 | ต้องมี XP ≥30 เลเวล แต่จ่ายจริง 3 เลเวล + 3 lapis | W/Enchanting_Table |
| lapis สูงสุดต่อไอเท็ม | 3 | W/Enchanting_Table |
| สูตรฐาน | xpBase = 1 + randInt(7) + ⌊min(15,ชั้น)/2⌋ + randInt(min(15,ชั้น)) | W/Enchanting_table_mechanics |
| ช่องบน/กลาง/ล่าง | ⌊max(1,base/3)⌋ / ⌊2·base/3⌋+1 / max(base, 2·ชั้น) | W/Enchanting_table_mechanics |
| ช่อง 1 และ 2 จ่ายกี่เลเวล/lapis | [ไม่แน่ใจ] (สมมติ 1 และ 2 ตามลำดับ ไม่ได้ยืนยันใน snippet) | - |

บอตควร: สต็อก lapis ≥3 ต่อครั้ง และ XP ≥30 เลเวลก่อนเลือกช่องที่ 3
ตัดสินผล: lapis <3 หรือ XP <30 → ไม่เสริม; รอเก็บทรัพยากร
