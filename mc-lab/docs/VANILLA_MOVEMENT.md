# VANILLA_MOVEMENT — การเคลื่อนที่/การตก/การเอาตัวรอดเชิงกายภาพ (Java วานิลลา)

> ขอบเขต: Java Edition วานิลลาเท่านั้น (ไม่มีมอด/ไคลเอนต์โกง) · เป้า: แปลงเป็นกฎให้บอต mineflayer
> แหล่ง: minecraft.wiki (ดึงผ่าน WebSearch เพราะ proxy บล็อกการเปิดหน้าโดยตรง → ได้เป็น "ข้อความย่อ" ไม่ใช่ทั้งหน้า)
> **ยังไม่ได้ดูวิดีโอ YouTube** (youtube.com ถูกบล็อก) → หมวด "เทคนิคจาก YouTube" รอ jing ส่งลิงก์/บทความ
> ตัวเลขวิกิส่วนใหญ่เป็นของ Java ปัจจุบัน ณ วันที่ค้น — ยังไม่ได้ยืนยันกับ 26.x ทีละค่า → ถือเป็น **ยืนยันระดับเอกสาร** เท่านั้น
> โค้ดคู่กัน: `lib/fall_safety.mjs` (ฟังก์ชันล้วน + เทส = ยืนยันระดับจำลอง)

---
## 1. ความเร็ว/การกระโดด (ตัวเลขฐาน)

