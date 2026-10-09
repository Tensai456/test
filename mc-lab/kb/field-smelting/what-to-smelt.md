# เผาอะไร (ไม่เผาอะไร)

<!-- สร้างอัตโนมัติโดย scripts/split_kb.mjs จาก docs/wiki/field-smelting.md · ห้ามแก้มือ -->
> W = https://minecraft.wiki/w/ · เวลาเผา/เชื้อเพลิง: kb/progression/smelting-fuel · โค้ด: `lib/economy/field_smelt.mjs` (smeltPlan) + `bot.brain.startSmelt / trailBack` (lib/adapter/mineflayer_brain.mjs)

- **ต้องเผา:** raw iron → เหล็ก · raw gold → ทอง · raw copper → ทองแดง · ancient debris → netherite scrap (W/Smelting)
- **ห้ามเผา:** เพชร ถ่าน เรดสโตน ลาพิส มรกต — ขุดแล้วได้ของเลย (เผาซ้ำ = เปลืองเชื้อเพลิง) → veto smelt-no-need
- เผาเฉพาะที่ "ต้องใช้": เหล็กเสมอ · ทองพอทำรองเท้า (กฎ jing ทองใช้แค่รองเท้า = 4 แท่ง) · ทองแดงเมื่อมีงานใช้
