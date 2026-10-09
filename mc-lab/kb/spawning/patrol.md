# ทีมลาดตระเวนผู้ปล้น

<!-- สร้างอัตโนมัติโดย scripts/split_kb.mjs จาก docs/wiki/spawning.md · ห้ามแก้มือ -->
> W = https://minecraft.wiki/w/ (Mob_spawning, Spawn_limit, Tutorial:Spawn-proofing, Light, Slime, Swamp_Hut, Witch, Nether_Fortress, Ocean_Monument, Pillager_Outpost, Patrol, Phantom, Insomnia, Drowned, Zombie, Spider_Jockey, Chicken_Jockey, Skeleton_Horse, Monster_Spawner, Wandering_Trader, Enderman) · ข้อมูลจากสรุปผลค้นหา ไม่ได้เปิดหน้าเต็ม · ค่าที่ซ้ำกับ kb เดิม (light-levels, moon-slime, phantom, monster-room) ไม่ลงซ้ำ ลงเฉพาะส่วนที่เพิ่ม

| ข้อมูล | ค่า | แหล่ง |
|---|---|---|
| เริ่มได้ | หลัง world age 100 นาที (5 วันเกม) | W/Patrol |
| รอบ | รอ 10–11 นาที (ไม่นับช่วง 13200 tick) แล้วลองเกิด โอกาสผ่าน 20% | W/Patrol |
| เลือกผู้เล่น | สุ่มผู้เล่น; ไม่เกิดถ้า spectator หรืออยู่ใน cube 5×5×5 subchunk ของหมู่บ้าน | W/Patrol |
| ตำแหน่ง | ห่างผู้เล่น 24–48 บล็อก (ต่อแกน X, Z) ลองเกิดกัปตัน; block light ≤8 | W/Patrol |

บอตควร: เมื่อเดินกลางแจ้งหลังวันที่ 5 ระวังกลุ่ม pillager ยิงหน้าไม้จากไกล 24–48 บล็อก; อยู่ใกล้หมู่บ้านจะไม่เกิด.
ตัดสินผล: เกณฑ์แล็บ — patrol ก่อน world age 100 นาที = ผิด.
