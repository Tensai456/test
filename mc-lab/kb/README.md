# KB — คลังความรู้ Minecraft (Java วานิลลา) สำหรับบอต

> 1 หัวข้อ = 1 ไฟล์ · ดึงเฉพาะที่ใช้ · ค้นด้วย `index.json` (path, title, group, keywords)
> สร้างโดย `node scripts/split_kb.mjs` (เอกสาร) + `node scripts/gen_catalog.cjs` (บล็อก) — **แก้ที่ docs/ แล้วรันใหม่ ห้ามแก้ kb/ ตรง**
> ความน่าเชื่อถือ: minecraft-data > วิกิ > เกณฑ์แล็บ > ผลจำลอง

## animals (`animals/`)

- [อาร์มาดิลโล](animals/armadillo.md) · 7 บรรทัด
- [แอกโซลอเติล](animals/axolotl.md) · 8 บรรทัด
- [ผึ้ง](animals/bee.md) · 8 บรรทัด
- [กฎการผสมพันธุ์ทั่วไป](animals/breeding-rules.md) · 12 บรรทัด
- [แมว](animals/cat.md) · 6 บรรทัด
- [ไก่](animals/chicken.md) · 9 บรรทัด
- [วัว](animals/cow.md) · 9 บรรทัด
- [ม้า/ลา/ล่อ/อูฐ](animals/equines-camel.md) · 12 บรรทัด
- [จิ้งจอก](animals/fox.md) · 8 บรรทัด
- [กบ](animals/frog.md) · 9 บรรทัด
- [แพะ](animals/goat.md) · 9 บรรทัด
- [เชือกจูงและรั้ว](animals/leads-fencing.md) · 8 บรรทัด
- [ลามะ](animals/llama.md) · 8 บรรทัด
- [นกแก้ว](animals/parrot.md) · 7 บรรทัด
- [หมู](animals/pig.md) · 9 บรรทัด
- [กระต่าย](animals/rabbit.md) · 7 บรรทัด
- [แกะ](animals/sheep.md) · 8 บรรทัด
- [สนิฟเฟอร์](animals/sniffer.md) · 9 บรรทัด
- [เต่า](animals/turtle.md) · 7 บรรทัด
- [ยังไม่ยืนยัน](animals/unverified.md) · 5 บรรทัด
- [หมาป่า](animals/wolf.md) · 7 บรรทัด

## beacon-conduit (`beacon-conduit/`)

- [เอฟเฟกต์ Beacon](beacon-conduit/beacon-effects.md) · 8 บรรทัด
- [Beacon พีระมิดและบล็อก](beacon-conduit/beacon-pyramid.md) · 9 บรรทัด
- [Conduit](beacon-conduit/conduit.md) · 10 บรรทัด
- [Lodestone และ Recovery Compass](beacon-conduit/navigation.md) · 8 บรรทัด
- [เส้นทาง Netherite](beacon-conduit/netherite-path.md) · 10 บรรทัด
- [ลำดับหลัง Diamond (เสนอ)](beacon-conduit/priority.md) · 9 บรรทัด
- [Respawn Anchor (Nether)](beacon-conduit/respawn-anchor.md) · 9 บรรทัด
- [Shulker Box และ Ender Chest](beacon-conduit/storage.md) · 8 บรรทัด
- [Totem ผ่าน Raid (Evoker)](beacon-conduit/totem-raid.md) · 9 บรรทัด
- [ยังไม่ยืนยัน](beacon-conduit/unverified.md) · 5 บรรทัด
- [Wither และ Nether Star](beacon-conduit/wither-nether-star.md) · 9 บรรทัด

## biomes (`biomes/`)

- [ถ้ำ (dripstone/lush/deep dark), cherry grove, pale garden](biomes/caves-special.md) · 13 บรรทัด
- [ทะเลทราย/เมซา](biomes/desert-badlands.md) · 10 บรรทัด
- [จังเกิล](biomes/jungle.md) · 12 บรรทัด
- [ภูเขา/ยอดเขา/ทุ่งหญ้าบนเขา](biomes/mountains-peaks.md) · 12 บรรทัด
- [ทุ่งเห็ด](biomes/mushroom-fields.md) · 9 บรรทัด
- [เนเธอร์](biomes/nether.md) · 14 บรรทัด
- [ที่ราบ/ป่า (plains, forest, birch, dark forest)](biomes/plains-forest.md) · 13 บรรทัด
- [ซาวันนา](biomes/savanna.md) · 10 บรรทัด
- [หนองน้ำ/โกงกาง](biomes/swamp-mangrove.md) · 14 บรรทัด
- [ไทกา/หิมะ (snowy taiga, grove, snowy slopes)](biomes/taiga-snowy.md) · 15 บรรทัด
- [ยังไม่ยืนยัน](biomes/unverified.md) · 5 บรรทัด
- [มหาสมุทร/แม่น้ำ/ชายหาด](biomes/water-shore.md) · 13 บรรทัด

## บล็อก/ไอเทม/อาหาร (จาก minecraft-data) (`blocks/`)

