# PROGRESSION — สายพัฒนาทรัพยากร 4 บอท (spawn → End)

Minecraft Java (vanilla เวอร์ชันปัจจุบัน) · ข้อมูลจาก search snippet ของ minecraft.wiki เท่านั้น
กฎ: ทุกตัวเลขมี URL ด้านท้ายแถว · `[ไม่แน่ใจ]` = snippet ไม่ยืนยัน · `(คำนวณ)` = คำนวณเองจากตัวเลขที่อ้างอิง · "ค่า lab" = เกณฑ์/เวลาที่ตั้งเองเพื่อตัดสินผล ไม่ใช่ข้อเท็จจริงจาก wiki

อ้างอิงย่อ: W=https://minecraft.wiki/w/ (เช่น `Durability` = W+Durability)

---
## 1. ตารางไมล์สโตน (สิ่งที่ต้องนับใน inventory)

| # | ไมล์สโตน | ผ่านเมื่อ inventory/สถานะมี | หมายเหตุ |
|---|---|---|---|
| M1 | ไม้ | log >= 12 (ตั้งเป้า lab) | planks→table 4, tools, sticks |
| M2 | crafting table + เครื่องมือไม้ | crafting_table 1, wooden_pickaxe 1 | |
| M3 | เครื่องมือหิน + เตา | cobblestone >= 8+, stone_pickaxe, furnace 1 | furnace = 8 cobble |
| M4 | อาหารเสถียร | cooked food >= 16 หรือ ฟาร์ม/ปศุสัตว์ | ดู §6 |
| M5 | เตียง | bed 1 (wool 3 + planks 3) | |
| M6 | ชุดเหล็ก | iron_ingot รวมใช้ 36 (คำนวณ §7) | pickaxe/sword/axe + เกราะ + bucket + shield |
| M7 | เพชร | diamond >= 5 (pickaxe 3 + table 2) ; เป้า lab 9+ | ต้อง iron pickaxe |
| M8 | enchant | enchanting_table 1 + bookshelf 15 + lapis | §9 |
| M9 | Nether | obsidian >= 10 + flint_and_steel | §10 |
| M10 | blaze rod / pearl | blaze_rod >= 6, ender_pearl >= 12 (คำนวณ §10) | |
| M11 | eye of ender | eye_of_ender >= 12 (หัก eye ที่กรอบมีอยู่แล้ว) | |
| M12 | End | เข้า portal stronghold | |

---
## 2. ไม้ → crafting table → เครื่องมือ (จำนวนสูตร)

| ของ | สูตร | แหล่ง |
|---|---|---|
| crafting table | planks 4 (กริด 2x2 ใส่ planks ชนิดใดก็ได้) | W+Crafting |
| stick | planks 2 (แนวตั้ง) → 4 sticks | W+Stick |
| wooden pickaxe | tier material 3 + stick 2 | W+Wooden_Pickaxe |
| stone pickaxe | cobblestone 3 + stick 2 (รูปแบบเดียวกับไม้ — คำนวณจากสูตร tier) | W+Wooden_Pickaxe (สูตร tier) |
| furnace | cobblestone 8 | W+Crafting |
| copper pickaxe | copper ingot 3 + stick 2 | W+Copper_Pickaxe |
| iron pickaxe | iron ingot 3 + stick 2 | W+Iron_Pickaxe |
| iron axe | iron ingot 3 + stick 2 | W+Iron_Axe |
| iron sword | iron ingot 2 + stick 1 | W+Iron_Sword |

จำนวน planks/stick รวมสำหรับชุดไม้เริ่มต้น (table 4 + pickaxe 3 + 2 sticks=1 planks...) — เป้า lab: log 12 พอสำหรับ table/pickaxe/sword/axe ไม้ + stone tools (คำนวณคร่าว, ไม่ใช่ตัวเลข wiki).

