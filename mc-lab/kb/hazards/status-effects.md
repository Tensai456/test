# 3. Status effects

<!-- สร้างอัตโนมัติโดย scripts/split_kb.mjs จาก docs/playbook/HAZARDS.md · ห้ามแก้มือ -->
URL ย่อ: `W=https://minecraft.wiki/w/`

| Effect | ที่มา/ค่า | แหล่ง |
|---|---|---|
| Poison | 1HP ต่อ 25 ticks (lv I); ฆ่าไม่ได้ เหลือ 0.5 หัวใจ | W Poison |
| Wither | 1HP ต่อ 40 ticks (lv I); ฆ่าได้ทุกความยาก; ไม่ใช้ milk? `[ไม่แน่ใจ]` | W Wither_(effect) |
| Mining Fatigue III | elder guardian ทุก 60 วิ ในรัศมี 50 บล็อก, นาน 5 นาที, ความเร็วขุด -97.3%; นมล้างได้แต่โดนซ้ำ | W Mining_Fatigue |
| Slowness | potion I -15%, IV -60% | W Potion_of_Slowness |
| Weakness | Java ลดดาเมจ 4 | W Potion_of_Weakness |
| Darkness | shrieker: 12 วิ รัศมี 40; warden: 13 วิ ทุก 6 วิ รัศมี 20 | W Sculk_Shrieker, W Warden |
| Blindness | stew eyeblossom 11 วิ (Java) | W Eyeblossom |
| Levitation | จาก shulker bullet; ความเร็ว/เวลา `[ไม่แน่ใจ]` | W Levitation |
| Bad Omen | ominous bottle 100 นาที; เข้าหมู่บ้าน -> Raid Omen -> raid หลัง 30 วิ | W Ominous_Bottle, W Raid |
| Trial Omen | 15 นาที x ระดับ Bad Omen | W Trial_Omen |

- **อาการ**: อ่าน `bot.entity.effects`
- **แก้**: Poison/Wither -> กินอาหารฟื้น (Poison ไม่ฆ่า แต่ห้ามโดนซ้ำตอน 0.5 หัวใจ), ดื่มนม, ถอยจากต้นเหตุ; Mining Fatigue -> ออกจาก monument แล้วดื่มนม; Darkness -> ยืนนิ่ง/ถอยออกจาก shrieker ห้ามวิ่ง
- **ตัดสินผล**: ผิดถ้า Wither/Poison แล้วเลือด <=4 ไม่หยุดกิน/ดื่มนมภายใน 3 วิ (กฎ lab); ผิดถ้าเข้าหมู่บ้านด้วย Bad Omen โดยไม่ตั้งใจสู้ raid
- **เทสจริง**: /effect give ทุกตัว วัดอัตราเลือดลด vs ตาราง
