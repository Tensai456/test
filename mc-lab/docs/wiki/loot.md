# หีบสมบัติทุกโครงสร้าง (Chest Loot) — Java Edition vanilla
> W = https://minecraft.wiki/w/ (Village/Loot, Shipwreck, Buried_Treasure, Mineshaft, Monster_Room, Stronghold, Desert_Pyramid, Jungle_Pyramid, Pillager_Outpost, Woodland_Mansion, Igloo, Ruined_Portal, Nether_Fortress, Bastion_Remnant, End_City, Ancient_City, Trail_Ruins, Swamp_Hut, Warm_Ocean_Ruins, Vault, Ominous_Vault) · ข้อมูลจากสรุปผลค้นหา ไม่ได้เปิดหน้าเต็ม · % = โอกาสที่หีบหนึ่งใบมีของนั้นอย่างน้อย 1 ชุด ตามที่ snippet ระบุ · ไม่มีตัวเลข = [ไม่แน่ใจ] · เฉพาะข้อเท็จจริงใหม่ (รายละเอียดเดิมดู kb/structures/*)

## village-weaponsmith · หมู่บ้าน: หีบช่างตีอาวุธ
| ข้อมูล | ค่า | แหล่ง |
|---|---|---|
| แอปเปิล | 55.0% (1-3) | W/Village/Loot |
| obsidian | 22.9% (3-7) | W/Village/Loot |
| ทองแท่ง | 22.9% (1-3) | W/Village/Loot |
| iron chestplate | 22.9% | W/Armorer (ผลค้นหา) |
| เหล็กแท่ง | 40.9% (1-5) | W/Village/Loot |
| เพชร | 14.4% (1-3) | W/Village/Loot |
| อานม้า (saddle) | 14.4% | W/Village/Loot |
| เกราะม้าทอง | 5% | W/Village/Loot |

บอตควร: เปิดหีบช่างตีอาวุธเมื่อต้องการ obsidian/เพชร/อานม้า; ห้ามทำร้ายชาวบ้านระหว่างเก็บ.
ตัดสินผล: เกณฑ์แล็บ — นับเหล็ก/เพชรที่ได้ต่อหีบ เทียบ 40.9% / 14.4% (W/Village/Loot).

## village-armorer-toolsmith · หมู่บ้าน: ช่างเกราะ / ช่างเครื่องมือ
| ข้อมูล | ค่า | แหล่ง |
|---|---|---|
| Armorer: ขนมปัง | 80.6% (1-4) | W/Village/Loot |
| Armorer: เหล็กแท่ง | 54.2% (1-3) สูงสุดในหีบหมู่บ้าน | W/Village/Loot |
| Armorer: iron helmet / มรกต | 31.8% / 31.8% | W/Village/Loot |
| Armorer: iron chestplate | ไม่มีในหีบนี้ | W/Armorer (ผลค้นหา) |
| Toolsmith: เหล็กแท่ง | 41.2% (1-5) | W/Village/Loot |
| Toolsmith: iron pickaxe / iron shovel | 41.2% / 41.2% | W/Village/Loot |
| Toolsmith: เพชร | 9.9% (1-3) | W/Village/Loot |
| Toolsmith มีหีบเฉพาะ | หมู่บ้าน desert และ taiga | W/Toolsmith |
| Toolsmith: diamond pickaxe | ไม่เกิดในหีบ (ได้จากเทรดเท่านั้น) | W/Toolsmith (ผลค้นหา) |
| หีบอื่นในหมู่บ้าน | cartographer (stick, empty map, paper, bread, compass; ไม่มีในหมู่บ้าน desert), fletcher (egg, stick, feather, arrow, emerald, flint), fisherman (emerald, raw cod ฯลฯ 1-5 กอง), butcher (เนื้อดิบ 1-3), mason, shepherd, tannery, temple (bread, rotten flesh, redstone, emerald, lapis, ทองแท่ง) | W/Village/Loot |
| จำนวนหีบ/หมู่บ้าน | [ไม่แน่ใจ] (ขึ้นกับอาคารที่เกิด) | — |