### Durability เครื่องมือ (ใช้ได้กี่ครั้ง; ทุกชนิด pickaxe/axe/shovel/sword/hoe ตาม snippet)
| tier | ค่า | tier | ค่า |
|---|---|---|---|
| gold | 32 | iron | 250 |
| wood | 59 | diamond | 1561 |
| stone | 131 | netherite | 2031 |
| copper | 190 | | |
แหล่ง: W+Durability · W+Copper_Pickaxe · W+Pickaxe · **ตรวจกับ minecraft-data 26.1 แล้ว (`data/catalog_26.1/items.json`) — ตรงทุกค่า ยกเว้น copper: snippet วิกิ 191 แต่ข้อมูลเกม 190 → ใช้ 190**

Tool tier ที่ขุดแร่ได้: stone/copper pickaxe (level 1) → copper, iron, lapis · iron pickaxe (level 2) → gold, redstone, emerald, diamond
แหล่ง: W+Pickaxe, W+Copper_Pickaxe, W+Iron_Pickaxe, W+Stone_Pickaxe. Obsidian ต้อง diamond pickaxe: 9.4 วินาที (W+Obsidian). คำแนะนำว่า obsidian ต้อง diamond+ — [ไม่แน่ใจ] snippet ระบุแค่เวลาขุดด้วย diamond pickaxe

Copper tools: ดาเมจเท่า stone แต่ทนกว่า, enchantability 13 (diamond 10, iron 14) — W+Copper_Pickaxe

---
## 3. เกราะ (durability ต่อชิ้น / armor points ต่อชิ้น)

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

---
## 4. แร่: ระดับ Y, ตำแหน่งขุดที่ดี, pickaxe ที่ต้องใช้ (Java 1.18+)

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

---
## 5. Smelting และเชื้อเพลิง

| เตา | เวลา/ชิ้น | ใช้กับ | แหล่ง |
|---|---|---|---|
| furnace | 10 วิ (200 tick) | ทุกอย่าง | W+Furnace |
| blast furnace | 5 วิ (100 tick) | แร่/โลหะเท่านั้น | W+Blast_Furnace |
| smoker | 5 วิ (100 tick) | อาหารเท่านั้น | W+Smoker |

| เชื้อเพลิง | เผาได้ (ชิ้น) | เวลาไฟ | แหล่ง |
|---|---|---|---|
| coal / charcoal | 8 | 80 วิ | W+Charcoal |
| block of coal | 80 | 800 วิ | W+Block_of_Coal |
| lava bucket | 100 | 1000 วิ | W+Lava_Bucket |
| blaze rod | 12 | 120 วิ | W+Blaze_Rod |
| dried kelp block | 20 | 4000 tick ใน furnace | W+Dried_Kelp_Block |
| planks | 2 แผ่น = 3 ชิ้น (1.5/แผ่น) | 15 วิ (snippet ใช้ "15 วิ" จากคำค้นเราเอง — ยืนยันผ่านอัตรา 1.5) | W+Tutorial:Smelting |
| stick | 0.5 ชิ้น (2 stick = 1 ชิ้น) | | W+Stick (ผ่านผลค้นเชื้อเพลิง) |

- raw iron → iron ingot: เวลา 10 วิ/ชิ้นใน furnace, 5 วิในblast furnace; ให้ XP 0.7 (W+Raw_Iron, W+Smelting)
- iron 36 ชิ้น (§7): furnace 360 วิ ≈ 4.5 coal (คำนวณ) → เตรียม coal 5 หรือใช้ 2+ เตาขนาน
- blast furnace สูตร: [ไม่แน่ใจ] (snippet ไม่ระบุ) ; hopper = chest + iron ingot 5 (W+Hopper)

---
## 6. อาหาร

