# จรวดดอกไม้ไฟ

<!-- สร้างอัตโนมัติโดย scripts/split_kb.mjs จาก docs/wiki/elytra.md · ห้ามแก้มือ -->
> W = https://minecraft.wiki/w/ (หน้าอ้างอิง: W/Elytra, W/Firework_Rocket, W/Phantom_Membrane, W/Mace, W/Damage, W/Feather_Falling, W/Item_frame)
> ที่มา: ผลค้นหา snippet เท่านั้น (ดึงหน้าตรงไม่ได้); ค่าเกณฑ์แล็บ = เกณฑ์ที่ตั้งเอง ไม่ใช่ค่าจาก wiki

| ข้อเท็จจริง | แหล่ง |
|---|---|
| ใช้ขณะร่อน ดันไปทางที่หันหน้า ~33.5 blocks/s | W/Firework_Rocket (snippet) |
| ดินปืนเพิ่ม flight duration สูงสุด 3 | W/Firework_Rocket |
| duration 1 / 2 / 3 → บูสต์ ~1.5 / 2.0 / 2.5 วินาที (~30/40/50 tick) (ค้นซ้ำได้ค่าเดิม ยังเป็นค่าประมาณ "~") | W/Firework_Rocket (snippet) |
| อายุจรวด = 10 × (ดินปืน + 1) + สุ่ม 0–5 + สุ่ม 0–6 tick | W/Firework_Rocket (snippet) |
| การใช้จรวดไม่ลด durability ของ elytra (ลดแค่ 1/วินาทีจากการร่อน) | W/Elytra, W/Firework_Rocket (snippet) |

บอตควร: ใช้ rocket แบบ duration ต่ำเมื่อเริ่ม/ไต่ระดับ; ไม่ยิงเมื่อหันเข้าหาผนังหรือภูมิประเทศ
ตัดสินผล: (เกณฑ์แล็บ) ไม่ใช้ rocket ถ้ามีสิ่งกีดขวางใน ray ข้างหน้า < 30 บล็อก
