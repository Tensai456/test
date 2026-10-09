# silverfish

<!-- สร้างอัตโนมัติโดย scripts/split_kb.mjs จาก docs/playbook/MOB_TACTICS.md · ห้ามแก้มือ -->
> กฎแล็บที่ใช้กับทุกม็อบ: `mobs/_rules.md`

### 1. ตารางสถิติ (Normal)

| มอน | HP | ดาเมจ Normal | ระยะ/จังหวะ | สปอน | แหล่ง |
|---|---|---|---|---|---|
| Silverfish | 8 | 1 | ตีแล้วเรียกพวกในรัศมี 21×11×21 | infested block (stronghold, ภูเขา, igloo) | [Silverfish](https://minecraft.wiki/w/Silverfish) |

### 2. จุดอ่อน / อาวุธ / หนี / ดรอป

| มอน | จุดอ่อน | อาวุธ/ยุทธวิธีบอท | หนี | ดรอปที่ใช้ |
|---|---|---|---|---|
| Silverfish | ฆ่าในดาบเดียว (เพชร/ขวานหิน+) ไม่เรียกพวก | ตีให้ตายทีเดียว | ถอย | [Silverfish](https://minecraft.wiki/w/Silverfish) |

### 3. Problem Playbook (อาการ -> แก้ -> ตัดสินผล -> เทสจริง)

| มอน | อาการ (ตรวจได้) | แก้ (ทีละขั้น) | ตัดสินผล | เทสจริง |
|---|---|---|---|---|
| Silverfish | block ที่สงสัย (infested) แตกมีตัว | ตีดาบเดียวตาย | ถูก: ไม่เรียกพวกเกิน 1 | `/setblock infested_stone` แล้วขุด |
