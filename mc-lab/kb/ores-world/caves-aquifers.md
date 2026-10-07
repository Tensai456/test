# ถ้ำและ aquifer

<!-- สร้างอัตโนมัติโดย scripts/split_kb.mjs จาก docs/wiki/ores-world.md · ห้ามแก้มือ -->
> W = https://minecraft.wiki/w/ (Ore_(feature), Iron_Ore, Ore_vein, Tutorial:Mining/Ore_veins, Ancient_Debris, Tutorial:Mining/Ancient_debris, Diamond_Ore, Fortune, Nether_Gold_Ore, Nether_Quartz_Ore, Emerald_Ore, Gold_Ore, World_boundary, The_Nether, The_End, Cave, Lava, Ancient_City, Dripstone_Caves, Lush_Caves) · ข้อมูลจากสรุปผลค้นหา ไม่ได้เปิดหน้าเต็ม · ตาราง Y พื้นฐานต่อแร่มีแล้วที่ kb/progression/ores-y-levels.md — ไฟล์นี้เติมเฉพาะส่วนที่ยังไม่มี

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
