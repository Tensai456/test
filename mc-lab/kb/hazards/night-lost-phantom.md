# 12. กลางคืน / หลงทาง / Phantom

<!-- สร้างอัตโนมัติโดย scripts/split_kb.mjs จาก docs/playbook/HAZARDS.md · ห้ามแก้มือ -->
URL ย่อ: `W=https://minecraft.wiki/w/`

| ค่า | แหล่ง |
|---|---|
| วัน 20 นาที; กลางคืนเริ่ม tick 13000 (~10:50 นาที) | W Daylight_cycle |
| มอนสเตอร์ spawn ที่ sky light <=7 และ block light 0; แจ้งชัดสุด tick 13188 (ฟ้าโปร่ง) | W Daylight_cycle |
| Phantom: Time Since Last Rest >=72000 ticks (3 วันเกม / 1 ชม.จริง) | W Insomnia, W Phantom |
| ลอง spawn ทุก 1-2 นาที, ต้องกลางคืน/พายุ, เหนือระดับน้ำทะเล, มองเห็นฟ้า | W Phantom |
| reset เมื่อนอนบนเตียงหรือตาย | W Phantom |

- **แก้**: ก่อน tick ~12500 วางเตียง/นอน (ต้องนอนได้ทุกคืน?) หรือสร้างหลังคาและอยู่ใต้ดิน; ตั้ง spawn point (เตียง); วางคบไฟเป็นแนวกลับ/ทำ waypoint (ฐาน)
- **ตัดสินผล**: ผิดถ้า tick 13000-23000 อยู่กลางแจ้งไม่มีเกราะ/อาวุธ; ผิดถ้า TimeSinceRest >72000 แล้วยังอยู่ผิวดินตอนกลางคืน
- **เทสจริง**: /time set 13000, นับมอนสเตอร์รอบบอท; เร่ง `statistic time_since_rest` เทียบ 72000
