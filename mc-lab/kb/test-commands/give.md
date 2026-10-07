# ให้ไอเทม (item components)

<!-- สร้างอัตโนมัติโดย scripts/split_kb.mjs จาก docs/wiki/test-commands.md · ห้ามแก้มือ -->
> W = https://minecraft.wiki/w/ · ยืนยันจากผลค้นหา wiki เท่านั้น · รายการค้างดูท้ายไฟล์ · ต้องเป็น OP (permission level 2)

- ไวยากรณ์: `give <targets> <item> [<count>]`; `<item>` = `item_id[component=value,...]` ค่าเขียนแบบ SNBT; ลบ component ด้วย `!` เช่น `item_id[!component]` (W/Commands/give, W/Data_component_format)
- enchant (W/Data_component_format, W/Commands/give):
  - `/give @r diamond_sword[enchantments={"minecraft:sharpness":10}] 1`
  - `/give @p minecraft:netherite_sword[minecraft:enchantments={sharpness:10,looting:10}] 1`
- ระดับเอนชานต์สูงสุดผ่าน /give = 255 (Java)
- ชุดเกราะ/อาวุธ PvP: ให้ทีละชิ้นด้วยรูปแบบข้างบน (ชื่อ enchant อื่น ๆ ดู W/Enchantments)
