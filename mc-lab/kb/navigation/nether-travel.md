# เดินทางผ่าน Nether 1:8

<!-- สร้างอัตโนมัติโดย scripts/split_kb.mjs จาก docs/wiki/navigation.md · ห้ามแก้มือ -->
> W = https://minecraft.wiki/w/ ; อ้างอิงรูปแบบ W/Page (เช่น W/Coordinates) · ข้อมูลจากสรุปผลค้นหา wiki เท่านั้น ไม่ได้เปิดหน้าเต็ม

- เดิน 1 บล็อกใน Nether = 8 บล็อก Overworld แนวนอน (W/The_Nether)
- Overworld→Nether: (floor(X/8), Y, floor(Z/8)); Nether→Overworld: (X×8, Y, Z×8); Y ไม่เปลี่ยน (W/Nether_Portal)
- พอร์ทัลค้นหา portal ในช่วง 256×256 (รัศมี 128) ใน Overworld และ 32×32 (รัศมี 16) ใน Nether (W/Nether_Portal)

บอตควร: คำนวณพิกัดพอร์ทัลปลายทางก่อนเดิน; ตั้งพอร์ทัลจุดเชื่อมให้ห่างกันเกินช่วงค้นหา ไม่งั้นจะเชื่อมผิดอัน
ตัดสินผล: (เกณฑ์แล็บ) พอร์ทัลสองอันในช่วงเดียวกัน = ผิดแผน; ระยะคลาดเคลื่อนหลังออกพอร์ทัล > 16 บล็อก (Nether) ต้องตรวจ
