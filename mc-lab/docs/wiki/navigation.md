# การนำทาง (Navigation) — Minecraft Java Edition
> W = https://minecraft.wiki/w/ ; อ้างอิงรูปแบบ W/Page (เช่น W/Coordinates) · ข้อมูลจากสรุปผลค้นหา wiki เท่านั้น ไม่ได้เปิดหน้าเต็ม

## coordinates · ระบบพิกัด
| แกน | ทิศ | แหล่ง |
|---|---|---|
| +X | ตะวันออก (east) | W/Coordinates |
| -X | ตะวันตก | W/Coordinates |
| +Z | ใต้ (south) | W/Coordinates |
| -Z | เหนือ (north) | W/Coordinates |
| Y | ขึ้นบน (เพิ่ม = สูงขึ้น) | W/Coordinates |
- yaw: เหนือ = 180°, ตะวันออก = -90° (W/Rotation, ตามสรุปค้นหา; ตรวจกับ mineflayer ก่อนใช้)

บอตควร: เก็บพิกัดเป็น (x,y,z)+dimension เสมอ; แปลงทิศด้วยตาราง ห้ามเดา
ตัดสินผล: (เกณฑ์แล็บ) ทดสอบเดินไป -Z 10 บล็อก แล้ว z ต้องลดลง; ผ่าน = z ลด ±1

## height-limits · ขีดจำกัดความสูง
| Dimension | Y ต่ำสุด | Y สูงสุด(build limit) | แหล่ง |
|---|---|---|---|
| Overworld | -64 | 320 (วางบล็อกได้ถึง 319 = 384 ชั้น) | W/Altitude, W/Overworld |
| Nether | 0 | 256 | W/The_Nether |
- Nether: ถ้าขึ้นไปบนหลังคา bedrock สร้างเพิ่มได้อีก 128 บล็อก (Java) (W/The_Nether)

บอตควร: ไม่ขุดต่ำกว่าขอบล่าง; Nether อย่าอยู่บนหลังคา bedrock โดยไม่จำเป็น
ตัดสินผล: (เกณฑ์แล็บ) y < -64 หรือ y ≥ 320 ใน Overworld = ผิดปกติ/เสี่ยง void → หยุดและรายงาน

## compass · เข็มทิศ
- ชี้ไปทิศแนวนอนของ world spawn (Overworld) (W/Compass)
- ใน Nether และ End หมุนมั่ว (W/Compass)
- ไม่บอกความสูง ชี้แนวนอนเท่านั้น (W/Compass)

บอตควร: ใช้เป็นข้อมูลสำรองเมื่อไม่มี waypoint; ไม่พึ่งใน Nether/End
ตัดสินผล: (เกณฑ์แล็บ) ถ้าอยู่นอก Overworld ให้ถือว่า compass ใช้ไม่ได้

## lodestone · เข็มทิศ Lodestone
- ใช้ compass กับ lodestone → ชี้ตำแหน่งแนวนอนของ lodestone นั้น ใช้ได้ใน Nether/End (W/Lodestone, W/Compass)
- หมุนมั่วถ้า lodestone อยู่คนละ dimension หรือถูกทุบ (W/Compass)
- สูตรคราฟต์ lodestone: [ไม่แน่ใจ]

บอตควร: ตั้ง lodestone ที่ฐานแต่ละ dimension เป็นจุด home
ตัดสินผล: (เกณฑ์แล็บ) เข็มหมุนมั่ว = lodestone หาย/คนละ dimension → ใช้ waypoint ที่บันทึกแทน

## recovery-compass · เข็มทิศกู้คืน
- คราฟต์: compass + echo shard 8 ชิ้นล้อม (W/Recovery_Compass)
- ชี้จุดตายล่าสุด เมื่อถืออยู่ ผู้เล่นเคยตาย และอยู่ dimension เดียวกัน; ไม่เข้าเงื่อนไข = หมุนมั่ว (W/Recovery_Compass)
- ค่าเก็บเป็น LastDeathLocation (W/Recovery_Compass)

