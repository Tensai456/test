# DEEP_FUZZ — รอบ 1 (สุ่มเหตุการณ์ละ 50,000 สถานะ)

> `node scripts/deep_fuzz.mjs [N] [event...]` · seed คงที่ (ทำซ้ำได้) · ช่องโหว่จัดกลุ่ม "กฎที่ผิด | สิ่งที่บอตเลือก" · ยืนยันระดับจำลอง

## homeKeep — ✅ ไม่พบช่องโหว่


การตัดสินใจหลัก: eat-to-regen 20.4% · entrance-blocked 13.3% · nether-no-gold 9.0% · no-food 8.6% · hungry 7.9% · on-fire 7.2%

## chain — ✅ ไม่พบช่องโหว่


การตัดสินใจหลัก: falling 11.2% · in-lava 10.7% · drowning 9.1% · creeper-bait 7.4% · low-hp-in-combat 7.2% · falling-no-clutch 7.1%

## MLG — อัตรารอดตามความสูง × ของกันตก (ผลลัพธ์จำลอง: clutchWindow + ความแม่นวาง 90% ASSUME)

| ความสูง | ของที่ใช้ | ตัวอย่าง | รอด |
|---|---|---|---|
| 100+ | cobweb | 61 | 93.4% |
| 100+ | ender_pearl | 60 | 88.3% |
| 100+ | ladder | 25 | 88.0% |
| 100+ | oak_boat | 89 | 93.3% |
| 100+ | powder_snow_bucket | 91 | 87.9% |
| 100+ | slime_block | 130 | 91.5% |
| 100+ | twisting_vines | 23 | 91.3% |
| 100+ | water_bucket | 116 | 91.4% |
| 100+ | ไม่มีของ | 260 | 0.0% |
| 24–49 | cobweb | 48 | 93.8% |
| 24–49 | ender_pearl | 47 | 83.0% |
| 24–49 | hay_block | 66 | 92.4% |
| 24–49 | honey_block | 53 | 88.7% |
| 24–49 | ladder | 14 | 85.7% |
| 24–49 | oak_boat | 84 | 94.0% |
| 24–49 | powder_snow_bucket | 78 | 89.7% |
| 24–49 | scaffolding | 1 | 100.0% |
| 24–49 | slime_block | 146 | 91.1% |
| 24–49 | twisting_vines | 29 | 86.2% |
| 24–49 | water_bucket | 141 | 93.6% |
| 24–49 | ไม่มีของ | 231 | 0.0% |
| 4–23 | cobweb | 27 | 96.3% |
| 4–23 | ender_pearl | 19 | 94.7% |
| 4–23 | hay_block | 81 | 93.8% |
| 4–23 | honey_block | 57 | 93.0% |
| 4–23 | ladder | 11 | 100.0% |
| 4–23 | oak_boat | 40 | 92.5% |
| 4–23 | powder_snow_bucket | 50 | 98.0% |
| 4–23 | scaffolding | 46 | 93.5% |
| 4–23 | slime_block | 116 | 94.0% |
| 4–23 | twisting_vines | 28 | 85.7% |
| 4–23 | water_bucket | 102 | 96.1% |
| 4–23 | ไม่มีของ | 108 | 46.3% |
| 50–99 | cobweb | 123 | 87.8% |
| 50–99 | ender_pearl | 109 | 89.0% |
| 50–99 | hay_block | 65 | 90.8% |
| 50–99 | honey_block | 51 | 90.2% |
| 50–99 | ladder | 39 | 92.3% |
| 50–99 | oak_boat | 157 | 93.0% |
| 50–99 | powder_snow_bucket | 193 | 90.7% |
| 50–99 | slime_block | 251 | 89.6% |
| 50–99 | twisting_vines | 75 | 86.7% |
| 50–99 | water_bucket | 264 | 89.0% |
| 50–99 | ไม่มีของ | 458 | 0.0% |
