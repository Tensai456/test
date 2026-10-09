# i-frame และการลดดาเมจ

<!-- สร้างอัตโนมัติโดย scripts/split_kb.mjs จาก docs/wiki/combat-ai.md · ห้ามแก้มือ -->
> W = https://minecraft.wiki/w/ (Shield, Blocking, Sweeping_Edge, Knockback_(mechanic), Damage, Armor, Breach, Density, Crossbow, Bow, Totem_of_Undying, Zombie, Skeleton, Stray, Bogged, Spider, Creeper, Enderman, Witch, Drowned, Ravager, Slime, Ghast, Blaze, Wither_Skeleton, Hoglin, Piglin, Attribute) · ข้อมูลจากสรุปผลค้นหา ไม่ได้เปิดหน้าเต็ม

| ข้อมูล | ค่า | แหล่ง |
|---|---|---|
| ภูมิคุ้มกันหลังโดนดาเมจ | 10 tick (0.5 วิ) เป้าหมายแดง | W/Damage |
| ดาเมจ ≤ ดาเมจแรก ระหว่างนั้น | ถูกเมิน | W/Damage |
| ดาเมจสูงกว่า | โดนเฉพาะ "ส่วนต่าง" (7 แล้ว 12 → ครั้งที่สอง 5) เทียบก่อนเกราะ/เอนชานต์/เอฟเฟกต์ แต่หลัง mace | W/Damage |
| สูตรเกราะ | ดาเมจ × (1 − min(20, max(def/5, def − ดาเมจ/(toughness/4 + 2)))/25); ลดสูงสุด 80% (20 จุด) | W/Armor |
| ผล toughness | ตัวหารเพิ่ม → ดาเมจสูงๆ ถูกลดเกราะน้อยลงน้อยกว่า; ขั้นต่ำ def/5 (0.8% ต่อจุด) | W/Armor |

บอตควร: การรัวตีเร็วกว่า 10 tick ไม่เพิ่มดาเมจ (ยกเว้นอาวุธแรงกว่า); เปลี่ยนจากดาบเหล็กเป็นขวาน/ mace ในช่วง i-frame ได้ส่วนต่างเท่านั้น.
ตัดสินผล: เกณฑ์แล็บ — วัดดาเมจรวมใน 10 tick แรกของเป้าหมาย เท่ากับ max ของฮิต ไม่ใช่ผลรวม.
