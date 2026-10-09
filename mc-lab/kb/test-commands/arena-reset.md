# รีเซ็ตสนาม PvP

<!-- สร้างอัตโนมัติโดย scripts/split_kb.mjs จาก docs/wiki/test-commands.md · ห้ามแก้มือ -->
> W = https://minecraft.wiki/w/ · ยืนยันจากผลค้นหา wiki เท่านั้น · รายการค้างดูท้ายไฟล์ · ต้องเป็น OP (permission level 2)

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
