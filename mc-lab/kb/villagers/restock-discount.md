# เติมสต็อก/ส่วนลด/ปลุกซอมบี้

<!-- สร้างอัตโนมัติโดย scripts/split_kb.mjs จาก docs/wiki/villagers.md · ห้ามแก้มือ -->
> W = https://minecraft.wiki/w/ (Villager_professions, Workstation, Trading, Librarian, Armorer, Toolsmith, Weaponsmith, Zombie_Villager, Breeding, Iron_Golem, Zombie_siege, Raid, Hero_of_the_Village)
> หมายเหตุ: ข้อมูลมาจาก snippet ค้นหาเท่านั้น (ไม่ได้เปิดหน้าเต็ม); ตัวเลขแล็บ = "เกณฑ์แล็บ" ไม่ใช่ค่าวานิลลา

- ชาวบ้านทำงานที่ job site เติม trade ได้ สูงสุดวันละ 2 ครั้ง แม้ไม่มีเตียง (W/Trading)
- เกิดจาก trade "ล็อก" เมื่อใช้หมด; ต้องมี workstation ใกล้ๆ (W/Trading)
- ราคา: ความต้องการ (demand) และชื่อเสียง (reputation) เปลี่ยนราคา; ชื่อเสียงลบ=แพงขึ้น บวก=ถูกลง (W/Trading)
- รักษา zombie villager: ชื่อเสียงบวกถาวรอย่างมาก; ถ้ามีอาชีพก่อนกลายเป็นซอมบี้ จะให้ส่วนลดถาวรกับผู้รักษา; รักษาซ้ำไม่ซ้อนส่วนลด (W/Zombie_Villager, W/Trading)
- Hero of the Village: ลดราคา 30% + 6.25% ต่อเลเวลที่เพิ่ม (Lv.V = 55%) (W/Hero_of_the_Village)
- ขั้นตอนรักษา: ทำให้ซอมบี้ชาวบ้านติด Weakness แล้วให้กิน golden apple; ใช้เวลาสุ่ม 3600–6000 tick (3–5 นาที) ระหว่างนั้นสั่น มี Strength แทน Weakness (W/Zombie_Villager)
- เร่งได้: เตียง/iron bars ในลูกบาศก์ 9×9×9 สูงสุด 14 ชิ้น ลดเวลาเฉลี่ย ~4.2% (W/Zombie_Villager)

บอตควร: ให้ชาวบ้านเข้าใกล้ workstation ก่อน/หลังเที่ยงเพื่อ restock; รักษาซอมบี้ที่มีอาชีพดีก่อนซื้อของแพง
ตัดสินผล (เกณฑ์แล็บ): ผ่านถ้าราคา trade หลังรักษาต่ำกว่าก่อนรักษาอย่างน้อย 1 มรกต (1 = เกณฑ์แล็บ)
