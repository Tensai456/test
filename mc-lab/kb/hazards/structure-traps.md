# 14. กับดักโครงสร้าง

<!-- สร้างอัตโนมัติโดย scripts/split_kb.mjs จาก docs/playbook/HAZARDS.md · ห้ามแก้มือ -->
URL ย่อ: `W=https://minecraft.wiki/w/`

| โครงสร้าง | กับดัก | แหล่ง |
|---|---|---|
| Desert pyramid | แผ่นกดหินใต้ blue terracotta กลาง -> TNT 3x3 (9 ก้อน) ระเบิดทำลายหีบ/ฆ่าได้ | W Desert_Pyramid |
| Jungle temple | tripwire 2 เส้น ต่อ dispenser (ลูกศร 2-14) ซ่อนหลังเถาวัลย์; ตัดสาย (ไม่ใช้ shears) ก็ยิง | W Jungle_Pyramid |
| Trial chamber | trial spawner เกิดมอนสเตอร์เป็น wave; หลังชนะพัก 30 นาที; ถ้ามี Bad/Trial Omen กลายเป็น ominous (ของดีกว่า, 30% ominous key) | W Trial_Spawner, W Ominous_Trial |
| Ancient city | ดู หัวข้อ 11 | W Ancient_City |
| Breeze (spawner) | spawn interval 20 ticks, 2 ตัว +1 ต่อผู้เล่น | W Trial_Spawner |

- **แก้**: Desert: ขุดแผ่นกด/ทรายใต้ก่อนแตะ (แผ่นอยู่ใต้ blue terracotta); Jungle: ตัดสายด้วย shears หรือเดินย่อผ่านไม่ได้ -> ตัดด้วย shears; Trial: ตอน Bad Omen อย่าเข้า ถ้ายังไม่พร้อม
- **ตัดสินผล**: ผิดถ้าเหยียบ blue terracotta กลางพีระมิด; ผิดถ้าตัด tripwire ด้วยอย่างอื่นนอกจาก shears; ผิดถ้าเข้า trial chamber ด้วย Bad Omen โดยไม่ตั้งใจ
- **เทสจริง**: สร้าง fixture ทั้ง 3 ใน world ทดสอบ
