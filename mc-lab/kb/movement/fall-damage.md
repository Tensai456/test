# 2. การตก (Fall damage)

<!-- สร้างอัตโนมัติโดย scripts/split_kb.mjs จาก docs/VANILLA_MOVEMENT.md · ห้ามแก้มือ -->
> ขอบเขต: Java Edition วานิลลาเท่านั้น (ไม่มีมอด/ไคลเอนต์โกง) · เป้า: แปลงเป็นกฎให้บอต mineflayer
> แหล่ง: minecraft.wiki (ดึงผ่าน WebSearch เพราะ proxy บล็อกการเปิดหน้าโดยตรง → ได้เป็น "ข้อความย่อ" ไม่ใช่ทั้งหน้า)
> **ยังไม่ได้ดูวิดีโอ YouTube** (youtube.com ถูกบล็อก) → หมวด "เทคนิคจาก YouTube" รอ jing ส่งลิงก์/บทความ
> ตัวเลขวิกิส่วนใหญ่เป็นของ Java ปัจจุบัน ณ วันที่ค้น — ยังไม่ได้ยืนยันกับ 26.x ทีละค่า → ถือเป็น **ยืนยันระดับเอกสาร** เท่านั้น
> โค้ดคู่กัน: `lib/fall_safety.mjs` (ฟังก์ชันล้วน + เทส = ยืนยันระดับจำลอง)

| กฎ | รายละเอียด | แหล่ง |
|---|---|---|
| ระยะปลอดภัย | ตก ≤3 บล็อก ไม่เสียเลือด | [Damage](https://minecraft.wiki/w/Damage#Fall_damage) |
| สูตร | ดาเมจ ≈ (ระยะตก − 3) HP (1 HP = ครึ่งหัวใจ) · คิดจาก "ระยะ Y ที่ตก" ไม่ใช่ความเร็ว | [Damage](https://minecraft.wiki/w/Damage) — การปัดเศษ [ไม่แน่ใจ] |
| เกราะธรรมดา | **ไม่ลด**ดาเมจตก · Protection/Feather Falling ลดได้ | [Damage](https://minecraft.wiki/w/Damage) |
| Feather Falling | ลด 12%/เลเวล สูงสุด 48% (IV) | [Feather Falling](https://minecraft.wiki/w/Feather_Falling) |
| Slow Falling | ไม่เสียเลือดเลย · ถ้ายาหมดกลางอากาศ นับระยะตั้งแต่จุดที่ยาหมด | [Slow Falling](https://minecraft.wiki/w/Slow_Falling) |
| ตกใส่หินย้อย (pointed dripstone ปลายตั้ง) | ระยะตก ×2 → อันตรายมาก | [Pointed Dripstone](https://minecraft.wiki/w/Pointed_Dripstone) |

ตัวอย่าง (เลือดเต็ม 20 HP, ไม่มีเอนชานต์): ตก 4 บล็อก = 1 HP · 10 = 7 · 13 = 10 (ครึ่งหลอด) · **23 บล็อก = 20 HP = ตาย** · ตกหินย้อย 12 บล็อก ≈ ตาย
