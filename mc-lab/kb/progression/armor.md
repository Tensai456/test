# 3. เกราะ (durability ต่อชิ้น / armor points ต่อชิ้น)

<!-- สร้างอัตโนมัติโดย scripts/split_kb.mjs จาก docs/playbook/PROGRESSION.md · ห้ามแก้มือ -->
อ้างอิงย่อ: W=https://minecraft.wiki/w/ (เช่น `Durability` = W+Durability)

ลำดับ: หมวก / เสื้อ / กางเกง / รองเท้า

| วัสดุ | durability | armor points | รวม | toughness | แหล่ง |
|---|---|---|---|---|---|
| leather | 55/80/75/65 | 1/3/2/1 | 7 (snippet ระบุ "Total (3)" ขัดกับผลบวก — [ไม่แน่ใจ]) | 0 | W+Armor_materials |
| gold | 77/112/105/91 | [ไม่แน่ใจ รายชิ้น] | 11 | [ไม่แน่ใจ] | W+Golden_Armor, W+Durability, W+Armor |
| chainmail | 165/240/225/195 | 2/5/4/1 | 12 (คำนวณ; snippet พิมพ์ "(4)" ผิดชัด) | 0 | W+Armor_materials |
| copper | 121/176/165/143 | 2/4/3/1 | 10 | 0 | W+Copper_Armor |
| iron | 165/240/225/195 (รองเท้าจาก minecraft-data 26.1) | 2/6/5/2 | 15 | 0 | W+Iron_Armor, W+Durability, W+Iron_Helmet |
| diamond | 363/528/495/429 | 3/8/6/3 | 20 (คำนวณจากชิ้น; snippet ระบุ "(11)" ผิดชัด) | 2 | W+Armor_materials |
| netherite | 407/592/555/481 | 3/8/6/3 | 20 (คำนวณ; snippet "(19)" ขัดกัน) | 3 | W+Netherite_Armor, W+Armor_materials |

ความทนทานเกราะทุกแถวตรวจกับ minecraft-data 26.1 แล้ว ตรงกันหมด · อื่น ๆ จากข้อมูลเกม: โล่ 336 · ธนู 384 · หน้าไม้ 465 · ตรีศูล 250 · กระบอง 500 · เบ็ด 64 · หินเหล็กไฟ 64 · กรรไกร 238 · elytra 432 · หอกเหล็ก/เพชร 250/1561
หมายเหตุ: ช่อง "รวม" ใน snippet ของ leather/chain/diamond/netherite ไม่ตรงผลบวกรายชิ้น — บอทควรอ่านค่าจริงจาก `bot.inventory` / attribute armor ไม่ฮาร์ดโค้ด. ค่ายืนยันตรง: copper 10, iron 15, gold 11 (W+Copper_Armor, W+Iron_Armor, W+Armor).
เกราะเสียหาย: ชิ้นละ 1 durability ต่อ 4 HP ของดาเมจที่เข้ามา (ปัดลง ขั้นต่ำ 1) — W+Copper_Armor
สูตรเกราะ (ingot): หมวก 5 · เสื้อ 8 · กางเกง 7 · รองเท้า 4 → ครบชุด 24 — iron: W+Iron_Armor; copper: W+Copper_Armor (snippet ระบุจำนวนเดียวกัน)

Copper มีใน Java ปัจจุบัน (ทั้งเครื่องมือและเกราะ): W+Copper_Armor, W+Copper_Pickaxe, W+Java_Edition_1.21.9
