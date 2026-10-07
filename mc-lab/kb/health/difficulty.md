# ระดับความยาก

<!-- สร้างอัตโนมัติโดย scripts/split_kb.mjs จาก docs/wiki/health.md · ห้ามแก้มือ -->
> W = https://minecraft.wiki/w/ · ข้อมูลจากสรุปผลค้นหาวิกิ (ไม่ได้เปิดหน้าเต็ม) · เกณฑ์ที่ติดป้าย "เกณฑ์แล็บ" คือค่าที่แล็บตั้งเอง ไม่ใช่ค่าของเกม · ค่าที่ไม่พบ = [ไม่แน่ใจ]

| หัวข้อ | ค่า | แหล่ง |
|---|---|---|
| ดาเมจม็อบ Normal | D (ฐาน) | W/Difficulty |
| Hard | 1.5×D | W/Difficulty |
| Easy | min(D, 0.5×D+1) | W/Difficulty |
| Starvation Easy | หยุดที่เลือด ≤10 HP | W/Damage |
| Starvation Normal | หยุดที่ 1 HP | W/Damage |
| Starvation Hard/Hardcore | ตายได้ | W/Damage |
| Starvation อัตรา | 1 HP ทุก 4 วิ (80 tick) เมื่อหิว 0 | W/Food_mechanics |
| Regional difficulty | 0.00–6.75; inhabited time คิดสูงสุด 50 ชม. | W/Difficulty |
| Clamped regional | 0–1; Easy = 0, Hard ≥0.125 | W/Difficulty |

บอตควร: ตรวจ /difficulty ก่อนวางแผน; Hard เผื่อเลือด 1.5 เท่า; อย่าฝากชีวิตกับ starvation limit.
ตัดสินผล: เทียบดาเมจม็อบที่รับกับสูตรตามระดับ (เกณฑ์แล็บ: ±1 HP).
