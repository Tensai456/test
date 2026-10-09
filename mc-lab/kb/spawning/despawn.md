# การหายไปของมอบ

<!-- สร้างอัตโนมัติโดย scripts/split_kb.mjs จาก docs/wiki/spawning.md · ห้ามแก้มือ -->
> W = https://minecraft.wiki/w/ (Mob_spawning, Spawn_limit, Tutorial:Spawn-proofing, Light, Slime, Swamp_Hut, Witch, Nether_Fortress, Ocean_Monument, Pillager_Outpost, Patrol, Phantom, Insomnia, Drowned, Zombie, Spider_Jockey, Chicken_Jockey, Skeleton_Horse, Monster_Spawner, Wandering_Trader, Enderman) · ข้อมูลจากสรุปผลค้นหา ไม่ได้เปิดหน้าเต็ม · ค่าที่ซ้ำกับ kb เดิม (light-levels, moon-slime, phantom, monster-room) ไม่ลงซ้ำ ลงเฉพาะส่วนที่เพิ่ม

| ข้อมูล | ค่า | แหล่ง |
|---|---|---|
| ไกลเกิน 128 บล็อกจากผู้เล่นใกล้สุด | หายทันที (มอนสเตอร์และบางชนิด) | W/Mob_spawning |
| ไกลเกิน 32 บล็อก | หลังไม่มีผู้เล่นใน 32 บล็อกเกิน 30 วินาที (มอนสเตอร์ในที่สว่าง >12 = 10 วินาที) มีโอกาส 1/800 ต่อ tick (≈2.47%/วินาที) | W/Mob_spawning |
| เฉลี่ยก่อนหาย | ราว 1400 tick (70 วินาที) หลังผ่านเวลาขั้นต่ำ 600 tick | W/Mob_spawning |
| ประเภทที่หายได้ | monster, ambient, aquatic ยกเว้น shulker, wither, elder guardian, ender dragon | W/Mob_spawning |
| Persistent (ไม่หาย) | มี {PersistenceRequired:1b}; เป็น passenger; เกิดจากการสร้างโครงสร้าง; ได้ของเข้า inventory หรือเก็บของขึ้นมา; ติด name tag (Java) | W/Mob_spawning |
| ข้อยกเว้น | ใส่เกราะด้วย dispenser ไม่ทำให้ persistent; endermite หายหลัง 2 นาที; ใน Peaceful monster หาย | W/Mob_spawning |
| Wandering trader | หายหลังอยู่ใน render+simulation distance 48000 tick (40 นาที); name tag/เรือไม่ช่วย; llama หายตามเมื่อยังผูกเชือก | W/Wandering_Trader |

บอตควร: อยากให้มอบอยู่ (เช่น ล่อ/ล็อกเป้า) ต้องอยู่ในระยะ 32 บล็อก; ถ้าห่างเกิน 128 บล็อก มอบจะหายทันที อย่าคาดว่าจะกลับมาไล่; ของที่ดรอปจากมอนสเตอร์ที่เก็บของไว้ทำให้ persistent — เลี่ยงการเก็บ/ปล่อยของที่ต้องการให้หาย.
ตัดสินผล: เกณฑ์แล็บ — มอนสเตอร์ที่ตามอยู่แล้วหายไปทันทีเมื่อบอตห่าง >128 บล็อก = ถูกต้องตามวิกิ; หายที่ระยะ 32–128 ภายในไม่ถึง 30 วินาที = ผิด (ยกเว้นในที่สว่าง >12 ที่ใช้ 10 วินาที).
