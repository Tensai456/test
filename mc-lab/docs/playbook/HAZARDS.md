# HAZARDS — อันตรายนอกการต่อสู้ (Java, Vanilla, Normal)

รูปแบบทุกหัวข้อ: **อาการ** (บอทตรวจได้) → **สาเหตุ** → **แก้** → **ตัวเลข+แหล่ง** → **ตัดสินผล** → **เทสจริง**
ค่าที่ไม่พบใน search snippet = `[ไม่แน่ใจ]` ห้ามเดา ต้องวัดจริงแล้วกลับมาแก้ไฟล์นี้
URL ย่อ: `W=https://minecraft.wiki/w/`

---
## 1. หิว / Exhaustion / Starvation
| รายการ | ค่า | แหล่ง |
|---|---|---|
| วิ่ง (sprint) | 0.1 exhaustion ต่อเมตร | W Hunger |
| กระโดด | 0.05 ต่อครั้ง; กระโดดขณะวิ่ง 0.2 | W Hunger |
| โจมตีโดน | 0.1 ต่อครั้ง | W Hunger |
| ฟื้นเลือด | +6 exhaustion ต่อการฟื้นเลือด (ใน 4 เสียค่า 1 hunger) | W Starvation (Food mechanics) |
| exhaustion เกิน 4.0 | ลด 4; ถ้า saturation>0 ลด saturation 1 (ไม่ต่ำกว่า 0) | W Starvation |
| Natural regen | hunger >=18 (หรือ saturation>0) ฟื้น 1HP ต่อ 80 ticks | W Starvation |
| วิ่งไม่ได้ | hunger <=6 | W Hunger |
| หยุดฟื้นเอง | hunger <=17 (ตามหน้า Hunger) | W Hunger |
| Starvation | 1HP ต่อ 80 ticks (4 วิ) ที่ hunger 0 | W Starvation |
| Normal | starvation หยุดที่ 1HP (Easy หยุดที่ 10HP, Hard ตายได้) | W Hunger / W Starvation |
| Mining/ขุดบล็อก exhaustion | `[ไม่แน่ใจ]` (ไม่อยู่ใน snippet) | - |
| Hunger effect | +0.005 x level exhaustion ต่อ tick | W Hunger_(effect) |

- **อาการ**: food level ลด, ฟื้นเลือดหยุด, วิ่งไม่ได้, เลือดลดช้าๆ ที่ food=0
- **แก้**: กินเมื่อ food <=14 (ก่อนหลุดเกณฑ์ regen 18 ไม่จำเป็น แต่ต้องกินก่อน 6); ลดการวิ่ง/กระโดดขณะอดอยาก; สำรองอาหารสุกในช่อง hotbar
- **ตัดสินผล**: ผิดถ้า food<=6 แล้วบอทพยายามวิ่ง/สั่ง sprint ซ้ำ; ผิดถ้า food==0 เกิน 10 วิ โดยมีอาหารในกระเป๋าแต่ไม่กิน; ถูกถ้ากินภายใน 5 วิหลัง food<=6 (หน้าต่าง 5 วิ = เกณฑ์ของ lab ไม่ใช่ของ wiki)
- **เทสจริง**: /effect give Hunger 60 สูง level แล้ววัด food ต่อ 60 วิ เทียบสูตร; ตั้ง food=0 บน Normal ดูว่าเลือดหยุดที่ 1HP (0.5 หัวใจ?) `[ไม่แน่ใจ]` หน่วยของ "1HP"

## 2. อาหารพิษ
| อาหาร | ผล | แหล่ง |
|---|---|---|
| เนื้อเน่า | +4 hunger, 0.8 sat, 80% ได้ Hunger I 30 วิ | W Rotten_Flesh |
| ไก่ดิบ | 30% ได้ Hunger | W Hunger_(effect) / W Food (Raw chicken ผ่าน search) |
| ปลาปักเป้า | Hunger III 15 วิ, Poison II 1 นาที, Nausea 15 วิ | W Pufferfish_(item) |
| ตาแมงมุม | Poison 5 วิ (2HP) | W Poison |
| Suspicious stew | ขึ้นกับดอกไม้ เช่น lily of the valley Poison 11 วิ; eyeblossom เปิด Blindness 11 วิ (Java); ปิด Nausea 7 วิ | W Lily_of_the_valley, W Eyeblossom |