บอตควร: เรียงลำดับเปิด armorer > toolsmith > weaponsmith เมื่อต้องการเหล็ก; ไม่ต้องหา temple/butcher ถ้าไม่ขาดอาหาร.
ตัดสินผล: เกณฑ์แล็บ — เป้าหมายเหล็กจากหมู่บ้าน = รวมหลายหีบแล้วได้ ≥ 9 ชิ้น (ตัวเลขแล็บตั้งเอง).

## shipwreck · เรืออับปาง (supply / map / treasure)
| ข้อมูล | ค่า | แหล่ง |
|---|---|---|
| หีบ | สูงสุด 3: supply = หัวเรือ, treasure = ท้ายชั้นบน, map = ชั้นล่าง | W/Shipwreck |
| Treasure: เหล็กแท่ง | 97.4% (ตัวเลขช่วงจำนวนดู kb/structures/shipwreck: 1-5) | W/Shipwreck |
| Treasure: iron nugget / มรกต / lapis | 94.5% / 73.7% / 61.5% | W/Shipwreck |
| Treasure: เพชร | 14.1% (ตาม kb เดิม) | W/Shipwreck |
| Map: แผนที่ขุมทรัพย์ | 100% (paper 89.4%, feather 60.0%) | W/Shipwreck |
| Supply: suspicious stew / paper / wheat / rotten flesh | 54.3% / 46.4% / 42.1% / 32.2% | W/Shipwreck |
| ทุกหีบ: Coast armor trim | 16.7% (x2) | W/Shipwreck |
| ทุกหีบ: nautilus armor | copper 10.8%, iron 5.4%, golden 2.7%, diamond 1.1% | W/Shipwreck |

บอตควร: ไปหีบ treasure ก่อน (เหล็ก+มรกต), แล้วหีบ map เพื่อไปต่อ buried treasure; ขึ้นหายใจบ่อย.
ตัดสินผล: เกณฑ์แล็บ — ได้เหล็ก ≥ 1 กอง จากหีบ treasure ภายใน 5 นาทีเกมหลังพบเรือ.

## buried-treasure · ขุมทรัพย์ฝังดิน
| ข้อมูล | ค่า | แหล่ง |
|---|---|---|
| Heart of the Sea | 100% (แหล่งเดียว) | W/Buried_Treasure |
| เหล็ก | 99.4% (1-4) | W/Buried_Treasure |
| ทองแท่ง | 88.0% | W/Buried_Treasure |
| มรกต / เพชร | 53.1% (4-8) / 53.1% (1-2) | W/Buried_Treasure |
| cooked cod / cooked salmon | 75.0% (2-4) ทั้งคู่ | W/Buried_Treasure |
| จำนวนหีบ | 1 [ไม่แน่ใจ ตัวเลข] | — |

บอตควร: หาแผนที่จากหีบ map ของ shipwreck หรือ ocean ruins ก่อน; เป็นแหล่งเหล็ก+อาหารสุกต่อหีบที่ดีมาก.
ตัดสินผล: เกณฑ์แล็บ — นับเหล็กและเพชรต่อหีบเทียบ 99.4% / 53.1%.

## ocean-ruins · ซากมหาสมุทร (warm/cold)
| ข้อมูล | ค่า | แหล่ง |
|---|---|---|
| หีบเล็ก (warm): ถ่านหิน / gold nugget | 78.9% / 78.9% | W/Warm_Ocean_Ruins |
| หีบเล็ก: แผนที่ขุมทรัพย์ / มรกต | 43.5% / 14.1% | W/Warm_Ocean_Ruins |
| Suspicious sand (warm) | 1 ชิ้นต่อบล็อก; มรกต 12.5%, เพชร 12.5% | W/Warm_Ocean_Ruins |
| ได้เฉพาะที่นี่ | pottery sherd พิเศษ, nautilus armor, sniffer egg (warm) | W/Warm_Ocean_Ruins, W/Cold_Ocean_Ruins |
| เหล็ก/ทองแท่งใหญ่ | ไม่เห็นใน snippet [ไม่แน่ใจ] | — |

