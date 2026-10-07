# P5 เหล็ก (ชุดแรก 36 ingot)

<!-- สร้างอัตโนมัติโดย scripts/split_kb.mjs จาก docs/playbook/PROGRESSION.md › 10. Playbook รายไมล์สโตน (อาการ → สาเหตุ → แก้ → ตัวเลข+แหล่ง → ตัดสินผล → เทสจริง) · ห้ามแก้มือ -->
อ้างอิงย่อ: W=https://minecraft.wiki/w/ (เช่น `Durability` = W+Durability)

- อาการ: raw_iron/iron_ingot ไม่เพิ่มเกิน 10 นาที ; ขุดชั้นผิด
- สาเหตุ: ขุดผิด Y (iron ชุก Y≈16 และภูเขา Y≈232 W+Iron_Ore) ; ไม่มี coal ; เตาเดียวช้า
- แก้: ลงถ้ำ Y≈16 หรือ strip mine ; รวบรวม coal ≥5 ; ใช้ furnace หลายตัว/blast furnace (5 วิ) ; ทำ pickaxe→bucket→shield→sword→เกราะ
- ตัวเลข: ingot รวม 36 (§7) ; furnace 10 วิ/ชิ้น W+Furnace ; coal 8 ชิ้น W+Charcoal
- ตัดสินผล: iron_ingot สะสมได้ >= 12 ภายใน 20 นาทีหลัง P2 ; ถ้า <6 → เปลี่ยนพื้นที่ขุด
- เทสจริง: นับ ingot ทุก 5 นาที ; วัดอัตรา ingot/นาที
