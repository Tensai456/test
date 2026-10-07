# เฟสการบินและ perching

<!-- สร้างอัตโนมัติโดย scripts/split_kb.mjs จาก docs/wiki/endgame-modes.md · ห้ามแก้มือ -->
> W = https://minecraft.wiki/w/ (Ender_Dragon, End_Crystal, End_Spike, Exit_portal, Tutorial:Defeating_the_ender_dragon, Wither, Wither_(effect), Wither_Rose, Tutorial:Defeating_the_wither, Shulker, End_City, End_City/Structure/Ship, Hardcore, Game_mode, Spectator, Adventure, Game_rule, Commands/gamerule, Java_Edition_26.1, Java_Edition_26.2, Java_Edition_26.3, Copper_Golem, Happy_Ghast, Sulfur_Cube, Mounts_of_Mayhem, Warden) · ข้อมูลจากสรุปผลค้นหา ไม่ได้เปิดหน้าเต็ม · เพิ่มเฉพาะข้อเท็จจริงใหม่ที่ไม่ซ้ำ kb/nether-end/d3-ender-dragon.md และ wither.md

| ข้อมูล | ค่า | แหล่ง |
|---|---|---|
| เฟสภายใน | 0 วนรอบ, 1 strafe (เตรียมยิง fireball), 2-3 บินลงเกาะพอร์ทัล, 4 ขึ้นจากพอร์ทัล, 5 เกาะพื้นพ่น breath, 6 เกาะหาผู้เล่น, 7 คำรามก่อน breath, 8 charge ใส่ผู้เล่น, 9 บินไปตาย, 10 hover | W/Ender_Dragon |
| Strafe | เมื่อ crystal ถูกทำลาย มังกรเข้า strafe; เมื่อห่างผู้เล่น <= 64 บล็อกยิง fireball | W/Ender_Dragon |
| Perch | ถ้าไม่มีบล็อกที่พิกัดกลาง มังกรลงมาเกาะที่ Y=0 (Java) | W/Ender_Dragon |
| ออกจาก perch | ดาเมจสะสมขณะเกาะ > 50 HP มังกรบินขึ้นและรีเซ็ตตัวสะสม; หรือหลัง breath ติดกัน 4 ครั้ง; หรือหาผู้เล่นไม่พบใน 150 บล็อก | W/Ender_Dragon |
| Breath | หลังคำราม 1.25 วินาที ถ้าผู้เล่นอยู่ใน 20 บล็อกจากโครงสร้างพอร์ทัล พ่น 3 วินาที ผลคล้าย lingering Harming | W/Ender_Dragon |
| ขนาด cloud | จานแนวนอนสูง 1 บล็อก กว้าง 5-6 บล็อก; โซนทำร้ายจริงเล็กกว่า ~3-4 บล็อกตรงกลาง | W/Dragon's_Breath |
| ดาเมจ breath | 3 HP/วินาที ไม่ขึ้นกับความยาก; cloud จาก fireball 6 HP/วินาที | W/Ender_Dragon |

บอตควร: ตีหัวช่วง perch (5-6) ให้ได้ดาเมจสะสมสูง แต่ถอยเมื่อมังกรคำราม (7); ไม่ยืนใน cloud; เมื่อมังกรเริ่ม charge (8) ให้หลบข้างหรือกางโล่ ไม่ถอยตรงๆ [คิดเอง].
ตัดสินผล: เกณฑ์แล็บ — ใน 1 perch บอตต้องสร้างดาเมจ ≥ 50 หรือถอยทันทีเมื่อมังกรเริ่ม phase 7; ยืนใน cloud ≤ 2 วินาที.
