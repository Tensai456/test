# Java Edition 26.1 / 26.2 และ 1.21.9–1.21.11 — สิ่งที่บอตต้องรู้

> แหล่งข้อมูล: ผลค้นหา minecraft.wiki เท่านั้น (snippet; ดึงหน้าตรงไม่ได้). `W = https://minecraft.wiki/w/`. ตัวเลขใดไม่มีใน snippet ระบุ [ไม่แน่ใจ]. ค้นเมื่อ 2026-10-07.

## version-timeline · ไทม์ไลน์และเลขเวอร์ชัน
| เวอร์ชัน | ชื่อดรอป | วันที่ | protocol / data | แหล่ง |
|---|---|---|---|---|
| 1.21.9 | The Copper Age | 2025-09-30 | [ไม่แน่ใจ] | W/Java_Edition_1.21.9 |
| 1.21.10 (hotfix) | - | 2025-10-07 | 773 / 4556 (Java 21) | W/Java_Edition_1.21.10 |
| 1.21.11 | Mounts of Mayhem | 2025-12-09 | 774 / 4671 | W/Java_Edition_1.21.11 |
| 26.1 | Tiny Takeover | 2026-03-24 | 775 / 4786 | W/Java_Edition_26.1 |
| 26.1.1 / 26.1.2 | hotfix | 2026-04-01 / 04-09 | [ไม่แน่ใจ] | W/Java_Edition_26.1.1, 26.1.2 |
| 26.2 | Chaos Cubed | 2026-06-16 | 776 / 4903 (Java 25) | W/Java_Edition_26.2 |

- 26.1 เป็นเวอร์ชันแรกที่ใช้รูปแบบ ปี.ดรอป.hotfix และไม่ obfuscate (W/Java_Edition_26.1)
- ผลต่อบอต: ไลบรารีที่ผูกกับ protocol เก่า (<=773/774) ต่อ 26.x ไม่ได้จนกว่าจะอัปเดต; ตรวจ protocol 775 (26.1) / 776 (26.2) ก่อนเชื่อมต่อ. ตัวเลข "1.21.x" ในโค้ดบอตต้องรองรับสตริงรูปแบบ "26.1.2".

## v26-1-overview · ภาพรวม 26.1
| การเปลี่ยนแปลง | รายละเอียด | แหล่ง |
|---|---|---|
| Java | ต้อง Java 25 (OpenJDK 25), RAM default 4 GB, GC เป็น ZGC | W/Java_Edition_26.1 |
| โครงสร้างเซฟ | โฟลเดอร์ data บนสุดเก็บเฉพาะข้อมูลร่วมข้ามมิติ; ข้อมูลผู้เล่นย้ายไป players/ (advancements, data, stats) | W/Java_Edition_26.1 |
| game_rules | ย้ายไป data/minecraft/game_rules.dat; มีหน้า World Options + ช่องค้นหา game rule ในเกม | W/Java_Edition_26.1_Snapshot_* |
| ลูกมอบ | ทุก baby mob มีโมเดลเฉพาะ; baby axolotl มี play dead; เสียงลูกใหม่ | W/Java_Edition_26.1 |
| golden dandelion | หยุดการโตของ baby mob เมื่อป้อน (ใช้ไม่ได้กับ undead ลูก, piglin, villager) | W/Java_Edition_26.1 |
| name tag | คราฟต์ได้ (กระดาษ 1 + นักเก็ต 1) | W/Java_Edition_26.1 |
| 26.1.2 | แก้ spectator โจมตีผู้เล่นอื่นได้ | W/Java_Edition_26.1.2 |

- ผลต่อบอต: ตรวจรันด้วย JDK 25; path เซฟ/สถิติผู้เล่นเปลี่ยนที่ (ถ้าบอตอ่าน playerdata/stats จากดิสก์ ต้องแก้เป็น players/data, players/stats). ลูก mob ที่ถูก golden dandelion จะไม่โต — อย่ารอให้โต. ไม่พบการเปลี่ยนสูตรดาเมจ/หิว/วิ่ง/knockback ใน snippet ของ 26.1 [ไม่แน่ใจ].

