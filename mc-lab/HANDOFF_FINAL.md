# HANDOFF_FINAL — KaeronSonarLab · สรุปงาน cloud session ทั้งหมด (7 ต.ค. 2026)

> ไฟล์เดียวจบ: งาน handoff 12 ข้อ · งานเพิ่มทั้งหมด · ผลทดสอบทุกรอบ · ช่องโหว่/บั๊กที่เจอและแก้ · สิ่งที่ยังไม่ยืนยัน · วิธีใช้ · แผนวันศุกร์ · รายการไฟล์
> **ทุกผลในไฟล์นี้ = ยืนยันระดับจำลอง** (ไม่มีเซิร์ฟ/บอตจริงใน cloud) · branch `claude/focused-heisenberg-3hmesx` (repo tensai456/test) · 106 commits · รายการไฟล์ทั้งหมด: `MANIFEST.md` (800 ไฟล์ · 4.7 MB)

---

## 0. ตัวเลขรวม

| รายการ | ค่า |
|---|---|
| กฎสมอง (`data/triggers.json`) | **102 ข้อ** (reflex + veto) |
| แผน (`data/chains.json`) | 7 ชุด: first_night · iron_kit · nether · end · dragon · home_keep · farm |
| KB (`kb/`) | 593 ไฟล์ · 51 หมวด (สร้างจาก `docs/` ด้วย `scripts/split_kb.mjs`) |
| เทสหน่วย (`test/*.test.mjs`) | **76/76 ผ่าน** |
| เหตุการณ์ fuzz | 39 แบบ (เดี่ยว 36 + chain + chainDeep + จับคู่) |
| สถานะที่จำลองรวม (ชุดกฎล่าสุด) | ≈ 180 ล้าน (เดี่ยว + จับคู่ 111.6M + chain/chainDeep ≈ 14M) |
| ช่องโหว่ที่เจอและปิด | **25 ข้อ** (+ ผลลวง 1 ครั้ง) · รอบล่าสุดทุกชุด 0 ช่องโหว่ |
| บั๊ก mineflayer ที่เจอจากซอร์สและแก้ในปลั๊กอิน | 3 (เกิดแล้ววางบล็อก · knockback 1.21.9+ · spawn ส่งซ้ำ) |

---

## 1. งาน handoff 12 ข้อ (CLOUD_HANDOFF_ALL_20261007)

| ข้อ | งาน | ไฟล์ | สถานะ / หมายเหตุ |
|---|---|---|---|
| A1 | ควรได้อะไรวันไหน | `docs/SURVIVAL_DAYBYDAY.md` | ✅ · YouTube/Fandom ถูกบล็อก → เวลา speedrun จริงเป็น [ไม่แน่ใจ] · เป้าดี/กลาง/ช้าส่วนใหญ่ [คิดเอง] |
| A2 | จุดอ่อนสมองเดิม | `docs/SENIOR_WEAKNESS.md` | ✅ · ชุดเหล็ก 192 นาที ≈ 19× ของแผน S9 (10.2 นาทีในโมเดล) · ข้อเสนอ 10 ข้อผูกกฎ/ไฟล์ |
| A3 | กฎห้ามทำ/ควรแย้ง | `data/triggers.json` (veto) + `docs/PROBLEM_PLAYBOOK.md` + `kb/hazards/*` | ✅ · ตัวเลขเวลาขุด: `data/catalog_26.1/blocks` · ดาเมจตก: `lib/fall_safety.mjs` |
| A4 | วิธีสู้ม็อบทุกตัว | `docs/playbook/MOB_TACTICS.md` + `kb/mobs/*` + `kb/combat-ai/*` + `kb/nether-end/*` | ✅ · ม็อบศัตรู 43 ชนิด + เป็นกลาง 13 |
| A5 | เลือกที่ตั้งบ้าน | `docs/HOME_SITE.md` + `lib/home/home_site.mjs` | ✅ · ตัดทิ้ง: ลาวา/น้ำ/หลุม ≥3/ชัน >3 · ให้คะแนนราบ+ไม้+หิน · เทส 2 ข้อ |
| B6 | PvP ต่ออาวุธ/ชุด | `docs/PVP_PLAYBOOK.md` | ✅ |
| B7 | ฟังก์ชันล้วน PvP + เทส | `lib/pvp/*.mjs` (mace_timing · bow_lead · spear_reach · shield_logic · kb_model · damage · duel_sim · best_weapon · weapon_tactics) + `test/pvp.test.mjs` | ✅ · knockback ปรับตามวิกิ (kbH 0.2037) |
| B8 | PvP ทีม | `docs/PVP_TEAM_TACTICS.md` | ✅ |
| B9 | ตารางเทส PvP | `docs/PVP_TEST_MATRIX.md` | ✅ · ยังไม่ได้รัน `run_duel_matrix.mjs` ตามตารางใหม่ |
| C10 | ออกแบบการเรียนรู้ | `docs/IMITATION_DESIGN.md` + **โค้ด replay ครบ** `tools/replay/*` | ✅ · ดูข้อ 9 |
| C11 | ปัญหา mineflayer 26.x | `docs/MINEFLAYER_26X_ISSUES.md` | ✅ · สถานะ issue บน GitHub ส่วนใหญ่ยืนยันไม่ได้ (gh ถูกบล็อก) |
| C12 | เกณฑ์ลงเล่นจริง/โลกถัดไป | `docs/S40_PLAN.md` | ✅ · เกณฑ์ตัวเลขส่วนใหญ่ [คิดเอง] ปรับจากข้อมูลศุกร์ |

