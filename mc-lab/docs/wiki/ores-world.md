# แร่และโลก (Ores & World) — Java Edition vanilla
> W = https://minecraft.wiki/w/ (Ore_(feature), Iron_Ore, Ore_vein, Tutorial:Mining/Ore_veins, Ancient_Debris, Tutorial:Mining/Ancient_debris, Diamond_Ore, Fortune, Nether_Gold_Ore, Nether_Quartz_Ore, Emerald_Ore, Gold_Ore, World_boundary, The_Nether, The_End, Cave, Lava, Ancient_City, Dripstone_Caves, Lush_Caves) · ข้อมูลจากสรุปผลค้นหา ไม่ได้เปิดหน้าเต็ม · ตาราง Y พื้นฐานต่อแร่มีแล้วที่ kb/progression/ores-y-levels.md — ไฟล์นี้เติมเฉพาะส่วนที่ยังไม่มี

## height-limits · ขีดจำกัดความสูงโลก
| มิติ | ค่า | แหล่ง |
|---|---|---|
| Overworld | build ต่ำสุด Y -64, สูงสุด Y 320 (สูง 384 บล็อก) | W/World_boundary |
| Nether | build ต่ำสุด Y 0, สูงสุด Y 256 (Java) แต่พื้นที่เล่นจริง 128 บล็อก | W/World_boundary, W/The_Nether |
| Nether bedrock | พื้น Y 0 ชั้นเต็ม; เพดานหยาบ 5 ชั้น Y 123..127 (ชั้นเต็ม Y 127); ถ้าขึ้นไปบนเพดานได้ สร้างต่อได้อีก 128 บล็อก | W/The_Nether, W/Nether_roof |
| The End | build Y 0 ถึง 256 | W/The_End, W/Dimension_type |

บอตควร: ในนรกอย่าพยายามขุดทะลุ Y>=123 (เป็น bedrock ขุดไม่ได้); ตั้ง min/max Y ของ pathfinder ตามมิติ ไม่ใช่ค่าคงที่ -64..320.
ตัดสินผล: เกณฑ์แล็บ — ถ้า bot.entity.position.y อยู่นอกช่วง build ของมิติ = ผิดปกติ ต้อง abort.

## iron · เหล็ก (ลำดับความสำคัญสูงสุดของ iron race)
| ข้อมูล | ค่า | แหล่ง |
|---|---|---|
| ชุดบน (mountain) | 90 ครั้ง/chunk, size 9, Y 80..384 แบบสามเหลี่ยม ชุกสุด Y 232 | W/Ore_(feature), W/Iron_Ore |
| ชุดกลาง | 10 ครั้ง/chunk, size 9, Y -24..56 แบบสามเหลี่ยม ชุกสุด Y 16 | W/Ore_(feature) |
| ชุดเล็ก (deep/small) | 10 ครั้ง/chunk, blob 0..5, สม่ำเสมอ Y -64..72 | W/Ore_(feature) |
| ยืนยันซ้ำ (หลักรอบ 2) | 3 ชุดข้างบนตรงกับ W/Iron_Ore: ชุดบน 90 ครั้ง/chunk Y 80..384 ชุกสุด 232 · ชุดกลาง 10 ครั้ง Y -24..56 ชุกสุด 16 · ชุดเล็ก 10 ครั้ง blob 0..5 Y -64..72 — ตัวเลขอื่น (112..384, peak 18) ถือว่าเก่า | W/Iron_Ore |
| ⚠ สำคัญต่อ iron race | ชุดบนพยายามเกิด 9 เท่าของชุดกลาง (90 vs 10 ครั้ง/chunk) **แต่กระจายในช่วงสูง 304 บล็อก (ชุดกลาง 80)** → ความหนาแน่นต่อชั้นที่ Y232 ≈ ×2.1 ของ Y16 · Y200 ≈ ×1.7 · Y160 ≈ ×1.1 (คำนวณ `ironDensity()` ใน lib/economy/iron_race.mjs) | W/Iron_Ore (ตัวคูณ = คำนวณจากตัวเลขวิกิ + ASSUME blob เฉลี่ย) |
| Large iron vein | Y -60..-8, ใหญ่สุด Y -40..-28, มี iron ore + raw iron block + tuff เป็น filler; เส้นเลื้อยแตกกิ่งแบบ spaghetti cave; ขนาดไม่จำกัด บางเส้นเกิน 2,000 บล็อกแร่ | W/Ore_vein, W/Tutorial:Mining/Ore_veins |
| Large copper vein | Y 0..50, หนาสุด Y 20..30, copper ore + raw copper (raw copper block แทน ore 2% เหนือ Y 0), filler granite | W/Ore_vein |
| ขุด | hardness 3, ต้อง stone pickaxe ขึ้นไป; ดรอป raw iron 1; Fortune I/II/III = สูงสุด 2/3/4 (ค่าเฉลี่ย ×1.33/×1.75/×2.2); Silk Touch ได้ ore (ไม่ใช้คู่ Fortune) | W/Iron_Ore, W/Fortune |
| กลยุทธ์ branch mining | ขุดลงลึกใกล้ก้น แนะนำ Y -54 (จัดการทะเลสาบลาวาง่ายกว่า); tiered branch mining = ซ้อนอุโมงค์หลายชั้น | W/Tutorial:Mining |

