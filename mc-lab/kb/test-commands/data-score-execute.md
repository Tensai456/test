# data get / scoreboard / execute

<!-- สร้างอัตโนมัติโดย scripts/split_kb.mjs จาก docs/wiki/test-commands.md · ห้ามแก้มือ -->
> W = https://minecraft.wiki/w/ · ยืนยันจากผลค้นหา wiki เท่านั้น · รายการค้างดูท้ายไฟล์ · ต้องเป็น OP (permission level 2)

- `data get entity <target> [<path>] [<scale>]` (W/Commands/data); ตัวอย่าง `/data get entity Bot1 Health` (path `Health` อ่านจาก NBT มาตรฐาน; ไม่ได้ยืนยันชื่อ path จากผลค้นหารอบนี้ [ไม่แน่ใจ])
- นับตาย: `/scoreboard objectives add Deaths deathCount` (W/Scoreboard, W/Commands/scoreboard)
- `scoreboard players get <target> <objective>` · `players set <targets> <objective> <score>` · `players reset <targets> [<objective>]` (W/Commands/scoreboard)
- เช็ค: `/execute if entity @a[scores={Deaths=1..}]` (W/Scoreboard)
- execute: `as` เปลี่ยนผู้รัน · `at` เปลี่ยนตำแหน่ง/ทิศ/มิติตามเอนทิตี · `positioned` ตั้งตำแหน่ง · `if|unless entity|block` เงื่อนไข · `run <command>` (W/Commands/execute)
- ตัวอย่างวิกิ: `execute as @e[type=sheep] at @s run tp ^ ^ ^1`
