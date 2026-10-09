# วัดผลช่วงรอ

<!-- สร้างอัตโนมัติโดย scripts/split_kb.mjs จาก docs/wiki/home-keeping.md · ห้ามแก้มือ -->
> W = https://minecraft.wiki/w/ · โค้ด: `lib/home/home_keep.mjs` (sortPlan · tidyPlan · stashPlan · fitInWindow · createHomeMeter) · ทำเฉพาะตอนว่าง/ปลอดภัย (รอเผา, รอเช้า) — ภัยทุกอย่างมาก่อน

- `fitInWindow({ sort, tidy, waitSec })` → ช่วงรอทำได้กี่ท่า (เวลาต่อท่า = ASSUME: เปิดหีบ 1 วิ · ย้าย 1 กอง 1 วิ · ขุดดิน 0.5 · วาง 0.3 · เดิน 4.317 บล็อก/วิ จาก W/Walking)
- `createHomeMeter()` บันทึกต่อรอบ: เวลารอ · คะแนนจัดหีบ/พื้น ก่อน-หลัง · จำนวนท่า → `summary()` = คะแนนล่าสุด + คะแนนเพิ่มต่อนาทีรอ
- ใช้ตัวเลขจริงจากเซิร์ฟแก้ TIME ในโค้ด
