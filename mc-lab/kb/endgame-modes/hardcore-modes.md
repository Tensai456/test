# Hardcore และโหมดเกม

<!-- สร้างอัตโนมัติโดย scripts/split_kb.mjs จาก docs/wiki/endgame-modes.md · ห้ามแก้มือ -->
> W = https://minecraft.wiki/w/ (Ender_Dragon, End_Crystal, End_Spike, Exit_portal, Tutorial:Defeating_the_ender_dragon, Wither, Wither_(effect), Wither_Rose, Tutorial:Defeating_the_wither, Shulker, End_City, End_City/Structure/Ship, Hardcore, Game_mode, Spectator, Adventure, Game_rule, Commands/gamerule, Java_Edition_26.1, Java_Edition_26.2, Java_Edition_26.3, Copper_Golem, Happy_Ghast, Sulfur_Cube, Mounts_of_Mayhem, Warden) · ข้อมูลจากสรุปผลค้นหา ไม่ได้เปิดหน้าเต็ม · เพิ่มเฉพาะข้อเท็จจริงใหม่ที่ไม่ซ้ำ kb/nether-end/d3-ender-dragon.md และ wither.md

| ข้อมูล | ค่า | แหล่ง |
|---|---|---|
| Hardcore | Hard ล็อกเปลี่ยนไม่ได้, ตายแล้วไม่ respawn ปกติ | W/Hardcore |
| ตายใน Hardcore | เลือก spectate (เป็น Spectator เกิดที่ spawn โลก) หรือกลับ title screen | W/Hardcore |
| ลบโลก | ตั้งแต่ 1.15 ปุ่ม delete/leave server กลายเป็น Title screen; ไม่ลบโลก/แบนผู้เล่นอีก | W/Hardcore |
| Adventure | ทำลายบล็อกได้เฉพาะไอเท็มที่มี can_break, วางด้วย can_place_on | W/Adventure |
| Spectator | ทำลาย/โต้ตอบบล็อก เอนทิตี หรือ inventory ไม่ได้; ทะลุบล็อกได้; มองไม่เห็นยกเว้นต่อ spectator คนอื่น | W/Spectator |
| 26.1.2 | แก้ spectator โจมตีผู้เล่นอื่นได้ | kb/version-26x (W/Java_Edition_26.1.2) |

บอตควร: ตรวจ gamemode จากแพ็กเก็ต; ถ้าถูกตั้งเป็น spectator (ตายใน hardcore) หยุดคำสั่งโต้ตอบทั้งหมด; ใน Adventure ตรวจ can_break ก่อนขุด.
ตัดสินผล: เกณฑ์แล็บ — บอตไม่ส่งคำสั่งขุด/วางใน spectator/adventure โดยไม่มีเครื่องมือที่ถูกต้อง (0 ครั้ง).
