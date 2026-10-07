# P1 ไม้ / table / เครื่องมือไม้

<!-- สร้างอัตโนมัติโดย scripts/split_kb.mjs จาก docs/playbook/PROGRESSION.md › 10. Playbook รายไมล์สโตน (อาการ → สาเหตุ → แก้ → ตัวเลข+แหล่ง → ตัดสินผล → เทสจริง) · ห้ามแก้มือ -->
อ้างอิงย่อ: W=https://minecraft.wiki/w/ (เช่น `Durability` = W+Durability)

- อาการ: log=0 เกิน 3 นาที หลัง spawn ; ไม่มี crafting_table เกิน 5 นาที ; บอทวนเดินในทะเลทราย/ทะเล
- สาเหตุ: spawn ไร้ต้นไม้ ; pathfinding ติด ; ไม่รู้สูตร (planks→table 4)
- แก้: 1) มองหา log ใน 64 บล็อก 2) ไม่มี → เดินเส้นตรงทิศเดียว 100 บล็อก 3) ได้ log → planks → table 4 planks → stick (2 planks→4) → wooden pickaxe (3 planks+2 sticks)
- ตัวเลข: table 4 planks W+Crafting ; stick W+Stick ; pickaxe W+Wooden_Pickaxe
- ตัดสินผล: ผ่านเมื่อ wooden_pickaxe>=1 ภายใน 8 นาที ; ไม่ผ่าน → ย้ายจุด/ให้เพื่อนมาแชร์ log
- เทสจริง: spawn world flat/desert, วัดเวลาจนได้ wooden_pickaxe, ทำ 3 รอบ
