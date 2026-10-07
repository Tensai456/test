# MOB_TACTICS — คู่มือมอนสเตอร์ Overworld สำหรับบอท (Java, Normal)

หลักฐาน: ค่าทุกตัวมาจาก snippet ค้นหา minecraft.wiki (ลิงก์ในคอลัมน์ "แหล่ง"). ค่าที่ไม่พบ = **[ไม่แน่ใจ]**.
"เกณฑ์แล็บ" (วินาที/ระยะ) = ค่าที่เราตั้งเองสำหรับตัดสินบอท ไม่ใช่ค่าจากวิกิ.
HP: 1 HP = 0.5 หัวใจ.

## 0. กฎแล็บ (บังคับ)
- ห้ามบอทล้อมตัวเองด้วยบล็อก (no wall-in) — หนีด้วยการวิ่ง/ตั้งหลัก/ปีนเสา ไม่ปิดห้อง
- Enderman: วางบล็อกกั้น -> ตีครั้งเดียว -> ถอย -> ตีอีกครั้ง -> เก็บ pearl
- ทอง: ใช้ทำ **รองเท้า (boots) เท่านั้น** (กันหมูพิกลิน; ไม่ใช่ปัญหา Overworld โดยตรง)
- สปอนศัตรู Overworld (Java 1.18+): block light ต้อง 0 และ sky light <= 7 ([Mob spawning](https://minecraft.wiki/w/Mob_spawning)); พายุฟ้าผ่าลด sky light 10 ทำให้เกิดกลางวันได้ ([Mob spawning](https://minecraft.wiki/w/Mob_spawning))
- ข้อควรระวัง: ค่า "damage Normal" ยังโดนเกราะลด (ยกเว้นดาเมจเวทมนตร์บางชนิด)

## 1. ตารางสถิติ (Normal)

| มอน | HP | ดาเมจ Normal | ระยะ/จังหวะ | สปอน | แหล่ง |
|---|---|---|---|---|---|
| Zombie | 20 | 3 (+0..4 เพิ่มเมื่อ HP ของซอมบี้ลดลง) | melee; interval [ไม่แน่ใจ] | มืด, ไหม้แดด | [Zombie](https://minecraft.wiki/w/Zombie) |
| Husk | 20 | 3 + Hunger 7×floor(regional diff) วินาที | melee | ทะเลทราย กลางคืน/พายุ กลุ่ม 4 ไม่ไหม้แดด | [Husk](https://minecraft.wiki/w/Husk) |
| Drowned | [ไม่แน่ใจ] | ตรีศูล 9 | ขว้างทุก 1.5 วิ | ซอมบี้จมน้ำ 30 วิ+15 วิ แปลงร่าง; ตรีศูลได้จาก reinforcement | [Drowned](https://minecraft.wiki/w/Drowned) |
| Zombie Villager | 20 | 3 | melee | แบบซอมบี้ | [Zombie Villager](https://minecraft.wiki/w/Zombie_Villager) |
| Skeleton | 20 | ธนู 1-5 (ตามระดับ/ความเร็ว) | ธนู; interval [ไม่แน่ใจ] | Overworld มืด | [Skeleton](https://minecraft.wiki/w/Skeleton) |
| Stray | 20 | ธนู + Slowness I 30 วิ | ธนู | หิมะ แทน 80% ของโครงกระดูก; ถ้ำน้ำแข็ง | [Stray](https://minecraft.wiki/w/Stray) |
| Bogged | 16 | ธนู + Poison 4 วิ (รวม 3 HP) | ยิงช้ากว่า skeleton | หนอง/ป่าโกงกาง light 0 กลุ่ม 4 บน+ใต้ดิน | [Bogged](https://minecraft.wiki/w/Bogged) |
| Parched | [ไม่แน่ใจ] (น้อยกว่า skeleton) | ธนู Weakness | ยิงทุก 4.5 วิ (Normal) | ทะเลทรายกลางคืน กลุ่ม 4 แทน 50% ของ skeleton ไม่ไหม้แดด | [Parched](https://minecraft.wiki/w/Parched) |
| Creeper | 20 | ระเบิดสูงสุด 43 (ปกติ) / 85 (charged) | จุดระเบิดเมื่อ <=3 บล็อก; ฟิวส์ 30 tick = 1.5 วิ | มืด; charged จากฟ้าผ่า | [Creeper](https://minecraft.wiki/w/Creeper) |
| Spider | 16 | 2 | ปีนกำแพงได้; hostile ถ้า light <=11 | มืด | [Spider](https://minecraft.wiki/w/Spider) |
| Cave Spider | 12 | Poison 7 วิ รวม 6 HP | melee | spawner เหมืองร้าง | [Cave Spider](https://minecraft.wiki/w/Cave_Spider) |
| Enderman | 40 | 7 | เทเลพอร์ต; ยั่วเมื่อมองตา <=64 บล็อก 5 tick | ทุกมิติ | [Enderman](https://minecraft.wiki/w/Enderman) |
| Witch | 26 | Harming สูงสุด 6; Poison สูงสุด 45 วิ | ขว้างภายใน 10 บล็อก ทุก 3 วิ | [ไม่แน่ใจ] (หนอง/กระท่อม/raid) | [Witch](https://minecraft.wiki/w/Witch) |
| Slime | ขนาด² (16/9/4/1) | = ขนาด (0 = ไม่ทำ) | กระโดด | swamp Y51-69 (ขึ้นกับดวงจันทร์); slime chunk Y<40 | [Slime](https://minecraft.wiki/w/Slime) |
| Phantom | 20 | 2 (Java) | ดิ่งกัด | ไม่นอนเกิน 3 วัน (72000 tick) | [Phantom](https://minecraft.wiki/w/Phantom), [Insomnia](https://minecraft.wiki/w/Insomnia) |
| Silverfish | 8 | 1 | ตีแล้วเรียกพวกในรัศมี 21×11×21 | infested block (stronghold, ภูเขา, igloo) | [Silverfish](https://minecraft.wiki/w/Silverfish) |
| Pillager | 24 | หน้าไม้ 3-5 | ยิงไกล | patrol, outpost, raid | [Pillager](https://minecraft.wiki/w/Pillager) |
| Vindicator | [ไม่แน่ใจ] | ขวาน 13 (ปิดโล่ 5 วิ) | melee | mansion, raid | [Vindicator](https://minecraft.wiki/w/Vindicator) |
| Evoker | [ไม่แน่ใจ] | fangs 6 (magic, เกราะไม่ลด) | เสก vex ถ้า vex <8 ใน 16 บล็อก | mansion, raid | [Evoker](https://minecraft.wiki/w/Evoker) |
| Vex | 14 | 9 (ดาบเหล็ก) | บิน ผ่านบล็อก? [ไม่แน่ใจ]; มี life_ticks หมดแล้วเสียเลือด | จาก evoker เท่านั้น | [Vex](https://minecraft.wiki/w/Vex) |
| Ravager | 100 | กัด 12; คำราม 6 + knockback 5 บล็อก | stun เมื่อโล่บล็อก | raid | [Ravager](https://minecraft.wiki/w/Ravager) |
| Illusioner | 32 | ไม่พบเลข | Blindness (diff>=3) | **ไม่เกิดเองในเกม** (ต้อง command/datapack) | [Illusioner](https://minecraft.wiki/w/Illusioner) |
| Guardian | 30 | เลเซอร์ 6+2 magic = 8 | ไกล 15 บล็อก หลบไม่ได้ | ocean monument | [Guardian](https://minecraft.wiki/w/Guardian) |
| Elder Guardian | 80 | เลเซอร์ 8; หนาม 2 | Mining Fatigue III 5 นาที ทุก 60 วิ ในรัศมี 50 | monument | [Elder Guardian](https://minecraft.wiki/w/Elder_Guardian) |
| Warden | 500 | melee 16-45 (ตามระดับ; Normal [ไม่แน่ใจ]); sonic boom 10 | melee cooldown 1.8 วิ; ทะลุบล็อก | ancient city (shrieker 4 ครั้ง) | [Warden](https://minecraft.wiki/w/Warden) |
| Breeze | 30 | wind charge 1 | ยิง <=16 บล็อก ทุก 1.6 วิ; กระโดด 15 แนวนอน/5 แนวตั้ง | trial chamber | [Breeze](https://minecraft.wiki/w/Breeze) |
| Creaking | ~1 (อมตะขณะผูกหัวใจ) | 3 | หยุดนิ่งถ้ามีผู้เล่นมอง | creaking heart กลางคืน ใน pale garden | [Creaking](https://minecraft.wiki/w/Creaking) |
| Wolf (โกรธ) | 8 ป่า / 40 เชื่อง | 4 | เป้าเดียวที่โดนตี | ป่า | [Wolf](https://minecraft.wiki/w/Wolf) |
| Bee | [ไม่แน่ใจ] | 2 + Poison I 10 วิ (8 HP) | ต่อยแล้วตายใน ~1 นาที | รัง | [Bee](https://minecraft.wiki/w/Bee) |
| Polar Bear | 30 | 6 | ตัวแม่ลูกอ่อนบุกเอง | หิมะ | [Polar Bear](https://minecraft.wiki/w/Polar_Bear) |
| Llama | 15-30 | น้ำลาย 1 | ถ่มไกล | ภูเขา/ซาวันนา | [Llama Spit](https://minecraft.wiki/w/Llama_Spit), [Llama](https://minecraft.wiki/w/Llama) |
| Goat | 10 | 2 (ลูก 1) | พุ่งชนทุก 30 วิ-5 นาที ระยะ 4-16; knockback 9 บล็อก | ภูเขา | [Goat](https://minecraft.wiki/w/Goat) |
| Iron Golem | 100 | 7.5-21.5 (สุ่ม, vs มอน) | ไม่ถอยจากการโดนตี | หมู่บ้าน | [Iron Golem](https://minecraft.wiki/w/Iron_Golem) |
| Pufferfish | [ไม่แน่ใจ] | ติดพิษเมื่อสัมผัส [ไม่แน่ใจ]; กิน = Hunger III 15วิ/Poison II 60วิ/Nausea 15วิ | - | ทะเลอุ่น | [Pufferfish (item)](https://minecraft.wiki/w/Pufferfish_(item)) |
| Dolphin | 10 | 3 | เป็นกลาง (ไม่ยุ่งไม่โจมตี) | มหาสมุทร | [Dolphin](https://minecraft.wiki/w/Dolphin) |
| Endermite | 8 | 2 | หายใน 2 นาที | 5% จาก ender pearl ที่ผู้เล่นขว้าง | [Endermite](https://minecraft.wiki/w/Endermite) |

หมายเหตุ Zombie: snippet ระบุดาเมจเพิ่ม 0HP (เลือดเต็ม) ถึง 4HP (เลือด 0%) แบบเชิงเส้น ใช้ 3 เป็นฐาน ([Zombie](https://minecraft.wiki/w/Zombie)); ผู้ตีความ "เลือดของใคร" ตาม snippet = ไม่ยืนยัน.

## 2. จุดอ่อน / อาวุธ / หนี / ดรอป

| มอน | จุดอ่อน | อาวุธ/ยุทธวิธีบอท | หนี | ดรอปที่ใช้ |
|---|---|---|---|---|
| Zombie/Husk/Z.Villager | ไหม้แดด (zombie), Instant Health ทำร้ายอันเดด | ดาบ + ตีแล้วถอย (kite) | วิ่งหนี, อย่ากลัวมาก | rotten flesh, เหล็กหายาก (0.83%) [Zombie](https://minecraft.wiki/w/Zombie); Husk: โดน Hunger ให้กินอาหารหลัง |
| Zombie Villager | Weakness + golden apple รักษา (3-5 นาที) | ไม่ต้องรักษาถ้าไม่จำเป็น | - | [Zombie Villager](https://minecraft.wiki/w/Zombie_Villager) |
| Drowned | ไหม้แดดไม่ใช่; ต้องขึ้นบก | หลีกเลี่ยงน้ำ; ตีใกล้ตัว | ขึ้นฝั่ง, ออกนอกระยะตรีศูล | ตรีศูล (บางตัว) [Drowned](https://minecraft.wiki/w/Drowned) |
| Skeleton/Stray/Bogged/Parched | ไหม้แดด (skeleton) | เข้าประชิด zigzag; ใช้เสาบัง | วนหลังบล็อก; ถอยออกนอกแนวยิง | ธนู/กระดูก; Bogged ตัดขนได้ 2 เห็ด [Bogged](https://minecraft.wiki/w/Bogged) |
| Creeper | ฟิวส์ 1.5 วิ; กลัวแมวในรัศมี 6 | ตีแล้วถอยให้ฟิวส์รีเซ็ต/ยิงธนูไกล | วิ่งหนีเกิน 3 บล็อก | gunpowder 0-2; disc ถ้าโครงกระดูกฆ่า [Creeper](https://minecraft.wiki/w/Creeper) |
| Spider | เป็นกลางถ้า light >11 | ดาบ; ระวังปีนกำแพง | ลงหลบแสง | string, spider eye [Spider](https://minecraft.wiki/w/Spider) |
| Cave Spider | HP 12 เล็กเลยโดนหลายสิบแล้ว | ตีเร็ว | ดื่มนม/น้ำผึ้ง รักษา Poison [Cave Spider](https://minecraft.wiki/w/Cave_Spider) | string |
| Enderman | น้ำ (1 HP/0.5 วิ), ฝน; หมวกฟักทองกันยั่ว | ตามกฎแล็บ (บล็อก-ตี-ถอย-ตี) | เข้าน้ำ/หมวกฟักทอง | ender pearl 50% 0-1 [Enderman](https://minecraft.wiki/w/Enderman) |
| Witch | HP 26, ยาดื่มฟื้น 5% | ธนู/ประชิดเร็ว | ออกนอก 10 บล็อก | [Witch](https://minecraft.wiki/w/Witch) ดรอป: [ไม่แน่ใจ] |
| Slime | แตกเป็นตัวเล็ก | ตีตัวใหญ่ก่อน; ระวังฝูง | วิ่งหนี | [Slime](https://minecraft.wiki/w/Slime) ดรอป: [ไม่แน่ใจ] |
| Phantom | ไหม้แดด; เตียง | นอนทุก <=3 วัน; ตีตอนดิ่งลง | หลบใต้หลังคา (โครงสร้างปกติ) | [Phantom](https://minecraft.wiki/w/Phantom) |
| Silverfish | ฆ่าในดาบเดียว (เพชร/ขวานหิน+) ไม่เรียกพวก | ตีให้ตายทีเดียว | ถอย | [Silverfish](https://minecraft.wiki/w/Silverfish) |
| Pillager | หน้าไม้พังเมื่อโดนโล่ ~2.5 ครั้ง | ประชิด/โล่ | หลบหลังกำแพงธรรมชาติ | [Pillager](https://minecraft.wiki/w/Pillager) |
| Vindicator | ปิดโล่ 5 วิ | หลีกเลี่ยงโล่; ตีหลบ | ถอย | [Vindicator](https://minecraft.wiki/w/Vindicator) |
| Evoker/Vex | [ไม่แน่ใจ] | ฆ่า evoker ก่อน; ดาบ | ออกจาก fangs แนวเส้นตรง | totem of undying (เฉพาะ evoker) [Evoker](https://minecraft.wiki/w/Evoker) |
| Ravager | stun เมื่อโดนโล่ | อย่าสู้ผ่ามือ; ระยะไกล | หนีเมื่อคำราม | [Ravager](https://minecraft.wiki/w/Ravager) |
| Guardian / Elder | หนามออก = โดนสะท้อน 2 | ออกห่าง/ตัดแนวสายตา; ปิดโล่ลด 50% | ขึ้นผิวน้ำ | prismarine shard 0-2, crystal 0-1 [Guardian](https://minecraft.wiki/w/Guardian) |
| Warden | ตาบอด; ฟังเสียง/สั่น; sneak ลดการตรวจจับ | **หลีกเลี่ยงเด็ดขาด** | sneak ห่าง >16 บล็อก; ฝังตัวหายใน 60 วิถ้าไม่เจออะไร | sculk catalyst 1, XP 5 [Warden](https://minecraft.wiki/w/Warden) |
| Breeze | ไม่สะท้อน wind charge; สะท้อนโพรเจกไทล์อื่น | ประชิดเมื่อมันตกพื้น; ระวังตกที่สูง | ออกนอก 16 บล็อก | breeze rod 1-2 [Breeze](https://minecraft.wiki/w/Breeze) |
| Creaking | หยุดเมื่อมีผู้เล่นมอง | **มอง** ตลอด; ทำลายหัวใจ (ฆ่าทันที) | หันหน้าค้างไว้ | resin 1-3 จากหัวใจ [Creaking Heart](https://minecraft.wiki/w/Creaking_Heart) |
| Wolf/Bee/Polar/Llama/Goat/Golem | เป็นกลาง — อย่ากวนตั้งแต่แรก | อย่าตี; บีบตามกฎ | วิ่งออก, น้ำผึ้งแก้พิษ | - |
| Pufferfish/Dolphin | ไม่โจมตีถ้าไม่ยั่ว | เลี่ยง/ไม่กิน pufferfish | - | - |
| Endermite | 8 HP | ตี | - | [Endermite](https://minecraft.wiki/w/Endermite) |

## 3. Problem Playbook (อาการ -> แก้ -> ตัดสินผล -> เทสจริง)

เกณฑ์แล็บ (เราตั้งเอง): ตอบสนองภายใน T วินาทีหลังตรวจพบ; รอดและ HP ไม่ต่ำกว่า 6 (3 หัวใจ) ถือว่าผ่านเว้นแต่ระบุ.
ทุกแถว: ห้ามล้อมตัวด้วยบล็อก.

| มอน | อาการ (ตรวจได้) | แก้ (ทีละขั้น) | ตัดสินผล | เทสจริง |
|---|---|---|---|---|
| Zombie/Husk | entity zombie/husk <=16 บล็อก, เสียงครวญ | 1 หันหน้า 2 ตีเมื่อ cooldown เต็ม 3 ถอยครึ่งก้าวถ้า HP<10 4 ถ้า Husk กินอาหาร | ถูก: ตายภายใน 10 วิ, HP เสีย <=6. ผิด: วิ่งเข้าฝูง >3 ตัว/ไม่กิน Hunger | `/summon zombie` ใกล้บอท 3 ตัว; จับเวลา+ HP (Husk ใน desert) |
| Drowned | entity drowned ในน้ำ, ตรีศูลลอยมา | ออกจากน้ำ, เข้าประชิดเมื่ออยู่บกหรือหลบแนวขว้าง | ถูก: ออกน้ำภายใน 5 วิ; ผิด: ว่ายสู้ | `/summon drowned ~ ~ ~ {HandItems:[{id:trident}]}` ในสระ |
| Skeleton/Stray/Bogged/Parched | projectile arrow เข้าหา, ระยะ >5 | ซิกแซก -> บังด้วยบล็อกที่มีอยู่ -> ประชิด -> ตี; ล้างเอฟเฟกต์ (นม) | ถูก: ปิดระยะ <=10 วิ; ผิด: ยืนนิ่งโดนยิง >3 ดอก | `/summon skeleton` (stray/bogged/parched ตามชื่อ) ที่ 12 บล็อก |
| Creeper | entity creeper <=3 บล็อก + เสียง hiss / ฟิวส์เริ่ม | ถอยทันทีเกิน 3 บล็อก (ฟิวส์ 1.5 วิรีเซ็ต) แล้วตีครั้งเดียว/ยิง | ถูก: ไม่โดนระเบิด; ผิด: ยืนในรัศมีเมื่อครบ 1.5 วิ (โดน ~43 สูงสุด) | `/summon creeper` 5 บล็อก; charged: `{powered:1}` |
| Spider/Cave Spider | spider ปีนกำแพง; พิษ (cave) | ตีตอบ; ถ้า Poison ดื่มนม/น้ำผึ้ง | ถูก: ตายใน 8 วิ; พิษหายภายใน 15 วิ | `/summon cave_spider` ในอุโมงค์ |
| Enderman | endermen ตั้งตรง, "ยั่ว" เมื่อมองตา | ตามกฎแล็บ: วางบล็อก, ตีหนึ่งครั้ง, ถอย, ตีอีก, เก็บ pearl; หรือเลี่ยงไม่มองหัวมัน | ถูก: ได้ pearl ไม่ตาย; ผิด: จ้องตา/ยืนโดนล้อมรอบ/สร้างกำแพงปิด | `/summon enderman`; นับ pearl |
| Witch | entity witch <=10 บล็อก; potion splash | ปิดระยะเร็ว; เลี่ยงฝูงยา; ล้างพิษ | ถูก: ปิดระยะใน 6 วิ | `/summon witch` 8 บล็อก |
| Slime | slime ขนาดใหญ่ | ตีตัวเล็กทีหลัง | ถูก: ไม่โดนล้อมหลายตัว | `/summon slime ~ ~ ~ {Size:3}` |
| Phantom | เสียง/entity phantom บนฟ้า, ไม่ได้นอน >3 วัน | ลงหลังคา/นอน/ตีตอนดิ่ง | ถูก: นอนก่อน 3 คืนหรือรอด; ผิด: ลุยข้างนอกโดนกัดซ้ำ | `/summon phantom` |
| Silverfish | block ที่สงสัย (infested) แตกมีตัว | ตีดาบเดียวตาย | ถูก: ไม่เรียกพวกเกิน 1 | `/setblock infested_stone` แล้วขุด |
| Pillager/Vindicator/Evoker/Vex/Ravager | illager <=24 บล็อก, หัว omen | ฆ่า evoker ก่อน; หลบ fangs; อย่าสู้ ravager ตรงหน้า | ถูก: ไม่ตาย; อย่า HP<6 | `/summon` แต่ละตัวทีละตัว (ravager ต้องปิดการสู้ใกล้) |
| Guardian/Elder | beam เขียว; Mining Fatigue | ตัดสายตา; ขึ้นผิวน้ำ | ถูก: ออกจากรัศมี 15 บล็อก <=10 วิ | monument ใน creative test |
| Warden | Darkness effect; เสียงหัวใจเต้น | sneak ออก >16 บล็อก; **อย่าสู้** | ถูก: ไม่โดน; ผิด: วิ่ง/กระโดดใกล้ | `/summon warden` ห่าง 30 บล็อก, ดู HP |
| Breeze | entity breeze <=16, ถูกลมผลัก | ประชิดตอนเกาะพื้น; ระวังตกที่สูง | ถูก: ไม่ตก >3 บล็อก | trial chamber |
| Creaking | creaking หยุดนิ่ง | มองตรงๆ -> ตีหัวใจ | ถูก: ไม่ถูกตีตอนมอง | `/summon creaking` |
| เป็นกลาง (Wolf/Bee/Polar/Goat/Golem/Llama) | entity เป็นกลาง >1 ตัว ปกติ | อย่าตี; ถ้าถูกไล่ วิ่งหนี | ถูก: ไม่ตีตั้งแต่แรก | `/summon` ใกล้ๆ; ตรวจว่าบอทไม่โจมตี |

## 4. ที่ยังไม่ยืนยัน
Drowned/Vindicator/Evoker/Bee/Pufferfish HP, Warden melee@Normal, Witch/Slime drops, ช่วง zombie interval, skeleton interval, parched HP.