- [เอฟเฟกต์ทั้งหมด 40 ชนิด](blocks/_effects.md) · 49 บรรทัด
- [เอนชานต์ทั้งหมด 43 ชนิด](blocks/_enchantments.md) · 52 บรรทัด
- [เอนทิตีทั้งหมด 157 ชนิด (ขนาดกล่องชน)](blocks/_entities.md) · 166 บรรทัด
- [อาหารทั้งหมด 44 ชนิด (เรียงตาม อิ่ม + saturation)](blocks/_foods.md) · 53 บรรทัด
- [สูตรคราฟต์จำเป็น (จากข้อมูลเกม 26.1) — ใช้แทน/ตรวจ kb/crafting](blocks/_recipes.md) · 130 บรรทัด
- [บล็อกพิเศษ (อันตราย / ร่วง / ช้า / ลื่น / ปีน / กันตก)](blocks/_special.md) · 15 บรรทัด
- [บล็อกขุดด้วยขวาน — 285 ชนิด](blocks/axe.md) · 294 บรรทัด
- [บล็อกขุดด้วยมือ (ไม่มีเครื่องมือที่เร็วกว่า) — 348 ชนิด](blocks/hand.md) · 357 บรรทัด
- [บล็อกขุดด้วยจอบ — 29 ชนิด](blocks/hoe.md) · 38 บรรทัด
- [บล็อกขุดด้วยอีเต้อ (ขั้นไหนก็ได้ของ) — 79 ชนิด](blocks/pickaxe-any.md) · 88 บรรทัด
- [บล็อกขุดด้วยอีเต้อ (ต้องขั้น diamond ขึ้นไป) — 5 ชนิด](blocks/pickaxe-diamond.md) · 14 บรรทัด
- [บล็อกขุดด้วยอีเต้อ (ต้องขั้น iron ขึ้นไป) — 12 ชนิด](blocks/pickaxe-iron.md) · 21 บรรทัด
- [บล็อกขุดด้วยอีเต้อ (ต้องขั้น stone ขึ้นไป) — 90 ชนิด](blocks/pickaxe-stone.md) · 99 บรรทัด
- [บล็อกขุดด้วยอีเต้อ (ต้องขั้น wooden ขึ้นไป) — 281 ชนิด](blocks/pickaxe-wooden.md) · 290 บรรทัด
- [บล็อกขุดด้วยพลั่ว — 36 ชนิด](blocks/shovel.md) · 45 บรรทัด
- [บล็อกขุดด้วยดาบ — 3 ชนิด](blocks/sword.md) · 12 บรรทัด

## brewing (`brewing/`)

- [ขวดน้ำ → Awkward → ยา](brewing/base-chain.md) · 9 บรรทัด
- [ยาที่ควรพก](brewing/bot-loadout.md) · 13 บรรทัด
- [แท่นต้มยาและเชื้อเพลิง](brewing/brewing-stand.md) · 11 บรรทัด
- [Fermented spider eye](brewing/corruption.md) · 7 บรรทัด
- [ระยะเวลายา (ดื่ม, Java)](brewing/durations.md) · 22 บรรทัด
- [redstone / glowstone](brewing/modifiers.md) · 10 บรรทัด
- [สูตรยาแต่ละชนิด (ส่วนผสม + Awkward)](brewing/recipes.md) · 20 บรรทัด
- [Splash / Lingering / Tipped Arrow](brewing/splash-lingering-arrow.md) · 10 บรรทัด
- [ยังไม่ยืนยัน](brewing/unverified.md) · 3 บรรทัด

## ตัวเลขกลาง (`core/`)

- [ตัวเลขกลางที่ใช้บ่อย](core/numbers.md) · 24 บรรทัด

## crafting (`crafting/`)

- [เกราะ](crafting/armor.md) · 11 บรรทัด
- [พื้นฐาน](crafting/basics.md) · 17 บรรทัด
- [อาวุธระยะไกล](crafting/combat.md) · 8 บรรทัด
- [อาหาร](crafting/food.md) · 8 บรรทัด
- [กฎช่อง 2x2 vs 3x3](crafting/grid-rule.md) · 5 บรรทัด
- [เวทมนตร์/Brewing](crafting/magic.md) · 9 บรรทัด
- [นำทาง](crafting/navigation.md) · 8 บรรทัด
- [วัตถุดิบรวม](crafting/planning.md) · 28 บรรทัด
- [Smithing Table + Netherite](crafting/smithing.md) · 9 บรรทัด
- [เครื่องมือ](crafting/tools.md) · 17 บรรทัด
- [ขนส่ง](crafting/transport.md) · 3 บรรทัด
- [ยังไม่ยืนยัน](crafting/unverified.md) · 7 บรรทัด
- [บล็อกใช้งาน](crafting/utility.md) · 19 บรรทัด

## elytra (`elytra/`)

- [การเปิดใช้งาน](elytra/activate.md) · 6 บรรทัด
- [ต่อสู้ (mace)](elytra/combat.md) · 11 บรรทัด
- [ความทนทานและซ่อม](elytra/durability.md) · 10 บรรทัด
- [ความเร็ว/พิทช์](elytra/glide.md) · 8 บรรทัด
- [ความเสียหายชนผนัง](elytra/kinetic.md) · 9 บรรทัด
- [การลงจอดและ fall damage](elytra/landing.md) · 7 บรรทัด
- [การได้มา](elytra/obtain.md) · 7 บรรทัด
- [ความเสี่ยงของบอต](elytra/risks.md) · 9 บรรทัด
- [จรวดดอกไม้ไฟ](elytra/rocket.md) · 9 บรรทัด
- [ยังไม่ยืนยัน](elytra/unverified.md) · 5 บรรทัด

## enchanting (`enchanting/`)

