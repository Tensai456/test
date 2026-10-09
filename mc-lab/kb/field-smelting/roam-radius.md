# เกินรัศมีตะเวน

<!-- สร้างอัตโนมัติโดย scripts/split_kb.mjs จาก docs/wiki/field-smelting.md · ห้ามแก้มือ -->
> W = https://minecraft.wiki/w/ · เวลาเผา/เชื้อเพลิง: kb/progression/smelting-fuel · โค้ด: `lib/economy/field_smelt.mjs` (smeltPlan) + `bot.brain.startSmelt / trailBack` (lib/adapter/mineflayer_brain.mjs)

- ห่างเตาเกินรัศมีที่คำนวณ → หันกลับ (กฎ smelt-roam-too-far prio 53) · ภัยด่วน (ม็อบ/ลาวา/ตก) ยังมาก่อนเสมอ