บอตควร: บอตสำรวจพก 1 อัน (หายากจาก ancient city — [ไม่แน่ใจ]) หรือบันทึกพิกัดจุดตายเองจาก event death
ตัดสินผล: (เกณฑ์แล็บ) ตายแล้วต้องมีพิกัดจุดตายบันทึกใน log 100%

## maps · แผนที่และ explorer map
| รายการ | ค่า | แหล่ง |
|---|---|---|
| zoom 0 | 128×128 บล็อก, 1 บล็อก/พิกเซล | W/Map |
| zoom 1/2/3/4 | 256/512/1024/2048 บล็อกต่อด้าน | W/Map |
| รัศมีวาดตามผู้เล่น | 128 บล็อก (8 chunk) Overworld/End; 64 ใน Nether | W/Tutorial:Mapping |
| zoom out | cartography table + map + กระดาษ | W/Cartography_Table |
| cartographer ระดับ apprentice | explorer map = 8 emerald + compass | W/Explorer_Map |
| journeyman | ocean explorer map 13 emerald + compass | W/Explorer_Map |
| master | woodland explorer map 14 emerald + compass | W/Explorer_Map |

บอตควร: ถือแผนที่ไม่ใช่แหล่งพิกัดหลัก (บอตอ่านภาพยาก) ใช้ทีม human ดูเท่านั้น
ตัดสินผล: (เกณฑ์แล็บ) ไม่ใช้ map เป็น dependency ของงานบอต

## clock-sun · นาฬิกา ดวงอาทิตย์ และดวงจันทร์
| ช่วง tick | ความหมาย | แหล่ง |
|---|---|---|
| 0 | เริ่มกลางวัน | W/Daylight_cycle |
| 12000 | เริ่มพระอาทิตย์ตก | W/Daylight_cycle |
| 13800 | เริ่มกลางคืน | W/Daylight_cycle |
| 22200 | เริ่มรุ่งสาง | W/Daylight_cycle |
| 24000 | วันใหม่ (20 นาทีจริง, 20 tick/วินาที) | W/Daylight_cycle, W/Tick |
- ดวงอาทิตย์ขึ้นตะวันออก ตกตะวันตก (W/Overworld); นาฬิกาใช้ได้เฉพาะ Overworld ใน Nether/End หมุนมั่ว (W/Clock)
- ดวงจันทร์มี 8 เฟส (W/Daylight_cycle)

บอตควร: อ่านเวลา world time จากเซิร์ฟเวอร์ (ไม่ต้องใช้ item); หา "ตะวันออก" จากดวงอาทิตย์ตอนเช้าเมื่อไม่มีพิกัด
ตัดสินผล: (เกณฑ์แล็บ) เวลา ≥ 12000 tick เริ่มกลับฐาน; ≥ 13800 ต้องอยู่ในที่หลบ

## nether-travel · เดินทางผ่าน Nether 1:8
- เดิน 1 บล็อกใน Nether = 8 บล็อก Overworld แนวนอน (W/The_Nether)
- Overworld→Nether: (floor(X/8), Y, floor(Z/8)); Nether→Overworld: (X×8, Y, Z×8); Y ไม่เปลี่ยน (W/Nether_Portal)
- พอร์ทัลค้นหา portal ในช่วง 256×256 (รัศมี 128) ใน Overworld และ 32×32 (รัศมี 16) ใน Nether (W/Nether_Portal)

บอตควร: คำนวณพิกัดพอร์ทัลปลายทางก่อนเดิน; ตั้งพอร์ทัลจุดเชื่อมให้ห่างกันเกินช่วงค้นหา ไม่งั้นจะเชื่อมผิดอัน
ตัดสินผล: (เกณฑ์แล็บ) พอร์ทัลสองอันในช่วงเดียวกัน = ผิดแผน; ระยะคลาดเคลื่อนหลังออกพอร์ทัล > 16 บล็อก (Nether) ต้องตรวจ