- [ทั่ง การรวม และ Too Expensive](enchanting/anvil.md) · 14 บรรทัด
- [ค่า XP และ Lapis](enchanting/costs.md) · 10 บรรทัด
- [เอนชานต์ที่ใช้ร่วมกันไม่ได้](enchanting/exclusive.md) · 17 บรรทัด
- [หินลับ](enchanting/grindstone.md) · 9 บรรทัด
- [วิธีเลือกข้อเสนอ](enchanting/offers.md) · 9 บรรทัด
- [ชุดแนะนำต่อไอเท็ม](enchanting/sets.md) · 19 บรรทัด
- [โต๊ะตีเหล็ก](enchanting/smithing.md) · 8 บรรทัด
- [โต๊ะเสริมพลัง + ชั้นหนังสือ](enchanting/table-setup.md) · 10 บรรทัด
- [เอนชานต์ Treasure และแหล่งที่ได้](enchanting/treasure.md) · 11 บรรทัด
- [ยังไม่ยืนยัน](enchanting/unverified.md) · 6 บรรทัด

## experience (`experience/`)

- [XP เมื่อตาย](experience/death-loss.md) · 7 บรรทัด
- [สูตรเลเวล](experience/level-formula.md) · 10 บรรทัด
- [XP ถึงเลเวล 30](experience/lvl30.md) · 3 บรรทัด
- [Mending](experience/mending.md) · 8 บรรทัด
- [XP มอนอื่น](experience/mob-xp-extra.md) · 14 บรรทัด
- [พฤติกรรมออร์บ](experience/orb-behavior.md) · 8 บรรทัด
- [XP จากการหลอม](experience/smelting-xp.md) · 13 บรรทัด
- [แหล่ง XP และปริมาณ](experience/sources.md) · 20 บรรทัด
- [ยังไม่ยืนยัน](experience/unverified.md) · 5 บรรทัด
- [ฟาร์ม XP เบื้องต้น](experience/xp-farms.md) · 9 บรรทัด
- [ออร์บ XP](experience/xp-orbs.md) · 8 บรรทัด

## farming (`farming/`)

- [ไอเดียฟาร์มอัตโนมัติ (บอตทำได้)](farming/auto-farm-ideas.md) · 10 บรรทัด
- [ไผ่และสาหร่ายทะเล](farming/bamboo-kelp.md) · 11 บรรทัด
- [บีทรูท](farming/beetroot.md) · 8 บรรทัด
- [ปุ๋ยกระดูก](farming/bone-meal.md) · 9 บรรทัด
- [กระบองเพชร](farming/cactus.md) · 9 บรรทัด
- [คอมโพสเตอร์](farming/composter.md) · 9 บรรทัด
- [พืชหลัก (ข้าวสาลี/แครอท/มันฝรั่ง)](farming/crops-wheat.md) · 11 บรรทัด
- [น้ำและการเหยียบ farmland](farming/hydration-trampling.md) · 8 บรรทัด
- [เห็ด](farming/mushroom.md) · 9 บรรทัด
- [เนเธอร์วอร์ต](farming/nether-wart.md) · 10 บรรทัด
- [ฟักทอง/แตงโม](farming/stem-crops.md) · 9 บรรทัด
- [อ้อย](farming/sugar-cane.md) · 10 บรรทัด
- [เบอร์รี่หวาน/โกโก้](farming/sweet-berries-cocoa.md) · 10 บรรทัด
- [ต้นไม้/ต้นกล้า](farming/trees.md) · 10 บรรทัด
- [ยังไม่ยืนยัน](farming/unverified.md) · 4 บรรทัด

## fishing (`fishing/`)

- [การตรวจจับการกัดสำหรับบอต](fishing/bite-detection.md) · 9 บรรทัด
- [ความทนทานและการเกี่ยวเอนทิตี](fishing/durability-hooks.md) · 10 บรรทัด
- [Lure, Luck of the Sea, ฝน](fishing/enchants-rain.md) · 10 บรรทัด
- [ปลาเป็นอาหาร](fishing/food.md) · 11 บรรทัด
- [ตารางของที่ตกได้](fishing/loot-table.md) · 11 บรรทัด
- [เงื่อนไขน้ำเปิดสำหรับสมบัติ](fishing/open-water.md) · 8 บรรทัด
- [ยังไม่ยืนยัน](fishing/unverified.md) · 6 บรรทัด
- [เวลารอและการกัดเบ็ด](fishing/wait-and-bite.md) · 10 บรรทัด

## อันตรายนอกการต่อสู้ (`hazards/`)

- [15. เรือ / น้ำแข็ง](hazards/boat-ice.md) · 9 บรรทัด
- [10. ถ้ำ/ Cave-in / ลาวา](hazards/caves-lava.md) · 5 บรรทัด
- [5. บล็อกทำร้าย](hazards/damage-blocks.md) · 13 บรรทัด
- [16. ไอเท็มหาย / ตาย](hazards/death-item-loss.md) · 10 บรรทัด
- [11. Deep Dark / Warden](hazards/deep-dark-warden.md) · 12 บรรทัด
- [7. จมน้ำ](hazards/drowning.md) · 10 บรรทัด
- [17. ความทนทาน (Durability)](hazards/durability.md) · 12 บรรทัด
- [8. ตกจากที่สูง / Void](hazards/fall-void.md) · 10 บรรทัด
- [9. บล็อกตก](hazards/falling-blocks.md) · 10 บรรทัด
- [6. ไฟลาม, ฟ้าผ่า](hazards/fire-lightning.md) · 9 บรรทัด
- [2. อาหารพิษ](hazards/food-poisoning.md) · 12 บรรทัด
- [1. หิว / Exhaustion / Starvation](hazards/hunger-exhaustion.md) · 19 บรรทัด
- [12. กลางคืน / หลงทาง / Phantom](hazards/night-lost-phantom.md) · 11 บรรทัด
- [4. ความหนาว (Powder snow)](hazards/powder-snow-freezing.md) · 10 บรรทัด
- [13. Raid](hazards/raid.md) · 4 บรรทัด
- [ตารางดับเพลิงด่วน (bot reflex priority)](hazards/reflex-priority.md) · 1 บรรทัด
- [ข้อควรระวังด้านแหล่งข้อมูล](hazards/source-notes.md) · 1 บรรทัด
- [3. Status effects](hazards/status-effects.md) · 17 บรรทัด
- [14. กับดักโครงสร้าง](hazards/structure-traps.md) · 11 บรรทัด

