# สายสะดุด

<!-- สร้างอัตโนมัติโดย scripts/split_kb.mjs จาก docs/wiki/redstone-basics.md · ห้ามแก้มือ -->
> W = https://minecraft.wiki/w/ (หน้าที่อ้าง: Redstone_Dust, Redstone_Repeater, Door, Iron_Door, Wooden_Door, Pressure_Plate, Button, Lever, Tripwire_Hook, Observer, Piston, Dispenser, Hopper, TNT, Tutorial:Traps) · "เกณฑ์แล็บ" = ค่าที่แล็บตั้งเอง ไม่ใช่ค่าจาก wiki · ค้นไม่ครบ ดูท้ายไฟล์

| ข้อเท็จจริง | แหล่ง |
|---|---|
| ต้องมี hook 2 ตัว + string แนวนอนตรง 1-40 เส้น | W/Tripwire_Hook |
| entity ชนสาย (ไม่ใช่ hook) ทำให้ hook จ่ายไฟ; string ถูกทำลายโดยไม่ใช้กรรไกรก็จ่ายไฟ | W/Tripwire_Hook |
บอยควร: มอง string บางๆ เป็นสัญญาณอันตราย, ตัดด้วยกรรไกรเพื่อปลดโดยไม่กระตุ้น
ตัดสินผล: ระยะ string > 40 = วงจรไม่ valid; ถ้าเห็น hook สองตัวเรียงกัน ให้ถือว่าเป็นกับดัก (เกณฑ์แล็บ)
บอตควร:
- สแกนบล็อก string/tripwire_hook ในแนวเดินล่วงหน้า 5 บล็อก (เกณฑ์แล็บ [คิดเอง]); เห็น hook = ถือเป็นกับดัก (W/Tripwire_Hook)
- ปลดด้วยกรรไกรตัด string (ไม่ trigger) ถ้าพกกรรไกร; ถ้าไม่มี ห้ามทำลาย string ด้วยมือ/ดาบ เพราะจ่ายไฟ (W/Tripwire_Hook)
- ไม่มีกรรไกร: เดินอ้อมห่าง string >= 1 บล็อก หรือกลับเส้นทางอื่น (entity ชนสายก็ trigger)
ตัดสินผล: หลังผ่านจุด 10 วินาที (เกณฑ์แล็บ [คิดเอง]) ถ้าไม่มี dispenser/piston/TNT ทำงาน และ HP ไม่ลด = ปลดสำเร็จ
