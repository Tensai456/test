# DEEP_FUZZ — รอบ 1 (สุ่มเหตุการณ์ละ 200,000 สถานะ)

> `node scripts/deep_fuzz.mjs [N] [event...]` · seed คงที่ (ทำซ้ำได้) · ช่องโหว่จัดกลุ่ม "กฎที่ผิด | สิ่งที่บอตเลือก" · ยืนยันระดับจำลอง

## weaponTactics — ✅ ไม่พบช่องโหว่


การตัดสินใจหลัก: eat-to-regen 20.5% · plan:stone-pick 9.6% · nether-no-gold 8.9% · no-food 8.3% · hungry 7.9% · on-fire 7.3%

## effectsAll — ✅ ไม่พบช่องโหว่


การตัดสินใจหลัก: eat-to-regen 16.7% · levitation 8.8% · bad-effect 8.1% · wither-effect 7.3% · no-food 6.8% · on-fire 6.5%

## mlg — ✅ ไม่พบช่องโหว่


การตัดสินใจหลัก: falling 85.3% · falling-no-clutch 14.7%

## MLG — อัตรารอดตามความสูง × ของกันตก (ผลลัพธ์จำลอง: clutchWindow + ความแม่นวาง 90% ASSUME)

| ความสูง | ของที่ใช้ | ตัวอย่าง | รอด |
|---|---|---|---|
| 100+ | cobweb | 1,496 | 89.6% |
| 100+ | ender_pearl | 1,541 | 91.9% |
| 100+ | hay_block | 4,914 | 90.2% |
| 100+ | honey_block | 3,921 | 89.1% |
| 100+ | ladder | 569 | 89.6% |
| 100+ | oak_boat | 2,538 | 90.6% |
| 100+ | powder_snow_bucket | 3,220 | 90.2% |
| 100+ | scaffolding | 2,566 | 90.1% |
| 100+ | slime_block | 6,342 | 89.8% |
| 100+ | twisting_vines | 1,593 | 89.8% |
| 100+ | water_bucket | 6,225 | 89.6% |
| 100+ | ไม่มีของ | 5,992 | 0.0% |
| 24–49 | cobweb | 1,627 | 90.7% |
| 24–49 | ender_pearl | 1,619 | 91.4% |
| 24–49 | hay_block | 5,188 | 90.2% |
| 24–49 | honey_block | 4,235 | 90.4% |
| 24–49 | ladder | 643 | 89.6% |
| 24–49 | oak_boat | 2,625 | 90.2% |
| 24–49 | powder_snow_bucket | 3,362 | 90.2% |
| 24–49 | scaffolding | 2,798 | 90.5% |
| 24–49 | slime_block | 6,541 | 89.3% |
| 24–49 | twisting_vines | 1,735 | 91.4% |
| 24–49 | water_bucket | 6,445 | 91.1% |
| 24–49 | ไม่มีของ | 6,279 | 0.0% |
| 4–23 | cobweb | 1,208 | 94.5% |
| 4–23 | ender_pearl | 1,212 | 94.1% |
| 4–23 | hay_block | 3,951 | 93.6% |
| 4–23 | honey_block | 3,247 | 94.6% |
| 4–23 | ladder | 449 | 96.0% |
| 4–23 | oak_boat | 1,954 | 94.7% |
| 4–23 | powder_snow_bucket | 2,583 | 94.7% |
| 4–23 | scaffolding | 2,100 | 94.9% |
| 4–23 | slime_block | 4,884 | 95.0% |
| 4–23 | twisting_vines | 1,285 | 94.5% |
| 4–23 | water_bucket | 4,925 | 94.9% |
| 4–23 | ไม่มีของ | 4,849 | 44.9% |
| 50–99 | cobweb | 3,091 | 89.6% |
| 50–99 | ender_pearl | 3,176 | 90.9% |
| 50–99 | hay_block | 10,206 | 90.0% |
| 50–99 | honey_block | 8,028 | 89.9% |
| 50–99 | ladder | 1,225 | 90.9% |
| 50–99 | oak_boat | 5,127 | 90.0% |
| 50–99 | powder_snow_bucket | 6,741 | 91.1% |
| 50–99 | scaffolding | 5,130 | 90.5% |
| 50–99 | slime_block | 12,490 | 90.1% |
| 50–99 | twisting_vines | 3,315 | 90.6% |
| 50–99 | water_bucket | 12,511 | 90.1% |
| 50–99 | ไม่มีของ | 12,299 | 0.0% |
