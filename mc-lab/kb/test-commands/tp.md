# เทเลพอร์ต (/tp = /teleport)

<!-- สร้างอัตโนมัติโดย scripts/split_kb.mjs จาก docs/wiki/test-commands.md · ห้ามแก้มือ -->
> W = https://minecraft.wiki/w/ · ยืนยันจากผลค้นหา wiki เท่านั้น · งบค้นหาหมดก่อนครบทุกคำสั่ง ดูท้ายไฟล์ · ต้องเป็น OP (permission level 2)

- รูปแบบ (W/Commands/teleport): `teleport <destination>` · `teleport <targets> <destination>` · `teleport <location>` · `teleport <targets> <location>` · `teleport <targets> <location> <rotation>` · `... facing <facingLocation>`
- ตัวอย่าง: `/tp @s 100 ~3 100`, `/tp Bot1 @s`
- ทดสอบตกจากที่สูง (ยกตัวบอทขึ้นจากตำแหน่งปัจจุบัน; ใช้ ~ สัมพัทธ์):
  - `/tp Bot1 ~ ~30 ~`
  - `/tp Bot1 ~ ~60 ~`
  - `/tp Bot1 ~ ~100 ~`
  - `/tp Bot1 ~ ~150 ~`
- ควรยืนบนพื้นราบที่รู้ตำแหน่งแน่ ๆ ก่อน; ค่าความเสียหายตามระยะตก = [ไม่แน่ใจ] (ไม่ได้ยืนยันในรอบนี้)
