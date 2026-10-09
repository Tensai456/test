# observer, hopper

<!-- สร้างอัตโนมัติโดย scripts/split_kb.mjs จาก docs/wiki/redstone-basics.md · ห้ามแก้มือ -->
> W = https://minecraft.wiki/w/ (หน้าที่อ้าง: Redstone_Dust, Redstone_Repeater, Door, Iron_Door, Wooden_Door, Pressure_Plate, Button, Lever, Tripwire_Hook, Observer, Piston, Dispenser, Hopper, TNT, Tutorial:Traps) · "เกณฑ์แล็บ" = ค่าที่แล็บตั้งเอง ไม่ใช่ค่าจาก wiki · ค้นไม่ครบ ดูท้ายไฟล์

| ข้อเท็จจริง | ค่า | แหล่ง |
|---|---|---|
| observer ส่งพัลส์เมื่อบล็อกหน้าเปลี่ยน | แรง 15 นาน 2 game ticks | W/Observer |
| hopper cooldown | 8 game ticks, ~2.5 ชิ้น/วิ | W/Hopper |
| hopper ได้รับไฟ | ล็อก ปิดการทำงานทั้งสามอย่าง | W/Hopper |
บอยควร: ถ้า hopper ไม่ย้ายของ ให้ตรวจว่ามีไฟ redstone ค้างอยู่; observer เป็นพัลส์สั้น อย่าคาดว่าไฟค้าง
ตัดสินผล: (เกณฑ์แล็บ) รอ ≥ 8 ticks ต่อการโอนหนึ่งครั้งก่อนสรุปว่า hopper ค้าง
บอตควร:
- สงสัยกับดักตรวจจับ: observer หันหน้าเข้าทาง (พัลส์ 15 นาน 2 ticks, W/Observer) ให้ถือว่าอาจติดกับดัก; เดินอ้อม
- hopper ไม่ย้ายของ: ตรวจ redstone ใกล้เคียง (hopper ถูกล็อกเมื่อมีไฟ, W/Hopper) ปิดไฟก่อน
- ไอเทมตกตรง hopper โดนดูด 8 ticks/ชิ้น (W/Hopper) อย่าวางของล้ำค่าบนหรือเหนือ hopper
ตัดสินผล: รอ >= 8 ticks ต่อชิ้น (เกณฑ์แล็บ) ถ้าไม่ย้ายหลังรอ 20 ticks (เกณฑ์แล็บ [คิดเอง]) ให้เช็คไฟ
