# ม็อบเนเธอร์

<!-- สร้างอัตโนมัติโดย scripts/split_kb.mjs จาก docs/wiki/combat-ai.md · ห้ามแก้มือ -->
> W = https://minecraft.wiki/w/ (Shield, Blocking, Sweeping_Edge, Knockback_(mechanic), Damage, Armor, Breach, Density, Crossbow, Bow, Totem_of_Undying, Zombie, Skeleton, Stray, Bogged, Spider, Creeper, Enderman, Witch, Drowned, Ravager, Slime, Ghast, Blaze, Wither_Skeleton, Hoglin, Piglin, Attribute) · ข้อมูลจากสรุปผลค้นหา ไม่ได้เปิดหน้าเต็ม

| ข้อมูล | ค่า | แหล่ง |
|---|---|---|
| Ghast | ยิง fireball ทุก ~3 วิ เมื่ออยู่ในระยะ | W/Ghast |
| ตีสะท้อน | ตี fireball ด้วย melee/projectile ส่งกลับไปทิศหัวผู้เล่น; โดน Ghast ตรงๆ ดาเมจ 1000 = ตาย | W/Ghast, W/Fireball |
| Blaze | ชาร์จ 3 วิ ยิง 3 ลูกห่าง 0.3 วิ แล้วรอ 5 วิ; ลูกละ 5 HP + ไฟ 5 วิ (ตามสรุป; Normal ตามตารางความยาก 5) | W/Blaze |
| Wither Skeleton | ตีโดน = Wither 10 วิ (ลด 1 HP ทุก 2 วิ ฆ่าได้ ต่างจาก Poison); HP 20 | W/Wither_Skeleton |
| Hoglin | หนี warped fungus ระยะ 7 บล็อก (วางบนบล็อก/กระถาง); ดาเมจกลาง knockback สูง; ต้านknockback 60% | W/Hoglin |
| Piglin | เป็นศัตรูถ้าไม่ใส่เกราะทอง ≥ 1 ชิ้น; ตรวจทองแท่งแล้ว "ตรวจ" 6 วิ แล้วดรอปของ; เบบี้ไม่ให้ของ | W/Piglin |
| Zombified piglin | piglin ในโอเวอร์เวิลด์/ดิเอนด์แปลงภายใน 15 วิ | W/Piglin |

เสริม: ตารางของแลก piglin ดู kb/piglin/barter.md.
บอตควร: ตี fireball ด้วยดาบ/ธนูหันหน้าสู่ ghast; ใส่เกราะทอง 1 ชิ้นก่อนเข้าเนเธอร์/ bastion; ถือ warped fungus กันฮอกลิน; Wither Skeleton ต้องกินนมแก้ Wither.
ตัดสินผล: เกณฑ์แล็บ — Ghast ตายจาก fireball ตัวเองที่สะท้อน = ผ่าน; ไม่ใส่เกราะทองแล้วโดน piglin รุม = ล้มเหลว.