บอตควร: ถ้าต้องการเพชร ให้แปรง suspicious sand ใน warm ruins; ไม่ใช่แหล่งเหล็ก.
ตัดสินผล: เกณฑ์แล็บ — ถือว่าไม่คุ้มสำหรับเหล็ก; คุ้มเมื่อต้องการแผนที่.

## mineshaft · เหมืองร้าง (minecart with chest)
| ข้อมูล | ค่า | แหล่ง |
|---|---|---|
| name tag | 42.3% | W/Mineshaft |
| golden apple / enchanted golden apple | 28.2% / 1.4% | W/Mineshaft |
| เหล็ก / ถ่านหิน | 27.3% / 27.3% (ถ่าน 3-8) | W/Mineshaft |
| enchanted book / เพชร | 14.1% / 8.9% (1-2) | W/Mineshaft |
| bread / glow berries | 38.7% / 38.7% | W/Mineshaft |
| rails / torch | 78.4% (4-8) / 65.7% (1-16) | W/Mineshaft |
| lapis / redstone | 14.5% / 14.5% | W/Mineshaft |
| จำนวนหีบ | ขึ้นกับรถเข็นที่เกิดในเหมือง [ไม่แน่ใจ] | — |
| mineshaft แบบ sulfur caves | แผ่นเสียง Bounce 42.1% (ชื่อไบโอมใหม่ [ไม่แน่ใจ]) | W/Mineshaft |

บอตควร: เก็บรถเข็นที่มีหีบในทางยาวก่อน; ระวัง cave spider; name tag/golden apple ก็เอาด้วย.
ตัดสินผล: เกณฑ์แล็บ — ถือว่าเหล็กปานกลาง แต่ name tag/แอปเปิลทองสูง.

## monster-room · ห้องมอนสเตอร์
| ข้อมูล | ค่า | แหล่ง |
|---|---|---|
| name tag | 25.3% | W/Monster_Room |
| golden apple / enchanted golden apple | 19.4% / 2.8% | W/Monster_Room |
| copper horse armor | 19.4% | W/Monster_Room |
| เหล็ก / bucket | 18.5% (1-4) / 18.5% | W/Monster_Room |
| enchanted book | 13.3% | W/Monster_Room |
| bone / string | 57.8% / 57.8% (1-8) | W/Monster_Room |
| bread / redstone | 34.1% / 26.6% | W/Monster_Room |
| music disc 13 / cat / otherside | 19.4% / 19.4% / 2.8% | W/Monster_Room |
| saddle | ไม่เห็น % ใน snippet; kb เดิมระบุถูกแทนด้วยหนังตั้งแต่ 1.21.6 [ไม่แน่ใจ ใน 26.x] | W/Saddle |

บอตควร: เก็บ bucket และ name tag; กำจัด spawner ก่อน.
ตัดสินผล: เกณฑ์แล็บ — ห้องมอนสเตอร์ = แหล่ง bucket/เหล็กเล็กน้อยระหว่างขุดถ้ำ.

## stronghold · ป้อมปราการ (altar / library / corridor)
| ข้อมูล | ค่า | แหล่ง |
|---|---|---|
| Altar chest: apple | 32.9% (1-3) | W/Stronghold |
| Altar: เหล็ก / ender pearl | 22.8% (1-5) / 22.8% | W/Stronghold |
| Altar: เพชร / golden apple | 7.3% (1-3) / 2.5% | W/Stronghold |
| Altar: horse armor diamond/iron/golden/copper | 2.5% ทั้งสี่ | W/Stronghold |
| Library: paper / book | 89.2% / 89.2% | W/Stronghold |
| Library: enchanted book | 67.8% | W/Stronghold |
| Library: compass / empty map | 10.9% / 10.9% | W/Stronghold |
| Library: Eye armor trim | 100% | W/Stronghold |
| Library | 0-2 ห้อง/ป้อม; ห้องใหญ่ 2 หีบ, เล็ก 1 หีบ | W/Stronghold |
| Corridor/crossing | ตาราง stronghold_corridor เหมือน altar ตาม snippet [ไม่แน่ใจ แยกจากกัน] | W/Stronghold |

