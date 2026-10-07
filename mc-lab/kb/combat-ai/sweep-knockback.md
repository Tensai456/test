# Sweep และ Knockback

<!-- สร้างอัตโนมัติโดย scripts/split_kb.mjs จาก docs/wiki/combat-ai.md · ห้ามแก้มือ -->
> W = https://minecraft.wiki/w/ (Shield, Blocking, Sweeping_Edge, Knockback_(mechanic), Damage, Armor, Breach, Density, Crossbow, Bow, Totem_of_Undying, Zombie, Skeleton, Stray, Bogged, Spider, Creeper, Enderman, Witch, Drowned, Ravager, Slime, Ghast, Blaze, Wither_Skeleton, Hoglin, Piglin, Attribute) · ข้อมูลจากสรุปผลค้นหา ไม่ได้เปิดหน้าเต็ม

| ข้อมูล | ค่า | แหล่ง |
|---|---|---|
| เงื่อนไข sweep | ยืนบนพื้น, ไม่วิ่ง (not sprinting), cooldown ≥ 84.8%, ใช้ดาบ | W/Sweeping_Edge, W/Melee_attack |
| พื้นที่ sweep | ศัตรูรอบเป้าหมายใน 1 × 0.25 × 1 บล็อก | W/Sweeping_Edge |
| ดาเมจ sweep (ไม่มี Sweeping Edge) | 1 HP + knockback | W/Sweeping_Edge |
| ดาเมจ sweep (มี Sweeping Edge) | 1 + BaseDmg × L/(L+1) + ดาเมจเอนชานต์ (Sharpness/Smite/Bane); L=I/II/III = 50%/67%/75% ของดาเมจดาบ; ไม่เพิ่มดาเมจใส่เป้าหมายหลัก | W/Sweeping_Edge |
| ตัวอย่าง | ดาบเหล็ก Sweeping I = 1 + 6×(1/2) = 4 HP | W/Sweeping_Edge |
| sprint-knockback | โจมตีขณะวิ่ง = knockback เพิ่ม + ยกเลิกการวิ่ง; ต้อง cooldown ≥ 84.8%; ซ้อนกับ Knockback enchant ได้ | W/Knockback_(mechanic) |
| ข้อจำกัด | ใช้ร่วมกับ critical หรือ sweep ในเวลาเดียวกันไม่ได้ (sprint-knockback มาก่อน crit); หอก (spear) ทำไม่ได้ | W/Knockback_(mechanic) |

บอตควร: ตีเมื่อ cooldown ≥ ~85%; ถ้าต้องการ crit ให้ตกลงมา (ไม่วิ่ง) แล้วตี; ถ้าต้องการผลักให้วิ่งตี; ถ้าต้องการ sweep ให้หยุดวิ่ง.
ตัดสินผล: เกณฑ์แล็บ — นับ "ตีสำเร็จ" เมื่อ cooldown ≥ 0.848 ตอนตี; ตีวิ่งไม่นับเป็น crit/sweep.
