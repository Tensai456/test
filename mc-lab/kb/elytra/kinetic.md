# ความเสียหายชนผนัง

<!-- สร้างอัตโนมัติโดย scripts/split_kb.mjs จาก docs/wiki/elytra.md · ห้ามแก้มือ -->
> W = https://minecraft.wiki/w/ (หน้าอ้างอิง: W/Elytra, W/Firework_Rocket, W/Phantom_Membrane, W/Mace, W/Damage, W/Feather_Falling, W/Item_frame)
> ที่มา: ผลค้นหา snippet เท่านั้น (ดึงหน้าตรงไม่ได้); ค่าเกณฑ์แล็บ = เกณฑ์ที่ตั้งเอง ไม่ใช่ค่าจาก wiki

| ข้อเท็จจริง | แหล่ง |
|---|---|
| สูตร: damage = 10 × (การเปลี่ยนความเร็วแนวนอน) − 3 (หน่วย HP = ครึ่งหัวใจ) | W/Elytra (snippet) |
| หน่วยความเร็วในสูตร = blocks/tick (ตัวอย่าง 1 block/tick → 7 HP) | W/Elytra (snippet สรุป; ไม่ใช่ข้อความ wiki ตรง ๆ) [ไม่แน่ใจ ระดับความมั่นใจปานกลาง] |
| ชนพื้นผิวแนวนอน (เช่น เพดาน) ไม่เกิด damage แบบนี้ | W/Elytra |
| damage type = fly_into_wall; ข้อความตาย "experienced kinetic energy" | W/Elytra, W/Damage |
| Feather Falling ลดเมื่อชนพื้น แต่ไม่ลดเมื่อชนผนัง | W/Feather_Falling (snippet) |

บอตควร: คำนวณระยะเบรกก่อนถึงผนัง; เลี้ยวขึ้น/ชะลอก่อนชน; เลี่ยงภูมิประเทศแคบ/ถ้ำ
ตัดสินผล: (เกณฑ์แล็บ) ถ้าคาดว่า damage ≥ HP ปัจจุบัน − 4 → ยกเลิกเส้นทาง/ลดความเร็ว
