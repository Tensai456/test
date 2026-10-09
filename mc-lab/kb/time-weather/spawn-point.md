# จุดเกิดใหม่ (เตียง/anchor)

<!-- สร้างอัตโนมัติโดย scripts/split_kb.mjs จาก docs/wiki/time-weather.md · ห้ามแก้มือ -->
> W = https://minecraft.wiki/w/ (อ้างเป็น W/Page) · ค่าที่ไม่มีแหล่งอ้าง = [ไม่แน่ใจ] · "เกณฑ์แล็บ" = threshold ที่แล็บตั้งเอง ไม่ใช่ค่าจากวิกิ

| หัวข้อ | กฎ | อ้างอิง |
|---|---|---|
| ตั้ง spawn | เข้านอนหรือคลิกขวาเตียงตอนกลางวัน; เตียงระเบิดไม่ตั้ง spawn | W/Bed |
| เตียงถูกบัง/หาย | ข้อความ "You have no home bed or charged Respawn Anchor, or it was obstructed" แล้วเกิดที่ world spawn | W/Respawn_Anchor |
| ถูกบังบางส่วน | เกิดบล็อกใกล้เตียงแทนได้ (เหมือน anchor) | W/Respawn_Anchor |
| Respawn Anchor | ต้องอยู่ Nether, มี ≥1 charge, เติมด้วย glowstone block, สูงสุด 4; ใช้ 1 charge ต่อ respawn | W/Respawn_Anchor |
| พื้นที่ขั้นต่ำ | 1×2×1 | W/Respawn_Anchor |

บอตควร: หลังตายตรวจข้อความ/พิกัด; ถ้าเกิดที่ world spawn ให้ตั้งเตียงใหม่; เก็บ glowstone สำรองหากใช้ anchor
ตัดสินผล (เกณฑ์แล็บ): ผ่าน = พิกัดเกิดอยู่ใกล้เตียง/anchor (ระยะ ≤ 5 บล็อก เกณฑ์แล็บ)
