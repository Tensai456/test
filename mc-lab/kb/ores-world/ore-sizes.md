# ขนาด blob และจำนวนครั้งต่อ chunk

<!-- สร้างอัตโนมัติโดย scripts/split_kb.mjs จาก docs/wiki/ores-world.md · ห้ามแก้มือ -->
> W = https://minecraft.wiki/w/ (Ore_(feature), Iron_Ore, Ore_vein, Tutorial:Mining/Ore_veins, Ancient_Debris, Tutorial:Mining/Ancient_debris, Diamond_Ore, Fortune, Nether_Gold_Ore, Nether_Quartz_Ore, Emerald_Ore, Gold_Ore, World_boundary, The_Nether, The_End, Cave, Lava, Ancient_City, Dripstone_Caves, Lush_Caves) · ข้อมูลจากสรุปผลค้นหา ไม่ได้เปิดหน้าเต็ม · ตาราง Y พื้นฐานต่อแร่มีแล้วที่ kb/progression/ores-y-levels.md — ไฟล์นี้เติมเฉพาะส่วนที่ยังไม่มี

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
