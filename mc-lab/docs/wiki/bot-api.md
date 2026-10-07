# API บอต: ปรุงยา · เตา · คราฟต์ · บอตซัพพอร์ตทีม (ตรวจข้อความ Gemini)

> ตรวจกับ: ซอร์ส mineflayer 4.39.0 (npm, 7 ต.ค. 2026) · minecraft-data · W = https://minecraft.wiki/w/ · กลไกเกมการปรุงยาอยู่ที่ kb/brewing/* แล้ว (ไม่ซ้ำ) · ไฟล์นี้ = ชั้น API ของบอต

## brewing-slots · ช่องแท่นปรุงยา (Gemini ผิด)
| ช่อง | ใส่อะไร | แหล่ง |
|---|---|---|
| 0, 1, 2 | ขวด (น้ำ/ยา) ซ้าย-กลาง-ขวา | W/Brewing_Stand, W/Java_Edition_protocol/Inventory |
| 3 | ส่วนผสม (nether wart, sugar ฯลฯ) | W/Brewing_Stand |
| 4 | เชื้อเพลิง blaze powder | W/Brewing_Stand |
| 5–31 / 32–40 | กระเป๋าหลัก / hotbar | W/Java_Edition_protocol/Inventory |
- ❌ Gemini เขียนว่าช่อง 0 = ส่วนผสม, 1–3 = ขวด — **ผิด** ถ้าใช้ตามนั้นบอตจะยัดขวดใส่ช่องส่วนผสม
- mineflayer 4.39 **ไม่มี API ปรุงยาเฉพาะ** (ค้นซอร์สไม่พบ "brewing") → ใช้ `bot.openContainer(block)` / `bot.openBlock(block)` แล้วย้ายของด้วย `window`/`bot.moveSlotItem` เอง [ตรวจ: ชื่อเมธอดย้ายช่องที่สะดวกสุดตอนต่อจริง]
- เวลาต้ม 400 tick (kb/brewing/brewing-stand) → `await bot.waitForTicks(400)` ✅ ตรง

บอตควร: เติมช่อง 4 ก่อน → ขวดช่อง 0–2 → ส่วนผสมช่อง 3 → รอ 400 tick → ตรวจช่อง 0–2 ว่าเปลี่ยนชนิดแล้วค่อยใส่ขั้นถัดไป

ตัดสินผล: ใส่ขวดในช่อง 3 = ผิด (ต้มไม่เกิด)

## brewing-gemini-check · ข้อความปรุงยาอื่นของ Gemini
- ✅ ต้องเริ่ม nether wart → awkward ยกเว้นยาอ่อนแอ (Weakness = ขวดน้ำ + ตาแมงมุมหมัก) (kb/brewing/base-chain)
- ✅ redstone = นานขึ้น · glowstone = แรงขึ้นแต่สั้นลง · gunpowder = ยาปา (kb/brewing/modifiers)
- ⚠ "ยาฮีล + ตาแมงมุมหมัก → **ยาพิษ**/ยาลดเลือด" — ถูกคือ **Harming (ลดเลือดทันที)** ไม่ใช่ยาพิษ (kb/brewing/corruption)
- ✅ เมนูส่วนผสม: sugar = Swiftness · glistering melon = Healing · golden carrot = Night Vision · blaze powder = Strength (kb/brewing/recipes)

## furnace-api · เตา (API มีจริง)
- `const f = await bot.openFurnace(block)` → `f.putFuel(type, meta, n)` · `f.putInput(type, meta, n)` · `f.takeOutput()` (mineflayer/lib/plugins/furnace.js) — ใช้กับ smoker/blast furnace ได้ [ตรวจ: ชนิดบล็อกที่ openFurnace รับ]
- ช่องเตา: 0 = วัตถุดิบ · 1 = เชื้อเพลิง · 2 = ผลผลิต ✅ (Gemini ถูก)
- smoker เผาอาหารเร็ว 2 เท่าเตาปกติ (kb/progression/smelting-fuel)

บอตควร: วางเตาในฐาน/ในเหมือง (IRON_RACE S3) · เติมเชื้อเพลิงก่อน วัตถุดิบตาม · กลับมาเก็บตามเวลา (10 วิ/ชิ้น เตา, 5 วิ smoker/blast)

