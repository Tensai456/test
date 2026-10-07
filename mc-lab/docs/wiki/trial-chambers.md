# Trial Chambers (ห้องทดสอบ) — Java Edition vanilla
> W = https://minecraft.wiki/w/ (Trial_Chambers, Trial_Spawner, Ominous_Trial_Spawner, Ominous_Trial_Key, Ominous_Vault, Vault, Heavy_Core, Bad_Omen, Breeze, Tutorial:Defeating_trial_chambers) · ข้อมูลจากสรุปผลค้นหา ไม่ได้เปิดหน้าเต็ม

## generation · การเกิดโครงสร้าง
| ข้อมูล | ค่า | แหล่ง |
|---|---|---|
| ห้องเริ่มต้น | Y -40 ถึง -20 | W/Trial_Chambers |
| ห้องส่วนใหญ่ | Y -20 ถึง 0 (ไม่จำกัดแค่ช่วงนี้) | W/Trial_Chambers |
| วัสดุ | copper + tuff, ใต้ชั้น deepslate | W/Trial_Chambers |
| ผัง | ทางเดินใหญ่กลาง แตกเป็นทางไปห้องต่อสู้ | W/Tutorial:Defeating_trial_chambers |

บอตควร: ขุดลงถึง Y ราว -30..-10 แล้วสแกนหา copper/tuff block; เคลียร์ spawner ในทางเดินกลางก่อน (W/Tutorial:Defeating_trial_chambers).
ตัดสินผล: เกณฑ์แล็บ — เจอ block ตระกูล copper/tuff ≥ N ใน Y -40..0 = พบโครงสร้าง.

## trial-spawner · กลไก Trial Spawner
| ข้อมูล | ค่า | แหล่ง |
|---|---|---|
| มอบรวม 1 ผู้เล่น | 6 ตัว, อยู่พร้อมกันสูงสุด 2 | W/Trial_Spawner |
| +1 ผู้เล่น | พร้อมกัน +1, รวม +2 (2 คน=8/3, 3 คน=10/4) | W/Trial_Spawner |
| ความถี่เกิด | 1 ตัวต่อ 40 tick (2 วิ) | W/Trial_Spawner |
| จบแล้ว | ปล่อยของ/กุญแจ แล้ว cooldown 30 นาที (36000 tick) นับต่อแม้ chunk ไม่โหลด | W/Trial_Spawner |

บอตควร: อย่าพาผู้เล่นอื่นเข้าใกล้ถ้าต้องการจำนวนมอบน้อย (บอตตัวเดียว = ง่ายสุด); จดเวลาเคลียร์ แล้วกลับหลัง 30 นาที.
ตัดสินผล: เกณฑ์แล็บ — spawner ถือว่า "พร้อมใหม่" เมื่อผ่าน ≥ 30 นาที (W/Trial_Spawner).

## mobs · ชุดมอบ
| ข้อมูล | ค่า | แหล่ง |
|---|---|---|
| มอบที่ spawner ผลิตได้ | zombie, husk, skeleton, bogged, stray, spider, cave spider, slime (+ breeze ตามห้อง) | W/Breeze (รายการที่ breeze ไม่ตอบโต้) |
| ชุดต่อ spawner | breeze / melee (zombie, husk, spider) / small melee (silverfish, baby zombie, cave spider, slime) / ranged (stray, skeleton, bogged); ชุด small melee สุ่มต่อโครงสร้าง (slime/silverfish/cave spider อย่างละ 25%) | W/Trial_Spawner |
| จำนวนต่อชนิด spawner | breeze 2 ตัว (+1/คน), พร้อมกัน 1 (+0.5/คน); baby zombie 6 (+2/คน), พร้อมกัน 2 (+0.5/คน); อื่นๆ 6 (+2/คน) พร้อมกัน 3 แต่ที่เพิ่มต่อคน (+2 vs +1) snippet ขัดกับ default config (6/2, +2/+1) | W/Trial_Spawner, W/Trial_spawner_configuration · [ไม่แน่ใจ] ส่วนพร้อมกันของ spawner ในห้อง |
| HP | breeze 30, skeleton 20, bogged 16, husk 20, stray 20, spider 16, cave spider 12, silverfish 8, slime ใหญ่ 16 / กลาง 4 / เล็ก 1 (semi-large 9 ตามสรุป) | W/Breeze, W/Skeleton, W/Bogged, W/Husk, W/Cave_Spider, W/Silverfish, W/Slime |
| HP zombie / baby zombie | [ไม่แน่ใจ] (ไม่พบในสรุปผลค้นหา) | — |
| Ominous: เกราะ/อาวุธมอบ | เฉพาะ chestplate+helmet (แต่ละชิ้นหายได้ 50%) enchant Protection IV/Fire Prot IV/Projectile Prot IV; chainmail 4/7, iron 2/7, diamond 1/7; ดาบ iron 4/7 (+Sharpness I 1/7, Knockback I 1/7), diamond 1/7; ธนู ไม่ enchant 2/4, Power I 1/4, Punch I 1/4 | W/Ominous_Trial_Spawner |
| Ominous: โพรเจกไทล์/ยา | ยิง lingering potion, wind charge, arrow, fire charge; tipped arrow = Poison I หรือ Slowness IV; potion สุ่ม Wind Charged/Oozing/Weaving/Infested/Strength/Speed/Slow Falling; ดาเมจรายคลื่น [ไม่แน่ใจ] | W/Ominous_Trial_Spawner |

