# DEEP_FUZZ — รอบ 1 (สุ่มเหตุการณ์ละ 2,000 สถานะ)

> `node scripts/deep_fuzz.mjs [N] [event...]` · seed คงที่ (ทำซ้ำได้) · ช่องโหว่จัดกลุ่ม "กฎที่ผิด | สิ่งที่บอตเลือก" · ยืนยันระดับจำลอง

## lava+raid — ✅ ไม่พบช่องโหว่


การตัดสินใจหลัก: in-lava 100.0%

## pvp+mlg — ✅ ไม่พบช่องโหว่


การตัดสินใจหลัก: falling 76.0% · falling-no-clutch 24.0%

## MLG — อัตรารอดตามความสูง × ของกันตก (ผลลัพธ์จำลอง: clutchWindow + ความแม่นวาง 90% ASSUME)

| ความสูง | ของที่ใช้ | ตัวอย่าง | รอด |
|---|---|---|---|
| 100+ | cobweb | 31 | 100.0% |
| 100+ | ender_pearl | 25 | 96.0% |
| 100+ | ladder | 7 | 100.0% |
| 100+ | oak_boat | 24 | 95.8% |
| 100+ | powder_snow_bucket | 53 | 86.8% |
| 100+ | slime_block | 83 | 89.2% |
| 100+ | twisting_vines | 15 | 93.3% |
| 100+ | water_bucket | 67 | 89.6% |
| 100+ | ไม่มีของ | 109 | 0.0% |
| 24–49 | cobweb | 25 | 84.0% |
| 24–49 | ender_pearl | 17 | 76.5% |
| 24–49 | hay_block | 31 | 83.9% |
| 24–49 | honey_block | 37 | 94.6% |
| 24–49 | ladder | 4 | 100.0% |
| 24–49 | oak_boat | 26 | 88.5% |
| 24–49 | powder_snow_bucket | 31 | 83.9% |
| 24–49 | slime_block | 69 | 92.8% |
| 24–49 | twisting_vines | 25 | 88.0% |
| 24–49 | water_bucket | 67 | 91.0% |
| 24–49 | ไม่มีของ | 98 | 0.0% |
| 4–23 | cobweb | 13 | 92.3% |
| 4–23 | ender_pearl | 9 | 100.0% |
| 4–23 | hay_block | 32 | 100.0% |
| 4–23 | honey_block | 33 | 100.0% |
| 4–23 | ladder | 4 | 100.0% |
| 4–23 | oak_boat | 21 | 90.5% |
| 4–23 | powder_snow_bucket | 17 | 88.2% |
| 4–23 | scaffolding | 23 | 95.7% |
| 4–23 | slime_block | 53 | 98.1% |
| 4–23 | twisting_vines | 13 | 92.3% |
| 4–23 | water_bucket | 57 | 94.7% |
| 4–23 | ไม่มีของ | 61 | 41.0% |
| 50–99 | cobweb | 44 | 86.4% |
| 50–99 | ender_pearl | 42 | 88.1% |
| 50–99 | hay_block | 26 | 96.2% |
| 50–99 | honey_block | 27 | 100.0% |
| 50–99 | ladder | 21 | 81.0% |
| 50–99 | oak_boat | 73 | 91.8% |
| 50–99 | powder_snow_bucket | 81 | 92.6% |
| 50–99 | slime_block | 123 | 82.9% |
| 50–99 | twisting_vines | 35 | 68.6% |
| 50–99 | water_bucket | 136 | 94.1% |
| 50–99 | ไม่มีของ | 212 | 0.0% |
