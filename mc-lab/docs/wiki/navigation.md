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
- yaw ใน F3 (Java): เหนือ = ±180°, ตะวันออก = -90°, ใต้ = 0°, ตะวันตก = +90°; pitch + = มองลง (W/Rotation, W/Debug_screen); ช่วง F3: เหนือ 135.0..-135.1, ใต้ -45.0..44.9, ตะวันออก -135.0..-45.1, ตะวันตก 45.0..134.9
- หมายเหตุ: mineflayer ใช้หน่วยเรเดียนและนิยาม yaw ต่างจาก F3 ได้ → [ไม่แน่ใจ] ต้องทดสอบก่อนใช้

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
- สูตรคราฟต์ lodestone (Java 1.21.5+): chiseled stone bricks + iron ingot (W/Lodestone); เดิม (1.16) ใช้ chiseled stone bricks 8 + netherite ingot 1 — เปลี่ยนเป็น iron ใน 1.21.5 ให้ renewable; จำนวน chiseled stone bricks ต่อสูตรใหม่: [ไม่แน่ใจ]

บอตควร: ตั้ง lodestone ที่ฐานแต่ละ dimension เป็นจุด home
ตัดสินผล: (เกณฑ์แล็บ) เข็มหมุนมั่ว = lodestone หาย/คนละ dimension → ใช้ waypoint ที่บันทึกแทน

## recovery-compass · เข็มทิศกู้คืน
- คราฟต์: compass + echo shard 8 ชิ้นล้อม (W/Recovery_Compass)
- ชี้จุดตายล่าสุด เมื่อถืออยู่ ผู้เล่นเคยตาย และอยู่ dimension เดียวกัน; ไม่เข้าเงื่อนไข = หมุนมั่ว (W/Recovery_Compass)
- ค่าเก็บเป็น LastDeathLocation (W/Recovery_Compass)

บอตควร: บอตสำรวจพก 1 อัน (echo shard พบเฉพาะใน ancient city: ในหีบ 1–3 ชิ้น โอกาส 30.4% ต่อหีบ (W/Echo_Shard) ใช้ทำ recovery compass เท่านั้น) หรือบันทึกพิกัดจุดตายเองจาก event death
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
- spawn chunk: เกม rule spawnChunkRadius เพิ่มใน 1.20.5 (ค่าเริ่มต้น 2) แต่ spawn chunks และ rule นี้ถูกลบใน Java 1.21.9 (W/Spawn_chunk) → ใน 1.21.9+ ห้ามพึ่ง spawn chunk
- ค่าเริ่มต้น server.properties: view-distance = 10, simulation-distance = 10 (W/Server.properties)
- นอก simulation distance แต่ในระยะ render: mob ไม่ทำงานเต็ม (W/Chunk)

บอตควร: ถือว่าเมื่ออยู่ไกล > ระยะ simulation สิ่งรอบข้างไม่ขยับ/ไอเทมไม่ despawn; คำนวณตำแหน่งชังก์ด้วย floor(x/16)
ตัดสินผล: (เกณฑ์แล็บ) ตรวจ view/simulation distance ของเซิร์ฟเวอร์ก่อนวางแผนระยะ; ไม่ทราบ = [ไม่แน่ใจ]

