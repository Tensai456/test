# DEEP_FUZZ — รอบ 1 (สุ่มเหตุการณ์ละ 20,000 สถานะ)

> `node scripts/deep_fuzz.mjs [N] [event...]` · seed คงที่ (ทำซ้ำได้) · ช่องโหว่จัดกลุ่ม "กฎที่ผิด | สิ่งที่บอตเลือก" · ยืนยันระดับจำลอง

## chainDeep — ✅ ไม่พบช่องโหว่


การตัดสินใจหลัก: in-lava 17.7% · falling 15.4% · drowning 13.0% · creeper-bait 10.4% · falling-no-clutch 9.7% · low-hp-in-combat 5.1%

## MLG — อัตรารอดตามความสูง × ของกันตก (ผลลัพธ์จำลอง: clutchWindow + ความแม่นวาง 90% ASSUME)

| ความสูง | ของที่ใช้ | ตัวอย่าง | รอด |
|---|---|---|---|
| 100+ | cobweb | 42 | 92.9% |
| 100+ | ender_pearl | 37 | 89.2% |
| 100+ | ladder | 20 | 95.0% |
| 100+ | oak_boat | 49 | 87.8% |
| 100+ | powder_snow_bucket | 60 | 95.0% |
| 100+ | slime_block | 87 | 87.4% |
| 100+ | twisting_vines | 33 | 84.8% |
| 100+ | water_bucket | 75 | 97.3% |
| 100+ | ไม่มีของ | 158 | 0.0% |
| 24–49 | cobweb | 32 | 93.8% |
| 24–49 | ender_pearl | 32 | 100.0% |
| 24–49 | hay_block | 59 | 84.7% |
| 24–49 | honey_block | 21 | 90.5% |
| 24–49 | ladder | 10 | 100.0% |
| 24–49 | oak_boat | 37 | 89.2% |
| 24–49 | powder_snow_bucket | 59 | 83.1% |
| 24–49 | scaffolding | 3 | 66.7% |
| 24–49 | slime_block | 84 | 86.9% |
| 24–49 | twisting_vines | 21 | 90.5% |
| 24–49 | water_bucket | 69 | 92.8% |
| 24–49 | ไม่มีของ | 108 | 0.0% |
| 4–23 | cobweb | 21 | 95.2% |
| 4–23 | ender_pearl | 15 | 100.0% |
| 4–23 | hay_block | 38 | 97.4% |
| 4–23 | honey_block | 29 | 89.7% |
| 4–23 | ladder | 4 | 100.0% |
| 4–23 | oak_boat | 24 | 87.5% |
| 4–23 | powder_snow_bucket | 45 | 97.8% |
| 4–23 | scaffolding | 18 | 100.0% |
| 4–23 | slime_block | 58 | 96.6% |
| 4–23 | twisting_vines | 22 | 90.9% |
| 4–23 | water_bucket | 70 | 92.9% |
| 4–23 | ไม่มีของ | 77 | 36.4% |
| 50–99 | cobweb | 97 | 92.8% |
| 50–99 | ender_pearl | 89 | 92.1% |
| 50–99 | hay_block | 42 | 92.9% |
| 50–99 | honey_block | 30 | 96.7% |
| 50–99 | ladder | 24 | 87.5% |
| 50–99 | oak_boat | 97 | 92.8% |
| 50–99 | powder_snow_bucket | 107 | 88.8% |
| 50–99 | slime_block | 174 | 87.9% |
| 50–99 | twisting_vines | 49 | 93.9% |
| 50–99 | water_bucket | 175 | 89.7% |
| 50–99 | ไม่มีของ | 285 | 0.0% |
