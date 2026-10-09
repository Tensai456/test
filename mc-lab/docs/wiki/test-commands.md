# คำสั่งแอดมินสำหรับทดสอบบอท (Java vanilla)
> W = https://minecraft.wiki/w/ · ยืนยันจากผลค้นหา wiki เท่านั้น · รายการค้างดูท้ายไฟล์ · ต้องเป็น OP (permission level 2)

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

## fill-setblock · วางบล็อก (fill / setblock)
- `fill <from> <to> <block> [outline|hollow|destroy|strict|replace|keep]` หรือ `fill <from> <to> <block> replace <filter> [outline|hollow|destroy|strict]` (W/Commands/fill)
- โหมด: `replace` (ค่าเริ่มต้น, ไม่ดรอป) · `destroy` (ดรอปเหมือนขุด) · `keep` (เปลี่ยนเฉพาะอากาศ) · `outline` (เฉพาะผิวนอก) · `hollow` (ผิวนอก + ข้างในเป็นอากาศ) · `strict` (ไม่ trigger block update)
- ตั้งแต่ 1.21.5 `replace` ต่อด้วยออปชันอื่นได้ (W/Java_Edition_1.21.5)
- `setblock <pos> <block> [destroy|keep|replace|strict]` ค่าเริ่มต้น replace (W/Commands/setblock)
- ตัวอย่าง: `/fill ~-10 ~ ~-10 ~10 ~ ~10 minecraft:stone`, `/setblock ~ ~1 ~ minecraft:air`
- ขีดจำกัดจำนวนบล็อกต่อคำสั่ง = [ไม่แน่ใจ]

## spawn-border · spawnpoint / spreadplayers / worldborder
- `spawnpoint [<targets>] [<pos>] [<angle>]` ไม่ใส่ = ผู้รัน/ตำแหน่งที่รัน; level 2 (W/Commands/spawnpoint)
- `spreadplayers <spreadDistance> <maxRange> <respectTeams> <targets>` และรูป `... <maxRange> under <maxHeight> <respectTeams> <targets>`; maxRange = ระยะต่อแกนจากจุดกลาง (พื้นที่เป็นสี่เหลี่ยม) (W/Commands/spreadplayers)
- ตำแหน่งอาร์กิวเมนต์จุดศูนย์กลาง (x z) ในรูป Java: ผลค้นหาพูดถึงแต่ไม่แสดงลำดับ = [ไม่แน่ใจ] (ถ้าจะใช้ ตรวจหน้า wiki; ชุดรีเซ็ตด้านล่างใช้ `/tp` แทน)
- `worldborder center <pos>` (2D, เริ่มต้น 0 0) · `worldborder set <distance> [<time>]` · `worldborder damage amount <v>` (เริ่มต้น 0.2/วินาที/บล็อก) · `worldborder damage buffer <v>` (เริ่มต้น 5 บล็อก) (W/Commands/worldborder)
- ตัวอย่าง: `/worldborder center 0 0`, `/worldborder set 60`

## data-score-execute · data get / scoreboard / execute
- `data get entity <target> [<path>] [<scale>]` (W/Commands/data); ตัวอย่าง `/data get entity Bot1 Health` (path `Health` อ่านจาก NBT มาตรฐาน; ไม่ได้ยืนยันชื่อ path จากผลค้นหารอบนี้ [ไม่แน่ใจ])
- นับตาย: `/scoreboard objectives add Deaths deathCount` (W/Scoreboard, W/Commands/scoreboard)
- `scoreboard players get <target> <objective>` · `players set <targets> <objective> <score>` · `players reset <targets> [<objective>]` (W/Commands/scoreboard)
- เช็ค: `/execute if entity @a[scores={Deaths=1..}]` (W/Scoreboard)
- execute: `as` เปลี่ยนผู้รัน · `at` เปลี่ยนตำแหน่ง/ทิศ/มิติตามเอนทิตี · `positioned` ตั้งตำแหน่ง · `if|unless entity|block` เงื่อนไข · `run <command>` (W/Commands/execute)
- ตัวอย่างวิกิ: `execute as @e[type=sheep] at @s run tp ^ ^ ^1`

## arena-reset · รีเซ็ตสนาม PvP
- สมมติสนามกลาง `0 64 0` ยืนบนพื้น Y=64 ขนาด 41x41; ปรับพิกัดเอง; บอท `Bot1`, `Bot2` (ชื่อสมมติ) (W/Commands/fill, W/Commands/setblock)
- ระบบ/มิติ: ใช้ชื่อกฎใหม่ (Java ≥ 1.21.11) (W/Game_rule)
```
/gamerule advance_time false
/gamerule spawn_mobs false
/gamerule keep_inventory true
/gamerule fall_damage false
/time set noon
/weather clear
/kill @e[type=!minecraft:player]
/clear @a
/effect clear @a
/fill -20 63 -20 20 63 20 minecraft:stone
/fill -20 64 -20 20 70 20 minecraft:air
/fill -20 64 -20 20 67 20 minecraft:glass outline
/worldborder center 0 0
/worldborder set 45
/tp Bot1 -10 64 0
/tp Bot2 10 64 0
/give @a minecraft:iron_sword
```
- หมายเหตุ: `@e[type=!minecraft:player]` ลบทุกเอนทิตีที่ไม่ใช่ผู้เล่น (ตัวเลือก selector W/Target_selectors); `/fill` ใหญ่เกินอาจติดขีดจำกัด [ไม่แน่ใจ]
- `fill ... outline` สร้างผิวนอกเฉพาะ; ถ้าอยากกำแพงกระจกกลวงทั้งก้อนใช้ `hollow` แต่ข้างในจะเป็นอากาศ
- ทางเลือกสุ่มจุด: `spreadplayers` (ดู spawn-border ก่อน ลำดับจุดกลางไม่แน่ใจ)

## unverified · ยังไม่ยืนยัน
รอบนี้ยืนยันกับ wiki แล้ว: fill, setblock, spreadplayers (ยกเว้นลำดับจุดกลาง), spawnpoint, worldborder, data get entity, deathCount, execute พื้นฐาน, locate structure, ชื่อกฎใหม่ (players_sleeping_percentage, fall_damage, natural_health_regeneration), /time บน 26.1, damage type fall. ที่ยังไม่แน่ใจ:
- ลำดับ/รูปเต็มของจุดกลางใน `spreadplayers` (Java) → W/Commands/spreadplayers
- ชื่อ path อื่นนอกจาก `Health` ใน `data get entity` → W/Entity_format
- `/gamerule` ต้องใส่ `minecraft:` หรือไม่ (หลักทั่วไป: ไม่ต้อง) → W/Commands/gamerule
- สูตรปัดเศษดาเมจตกและค่า `fall_damage_multiplier` ต่อม็อบ → W/Damage
- ขีดจำกัดจำนวนบล็อกของ /fill; ความสัมพันธ์ `time pause` กับ `advance_time` บน 26.1
- ชื่อ id โครงสร้างที่แน่ชัดสำหรับ `locate structure` → W/Structure