บอตควร: ไปห้องสมุดเพื่อ enchanted book + trim; เก็บ ender pearl จาก altar เป็นโบนัส.
ตัดสินผล: เกณฑ์แล็บ — นับ enchanted book ต่อห้องสมุดเทียบ 67.8%.

## desert-pyramid · พีระมิดทะเลทราย
| ข้อมูล | ค่า | แหล่ง |
|---|---|---|
| เหล็ก / ทองแท่ง | 17.0% (1-5) / 17.0% (2-7) | W/Desert_Pyramid |
| เพชร | 5.9% (1-3) | W/Desert_Pyramid |
| diamond horse armor / golden horse armor | 5.9% / 11.6% | W/Desert_Pyramid |
| saddle | ไม่พบในตารางใน snippet [ไม่แน่ใจ] | — |
| หีบ | 4 (kb เดิม) | — |

บอตควร: ระวัง TNT ใต้แผ่นกด (ดู kb/structures/desert-pyramid); ได้เหล็ก/ทองต่อหีบเฉลี่ยต่ำกว่าเรือ.
ตัดสินผล: เกณฑ์แล็บ — 4 หีบ ไม่ถึงต้นทุนความเสี่ยงถ้าต้องการเหล็กอย่างเดียว.

## jungle-pyramid · พีระมิดป่า
| ข้อมูล | ค่า | แหล่ง |
|---|---|---|
| bone / rotten flesh | 61.5% / 52.9% | W/Jungle_Pyramid |
| ทองแท่ง / bamboo | 50.6% / 50.6% | W/Jungle_Pyramid |
| เหล็ก | 37.0% | W/Jungle_Pyramid |
| Wild armor trim | 33.3% | W/Jungle_Pyramid |
| leather / เพชร / มรกต | 12.7% / 12.7% / 8.6% | W/Jungle_Pyramid |
| enchanted book, horse armors | 4.4% ต่ออย่าง | W/Jungle_Pyramid |
| หีบ | 2 (หลังกับดักธนู และหลังปริศนาคันโยก) | W/Jungle_Pyramid |

บอตควร: ตัด tripwire ด้วยกรรไกร; ได้ trim Wild ที่นี่.
ตัดสินผล: เกณฑ์แล็บ — ดี 2 หีบ เหล็ก 37% + เพชร 12.7%.

## pillager-outpost · ด่านผู้ปล้น
| ข้อมูล | ค่า | แหล่ง |
|---|---|---|
| dark oak log | 100% (2-3) | W/Pillager_Outpost |
| wheat / carrot / potato | 72.5% / 57.5% / 57.5% | W/Pillager_Outpost |
| bottle o' enchanting | 60.9% | W/Pillager_Outpost |
| crossbow / goat horn | 50.0% / 50.0% | W/Pillager_Outpost |
| string / arrow | 39.1% / 39.1% | W/Pillager_Outpost |
| tripwire hook / เหล็ก | 30.5% / 30.5% (1-3) | W/Pillager_Outpost |
| Sentry armor trim (x2) | 25.0% | W/Pillager_Outpost |
| enchanted book | 11.0% | W/Pillager_Outpost |

บอตควร: ได้ bottle o' enchanting + อาหารจำนวนมาก; เหล็กพอใช้.
ตัดสินผล: เกณฑ์แล็บ — คุ้มเมื่อเคลียร์ pillager แล้ว (HP > 50%).

