# ธนูและ Crossbow

<!-- สร้างอัตโนมัติโดย scripts/split_kb.mjs จาก docs/wiki/combat-ai.md · ห้ามแก้มือ -->
> W = https://minecraft.wiki/w/ (Shield, Blocking, Sweeping_Edge, Knockback_(mechanic), Damage, Armor, Breach, Density, Crossbow, Bow, Totem_of_Undying, Zombie, Skeleton, Stray, Bogged, Spider, Creeper, Enderman, Witch, Drowned, Ravager, Slime, Ghast, Blaze, Wither_Skeleton, Hoglin, Piglin, Attribute) · ข้อมูลจากสรุปผลค้นหา ไม่ได้เปิดหน้าเต็ม

| ข้อมูล | ค่า | แหล่ง |
|---|---|---|
| ธนู ชาร์จเต็ม | 0.9 วิ (ดาเมจ 6 HP ไม่เอนชานต์) | W/Bow |
| ธนู critical | ดึงค้าง ≥ 1 วิ → ดาเมจสุ่ม 6–11 HP | W/Bow |
| Crossbow โหลด | 1.25 วิ; Quick Charge ลด 0.25 วิ/เลเวล (I 1.0, II 0.75, III 0.5) | W/Crossbow, W/Quick_Charge |
| Multishot | ยิง 3 ลูก (สูงสุดเลเวล I) | W/Crossbow |
| Piercing | ทะลุเป้า สูงสุด IV; ใช้คู่ Multishot ไม่ได้; ลูกธนูผ่านโล่ ไม่เสีย durability | W/Crossbow, W/Shield |

บอตควร: ยิงธนูเมื่อค้างอย่างน้อย 0.9 วิ; ยิงเป้าที่ยืนนิ่ง/เคลื่อนที่ช้า; ไม่ใช้ธนูกับ breeze.
ตัดสินผล: เกณฑ์แล็บ — ปล่อยธนูก่อน 0.9 วิ ถือว่าชาร์จไม่เต็ม ไม่นับยิงที่ใช้ได้.
