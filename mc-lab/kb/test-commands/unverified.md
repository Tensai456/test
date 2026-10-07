# ยังไม่ยืนยัน

<!-- สร้างอัตโนมัติโดย scripts/split_kb.mjs จาก docs/wiki/test-commands.md · ห้ามแก้มือ -->
> W = https://minecraft.wiki/w/ · ยืนยันจากผลค้นหา wiki เท่านั้น · รายการค้างดูท้ายไฟล์ · ต้องเป็น OP (permission level 2)

รอบนี้ยืนยันกับ wiki แล้ว: fill, setblock, spreadplayers (ยกเว้นลำดับจุดกลาง), spawnpoint, worldborder, data get entity, deathCount, execute พื้นฐาน, locate structure, ชื่อกฎใหม่ (players_sleeping_percentage, fall_damage, natural_health_regeneration), /time บน 26.1, damage type fall. ที่ยังไม่แน่ใจ:
- ลำดับ/รูปเต็มของจุดกลางใน `spreadplayers` (Java) → W/Commands/spreadplayers
- ชื่อ path อื่นนอกจาก `Health` ใน `data get entity` → W/Entity_format
- `/gamerule` ต้องใส่ `minecraft:` หรือไม่ (หลักทั่วไป: ไม่ต้อง) → W/Commands/gamerule
- สูตรปัดเศษดาเมจตกและค่า `fall_damage_multiplier` ต่อม็อบ → W/Damage
- ขีดจำกัดจำนวนบล็อกของ /fill; ความสัมพันธ์ `time pause` กับ `advance_time` บน 26.1
- ชื่อ id โครงสร้างที่แน่ชัดสำหรับ `locate structure` → W/Structure
