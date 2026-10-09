# DECISION_COVERAGE — ทุกชุดความเป็นไปได้ → บอตตัดสินใจอะไร

> สร้างโดย `node scripts/fuzz_decide.mjs` · 3,010,560 สถานะ (เลือด 8 × หิว 7 × มิติ 3 × เวลา 4 × อันตราย 14 × ม็อบ 20 × ของ 8 × บริบท 2)
> ใช้ตอนลองจริง: ดูแถวที่ตรงกับเหตุการณ์ → บอตควรทำตามคอลัมน์ "ส่วนใหญ่ทำ" · ถ้าบอตจริงทำต่าง = บั๊ก หรือกฎใน data/ ต้องปรับ · ยืนยันระดับจำลองเท่านั้น

## 1. กฎที่ต้องไม่ผิด (invariant)

| กฎ | ผล | ตัวอย่างที่ผิด |
|---|---|---|
| อยู่ในลาวา → ต้องหนีลาวาก่อนทุกอย่าง | ✅ ผ่านทุกสถานะ |  |
| สถานะอันตราย → ห้ามทำแผนต่อ (ต้องเป็น reflex) | ✅ ผ่านทุกสถานะ |  |
| ห้ามกินตอนศัตรูอยู่ในระยะ 6 | ✅ ผ่านทุกสถานะ |  |
| ห้ามสั่ง "สู้" ตอน warden อยู่ใกล้ | ✅ ผ่านทุกสถานะ |  |
| นรก: มีแค่ถังน้ำ ห้ามเลือก clutch (น้ำระเหย) | ✅ ผ่านทุกสถานะ |  |
| เลือด <8 และไม่มีอันตราย/ศัตรู → ห้ามทำแผนต่อ | ✅ ผ่านทุกสถานะ |  |
| ศัตรูอยู่ในระยะ 10 → ห้ามทำแผนต่อเฉย ๆ | ✅ ผ่านทุกสถานะ |  |
| ม็อบยิงไกลในระยะ 16 → ห้าม "ยืนรอให้เข้ามา" | ✅ ผ่านทุกสถานะ |  |
| ครีปเปอร์ + ซอมบี้ประชิด → จัดการครีปเปอร์ก่อน (เว้นอันตรายที่สูงกว่า) | ✅ ผ่านทุกสถานะ |  |
| นอนนอก overworld → ต้องมี veto ห้ามนอนเสมอ | ✅ ผ่านทุกสถานะ |  |
| ขุดลงตรง → ต้องมี veto · เครื่องมือผิด → ห้ามทำแผนต่อเฉย ๆ | ✅ ผ่านทุกสถานะ |  |
| เพิ่งตาย + ปลอดภัย → ต้องกลับไปเก็บของ (หรือเรื่องที่ด่วนกว่า) | ✅ ผ่านทุกสถานะ |  |
| ทะเลทรายไม่มีไม้ + ปลอดภัย → ห้ามวนหาไม้แบบเดิม (plan:logs) | ✅ ผ่านทุกสถานะ |  |
| ทุกการตัดสินใจต้องชี้ความรู้ใน kb | ✅ ผ่านทุกสถานะ |  |

## 2. ตารางตัดสินใจ: อันตราย × ม็อบ (รวมทุกเลือด/หิว/มิติ/เวลา/ของ)

