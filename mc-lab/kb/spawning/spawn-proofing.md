# กันมอนสเตอร์เกิด

<!-- สร้างอัตโนมัติโดย scripts/split_kb.mjs จาก docs/wiki/spawning.md · ห้ามแก้มือ -->
> W = https://minecraft.wiki/w/ (Mob_spawning, Spawn_limit, Tutorial:Spawn-proofing, Light, Slime, Swamp_Hut, Witch, Nether_Fortress, Ocean_Monument, Pillager_Outpost, Patrol, Phantom, Insomnia, Drowned, Zombie, Spider_Jockey, Chicken_Jockey, Skeleton_Horse, Monster_Spawner, Wandering_Trader, Enderman) · ข้อมูลจากสรุปผลค้นหา ไม่ได้เปิดหน้าเต็ม · ค่าที่ซ้ำกับ kb เดิม (light-levels, moon-slime, phantom, monster-room) ไม่ลงซ้ำ ลงเฉพาะส่วนที่เพิ่ม

| วิธี | ผล | แหล่ง |
|---|---|---|
| แสง | เกิดที่ block light 0 และ internal sky light ≤7; วางคบไฟ/แหล่งแสงเพื่อกัน | W/Tutorial:Spawn-proofing |
| Slab ล่าง | พื้นที่ปู slab ล่างเกิดไม่ได้ไม่ว่าแสงเท่าไร; double slab, slab บน, บันไดคว่ำ ยังเกิดได้ | W/Tutorial:Spawn-proofing |
| บล็อกเตี้ยกว่าเต็มบล็อก | slab, carpet, stairs และบล็อกบางส่วนเกิดไม่ได้ | W/Tutorial:Spawn-proofing |
| โปร่งใส | เกิดบน glass หรือบล็อกโปร่งแสง (เช่น leaves) ไม่ได้; tinted glass ก็เกิดไม่ได้ทั้งที่กันแสง | W/Tutorial:Spawn-proofing |
| พายุฟ้าผ่า | ลด sky light 10 ในการคิดเกิดของมอนสเตอร์ จึงเกิดกลางวันได้ถ้า block light 0 | W/Light, W/Mob_spawning |
| blaze/silverfish spawner | ต้องแสง 12 ขึ้นไปจึงกัน; คบไฟเดียวพอสำหรับ spawner ที่ต้องแสง 0 | W/Monster_Spawner |

บอตควร: ฐาน = วางคบไฟพื้นที่ยืนได้ทุกจุด (kb/time-weather/light-levels.md) หรือปู slab ล่างทั้งพื้น; ห้ามเชื่อว่าพายุกลางวันปลอดภัย; ระวังพื้นบล็อกโปร่งใสที่ "กัน" ไม่ได้ในแง่แสงแต่กันมอนเกิดบนตัวมัน.
ตัดสินผล: เกณฑ์แล็บ — ฐานผ่านเมื่อไม่มีบล็อกยืนได้ที่ block light 0 ที่เป็นบล็อกเต็มทึบ; ล้มถ้าเจอมอนเกิดในฐาน.
