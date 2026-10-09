# เกษตรกรรม (Farming) · Minecraft Java Edition
> W = https://minecraft.wiki/w/ (อ้างเป็น W/ชื่อหน้า) · ตัวเลขทุกตัวมาจากสรุป search ของ minecraft.wiki; ไม่ทราบ = [ไม่แน่ใจ]

## crops-wheat · พืชหลัก (ข้าวสาลี/แครอท/มันฝรั่ง)
| รายการ | ค่า | แหล่ง |
|---|---|---|
| ระยะโต (wheat) | 8 stage | W/Wheat |
| แครอท/มันฝรั่ง | 8 stage, age 0–7 (7 = โตเต็ม; texture เปลี่ยน 4 แบบ: 0–1, 2–3, 4–6, 7) | W/Carrot, W/Potato |
| แสงขั้นต่ำที่ block พืช | 9 | W/Tutorial:Crop_farming |
| ความเร็วฐานของ farmland | แห้ง 2 / ชุ่ม 4 | W/Tutorial:Crop_farming |
| เวลาต่อ stage | ~5 นาที (ดีสุด) ถึง ~35 นาที (แย่สุด) | W/Tutorial:Crop_farming |
| ผลผลิตแครอท/มันฝรั่ง | 2–5 ต่อต้น; มันฝรั่งมีโอกาส 2% ได้ poisonous potato | W/Carrot, W/Potato |

บอตควร: ปลูกบน farmland ชุ่มน้ำ, ให้แสง ≥9 (คบไฟ), เก็บเมื่อ stage สุดท้าย (อ่าน age ก่อนตี) แล้วปลูกซ้ำ
ตัดสินผล: เกณฑ์แล็บ — ผ่านถ้าเก็บได้ ≥2 ชิ้น/ต้นจากต้นที่ age=สูงสุด; ล้มเหลวถ้าตีต้นก่อนโต

## beetroot · บีทรูท
| รายการ | ค่า | แหล่ง |
|---|---|---|
| ระยะโต | 4 stage | W/Beetroot_Seeds |
| ผลผลิต | เมล็ด 1–4 + บีทรูท 1 | W/Beetroot_Seeds |
| bone meal | 75% เลื่อน 1 stage ต่อครั้ง | W/Beetroot_Seeds |

บอตควร: ใช้ bone meal ซ้ำได้จนครบ stage; ปลูกแบบเดียวกับ wheat
ตัดสินผล: เกณฑ์แล็บ — ผ่านถ้าครบ stage ใน ≤ ~6 ครั้งต่อต้น (ค่าประมาณจากโอกาส 75%, ไม่ใช่ตัวเลขวิกิ)

## hydration-trampling · น้ำและการเหยียบ farmland
| รายการ | ค่า | แหล่ง |
|---|---|---|
| รัศมีน้ำ | ≤4 block แนวนอน (รวมทแยง) ระดับเดียวกันหรือสูงกว่า farmland 1 | W/Farmland |
| block คั่นกลาง | ไม่มีผล | W/Farmland |
| โอกาสเหยียบพัง | = ระยะตก − 0.5 (ตกครึ่งบล็อก = 0%) | W/Farmland |

บอตควร: วางน้ำ 1 block กลางแปลง 9×9 (ครอบ 4 block รอบ), เดินบนทางเดิน/ห้ามกระโดดลง farmland, ใช้ slab/ทางเดินกันเหยียบ
ตัดสินผล: เกณฑ์แล็บ — farmland ทุกก้อนต้อง moisture สูงสุด; ผ่านถ้า farmland ไม่กลายเป็น dirt ระหว่างรอบ

## bone-meal · ปุ๋ยกระดูก
| ใช้กับ | ผล | แหล่ง |
|---|---|---|
| wheat/carrot/potato | เลื่อน 2–5 stage (สุ่ม) | W/Bone_Meal |
| beetroot | 75% เลื่อน 1 stage | W/Beetroot_Seeds |
| nether wart | ใช้ไม่ได้ | W/Nether_Wart |
| เห็ด | มีโอกาสโตเป็นเห็ดยักษ์ (ดู mushroom) | W/Brown_Mushroom |

