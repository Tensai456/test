# สไลม์

<!-- สร้างอัตโนมัติโดย scripts/split_kb.mjs จาก docs/wiki/spawning.md · ห้ามแก้มือ -->
> W = https://minecraft.wiki/w/ (Mob_spawning, Spawn_limit, Tutorial:Spawn-proofing, Light, Slime, Swamp_Hut, Witch, Nether_Fortress, Ocean_Monument, Pillager_Outpost, Patrol, Phantom, Insomnia, Drowned, Zombie, Spider_Jockey, Chicken_Jockey, Skeleton_Horse, Monster_Spawner, Wandering_Trader, Enderman) · ข้อมูลจากสรุปผลค้นหา ไม่ได้เปิดหน้าเต็ม · ค่าที่ซ้ำกับ kb เดิม (light-levels, moon-slime, phantom, monster-room) ไม่ลงซ้ำ ลงเฉพาะส่วนที่เพิ่ม

| ข้อมูล | ค่า | แหล่ง |
|---|---|---|
| Slime chunk | เกิดต่ำกว่า Y=40 (ไม่ใช่ที่ Y=40) เป็นกลุ่ม 4 ไม่สนแสงหรือสภาพอากาศ | W/Slime |
| หนองน้ำ/mangrove | Y 51–69 รวมปลาย แสง ≤7; มากสุดช่วงพระจันทร์เต็ม ไม่เกิดช่วงเดือนมืด | W/Slime |
| เฟสจันทร์กับ slime chunk | เฟสไม่มีผลต่อ slime chunk | W/Slime |
| หา slime chunk | ในเกมหาไม่ได้โดยตรง (ใช้ seed/เครื่องมือ) [ไม่แน่ใจ ไม่มีใน snippet] | — |

บอตควร: ฟาร์มใน slime chunk ขุดต่ำกว่า Y=40; ถ้าไปหนองให้ตรวจเฟสจันทร์ก่อน (kb/time-weather/moon-slime.md).
ตัดสินผล: เกณฑ์แล็บ — พบ slime ที่ Y<40 แต่ไม่ใช่หนอง/สถานะ slime chunk ไม่ยืนยัน = ข้อมูลแหล่งฟาร์ม ไม่ใช่ความผิด.
