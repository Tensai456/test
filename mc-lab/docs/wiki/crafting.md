# Crafting สำหรับ Survival (Minecraft Java vanilla)

> W = https://minecraft.wiki/w/ · แหล่ง = ชื่อหน้าต่อท้าย W · สูตรตรงตัวอย่างอยู่ใน minecraft-data (ใช้เป็นหลัก) · ไฟล์นี้เน้นวางแผน · ชื่อ item ภาษาอังกฤษ

## grid-rule · กฎช่อง 2x2 vs 3x3
- ช่อง crafting ใน inventory = 2x2: ทำได้เฉพาะสูตรที่รูปร่างไม่เกิน 2x2 เช่น planks, sticks, crafting table, torch, (shapeless เล็กๆ เช่น blaze powder, paper ไม่ได้เพราะเป็นแนว 3 ช่อง)
- crafting table = 3x3: จำเป็นสำหรับสูตรรูปร่างกว้างหรือสูงเกิน 2 เช่น tools, armor, door, chest, furnace, bed, boat, bucket
- สูตร shapeless (ไม่สนตำแหน่ง) ใช้ 2x2 ได้ถ้าวัตถุดิบรวม ≤4 ชิ้น เช่น flint and steel, eye of ender, blaze powder
- planks/stick/อื่นๆ ที่ "any planks" รับไม้ทุกชนิด (tag) ยกเว้นระบุเฉพาะ
- ตารางด้านล่าง: ต้องโต๊ะ 3x3? = ใช่/ไม่; อ้างอิง: W Crafting_recipe

## basics · พื้นฐาน
| ของ | วัตถุดิบ | ได้ | ต้องโต๊ะ 3x3? | แหล่ง |
|---|---|---|---|---|
| Planks | 1 log (หรือ stem/bamboo block ตามชนิด) | 4 | ไม่ | Planks |
| Stick | 2 planks (เรียงแนวตั้ง) | 4 | ไม่ | Stick |
| Crafting Table | 4 planks (2x2) | 1 | ไม่ | Crafting_Table |
| Chest | 8 planks (วงแหวน เว้นกลาง) | 1 | ใช่ | Chest |
| Furnace | 8 cobblestone (หรือ blackstone/cobbled deepslate) | 1 | ใช่ | Furnace |
| Torch | 1 coal หรือ charcoal + 1 stick | 4 | ไม่ | Torch |
| Charcoal | smelt 1 log ในเตา | 1 | - | Charcoal |
| Ladder | 7 sticks (รูปตัว H) | 3 | ใช่ | Ladder |
| Door | 6 planks (2x3) | 3 | ใช่ | Door |
| Trapdoor | 6 planks (2x3) | 2 | ใช่ | Trapdoor |
| Fence | 4 planks + 2 sticks | 3 | ใช่ | Fence |
| Fence Gate | 2 planks + 4 sticks | 1 | ใช่ | Fence_Gate |
| Boat | 5 planks (รูปตัว U) | 1 | ใช่ | Boat |
| Bed | 3 wool สีเดียวกัน + 3 planks | 1 | ใช่ | Bed |
- ลำดับบอท: log -> planks -> crafting table (ทำใน 2x2) -> ค่อยทำของอื่นที่โต๊ะ

## tools · เครื่องมือ
ทุก tier ใช้รูปเดียวกัน: material = planks / cobblestone (หรือ blackstone/cobbled deepslate) / copper ingot / iron ingot / gold ingot / diamond; ต้องโต๊ะ 3x3 ทั้งหมด
| ของ | วัตถุดิบ | ได้ | ต้องโต๊ะ 3x3? | แหล่ง |
|---|---|---|---|---|
| Pickaxe | 3 material + 2 sticks | 1 | ใช่ | Pickaxe |
| Axe | 3 material + 2 sticks | 1 | ใช่ | Axe |
| Shovel | 1 material + 2 sticks | 1 | ใช่ | Shovel |
| Hoe | 2 material + 2 sticks | 1 | ใช่ | Hoe |
| Sword | 2 material + 1 stick | 1 | ใช่ | Sword |
- tier เรียง: wood < stone < copper < iron < gold(เร็วแต่ทนน้อย) < diamond < netherite
- copper tools/armor (เพิ่มมาใน 1.21.9 "The Copper Age"): สูตรเหมือน tier อื่นทุกประการ, ต่ำกว่า iron, เหนือ stone (W Copper_Pickaxe, Tool)
- netherite: ไม่ craft ตรง ดู section smithing
- ขุดแร่ที่ต้อง tier: iron/lapis ต้อง stone+; gold/redstone/diamond/emerald ต้อง iron+; obsidian/ancient debris ต้อง diamond+ [ไม่แน่ใจ: copper ore ใช้ stone+ ตามที่จำ]
- ทางลัด: Shears (2 iron ingot, ทแยง) ใช้ตัด leaves/wool/web
| Shears | 2 iron ingots (ทแยง) | 1 | ไม่ | Shears |
| Bucket | 3 iron ingots (รูปตัว V) | 1 | ใช่ | Bucket |
| Flint and Steel | 1 iron ingot + 1 flint (shapeless) | 1 | ไม่ | Flint_and_Steel |
| Fishing Rod | 3 sticks + 2 string | 1 | ใช่ | Fishing_Rod |