บอตควร: ระวัง cave spider (พิษ) และ slime แตกตัว; จัดการทีละตัวในมุมแคบ.
ตัดสินผล: เกณฑ์แล็บ — ถ้า HP บอต < 50% ระหว่างคลื่น ให้ถอยออกนอกรัศมี spawner.

## breeze · Breeze และกลยุทธ์
| ข้อมูล | ค่า | แหล่ง |
|---|---|---|
| HP | 30 | W/Breeze |
| ดาเมจ wind charge | 1 (Easy/Normal), 1.5 (Hard) | W/Breeze |
| ระยะยิง / cooldown | 16 บล็อก / 32 tick | W/Breeze |
| กระโดด | ไกล 15 แนวนอน, สูง 5 | W/Breeze |
| ป้องกัน | สะท้อนกระสุนทุกชนิดยกเว้น wind charge; ไม่เจ็บจากการตก | W/Breeze |
| burst | รัศมี 6 บล็อก; อันตรายหลักคือถูกเหวี่ยงแล้วตกจากที่สูง | W/Breeze |

บอตควร: ใช้ดาบ/ขวานระยะประชิด ไม่ใช้ธนู; อยู่ห่างขอบสูง/หลุม; ไม่ต้องกลัว mob อื่นตอบโต้กัน (มอบ trial ไม่ตีกัน).
ตัดสินผล: เกณฑ์แล็บ — ถ้าถูกเหวี่ยงขึ้นสูง ให้ถือบล็อกน้ำ/ตรวจ fall ก่อนสู้ต่อ.

## keys-vault · กุญแจและ Vault
| ข้อมูล | ค่า | แหล่ง |
|---|---|---|
| Trial key | ได้จาก trial spawner ปกติ | W/Trial_Spawner |
| Ominous trial key | ได้จาก ominous spawner เท่านั้น (30% ของการปล่อย, ทุกผู้เล่นได้) | W/Ominous_Trial_Spawner |
| Vault ปกติ ของ | emerald 2-4 (38.4%), enchanted bow (10.4%), diamond 1-2 (8.5%), enchanted book (7.0%), ench. iron chestplate (7.0%), bolt trim (6.2%), ench. diamond axe (3.5%), ench. diamond chestplate (3.5%) | W/Vault |
| Ominous vault | ปล่อย 2-5 stack จาก 3 loot table; 80% มี rare set, 75% มี unique set เพิ่ม; แหล่งเดียวของ heavy core (7.5%) | W/Ominous_Vault, W/Heavy_Core |
| Ominous vault ของ (%) | emerald 56.2, diamond 26.4, flow trim 22.5, ench. golden apple 22.5, flow banner pattern 15.0, ench. crossbow 11.0, golden apple 8.3, ench. diamond axe 8.3, ench. diamond chestplate 8.3, music disc (Creator) 7.5, heavy core 7.5, wind charge 8-12 ชิ้น 47.4 | W/Ominous_Vault |
| รายการ ominous vault ที่เหลือ/ตัวเลขเต็มต่อ pool | [ไม่แน่ใจ] (ได้เฉพาะรายการที่ snippet ให้) | — |
| Wind charge ใน vault ปกติ | 1-3 ชิ้น 24.0%, 4-12 ชิ้น 8.5% (pool สำรอง 29.6% / 10.7%) | W/Vault |
| Enchanted gear ใน vault ปกติ | book 7.0, crossbow 7.0, iron axe 7.0, iron chestplate 7.0, diamond axe 3.5, diamond chestplate 3.5 (bow 10.4 ตามด้านบน) | W/Vault |
| กฎต่อผู้เล่น | แต่ละผู้เล่นเปิด vault หนึ่งอันได้ครั้งเดียว, ผู้เล่นเปิดได้ไม่จำกัดคน; ominous vault จำ ~128 คน คนที่ 129 ทำให้คนแรกถูกลืมและเปิดซ้ำได้ | W/Vault, W/Ominous_Vault |
| Heavy core + breeze rod | คราฟต์ mace | W/Heavy_Core |

