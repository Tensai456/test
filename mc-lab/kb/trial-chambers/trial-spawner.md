# กลไก Trial Spawner

<!-- สร้างอัตโนมัติโดย scripts/split_kb.mjs จาก docs/wiki/trial-chambers.md · ห้ามแก้มือ -->
> W = https://minecraft.wiki/w/ (Trial_Chambers, Trial_Spawner, Ominous_Trial_Spawner, Ominous_Trial_Key, Ominous_Vault, Vault, Heavy_Core, Bad_Omen, Breeze, Tutorial:Defeating_trial_chambers) · ข้อมูลจากสรุปผลค้นหา ไม่ได้เปิดหน้าเต็ม

| ข้อมูล | ค่า | แหล่ง |
|---|---|---|
| มอบรวม 1 ผู้เล่น | 6 ตัว, อยู่พร้อมกันสูงสุด 2 | W/Trial_Spawner |
| +1 ผู้เล่น | พร้อมกัน +1, รวม +2 (2 คน=8/3, 3 คน=10/4) | W/Trial_Spawner |
| ความถี่เกิด | 1 ตัวต่อ 40 tick (2 วิ) | W/Trial_Spawner |
| จบแล้ว | ปล่อยของ/กุญแจ แล้ว cooldown 30 นาที (36000 tick) นับต่อแม้ chunk ไม่โหลด | W/Trial_Spawner |

บอตควร: อย่าพาผู้เล่นอื่นเข้าใกล้ถ้าต้องการจำนวนมอบน้อย (บอตตัวเดียว = ง่ายสุด); จดเวลาเคลียร์ แล้วกลับหลัง 30 นาที.
ตัดสินผล: เกณฑ์แล็บ — spawner ถือว่า "พร้อมใหม่" เมื่อผ่าน ≥ 30 นาที (W/Trial_Spawner).