- **อาการ**: effect Hunger/Poison/Nausea โผล่หลังกิน
- **แก้**: ห้ามกินปักเป้า/ตาแมงมุม/stew ไม่ทราบสูตร; เนื้อเน่าเฉพาะวิกฤต (food<=2 ไม่มีอย่างอื่น) แล้วรอ; นมล้าง effect
- **ตัดสินผล**: ผิดถ้ากินปักเป้า/ตาแมงมุมโดยมีอาหารปลอดภัยอยู่; ผิดถ้ากินไก่ดิบ/เนื้อเน่าเมื่อมีของสุก; ถูกถ้า cook ก่อนกินทุกครั้ง
- **เทสจริง**: กินเนื้อเน่า 20 ครั้ง นับสัดส่วนที่ได้ Hunger (คาด ~80%)

## 3. Status effects
| Effect | ที่มา/ค่า | แหล่ง |
|---|---|---|
| Poison | 1HP ต่อ 25 ticks (lv I); ฆ่าไม่ได้ เหลือ 0.5 หัวใจ | W Poison |
| Wither | 1HP ต่อ 40 ticks (lv I); ฆ่าได้ทุกความยาก; ไม่ใช้ milk? `[ไม่แน่ใจ]` | W Wither_(effect) |
| Mining Fatigue III | elder guardian ทุก 60 วิ ในรัศมี 50 บล็อก, นาน 5 นาที, ความเร็วขุด -97.3%; นมล้างได้แต่โดนซ้ำ | W Mining_Fatigue |
| Slowness | potion I -15%, IV -60% | W Potion_of_Slowness |
| Weakness | Java ลดดาเมจ 4 | W Potion_of_Weakness |
| Darkness | shrieker: 12 วิ รัศมี 40; warden: 13 วิ ทุก 6 วิ รัศมี 20 | W Sculk_Shrieker, W Warden |
| Blindness | stew eyeblossom 11 วิ (Java) | W Eyeblossom |
| Levitation | จาก shulker bullet; ความเร็ว/เวลา `[ไม่แน่ใจ]` | W Levitation |
| Bad Omen | ominous bottle 100 นาที; เข้าหมู่บ้าน -> Raid Omen -> raid หลัง 30 วิ | W Ominous_Bottle, W Raid |
| Trial Omen | 15 นาที x ระดับ Bad Omen | W Trial_Omen |

- **อาการ**: อ่าน `bot.entity.effects`
- **แก้**: Poison/Wither -> กินอาหารฟื้น (Poison ไม่ฆ่า แต่ห้ามโดนซ้ำตอน 0.5 หัวใจ), ดื่มนม, ถอยจากต้นเหตุ; Mining Fatigue -> ออกจาก monument แล้วดื่มนม; Darkness -> ยืนนิ่ง/ถอยออกจาก shrieker ห้ามวิ่ง
- **ตัดสินผล**: ผิดถ้า Wither/Poison แล้วเลือด <=4 ไม่หยุดกิน/ดื่มนมภายใน 3 วิ (กฎ lab); ผิดถ้าเข้าหมู่บ้านด้วย Bad Omen โดยไม่ตั้งใจสู้ raid
- **เทสจริง**: /effect give ทุกตัว วัดอัตราเลือดลด vs ตาราง

## 4. ความหนาว (Powder snow)
| ค่า | แหล่ง |
|---|---|
| TicksFrozen +1 ต่อ tick สูงสุด 140; ช้าลงสูงสุด 50% | W Powder_Snow |
| เต็ม 140 ticks (7 วิ) แล้วเสียเลือด 1HP ต่อ 40 ticks | W Freezing |
| ใส่เกราะหนังชิ้นใดก็ไม่เยือกแข็ง; รองเท้าหนังเดิน/ปีนได้ไม่จม | W Freezing, W Powder_Snow |

