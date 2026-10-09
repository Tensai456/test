# 1. ความเร็ว/การกระโดด (ตัวเลขฐาน)

<!-- สร้างอัตโนมัติโดย scripts/split_kb.mjs จาก docs/VANILLA_MOVEMENT.md · ห้ามแก้มือ -->
> ขอบเขต: Java Edition วานิลลาเท่านั้น (ไม่มีมอด/ไคลเอนต์โกง) · เป้า: แปลงเป็นกฎให้บอต mineflayer
> แหล่ง: minecraft.wiki (ดึงผ่าน WebSearch เพราะ proxy บล็อกการเปิดหน้าโดยตรง → ได้เป็น "ข้อความย่อ" ไม่ใช่ทั้งหน้า)
> **ยังไม่ได้ดูวิดีโอ YouTube** (youtube.com ถูกบล็อก) → หมวด "เทคนิคจาก YouTube" รอ jing ส่งลิงก์/บทความ
> ตัวเลขวิกิส่วนใหญ่เป็นของ Java ปัจจุบัน ณ วันที่ค้น — ยังไม่ได้ยืนยันกับ 26.x ทีละค่า → ถือเป็น **ยืนยันระดับเอกสาร** เท่านั้น
> โค้ดคู่กัน: `lib/fall_safety.mjs` (ฟังก์ชันล้วน + เทส = ยืนยันระดับจำลอง)

| การเคลื่อนที่ | ค่า | แหล่ง |
|---|---|---|
| เดิน | 4.317 บล็อก/วิ | [Walking](https://minecraft.wiki/w/Walking) |
| วิ่ง (sprint) | 5.612 บล็อก/วิ (+30%) | [Sprinting](https://minecraft.wiki/w/Sprinting) |
| วิ่ง+กระโดดต่อเนื่อง | เฉลี่ย 7.127 บล็อก/วิ (เร็วสุดที่ไม่มียา) | [Sprinting](https://minecraft.wiki/w/Sprinting) |
| ย่อ (sneak) | ~1.3 บล็อก/วิ (ทแยง 2 ปุ่ม ~1.8) | [Sneaking](https://minecraft.wiki/w/Sneaking) |
| ว่ายแบบวิ่ง (sprint-swim) | 3.918 บล็อก/วิ · ลอดช่อง 1 บล็อกได้ | [Swimming](https://minecraft.wiki/w/Swimming) |
| ปีนบันได/เถาวัลย์ ขึ้น / ลง | 2.35 / 3.0 บล็อก/วิ | [Transportation](https://minecraft.wiki/w/Transportation) |
| เดินบน soul sand | 2.508 บล็อก/วิ | [Transportation](https://minecraft.wiki/w/Transportation) |
| กระโดดสูงสุด | ~1.2522 บล็อก (ข้ามบล็อกเดียวได้ ข้าม 2 ไม่ได้) | [Jumping](https://minecraft.wiki/w/Jumping) |
| ระยะกระโดดไกลสุดตอนวิ่ง | ~4.225 บล็อก → ข้ามช่องว่าง 4 บล็อก ("quad") ได้ | [Sprinting](https://minecraft.wiki/w/Sprinting) · [Glossary](https://minecraft.wiki/w/Tutorial:Glossary) |
| วิ่งกระโดดใต้เพดาน 2 บล็อก | ระยะกระโดดเพิ่มเป็น ~5 บล็อก | [Sprinting](https://minecraft.wiki/w/Sprinting) |
| เงื่อนไขวิ่งได้ | หลอดหิว > 6 (≤6 วิ่งไม่ได้) · ติด Blindness วิ่งไม่ได้ | [Sprinting](https://minecraft.wiki/w/Sprinting) |

**ค่าฟิสิกส์ต่อ tick (ใช้ในโค้ดจำลอง):** แรงโน้มถ่วง 0.08 บล็อก/tick² · แรงต้านแนวตั้ง ×0.98/tick → ความเร็วตกปลายทาง ≈3.92 บล็อก/tick (≈78 บล็อก/วิ) — ค่าเดียวกับที่ฟิสิกส์ของ mineflayer (prismarine-physics) ใช้ [ไม่แน่ใจ: ยังไม่ได้ยืนยันกับหน้าวิกิในรอบนี้]

**บอตควรรู้:**
- ช่องว่าง ≤1 บล็อก → เดินข้ามได้ · 2–3 บล็อก → ต้องวิ่งกระโดด · 4 บล็อก → ต้องวิ่งกระโดดจากขอบพอดี (เสี่ยง) · ≥5 → ห้ามกระโดด ให้ต่อสะพาน
- อาหาร ≤6 → วิ่งไม่ได้ → กระโดดข้าม 3–4 บล็อกจะพลาด → **กินก่อนค่อยกระโดด**