## health (`health/`)

- [Absorption](health/absorption.md) · 9 บรรทัด
- [เกราะและ Toughness](health/armor.md) · 11 บรรทัด
- [ชนิดความเสียหายและสิ่งที่ลดได้](health/damage-types.md) · 13 บรรทัด
- [ความตายและเกิดใหม่](health/death.md) · 16 บรรทัด
- [ระดับความยาก](health/difficulty.md) · 14 บรรทัด
- [มนตร์ลดดาเมจ](health/enchant.md) · 14 บรรทัด
- [ไอเท็มฟื้นเลือด](health/healing.md) · 16 บรรทัด
- [เลือดและการฟื้นเลือดธรรมชาติ](health/health.md) · 15 บรรทัด
- [ช่วงอมตะหลังโดนดาเมจ](health/invuln.md) · 8 บรรทัด
- [เอฟเฟกต์ Resistance](health/resistance.md) · 7 บรรทัด
- [โทเท็มแห่งความเป็นอมตะ](health/totem.md) · 14 บรรทัด
- [ยังไม่ยืนยัน](health/unverified.md) · 6 บรรทัด

## ม็อบ overworld (1 ตัว/ไฟล์) (`mobs/`)

- [0. กฎแล็บ (บังคับ)](mobs/_rules.md) · 5 บรรทัด
- [4. ที่ยังไม่ยืนยัน](mobs/_unverified.md) · 1 บรรทัด
- [bee](mobs/bee.md) · 17 บรรทัด
- [bogged](mobs/bogged.md) · 17 บรรทัด
- [breeze](mobs/breeze.md) · 17 บรรทัด
- [cave spider](mobs/cave_spider.md) · 17 บรรทัด
- [creaking](mobs/creaking.md) · 17 บรรทัด
- [creeper](mobs/creeper.md) · 17 บรรทัด
- [dolphin](mobs/dolphin.md) · 11 บรรทัด
- [drowned](mobs/drowned.md) · 17 บรรทัด
- [elder guardian](mobs/elder_guardian.md) · 17 บรรทัด
- [enderman](mobs/enderman.md) · 17 บรรทัด
- [endermite](mobs/endermite.md) · 11 บรรทัด
- [evoker](mobs/evoker.md) · 17 บรรทัด
- [goat](mobs/goat.md) · 17 บรรทัด
- [guardian](mobs/guardian.md) · 17 บรรทัด
- [husk](mobs/husk.md) · 17 บรรทัด
- [illusioner](mobs/illusioner.md) · 5 บรรทัด
- [iron golem](mobs/iron_golem.md) · 17 บรรทัด
- [llama](mobs/llama.md) · 17 บรรทัด
- [parched](mobs/parched.md) · 17 บรรทัด
- [phantom](mobs/phantom.md) · 17 บรรทัด
- [pillager](mobs/pillager.md) · 17 บรรทัด
- [polar bear](mobs/polar_bear.md) · 17 บรรทัด
- [pufferfish](mobs/pufferfish.md) · 11 บรรทัด
- [ravager](mobs/ravager.md) · 17 บรรทัด
- [silverfish](mobs/silverfish.md) · 17 บรรทัด
- [skeleton](mobs/skeleton.md) · 17 บรรทัด
- [slime](mobs/slime.md) · 17 บรรทัด
- [spider](mobs/spider.md) · 17 บรรทัด
- [stray](mobs/stray.md) · 17 บรรทัด
- [vex](mobs/vex.md) · 17 บรรทัด
- [vindicator](mobs/vindicator.md) · 17 บรรทัด
- [warden](mobs/warden.md) · 17 บรรทัด
- [witch](mobs/witch.md) · 17 บรรทัด
- [wolf](mobs/wolf.md) · 17 บรรทัด
- [zombie villager](mobs/zombie_villager.md) · 12 บรรทัด
- [zombie](mobs/zombie.md) · 17 บรรทัด

## การเคลื่อนที่/การตก (`movement/`)

- [6. ตารางกฎสำหรับบอต (พร้อมโค้ด)](movement/bot-rules.md) · 9 บรรทัด
- [2.2 Clutch / MLG — วิธีทำ (แปลงเป็นขั้นตอนบอต)](movement/clutch-mlg.md) · 19 บรรทัด
- [3. ขอบ/รอบตัว/ติดบล็อก](movement/edges-bridging-stuck.md) · 20 บรรทัด
- [2. การตก (Fall damage)](movement/fall-damage.md) · 19 บรรทัด
- [2.1 พื้นที่ลด/กันดาเมจตก](movement/fall-safe-blocks.md) · 25 บรรทัด
- [4. Parkour / Dropper / มุมกล้อง](movement/parkour-dropper-camera.md) · 20 บรรทัด
- [5. PvP — ส่วนที่เกี่ยวกับการเคลื่อนที่ (รายละเอียดเต็มอยู่ใน PVP_PLAYBOOK)](movement/pvp-movement.md) · 19 บรรทัด
- [1. ความเร็ว/การกระโดด (ตัวเลขฐาน)](movement/speed-jump.md) · 19 บรรทัด
- [8. ยังไม่ได้ verify](movement/unverified.md) · 2 บรรทัด
- [7. เทคนิคจาก YouTube — **ยังว่าง (รอข้อมูล)**](movement/youtube-pending.md) · 2 บรรทัด