บอตควร: ใช้เมื่อพืชยังไม่ครบ stage; ได้ bone meal จาก composter
ตัดสินผล: เกณฑ์แล็บ — นับจำนวน bone meal ต่อผลผลิต บันทึกเทียบ

## sugar-cane · อ้อย
| รายการ | ค่า | แหล่ง |
|---|---|---|
| สูงสุดธรรมชาติ | 3 block | W/Sugar_Cane |
| เพิ่ม 1 block | เมื่อ top ได้ 16 random tick (เฉลี่ย ~18 นาที Java) | W/Sugar_Cane |
| น้ำ | ต้องติดข้างๆ โดยตรง (ไม่นับทแยง/ด้านบน) | W/Sugar_Cane |
| หลุดเมื่อไร้น้ำ | block update/random tick ถัดไป | W/Sugar_Cane |
| พื้นปลูกได้ | grass block, dirt, coarse dirt, rooted dirt, podzol, mycelium, sand, red sand, suspicious sand, moss/pale moss block, mud, muddy mangrove roots (ต้องติดน้ำ/waterlogged/frosted ice ข้างๆ) หรือบนอ้อยอีกต้น | W/Sugar_Cane |

บอตควร: ปลูกบนทราย/ดินติดน้ำ; ตัด block ที่ 2 ขึ้นไป เหลือฐานไว้ (ดูตารางพื้นปลูก)
ตัดสินผล: เกณฑ์แล็บ — ผ่านถ้าได้ ≥2 อ้อยต่อรอบเก็บโดยฐานยังอยู่

## stem-crops · ฟักทอง/แตงโม
| รายการ | ค่า | แหล่ง |
|---|---|---|
| ระยะ stem | age 0–7 (8 ระยะ) | W/Melon_Seeds, W/Pumpkin_Seeds |
| ผลิตผลเมื่อ | stem สุก + ไม่มีผลติดอยู่ ติดกัน | W/Melon_Seeds |
| ผลขึ้นบน | dirt, grass, farmland, podzol, mycelium, moss, mud ฯลฯ | W/Melon_Seeds |
| ต้องมี | ช่องว่างข้าง stem 1 ช่อง (free block) | W/Tutorial:Pumpkin_and_melon_farming |

บอตควร: เว้นช่องข้าง stem ด้วยดินพร้อมผล, ทุบเฉพาะผล (ไม่ทุบ stem), stem ที่ผูกผลเป็น attached stem
ตัดสินผล: เกณฑ์แล็บ — ผ่านถ้าได้ผลซ้ำ ≥2 รอบโดย stem ไม่ถูกทำลาย

## cactus · กระบองเพชร
| รายการ | ค่า | แหล่ง |
|---|---|---|
| สูงสุด | 3 block (ต่อ 16 random tick) | W/Cactus |
| block ข้างเคียง | block ใดๆ ติดข้าง ทำให้ cactus หัก | W/Cactus |
| ทรายตกทับ | กลายเป็นไอเทม ไม่ทำลายต้น | W/Cactus |
| พื้นปลูกได้ | sand, red sand, suspicious sand หรือบน cactus อีกต้น | W/Cactus |

บอตควร: อย่าให้มี block ข้างต้น (เว้น 1 ช่องรอบ), เก็บ block ที่ 2–3; ระวังดาเมจจากการชน
ตัดสินผล: เกณฑ์แล็บ — ผ่านถ้าไม่ได้ดาเมจและเก็บได้ ≥1 ชิ้น/รอบ

