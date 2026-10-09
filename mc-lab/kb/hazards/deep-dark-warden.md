# 11. Deep Dark / Warden

<!-- สร้างอัตโนมัติโดย scripts/split_kb.mjs จาก docs/playbook/HAZARDS.md · ห้ามแก้มือ -->
URL ย่อ: `W=https://minecraft.wiki/w/`

| ค่า | แหล่ง |
|---|---|
| shrieker ธรรมชาติ: +1 warning ต่อครั้ง สูงสุด 4; ถึง 4 -> ลอง spawn warden | W Sculk_Shrieker |
| warning ลด 1 ทุก 12000 ticks (10 นาที) ถ้าไม่เปิด | W Sculk_Shrieker |
| Darkness 12 วิ รัศมี 40 หลัง shrieker ร้องจบ | W Sculk_Shrieker |
| Sculk sensor จับสั่นสะเทือน 8 บล็อก; sneak (ไม่ตี) ไม่ถูกจับ; ขนแกะบัง | W Warden / W Sculk_Sensor `[ผ่านผลค้นหา]` |
| Warden ให้ Darkness 13 วิ ทุก 6 วิ รัศมี 20 | W Warden |

- **อาการ**: Darkness effect, เสียงหัวใจ, shrieker ทำงาน
- **แก้**: sneak ตลอด, ปูขนแกะ, ห้ามเหยียบ/แตะ shrieker, ห้ามวิ่ง/กระโดด/ทุบบล็อกเสียงดัง; ถ้า warden โผล่ -> หนีขึ้นผิวไม่สู้ (ความเสียหายของ warden: `[ไม่แน่ใจ]`)
- **ตัดสินผล**: ผิดถ้าเข้า Deep Dark แล้ววิ่ง; ผิดถ้า warning >=3 แล้วยังเหยียบ shrieker อีก; ถูกถ้าออกพื้นที่ภายใน 30 วิหลัง warning=4
- **เทสจริง**: /place ancient city ใช้บอท sneak เดินดู warning ด้วย /data (เซ็นเซอร์)