## stronghold-triangulation · หาป้อมด้วยวิธีสามเหลี่ยม
- eye of ender = ender pearl 1 + blaze powder 1 (W/Eye_of_Ender); ใช้ได้เฉพาะ Overworld และต้องมี stronghold อยู่/สร้างได้ ไม่ทำงานใน Nether/End (W/Eye_of_Ender)
- โยนแล้วบินประมาณ 12 บล็อกไปทางแนวนอนของ stronghold ที่ใกล้สุด ทะลุบล็อกได้ มีอนุภาคม่วง แล้วลอยสั้น ๆ ก่อนตกเป็นไอเทม (80%) หรือแตก (20%) (W/Eye_of_Ender)
- ไกล > 12 บล็อกจากมุม NW ของ chunk บันไดป้อม ตาจะบินขึ้น; ใกล้กว่า 12 จะบินลง = อยู่เหนือป้อมแล้ว ให้ขุดลง (W/Eye_of_Ender)
- วงแรกมี 3 ป้อม ที่ 1,280–2,816 บล็อกจากจุด (0,0); รวม 8 วง 128 ป้อม (W/Stronghold)
- ต้องใช้ 12 eye เปิดพอร์ทัล; กรอบแต่ละอันมี eye อยู่แล้ว 10% (เฉลี่ย 1.2 กรอบ); แนะนำเตรียม ~15–16 eye (W/Eye_of_Ender, W/Stronghold)
- ประมาณระยะจากมุมต่างของสองโยน: 0.5° ≈ 2000, 1° ≈ 1000, 2° ≈ 500 บล็อก (W/Tutorial:Locating_a_stronghold); โยนสองจุดห่างราว 500 บล็อกให้แม่นพอ
- วิธีคิด (ผู้เขียนแล็บอนุมานจากแกนใน W/Coordinates + yaw ใน W/Rotation; ไม่ใช่สูตรตรงจาก wiki):
  1. อ่านจุด P1=(x1,z1) yaw1 ตอนตาบิน (ให้มองตามตาไปจนตาหยุด) แล้วเดินตั้งฉากไกล ~500 บล็อก อ่าน P2=(x2,z2) yaw2
  2. เวกเตอร์ทิศ d=(-sin(yaw), cos(yaw)) โดย yaw เป็นเรเดียน (เหนือ yaw=180° → (0,-1) ถูกต้อง; ตะวันออก -90° → (+1,0) ถูกต้อง)
  3. cross = d1x·d2z − d1z·d2x; ถ้า |cross| < ~0.02 (เกือบขนาน) → ย้ายจุดโยนแล้วทำใหม่
  4. t1 = ((x2−x1)·d2z − (z2−z1)·d2x) / cross; ผลลัพธ์ S = (x1 + t1·d1x, z1 + t1·d1z)
  5. ตรวจ t1>0 และ t2>0 (เดินไปข้างหน้า) และ |S| อยู่ในช่วงวง (≥1,280); ถ้าไม่ใช่ = อ่านผิด
  6. เดินไป S; โยนซ้ำระหว่างทางเพื่อปรับ; เมื่อตาบินลงดินให้ขุดลง
- สูตร wiki แบบ tan/cot: X=(Z1−Z2−X2·cot A2+X1·cot A1)/(cot A1−cot A2) (W/Tutorial:Locating_a_stronghold) — นิยามมุม A ใน wiki ต่างจาก yaw ต้องแปลงก่อน: [ไม่แน่ใจ]

บอตควร: โยนจากที่โล่ง บันทึก (x,z,yaw) ทุกครั้ง คำนวณด้วยสูตรเวกเตอร์ข้างบน; พก eye ≥ 16; ห้ามใช้ใน Nether/End
ตัดสินผล: (เกณฑ์แล็บ) ผ่าน = ได้จุด S ที่ t1,t2>0 และเดินไปแล้วตาบินลงภายใน ~12 บล็อก; ตาไม่บินเลย = ไม่ใช่ Overworld/ไม่มี stronghold → รายงาน