## navigation (`navigation/`)

- [ชังก์และระยะมองเห็น](navigation/chunks.md) · 8 บรรทัด
- [นาฬิกา ดวงอาทิตย์ และดวงจันทร์](navigation/clock-sun.md) · 12 บรรทัด
- [เข็มทิศ](navigation/compass.md) · 6 บรรทัด
- [ระบบพิกัด](navigation/coordinates.md) · 12 บรรทัด
- [ขีดจำกัดความสูง](navigation/height-limits.md) · 8 บรรทัด
- [เข็มทิศ Lodestone](navigation/lodestone.md) · 6 บรรทัด
- [แผนที่และ explorer map](navigation/maps.md) · 12 บรรทัด
- [เดินทางผ่าน Nether 1:8](navigation/nether-travel.md) · 6 บรรทัด
- [เข็มทิศกู้คืน](navigation/recovery-compass.md) · 6 บรรทัด
- [กลับบ้านหลังกลางคืน/ตาย](navigation/return-home.md) · 8 บรรทัด
- [สูตรหลอมที่จำเป็น](navigation/smelting-list.md) · 26 บรรทัด
- [หาป้อมด้วยวิธีสามเหลี่ยม](navigation/stronghold-triangulation.md) · 17 บรรทัด
- [ยังไม่ยืนยัน](navigation/unverified.md) · 6 บรรทัด
- [แผนจุดอ้างอิงสำหรับทีมบอต](navigation/waypoints.md) · 11 บรรทัด

## นรก / End / บอส (`nether-end/`)

- [Entry D1: ไปถึง End](nether-end/d1-reach-end.md) · 6 บรรทัด
- [Entry D2: ถึง End แล้ว - spawn และ void](nether-end/d2-end-spawn-void.md) · 6 บรรทัด
- [Entry D3: Ender Dragon](nether-end/d3-ender-dragon.md) · 6 บรรทัด
- [Entry D4: Enderman ใน End](nether-end/d4-end-enderman.md) · 6 บรรทัด
- [Entry D5: Shulker + Levitation](nether-end/d5-shulker-levitation.md) · 6 บรรทัด
- [Entry D6: End gateway / เกาะนอก / elytra](nether-end/d6-gateway-elytra.md) · 4 บรรทัด
- [Entry D7: กลับบ้านจาก End](nether-end/d7-return-home.md) · 5 บรรทัด
- [Entry E1: สร้างและจุด portal](nether-end/e1-portal-build.md) · 6 บรรทัด
- [Entry E2: พิกัดและจุดกลับ portal (หลงทาง)](nether-end/e2-portal-coords-lost.md) · 6 บรรทัด
- [Entry E3: น้ำ / ลาวา / การตกลาวา](nether-end/e3-water-lava.md) · 6 บรรทัด
- [Entry E4: นอนเตียง / respawn anchor ผิดมิติ](nether-end/e4-bed-anchor.md) · 6 บรรทัด
- [Entry E5: ผิวพื้น/ไฟ/อันตรายอื่น](nether-end/e5-ground-fire.md) · 17 บรรทัด
- [Entry E6: Ghast ทำลายพอร์ทัล (ติดอยู่ใน Nether)](nether-end/e6-ghast-breaks-portal.md) · 6 บรรทัด
- [Entry E7: กฎเกราะทอง](nether-end/e7-gold-armor.md) · 7 บรรทัด
- [Entry M1: ถูก Ghast ยิง (HP หายเป็นก้อน, มี projectile fireball เข้า)](nether-end/m1-ghast.md) · 6 บรรทัด
- [Entry M2: Blaze ในป้อม](nether-end/m2-blaze.md) · 6 บรรทัด
- [Entry M3: Zombified Piglin ทั้งฝูงเข้าตี](nether-end/m3-zombified-piglin.md) · 6 บรรทัด
- [Entry M4: Piglin / Brute ใน bastion](nether-end/m4-piglin-brute.md) · 6 บรรทัด
- [Entry M5: Hoglin / Zoglin](nether-end/m5-hoglin-zoglin.md) · 5 บรรทัด
- [Entry M6: Magma Cube / Strider](nether-end/m6-magma-cube-strider.md) · 10 บรรทัด
- [1. ตารางมอนสเตอร์ Nether (Normal)](nether-end/nether-mobs-table.md) · 12 บรรทัด
- [สรุปจุดที่ไม่แน่ใจ](nether-end/unverified.md) · 1 บรรทัด
- [4. Wither (boss)](nether-end/wither.md) · 12 บรรทัด

## ฟิสิกส์บล็อกพิเศษ (`physics/`)

- [8. สรุปกฎสำหรับบอต (checklist)](physics/bot-checklist.md) · 8 บรรทัด
- [3. การเด้ง / ดาเมจตก](physics/bounce-fall.md) · 10 บรรทัด
- [4. ปีนได้ (Climbable)](physics/climbable.md) · 6 บรรทัด
- [5. Collision shape ที่ดัก/สะดุด](physics/collision-shapes.md) · 22 บรรทัด
- [6. ของเหลว](physics/fluids.md) · 8 บรรทัด
- [7. Gravity blocks](physics/gravity-blocks.md) · 16 บรรทัด
- [0. ค่าพื้นฐานผู้เล่น/เอนทิตี](physics/player-entity-constants.md) · 23 บรรทัด
- [1. พื้นลื่น (Slipperiness)](physics/slippery.md) · 8 บรรทัด
- [2. ตัวหน่วง/เปลี่ยนความเร็ว](physics/speed-modifiers.md) · 15 บรรทัด
- [9. ยังไม่ยืนยัน [ไม่แน่ใจ]](physics/unverified.md) · 6 บรรทัด

