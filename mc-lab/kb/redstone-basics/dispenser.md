# dispenser / dropper

<!-- สร้างอัตโนมัติโดย scripts/split_kb.mjs จาก docs/wiki/redstone-basics.md · ห้ามแก้มือ -->
> W = https://minecraft.wiki/w/ (หน้าที่อ้าง: Redstone_Dust, Redstone_Repeater, Door, Iron_Door, Wooden_Door, Pressure_Plate, Button, Lever, Tripwire_Hook, Observer, Piston, Dispenser, Hopper, TNT, Tutorial:Traps) · "เกณฑ์แล็บ" = ค่าที่แล็บตั้งเอง ไม่ใช่ค่าจาก wiki · ค้นไม่ครบ ดูท้ายไฟล์

| ไอเทม | ผล | แหล่ง |
|---|---|---|
| ลูกธนู | ยิงตามทิศที่หัน | W/Dispenser |
| fire charge | ยิงลูกไฟ จุดไฟ mob/บล็อก | W/Dispenser |
| lava bucket | วางลาวาในบล็อกหน้า | W/Dispenser |
| TNT | สร้าง TNT entity ที่บล็อกหน้า | W/Dispenser |
| ดีเลย์หลังรับไฟ | 4 game ticks, ทำซ้ำเมื่อสัญญาณหยุดแล้วมาใหม่ | W/Dispenser |
บอยควร: อย่ายืนหน้า dispenser ที่ช่องรูหันมาทางเรา; เห็น dispenser ติด tripwire/แผ่นกด หลบ
| dropper | แค่โยนไอเทมออก (ธนูก็แค่ตกออกไป); ถ้าหันหน้าเข้า container จะย้ายไอเทมเข้าไป ส่วน dispenser ย้ายเข้า container ไม่ได้ | W/Dropper |
ตัดสินผล: dropper ถือว่าแค่ปล่อยไอเทม ไม่ยิง/ไม่วางลาวา/ไม่สร้าง TNT (W/Dropper)
บอตควร:
- เห็น dispenser/dropper ช่องหันมาทางเรา: เดินอ้อม ห้ามอยู่ในแนวหน้า 5 บล็อก (เกณฑ์แล็บ [คิดเอง]) โดยเฉพาะที่ผูก tripwire/แผ่นกด
- ถ้าจำเป็นต้องผ่าน: ตัด tripwire ด้วยกรรไกร หรือทำลาย dispenser จากด้านหลัง (ไม่อยู่หน้าช่อง) [คิดเอง]
- ยิงหลังรับไฟ 4 ticks (W/Dispenser): เมื่อได้ยินเสียง/เห็น entity arrow/fire charge ให้ถอยออกจากแนวภายใน 4 ticks ไม่ได้ ให้ใช้โล่
- ระวัง lava bucket/TNT จาก dispenser: ไม่ยืนบนบล็อกหน้าช่อง
ตัดสินผล: ถ้า HP ลดใน 2 วินาที หลังเข้าแนวหน้า dispenser = ผิด (เกณฑ์แล็บ [คิดเอง]) บันทึกพิกัดเป็นอันตรายแล้วห้ามผ่านอีก