## armor · เกราะ
ทุก tier (leather, copper, iron, gold, diamond) ใช้จำนวน material เท่ากัน; ต้องโต๊ะ 3x3; ได้อย่างละ 1
| ชิ้น | material | แหล่ง |
|---|---|---|
| Helmet | 5 | Armor |
| Chestplate | 8 | Armor |
| Leggings | 7 | Armor |
| Boots | 4 | Armor |
- ชุดเต็ม = 24 material (copper ยืนยันจาก W Copper_Armor: chest 8 / legs 7 / boots 4, helmet 5 ตามรูปแบบ)
- leather = หนัง (วัว/ม้า/ลา/ลามา ฯลฯ), chainmail ไม่มีสูตร craft (ได้จากดรอป/loot เท่านั้น)
- netherite ต้อง smithing table จาก diamond (ดูด้านล่าง)
- Shield: 6 planks + 1 iron ingot (รูปตัว Y), ได้ 1, ต้องโต๊ะ 3x3 (W Shield)

## smithing · Smithing Table + Netherite
| ของ | วัตถุดิบ | ได้ | ต้องโต๊ะ 3x3? | แหล่ง |
|---|---|---|---|---|
| Smithing Table | 2 iron ingots + 4 planks | 1 | ใช่ | Smithing_Table |
| Netherite Ingot | 4 netherite scrap + 4 gold ingots | 1 | ใช่ (shapeless) | Netherite_Ingot |
| Netherite Upgrade Template | ต้นแบบ 1 + 7 diamonds + 1 netherrack | 2 | ใช่ | Netherite_Upgrade |
- ใช้ที่ smithing table 3 ช่อง: template + diamond tool/armor + netherite ingot -> netherite item (W Netherite_Upgrade, Smithing)
- 1 ingot ต่อ 1 ชิ้น; ไม่เสีย XP; คง enchant/trim/ชื่อ/ความทนที่ใช้ไปแล้ว
- template ถูกใช้หมดทุกครั้ง (ใช้ 1 ชิ้นต่อ 1 upgrade); template ได้จาก Bastion Remnant chest (ไม่มีสูตร craft ตั้งต้น); ทำซ้ำได้ตามตาราง
- ancient debris -> smelt เป็น scrap (ต้องขุดด้วย diamond+ pickaxe ใน Nether)

## utility · บล็อกใช้งาน
| ของ | วัตถุดิบ | ได้ | ต้องโต๊ะ 3x3? | แหล่ง |
|---|---|---|---|---|
| Blast Furnace | 5 iron ingots + 1 furnace + 3 smooth stone | 1 | ใช่ | Blast_Furnace |
| Smoker | 4 logs (หรือ stems) + 1 furnace | 1 | ใช่ | Smoker |
| Glass | smelt 1 sand | 1 | - | Glass |
| Glass Bottle | 3 glass (รูป V) | 3 | ใช่ | Glass_Bottle |
| Bookshelf | 6 planks + 3 books | 1 | ใช่ | Bookshelf |
| Book | 3 paper + 1 leather (shapeless) | 1 | ไม่ | Book |
| Paper | 3 sugar cane (แนวนอน) | 3 | ใช่ | Paper |
| Anvil | 3 iron blocks + 4 iron ingots | 1 | ใช่ | Anvil (รวม 31 ingot) |
| Iron Bars | 6 iron ingots | 16 | ใช่ | Iron_Bars |
| Iron Nugget | 1 iron ingot | 9 | ไม่ | Iron_Nugget |
| Lantern | 8 iron nuggets + 1 torch | 1 | ใช่ | Lantern |
| Campfire | 3 sticks + 1 coal/charcoal + 3 logs | 1 | ใช่ | Campfire |
| Scaffolding | 6 bamboo + 1 string | 6 | ใช่ | Scaffolding |
| Hopper | 5 iron ingots + 1 chest | 1 | ใช่ | Hopper |
| Cauldron | 7 iron ingots (รูปตัว U) | 1 | ใช่ | Cauldron |
- Soul lantern/campfire: ใช้ soul torch / soul sand-soil แทน [ไม่แน่ใจ: ขึ้นกับรุ่น ตรวจ minecraft-data]
- เตาทั้งสามชนิด: fuel เดียวกัน; blast furnace/smoker เร็วเป็น 2 เท่าแต่รับเฉพาะ ore/อาหาร

