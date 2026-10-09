# ชื่อ gamerule ใน 26.x

<!-- สร้างอัตโนมัติโดย scripts/split_kb.mjs จาก docs/wiki/endgame-modes.md · ห้ามแก้มือ -->
> W = https://minecraft.wiki/w/ (Ender_Dragon, End_Crystal, End_Spike, Exit_portal, Tutorial:Defeating_the_ender_dragon, Wither, Wither_(effect), Wither_Rose, Tutorial:Defeating_the_wither, Shulker, End_City, End_City/Structure/Ship, Hardcore, Game_mode, Spectator, Adventure, Game_rule, Commands/gamerule, Java_Edition_26.1, Java_Edition_26.2, Java_Edition_26.3, Copper_Golem, Happy_Ghast, Sulfur_Cube, Mounts_of_Mayhem, Warden) · ข้อมูลจากสรุปผลค้นหา ไม่ได้เปิดหน้าเต็ม · เพิ่มเฉพาะข้อเท็จจริงใหม่ที่ไม่ซ้ำ kb/nether-end/d3-ender-dragon.md และ wither.md

| ชื่อใหม่ (snake_case) | ชื่อเดิม | ค่า default / ความหมาย | แหล่ง |
|---|---|---|---|
| keep_inventory | keepInventory | false; true เก็บของและ XP ตอนตาย (HP/หิวรีเซ็ต effect หาย) | W/Game_rule |
| mob_griefing | mobGriefing | true; mob/crystal เปลี่ยนบล็อก + เก็บของ | W/Game_rule |
| advance_time | doDaylightCycle | 26.1 เปลี่ยนชื่อ; ควบคุมวัฏจักรกลางวัน/ข้างขึ้นข้างแรม | W/Daylight_cycle |
| advance_weather | doWeatherCycle | 26.1 เปลี่ยนชื่อ; /weather ยังใช้ได้ | W/Daylight_cycle |
| players_sleeping_percentage | playersSleepingPercentage | default 100; <= 0 คนเดียวข้ามคืนได้; > 100 ข้ามไม่ได้ | W/Game_rule |
| respawn_radius | spawnRadius | default 10 (Bedrock ชื่อ spawn_radius) | W/Game_rule |
| natural_health_regeneration | naturalRegeneration | default true; ไม่กระทบ golden apple/Regeneration | W/Game_rule |
| spawn_phantoms | doInsomnia | default true; phantom เกิดกลางคืน | W/Game_rule |

บอตควร: ใช้ชื่อ snake_case เท่านั้นในคำสั่งทดสอบ แล้วอ่านค่ากลับด้วย `/gamerule <ชื่อ>` เพื่อยืนยัน; ไม่เดาชื่ออื่น.
ตัดสินผล: เกณฑ์แล็บ — ทุก gamerule ในตารางตอบสำเร็จ 8/8 บนเซิร์ฟ 26.x.
