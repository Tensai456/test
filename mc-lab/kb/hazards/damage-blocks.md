# 5. บล็อกทำร้าย

<!-- สร้างอัตโนมัติโดย scripts/split_kb.mjs จาก docs/playbook/HAZARDS.md · ห้ามแก้มือ -->
URL ย่อ: `W=https://minecraft.wiki/w/`

| บล็อก | ค่า | แหล่ง |
|---|---|---|
| Cactus | 1HP ทุก 0.5 วิ เมื่อสัมผัส | W Cactus |
| Sweet berry bush | 1HP ทุก 0.5 วิ เมื่อขยับในพุ่ม | W Sweet_Berries |
| Magma block | 1HP ทุก 0.5 วิ เมื่อเดินบน; กัน: Fire Resistance, ย่อ (sneak), Frost Walker | W Magma_Block |
| Campfire | 1HP ทุก 0.5 วิ เมื่อยืนบน | W Fire (ผลค้นหา campfire) |
| Fire (ไฟ) | ไหม้ 1HP ต่อวิ; ไหม้ต่อ 8 วิหลังออกจากไฟ | W Fire |
| Lava | 4HP ทุก 0.5 วิ; ติดไฟ 300 ticks (15 วิ) | W Lava, W Fire |
| Suffocation | 1HP ทุก 0.5 วิ เมื่อ "ตา" อยู่ในบล็อกตัน | W Damage |

- **แก้**: เลี่ยงใน pathfinder (ตั้ง cost สูงสำหรับ cactus/berry/magma/campfire/lava/fire); ติดไฟ -> เข้าน้ำทันที; ถูกฝังใน sand/gravel -> ขุดบล็อกเหนือหัวทันที
- **ตัดสินผล**: ผิดถ้าก้าวลง magma โดยไม่ sneak/ไม่มี fire res; ผิดถ้าติดไฟแล้วไม่เข้าน้ำ/ไม่หยุดภายใน 2 วิ เมื่อมีน้ำ <=5 บล็อก; ผิดถ้าเดินเข้า lava (เกือบตายภายใน ~2.5 วิ: 20HP / 8HP ต่อวิ -- คำนวณเอง)
- **เทสจริง**: วาง cactus/berry/magma ให้บอทเดินผ่าน ดู path ว่าหลบไหม