| การเคลื่อนที่ | ค่า | แหล่ง |
|---|---|---|
| เดิน | 4.317 บล็อก/วิ | [Walking](https://minecraft.wiki/w/Walking) |
| วิ่ง (sprint) | 5.612 บล็อก/วิ (+30%) | [Sprinting](https://minecraft.wiki/w/Sprinting) |
| วิ่ง+กระโดดต่อเนื่อง | เฉลี่ย 7.127 บล็อก/วิ (เร็วสุดที่ไม่มียา) | [Sprinting](https://minecraft.wiki/w/Sprinting) |
| ย่อ (sneak) | ~1.3 บล็อก/วิ (ทแยง 2 ปุ่ม ~1.8) | [Sneaking](https://minecraft.wiki/w/Sneaking) |
| ว่ายแบบวิ่ง (sprint-swim) | 3.918 บล็อก/วิ · ลอดช่อง 1 บล็อกได้ | [Swimming](https://minecraft.wiki/w/Swimming) |
| ปีนบันได/เถาวัลย์ ขึ้น / ลง | 2.35 / 3.0 บล็อก/วิ | [Transportation](https://minecraft.wiki/w/Transportation) |
| เดินบน soul sand | 2.508 บล็อก/วิ | [Transportation](https://minecraft.wiki/w/Transportation) |
| กระโดดสูงสุด | ~1.2522 บล็อก (ข้ามบล็อกเดียวได้ ข้าม 2 ไม่ได้) | [Jumping](https://minecraft.wiki/w/Jumping) |
| ระยะกระโดดไกลสุดตอนวิ่ง | ~4.225 บล็อก → ข้ามช่องว่าง 4 บล็อก ("quad") ได้ | [Sprinting](https://minecraft.wiki/w/Sprinting) · [Glossary](https://minecraft.wiki/w/Tutorial:Glossary) |
| วิ่งกระโดดใต้เพดาน 2 บล็อก | ระยะกระโดดเพิ่มเป็น ~5 บล็อก | [Sprinting](https://minecraft.wiki/w/Sprinting) |
| เงื่อนไขวิ่งได้ | หลอดหิว > 6 (≤6 วิ่งไม่ได้) · ติด Blindness วิ่งไม่ได้ | [Sprinting](https://minecraft.wiki/w/Sprinting) |

**ค่าฟิสิกส์ต่อ tick (ใช้ในโค้ดจำลอง):** แรงโน้มถ่วง 0.08 บล็อก/tick² · แรงต้านแนวตั้ง ×0.98/tick → ความเร็วตกปลายทาง ≈3.92 บล็อก/tick (≈78 บล็อก/วิ) — ค่าเดียวกับที่ฟิสิกส์ของ mineflayer (prismarine-physics) ใช้ [ไม่แน่ใจ: ยังไม่ได้ยืนยันกับหน้าวิกิในรอบนี้]

**บอตควรรู้:**
- ช่องว่าง ≤1 บล็อก → เดินข้ามได้ · 2–3 บล็อก → ต้องวิ่งกระโดด · 4 บล็อก → ต้องวิ่งกระโดดจากขอบพอดี (เสี่ยง) · ≥5 → ห้ามกระโดด ให้ต่อสะพาน
- อาหาร ≤6 → วิ่งไม่ได้ → กระโดดข้าม 3–4 บล็อกจะพลาด → **กินก่อนค่อยกระโดด**

---
## 2. การตก (Fall damage)

| กฎ | รายละเอียด | แหล่ง |
|---|---|---|
| ระยะปลอดภัย | ตก ≤3 บล็อก ไม่เสียเลือด | [Damage](https://minecraft.wiki/w/Damage#Fall_damage) |
| สูตร | ดาเมจ ≈ (ระยะตก − 3) HP (1 HP = ครึ่งหัวใจ) · คิดจาก "ระยะ Y ที่ตก" ไม่ใช่ความเร็ว | [Damage](https://minecraft.wiki/w/Damage) — การปัดเศษ [ไม่แน่ใจ] |
| เกราะธรรมดา | **ไม่ลด**ดาเมจตก · Protection/Feather Falling ลดได้ | [Damage](https://minecraft.wiki/w/Damage) |
| Feather Falling | ลด 12%/เลเวล สูงสุด 48% (IV) | [Feather Falling](https://minecraft.wiki/w/Feather_Falling) |
| Slow Falling | ไม่เสียเลือดเลย · ถ้ายาหมดกลางอากาศ นับระยะตั้งแต่จุดที่ยาหมด | [Slow Falling](https://minecraft.wiki/w/Slow_Falling) |
| ตกใส่หินย้อย (pointed dripstone ปลายตั้ง) | ระยะตก ×2 → อันตรายมาก | [Pointed Dripstone](https://minecraft.wiki/w/Pointed_Dripstone) |

ตัวอย่าง (เลือดเต็ม 20 HP, ไม่มีเอนชานต์): ตก 4 บล็อก = 1 HP · 10 = 7 · 13 = 10 (ครึ่งหลอด) · **23 บล็อก = 20 HP = ตาย** · ตกหินย้อย 12 บล็อก ≈ ตาย

**บอตควร:**
- ก่อนก้าวลง/กระโดด: คำนวณดาเมจ = ระยะตก − 3 HP ([Damage](https://minecraft.wiki/w/Damage#Fall_damage)) ถ้าดาเมจ ≥ HP−4 → ห้ามลง ให้หาทางอ้อม/ลงเป็นขั้น
- ตกแล้วดาเมจคาด > 0 → เริ่ม clutch ตามลำดับ `chooseClutch()` (§2.2) ก่อนถึงพื้น
- ใต้ตัวมี pointed dripstone ปลายตั้ง → ใช้ระยะตก ×2 ในการคำนวณ ([Pointed Dripstone](https://minecraft.wiki/w/Pointed_Dripstone))
- มี Slow Falling → ข้ามการ clutch แต่ถ้ายาเหลือ <5 วิ ให้ถือว่าไม่มี (เกณฑ์แล็บ) [คิดเอง]
- ไม่เชื่อ armor ลดดาเมจตก; ถ้าต้องลดจริงให้ใส่รองเท้า Feather Falling (12%/เลเวล, [Feather Falling](https://minecraft.wiki/w/Feather_Falling))

**ตัดสินผล:** ภายใน 1 วิหลังแตะพื้น เทียบ HP ก่อน/หลัง — ถ้า HP ลด > ดาเมจที่คำนวณไว้ +1 → ถือว่าสูตร/เงื่อนไขผิด บันทึกระยะตกจริงแล้วเพิ่มส่วนเผื่อ (เกณฑ์แล็บ)

### 2.1 พื้นที่ลด/กันดาเมจตก

| พื้น/สิ่งที่ตกใส่ | ผล | หมายเหตุ | แหล่ง |
|---|---|---|---|
| น้ำ (1 บล็อกก็พอ) | 0 | **ใช้ในนรกไม่ได้** (ระเหย) · เทใส่ใบไม้/บล็อกเต็มจะกลายเป็น waterlog | [Breaking a fall](https://minecraft.wiki/w/Tutorial:Breaking_a_fall) |
| Powder snow | 0 (รีเซ็ตระยะตก) | ใช้ในนรกได้ | [Powder Snow](https://minecraft.wiki/w/Powder_Snow) |
| ใยแมงมุม (cobweb) | 0 | | [Cobweb](https://minecraft.wiki/w/Cobweb) |
| Slime block | 0 แต่เด้ง · กด sneak ตอนลงจะไม่เด้ง | | [Breaking a fall](https://minecraft.wiki/w/Tutorial:Breaking_a_fall) |
| บันได/เถาวัลย์ (เกาะได้) | 0 (รีเซ็ตระยะตก) | ต้องมีผนังให้วาง | [Breaking a fall](https://minecraft.wiki/w/Tutorial:Breaking_a_fall) |
| Scaffolding + sneak | 0 | | [Scaffolding](https://minecraft.wiki/w/Scaffolding) |
| เรือ (วางแล้วขึ้นก่อนถึงพื้น) | 0 | ต้องจังหวะเป๊ะ | [Breaking a fall](https://minecraft.wiki/w/Tutorial:Breaking_a_fall) |
| Sweet berry bush | 0 | | [Breaking a fall](https://minecraft.wiki/w/Tutorial:Breaking_a_fall) |
| Twisting/weeping vines (นรก) | 0 | ใช้แทนน้ำในนรก | [Breaking a fall](https://minecraft.wiki/w/Tutorial:Breaking_a_fall) |
| Hay bale / Honey block | เหลือ 20% (ลด 80%) | ตกจาก 100 บล็อกก็ยังรอดได้ | [Hay Bale](https://minecraft.wiki/w/Hay_Bale) · [Honey Block](https://minecraft.wiki/w/Honey_Block) |
| เตียง | ระยะตก ×0.5 | | [Bed](https://minecraft.wiki/w/Bed) |
| ไข่มุก (ender pearl) | ตัดดาเมจตกทิ้ง เหลือดาเมจไข่มุก ~5 HP (2.5 หัวใจ) | ปาเร็วเกินไป = ยังตกตาย | [Breaking a fall](https://minecraft.wiki/w/Tutorial:Breaking_a_fall) |
| โดนลูกลม (wind charge) | รีเซ็ตระยะตก | ปาลูกเดียวพุ่งได้สูงสุด ~11 บล็อก | [Wind Charge](https://minecraft.wiki/w/Wind_Charge) |
| ทุบกระบอง (mace smash) โดนเป้า | รีเซ็ตระยะตกเป็นจุดที่ตี → ไม่เสียเลือดตก | ต้องตกมา ≥1.5 บล็อก | [Mace](https://minecraft.wiki/w/Mace) |

**บอตควร:**
- เลือกพื้นลดดาเมจตามมิติด้วย `chooseClutch()` (นรกห้ามน้ำ — ใช้ powder snow/เถาวัลย์นรก, [Breaking a fall](https://minecraft.wiki/w/Tutorial:Breaking_a_fall))
- เตรียมของ clutch ไว้ในช่อง hotbar ล่วงหน้า (ถังน้ำ 1 ช่อง) เมื่อยืนที่สูง >3 บล็อก เพื่อไม่เสีย tick สลับ [คิดเอง]
- ลงบน hay/honey ได้เหลือดาเมจ 20% → ใช้เมื่อสูงมาก และไม่มีน้ำ ([Hay Bale](https://minecraft.wiki/w/Hay_Bale))
- วางน้ำใส่ใบไม้/บล็อกเต็มไม่ได้ผล → มองหาตำแหน่งพื้นว่างก่อนวางน้ำ ถ้าไม่ใช่ให้ใช้ของสำรอง ([Breaking a fall](https://minecraft.wiki/w/Tutorial:Breaking_a_fall))
- เสร็จแล้วตักน้ำ/เก็บของคืนทุกครั้ง

**ตัดสินผล:** หลังลงพื้นภายใน 1 วิ: HP ไม่ลด = สำเร็จ; ลด = ล้มเหลว นับ % สำเร็จต่อชนิดของ clutch ถ้า <70% ใน 10 ครั้ง ให้ปิดชนิดนั้น (เกณฑ์แล็บ)

### 2.2 Clutch / MLG — วิธีทำ (แปลงเป็นขั้นตอนบอต)

**MLG ถังน้ำ** (ตามวิกิ: ถือถังน้ำ แล้ววางน้ำ "ก่อนถึงพื้นนิดเดียว" จากนั้นตักน้ำคืน)
1. รู้ตัวว่ากำลังตก (vy < 0, ไม่ได้อยู่ในน้ำ/บันได) และคาดว่าระยะตก > 3 + เผื่อ
2. สลับช่องไปถังน้ำทันที (สลับช่องใช้ 1 tick)
3. มองลงตรง (pitch −90° · ใน mineflayer `bot.look(yaw, -Math.PI/2)`)
4. **เริ่มกดวางทุก tick ตั้งแต่พื้นเข้ามาอยู่ในระยะเอื้อม** (ระยะวางบล็อกโหมดเอาชีวิตรอด ~4.5 บล็อก [ไม่แน่ใจ: เลขจาก attribute block_interaction_range ต้องยืนยันใน 26.x])
   - เหตุผล: ตกเร็วสุด ~3.9 บล็อก/tick → ถ้ารอให้พื้นใกล้มาก อาจข้ามช่วงที่วางได้ไปทั้ง tick → **ต้องลองเร็ว + ลองซ้ำทุก tick** (ดู `lib/fall_safety.mjs`)
   - **ผลจำลอง (`clutchWindow`)**: ตก 10 บล็อก → วางได้ 3 tick · ตก 30/100/250 → วางได้แค่ **1 tick** · ความสูง 4–300 บล็อก (ทุก 0.5) มี **53/593 ค่า (~9%) ที่ได้ 0 tick** เพราะความเร็ว ~3.9 บล็อก/tick มากกว่าช่วงเอื้อม 4.5 − 1.62 = 2.88 บล็อก
   - ข้อสรุป: บอตต้องสลับช่อง+มองลง **ไว้ก่อน** และวางใน tick แรกที่เข้าระยะ ห้ามช้าแม้ 1 tick · ผู้เล่นจริงทำได้บ่อยกว่านี้หรือไม่ (เซิร์ฟผ่อนระยะ/เช็กตำแหน่งที่ไคลเอนต์) = [ไม่แน่ใจ] → **ต้องเทสบนเซิร์ฟจริงวันศุกร์** (ตกจาก 30/60/100/150 บล็อก อย่างละ 10 ครั้ง)
   - ถ้าคาดว่าได้ 0 tick → ใช้ทางสำรอง: ไข่มุก/ฟาง/ปรับความสูงด้วยการบังคับตัวไปลงบนพื้นที่สูงหรือต่ำกว่าเดิม
5. ถึงพื้นแล้ว → ตักน้ำคืน (ใช้ถังเปล่ากับน้ำ)
- ห้ามใช้: ในนรก (น้ำระเหย) · พื้นข้างล่างเป็นใบไม้ (waterlog แทน) [Breaking a fall](https://minecraft.wiki/w/Tutorial:Breaking_a_fall)

**ตกขณะอยู่ชิดกำแพง/บล็อก** (ตามที่ jing ถาม)
- มีผนังอยู่ในระยะเอื้อม → **วางบันไดบนหน้าข้างของผนัง** แล้วขยับเข้าหาให้เกาะ → ระยะตกรีเซ็ต (ladder clutch) [Breaking a fall](https://minecraft.wiki/w/Tutorial:Breaking_a_fall)
- มีถังน้ำ → วางน้ำบนหน้าข้างของผนังก็ได้ น้ำจะไหลลงมาเป็นม่าน แล้วตกผ่านน้ำไหล [ไม่แน่ใจ: วิกิรอบนี้ไม่ได้ยืนยันว่าน้ำไหลกันดาเมจทุกกรณี — รอทดสอบ]
- เป็นเถาวัลย์/บันไดอยู่แล้ว → ขยับเข้าหาให้เกาะ
- ไม่มีของเลย และตก >23 บล็อก → ลองหาน้ำ/ใบไม้/powder snow ใต้ตัว โดยบังคับตัวกลางอากาศ (ดูข้อ 4)

**เลือก clutch ตามมิติ/ของในตัว (ลำดับ):** Overworld/End: ถังน้ำ > ฟาง > slime > เรือ > บันได (ถ้ามีผนัง) > ใยแมงมุม > ไข่มุก · นรก: powder snow > เถาวัลย์นรก > ฟาง/slime > ไข่มุก (**ห้ามใช้ถังน้ำ**) — โค้ด: `chooseClutch()`

---
## 3. ขอบ/รอบตัว/ติดบล็อก

| สถานการณ์ | ทำอย่างไร | แหล่ง |
|---|---|---|
| เดินใกล้ขอบหน้าผา | ถือ sneak → ไม่ตกขอบ | [Sneaking](https://minecraft.wiki/w/Sneaking) |
| ต่อสะพานข้ามช่อง | ย่อ + เดินถอยหลัง + มองลง แล้ววางบล็อกที่หน้าข้างของขอบ (sneak bridging) · สปีดบริดจ์/god bridge เป็นเทคนิคเซิร์ฟแข่ง (ไม่จำเป็นต่อบอต) | [Glossary](https://minecraft.wiki/w/Tutorial:Glossary) · [Tips and tricks](https://minecraft.wiki/w/Tutorial:Tips_and_tricks) |
| ขึ้นที่สูง (ต่อเสา) | กระโดด แล้ววางบล็อกใต้เท้าตอนลอย | [Pillar jumping](https://minecraft.wiki/w/Tutorial:Pillar_jumping) |
| ลงจากเสา | ขุดเสาตัวเองลงได้ (รู้ว่าข้างล่างไม่มีอะไร) — **เป็นกรณีเดียว**ที่ขุดลงตรงได้ | [Pillar jumping](https://minecraft.wiki/w/Tutorial:Pillar_jumping) |
| ขุดลงทั่วไป | ห้ามขุดลงตรง → ขุดเป็นขั้นบันได | [Things not to do](https://minecraft.wiki/w/Tutorial:Things_not_to_do) |
| ทราย/กรวดร่วงทับหัว | หายใจไม่ออก (suffocation) · วางคบเพลิงใต้ช่องที่ทรายจะตก → ทรายแตกเป็นไอเทม | [Falling Block](https://minecraft.wiki/w/Falling_Block) · [Sand](https://minecraft.wiki/w/Sand) |
| ช่องสูง 1 บล็อก | คลานหรือว่ายลอดได้ | [Swimming](https://minecraft.wiki/w/Swimming) |
| Slime block | sneak ตอนลง = ไม่เด้ง | [Jumping](https://minecraft.wiki/w/Jumping) |

**บอตควร:**
- ยืนขอบสูง >3 บล็อก ที่ต้องอยู่นาน → sneak ค้าง ([Sneaking](https://minecraft.wiki/w/Sneaking))
- ต่อสะพาน: sneak + ถอยหลัง + มองลง วางที่หน้าข้างของบล็อกขอบ ([Glossary](https://minecraft.wiki/w/Tutorial:Glossary)) ช่องว่าง ≥5 บล็อกเท่านั้นที่ใช้วิธีนี้ (ตาม §1)
- ขุดลงต้องเป็นขั้นบันได; ขุดตรงได้เฉพาะลงเสาที่ตัวเองสร้าง ([Things not to do](https://minecraft.wiki/w/Tutorial:Things_not_to_do))
- ขุดใต้ทราย/กรวดเหนือหัว → ถอยหรือวางคบเพลิงก่อน ([Falling Block](https://minecraft.wiki/w/Falling_Block))
- ก่อนขุดทะลุพื้น/ผนังที่ไม่รู้ว่าข้างหลังมีอะไร: เจาะช่องมอง 1 บล็อก แล้วเช็กลาวา/น้ำ/ช่องว่าง [คิดเอง]
- ติดบล็อก (pathfinder ไม่ขยับ): ถ้าตำแหน่งขยับ <0.5 บล็อกใน 5 วิ → กระโดด 1 ครั้ง ถ้ายังติดให้ขุดบล็อกหน้า/บน หรือวางบล็อกขึ้นเสา [คิดเอง]

**ตัดสินผล:** ภายใน 10 วิ ตำแหน่งต้องเคลื่อน ≥2 บล็อกไปทางเป้า และไม่ตก/ไม่เสีย HP; ไม่ผ่าน 2 รอบ → วางแผนเส้นทางใหม่ (เกณฑ์แล็บ)

---
## 4. Parkour / Dropper / มุมกล้อง

| คำศัพท์ | ความหมาย | แหล่ง |
|---|---|---|
| Sprint-jump | วิ่งแล้วกระโดดต่อเนื่อง = เร็วสุดที่ไม่มียา | [Glossary](https://minecraft.wiki/w/Tutorial:Glossary) |
| Quad | กระโดดข้ามช่อง 4 บล็อก = ไกลสุดที่ไม่มียา | [Glossary](https://minecraft.wiki/w/Tutorial:Glossary) |
| Neo | กระโดดอ้อมเสาหรือกำแพง (กลางอากาศเปลี่ยนทิศ) | [Glossary](https://minecraft.wiki/w/Tutorial:Glossary) |
| Headhitter | กระโดดชนเพดานซ้ำ ๆ → เร็วขึ้น และลด knockback แนวตั้ง | [Glossary](https://minecraft.wiki/w/Tutorial:Glossary) |
| Ladder jump | กระโดดจากหรือไปบันได · ปีนโดยกดกระโดดขณะชิดบันได | [Glossary](https://minecraft.wiki/w/Tutorial:Glossary) |
| Ice + เพดานต่ำ | วิ่งกระโดดบนน้ำแข็งใต้เพดาน 2 บล็อก ได้ ~16 บล็อก/วิ | [Transportation](https://minecraft.wiki/w/Transportation) |

- **Dropper** (แมปตกจากที่สูงลงน้ำ): ตกเร็วสุด ~78 บล็อก/วิ → มองลง แล้วใช้ WASD บังคับตัวกลางอากาศให้ตรงน้ำ · ความเร็วที่บังคับได้กลางอากาศ [ไม่แน่ใจ — รอวิดีโอ/บทความ]
- **มุมกล้อง** (ค่าเริ่มต้นสำหรับบอต ยังไม่ได้ยืนยันจากวิดีโอ): วางบล็อกใต้เท้าหรือ clutch = pitch −90° · sneak bridge = มองลงเกือบตรงไปทางหลัง [ไม่แน่ใจ: มุมจริงของผู้เล่น] · ต่อสู้ = เล็งที่ลำตัวหรือหัวเป้า

**บอตควร:**
- Sprint-jump ข้ามช่อง 2–3 บล็อก ต้องมีอาหาร >6 (§1); ช่อง 4 บล็อก (quad) ออกตัวจากขอบพอดี ([Sprinting](https://minecraft.wiki/w/Sprinting))
- ก่อนกระโดดข้ามช่อง: ตรวจ 3 อย่าง — อาหาร >6, ระยะวิ่งนำ ≥4 บล็อก [คิดเอง], ปลายทางสูงไม่เกินจุดออกตัว
- Dropper/ตกสูง: มองลง pitch −90° แล้วเดินแก้ตำแหน่งให้ตรงน้ำ; ถ้าไม่มั่นใจ air-control ให้ใช้ clutch มาตรฐาน (§2.2) แทน [คิดเอง]
- วางบล็อกใต้เท้า/clutch = pitch −90° (§4 ค่าเริ่มต้น); sneak bridge = มองลงเกือบตรงไปทางหลัง
- Headhitter/Neo/Ice ใช้เฉพาะเมื่อ jing สั่ง — ค่าเริ่มต้นห้ามเสี่ยง

**ตัดสินผล:** ถึงฝั่งตรงข้ามภายใน 3 วิหลังออกตัว = สำเร็จ; ตก/พลาด 2 ครั้งติด → เปลี่ยนเป็นต่อสะพาน (เกณฑ์แล็บ)

---
## 5. PvP — ส่วนที่เกี่ยวกับการเคลื่อนที่ (รายละเอียดเต็มอยู่ใน PVP_PLAYBOOK)

| เทคนิค | กลไก | แหล่ง |
|---|---|---|
| Cooldown | ต้องชาร์จ ≥84.8% ถึงจะได้คริ / sprint-knockback / sweep | [PvP (Java)](https://minecraft.wiki/w/Tutorial:PvP_(Java_Edition)) |
| คริ | ต้องกำลัง "ตก" (กระโดดแล้วตีตอนขาลง) + cooldown ≥84.8% | [PvP (Java)](https://minecraft.wiki/w/Tutorial:PvP_(Java_Edition)) |
| W-tap (sprint reset) | ตีแล้ววิ่งต่อใหม่ → ทุกฮิตได้ sprint-knockback | [PvP (Java)](https://minecraft.wiki/w/Tutorial:PvP_(Java_Edition)) |
| หลังตีโดน | ผู้ตีหยุดวิ่ง + ความเร็วแนวนอนเหลือ 60% | [Melee attack](https://minecraft.wiki/w/Melee_attack) |
| Circle strafe | กด A หรือ D ค้าง วนรอบคู่ต่อสู้ระหว่างคอมโบ | [PvP (Java)](https://minecraft.wiki/w/Tutorial:PvP_(Java_Edition)) |
| Crit-spam | กระโดดต่อเนื่องแล้วคริเป็นชุด | [PvP (Java)](https://minecraft.wiki/w/Tutorial:PvP_(Java_Edition)) |
| Mace smash | ตกมา ≥1.5 บล็อก · +4 HP/บล็อก (3 บล็อกแรก) · +2 HP/บล็อก (5 บล็อกถัดไป) · +1 HP/บล็อก (ที่เหลือ) · Density +0.5 HP/บล็อก/เลเวล · Wind Burst เด้งขึ้น 8 บล็อก/เลเวล | [Mace](https://minecraft.wiki/w/Mace) |
| ลูกลมใต้เท้า | พุ่งได้สูงสุด ~11 บล็อก ถ้าจังหวะถูก (ข้อมูลแล็บ: ปาใส่พื้นตอนยืนนิ่งแล้วไม่ลอย → ต้องกระโดดก่อน) | [Wind Charge](https://minecraft.wiki/w/Wind_Charge) |

**บอตควร:**
- คอมโบ: ตีเมื่อ cooldown ≥84.8% เท่านั้น ([PvP](https://minecraft.wiki/w/Tutorial:PvP_(Java_Edition))); ตีแล้วปล่อย sprint แล้วกดใหม่ (W-tap) ทุกฮิต
- คริ: กระโดดแล้วตีตอนขาลง (vy<0) พร้อม cooldown ≥84.8%
- Circle strafe: กด A หรือ D ค้างวนรอบเป้า สลับทิศทุก ~1–2 วิ เพื่อไม่ให้ถูกคาดเดา (เกณฑ์แล็บ) [คิดเอง]
- Mace smash: ใช้เมื่อตกมา ≥1.5 บล็อกและเป้าอยู่ใต้; ทุบแล้วไม่เสียเลือดตก ([Mace](https://minecraft.wiki/w/Mace)); ไม่มีความสูง → สลับกลับดาบ
- ลูกลมใต้เท้า: ต้องกระโดดก่อนปา (ข้อมูลแล็บ) แล้วค่อยทุบ

**ตัดสินผล:** ทุก 10 วิของการปะทะ นับฮิตที่ได้/ที่โดน — ถ้าอัตราได้:โดน <1:1 สองช่วงติด → ถอยออกกินหรือเปลี่ยนท่า (เกณฑ์แล็บ)

---
## 6. ตารางกฎสำหรับบอต (พร้อมโค้ด)

| สถานการณ์ | บอตทำ | เงื่อนไข/ตัวเลข | ตัดสินผลจาก | แหล่ง |
|---|---|---|---|---|
| ตกโดยไม่ตั้งใจ | `chooseClutch()` → สลับช่อง → มองลง → ลองวางทุก tick | ระยะตกคาด > 3 และดาเมจคาด ≥ HP−4 → บังคับ clutch | ภายใน 1 วิหลังลงพื้น: HP ลดหรือไม่ | §2 |
| จะกระโดดข้ามช่อง | `canJumpGap()` | ≤1 เดิน · 2–3 วิ่งกระโดด (อาหาร >6) · 4 เสี่ยง · ≥5 ต่อสะพาน | ถึงฝั่งหรือตก | §1 |
| ยืนขอบที่สูง >3 | sneak ค้าง | ความสูงขอบ > 3 | ไม่ตก | §3 |
| ลงจากที่สูง | ขุดเป็นขั้นบันได / ต่อบันได / ลงจากเสาตัวเอง | ห้ามขุดลงตรง ยกเว้นเสาตัวเอง | ไม่ตกลงหลุมหรือลาวา | §3 |
| ในนรก | ห้ามใช้ถังน้ำ clutch | dimension = nether | — | §2.1 |
| ใต้หินย้อยตั้ง | ห้ามกระโดดลง | ระยะตก ×2 | — | §2 |
| ทราย/กรวดเหนือหัวตอนขุด | วางคบเพลิงหรือถอยก่อน | บล็อกเหนือเป็น falling block | ไม่โดน suffocation | §3 |

---
## 7. เทคนิคจาก YouTube — **ยังว่าง (รอข้อมูล)**
- ยังดูไม่ได้ (youtube.com ถูกบล็อก) → jing ส่งบทความหรือลิงก์มา แล้วจะเติมหมวดนี้: MLG timing จริง · มุมกล้องตอน bridge · dropper air-control · PvP movement ของผู้เล่นเก่ง
- สิ่งที่จะเทียบ: ตัวเลขในวิดีโอกับวิกิ (ถ้าขัดกัน → ยึดวิกิ + จดว่าวิดีโอเป็นเวอร์ชันไหน)

## 8. ยังไม่ได้ verify
- ทุกค่าอ้างจากข้อความย่อของวิกิ ไม่ได้อ่านทั้งหน้า · การปัดเศษของสูตรตก · ระยะเอื้อมวางบล็อกใน 26.x · น้ำไหลกันตกได้ทุกกรณีหรือไม่ · air-control ตอนตก · มุมกล้องที่ผู้เล่นจริงใช้
- ไม่มีเซิร์ฟจริง → โค้ดยืนยันได้ระดับจำลองเท่านั้น
