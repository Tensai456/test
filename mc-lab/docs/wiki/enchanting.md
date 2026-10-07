# Enchanting (Java Edition, vanilla) · การเสริมพลัง
> W = https://minecraft.wiki/w/ (เช่น W/Enchanting_table_mechanics = https://minecraft.wiki/w/Enchanting_table_mechanics) · ค้นผ่าน snippet เท่านั้น ไม่ได้เปิดหน้าเต็ม · เกณฑ์แล็บ = ค่าที่แล็บตั้งเอง ไม่ใช่ค่าวานิลลา

## table-setup · โต๊ะเสริมพลัง + ชั้นหนังสือ
| ข้อเท็จจริง | ค่า | แหล่ง |
|---|---|---|
| ชั้นหนังสือสูงสุดที่นับ | 15 (เกินถูกละเลย) | W/Enchanting_table_mechanics |
| ต้องมี 15 ชั้นเพื่อเข้าถึงเลเวล 30 | ใช่ | W/Enchanting_Table |
| ตำแหน่ง | ห่างโต๊ะ 2 บล็อกตามแกนนอนแกนหนึ่ง, สูงสุด 2 ตามอีกแกน, ระดับเดียวกับโต๊ะหรือสูงกว่า 1 | W/Enchanting_table_mechanics |
| ช่องว่าง | ระหว่างโต๊ะกับชั้นต้องเป็นอากาศหรือบล็อกที่แทนที่ได้ 1 ช่อง; บล็อกอื่นแม้โปร่งใส (คบเพลิง) ตัดการเชื่อม | W/Enchanting_Table |
| ช่องเสนอ | 3 ช่อง; ช่องที่ 3 ได้เลเวลสูงสุดเสมอ ไม่สุ่ม | W/Enchanting_table_mechanics |

บอตควร: สร้างวงแหวนชั้น 15 ชั้น เว้นช่องว่าง 1 ช่องจากโต๊ะ ก่อนเริ่มเสริมพลัง
ตัดสินผล: นับชั้นที่ active ≥15 (เกณฑ์แล็บ) ไม่ครบ → ช่องที่ 3 ต่ำกว่า 30 ให้แก้ผังก่อน

## costs · ค่า XP และ Lapis
| ข้อเท็จจริง | ค่า | แหล่ง |
|---|---|---|
| ช่องเลเวล 30 | ต้องมี XP ≥30 เลเวล แต่จ่ายจริง 3 เลเวล + 3 lapis | W/Enchanting_Table |
| lapis สูงสุดต่อไอเท็ม | 3 | W/Enchanting_Table |
| สูตรฐาน | xpBase = 1 + randInt(7) + ⌊min(15,ชั้น)/2⌋ + randInt(min(15,ชั้น)) | W/Enchanting_table_mechanics |
| ช่องบน/กลาง/ล่าง | ⌊max(1,base/3)⌋ / ⌊2·base/3⌋+1 / max(base, 2·ชั้น) | W/Enchanting_table_mechanics |
| ช่อง 1 และ 2 จ่ายกี่เลเวล/lapis | [ไม่แน่ใจ] (สมมติ 1 และ 2 ตามลำดับ ไม่ได้ยืนยันใน snippet) | - |

บอตควร: สต็อก lapis ≥3 ต่อครั้ง และ XP ≥30 เลเวลก่อนเลือกช่องที่ 3
ตัดสินผล: lapis <3 หรือ XP <30 → ไม่เสริม; รอเก็บทรัพยากร

## offers · วิธีเลือกข้อเสนอ
| ข้อเท็จจริง | ค่า | แหล่ง |
|---|---|---|
| ผลขึ้นกับ enchanting seed (XpSeed) ของผู้เล่น | seed สุ่มใหม่หลังเสริมพลังเสร็จ | W/Enchanting_table_mechanics |
| ไอเท็มที่ enchantability และชนิดเสริมได้เท่ากัน + ชั้นเท่ากัน → ข้อเสนอเหมือนกัน (จนกว่าจะเสริมพลัง) | ใช่ | W/Enchanting_table_mechanics |
| enchantability | ทองคำเกราะ 25, อาวุธ/เครื่องมือทอง 22; หนังสือ/ธนู/หน้าไม้/เบ็ด/ตรีศูล 1 | W/Enchanting_table_mechanics |
| treasure enchant | ไม่ออกจากโต๊ะ (Frost Walker "ไม่มีในโต๊ะ") | W/Frost_Walker |

บอตควร: เสริมพลัง "หนังสือ" แล้วรวมด้วย anvil เพื่อเลือกชุดเอง ไม่พึ่งการสุ่มบนไอเท็ม; ธนู/ตรีศูล/หน้าไม้ enchantability 1 → แนะนำใช้หนังสือ
ตัดสินผล: ได้ชุดไม่ตรงเป้า → ไม่ยอมรับ ถ้าต้องการชุดเฉพาะให้ใช้หนังสือจาก librarian; เกณฑ์แล็บ: ลองซ้ำได้ ≤ [ไม่แน่ใจ] ครั้ง (ตั้งเอง)