## combat · อาวุธระยะไกล
| ของ | วัตถุดิบ | ได้ | ต้องโต๊ะ 3x3? | แหล่ง |
|---|---|---|---|---|
| Bow | 3 sticks + 3 string | 1 | ใช่ | Bow |
| Arrow | 1 flint + 1 stick + 1 feather (แนวตั้ง) | 4 | ใช่ | Arrow |
| Crossbow | 3 sticks + 2 string + 1 iron ingot + 1 tripwire hook | 1 | ใช่ | Crossbow |
| Tripwire Hook | 1 iron ingot + 1 stick + 1 plank (แนวตั้ง) | 2 | ใช่ | Tripwire_Hook |
| Shield | 6 planks + 1 iron ingot | 1 | ใช่ | Shield |
- string ได้จาก spider/cobweb; feather จากไก่; flint จากการขุด gravel (สุ่ม)

## food · อาหาร
| ของ | วัตถุดิบ | ได้ | ต้องโต๊ะ 3x3? | แหล่ง |
|---|---|---|---|---|
| Bread | 3 wheat (แนวนอน) | 1 | ใช่ | Bread |
| Cake | 3 milk bucket + 2 sugar + 1 egg + 3 wheat | 1 | ใช่ | Cake (คืน 3 bucket เปล่า) |
| Golden Apple | 8 gold ingots + 1 apple | 1 | ใช่ | Golden_Apple |
| Cooked meat/ปลา | smelt/smoker/campfire | 1 | - | Cooking |
- อาหารบอทง่ายสุด: bread (wheat ฟาร์ม) หรือเนื้อสุก (steak/porkchop) จากเตา
- golden apple แบบ notch ไม่มีสูตร (ต้องเก็บ loot)

## magic · เวทมนตร์/Brewing
| ของ | วัตถุดิบ | ได้ | ต้องโต๊ะ 3x3? | แหล่ง |
|---|---|---|---|---|
| Enchanting Table | 1 book + 2 diamonds + 4 obsidian | 1 | ใช่ | Enchanting_Table |
| Brewing Stand | 1 blaze rod + 3 cobblestone/blackstone/deepslate | 1 | ใช่ | Brewing_Stand |
| Blaze Powder | 1 blaze rod | 2 | ไม่ | Blaze_Powder |
| Eye of Ender | 1 ender pearl + 1 blaze powder | 1 | ไม่ | Eye_of_Ender |
- ใช้ eye of ender 12 ดวงเปิด End portal (บางส่วนมีใน frame อยู่แล้ว)
- enchanting ให้แรงขึ้นด้วย bookshelf รอบโต๊ะ (สูงสุด 15)
- Cauldron (ดู utility) ใช้เก็บน้ำ/เปียก

## navigation · นำทาง
| ของ | วัตถุดิบ | ได้ | ต้องโต๊ะ 3x3? | แหล่ง |
|---|---|---|---|---|
| Compass | 4 iron ingots + 1 redstone | 1 | ใช่ | Compass |
| Clock | 4 gold ingots + 1 redstone [ไม่แน่ใจ ดู unverified] | 1 | ใช่ | Clock |
| Map (empty) | 8 paper + 1 compass | 1 | ใช่ | Map |
- หมายเหตุ: search snippet ให้ clock = "2 gold" ซึ่งไม่ตรงความจำ (4 gold) ดู unverified
- Java: map ว่างได้จาก 8 paper + compass; Bedrock ใช้ paper 9
- Compass ชี้ spawn point; recovery compass/lodestone เป็นอีกสูตร (ไม่ครอบคลุม)

## transport · ขนส่ง
- Boat: 5 planks (รูป U) ได้ 1, ต้องโต๊ะ (W Boat); chest boat = boat + chest
- Minecart: 5 iron ingots (รูป U) ได้ 1 [ไม่แน่ใจ: ไม่ได้ค้นหน้า Minecart]; Rail: 6 iron + 1 stick ได้ 16 [ไม่แน่ใจ]
- Saddle ไม่มีสูตร; ได้จาก loot

