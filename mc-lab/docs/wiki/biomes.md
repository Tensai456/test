# ไบโอมโอเวอร์เวิลด์และเนเธอร์ (Java vanilla) สำหรับบอตแล็บ
> W = https://minecraft.wiki/w/ · ข้อมูลจาก snippet ค้นหาเท่านั้น (โควต้าค้นหาหมดกลางทาง) · ช่องที่ไม่มีแหล่ง = [ไม่แน่ใจ] · คะแนนบ้าน 1-5 เป็นดุลยพินิจแล็บ ไม่ใช่ตัวเลขวิกิ

## plains-forest · ที่ราบ/ป่า (plains, forest, birch, dark forest)
| หัวข้อ | ข้อมูล |
|---|---|
| ไม้ | [ไม่แน่ใจ] ชนิดไม้ต่อไบโอม (ไม่ได้ค้นหน้า Plains/Forest) |
| อาหาร | [ไม่แน่ใจ] |
| มอบพิเศษ | Pale Garden เป็นตัวแปรหายากของ dark forest (W/Pale_Garden) |
| ภัย | [ไม่แน่ใจ] |
| บ้าน | 4/5 [ไม่แน่ใจ ไม่มีแหล่ง] ดุลยพินิจ: พื้นเรียบ ไม้/สัตว์หาง่าย |

บอตควร: ใช้เป็นฐานเริ่มต้น แต่ตรวจหน้า W/Plains, W/Forest ก่อนฮาร์ดโค้ดค่า
ตัดสินผล: เกณฑ์แล็บ ผ่านเมื่อบอตระบุไบโอมได้ถูกจาก F3/ข้อมูลเกม (ไม่ใช่ตัวเลขวิกิ)

## taiga-snowy · ไทกา/หิมะ (snowy taiga, grove, snowy slopes)
| ไบโอม | temp | หมายเหตุ | แหล่ง |
|---|---|---|---|
| Snowy Taiga | -0.5 | ป่าสนสปรูซปกคลุมหิมะ | W/Snowy_Taiga |
| Grove | -0.2 | ป่าสปรูซ พื้นหิมะ มี powder snow เป็นหย่อม | W/Grove |
| Snowy Slopes | -0.3 | หิมะหลายชั้น แถบ powder snow | W/Snowy_Slopes |
- powder snow เกิดตามธรรมชาติเฉพาะ grove, snowy slopes และห้อง trial chamber (W/Tutorial:Powder_snow_farming)
- หิมะตกคลุมบล็อกตามอุณหภูมิ ขึ้นกับความสูง (W/Snow)
- bogged โดน powder snow แล้วเสียหาย (W/Bogged); stray/ไม้/อาหารไบโอมนี้ [ไม่แน่ใจ]
- บ้าน 3/5 ดุลยพินิจ: ไม้สปรูซมี แต่ powder snow ติดกับดักได้ [ไม่แน่ใจ ไม่มีแหล่ง]

บอตควร: เลี่ยงเดินบน powder snow ถ้าไม่มีรองเท้าหนัง [ไม่แน่ใจ ต้องยืนยัน]; ดูหน้า W/Tutorial:Snowy_biome_survival
ตัดสินผล: เกณฑ์แล็บ ผ่านเมื่อบอตไม่ตกใน powder snow ในการทดสอบ

## desert-badlands · ทะเลทราย/เมซา
| ไบโอม | temp | ของพิเศษ | แหล่ง |
|---|---|---|---|
| Desert | 2.0 ไม่มีฝน | หมู่บ้าน ปิรามิด บ่อน้ำ ด่านพิลเลเจอร์ | W/Desert |
| Badlands | 2.0 | ทอง extra 50 ครั้ง/chunk blob 0-13 บล็อก Y 32-256; terracotta; เหมืองไม้ dark oak | W/Badlands |
- Husk เกิดเป็นกลุ่ม 4 weight 80/515 (Java); กระต่ายกลุ่ม 2-3 weight 12/13 (W/Desert)
- ไม้: ทะเลทรายแทบไม่มี [ไม่แน่ใจ ไม่มีแหล่ง]; อาหาร: กระต่าย
- บ้าน 2/5 ดุลยพินิจ (Desert), Badlands 3/5 ดุลยพินิจ (ทองเยอะ แต่ไม้น้อย [ไม่แน่ใจ])