## woodland-mansion · คฤหาสน์ป่า
| ข้อมูล | ค่า | แหล่ง |
|---|---|---|
| golden apple | 25.5% | W/Woodland_Mansion |
| enchanted golden apple | 3.7% | W/Woodland_Mansion |
| diamond chestplate | 9.1% | W/Woodland_Mansion |
| enchanted book | 17.6% | W/Woodland_Mansion |
| lead / bread | 32.9% / 25.5% | W/Woodland_Mansion |
| เหล็ก / ทองแท่ง | 13.5% (1-4) / 6.9% (1-4) | W/Woodland_Mansion |
| ของอื่น | diamond hoe, bucket, chainmail chestplate, music disc, vex trim, resin clump | W/Woodland_Mansion |
| saddle / name tag | ไม่พบใน loot table ตาม snippet | W/Woodland_Mansion |
| totem of undying | ไม่ได้จากหีบ (ได้จากการฆ่า evoker) [ไม่แน่ใจ ใน snippet] | — |
| จำนวนหีบ | [ไม่แน่ใจ] | — |

บอตควร: ไปเมื่อแข็งแรงพอสู้ vindicator/evoker; เป้าหมายคือ golden apple + totem จาก evoker.
ตัดสินผล: เกณฑ์แล็บ — ห้ามเข้าถ้าไม่มีเกราะเพชร (ดูแล็บ combat).

## igloo · อิกลู
| ข้อมูล | ค่า | แหล่ง |
|---|---|---|
| golden apple | 100% (1) | W/Igloo |
| ถ่านหิน / apple | 70.4% / 70.4% | W/Igloo |
| wheat / gold nugget / rotten flesh | 55.3% ทั้งสาม | W/Igloo |
| stone axe / มรกต | 14.7% / 7.6% | W/Igloo |
| หีบ | 1 ใต้ห้องใต้ดิน (kb เดิม); ชุดละ 2 pool | W/Igloo |

บอตควร: ได้ golden apple แน่นอนจากห้องใต้ดิน ใช้รักษา zombie villager.
ตัดสินผล: เกณฑ์แล็บ — สำเร็จ = ได้ golden apple 1 ลูก.

## ruined-portal · พอร์ทัลพัง
| ข้อมูล | ค่า | แหล่ง |
|---|---|---|
| flint / obsidian / flint and steel | 46.4% (1-4) / 46.4% (1-2) / 46.4% | W/Ruined_Portal |
| golden apple | 20.5% | W/Ruined_Portal |
| enchanted golden apple | 1.5% | W/Ruined_Portal |

บอตควร: ตรวจลาวารอบหีบก่อนเปิด; flint and steel ใช้จุดพอร์ทัลได้.
ตัดสินผล: เกณฑ์แล็บ — ได้ flint and steel หรือ obsidian ≥ 1 = พอสำหรับเปิดพอร์ทัลเร็ว.

## nether-fortress · ป้อมเนเธอร์
| ข้อมูล | ค่า | แหล่ง |
|---|---|---|
| ทองแท่ง | 46.5% (1-3) | W/Nether_Fortress |
| saddle | 33.3% | W/Nether_Fortress |
| golden horse armor | 27.4% | W/Nether_Fortress |
| เพชร | 17.9% (1-3) | W/Nether_Fortress |
| เหล็ก / nether wart / flint and steel | 17.9% (1-5) / 17.9% (3-7) / 17.9% | W/Nether_Fortress |
| obsidian | 7.5% (2-4) | W/Nether_Fortress |
| โอกาสหีบ | 1/3 ต่อทางเลี้ยวของทางเดิน | W/Nether_Fortress |

บอตควร: ป้อมเนเธอร์เป็นแหล่ง saddle ที่ดี (ตั้งแต่ saddle หายจาก monster room/ancient city ถ้าเป็นจริง); ระวัง blaze.
ตัดสินผล: เกณฑ์แล็บ — เอา saddle + เพชร เมื่อมาเก็บ blaze rod อยู่แล้ว.