## ปัญหา → วิธีแก้ (สมองเดิม) (`problems/`)

- [D. ม็อบ (สรุป — รายละเอียดเต็มรอ MOB_TACTICS)](problems/mobs-summary.md) · 8 บรรทัด
- [P1 ขุดมือเปล่า / ใช้เครื่องมือผิด](problems/p01-mining-wrong-tool.md) · 5 บรรทัด
- [P2 เลือดต่ำแต่ไม่กิน / กินผิดจังหวะ](problems/p02-low-hp-not-eating.md) · 5 บรรทัด
- [P3 อาหารทีม = 0 (เคยเกิดใน s20)](problems/p03-team-food-zero.md) · 5 บรรทัด
- [P4 เกิดในทะเลทราย ไม่มีไม้ (เคยเกิดใน s22)](problems/p04-desert-no-wood.md) · 6 บรรทัด
- [P5 ตกที่สูงตาย](problems/p05-fall-death.md) · 5 บรรทัด
- [P6 ขุดลงตรง / ลาวา](problems/p06-dig-down-lava.md) · 6 บรรทัด
- [P7 จมน้ำ](problems/p07-drowning.md) · 4 บรรทัด
- [P8 ติดบล็อก / ทรายหรือกรวดร่วงทับ](problems/p08-stuck-suffocation.md) · 4 บรรทัด
- [P9 ยืนนิ่ง AFK (ตรรกะบอต ไม่ใช่กลไกเกม)](problems/p09-afk-idle.md) · 5 บรรทัด
- [P10 บ้าน/เตียงข้างหลุม (s37) · บ้านไม่ปลอดภัย](problems/p10-home-near-hole.md) · 5 บรรทัด
- [P11 คืนแรกไม่มีที่หลบ](problems/p11-first-night.md) · 5 บรรทัด
- [P12 นอนในนรก/End](problems/p12-bed-nether-end.md) · 1 บรรทัด
- [E. PvP (สมมติฐานจากวิกิ + ตัวจำลอง → ต้องเทส)](problems/pvp-hypotheses.md) · 8 บรรทัด
- [F. เช็กลิสต์เทสจริง (อีก ~3 วัน)](problems/test-checklist.md) · 13 บรรทัด

## ทรัพยากร/ไต่ระดับ (`progression/`)

- [3. เกราะ (durability ต่อชิ้น / armor points ต่อชิ้น)](progression/armor.md) · 18 บรรทัด
- [8. Enchant / Anvil / Villager](progression/enchant-anvil-villager.md) · 10 บรรทัด
- [6. อาหาร](progression/food.md) · 20 บรรทัด
- [7. ชุดเหล็กชุดแรก: iron รวม](progression/iron-first-set.md) · 24 บรรทัด
- [1. ตารางไมล์สโตน (สิ่งที่ต้องนับใน inventory)](progression/milestones.md) · 14 บรรทัด
- [9. Nether → End](progression/nether-to-end.md) · 25 บรรทัด
- [4. แร่: ระดับ Y, ตำแหน่งขุดที่ดี, pickaxe ที่ต้องใช้ (Java 1.18+)](progression/ores-y-levels.md) · 27 บรรทัด
- [10. Playbook รายไมล์สโตน (อาการ → สาเหตุ → แก้ → ตัวเลข+แหล่ง → ตัดสินผล → เทสจริง)](progression/p00-playbook-intro.md) · 1 บรรทัด
- [P1 ไม้ / table / เครื่องมือไม้](progression/p01-wood-table.md) · 6 บรรทัด
- [P2 stone tools + furnace](progression/p02-stone-furnace.md) · 5 บรรทัด
- [P3 อาหาร](progression/p03-food.md) · 5 บรรทัด
- [P4 เตียง (wool)](progression/p04-bed.md) · 5 บรรทัด
- [P5 เหล็ก (ชุดแรก 36 ingot)](progression/p05-iron.md) · 6 บรรทัด
- [P6 เพชร](progression/p06-diamond.md) · 5 บรรทัด
- [P7 Enchant](progression/p07-enchant.md) · 5 บรรทัด
- [P8 Nether portal](progression/p08-nether-portal.md) · 5 บรรทัด
- [P9 blaze rod + pearl](progression/p09-blaze-pearl.md) · 6 บรรทัด
- [P10 stronghold + End](progression/p10-stronghold-end.md) · 6 บรรทัด
- [5. Smelting และเชื้อเพลิง](progression/smelting-fuel.md) · 28 บรรทัด
- [Durability เครื่องมือ (ใช้ได้กี่ครั้ง; ทุกชนิด pickaxe/axe/shovel/sword/hoe ตาม snippet)](progression/tool-durability.md) · 12 บรรทัด
- [11. ผลรวม [ไม่แน่ใจ] / ข้อสังเกตข้อมูล](progression/unverified.md) · 4 บรรทัด
- [2. ไม้ → crafting table → เครื่องมือ (จำนวนสูตร)](progression/wood-tools-recipes.md) · 13 บรรทัด

## redstone-basics (`redstone-basics/`)