| หมวด | ข้อมูล | แหล่ง |
|---|---|---|
| ขนาดการฟื้น | cooked porkchop/steak 8 hunger sat 12.8 ; cooked mutton 6 / 9.6 ; bread, baked potato 5 / 6 (cooked beef ใน snippet ถูกระบุ 5 และ 8 ขัดกัน — ใช้ steak 8) | W+Food, W+Steak, W+Cooked_Porkchop |
| drop สัตว์ | cow: beef 1–3, leather 0–2 ; pig: porkchop 1–3 ; sheep: wool(ตาย 1)/mutton ; chicken: ขนไก่ (จำนวน [ไม่แน่ใจ]) | W+Cow, W+Drops |
| ขนแกะ | โกน (shears) ได้ 1–3 wool ไม่เสียเลือด; ฆ่าแกะที่ไม่ได้โกน = 1 wool | W+Sheep |
| ขยายพันธุ์ | cow/sheep/goat ใช้ wheat ; pig ใช้ carrot/potato/beetroot ; chicken ใช้เมล็ด (wheat/pumpkin/melon/beetroot seeds ฯลฯ) ; cooldown หลังผสม 5 นาที | W+Breeding |
| wheat | 8 stage; เวลาเฉลี่ยต่อ stage 5–35 นาที (ดีสุด–แย่สุด); ได้ 1 wheat + 1–4 seeds; เก็บก่อนโตได้แค่ 1 seed; bone meal เพิ่ม 2–5 stage; ที่ดินชุ่มน้ำโตไวกว่า | W+Wheat, W+Bone_Meal |
| carrot/potato | 8 stage (หน้าตา 4 แบบ); potato ให้ 2–5 + poisonous 2% | W+Carrot, W+Potato |
| beetroot | 4 stage | W+Beetroot_Seeds |
| ตกปลา | รอ 5–30 วิ (100–600 tick); Lure ลบ 5 วิ/ระดับ; ถ้าไม่โดนแสงเวลารอ ~2 เท่า; fish 85% / junk 10% / treasure 5% (ไม่มี Luck of the Sea) | W+Fishing, W+Lure |
| composter | ต้นอาชีพ farmer = composter | W+Trading |

---
## 7. ชุดเหล็กชุดแรก: iron รวม

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

---
## 8. Enchant / Anvil / Villager

| หัวข้อ | ค่า | แหล่ง |
|---|---|---|
| enchanting table | obsidian 4 + diamond 2 + book 1 | W+Enchanting_Table |
| book | paper 3 + leather 1 | W+Book |
| bookshelf สำหรับ level 30 | 15 ชั้น รอบโต๊ะ | W+Enchanting_Table, W+Bookshelf |
| lapis | ใช้ต่อ 1 ชิ้นงาน สูงสุด 3 ; ตัวเลือกที่ 3 (level 30) เสีย 3 level + 3 lapis แต่ต้องมี >= 30 level | W+Enchanting_Table |
| anvil | iron block 3 + iron ingot 4 = 31 ingot | W+Anvil |
| ค่า "Too Expensive" | ค่าเกิน 39 level ทำไม่ได้ (survival) ; prior work penalty ทวีคูณทุกครั้ง | W+Anvil_mechanics |
| ซื้อขาย | librarian job block = lectern ; novice: 24 paper→1 emerald, 9 emerald→1 bookshelf, emerald+book→enchanted book (5–64 emerald); farmer = composter; เทรดแล้วอาชีพล็อกถาวร | W+Trading, W+Lectern |
| ราคา | ขึ้นกับ demand + popularity ; Hero of the Village ลดราคา | W+Trading |

---
## 9. Nether → End

