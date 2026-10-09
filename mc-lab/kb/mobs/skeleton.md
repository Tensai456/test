# skeleton

<!-- สร้างอัตโนมัติโดย scripts/split_kb.mjs จาก docs/playbook/MOB_TACTICS.md · ห้ามแก้มือ -->
> กฎแล็บที่ใช้กับทุกม็อบ: `mobs/_rules.md`

### 1. ตารางสถิติ (Normal)

| มอน | HP | ดาเมจ Normal | ระยะ/จังหวะ | สปอน | แหล่ง |
|---|---|---|---|---|---|
| Skeleton | 20 | ธนู 1-5 (ตามระดับ/ความเร็ว) | ธนู; interval [ไม่แน่ใจ] | Overworld มืด | [Skeleton](https://minecraft.wiki/w/Skeleton) |

### 2. จุดอ่อน / อาวุธ / หนี / ดรอป

| มอน | จุดอ่อน | อาวุธ/ยุทธวิธีบอท | หนี | ดรอปที่ใช้ |
|---|---|---|---|---|
| Skeleton/Stray/Bogged/Parched | ไหม้แดด (skeleton) | เข้าประชิด zigzag; ใช้เสาบัง | วนหลังบล็อก; ถอยออกนอกแนวยิง | ธนู/กระดูก; Bogged ตัดขนได้ 2 เห็ด [Bogged](https://minecraft.wiki/w/Bogged) |

### 3. Problem Playbook (อาการ -> แก้ -> ตัดสินผล -> เทสจริง)

| มอน | อาการ (ตรวจได้) | แก้ (ทีละขั้น) | ตัดสินผล | เทสจริง |
|---|---|---|---|---|
| Skeleton/Stray/Bogged/Parched | projectile arrow เข้าหา, ระยะ >5 | ซิกแซก -> บังด้วยบล็อกที่มีอยู่ -> ประชิด -> ตี; ล้างเอฟเฟกต์ (นม) | ถูก: ปิดระยะ <=10 วิ; ผิด: ยืนนิ่งโดนยิง >3 ดอก | `/summon skeleton` (stray/bogged/parched ตามชื่อ) ที่ 12 บล็อก |
