# DEEP_FUZZ — รอบ 101 (สุ่มเหตุการณ์ละ 200,000 สถานะ)

> `node scripts/deep_fuzz.mjs [N] [event...]` · seed คงที่ (ทำซ้ำได้) · ช่องโหว่จัดกลุ่ม "กฎที่ผิด | สิ่งที่บอตเลือก" · ยืนยันระดับจำลอง

## lava — ✅ ไม่พบช่องโหว่


การตัดสินใจหลัก: in-lava 100.0%

## veto — ✅ ไม่พบช่องโหว่


การตัดสินใจหลัก: eat-to-regen 20.4% · wrong-tool 9.1% · no-food 8.3% · hungry 7.8% · on-fire 7.4% · nether-no-gold 6.9%

## ranged — ✅ ไม่พบช่องโหว่


การตัดสินใจหลัก: skeleton-open 20.5% · hostile-close 10.4% · ghast-fireball 9.5% · low-hp-in-combat 7.6% · on-fire 7.2% · eat-to-regen 5.8%

## creeper — ✅ ไม่พบช่องโหว่


การตัดสินใจหลัก: creeper-fusing 24.5% · hostile-approach 14.1% · eat-to-regen 9.8% · low-hp-in-combat 7.0% · nether-no-gold 6.2% · hostile-close 6.1%

## fall — ✅ ไม่พบช่องโหว่


การตัดสินใจหลัก: falling 62.4% · falling-no-clutch 34.6% · in-lava 3.0%

## drowning — ✅ ไม่พบช่องโหว่


การตัดสินใจหลัก: drowning 92.4% · in-lava 3.0% · falling 2.8% · falling-no-clutch 1.8%

## warden — ✅ ไม่พบช่องโหว่


การตัดสินใจหลัก: warden-near 50.4% · sculk-near 10.9% · on-fire 7.3% · low-hp-in-combat 6.6% · eat-to-regen 3.8% · in-lava 3.0%

## crowd — ✅ ไม่พบช่องโหว่


การตัดสินใจหลัก: hostile-close 40.7% · low-hp-in-combat 24.7% · outnumbered 11.3% · on-fire 7.3% · in-lava 3.0% · falling 2.8%

## effects — ✅ ไม่พบช่องโหว่


การตัดสินใจหลัก: wither-effect 32.3% · levitation 18.3% · eat-to-regen 8.2% · poisoned 7.3% · on-fire 5.7% · eat-after-hunger-effect 4.2%

## edgeKnock — ✅ ไม่พบช่องโหว่


การตัดสินใจหลัก: hostile-close 26.4% · low-hp-in-combat 18.0% · creeper-fusing 7.5% · on-fire 6.6% · skeleton-open 6.4% · breeze-ranged 5.9%

## mixedCrowd — ✅ ไม่พบช่องโหว่


การตัดสินใจหลัก: hostile-close 31.2% · low-hp-in-combat 19.4% · creeper-bait 19.0% · outnumbered 9.3% · on-fire 5.8% · in-lava 3.0%

## creeperBait — ✅ ไม่พบช่องโหว่


การตัดสินใจหลัก: creeper-bait 79.6% · low-hp-in-combat 3.1% · skeleton-open 3.1% · in-lava 3.0% · falling 2.9% · falling-no-clutch 1.7%

## underwater — ✅ ไม่พบช่องโหว่


การตัดสินใจหลัก: drowning 28.8% · underwater-guardian 20.5% · low-hp-in-combat 6.3% · eat-to-regen 5.8% · on-fire 5.1% · hostile-close 5.0%

## allMobs — ✅ ไม่พบช่องโหว่


การตัดสินใจหลัก: hostile-close 14.0% · low-hp-in-combat 10.6% · eat-to-regen 8.1% · on-fire 7.1% · skeleton-open 7.0% · hostile-approach 6.5%

## neutral — ✅ ไม่พบช่องโหว่


การตัดสินใจหลัก: provoked-flee 22.5% · provoked-fight 14.6% · provoked-pack 7.9% · on-fire 7.2% · eat-to-regen 7.0% · piglin-no-gold 4.9%

## blocks — ✅ ไม่พบช่องโหว่


การตัดสินใจหลัก: danger-block 16.5% · eat-to-regen 16.3% · on-fire 7.3% · nether-no-gold 6.2% · no-food 6.1% · plan:stone-pick 6.0%

## piglin — ✅ ไม่พบช่องโหว่


การตัดสินใจหลัก: piglin-no-gold 22.1% · brute-near 13.9% · provoked-flee 10.4% · provoked-fight 9.4% · on-fire 7.2% · eat-to-regen 5.4%

