# เรียกม็อบ (+NBT)

<!-- สร้างอัตโนมัติโดย scripts/split_kb.mjs จาก docs/wiki/test-commands.md · ห้ามแก้มือ -->
> W = https://minecraft.wiki/w/ · ยืนยันจากผลค้นหา wiki เท่านั้น · งบค้นหาหมดก่อนครบทุกคำสั่ง ดูท้ายไฟล์ · ต้องเป็น OP (permission level 2)

- ไวยากรณ์: `summon <entity> [<pos>] [<nbt>]` (W/Commands/summon)
- creeper: `powered` (0/1 = ชาร์จ), `Fuse` (0-32767 tick ก่อนระเบิด) (W/Commands/summon, W/Tutorial:Command_NBT_tags)
- ตัวอย่างทดสอบ creeper:
  - `/summon creeper ~ ~ ~ {powered:1,Fuse:60}`
  - `/summon creeper ~3 ~ ~ {powered:true,CustomName:'"Powered Creeper"'}`
- ทดสอบหลบ/ถอยหนี: ปล่อยหลายตัวข้างบอท แล้วดูว่าบอทหนีทันก่อนระเบิดหรือไม่
