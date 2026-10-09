# husk

<!-- สร้างอัตโนมัติโดย scripts/split_kb.mjs จาก docs/playbook/MOB_TACTICS.md · ห้ามแก้มือ -->
> กฎแล็บที่ใช้กับทุกม็อบ: `mobs/_rules.md`

### 1. ตารางสถิติ (Normal)

| มอน | HP | ดาเมจ Normal | ระยะ/จังหวะ | สปอน | แหล่ง |
|---|---|---|---|---|---|
| Husk | 20 | 3 + Hunger 7×floor(regional diff) วินาที | melee | ทะเลทราย กลางคืน/พายุ กลุ่ม 4 ไม่ไหม้แดด | [Husk](https://minecraft.wiki/w/Husk) |

### 2. จุดอ่อน / อาวุธ / หนี / ดรอป

| มอน | จุดอ่อน | อาวุธ/ยุทธวิธีบอท | หนี | ดรอปที่ใช้ |
|---|---|---|---|---|
| Zombie/Husk/Z.Villager | ไหม้แดด (zombie), Instant Health ทำร้ายอันเดด | ดาบ + ตีแล้วถอย (kite) | วิ่งหนี, อย่ากลัวมาก | rotten flesh, เหล็กหายาก (0.83%) [Zombie](https://minecraft.wiki/w/Zombie); Husk: โดน Hunger ให้กินอาหารหลัง |

### 3. Problem Playbook (อาการ -> แก้ -> ตัดสินผล -> เทสจริง)

| มอน | อาการ (ตรวจได้) | แก้ (ทีละขั้น) | ตัดสินผล | เทสจริง |
|---|---|---|---|---|
| Zombie/Husk | entity zombie/husk <=16 บล็อก, เสียงครวญ | 1 หันหน้า 2 ตีเมื่อ cooldown เต็ม 3 ถอยครึ่งก้าวถ้า HP<10 4 ถ้า Husk กินอาหาร | ถูก: ตายภายใน 10 วิ, HP เสีย <=6. ผิด: วิ่งเข้าฝูง >3 ตัว/ไม่กิน Hunger | `/summon zombie` ใกล้บอท 3 ตัว; จับเวลา+ HP (Husk ใน desert) |
