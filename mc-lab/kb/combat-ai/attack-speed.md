# ความเร็วโจมตีตามอาวุธ

<!-- สร้างอัตโนมัติโดย scripts/split_kb.mjs จาก docs/wiki/combat-ai.md · ห้ามแก้มือ -->
> W = https://minecraft.wiki/w/ (Shield, Blocking, Sweeping_Edge, Knockback_(mechanic), Damage, Armor, Breach, Density, Crossbow, Bow, Totem_of_Undying, Zombie, Skeleton, Stray, Bogged, Spider, Creeper, Enderman, Witch, Drowned, Ravager, Slime, Ghast, Blaze, Wither_Skeleton, Hoglin, Piglin, Attribute) · ข้อมูลจากสรุปผลค้นหา ไม่ได้เปิดหน้าเต็ม

| อาวุธ | attack speed → cooldown | แหล่ง |
|---|---|---|
| ดาบ | 1.6 → 0.625 วิ | W/Melee_attack, W/Sword |
| ขวาน ไม้/หิน/ทองแดง | 0.8 → 1.25 วิ | W/Melee_attack |
| ขวานเหล็ก | 0.9 → 1.11 วิ | W/Melee_attack |
| ขวาน ทอง/เพชร/เนเธอไรต์ | 1.0 → 1 วิ | W/Melee_attack |
| พิคแอกซ์ | 1.2 → 0.833 วิ | W/Melee_attack |

เสริม: ตารางดาเมจ/mace/spear/trident ดู kb/weapons/melee.md (ไม่ซ้ำที่นี่).
บอตควร: รอ cooldown เต็มก่อนตีทุกครั้ง (ดาเมจลดตามส่วนที่ชาร์จ [ไม่แน่ใจ สูตรสเกลเต็ม]); ขวานแรงต่อครั้งแต่ช้า ใช้ตีโล่/คู่ต่อสู้ที่เคลื่อนที่น้อย.
ตัดสินผล: เกณฑ์แล็บ — ช่วงเวลาระหว่างตี ≥ cooldown ของอาวุธที่ถือ (20/speed tick).