## v26-2-overview · ภาพรวม 26.2 Chaos Cubed
| การเปลี่ยนแปลง | รายละเอียด | แหล่ง |
|---|---|---|
| ไบโอมใหม่ | sulfur caves (ใต้ดิน/ในเขา) มีแถบ sulfur และ cinnabar; แทนที่ spider ด้วย cave spider | W/Sulfur_Caves |
| บล็อกใหม่ | ชุดบล็อก sulfur, potent sulfur, cinnabar (stairs/slab/wall/polished/bricks/chiseled) | W/Java_Edition_26.2-snapshot-1 |
| มอบใหม่ | sulfur cube | W/Sulfur_Cube |
| กราฟิก | Vulkan ทดลอง (ตัวเลือก Graphics API; default กลับเป็น OpenGL) | W/Java_Edition_26.2 |
| อื่นๆ | friends list; hitbox/eye height/ตำแหน่งผู้ขี่ของหลาย mob ปรับ (baby hoglin/strider/zoglin ตรง Bedrock) | W/Java_Edition_26.2 |
| tags | sulfur_caves อยู่ใน #is_overworld, mineshaft/ruined portal/trial chambers; sulfur/cinnabar/potent_sulfur อยู่ใน #overworld_carver_replaceables | W/Java_Edition_26.2-snapshot-1 |

- ผลต่อบอต: ต้องมี block id ใหม่ในตารางบล็อก/ขุดเหมือง; ถ้ายังใช้ registry เก่า บล็อกใต้ดินจะเป็น unknown. hitbox ที่เปลี่ยนมีผลต่อ pathfinding/raycast เล็กน้อย.

## spear · หอก (1.21.11)
| ชนิด | jab dmg (HP) | cooldown (วินาที) |
|---|---|---|
| ไม้ | 1 | 0.65 |
| หิน | 2 | 0.75 |
| ทองแดง | 2 | 0.85 |
| ทอง | 1 | 0.95 |
| เหล็ก | 3 | 0.95 |
| เพชร | 4 | 1.05 |
| netherite | 5 | 1.15 |
- แหล่ง: W/Spear และหน้า W/Iron_Spear ฯลฯ. หอกทองแดงมาตั้งแต่ 1.21.9 (เครื่องมือทองแดง), ระบบหอกมาใน 1.21.11.
- reach 4.5 บล็อก (ดาบ/อื่นๆ 3). jab โจมตีได้เมื่อ cooldown 100% เท่านั้น. (W/Spear)
- charge attack: ดาเมจขึ้นกับความเร็วสัมพัทธ์ ผู้โจมตีและเป้าหมาย, ตัวคูณ 0.7x (ไม้/ทอง) ถึง 1.2x (netherite); วิ่ง 5.612 บล็อก/วินาที ได้ 4 HP (ไม้/ทอง) ถึง 7 HP (netherite); ไม่มี cooldown; โจมตีหลายเป้าหมายได้; ค้างนานจะสั่น (ไม่ดึงผู้ขี่ลง) แล้วตก (ไม่มี knockback แต่ดาเมจเต็ม). (W/Spear)
- หอกทำ critical hit และ sprint-knockback ไม่ได้ (เป็นไอเทมเดียวที่ทำไม่ได้). (W/Spear)
- Lunge I-III: พุ่งตัวด้านนอนตอน jab, กินหิว 3/4/5 แต้ม + 1 durability; Lunge II charge 13-22 HP, III 20-33 HP. (W/Spear)
- ผลต่อบอต: ประเมินดาเมจหอกเป็น function ของความเร็วสัมพัทธ์ ไม่ใช่ตัวเลขคงที่; อย่า spam jab ก่อน cooldown เต็ม; อย่าพึ่ง crit/sprint-hit กับหอก. ระวังศัตรูถือหอกระยะ 4.5 บล็อก — ระยะ kite เดิม (3) ไม่ปลอดภัย.