| หัวข้อ | ค่า | แหล่ง |
|---|---|---|
| portal ขนาดเล็กสุด | กรอบ 4x5 ใช้ obsidian ขั้นต่ำ 10 (ไม่ต้องมุม) ; ถ้ารวมมุม 14 ; สูงสุด 23x23 | W+Nether_portal |
| จุดไฟ | flint and steel / fire charge / ฯลฯ | W+Nether_portal |
| ขุด obsidian | diamond pickaxe 9.4 วิ/บล็อก | W+Obsidian |
| หล่อ obsidian | น้ำไหลทับ lava source = obsidian ; ใช้ได้เฉพาะ Overworld (น้ำใน Nether ไม่คงอยู่) | W+Obsidian, W+Nether_portal |
| ruined portal | มี chest (obsidian, flint and steel, ทอง) | W+Ruined_Portal |
| blaze rod | blaze ดรอป 50% (เมื่อผู้เล่น/หมาป่าฆ่า) ; ได้ blaze powder 2 ต่อ rod | W+Blaze, W+Blaze_Powder |
| ender pearl | enderman ดรอป 50% ; warped forest enderman เยอะสุด | W+Enderman, W+Ender_Pearl |
| eye of ender | blaze powder + ender pearl | W+Eye_of_Ender |
| ใช้ eye | เตรียมอย่างน้อย 12 เพื่อเติมกรอบ (+3 สำหรับหา); แนะนำ pearl 15–20 | W+Tutorial:Starting_in_the_End / W+Tutorial:Complete_main_adventure |
| กรอบ End portal | 12 กรอบ ; ก่อนเจอมีตา 10%/กรอบ → จำนวนมีอยู่แล้ว 0=28.2% 1=37.7% 2=23.0% 3=8.52% 4=2.13% >=5=0.433% ; ค่าคาดหวัง 1.2 (คำนวณ 12x0.1) → ต้องใช้ตาเพิ่มเฉลี่ย ~10.8 | W+End_Portal_Frame |
| eye ที่ขว้าง | แตก 20% / รอด 80% ต่อครั้ง | W+Eye_of_Ender |
| stronghold | 128 ใน 8 วง: วง1 3 อัน 1,280–2,816 บล็อกจาก origin ; วง2 6 อัน 4,352–5,888 ; วง3 10 อัน 7,424–8,960 | W+Stronghold |

คำนวณ (ไม่ใช่ตัวเลข wiki ตรง): ต้อง 12 eye → pearl 12 + blaze powder 12 = blaze rod 6; ที่ drop 50% → ต้องฆ่า blaze ~12 ตัว และ enderman ~24 ตัว เฉลี่ย; ขว้างหา +3–5 ตา (แตก 20%) → เป้า lab: blaze rod 8+, pearl 16+.

---
## 10. Playbook รายไมล์สโตน (อาการ → สาเหตุ → แก้ → ตัวเลข+แหล่ง → ตัดสินผล → เทสจริง)

ค่าเวลาทั้งหมดในช่อง "ตัดสินผล" = ค่า lab ที่ตั้งเอง (นาทีจริง) ไม่ใช่ตัวเลข wiki ; ปรับหลังเก็บข้อมูลจริง.

### P1 ไม้ / table / เครื่องมือไม้
- อาการ: log=0 เกิน 3 นาที หลัง spawn ; ไม่มี crafting_table เกิน 5 นาที ; บอทวนเดินในทะเลทราย/ทะเล
- สาเหตุ: spawn ไร้ต้นไม้ ; pathfinding ติด ; ไม่รู้สูตร (planks→table 4)
- แก้: 1) มองหา log ใน 64 บล็อก 2) ไม่มี → เดินเส้นตรงทิศเดียว 100 บล็อก 3) ได้ log → planks → table 4 planks → stick (2 planks→4) → wooden pickaxe (3 planks+2 sticks)
- ตัวเลข: table 4 planks W+Crafting ; stick W+Stick ; pickaxe W+Wooden_Pickaxe
- ตัดสินผล: ผ่านเมื่อ wooden_pickaxe>=1 ภายใน 8 นาที ; ไม่ผ่าน → ย้ายจุด/ให้เพื่อนมาแชร์ log
- เทสจริง: spawn world flat/desert, วัดเวลาจนได้ wooden_pickaxe, ทำ 3 รอบ

### P2 stone tools + furnace
- อาการ: cobblestone<8 หลัง 10 นาทีนับจาก P1 ; ขุดด้วยมือ/ผิด tool
- สาเหตุ: ไม่มี pickaxe ในมือ ; ขุดลงทึบแล้วติด
- แก้: เสียบ pickaxe → ขุดหิน 11+ ก้อน (pickaxe 3 + furnace 8) → ทำ stone pickaxe (stone level 1 ขุด iron ได้ W+Stone_Pickaxe) + furnace
- ตัดสินผล: stone_pickaxe + furnace >=1 ภายใน 15 นาทีจาก spawn
- เทสจริง: ตรวจ inventory + วาง furnace

