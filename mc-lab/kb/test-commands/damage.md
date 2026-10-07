# ทำดาเมจ

<!-- สร้างอัตโนมัติโดย scripts/split_kb.mjs จาก docs/wiki/test-commands.md · ห้ามแก้มือ -->
> W = https://minecraft.wiki/w/ · ยืนยันจากผลค้นหา wiki เท่านั้น · งบค้นหาหมดก่อนครบทุกคำสั่ง ดูท้ายไฟล์ · ต้องเป็น OP (permission level 2)

- `damage <target> <amount> [<damageType>] [at <location>]`
- `damage <target> <amount> [<damageType>] [by <entity>] [from <cause>]` (W/Commands/damage)
- amount ≥ 0.0; damageType มีผลกับข้อความตายและ difficulty scaling (W/Damage_type)
- ตัวอย่าง: `/damage Bot1 5`; `/damage Bot1 5 fall` (damage type `fall` มีจริง ข้ามเกราะ/โล่) (W/Damage_type, W/Commands/damage)
- ไม่ระบุ damageType = `minecraft:generic`
