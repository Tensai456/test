# Breeding (การผสมพันธุ์สัตว์) — Java Edition 26.x
> W = https://minecraft.wiki/w/ (Breeding, Tutorial:Animal_farming, Tutorial:Egg_farming, Tutorial:Hoglin_farming, Tutorial:Goat_farming, Golden_Dandelion, Baby, Looting, Food, Mooshroom, Suspicious_Stew, Nautilus, Happy_Ghast, Camel, Horse, Hoglin, Strider, Panda) · ข้อมูลจากสรุปผลค้นหา ไม่ได้เปิดหน้าเต็ม · เสริมจาก kb/animals (ไม่ซ้ำ: คูลดาวน์/โต 20 นาที/ลด 10%/รั้ว/อาหารผสมพื้นฐานมีแล้ว)

## core-rules · กฎกลางการผสมพันธุ์
| ข้อมูล | ค่า | แหล่ง |
|---|---|---|
| เงื่อนไข | ป้อนอาหารผสมสัตว์โต 2 ตัวที่อยู่ใกล้กัน → love mode → ได้ลูก 1 ตัว + XP 1–7 | W/Breeding, W/Tutorial:Animal_farming |
| คูลดาวน์พ่อแม่ | 5 นาที (หมาป่า Java 5 นาที, Bedrock 1 นาที) | W/Breeding, W/Wolf |
| ลูกโต | 20 นาที (24000 tick); snifflet 40 นาที | W/Breeding |
| ป้อนอาหารลูก | ลดเวลาที่เหลือ 10% ต่อครั้ง; ไม่มีผลถ้าเหลือน้อยกว่า 9 วินาที | W/Breeding |
| ลูกสัตว์ตาย | ไม่ดรอปไอเท็ม/XP | W/Tutorial:Animal_farming |
| ออกลูกกี่ตัว/ครั้ง | 1 ตัว (ไข่ไก่/ไข่เต่า/ไข่สนิฟเฟอร์/ลูกอ็อดเป็นข้อยกเว้นทางอ้อม ดูหัวข้อสัตว์นั้น) | W/Tutorial:Animal_farming, W/Ocelot |
| Golden Dandelion (ใหม่ 26.1) | ใช้กับลูกสัตว์ → ล็อกอายุ (ไม่โต, ไม่ despawn); ใช้อีกครั้ง → ปลดล็อกแล้วโตใน 24000 tick (20 นาที); มอบที่มี tag cannot_be_age_locked ใช้ไม่ได้ | W/Golden_Dandelion, W/Baby |
| สูตร Golden Dandelion | ทอง nugget 8 ล้อมดอก dandelion 1; ได้จากคราฟต์หรือ Wandering Trader เท่านั้น | W/Golden_Dandelion |

บอตควร: ป้อนเฉพาะตัวโตที่พ้นคูลดาวน์; อย่าเสียอาหารผสมกับลูก (ใช้เร่งโตได้เฉพาะเมื่อยังเหลือเวลา > 9 วินาที); Golden Dandelion ใช้ล็อกลูกสัตว์ให้เล็กเพื่อไม่ให้ฝูงใหญ่เกินคอก (ถ้ามี).
ตัดสินผล: เกณฑ์แล็บ — ผสมสำเร็จ = มีลูก 1 ตัวใหม่ภายใน ~10 วินาทีหลังป้อนครบคู่; ผสมซ้ำคู่เดิมเมื่อ ≥ 5:00 นาที (W/Breeding).

