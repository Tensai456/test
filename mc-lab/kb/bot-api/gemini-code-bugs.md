# จุดผิดอื่นในโค้ดตัวอย่าง Gemini

<!-- สร้างอัตโนมัติโดย scripts/split_kb.mjs จาก docs/wiki/bot-api.md · ห้ามแก้มือ -->
> ตรวจกับ: ซอร์ส mineflayer 4.39.0 (npm, 7 ต.ค. 2026) · minecraft-data · W = https://minecraft.wiki/w/ · กลไกเกมการปรุงยาอยู่ที่ kb/brewing/* แล้ว (ไม่ซ้ำ) · ไฟล์นี้ = ชั้น API ของบอต

- `setInterval(..., 1000) // 50 Ticks` → 1 วิ = **20 tick** ไม่ใช่ 50
- `version: '1.20.1'` → เซิร์ฟเรา = 26.1 (ผ่าน ViaVersion)
- สร้าง `new Movements()` + `require('minecraft-data')` ทุกวินาที → เปลืองเปล่า ควรสร้างครั้งเดียวตอน spawn
- `bot.autoEat.options.startAt` = API เก่า · **mineflayer-auto-eat 5.0.3** (ล่าสุด ส.ค. 2025) เป็น ESM: `import { loader as autoEat } from 'mineflayer-auto-eat'` · `bot.autoEat.setOpts({ minHunger, bannedFood })` · `bot.autoEat.enableAuto()` (README npm)
- ยิงยาเมื่อมีศัตรูใกล้ → ขัดกับกฎ "ห้ามกินตอนศัตรู ≤6" ของเรา? ไม่ขัด (ปายา ≠ กิน) แต่ auto-eat จะกินกลางไฟต์ได้ → **ตั้ง bannedFood + ปิด auto-eat ตอน brain ตัดสินว่ามีศัตรู ≤6** [คิดเอง]