เปรียบเทียบกลยุทธ์ (การจัดอันดับเป็นข้อสรุปของแล็บ ไม่ใช่ตัวเลขจากวิกิ):
| วิธี | จุดแข็ง | จุดอ่อน |
|---|---|---|
| เก็บแร่ที่เห็นในถ้ำ/หน้าผาที่ Y≈16 (ชุดกลาง) | ไม่ต้องขุด เร็วถ้าพบถ้ำ | แปรผันตามถ้ำ; แร่ blob size 9 |
| ภูเขา Y≈232 (ชุดบน) | แร่ชุกบนยอดเขาที่ผิวเปิด | ต้องมีภูเขา/ระยะเดินทาง |
| Large iron vein Y -40..-28 | ปริมาณมหาศาลต่อเส้น (raw iron block = 9 raw iron) [คิดเอง: 9 มาตรฐานของ storage block ไม่ได้ยืนยันใน snippet] | หาเส้นยาก ใต้ deepslate, ใกล้ลาวา Y<-54 |
| strip mine Y≈16 เว้นกิ่ง 6 | คาดเดาได้ | ช้ากว่าถ้าเจอถ้ำ/เส้นแร่ |

บอตควร: ถ้าพบ tuff ก้อนใหญ่ใน deepslate Y -60..-8 ที่มี raw iron block ให้ขุดตามเส้น (ปลอดภัยกว่าเมื่อเหนือ Y -54); ในภูเขาให้สแกนแร่บนผิว; ถ้าไม่เจอ ให้ strip ที่ Y≈16.
ตัดสินผล: เกณฑ์แล็บ — iron race วัดเป็น raw iron/นาที; เปลี่ยนวิธีถ้า 10 นาทีไม่เพิ่ม (ตรงกับเกณฑ์ใน kb/progression/ores-y-levels.md).

## ore-sizes · ขนาด blob และจำนวนครั้งต่อ chunk
| แร่ | ค่า | แหล่ง |
|---|---|---|
| coal | size 17; 20 ครั้ง Y 0..192 สามเหลี่ยม; 30 ครั้ง Y 136..320 สม่ำเสมอ | W/Ore_(feature) |
| copper | size 10 (หรือ 20 ใน dripstone caves [ไม่แน่ใจ]); 16 ครั้ง Y -16..112 สามเหลี่ยม | W/Ore_(feature) |
| gold | size 9; 4 ครั้ง Y -64..32 + ชุดสุ่ม 1/2 ต่อ chunk; badlands เพิ่ม 50 ครั้ง blob 0..13 Y 32..256 สม่ำเสมอ | W/Ore_(feature), W/Gold_Ore |
| redstone | size 8; 4 ครั้ง Y -64..15 สม่ำเสมอ + 8 ครั้ง Y -63..-32 สามเหลี่ยม | W/Ore_(feature) |
| lapis | size 7; 2 ครั้ง Y -32..32 สามเหลี่ยม + 4 ครั้ง Y -64..64 สม่ำเสมอ | W/Ore_(feature) |
| diamond | ขนาด 4, 8, 12 (ครั้ง 7, 4, 1/9, 2); Y -64..16; peak -58/-59; blob ใหญ่ 1..23 ราว 1 ต่อ 9 chunk Y 16..-63 | W/Ore_(feature), W/Diamond_Ore |
| emerald | 100 ครั้ง/chunk blob 0..3; Y -16..320 peak 232 ตามทฤษฎี แต่จริงมากสุดราว Y 85-90 (ไม่มีภูมิประเทศสูง); เฉพาะ mountains/windswept | W/Emerald_Ore |
| nether gold | 10 ครั้ง/chunk blob 0..16 Y 10..117 (basalt deltas 20 ครั้ง) | W/Nether_Gold_Ore |
| nether quartz | 16 ครั้ง/chunk blob 0..24 Y 10..117 (basalt deltas 32 ครั้ง); ทั้งคู่ชุกสุด Y 114 | W/Nether_Quartz_Ore |

