# 2. อาหารพิษ

<!-- สร้างอัตโนมัติโดย scripts/split_kb.mjs จาก docs/playbook/HAZARDS.md · ห้ามแก้มือ -->
URL ย่อ: `W=https://minecraft.wiki/w/`

| อาหาร | ผล | แหล่ง |
|---|---|---|
| เนื้อเน่า | +4 hunger, 0.8 sat, 80% ได้ Hunger I 30 วิ | W Rotten_Flesh |
| ไก่ดิบ | 30% ได้ Hunger | W Hunger_(effect) / W Food (Raw chicken ผ่าน search) |
| ปลาปักเป้า | Hunger III 15 วิ, Poison II 1 นาที, Nausea 15 วิ | W Pufferfish_(item) |
| ตาแมงมุม | Poison 5 วิ (2HP) | W Poison |
| Suspicious stew | ขึ้นกับดอกไม้ เช่น lily of the valley Poison 11 วิ; eyeblossom เปิด Blindness 11 วิ (Java); ปิด Nausea 7 วิ | W Lily_of_the_valley, W Eyeblossom |

- **อาการ**: effect Hunger/Poison/Nausea โผล่หลังกิน
- **แก้**: ห้ามกินปักเป้า/ตาแมงมุม/stew ไม่ทราบสูตร; เนื้อเน่าเฉพาะวิกฤต (food<=2 ไม่มีอย่างอื่น) แล้วรอ; นมล้าง effect
- **ตัดสินผล**: ผิดถ้ากินปักเป้า/ตาแมงมุมโดยมีอาหารปลอดภัยอยู่; ผิดถ้ากินไก่ดิบ/เนื้อเน่าเมื่อมีของสุก; ถูกถ้า cook ก่อนกินทุกครั้ง
- **เทสจริง**: กินเนื้อเน่า 20 ครั้ง นับสัดส่วนที่ได้ Hunger (คาด ~80%)
