# ซอมบี้บุกหมู่บ้าน

<!-- สร้างอัตโนมัติโดย scripts/split_kb.mjs จาก docs/wiki/villagers.md · ห้ามแก้มือ -->
> W = https://minecraft.wiki/w/ (Villager_professions, Workstation, Trading, Librarian, Armorer, Toolsmith, Weaponsmith, Zombie_Villager, Breeding, Iron_Golem, Zombie_siege, Raid, Hero_of_the_Village)
> หมายเหตุ: ข้อมูลมาจาก snippet ค้นหาเท่านั้น (ไม่ได้เปิดหน้าเต็ม); ตัวเลขแล็บ = "เกณฑ์แล็บ" ไม่ใช่ค่าวานิลลา

- ตอนเที่ยงคืน (tick 18000) โอกาส 10% ที่มี siege เกิดที่ไหนสักแห่งใน Overworld ในคืนนั้น (W/Zombie_siege)
- ต้องมีผู้เล่นอยู่ใกล้ village; ซอมบี้ได้สูงสุด 20 ตัวเกิดในหมู่บ้าน ข้ามระยะขั้นต่ำ 24 บล็อกจากผู้เล่น (W/Zombie_siege)
- siege มีเฉพาะ Java (Bedrock ถูกลบ); ผู้เล่นต้องไม่ใช่ spectator, อยู่ใน village ตามนิยาม (subchunk ที่มีเตียงที่ถูกจอง/bell/job site + 3×3×3 รอบๆ) และไม่อยู่ biome แท็ก without_zombie_sieges (W/Zombie_siege)
- siege ไม่เสกซอมบี้ villager/husk/drowned; พายุฟ้าผ่าทำให้พยายามเริ่ม siege ต่อได้เลยรุ่งสาง (W/Zombie_siege)
- เงื่อนไข "เตียง ≥ 20" ใน snippet อาจเป็นข้อมูลเก่า/คนละเวอร์ชัน [ไม่แน่ใจ]
- ชาวบ้านอาจถูกฆ่า/กลายเป็นซอมบี้ (Normal/Hard) (W/Zombie_siege)

บอตควร: อย่าอยู่ใกล้หมู่บ้านตอนเที่ยงคืน; ทำให้หมู่บ้านสว่างเพื่อกันซอมบี้เกิด (ตามเงื่อนไข light level ของ W/Zombie_siege; รายละเอียดป้องกันอื่น [ไม่แน่ใจ] ดู W/Tutorial:Zombie_siege_defense)
ตัดสินผล (เกณฑ์แล็บ): ผ่านถ้าชาวบ้านรอดครบหลังคืนแรกที่สังเกต (ตรวจจำนวนก่อน/หลัง)
