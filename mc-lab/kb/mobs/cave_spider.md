# cave spider

<!-- สร้างอัตโนมัติโดย scripts/split_kb.mjs จาก docs/playbook/MOB_TACTICS.md · ห้ามแก้มือ -->
> กฎแล็บที่ใช้กับทุกม็อบ: `mobs/_rules.md`

### 1. ตารางสถิติ (Normal)

| มอน | HP | ดาเมจ Normal | ระยะ/จังหวะ | สปอน | แหล่ง |
|---|---|---|---|---|---|
| Cave Spider | 12 | Poison 7 วิ รวม 6 HP | melee | spawner เหมืองร้าง | [Cave Spider](https://minecraft.wiki/w/Cave_Spider) |

### 2. จุดอ่อน / อาวุธ / หนี / ดรอป

| มอน | จุดอ่อน | อาวุธ/ยุทธวิธีบอท | หนี | ดรอปที่ใช้ |
|---|---|---|---|---|
| Cave Spider | HP 12 เล็กเลยโดนหลายสิบแล้ว | ตีเร็ว | ดื่มนม/น้ำผึ้ง รักษา Poison [Cave Spider](https://minecraft.wiki/w/Cave_Spider) | string |

### 3. Problem Playbook (อาการ -> แก้ -> ตัดสินผล -> เทสจริง)

| มอน | อาการ (ตรวจได้) | แก้ (ทีละขั้น) | ตัดสินผล | เทสจริง |
|---|---|---|---|---|
| Spider/Cave Spider | spider ปีนกำแพง; พิษ (cave) | ตีตอบ; ถ้า Poison ดื่มนม/น้ำผึ้ง | ถูก: ตายใน 8 วิ; พิษหายภายใน 15 วิ | `/summon cave_spider` ในอุโมงค์ |
