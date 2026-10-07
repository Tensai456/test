# piston / sticky piston

<!-- สร้างอัตโนมัติโดย scripts/split_kb.mjs จาก docs/wiki/redstone-basics.md · ห้ามแก้มือ -->
> W = https://minecraft.wiki/w/ (หน้าที่อ้าง: Redstone_Dust, Redstone_Repeater, Door, Iron_Door, Wooden_Door, Pressure_Plate, Button, Lever, Tripwire_Hook, Observer, Piston, Dispenser, Hopper, TNT, Tutorial:Traps) · "เกณฑ์แล็บ" = ค่าที่แล็บตั้งเอง ไม่ใช่ค่าจาก wiki · ค้นไม่ครบ ดูท้ายไฟล์

| ข้อเท็จจริง | แหล่ง |
|---|---|
| ดันได้สูงสุด 12 บล็อก | W/Piston |
| sticky ดึงกลับได้ 1 บล็อก | W/Piston |
| obsidian, bedrock, spawner, chest, furnace ฯลฯ ดันไม่ได้ | W/Piston |
| ขยาย/หด | ใช้เวลา 2 game ticks; start delay ใน Java 0 หรือ 1 tick ขึ้นกับจังหวะที่ได้รับไฟ | W/Piston |
| ดาเมจ | ไม่ทำโดยตรง; suffocation 1 HP ทุก 0.5 วิ ถ้าบล็อกถูกดันเข้าหัว | W/Piston, W/Damage |
บอยควร: ห้ามยืน/เดินในแนวหัว piston ที่เพิ่งได้รับไฟ; piston ไม่ทำดาเมจโดยตรง แต่ดันบล็อกเข้าหัวจนขาดอากาศได้ (suffocation 1 HP ทุก 0.5 วิ) และผู้เล่นจะถูกดันเข้าที่ว่างถ้ามี (W/Piston, W/Damage); piston ดันของเปิดหลุม/ลาวาได้
ตัดสินผล: แนวที่ piston หันหน้าเข้าทางเดิน = เสี่ยง (เกณฑ์แล็บ)
ตัดสินผล: piston pit (W/Tutorial:Traps) ใช้ piston ดันบล็อกพื้น/ป้าย ให้ตกหลุมหรือทรายตกใส่ มีแผ่นกด/คันโยกเป็นตัวกระตุ้น; ผังละเอียดของกับดัก TNT/lava [ไม่แน่ใจ]
บอตควร:
- มอง piston หัวหันเข้าทางเดิน = กับดักเสี่ยง; ห้ามยืนในแนวหัว piston เมื่อมีไฟ/แผ่นกด/สายสะดุดข้างๆ (เกณฑ์แล็บ)
- ไม่วางแผนอาศัย piston ดันบล็อกเกิน 12 หรือของที่ดันไม่ได้ (obsidian, bedrock, spawner, chest, furnace; W/Piston)
- เดินผ่านจุดสงสัยด้วย sneak และเว้นระยะ >= 2 บล็อกจากหน้า piston [คิดเอง]
ตัดสินผล: ถ้าตำแหน่งบอตเปลี่ยนเองโดยไม่สั่ง > 1 บล็อกภายใน 5 ticks (เกณฑ์แล็บ [คิดเอง]) = ถูกดัน ให้หยุด ตรวจรอบ ห้ามเดินต่อทิศเดิม
