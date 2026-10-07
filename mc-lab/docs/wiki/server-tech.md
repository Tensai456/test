# เซิร์ฟและเทคนิค (Paper 26.2 + ViaVersion + mineflayer)

> W = https://minecraft.wiki/w/ · P = https://docs.papermc.io/paper/ · จุด [ตรวจ] = ต้องดูตอนต่อบอตจริง

## moved-too-quickly · โดนดึงกลับ/เตะ "moved too quickly"
- เซิร์ฟเช็กความเร็วผู้เล่นทุกแพ็กเก็ต ถ้าเร็วเกิน → ไม่ยอมให้ขยับ (ดึงกลับ) และบันทึก log (P/reference/spigot-configuration: moved-too-quickly-multiplier, moved-wrongly-threshold)
- gamerule player_movement_check / elytra_movement_check เปิดปิดการเช็กได้ (W/Game_rule)
- [ไม่แน่ใจ: ค่าเกณฑ์จริงของเซิร์ฟ s39]

บอตควร:
- ห้าม teleport/ตั้ง position ตรง ๆ ในโค้ด · ให้ physics ของ mineflayer เดินเอง
- โดนดึงกลับ ≥3 ครั้งใน 10 วิ → หยุด เดินช้าลง (ไม่ sprint) [คิดเอง]
- ถูกเตะ → รอ ≥10 วิ แล้วเข้าใหม่ (กันโดนแบนจากการเข้าถี่) [คิดเอง]

ตัดสินผล: นับครั้ง "position correction" ต่อชั่วโมง — สูง = โค้ดเคลื่อนที่มีปัญหา ไม่ใช่สมองบอต

## chunk-unloaded · ชังก์ยังไม่โหลด
- `bot.blockAt()` คืน null เมื่อชังก์ไม่โหลด [ตรวจ] → ไม่รู้ว่าใต้เท้าเป็นอะไร
- เดินเข้าชังก์ที่ยังไม่โหลด = เสี่ยงตก/ติด/โดนดึงกลับ [คิดเอง]

บอตควร: ใต้เท้าหรือทางข้างหน้าเป็น null → หยุดรอจนโหลด · ไม่วางแผนเส้นทางผ่านชังก์ที่ไม่รู้

## tps-low · เซิร์ฟแล็ก (TPS ตก)
- ดู kb/advanced/ticks-tps · บอตประมาณ TPS = (tick เกมที่เดิน) ÷ (วินาทีจริง) [คิดเอง]
- TPS <15: งานที่อิงจังหวะ (MLG, เอลิทรา, PvP, parkour) พลาดง่ายขึ้น [คิดเอง]

บอตควร: TPS <15 → veto งานเสี่ยงที่อิงจังหวะ · ทำงานเบา (ขุด/คราฟต์/ฟาร์ม) แทน

## high-ping · ping สูง
- `bot.player.ping` (ms) [ตรวจ] · แล็บจำลองที่ 10–50 ms (kb/sim/limitations)
- ping >300: ตีช้ากว่าที่เห็น · หลบไม่ทัน [คิดเอง]

บอตควร: ping >300 → veto เริ่ม PvP/parkour/MLG ฝึก · ถ้ากำลังสู้ → ถอยเข้าที่ปลอดภัย

## respawn-place · บั๊ก "ตายแล้วเกิดปุ๊บวางบล็อก" (jing เจอจริง 7 ต.ค. 2026)
- ตรวจซอร์ส: **mineflayer 4.39 ส่ง event 'spawn' ซ้ำทุกครั้งที่เกิดใหม่** (lib/plugins/health.js — ไม่ใช่แค่ตอนเข้าเซิร์ฟ) · **mineflayer-pathfinder 2.4.5 ไม่ล้าง goal ตอนตาย** (index.js ไม่มีตัวจัดการ death) และค่าเริ่ม allow1by1towers = true + scafoldingBlocks = ดิน/หินกรวด (movements.js)
- สาเหตุที่เป็นไปได้ (ยังไม่เห็นโค้ดบอตจริง [ไม่แน่ใจ ข้อไหน]):
  1. โค้ดเริ่มต้นผูกกับ `bot.on('spawn', …)` → รันซ้ำทุกครั้งที่เกิด (เช่น วางโต๊ะ/ทำที่หลบ/โหลดปลั๊กอินซ้ำ)
  2. pathfinder ยังถือเป้าเดิม → เกิดใหม่แล้วคำนวณทางทันทีขณะชังก์รอบจุดเกิดยังโหลดไม่ครบ → วางบล็อกต่อเสา/สะพาน
- แก้แล้วในปลั๊กอิน brain: ตอนตาย `pathfinder.setGoal(null)` + ปล่อยปุ่มทั้งหมด · ตอนเกิด ช่วงพัก 60 tick (3 วิ) ห้ามวางบล็อก (veto respawn-grace) + ตั้ง justDied ให้กฎ death-recovery · event `brain:died` / `brain:respawned`
- แก้ฝั่งโค้ดบอต: งานเริ่มต้นใช้ `bot.once('spawn', …)` · งานที่ต้องทำทุกครั้งที่เกิดให้แยกเป็นฟังก์ชันที่รันซ้ำได้ไม่พัง · ถ้าใช้ pathfinder: `movements.allow1by1towers = false` ตอนไม่ต้องการให้ต่อเสา และ `bot.on('death', () => bot.pathfinder.setGoal(null))`
- ถ้าใช้ keepInventory = บอตยังมีดิน/หินกรวดหลังตาย จึงวางได้ (ถ้าของหายตอนตาย บอตจะไม่มีบล็อกให้วาง → สาเหตุน่าจะเป็นข้อ 1 ที่หยิบของจากหีบ/ได้ของเริ่มต้น) [ไม่แน่ใจ: ค่า keepInventory ของ s39]

## version-lock · ล็อกเวอร์ชัน
- ดู kb/advanced/version-26-3 · ช่วงเทส 3 วันห้ามอัปเซิร์ฟ/ปลั๊กอิน (ตัวแปรเปลี่ยน = เทียบผลไม่ได้) [คิดเอง]