### P3 อาหาร
- อาการ: food level < 6 (จาก 20) และไม่มีของกิน ; ไม่มีสัตว์ใกล้
- สาเหตุ: ไม่ล่า ; กินดิบ ; ไม่มีเตา
- แก้: ฆ่า cow/pig/sheep (beef/porkchop 1–3) → ทำสุกในเตา (steak/porkchop 8 hunger W+Food) ; ตั้งฟาร์ม wheat (breed cow/sheep ด้วย wheat, cooldown 5 นาที W+Breeding) ; สำรองตกปลา 5–30 วิ/ตัว W+Fishing
- ตัดสินผล: cooked >= 16 ชิ้น หรือสัตว์เพาะ >= 4 ตัว ภายใน 30 นาที ; ไม่ผ่านและ food<6 → หยุดงานอื่น ทำอาหารก่อน
- เทสจริง: ปล่อยบอทหิว 10 นาทีดูว่าเข้าโหมดหาอาหารไหม

### P4 เตียง (wool)
- อาการ: wool<3 หลังเจอแกะ ; กลางคืนบอทยังเดินนอกบ้าน
- สาเหตุ: ไม่มี shears ฆ่าแกะแล้ว 1 wool/ตัว ; wool คนละสี
- แก้: ฆ่าแกะ 3 ตัวสีเดียวกัน หรือใช้ shears ได้ 1–3 ต่อตัว (W+Sheep) ; bed = wool 3 + planks 3 (W+Bed)
- ตัดสินผล: bed>=1 ภายใน 1 วันเกม (ค่า lab) ; ไม่ผ่าน → ยอมข้ามคืนโดยขุดหลบ
- เทสจริง: วางเตียง กดนอนตอนกลางคืน

### P5 เหล็ก (ชุดแรก 36 ingot)
- อาการ: raw_iron/iron_ingot ไม่เพิ่มเกิน 10 นาที ; ขุดชั้นผิด
- สาเหตุ: ขุดผิด Y (iron ชุก Y≈16 และภูเขา Y≈232 W+Iron_Ore) ; ไม่มี coal ; เตาเดียวช้า
- แก้: ลงถ้ำ Y≈16 หรือ strip mine ; รวบรวม coal ≥5 ; ใช้ furnace หลายตัว/blast furnace (5 วิ) ; ทำ pickaxe→bucket→shield→sword→เกราะ
- ตัวเลข: ingot รวม 36 (§7) ; furnace 10 วิ/ชิ้น W+Furnace ; coal 8 ชิ้น W+Charcoal
- ตัดสินผล: iron_ingot สะสมได้ >= 12 ภายใน 20 นาทีหลัง P2 ; ถ้า <6 → เปลี่ยนพื้นที่ขุด
- เทสจริง: นับ ingot ทุก 5 นาที ; วัดอัตรา ingot/นาที

### P6 เพชร
- อาการ: Y ปัจจุบันสูงกว่า 15 ตลอด ; diamond=0 หลัง 20 นาทีขุด
- สาเหตุ: ไม่อยู่ใน Y ต่ำ ; ใช้ stone pickaxe ขุดไม่ได้ (ต้อง iron level 2 W+Iron_Pickaxe) ; ระยะห่างกิ่งกว้างเกิน
- แก้: iron pickaxe → ลง Y≈-59 → strip mine กิ่งห่าง ~6 (W+Tutorial:Mining/Diamonds) ; ระวังลาวา (ขุดช่องมองก่อน)
- ตัดสินผล: diamond >= 5 ภายใน 30 นาทีหลังถึง Y -59 ; ไม่ผ่านย้ายกิ่ง ห่างจากเดิม 16 บล็อก
- เทสจริง: นับ diamond/นาที สามรอบ

