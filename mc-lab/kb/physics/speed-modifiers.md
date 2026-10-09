# 2. ตัวหน่วง/เปลี่ยนความเร็ว

<!-- สร้างอัตโนมัติโดย scripts/split_kb.mjs จาก docs/playbook/BLOCK_PHYSICS.md · ห้ามแก้มือ -->
> ที่มา: ค้นผ่าน search snippet ของ minecraft.wiki เท่านั้น (ไม่ได้เปิดหน้าเต็ม). `[ไม่แน่ใจ]` = ไม่พบในผลค้น ห้ามถือเป็นตัวเลขจริง.
> หน่วย: "b/s" = บล็อก/วินาที, "tick" = 1/20 วินาที. ค่าความแข็ง/ทนทานบล็อกอยู่ที่ minecraft-data ไม่ซ้ำที่นี่.

| บล็อก | ผลต่อการเคลื่อนที่ | อันตราย | บอตควร/ห้าม | ตัวเลข | แหล่ง |
|---|---|---|---|---|---|
| Soul Sand | ช้าลง (speed factor 0.4), ยืนแล้วจมเล็กน้อย | — | เลี่ยงใน path cost; ใส่บูต Soul Speed ถ้ามี | factor 0.4 | [Soul Sand](https://minecraft.wiki/w/Soul_Sand) |
| Soul Soil | factor 0.4 แต่ไม่ได้ทำให้ช้าจริง แต่เปิดใช้ Soul Speed | — | เดินได้ปกติ | — | [Soul Soil](https://minecraft.wiki/w/Soul_Soil) |
| Soul Speed (บูต) | เร็วขึ้นบน soul sand/soil; ใช้ความทนทานบูต | บูตสึก | ถ้าบอตมีบูต ควรเดินทางเนเธอร์ผ่านทราย | ×(level×0.105 + 1.3): I +40.5%, II +51.0%, III +61.5% | [Soul Speed](https://minecraft.wiki/w/Soul_Speed) |
| Honey Block | ช้า, กระโดดแทบไม่ได้, ไถลลงผนังช้า (ไม่เจ็บ, เหมือนบันได) | — | อย่าให้ path ผ่านด้านบน; ใช้ไถลผนังลดดาเมจได้ | เดิน 2.508 b/s (ลด ~60%); กระโดด ~3/16 บล็อก (ลด 85%) | [Honey Block](https://minecraft.wiki/w/Honey_Block) |
| Cobweb | ช้ามาก กระโดดต่ำมาก | ติดกับดัก | ตัดด้วยดาบ/กรรไกร; Weaving ช่วย | เดิน ~25% (Weaving = 50%); 0.490 b/s ในอากาศ | [Cobweb](https://minecraft.wiki/w/Cobweb) |
| Sweet Berry Bush | ช้าลง กระโดดเต็มบล็อกไม่ได้ | 1 HP/tick (ลดเหลือทุก 0.5 วิ จาก immunity) เฉพาะตอนขยับ; stage ≥1; กันดาเมจตก | เลี่ยง; ใช้ลดดาเมจตกได้ | ความเร็ว ~34.05% | [Sweet Berries](https://minecraft.wiki/w/Sweet_Berries) |
| Powder Snow | ตกทะลุ, ช้าเหมือน cobweb, เหยียบได้ถ้าใส่ leather boots, ปีนได้ด้วยบูตหนัง | แช่แข็ง: ช้าลงถึง 50% ใน 140 tick แล้ว 1.5 HP ทุก 40 tick; เสื้อหนังกันได้ทุกชิ้น | อย่าเดินเข้า; ถ้ามี leather boots ใช้ข้ามได้; ตกลงบนผงหิมะไม่เจ็บ | 140 tick, 1.5 HP/40 tick | [Powder Snow](https://minecraft.wiki/w/Powder_Snow) |
| Mud | จมเล็กน้อย **ไม่ช้าลง** | — | เดินได้เหมือนปกติ (จุดเสี่ยงคือ step height) | — | [Mud](https://minecraft.wiki/w/Mud) |
| Bubble column (soul sand ขึ้น) | พาขึ้นแรง ยิ่งนานยิ่งเร็ว อาจดีดพ้นน้ำหลายบล็อก | — | ใช้เป็นลิฟต์ได้; ระวังดีดออกจากน้ำ | ~11 b/s | [Bubble Column](https://minecraft.wiki/w/Bubble_Column) |
| Bubble column (magma ลง) | ดึงลง (whirlpool) | จมน้ำถ้าอากาศหมด (มีฟองอากาศให้หายใจ) | หลีกเลี่ยงการว่ายลงหลุมแคนยอน | ~4.9 b/s | [Bubble Column](https://minecraft.wiki/w/Bubble_Column) |
| Scaffolding | ปีน: กระโดดขึ้น/sneak ลง; ยืนบนยอดได้ | ชนิด distance 7 → กลายเป็น falling block (พังถล่ม) | ตั้งไม่เกิน 6 บล็อกจากฐานรับ; sneak ตกกันเด้งดาเมจ | distance 0-7 | [Scaffolding](https://minecraft.wiki/w/Scaffolding) |
| น้ำ (กระแส) | ผลักตามทิศไหล; ว่ายทวน 0.39 b/s | — | ใช้ตามกระแสเพื่อเร่ง | ดูข้างบน | [Swimming](https://minecraft.wiki/w/Swimming) |
| ลาวา | ช้าลงแนวนอน 50%, แนวตั้ง 20%; ว่าย-sprint ไม่ได้ | ไฟ/ดาเมจสูง | **ห้ามเดินเข้า**; ใช้ Fire Resistance ก็ยังช้า | −50% / −20% | [Lava](https://minecraft.wiki/w/Lava) |
