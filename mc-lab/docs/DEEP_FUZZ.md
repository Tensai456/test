# DEEP_FUZZ — รอบ 6 (สุ่มเหตุการณ์ละ 200,000 สถานะ)

> `node scripts/deep_fuzz.mjs [N] [event...]` · seed คงที่ (ทำซ้ำได้) · ช่องโหว่จัดกลุ่ม "กฎที่ผิด | สิ่งที่บอตเลือก" · ยืนยันระดับจำลอง

## lava — ✅ ไม่พบช่องโหว่


การตัดสินใจหลัก: in-lava 100.0%

## veto — ✅ ไม่พบช่องโหว่


การตัดสินใจหลัก: eat-to-regen 20.5% · wrong-tool 9.0% · no-food 8.5% · hungry 7.9% · on-fire 7.3% · nether-no-gold 4.8%

## ranged — ✅ ไม่พบช่องโหว่


การตัดสินใจหลัก: skeleton-open 20.5% · hostile-close 10.4% · ghast-fireball 9.5% · low-hp-in-combat 7.6% · on-fire 7.3% · eat-to-regen 5.9%

## creeper — ✅ ไม่พบช่องโหว่


การตัดสินใจหลัก: creeper-fusing 24.8% · hostile-approach 15.8% · eat-to-regen 9.9% · low-hp-in-combat 7.0% · hostile-close 6.0% · on-fire 5.3%

## fall — ✅ ไม่พบช่องโหว่


การตัดสินใจหลัก: falling 62.4% · falling-no-clutch 34.6% · in-lava 3.0%

## drowning — ✅ ไม่พบช่องโหว่


การตัดสินใจหลัก: drowning 92.4% · in-lava 3.0% · falling 2.9% · falling-no-clutch 1.8%

## warden — ✅ ไม่พบช่องโหว่


การตัดสินใจหลัก: warden-near 50.5% · sculk-near 11.0% · on-fire 7.2% · low-hp-in-combat 6.5% · eat-to-regen 3.8% · in-lava 3.1%

## crowd — ✅ ไม่พบช่องโหว่


การตัดสินใจหลัก: hostile-close 40.7% · low-hp-in-combat 24.7% · outnumbered 11.3% · on-fire 7.4% · in-lava 3.0% · falling 2.9%

## effects — ✅ ไม่พบช่องโหว่


การตัดสินใจหลัก: wither-effect 32.4% · levitation 18.1% · eat-to-regen 8.1% · on-fire 5.9% · eat-after-hunger-effect 4.1% · no-food 3.3%

## edgeKnock — ✅ ไม่พบช่องโหว่


การตัดสินใจหลัก: hostile-close 26.4% · low-hp-in-combat 17.9% · creeper-fusing 7.5% · on-fire 6.7% · edge 6.4% · skeleton-open 6.4%