บอตควร: พกไม้/อาหารเข้า, ระวัง husk กลางวัน (ไม่ไหม้แดด [ไม่แน่ใจ])
ตัดสินผล: เกณฑ์แล็บ ผ่านเมื่อบอตรอดข้ามคืนในทะเลทรายโดยไม่ตาย

## jungle · จังเกิล
ข้อมูลไม่ได้ค้น (โควต้าหมด): ไม้ jungle, โกโก้, แตงโม, นกแก้ว, แมวป่า, แพนด้า, bamboo = [ไม่แน่ใจ] ทั้งหมด
- บ้าน [ไม่แน่ใจ]

บอตควร: ตรวจ W/Jungle ก่อนใช้งาน
ตัดสินผล: เกณฑ์แล็บ ยังตัดสินไม่ได้

## savanna · ซาวันนา
ข้อมูลไม่ได้ค้น: ไม้อะเคเชีย, ม้า/ลา/ลามะ, อาร์มาดิลโล, อุณหภูมิ = [ไม่แน่ใจ]
- บ้าน [ไม่แน่ใจ]

บอตควร: ตรวจ W/Savanna
ตัดสินผล: เกณฑ์แล็บ ยังตัดสินไม่ได้

## swamp-mangrove · หนองน้ำ/โกงกาง
| หัวข้อ | ข้อมูล | แหล่ง |
|---|---|---|
| Mangrove swamp | มี slime, frog, bogged เกิด; พื้นโคลน; ต้นโกงกางบางต้นมีรังผึ้ง | W/Mangrove_Swamp |
| Frog | เกิดกลุ่ม 2-5 ใน swamp/mangrove | W/Mangrove_Swamp |
| Bogged | เกิดทดแทนโครงกระดูก ~30%; Java กลุ่ม 4 ที่ light 0; ยิงลูกศรพิษ | W/Bogged |
| Drowned | ไม่เกินใน swamp ตั้งแต่ Java 1.14 | W/Bogged |
| Propagule | วางได้บนดิน/ตะไคร่/โคลน/ดินเหนียว | W/Mangrove_Propagule |
- slime ใน swamp เงื่อนไขพระจันทร์/witch hut [ไม่แน่ใจ ไม่ได้ค้น]
- บ้าน 2/5 ดุลยพินิจ (bogged พิษ, พื้นโคลน)

บอตควร: พกนมแก้พิษ [ไม่แน่ใจ]; สวมเกราะก่อนเข้า
ตัดสินผล: เกณฑ์แล็บ ผ่านเมื่อบอตสู้ bogged ได้โดยไม่ตาย

## mountains-peaks · ภูเขา/ยอดเขา/ทุ่งหญ้าบนเขา
| ไบโอม | temp | แหล่ง |
|---|---|---|
| Frozen Peaks | -0.7 หิมะ น้ำแข็งอัด | W/Frozen_Peaks |
| Snowy Slopes | -0.3 | W/Snowy_Slopes |
| Grove | -0.2 | W/Grove |
- meadow, jagged/stony peaks, ไม้/อาหาร = [ไม่แน่ใจ]
- บ้าน 2/5 ดุลยพินิจ (ลาดชัน ตกจากที่สูง [ไม่แน่ใจ ไม่มีแหล่ง])

บอตควร: ระวังตกหน้าผาและ powder snow
ตัดสินผล: เกณฑ์แล็บ ผ่านเมื่อบอตไต่ลงจากยอดไม่ตาย

## water-shore · มหาสมุทร/แม่น้ำ/ชายหาด
ไม่ได้ค้น: drowned, ปลา, ทรัพยากร = [ไม่แน่ใจ]
- Mushroom Field Shore มีหน้าแยก (W/Mushroom_Field_Shore)

บอตควร: [ไม่แน่ใจ]
ตัดสินผล: เกณฑ์แล็บ ยังตัดสินไม่ได้