## anvil · ทั่ง การรวม และ Too Expensive
| ข้อเท็จจริง | ค่า | แหล่ง |
|---|---|---|
| prior work penalty | เพิ่มทุกการใช้ทั่ง (ยกเว้นเปลี่ยนชื่อ) โตประมาณสองเท่า; เพิ่มทีละ 2n+1 (n=ค่าสูงสุดของสองชิ้น) | W/Anvil_mechanics |
| ขีดจำกัดโหมด Survival | ทำได้เมื่อ ≤39 เลเวล; เกินแล้ว "Too Expensive!" (เท่ากับ 40 ขึ้นไปถูกปฏิเสธ) | W/Anvil_mechanics |
| ซ่อมด้วยวัสดุ | 1 เลเวล/หน่วย, หน่วยละ 25% ความทนทาน | W/Anvil_mechanics |
| รวมสองชิ้น ซ่อม | บวกความทนทานชิ้นสังเวย + โบนัส 12%; ค่าซ่อม 2 เลเวล | W/Anvil_mechanics |
| ค่าเสริมพลัง (Java) | เลเวลสุดท้ายของ enchant × ตัวคูณ (1 ถึง 8; Silk Touch/Infinity 8) ตามตาราง | W/Anvil_mechanics |
| เปลี่ยนชื่อ | 1 เลเวล | W/Anvil_mechanics |

บอตควร: รวมหนังสือที่ penalty เท่ากันก่อน (ทรี) แล้วค่อยใส่ไอเท็ม; ใส่ของแพงๆ เช่น Mending เป็นขั้นแรกๆ; ล้าง penalty ด้วย grindstone/ซ่อมในโต๊ะคราฟต์ถ้าจำเป็น
ตัดสินผล: ค่าคำนวณ ≥40 → ยกเลิกลำดับนั้น เปลี่ยนลำดับ; เกณฑ์แล็บ: เตือนเมื่อ ≥35 (ตั้งเอง)

## grindstone · หินลับ
| ข้อเท็จจริง | ค่า | แหล่ง |
|---|---|---|
| ลบ enchant ทั้งหมดยกเว้น curse | ใช่; ชื่อเก็บไว้ | W/Grindstone |
| คืน XP | สุ่ม 50-100% (ปัดขึ้น) ของผลรวมเลเวลต่ำสุดที่ปรับแล้วของ enchant ไม่ใช่ curse | W/Grindstone |
| ตัวอย่าง | Sharpness V เฉลี่ย 35 XP (75% ของ 45) | W/Grindstone |
| ล้าง prior work penalty | ใช่ (ไอเท็มเสียค่า enchant) | W/Anvil_mechanics |

บอตควร: ใช้เฉพาะเพื่อรีไซเคิลของที่ penalty สูงจนทั่งปฏิเสธ หรือเก็บ XP จากของเก่า; อย่าใช้กับของมี Mending ที่ต้องเก็บ
ตัดสินผล: ชิ้นนั้น penalty ทำให้ Too Expensive และไม่มี enchant หายากให้รักษา → grind

## smithing · โต๊ะตีเหล็ก
ไม่ได้ค้นยืนยันได้ (งบการค้นหาหมดก่อนถึงหัวข้อนี้) → ดูหัวข้อ unverified

บอตควร: เสริมพลังหลังอัปเกรดเป็น netherite หรืออัปเกรดทั้งที่เสริมแล้ว แต่ตรวจจากหน้า W/Smithing_Table ก่อน [ไม่แน่ใจ]
ตัดสินผล: ยังไม่มีเกณฑ์ที่ยืนยัน

## exclusive · เอนชานต์ที่ใช้ร่วมกันไม่ได้
| กลุ่ม | สมาชิกที่ยืนยัน | แหล่ง |
|---|---|---|
| ความเสียหาย | Sharpness ขัดกับ Smite, Bane of Arthropods, Cleaving | W/Sharpness |
| ความเสียหาย | Smite ขัดกับ Sharpness, Bane, Density, Breach, Cleaving | W/Smite |
| คฑา | Density ขัดกับ Breach, Smite, Bane of Arthropods | W/Wind_Burst (snippet) |
| เกราะ | Protection / Fire / Blast / Projectile Protection ใช้ร่วมกันไม่ได้ | W/Protection |
| รองเท้า | Frost Walker ขัดกับ Depth Strider | W/Frost_Walker |
| กางเกง | Swift Sneak ใช้กับ leggings เท่านั้น (snippet อ้างว่าขัดกับ Frost Walker/Depth Strider/Soul Speed แต่ไม่ใช่ leggings จึงน่าสงสัย) | W/Swift_Sneak [ไม่แน่ใจ] |
| การรวมใน anvil | ถ้าขัดกัน enchant ฝั่งอัปเกรดถูกลบ แล้วเอาฝั่งสังเวยแทน (ตามที่ snippet ระบุ) | W/Protection |

บอตควร: เลือกกลุ่มละ 1 ตัวต่อชิ้น (Protection IV หรือแบบเฉพาะทาง); ตรวจตารางก่อนรวม
ตัดสินผล: คู่ที่ขัดกัน → เลือกตามบทบาท; ดูกลุ่มอื่น (Silk/Fortune, Multishot/Piercing, Infinity/Mending, Loyalty/Riptide) ใน unverified

