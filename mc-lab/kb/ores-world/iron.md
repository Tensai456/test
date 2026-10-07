# เหล็ก (ลำดับความสำคัญสูงสุดของ iron race)

<!-- สร้างอัตโนมัติโดย scripts/split_kb.mjs จาก docs/wiki/ores-world.md · ห้ามแก้มือ -->
> W = https://minecraft.wiki/w/ (Ore_(feature), Iron_Ore, Ore_vein, Tutorial:Mining/Ore_veins, Ancient_Debris, Tutorial:Mining/Ancient_debris, Diamond_Ore, Fortune, Nether_Gold_Ore, Nether_Quartz_Ore, Emerald_Ore, Gold_Ore, World_boundary, The_Nether, The_End, Cave, Lava, Ancient_City, Dripstone_Caves, Lush_Caves) · ข้อมูลจากสรุปผลค้นหา ไม่ได้เปิดหน้าเต็ม · ตาราง Y พื้นฐานต่อแร่มีแล้วที่ kb/progression/ores-y-levels.md — ไฟล์นี้เติมเฉพาะส่วนที่ยังไม่มี

| ข้อมูล | ค่า | แหล่ง |
|---|---|---|
| ชุดบน (mountain) | 90 ครั้ง/chunk, size 9, Y 80..384 แบบสามเหลี่ยม ชุกสุด Y 232 | W/Ore_(feature), W/Iron_Ore |
| ชุดกลาง | 10 ครั้ง/chunk, size 9, Y -24..56 แบบสามเหลี่ยม ชุกสุด Y 16 | W/Ore_(feature) |
| ชุดเล็ก (deep/small) | 10 ครั้ง/chunk, blob 0..5, สม่ำเสมอ Y -64..72 | W/Ore_(feature) |
| ยืนยันซ้ำ (หลักรอบ 2) | 3 ชุดข้างบนตรงกับ W/Iron_Ore: ชุดบน 90 ครั้ง/chunk Y 80..384 ชุกสุด 232 · ชุดกลาง 10 ครั้ง Y -24..56 ชุกสุด 16 · ชุดเล็ก 10 ครั้ง blob 0..5 Y -64..72 — ตัวเลขอื่น (112..384, peak 18) ถือว่าเก่า | W/Iron_Ore |
| ⚠ สำคัญต่อ iron race | ชุดบนพยายามเกิด **9 เท่า** ของชุดกลาง (90 vs 10 ครั้ง/chunk) → ภูเขาสูง (Y >80) = แหล่งเหล็กผิวดินหนาแน่นที่สุด | W/Iron_Ore (การเทียบ 9 เท่า = คำนวณจากตัวเลขวิกิ) |
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