## mushroom-fields · ทุ่งเห็ด
- มีไมซีเลียมและ mooshroom ที่นี่ที่เดียว; ไม่มีม็อบศัตรูเกิดตามปกติ (W/Mushroom_Fields)
- เกิดเฉพาะ red mooshroom, ค้างคาว, glow squid (รวมใต้ดิน) (W/Mushroom_Fields)
- mooshroom เกิดฝูง 4-8 บนไมซีเลียม (W/Mushroom_Fields)
- พื้นที่ ~0.14% ของโอเวอร์เวิลด์ หายากอันดับ 3 (W/Mushroom_Fields)
- ข้อจำกัด: ทรัพยากรน้อย เกาะโดดเดี่ยวรอบมหาสมุทรลึก; ไม้ [ไม่แน่ใจ]
- บ้าน 4/5 ดุลยพินิจ (ปลอดภัยแต่ทรัพยากรน้อย) · ดู W/Tutorial:Best_biomes_for_homes

บอตควร: ใช้เป็นที่พักปลอดภัย หาอาหารจาก mooshroom; ต้องนำไม้/เครื่องมือเข้าเอง
ตัดสินผล: เกณฑ์แล็บ ผ่านเมื่อไม่พบม็อบศัตรูตลอด N คืน (N ให้แล็บกำหนด)

## caves-special · ถ้ำ (dripstone/lush/deep dark), cherry grove, pale garden
| ไบโอม | ข้อมูล | แหล่ง |
|---|---|---|
| Pale Garden | dark forest ตัวแปรหายาก; ต้น pale oak ลำต้น 2x2, moss ซีด, eyeblossom | W/Pale_Garden, W/Pale_Oak |
| Creaking heart | 10% ในลำต้นบนของ pale oak; กลางคืนเกิด creaking | W/Creaking_Heart |
| Creaking | หยุดนิ่งถ้ามองมัน (มุม <60 องศา); ถ้าไม่มอง ไล่ด้วยความเร็วใกล้วิ่ง; ตายเมื่อทำลาย heart | W/Pale_Oak |
- dripstone, lush (axolotl, glow berries), deep dark (warden), cherry grove = [ไม่แน่ใจ] ไม่ได้ค้น
- บ้าน Pale Garden 1/5 ดุลยพินิจ (creaking กลางคืน)

บอตควร: ในพาเลการ์เดน อย่าหันหลังให้ creaking; ทำลาย heart แทนฆ่า
ตัดสินผล: เกณฑ์แล็บ ผ่านเมื่อบอตอยู่ในพาเลการ์เดนข้ามคืนโดยไม่ถูกโจมตี

## nether · เนเธอร์
| ไบโอม | สัดส่วน | ลักษณะ | แหล่ง |
|---|---|---|---|
| Nether Wastes | 36.30% | เนเธอร์แร็กเป็นหลัก มีควอตซ์ ทองเนเธอร์ blackstone | W/Nether_Wastes |
| Crimson Forest | 22.22% | เห็ดยักษ์ crimson, weeping vines, shroomlight | W/Crimson_Forest |
| Soul Sand Valley | 17.08% | ซอลแซนด์ ซอลซอยล์ บะซอลต์ ฟอสซิล ลาวามาก | W/The_Nether |
| Basalt Deltas | 15.86% | บะซอลต์ blackstone ลาวา | W/The_Nether |
| Warped Forest | 8.54% หายากสุด | เห็ดยักษ์ warped, shroomlight | W/Warped_Forest |
- ม็อบ/อาหาร/ไม้ (crimson/warped stem) รายไบโอม = [ไม่แน่ใจ]
- บ้าน 1/5 ดุลยพินิจ (นอนเตียงระเบิด [ไม่แน่ใจ])

บอตควร: ไม่ตั้งฐานถาวร; ระวังลาวา
ตัดสินผล: เกณฑ์แล็บ ผ่านเมื่อบอตกลับพอร์ทัลได้โดยไม่ตกลาวา

## unverified · ยังไม่ยืนยัน
- โควต้า WebSearch หมดก่อนค้น: jungle, savanna, swamp (slime/witch), cherry grove, deep dark, lush, dripstone, oceans/rivers/beaches, meadow, plains/forest รายละเอียด, ม็อบเนเธอร์
- คะแนนบ้าน 1-5 ทุกกลุ่มเป็นดุลยพินิจ ไม่ใช่ข้อมูลวิกิ (ยกเว้นข้อเท็จจริงที่อ้างแหล่ง)
- ไม้/อาหาร/stray/powder-snow-rules รายไบโอมส่วนใหญ่ = [ไม่แน่ใจ]
- ตัวเลขทั้งหมดมาจาก snippet ไม่ได้เปิดหน้าเต็ม