### P7 Enchant
- อาการ: มี obsidian 4/diamond 2 แต่ไม่มี book ; ตัวเลือก level 30 ขึ้นไม่ได้
- สาเหตุ: bookshelf <15 ; ไม่มี lapis ; ไม่มีหนังสือ (paper 3 + leather 1)
- แก้: ทำ book 1 (leather จาก cow) → table → bookshelf 15 ล้อมโต๊ะ (หรือซื้อ 9 emerald/ชิ้นจาก librarian W+Trading) → lapis 3+
- ตัดสินผล: ผ่านเมื่อเลือกตัวเลือก level 30 ได้ (ต้องมี level >= 30)
- เทสจริง: enchant pickaxe 1 ครั้ง ตรวจ enchant ในไอเทม

### P8 Nether portal
- อาการ: obsidian<10 หลัง 15 นาที ; พยายามจุด portal ไม่สำเร็จ
- สาเหตุ: ขุด obsidian ด้วย pickaxe ต่ำกว่า diamond ไม่ได้ ; กรอบเล็กเกินไป ; ไม่มีไฟ
- แก้: ทาง A ขุด obsidian 10 (9.4 วิ/ก้อน W+Obsidian) ; ทาง B หล่อ lava+water ใน Overworld (W+Nether_portal) ; ทาง C ruined portal มี chest (W+Ruined_Portal) ; กรอบ 4x5 ใช้ 10 (ไม่ต้องมุม) ; ติดไฟด้วย flint & steel
- ตัดสินผล: ผ่านเมื่อบอทเข้า dimension nether ได้ภายใน 10 นาทีหลังได้ obsidian
- เทสจริง: เข้าออก portal 2 รอบ

### P9 blaze rod + pearl
- อาการ: blaze_rod<6 หลังเข้า fortress 20 นาที ; pearl ไม่เพิ่ม
- สาเหตุ: ดรอป 50% ; ไม่เจอ fortress/spawner ; enderman ไม่มาในพื้นที่
- แก้: หา fortress ; ฆ่า blaze ต่อเนื่อง (ต้องผู้เล่นฆ่า) ; ล่า enderman ใน warped forest (W+Enderman)
- ตัวเลข: เฉลี่ย blaze 12 ตัว→6 rod ; enderman ~24 ตัว→12 pearl (คำนวณจาก 50%)
- ตัดสินผล: rod>=6 และ pearl>=12 ภายใน 40 นาที ; ไม่ผ่านเพิ่มเวลา/แบ่งทีม (2 บอท blaze, 2 บอท pearl)
- เทสจริง: เก็บสถิติ drop จริง เทียบ 50%

### P10 stronghold + End
- อาการ: eye ที่ขว้างชี้ทิศไม่นิ่ง ; เดินเกิน 3,000 บล็อกยังไม่เจอ
- สาเหตุ: ขว้างใกล้เกิน / ขว้างผิดจุด (ต้องขว้าง 2 จุดสามเหลี่ยม) ; stronghold วง1 อยู่ 1,280–2,816 บล็อกจาก origin (W+Stronghold)
- แก้: ขว้าง eye เดินตาม (เสีย 20% แตก W+Eye_of_Ender) ; ใกล้ลง ขุดลง ; เติมตา 12 (ลบที่มีอยู่แล้ว)
- ตัวเลข: ใช้เฉลี่ยประมาณ 10.8 ตา (คำนวณ) ; เตรียมสำรอง 3–5
- ตัดสินผล: portal ติดภายใน 30 นาทีหลังเจอ stronghold
- เทสจริง: ตรวจ portal block active ก่อนกระโดดเข้า

---
## 11. ผลรวม [ไม่แน่ใจ] / ข้อสังเกตข้อมูล
- ตัวเลขรวมเกราะใน snippet ของ leather/chain/diamond/netherite ขัดกับผลบวกรายชิ้น → อ่านจากเกม
- gold armor points รายชิ้น, iron boots durability, blast furnace recipe, จำนวนสูตร bow/crossbow ครบ, pickaxe ขั้นต่ำของ ancient debris, ปริมาณ drop ไก่ → ไม่ยืนยันจาก snippet
- Y ของ iron/lapis มี snippet ไม่สอดคล้อง → ตรวจในเกมหรือ W+Ore_(feature)
- หน้า wiki เข้าตรงไม่ได้ (proxy บล็อก) ใช้ได้เฉพาะ snippet