## mobs-1-21-11 · มอบใหม่ 1.21.11
| มอบ | ข้อเท็จจริง | แหล่ง |
|---|---|---|
| nautilus | HP 15, ความเร็ว 6.5 m/s, เป็นกลาง, เชื่อง/ขี่ได้ด้วยอานและพุ่ง (กด jump); เชื่องด้วย pufferfish; roaming 16 (มีอาน)/32 บล็อก | W/Nautilus, W/Java_Edition_1.21.11 |
| zombie nautilus | spawn ในมหาสมุทร/dripstone caves พร้อม drowned ถือ trident; เป็นศัตรูเมื่อมีผู้ขี่ hostile; ผสมพันธุ์ไม่ได้ | W/Zombie_Nautilus |
| parched | skeleton ดัดแปลงในทะเลทราย HP 16; ยิง arrow Weakness (30 วิ) ช้ากว่า; ไม่ไหม้แดด; ดรอปลูกศร (50% arrow weakness) | W/Parched |
| camel husk | husk spawn 10% เป็น camel husk jockey: husk ถือหอกเหล็ก + parched ผู้โดยสาร (1 ตัวต่อฝูง) | W/Camel_Husk |
| zombie horseman | zombie ถือหอกเหล็กขี่ zombie horse; spawn บนหญ้า (savanna/plains ฯลฯ) light 0 ใน Java | W/Zombie_Horse |
| ถือหอก | mob ถือหอกชาร์จขณะเข้าหา แล้วถอยเพื่อเว้นระยะ; piglin ถือหอกทอง (jab), zombified piglin (charge), zombie villager (charge) | W/Spear, W/Java_Edition_1.21.11 |
- ผลต่อบอต: ในทะเลทรายกลางคืนมีภัยใหม่ (parched weakness ลดดาเมจเรา); ต้องรับมือ mob ที่พุ่งชาร์จ — ถอยแนวขวาง/ใช้โล่ (โล่กัน knockback ของอาวุธ knockback ได้ใน Java). ม้า/อูฐ/ล่อ/ลา/zombie horse ที่ผู้เล่นขี่ไม่จมน้ำแล้ว (เปลี่ยนฟิสิกส์ข้ามแม่น้ำ).

## items-armor · ไอเทมและเกราะ
| รายการ | ข้อเท็จจริง | แหล่ง |
|---|---|---|
| netherite horse armor | เกราะ 19, toughness 3, knockback resist 1 | W/Java_Edition_1.21.11 |
| nautilus armor | 5 ระดับ; ค่าเกราะ 4 (ทองแดง) ถึง 19 (netherite); netherite ได้จากการ smith เท่านั้น ที่เหลือจาก loot | W/Nautilus_Armor |
| copper tools/armor (1.21.9) | ทนกว่า leather/gold แต่ต่ำกว่า iron; มีหอกทองแดง | W/Java_Edition_1.21.9 |
| ไอเทม durability | ไม่ "bob" เมื่อ durability เปลี่ยน | W/Java_Edition_1.21.11 |
| elytra | ร่อนผ่าน cave vines ฯลฯ ได้ | W/Java_Edition_1.21.11 |
- ผลต่อบอต: สูตรเกราะ/ดาเมจของผู้เล่นไม่พบการเปลี่ยนใน snippet [ไม่แน่ใจ]; เพิ่ม copper tier ในตารางวัสดุ/ลำดับเครื่องมือ; piglin ชอบหอกทอง/nautilus armor ทอง (ใช้ barter/ล่อ ได้).

## copper-age-1-21-9 · 1.21.9 Copper Age
| ข้อ | รายละเอียด | แหล่ง |
|---|---|---|
| copper golem | spawn โดยวางฟักทอง/jack o'lantern บนบล็อกทองแดง; HP 12; ดรอปทองแดง 1-3; oxidize/wax ได้; ขนไอเทมไปหีบไม้ | W/Copper_Golem |
| copper chest | หีบทองแดง (oxidize ได้) | W/Java_Edition_1.21.9 |
| lightning rod | oxidize และ wax ได้ | W/Java_Edition_1.21.9 |
| shelves | ชั้นวางไอเทมใหม่ | W/Java_Edition_1.21.9 |
| 1.21.10 | hotfix: แก้ entity ทะลุ piston ใน cobweb, wind charge collision, chunk ไม่โหลดตอน teleport | W/Java_Edition_1.21.10 |
- ผลต่อบอต: golem มีไอเทมถ่ายโอนระหว่างหีบ — อย่านับว่าของในหีบคงที่ใกล้ golem; ฟาร์มฟักทอง+ทองแดงอาจเกิด golem โดยไม่ตั้งใจ.

