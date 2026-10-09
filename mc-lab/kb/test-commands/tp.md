# เทเลพอร์ต (/tp = /teleport)

<!-- สร้างอัตโนมัติโดย scripts/split_kb.mjs จาก docs/wiki/test-commands.md · ห้ามแก้มือ -->
> W = https://minecraft.wiki/w/ · ยืนยันจากผลค้นหา wiki เท่านั้น · รายการค้างดูท้ายไฟล์ · ต้องเป็น OP (permission level 2)

- รูปแบบ (W/Commands/teleport): `teleport <destination>` · `teleport <targets> <destination>` · `teleport <location>` · `teleport <targets> <location>` · `teleport <targets> <location> <rotation>` · `... facing <facingLocation>`
- ตัวอย่าง: `/tp @s 100 ~3 100`, `/tp Bot1 @s`
- ทดสอบตกจากที่สูง (ยกตัวบอทขึ้นจากตำแหน่งปัจจุบัน; ใช้ ~ สัมพัทธ์):
  - `/tp Bot1 ~ ~30 ~`
  - `/tp Bot1 ~ ~60 ~`
  - `/tp Bot1 ~ ~100 ~`
  - `/tp Bot1 ~ ~150 ~`
- ควรยืนบนพื้นราบที่รู้ตำแหน่งแน่ ๆ ก่อน
- ดาเมจตก: ม็อบส่วนใหญ่โดน ≈1 HP ต่อบล็อกที่ตกเกิน `safe_fall_distance` (ค่าเริ่มต้น 3 บล็อก) (W/Attribute, W/Damage); สูตรปัดเศษ/ตัวคูณละเอียด = [ไม่แน่ใจ]
- ตกสูง 30+ บล็อกน่าจะตายถ้าไม่มีเกราะ/เอฟเฟกต์ (อนุมานจากสูตรข้างบน ไม่ใช่ค่าที่วิกิยืนยัน)