## craft-api · คราฟต์
- `bot.recipesFor(itemId, metadata, minResultCount, craftingTableBlock)` → `bot.craft(recipe, count, craftingTableBlock)` ✅ ตรงซอร์ส (craft.js) · สูตรทั้งหมด: kb/recipes/*
- ของ 2x2 คราฟต์ในกระเป๋าได้ (ส่ง craftingTable = null)

## food-values · ค่าอาหาร (ตรวจกับ minecraft-data)
| อาหาร | หิว | saturation | หมายเหตุ |
|---|---|---|---|
| golden_carrot | 6 | 14.4 | ✅ ตรง |
| cooked_beef / cooked_porkchop | 8 | 12.8 | ✅ ตรง |
| bread / baked_potato | 5 | 6.0 | ✅ ตรง |
| rotten_flesh | 4 | 0.8 | ห้ามกิน (Hunger) ✅ |
| chicken (ดิบ) | 2 | 1.2 | ห้ามกิน (Hunger) ✅ |

## support-health · อ่านเลือดเพื่อน (Gemini โค้ดใช้ไม่ได้)
- ❌ โค้ด Gemini ใช้ `leader.health` — **prismarine-entity ไม่มีฟิลด์ health** (ค้นซอร์สแล้ว) → เงื่อนไข `leader.health < 12` เป็นเท็จตลอด บอตจะไม่ปายาเลย
- เลือดผู้เล่นอื่นอาจอ่านจาก entity metadata ได้ [ไม่แน่ใจ: index ตามเวอร์ชัน 26.1 + เซิร์ฟ Paper อาจไม่ส่ง]
- ทางที่แน่นอน: ให้บอตแต่ละตัวรายงานเลือด/อาหารตัวเองผ่านแชตทีมหรือสคริปต์กลาง → ส่งเข้า `brainPlugin({ team: () => [...] })` (docs/MINEFLAYER_INTEGRATION.md)

บอตควร: ซัพพอร์ตปายาฮีลเมื่อเพื่อนรายงานเลือด <10 และอยู่ ≤4 บล็อก · มองที่เท้าเพื่อนแล้ว activateItem [คิดเอง: ระยะ/มุมยังไม่ได้ทดสอบ]

## gemini-code-bugs · จุดผิดอื่นในโค้ดตัวอย่าง Gemini
- `setInterval(..., 1000) // 50 Ticks` → 1 วิ = **20 tick** ไม่ใช่ 50
- `version: '1.20.1'` → เซิร์ฟเรา = 26.1 (ผ่าน ViaVersion)
- สร้าง `new Movements()` + `require('minecraft-data')` ทุกวินาที → เปลืองเปล่า ควรสร้างครั้งเดียวตอน spawn
- `bot.autoEat.options.startAt` = API เก่า · **mineflayer-auto-eat 5.0.3** (ล่าสุด ส.ค. 2025) เป็น ESM: `import { loader as autoEat } from 'mineflayer-auto-eat'` · `bot.autoEat.setOpts({ minHunger, bannedFood })` · `bot.autoEat.enableAuto()` (README npm)
- ยิงยาเมื่อมีศัตรูใกล้ → ขัดกับกฎ "ห้ามกินตอนศัตรู ≤6" ของเรา? ไม่ขัด (ปายา ≠ กิน) แต่ auto-eat จะกินกลางไฟต์ได้ → **ตั้ง bannedFood + ปิด auto-eat ตอน brain ตัดสินว่ามีศัตรู ≤6** [คิดเอง]

## plugins · ปลั๊กอินเสริม (เวอร์ชันล่าสุดบน npm 7 ต.ค. 2026)
| แพ็กเกจ | เวอร์ชัน | แก้ล่าสุด | หมายเหตุ |
|---|---|---|---|
| mineflayer-pathfinder | 2.4.5 | ก.ย. 2023 | ใช้ทั่วไป [ไม่แน่ใจ: รองรับบล็อกใหม่ 26.x ครบ] |
| mineflayer-auto-eat | 5.0.3 | ส.ค. 2025 | API ใหม่ (setOpts/enableAuto) |
| mineflayer-pvp | 1.3.2 | ก.ค. 2022 | เก่า · **ซ้อนกับกฎเรา** (crit/ระยะ) → ใช้ตัดสินใจจาก brain + bestWeapon แทน [คิดเอง] |
| mineflayer-statemachine | 1.7.0 | ม.ค. 2023 | ไม่จำเป็น — brainPlugin + chains.json ทำหน้าที่ state machine แล้ว |
| mineflayer-crafting-util | 0.5.0 | พ.ค. 2026 | ใหม่ ใช้วางแผนคราฟต์หลายทอดได้ |
| mineflayer-armor-manager | 2.0.1 | ก.ค. 2023 | ใส่เกราะดีสุดอัตโนมัติ — ⚠ ขัดกฎ jing "เสื้อก่อน/ทองเฉพาะรองเท้า"? ไม่ขัดตอนสวม แต่ตอน**คราฟต์**ต้องใช้ลำดับเรา |

บอตควร: ใช้ pathfinder + auto-eat (ตั้งให้เคารพ brain) · ไม่ใช้ pvp/statemachine คู่กับ brainPlugin (ตัดสินใจซ้อนกัน 2 ที่ = ตีกัน)

## support-role · บทบาทซัพพอร์ตในทีม 4 ตัว
- ตาม IRON_RACE/ขงเบ้ง: นักขุด 2 · ตัดไม้+อาหาร 1 · **คนเผา+คุมเตา 1** = ตัวนี้คือ "ซัพพอร์ต" ช่วงต้นเกม (เตา/อาหาร) → ช่วงนรก/End ค่อยเพิ่มหน้าที่ปรุงยา/ปายา [คิดเอง]
- กฎแล็บที่ซัพพอร์ตต้องเคารพ: ห้ามทิ้งอาวุธ · ห้ามขังตัว (PvP) · แบ่งอาหารเมื่อเพื่อน <6 (kb/team/food-share)

## unverified · ยังไม่ยืนยัน
- index metadata เลือดผู้เล่นอื่นใน 26.1 และ Paper ส่งให้หรือไม่ · ชื่อเมธอดย้ายของในหน้าต่างแท่นปรุงยาที่ใช้ง่ายสุดใน 4.39 · pathfinder/pvp กับบล็อก 26.x
