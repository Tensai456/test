# TNT

<!-- สร้างอัตโนมัติโดย scripts/split_kb.mjs จาก docs/wiki/redstone-basics.md · ห้ามแก้มือ -->
> W = https://minecraft.wiki/w/ (หน้าที่อ้าง: Redstone_Dust, Redstone_Repeater, Door, Iron_Door, Wooden_Door, Pressure_Plate, Button, Lever, Tripwire_Hook, Observer, Piston, Dispenser, Hopper, TNT, Tutorial:Traps) · "เกณฑ์แล็บ" = ค่าที่แล็บตั้งเอง ไม่ใช่ค่าจาก wiki · ค้นไม่ครบ ดูท้ายไฟล์

| ข้อเท็จจริง | ค่า | แหล่ง |
|---|---|---|
| ติดไฟด้วย redstone | fuse 80 ticks (4 วิ) | W/TNT |
| กำลังระเบิด | 4 | W/TNT |
บอยควร: ถ้าเห็น TNT ใต้พื้น/ข้างทางเดิน ห้ามเหยียบแผ่นกดหรือชนสายสะดุดใกล้ๆ; เมื่อ TNT ถูกจุด ถอยให้ไกลภายใน 4 วิ
ตัดสินผล: (เกณฑ์แล็บ) หนี ≥ 8 บล็อก เมื่อ TNT primed
บอตควร:
- เมื่อพบ TNT entity primed (fuse 80 ticks = 4 วิ, W/TNT): วิ่งออกไป >= 8 บล็อก (เกณฑ์แล็บ) ภายใน 4 วินาทีโดยหันหลังให้ ระเบิดกำลัง 4
- เห็น TNT ใต้พื้น/ข้างทาง: ห้ามเหยียบแผ่นกด/ชนสาย ห้ามใช้ flint and steel/fire charge ใกล้ (W/TNT); เดินอ้อม
- หลบหลังบล็อกตันที่ไม่ใช่ทรายกรวด ถ้าหนีไม่ทัน (ระเบิดทำลายบล็อกได้) [คิดเอง]
ตัดสินผล: หลังระเบิด 5 วินาที ถ้า HP > 6 และไม่เหลือ TNT entity ใหม่ = รอด (เกณฑ์แล็บ [คิดเอง]); ระยะ < 8 บล็อกตอนระเบิด = ผิด
