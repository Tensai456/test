# 5. Smelting และเชื้อเพลิง

<!-- สร้างอัตโนมัติโดย scripts/split_kb.mjs จาก docs/playbook/PROGRESSION.md · ห้ามแก้มือ -->
อ้างอิงย่อ: W=https://minecraft.wiki/w/ (เช่น `Durability` = W+Durability)

| เตา | เวลา/ชิ้น | ใช้กับ | แหล่ง |
|---|---|---|---|
| furnace | 10 วิ (200 tick) | ทุกอย่าง | W+Furnace |
| blast furnace | 5 วิ (100 tick) | แร่/โลหะเท่านั้น | W+Blast_Furnace |
| smoker | 5 วิ (100 tick) | อาหารเท่านั้น | W+Smoker |

| เชื้อเพลิง | เผาได้ (ชิ้น) | เวลาไฟ | แหล่ง |
|---|---|---|---|
| coal / charcoal | 8 | 80 วิ | W+Charcoal |
| block of coal | 80 | 800 วิ | W+Block_of_Coal |
| lava bucket | 100 | 1000 วิ | W+Lava_Bucket |
| blaze rod | 12 | 120 วิ | W+Blaze_Rod |
| dried kelp block | 20 | 4000 tick ใน furnace | W+Dried_Kelp_Block |
| planks | 2 แผ่น = 3 ชิ้น (1.5/แผ่น) | 15 วิ (snippet ใช้ "15 วิ" จากคำค้นเราเอง — ยืนยันผ่านอัตรา 1.5) | W+Tutorial:Smelting |
| stick | 0.5 ชิ้น (2 stick = 1 ชิ้น) | | W+Stick (ผ่านผลค้นเชื้อเพลิง) |

- raw iron → iron ingot: เวลา 10 วิ/ชิ้นใน furnace, 5 วิในblast furnace; ให้ XP 0.7 (W+Raw_Iron, W+Smelting)
- iron 36 ชิ้น (§7): furnace 360 วิ ≈ 4.5 coal (คำนวณ) → เตรียม coal 5 หรือใช้ 2+ เตาขนาน
- blast furnace สูตร: [ไม่แน่ใจ] (snippet ไม่ระบุ) ; hopper = chest + iron ingot 5 (W+Hopper)
