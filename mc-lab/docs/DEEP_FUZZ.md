# DEEP_FUZZ — เจาะทีละเหตุการณ์ (สุ่มเหตุการณ์ละ 200,000 สถานะ)

> `node scripts/deep_fuzz.mjs [N] [event...]` · seed คงที่ (ทำซ้ำได้) · ช่องโหว่จัดกลุ่ม "กฎที่ผิด | สิ่งที่บอตเลือก" · ยืนยันระดับจำลอง

## lava — ✅ ไม่พบช่องโหว่


การตัดสินใจหลัก: in-lava 100.0%

## veto — ✅ ไม่พบช่องโหว่


การตัดสินใจหลัก: eat-to-regen 20.5% · wrong-tool 9.1% · no-food 8.4% · hungry 7.9% · on-fire 7.3% · nether-no-gold 4.8%

## ranged — ✅ ไม่พบช่องโหว่


การตัดสินใจหลัก: skeleton-open 20.5% · hostile-close 10.3% · ghast-fireball 9.5% · low-hp-in-combat 7.7% · on-fire 7.4% · eat-to-regen 5.9%

## creeper — ✅ ไม่พบช่องโหว่


การตัดสินใจหลัก: creeper-fusing 24.6% · hostile-approach 15.6% · eat-to-regen 9.8% · low-hp-in-combat 7.1% · hostile-close 6.1% · on-fire 5.3%

## fall — ✅ ไม่พบช่องโหว่


การตัดสินใจหลัก: falling 62.4% · falling-no-clutch 34.6% · in-lava 3.0%

## drowning — ✅ ไม่พบช่องโหว่


การตัดสินใจหลัก: drowning 92.5% · in-lava 3.0% · falling 2.8% · falling-no-clutch 1.7%

## warden — ✅ ไม่พบช่องโหว่


การตัดสินใจหลัก: warden-near 50.4% · sculk-near 11.0% · on-fire 7.3% · low-hp-in-combat 6.6% · eat-to-regen 3.8% · in-lava 3.0%

## crowd — ✅ ไม่พบช่องโหว่


การตัดสินใจหลัก: hostile-close 40.6% · low-hp-in-combat 24.7% · outnumbered 11.3% · on-fire 7.2% · in-lava 3.0% · falling 2.9%

## effects — ❌ ช่องโหว่ 1 กลุ่ม (132 สถานะ)

- **ห้ามกินตอนศัตรูอยู่ในระยะ 6 | eat-after-hunger-effect** — 132 สถานะ
  - `{"hp":19,"food":5,"dim":"the_nether","nearby":[{"type":"wither_skeleton","dist":6,"hostile":true}],"eff":["hunger"],"inv":["bread","hay_block","ender_pearl","golden_boots","milk_bucket"]}`
  - `{"hp":16,"food":2,"dim":"the_end","nearby":[{"type":"silverfish","dist":6,"hostile":true},{"type":"skeleton","dist":34,"hostile":true}],"eff":["hunger"],"inv":["golden_apple","hay_block"]}`
  - `{"hp":11,"food":0,"dim":"the_nether","nearby":[{"type":"creeper","dist":4.5,"hostile":true},{"type":"breeze","dist":37.5,"hostile":true}],"eff":["hunger"],"inv":["bread","golden_apple","hay_block","ender_pearl","shield","golden_boots","milk_bucket","cobblestone"]}`

การตัดสินใจหลัก: wither-effect 32.4% · levitation 18.2% · eat-to-regen 8.1% · on-fire 5.8% · eat-after-hunger-effect 4.2% · no-food 3.3%

## edgeKnock — ✅ ไม่พบช่องโหว่


การตัดสินใจหลัก: hostile-close 26.4% · low-hp-in-combat 17.9% · creeper-fusing 7.5% · on-fire 6.7% · edge 6.4% · skeleton-open 6.4%
