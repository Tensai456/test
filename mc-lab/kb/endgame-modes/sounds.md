# เสียงที่ยืนยัน

<!-- สร้างอัตโนมัติโดย scripts/split_kb.mjs จาก docs/wiki/endgame-modes.md · ห้ามแก้มือ -->
> W = https://minecraft.wiki/w/ (Ender_Dragon, End_Crystal, End_Spike, Exit_portal, Tutorial:Defeating_the_ender_dragon, Wither, Wither_(effect), Wither_Rose, Tutorial:Defeating_the_wither, Shulker, End_City, End_City/Structure/Ship, Hardcore, Game_mode, Spectator, Adventure, Game_rule, Commands/gamerule, Java_Edition_26.1, Java_Edition_26.2, Java_Edition_26.3, Copper_Golem, Happy_Ghast, Sulfur_Cube, Mounts_of_Mayhem, Warden) · ข้อมูลจากสรุปผลค้นหา ไม่ได้เปิดหน้าเต็ม · เพิ่มเฉพาะข้อเท็จจริงใหม่ที่ไม่ซ้ำ kb/nether-end/d3-ender-dragon.md และ wither.md

| ข้อมูล | ค่า | แหล่ง |
|---|---|---|
| Warden | เสียงหัวใจเต้นต่ำเป็นระยะ ระหว่างทำงาน (subtitle "Warden's heart beats"); sniff ~4.2 วินาที cooldown 5-10 วินาที | W/Warden |
| Sculk sensor | click เมื่อรับ vibration (รัศมี 8), stops clicking เมื่อหยุด | W/Sculk_Sensor |
| Creeper hiss | มีเสียง hiss (note block + creeper head ให้เสียงนี้); timing ฟิวส์ [ไม่แน่ใจ] | W/Note_Block |

บอตควร: ถ้า API ให้ได้ยิน sound event ให้ตอบ heartbeat/warden เป็นสัญญาณถอย ไม่สู้; hiss = ถอยเกิน 3 บล็อก [คิดเอง].
ตัดสินผล: เกณฑ์แล็บ — เมื่อได้ยิน hiss บอตต้องห่างจาก creeper ≥ 4 บล็อกภายใน 1 วินาที.
