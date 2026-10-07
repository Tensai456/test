# 1.21.9 Copper Age

<!-- สร้างอัตโนมัติโดย scripts/split_kb.mjs จาก docs/wiki/version-26x.md · ห้ามแก้มือ -->
> แหล่งข้อมูล: ผลค้นหา minecraft.wiki เท่านั้น (snippet; ดึงหน้าตรงไม่ได้). `W = https://minecraft.wiki/w/`. ตัวเลขใดไม่มีใน snippet ระบุ [ไม่แน่ใจ]. ค้นเมื่อ 2026-10-07.

| ข้อ | รายละเอียด | แหล่ง |
|---|---|---|
| copper golem | spawn โดยวางฟักทอง/jack o'lantern บนบล็อกทองแดง; HP 12; ดรอปทองแดง 1-3; oxidize/wax ได้; ขนไอเทมไปหีบไม้ | W/Copper_Golem |
| copper chest | หีบทองแดง (oxidize ได้) | W/Java_Edition_1.21.9 |
| lightning rod | oxidize และ wax ได้ | W/Java_Edition_1.21.9 |
| shelves | ชั้นวางไอเทมใหม่ | W/Java_Edition_1.21.9 |
| 1.21.10 | hotfix: แก้ entity ทะลุ piston ใน cobweb, wind charge collision, chunk ไม่โหลดตอน teleport | W/Java_Edition_1.21.10 |
- ผลต่อบอต: golem มีไอเทมถ่ายโอนระหว่างหีบ — อย่านับว่าของในหีบคงที่ใกล้ golem; ฟาร์มฟักทอง+ทองแดงอาจเกิด golem โดยไม่ตั้งใจ.

**บอตควร:**
- เก็บทองแดงสำหรับหอก/เครื่องมือ copper (W/Java_Edition_1.21.9) และ copper golem ดรอปทองแดง 1-3 (HP 12, W/Copper_Golem) เป็นแหล่งสำรอง.
- อย่าวางฟักทอง/jack o'lantern บนบล็อกทองแดงโดยไม่ตั้งใจ [คิดเอง].
- ในทดสอบ inventory ใกล้ golem: อ่านหีบซ้ำก่อนสรุปจำนวน เพราะ golem ขนของ (W/Copper_Golem).
- ถือ copper golem เป็นไม่ใช่ศัตรู; ไม่โจมตี [ไม่แน่ใจ ว่าเป็นกลางต่อผู้เล่น].

**ตัดสินผล:** เกณฑ์แล็บ: ตรวจจำนวนของในหีบ 2 ครั้งห่างกัน 60 วินาที ถ้าต่างกันโดยบอตไม่ได้ทำ = golem ทำงาน ให้ตัดผลนับสต็อกรอบนั้นทิ้ง [คิดเอง].
