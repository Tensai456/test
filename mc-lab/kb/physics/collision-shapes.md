# 5. Collision shape ที่ดัก/สะดุด

<!-- สร้างอัตโนมัติโดย scripts/split_kb.mjs จาก docs/playbook/BLOCK_PHYSICS.md · ห้ามแก้มือ -->
> ที่มา: ค้นผ่าน search snippet ของ minecraft.wiki เท่านั้น (ไม่ได้เปิดหน้าเต็ม). `[ไม่แน่ใจ]` = ไม่พบในผลค้น ห้ามถือเป็นตัวเลขจริง.
> หน่วย: "b/s" = บล็อก/วินาที, "tick" = 1/20 วินาที. ค่าความแข็ง/ทนทานบล็อกอยู่ที่ minecraft-data ไม่ซ้ำที่นี่.

| บล็อก | ความสูงชนจริง | ผลต่อบอต | แหล่ง |
|---|---|---|---|
| Fence / Fence gate (ปิด) / Wall | **1.5 บล็อก** (hitbox 1 บล็อก) กระโดดข้ามไม่ได้ (กระโดดปกติ ~1.25) | ต้องเปิดประตู/ใช้ Jump Boost; ห้ามวางแผนข้ามด้วยการกระโดด | [Fence](https://minecraft.wiki/w/Fence), [Wall](https://minecraft.wiki/w/Wall); gate [ไม่แน่ใจ ใน snippet] |
| Slab (ล่าง) | 0.5 → ขึ้นได้โดยไม่กระโดด (step 0.6) แต่ wiki เตือนบล็อกสูง ≥ 7/8 ต้องกระโดดหลายกรณี | เดินขึ้นจากบล็อกเตี้ยกว่า 0.6 ไม่ได้ในบางกรณี | [Slab](https://minecraft.wiki/w/Slab) (snippet จำกัด) |
| Stairs | เดินขึ้นโดยไม่กระโดด ไม่เสีย exhaustion (กระโดด 0.2/ครั้ง) | path ผ่านได้ถูกกว่า | [Stairs](https://minecraft.wiki/w/Stairs) |
| Snow layer | layer1: ไม่ชน; layer2 = 0.125; layer4 = 0.375 (เพิ่ม 2 px ต่อชั้นหลัง) | ชั้นสูงอาจต้องกระโดด | [Snow](https://minecraft.wiki/w/Snow) |
| Dirt Path, Farmland | 15/16 บล็อก (ตัวเตี้ยกว่าปกติ) | ยืนต่ำลงเล็กน้อย | [Dirt Path](https://minecraft.wiki/w/Dirt_Path) |
| Farmland | กระโดด/ตกใส่ → โอกาสโดนเหยียบ = (fall − 0.5)×100% (ต้องมี mobGriefing) | **ห้ามกระโดด/ตกใส่ไร่** ใช้ sneak ไม่เหยียบ [ไม่แน่ใจ: ใน snippet ระบุเฉพาะ fall distance] | [Farmland](https://minecraft.wiki/w/Farmland) |
| Carpet, Trapdoor (crawl), Door, Chain, Glass pane, Iron bars | [ไม่แน่ใจ ไม่พบตัวเลขใน snippet] | — | — |
| Magma Block | 1 HP ทุก 0.5 วิ ถ้าเดินบน; กัน: sneak / Fire Resistance / Frost Walker | ห้ามเดิน, sneak ได้ | [Magma Block](https://minecraft.wiki/w/Magma_Block) |
| Campfire / Soul Campfire | 1 HP / 2 HP ทุก 0.5 วิ | หลีกเลี่ยง | [Soul Campfire](https://minecraft.wiki/w/Soul_Campfire) |
| Cactus | 1 HP/tick (immunity → ทุก 0.5 วิ) เมื่อแตะ | อย่าเดินชิด | [Cactus](https://minecraft.wiki/w/Cactus) |
| Wither Rose | Wither effect 1 HP ทุก 0.5 วิ ค้างอีก 1 วิ (ไม่ใช่ Peaceful) | อย่าเดินทับ | [Wither Rose](https://minecraft.wiki/w/Wither_Rose) |
| Sculk Sensor/Shrieker | ตรวจสั่นสะเทือนรัศมี 8 บล็อก; **ผู้เล่นที่ sneak และขยับ/กระโดด/ตกไม่ถูกตรวจ**; shrieker ถูกกระตุ้นจาก sensor ใน 8 บล็อกเฉพาะที่เกิดจากผู้เล่น; สัญญาณเดินทาง 1 บล็อก/tick | ใน Deep Dark: **sneak ตลอด** เลี่ยง Warden | [Sculk Sensor](https://minecraft.wiki/w/Sculk_Sensor), [Sculk Shrieker](https://minecraft.wiki/w/Sculk_Shrieker) |
