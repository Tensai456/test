# เวลา

<!-- สร้างอัตโนมัติโดย scripts/split_kb.mjs จาก docs/wiki/test-commands.md · ห้ามแก้มือ -->
> W = https://minecraft.wiki/w/ · ยืนยันจากผลค้นหา wiki เท่านั้น · รายการค้างดูท้ายไฟล์ · ต้องเป็น OP (permission level 2)

- `time set <number|minecraft:day|minecraft:noon|minecraft:night|minecraft:midnight>`, `time add`, `time query` (daytime / gametime / day) (W/Commands/time)
- หน่วย: `d` = 24000 tick, `s` = 20 tick, `t` = tick (ค่าเริ่มต้น); `set day` = 1000
- ตัวอย่าง: `/time set noon`, `/time set 6000`
- 26.1 (W/Commands/time, W/World_clock, W/Java_Edition_26.1_Snapshot_3): /time อิง world clock; ซับคำสั่ง `time set|add|pause|resume|rate <...>` และรูป `time of <clock> <...>` (clock: `minecraft:overworld`, `minecraft:the_end`; ไม่ระบุ = clock ของมิติที่รัน)
- `set <value|timemarker>`: time marker ของ overworld = day, noon, night, midnight (แทนชื่อตายตัวเดิม)
- `time query` ยังมี daytime / gametime / day (daytime = เวลาสะสม mod 24000, day = floor(เวลา/24000))
- ตัวอย่างบน 26.1 ที่ปลอดภัย: `/time set noon` ; `/time pause` / `/time resume` ใช้แทนการหยุดเวลาได้ แต่ความสัมพันธ์กับ gamerule advance_time = [ไม่แน่ใจ]
