# การทิ้งแร่เมื่อติดอากาศ

<!-- สร้างอัตโนมัติโดย scripts/split_kb.mjs จาก docs/wiki/ores-world.md · ห้ามแก้มือ -->
> W = https://minecraft.wiki/w/ (Ore_(feature), Iron_Ore, Ore_vein, Tutorial:Mining/Ore_veins, Ancient_Debris, Tutorial:Mining/Ancient_debris, Diamond_Ore, Fortune, Nether_Gold_Ore, Nether_Quartz_Ore, Emerald_Ore, Gold_Ore, World_boundary, The_Nether, The_End, Cave, Lava, Ancient_City, Dripstone_Caves, Lush_Caves) · ข้อมูลจากสรุปผลค้นหา ไม่ได้เปิดหน้าเต็ม · ตาราง Y พื้นฐานต่อแร่มีแล้วที่ kb/progression/ores-y-levels.md — ไฟล์นี้เติมเฉพาะส่วนที่ยังไม่มี

| ข้อมูล | ค่า | แหล่ง |
|---|---|---|
| กลไก | discard_chance_on_air_exposure (0..1) = โอกาสที่ blob ทั้งก้อนถูกทิ้ง ถ้าบล็อกใดติดอากาศ (น้ำไม่นับ) | W/Ore_(feature) |
| diamond | blob ใหญ่ 1/9 chunk มี 70% ที่บล็อกติดอากาศจะไม่เกิด [ไม่แน่ใจ ว่าใช้กับ blob ชนิดไหนทั้งหมด] | W/Ore_(feature) |
| ancient debris | ไม่เคยเปิดรับอากาศตามธรรมชาติ (scatter ore); size 3 | W/Ancient_Debris |

บอตควร: เพชร/debris ที่ "ลอยโล่ง" ในถ้ำเจอน้อยกว่า ควรขุดเข้าไปในหิน (strip mine) ไม่ใช่เดินสำรวจถ้ำอย่างเดียว; ใช้ขุดเปิดแล้วมองหา.
ตัดสินผล: เกณฑ์แล็บ — สำหรับ diamond/debris ให้นับเฉพาะที่เห็นหลังขุดเปิด ไม่เชื่อว่าไม่มีเพราะถ้ำว่าง.
