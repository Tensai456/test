# 2.1 พื้นที่ลด/กันดาเมจตก

<!-- สร้างอัตโนมัติโดย scripts/split_kb.mjs จาก docs/VANILLA_MOVEMENT.md › 2. การตก (Fall damage) · ห้ามแก้มือ -->
> ขอบเขต: Java Edition วานิลลาเท่านั้น (ไม่มีมอด/ไคลเอนต์โกง) · เป้า: แปลงเป็นกฎให้บอต mineflayer
> แหล่ง: minecraft.wiki (ดึงผ่าน WebSearch เพราะ proxy บล็อกการเปิดหน้าโดยตรง → ได้เป็น "ข้อความย่อ" ไม่ใช่ทั้งหน้า)
> **ยังไม่ได้ดูวิดีโอ YouTube** (youtube.com ถูกบล็อก) → หมวด "เทคนิคจาก YouTube" รอ jing ส่งลิงก์/บทความ
> ตัวเลขวิกิส่วนใหญ่เป็นของ Java ปัจจุบัน ณ วันที่ค้น — ยังไม่ได้ยืนยันกับ 26.x ทีละค่า → ถือเป็น **ยืนยันระดับเอกสาร** เท่านั้น
> โค้ดคู่กัน: `lib/fall_safety.mjs` (ฟังก์ชันล้วน + เทส = ยืนยันระดับจำลอง)

| พื้น/สิ่งที่ตกใส่ | ผล | หมายเหตุ | แหล่ง |
|---|---|---|---|
| น้ำ (1 บล็อกก็พอ) | 0 | **ใช้ในนรกไม่ได้** (ระเหย) · เทใส่ใบไม้/บล็อกเต็มจะกลายเป็น waterlog | [Breaking a fall](https://minecraft.wiki/w/Tutorial:Breaking_a_fall) |
| Powder snow | 0 (รีเซ็ตระยะตก) | ใช้ในนรกได้ | [Powder Snow](https://minecraft.wiki/w/Powder_Snow) |
| ใยแมงมุม (cobweb) | 0 | | [Cobweb](https://minecraft.wiki/w/Cobweb) |
| Slime block | 0 แต่เด้ง · กด sneak ตอนลงจะไม่เด้ง | | [Breaking a fall](https://minecraft.wiki/w/Tutorial:Breaking_a_fall) |
| บันได/เถาวัลย์ (เกาะได้) | 0 (รีเซ็ตระยะตก) | ต้องมีผนังให้วาง | [Breaking a fall](https://minecraft.wiki/w/Tutorial:Breaking_a_fall) |
| Scaffolding + sneak | 0 | | [Scaffolding](https://minecraft.wiki/w/Scaffolding) |
| เรือ (วางแล้วขึ้นก่อนถึงพื้น) | 0 | ต้องจังหวะเป๊ะ | [Breaking a fall](https://minecraft.wiki/w/Tutorial:Breaking_a_fall) |
| Sweet berry bush | 0 | | [Breaking a fall](https://minecraft.wiki/w/Tutorial:Breaking_a_fall) |
| Twisting/weeping vines (นรก) | 0 | ใช้แทนน้ำในนรก | [Breaking a fall](https://minecraft.wiki/w/Tutorial:Breaking_a_fall) |
| Hay bale / Honey block | เหลือ 20% (ลด 80%) | ตกจาก 100 บล็อกก็ยังรอดได้ | [Hay Bale](https://minecraft.wiki/w/Hay_Bale) · [Honey Block](https://minecraft.wiki/w/Honey_Block) |
| เตียง | ระยะตก ×0.5 | | [Bed](https://minecraft.wiki/w/Bed) |
| ไข่มุก (ender pearl) | ตัดดาเมจตกทิ้ง เหลือดาเมจไข่มุก ~5 HP (2.5 หัวใจ) | ปาเร็วเกินไป = ยังตกตาย | [Breaking a fall](https://minecraft.wiki/w/Tutorial:Breaking_a_fall) |
| โดนลูกลม (wind charge) | รีเซ็ตระยะตก | ปาลูกเดียวพุ่งได้สูงสุด ~11 บล็อก | [Wind Charge](https://minecraft.wiki/w/Wind_Charge) |
| ทุบกระบอง (mace smash) โดนเป้า | รีเซ็ตระยะตกเป็นจุดที่ตี → ไม่เสียเลือดตก | ต้องตกมา ≥1.5 บล็อก | [Mace](https://minecraft.wiki/w/Mace) |
