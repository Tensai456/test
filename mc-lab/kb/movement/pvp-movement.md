# 5. PvP — ส่วนที่เกี่ยวกับการเคลื่อนที่ (รายละเอียดเต็มอยู่ใน PVP_PLAYBOOK)

<!-- สร้างอัตโนมัติโดย scripts/split_kb.mjs จาก docs/VANILLA_MOVEMENT.md · ห้ามแก้มือ -->
> ขอบเขต: Java Edition วานิลลาเท่านั้น (ไม่มีมอด/ไคลเอนต์โกง) · เป้า: แปลงเป็นกฎให้บอต mineflayer
> แหล่ง: minecraft.wiki (ดึงผ่าน WebSearch เพราะ proxy บล็อกการเปิดหน้าโดยตรง → ได้เป็น "ข้อความย่อ" ไม่ใช่ทั้งหน้า)
> **ยังไม่ได้ดูวิดีโอ YouTube** (youtube.com ถูกบล็อก) → หมวด "เทคนิคจาก YouTube" รอ jing ส่งลิงก์/บทความ
> ตัวเลขวิกิส่วนใหญ่เป็นของ Java ปัจจุบัน ณ วันที่ค้น — ยังไม่ได้ยืนยันกับ 26.x ทีละค่า → ถือเป็น **ยืนยันระดับเอกสาร** เท่านั้น
> โค้ดคู่กัน: `lib/fall_safety.mjs` (ฟังก์ชันล้วน + เทส = ยืนยันระดับจำลอง)

| เทคนิค | กลไก | แหล่ง |
|---|---|---|
| Cooldown | ต้องชาร์จ ≥84.8% ถึงจะได้คริ / sprint-knockback / sweep | [PvP (Java)](https://minecraft.wiki/w/Tutorial:PvP_(Java_Edition)) |
| คริ | ต้องกำลัง "ตก" (กระโดดแล้วตีตอนขาลง) + cooldown ≥84.8% | [PvP (Java)](https://minecraft.wiki/w/Tutorial:PvP_(Java_Edition)) |
| W-tap (sprint reset) | ตีแล้ววิ่งต่อใหม่ → ทุกฮิตได้ sprint-knockback | [PvP (Java)](https://minecraft.wiki/w/Tutorial:PvP_(Java_Edition)) |
| หลังตีโดน | ผู้ตีหยุดวิ่ง + ความเร็วแนวนอนเหลือ 60% | [Melee attack](https://minecraft.wiki/w/Melee_attack) |
| Circle strafe | กด A หรือ D ค้าง วนรอบคู่ต่อสู้ระหว่างคอมโบ | [PvP (Java)](https://minecraft.wiki/w/Tutorial:PvP_(Java_Edition)) |
| Crit-spam | กระโดดต่อเนื่องแล้วคริเป็นชุด | [PvP (Java)](https://minecraft.wiki/w/Tutorial:PvP_(Java_Edition)) |
| Mace smash | ตกมา ≥1.5 บล็อก · +4 HP/บล็อก (3 บล็อกแรก) · +2 HP/บล็อก (5 บล็อกถัดไป) · +1 HP/บล็อก (ที่เหลือ) · Density +0.5 HP/บล็อก/เลเวล · Wind Burst เด้งขึ้น 8 บล็อก/เลเวล | [Mace](https://minecraft.wiki/w/Mace) |
| ลูกลมใต้เท้า | พุ่งได้สูงสุด ~11 บล็อก ถ้าจังหวะถูก (ข้อมูลแล็บ: ปาใส่พื้นตอนยืนนิ่งแล้วไม่ลอย → ต้องกระโดดก่อน) | [Wind Charge](https://minecraft.wiki/w/Wind_Charge) |
