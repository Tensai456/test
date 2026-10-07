# กลไก spawner

<!-- สร้างอัตโนมัติโดย scripts/split_kb.mjs จาก docs/wiki/spawning.md · ห้ามแก้มือ -->
> W = https://minecraft.wiki/w/ (Mob_spawning, Spawn_limit, Tutorial:Spawn-proofing, Light, Slime, Swamp_Hut, Witch, Nether_Fortress, Ocean_Monument, Pillager_Outpost, Patrol, Phantom, Insomnia, Drowned, Zombie, Spider_Jockey, Chicken_Jockey, Skeleton_Horse, Monster_Spawner, Wandering_Trader, Enderman) · ข้อมูลจากสรุปผลค้นหา ไม่ได้เปิดหน้าเต็ม · ค่าที่ซ้ำกับ kb เดิม (light-levels, moon-slime, phantom, monster-room) ไม่ลงซ้ำ ลงเฉพาะส่วนที่เพิ่ม

| ข้อมูล | ค่า | แหล่ง |
|---|---|---|
| ระยะทำงาน | ผู้เล่นอยู่ในทรงกลม 16 บล็อก (15.5 จากตัวบล็อก) | W/Monster_Spawner |
| พื้นที่เกิด | Java 9×3×9 รอบ spawner (ห่างแนวนอน 4 สูง 1) | W/Monster_Spawner |
| ความพยายาม | 4 ตัวต่อรอบ ที่จุดสุ่ม แล้วรอ 200–799 tick (10–39.95 วินาที) | W/Monster_Spawner |
| แสง | ตามชนิดมอบ; ชนิดแสง 0 ปิดด้วยคบไฟ 1 ดวงที่ด้านหรือบน spawner; blaze/silverfish ต้อง 12+ | W/Monster_Spawner |
| cave spider | spawner ใน mineshaft ล้อมใยแมงมุม แสง 0; ติดพิษ Normal+ | W/Cave_Spider |
| max nearby entities | ค่าเริ่มต้น 6 [ไม่แน่ใจ ไม่ยืนยันใน snippet] | W/Monster_Spawner |

บอตควร: วางคบไฟข้าง spawner แล้วเก็บหีบ; spawner blaze/silverfish ต้องบล็อกพื้นที่หรือแสง 12+ (คบไฟ 14 หลายดวง); กำจัดมอบที่ออกมาแล้วด้วยพื้นที่ 9×3×9.
ตัดสินผล: เกณฑ์แล็บ — หลังวางคบไฟแล้วมอบยังเกิดจาก spawner ที่ไม่ใช่ blaze/silverfish = ตรวจว่าเป็นแสง 0 จริงหรือไม่ (ผิดตาม W/Monster_Spawner).
