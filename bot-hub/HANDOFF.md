# HANDOFF — bot-hub (ศูนย์คุมบอต + บอต Discord)

> เขียน 2026-10-09 · สถานะ: **โครงพร้อมเสียบ** — เทสได้แค่โหมดจำลอง (ไม่มีเซิร์ฟ/Discord/สมองแมลงวันในเครื่องคลาวด์)
> repo: https://github.com/Tensai456/test · branch `claude/focused-heisenberg-3hmesx` · PR https://github.com/Tensai456/test/pull/1
> อ่านคู่กับ `../mc-lab/HANDOFF_FINAL.md` (สมองกฎ, replay, fuzz)

---

## 0. สรุป 30 วินาที

| ส่วน | สถานะ | ไฟล์ |
|---|---|---|
| หน้าเว็บคุมบอตหลายตัว (เปิด/ปิด, หน้าที่, สมอง, เป้า, ชื่อเรียก, สกิน, สลับรุ่นพี่↔รุ่นน้อง) | ✅ ทำแล้ว · เทสโหมดจำลอง | `web/index.html`, `src/server.mjs`, `src/manager.mjs` |
| สถานะสด: เลือด/หิว/อิ่ม/ตายกี่ครั้ง/แย้งกี่ครั้ง/คิดอะไร/บันได % + ค้างตรงไหน | ✅ | `src/worker.mjs`, `src/ladder.mjs` |
| เลือกสมองรายตัว + ผสม (old / rules / fly-small / fly-full / smart = fly-small+rules / อะไร+อะไรก็ได้) สลับสดไม่ต้องรีสตาร์ต | ✅ กลไก · ⛔ ไฟล์สมองแมลงวัน/สมองเดิมยังไม่ได้เสียบ | `src/brains.mjs`, `brains/README.md` |
| log jsonl ตามสคีมา replay (senior_/intern_) | ✅ | `logs/<วันที่>/` (สร้างตอนรัน) |
| รุ่นน้องเช็กรุ่นพี่ (แย้งเมื่อเห็นอันตรายรอบรุ่นพี่ ≥2 วิ) | 🟡 หยาบ — verdict = unknown เสมอ | `src/worker.mjs` internRow() |
| จับชื่อเรียกเพี้ยน (จาร์วิส/จอวิส/จาวิส/jarvis) + ออนไลน์ตัวเดียวเรียกอะไรก็มา | ✅ เทสแล้ว | `src/wake.mjs`, `test/wake.test.mjs` |
| บอต Discord: แชต + ฟังเสียงห้องเสียง → STT → สั่งบอต | 🟡 เขียนแล้ว **ยังไม่เคยรัน** | `src/discord.mjs` |
| เปลี่ยนสกินในเกม | 🟡 ส่งคำสั่ง `/skin` — ต้องมีปลั๊กอิน | `.env` SKIN_CMD |
| บอตลงมือ "ทำงาน" ตามแผน (ตัดไม้/ขุด/เผา) | ⛔ **ยังไม่มี** — ดู §4 ข้อ 1 | — |

เทส: `npm test` = 12/12 ผ่าน · mc-lab 76/76 ยังผ่าน (แก้ mc-lab 1 จุด: `brainPlugin` รับ `opts.decide`)

---

## 1. ดึงลงเครื่อง (เลือกแบบเดียว)

