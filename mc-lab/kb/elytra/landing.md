# การลงจอดและ fall damage

<!-- สร้างอัตโนมัติโดย scripts/split_kb.mjs จาก docs/wiki/elytra.md · ห้ามแก้มือ -->
> W = https://minecraft.wiki/w/ (หน้าอ้างอิง: W/Elytra, W/Firework_Rocket, W/Phantom_Membrane, W/Mace, W/Damage, W/Feather_Falling, W/Item_frame)
> ที่มา: ผลค้นหา snippet เท่านั้น (ดึงหน้าตรงไม่ได้); ค่าเกณฑ์แล็บ = เกณฑ์ที่ตั้งเอง ไม่ใช่ค่าจาก wiki

| ข้อเท็จจริง | แหล่ง |
|---|---|
| ร่อนที่การเคลื่อนที่ขึ้น/ระดับ/ลงน้อยกว่า 0.5 blocks/tick ล้าง fall distance | W/Elytra (snippet) |
| ลงชันกว่า ~50° อาจโดน fall damage | W/Elytra (snippet) |

บอตควร: ลดความสูงแบบมุมตื้น ๆ (flare) ใกล้พื้น แล้วแตะพื้นช้า; เล็งที่ว่างโล่ง ไม่ใช่ผนัง/ต้นไม้
ตัดสินผล: (เกณฑ์แล็บ) ลงสำเร็จ = HP เสียน้อยกว่า 1 หัวใจ; มุมลงสุดท้ายตั้งเป้า < 30°
