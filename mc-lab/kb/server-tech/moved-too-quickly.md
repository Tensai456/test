# โดนดึงกลับ/เตะ "moved too quickly"

<!-- สร้างอัตโนมัติโดย scripts/split_kb.mjs จาก docs/wiki/server-tech.md · ห้ามแก้มือ -->
> W = https://minecraft.wiki/w/ · P = https://docs.papermc.io/paper/ · จุด [ตรวจ] = ต้องดูตอนต่อบอตจริง

- เซิร์ฟเช็กความเร็วผู้เล่นทุกแพ็กเก็ต ถ้าเร็วเกิน → ไม่ยอมให้ขยับ (ดึงกลับ) และบันทึก log (P/reference/spigot-configuration: moved-too-quickly-multiplier, moved-wrongly-threshold)
- gamerule player_movement_check / elytra_movement_check เปิดปิดการเช็กได้ (W/Game_rule)
- [ไม่แน่ใจ: ค่าเกณฑ์จริงของเซิร์ฟ s39]

บอตควร:
- ห้าม teleport/ตั้ง position ตรง ๆ ในโค้ด · ให้ physics ของ mineflayer เดินเอง
- โดนดึงกลับ ≥3 ครั้งใน 10 วิ → หยุด เดินช้าลง (ไม่ sprint) [คิดเอง]
- ถูกเตะ → รอ ≥10 วิ แล้วเข้าใหม่ (กันโดนแบนจากการเข้าถี่) [คิดเอง]

ตัดสินผล: นับครั้ง "position correction" ต่อชั่วโมง — สูง = โค้ดเคลื่อนที่มีปัญหา ไม่ใช่สมองบอต
