# P3 อาหาร

<!-- สร้างอัตโนมัติโดย scripts/split_kb.mjs จาก docs/playbook/PROGRESSION.md › 10. Playbook รายไมล์สโตน (อาการ → สาเหตุ → แก้ → ตัวเลข+แหล่ง → ตัดสินผล → เทสจริง) · ห้ามแก้มือ -->
อ้างอิงย่อ: W=https://minecraft.wiki/w/ (เช่น `Durability` = W+Durability)

- อาการ: food level < 6 (จาก 20) และไม่มีของกิน ; ไม่มีสัตว์ใกล้
- สาเหตุ: ไม่ล่า ; กินดิบ ; ไม่มีเตา
- แก้: ฆ่า cow/pig/sheep (beef/porkchop 1–3) → ทำสุกในเตา (steak/porkchop 8 hunger W+Food) ; ตั้งฟาร์ม wheat (breed cow/sheep ด้วย wheat, cooldown 5 นาที W+Breeding) ; สำรองตกปลา 5–30 วิ/ตัว W+Fishing
- ตัดสินผล: cooked >= 16 ชิ้น หรือสัตว์เพาะ >= 4 ตัว ภายใน 30 นาที ; ไม่ผ่านและ food<6 → หยุดงานอื่น ทำอาหารก่อน
- เทสจริง: ปล่อยบอทหิว 10 นาทีดูว่าเข้าโหมดหาอาหารไหม