## waypoints · แผนจุดอ้างอิงสำหรับทีมบอต
| จุด | ใช้ทำอะไร |
|---|---|
| HOME | พิกัดฐาน + lodestone/ป้าย |
| PORTAL-OW / PORTAL-NE | คู่พอร์ทัล พร้อมพิกัดคำนวณ 1:8 |
| DEATH-<บอต>-<เวลา> | จุดตายล่าสุด |
| RESOURCE-n | จุดแร่/ไม้/น้ำ |
| DANGER-n | ลาวา หน้าผา สปอว์นเนอร์ |
- เก็บ waypoint ใน store กลางของแล็บ (ไม่ใช่กฎเกม) เป็น (dimension,x,y,z) ตามแกนใน W/Coordinates

บอตควร: ทุกบอตอ่าน/เขียน waypoint กลางเดียวกัน; อัปเดตเมื่อสำรวจเจอจุดใหม่; ตั้งชื่อด้วย dimension
ตัดสินผล: (เกณฑ์แล็บ) บอตทุกตัวต้องรู้ HOME ก่อนออกเดินทาง; waypoint ที่ไม่มี dimension = ไม่ถูกต้อง

## return-home · กลับบ้านหลังกลางคืน/ตาย
- ไอเทมที่ตายหล่นหายไปหลัง 6000 tick (5 นาที) ในชังก์ที่โหลดอยู่; นับเวลาหยุดถ้าชังก์ไม่โหลด (W/Item_(entity), W/Death)
- ถ้า keep_inventory = true ได้ของกลับ (W/Death, W/Game_rule)
- recovery compass ชี้จุดตายถ้าอยู่ dimension เดิม (W/Recovery_Compass)

ขั้นตอน: (1) ก่อน 12000 tick ตั้งต้นกลับ HOME (2) ตายแล้วบันทึกจุดตาย + dimension (3) ตรวจศัตรูก่อน เมื่อปลอดภัยรีบกู้ภายใน 5 นาที (4) เดินตามพิกัด HOME ไม่พึ่ง compass ถ้าอยู่ Nether/End

บอตควร: ถ้ารอบของชุดหายสำคัญ ให้ไปกู้ภายใน 5 นาทีหรือออกห่างไกลเพื่อพักตัวนับ (W/Tutorial:Tips_and_tricks)
ตัดสินผล: (เกณฑ์แล็บ) เวลากู้เป้าหมาย < 300 วินาที (=6000 tick) หลังตาย; เกินแล้วถือว่าของหาย

## chunks · ชังก์และระยะมองเห็น
- chunk = 16×16 บล็อกแนวนอน (W/Chunk)
- render distance โหลดเป็นทรงกระบอก (W/Chunk); simulation distance คือขอบเขตที่ entity ทำงาน: side = min(2s+1, 63) chunk (W/Chunk)
- spawn chunk รัศมีค่าเริ่มต้น 2 (ลดจาก 10) (W/Chunk, ตามสรุปค้นหา)
- นอก simulation distance แต่ในระยะ render: mob ไม่ทำงานเต็ม (W/Chunk)

บอตควร: ถือว่าเมื่ออยู่ไกล > ระยะ simulation สิ่งรอบข้างไม่ขยับ/ไอเทมไม่ despawn; คำนวณตำแหน่งชังก์ด้วย floor(x/16)
ตัดสินผล: (เกณฑ์แล็บ) ตรวจ view/simulation distance ของเซิร์ฟเวอร์ก่อนวางแผนระยะ; ไม่ทราบ = [ไม่แน่ใจ]

## unverified · ยังไม่ยืนยัน
- ค่าเริ่มต้น render distance/simulation distance ของเซิร์ฟเวอร์: [ไม่แน่ใจ]
- สูตรคราฟต์ lodestone, แหล่งพบ recovery compass/echo shard: [ไม่แน่ใจ] (โควต้าค้นหาหมด)
- รัศมี world spawn/ที่เกิดสุ่ม, world border เริ่มต้น, ข้อมูล F3: [ไม่แน่ใจ]
- ค่า yaw (เหนือ 180°, ตะวันออก -90°) ได้จากสรุปค้นหา ควรทดสอบจริง
- ข้อมูลทั้งหมดมาจากสรุปผลค้นหา ไม่ได้เปิดอ่านหน้าเต็ม