## food-table · ตารางอาหารผสม + เร่งโต
| สัตว์ | อาหารผสม | เร่งลูก | แหล่ง |
|---|---|---|---|
| วัว / mooshroom / แกะ / แพะ | wheat | wheat −10% | W/Breeding, W/Goat |
| หมู | carrot / potato / beetroot | −10% | W/Breeding |
| ไก่ | เมล็ด wheat/pumpkin/melon/beetroot/torchflower seeds/pitcher pod | −10% | W/Breeding |
| กระต่าย | carrot / golden carrot / dandelion | −10% | W/Rabbit |
| ม้า/ลา (เชื่องแล้ว) | golden apple / enchanted golden apple / golden carrot | ดูหัวข้อ equines | W/Breeding |
| ลามะ (เชื่องแล้ว) | hay bale | — | W/Breeding, W/Llama |
| อูฐ | cactus | −10 วินาที ต่อ cactus (ไม่ใช่ 10%) | W/Camel |
| หมาป่า (เชื่องแล้ว, HP เต็ม) | เนื้อทุกชนิดรวม rotten flesh/ปลา/rabbit stew | เนื้ออะไรก็ได้ | W/Breeding, W/Wolf |
| แมว/ocelot | raw cod / raw salmon (ocelot ต้องไว้ใจก่อน) | — | W/Ocelot, W/Cat |
| จิ้งจอก | sweet berries / glow berries | −10% | W/Fox |
| แพนด้า | bamboo (Java: ต้องมี bamboo ต้นจริงในพื้นที่ 7x7x3) | bamboo | W/Panda |
| ผึ้ง | ดอกไม้ทุกชนิด | −10% | W/Breeding, W/Bee |
| เต่า | seagrass | −10% | W/Turtle |
| กบ | slimeball | −10% (ลูกอ็อด) | W/Frog |
| axolotl | bucket of tropical fish | −10% | W/Axolotl |
| อาร์มาดิลโล | spider eye | −10% | W/Armadillo |
| sniffer | torchflower seeds | — | W/Sniffer |
| strider | warped fungus | warped fungus −10% | W/Strider |
| hoglin | crimson fungus | crimson fungus −10% | W/Hoglin |
| nautilus (ใหม่) | ต้องเชื่องก่อนด้วย pufferfish/bucket of pufferfish (1/3 ต่อชิ้น); ผสมด้วยปลาดิบ/สุก cod/salmon, pufferfish, tropical fish หรือ bucket ของปลา | ปลา/bucket −10% | W/Nautilus |
| happy ghast | ผสมไม่ได้ (ghastling โต 20 นาที; snowball −10% Java) | snowball | W/Happy_Ghast |
| camel husk / zombie horse | ผสมไม่ได้ (undead) | — | W/Camel_Husk, W/Zombie_Horse |

บอตควร: พกอาหารผสมของสัตว์เป้าหมายอย่างน้อย 2 ชิ้น/คู่; สัตว์เห็นผู้เล่นถืออาหารจะเดินตามจนผู้เล่นออกนอกระยะ/เลิกถือ/เริ่มผสม/ถูกตี (W/Breeding).
ตัดสินผล: เกณฑ์แล็บ — ตรวจ inventory ว่ามีอาหารผสมตรงชนิด ≥ 2 ก่อนเริ่มรอบ.

## equines · ม้า/ลา/ล่อ/ลามะ เร่งโต
| ข้อมูล | ค่า | แหล่ง |
|---|---|---|
| ลดเวลาโตลูกม้า | sugar 30 วิ, wheat 20 วิ, apple 1 นาที, hay bale 3 นาที | W/Horse |
| golden dandelion | ใช้กับลูกม้าเท่านั้น (ล็อกอายุ) | W/Horse, W/Golden_Dandelion |
| ค่าสถานะลูก | เฉลี่ยพ่อแม่แต่ละค่า + ความเบี่ยงเบนสุ่ม; ต่ำกว่าพ่อแม่ต่ำสุดได้ไม่เกิน 15%, สูงกว่าสูงสุดได้ไม่เกิน 15% | W/Horse |
| ม้า × ลา | ล่อ (ผสมต่อไม่ได้) | W/Mule |

บอตควร: ไม่ใช่แหล่งอาหาร (ไม่มีเนื้อ) — ผสมเมื่อต้องการพาหนะเท่านั้น.
ตัดสินผล: เกณฑ์แล็บ — ไม่นับเป็นฟาร์มอาหาร.