บอตควร: diamond blob เล็ก (4) ถ้าเจอก้อนเดียวให้เดินรอบเก็บบล็อกข้างเคียงด้วย; emerald ให้หาเฉพาะ biome ภูเขา/windswept, เป็นบล็อกเดี่ยวหรือน้อยมาก.
ตัดสินผล: เกณฑ์แล็บ — ถ้า biome ไม่ใช่ mountains/windswept ไม่ต้องสแกน emerald.

## air-exposure · การทิ้งแร่เมื่อติดอากาศ
| ข้อมูล | ค่า | แหล่ง |
|---|---|---|
| กลไก | discard_chance_on_air_exposure (0..1) = โอกาสที่ blob ทั้งก้อนถูกทิ้ง ถ้าบล็อกใดติดอากาศ (น้ำไม่นับ) | W/Ore_(feature) |
| diamond | blob ใหญ่ 1/9 chunk มี 70% ที่บล็อกติดอากาศจะไม่เกิด [ไม่แน่ใจ ว่าใช้กับ blob ชนิดไหนทั้งหมด] | W/Ore_(feature) |
| ancient debris | ไม่เคยเปิดรับอากาศตามธรรมชาติ (scatter ore); size 3 | W/Ancient_Debris |

บอตควร: เพชร/debris ที่ "ลอยโล่ง" ในถ้ำเจอน้อยกว่า ควรขุดเข้าไปในหิน (strip mine) ไม่ใช่เดินสำรวจถ้ำอย่างเดียว; ใช้ขุดเปิดแล้วมองหา.
ตัดสินผล: เกณฑ์แล็บ — สำหรับ diamond/debris ให้นับเฉพาะที่เห็นหลังขุดเปิด ไม่เชื่อว่าไม่มีเพราะถ้ำว่าง.

## ancient-debris · Ancient Debris
| ข้อมูล | ค่า | แหล่ง |
|---|---|---|
| ชุด 1 | 0..3 บล็อก สามเหลี่ยม Y 8..24 | W/Ancient_Debris |
| ชุด 2 | 0..2 บล็อก สม่ำเสมอ Y 8..119 | W/Ancient_Debris |
| Y ที่ดี | bed method ขุดที่ Y 15 (เปิดบล็อกได้เห็นมากสุด); เฉลี่ยต่อ chunk มากสุด Y 16 | W/Tutorial:Mining/Ancient_debris |
| blast resistance | 1200 (TNT/เตียงทำลายไม่ได้ ทำลาย netherrack รอบ ๆ ให้เห็น) | W/Ancient_Debris, W/Explosion |
| TNT method | อุโมงค์ที่ Y≈15 วาง TNT ทุก 5 บล็อก | W/Tutorial:Mining/Ancient_debris |
| ข้อควรระวัง | เจอแล้วให้เดินรอบทุกด้าน (เส้นกระจาย) | W/Tutorial:Mining/Ancient_debris |

บอตควร: ขุดเฉพาะ Y 15..16 พร้อมน้ำ/บล็อกกันลาวา; นรกทะเลลาวา (ดูหัวข้อ nether-lava).
ตัดสินผล: เกณฑ์แล็บ — ต้องมี pickaxe ระดับ diamond [ไม่แน่ใจ ใน snippet นี้ ปกติ diamond+] และอาหาร/ยาต้านไฟก่อนลง.

## fortune · ตัวคูณ Fortune
| แร่ | Fortune I / II / III | แหล่ง |
|---|---|---|
| โครงสร้างทั่วไป (coal, diamond, copper, gold, nether gold, lapis, iron) | I = 33% ×2; II = 25% ×2 หรือ ×3; III = 20% ×2, ×3, ×4; เฉลี่ย ×1.33 / ×1.75 / ×2.2 | W/Fortune |
| coal / diamond | ไม่มี Fortune 1; สูงสุด 4 | W/Coal_Ore, W/Diamond_Ore |
| copper | ปกติ 2-5 (เฉลี่ย 3.5); Fortune III เฉลี่ย 7.7 สูงสุด 20 | W/Fortune |
| lapis | ปกติ 4-9 (เฉลี่ย 6.5); Fortune III เฉลี่ย 14.3 สูงสุด 36 | W/Fortune |
| redstone | 4-6 / 4-7 / 4-8 (Fortune III เฉลี่ย 6) | W/Redstone_Ore |
| nether gold | nugget Fortune III สูงสุด 24 | W/Nether_Gold_Ore |
| nether quartz | +1 ต่อระดับ สูงสุด 4 เฉลี่ย 2.2 ที่ Fortune III | W/Nether_Quartz_Ore |
| iron | raw iron 1-2 / 1-3 / 1-4 | W/Iron_Ore |
| Silk Touch | ใช้คู่ Fortune ไม่ได้ | W/Iron_Ore |

