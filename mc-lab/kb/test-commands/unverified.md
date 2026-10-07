# ยังไม่ยืนยัน

<!-- สร้างอัตโนมัติโดย scripts/split_kb.mjs จาก docs/wiki/test-commands.md · ห้ามแก้มือ -->
> W = https://minecraft.wiki/w/ · ยืนยันจากผลค้นหา wiki เท่านั้น · งบค้นหาหมดก่อนครบทุกคำสั่ง ดูท้ายไฟล์ · ต้องเป็น OP (permission level 2)

งบ WebSearch หมดกลางทาง ยังไม่ได้ยืนยันกับ wiki และห้ามเดา; ต้องอ่านหน้าเหล่านี้ก่อนใช้:
- `fill` (โหมด replace/destroy/keep/hollow/outline) → W/Commands/fill
- `setblock` → W/Commands/setblock
- `spreadplayers` → W/Commands/spreadplayers
- `spawnpoint` → W/Commands/spawnpoint
- `worldborder` → W/Commands/worldborder
- `data get entity <target> <path>` (อ่าน Health) → W/Commands/data
- `scoreboard` นับตาย (criteria `deathCount`) → W/Commands/scoreboard, W/Scoreboard
- `execute` พื้นฐาน → W/Commands/execute
- `locate structure`, ชื่อกฎใหม่ของ playersSleepingPercentage / fallDamage / naturalRegeneration (ยืนยันแค่ natural_health_regeneration), `/gamerule` ต้องใส่ prefix `minecraft:` หรือไม่
- สูตรดาเมจตก และผลของ /time บนรุ่น 26.1 (world clock)
- สคริปต์รีเซ็ต PvP arena เต็มรูปแบบ (ต้องใช้ fill/setblock/spreadplayers) → ใช้ชุด verified ไปก่อน: `/clear`, `/effect clear`, `/kill`, `/tp`, `/give`