---

## 2. งานเพิ่มนอก handoff (ตามที่ jing สั่งระหว่างทาง)

### 2.1 ความรู้ (วิกิ → KB)
- ค้น minecraft.wiki ครบ 30+ หัวข้อ (`docs/RESEARCH_QUEUE.md`) · ทุกหัวข้อมี "บอตควร" + "ตัดสินผล" · ไม่แน่ใจ = [ไม่แน่ใจ]
- กลุ่มหลัก: version-26x · health · crafting · **recipes 887 สูตร** · structures · **loot** · villagers · farming · **breeding** · animals · biomes · time-weather · enchanting · brewing · navigation · experience · fishing · travel · elytra · redstone · trial-chambers · beacon-conduit · piglin · **spawning** · **ores-world** · **combat-ai** · **endgame-modes** · advanced (กลไกลึก) · team · server-tech · gear-inventory · combat-events · shelter · bot-api · field-smelting · home-keeping · farm-build
- ข้อมูลเกมดิบ (minecraft-data 26.1): บล็อก 1,168 · ไอเทม 1,506 · ม็อบ 157 · อาหาร 44 · เอนชานต์ 43 · เอฟเฟกต์ 40 · สูตร 887 (`data/catalog_26.1/`)

### 2.2 สมอง (`lib/chain.mjs`)
- `decide(state, goal)`: **reflex** (กฎ prio ≥50) → **veto** (ห้ามทำ แยกชั้น ไม่แย่งลำดับ) → **แผน** (chains.json)
- เงื่อนไขที่รองรับ: ~45 ชนิด (ม็อบใกล้/โกรธ/ชาร์จ/ใส่เกราะ · เอฟเฟกต์ · ของ · ตก/จม/ลาวา · บล็อกรอบตัว · ทีม · ตัวเลข over/under · flags ฯลฯ)

### 2.3 เศรษฐกิจเหล็ก (`docs/IRON_RACE.md`)
| กลยุทธ์ | เวลา (ชุดเหล็ก + 1 สแต็ก) |
|---|---|
| S0 ปัจจุบัน (calibrate จาก 40 นาทีจริง) | 40.0 |
| S9 เว้นกิ่ง 6 + อีเต้อเหล็กก่อน + เผาขนาน + เตา 4 + นักขุด 2 | 10.2 |
| S12 = S9 + ขุดในภูเขา Y≈200 (เดิน 2 นาที) | 8.7 |
- แร่เหล็กชุดบน (Y 80–384) เกิด 90 ครั้ง/chunk แต่กระจายกว้าง → ยอดภูเขาหนาแน่นแค่ **≈2 เท่า** ของ Y16 (เคยบอกผิดว่า 9 เท่า แก้แล้ว)
- ตำรา 4 เล่ม (jing ยืนยัน): **OODA · SWOT · ซุนวู · ขงเบ้ง**