- [วงจรง่าย ๆ ที่มีประโยชน์](redstone-basics/builds.md) · 11 บรรทัด
- [dispenser / dropper](redstone-basics/dispenser.md) · 15 บรรทัด
- [ประตูไม้ vs เหล็ก, trapdoor, fence gate](redstone-basics/doors.md) · 13 บรรทัด
- [observer, hopper](redstone-basics/observer-hopper.md) · 12 บรรทัด
- [piston / sticky piston](redstone-basics/pistons.md) · 12 บรรทัด
- [แผ่นกด (mob ใดกดได้)](redstone-basics/plates.md) · 11 บรรทัด
- [ระยะสัญญาณ redstone](redstone-basics/signal-range.md) · 8 บรรทัด
- [ปุ่ม คันโยก](redstone-basics/switches.md) · 14 บรรทัด
- [TNT](redstone-basics/tnt.md) · 11 บรรทัด
- [สายสะดุด](redstone-basics/tripwire.md) · 11 บรรทัด
- [ยังไม่ยืนยัน](redstone-basics/unverified.md) · 5 บรรทัด

## ตัวจำลอง (`sim/`)

- [4. ข้อจำกัด (ต้องรู้ก่อนใช้ตัดสินใจ)](sim/limitations.md) · 4 บรรทัด
- [1. ฟิสิกส์ (`lib/pvp/physics.mjs`) — เทียบกับวิกิ](sim/physics-validation.md) · 10 บรรทัด
- [2. ผล PvP (n=400 สลับฝั่ง, ping 10–50, เกราะเหล็กทั้งคู่)](sim/pvp-results.md) · 22 บรรทัด
- [3. ผลเอาชีวิตรอด (n=300, Normal)](sim/survival-results.md) · 20 บรรทัด

## structures (`structures/`)

- [เมืองโบราณ](structures/ancient-city.md) · 7 บรรทัด
- [ซากบาสชั่น](structures/bastion-remnant.md) · 7 บรรทัด
- [ขุมทรัพย์ฝังดิน](structures/buried-treasure.md) · 7 บรรทัด
- [พีระมิดทะเลทราย](structures/desert-pyramid.md) · 7 บรรทัด
- [เมืองเอ็นด์](structures/end-city.md) · 7 บรรทัด
- [อิกลู](structures/igloo.md) · 7 บรรทัด
- [พีระมิดป่า](structures/jungle-pyramid.md) · 7 บรรทัด
- [เหมืองร้าง](structures/mineshaft.md) · 7 บรรทัด
- [ห้องมอนสเตอร์ (ดันเจี้ยน)](structures/monster-room.md) · 7 บรรทัด
- [ป้อมเนเธอร์](structures/nether-fortress.md) · 7 บรรทัด
- [วิหารมหาสมุทร](structures/ocean-monument.md) · 7 บรรทัด
- [ซากปรักหักพังมหาสมุทร](structures/ocean-ruins.md) · 7 บรรทัด
- [ด่านผู้ปล้น](structures/pillager-outpost.md) · 7 บรรทัด
- [พอร์ทัลพัง](structures/ruined-portal.md) · 7 บรรทัด
- [เรืออับปาง](structures/shipwreck.md) · 7 บรรทัด
- [ป้อมปราการ](structures/stronghold.md) · 7 บรรทัด
- [ซากเส้นทาง](structures/trail-ruins.md) · 7 บรรทัด
- [ห้องทดสอบ (สรุปสั้น)](structures/trial-chambers.md) · 7 บรรทัด
- [ยังไม่ยืนยัน](structures/unverified.md) · 6 บรรทัด
- [หมู่บ้าน](structures/village.md) · 7 บรรทัด
- [กระท่อมแม่มด](structures/witch-hut.md) · 7 บรรทัด
- [คฤหาสน์ป่า](structures/woodland-mansion.md) · 7 บรรทัด

## test-commands (`test-commands/`)

- [รีเซ็ตสนาม PvP](test-commands/arena-reset.md) · 24 บรรทัด
- [แอตทริบิวต์](test-commands/attribute.md) · 4 บรรทัด
- [ทำดาเมจ](test-commands/damage.md) · 5 บรรทัด
- [data get / scoreboard / execute](test-commands/data-score-execute.md) · 6 บรรทัด
- [ความยาก / kill / clear](test-commands/difficulty-kill-clear.md) · 4 บรรทัด
- [เอฟเฟกต์](test-commands/effect.md) · 6 บรรทัด
- [วางบล็อก (fill / setblock)](test-commands/fill-setblock.md) · 6 บรรทัด
- [กฎเกม (เปลี่ยนชื่อแล้ว!)](test-commands/gamerule.md) · 9 บรรทัด
- [ให้ไอเทม (item components)](test-commands/give.md) · 6 บรรทัด
- [หาโครงสร้าง/ไบโอม](test-commands/locate.md) · 4 บรรทัด
- [spawnpoint / spreadplayers / worldborder](test-commands/spawn-border.md) · 5 บรรทัด
- [เรียกม็อบ (+NBT)](test-commands/summon.md) · 6 บรรทัด
- [เวลา](test-commands/time.md) · 7 บรรทัด
- [เทเลพอร์ต (/tp = /teleport)](test-commands/tp.md) · 10 บรรทัด
- [ยังไม่ยืนยัน](test-commands/unverified.md) · 7 บรรทัด
- [อากาศ](test-commands/weather.md) · 2 บรรทัด

## time-weather (`time-weather/`)

