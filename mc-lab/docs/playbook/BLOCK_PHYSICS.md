# BLOCK_PHYSICS — บล็อก/ของเหลว/เอนทิตีที่ฟิสิกส์ต่างจากบล็อกตันปกติ (Java, vanilla)

> ที่มา: ค้นผ่าน search snippet ของ minecraft.wiki เท่านั้น (ไม่ได้เปิดหน้าเต็ม). `[ไม่แน่ใจ]` = ไม่พบในผลค้น ห้ามถือเป็นตัวเลขจริง.
> หน่วย: "b/s" = บล็อก/วินาที, "tick" = 1/20 วินาที. ค่าความแข็ง/ทนทานบล็อกอยู่ที่ minecraft-data ไม่ซ้ำที่นี่.

## 0. ค่าพื้นฐานผู้เล่น/เอนทิตี

| รายการ | ค่า | แหล่ง |
|---|---|---|
| Hitbox ยืน | 0.6 กว้าง × 1.8 สูง, ตา 1.62 | [Hitbox](https://minecraft.wiki/w/Hitbox) |
| Hitbox ย่อ (sneak) | 0.6 × 1.5, ตา 1.27 | [Hitbox](https://minecraft.wiki/w/Hitbox), [Sneaking](https://minecraft.wiki/w/Sneaking) |
| Hitbox ว่าย/คลาน/ร่อน | 0.6 × 0.6, ตา 0.4 | [Hitbox](https://minecraft.wiki/w/Hitbox) |
| Step height (ก้าวขึ้นโดยไม่กระโดด) | 0.6 บล็อก | [Attribute](https://minecraft.wiki/w/Attribute) |
| ความสูงกระโดดปกติ | ~1.2522 บล็อก (Jump Boost I = 1.8361, II = 2.5168) | [Fence](https://minecraft.wiki/w/Fence) (ผลค้น "fence collision") |
| เดิน / วิ่ง / ย่อ | 4.317 / 5.612 / 1.295 b/s | [Walking](https://minecraft.wiki/w/Walking), [Sprinting](https://minecraft.wiki/w/Sprinting) |
| ว่ายน้ำผิวน้ำนิ่ง | 2.20 b/s; ใต้น้ำตามกระแส 1.81; ทวนกระแส 0.39 | [Swimming](https://minecraft.wiki/w/Swimming) |
| Sprint-swim | ~3.918 b/s (Depth Strider III = 5.305) | [Swimming](https://minecraft.wiki/w/Swimming) |

### ค่าคงที่ฟิสิกส์ต่อ tick (ผู้เล่น/มอบ/ไอเทม/โพรเจกไทล์)

| เอนทิตี | แรงโน้มถ่วง (ต่อ tick) | drag | แหล่ง |
|---|---|---|---|
| ผู้เล่น/living | -0.08 | แนวตั้ง 0.98, แนวนอน 0.91 (× ค่า friction บล็อก) | [Entity](https://minecraft.wiki/w/Entity) |
| Falling block, TNT | -0.04 | แนวตั้ง 0.98 | [Entity](https://minecraft.wiki/w/Entity) |
| ไอเทม (dropped) | -0.04 | 0.98 ทั้งแนวตั้ง/แนวนอน | [Entity](https://minecraft.wiki/w/Entity) |
| ลูกศร, trident | -0.05 | แนวตั้ง 0.99 | [Entity](https://minecraft.wiki/w/Entity) |
| Falling block hitbox | 0.98 × 0.98 | — | [Falling Block](https://minecraft.wiki/w/Falling_Block) |
| เรือ (boat) | [ไม่แน่ใจ] | — | — |

บอตควร: ใช้ -0.08 / 0.98 / 0.91 ใน physics ของ pathfinder (mineflayer ใช้ค่านี้อยู่แล้ว); ห้ามคาดว่าไอเทมตกเร็วเท่าผู้เล่น.

## 1. พื้นลื่น (Slipperiness)

| บล็อก | Slipperiness | ผลต่อการเคลื่อนที่ | อันตราย | บอตควร/ห้าม | แหล่ง |
|---|---|---|---|---|---|
| ปกติ | 0.6 (ยืนยันทางอ้อม: ใช้ 0.6 ใน `lib/pvp/physics.mjs` แล้วได้วิ่ง 5.612 / เดิน 4.317 ตรงวิกิพอดี) | — | — | — | — |
| Ice / Packed Ice / Frosted Ice | 0.98 | เร่ง/หยุดช้า ไถลต่อ; ความเร็วเดินบน packed/frosted ice สูงสุด ~4.157 b/s (ค่าที่ wiki ระบุ) | ไถลตกขอบ/เข้าลาวา | ห้ามเดินใกล้ขอบหน้าผาลาวา; หยุดวางแผนล่วงหน้า (ใช้ sneak ช่วยไม่ได้ เพราะ momentum) | [Ice](https://minecraft.wiki/w/Ice), [Packed Ice](https://minecraft.wiki/w/Packed_Ice) |
| Blue Ice | 0.989 | ลื่นสุด; เดิน ~4.376 b/s | เหมือนข้างบน | เหมือนข้างบน | [Blue Ice](https://minecraft.wiki/w/Blue_Ice) |
| Slime Block | 0.8 | ลื่นเล็กน้อย + เด้ง (ดู §3) | — | — | [Slime Block](https://minecraft.wiki/w/Slime_Block) |
| Frosted Ice (Frost Walker) | 0.98 | สร้างรอบผู้เล่นรัศมี 2+level (I=3, II=4) เป็นวงกลม; อายุ 0-4 แล้วกลายเป็นน้ำ | ละลายแล้วตกน้ำ | ใช้ข้ามน้ำได้ (ไม่ใช่ลาวา [ไม่แน่ใจ]) ต้องเดินบนพื้นต่อเนื่อง ห้ามกระโดด/ตก | [Frost Walker](https://minecraft.wiki/w/Frost_Walker), [Frosted Ice](https://minecraft.wiki/w/Frosted_Ice) |
| เรือบนน้ำแข็ง | ice/packed/frosted ~2 b/tick, blue ice ~3.63 b/tick | เรือไวมาก | ชนแล้วเรือพัง/ตกกระเด็น | บอตขับเรือบน ice ต้องมีเส้นทางตรง | [Boat](https://minecraft.wiki/w/Boat) |

## 2. ตัวหน่วง/เปลี่ยนความเร็ว

| บล็อก | ผลต่อการเคลื่อนที่ | อันตราย | บอตควร/ห้าม | ตัวเลข | แหล่ง |
|---|---|---|---|---|---|
| Soul Sand | ช้าลง (speed factor 0.4), ยืนแล้วจมเล็กน้อย | — | เลี่ยงใน path cost; ใส่บูต Soul Speed ถ้ามี | factor 0.4 | [Soul Sand](https://minecraft.wiki/w/Soul_Sand) |
| Soul Soil | factor 0.4 แต่ไม่ได้ทำให้ช้าจริง แต่เปิดใช้ Soul Speed | — | เดินได้ปกติ | — | [Soul Soil](https://minecraft.wiki/w/Soul_Soil) |
| Soul Speed (บูต) | เร็วขึ้นบน soul sand/soil; ใช้ความทนทานบูต | บูตสึก | ถ้าบอตมีบูต ควรเดินทางเนเธอร์ผ่านทราย | ×(level×0.105 + 1.3): I +40.5%, II +51.0%, III +61.5% | [Soul Speed](https://minecraft.wiki/w/Soul_Speed) |
| Honey Block | ช้า, กระโดดแทบไม่ได้, ไถลลงผนังช้า (ไม่เจ็บ, เหมือนบันได) | — | อย่าให้ path ผ่านด้านบน; ใช้ไถลผนังลดดาเมจได้ | เดิน 2.508 b/s (ลด ~60%); กระโดด ~3/16 บล็อก (ลด 85%) | [Honey Block](https://minecraft.wiki/w/Honey_Block) |
| Cobweb | ช้ามาก กระโดดต่ำมาก | ติดกับดัก | ตัดด้วยดาบ/กรรไกร; Weaving ช่วย | เดิน ~25% (Weaving = 50%); 0.490 b/s ในอากาศ | [Cobweb](https://minecraft.wiki/w/Cobweb) |
| Sweet Berry Bush | ช้าลง กระโดดเต็มบล็อกไม่ได้ | 1 HP/tick (ลดเหลือทุก 0.5 วิ จาก immunity) เฉพาะตอนขยับ; stage ≥1; กันดาเมจตก | เลี่ยง; ใช้ลดดาเมจตกได้ | ความเร็ว ~34.05% | [Sweet Berries](https://minecraft.wiki/w/Sweet_Berries) |
| Powder Snow | ตกทะลุ, ช้าเหมือน cobweb, เหยียบได้ถ้าใส่ leather boots, ปีนได้ด้วยบูตหนัง | แช่แข็ง: ช้าลงถึง 50% ใน 140 tick แล้ว 1.5 HP ทุก 40 tick; เสื้อหนังกันได้ทุกชิ้น | อย่าเดินเข้า; ถ้ามี leather boots ใช้ข้ามได้; ตกลงบนผงหิมะไม่เจ็บ | 140 tick, 1.5 HP/40 tick | [Powder Snow](https://minecraft.wiki/w/Powder_Snow) |
| Mud | จมเล็กน้อย **ไม่ช้าลง** | — | เดินได้เหมือนปกติ (จุดเสี่ยงคือ step height) | — | [Mud](https://minecraft.wiki/w/Mud) |
| Bubble column (soul sand ขึ้น) | พาขึ้นแรง ยิ่งนานยิ่งเร็ว อาจดีดพ้นน้ำหลายบล็อก | — | ใช้เป็นลิฟต์ได้; ระวังดีดออกจากน้ำ | ~11 b/s | [Bubble Column](https://minecraft.wiki/w/Bubble_Column) |
| Bubble column (magma ลง) | ดึงลง (whirlpool) | จมน้ำถ้าอากาศหมด (มีฟองอากาศให้หายใจ) | หลีกเลี่ยงการว่ายลงหลุมแคนยอน | ~4.9 b/s | [Bubble Column](https://minecraft.wiki/w/Bubble_Column) |
| Scaffolding | ปีน: กระโดดขึ้น/sneak ลง; ยืนบนยอดได้ | ชนิด distance 7 → กลายเป็น falling block (พังถล่ม) | ตั้งไม่เกิน 6 บล็อกจากฐานรับ; sneak ตกกันเด้งดาเมจ | distance 0-7 | [Scaffolding](https://minecraft.wiki/w/Scaffolding) |
| น้ำ (กระแส) | ผลักตามทิศไหล; ว่ายทวน 0.39 b/s | — | ใช้ตามกระแสเพื่อเร่ง | ดูข้างบน | [Swimming](https://minecraft.wiki/w/Swimming) |
| ลาวา | ช้าลงแนวนอน 50%, แนวตั้ง 20%; ว่าย-sprint ไม่ได้ | ไฟ/ดาเมจสูง | **ห้ามเดินเข้า**; ใช้ Fire Resistance ก็ยังช้า | −50% / −20% | [Lava](https://minecraft.wiki/w/Lava) |

## 3. การเด้ง / ดาเมจตก

| บล็อก | พฤติกรรม | บอตควร/ห้าม | ตัวเลข | แหล่ง |
|---|---|---|---|---|
| Slime Block | ตกลงมาไม่เจ็บ + เด้งตามความเร็วตก; ย่อ (sneak) ไม่เด้งและไม่เจ็บ (ตั้งแต่ 1.21.2) | ใช้ MLG ได้: ลงบน slime | [ไม่แน่ใจ ค่า bounce ของ slime] | [Slime Block](https://minecraft.wiki/w/Slime_Block) |
| Bed | เด้งด้วย 75% ของแรงกระแทก (เดิม 66%; แก้ใน 26.2) | หมายเหตุ: ค่าเปลี่ยนตามเวอร์ชัน | 75% | [Java Edition 26.2](https://minecraft.wiki/w/Java_Edition_26.2) |
| Hay Bale | ลดดาเมจตก 80% | ใช้ลดดาเมจ | จ่าย 20% | [Hay Bale](https://minecraft.wiki/w/Hay_Bale) |
| Honey Block | ลดดาเมจตก 80% | เหมือนกัน | 20% | [Honey Block](https://minecraft.wiki/w/Honey_Block) |
| Sweet berry bush | ยกเลิกดาเมจตก (แต่มีดาเมจหนาม) | อย่าพึ่งพา | — | [Sweet Berries](https://minecraft.wiki/w/Sweet_Berries) |
| Scaffolding | รีเซ็ตระยะตกถ้า sneak ตอนลง | ใช้ได้ | — | [Scaffolding](https://minecraft.wiki/w/Scaffolding) |
| Powder Snow | ไม่เจ็บเมื่อตกลงบน | ใช้ได้ | — | [Powder Snow](https://minecraft.wiki/w/Powder_Snow) |
| Pointed Dripstone (stalagmite) | ตกใส่ปลายแหลม: ดาเมจ = ceil(fall×2 − 2) | ห้ามตกลงบน | กระโดดปกติทับเสา 1 HP | [Pointed Dripstone](https://minecraft.wiki/w/Pointed_Dripstone) |

## 4. ปีนได้ (Climbable)

| บล็อก | วิธี | ตัวเลข | บอตควร/ห้าม | แหล่ง |
|---|---|---|---|---|
| Ladder, Vines, Cave Vines (และคลาสเดียวกัน) | ดันกำแพง/กระโดดเพื่อขึ้น; ลงช้ากว่าตก | ขึ้น ~2.35-3.00 b/s; ลงสูงสุด ~3 b/s | **Sneak = หยุดค้าง ไม่ลง** (บันได/เถาวัลย์; เถาวัลย์ค้างได้แม้ไม่ติดผนัง) | [Ladder](https://minecraft.wiki/w/Ladder), [Vines](https://minecraft.wiki/w/Vines), [Sneaking](https://minecraft.wiki/w/Sneaking) |
| Twisting / Weeping Vines | ยืนข้างในแล้วกด jump; ถ้ามีบล็อกตันด้านหลังใช้ forward ได้ | — | ปีนเหมือนบันได | [Twisting Vines](https://minecraft.wiki/w/Twisting_Vines), [Weeping Vines](https://minecraft.wiki/w/Weeping_Vines) |
| Cave Vines | เหมือน weeping vines | — | มี glow berries (เก็บได้ขณะปีน) | [Cave Vines](https://minecraft.wiki/w/Cave_Vines_(feature)) |
| Scaffolding | jump ขึ้น / sneak ลง (**sneak ไม่ใช่การหยุด**) | — | ต่างจากบันไดตรงข้าม | [Sneaking](https://minecraft.wiki/w/Sneaking), [Scaffolding](https://minecraft.wiki/w/Scaffolding) |

## 5. Collision shape ที่ดัก/สะดุด

| บล็อก | ความสูงชนจริง | ผลต่อบอต | แหล่ง |
|---|---|---|---|
| Fence / Fence gate (ปิด) / Wall | **1.5 บล็อก** (hitbox 1 บล็อก) กระโดดข้ามไม่ได้ (กระโดดปกติ ~1.25) | ต้องเปิดประตู/ใช้ Jump Boost; ห้ามวางแผนข้ามด้วยการกระโดด | [Fence](https://minecraft.wiki/w/Fence), [Wall](https://minecraft.wiki/w/Wall); gate [ไม่แน่ใจ ใน snippet] |
| Slab (ล่าง) | 0.5 → ขึ้นได้โดยไม่กระโดด (step 0.6) แต่ wiki เตือนบล็อกสูง ≥ 7/8 ต้องกระโดดหลายกรณี | เดินขึ้นจากบล็อกเตี้ยกว่า 0.6 ไม่ได้ในบางกรณี | [Slab](https://minecraft.wiki/w/Slab) (snippet จำกัด) |
| Stairs | เดินขึ้นโดยไม่กระโดด ไม่เสีย exhaustion (กระโดด 0.2/ครั้ง) | path ผ่านได้ถูกกว่า | [Stairs](https://minecraft.wiki/w/Stairs) |
| Snow layer | layer1: ไม่ชน; layer2 = 0.125; layer4 = 0.375 (เพิ่ม 2 px ต่อชั้นหลัง) | ชั้นสูงอาจต้องกระโดด | [Snow](https://minecraft.wiki/w/Snow) |
| Dirt Path, Farmland | 15/16 บล็อก (ตัวเตี้ยกว่าปกติ) | ยืนต่ำลงเล็กน้อย | [Dirt Path](https://minecraft.wiki/w/Dirt_Path) |
| Farmland | กระโดด/ตกใส่ → โอกาสโดนเหยียบ = (fall − 0.5)×100% (ต้องมี mobGriefing) | **ห้ามกระโดด/ตกใส่ไร่** ใช้ sneak ไม่เหยียบ [ไม่แน่ใจ: ใน snippet ระบุเฉพาะ fall distance] | [Farmland](https://minecraft.wiki/w/Farmland) |
| Carpet, Trapdoor (crawl), Door, Chain, Glass pane, Iron bars | [ไม่แน่ใจ ไม่พบตัวเลขใน snippet] | — | — |
| Magma Block | 1 HP ทุก 0.5 วิ ถ้าเดินบน; กัน: sneak / Fire Resistance / Frost Walker | ห้ามเดิน, sneak ได้ | [Magma Block](https://minecraft.wiki/w/Magma_Block) |
| Campfire / Soul Campfire | 1 HP / 2 HP ทุก 0.5 วิ | หลีกเลี่ยง | [Soul Campfire](https://minecraft.wiki/w/Soul_Campfire) |
| Cactus | 1 HP/tick (immunity → ทุก 0.5 วิ) เมื่อแตะ | อย่าเดินชิด | [Cactus](https://minecraft.wiki/w/Cactus) |
| Wither Rose | Wither effect 1 HP ทุก 0.5 วิ ค้างอีก 1 วิ (ไม่ใช่ Peaceful) | อย่าเดินทับ | [Wither Rose](https://minecraft.wiki/w/Wither_Rose) |
| Sculk Sensor/Shrieker | ตรวจสั่นสะเทือนรัศมี 8 บล็อก; **ผู้เล่นที่ sneak และขยับ/กระโดด/ตกไม่ถูกตรวจ**; shrieker ถูกกระตุ้นจาก sensor ใน 8 บล็อกเฉพาะที่เกิดจากผู้เล่น; สัญญาณเดินทาง 1 บล็อก/tick | ใน Deep Dark: **sneak ตลอด** เลี่ยง Warden | [Sculk Sensor](https://minecraft.wiki/w/Sculk_Sensor), [Sculk Shrieker](https://minecraft.wiki/w/Sculk_Shrieker) |

บอตควร:
- fence/wall/fence gate ปิด: ถือสูง 1.5 > กระโดด ~1.25 ห้ามวาง path ข้ามด้วยกระโดด; ต้องหาทางอ้อม/เปิด gate/ขุด (W/Fence)
- slab/stairs/snow ชั้นต่ำ (<= 0.6 step height): เดินขึ้นได้ตรง; สูงกว่านั้นสั่ง jump ก่อนถึง 1 บล็อก (W/Attribute step 0.6)
- ก่อนก้าวเช็คบล็อกเท้า+ปลายทาง: magma, campfire (1 HP / soul 2 HP ทุก 0.5 วิ), cactus, wither rose = cost สูงหรือห้ามผ่าน; ไม่เดินชิด cactus
- farmland: ห้ามกระโดด/ตกใส่ (ความเสี่ยง = (fall−0.5)×100%); เดินผ่านด้วยการเดินราบ
- Deep Dark/มี sculk ใน 8 บล็อก: sneak ตลอด (W/Sculk_Sensor); ชนิดที่ [ไม่แน่ใจ] (carpet, trapdoor, door, pane, bars) ให้ถือเป็น 1 บล็อกเต็มจนกว่าทดสอบ [คิดเอง]
ตัดสินผล: ถ้า position ไม่ขยับ > 1 บล็อกใน 3 วินาที ขณะสั่งเดินหน้า (เกณฑ์แล็บ [คิดเอง]) = ติดสะดุด ให้ replan หรือเปิด/ขุด; ถ้า HP ลดจากบล็อกพื้นผิวภายใน 5 วินาที = ผิด ให้ใส่บล็อกนั้นเข้า blacklist

## 6. ของเหลว

| รายการ | ค่า | บอตควร/ห้าม | แหล่ง |
|---|---|---|---|
| น้ำ: ระยะไหล | 7 บล็อกแนวนอน, 5 tick/บล็อก (4 b/s); ไหลลงไม่จำกัด | ใช้ตัดน้ำ/กั้นด้วยบล็อก | [Water](https://minecraft.wiki/w/Water) |
| ลาวา Overworld | ไหล 3 บล็อก, 30 tick/บล็อก | เห็นลาวาไหลตามช้า | [Lava](https://minecraft.wiki/w/Lava) |
| ลาวา Nether | ไหล 7 บล็อก, 10 tick/บล็อก | เร็วกว่า ระวังไหลตามบอต | [Lava](https://minecraft.wiki/w/Lava) |
| ลาวา: การเคลื่อนที่ | แนวนอน −50%, แนวตั้ง −20%, sprint-swim ไม่ได้ | หนีขึ้นยาก — ห้ามลง | [Lava](https://minecraft.wiki/w/Lava) |
| Infinite water | น้ำ 2 source ขวาง ๆ รอบพื้น → source ใหม่; waterlogging ให้ source ในบล็อกไม่เต็ม (บันได/รั้ว/พืช) | ใช้เติมถัง/ดับไฟ | [Water](https://minecraft.wiki/w/Water), [Waterlogging](https://minecraft.wiki/w/Waterlogging) |
| Minecart | สูงสุด 8 b/s ต่อแกน (แนวทแยง 11.314); powered rail ไม่เกิน 8; ระยะวางที่รักษาเต็มความเร็ว: 1/38 บล็อก (7.97) / 1/34 (เต็ม 8 มีคนนั่ง) | ใช้ราง = เร็ว แต่เบรกยาก | [Minecart](https://minecraft.wiki/w/Minecart), [Powered Rail](https://minecraft.wiki/w/Powered_Rail) |

## 7. Gravity blocks

| บล็อก | พฤติกรรม | อันตราย | แหล่ง |
|---|---|---|---|
| Sand/Red sand/Gravel/Concrete powder | ตกเมื่อไม่มีฐาน; ลงทับหัว = **หายใจไม่ออก (suffocation) จนกว่าจะขุด/ขยับออก** | ห้ามขุดใต้เสาทราย/กรวดขณะยืนใต้; ขุดขึ้นต้องใส่คบ/บล็อกกัน | [Sand](https://minecraft.wiki/w/Sand), [Gravel](https://minecraft.wiki/w/Gravel), [Falling Block](https://minecraft.wiki/w/Falling_Block) |
| Anvil | ดาเมจ 2 HP × (ระยะตก − 1), เพดาน 40 HP; ระยะตก >1 เสื่อมสภาพ 5% × ระยะ | อย่ายืนใต้ | [Anvil](https://minecraft.wiki/w/Anvil) |
| Pointed dripstone (stalactite ตก) | ดาเมจ 1 HP ต่อบล็อกที่ตกหลังตก 2 บล็อก (ขั้นต่ำนับ 6) ต่อบล็อก; ตัวอย่าง 4 บล็อก = 18 HP; เพดาน 40 | ห้ามยืนใต้หินงอกที่โตแล้ว | [Pointed Dripstone](https://minecraft.wiki/w/Pointed_Dripstone) |
| Scaffolding (distance 7) | กลายเป็น falling block | ตั้งไกลไป พังทั้งชุด | [Scaffolding](https://minecraft.wiki/w/Scaffolding) |
| Dragon Egg | วาร์ปไปอากาศใกล้ (สูงสุด 7 แนวตั้ง, 15 แนวนอน) แล้วตกตามแรงโน้มถ่วง; **ไม่ทำให้หายใจไม่ออกและไม่ทับ** | เก็บไข่: ระวังเคลื่อนที่ | [Dragon Egg](https://minecraft.wiki/w/Dragon_Egg) |
| Falling block / TNT | ดูตาราง §0 | — | [Entity](https://minecraft.wiki/w/Entity) |

บอตควร:
- ก่อนขุดแนวตั้ง: ตรวจบล็อกเหนือหัว 1-3 บล็อกว่าเป็น sand/red sand/gravel/concrete powder/anvil/pointed dripstone (stalactite) หรือไม่ ถ้าใช่ ห้ามขุดใต้ฐานขณะยืนใต้; วางคบ/บล็อกกั้นก่อน (W/Falling_Block)
- ถูกทับ (suffocation): ขุด/ขยับออกทันที ภายใน 1 วินาที (เกณฑ์แล็บ [คิดเอง]) เพราะ HP ลดต่อเนื่อง
- ห้ามยืนใต้ anvil (ดาเมจ 2 HP × (ตก−1) เพดาน 40) และใต้ stalactite ที่โตแล้ว (ตัวอย่างตก 4 บล็อก = 18 HP; W/Pointed_Dripstone)
- scaffolding: ตั้งไม่เกิน 6 บล็อกจากฐาน ไม่ถึง distance 7 (W/Scaffolding)
- dragon egg: ไม่ทับ/ไม่ suffocate แต่วาร์ปได้ (<=7 แนวตั้ง, 15 แนวนอน) ไล่เก็บตามตำแหน่งใหม่
ตัดสินผล: ภายใน 10 วินาทีหลังขุดใต้ gravity block ถ้าไม่มี HP ลด/suffocation และตำแหน่งบอตไม่ถูกบล็อกทับ = ถูก (เกณฑ์แล็บ [คิดเอง]); เห็น falling_block entity เหนือหัว < 3 บล็อก ให้ถอยข้างทันที

## 8. สรุปกฎสำหรับบอต (checklist)

1. ใส่ cost สูง/ห้ามผ่าน: ลาวา, powder snow (ไม่มี leather boots), cobweb, sweet berry, honey block (ด้านบน), soul sand (ไม่มี Soul Speed), magma, campfire, cactus, wither rose, pointed dripstone ปลายแหลม.
2. อย่าวางแผนข้ามรั้ว/กำแพง/gate ด้วยการกระโดด (1.5 > 1.25).
3. ปีนบันได/เถาวัลย์: sneak = ค้าง; scaffolding: sneak = ลง.
4. หลบ Sculk: sneak ตลอด (ขยับ/กระโดดตอน sneak ไม่ถูกตรวจ).
5. ขุดใต้ sand/gravel: ห้ามยืนใต้; ระวังหายใจไม่ออก.
6. ตกสูง: วาง hay/honey/slime(sneak)/water/scaffolding ใต้; ห้ามตกใส่ stalagmite.
7. ไร่นา: ห้ามกระโดด/ตกใส่ farmland.
8. น้ำแข็ง: ลดความเร็ว/ไม่ sprint ใกล้ขอบ; ลาวา/หน้าผาไม่ควรอยู่ข้าง.

## 9. ยังไม่ยืนยัน [ไม่แน่ใจ]
- ค่า friction ของบล็อกปกติ (0.6) และสูตร velocity บน ice/slime ที่แน่ชัด
- ชนิดเถาวัลย์ทั้งหมดที่ปีนได้ และความเร็วปีนต่อชนิด
- Collision ของ carpet, trapdoor (crawl), door, fence gate, chain, glass pane, iron bars
- ค่าคงที่ฟิสิกส์ของ boat; กระแสน้ำเป็น b/s ต่อชั้น flow level
- ค่าเด้งของ slime/bed (ตัวคูณ slime); ผลของ Soul Speed บน mud/ice
- ความถี่การสั่นสะเทือนของ sculk ต่อกิจกรรม
