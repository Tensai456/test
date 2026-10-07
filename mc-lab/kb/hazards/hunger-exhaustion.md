# 1. หิว / Exhaustion / Starvation

<!-- สร้างอัตโนมัติโดย scripts/split_kb.mjs จาก docs/playbook/HAZARDS.md · ห้ามแก้มือ -->
URL ย่อ: `W=https://minecraft.wiki/w/`

| รายการ | ค่า | แหล่ง |
|---|---|---|
| วิ่ง (sprint) | 0.1 exhaustion ต่อเมตร | W Hunger |
| กระโดด | 0.05 ต่อครั้ง; กระโดดขณะวิ่ง 0.2 | W Hunger |
| โจมตีโดน | 0.1 ต่อครั้ง | W Hunger |
| ฟื้นเลือด | +6 exhaustion ต่อการฟื้นเลือด (ใน 4 เสียค่า 1 hunger) | W Starvation (Food mechanics) |
| exhaustion เกิน 4.0 | ลด 4; ถ้า saturation>0 ลด saturation 1 (ไม่ต่ำกว่า 0) | W Starvation |
| Natural regen | hunger >=18 (หรือ saturation>0) ฟื้น 1HP ต่อ 80 ticks | W Starvation |
| วิ่งไม่ได้ | hunger <=6 | W Hunger |
| หยุดฟื้นเอง | hunger <=17 (ตามหน้า Hunger) | W Hunger |
| Starvation | 1HP ต่อ 80 ticks (4 วิ) ที่ hunger 0 | W Starvation |
| Normal | starvation หยุดที่ 1HP (Easy หยุดที่ 10HP, Hard ตายได้) | W Hunger / W Starvation |
| Mining/ขุดบล็อก exhaustion | `[ไม่แน่ใจ]` (ไม่อยู่ใน snippet) | - |
| Hunger effect | +0.005 x level exhaustion ต่อ tick | W Hunger_(effect) |

- **อาการ**: food level ลด, ฟื้นเลือดหยุด, วิ่งไม่ได้, เลือดลดช้าๆ ที่ food=0
- **แก้**: กินเมื่อ food <=14 (ก่อนหลุดเกณฑ์ regen 18 ไม่จำเป็น แต่ต้องกินก่อน 6); ลดการวิ่ง/กระโดดขณะอดอยาก; สำรองอาหารสุกในช่อง hotbar
- **ตัดสินผล**: ผิดถ้า food<=6 แล้วบอทพยายามวิ่ง/สั่ง sprint ซ้ำ; ผิดถ้า food==0 เกิน 10 วิ โดยมีอาหารในกระเป๋าแต่ไม่กิน; ถูกถ้ากินภายใน 5 วิหลัง food<=6 (หน้าต่าง 5 วิ = เกณฑ์ของ lab ไม่ใช่ของ wiki)
- **เทสจริง**: /effect give Hunger 60 สูง level แล้ววัด food ต่อ 60 วิ เทียบสูตร; ตั้ง food=0 บน Normal ดูว่าเลือดหยุดที่ 1HP (0.5 หัวใจ?) `[ไม่แน่ใจ]` หน่วยของ "1HP"