บอตควร: เก็บ key ทุกชนิดไว้ใช้ที่ vault ตรงชนิด; ตรวจ inventory หลังเปิด.
ตัดสินผล: เกณฑ์แล็บ — นับ heavy core ที่ได้ต่อ ominous key ที่ใช้ เทียบ 7.5% (W/Heavy_Core).

## ominous · Trial Omen / Ominous Trial
| ข้อมูล | ค่า | แหล่ง |
|---|---|---|
| Bad Omen | ได้จากดื่ม ominous bottle | W/Bad_Omen |
| แปลงเป็น Trial Omen | เมื่อเข้าใกล้ spawner ปกติ | W/Bad_Omen |
| เงื่อนไข | ผู้เล่นมี Trial Omen เข้ารัศมี 14 บล็อก และอยู่ในสายตา spawner | W/Ominous_Trial_Spawner |
| ระยะเวลา | 15 นาที × level ของ Bad Omen; แปลง spawner ใกล้เคียงทั้งหมด | W/Bad_Omen |
| Ominous spawner | มอบยากกว่า, ของดีกว่า; มอบไม่ใส่เกราะ (แมงมุม ฯลฯ) จำนวนรวม x2, อยู่พร้อมกัน +1 | W/Ominous_Trial_Spawner |
| รางวัล ominous spawner | key 30%; 70% อื่น: baked potato 21%, steak 21%, golden carrot 14%, regen 7%, strength 7% | W/Ominous_Trial_Spawner |

บอตควร: เข้า ominous เมื่อมีเกราะ/อาหาร/ยาครบเท่านั้น; ระวัง omen หมดเวลา.
ตัดสินผล: เกณฑ์แล็บ — เข้า ominous เฉพาะ HP เต็ม + เกราะ diamond+ + ยาฟื้น ≥ 1.

## bot-plan · แผนบอตเคลียร์
| ขั้น | ทำ | แหล่ง |
|---|---|---|
| 1 | ลงถึง Y -40..0 หาโครงสร้าง | W/Trial_Chambers |
| 2 | เคลียร์ spawner ทางเดินกลางก่อน | W/Tutorial:Defeating_trial_chambers |
| 3 | เก็บ key เปิด vault; cooldown 30 นาที | W/Trial_Spawner |
| 4 | gear ขั้นต่ำ: เกราะ iron เต็มชุด (ดีกว่าถ้า enchant, boots Feather Falling), ดาบ/ขวาน iron, ธนู/หน้าไม้+ลูกธนู, โล่ (หรือ totem), พิกเกิล, อาหารครึ่ง stack; เสริม: หมาป่า, หอก iron | W/Tutorial:Defeating_trial_chambers |

บอตควร: ตรวจ HP/อาหารก่อนทุก spawner; ถอยเมื่อเลือดต่ำ.
ตัดสินผล: เกณฑ์แล็บ — สำเร็จ = key ≥ 1 และ vault เปิดโดยไม่ตาย.

## unverified · ยังไม่ยืนยัน
- ตาราง ominous vault ครบทุก pool/รายการ (ได้เฉพาะรายการหลักตาม snippet), ผลรวม % ไม่ตรวจ [ไม่แน่ใจ]
- จำนวนพร้อมกันของ spawner ในห้อง (3 +2/คน หรือ 2 +1/คน), HP zombie/baby zombie, ดาเมจ ominous wave [ไม่แน่ใจ]
- cooldown ของ vault ต่อผู้เล่น (ไม่พบ; พบเฉพาะกฎครั้งเดียวต่อผู้เล่น) [ไม่แน่ใจ]
- ตัวเลขจากสรุปผลค้นหา ไม่ได้อ่านหน้าเต็ม ควรตรวจซ้ำ