## weaponTactics — ✅ ไม่พบช่องโหว่


การตัดสินใจหลัก: eat-to-regen 20.5% · plan:stone-pick 9.7% · nether-no-gold 9.1% · no-food 8.2% · hungry 7.9% · on-fire 7.3%

## effectsAll — ✅ ไม่พบช่องโหว่


การตัดสินใจหลัก: eat-to-regen 16.8% · levitation 8.8% · bad-effect 8.2% · wither-effect 7.4% · no-food 6.6% · on-fire 6.5%

## mlg — ✅ ไม่พบช่องโหว่


การตัดสินใจหลัก: falling 85.3% · falling-no-clutch 14.7%

## biomes — ✅ ไม่พบช่องโหว่


การตัดสินใจหลัก: eat-to-regen 12.8% · nether-no-gold 8.5% · on-fire 6.8% · hostile-close 5.5% · no-food 5.2% · hungry 4.9%

## weapons — ✅ ไม่พบช่องโหว่


การตัดสินใจหลัก: no-food 24.4% · nether-no-gold 12.2% · recover 11.6% · plan:stone-pick 10.8% · plan:safe-spawn 7.5% · on-fire 7.2%

## MLG — อัตรารอดตามความสูง × ของกันตก (ผลลัพธ์จำลอง: clutchWindow + ความแม่นวาง 90% ASSUME)

| ความสูง | ของที่ใช้ | ตัวอย่าง | รอด |
|---|---|---|---|
| 100+ | cobweb | 1,492 | 89.8% |
| 100+ | ender_pearl | 1,528 | 89.8% |
| 100+ | hay_block | 5,034 | 89.6% |
| 100+ | honey_block | 4,080 | 90.0% |
| 100+ | ladder | 584 | 90.1% |
| 100+ | oak_boat | 2,576 | 90.3% |
| 100+ | powder_snow_bucket | 3,180 | 90.7% |
| 100+ | scaffolding | 2,540 | 89.6% |
| 100+ | slime_block | 6,086 | 90.2% |
| 100+ | twisting_vines | 1,616 | 90.3% |
| 100+ | water_bucket | 6,047 | 89.3% |
| 100+ | ไม่มีของ | 5,946 | 0.0% |
| 24–49 | cobweb | 1,641 | 90.6% |
| 24–49 | ender_pearl | 1,610 | 89.8% |
| 24–49 | hay_block | 5,221 | 90.1% |
| 24–49 | honey_block | 4,253 | 90.5% |
| 24–49 | ladder | 608 | 90.8% |
| 24–49 | oak_boat | 2,725 | 89.1% |
| 24–49 | powder_snow_bucket | 3,487 | 90.4% |
| 24–49 | scaffolding | 2,783 | 89.9% |
| 24–49 | slime_block | 6,532 | 89.6% |
| 24–49 | twisting_vines | 1,714 | 89.8% |
| 24–49 | water_bucket | 6,651 | 90.4% |
| 24–49 | ไม่มีของ | 6,488 | 0.0% |
| 4–23 | cobweb | 1,266 | 96.1% |
| 4–23 | ender_pearl | 1,163 | 93.9% |
| 4–23 | hay_block | 3,934 | 94.3% |
| 4–23 | honey_block | 3,126 | 94.7% |
| 4–23 | ladder | 501 | 95.8% |
| 4–23 | oak_boat | 1,934 | 94.7% |
| 4–23 | powder_snow_bucket | 2,505 | 95.5% |
| 4–23 | scaffolding | 2,013 | 95.0% |
| 4–23 | slime_block | 4,952 | 95.0% |
| 4–23 | twisting_vines | 1,330 | 94.6% |
| 4–23 | water_bucket | 4,835 | 94.4% |
| 4–23 | ไม่มีของ | 4,744 | 46.7% |
| 50–99 | cobweb | 3,044 | 90.5% |
| 50–99 | ender_pearl | 3,128 | 89.8% |
| 50–99 | hay_block | 9,936 | 90.2% |
| 50–99 | honey_block | 8,207 | 89.9% |
| 50–99 | ladder | 1,217 | 91.2% |
| 50–99 | oak_boat | 5,099 | 89.8% |
| 50–99 | powder_snow_bucket | 6,671 | 90.4% |
| 50–99 | scaffolding | 5,172 | 90.0% |
| 50–99 | slime_block | 12,815 | 89.9% |
| 50–99 | twisting_vines | 3,378 | 90.1% |
| 50–99 | water_bucket | 12,459 | 90.4% |
| 50–99 | ไม่มีของ | 12,149 | 0.0% |
