# เพดานจำนวนมอบต่อประเภท

<!-- สร้างอัตโนมัติโดย scripts/split_kb.mjs จาก docs/wiki/spawning.md · ห้ามแก้มือ -->
> W = https://minecraft.wiki/w/ (Mob_spawning, Spawn_limit, Tutorial:Spawn-proofing, Light, Slime, Swamp_Hut, Witch, Nether_Fortress, Ocean_Monument, Pillager_Outpost, Patrol, Phantom, Insomnia, Drowned, Zombie, Spider_Jockey, Chicken_Jockey, Skeleton_Horse, Monster_Spawner, Wandering_Trader, Enderman) · ข้อมูลจากสรุปผลค้นหา ไม่ได้เปิดหน้าเต็ม · ค่าที่ซ้ำกับ kb เดิม (light-levels, moon-slime, phantom, monster-room) ไม่ลงซ้ำ ลงเฉพาะส่วนที่เพิ่ม

| ประเภท | เพดาน | แหล่ง |
|---|---|---|
| Monster | 70 | W/Mob_spawning |
| Creature (สัตว์บก) | 10 | W/Mob_spawning |
| Ambient (ค้างคาว) | 15 | W/Mob_spawning |
| Water creature (หมึก, โลมา) | 5 | W/Mob_spawning |
| Underground water creature (glow squid) | 5 | W/Mob_spawning |
| Water ambient (ปลา) | 20 | W/Mob_spawning |
| สูตรรวม | globalCap = mobCap × จำนวน chunk ใน 17×17 รอบผู้เล่น ÷ 289 | W/Mob_spawning, W/Spawn_limit |
| เพดานต่อผู้เล่น | นับมอบที่ไม่ persistent ใน chunk ที่จุดกลางห่างผู้เล่นแนวนอน ≤128 บล็อก; ตัวเลขเพดานต่อผู้เล่น [ไม่แน่ใจ] | W/Mob_spawning |
| Persistent | ไม่นับเข้าเพดาน | W/Mob_spawning |
| Chunk ใหม่ | 1 ใน 10 chunk ที่เพิ่งสร้างลองสร้างสัตว์ (ชุดละไม่เกิน 4 ตัวชนิดเดียวกัน) โดยไม่สนเพดาน | W/Mob_spawning |

บอตควร: ถ้าฐาน/ฟาร์มอยู่ใกล้ถ้ำที่มืด มอนสเตอร์ 70 ตัวอาจไปเต็มโควตาที่อื่นแล้วทำให้ฟาร์มไม่เกิด; ล้างถ้ำ/มืดรอบๆ ให้สว่างเพื่อให้โควตาเหลือใช้ในที่ที่ต้องการ.
ตัดสินผล: เกณฑ์แล็บ — ฟาร์มมอนสเตอร์ที่เกิดช้าผิดปกติ ให้ตรวจก่อนว่าจำนวนมอนสเตอร์ที่ไม่ persistent ใกล้ผู้เล่นใกล้ 70 หรือไม่ ก่อนสรุปว่าแบบฟาร์มผิด.
