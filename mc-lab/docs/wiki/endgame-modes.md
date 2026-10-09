# Endgame และโหมดเกม (Ender Dragon, Wither, End City, gamerule, มอบใหม่ 26.x) — Java Edition vanilla
> W = https://minecraft.wiki/w/ (Ender_Dragon, End_Crystal, End_Spike, Exit_portal, Tutorial:Defeating_the_ender_dragon, Wither, Wither_(effect), Wither_Rose, Tutorial:Defeating_the_wither, Shulker, End_City, End_City/Structure/Ship, Hardcore, Game_mode, Spectator, Adventure, Game_rule, Commands/gamerule, Java_Edition_26.1, Java_Edition_26.2, Java_Edition_26.3, Copper_Golem, Happy_Ghast, Sulfur_Cube, Mounts_of_Mayhem, Warden) · ข้อมูลจากสรุปผลค้นหา ไม่ได้เปิดหน้าเต็ม · เพิ่มเฉพาะข้อเท็จจริงใหม่ที่ไม่ซ้ำ kb/nether-end/d3-ender-dragon.md และ wither.md

## dragon-crystals · End crystal และการฟื้น HP มังกร
| ข้อมูล | ค่า | แหล่ง |
|---|---|---|
| จำนวน crystal | 10 ต้น บนยอดเสา obsidian, 2 ต้นอยู่ในกรงเหล็ก | W/End_Crystal |
| กรง | เสาที่สั้นอันดับ 2 และ 3 มีกรงเหล็ก (iron bars) 73 บล็อก กันโพรเจกไทล์ | W/End_Spike |
| ฟื้น HP | 1 HP ทุก 10 tick (0.5 วินาที) จาก crystal ที่อยู่ใกล้ | W/Ender_Dragon |
| ทำลาย crystal ที่กำลังฟื้นให้มังกร | มังกรเสีย 10 HP | W/Ender_Dragon |
| ระเบิด crystal | power 6 (เท่า charged creeper) | W/End_Crystal |
| เกิดใหม่ตอน respawn มังกร | crystal ทุกต้นเกิดใหม่ทีละต้น พร้อมเสา/กรง | W/End_Crystal |

บอตควร: ยิง crystal ไม่มีกรงด้วยธนูจากระยะไกลก่อน; ต้นมีกรงต้องปีน/ตัดกรงแล้วทำลายเอง ยืนห่างแล้วหลบระเบิด power 6; ทำลายระหว่างที่มังกรอยู่ใกล้เพื่อให้ได้ 10 HP ฟรี (W/Ender_Dragon).
ตัดสินผล: เกณฑ์แล็บ — ผ่านเมื่อ crystal ครบ 10 ต้นถูกทำลายก่อนเริ่มสู้ประชิด และ HP บอตไม่ลดจากระเบิด > 10.

## dragon-phases · เฟสการบินและ perching
| ข้อมูล | ค่า | แหล่ง |
|---|---|---|
| เฟสภายใน | 0 วนรอบ, 1 strafe (เตรียมยิง fireball), 2-3 บินลงเกาะพอร์ทัล, 4 ขึ้นจากพอร์ทัล, 5 เกาะพื้นพ่น breath, 6 เกาะหาผู้เล่น, 7 คำรามก่อน breath, 8 charge ใส่ผู้เล่น, 9 บินไปตาย, 10 hover | W/Ender_Dragon |
| Strafe | เมื่อ crystal ถูกทำลาย มังกรเข้า strafe; เมื่อห่างผู้เล่น <= 64 บล็อกยิง fireball | W/Ender_Dragon |
| Perch | ถ้าไม่มีบล็อกที่พิกัดกลาง มังกรลงมาเกาะที่ Y=0 (Java) | W/Ender_Dragon |
| ออกจาก perch | ดาเมจสะสมขณะเกาะ > 50 HP มังกรบินขึ้นและรีเซ็ตตัวสะสม; หรือหลัง breath ติดกัน 4 ครั้ง; หรือหาผู้เล่นไม่พบใน 150 บล็อก | W/Ender_Dragon |
| Breath | หลังคำราม 1.25 วินาที ถ้าผู้เล่นอยู่ใน 20 บล็อกจากโครงสร้างพอร์ทัล พ่น 3 วินาที ผลคล้าย lingering Harming | W/Ender_Dragon |
| ขนาด cloud | จานแนวนอนสูง 1 บล็อก กว้าง 5-6 บล็อก; โซนทำร้ายจริงเล็กกว่า ~3-4 บล็อกตรงกลาง | W/Dragon's_Breath |
| ดาเมจ breath | 3 HP/วินาที ไม่ขึ้นกับความยาก; cloud จาก fireball 6 HP/วินาที | W/Ender_Dragon |

