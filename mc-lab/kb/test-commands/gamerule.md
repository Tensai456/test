# กฎเกม (เปลี่ยนชื่อแล้ว!)

<!-- สร้างอัตโนมัติโดย scripts/split_kb.mjs จาก docs/wiki/test-commands.md · ห้ามแก้มือ -->
> W = https://minecraft.wiki/w/ · ยืนยันจากผลค้นหา wiki เท่านั้น · รายการค้างดูท้ายไฟล์ · ต้องเป็น OP (permission level 2)

- ตั้งแต่ Java 1.21.11 (snapshot 25w44a) ทุกกฎถูกเปลี่ยนเป็น resource location แบบ snake_case และย้ายเข้า registry (W/Java_Edition_25w44a, W/Game_rule)
- ยืนยันแล้ว (เก่า → ใหม่): doDaylightCycle → `minecraft:advance_time` · doMobSpawning → `minecraft:spawn_mobs` · doInsomnia → `spawn_phantoms` · doEntityDrops → `entity_drops` · doMobLoot → `mob_drops` · doTileDrops → `block_drops` · doPatrolSpawning → `spawn_patrols` · doImmediateRespawn → `immediate_respawn` · doLimitedCrafting → `limited_crafting` · announceAdvancements → `show_advancement_messages` · commandBlocksEnabled → `command_blocks_work` (W/Java_Edition_1.21.11, W/Java_Edition_25w44a)
- ยืนยันว่ามีชื่อ snake_case: `keep_inventory`, `natural_health_regeneration`, `mob_griefing`, `advance_weather`, `tnt_explodes` (W/Commands/gamerule)
- ไวยากรณ์ตั้งค่า: `/gamerule <rule> <value>` (รูปแบบทั่วไป; ต้องใช้ชื่อใหม่ถ้าเซิร์ฟเวอร์ ≥ 1.21.11)
- ตัวอย่างล็อบทดสอบ: `/gamerule advance_time false`, `/gamerule spawn_mobs false`, `/gamerule keep_inventory true`, `/gamerule advance_weather false`
- ยืนยันเพิ่ม (W/Game_rule, ผลค้นหา): `players_sleeping_percentage` (ค่าเริ่มต้น 100; ≤0 = คนเดียวข้ามคืนได้; ตั้งแต่ 25w44a ขั้นต่ำ 0), `fall_damage` (boolean, ค่าเริ่มต้น true), `natural_health_regeneration` (ค่าเริ่มต้น true)
- prefix `minecraft:`: ทั่วไปของ resource location ถ้าไม่ใส่ namespace จะเป็น `minecraft:` (W/Argument_types); ว่าต้องใส่กับ /gamerule หรือไม่ ไม่ยืนยันตรง = [ไม่แน่ใจ] แต่ตัวอย่างข้างบนไม่ใส่ก็ใช้ได้ตามหลักนี้
- ไวยากรณ์เต็ม `/gamerule <rule> [<value>]` (ไม่ใส่ value = ดูค่า) (W/Commands/gamerule)
- 26.1: `advance_time` ยังเป็นชื่อกฎ Java ของ daylight cycle (W/Game_rule, W/Daylight_cycle)
