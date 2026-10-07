# ระบบพิกัด

<!-- สร้างอัตโนมัติโดย scripts/split_kb.mjs จาก docs/wiki/navigation.md · ห้ามแก้มือ -->
> W = https://minecraft.wiki/w/ ; อ้างอิงรูปแบบ W/Page (เช่น W/Coordinates) · ข้อมูลจากสรุปผลค้นหา wiki เท่านั้น ไม่ได้เปิดหน้าเต็ม

| แกน | ทิศ | แหล่ง |
|---|---|---|
| +X | ตะวันออก (east) | W/Coordinates |
| -X | ตะวันตก | W/Coordinates |
| +Z | ใต้ (south) | W/Coordinates |
| -Z | เหนือ (north) | W/Coordinates |
| Y | ขึ้นบน (เพิ่ม = สูงขึ้น) | W/Coordinates |
- yaw: เหนือ = 180°, ตะวันออก = -90° (W/Rotation, ตามสรุปค้นหา; ตรวจกับ mineflayer ก่อนใช้)

บอตควร: เก็บพิกัดเป็น (x,y,z)+dimension เสมอ; แปลงทิศด้วยตาราง ห้ามเดา
ตัดสินผล: (เกณฑ์แล็บ) ทดสอบเดินไป -Z 10 บล็อก แล้ว z ต้องลดลง; ผ่าน = z ลด ±1
