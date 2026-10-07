# KB — คลังความรู้ Minecraft (Java วานิลลา) สำหรับบอต

> 1 หัวข้อ = 1 ไฟล์ · ดึงเฉพาะที่ใช้ · ค้นด้วย `index.json` (path, title, group, keywords)
> สร้างโดย `node scripts/split_kb.mjs` (เอกสาร) + `node scripts/gen_catalog.cjs` (บล็อก) — **แก้ที่ docs/ แล้วรันใหม่ ห้ามแก้ kb/ ตรง**
> ความน่าเชื่อถือ: minecraft-data > วิกิ > เกณฑ์แล็บ > ผลจำลอง

## บล็อก/ไอเทม/อาหาร (จาก minecraft-data) (`blocks/`)

- [เอฟเฟกต์ทั้งหมด 40 ชนิด](blocks/_effects.md) · 49 บรรทัด
- [เอนชานต์ทั้งหมด 43 ชนิด](blocks/_enchantments.md) · 52 บรรทัด
- [เอนทิตีทั้งหมด 157 ชนิด (ขนาดกล่องชน)](blocks/_entities.md) · 166 บรรทัด
- [อาหารทั้งหมด 44 ชนิด (เรียงตาม อิ่ม + saturation)](blocks/_foods.md) · 53 บรรทัด
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
- [ยังไม่ยืนยัน](crafting/unverified.md) · 6 บรรทัด
- [บล็อกใช้งาน](crafting/utility.md) · 19 บรรทัด

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
- [3. ขอบ/รอบตัว/ติดบล็อก](movement/edges-bridging-stuck.md) · 10 บรรทัด
- [2. การตก (Fall damage)](movement/fall-damage.md) · 10 บรรทัด
- [2.1 พื้นที่ลด/กันดาเมจตก](movement/fall-safe-blocks.md) · 16 บรรทัด
- [4. Parkour / Dropper / มุมกล้อง](movement/parkour-dropper-camera.md) · 11 บรรทัด
- [5. PvP — ส่วนที่เกี่ยวกับการเคลื่อนที่ (รายละเอียดเต็มอยู่ใน PVP_PLAYBOOK)](movement/pvp-movement.md) · 10 บรรทัด
- [1. ความเร็ว/การกระโดด (ตัวเลขฐาน)](movement/speed-jump.md) · 19 บรรทัด
- [8. ยังไม่ได้ verify](movement/unverified.md) · 2 บรรทัด
- [7. เทคนิคจาก YouTube — **ยังว่าง (รอข้อมูล)**](movement/youtube-pending.md) · 2 บรรทัด

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
- [Entry E5: ผิวพื้น/ไฟ/อันตรายอื่น](nether-end/e5-ground-fire.md) · 10 บรรทัด
- [Entry E6: Ghast ทำลายพอร์ทัล (ติดอยู่ใน Nether)](nether-end/e6-ghast-breaks-portal.md) · 6 บรรทัด
- [Entry E7: กฎเกราะทอง](nether-end/e7-gold-armor.md) · 1 บรรทัด
- [Entry M1: ถูก Ghast ยิง (HP หายเป็นก้อน, มี projectile fireball เข้า)](nether-end/m1-ghast.md) · 6 บรรทัด
- [Entry M2: Blaze ในป้อม](nether-end/m2-blaze.md) · 6 บรรทัด
- [Entry M3: Zombified Piglin ทั้งฝูงเข้าตี](nether-end/m3-zombified-piglin.md) · 6 บรรทัด
- [Entry M4: Piglin / Brute ใน bastion](nether-end/m4-piglin-brute.md) · 6 บรรทัด
- [Entry M5: Hoglin / Zoglin](nether-end/m5-hoglin-zoglin.md) · 5 บรรทัด
- [Entry M6: Magma Cube / Strider](nether-end/m6-magma-cube-strider.md) · 4 บรรทัด
- [1. ตารางมอนสเตอร์ Nether (Normal)](nether-end/nether-mobs-table.md) · 12 บรรทัด
- [สรุปจุดที่ไม่แน่ใจ](nether-end/unverified.md) · 1 บรรทัด
- [4. Wither (boss)](nether-end/wither.md) · 6 บรรทัด

## ฟิสิกส์บล็อกพิเศษ (`physics/`)

- [8. สรุปกฎสำหรับบอต (checklist)](physics/bot-checklist.md) · 8 บรรทัด
- [3. การเด้ง / ดาเมจตก](physics/bounce-fall.md) · 10 บรรทัด
- [4. ปีนได้ (Climbable)](physics/climbable.md) · 6 บรรทัด
- [5. Collision shape ที่ดัก/สะดุด](physics/collision-shapes.md) · 14 บรรทัด
- [6. ของเหลว](physics/fluids.md) · 8 บรรทัด
- [7. Gravity blocks](physics/gravity-blocks.md) · 8 บรรทัด
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
- [6. อาหาร](progression/food.md) · 11 บรรทัด
- [7. ชุดเหล็กชุดแรก: iron รวม](progression/iron-first-set.md) · 15 บรรทัด
- [1. ตารางไมล์สโตน (สิ่งที่ต้องนับใน inventory)](progression/milestones.md) · 14 บรรทัด
- [9. Nether → End](progression/nether-to-end.md) · 16 บรรทัด
- [4. แร่: ระดับ Y, ตำแหน่งขุดที่ดี, pickaxe ที่ต้องใช้ (Java 1.18+)](progression/ores-y-levels.md) · 18 บรรทัด
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
- [5. Smelting และเชื้อเพลิง](progression/smelting-fuel.md) · 19 บรรทัด
- [Durability เครื่องมือ (ใช้ได้กี่ครั้ง; ทุกชนิด pickaxe/axe/shovel/sword/hoe ตาม snippet)](progression/tool-durability.md) · 12 บรรทัด
- [11. ผลรวม [ไม่แน่ใจ] / ข้อสังเกตข้อมูล](progression/unverified.md) · 4 บรรทัด
- [2. ไม้ → crafting table → เครื่องมือ (จำนวนสูตร)](progression/wood-tools-recipes.md) · 13 บรรทัด

## ตัวจำลอง (`sim/`)

- [4. ข้อจำกัด (ต้องรู้ก่อนใช้ตัดสินใจ)](sim/limitations.md) · 4 บรรทัด
- [1. ฟิสิกส์ (`lib/pvp/physics.mjs`) — เทียบกับวิกิ](sim/physics-validation.md) · 10 บรรทัด
- [2. ผล PvP (n=400 สลับฝั่ง, ping 10–50, เกราะเหล็กทั้งคู่)](sim/pvp-results.md) · 22 บรรทัด
- [3. ผลเอาชีวิตรอด (n=300, Normal)](sim/survival-results.md) · 20 บรรทัด

## อาวุธ (`weapons/`)

- [5. ข้อสังเกตสำหรับบอต](weapons/bot-notes.md) · 5 บรรทัด
- [4. เอนชานต์ที่มีผลต่อดาเมจ](weapons/enchantments-damage.md) · 11 บรรทัด
- [3. ระเบิด/ไฟ/ยา/สิ่งแวดล้อม](weapons/explosive-fire-potion.md) · 11 บรรทัด
- [1. อาวุธระยะประชิด](weapons/melee.md) · 9 บรรทัด
- [2. ยิงไกล/ขว้าง](weapons/ranged-thrown.md) · 10 บรรทัด