- [วัฏจักรกลางวัน-กลางคืน](time-weather/daylight-cycle.md) · 10 บรรทัด
- [ระดับแสง](time-weather/light-levels.md) · 12 บรรทัด
- [ฟ้าผ่าและกับดัก](time-weather/lightning.md) · 10 บรรทัด
- [ข้างขึ้นข้างแรมและสไลม์](time-weather/moon-slime.md) · 10 บรรทัด
- [อาการนอนไม่หลับ](time-weather/phantom.md) · 9 บรรทัด
- [การนอนและข้ามคืน](time-weather/sleeping.md) · 12 บรรทัด
- [จุดเกิดใหม่ (เตียง/anchor)](time-weather/spawn-point.md) · 10 บรรทัด
- [ไหม้แดด](time-weather/sun-burn.md) · 9 บรรทัด
- [ยังไม่ยืนยัน](time-weather/unverified.md) · 4 บรรทัด
- [ฝน/พายุ](time-weather/weather.md) · 12 บรรทัด

## travel (`travel/`)

- [เรือ แพ และเรือบรรทุกหีบ](travel/boats.md) · 10 บรรทัด
- [อูฐ](travel/camel.md) · 8 บรรทัด
- [ลา ล่อ ลามะ](travel/donkey-mule-llama.md) · 10 บรรทัด
- [แฮปปี้แกสต์](travel/happy-ghast.md) · 8 บรรทัด
- [ม้า (สถิติ ทามม์ อุปกรณ์)](travel/horse.md) · 11 บรรทัด
- [รถรางและราง](travel/minecart.md) · 10 บรรทัด
- [ทางด่วน Nether](travel/nether-highway.md) · 5 บรรทัด
- [หมู + carrot on a stick](travel/pig.md) · 8 บรรทัด
- [เลือกพาหนะ (สรุปเกณฑ์แล็บ)](travel/selection.md) · 9 บรรทัด
- [สไตรเดอร์บนลาวา](travel/strider.md) · 9 บรรทัด
- [ยังไม่ยืนยัน](travel/unverified.md) · 4 บรรทัด
- [เดิน วิ่ง และค่า hunger](travel/walking-hunger.md) · 8 บรรทัด

## trial-chambers (`trial-chambers/`)

- [แผนบอตเคลียร์](trial-chambers/bot-plan.md) · 9 บรรทัด
- [Breeze และกลยุทธ์](trial-chambers/breeze.md) · 11 บรรทัด
- [การเกิดโครงสร้าง](trial-chambers/generation.md) · 9 บรรทัด
- [กุญแจและ Vault](trial-chambers/keys-vault.md) · 15 บรรทัด
- [ชุดมอบ](trial-chambers/mobs.md) · 12 บรรทัด
- [Trial Omen / Ominous Trial](trial-chambers/ominous.md) · 11 บรรทัด
- [กลไก Trial Spawner](trial-chambers/trial-spawner.md) · 9 บรรทัด
- [ยังไม่ยืนยัน](trial-chambers/unverified.md) · 4 บรรทัด

## version-26x (`version-26x/`)

- [1.21.9 Copper Age](version-26x/copper-age-1-21-9.md) · 16 บรรทัด
- [กฎเกม/เทคนิค](version-26x/game-rules-tech.md) · 12 บรรทัด
- [ไอเทมและเกราะ](version-26x/items-armor.md) · 16 บรรทัด
- [มอบใหม่ 1.21.11](version-26x/mobs-1-21-11.md) · 18 บรรทัด
- [หอก (1.21.11)](version-26x/spear.md) · 24 บรรทัด
- [sulfur cube (26.2)](version-26x/sulfur-cube.md) · 17 บรรทัด
- [ยังไม่ยืนยัน](version-26x/unverified.md) · 8 บรรทัด
- [ภาพรวม 26.1](version-26x/v26-1-overview.md) · 19 บรรทัด
- [ภาพรวม 26.2 Chaos Cubed](version-26x/v26-2-overview.md) · 18 บรรทัด
- [ไทม์ไลน์และเลขเวอร์ชัน](version-26x/version-timeline.md) · 11 บรรทัด

## villagers (`villagers/`)

- [เพาะพันธุ์ชาวบ้าน](villagers/breeding.md) · 9 บรรทัด
- [แหล่งมรกต](villagers/emerald-sources.md) · 9 บรรทัด
- [ไอรอนโกเลม](villagers/iron-golem.md) · 10 บรรทัด
- [บรรณารักษ์ / Mending](villagers/librarian-mending.md) · 7 บรรทัด
- [อาชีพและ workstation](villagers/professions.md) · 21 บรรทัด
- [เรด / Bad Omen](villagers/raid.md) · 7 บรรทัด
- [เติมสต็อก/ส่วนลด/ปลุกซอมบี้](villagers/restock-discount.md) · 10 บรรทัด
- [ช่างเกราะ/เครื่องมือ/อาวุธ](villagers/smiths.md) · 10 บรรทัด
- [ระดับการเทรด](villagers/trading-levels.md) · 13 บรรทัด
- [ยังไม่ยืนยัน](villagers/unverified.md) · 5 บรรทัด
- [ซอมบี้บุกหมู่บ้าน](villagers/zombie-siege.md) · 9 บรรทัด

## อาวุธ (`weapons/`)

- [5. ข้อสังเกตสำหรับบอต](weapons/bot-notes.md) · 5 บรรทัด
- [4. เอนชานต์ที่มีผลต่อดาเมจ](weapons/enchantments-damage.md) · 20 บรรทัด
- [3. ระเบิด/ไฟ/ยา/สิ่งแวดล้อม](weapons/explosive-fire-potion.md) · 20 บรรทัด
- [1. อาวุธระยะประชิด](weapons/melee.md) · 9 บรรทัด
- [2. ยิงไกล/ขว้าง](weapons/ranged-thrown.md) · 10 บรรทัด