บอตควร: ตีหัวช่วง perch (5-6) ให้ได้ดาเมจสะสมสูง แต่ถอยเมื่อมังกรคำราม (7); ไม่ยืนใน cloud; เมื่อมังกรเริ่ม charge (8) ให้หลบข้างหรือกางโล่ ไม่ถอยตรงๆ [คิดเอง].
ตัดสินผล: เกณฑ์แล็บ — ใน 1 perch บอตต้องสร้างดาเมจ ≥ 50 หรือถอยทันทีเมื่อมังกรเริ่ม phase 7; ยืนใน cloud ≤ 2 วินาที.

## dragon-damage · ดาเมจที่มังกรทำ และดาเมจที่มังกรรับ
| ข้อมูล | ค่า | แหล่ง |
|---|---|---|
| ชน/หัว (Easy/Normal/Hard) | 6 / 10 / 15 HP | W/Ender_Dragon |
| ปีก (Easy/Normal/Hard) | 3.5 / 5 / 7.5 HP | W/Ender_Dragon |
| ลดดาเมจที่ลำตัว | ~75% ถ้าไม่โดนหัว (เทียบเท่า HP ~800); 1.21.4 เปลี่ยนให้ได้ดาเมจลดเฉพาะส่วนที่ไม่ใช่หัว ตามที่หน้าวิกิระบุ | W/Ender_Dragon |
| สูตรลดดาเมจ | snippet ให้ original^(4/3) + min(1, original) แต่ความหมายสูตรไม่ชัด | W/Ender_Dragon · [ไม่แน่ใจ] |
| ระเบิดเตียง | ใช้ได้เมื่อมังกรอยู่บนพอร์ทัล power 5 (TNT = 4) เอา HP ออกได้สูงสุด 1/4 | W/Ender_Dragon, W/Bed |

บอตควร: เล็งหัวเสมอ; ไม่วางเตียงใกล้ตัวเอง วางระยะ ≥ 5 บล็อกแล้วระเบิดจากไกล (ใช้ได้เฉพาะเมื่อมังกรเกาะ); ตั้ง armor เต็มเพราะ Hard โดน 15 HP.
ตัดสินผล: เกณฑ์แล็บ — บอตต้องไม่เสีย HP > 15 จากการชนครั้งเดียวในความยาก Hard (ถ้าเกินแปลว่าไม่ใส่เกราะ).

## dragon-after · หลังมังกรตาย
| ข้อมูล | ค่า | แหล่ง |
|---|---|---|
| Exit portal | ทำงานเมื่อมังกรตาย พากลับ Overworld (ที่จุด spawn) | W/Exit_portal |
| Dragon egg | เกิดบนพอร์ทัลเฉพาะครั้งแรก; ขุดแล้วเทเลพอร์ตในรัศมี 15 บล็อก; มีโอกาสน้อยตกลงพอร์ทัลไป Overworld | W/Ender_Dragon |
| End gateway | เกิด 1 อันต่อการฆ่า สูงสุด 20 | W/Ender_Dragon |
| XP | ครั้งแรก 12000; มังกรที่เรียกซ้ำ 500 | W/Ender_Dragon |

บอตควร: อย่าเดินเข้าพอร์ทัลทิ้งของ; เก็บ egg ด้วยวิธีที่ไม่ให้มันเทเลพอร์ต (เช่นวางบล็อกทับ/ดันด้วย piston) [คิดเอง ไม่ยืนยัน].
ตัดสินผล: เกณฑ์แล็บ — มี gateway ≥ 1 และ XP เพิ่ม ≥ 12000 หลังฆ่าครั้งแรก.

