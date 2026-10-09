# DEEP_FUZZ — รอบ 301 (สุ่มเหตุการณ์ละ 200,000 สถานะ)

> `node scripts/deep_fuzz.mjs [N] [event...]` · seed คงที่ (ทำซ้ำได้) · ช่องโหว่จัดกลุ่ม "กฎที่ผิด | สิ่งที่บอตเลือก" · ยืนยันระดับจำลอง

## warden — ✅ ไม่พบช่องโหว่


การตัดสินใจหลัก: warden-near 50.7% · sculk-near 10.9% · on-fire 7.2% · low-hp-in-combat 6.5% · eat-to-regen 3.8% · in-lava 3.0%

## biomes — ✅ ไม่พบช่องโหว่


การตัดสินใจหลัก: eat-to-regen 12.8% · nether-no-gold 8.4% · on-fire 6.8% · hostile-close 5.5% · no-food 5.2% · hungry 5.0%