- **อาการ**: ตกหลุมขาว, หัวใจเป็นสีฟ้า, ช้าลง
- **แก้**: ใส่ leather boots ก่อนเข้า snowy slopes; ถ้าจม ปีนออกด้วยการกระโดด/ถอยเส้นเดิม
- **ตัดสินผล**: ผิดถ้าอยู่ในผงหิมะ >7 วิ โดยไม่มีเกราะหนัง
- **เทสจริง**: ยืนในผงหิมะจับเวลาถึงเสียเลือดครั้งแรก (คาด ~7 วิ)

## 5. บล็อกทำร้าย
| บล็อก | ค่า | แหล่ง |
|---|---|---|
| Cactus | 1HP ทุก 0.5 วิ เมื่อสัมผัส | W Cactus |
| Sweet berry bush | 1HP ทุก 0.5 วิ เมื่อขยับในพุ่ม | W Sweet_Berries |
| Magma block | 1HP ทุก 0.5 วิ เมื่อเดินบน; กัน: Fire Resistance, ย่อ (sneak), Frost Walker | W Magma_Block |
| Campfire | 1HP ทุก 0.5 วิ เมื่อยืนบน | W Fire (ผลค้นหา campfire) |
| Fire (ไฟ) | ไหม้ 1HP ต่อวิ; ไหม้ต่อ 8 วิหลังออกจากไฟ | W Fire |
| Lava | 4HP ทุก 0.5 วิ; ติดไฟ 300 ticks (15 วิ) | W Lava, W Fire |
| Suffocation | 1HP ทุก 0.5 วิ เมื่อ "ตา" อยู่ในบล็อกตัน | W Damage |

- **แก้**: เลี่ยงใน pathfinder (ตั้ง cost สูงสำหรับ cactus/berry/magma/campfire/lava/fire); ติดไฟ -> เข้าน้ำทันที; ถูกฝังใน sand/gravel -> ขุดบล็อกเหนือหัวทันที
- **ตัดสินผล**: ผิดถ้าก้าวลง magma โดยไม่ sneak/ไม่มี fire res; ผิดถ้าติดไฟแล้วไม่เข้าน้ำ/ไม่หยุดภายใน 2 วิ เมื่อมีน้ำ <=5 บล็อก; ผิดถ้าเดินเข้า lava (เกือบตายภายใน ~2.5 วิ: 20HP / 8HP ต่อวิ -- คำนวณเอง)
- **เทสจริง**: วาง cactus/berry/magma ให้บอทเดินผ่าน ดู path ว่าหลบไหม

## 6. ไฟลาม, ฟ้าผ่า
| ค่า | แหล่ง |
|---|---|
| ฟ้าผ่าโดนผู้เล่น 5 หัวใจ (ลดได้ด้วยเกราะ) + ติดไฟ | W Thunderstorm |
| Lightning rod ดึงฟ้า 128 บล็อก (Java) ถ้าสูงสุดในคอลัมน์ | W Lightning_Rod |
| ฟ้าผ่าไม่ลามไฟมากเมื่อฝนตก | W Thunderstorm |

- **แก้**: พายุ -> เข้าที่กำบังใต้หลังคา/ถ้ามี lightning rod ตั้งไว้; อย่าถือ/ยืนที่สูงสุดบนเนินกลางพายุ; ไฟไหม้ไม้ -> เลี่ยง/ขุดกันไฟ
- **ตัดสินผล**: ผิดถ้าอยู่กลางแจ้งบนจุดสูงระหว่าง thunder
- **เทสจริง**: /weather thunder + /summon lightning_bolt ที่บอท วัดเลือดที่เสีย

