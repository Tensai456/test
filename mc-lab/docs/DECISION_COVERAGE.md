# DECISION_COVERAGE — ทุกชุดความเป็นไปได้ → บอตตัดสินใจอะไร

> สร้างโดย `node scripts/fuzz_decide.mjs` · 66,000 สถานะ (เลือด 5 × หิว 5 × มิติ 3 × เวลา 2 × อันตราย 10 × ม็อบ 11 × ของ 4)
> ใช้ตอนลองจริง: ดูแถวที่ตรงกับเหตุการณ์ → บอตควรทำตามคอลัมน์ "ส่วนใหญ่ทำ" · ถ้าบอตจริงทำต่าง = บั๊ก หรือกฎใน data/ ต้องปรับ · ยืนยันระดับจำลองเท่านั้น

## 1. กฎที่ต้องไม่ผิด (invariant)

| กฎ | ผล | ตัวอย่างที่ผิด |
|---|---|---|
| อยู่ในลาวา → ต้องหนีลาวาก่อนทุกอย่าง | ✅ ผ่านทุกสถานะ |  |
| สถานะอันตราย → ห้ามทำแผนต่อ (ต้องเป็น reflex) | ✅ ผ่านทุกสถานะ |  |
| ห้ามกินตอนศัตรูอยู่ในระยะ 6 | ✅ ผ่านทุกสถานะ |  |
| ห้ามสั่ง "สู้" ตอน warden อยู่ใกล้ | ✅ ผ่านทุกสถานะ |  |
| นรก: ห้ามเลือก clutch ด้วยถังน้ำ | ✅ ผ่านทุกสถานะ |  |
| เลือด <8 และไม่มีอันตราย/ศัตรู → ห้ามทำแผนต่อ (ต้องพักฟื้น/กิน) | ✅ ผ่านทุกสถานะ |  |
| ศัตรูอยู่ในระยะ 10 → ห้ามทำแผนต่อเฉย ๆ | ✅ ผ่านทุกสถานะ |  |
| ทุกการตัดสินใจต้องชี้ความรู้ใน kb | ✅ ผ่านทุกสถานะ |  |

## 2. ตารางตัดสินใจ: อันตราย × ม็อบ (รวมทุกเลือด/หิว/มิติ/เวลา/ของ)

