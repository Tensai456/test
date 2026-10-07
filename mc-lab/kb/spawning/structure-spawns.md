# เกิดเฉพาะโครงสร้าง

<!-- สร้างอัตโนมัติโดย scripts/split_kb.mjs จาก docs/wiki/spawning.md · ห้ามแก้มือ -->
> W = https://minecraft.wiki/w/ (Mob_spawning, Spawn_limit, Tutorial:Spawn-proofing, Light, Slime, Swamp_Hut, Witch, Nether_Fortress, Ocean_Monument, Pillager_Outpost, Patrol, Phantom, Insomnia, Drowned, Zombie, Spider_Jockey, Chicken_Jockey, Skeleton_Horse, Monster_Spawner, Wandering_Trader, Enderman) · ข้อมูลจากสรุปผลค้นหา ไม่ได้เปิดหน้าเต็ม · ค่าที่ซ้ำกับ kb เดิม (light-levels, moon-slime, phantom, monster-room) ไม่ลงซ้ำ ลงเฉพาะส่วนที่เพิ่ม

| โครงสร้าง | กฎ | แหล่ง |
|---|---|---|
| ลำดับความสำคัญ | structure spawn ชนะ biome สำหรับ hostile (swamp hut, pillager outpost, nether fortress, ocean monument) — เห็นเฉพาะมอบของโครงสร้างภายในนั้น | W/Mob_spawning |
| Swamp hut | เริ่มด้วยแม่มด 1 + แมวดำ 1 (ไม่หายเอง; แม่มดไม่เกิดใน Peaceful); เกิดต่อเนื่องได้เฉพาะแม่มด (แมวต้องบนหญ้า) ในพื้นที่ 7×7×9 (ต่ำกว่าพื้น 1 ชั้นถึงสูงกว่าหลังคา 2) | W/Swamp_Hut |
| Nether fortress | Java: blaze 10/28 (กลุ่ม 2–3), wither skeleton 8/28 (กลุ่ม 5), skeleton 2/28 (กลุ่ม 5); ทั้ง bounding box เกิดบน Nether bricks เท่านั้น (ไม่ใช่ slab) แต่ในชิ้นทางเดิน/สะพานไม่สนชนิดบล็อก; blaze แสง ≤11, wither skeleton แสง 0–7 | W/Nether_Fortress |
| Ocean monument | ใน bounding box (58×58) เกิดเฉพาะ guardian (ที่เดียวที่เกิด); elder guardian 3 ตัวตอนสร้าง (บน 1 + ปีกละ 1) ไม่เกิดใหม่ | W/Ocean_Monument |
| Pillager outpost | pillager/captain เกิดต่อเนื่องในกล่อง 72×58×72 กลางจุดยอดหอ (ขึ้น 28 ลง 30 จาก Y หีบ); บนบล็อกทึบ block light ≤8 | W/Pillager_Outpost |
| Bastion | piglin/brute เกิดตอนสร้างเท่านั้น brute ไม่ renewable | W/Bastion_Remnant |
| Stronghold | silverfish spawner ที่ห้อง End portal | W/Monster_Spawner |

บอตควร: ไม่ต้องคาดว่าจะเจอ zombie/creeper ในป้อมเนเธอร์; เก็บ blaze rod ในป้อมโดยรู้ว่าเกิดไม่เกิน light 11 (คบไฟ 1 ดวงไม่พอ); ในวิหารห้ามหวัง elder guardian เกิดใหม่; ที่ outpost หอยังเกิดผู้ปล้นเพิ่ม — เคลียร์แล้วแสงสว่างกัน.
ตัดสินผล: เกณฑ์แล็บ — mob ชนิดอื่นที่ไม่ตรงชุดโครงสร้างในกล่องโครงสร้าง = ธงผิดปกติ (ยกเว้น mob ที่เดินเข้ามา).