## wither-summon · Wither: เกิด เฟส และการต่อสู้
| ข้อมูล | ค่า | แหล่ง |
|---|---|---|
| เรียก | soul sand/soil + กะโหลก wither skeleton 3 ใบ | W/Wither |
| ตอนเกิด | boss bar เต็มช้า ไม่ขยับ อมตะ 220 tick (11 วินาที) แล้วระเบิด power 7 รอบตัว | W/Wither |
| Armor | 4 | W/Wither |
| ครึ่ง HP | ตกพื้นระเบิดใหญ่ เรียก wither skeleton 3 ตัว (ยกเว้น Easy) + wither armor | W/Wither |
| Easy | ไม่ให้ Wither effect และไม่เรียก wither skeleton | W/Wither |
| กะโหลกน้ำเงิน | ระเบิดเท่ากะโหลกดำ ช้ากว่า แต่ทำลายบล็อกได้ทุกชนิดยกเว้น reinforced deepslate (รวม obsidian) | W/Wither |
| ดาเมจกะโหลก | 8 HP (Normal, Java); Wither II 10 วินาที Normal / 40 วินาที Hard | W/Wither |
| Wither effect ต่อระดับ | I = 0.5 HP/วินาที, II = 1 HP/วินาที, III = 2 HP/วินาที | W/Wither_(effect) |
| Wither rose | ให้ Wither effect ใส่ผู้ที่สัมผัส 1 HP ทุก 0.5 วินาที (ไม่ใช่ Peaceful) | W/Wither_Rose |
| ดรอป | nether star (ส่วนผสมหลักของ beacon) | W/Wither |
| ที่สู้ | ใต้เพดาน bedrock ใน Nether: ขุดห้อง 3x3x3 + อุโมงค์ 1x2 ยาว ~40 ลึก; วางตัวไว้ห่าง ~15 บล็อกตอนระเบิด แล้วยิงจากมุมกำบัง | W/Tutorial:Defeating_the_wither |

บอตควร: เรียกในห้อง 3x3x3 ใต้เพดาน bedrock แล้วถอยเข้าอุโมงค์ ≥ 15 บล็อกก่อน 11 วินาที; อย่าวางของมีค่า/ที่พักบอตใกล้ห้อง เพราะระเบิดทำลายบล็อก; ห้ามใช้ Wither rose เป็นกับดักใกล้บอต.
ตัดสินผล: เกณฑ์แล็บ — บอตอยู่ห่าง ≥ 15 บล็อกเมื่อครบ 220 tick และ HP ไม่ลดจากระเบิดแรก.

## end-city · End city, shulker, เรือ
| ข้อมูล | ค่า | แหล่ง |
|---|---|---|
| Shulker HP / armor | 30 HP; เปลือกปิด armor 20 (เปิดแล้วเสียเกราะ) | W/Shulker |
| กระสุน | ตามเป้า, ยิงเมื่อเป้าใกล้ราว 16 บล็อก; ดาเมจ 3/4/6 (Easy/Normal/Hard); ใส่ Levitation 10 วินาที | W/Shulker |
| เทเลพอร์ต | HP < 50% หลังโดนตี มี 20% พยายามหนี ลอง 5 ครั้งใน cube 17x17x17 | W/Shulker |
| รับมือ Levitation | elytra, ender pearl, นม, chorus fruit | W/Tutorial:Exploring_an_End_city |
| เรือ End | ที่เดียวที่ได้ elytra (item frame) และ dragon head; มี shulker เฝ้า + chest 2 ใบ | W/End_City/Structure/Ship |
| Loot ในหีบเมือง | enchanted diamond sword 12.7% ของหีบ; ของอื่น: เครื่องมือ/อาวุธ/เกราะ iron-diamond enchant, diamond | W/End_City |
| End void | ตกต่ำกว่าขอบ = ตาย (ดู kb/nether-end/d2) | — |

