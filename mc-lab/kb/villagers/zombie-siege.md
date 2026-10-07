# ซอมบี้บุกหมู่บ้าน

<!-- สร้างอัตโนมัติโดย scripts/split_kb.mjs จาก docs/wiki/villagers.md · ห้ามแก้มือ -->
> W = https://minecraft.wiki/w/ (Villager_professions, Workstation, Trading, Librarian, Armorer, Toolsmith, Weaponsmith, Zombie_Villager, Breeding, Iron_Golem, Zombie_siege, Raid, Hero_of_the_Village)
> หมายเหตุ: ข้อมูลมาจาก snippet ค้นหาเท่านั้น (ไม่ได้เปิดหน้าเต็ม); ตัวเลขแล็บ = "เกณฑ์แล็บ" ไม่ใช่ค่าวานิลลา

- ตอนเที่ยงคืน (tick 18000) โอกาส 10% ที่มี siege เกิดที่ไหนสักแห่งใน Overworld ในคืนนั้น (W/Zombie_siege)
- ต้องมีผู้เล่นอยู่ใกล้ village; ซอมบี้ได้สูงสุด 20 ตัวเกิดในหมู่บ้าน ข้ามระยะขั้นต่ำ 24 บล็อกจากผู้เล่น (W/Zombie_siege)
- เงื่อนไขเตียง ≥ 20 และฟ้าผ่า: snippet ระบุไว้ แต่ยังไม่ชัดว่าตรงกับ Java ปัจจุบัน [ไม่แน่ใจ]
- ชาวบ้านอาจถูกฆ่า/กลายเป็นซอมบี้ (Normal/Hard) (W/Zombie_siege)

บอตควร: อย่าอยู่ใกล้หมู่บ้านตอนกลางคืนเที่ยงคืน; ล็อกประตู/ทำให้หมู่บ้านสว่าง [ไม่แน่ใจ — ไม่มี snippet]
ตัดสินผล (เกณฑ์แล็บ): ผ่านถ้าชาวบ้านรอดครบหลังคืนแรกที่สังเกต (ตรวจจำนวนก่อน/หลัง)