| อันตราย | ม็อบ | ส่วนใหญ่ทำ | อื่น ๆ |
|---|---|---|---|
| none | none | eat-to-regen (33%) | sculk-near 13% · no-food 11% · hungry 10% |
| none | zombie2 | hostile-close (59%) | low-hp-in-combat 38% · sculk-near 4% |
| none | zombie7 | eat-to-regen (30%) | hostile-approach 23% · no-food 16% · nether-no-gold 9% |
| none | husk3 | hostile-close (59%) | low-hp-in-combat 38% · sculk-near 4% |
| none | drowned3 | hostile-close (59%) | low-hp-in-combat 38% · sculk-near 4% |
| none | spider3 | hostile-close (59%) | low-hp-in-combat 38% · sculk-near 4% |
| none | creeper2 | creeper-fusing (100%) |  |
| none | creeper8 | eat-to-regen (33%) | hostile-approach 20% · sculk-near 13% · no-food 11% |
| none | skeleton6 | skeleton-open (59%) | low-hp-in-combat 38% · sculk-near 4% |
| none | skeleton12 | skeleton-open (94%) | sculk-near 6% |
| none | warden4 | warden-near (63%) | low-hp-in-combat 38% |
| none | warden25 | eat-to-regen (30%) | no-food 16% · nether-no-gold 11% · recover 8% |
| none | enderman20 | enderman-near (36%) | eat-to-regen 30% · no-food 16% · hungry 8% |
| none | ghast30 | ghast-fireball (100%) |  |
| none | brute6 | brute-near (63%) | low-hp-in-combat 38% |
| none | blaze10 | blaze-ranged (94%) | sculk-near 6% |
| none | witherSk3 | hostile-close (59%) | low-hp-in-combat 38% · sculk-near 4% |
| none | breeze8 | breeze-ranged (94%) | sculk-near 6% |
| none | pair_creeper_zombie | creeper-fusing (100%) |  |
| none | pair_skeleton_zombie | hostile-close (59%) | low-hp-in-combat 38% · sculk-near 4% |
| lava | none | in-lava (100%) |  |
| lava | zombie2 | in-lava (100%) |  |
| lava | zombie7 | in-lava (100%) |  |
| lava | husk3 | in-lava (100%) |  |
| lava | drowned3 | in-lava (100%) |  |
| lava | spider3 | in-lava (100%) |  |
| lava | creeper2 | in-lava (100%) |  |
| lava | creeper8 | in-lava (100%) |  |
| lava | skeleton6 | in-lava (100%) |  |
| lava | skeleton12 | in-lava (100%) |  |
| lava | warden4 | in-lava (100%) |  |
| lava | warden25 | in-lava (100%) |  |
| lava | enderman20 | in-lava (100%) |  |
| lava | ghast30 | in-lava (100%) |  |
| lava | brute6 | in-lava (100%) |  |
| lava | blaze10 | in-lava (100%) |  |
| lava | witherSk3 | in-lava (100%) |  |
| lava | breeze8 | in-lava (100%) |  |
| lava | pair_creeper_zombie | in-lava (100%) |  |
| lava | pair_skeleton_zombie | in-lava (100%) |  |
| fire | none | on-fire (100%) |  |
| fire | zombie2 | on-fire (100%) |  |
| fire | zombie7 | on-fire (100%) |  |
| fire | husk3 | on-fire (100%) |  |
| fire | drowned3 | on-fire (100%) |  |
| fire | spider3 | on-fire (100%) |  |
| fire | creeper2 | creeper-fusing (100%) |  |
| fire | creeper8 | on-fire (100%) |  |
| fire | skeleton6 | on-fire (100%) |  |
| fire | skeleton12 | on-fire (100%) |  |
| fire | warden4 | on-fire (100%) |  |
| fire | warden25 | on-fire (100%) |  |
| fire | enderman20 | on-fire (100%) |  |
| fire | ghast30 | on-fire (100%) |  |
| fire | brute6 | on-fire (100%) |  |
| fire | blaze10 | on-fire (100%) |  |
| fire | witherSk3 | on-fire (100%) |  |
| fire | breeze8 | on-fire (100%) |  |
| fire | pair_creeper_zombie | creeper-fusing (100%) |  |
| fire | pair_skeleton_zombie | on-fire (100%) |  |
| fall5 | none | falling-no-clutch (50%) | falling 50% |
| fall5 | zombie2 | falling-no-clutch (50%) | falling 50% |
| fall5 | zombie7 | falling-no-clutch (50%) | falling 50% |
| fall5 | husk3 | falling-no-clutch (50%) | falling 50% |
| fall5 | drowned3 | falling-no-clutch (50%) | falling 50% |
| fall5 | spider3 | falling-no-clutch (50%) | falling 50% |
| fall5 | creeper2 | falling-no-clutch (50%) | falling 50% |
| fall5 | creeper8 | falling-no-clutch (50%) | falling 50% |
| fall5 | skeleton6 | falling-no-clutch (50%) | falling 50% |
| fall5 | skeleton12 | falling-no-clutch (50%) | falling 50% |
| fall5 | warden4 | falling-no-clutch (50%) | falling 50% |
| fall5 | warden25 | falling-no-clutch (50%) | falling 50% |
| fall5 | enderman20 | falling-no-clutch (50%) | falling 50% |
| fall5 | ghast30 | falling-no-clutch (50%) | falling 50% |
| fall5 | brute6 | falling-no-clutch (50%) | falling 50% |
| fall5 | blaze10 | falling-no-clutch (50%) | falling 50% |
| fall5 | witherSk3 | falling-no-clutch (50%) | falling 50% |
| fall5 | breeze8 | falling-no-clutch (50%) | falling 50% |
| fall5 | pair_creeper_zombie | falling-no-clutch (50%) | falling 50% |
| fall5 | pair_skeleton_zombie | falling-no-clutch (50%) | falling 50% |
| fall10 | none | falling-no-clutch (50%) | falling 50% |
| fall10 | zombie2 | falling-no-clutch (50%) | falling 50% |
| fall10 | zombie7 | falling-no-clutch (50%) | falling 50% |
| fall10 | husk3 | falling-no-clutch (50%) | falling 50% |
| fall10 | drowned3 | falling-no-clutch (50%) | falling 50% |
| fall10 | spider3 | falling-no-clutch (50%) | falling 50% |
| fall10 | creeper2 | falling-no-clutch (50%) | falling 50% |
| fall10 | creeper8 | falling-no-clutch (50%) | falling 50% |
| fall10 | skeleton6 | falling-no-clutch (50%) | falling 50% |
| fall10 | skeleton12 | falling-no-clutch (50%) | falling 50% |
| fall10 | warden4 | falling-no-clutch (50%) | falling 50% |
| fall10 | warden25 | falling-no-clutch (50%) | falling 50% |
| fall10 | enderman20 | falling-no-clutch (50%) | falling 50% |
| fall10 | ghast30 | falling-no-clutch (50%) | falling 50% |
| fall10 | brute6 | falling-no-clutch (50%) | falling 50% |
| fall10 | blaze10 | falling-no-clutch (50%) | falling 50% |
| fall10 | witherSk3 | falling-no-clutch (50%) | falling 50% |
| fall10 | breeze8 | falling-no-clutch (50%) | falling 50% |
| fall10 | pair_creeper_zombie | falling-no-clutch (50%) | falling 50% |
| fall10 | pair_skeleton_zombie | falling-no-clutch (50%) | falling 50% |
| fall30 | none | falling-no-clutch (50%) | falling 50% |
| fall30 | zombie2 | falling-no-clutch (50%) | falling 50% |
| fall30 | zombie7 | falling-no-clutch (50%) | falling 50% |
| fall30 | husk3 | falling-no-clutch (50%) | falling 50% |
| fall30 | drowned3 | falling-no-clutch (50%) | falling 50% |
| fall30 | spider3 | falling-no-clutch (50%) | falling 50% |
| fall30 | creeper2 | falling-no-clutch (50%) | falling 50% |
| fall30 | creeper8 | falling-no-clutch (50%) | falling 50% |
| fall30 | skeleton6 | falling-no-clutch (50%) | falling 50% |
| fall30 | skeleton12 | falling-no-clutch (50%) | falling 50% |
| fall30 | warden4 | falling-no-clutch (50%) | falling 50% |
| fall30 | warden25 | falling-no-clutch (50%) | falling 50% |
| fall30 | enderman20 | falling-no-clutch (50%) | falling 50% |
| fall30 | ghast30 | falling-no-clutch (50%) | falling 50% |
| fall30 | brute6 | falling-no-clutch (50%) | falling 50% |
| fall30 | blaze10 | falling-no-clutch (50%) | falling 50% |
| fall30 | witherSk3 | falling-no-clutch (50%) | falling 50% |
| fall30 | breeze8 | falling-no-clutch (50%) | falling 50% |
| fall30 | pair_creeper_zombie | falling-no-clutch (50%) | falling 50% |
| fall30 | pair_skeleton_zombie | falling-no-clutch (50%) | falling 50% |
| fall60 | none | falling-no-clutch (50%) | falling 50% |
| fall60 | zombie2 | falling-no-clutch (50%) | falling 50% |
| fall60 | zombie7 | falling-no-clutch (50%) | falling 50% |
| fall60 | husk3 | falling-no-clutch (50%) | falling 50% |
| fall60 | drowned3 | falling-no-clutch (50%) | falling 50% |
| fall60 | spider3 | falling-no-clutch (50%) | falling 50% |
| fall60 | creeper2 | falling-no-clutch (50%) | falling 50% |
| fall60 | creeper8 | falling-no-clutch (50%) | falling 50% |
| fall60 | skeleton6 | falling-no-clutch (50%) | falling 50% |
| fall60 | skeleton12 | falling-no-clutch (50%) | falling 50% |
| fall60 | warden4 | falling-no-clutch (50%) | falling 50% |
| fall60 | warden25 | falling-no-clutch (50%) | falling 50% |
| fall60 | enderman20 | falling-no-clutch (50%) | falling 50% |
| fall60 | ghast30 | falling-no-clutch (50%) | falling 50% |
| fall60 | brute6 | falling-no-clutch (50%) | falling 50% |
| fall60 | blaze10 | falling-no-clutch (50%) | falling 50% |
| fall60 | witherSk3 | falling-no-clutch (50%) | falling 50% |
| fall60 | breeze8 | falling-no-clutch (50%) | falling 50% |
| fall60 | pair_creeper_zombie | falling-no-clutch (50%) | falling 50% |
| fall60 | pair_skeleton_zombie | falling-no-clutch (50%) | falling 50% |
| drowning | none | drowning (100%) |  |
| drowning | zombie2 | drowning (100%) |  |
| drowning | zombie7 | drowning (100%) |  |
| drowning | husk3 | drowning (100%) |  |
| drowning | drowned3 | drowning (100%) |  |
| drowning | spider3 | drowning (100%) |  |
| drowning | creeper2 | drowning (100%) |  |
| drowning | creeper8 | drowning (100%) |  |
| drowning | skeleton6 | drowning (100%) |  |
| drowning | skeleton12 | drowning (100%) |  |
| drowning | warden4 | drowning (100%) |  |
| drowning | warden25 | drowning (100%) |  |
| drowning | enderman20 | drowning (100%) |  |
| drowning | ghast30 | drowning (100%) |  |
| drowning | brute6 | drowning (100%) |  |
| drowning | blaze10 | drowning (100%) |  |
| drowning | witherSk3 | drowning (100%) |  |
| drowning | breeze8 | drowning (100%) |  |
| drowning | pair_creeper_zombie | drowning (100%) |  |
| drowning | pair_skeleton_zombie | drowning (100%) |  |
| suffocating | none | suffocating (100%) |  |
| suffocating | zombie2 | suffocating (100%) |  |
| suffocating | zombie7 | suffocating (100%) |  |
| suffocating | husk3 | suffocating (100%) |  |
| suffocating | drowned3 | suffocating (100%) |  |
| suffocating | spider3 | suffocating (100%) |  |
| suffocating | creeper2 | suffocating (100%) |  |
| suffocating | creeper8 | suffocating (100%) |  |
| suffocating | skeleton6 | suffocating (100%) |  |
| suffocating | skeleton12 | suffocating (100%) |  |
| suffocating | warden4 | suffocating (100%) |  |
| suffocating | warden25 | suffocating (100%) |  |
| suffocating | enderman20 | suffocating (100%) |  |
| suffocating | ghast30 | suffocating (100%) |  |
| suffocating | brute6 | suffocating (100%) |  |
| suffocating | blaze10 | suffocating (100%) |  |
| suffocating | witherSk3 | suffocating (100%) |  |
| suffocating | breeze8 | suffocating (100%) |  |
| suffocating | pair_creeper_zombie | suffocating (100%) |  |
| suffocating | pair_skeleton_zombie | suffocating (100%) |  |
| freezing | none | freezing (100%) |  |
| freezing | zombie2 | freezing (100%) |  |
| freezing | zombie7 | freezing (100%) |  |
| freezing | husk3 | freezing (100%) |  |
| freezing | drowned3 | freezing (100%) |  |
| freezing | spider3 | freezing (100%) |  |
| freezing | creeper2 | creeper-fusing (100%) |  |
| freezing | creeper8 | freezing (100%) |  |
| freezing | skeleton6 | freezing (100%) |  |
| freezing | skeleton12 | freezing (100%) |  |
| freezing | warden4 | freezing (100%) |  |
| freezing | warden25 | freezing (100%) |  |
| freezing | enderman20 | freezing (100%) |  |
| freezing | ghast30 | freezing (100%) |  |
| freezing | brute6 | freezing (100%) |  |
| freezing | blaze10 | freezing (100%) |  |
| freezing | witherSk3 | freezing (100%) |  |
| freezing | breeze8 | freezing (100%) |  |
| freezing | pair_creeper_zombie | creeper-fusing (100%) |  |
| freezing | pair_skeleton_zombie | freezing (100%) |  |
| edge | none | eat-to-regen (30%) | edge 23% · no-food 16% · nether-no-gold 11% |
| edge | zombie2 | hostile-close (59%) | low-hp-in-combat 38% · sculk-near 4% |
| edge | zombie7 | eat-to-regen (30%) | edge 21% · no-food 16% · nether-no-gold 10% |
| edge | husk3 | hostile-close (55%) | low-hp-in-combat 38% · sculk-near 8% |
| edge | drowned3 | hostile-close (59%) | low-hp-in-combat 38% · sculk-near 4% |
| edge | spider3 | hostile-close (59%) | low-hp-in-combat 38% · sculk-near 4% |
| edge | creeper2 | creeper-fusing (100%) |  |
| edge | creeper8 | eat-to-regen (30%) | edge 23% · no-food 16% · nether-no-gold 11% |
| edge | skeleton6 | skeleton-open (59%) | low-hp-in-combat 38% · sculk-near 4% |
| edge | skeleton12 | skeleton-open (94%) | sculk-near 6% |
| edge | warden4 | warden-near (63%) | low-hp-in-combat 38% |
| edge | warden25 | eat-to-regen (33%) | edge 20% · no-food 13% · hungry 9% |
| edge | enderman20 | enderman-near (34%) | eat-to-regen 30% · no-food 16% · hungry 8% |
| edge | ghast30 | ghast-fireball (100%) |  |
| edge | brute6 | brute-near (63%) | low-hp-in-combat 38% |
| edge | blaze10 | blaze-ranged (94%) | sculk-near 6% |
| edge | witherSk3 | hostile-close (59%) | low-hp-in-combat 38% · sculk-near 4% |
| edge | breeze8 | breeze-ranged (88%) | sculk-near 13% |
| edge | pair_creeper_zombie | creeper-fusing (100%) |  |
| edge | pair_skeleton_zombie | hostile-close (59%) | low-hp-in-combat 38% · sculk-near 4% |
| levitation | none | levitation (94%) | eat-to-regen 3% · eat-after-hunger-effect 2% · death-recovery 1% |
| levitation | zombie2 | levitation (94%) | hostile-close 4% · low-hp-in-combat 2% |
| levitation | zombie7 | levitation (94%) | eat-to-regen 3% · eat-after-hunger-effect 2% · death-recovery 1% |
| levitation | husk3 | levitation (88%) | hostile-close 8% · low-hp-in-combat 5% |
| levitation | drowned3 | levitation (94%) | hostile-close 4% · low-hp-in-combat 2% |
| levitation | spider3 | levitation (94%) | hostile-close 4% · low-hp-in-combat 2% |
| levitation | creeper2 | creeper-fusing (100%) |  |
| levitation | creeper8 | levitation (94%) | eat-to-regen 3% · eat-after-hunger-effect 2% · death-recovery 1% |
| levitation | skeleton6 | levitation (94%) | skeleton-open 4% · low-hp-in-combat 2% |
| levitation | skeleton12 | levitation (94%) | skeleton-open 6% |
| levitation | warden4 | levitation (88%) | warden-near 8% · low-hp-in-combat 5% |
| levitation | warden25 | levitation (94%) | no-food 3% · death-recovery 2% · nether-no-gold 1% |
| levitation | enderman20 | levitation (94%) | eat-to-regen 3% · eat-after-hunger-effect 2% · enderman-near 1% |
| levitation | ghast30 | levitation (94%) | ghast-fireball 6% |
| levitation | brute6 | levitation (94%) | brute-near 4% · low-hp-in-combat 2% |
| levitation | blaze10 | levitation (94%) | blaze-ranged 6% |
| levitation | witherSk3 | levitation (94%) | hostile-close 4% · low-hp-in-combat 2% |
| levitation | breeze8 | levitation (88%) | breeze-ranged 13% |
| levitation | pair_creeper_zombie | creeper-fusing (100%) |  |
| levitation | pair_skeleton_zombie | levitation (94%) | hostile-close 4% · low-hp-in-combat 2% |
| fall10fire | none | falling-no-clutch (50%) | falling 50% |
| fall10fire | zombie2 | falling-no-clutch (50%) | falling 50% |
| fall10fire | zombie7 | falling-no-clutch (50%) | falling 50% |
| fall10fire | husk3 | falling-no-clutch (50%) | falling 50% |
| fall10fire | drowned3 | falling-no-clutch (50%) | falling 50% |
| fall10fire | spider3 | falling-no-clutch (50%) | falling 50% |
| fall10fire | creeper2 | falling-no-clutch (50%) | falling 50% |
| fall10fire | creeper8 | falling-no-clutch (50%) | falling 50% |
| fall10fire | skeleton6 | falling-no-clutch (50%) | falling 50% |
| fall10fire | skeleton12 | falling-no-clutch (50%) | falling 50% |
| fall10fire | warden4 | falling-no-clutch (50%) | falling 50% |
| fall10fire | warden25 | falling-no-clutch (50%) | falling 50% |
| fall10fire | enderman20 | falling-no-clutch (50%) | falling 50% |
| fall10fire | ghast30 | falling-no-clutch (50%) | falling 50% |
| fall10fire | brute6 | falling-no-clutch (50%) | falling 50% |
| fall10fire | blaze10 | falling-no-clutch (50%) | falling 50% |
| fall10fire | witherSk3 | falling-no-clutch (50%) | falling 50% |
| fall10fire | breeze8 | falling-no-clutch (50%) | falling 50% |
| fall10fire | pair_creeper_zombie | falling-no-clutch (50%) | falling 50% |
| fall10fire | pair_skeleton_zombie | falling-no-clutch (50%) | falling 50% |
| drownFire | none | drowning (100%) |  |
| drownFire | zombie2 | drowning (100%) |  |
| drownFire | zombie7 | drowning (100%) |  |
| drownFire | husk3 | drowning (100%) |  |
| drownFire | drowned3 | drowning (100%) |  |
| drownFire | spider3 | drowning (100%) |  |
| drownFire | creeper2 | drowning (100%) |  |
| drownFire | creeper8 | drowning (100%) |  |
| drownFire | skeleton6 | drowning (100%) |  |
| drownFire | skeleton12 | drowning (100%) |  |
| drownFire | warden4 | drowning (100%) |  |
| drownFire | warden25 | drowning (100%) |  |
| drownFire | enderman20 | drowning (100%) |  |
| drownFire | ghast30 | drowning (100%) |  |
| drownFire | brute6 | drowning (100%) |  |
| drownFire | blaze10 | drowning (100%) |  |
| drownFire | witherSk3 | drowning (100%) |  |
| drownFire | breeze8 | drowning (100%) |  |
| drownFire | pair_creeper_zombie | drowning (100%) |  |
| drownFire | pair_skeleton_zombie | drowning (100%) |  |

