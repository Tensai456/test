# 3. ขอบ/รอบตัว/ติดบล็อก

<!-- สร้างอัตโนมัติโดย scripts/split_kb.mjs จาก docs/VANILLA_MOVEMENT.md · ห้ามแก้มือ -->
> ขอบเขต: Java Edition วานิลลาเท่านั้น (ไม่มีมอด/ไคลเอนต์โกง) · เป้า: แปลงเป็นกฎให้บอต mineflayer
> แหล่ง: minecraft.wiki (ดึงผ่าน WebSearch เพราะ proxy บล็อกการเปิดหน้าโดยตรง → ได้เป็น "ข้อความย่อ" ไม่ใช่ทั้งหน้า)
> **ยังไม่ได้ดูวิดีโอ YouTube** (youtube.com ถูกบล็อก) → หมวด "เทคนิคจาก YouTube" รอ jing ส่งลิงก์/บทความ
> ตัวเลขวิกิส่วนใหญ่เป็นของ Java ปัจจุบัน ณ วันที่ค้น — ยังไม่ได้ยืนยันกับ 26.x ทีละค่า → ถือเป็น **ยืนยันระดับเอกสาร** เท่านั้น
> โค้ดคู่กัน: `lib/fall_safety.mjs` (ฟังก์ชันล้วน + เทส = ยืนยันระดับจำลอง)

| สถานการณ์ | ทำอย่างไร | แหล่ง |
|---|---|---|
| เดินใกล้ขอบหน้าผา | ถือ sneak → ไม่ตกขอบ | [Sneaking](https://minecraft.wiki/w/Sneaking) |
| ต่อสะพานข้ามช่อง | ย่อ + เดินถอยหลัง + มองลง แล้ววางบล็อกที่หน้าข้างของขอบ (sneak bridging) · สปีดบริดจ์/god bridge เป็นเทคนิคเซิร์ฟแข่ง (ไม่จำเป็นต่อบอต) | [Glossary](https://minecraft.wiki/w/Tutorial:Glossary) · [Tips and tricks](https://minecraft.wiki/w/Tutorial:Tips_and_tricks) |
| ขึ้นที่สูง (ต่อเสา) | กระโดด แล้ววางบล็อกใต้เท้าตอนลอย | [Pillar jumping](https://minecraft.wiki/w/Tutorial:Pillar_jumping) |
| ลงจากเสา | ขุดเสาตัวเองลงได้ (รู้ว่าข้างล่างไม่มีอะไร) — **เป็นกรณีเดียว**ที่ขุดลงตรงได้ | [Pillar jumping](https://minecraft.wiki/w/Tutorial:Pillar_jumping) |
| ขุดลงทั่วไป | ห้ามขุดลงตรง → ขุดเป็นขั้นบันได | [Things not to do](https://minecraft.wiki/w/Tutorial:Things_not_to_do) |
| ทราย/กรวดร่วงทับหัว | หายใจไม่ออก (suffocation) · วางคบเพลิงใต้ช่องที่ทรายจะตก → ทรายแตกเป็นไอเทม | [Falling Block](https://minecraft.wiki/w/Falling_Block) · [Sand](https://minecraft.wiki/w/Sand) |
| ช่องสูง 1 บล็อก | คลานหรือว่ายลอดได้ | [Swimming](https://minecraft.wiki/w/Swimming) |
| Slime block | sneak ตอนลง = ไม่เด้ง | [Jumping](https://minecraft.wiki/w/Jumping) |