### 2.4 ปลั๊กอิน mineflayer (`lib/adapter/`)
| ไฟล์ | ทำอะไร |
|---|---|
| `mineflayer_state.mjs` | บอต → state (ตรวจฟิลด์กับซอร์ส 4.39 แล้ว 8 จุด) · TPS ประมาณ · ศัตรูผู้เล่น |
| `mineflayer_brain.mjs` | `bot.loadPlugin(brainPlugin({...}))` · คิดทุก 4 tick · `brain:decision` · `bot.brain.allowed(action)` · ท่าอัตโนมัติ (ว่ายขึ้น/หนีครีปเปอร์/ถือของกันตก/กิน/หยุดเมื่อชังก์ไม่โหลด) · จำม็อบโกรธ (entityHurt) · **ตาย→หยุด pathfinder + ช่วงพัก 60 tick ห้ามวางบล็อก** · **แก้ knockback 1.21.9+** · เผาไปตะเวนไป + รอยเท้ากลับ · เช็กทางขึ้นบ้าน/ประตูทุก 1 วิ · จำแบบบ้าน/ตรวจบ้านรก |
| `build_io.mjs` | เดิน (pathfinder) · ต่อเสา (กระโดดวางใต้เท้า · ใช้นั่งร้านแท้ก่อน) · รื้อเสา (ไม่ขุดพื้นจริง) |