**แบบ A — ดึงเฉพาะ 2 โฟลเดอร์ (แนะนำ)**
```bash
git clone --filter=blob:none --sparse -b claude/focused-heisenberg-3hmesx https://github.com/Tensai456/test.git kaeron
cd kaeron
git sparse-checkout set bot-hub mc-lab
```
**แบบ B — ทั้ง repo:** `git clone -b claude/focused-heisenberg-3hmesx https://github.com/Tensai456/test.git kaeron`
(ถ้า PR #1 merge แล้ว ใช้ `main` แทนชื่อ branch)

ต้องมี: **Node.js 22+** (https://nodejs.org) · bot-hub ต้องอยู่ข้าง ๆ mc-lab (`MC_LAB_PATH=../mc-lab`)

## 2. ติดตั้ง + รัน

```bash
cd bot-hub
npm install                 # mineflayer + pathfinder (+ discord ถ้าติดได้ — เป็น optional ไม่ติดก็รันได้)
cp .env.example .env        # Windows: copy .env.example .env  → แก้ค่า
npm run sim                 # ลองหน้าจอก่อน (ไม่ต่อเซิร์ฟ) → http://127.0.0.1:8787
npm start                   # ของจริง
npm test
```
- Windows: `npm run sim` ใช้ไวยากรณ์ Linux (`HUB_SIM=1 ...`) → บน Windows ใช้ `set HUB_SIM=1 && node src/server.mjs` [ยังไม่ได้แก้ให้ข้าม OS]
- ครั้งแรก hub ใช้ `config/bots.example.json` (รุ่นพี่ 4 + Sonar27–30) แก้ในหน้าเว็บแล้วจะเขียน `config/bots.json` (ไม่เข้า git)

## 3. ของที่ต้องไปเอามาเสียบ (ลิงก์)

| อะไร | เอาจากไหน | ใส่ที่ |
|---|---|---|
| สมองเดิม (qwen3:8b + กฎ) | โค้ดบอตเดิมของ jing บนเครื่อง | ห่อเป็นไฟล์ตาม `brains/README.md` → `OLD_BRAIN_PATH` |
| สมองแมลงวันเล็ก / FlyWire เต็ม | โค้ดของ jing (ไม่อยู่ใน repo) · ข้อมูล FlyWire: https://flywire.ai | `FLY_SMALL_PATH`, `FLY_FULL_PATH` (ตัวอย่าง `brains/example_fly.mjs`) |
| Discord bot token | https://discord.com/developers/applications → New Application → Bot → Reset Token · **เปิด Message Content Intent** · OAuth2 URL Generator: scope `bot` + สิทธิ์ Read/Send Messages, Connect, Speak | `.env` DISCORD_TOKEN (ห้ามวางในแชต) |
| ตัวแปลงเสียง→ข้อความ (Whisper) | whisper.cpp: https://github.com/ggml-org/whisper.cpp/releases · โมเดล: https://huggingface.co/ggerganov/whisper.cpp (แนะนำ `ggml-large-v3-turbo.bin` ไทยดีพอ/เร็ว [ไม่แน่ใจ ต้องลองกับเสียงจริง]) | `.env` STT_CMD (Windows: `whisper-cli.exe`) |
| เปลี่ยนสกินในเกม | ปลั๊กอิน SkinsRestorer: https://modrinth.com/plugin/skinsrestorer (ลงบน Paper) | `.env` SKIN_CMD — ไวยากรณ์ `/skin set <skin>` [ไม่แน่ใจ ตามเวอร์ชัน] |
| เปลี่ยนชื่อที่แสดงในเกม | EssentialsX `/nick` (ถ้าอยากได้) | `.env` NICK_CMD |
| ผูก Discord ↔ ชื่อในเกม (ให้ "มานี่" รู้ว่าไปหาใคร) | Discord: เปิด Developer Mode → คลิกขวาชื่อ → Copy User ID | `config/bots.json` → `discordMap` |

## 4. ยังไม่มี / ฝากทำต่อ (เรียงตามความสำคัญ)

1. **ตัวลงมือทำงานตามแผน (executor)** — สมองกฎบอกได้ว่า "ตอนนี้ควรตัดไม้" แต่ยังไม่มีโค้ดที่ไปตัดจริง · ตอนนี้ลงมือได้แค่ reflex 5 ท่าของ mc-lab (ว่ายขึ้น/หนีครีปเปอร์/ถือของกันตก/กิน/หยุด) · ต้องเลือก: (ก) ให้รุ่นพี่ยังใช้โปรแกรมเดิมทำงาน แล้ว hub แค่ดู+log หรือ (ข) เขียน executor ราย step ของ chain (logs, stone-tools, iron-pick …) ด้วย pathfinder + mineflayer-collectblock
2. **สมองเดิมเป็นโปรแกรมทั้งตัว?** ถ้าห่อเป็นฟังก์ชันไม่ได้ → ทำโหมด "external": hub สั่งรันโปรแกรมเดิม (`OLD_BRAIN_CMD`) แล้วอ่าน log/สถานะจากมัน · ยังไม่ได้ทำ
3. **verdict ของการแย้ง** — ตอนนี้ unknown เสมอ · ต้องจับ "รุ่นพี่ตาย/เลือดลด ≥4 ใน 10 วิหลังแย้ง" → right (เลือดคนอื่นอ่านจาก metadata ได้บางกรณี [ไม่แน่ใจ])
4. **ทดสอบ Discord จริง** (`!join` → พูด "จาวิส มานี่") · ปรับ threshold ใน `wake.mjs` (0.34) ตามผล STT จริง · เพิ่มคำสั่งใน `COMMANDS`
5. **คำสั่ง "มานี่"** ต้องให้ผู้เล่นอยู่ในระยะโหลดของบอต · ไกลกว่านั้นต้องใช้ /tp (ต้อง op) — ยังไม่ทำ
6. **ผู้ชม (spectator)** ตอนนี้ = เดินตามห่าง 8 บล็อก · โหมด spectator จริงต้องให้เซิร์ฟ `/gamemode spectator <ชื่อ>` หรือดูภาพด้วย prismarine-viewer
7. **สถิติข้ามรอบ** (ตายรวมทั้งวัน, บันไดสูงสุดตลอดกาล) ตอนนี้นับต่อ process — ปิดเปิดแล้วรีเซ็ต · ควรเก็บ `data/stats.json`
8. หน้าเว็บ: ยังไม่มีกราฟย้อนหลัง/เปิดไฟล์ log จากหน้าเว็บ · `npm run sim` บน Windows (ข้อ §2)
9. ความปลอดภัย: hub ผูก 127.0.0.1 · ถ้าเปิด LAN ต้องตั้ง `HUB_TOKEN` (บังคับในโค้ดแล้ว) แต่หน้าเว็บยังไม่ส่ง token — ต้องเปิดผ่าน `?token=` [ยังไม่ทำ header ในหน้าเว็บ]

## 5. ข้อควรรู้ (กันพัง)

- **เปลี่ยน login = ผู้เล่นคนใหม่** บนเซิร์ฟ offline-mode (ของ/ตำแหน่ง/บ้านไม่ตามมา) → อยากเปลี่ยนชื่อเรียก ให้แก้ `display` (หน้าเว็บเตือนแล้ว)
- สมองภายนอกถูกเรียก **5 ครั้ง/วิ/ตัว** → ห้ามรอ Ollama ในฟังก์ชัน (ดู `brains/README.md`)
- มี `rules` ในชุดสมอง = กฎความปลอดภัยชนะเสมอ · สมอง `fly-small` ล้วน / `old` ล้วน = **ไม่มีตาข่ายกฎ** (ตั้งใจให้เทียบได้)
- log 4 แถว/วิ/ตัว ≈ 14,400 แถว/ชม. → 8 ตัว × 72 ชม. ≈ 8.3 ล้านแถว · เช็กพื้นที่ดิสก์ก่อนรันยาว
- replay ใช้ log ได้ทันที: `node ../mc-lab/tools/replay/replay.mjs logs/<วันที่>`
- token/รหัส อยู่ใน `.env` เท่านั้น (gitignore แล้ว) · `.auth/` (Microsoft login cache) ก็ไม่เข้า git

## 6. แผนที่ไฟล์

```
bot-hub/
├─ HANDOFF.md            ← ไฟล์นี้
├─ package.json          scripts: start / sim / test
├─ .env.example          ค่าทั้งหมด (คัดลอกเป็น .env)
├─ config/bots.example.json   โปรไฟล์บอต 8 ตัว + discordMap
├─ src/
│  ├─ server.mjs         เว็บ + API + SSE + เรียก Discord
│  ├─ manager.mjs        เปิด/ปิด/แก้/สลับ/สั่ง (fork worker ต่อบอต)
│  ├─ worker.mjs         บอต 1 ตัว: mineflayer จริง หรือจำลอง · log jsonl · รุ่นน้องแย้ง
│  ├─ brains.mjs         ประกอบ/ผสมสมอง
│  ├─ ladder.mjs         บันได first_night→iron_kit→nether→end→dragon (31 ขั้น)
│  ├─ wake.mjs           จับชื่อเรียก + คำสั่ง
│  ├─ discord.mjs        บอต Discord (แชต + เสียง)
│  └─ config.mjs         .env + bots.json + ตรวจค่า
├─ brains/README.md + example_fly.mjs   สัญญาเสียบสมอง
├─ web/index.html        หน้าเว็บ
└─ test/                 wake · brains · ladder · manager (โหมดจำลอง)
```

## 7. prompt ให้ session ถัดไป (ก๊อปวางได้เลย)

```
อ่าน bot-hub/HANDOFF.md กับ bot-hub/brains/README.md ก่อน (ไม่ต้องอ่านทั้ง repo)
งานต่อ: [ใส่ข้อจาก §4 เช่น ข้อ 1 executor ราย step]
กติกา jing: feedback ก่อนลงมือ + บอกเวลา AI · ห้ามมโน ใช้ [ไม่แน่ใจ] · แก้เฉพาะจุดที่สั่ง · secret อยู่ .env เท่านั้น
รันเทส: cd bot-hub && npm test · cd mc-lab && node --test test/*.test.mjs
```