## 7. จมน้ำ
| ค่า | แหล่ง |
|---|---|
| ลมหายใจ 15 วิ | W Water / W Respiration |
| ฟื้นลม 1 ฟอง ต่อ 4 ticks (0.2 วิ) เมื่อขึ้นผิวน้ำหรืออยู่ใน bubble column | W Water |
| ดาเมจจมน้ำ/ต่อวินาที | `[ไม่แน่ใจ]` |

- **อาการ**: `bot.oxygenLevel` ลด
- **แก้**: ถ้า oxygen <=5 ฟอง ว่ายขึ้นทันที; ใช้ Respiration/Water Breathing; bubble column (soul sand/magma) เติมลม
- **ตัดสินผล**: ผิดถ้าลมหมดและยังอยู่ใต้น้ำ >1 วิ; ถูกถ้าขึ้นผิวน้ำก่อนเหลือ 3 ฟอง
- **เทสจริง**: จมใต้น้ำนับเวลาถึงดาเมจแรก (คาด 15 วิ) และเวลาเติมกลับ (คาด ~3 วิ ต่อ 15 ฟอง? `[ไม่แน่ใจ]`)

## 8. ตกจากที่สูง / Void
| ค่า | แหล่ง |
|---|---|
| ตกเกิน 3 บล็อก เริ่มเสียเลือด ~1HP ต่อบล็อกที่เกิน | W Damage |
| ต้องตก >=23.5 บล็อกถึงจะตาย (เลือดเต็ม ไม่มีเกราะ) | W Damage |
| Void: Java Overworld ต่ำกว่า Y=-128 เสีย 4HP ต่อ 0.5 วิ ทะลุเกราะ | W Void |
| เรือหยุดดาเมจตกให้ตัวเองและคนบนเรือ; น้ำ/lily/เรือช่วยได้ | W Boat, W Tutorial:Breaking_a_fall |

- **แก้**: ห้ามขุดลงตรงๆ; ขุดบันได/เอียง; มี water bucket ฉุกเฉิน (clutch) ถ้าจะตก >10 บล็อก; อย่าเดินใกล้ขอบ bedrock/void (ใน Overworld bedrock ที่ Y=-64 กันไว้)
- **ตัดสินผล**: ผิดถ้าตกจาก >3 บล็อกโดยไม่ได้ตั้งใจ; ถูกถ้าใช้น้ำลดตก (ดาเมจ 0)
- **เทสจริง**: ปล่อยบอทตกที่ 4, 10, 20 บล็อก เทียบเลือดที่เสีย

## 9. บล็อกตก
| ค่า | แหล่ง |
|---|---|
| Anvil: 2HP ต่อบล็อกหลังบล็อกแรก, สูงสุด 40HP | W Anvil |
| Pointed dripstone ตก: หลัง 2 บล็อก, 1HP x (จำนวน ขั้นต่ำนับเป็น 6) ต่อบล็อกที่ตก, สูงสุด 40; ตัวอย่าง 4 บล็อก = 18HP | W Pointed_Dripstone |
| Sand/gravel ตกทับหัว = ติดขาดอากาศ 1HP ต่อ 0.5 วิ จนขุดออก | W Gravel, W Damage |
| ดาเมจเฉพาะตอนตกลงมาถึง ไม่โดนระหว่างลอยอากาศ | W Falling_Block |

- **แก้**: ขุดใต้ sand/gravel ให้ตั้งไฟฉาย/ตั้งบล็อกรองรับก่อน; เดินใต้ stalactite ให้เร็ว/ใช้โล่ `[ไม่แน่ใจ]` ผลของโล่ต่อ dripstone; ติดใน gravel -> ขุดเหนือหัวทันที
- **ตัดสินผล**: ผิดถ้าขุดใต้คอลัมน์ gravel โดยไม่เตรียมทางหนี; ผิดถ้าฝังอยู่ >2 วิ แล้วไม่ขุด
- **เทสจริง**: วาง gravel ลอย 5 บล็อกเหนือบอท ดูว่าบอทขุดออกไหม