## planning · วัตถุดิบรวม
**Starter kit** (wooden pickaxe + stone pickaxe/axe/sword/shovel + furnace + chest + 8 torch + bed + crafting table)
| รายการ | planks | sticks | cobble | อื่นๆ |
|---|---|---|---|---|
| crafting table | 4 | | | |
| wooden pickaxe | 3 | 2 | | |
| stone pickaxe/axe/sword/shovel | | 2+2+1+2=7 | 3+3+2+1=9 | |
| furnace | | | 8 | |
| chest | 8 | | | |
| torch x8 (2 coal) | | 2 | | 2 coal |
| bed | 3 | | | 3 wool (หรือ 12 string) |
- sticks รวม 2+7+2 = 11 -> ต้องทำ 3 ครั้ง = 6 planks (ได้ 12 sticks)
- planks รวม 4+3+6+8+3 = 24 = 6 logs; cobblestone 9+8 = 17; coal 2 (หรือ charcoal จาก log เพิ่ม)
- เผื่อ: log ~8 (ไว้ fuel/ของอื่น), cobble ~20, wool 3
**First iron kit** (ต้องเตาแล้ว; raw iron = ingot จำนวนเท่ากัน)
| ชุด | iron ingot | sticks | อื่นๆ |
|---|---|---|---|
| iron pickaxe | 3 | 2 | |
| iron sword | 2 | 1 | |
| iron axe | 3 | 2 | |
| iron shovel | 1 | 2 | |
| armor เต็ม (5+8+7+4) | 24 | | |
| shield | 1 | | 6 planks |
| bucket | 3 | | |
| shears | 2 | | |
| flint and steel | 1 | | 1 flint |
- ชุดเต็ม = 40 ingot, 7 sticks (4 planks เผื่อ), 6 planks; ชุดขั้นต่ำ (pickaxe+sword+armor+shield+bucket) = 3+2+24+1+3 = 33 ingot
- fuel: 1 coal smelt 8 ชิ้น -> 40 ingots ใช้ coal ~5 (หรือ ไม้ ~ 1 log = 1.5 ชิ้น) [ไม่แน่ใจ: ตัวเลข fuel ตามจำ ตรวจ Fuel]
- แนะนำ: ทำ iron pickaxe ก่อน -> bucket -> armor ตามลำดับ

## unverified · ยังไม่ยืนยัน
- สูตรที่ยืนยันจาก snippet ของ wiki: planks/sticks/table (2x2 note), chest 8 planks, furnace 8 cobble, copper pickaxe 3+2, netherite upgrade (template + diamond + ingot, dup 7 diamond + netherrack), bucket 3 iron, flint and steel, compass 4 iron + redstone, map 8 paper + compass, crossbow 3 stick/2 string/iron/hook, blast furnace 5 iron/furnace/3 smooth stone, enchanting table 1 book/2 diamond/4 obsidian, anvil 3 iron block + 4 ingot, brewing stand blaze rod + stone-tier, cauldron 7 iron, hopper chest + 5 iron, eye of ender, blaze powder 1 -> 2, scaffolding 6 bamboo+1 string -> 6, lantern 8 nugget + torch, copper armor chest 8/legs 7/boots 4
- ไม่ได้ยืนยันจาก snippet (มาจากความจำ ตรวจกับ minecraft-data): ผลผลิตของ ladder/door/trapdoor/fence/gate/boat/bed, shield 6 planks+iron, bow 3+3, arrow 4, fishing rod, bread/cake/golden apple, smoker 4 logs, smithing table, iron bars 16, glass bottle 3, bookshelf, campfire, hopper/book รายละเอียด, minecart/rail
- [ไม่แน่ใจ] clock: snippet บอก 2 gold แต่ความจำ = 4 gold + 1 redstone (ตารางใช้ 4); ต้องตรวจ
- [ไม่แน่ใจ] copper helmet = 5 (wiki snippet อนุมานจากรูปแบบ, ไม่เห็นตารางตรง)
- [ไม่แน่ใจ] arrow ไม่แน่ใจเรื่อง 2x2 (แนวตั้ง 3 ช่อง ต้องโต๊ะ) ใช้ "ใช่" ตามเหตุผลรูปร่าง
- [ไม่แน่ใจ] tier ขุดแร่ copper ore, fuel numbers, soul lantern/campfire, recovery compass
- **ตรวจกับข้อมูลเกม 26.1 แล้ว (`kb/blocks/_recipes.md`, สูตรทั้งหมด `data/catalog_26.1/recipes.json`) — ถ้าขัดกับไฟล์นี้ ให้ยึดข้อมูลเกม:** นาฬิกา = ทอง 4 + เรดสโตน 1 ✓ · หมวกทองแดง = 5 ✓ · ลูกธนู = หินเหล็กไฟ + ไม้ + ขนนก → 4 ดอก ต้องโต๊ะ 3x3 ✓ · แร่ทองแดงต้องอีเต้อขั้นหินขึ้นไป ✓ · หอกเหล็ก = เหล็ก 1 + ไม้ 2
