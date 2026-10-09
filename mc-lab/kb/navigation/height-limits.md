# ขีดจำกัดความสูง

<!-- สร้างอัตโนมัติโดย scripts/split_kb.mjs จาก docs/wiki/navigation.md · ห้ามแก้มือ -->
> W = https://minecraft.wiki/w/ ; อ้างอิงรูปแบบ W/Page (เช่น W/Coordinates) · ข้อมูลจากสรุปผลค้นหา wiki เท่านั้น ไม่ได้เปิดหน้าเต็ม

| Dimension | Y ต่ำสุด | Y สูงสุด(build limit) | แหล่ง |
|---|---|---|---|
| Overworld | -64 | 320 (วางบล็อกได้ถึง 319 = 384 ชั้น) | W/Altitude, W/Overworld |
| Nether | 0 | 256 | W/The_Nether |
- Nether: ถ้าขึ้นไปบนหลังคา bedrock สร้างเพิ่มได้อีก 128 บล็อก (Java) (W/The_Nether)

บอตควร: ไม่ขุดต่ำกว่าขอบล่าง; Nether อย่าอยู่บนหลังคา bedrock โดยไม่จำเป็น
ตัดสินผล: (เกณฑ์แล็บ) y < -64 หรือ y ≥ 320 ใน Overworld = ผิดปกติ/เสี่ยง void → หยุดและรายงาน
