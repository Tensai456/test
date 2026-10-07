# สเกเลตัน สเตรย์ บ็อกก์

<!-- สร้างอัตโนมัติโดย scripts/split_kb.mjs จาก docs/wiki/combat-ai.md · ห้ามแก้มือ -->
> W = https://minecraft.wiki/w/ (Shield, Blocking, Sweeping_Edge, Knockback_(mechanic), Damage, Armor, Breach, Density, Crossbow, Bow, Totem_of_Undying, Zombie, Skeleton, Stray, Bogged, Spider, Creeper, Enderman, Witch, Drowned, Ravager, Slime, Ghast, Blaze, Wither_Skeleton, Hoglin, Piglin, Attribute) · ข้อมูลจากสรุปผลค้นหา ไม่ได้เปิดหน้าเต็ม

| ข้อมูล | ค่า | แหล่ง |
|---|---|---|
| ระยะยิง | ภายใน 15 บล็อกและมองเห็น | W/Skeleton |
| strafing | วนเลี่ยงเป็นวงกลม, ถอยเมื่อผู้เล่นเข้าใกล้ ≤ 4 บล็อก, วิ่งเข้าหาเมื่อห่าง ≥ 14 | W/Skeleton |
| กลัวหมาป่า | หนีหมาป่าที่ไล่; หลังหมาป่าทำดาเมจได้จะหันมายิง | W/Skeleton, W/Wolf |
| Stray | ธนู Slowness 30 วิ | W/Stray |
| Bogged | ธนู Poison 4 วิ (3 HP); ยิงช้ากว่า (Java Easy/Normal 4.5 วิ, Hard 3.5 วิ) | W/Bogged |
| เล็งสูง | เล็งสูงขึ้น 0.2 บล็อกต่อ 1 บล็อกแนวนอน | W/Skeleton |

บอตควร: เข้าชิดภายใน 4 บล็อกเพื่อบังคับให้ถอย; ใช้บล็อกกำบังหรือโล่; ถ้าโดน Poison อย่าตัวตายเพราะ Poison ไม่ฆ่า (ลด HP ถึง 1) [ไม่แน่ใจ ใน kb อื่น].
ตัดสินผล: เกณฑ์แล็บ — เมื่อ skeleton ยิงอยู่ บอตควรปิดระยะ ≤ 4 บล็อกใน ≤ 5 วิ หรือหลบสายตา.