## bastion · ซากบาสชั่น (treasure / bridge / hoglin-stable / housing / generic)
| ข้อมูล | ค่า | แหล่ง |
|---|---|---|
| Treasure: netherite upgrade template | 100% | W/Bastion_Remnant (netherite-template kb) |
| Treasure: netherite ingot | 35.0% (1) | W/Bastion_Remnant |
| Treasure: เหล็ก / ทองแท่ง | 33.7% (3-9) ทั้งคู่ | W/Bastion_Remnant |
| Treasure: เพชร | 12.8% (2-6) | W/Bastion_Remnant |
| Treasure: ancient debris | 10.3% (2) | W/Bastion_Remnant |
| Treasure: diamond armor/sword | 15.2% ต่อชิ้น | W/Bastion_Remnant |
| Treasure: enchanted golden apple | 5.3% | W/Bastion_Remnant |
| Treasure: snout trim / magma cream | 8.3% / 33.7% | W/Bastion_Remnant |
| Treasure: block of gold / crying obsidian | 33.7% (2-5) / 33.7% (3-5) | W/Bastion_Remnant |
| Bridge: crying obsidian / golden sword | 11.2% (3-8) / 11.2% | W/Bastion_Remnant |
| Bridge: netherite template / snout trim | 10% / 8.3% | W/Bastion_Remnant |
| Hoglin stable: gilded blackstone / block of gold | 22.8% / 16.0% | W/Bastion_Remnant |
| Hoglin stable: netherite template / ancient debris | 10.0% / 12.0% | W/Bastion_Remnant |
| Hoglin stable: crying obsidian | 22.8% | W/Bastion_Remnant |
| Housing: crying obsidian / block of gold / saddle | 22.8% / 18.2% / 13.6% | W/Bastion_Remnant |
| Housing: ench. diamond pickaxe / dmg ench. diamond shovel | 13.6% / 17% | W/Bastion_Remnant |
| Generic: spectral arrow / arrow / magma cream | 11.2% / 54.6% / 44.1% | W/Bastion_Remnant |
| Generic: golden sword / crying obsidian / template | 9.8% / 19% / 10% | W/Bastion_Remnant |
| Bridge หีบ | แต่ละ rampart: 1/2 หีบเดี่ยว, 1/2 หีบสาม | W/Bastion_Remnant |

บอตควร: เป้าหมายคือหีบ treasure (template 100%); เปิดหีบเมื่อ piglin ใกล้ ≤ 16 ไม่ได้ (veto เดิม).
ตัดสินผล: เกณฑ์แล็บ — ต้องมีเกราะเพชร ตามกฎ bastion.

## end-city · เมืองเอ็นด์
| ข้อมูล | ค่า | แหล่ง |
|---|---|---|
| เพชร | 20.4% (เฉลี่ย 1.011 ต่อหีบ) | W/End_City |
| saddle | 12.7% | W/End_City |
| diamond horse armor | 4.4% | W/End_City |
| enchanted diamond chestplate / boots | 12.7% ต่ออย่าง | W/End_City |
| elytra | อยู่ใน item frame ห้องสมบัติของ end ship ไม่ใช่หีบ | W/End_City, W/Elytra |
| เหล็ก/ทอง/trim | ไม่เห็นใน snippet [ไม่แน่ใจ] | — |

บอตควร: หา end ship เพื่อ elytra; ระวัง shulker และ void.
ตัดสินผล: เกณฑ์แล็บ — บอตเริ่มต้นห้ามเข้า; ตัดสินเมื่อมีสิ่งช่วยลอยตัว.

