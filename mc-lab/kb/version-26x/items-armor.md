# ไอเทมและเกราะ

<!-- สร้างอัตโนมัติโดย scripts/split_kb.mjs จาก docs/wiki/version-26x.md · ห้ามแก้มือ -->
> แหล่งข้อมูล: ผลค้นหา minecraft.wiki เท่านั้น (snippet; ดึงหน้าตรงไม่ได้). `W = https://minecraft.wiki/w/`. ตัวเลขใดไม่มีใน snippet ระบุ [ไม่แน่ใจ]. ค้นเมื่อ 2026-10-07.

| รายการ | ข้อเท็จจริง | แหล่ง |
|---|---|---|
| netherite horse armor | เกราะ 19, toughness 3, knockback resist 1 | W/Java_Edition_1.21.11 |
| nautilus armor | 5 ระดับ; ค่าเกราะ 4 (ทองแดง) ถึง 19 (netherite); netherite ได้จากการ smith เท่านั้น ที่เหลือจาก loot | W/Nautilus_Armor |
| copper tools/armor (1.21.9) | ทนกว่า leather/gold แต่ต่ำกว่า iron; มีหอกทองแดง | W/Java_Edition_1.21.9 |
| ไอเทม durability | ไม่ "bob" เมื่อ durability เปลี่ยน | W/Java_Edition_1.21.11 |
| elytra | ร่อนผ่าน cave vines ฯลฯ ได้ | W/Java_Edition_1.21.11 |
- ผลต่อบอต: สูตรเกราะ/ดาเมจของผู้เล่นไม่พบการเปลี่ยนใน snippet [ไม่แน่ใจ]; เพิ่ม copper tier ในตารางวัสดุ/ลำดับเครื่องมือ; piglin ชอบหอกทอง/nautilus armor ทอง (ใช้ barter/ล่อ ได้).

**บอตควร:**
- เก็บ/คราฟต์หอก: ลำดับ netherite > เพชร > เหล็ก > หิน/ทองแดง; ทอง/ไม้ ดาเมจต่ำ ไม่ใช้ต่อสู้จริง (W/Spear).
- เพิ่ม copper tier ในตารางวัสดุ: ใช้เมื่อยังไม่มีเหล็ก (ทนกว่า leather/gold ต่ำกว่า iron, W/Java_Edition_1.21.9).
- ทองคำ 1 ชิ้นสำรองสำหรับ barter/ล่อ piglin [คิดเอง]; nautilus armor/netherite horse armor เก็บเฉพาะเมื่อมีสัตว์พาหนะ (ค่าเกราะ 19 ตามตาราง).
- ซ่อมหอกก่อน durability ต่ำ: Lunge กิน 1 durability ต่อ jab [คิดเอง ขีดจำกัด].

**ตัดสินผล:** เกณฑ์แล็บ: ภายใน 30 นาทีเกม (36,000 ticks) บอตต้องมี copper หรือเหล็กหอก >= 1 ชิ้นเมื่อเริ่มจากศูนย์ ถ้าไม่ได้ ถือว่า pipeline เก็บ/คราฟต์ล้ม [คิดเอง].
