# 16. ไอเท็มหาย / ตาย

<!-- สร้างอัตโนมัติโดย scripts/split_kb.mjs จาก docs/playbook/HAZARDS.md · ห้ามแก้มือ -->
URL ย่อ: `W=https://minecraft.wiki/w/`

| ค่า | แหล่ง |
|---|---|
| ไอเท็มหายหลัง 6000 ticks (5 นาที) เฉพาะ chunk ที่โหลด/entity-ticking; ออกนอกระยะ = ตัวนับหยุด | W Item_(entity) |
| ตาย: ของทั้งหมดตก (ยกเว้น Curse of Vanishing); XP ตก level x7 สูงสุด 100 | W Death |
| Nether star จาก Wither หายใน 10 นาที | W Death / W Nether_star |
| Recovery compass ชี้ตำแหน่งตายล่าสุด (มิติเดียวกัน) | W Recovery_Compass |

- **แก้**: จดพิกัดตาย (`bot.entity.position` ก่อนตาย), กลับทันที, ห้ามไปไกลเกิน simulation distance (ตัวนับหยุด แต่ไม่รีเซ็ต -- `[ไม่แน่ใจ]`); ตายใน lava -> เตรียมน้ำ/กันไฟ ก่อนเก็บ; ตายใน void = ของหายหมด
- **ตัดสินผล**: ถูกถ้ากลับถึงจุดตายภายใน 240 วิ (เหลือ 60 วิ safety); ผิดถ้าใช้เวลา >300 วิ เพราะของหาย
- **เทสจริง**: /kill แล้วจับเวลา drop item หายด้วย /data