## sets · ชุดแนะนำต่อไอเท็ม
ตามหน้า W/Tutorial:Best_enchantments_guide (จาก snippet; ค่าเลเวลที่ไม่ปรากฏ = ไม่ระบุ)
| ไอเท็ม | ชุดที่แนะนำ |
|---|---|
| ขวาน | Sharpness V, Efficiency V, Mending |
| ธนู | Infinity หรือ Mending + Power, Unbreaking, Flame, Punch |
| หน้าไม้ | Quick Charge III, Piercing หรือ Multishot, Unbreaking III, Mending |
| ตรีศูล | Loyalty III + Channeling + Impaling V หรือ Riptide + Impaling V, Unbreaking III, Mending |
| คฑา | Density V หรือ Breach IV + Wind Burst III, Fire Aspect II, Unbreaking III, Mending |
| หอก | Smite V, (Lunge III), Looting III, Fire Aspect II, Knockback II, Unbreaking III, Mending |
| ดาบ / พิคแอ็กซ์ / เกราะ / รองเท้า / หมวก | [ไม่แน่ใจ] ไม่ได้ยืนยันจาก snippet (ทั่วไป: Sharpness, Efficiency, Protection, Unbreaking, Mending ตามความรู้ ไม่ใช่ wiki) |
Lunge III: ใช้ hunger 1/2/3 ต่อเลเวล, ต้อง ≥7 hunger point (W/Lunge)

บอตควร: ใช้ตารางนี้เป็นลำดับความสำคัญ; Mending ทุกชิ้นที่หาได้
ตัดสินผล: ชุดที่ได้ขาด Mending หรือ Unbreaking → ยอมรับได้ชั่วคราว แต่ต้องปรับภายหลัง (เกณฑ์แล็บ)

## treasure · เอนชานต์ Treasure และแหล่งที่ได้
| Enchant | แหล่ง | แหล่งอ้างอิง |
|---|---|---|
| Mending | loot โครงสร้างที่ไม่ใช่หมู่บ้าน, ตกปลา (หนังสือ 0.8% ต่อครั้ง), raid drop, librarian ทุกเลเวล | W/Mending, W/Enchanted_Book |
| Frost Walker | loot jungle temple และ stronghold, ตกปลา, raid drop, librarian ทุกเลเวล | W/Frost_Walker |
| Soul Speed | chest "generic" ใน bastion remnant (หนังสือ/รองเท้าทองคำ) | W/Soul_Speed |
| Swift Sneak | loot ancient city เท่านั้น (ไม่หมุนเวียน); +15% ของความเร็วเดินต่อเลเวล; III = 75% | W/Swift_Sneak |
| Wind Burst | ominous vault ใน trial chamber เท่านั้น, หนังสือ level I, โอกาส 5.5%; สูง 8 บล็อก/เลเวล, สูงสุด III | W/Wind_Burst |
| librarian ขายไม่ได้ | Soul Speed, Swift Sneak, Wind Burst | W/Frost_Walker (snippet) |

บอตควร: หา Mending จาก librarian ก่อน (ทางที่คุมได้); Soul Speed/Swift Sneak/Wind Burst ต้องสำรวจโครงสร้าง
ตัดสินผล: ไม่มีแหล่งในระยะ → ข้ามเอนชานต์นั้น ไม่รอ

## unverified · ยังไม่ยืนยัน
- งบ WebSearch หมดก่อนค้นหัวข้อเหล่านี้: smithing table (การคงเอนชานต์ตอนอัปเกรด), Silk Touch/Fortune, Multishot/Piercing, Infinity/Mending (ตามเวอร์ชันปัจจุบัน), Loyalty/Riptide, ชุดแนะนำดาบ/พิคแอ็กซ์/เกราะ/รองเท้า/หมวก [ไม่แน่ใจ]
- lapis/XP ของช่อง 1 และ 2 [ไม่แน่ใจ]
- ตารางตัวคูณ anvil ครบทุก enchant (ยืนยันเพียง 1 ถึง 8 และ Silk Touch/Infinity=8 จาก snippet)
- ตัวเลขเลเวล max ของเอนชานต์ส่วนใหญ่ และ Swift Sneak ขัดกับ Frost Walker (น่าสงสัย)
- **ตรวจกับข้อมูลเกม 26.1 แล้ว:** เลเวลสูงสุดและคู่ที่ห้ามใส่ด้วยกันของทุกเอนชานต์อยู่ใน `kb/blocks/_enchantments.md` (ยึดตามนั้น) · Swift Sneak **ไม่ขัด**กับ Frost Walker (Frost Walker ขัดกับ Depth Strider เท่านั้น)
- Villager Trade Rebalance (experimental) เปลี่ยนการค้า Mending: ไม่ใช่ค่าเริ่มต้น
- คำสั่ง "เวอร์ชันปัจจุบัน" ไม่ได้ตรวจเลขเวอร์ชันโดยตรง (snippet พบเนื้อหา 1.21.11 เช่น Lunge/Spear)