| อันตราย | ม็อบ | ส่วนใหญ่ทำ | อื่น ๆ |
|---|---|---|---|
| none | none | eat-to-regen (36%) | hungry 12% · nether-no-gold 11% · no-food 10% |
| none | zombie2 | hostile-close (60%) | low-hp-in-combat 40% |
| none | zombie7 | eat-to-regen (36%) | hostile-approach 31% · hungry 12% · nether-no-gold 11% |
| none | creeper2 | creeper-fusing (100%) |  |
| none | skeleton12 | skeleton-open (100%) |  |
| none | warden4 | warden-near (60%) | low-hp-in-combat 40% |
| none | enderman20 | enderman-near (42%) | eat-to-regen 36% · hungry 12% · no-food 10% |
| none | ghast30 | ghast-fireball (100%) |  |
| none | brute6 | brute-near (60%) | low-hp-in-combat 40% |
| none | phantom6 | phantom-attack (60%) | low-hp-in-combat 40% |
| none | witch8 | witch-ranged (100%) |  |
| lava | none | in-lava (100%) |  |
| lava | zombie2 | in-lava (100%) |  |
| lava | zombie7 | in-lava (100%) |  |
| lava | creeper2 | in-lava (100%) |  |
| lava | skeleton12 | in-lava (100%) |  |
| lava | warden4 | in-lava (100%) |  |
| lava | enderman20 | in-lava (100%) |  |
| lava | ghast30 | in-lava (100%) |  |
| lava | brute6 | in-lava (100%) |  |
| lava | phantom6 | in-lava (100%) |  |
| lava | witch8 | in-lava (100%) |  |
| fire | none | on-fire (100%) |  |
| fire | zombie2 | on-fire (100%) |  |
| fire | zombie7 | on-fire (100%) |  |
| fire | creeper2 | creeper-fusing (100%) |  |
| fire | skeleton12 | on-fire (100%) |  |
| fire | warden4 | on-fire (100%) |  |
| fire | enderman20 | on-fire (100%) |  |
| fire | ghast30 | on-fire (100%) |  |
| fire | brute6 | on-fire (100%) |  |
| fire | phantom6 | on-fire (100%) |  |
| fire | witch8 | on-fire (100%) |  |
| fall10 | none | falling-no-clutch (58%) | falling 42% |
| fall10 | zombie2 | falling-no-clutch (58%) | falling 42% |
| fall10 | zombie7 | falling-no-clutch (58%) | falling 42% |
| fall10 | creeper2 | falling-no-clutch (58%) | falling 42% |
| fall10 | skeleton12 | falling-no-clutch (58%) | falling 42% |
| fall10 | warden4 | falling-no-clutch (58%) | falling 42% |
| fall10 | enderman20 | falling-no-clutch (58%) | falling 42% |
| fall10 | ghast30 | falling-no-clutch (58%) | falling 42% |
| fall10 | brute6 | falling-no-clutch (58%) | falling 42% |
| fall10 | phantom6 | falling-no-clutch (58%) | falling 42% |
| fall10 | witch8 | falling-no-clutch (58%) | falling 42% |
| fall30 | none | falling-no-clutch (58%) | falling 42% |
| fall30 | zombie2 | falling-no-clutch (58%) | falling 42% |
| fall30 | zombie7 | falling-no-clutch (58%) | falling 42% |
| fall30 | creeper2 | falling-no-clutch (58%) | falling 42% |
| fall30 | skeleton12 | falling-no-clutch (58%) | falling 42% |
| fall30 | warden4 | falling-no-clutch (58%) | falling 42% |
| fall30 | enderman20 | falling-no-clutch (58%) | falling 42% |
| fall30 | ghast30 | falling-no-clutch (58%) | falling 42% |
| fall30 | brute6 | falling-no-clutch (58%) | falling 42% |
| fall30 | phantom6 | falling-no-clutch (58%) | falling 42% |
| fall30 | witch8 | falling-no-clutch (58%) | falling 42% |
| drowning | none | drowning (100%) |  |
| drowning | zombie2 | drowning (100%) |  |
| drowning | zombie7 | drowning (100%) |  |
| drowning | creeper2 | drowning (100%) |  |
| drowning | skeleton12 | drowning (100%) |  |
| drowning | warden4 | drowning (100%) |  |
| drowning | enderman20 | drowning (100%) |  |
| drowning | ghast30 | drowning (100%) |  |
| drowning | brute6 | drowning (100%) |  |
| drowning | phantom6 | drowning (100%) |  |
| drowning | witch8 | drowning (100%) |  |
| suffocating | none | suffocating (100%) |  |
| suffocating | zombie2 | suffocating (100%) |  |
| suffocating | zombie7 | suffocating (100%) |  |
| suffocating | creeper2 | suffocating (100%) |  |
| suffocating | skeleton12 | suffocating (100%) |  |
| suffocating | warden4 | suffocating (100%) |  |
| suffocating | enderman20 | suffocating (100%) |  |
| suffocating | ghast30 | suffocating (100%) |  |
| suffocating | brute6 | suffocating (100%) |  |
| suffocating | phantom6 | suffocating (100%) |  |
| suffocating | witch8 | suffocating (100%) |  |
| freezing | none | freezing (100%) |  |
| freezing | zombie2 | freezing (100%) |  |
| freezing | zombie7 | freezing (100%) |  |
| freezing | creeper2 | creeper-fusing (100%) |  |
| freezing | skeleton12 | freezing (100%) |  |
| freezing | warden4 | freezing (100%) |  |
| freezing | enderman20 | freezing (100%) |  |
| freezing | ghast30 | freezing (100%) |  |
| freezing | brute6 | freezing (100%) |  |
| freezing | phantom6 | freezing (100%) |  |
| freezing | witch8 | freezing (100%) |  |
| edge | none | eat-to-regen (36%) | edge 31% · hungry 12% · nether-no-gold 11% |
| edge | zombie2 | hostile-close (60%) | low-hp-in-combat 40% |
| edge | zombie7 | eat-to-regen (36%) | edge 31% · hungry 12% · nether-no-gold 11% |
| edge | creeper2 | creeper-fusing (100%) |  |
| edge | skeleton12 | skeleton-open (100%) |  |
| edge | warden4 | warden-near (60%) | low-hp-in-combat 40% |
| edge | enderman20 | enderman-near (42%) | eat-to-regen 36% · hungry 12% · no-food 10% |
| edge | ghast30 | ghast-fireball (100%) |  |
| edge | brute6 | brute-near (60%) | low-hp-in-combat 40% |
| edge | phantom6 | phantom-attack (60%) | low-hp-in-combat 40% |
| edge | witch8 | witch-ranged (100%) |  |
| levitation | none | levitation (100%) |  |
| levitation | zombie2 | levitation (100%) |  |
| levitation | zombie7 | levitation (100%) |  |
| levitation | creeper2 | creeper-fusing (100%) |  |
| levitation | skeleton12 | levitation (100%) |  |
| levitation | warden4 | levitation (100%) |  |
| levitation | enderman20 | levitation (100%) |  |
| levitation | ghast30 | levitation (100%) |  |
| levitation | brute6 | levitation (100%) |  |
| levitation | phantom6 | levitation (100%) |  |
| levitation | witch8 | levitation (100%) |  |

## 3. การตัดสินใจที่ถูกเลือกบ่อยสุด

| การตัดสินใจ | จำนวนสถานะ |
|---|---|
| falling-no-clutch | 7,700 |
| in-lava | 6,600 |
| drowning | 6,600 |
| suffocating | 6,600 |
| on-fire | 6,000 |
| freezing | 6,000 |
| levitation | 6,000 |
| falling | 5,500 |
| creeper-fusing | 3,000 |
| low-hp-in-combat | 1,920 |
| eat-to-regen | 1,296 |
| skeleton-open | 1,200 |
| ghast-fireball | 1,200 |
| witch-ranged | 1,200 |
| hostile-close | 720 |
| warden-near | 720 |
| brute-near | 720 |
| phantom-attack | 720 |
| enderman-near | 504 |
| hungry | 432 |
| edge | 372 |
| no-food | 360 |
| nether-no-gold | 264 |
| hostile-approach | 186 |
| plan:safe-spawn | 60 |
| recover | 52 |
| plan:stone-pick | 30 |
| night-exposed | 30 |
| plan:blaze-rods | 14 |
