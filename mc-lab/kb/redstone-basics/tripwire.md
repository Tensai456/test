# สายสะดุด

<!-- สร้างอัตโนมัติโดย scripts/split_kb.mjs จาก docs/wiki/redstone-basics.md · ห้ามแก้มือ -->
> W = https://minecraft.wiki/w/ (หน้าที่อ้าง: Redstone_Dust, Redstone_Repeater, Door, Iron_Door, Wooden_Door, Pressure_Plate, Button, Lever, Tripwire_Hook, Observer, Piston, Dispenser, Hopper, TNT, Tutorial:Traps) · "เกณฑ์แล็บ" = ค่าที่แล็บตั้งเอง ไม่ใช่ค่าจาก wiki · ค้นไม่ครบ ดูท้ายไฟล์

| ข้อเท็จจริง | แหล่ง |
|---|---|
| ต้องมี hook 2 ตัว + string แนวนอนตรง 1-40 เส้น | W/Tripwire_Hook |
| entity ชนสาย (ไม่ใช่ hook) ทำให้ hook จ่ายไฟ; string ถูกทำลายโดยไม่ใช้กรรไกรก็จ่ายไฟ | W/Tripwire_Hook |
บอยควร: มอง string บางๆ เป็นสัญญาณอันตราย, ตัดด้วยกรรไกรเพื่อปลดโดยไม่กระตุ้น
ตัดสินผล: ระยะ string > 40 = วงจรไม่ valid; ถ้าเห็น hook สองตัวเรียงกัน ให้ถือว่าเป็นกับดัก (เกณฑ์แล็บ)