## 3. ตามบริบท

| บริบท | ส่วนใหญ่ทำ | อื่น ๆ |
|---|---|---|
| normal | falling-no-clutch (18%) | falling 18% · drowning 14% · in-lava 7% · suffocating 7% |
| mixed | falling-no-clutch (18%) | falling 18% · drowning 14% · in-lava 7% · suffocating 7% |

## 4. การตัดสินใจที่ถูกเลือกบ่อยสุด

| การตัดสินใจ | จำนวนสถานะ |
|---|---|
| falling-no-clutch | 537,600 |
| falling | 537,600 |
| drowning | 430,080 |
| in-lava | 215,040 |
| suffocating | 215,040 |
| on-fire | 193,536 |
| freezing | 193,536 |
| levitation | 179,424 |
| creeper-fusing | 107,520 |
| hostile-close | 78,120 |
| low-hp-in-combat | 75,348 |
| eat-to-regen | 34,920 |
| skeleton-open | 33,852 |
| ghast-fireball | 22,176 |
| blaze-ranged | 20,832 |
| breeze-ranged | 20,832 |
| sculk-near | 19,068 |
| no-food | 16,128 |
| warden-near | 14,280 |
| brute-near | 13,860 |
| hungry | 9,288 |
| edge | 9,272 |
| nether-no-gold | 8,060 |
| enderman-near | 7,572 |
| hostile-approach | 4,596 |
| wrong-tool | 2,964 |
| eat-after-hunger-effect | 2,376 |
| death-recovery | 1,888 |
| recover | 1,584 |
| teammate-down | 1,200 |
| plan:safe-spawn | 940 |
| night-exposed | 574 |
| plan:stone-pick | 522 |
| desert-no-wood | 460 |
| plan:blaze-rods | 212 |
| dig-straight-down | 156 |
| bed-wrong-dimension | 104 |