## bamboo-kelp · ไผ่และสาหร่ายทะเล
| รายการ | ค่า | แหล่ง |
|---|---|---|
| ไผ่ ความสูง | 12–16 | W/Bamboo |
| ไผ่ แสงยอด | ≥9 (ต่ำกว่า 8 ไม่โต) | W/Bamboo |
| ไผ่ โต | 1/3 ต่อ random tick (เฉลี่ย ~204.8 วินาที ที่ tick speed 3) | W/Bamboo |
| ไผ่ พื้นปลูกได้ | moss/pale moss block, grass block, dirt, coarse dirt, rooted dirt, gravel, mycelium, podzol, sand, red sand, suspicious sand/gravel, mud, muddy mangrove roots, หรือไผ่ | W/Bamboo |
| kelp สูงสุด | age 25 หยุดโต; สูง 2–26 | W/Kelp |
| kelp โอกาสโต | 14% ต่อ random tick (~487.6 วินาทีเฉลี่ย) | W/Kelp |

บอตควร: ไผ่ตัดทิ้งที่โคน/กลาง ให้ต้นยังโต; kelp หักยอดตอน age 25 ได้เพิ่ม
ตัดสินผล: เกณฑ์แล็บ — ผ่านถ้าได้ ≥N ชิ้นต่อรอบ (N ตั้งตามงาน)

## sweet-berries-cocoa · เบอร์รี่หวาน/โกโก้
| รายการ | ค่า | แหล่ง |
|---|---|---|
| sweet berry | 4 stage; แสง ≥9 | W/Sweet_Berry_Bush |
| ผลผลิต | stage3: 1–2, stage4: 2–3 (Fortune +1/ระดับ) | W/Sweet_Berry_Bush |
| cocoa | 3 stage; วางบน jungle log/wood (รวม stripped) | W/Cocoa_Beans |
| cocoa โต | 20% ต่อ random tick (~5:41 นาที/stage) | W/Cocoa_Beans |
| cocoa ผล | stage1–2: 1 เม็ด, stage3: 3 เม็ด | W/Cocoa_Beans |

บอตควร: ใช้ปุ่ม use เก็บ berry (bush ไม่ถูกทำลาย) ; cocoa เก็บเมื่อ stage 3 เท่านั้น
ตัดสินผล: เกณฑ์แล็บ — ผ่านถ้า berry ได้ ≥2 และ bush ยังอยู่; cocoa ได้ 3 เม็ด

## nether-wart · เนเธอร์วอร์ต
| รายการ | ค่า | แหล่ง |
|---|---|---|
| พื้น | soul sand เท่านั้น (ทุกมิติ) | W/Nether_Wart |
| stage | age 0–3 (4 stage) | W/Nether_Wart |
| โต | 10% ต่อ random tick; ครบ ~34.1 นาที เฉลี่ย | W/Nether_Wart |
| แสง/สภาพแวดล้อม | ไม่มีผล | W/Nether_Wart |
| bone meal | ใช้ไม่ได้ | W/Nether_Wart |

บอตควร: ปลูกบน soul sand, เก็บเมื่อ age=3 แล้วปลูกซ้ำ
ตัดสินผล: เกณฑ์แล็บ — ผ่านถ้าเก็บที่ age 3 ครบ

## mushroom · เห็ด
| รายการ | ค่า | แหล่ง |
|---|---|---|
| เห็ดน้ำตาลแพร่ | 4% ต่อ tick ถ้า <5 ต้นใน 9×9×3 | W/Brown_Mushroom |
| แสงที่แพร่ได้ | ≤13 (วางได้ที่ ≤12) | W/Brown_Mushroom |
| ความสูงเห็ดยักษ์ | 5–7 block; โอกาส 1/12 สูงเป็นสองเท่า −1 (9/11/13); ต้องโล่งเหนือเห็ด ≥5 (7 ให้ขึ้นได้ส่วนใหญ่, 13 ให้เกิดได้ทุกแบบ); bone meal สำเร็จ 40% | W/Huge_Mushroom, W/Red_Mushroom |
| bone meal → เห็ดยักษ์ | บน mycelium/podzol ทุกแสง; ดิน/หญ้าแสง ≤12; ว่างเหนือหัว 5 block | W/Brown_Mushroom |

