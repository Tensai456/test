# คำสั่งแอดมินสำหรับทดสอบบอท (Java vanilla)
> W = https://minecraft.wiki/w/ · ยืนยันจากผลค้นหา wiki เท่านั้น · งบค้นหาหมดก่อนครบทุกคำสั่ง ดูท้ายไฟล์ · ต้องเป็น OP (permission level 2)

## summon · เรียกม็อบ (+NBT)
- ไวยากรณ์: `summon <entity> [<pos>] [<nbt>]` (W/Commands/summon)
- creeper: `powered` (0/1 = ชาร์จ), `Fuse` (0-32767 tick ก่อนระเบิด) (W/Commands/summon, W/Tutorial:Command_NBT_tags)
- ตัวอย่างทดสอบ creeper:
  - `/summon creeper ~ ~ ~ {powered:1,Fuse:60}`
  - `/summon creeper ~3 ~ ~ {powered:true,CustomName:'"Powered Creeper"'}`
- ทดสอบหลบ/ถอยหนี: ปล่อยหลายตัวข้างบอท แล้วดูว่าบอทหนีทันก่อนระเบิดหรือไม่

## tp · เทเลพอร์ต (/tp = /teleport)
- รูปแบบ (W/Commands/teleport): `teleport <destination>` · `teleport <targets> <destination>` · `teleport <location>` · `teleport <targets> <location>` · `teleport <targets> <location> <rotation>` · `... facing <facingLocation>`
- ตัวอย่าง: `/tp @s 100 ~3 100`, `/tp Bot1 @s`
- ทดสอบตกจากที่สูง (ยกตัวบอทขึ้นจากตำแหน่งปัจจุบัน; ใช้ ~ สัมพัทธ์):
  - `/tp Bot1 ~ ~30 ~`
  - `/tp Bot1 ~ ~60 ~`
  - `/tp Bot1 ~ ~100 ~`
  - `/tp Bot1 ~ ~150 ~`
- ควรยืนบนพื้นราบที่รู้ตำแหน่งแน่ ๆ ก่อน
- ดาเมจตก: ม็อบส่วนใหญ่โดน ≈1 HP ต่อบล็อกที่ตกเกิน `safe_fall_distance` (ค่าเริ่มต้น 3 บล็อก) (W/Attribute, W/Damage); สูตรปัดเศษ/ตัวคูณละเอียด = [ไม่แน่ใจ]
- ตกสูง 30+ บล็อกน่าจะตายถ้าไม่มีเกราะ/เอฟเฟกต์ (อนุมานจากสูตรข้างบน ไม่ใช่ค่าที่วิกิยืนยัน)

## give · ให้ไอเทม (item components)
- ไวยากรณ์: `give <targets> <item> [<count>]`; `<item>` = `item_id[component=value,...]` ค่าเขียนแบบ SNBT; ลบ component ด้วย `!` เช่น `item_id[!component]` (W/Commands/give, W/Data_component_format)
- enchant (W/Data_component_format, W/Commands/give):
  - `/give @r diamond_sword[enchantments={"minecraft:sharpness":10}] 1`
  - `/give @p minecraft:netherite_sword[minecraft:enchantments={sharpness:10,looting:10}] 1`
- ระดับเอนชานต์สูงสุดผ่าน /give = 255 (Java)
- ชุดเกราะ/อาวุธ PvP: ให้ทีละชิ้นด้วยรูปแบบข้างบน (ชื่อ enchant อื่น ๆ ดู W/Enchantments)

## effect · เอฟเฟกต์
- `effect give <targets> <effect> [<seconds>] [<amplifier>] [<hideParticles>]`
- `effect give <targets> <effect> infinite [<amplifier>] [<hideParticles>]`
- `effect clear [<targets>] [<effect>]` (W/Commands/effect)
- seconds ช่วง 0-1000000 (Java)
- ตัวอย่าง: `/effect give @s minecraft:resistance 1000000 4 true` (ตัวอย่างบนวิกิ)
- รีเซ็ตก่อนรอบทดสอบ: `/effect clear Bot1`

## gamerule · กฎเกม (เปลี่ยนชื่อแล้ว!)
- ตั้งแต่ Java 1.21.11 (snapshot 25w44a) ทุกกฎถูกเปลี่ยนเป็น resource location แบบ snake_case และย้ายเข้า registry (W/Java_Edition_25w44a, W/Game_rule)
- ยืนยันแล้ว (เก่า → ใหม่): doDaylightCycle → `minecraft:advance_time` · doMobSpawning → `minecraft:spawn_mobs` · doInsomnia → `spawn_phantoms` · doEntityDrops → `entity_drops` · doMobLoot → `mob_drops` · doTileDrops → `block_drops` · doPatrolSpawning → `spawn_patrols` · doImmediateRespawn → `immediate_respawn` · doLimitedCrafting → `limited_crafting` · announceAdvancements → `show_advancement_messages` · commandBlocksEnabled → `command_blocks_work` (W/Java_Edition_1.21.11, W/Java_Edition_25w44a)
- ยืนยันว่ามีชื่อ snake_case: `keep_inventory`, `natural_health_regeneration`, `mob_griefing`, `advance_weather`, `tnt_explodes` (W/Commands/gamerule)
- ไวยากรณ์ตั้งค่า: `/gamerule <rule> <value>` (รูปแบบทั่วไป; ต้องใช้ชื่อใหม่ถ้าเซิร์ฟเวอร์ ≥ 1.21.11)
- ตัวอย่างล็อบทดสอบ: `/gamerule advance_time false`, `/gamerule spawn_mobs false`, `/gamerule keep_inventory true`, `/gamerule advance_weather false`
- ยืนยันเพิ่ม (W/Game_rule, ผลค้นหา): `players_sleeping_percentage` (ค่าเริ่มต้น 100; ≤0 = คนเดียวข้ามคืนได้; ตั้งแต่ 25w44a ขั้นต่ำ 0), `fall_damage` (boolean, ค่าเริ่มต้น true), `natural_health_regeneration` (ค่าเริ่มต้น true)
- prefix `minecraft:`: ทั่วไปของ resource location ถ้าไม่ใส่ namespace จะเป็น `minecraft:` (W/Argument_types); ว่าต้องใส่กับ /gamerule หรือไม่ ไม่ยืนยันตรง = [ไม่แน่ใจ] แต่ตัวอย่างข้างบนไม่ใส่ก็ใช้ได้ตามหลักนี้
- ไวยากรณ์เต็ม `/gamerule <rule> [<value>]` (ไม่ใส่ value = ดูค่า) (W/Commands/gamerule)
- 26.1: `advance_time` ยังเป็นชื่อกฎ Java ของ daylight cycle (W/Game_rule, W/Daylight_cycle)

