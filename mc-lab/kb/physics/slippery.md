# 1. พื้นลื่น (Slipperiness)

<!-- สร้างอัตโนมัติโดย scripts/split_kb.mjs จาก docs/playbook/BLOCK_PHYSICS.md · ห้ามแก้มือ -->
> ที่มา: ค้นผ่าน search snippet ของ minecraft.wiki เท่านั้น (ไม่ได้เปิดหน้าเต็ม). `[ไม่แน่ใจ]` = ไม่พบในผลค้น ห้ามถือเป็นตัวเลขจริง.
> หน่วย: "b/s" = บล็อก/วินาที, "tick" = 1/20 วินาที. ค่าความแข็ง/ทนทานบล็อกอยู่ที่ minecraft-data ไม่ซ้ำที่นี่.

| บล็อก | Slipperiness | ผลต่อการเคลื่อนที่ | อันตราย | บอตควร/ห้าม | แหล่ง |
|---|---|---|---|---|---|
| ปกติ | 0.6 (ยืนยันทางอ้อม: ใช้ 0.6 ใน `lib/pvp/physics.mjs` แล้วได้วิ่ง 5.612 / เดิน 4.317 ตรงวิกิพอดี) | — | — | — | — |
| Ice / Packed Ice / Frosted Ice | 0.98 | เร่ง/หยุดช้า ไถลต่อ; ความเร็วเดินบน packed/frosted ice สูงสุด ~4.157 b/s (ค่าที่ wiki ระบุ) | ไถลตกขอบ/เข้าลาวา | ห้ามเดินใกล้ขอบหน้าผาลาวา; หยุดวางแผนล่วงหน้า (ใช้ sneak ช่วยไม่ได้ เพราะ momentum) | [Ice](https://minecraft.wiki/w/Ice), [Packed Ice](https://minecraft.wiki/w/Packed_Ice) |
| Blue Ice | 0.989 | ลื่นสุด; เดิน ~4.376 b/s | เหมือนข้างบน | เหมือนข้างบน | [Blue Ice](https://minecraft.wiki/w/Blue_Ice) |
| Slime Block | 0.8 | ลื่นเล็กน้อย + เด้ง (ดู §3) | — | — | [Slime Block](https://minecraft.wiki/w/Slime_Block) |
| Frosted Ice (Frost Walker) | 0.98 | สร้างรอบผู้เล่นรัศมี 2+level (I=3, II=4) เป็นวงกลม; อายุ 0-4 แล้วกลายเป็นน้ำ | ละลายแล้วตกน้ำ | ใช้ข้ามน้ำได้ (ไม่ใช่ลาวา [ไม่แน่ใจ]) ต้องเดินบนพื้นต่อเนื่อง ห้ามกระโดด/ตก | [Frost Walker](https://minecraft.wiki/w/Frost_Walker), [Frosted Ice](https://minecraft.wiki/w/Frosted_Ice) |
| เรือบนน้ำแข็ง | ice/packed/frosted ~2 b/tick, blue ice ~3.63 b/tick | เรือไวมาก | ชนแล้วเรือพัง/ตกกระเด็น | บอตขับเรือบน ice ต้องมีเส้นทางตรง | [Boat](https://minecraft.wiki/w/Boat) |