## food-values · ค่า hunger/saturation ของผลผลิต
| ไอเท็ม | hunger | saturation | แหล่ง |
|---|---|---|---|
| Steak (วัว/mooshroom สุก) | 8 | 12.8 | W/Steak |
| Cooked Porkchop (หมู/hoglin สุก) | 8 | 12.8 | W/Cooked_Porkchop |
| Cooked Mutton | 6 | 9.6 | W/Cooked_Mutton |
| Cooked Chicken | 6 | 7.2 | W/Cooked_Chicken |
| Cooked Rabbit | 5 | 6 | W/Cooked_Rabbit |
| Cooked Salmon | 6 | 9.6 | W/Cooked_Salmon |
| Rabbit Stew | 10 | [ไม่แน่ใจ] sat (kb/blocks/_foods = 12) | W/Rabbit_Stew |
| Mushroom Stew / Suspicious Stew / Beetroot Soup | 6 | 7.2 | W/Mushroom_Stew, W/Suspicious_Stew, W/Beetroot_Soup |
| Raw Beef | 3 | 1.8 | W/Raw_Beef |
| Raw Chicken | 2 | 1.2 (30% ติด Hunger 30 วิ) | W/Raw_Chicken |
| Raw Mutton | 2 | 1.2 | W/Raw_Mutton |
| Raw Porkchop | 3 | 1.8 (ไม่ขัดกัน: 0.6 = ตัวคูณ saturation · 1.8 = 3 × 0.6 = ค่าจริง ตรง minecraft-data) | W/Raw_Porkchop |
| เวลากิน | 32 tick (1.6 วิ), stack 64; Suspicious Stew กินได้แม้หิวเต็ม | W/Food, W/Suspicious_Stew |

บอตควร: ย่างก่อนกิน (เนื้อสุกให้ hunger มากกว่าดิบ ~2.7 เท่าสำหรับ steak/porkchop); กิน stew แล้วทิ้งชามไว้ใช้ต่อ (ชามไม่หายตาม W/Beetroot_Soup).
ตัดสินผล: เกณฑ์แล็บ — จัดอันดับอาหารด้วย hunger ต่อชิ้น แล้ว saturation ต่อชิ้น.

## drops-looting · ดรอปเนื้อและ Looting/ไฟ
| สัตว์ | เนื้อดรอป | Looting III สูงสุด | ถ้าตายตอนติดไฟ | แหล่ง |
|---|---|---|---|---|
| วัว / mooshroom | beef 1–3 + หนัง 0–2 | เพิ่มสูงสุด +1 ต่อระดับ | steak | W/Cow, W/Mooshroom, W/Looting |
| หมู | porkchop 1–3 | สูงสุด 1–6 (kb/animals/pig) | cooked porkchop | W/Pig, W/Looting |
| แกะ | mutton 1–2 (Looting I 1–3, II 1–4, III 1–5) | 5 | cooked mutton | W/Sheep |
| ไก่ | chicken 1 + ขน 0–2 | 1–4 (เฉลี่ย 2.5) | cooked chicken | W/Chicken, W/Looting |
| กระต่าย | rabbit 1 (+หนัง/ตีนกระต่ายหายาก) | 1–4 | cooked rabbit [ไม่แน่ใจ] | W/Rabbit |
| hoglin | porkchop 2–4 (สูงสุด 7 ที่ Looting III), หนัง 0–1 (สูงสุด 4 ที่ Looting III), XP 5 (Java) | 7 | cooked porkchop | W/Hoglin |

หลักทั่วไป: Looting เพิ่มจำนวนสูงสุดของดรอปทั่วไป +1 ต่อระดับ (W/Looting). แพะ/อาร์มาดิลโล/axolotl/กบ ฯลฯ ไม่มีเนื้อ (ดู kb/animals).
บอตควร: ตีด้วยดาบ Looting แล้วย่างด้วยเตา; ไม่ต้องจุดไฟใส่สัตว์ (เสี่ยงไฟลามคอก).
ตัดสินผล: เกณฑ์แล็บ — คำนวณเนื้อคาดหวังจากค่าเฉลี่ยช่วงดรอป (ไม่ใช่ค่าวานิลลา).

## sheep-wool · แกะ ขน และสีลูก
| ข้อมูล | ค่า | แหล่ง |
|---|---|---|
| ขนงอกใหม่ | ต้องกินหญ้าเอง: short grass, short/tall dry grass, fern (ไม่ใช่ tall grass/large fern); กินบล็อกหญ้า → เป็น dirt | W/Sheep |
| โอกาสกินหญ้า | ตัวโต 1/500 ต่อ tick คู่ (ทุก 2 tick); ลูกแกะ 1/25 | W/Sheep |
| สีลูก | สีพ่อแม่ผสมกันได้ตามสูตรสี dye → ลูกได้สีผสม; ผสมไม่ได้ → สีใดสีหนึ่งของพ่อแม่แบบสุ่ม (ไม่สนว่าตัดขนไปแล้ว) | W/Sheep |
| แกะที่ย้อมแล้วตัดขน | งอกมาสีเดิมที่ย้อม | W/Sheep |

