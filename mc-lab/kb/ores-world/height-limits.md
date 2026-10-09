# ขีดจำกัดความสูงโลก

<!-- สร้างอัตโนมัติโดย scripts/split_kb.mjs จาก docs/wiki/ores-world.md · ห้ามแก้มือ -->
> W = https://minecraft.wiki/w/ (Ore_(feature), Iron_Ore, Ore_vein, Tutorial:Mining/Ore_veins, Ancient_Debris, Tutorial:Mining/Ancient_debris, Diamond_Ore, Fortune, Nether_Gold_Ore, Nether_Quartz_Ore, Emerald_Ore, Gold_Ore, World_boundary, The_Nether, The_End, Cave, Lava, Ancient_City, Dripstone_Caves, Lush_Caves) · ข้อมูลจากสรุปผลค้นหา ไม่ได้เปิดหน้าเต็ม · ตาราง Y พื้นฐานต่อแร่มีแล้วที่ kb/progression/ores-y-levels.md — ไฟล์นี้เติมเฉพาะส่วนที่ยังไม่มี

| มิติ | ค่า | แหล่ง |
|---|---|---|
| Overworld | build ต่ำสุด Y -64, สูงสุด Y 320 (สูง 384 บล็อก) | W/World_boundary |
| Nether | build ต่ำสุด Y 0, สูงสุด Y 256 (Java) แต่พื้นที่เล่นจริง 128 บล็อก | W/World_boundary, W/The_Nether |
| Nether bedrock | พื้น Y 0 ชั้นเต็ม; เพดานหยาบ 5 ชั้น Y 123..127 (ชั้นเต็ม Y 127); ถ้าขึ้นไปบนเพดานได้ สร้างต่อได้อีก 128 บล็อก | W/The_Nether, W/Nether_roof |
| The End | build Y 0 ถึง 256 | W/The_End, W/Dimension_type |

บอตควร: ในนรกอย่าพยายามขุดทะลุ Y>=123 (เป็น bedrock ขุดไม่ได้); ตั้ง min/max Y ของ pathfinder ตามมิติ ไม่ใช่ค่าคงที่ -64..320.
ตัดสินผล: เกณฑ์แล็บ — ถ้า bot.entity.position.y อยู่นอกช่วง build ของมิติ = ผิดปกติ ต้อง abort.
