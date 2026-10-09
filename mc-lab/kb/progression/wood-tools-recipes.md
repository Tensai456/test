# 2. ไม้ → crafting table → เครื่องมือ (จำนวนสูตร)

<!-- สร้างอัตโนมัติโดย scripts/split_kb.mjs จาก docs/playbook/PROGRESSION.md · ห้ามแก้มือ -->
อ้างอิงย่อ: W=https://minecraft.wiki/w/ (เช่น `Durability` = W+Durability)

| ของ | สูตร | แหล่ง |
|---|---|---|
| crafting table | planks 4 (กริด 2x2 ใส่ planks ชนิดใดก็ได้) | W+Crafting |
| stick | planks 2 (แนวตั้ง) → 4 sticks | W+Stick |
| wooden pickaxe | tier material 3 + stick 2 | W+Wooden_Pickaxe |
| stone pickaxe | cobblestone 3 + stick 2 (รูปแบบเดียวกับไม้ — คำนวณจากสูตร tier) | W+Wooden_Pickaxe (สูตร tier) |
| furnace | cobblestone 8 | W+Crafting |
| copper pickaxe | copper ingot 3 + stick 2 | W+Copper_Pickaxe |
| iron pickaxe | iron ingot 3 + stick 2 | W+Iron_Pickaxe |
| iron axe | iron ingot 3 + stick 2 | W+Iron_Axe |
| iron sword | iron ingot 2 + stick 1 | W+Iron_Sword |

จำนวน planks/stick รวมสำหรับชุดไม้เริ่มต้น (table 4 + pickaxe 3 + 2 sticks=1 planks...) — เป้า lab: log 12 พอสำหรับ table/pickaxe/sword/axe ไม้ + stone tools (คำนวณคร่าว, ไม่ใช่ตัวเลข wiki).
