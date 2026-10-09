# Entry E1: สร้างและจุด portal

<!-- สร้างอัตโนมัติโดย scripts/split_kb.mjs จาก docs/playbook/NETHER_END.md › 2. สภาพแวดล้อม Nether · ห้ามแก้มือ -->
URL ย่อ: W = https://minecraft.wiki/w/

- อาการ: ไม่มีบล็อกพอร์ทัลม่วงหลังวางกรอบ
- สาเหตุ: กรอบเล็กเกิน/ไม่ใช่ obsidian/ยังไม่จุด
- แก้: วางกรอบสี่เหลี่ยมตั้ง ขั้นต่ำ 4 กว้าง x 5 สูง ใช้ obsidian 10 บล็อก (ไม่ต้องมีมุม) แล้วจุดไฟด้านในด้วย flint and steel (หรือ fire charge)
- ตัวเลข: ขั้นต่ำ 4x5, 10 obsidian, สูงสุด 23x23 (W/Nether_portal)
- ตัดสินผล: ถูก = บล็อก nether_portal ปรากฏภายใน 5 วินาทีหลังจุด; ผิด = ใช้เวลา > 30 วินาทีหรือวางไม่ครบ 10
- เทสจริง: ให้บอทสร้างจาก inventory (10 obsidian + flint and steel) วัดเวลา