## 10. ถ้ำ/ Cave-in / ลาวา
- **อาการ**: ได้ยิน lava, แสง 0, เสียงน้ำไหล, เห็นแสงสีส้ม
- **แก้**: ขุดโดยไม่ยืนใต้ sand/gravel/lava; ปิดลาวาด้วยบล็อก/น้ำ(เปลี่ยนเป็น cobble/obsidian); ห้ามขุดบล็อกที่อยู่เหนือหัวถ้าเห็นลาวา/น้ำเกาะ; ติดไฟ -> น้ำ
- **ตัวเลข**: ดู 5, 9 (lava 4HP/0.5วิ, ติดไฟ 15 วิ)
- **ตัดสินผล**: ผิดถ้าขุดเข้าช่องที่ block ถัดไปคือ lava โดยไม่ตรวจก่อน (lab กำหนด: ตรวจ 4 ทิศ+บน/ล่างก่อนขุดทุกบล็อกใต้ Y=0 `[กฎ lab]`)
- **เทสจริง**: ซ่อน lava หลังบล็อกแล้วดูว่าบอทตรวจก่อนขุดไหม

## 11. Deep Dark / Warden
| ค่า | แหล่ง |
|---|---|
| shrieker ธรรมชาติ: +1 warning ต่อครั้ง สูงสุด 4; ถึง 4 -> ลอง spawn warden | W Sculk_Shrieker |
| warning ลด 1 ทุก 12000 ticks (10 นาที) ถ้าไม่เปิด | W Sculk_Shrieker |
| Darkness 12 วิ รัศมี 40 หลัง shrieker ร้องจบ | W Sculk_Shrieker |
| Sculk sensor จับสั่นสะเทือน 8 บล็อก; sneak (ไม่ตี) ไม่ถูกจับ; ขนแกะบัง | W Warden / W Sculk_Sensor `[ผ่านผลค้นหา]` |
| Warden ให้ Darkness 13 วิ ทุก 6 วิ รัศมี 20 | W Warden |

- **อาการ**: Darkness effect, เสียงหัวใจ, shrieker ทำงาน
- **แก้**: sneak ตลอด, ปูขนแกะ, ห้ามเหยียบ/แตะ shrieker, ห้ามวิ่ง/กระโดด/ทุบบล็อกเสียงดัง; ถ้า warden โผล่ -> หนีขึ้นผิวไม่สู้ (ความเสียหายของ warden: `[ไม่แน่ใจ]`)
- **ตัดสินผล**: ผิดถ้าเข้า Deep Dark แล้ววิ่ง; ผิดถ้า warning >=3 แล้วยังเหยียบ shrieker อีก; ถูกถ้าออกพื้นที่ภายใน 30 วิหลัง warning=4
- **เทสจริง**: /place ancient city ใช้บอท sneak เดินดู warning ด้วย /data (เซ็นเซอร์)

## 12. กลางคืน / หลงทาง / Phantom
| ค่า | แหล่ง |
|---|---|
| วัน 20 นาที; กลางคืนเริ่ม tick 13000 (~10:50 นาที) | W Daylight_cycle |
| มอนสเตอร์ spawn ที่ sky light <=7 และ block light 0; แจ้งชัดสุด tick 13188 (ฟ้าโปร่ง) | W Daylight_cycle |
| Phantom: Time Since Last Rest >=72000 ticks (3 วันเกม / 1 ชม.จริง) | W Insomnia, W Phantom |
| ลอง spawn ทุก 1-2 นาที, ต้องกลางคืน/พายุ, เหนือระดับน้ำทะเล, มองเห็นฟ้า | W Phantom |
| reset เมื่อนอนบนเตียงหรือตาย | W Phantom |