บอตควร: ปล่อยพื้นหญ้า/ใบเฟิร์นในคอกให้พอ (ถ้าไม่มี → ขนไม่งอก); ตัดขนเมื่อต้องการขนแล้วเก็บแกะไว้เป็นพ่อแม่.
ตัดสินผล: เกณฑ์แล็บ — ขนไม่งอกภายใน 5 นาที และไม่มีหญ้า = ย้ายคอก.

## chicken-eggs · ไก่และไข่
| ข้อมูล | ค่า | แหล่ง |
|---|---|---|
| ปาไข่ (กดใช้/dispenser) | 1/8 ได้ลูกไก่; ถ้าได้ 1/32 ได้เพิ่มอีก 3 (รวม 4); ต่อไข่ 1 ฟอง = 31/256 ได้ 1 ตัว, 1/256 ได้ 4 ตัว | W/Tutorial:Egg_farming |
| ไข่ตกเอง | ทุก 5–10 นาที ต่อไก่ (kb/animals/chicken) | W/Chicken |
| ลูกไก่จากไข่ | ไม่ต้องใช้เมล็ดผสม ไม่ต้องรอคูลดาวน์ | W/Tutorial:Egg_farming |
| ตัวอย่างคาดหวัง (คิดเอง) | ≈ 0.137 ตัวต่อไข่ (= 31/256 + 4/256 = 35/256) — ค่าแล็บ | [คิดเอง] จาก W/Tutorial:Egg_farming |

บอตควร: ไก่เป็นฟาร์มเริ่มต้นราคาถูกสุดเพราะแค่เก็บ/ปาไข่ + เมล็ดข้าวสาลีได้จากหญ้า (W/Tutorial:Quick_ways_to_get_food); ปาไข่ในคอกปิด.
ตัดสินผล: เกณฑ์แล็บ — นับสำเร็จเมื่อจำนวนไก่โตเพิ่มขึ้นหลังปาไข่ ≥ 8 ฟอง (คาดหวัง ≈ 1 ตัว).

## mooshroom · Mooshroom, ซุป, suspicious stew
| ข้อมูล | ค่า | แหล่ง |
|---|---|---|
| ผสม | wheat; แดง×แดง → แดง (1/1024 ได้น้ำตาล); แดง×น้ำตาล → 50/50 | W/Mooshroom |
| ใช้ bowl | แดง → mushroom stew; น้ำตาล → suspicious stew (ถ้าให้ดอกไม้เล็กก่อน) | W/Mooshroom |
| ให้ดอกไม้ | ดอกไม้เล็กให้ตัวน้ำตาล → ครั้งถัดไปที่รีดด้วย bowl ได้ suspicious stew ตามดอกนั้น; ตัวแดงไม่ผลิต | W/Mooshroom |
| ฟ้าผ่าใกล้ (≤4 บล็อก) | สลับแดง ↔ น้ำตาล | W/Mooshroom |
| กรรไกร | ดรอปเห็ด 5 ต้น แล้วกลายเป็นวัวปกติ | W/Mooshroom |
| ดรอปตอนตาย | หนัง 0–2, beef 1–3 (steak ถ้าติดไฟ) | W/Mooshroom |
| ผลของ stew ตามดอก | allium = Fire Resistance 3 วิ; poppy = Night Vision 5 วิ; tulip = Weakness 7 วิ; oxeye daisy = Regeneration 7 วิ; lily of the valley = Poison 11 วิ; azure bluet = Blindness 11 วิ (Java); blue orchid = Saturation 0.35 วิ (Java) | W/Suspicious_Stew |
| ดอกอื่น (cornflower, torchflower, wither rose ฯลฯ) | ผลและเวลา [ไม่แน่ใจ] (snippet ไม่ครบ) | W/Suspicious_Stew |

บอตควร: ตัวแดงให้ mushroom stew ไม่จำกัดครั้ง (ต้องมี bowl); ห้ามใช้ wither rose/lily of the valley/azure bluet ถ้าจะกินเอง; ห้ามตัดขนสัตว์ที่ต้องเก็บรีดต่อ.
ตัดสินผล: เกณฑ์แล็บ — ได้ 6 hunger ต่อ bowl จากตัวแดง = แหล่งอาหารถาวรไม่ฆ่าสัตว์ (ต้องการ mushroom island).