## ancient-city · เมืองโบราณ
| ข้อมูล | ค่า | แหล่ง |
|---|---|---|
| enchanted golden apple | 8.6% (1-2); วิกิว่าสูงเป็นอันดับสองของทุก loot table (ไม่ทราบอันดับหนึ่ง) [ไม่แน่ใจ] | W/Ancient_City |
| enchanted book (สุ่ม) | 36.5% | W/Ancient_City |
| Swift Sneak book | 23.7% | W/Ancient_City |
| ender pearl | 23.7% (1-15) | W/Ancient_City |
| damaged ench. diamond hoe | 16.5% | W/Ancient_City |
| Ward trim / Silence trim | 5% / 1.2% | W/Ancient_City |
| echo shard | แหล่งเฉพาะ | W/Ancient_City |
| saddle | ถูกแทนด้วยหนัง 1-5 ตั้งแต่ 1.21.6 | W/Saddle |
| name tag | ถูกลบจากหีบนี้ใน 26.1 | W/Name_Tag |
| netherite template / ingot | ไม่มี | W/Smithing_Template |

บอตควร: ตาม kb/structures/ancient-city (ย่อ ขนสัตว์ ห้าม Warden); เป้าคือ ender pearl 1-15 และ enchanted golden apple.
ตัดสินผล: เกณฑ์แล็บ — เข้าเมื่อ HP เต็มและมีขนสัตว์ ≥ 20 (ตาม kb เดิม).

## trail-ruins · ซากเส้นทาง (suspicious gravel)
| ข้อมูล | ค่า | แหล่ง |
|---|---|---|
| Common: มรกต, brick, clay, wheat, candles, dye | 4.4% ต่ออย่าง | W/Trail_Ruins |
| Common: ถ่านหิน, gold nugget, string, lead ฯลฯ | 2.2% ต่ออย่าง | W/Trail_Ruins |
| Rare: pottery sherd 7 แบบ + armor trim 4 แบบ + Relic disc | 8.3% ต่อรายการ (12 รายการ) | W/Trail_Ruins |
| Rare trims | Host, Raiser, Shaper, Wayfinder | W/Trail_Ruins |
| จำนวนบล็อก | ทั่วไป 6 common + 3 rare ต่อชิ้นส่วน; tower_top 2 common | W/Trail_Ruins |
| เพชร/เหล็ก | ไม่มีในตาราง | W/Trail_Ruins |

บอตควร: แปรงเฉพาะ rare ถ้าต้องการ trim; ไม่ใช่แหล่งเหล็ก.
ตัดสินผล: เกณฑ์แล็บ — คุ้มเมื่อเป้าหมายคือ trim.

## witch-hut · กระท่อมแม่มด
| ข้อมูล | ค่า | แหล่ง |
|---|---|---|
| หีบ | ไม่มี | W/Swamp_Hut |
| ของ | cauldron (Java: ว่างเสมอ), crafting table, flower pot | W/Swamp_Hut |

บอตควร: ข้ามถ้าต้องการหีบ; ถ้าต้องการของ ให้ฆ่าแม่มด.
ตัดสินผล: เกณฑ์แล็บ — ไม่นับเป็นแหล่งหีบ.

## trial-vaults · Vault ห้องทดสอบ
| ข้อมูล | ค่า | แหล่ง |
|---|---|---|
| Vault ปกติ / ominous vault | ตัวเลขเต็มดู docs/wiki/trial-chambers.md (keys-vault) | W/Vault, W/Ominous_Vault |
| ที่นี่ไม่ซ้ำ | heavy core 7.5% และ ominous golden apple 22.5% อยู่ใน trial-chambers.md แล้ว | — |

บอตควร: ตาม trial-chambers.md.
ตัดสินผล: เกณฑ์แล็บ — ตาม trial-chambers.md.