บอตควร: ถือนม/pearl; ฆ่า shulker ขณะเปลือกเปิดด้วยดาบ; ถ้าติด Levitation อย่าอยู่ลอยเหนือ void — ลงบนพื้นก่อนหมดเวลา 10 วินาที ถ้ามีเลือดต่ำให้กินนม.
ตัดสินผล: เกณฑ์แล็บ — ผ่านเมื่อบอตตกจาก Levitation ลงพื้นโดยไม่เสีย HP จากการตก > 3.

## hardcore-modes · Hardcore และโหมดเกม
| ข้อมูล | ค่า | แหล่ง |
|---|---|---|
| Hardcore | Hard ล็อกเปลี่ยนไม่ได้, ตายแล้วไม่ respawn ปกติ | W/Hardcore |
| ตายใน Hardcore | เลือก spectate (เป็น Spectator เกิดที่ spawn โลก) หรือกลับ title screen | W/Hardcore |
| ลบโลก | ตั้งแต่ 1.15 ปุ่ม delete/leave server กลายเป็น Title screen; ไม่ลบโลก/แบนผู้เล่นอีก | W/Hardcore |
| Adventure | ทำลายบล็อกได้เฉพาะไอเท็มที่มี can_break, วางด้วย can_place_on | W/Adventure |
| Spectator | ทำลาย/โต้ตอบบล็อก เอนทิตี หรือ inventory ไม่ได้; ทะลุบล็อกได้; มองไม่เห็นยกเว้นต่อ spectator คนอื่น | W/Spectator |
| 26.1.2 | แก้ spectator โจมตีผู้เล่นอื่นได้ | kb/version-26x (W/Java_Edition_26.1.2) |

บอตควร: ตรวจ gamemode จากแพ็กเก็ต; ถ้าถูกตั้งเป็น spectator (ตายใน hardcore) หยุดคำสั่งโต้ตอบทั้งหมด; ใน Adventure ตรวจ can_break ก่อนขุด.
ตัดสินผล: เกณฑ์แล็บ — บอตไม่ส่งคำสั่งขุด/วางใน spectator/adventure โดยไม่มีเครื่องมือที่ถูกต้อง (0 ครั้ง).

## gamerules · ชื่อ gamerule ใน 26.x
| ชื่อใหม่ (snake_case) | ชื่อเดิม | ค่า default / ความหมาย | แหล่ง |
|---|---|---|---|
| keep_inventory | keepInventory | false; true เก็บของและ XP ตอนตาย (HP/หิวรีเซ็ต effect หาย) | W/Game_rule |
| mob_griefing | mobGriefing | true; mob/crystal เปลี่ยนบล็อก + เก็บของ | W/Game_rule |
| advance_time | doDaylightCycle | 26.1 เปลี่ยนชื่อ; ควบคุมวัฏจักรกลางวัน/ข้างขึ้นข้างแรม | W/Daylight_cycle |
| advance_weather | doWeatherCycle | 26.1 เปลี่ยนชื่อ; /weather ยังใช้ได้ | W/Daylight_cycle |
| players_sleeping_percentage | playersSleepingPercentage | default 100; <= 0 คนเดียวข้ามคืนได้; > 100 ข้ามไม่ได้ | W/Game_rule |
| respawn_radius | spawnRadius | default 10 (Bedrock ชื่อ spawn_radius) | W/Game_rule |
| natural_health_regeneration | naturalRegeneration | default true; ไม่กระทบ golden apple/Regeneration | W/Game_rule |
| spawn_phantoms | doInsomnia | default true; phantom เกิดกลางคืน | W/Game_rule |

บอตควร: ใช้ชื่อ snake_case เท่านั้นในคำสั่งทดสอบ แล้วอ่านค่ากลับด้วย `/gamerule <ชื่อ>` เพื่อยืนยัน; ไม่เดาชื่ออื่น.
ตัดสินผล: เกณฑ์แล็บ — ทุก gamerule ในตารางตอบสำเร็จ 8/8 บนเซิร์ฟ 26.x.

