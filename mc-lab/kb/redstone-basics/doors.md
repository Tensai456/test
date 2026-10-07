# ประตูไม้ vs เหล็ก, trapdoor, fence gate

<!-- สร้างอัตโนมัติโดย scripts/split_kb.mjs จาก docs/wiki/redstone-basics.md · ห้ามแก้มือ -->
> W = https://minecraft.wiki/w/ (หน้าที่อ้าง: Redstone_Dust, Redstone_Repeater, Door, Iron_Door, Wooden_Door, Pressure_Plate, Button, Lever, Tripwire_Hook, Observer, Piston, Dispenser, Hopper, TNT, Tutorial:Traps) · "เกณฑ์แล็บ" = ค่าที่แล็บตั้งเอง ไม่ใช่ค่าจาก wiki · ค้นไม่ครบ ดูท้ายไฟล์

| ชนิด | เปิดมือ | หมายเหตุ | แหล่ง |
|---|---|---|---|
| ประตูไม้ | ได้ | เปิดได้โดยผู้เล่น/ชาวบ้าน/piglin/vindicator/copper golem หรือ redstone | W/Wooden_Door |
| ประตูเหล็ก | ไม่ได้ | ต้อง redstone เท่านั้น, zombie ทุบไม่ได้ | W/Iron_Door |
| redstone | ได้รับไฟจากบล็อกข้างเคียงแล้วเปิดทันที, ไฟดับปิดทันที | | W/Iron_Door |
| trapdoor ไม้/ทองแดง | ได้ (คลิกขวา) | เปิดโดยผู้เล่นหรือ redstone | W/Trapdoor |
| trapdoor เหล็ก | ไม่ได้ | redstone เท่านั้น ผู้เล่นเปิดไม่ได้ | W/Iron_Trapdoor |
| fence gate | ได้ | เปิดมือ/wind charge/redstone; mob เปิดเองไม่ได้ ชาวบ้านเปิดไม่ได้ | W/Fence_Gate |
| ชาวบ้านกับประตูอื่น | เปิดได้เฉพาะประตูไม้/ทองแดง | เปิด trapdoor, fence gate, ประตูเหล็กไม่ได้ | W/Villager |
บอยควร: ประตูเหล็กต้องมีปุ่ม/คันโยก/แผ่นกดฝั่งใน (และฝั่งนอกถ้าจะออก) ไม่งั้นบอยติดข้างใน; ไม่ใช้ประตูเหล็กเป็นทางออกเดียวโดยไม่มีตัวกด
ตัดสินผล: mob อื่นนอกจากผู้เล่น/ชาวบ้าน/piglin/vindicator/copper golem ที่เปิด trapdoor ได้ [ไม่แน่ใจ] (ไม่พบในผลค้น); zombie บางตัวทุบประตูไม้ได้ในระดับ Hard (สุ่ม 5%) (W/Wooden_Door)
บอตควร:
- ก่อนเข้า/ออกประตูเหล็ก: หาปุ่ม/คันโยก/แผ่นกดในระยะ 3 บล็อก (เกณฑ์แล็บ [คิดเอง]) แล้วกดก่อนเดิน; ไม่มีตัวกด = ห้ามเข้า (W/Iron_Door)
- ประตูไม้: เปิดมือได้ (W/Wooden_Door) จึงกัน zombie ไม่ได้ ถ้าต้องการกัน ใช้ประตูเหล็กและอยู่ด้านที่มีตัวกด
- ผ่านแล้วถอยห่างประตู >= 2 บล็อก เพราะไฟดับ = ปิดทันที (W/Iron_Door) กันถูกหนีบ [คิดเอง]
- trapdoor ไม้/ทองแดง/fence gate: interact 1 ครั้งเปิดได้ (W/Trapdoor, W/Fence_Gate); trapdoor เหล็กต้อง redstone (W/Iron_Trapdoor); อ่าน state open หลังสั่ง [คิดเอง]
ตัดสินผล: สั่งกดแล้วรอ <= 10 ticks (เกณฑ์แล็บ [คิดเอง]) ถ้า block state ไม่เป็น open ถือว่าไม่มีไฟ ให้กดซ้ำ 1 ครั้งหรือหาตัวกดอื่น
