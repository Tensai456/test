# ชังก์และระยะมองเห็น

<!-- สร้างอัตโนมัติโดย scripts/split_kb.mjs จาก docs/wiki/navigation.md · ห้ามแก้มือ -->
> W = https://minecraft.wiki/w/ ; อ้างอิงรูปแบบ W/Page (เช่น W/Coordinates) · ข้อมูลจากสรุปผลค้นหา wiki เท่านั้น ไม่ได้เปิดหน้าเต็ม

- chunk = 16×16 บล็อกแนวนอน (W/Chunk)
- render distance โหลดเป็นทรงกระบอก (W/Chunk); simulation distance คือขอบเขตที่ entity ทำงาน: side = min(2s+1, 63) chunk (W/Chunk)
- spawn chunk รัศมีค่าเริ่มต้น 2 (ลดจาก 10) (W/Chunk, ตามสรุปค้นหา)
- นอก simulation distance แต่ในระยะ render: mob ไม่ทำงานเต็ม (W/Chunk)

บอตควร: ถือว่าเมื่ออยู่ไกล > ระยะ simulation สิ่งรอบข้างไม่ขยับ/ไอเทมไม่ despawn; คำนวณตำแหน่งชังก์ด้วย floor(x/16)
ตัดสินผล: (เกณฑ์แล็บ) ตรวจ view/simulation distance ของเซิร์ฟเวอร์ก่อนวางแผนระยะ; ไม่ทราบ = [ไม่แน่ใจ]
