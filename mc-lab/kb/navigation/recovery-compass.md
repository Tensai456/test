# เข็มทิศกู้คืน

<!-- สร้างอัตโนมัติโดย scripts/split_kb.mjs จาก docs/wiki/navigation.md · ห้ามแก้มือ -->
> W = https://minecraft.wiki/w/ ; อ้างอิงรูปแบบ W/Page (เช่น W/Coordinates) · ข้อมูลจากสรุปผลค้นหา wiki เท่านั้น ไม่ได้เปิดหน้าเต็ม

- คราฟต์: compass + echo shard 8 ชิ้นล้อม (W/Recovery_Compass)
- ชี้จุดตายล่าสุด เมื่อถืออยู่ ผู้เล่นเคยตาย และอยู่ dimension เดียวกัน; ไม่เข้าเงื่อนไข = หมุนมั่ว (W/Recovery_Compass)
- ค่าเก็บเป็น LastDeathLocation (W/Recovery_Compass)

บอตควร: บอตสำรวจพก 1 อัน (echo shard พบเฉพาะใน ancient city: ในหีบ 1–3 ชิ้น โอกาส 30.4% ต่อหีบ (W/Echo_Shard) ใช้ทำ recovery compass เท่านั้น) หรือบันทึกพิกัดจุดตายเองจาก event death
ตัดสินผล: (เกณฑ์แล็บ) ตายแล้วต้องมีพิกัดจุดตายบันทึกใน log 100%