## smelting-list · สูตรหลอมที่จำเป็น
| อินพุต | ผลลัพธ์ | เตาที่ใช้ได้ | XP ต่อชิ้น | แหล่ง |
|---|---|---|---|---|
| raw iron / iron ore | iron ingot | furnace, blast | 0.7 | W/Smelting, W/Raw_Iron |
| raw copper | copper ingot | furnace, blast | 0.7 | W/Smelting |
| raw gold / nether gold ore | gold ingot | furnace, blast | 1 | W/Smelting |
| coal ore | coal | furnace, blast | 0.1 | W/Smelting |
| diamond ore | diamond | furnace, blast | 1 | W/Smelting |
| redstone ore | redstone | furnace, blast | 0.7 | W/Smelting |
| lapis ore | lapis lazuli | furnace, blast | 0.2 | W/Smelting |
| emerald ore | emerald | furnace, blast | 1 | W/Smelting |
| ancient debris | netherite scrap | furnace, blast | 2 | W/Smelting |
| raw beef/chicken/cod/salmon, potato | steak/cooked/baked potato | furnace, smoker, campfire (campfire ไม่ให้ XP) | 0.35 | W/Steak, W/Smelting |
| sand | glass | furnace | 0.1 | W/Smelting |
| cobblestone | stone | furnace | 0.1 | W/Smelting |
| log | charcoal | furnace | 0.15 | W/Charcoal |
| clay ball | brick | furnace | 0.3 | W/Brick |
| cactus | green dye | furnace | 1 | W/Green_Dye |
| kelp | dried kelp | furnace, smoker, campfire | 0.1 | W/Kelp, W/Dried_Kelp |
- เวลา: furnace 200 tick/ชิ้น; blast furnace และ smoker 100 tick/ชิ้น (ใช้เชื้อเพลิงเร็วกว่า 2 เท่า จำนวนชิ้นต่อเชื้อเพลิงเท่าเดิม) (W/Furnace, W/Blast_Furnace, W/Smoker)
- blast furnace: เฉพาะแร่/โลหะดิบ/ancient debris/เครื่องมือเกราะโลหะ; smoker: เฉพาะอาหาร; ทั้งสองไม่ทำ sand/cobblestone/log/clay/cactus (W/Blast_Furnace, W/Smoker)
- ถ่านหิน/ถ่าน 1 ชิ้น = 80 วินาที = 8 ชิ้น; dried kelp block เป็นเชื้อเพลิง 20 ชิ้น (W/Furnace, W/Dried_Kelp_Block)
- XP สะสมในเตา ได้เมื่อผู้เล่นหยิบผลลัพธ์ด้วยมือผ่าน GUI; hopper ดึงออกไม่ให้ XP แต่ตัวนับเก็บไว้ (W/Smelting)
- XP ของอาหารอื่น (porkchop, mutton, rabbit ฯลฯ), ผล raw iron ผ่าน blast ฯลฯ ที่ไม่อยู่ในตาราง: [ไม่แน่ใจ]

บอตควร: เลือกเตาตามชนิดอินพุต (แร่→blast, อาหาร→smoker, อื่น→furnace); เติมเชื้อเพลิงตามสัดส่วน 1 coal : 8 ชิ้น; หยิบผลลัพธ์ผ่าน GUI ถ้าต้องการ XP
ตัดสินผล: (เกณฑ์แล็บ) ผ่าน = จำนวนผลลัพธ์ = จำนวนอินพุตที่ใส่ภายในเวลา (ชิ้น × 200 หรือ 100 tick); ใส่ผิดเตา = ไม่หลอม → รายงาน

## unverified · ยังไม่ยืนยัน
- ค่าที่ตรวจแล้ว (จาก snippet): view/simulation-distance default 10 (W/Server.properties); lodestone = chiseled stone bricks + iron ingot (1.21.5+) (W/Lodestone); echo shard 1–3 ชิ้น 30.4%/หีบ ancient city (W/Echo_Shard); world border เริ่มต้น 59,999,968 (±29,999,984) (W/World_border); spawn area 21×21 ปรับด้วย respawn_radius, ผู้เล่นเกิดสุ่มใน 20×20 รอบ spawn (W/World_spawn); F3 yaw/ทิศ (W/Debug_screen)
- ค่า server จริงอาจต่างจาก default (เจ้าของเซิร์ฟเวอร์แก้ได้): ต้องอ่านจากเซิร์ฟเวอร์ — [ไม่แน่ใจ]
- จำนวน chiseled stone bricks ในสูตร lodestone ใหม่, ค่า yaw ใน mineflayer: [ไม่แน่ใจ]
- ระยะ stronghold ใกล้สุด: wiki snippet ให้ทั้ง 1,280 (วงแรก 1,280–2,816) และ "ไม่ใกล้กว่า 1,400" → [ไม่แน่ใจ] ใช้ 1,280 แบบระวัง
- XP ต่อชิ้นของอาหารทุกชนิด (mutton, pork, rabbit ฯลฯ) ยืนยันเฉพาะ beef/chicken/cod/salmon/potato = 0.35 → ที่เหลือ [ไม่แน่ใจ]
- ข้อมูลทั้งหมดมาจากสรุปผลค้นหา ไม่ได้เปิดอ่านหน้าเต็ม
