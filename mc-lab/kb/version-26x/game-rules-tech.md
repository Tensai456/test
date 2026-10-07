# กฎเกม/เทคนิค

<!-- สร้างอัตโนมัติโดย scripts/split_kb.mjs จาก docs/wiki/version-26x.md · ห้ามแก้มือ -->
> แหล่งข้อมูล: ผลค้นหา minecraft.wiki เท่านั้น (snippet; ดึงหน้าตรงไม่ได้). `W = https://minecraft.wiki/w/`. ตัวเลขใดไม่มีใน snippet ระบุ [ไม่แน่ใจ]. ค้นเมื่อ 2026-10-07.

- 1.21.11: game rule ทั้งหมดเปลี่ยนชื่อเป็น resource location snake_case (เช่น minecraft:...); เพิ่ม `minecraft:fire_spread_radius_around_player` แทน doFireTick/allowFireTicksAwayFromPlayer (0=ไม่ลามไฟ, -1=ลามได้ไม่ต้องมีผู้เล่น). แหล่ง: W/Java_Edition_1.21.11
- tag #without_patrol_spawns ถูกแทนด้วย environment attribute gameplay/can_pillager_patrol_spawn. แหล่ง: W/Java_Edition_1.21.11
- 26.1: game_rules ย้ายไฟล์; GUI ค้นหาได้. แหล่ง: W/Java_Edition_26.1
- ผลต่อบอต: คำสั่ง `/gamerule doFireTick`, `keepInventory` ฯลฯ แบบ camelCase ในสคริปต์แล็บต้องเช็คชื่อใหม่ [ไม่แน่ใจ ว่าชื่อใหม่แต่ละตัวคืออะไร]; ใช้ `fire_spread_radius_around_player` แทนปิดไฟ.