บอตควร: ถ้ามี pickaxe Fortune ใช้กับ diamond/lapis/copper/redstone แต่เก็บ Silk Touch เมื่อต้องการ ore block.
ตัดสินผล: เกณฑ์แล็บ — วัดผลเป็นจำนวนไอเท็ม/นาที ไม่ใช่จำนวนบล็อก.

## caves-aquifers · ถ้ำและ aquifer
| ข้อมูล | ค่า | แหล่ง |
|---|---|---|
| noise caves | cheese (ห้องโพรงใหญ่สุด), spaghetti (ยาวแคบคดเคี้ยว), noodle (บางกว่า กว้าง 1..5 บล็อก) | W/Cave |
| aquifer | ตัดสินว่าเติมอะไรในบล็อกโล่ง: น้ำ/ลาวา/อากาศ/หินคั่นระหว่างของเหลว; สร้างทะเลสาบใต้ดิน, ลาวา Y ต่ำกว่า -10, น้ำตก/ลาวาตก | W/Cave |
| ลาวาพื้นล่าง | ต่ำกว่า Y -54 มีลาวา (ผิวลาวา Y -54) เสมอ ไม่ขึ้นกับ aquifer | W/Cave |
| lava lakes | เกิดใต้ดิน มีช่องอากาศ | W/Cave |
| dripstone / lush | เกิดได้ใต้ Y 0 ถึง -64; dripstone ที่ความต่อเนื่องสูง (ลึกในแผ่นดิน), lush ที่ความชื้นสูง | W/Dripstone_Caves, W/Lush_Caves |
| deep dark | ใน deepslate ใต้ Y 0 ในพื้นที่ erosion ต่ำ; Ancient City พื้นเมือง Y -51 สูงราว 20 บล็อก | W/Ancient_City, W/Deep_Dark |

บอตควร: ระวังตกลงห้อง cheese ที่มีลาวา; ขุดที่ Y>-54 เพื่อไม่เจอทะเลลาวาพื้นล่าง; ห้ามขุดทะลุ Y -54 โดยไม่มีน้ำ/บล็อกกั้น; เลี่ยง deep dark ถ้าไม่ต้องการ warden.
ตัดสินผล: เกณฑ์แล็บ — ลาวาในรัศมี 2 บล็อกของแร่ = ปิดก่อนขุด (ตรงกับ kb/progression).

## nether-lava · ทะเลลาวาในนรก
| ข้อมูล | ค่า | แหล่ง |
|---|---|---|
| ระดับลาวา | ทะเลลาวา Y 31 และต่ำกว่า ในทุก biome นรก | W/Lava, W/The_Nether |
| ลาวาแอ่งลึก | มีก้อนลาวาใต้ Y 19 ลงไปถึง bedrock | W/Lava |
| การไหลในนรก | กระจายไกลกว่า (7 บล็อก, 1 บล็อกต่อ 10 tick) | W/Lava |
| nether gold/quartz | Y 10..117 ชุกสุด Y 114 ซึ่งสูงกว่าทะเลลาวา | W/Nether_Gold_Ore |

บอตควร: ขุด ancient debris ที่ Y 15 อยู่ใต้ระดับทะเลลาวา Y 31 ระวังทะลุถึงลาวา; วางบล็อกกันทุกครั้ง; หา quartz/gold ที่ Y สูงปลอดภัยกว่า.
ตัดสินผล: เกณฑ์แล็บ — มี fire resistance หรือบล็อกกันลาวา ≥ 32 ก่อนลงระดับ Y<32.

## unverified · ยังไม่ยืนยัน
- (แก้แล้ว) ตัวเลขชุดเหล็ก — ยืนยันซ้ำจาก W/Iron_Ore ดูตาราง iron
- copper size 10 vs 20 (dripstone caves) และเงื่อนไข 70% ของ diamond air exposure [ไม่แน่ใจ]
- discard_chance ของ coal/iron/gold/อื่นๆ ไม่ได้ในสรุป; pickaxe ขั้นต่ำของ ancient debris ไม่ได้ในสรุป
- Y ของ lush/dripstone เฉพาะ (ไม่ใช่ Y -64..0 ทั้งหมด) และ Y ชุดแน่นอนของ deep dark [ไม่แน่ใจ]
- ตัวเลขบล็อก raw iron = 9 ต่อบล็อก ไม่ได้ยืนยัน; blast resistance ของแร่อื่นไม่ได้ค้น
- ตัวเลขจากสรุปผลค้นหา ไม่ได้อ่านหน้าเต็ม ควรตรวจซ้ำ