### 2.5 งานบ้าน/ฟาร์ม/สร้างบ้าน (`lib/home/`)
| ไฟล์ | ทำอะไร |
|---|---|
| `home_keep.mjs` | จัดหีบ 13 หมวด (ป้ายสีไม้) · ฝากของ (เว้นของขุด/อาวุธ/อาหาร) · ปรับพื้น (ใกล้บ้านก่อน · เว้นปากเหมือง/ฟาร์ม/**ทางขึ้นบ้าน**) · คบเพลิงตาข่ายเพชร (รัศมี 100 ≈141 ดวง) · ทางเดิน/ประตูต้องโล่ง · เก็บกวาด (บล็อกมั่ว/ผนังหาย/ของตกพื้น) · วัดผลช่วงรอ |
| `farm_plan.mjs` | แปลง 9×9 น้ำกลาง (ชุ่มรัศมี 4) · แสง ≥9 (คบเพลิง 4/แปลง) · รั้ว + **พรมบนหัวเสาเป็นทางเข้า** · เลือกที่ตั้ง · ลำดับ หาของ→เลือกที่→เคลียร์→สร้าง |
| `house_design.mjs` | 3 แบบ: ไม้ 9×11 (437 บล็อก) · ไม้ 2 ชั้น (652) · หินกันระเบิด + ประตูเหล็ก (438) · คำนวณวัตถุดิบดิบจากสูตร |
| `build_sim.mjs` | จำลองวางทุกบล็อก: มีที่ยึด · เอื้อม ≤4.5 · นั่งร้าน · **บันไดหันถูก (ยืนฝั่งตรงข้าม facing)** · ทุกแบบวางครบ |
| `build_exec.mjs` | แปลงเป็นคำสั่ง `_placeBlockWithOptions` (half) · ถามสมองก่อนทุกก้อน · หยุด/ทำต่อได้ |
| `descend.mjs` | ลงจากที่สูง: เดินลงทีละขั้น ≤3 → ขุดเสา → MLG → กระโดด (เฉพาะไม่ตาย) |
| `home_site.mjs` | (A5) เลือกที่ตั้งบ้าน |
- `lib/economy/field_smelt.mjs`: เผาไปตะเวนไป (บ้าน=รอ · ผิวดิน/เหมือง=ตะเวน ≤50 และ ≤ระยะจำลอง · เตาหยุดถ้าชังก์ไม่โหลด) · เชื้อเพลิง/อาหารไม่พอ → หารอบเตา 50 · เผาเฉพาะเหล็ก/ทอง/ทองแดง/ancient debris

### 2.6 หน้าเว็บ (artifact ส่วนตัว — แชร์ได้จากเมนู Share)
- บ้าน 3 มิติ 3 แบบ + เล่นลำดับวาง: https://claude.ai/artifact/JkQZboiLhTEdn1WSB66m5T (ไฟล์ `web/house.html`)
- MC Duel Lab (จำลอง PvP): https://claude.ai/artifact/VkYmr9uakhsEvNXgY9Rj8K (ไฟล์ `web/index.html`)

---

## 3. LOG การทดสอบทั้งหมด (ตามลำดับเวลา · ยืนยันระดับจำลอง)

| ช่วง | ชุดกฎ | อะไร | ขนาด | ผล |
|---|---|---|---|---|
| think round 1–2 | ~30 | 50 สถานการณ์เขียนเอง (`THINK_SCENARIOS.md`) | 50 | เจอช่องโหว่ #1–3 → แก้ → 50/50 |
| fuzz_decide | ~45 | กริดรวม 60k → 1.5M → 12M | 12M | เจอ #4–8 → แก้ |
| deep 1–2 | 50+ | 22 เหตุการณ์ × 200k | 4.4M | เจอ #9–13 → แก้ |
| รอบ 101–110 | 57 | 22 เหตุการณ์ × 2M | 44M | 0 |
| รอบ 201–210 | 57 | MLG × 2M (หลังแก้ #19) | 2M | 0 |
| ทดสอบตัวตรวจ | เก่า vs ใหม่ | 12 หมวดใหม่กับกฎเก่า | 5k/หมวด | เจอทุกหมวด (ตัวตรวจใช้ได้) → เพิ่ม 37 กฎ |
| chain smoke | 94 | ซ้อน 2–4 · 30k | 30k | **เจอ #24 จมน้ำในชังก์ไม่โหลด** + #25 ตัวตรวจ → แก้ |
| รอบ 311–320 | 94 | 35 เหตุการณ์ × 2M | 70M | 0 |
| จับคู่ 558 คู่ | 94 | ทุกคู่ × 200k | 111.6M | 0 |
| chain 401–424 | 94 | ซ้อน 2–4 | +4.8M (สะสม 6.8M) | 0 |
| chainDeep 401–450 | 94 | ซ้อน 4–7 | 10M | 0 |
| รอบ 501–503 | 99 | 37 เหตุการณ์ | 600k/เหตุการณ์ | 0 (หยุดเพราะเพิ่มกฎ) |
| รอบ 521 | 102 | 38 เหตุการณ์ | – | **ผลลวง 74,244** (รัน split_kb ระหว่าง fuzz) → แก้ตัวตรวจ |
| รอบ 531–535 | **102** | 38 เหตุการณ์ × 1M | 38M | **0** |
| buildHome 701–710 | 102 | ม็อบมาตอนสร้างบ้าน | 2M | 0 |
| chain 701–720 | 102 | ซ้อน 2–4 | 4M | 0 |
| chainDeep 701–748 | 102 | ซ้อน 4–7 | 9.6M | 0 |
| replay สังเคราะห์ | 102 | 4 รุ่นพี่ × 10 นาที | 9,605 แถว | ท่อทำงาน จับที่ฝังไว้ได้ |
- เครื่อง: Xeon 2.1 GHz 4 vCPU · Node 22 · รันขนานครบ 4 คอร์ (`fuzz_parallel.mjs`, `fuzz_chain.mjs` แบบคิว)
- รายละเอียดดิบ: `docs/FUZZ_LOG.md` · `docs/DEEP_FUZZ.md` · `docs/PAIRS_FUZZ.md` · `docs/EVENT_INVENTORY.md` · `docs/fuzz_out/`
- **ความหมายของ 0 ช่องโหว่:** กฎไม่ขัดกันเองและตัดสินถูกเกณฑ์ในทุกสถานะที่สุ่มได้ — **ไม่ได้** พิสูจน์ว่าท่าทำทันในเกมจริง

### 39 เหตุการณ์ที่สุ่ม
lava · veto · ranged · creeper · fall · drowning · warden · crowd · effects · edgeKnock · mixedCrowd · creeperBait · underwater · allMobs (43 ชนิด) · neutral (13) · blocks (1,168) · piglin · weaponTactics · effectsAll (20) · mlg · biomes (15) · weapons · raid · bosses · trial · traps · travel · team · pvp · gear · weather · tech · shelter · oldWorld · fieldSmelt · homeKeep · buildHome · **chain** · **chainDeep** (+ จับคู่ 558 คู่)

---

## 4. ช่องโหว่ที่เจอและปิด (25 ข้อ)

| # | ช่องโหว่ | ปิดยังไง |
|---|---|---|
| 1 | ขุดด้วยเครื่องมือผิดแต่แผนชนะ | prio wrong-tool |
| 2 | ไม่มีกฎ phantom/witch/ghast/brute/levitation/ผงหิมะ/ขุดลงตรง/หิวไม่มีอาหาร | +9 กฎ |
| 3 | ใช้ถังน้ำกันตกในนรก | chooseClutch ตามมิติ |
| 4 | เลือด 2 ยังทำงาน | กฎพักฟื้น |
| 5 | ม็อบกำลังเข้ามา บอตเฉย | กฎตั้งท่ารับ |
| 6 | ตายแล้วไม่กลับเก็บของ · ไม่มีแผนมังกร | death-recovery + chain dragon |
| 7 | blaze/breeze ยืนรอ | กฎม็อบยิงไกล |
| 8 | อยู่ในลาวาแต่ทำ "ห้ามนอน" ก่อน | แยกชั้น veto |
| 9 | กินกลางวงม็อบ | เช็กศัตรู ≤6 |
| 10 | ม็อบยิงไกล 12–16 ไม่มีกฎ | ขยายเป็น 16 |
| 11 | ถูกรุม ≥4 เลือดต่ำยืนสู้ | outnumbered |
| 12 | ติด Wither มีนมไม่ดื่ม | wither-effect |
| 13 | กินหลัง Hunger ตอนครีปเปอร์ใกล้ | เช็กศัตรู ≤6 |
| 14 | ลิงก์ kb ม็อบนรก/End ผิด | mobKb |
| 15 | ม็อบเป็นกลางโกรธไม่มีกฎ | หนี/ฆ่า + veto ห้ามยั่ว |
| 16 | piglin: เปิดหีบ/ขุดทอง/ไม่สวมทอง | veto + กฎสวมทอง |
| 17 | กระบองดิ่งพลาดแล้วตกตาย | สลับของกันตก |
| 18 | DPS มือเปล่าสูงเกินจริง | จำกัด 2 ครั้ง/วิ |
| 19 | ตก >100 เลือกฟาง/น้ำผึ้งที่ยังตาย | chooseClutch ดูความสูง+เลือด |
| 20 | ระยะเอื้อม | ยืนยัน 4.5 (creative 5) |
| 21 | นั่งร้านกันตกทุกความสูง | ใช้ได้ถึง 24 [เกณฑ์แล็บ] |
| 22 | 12 หมวดไม่มีกฎ | +37 กฎ |
| 23 | ร่อนเอลิทราถูกนับว่าตก | ปิดกฎตกตอน gliding |
| 24 | **จมน้ำในชังก์ไม่โหลด → หยุดนิ่งจนตาย** | chunk-unloaded prio 93→66 |
| 25 | ตัวตรวจเชื่อค่าเก่า · seed ซ้ำ | อ่านสถานะจริง · hash ชื่อ |

### บั๊กนอกกฎที่เจอ (จากซอร์สจริง / คำถาม jing)
| บั๊ก | ที่มา | แก้ |
|---|---|---|
| **ตายแล้วเกิดปุ๊บวางบล็อก** (jing เจอจริง) | mineflayer 4.39 ส่ง `spawn` ซ้ำทุกครั้งที่เกิด (health.js) + pathfinder 2.4.5 ไม่ล้าง goal ตอนตาย | ปลั๊กอิน: ตาย→ล้าง goal · เกิด→ห้ามวาง 60 tick · โค้ดบอตควรใช้ `bot.once('spawn')` |
| **knockback แทบเป็น 0 บน 1.21.9+** | โปรโตคอลใหม่ส่ง velocity เป็น lpVec3 แต่ mineflayer ยังหาร 8000 (entities.js) | ปลั๊กอินเขียนทับความเร็วตัวบอต (ปิดได้ `fixVelocity:false`) [ยังไม่ลองเซิร์ฟ] |
| ผลลวง fuzz รอบ 521 | split_kb ลบ/เขียน kb ระหว่างรัน + cache "ไม่มีไฟล์" | ไม่ cache ผลลบ · **ห้ามรัน split_kb ระหว่าง fuzz** |

### ข้อมูล Gemini/Google ที่ตรวจแล้วผิด (แก้ใน KB)
Hardcore มีใน Bedrock ด้วย (1.21.40) · ตาย Hardcore ไม่ลบโลก (เลือก spectate ได้ตั้งแต่ 1.15) · จิ้งจอกเป็น passive · เอื้อม 5 = creative (survival 4.5) · ส่วนลดรักษาซอมบี้ได้ครั้งแรกเท่านั้น (1.20.2+) · random tick = ต่อ game tick ไม่ใช่ต่อวินาที · ซอมบี้พังประตูเฉพาะ Hard · ช่องแท่นปรุงยา 0–2 ขวด / 3 ส่วนผสม / 4 เชื้อเพลิง · ฮีล+ตาแมงมุมหมัก = Harming ไม่ใช่พิษ · 1 วิ = 20 tick · `leader.health` ไม่มีใน mineflayer · auto-eat 5.x ใช้ setOpts/enableAuto · "วิ่งเร็วทะลุกำแพง" แก้แล้วใน 24w36a · Vulkan 26.2 = ทดลอง ไม่มีผลกับบอต

---

## 5. กฎของ jing ที่ใส่ในระบบแล้ว
| กฎ | อยู่ที่ |
|---|---|
| ห้ามชนะด้วยการทิ้งอาวุธ | veto `drop-weapon` |
| ห้ามขังตัว/ก่อกำแพงรอบตัว (PvP) · ที่หลบจากม็อบทำได้ | veto `self-wall-pvp` · `kb/shelter/shelter-rule` |
| enderman: วางบล็อก ตีครั้งเดียว ถอย ตีต่อ เก็บไข่มุก | `kb/mobs/enderman` · กฎ enderman-near |
| เหล็กแรก → อีเต้อเหล็กนักขุด 1 ตัว ที่เหลือเสื้อก่อน · ทองทำรองเท้าเท่านั้น | chain iron_kit (roles) · `kb/recipes/armor` |
| บ้านพื้นราบปลอดภัย | `home_site.mjs` · `build_sim` |
| ของกันตก "Follow" = Scaffold (นั่งร้าน) | `fall_safety` · `descend` · `build_io` |
| ที่หลบทำได้แต่ต้องรู้ม็อบทุบบล็อก · หลบ · หาของจัดการ | `kb/shelter/*` · เหตุการณ์ shelter |
| เผานอกบ้าน: ไม้/อาหารไม่พอหารอบเตา 50 · ตะเวนแล้วจำทางกลับ · ในบ้านรอในบ้าน | `field_smelt.mjs` · ปลั๊กอิน trail |
| จัดหีบแยกหมวด · บ้านเรียบขึ้นเรื่อย ๆ · เว้นที่ขุด · ทางขึ้นบ้าน/ประตูต้องโล่งตลอด · ปักคบเพลิงกันม็อบ รัศมี ~100 | `home_keep.mjs` · กฎ entrance-blocked/no-block-in-passage |
| ฟาร์ม: หาของ→เลือกที่→เคลียร์→ค่อยทำ · รั้ว + พรมเป็นทางเข้า | `farm_plan.mjs` · chain farm |
| ไม่มีไผ่ทำนั่งร้าน → ต่อบล็อกแล้ว MLG/ลงทางเลือดลดน้อยสุด | `descend.mjs` |

---

## 6. ยังไม่ยืนยัน — ต้องดูบนเซิร์ฟจริง

1. จังหวะกระโดดต่อเสา (`build_io.pillar`) กับ ping/TPS จริง
2. ทิศบันไดหลังคาตอนวางจริง (ยืนฝั่งตรงข้าม facing)
3. ตัวแก้ knockback 1.21.9+ (ผ่าน ViaVersion 26.1)
4. pathfinder ข้ามรั้ว+พรม (มองว่ารั้วสูง 1.5)
5. บิตติดไฟ (metadata 0x01) · ระยะตกจากตัวติดตาม vs ดาเมจจริง
6. เวลาต่อท่า (วาง/ขุด/เปิดหีบ) ที่ตั้งเอง · ความเร็วตะเวน 1.5/0.6 m/s
7. เกณฑ์ที่ตั้งเอง: นั่งร้านชั้นเดียว ≤24 · อาหารนอกบ้าน ≥20 แต้ม · น้ำหนักคะแนนที่ตั้งบ้าน · rule_expect ของ replay

### คำถามค้างถึง jing (ตอบทีเดียว)
- เซิร์ฟ s39: `simulation-distance` เท่าไร (เตาเผาหยุดถ้าชังก์ไม่โหลด) · `keepInventory` · `mob_griefing` · ความยาก (Hard → ประตูไม้โดนพัง)
- โค้ดบอตส่วนที่ผูก `spawn` (ยืนยันสาเหตุบั๊กวางบล็อก)
- log จริงสั้น ๆ ไม่กี่นาทีก่อนศุกร์ (ปรับ rowToState ให้ตรงสคีมาจริง)

---

## 7. วิธีใช้ (คำสั่ง)

```bash
cd mc-lab
node --test test/*.test.mjs                         # เทสหน่วย 76 ข้อ
node scripts/split_kb.mjs                           # docs/ → kb/ (ห้ามรันระหว่าง fuzz)
node scripts/deep_fuzz.mjs 200000 lava creeper      # fuzz บางเหตุการณ์
node scripts/fuzz_parallel.mjs 1 10 200000          # ทุกเหตุการณ์ × 10 รอบ ขนานทุกคอร์
node scripts/fuzz_chain.mjs chainDeep 1 50          # ซ้อน 4–7 × 10M แบบคิว
node scripts/fuzz_pairs.mjs 200000                  # จับคู่ครบทุกคู่
node scripts/iron_race.mjs                          # → docs/IRON_RACE.md
node scripts/sim_build.mjs                          # → docs/HOUSE_BUILD.md
node scripts/gen_synthetic_logs.mjs logs/synthetic 10 && node tools/replay/replay.mjs logs/synthetic
node scripts/gen_manifest.mjs                       # → MANIFEST.md
```
เสียบเข้าบอต: `docs/MINEFLAYER_INTEGRATION.md` (§1–5: brain · allowed · ท่าเอง · สร้างบ้าน)

---

## 8. วันศุกร์ 21:00 — ขั้นตอน (runbook)

**หลักการ:** โค้ดคำนวณตัวเลข (replay) · session หลักอ่าน "รายงาน + ไฟล์ที่เกี่ยวข้อง" แล้วตัดสินใจ — **ไม่ให้ session หลักอ่านทั้ง repo (~1.5–2.5 ล้าน token) หรือ log ดิบ (~4 ล้านแถว)**

| เวลา | ขั้น | คำสั่ง / ไฟล์ |
|---|---|---|
| ก่อน 21:00 | ดึง branch ล่าสุด · `npm i` ไม่ต้อง (ไม่มี dependency) · เทสผ่าน | `node --test test/*.test.mjs` |
| 21:00–21:15 | วาง log ที่ `logs/s39/` (แบ่งไฟล์ตามวัน/ตัว ถ้าใหญ่) · ตรวจคุณภาพ | `node tools/replay/replay.mjs logs/s39` → `docs/REPLAY_REPORT.md` §7 |
| 21:15–21:45 | อ่านรายงาน: % ตรง · รายกฎ · veto ฝ่าฝืน · ผู้สมัครขาดกฎ · ผู้ฝึกงาน | session หลัก (prompt ด้านล่าง) |
| 21:45–22:30 | แก้ `data/triggers.json` / `tools/replay/rule_expect.mjs` ทีละข้อ | session หลัก |
| 22:30–23:00 | replay ซ้ำ + fuzz ซ้ำ (≥200k/เหตุการณ์ + chain) · เทส | `fuzz_parallel.mjs 1 1` · `fuzz_chain.mjs chain 1 5` |
| 23:00 | ผ่านเกณฑ์ `docs/S40_PLAN.md` → ใช้กฎชุดใหม่ | commit แยก |

### prompt ให้ session หลัก (คัดลอกไปวาง)
```
อ่านเฉพาะ: mc-lab/HANDOFF_FINAL.md (ข้อ 0,4,5,6,8), mc-lab/docs/REPLAY_REPORT.md, mc-lab/data/triggers.json
และไฟล์ kb ที่กฎซึ่งรายงานบอกว่ามีปัญหาชี้ถึง (ฟิลด์ kb ของกฎนั้น) — ห้ามอ่านทั้ง repo
งาน: เสนอแก้กฎทีละข้อ อ้างตัวเลขจากรายงานทุกข้อ แยกเป็น
 (1) กฎที่รุ่นพี่ไม่ทำตามแล้วไม่เป็นไร → ปรับเกณฑ์/หน้าต่างเวลา
 (2) กฎที่รุ่นพี่ไม่ทำตามแล้วเจ็บ/ตาย → คงไว้ ใช้เป็นตัวอย่างลบ (ห้ามลอกรุ่นพี่)
 (3) ท่าป้องกันที่เราไม่มีกฎ → กฎใหม่ (id, prio, when, do, kb)
ห้ามลบ veto ใด ๆ · ทุกการแก้ต้องผ่าน: node --test, replay ซ้ำ, fuzz_parallel 1 รอบ, fuzz_chain chain 5 รอบ (0 ช่องโหว่)
ไม่แน่ใจ = [ไม่แน่ใจ] ห้ามเดา
```

---

## 9. Replay (C10 โค้ดจริง)
- `tools/replay/`: load_jsonl (สตรีม + QC) · row_to_state (ตาราง §3 ใน IMITATION_DESIGN + `_missing`) · action_class · rule_expect · replay (ใช้ `decide()` ตัวจริง) · metrics (รายงาน)
- ตัดสิน: match / miss (แยก "ไม่เป็นไร" vs "เจ็บ-ตาย") / extra (ท่าป้องกันที่เราไม่มีกฎ) / veto-breach / unknown (ข้อมูลไม่พอ ไม่นับ) / excluded (ช่วงเพิ่งเกิด/ชังก์ไม่โหลด)
- ผลกับ log สังเคราะห์: 9,605 แถวใน 1 วิ · จับ "ไม่หนีครีปเปอร์แล้วโดนระเบิด = กฎถูก รุ่นพี่ผิด" · ขุดลงตรง 72 ครั้ง = veto-breach · ผู้ฝึกงานแย้งถูก 82% / แย้งมั่ว 0%
- **logger ต้องมีฟิลด์:** `tick pos vel onGround hp food inv armor offhand air dim pose act{dig,digBelowFeet,place,attack,use} events flagsRaw{lava,water,fire} standingOn edgeDepth sheltered nearby[{type,id,dist,pos}] timeOfDay`

---

## 10. โครง repo (รายละเอียดทุกไฟล์: `MANIFEST.md`)
| โฟลเดอร์ | คืออะไร |
|---|---|
| `lib/` | โค้ดหลัก: chain (สมอง) · fall_safety · kb · pvp/ · survival/ · economy/ · adapter/ (mineflayer) · home/ |
| `data/` | triggers.json (กฎ 102) · chains.json (แผน 7) · catalog_26.1 (ข้อมูลเกม) |
| `docs/` | เอกสารต้นฉบับ: งาน handoff · ผลจำลอง · wiki/ (ต้นฉบับ KB) · playbook/ · fuzz_out/ |
| `kb/` | ความรู้แยกไฟล์ละหัวข้อ (สร้างอัตโนมัติจาก docs/ — ห้ามแก้มือ) |
| `scripts/` | fuzz · split_kb · gen_* · iron_race · sim_build · run_*_matrix |
| `tools/replay/` | replay วันศุกร์ |
| `test/` | เทสหน่วย 76 ข้อ |
| `web/` | หน้าเว็บ (house.html · index.html Duel Lab) |