## nether-animals · hoglin และ strider
| ข้อมูล | ค่า | แหล่ง |
|---|---|---|
| hoglin ผสม | crimson fungus; คูลดาวน์ 5 นาที; โต 20 นาที; fungus ลูก −10% | W/Hoglin |
| hoglin ใน Overworld/End | สั่นแล้วกลายเป็น zoglin ใน 15 วินาที (ฟาร์มต้องอยู่ใน Nether หรือป้องกัน zombification) | W/Hoglin |
| hoglin ดรอป | porkchop 2–4 (สุกถ้าติดไฟ), หนัง | W/Hoglin |
| strider ผสม | warped fungus; คูลดาวน์ ~5 นาที; โต 20 นาที; fungus −10% | W/Strider |
| strider ดรอป | [ไม่แน่ใจ] — ไม่เกี่ยวกับอาหารหลัก (string ตามวิกิจริง ยังไม่ยืนยันใน snippet) | — |

บอตควร: ฟาร์ม hoglin = แหล่ง porkchop ใน Nether (hoglin ก้าวร้าวสูง ต้องมีรั้ว/แยกจาก piglin).
ตัดสินผล: เกณฑ์แล็บ — ไม่ใช่ฟาร์มเริ่มต้น (ต้องเข้า Nether).

## luring-pens · ล่อ จูง ย้าย และออกแบบคอก
| ข้อมูล | ค่า | แหล่ง |
|---|---|---|
| ล่อด้วยอาหาร | สัตว์ที่เห็นผู้เล่นถืออาหารจะเดินตามจนไกลเกิน/เลิกถือ/เริ่มผสม/ถูกตี; ไก่ล่อด้วยเมล็ด | W/Breeding, W/Tutorial:Quick_ways_to_get_food |
| จูงด้วย lead | ใช้ได้ (รายชื่อ/ข้อจำกัดใน kb/animals/leads-fencing); lead อาจขาดถ้าสัตว์ติดภูมิประเทศ | W/Tutorial:Transportation_methods |
| เรือ | ม้า/ลา/อูฐตัวโตเข้าเรือไม่ได้ แต่ว่ายตามเรือเมื่อมี lead | W/Tutorial:Transportation_methods |
| คอกทั่วไป | รั้วล้อม + ประตูรั้ว; ใส่พรมบนรั้วให้ผู้เล่นกระโดดข้ามได้ แต่สัตว์ข้ามไม่ได้ | W/Tutorial:Animal_farming |
| ห้องล็อก (mob lock) | ต่อรั้วเป็นห้องกันชน 2 ประตู ขนาดพอ 2 ตัว (วัว/แกะ ทำประตูคู่) | W/Tutorial:Animal_farming |
| ช่องทางผู้เล่นราคาถูก | เสา nether brick fence แทรกในรั้วไม้: ผู้เล่นเดินผ่านได้ สัตว์ตัวใหญ่ผ่านไม่ได้ | W/Tutorial:Animal_farming |

บอตควร: ล่อด้วยอาหารจากทุ่งไปคอกแล้วปิดประตู; ปล่อย 2 ตัวขึ้นไป; ขนาดคอกต้องใหญ่พอให้ผู้เล่นเดินเข้าได้ (ค่าตัวเลขขนาดคอก [ไม่แน่ใจ]).
ตัดสินผล: เกณฑ์แล็บ — ถึงคอก = สัตว์ ≥ 2 ตัวอยู่ในรัศมีคอก และประตูปิดครบ.