## time · เวลา
- `time set <number|minecraft:day|minecraft:noon|minecraft:night|minecraft:midnight>`, `time add`, `time query` (daytime / gametime / day) (W/Commands/time)
- หน่วย: `d` = 24000 tick, `s` = 20 tick, `t` = tick (ค่าเริ่มต้น); `set day` = 1000
- ตัวอย่าง: `/time set noon`, `/time set 6000`
- 26.1 (W/Commands/time, W/World_clock, W/Java_Edition_26.1_Snapshot_3): /time อิง world clock; ซับคำสั่ง `time set|add|pause|resume|rate <...>` และรูป `time of <clock> <...>` (clock: `minecraft:overworld`, `minecraft:the_end`; ไม่ระบุ = clock ของมิติที่รัน)
- `set <value|timemarker>`: time marker ของ overworld = day, noon, night, midnight (แทนชื่อตายตัวเดิม)
- `time query` ยังมี daytime / gametime / day (daytime = เวลาสะสม mod 24000, day = floor(เวลา/24000))
- ตัวอย่างบน 26.1 ที่ปลอดภัย: `/time set noon` ; `/time pause` / `/time resume` ใช้แทนการหยุดเวลาได้ แต่ความสัมพันธ์กับ gamerule advance_time = [ไม่แน่ใจ]

## weather · อากาศ
- `weather (clear|rain|thunder) [<duration>]`; หน่วย d / s / t (ค่าเริ่มต้น t); ไม่ใส่ = สุ่ม (W/Commands/weather)
- ตัวอย่าง: `/weather clear 24000`, `/weather thunder`

## difficulty-kill-clear · ความยาก / kill / clear
- `difficulty [peaceful|easy|normal|hard]` (W/Commands/difficulty)
- `kill [<targets>]` (W/Commands/kill) · `clear [<targets>] [<item>] [<maxCount>]` (W/Commands/clear)
- ตัวอย่าง: `/difficulty hard`, `/kill @e[type=minecraft:creeper]`, `/clear Bot1`
- เก็บกวาดหลังทดสอบ: `/kill @e[type=minecraft:creeper]` ตัวเลือก selector ดู W/Target_selectors

## damage · ทำดาเมจ
- `damage <target> <amount> [<damageType>] [at <location>]`
- `damage <target> <amount> [<damageType>] [by <entity>] [from <cause>]` (W/Commands/damage)
- amount ≥ 0.0; damageType มีผลกับข้อความตายและ difficulty scaling (W/Damage_type)
- ตัวอย่าง: `/damage Bot1 5`; `/damage Bot1 5 fall` (damage type `fall` มีจริง ข้ามเกราะ/โล่) (W/Damage_type, W/Commands/damage)
- ไม่ระบุ damageType = `minecraft:generic`

## attribute · แอตทริบิวต์
- `attribute <target> <attribute> base set <value>` (W/Attribute; เพิ่มใน 1.16 / 20w17a)
- max_health: ค่าเริ่มต้น 20, ต่ำสุด 1, สูงสุด 1024 (W/Attribute)
- ตัวอย่าง: `/attribute Bot1 minecraft:max_health base set 40` (รูป `/attribute @s max_health base set <value>` อ้างอิงจากผลค้นหา)
- ใช้ทดสอบทนดาเมจ: ตั้ง max_health สูงแล้ว /damage ซ้ำ

## locate · หาโครงสร้าง/ไบโอม
- ไบโอม: `locate biome <biome>` รองรับ tag; ความละเอียดแนวนอน 32, ระยะค้นหา 12801x12801 (W/Commands/locate)
- ตัวอย่าง: `/locate biome warped_forest`
- `locate structure <structure>` (Java): รับ resource location หรือ tag ของ registry `worldgen/structure` (W/Commands/locate)
- ตัวอย่าง: `/locate structure #village` (tag = หมู่บ้านทุกชนิด); ชื่อเดี่ยว เช่น `mansion` เป็นตัวอย่างฝั่งวิกิ ตรวจชื่อ id ที่แน่ชัดใน W/Structure [ไม่แน่ใจ]

## unverified · ยังไม่ยืนยัน
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
