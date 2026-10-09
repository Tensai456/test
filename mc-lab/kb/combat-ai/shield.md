# โล่

<!-- สร้างอัตโนมัติโดย scripts/split_kb.mjs จาก docs/wiki/combat-ai.md · ห้ามแก้มือ -->
> W = https://minecraft.wiki/w/ (Shield, Blocking, Sweeping_Edge, Knockback_(mechanic), Damage, Armor, Breach, Density, Crossbow, Bow, Totem_of_Undying, Zombie, Skeleton, Stray, Bogged, Spider, Creeper, Enderman, Witch, Drowned, Ravager, Slime, Ghast, Blaze, Wither_Skeleton, Hoglin, Piglin, Attribute) · ข้อมูลจากสรุปผลค้นหา ไม่ได้เปิดหน้าเต็ม

| ข้อมูล | ค่า | แหล่ง |
|---|---|---|
| หน่วงก่อนบล็อกมีผล | 5 tick (0.25 วิ) หลังยกโล่ | W/Blocking |
| มุมบล็อก | ครึ่งวงกลมด้านหน้า 180° (horizontal_blocking_angle ค่าเริ่มต้น 90 = มุมสูงสุดจากทิศที่หัน) | W/Blocking, W/Shield |
| ความทนทาน | 336 | W/Shield |
| ขวานตีโล่ที่กำลังบล็อก | โล่ถูกปิดใช้ 5 วิ (รวมโล่อื่นของเป้าหมายด้วย); ม็อบถือขวาน/Warden ก็บล็อกได้แค่ 1 ครั้งก่อนโล่ถูกปิด | W/Blocking, W/Shield |
| บล็อกได้ | ระยะประชิด, ลูกธนูทุกแบบ (ไฟไม่ติดผู้บล็อก), ระเบิดทั้งหมด | W/Shield |
| บล็อกไม่ได้ | ฟ้าผ่า (แม้ Channeling), ผลยา splash/lingering, evoker fangs, ลมหายใจมังกร, Warden sonic boom, ตกสูง, จมน้ำ, ลูกธนู crossbow ที่มี Piercing (ไม่เสีย durability) | W/Shield, W/Blocking |

บอตควร: ยกโล่ค้างเมื่อเจอ skeleton/creeper ระเบิด/ซอมบี้; ถ้าศัตรูถือขวาน อย่าพึ่งโล่ ให้ถอยหรือตีสวน; ห้ามคิดว่าโล่กันยา/ฟ้าผ่า/evoker fangs.
ตัดสินผล: เกณฑ์แล็บ — ถูกขวานตีโล่แล้วบอตต้องไม่ยกโล่ซ้ำภายใน 100 tick (5 วิ); หมดโล่ (durability 0) = เลิกพึ่งโล่ (W/Shield).