## best-farm-ranking · จัดอันดับฟาร์มอาหารช่วงต้น [คิดเอง]
| อันดับ | สัตว์ | เหตุผล [คิดเอง] จากค่าวิกิข้างต้น |
|---|---|---|
| 1 | วัว | beef 1–3 (เฉลี่ย 2) × steak 8 hunger/12.8 sat ≈ 16 hunger ต่อตัว; อาหารผสม wheat ปลูกง่าย; ยังรีดนมได้ |
| 2 | หมู | porkchop 1–3 (เฉลี่ย 2) × 8 hunger/12.8 sat ≈ 16 hunger ต่อตัว; อาหารผสม carrot/potato/beetroot ปลูกง่าย (ผู้เล่นมักมี carrot/potato จากหมู่บ้าน) |
| 3 | แกะ | mutton 1–2 (เฉลี่ย 1.5) × 6 hunger ≈ 9 hunger + ขน; wheat ตัวเดียวกับวัว |
| 4 | ไก่ | 1 ชิ้น × 6 hunger = 6 hunger + ไข่ฟรี/ขน; เริ่มเร็วและถูกมาก |
| 5 | กระต่าย | 1 ชิ้น × 5 hunger; ต้อง carrot; ข้ามรั้วสูง |
| พิเศษ | mooshroom แดง | mushroom stew 6 hunger ซ้ำได้ไม่ต้องฆ่า แต่ต้องไป mushroom island |

หมายเหตุ [คิดเอง]: ต่อ 5 นาที คู่พ่อแม่ได้ลูก 1 ตัว ลูกต้อง 20 นาที (เร่งด้วยอาหาร 10%/ครั้ง) ก่อนเก็บเนื้อ; ผลผลิตต่อตัวของวัว/หมูสูงกว่าไก่ ~2.7 เท่าแต่ไก่ไม่ต้องรอจาก wheat/เมล็ด. คำแนะนำสำหรับทีม 4 บอต: วัว + หมู + ไก่ ร่วมกัน (ผสมเฉพาะ wheat + carrot + เมล็ดข้าวสาลี).
บอตควร: เก็บพ่อแม่ 2 ตัว/ชนิดเสมอ; ฆ่าเฉพาะตัวโตส่วนเกิน; ย่างก่อนกิน.
ตัดสินผล: เกณฑ์แล็บ — ฟาร์มผ่านเมื่อให้ hunger สุกรวม ≥ (บอต 4 ตัว × ต้องกินต่อชั่วโมง) [ค่าเกณฑ์ตั้งเอง ยังไม่คำนวณ].

## new-26x · สิ่งใหม่ใน 26.x ที่เกี่ยวกับการผสม
| ข้อมูล | ค่า | แหล่ง |
|---|---|---|
| 26.1 "Tiny Takeover" (24 มีนาคม 2026) | Golden Dandelion; ตัวแปรสัตว์ temperate/cold/warm ของวัว/หมู/ไก่; ตัวแปรใหม่: วัว moody, ไก่ picky, หมู mini/big | W/Golden_Dandelion, W/Java_Edition_26.1 |
| nautilus | เชื่องด้วย pufferfish แล้วผสมด้วยปลา; ลูกโต 20 นาที | W/Nautilus |
| ผลของตัวแปรต่ออาหาร/ผสม | [ไม่แน่ใจ] — ยังไม่เห็นข้อมูลว่าเปลี่ยนดรอปหรืออาหารผสม | — |
| sulfur cube (26.2) | สัตว์ passive ใน sulfur caves; เกี่ยวกับการผสม [ไม่แน่ใจ] | W/Java_Edition_26.2 |

บอตควร: ไม่ต้องแยกอาหารตามตัวแปร (ใช้อาหารเดิมไปก่อน) จนกว่าตรวจพบความต่าง.
ตัดสินผล: เกณฑ์แล็บ — ถ้าป้อนอาหารเดิมแล้วไม่เข้า love mode ให้บันทึกชนิดตัวแปรเป็นข้อมูลทดสอบ.

## unverified · ยังไม่ยืนยัน
- Rabbit Stew saturation (lab ตาราง 12; snippet ได้เฉพาะ hunger 10)
- ผลของ suspicious stew จาก cornflower, torchflower, wither rose ฯลฯ ไม่ครบใน snippet
- ดรอปตอนไฟไหม้ของกระต่าย/strider และดรอปของ strider
- ขนาดคอกขั้นต่ำต่อสัตว์ 1 ตัวใน Java 26.x
- ผลของตัวแปรสัตว์ใหม่ 26.1 ต่อดรอป/อาหารผสม
- sulfur cube ผสมได้หรือไม่
- เวลาลดโตของ torchflower seeds ต่อ snifflet (ไม่ได้ค้น)
- ค่า hunger/saturation แล็บทั้งหมดในหัวข้อ best-farm-ranking เป็นการคำนวณ [คิดเอง] ไม่ใช่ค่าวิกิ
