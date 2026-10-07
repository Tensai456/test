# อาหารไม่พอ (นอกบ้าน)

<!-- สร้างอัตโนมัติโดย scripts/split_kb.mjs จาก docs/wiki/field-smelting.md · ห้ามแก้มือ -->
> W = https://minecraft.wiki/w/ · เวลาเผา/เชื้อเพลิง: kb/progression/smelting-fuel · โค้ด: `lib/economy/field_smelt.mjs` (smeltPlan) + `bot.brain.startSmelt / trailBack` (lib/adapter/mineflayer_brain.mjs)

- นับแต้มอาหารที่พก (ไม่นับเนื้อเน่า/ไก่ดิบ/ตาแมงมุม/มันพิษ/ปลาปักเป้า) · ขั้นต่ำ 20 แต้ม (หลอดหิว 1 หลอด — เกณฑ์แล็บ [ไม่แน่ใจ])
- ไม่พอ → ล่าสัตว์/เก็บพืชรอบเตา ≤50 บล็อก แล้วเผาเนื้อในเตาเดียวกัน (kb/breeding, kb/farming)
- บ้าน → กินจากหีบ (ไม่ต้องออกหา)