บอตควร: เก็บในที่มืด/mycelium; เว้นที่ว่างก่อนใช้ bone meal
ตัดสินผล: เกณฑ์แล็บ — ผ่านถ้าได้เห็ดยักษ์โดย block ไม่ติดขวาง

## trees · ต้นไม้/ต้นกล้า
| ชนิด | พื้นที่ว่างที่ต้องมี | แหล่ง |
|---|---|---|
| sapling ทั่วไป | แสงที่ block เหนือ ≥9 (birch/spruce ≥8 ตามสรุป) | W/Sapling |
| oak | คอลัมน์ 1×1 สูง ≥4; fancy oak 4–14 | W/Sapling |
| birch/spruce | สูง 9 block (10 ดีกว่า) | W/Sapling |
| dark oak | 3×3 สูง ≥7 เหนือต้นกล้า NW (นับรวม 8) | W/Sapling |
| cherry | 5×5 สูง 8 (นับรวม 9) | W/Sapling |

บอตควร: โล่งก่อนปลูก, เก็บใบ/ตัดท่อน, ปลูกซ้ำ; dark oak ต้องปลูก 4 ต้นเป็น 2×2 (ปลูกต้นเดียวไม่โต; W/Sapling) และต้นกล้า NW ต้องมีที่ว่าง 3×3 เหนือหัว
ตัดสินผล: เกณฑ์แล็บ — ผ่านถ้าเติบโตเป็นต้นภายในกรอบเวลาที่ตั้ง

## composter · คอมโพสเตอร์
| รายการ | ค่า | แหล่ง |
|---|---|---|
| ระดับ | 0–8 (8 = เก็บ bone meal) | W/Composter |
| โอกาสต่อชิ้น | 30/50/65/85/100% | W/Composter |
| ชิ้นแรกตอนว่าง | เพิ่มชั้นเสมอ | W/Composter |
| เปลี่ยนเป็นพร้อม | ชั้น 7 + 20 tick | W/Composter |

บอตควร: ใส่เมล็ด/ผลผลิตเหลือ, เก็บเมื่อระดับ 8
ตัดสินผล: เกณฑ์แล็บ — ผ่านถ้าได้ bone meal ≥1 จากของเหลือ

## auto-farm-ideas · ไอเดียฟาร์มอัตโนมัติ (บอตทำได้)
| ไอเดีย | หลักการ | แหล่ง |
|---|---|---|
| cactus | ให้ block ข้างที่ว่างเหนือยอด ต้นโตแล้วหักเอง | W/Cactus |
| sugar cane | น้ำข้างฐาน+ตัดสูง | W/Sugar_Cane |
| kelp | ตัดที่ age 25 | W/Kelp |
| crop | ใช้บอตเก็บเมื่อ age เต็ม + ปลูกซ้ำ | W/Tutorial:Crop_farming |
| แปลงน้ำ | แปลงน้ำกลาง รัศมี 4 | W/Farmland |

บอตควร: เริ่มด้วยแปลง wheat+น้ำ+คบไฟ → composter วนปุ๋ย
ตัดสินผล: เกณฑ์แล็บ — ผ่านถ้าได้อาหาร ≥X ต่อ 10 นาที (X ตั้งตามงาน)

## unverified · ยังไม่ยืนยัน
- เกณฑ์ "ตัดสินผล" ทั้งหมดเป็น threshold ของแล็บ ไม่ใช่ค่าวิกิ
- รัศมีไผ่ (ระยะแพร่/ขอบเขต) [ไม่แน่ใจ]
- ค่า age สูงสุดของ kelp/ไผ่ในระดับ block state ละเอียด ไม่ได้ตรวจ [ไม่แน่ใจ]
- อ่านจากสรุปผลค้น ไม่ได้ดึงหน้าเต็ม (fetch ถูกบล็อก)
