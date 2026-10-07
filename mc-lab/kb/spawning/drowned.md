# ดราวน์และการแปลง

<!-- สร้างอัตโนมัติโดย scripts/split_kb.mjs จาก docs/wiki/spawning.md · ห้ามแก้มือ -->
> W = https://minecraft.wiki/w/ (Mob_spawning, Spawn_limit, Tutorial:Spawn-proofing, Light, Slime, Swamp_Hut, Witch, Nether_Fortress, Ocean_Monument, Pillager_Outpost, Patrol, Phantom, Insomnia, Drowned, Zombie, Spider_Jockey, Chicken_Jockey, Skeleton_Horse, Monster_Spawner, Wandering_Trader, Enderman) · ข้อมูลจากสรุปผลค้นหา ไม่ได้เปิดหน้าเต็ม · ค่าที่ซ้ำกับ kb เดิม (light-levels, moon-slime, phantom, monster-room) ไม่ลงซ้ำ ลงเฉพาะส่วนที่เพิ่ม

| ข้อมูล | ค่า | แหล่ง |
|---|---|---|
| เกิดธรรมชาติ | น้ำ block light 0 และ sky light ≤7 ในมหาสมุทรทุกแบบ, aquifer ของ dripstone caves, และแม่น้ำ; แม่น้ำ/dripstone เกิดบ่อยกว่ามหาสมุทร | W/Drowned |
| ความลึก | Java: น้ำ 2 บล็อกขึ้นไป (flowing/source ได้); มหาสมุทร/dripstone caves Y<58; แม่น้ำไม่จำกัด Y จึงเกิดกลางวันได้ถ้าน้ำลึกพอให้ sky light ≤7 | W/Drowned |
| ซอมบี้เป็น drowned | หัว (ไม่ใช่ขา) จมน้ำต่อเนื่อง 30 วินาที แล้วสั่น 15 วินาที หยุดไม่ได้ | W/Drowned |

บอตควร: ข้ามแม่น้ำลึกตอนกลางวันก็เจอ drowned ได้; ยืนในน้ำกับซอมบี้เกิน 30 วินาทีจะกลายเป็นศัตรูสายน้ำ.
ตัดสินผล: เกณฑ์แล็บ — เจอ drowned ที่น้ำตื้น 1 บล็อก = ผิดกฎวิกิ (ต้อง ≥2 บล็อก) ตรวจที่มาก่อนสรุป.