## sulfur-cube · sulfur cube (26.2)
| ข้อ | รายละเอียด | แหล่ง |
|---|---|---|
| ชนิด | passive แต่ spawn นับในโควตา hostile; กระโดดแบบ slime | W/Sulfur_Cube |
| HP | ใหญ่ 8, เล็ก 4; ตัวใหญ่ตายแตกเป็น 2 ตัวเล็ก (ยกเว้นตายจากระเบิดตัวเอง) | W/Sulfur_Cube |
| ดูด block | ดูดบล็อกเต็มได้ → ขยับไม่ได้, โดนโจมตีแล้วรับ knockback มากกว่าดาเมจ, เด้งแบบลูกบอล | W/Sulfur_Cube |
| ดรอป | ตัวใหญ่ดรอปบล็อกที่ดูด + XP 1-2; ตัวเล็กไม่ดรอป | W/Sulfur_Cube |
| TNT | ดูด TNT → archetype ระเบิด, fuse สุ่ม 0.75-3 วินาที; advancement "Uh Oh" | W/Sulfur_Cube, W/Java_Edition_26.2 |
| potent sulfur | วางเหนือ magma block ใต้น้ำ 1-4 ช่อง → geyser ทุก 50 วินาที ดันเอนทิตีขึ้นไม่เจ็บ 4-5 วินาที | W/Sulfur_Cube |
- ผลต่อบอต: เก็บระยะห่างจากตัวที่ดูด TNT; อย่าตีใกล้ขอบหน้าผา (ถูกเด้ง); geyser ทำให้ตำแหน่ง Y เปลี่ยนไม่คาดคิด (ฟิสิกส์/พาธ). ผล sulfur cube 26.2.x หลังรีลีสแก้ softlock (RC2) — เวอร์ชันก่อนหน้ามีบั๊ก.

## game-rules-tech · กฎเกม/เทคนิค
- 1.21.11: game rule ทั้งหมดเปลี่ยนชื่อเป็น resource location snake_case (เช่น minecraft:...); เพิ่ม `minecraft:fire_spread_radius_around_player` แทน doFireTick/allowFireTicksAwayFromPlayer (0=ไม่ลามไฟ, -1=ลามได้ไม่ต้องมีผู้เล่น). แหล่ง: W/Java_Edition_1.21.11
- tag #without_patrol_spawns ถูกแทนด้วย environment attribute gameplay/can_pillager_patrol_spawn. แหล่ง: W/Java_Edition_1.21.11
- 26.1: game_rules ย้ายไฟล์; GUI ค้นหาได้. แหล่ง: W/Java_Edition_26.1
- ผลต่อบอต: คำสั่ง `/gamerule doFireTick`, `keepInventory` ฯลฯ แบบ camelCase ในสคริปต์แล็บต้องเช็คชื่อใหม่ [ไม่แน่ใจ ว่าชื่อใหม่แต่ละตัวคืออะไร]; ใช้ `fire_spread_radius_around_player` แทนปิดไฟ.

## unverified · ยังไม่ยืนยัน
- protocol/data version ของ 1.21.9, 26.1.1, 26.1.2: [ไม่แน่ใจ]
- การเปลี่ยนสูตรดาเมจ/เกราะ/หิว/วิ่ง/knockback ของผู้เล่นใน 26.1–26.2: ไม่พบใน snippet [ไม่แน่ใจ]
- ชื่อใหม่ของ game rule แต่ละตัว (keepInventory ฯลฯ): [ไม่แน่ใจ]
- ค่า HP/ความเร็ว/จุด spawn ละเอียดของ zombie nautilus, camel husk, husk (ถือหอก): [ไม่แน่ใจ]
- ตัวเลข charge damage ที่ความเร็วอื่นและระยะ charge/ช่วง 3 stage (เวลา): [ไม่แน่ใจ]
- spear nerf/buff ใน snapshot หลัง 1.21.11 (26.x): ไม่ได้ตรวจ [ไม่แน่ใจ]
- สถานะ Mace/wind charge หลัง 1.21.9: ไม่พบ [ไม่แน่ใจ]
- ข้อมูลทั้งหมดมาจาก snippet การค้นหา ไม่ได้อ่านหน้าเต็ม