## best-loot-for-iron · อันดับโครงสร้างให้เหล็กเร็วสุด [คิดเอง]
| อันดับ | โครงสร้าง | เหตุผล (ตัวเลขจากวิกิ) | หมายเหตุ [คิดเอง] |
|---|---|---|---|
| 1 | shipwreck หีบ treasure | เหล็ก 97.4% (1-5) + nugget 94.5% + มรกต 73.7% | คาดคร่าวๆ ~2.9 ชิ้น/หีบ (97.4% x กลาง 3) |
| 2 | buried treasure | เหล็ก 99.4% (1-4) + ทอง 88% + cooked fish 75% | ~2.5 ชิ้น/หีบ; ต้องมีแผนที่จาก shipwreck map chest (100%) |
| 3 | bastion treasure | เหล็ก 33.7% (3-9) | ~2.0 ชิ้น/หีบ แต่อันตราย (ต้องเกราะเพชร) ไม่เหมาะ early game |
| 4 | หมู่บ้าน toolsmith/weaponsmith | 41.2%/40.9% (1-5) | ~1.2/หีบ; toolsmith เฉพาะ desert/taiga |
| 5 | หมู่บ้าน armorer | 54.2% (1-3) | ~1.1/หีบ + ขนมปัง 80.6%; ไม่เสี่ยง |
| 6 | jungle pyramid | 37.0% | 2 หีบ ~1.1/หีบ; มีกับดัก |
| 7 | pillager outpost / mineshaft / stronghold | 30.5% / 27.3% / 22.8% | จำนวนต่อกองบางส่วนไม่แน่ใจ [ไม่แน่ใจ] |
| 8 | monster room / nether fortress / desert pyramid / mansion | 18.5% / 17.9% / 17.0% / 13.5% | ไม่คุ้มถ้าต้องการเหล็กอย่างเดียว |

บอตควร: ทีมต้นเกมให้ทำตามลำดับ ล่องเรือหา shipwreck/หมู่บ้านใกล้ก่อน ผสมกับขุดแร่เหล็ก; การคาดค่าเฉลี่ยด้านบนเป็นเลขคิดเอง ไม่ใช่ตัวเลขวิกิ.
ตัดสินผล: เกณฑ์แล็บ — วัดจริงเทียบอันดับนี้ด้วย log เหล็กต่อนาทีเกม; ใช้ขุดแร่แทนถ้าหีบอยู่ไกลเกิน 500 บล็อก (ค่าแล็บตั้งเอง).

## unverified · ยังไม่ยืนยัน
- ตัวเลขทั้งหมดมาจากสรุปผลค้นหา ไม่ได้อ่านหน้าเต็ม; % เป็นโอกาสมีอย่างน้อย 1 ชุดต่อหีบ ตามที่ snippet ระบุ [ไม่แน่ใจ]
- ช่วงจำนวนต่อกองของหลายรายการ (mineshaft เหล็ก, stronghold, mansion บางอย่าง) ไม่ครบ [ไม่แน่ใจ]
- จำนวนหีบต่อ woodland mansion, mineshaft, village, end city [ไม่แน่ใจ]
- หีบ corridor/crossing ของ stronghold เหมือน altar จริงหรือไม่ [ไม่แน่ใจ]
- ocean ruins หีบใหญ่ (เหล็ก/ทอง) ไม่พบใน snippet [ไม่แน่ใจ]
- saddle ใน monster room/ancient city ถูกแทนที่ตั้งแต่ 1.21.6 ตามผลค้นหา แต่สถานะใน 26.x ยังไม่ยืนยัน [ไม่แน่ใจ]
- totem of undying ไม่พบในหีบใดๆ ตาม snippet (ได้จาก evoker) [ไม่แน่ใจ]
- ขัดกับ kb เดิม: desert pyramid เหล็ก 17.0%/ทอง 17.0% ใหม่ กับรายการเดิม (หนังสือ 22.2%, golden apple 22.2%) ไม่ได้ตรวจซ้ำ; igloo มี golden apple 100% แทน 1 ลูกใน kb เดิม
- เรียงอันดับ enchanted golden apple ของ ancient city เทียบ bastion/อื่นไม่ยืนยัน [ไม่แน่ใจ]
