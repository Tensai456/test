# 4. Parkour / Dropper / มุมกล้อง

<!-- สร้างอัตโนมัติโดย scripts/split_kb.mjs จาก docs/VANILLA_MOVEMENT.md · ห้ามแก้มือ -->
> ขอบเขต: Java Edition วานิลลาเท่านั้น (ไม่มีมอด/ไคลเอนต์โกง) · เป้า: แปลงเป็นกฎให้บอต mineflayer
> แหล่ง: minecraft.wiki (ดึงผ่าน WebSearch เพราะ proxy บล็อกการเปิดหน้าโดยตรง → ได้เป็น "ข้อความย่อ" ไม่ใช่ทั้งหน้า)
> **ยังไม่ได้ดูวิดีโอ YouTube** (youtube.com ถูกบล็อก) → หมวด "เทคนิคจาก YouTube" รอ jing ส่งลิงก์/บทความ
> ตัวเลขวิกิส่วนใหญ่เป็นของ Java ปัจจุบัน ณ วันที่ค้น — ยังไม่ได้ยืนยันกับ 26.x ทีละค่า → ถือเป็น **ยืนยันระดับเอกสาร** เท่านั้น
> โค้ดคู่กัน: `lib/fall_safety.mjs` (ฟังก์ชันล้วน + เทส = ยืนยันระดับจำลอง)

| คำศัพท์ | ความหมาย | แหล่ง |
|---|---|---|
| Sprint-jump | วิ่งแล้วกระโดดต่อเนื่อง = เร็วสุดที่ไม่มียา | [Glossary](https://minecraft.wiki/w/Tutorial:Glossary) |
| Quad | กระโดดข้ามช่อง 4 บล็อก = ไกลสุดที่ไม่มียา | [Glossary](https://minecraft.wiki/w/Tutorial:Glossary) |
| Neo | กระโดดอ้อมเสาหรือกำแพง (กลางอากาศเปลี่ยนทิศ) | [Glossary](https://minecraft.wiki/w/Tutorial:Glossary) |
| Headhitter | กระโดดชนเพดานซ้ำ ๆ → เร็วขึ้น และลด knockback แนวตั้ง | [Glossary](https://minecraft.wiki/w/Tutorial:Glossary) |
| Ladder jump | กระโดดจากหรือไปบันได · ปีนโดยกดกระโดดขณะชิดบันได | [Glossary](https://minecraft.wiki/w/Tutorial:Glossary) |
| Ice + เพดานต่ำ | วิ่งกระโดดบนน้ำแข็งใต้เพดาน 2 บล็อก ได้ ~16 บล็อก/วิ | [Transportation](https://minecraft.wiki/w/Transportation) |

- **Dropper** (แมปตกจากที่สูงลงน้ำ): ตกเร็วสุด ~78 บล็อก/วิ → มองลง แล้วใช้ WASD บังคับตัวกลางอากาศให้ตรงน้ำ · ความเร็วที่บังคับได้กลางอากาศ [ไม่แน่ใจ — รอวิดีโอ/บทความ]
- **มุมกล้อง** (ค่าเริ่มต้นสำหรับบอต ยังไม่ได้ยืนยันจากวิดีโอ): วางบล็อกใต้เท้าหรือ clutch = pitch −90° · sneak bridge = มองลงเกือบตรงไปทางหลัง [ไม่แน่ใจ: มุมจริงของผู้เล่น] · ต่อสู้ = เล็งที่ลำตัวหรือหัวเป้า
