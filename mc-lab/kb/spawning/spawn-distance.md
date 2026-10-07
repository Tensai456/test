# ระยะเกิด

<!-- สร้างอัตโนมัติโดย scripts/split_kb.mjs จาก docs/wiki/spawning.md · ห้ามแก้มือ -->
> W = https://minecraft.wiki/w/ (Mob_spawning, Spawn_limit, Tutorial:Spawn-proofing, Light, Slime, Swamp_Hut, Witch, Nether_Fortress, Ocean_Monument, Pillager_Outpost, Patrol, Phantom, Insomnia, Drowned, Zombie, Spider_Jockey, Chicken_Jockey, Skeleton_Horse, Monster_Spawner, Wandering_Trader, Enderman) · ข้อมูลจากสรุปผลค้นหา ไม่ได้เปิดหน้าเต็ม · ค่าที่ซ้ำกับ kb เดิม (light-levels, moon-slime, phantom, monster-room) ไม่ลงซ้ำ ลงเฉพาะส่วนที่เพิ่ม

| ข้อมูล | ค่า | แหล่ง |
|---|---|---|
| ระยะที่เกิดได้ | chunk ที่ผู้เล่นอยู่ห่างแนวนอน ≤128 บล็อกจากจุดกลาง chunk; เกิดได้ในทรงกลมรัศมี 128 รอบผู้เล่น (Java) | W/Mob_spawning |
| ระยะใกล้สุด | ต้องไม่มีผู้เล่นหรือจุด spawn โลกในรัศมี 24 บล็อก (ทรงกลม) จากบล็อกที่เกิด | W/Mob_spawning |
| หลายผู้เล่น | เกิดได้ใกล้ผู้เล่นคนใดก็ได้ | W/Mob_spawning |
| Bedrock (ไม่ใช่เป้าหมาย) | 24–128 ตามค่า simulation distance | W/Mob_spawning |

บอตควร: มอนสเตอร์ปกติจะไม่โผล่ในระยะ 24 บล็อกรอบตัว — ถ้ามีมอนสเตอร์ประชิดทันทีแสดงว่าเดินมาหา ไม่ใช่เกิดขึ้นใกล้; ใช้เป็นเวลาตั้งรับ.
ตัดสินผล: เกณฑ์แล็บ — บันทึกระยะที่เจอมอนสเตอร์ตัวใหม่ครั้งแรก ถ้า <24 บล็อกในพื้นที่เปิดโดยไม่มี spawner/โครงสร้าง ให้ติดธง "ผิดปกติ" (เกณฑ์แล็บ).