## new-mobs-26x · มอบ/ไอเท็มใหม่ที่ยืนยันแล้ว
| ข้อมูล | ค่า | แหล่ง |
|---|---|---|
| Copper golem | 12 HP; สร้างจากบล็อก copper + carved pumpkin/jack o'lantern (วางฟักทองหลังสุด); บล็อก copper กลายเป็น copper chest | W/Copper_Golem |
| Happy ghast | 20 HP; แช่ dried ghast ในน้ำ ~20 นาที กลายเป็น ghastling; ป้อน snowball เร่งโต | W/Happy_Ghast |
| Nautilus | 15 HP; มอบกลางทะเล (ocean) ไม่ก้าวร้าวจนกว่าถูกยั่ว (dash attack); ผู้ขี่ได้ Breath of the Nautilus | W/Mounts_of_Mayhem |
| Zombie nautilus | เกิดพร้อม drowned ถือ trident (jockey); nautilus armor กันไหม้แดด | W/Mounts_of_Mayhem |
| Sulfur cube (26.2) | 8 HP (เล็ก 4); passive แต่เกิดในโควตา hostile; ดูดบล็อกเต็มเข้าตัวแล้วเคลื่อนไม่ได้ | W/Sulfur_Cube |
| 26.1 | golden dandelion, name tag คราฟต์ได้, baby mob ใหม่ | W/Java_Edition_26.1 |
| 26.3 "Wilderness Bound" (2026-09-15) | ไบโอม dappled forest + ไม้ poplar, red shrub, shelf mushroom; wool/concrete stairs+slab; straw bed, cushion; โครงสร้าง abandoned camp | W/Java_Edition_26.3 |

บอตควร: อัปเดต registry บล็อก/มอบให้ครบ ไม่ถือ sulfur cube เป็น hostile; อย่าสร้าง copper golem โดยไม่ตั้งใจ (วางฟักทองบน copper).
ตัดสินผล: เกณฑ์แล็บ — ไม่มี unknown id ขณะ login และเดิน 5 นาทีใน 26.3.

## sounds · เสียงที่ยืนยัน
| ข้อมูล | ค่า | แหล่ง |
|---|---|---|
| Warden | เสียงหัวใจเต้นต่ำเป็นระยะ ระหว่างทำงาน (subtitle "Warden's heart beats"); sniff ~4.2 วินาที cooldown 5-10 วินาที | W/Warden |
| Sculk sensor | click เมื่อรับ vibration (รัศมี 8), stops clicking เมื่อหยุด | W/Sculk_Sensor |
| Creeper hiss | มีเสียง hiss (note block + creeper head ให้เสียงนี้); timing ฟิวส์ [ไม่แน่ใจ] | W/Note_Block |

บอตควร: ถ้า API ให้ได้ยิน sound event ให้ตอบ heartbeat/warden เป็นสัญญาณถอย ไม่สู้; hiss = ถอยเกิน 3 บล็อก [คิดเอง].
ตัดสินผล: เกณฑ์แล็บ — เมื่อได้ยิน hiss บอตต้องห่างจาก creeper ≥ 4 บล็อกภายใน 1 วินาที.

## unverified · ยังไม่ยืนยัน
- ความหมายสูตรลดดาเมจมังกร (ต่ำกว่า 75%) และตัวคูณหัว/ลำตัวที่แน่นอน [ไม่แน่ใจ]
- ตารางเต็ม loot End city / % dragon head, elytra ต่อหีบ (8.6% ที่ snippet เจออาจผิดไอเท็ม) [ไม่แน่ใจ]
- รายชื่อ gamerule ครบทุกตัวในชื่อใหม่ (ยืนยันเฉพาะ 8 ตัวด้านบน) [ไม่แน่ใจ]
- HP ของ Wither skeleton ที่เรียกตอน half HP และเวลา/ความเร็ววิ่งของ Wither [ไม่แน่ใจ]
- วิธีเก็บ dragon egg ปลอดภัย [ไม่แน่ใจ]
- เสียง creeper hiss ในเกม (timing), ชื่อ sound event ของ warden heartbeat [ไม่แน่ใจ]
- สถานะ 26.3 หลังวางตลาด (hotfix, protocol) [ไม่แน่ใจ]
- ข้อมูลจากสรุปผลค้นหา ไม่ได้อ่านหน้าเต็ม ควรตรวจซ้ำ
