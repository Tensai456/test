# เสียบสมองเข้าบอต mineflayer (4.39)

> ไฟล์: `lib/adapter/mineflayer_brain.mjs` (ปลั๊กอิน) + `lib/adapter/mineflayer_state.mjs` (แปลงบอต → state) + `lib/chain.mjs` (decide)
> ฟิลด์ mineflayer ตรวจกับซอร์ส 4.39.0 แล้ว · การทำงานกับเซิร์ฟจริง = ยังไม่ได้ทดสอบ (ยืนยันระดับจำลอง)

## 1. ติดตั้ง (บอตแต่ละตัว)
```js
import mineflayer from 'mineflayer';
import { brainPlugin } from './mc-lab/lib/adapter/mineflayer_brain.mjs';

const bot = mineflayer.createBot({ host, port, username: 'senior1', version: '26.1' });
bot.once('spawn', () => {
  bot.loadPlugin(brainPlugin({
    goal: 'iron_kit',                    // หรือ (state) => ชื่อ chain ตามสถานการณ์ (first_night/iron_kit/nether/end/dragon)
    role: 'miner',                       // กฎ jing: อีเต้อเหล็กให้นักขุด 1 ตัว
    enemyNames: [],                      // ชื่อผู้เล่น/บอตศัตรูตอน PvP
    team: () => teammates(),             // [{hp, food, dist}] ของเพื่อนในทีม (ส่งผ่านแชต/สคริปต์กลาง)
    flags: () => ({ inBase, nearVillage, raidActive, oreClaimed, invFull, thunder: bot.thunderState > 0 }),
    everyTicks: 4,                       // คิดใหม่ทุก 4 tick (5 ครั้ง/วิ)
  }));
});
```

## 2. ใช้งาน
| ทำอะไร | โค้ด |
|---|---|
| ฟังการตัดสินใจ | `bot.on('brain:decision', (d, s) => …)` — d.mode = `reflex` (d.rule.id, d.rule.do, d.rule.kb) / `plan` (d.step) |
| ถามก่อนทำสิ่งเสี่ยง | `bot.brain.allowed('sleep')` → `{ ok, vetoes:[{id, why}] }` · action: sleep, attack (+ `{target}`), drop_weapon, wall_in, mine_ore, open_container, mine_gold, place_block, build_wither, drink_ominous, build_shelter, elytra_launch, pvp_engage, parkour, mlg_practice |
| อ่านสถานะล่าสุด | `bot.brain.state` / `bot.brain.last` |
| เขียนท่าเอง | `brainPlugin({ executors: { 'raid-ravager': async (bot, d, s) => … } })` — ทับตัวค่าเริ่มได้ · `defaultExecutors: false` = ปิดของค่าเริ่ม |

## 3. ท่าที่ทำให้อัตโนมัติ (ค่าเริ่ม)
drowning (กระโดดค้าง) · creeper-fusing / charged-creeper (หันหนี + วิ่ง) · falling (ถือของกันตกที่ chooseClutch เลือก — **การวาง/เทน้ำตอนใกล้พื้นยังเป็นหน้าที่โค้ดบอต**) · eat-* (กิน) · chunk-unloaded (หยุด)
ที่เหลือ 80+ กฎ = ส่ง event ให้โค้ดบอตเลือกท่าเอง (ใช้ d.rule.do + ไฟล์ kb ใน d.rule.kb)

## 4. ต้องดูตอนต่อเซิร์ฟจริงครั้งแรก
- ค่า metadata ติดไฟ (bit 0x01) ผ่าน ViaVersion 26.1 · ระยะตกจากตัวติดตาม Y สูงสุด เทียบความเสียหายจริง
- `team`/`flags` ต้องมีโค้ดฝั่งบอตส่งให้ (ตอนนี้ปลั๊กอินไม่รู้เองว่าอยู่ในฐาน/ใกล้หมู่บ้าน)
- นับเวลาตอบสนอง: decide ~ไมโครวินาที/ครั้ง (fuzz 200k สถานะ ≈ 10–20 วิ รวมสุ่ม) → ไม่ใช่คอขวด

## 5. สร้างบ้านตามแบบ (lib/home)
```js
import { cottage } from './mc-lab/lib/home/house_design.mjs';
import { simulateBuild } from './mc-lab/lib/home/build_sim.mjs';
import { planActions, runBuild } from './mc-lab/lib/home/build_exec.mjs';
const design = cottage({ W: 9, L: 11 });
const actions = planActions(design, simulateBuild(design), origin);   // origin = มุมบ้านในโลก (พื้นเรียบ — chooseFarmSite/tidyPlan)
const io = { goto: (x, y, z) => bot.pathfinder.goto(new goals.GoalBlock(x, y, z)), pillar: towerUp, unpillar: digDown, vec: (x, y, z) => new Vec3(x, y, z) };
let r = await runBuild(bot, actions, io);            // หยุดเองเมื่อมีภัย/ของไม่พอ/veto → r.at, r.reason
while (!r.done) { /* ให้สมองจัดการภัย / ไปหาของ */ r = await runBuild(bot, actions, io, { from: r.at }); }
bot.brain.snapshotHouse({ x0, y0, z0, x1, y1, z1 });  // จำแบบบ้านหลังสร้างเสร็จ
```
- วางด้วย `bot._placeBlockWithOptions(ref, face, { half })` (มีใน 4.39) · บันไดหลังคา: ยืนฝั่งตรงข้ามทิศ facing ให้หันถูกทาง (ตัวจำลองบังคับแล้ว)
- `towerUp`/`digDown` = โค้ดบอต (กระโดด+วางใต้เท้า / ขุดลง) — ใช้ดินหรือหินกรวด
