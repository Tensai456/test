# ไอเท็มฟื้นเลือด

<!-- สร้างอัตโนมัติโดย scripts/split_kb.mjs จาก docs/wiki/health.md · ห้ามแก้มือ -->
> W = https://minecraft.wiki/w/ · ข้อมูลจากสรุปผลค้นหาวิกิ (ไม่ได้เปิดหน้าเต็ม) · เกณฑ์ที่ติดป้าย "เกณฑ์แล็บ" คือค่าที่แล็บตั้งเอง ไม่ใช่ค่าของเกม · ค่าที่ไม่พบ = [ไม่แน่ใจ]

| ไอเท็ม | ผล (Java) | แหล่ง |
|---|---|---|
| แอปเปิลทอง | Regeneration II 5 วิ (ฟื้น 4 HP) + Absorption 2:00 | W/Golden_Apple |
| แอปเปิลทองมนตร์ | Absorption IV 2 นาที (+16 HP), Regeneration II 20 วิ, Fire Res 5 นาที, Resistance I 5 นาที; กิน 32 tick | W/Enchanted_Golden_Apple |
| Suspicious Stew (ดอก oxeye daisy) | Regeneration 7 วิ | W/Suspicious_Stew |
| Potion Healing I | ฟื้นทันที 4 HP | W/Instant_Health |
| Potion Regeneration I | 45 วิ, 1 HP ทุก 50 tick (รวม 18 HP) | W/Potion_of_Regeneration |
| Potion Regeneration II | 22 วิ, 1 HP ทุก 25 tick | W/Potion_of_Regeneration |

[ไม่แน่ใจ] ค่า Healing II (สูตรวิกิ: 2×2^level) และ stew ดอกอื่น.

บอตควร:
- ใช้ potion/แอปเปิลทองก่อนเลือดต่ำวิกฤต (เกณฑ์แล็บ: ≤8 HP)
- แอปเปิลทองมนตร์ใช้ตอนเสี่ยงสูง (บอส/PvP) เพราะมี Resistance+Absorption

ตัดสินผล: หลังกิน/ดื่ม เลือด+Absorption ต้องเพิ่มภายใน 2 วินาที (เกณฑ์แล็บ); ใช้แล้วเลือดเต็มอยู่ = สิ้นเปลือง.