- **แก้**: ก่อน tick ~12500 วางเตียง/นอน (ต้องนอนได้ทุกคืน?) หรือสร้างหลังคาและอยู่ใต้ดิน; ตั้ง spawn point (เตียง); วางคบไฟเป็นแนวกลับ/ทำ waypoint (ฐาน)
- **ตัดสินผล**: ผิดถ้า tick 13000-23000 อยู่กลางแจ้งไม่มีเกราะ/อาวุธ; ผิดถ้า TimeSinceRest >72000 แล้วยังอยู่ผิวดินตอนกลางคืน
- **เทสจริง**: /time set 13000, นับมอนสเตอร์รอบบอท; เร่ง `statistic time_since_rest` เทียบ 72000

## 13. Raid
- ได้ Bad Omen (ฆ่าหัวหน้า pillager) 100 นาที จาก ominous bottle [W Ominous_Bottle]; เข้าหมู่บ้านด้วย Bad Omen -> Raid Omen -> raid หลัง 30 วิ [W Raid]; ชนะ -> Hero of the Village 40 นาที (2 วันเกม) [W Raid]
- **แก้**: ถ้าไม่ต้องการ raid ไม่ดื่ม/ออกห่างจากหมู่บ้านก่อนฆ่า captain; ถ้ารับ raid เตรียมเกราะ+อาวุธ+ที่หลบ
- **ตัดสินผล**: ผิดถ้าเข้าหมู่บ้านทั้งที่ Bad Omen โดยไม่เตรียม; wave/ศัตรูต่อ wave `[ไม่แน่ใจ]`
- **เทสจริง**: /effect give bad_omen แล้วเดินเข้าหมู่บ้าน จับเวลา 30 วิ

## 14. กับดักโครงสร้าง
| โครงสร้าง | กับดัก | แหล่ง |
|---|---|---|
| Desert pyramid | แผ่นกดหินใต้ blue terracotta กลาง -> TNT 3x3 (9 ก้อน) ระเบิดทำลายหีบ/ฆ่าได้ | W Desert_Pyramid |
| Jungle temple | tripwire 2 เส้น ต่อ dispenser (ลูกศร 2-14) ซ่อนหลังเถาวัลย์; ตัดสาย (ไม่ใช้ shears) ก็ยิง | W Jungle_Pyramid |
| Trial chamber | trial spawner เกิดมอนสเตอร์เป็น wave; หลังชนะพัก 30 นาที; ถ้ามี Bad/Trial Omen กลายเป็น ominous (ของดีกว่า, 30% ominous key) | W Trial_Spawner, W Ominous_Trial |
| Ancient city | ดู หัวข้อ 11 | W Ancient_City |
| Breeze (spawner) | spawn interval 20 ticks, 2 ตัว +1 ต่อผู้เล่น | W Trial_Spawner |

- **แก้**: Desert: ขุดแผ่นกด/ทรายใต้ก่อนแตะ (แผ่นอยู่ใต้ blue terracotta); Jungle: ตัดสายด้วย shears หรือเดินย่อผ่านไม่ได้ -> ตัดด้วย shears; Trial: ตอน Bad Omen อย่าเข้า ถ้ายังไม่พร้อม
- **ตัดสินผล**: ผิดถ้าเหยียบ blue terracotta กลางพีระมิด; ผิดถ้าตัด tripwire ด้วยอย่างอื่นนอกจาก shears; ผิดถ้าเข้า trial chamber ด้วย Bad Omen โดยไม่ตั้งใจ
- **เทสจริง**: สร้าง fixture ทั้ง 3 ใน world ทดสอบ

## 15. เรือ / น้ำแข็ง
| ค่า | แหล่ง |
|---|---|
| เรือบน blue ice สูงสุด 72.73 m/s (ice/packed 40 m/s) | W Blue_Ice |
| เรือชน lily pad: lily pad แตก เรือไม่พัง (เวอร์ชันใหม่) ; ชนหลาย lily pad ในเวลาสั้นเรือพัง | W Boat, W Lily_Pad |
| เรือกันดาเมจตก | W Boat |

