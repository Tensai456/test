# 7. ชุดเหล็กชุดแรก: iron รวม

<!-- สร้างอัตโนมัติโดย scripts/split_kb.mjs จาก docs/playbook/PROGRESSION.md · ห้ามแก้มือ -->
อ้างอิงย่อ: W=https://minecraft.wiki/w/ (เช่น `Durability` = W+Durability)

| รายการ | ingot |
|---|---|
| iron pickaxe | 3 |
| iron axe | 3 |
| iron sword | 2 |
| เกราะ 4 ชิ้น (5+8+7+4) | 24 |
| bucket | 3 |
| shield | 1 (+ planks 6) |
| **รวม** | **36** (คำนวณ) ; ถ้าเพิ่ม shovel/hoe [ไม่แน่ใจ จำนวนจาก snippet] |

แหล่ง: Iron_Pickaxe/Axe/Sword (W+Iron_Pickaxe, W+Iron_Axe, W+Iron_Sword) · เกราะ W+Iron_Armor · bucket W+Bucket · shield W+Shield
- ทีม 4 คน: ไม่ต้องสร้างครบทุกชุดพร้อมกัน — ลำดับ lab: pickaxe(3) → bucket(3) → shield(1) → sword(2) → เกราะ ทยอย; รวมเป้า raw iron ≥ 36 ต่อคนที่อยากครบ
- ใช้ iron block 27 + 4 ingot = anvil 31 ingot (W+Anvil)
- เตียง: wool 3 (สีเดียวกัน) + planks 3 (W+Bed) ; ได้ wool ผ่านโกนแกะ (W+Sheep)
- ธนู: stick + string (durability 384) ; ลูกธนู: flint + stick + feather ได้ 4 ดอก ; crossbow: stick + iron ingot + string + tripwire hook (durability 465) — W+Bow, W+Arrow, W+Crossbow. จำนวนต่อชิ้นของ bow/crossbow ตาม snippet [ไม่แน่ใจ] (แบบ 3 stick+3 string ในใจของผู้ถาม ไม่ได้ถูกยืนยัน)

**บอตควร:**
- ลำดับทำตาม §7: pickaxe(3) → bucket(3) → shield(1) → sword(2) → เกราะทยอย รวม 36
- เป้า raw iron ≥36; ขุดจนครบ แล้วเผาตามสูตร §5
- สวมเกราะทันทีที่ได้ครบชิ้น (หมวก 5/เสื้อ 8/กางเกง 7/รองเท้า 4 ingot)
- ก่อน craft เช็ก inventory ว่า sticks/planks พอ (shield ต้อง planks 6)
- เกราะ durability <10% → ซ่อม/เปลี่ยนก่อนสู้ [คิดเอง]

**ตัดสินผล:** iron_ingot สะสม ≥12 ภายใน 20 นาทีหลัง P2; <6 → เปลี่ยนพื้นที่ขุด (ตาม P5, เกณฑ์แล็บ)
