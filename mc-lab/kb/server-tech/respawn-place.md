# บั๊ก "ตายแล้วเกิดปุ๊บวางบล็อก" (jing เจอจริง 7 ต.ค. 2026)

<!-- สร้างอัตโนมัติโดย scripts/split_kb.mjs จาก docs/wiki/server-tech.md · ห้ามแก้มือ -->
> W = https://minecraft.wiki/w/ · P = https://docs.papermc.io/paper/ · จุด [ตรวจ] = ต้องดูตอนต่อบอตจริง

- ตรวจซอร์ส: **mineflayer 4.39 ส่ง event 'spawn' ซ้ำทุกครั้งที่เกิดใหม่** (lib/plugins/health.js — ไม่ใช่แค่ตอนเข้าเซิร์ฟ) · **mineflayer-pathfinder 2.4.5 ไม่ล้าง goal ตอนตาย** (index.js ไม่มีตัวจัดการ death) และค่าเริ่ม allow1by1towers = true + scafoldingBlocks = ดิน/หินกรวด (movements.js)
- สาเหตุที่เป็นไปได้ (ยังไม่เห็นโค้ดบอตจริง [ไม่แน่ใจ ข้อไหน]):
  1. โค้ดเริ่มต้นผูกกับ `bot.on('spawn', …)` → รันซ้ำทุกครั้งที่เกิด (เช่น วางโต๊ะ/ทำที่หลบ/โหลดปลั๊กอินซ้ำ)
  2. pathfinder ยังถือเป้าเดิม → เกิดใหม่แล้วคำนวณทางทันทีขณะชังก์รอบจุดเกิดยังโหลดไม่ครบ → วางบล็อกต่อเสา/สะพาน
- แก้แล้วในปลั๊กอิน brain: ตอนตาย `pathfinder.setGoal(null)` + ปล่อยปุ่มทั้งหมด · ตอนเกิด ช่วงพัก 60 tick (3 วิ) ห้ามวางบล็อก (veto respawn-grace) + ตั้ง justDied ให้กฎ death-recovery · event `brain:died` / `brain:respawned`
- แก้ฝั่งโค้ดบอต: งานเริ่มต้นใช้ `bot.once('spawn', …)` · งานที่ต้องทำทุกครั้งที่เกิดให้แยกเป็นฟังก์ชันที่รันซ้ำได้ไม่พัง · ถ้าใช้ pathfinder: `movements.allow1by1towers = false` ตอนไม่ต้องการให้ต่อเสา และ `bot.on('death', () => bot.pathfinder.setGoal(null))`
- ถ้าใช้ keepInventory = บอตยังมีดิน/หินกรวดหลังตาย จึงวางได้ (ถ้าของหายตอนตาย บอตจะไม่มีบล็อกให้วาง → สาเหตุน่าจะเป็นข้อ 1 ที่หยิบของจากหีบ/ได้ของเริ่มต้น) [ไม่แน่ใจ: ค่า keepInventory ของ s39]