- **แก้**: บนน้ำแข็งเร็ว อย่าชนกำแพง/เลี้ยวหักโค้ง; ลงเรือก่อนใกล้ lava/cliff
- **ตัดสินผล**: ผิดถ้าขับเรือบน blue ice เข้าหาสิ่งกีดขวางโดยไม่ลดความเร็ว `[กฎ lab]`; ดาเมจชนเรือ `[ไม่แน่ใจ]`
- **เทสจริง**: ขับบน blue ice 100 บล็อก วัดความเร็ว

## 16. ไอเท็มหาย / ตาย
| ค่า | แหล่ง |
|---|---|
| ไอเท็มหายหลัง 6000 ticks (5 นาที) เฉพาะ chunk ที่โหลด/entity-ticking; ออกนอกระยะ = ตัวนับหยุด | W Item_(entity) |
| ตาย: ของทั้งหมดตก (ยกเว้น Curse of Vanishing); XP ตก level x7 สูงสุด 100 | W Death |
| Nether star จาก Wither หายใน 10 นาที | W Death / W Nether_star |
| Recovery compass ชี้ตำแหน่งตายล่าสุด (มิติเดียวกัน) | W Recovery_Compass |

- **แก้**: จดพิกัดตาย (`bot.entity.position` ก่อนตาย), กลับทันที, ห้ามไปไกลเกิน simulation distance (ตัวนับหยุด แต่ไม่รีเซ็ต -- `[ไม่แน่ใจ]`); ตายใน lava -> เตรียมน้ำ/กันไฟ ก่อนเก็บ; ตายใน void = ของหายหมด
- **ตัดสินผล**: ถูกถ้ากลับถึงจุดตายภายใน 240 วิ (เหลือ 60 วิ safety); ผิดถ้าใช้เวลา >300 วิ เพราะของหาย
- **เทสจริง**: /kill แล้วจับเวลา drop item หายด้วย /data

## 17. ความทนทาน (Durability)
| ค่า | แหล่ง |
|---|---|
| ขวาน/พิกเกิ้ลเหล็ก 250 ครั้ง, ไดมอนด์ 1561 | W Iron_Pickaxe, W Diamond_Pickaxe |
| เกราะเสียทนทาน 1 ต่อดาเมจ 4HP (ปัดลง ต่ำสุด 1) | W Durability |
| เกราะเหล็ก: หมวก 165, อก 240, กางเกง 225, รองเท้า 195 | W Durability |
| เกราะไดมอนด์: 363 / 528 / 495 / 429 | W Durability |
| Unbreaking: โอกาสเสียทนทาน 1/(1+level) | W Durability |

- **อาการ**: durability <10% ของ max
- **แก้**: ซ่อมด้วย anvil/grindstone/Mending, สลับเครื่องมือสำรอง, ไม่ใช้ของใกล้พังตีบอส
- **ตัดสินผล**: ผิดถ้าใช้เครื่องมือ durability <=5 ในงานเสี่ยง (เช่น อยู่ใน cave ลึก) และไม่มีสำรอง `[กฎ lab]`; ถูกถ้าเปลี่ยนก่อนพัง
- **เทสจริง**: ใช้พิกเกิ้ลเหล็กขุดหิน นับจำนวนครั้งก่อนพัง (คาด 250)

---
## ตารางดับเพลิงด่วน (bot reflex priority)
1. ติดไฟ/อยู่ใน lava -> น้ำ/ออกทันที  2. จมน้ำ oxygen<=5 -> ขึ้นผิว  3. ถูกฝังบล็อก -> ขุดออก  4. เลือด<=6 -> หนี+กิน  5. food<=6 -> หาอาหาร  6. กลางคืนมาถึง (13000) -> เข้าที่หลบ

## ข้อควรระวังด้านแหล่งข้อมูล
ผลลัพธ์ทั้งหมดมาจาก snippet ของ minecraft.wiki; หน้า wiki ที่มี `[ไม่แน่ใจ]` ต้องวัดจริง ห้ามใช้เป็นกฎตายตัวจนกว่าจะเทส
