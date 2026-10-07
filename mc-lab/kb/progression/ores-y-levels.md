# 4. แร่: ระดับ Y, ตำแหน่งขุดที่ดี, pickaxe ที่ต้องใช้ (Java 1.18+)

<!-- สร้างอัตโนมัติโดย scripts/split_kb.mjs จาก docs/playbook/PROGRESSION.md · ห้ามแก้มือ -->
อ้างอิงย่อ: W=https://minecraft.wiki/w/ (เช่น `Durability` = W+Durability)

| แร่ | ช่วง Y / ที่ชุกชุม | Y ที่แนะนำ | pickaxe ขั้นต่ำ | แหล่ง |
|---|---|---|---|---|
| coal | batch1 Y 136–320 (สม่ำเสมอ) ; batch2 Y 0–192 ชุกสุด Y=96 | Y≈96 หรือหน้าผา/ถ้ำผิวดิน | wood | W+Coal_Ore, W+Ore_(feature) |
| copper | Y -16 ถึง 112 ชุกสุด Y=48 | Y≈48 | stone | W+Copper_Ore |
| iron | หลายชุด: Y 80–384 ชุกสุด ~232 ; อีกชุด min -16 ถึง 80 ชุกสุด ~Y=16 (ตัวเลขใน snippet ไม่สอดคล้องกันเล็กน้อย) | Y≈16 (ถ้ำ/strip) ; ภูเขา Y≈232 | stone | W+Iron_Ore, W+Ore_(feature) |
| gold | Y -64 ถึง 32 ชุกสุด Y=-18 ; badlands ถึง Y 256 | Y≈-18 | iron | W+Ore |
| redstone | Y -64 ถึง 15/16 ชุกสุด Y=-59 | Y≈-59 | iron | W+Redstone_Ore |
| lapis | Y -64 ถึง 64 ; ชุดหนึ่งชุกรอบ Y=0 ; snippet อีกแหล่งว่าชุกสุด Y=45 [ไม่แน่ใจ] | Y≈0 | stone | W+Lapis_Lazuli_Ore |
| diamond | Y ≤ 15 ; ชุกสุด Y=-58/-59 | Y=-59 | iron | W+Diamond_Ore, W+Tutorial:Mining/Diamonds |
| emerald | Y -16 ถึง 320 เฉพาะ biome ภูเขา/windswept ; ชุกสุด Y=85 | Y≈85 ในภูเขา | iron | W+Emerald_Ore |
| ancient debris | Nether Y 8–119 ; ชุกสุด Y=16 ; ช่วง 13–17 ดีสุด | Y 13–17 (ปลอดภัยกว่าเมื่อต่ำลง ระวังทะเลลาวา) | diamond [ไม่แน่ใจ snippet ไม่ระบุ — ปกติ diamond+] | W+Tutorial:Mining/Ancient_debris |

กลยุทธ์ (W+Tutorial:Mining, W+Tutorial:Mining/Diamonds):
- spelunking = เข้าถ้ำ/หุบเขาหาแร่ที่เห็น; strip mining = ขุดลงถึงระดับแล้วขุดอุโมงค์ 2 สูง 1 กว้าง
- ระยะห่างกิ่ง: เว้น 6 บล็อกคือประสิทธิภาพดี; เว้น 2 = เปิดแทบทุกบล็อกแต่เปลืองแรง; เว้น 5 อาจพลาด blob เล็ก (diamond/lapis blob < 4 บล็อก)
- หลัง 1.17.1: ชั้น deepslate (Y<8) โดยเฉพาะ Y -40 ลงไปให้ diamond ดีสุด
- Raw iron ด้วย Fortune I/II/III = 1–2 / 1–3 / 1–4 (W+Fortune)
- Copper ore vein: Y 0–50 (filler granite); iron vein Y -60 ถึง -8 (filler tuff) — W+Ore_vein / W+Tutorial:Mining/Ore_veins
