# ปลั๊กอินเสริม (เวอร์ชันล่าสุดบน npm 7 ต.ค. 2026)

<!-- สร้างอัตโนมัติโดย scripts/split_kb.mjs จาก docs/wiki/bot-api.md · ห้ามแก้มือ -->
> ตรวจกับ: ซอร์ส mineflayer 4.39.0 (npm, 7 ต.ค. 2026) · minecraft-data · W = https://minecraft.wiki/w/ · กลไกเกมการปรุงยาอยู่ที่ kb/brewing/* แล้ว (ไม่ซ้ำ) · ไฟล์นี้ = ชั้น API ของบอต

| แพ็กเกจ | เวอร์ชัน | แก้ล่าสุด | หมายเหตุ |
|---|---|---|---|
| mineflayer-pathfinder | 2.4.5 | ก.ย. 2023 | ใช้ทั่วไป [ไม่แน่ใจ: รองรับบล็อกใหม่ 26.x ครบ] |
| mineflayer-auto-eat | 5.0.3 | ส.ค. 2025 | API ใหม่ (setOpts/enableAuto) |
| mineflayer-pvp | 1.3.2 | ก.ค. 2022 | เก่า · **ซ้อนกับกฎเรา** (crit/ระยะ) → ใช้ตัดสินใจจาก brain + bestWeapon แทน [คิดเอง] |
| mineflayer-statemachine | 1.7.0 | ม.ค. 2023 | ไม่จำเป็น — brainPlugin + chains.json ทำหน้าที่ state machine แล้ว |
| mineflayer-crafting-util | 0.5.0 | พ.ค. 2026 | ใหม่ ใช้วางแผนคราฟต์หลายทอดได้ |
| mineflayer-armor-manager | 2.0.1 | ก.ค. 2023 | ใส่เกราะดีสุดอัตโนมัติ — ⚠ ขัดกฎ jing "เสื้อก่อน/ทองเฉพาะรองเท้า"? ไม่ขัดตอนสวม แต่ตอน**คราฟต์**ต้องใช้ลำดับเรา |

บอตควร: ใช้ pathfinder + auto-eat (ตั้งให้เคารพ brain) · ไม่ใช้ pvp/statemachine คู่กับ brainPlugin (ตัดสินใจซ้อนกัน 2 ที่ = ตีกัน)
