# ชุดมอบ

<!-- สร้างอัตโนมัติโดย scripts/split_kb.mjs จาก docs/wiki/trial-chambers.md · ห้ามแก้มือ -->
> W = https://minecraft.wiki/w/ (Trial_Chambers, Trial_Spawner, Ominous_Trial_Spawner, Ominous_Trial_Key, Ominous_Vault, Vault, Heavy_Core, Bad_Omen, Breeze, Tutorial:Defeating_trial_chambers) · ข้อมูลจากสรุปผลค้นหา ไม่ได้เปิดหน้าเต็ม

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
