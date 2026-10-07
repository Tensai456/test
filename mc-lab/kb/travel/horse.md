# ม้า (สถิติ ทามม์ อุปกรณ์)

<!-- สร้างอัตโนมัติโดย scripts/split_kb.mjs จาก docs/wiki/travel.md · ห้ามแก้มือ -->
> W = https://minecraft.wiki/w/ (อ้างเป็น W/Page) · ค่า m/s = blocks/s · "เกณฑ์แล็บ" = ค่าที่แล็บตั้งเอง ไม่ใช่ค่าจาก wiki

| สถิติ | ช่วง | แหล่ง |
|---|---|---|
| speed | 4.86 – 14.57 blocks/s (เฉลี่ย ~9.71) | W/Horse |
| jump | 1.153 – 5.9197 blocks | W/Horse |
| health | 15 – 30 HP | W/Horse |
- สถิติสุ่มตอนเกิด ไม่เปลี่ยนด้วยอาหาร (W/Horse)
- ทามม์: temper เริ่ม 0/100, สุ่ม threshold 0-99 ตอนขึ้นครั้งแรก; ตกแล้ว temper +5; ให้อาหารเพิ่ม temper ได้ (W/Horse)
- ม้ามี 2 ช่อง: saddle และ horse armor (W/Horse)
- Armor points: leather 3, copper 4, iron 5, gold 7, diamond 11, netherite 19 (W/Horse_Armor)
- บอตควร: ขึ้นซ้ำจนเชื่อง แล้วใส่ saddle; ตรวจ speed ก่อนเลือกม้าตัวที่จะใช้
- ตัดสินผล: เกณฑ์แล็บ: จำนวนครั้งขึ้นม้าก่อนเชื่อง <= 20 ผ่าน (ตามคณิต: threshold สูงสุด 99 / 5 ≈ 20 ครั้ง ไม่รวมอาหาร, อนุมานจาก W/Horse)
