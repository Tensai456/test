# ปัญหา mineflayer / ViaVersion บน Minecraft 1.21.x–26.x (งาน C11)

> สร้าง 7 ต.ค. 2026 · ตรวจซอร์ส mineflayer 4.39.0 + prismarine-physics 1.11.1 + minecraft-data 3.117.0 (ติดตั้งใน scratchpad) · ค้นเว็บผ่าน WebSearch (ผลสรุปจากหน้าผลค้นหา ไม่ได้เปิดอ่าน thread เต็ม — `gh api` ถูกบล็อก "GitHub access not enabled")
> ป้าย: **[ตรวจซอร์ส]** = เห็นในโค้ดที่ติดตั้ง file:line · **[ผลค้นหา]** = อ้างตามชื่อ/สรุปหน้า GitHub · **[ไม่แน่ใจ]** = ยืนยันไม่ได้ (ห้ามเดาเลขที่ issue)
> ซอร์สอ้างอิงด้านล่างอยู่ใต้ `node_modules/mineflayer/lib/plugins/` (ย่อว่า `mf/`)

## พฤติกรรมปัจจุบันของ 4.39.0 (ตรวจซอร์ส)

| เรื่อง | ที่ไหน | พฤติกรรม |
|---|---|---|
| ตอบ teleport | `mf/physics.js:374-423` | handler `position` ตั้ง pos/vel/yaw/pitch → `onGround=false` → เขียน `teleport_confirm` **ทันทีใน handler** (บรรทัด 423, เฉพาะ feature `teleportUsesOwnPacket`) → ส่ง position_look กลับ (หลังตาย/เกิดใหม่หน่วง 1500 ms ครั้งเดียว บรรทัด 429-441) |
| ส่ง position ปกติ | `mf/physics.js:103-113` | `lastSent.flags = {onGround, hasHorizontalCollision: undefined}` สำหรับ 1.21.3+ |
| player_input (sneak) | `mf/physics.js:263-269` | ถ้า feature `newPlayerInputPacket` → ส่ง sneak ผ่าน `player_input {inputs:{shift}}` (คอมเมนต์เขียนว่า "1.21.6+") |
| player_input (ขี่/ลง) | `mf/entities.js:868-895` | `moveVehicle` ส่ง forward/backward/left/right · `dismount` ส่ง `jump:true` |
| player_loaded | `mf/health.js:12-15` | ส่งตอน `spawn` ถ้า feature `sendsPlayerLoadedPacket` (1.21.4+) แล้ว emit 'spawn' |
| ระเบิด/knockback | `mf/physics.js:314-328` | บวก `playerKnockback` (1.21.3+) เข้า velocity ถ้า `physicsEnabled` และ gameMode **ไม่ใช่ creative** (ไม่ได้เช็ก spectator) · คอมเมนต์ "Fixes issue #3635" |
| entity_velocity | `mf/entities.js:285-290` (และ 235, 279) | แปลงด้วย `conv.fromNotchVelocity` (คูณ 1/8000) **เสมอ** — ไม่มีโค้ดแยก lpVec3 (grep `lpVec3` ไม่พบ) |
| spectator | `mf/game.js:5,13-37` | แค่ parse gameMode เป็นข้อความ · `prismarine-physics/index.js` **ไม่มี `spectator`/`gameMode`** (grep ว่าง) → physics จำลองแรงโน้มถ่วง/ชนบล็อกแบบเดิมให้บอต spectator |
| ระเบิดกับบล็อก | `mf/blocks.js:401-410` | ลบบล็อกจาก `affectedBlockOffsets` ถ้ามี (1.21.3 เซิร์ฟไม่ส่งแล้ว — TODO ในโค้ด) |

---

## 1. "Player moved too quickly" หลัง /tp (teleport ซ้อนกับ position ที่ส่งค้าง)
- **อาการ**: หลัง /tp บอตถูกดึงกลับ log ขึ้น "moved too quickly" เป็นชุด · ระหว่างรอ confirm เซิร์ฟทิ้งแพ็กเก็ต use_item เงียบ ๆ [ผลค้นหา: issue #2 ของ mc-zuri/mineflayer-bedrock-public]
- **สาเหตุ**: teleport มาถึงขณะไคลเอนต์ยังส่ง position ของตำแหน่งเก่าอยู่ → เซิร์ฟ rollback ทีละแพ็กเก็ต · ลำดับ teleport_confirm/position_look ต่างกันตามเวอร์ชัน (1.21.2–1.21.3 ส่ง pos_rot ก่อน confirm, 1.21.4 กลับเป็น confirm ก่อน) [ผลค้นหา] · 4.39.0 ตอบใน handler ทันที (`physics.js:423`) ไม่ผ่านคิวต่อ tick
- **ที่เกี่ยวข้อง**: PrismarineJS/mineflayer PR #4107 "answer pings and teleports at the start of the next tick, in arrival order" — ตอบที่ต้น tick ถัดไปตามลำดับมาถึง (แก้ anticheat เตะเพราะตอบ teleport ถี่/สลับลำดับ pong) · PR #4099 "cancel the deferred respawn reply once it is stale..." · PR #4108 "a teleport leaves the standing flag alone" [ผลค้นหา]
- **workaround (ESM)** — หลัง /tp รอให้ forcedMove นิ่งก่อนสั่งเดิน:
```js
// รอจน teleport ชุดสุดท้ายถูกตอบแล้ว ค่อยให้ pathfinder/ควบคุมต่อ
export async function settleAfterTeleport(bot, quietMs = 400, maxMs = 5000) {
  bot.clearControlStates();
  try { bot.pathfinder?.setGoal(null); } catch {}
  let last = Date.now();
  const onForced = () => { last = Date.now(); };
  bot.on('forcedMove', onForced);
  const t0 = Date.now();
  while (Date.now() - last < quietMs && Date.now() - t0 < maxMs) await bot.waitForTicks(2);
  bot.off('forcedMove', onForced);
  await bot.waitForTicks(5); // ให้ชังก์รอบตัวโหลด
}
```
- **สถานะ**: #4107/#4099/#4108 — ยังไม่ยืนยันว่า merge หรือ release แล้ว (ผลค้นหาไม่บอก) **[ไม่แน่ใจ]** · 4.39.0 ที่ติดตั้ง **ยังไม่มีคิว tick ถัดไป** (ตรวจซอร์ส) · ฝั่งเซิร์ฟ: Paper issue #13217 "Teleport causes a large amount of `moved too quickly!` logs" [ผลค้นหา ไม่ได้อ่านสถานะ]
- **ลิงก์**: https://github.com/PrismarineJS/mineflayer/pull/4107 · https://github.com/PrismarineJS/mineflayer/pull/4099 · https://github.com/PrismarineJS/mineflayer/pull/4108 · https://github.com/mc-zuri/mineflayer-bedrock-public/issues/2 · https://github.com/PaperMC/Paper/issues/13217 · ค่าเกณฑ์ฝั่งเซิร์ฟ: docs/wiki/server-tech.md (หัวข้อ moved-too-quickly)

## 2. 26.3: teleport_confirm ต้องพก position/rotation
- **อาการ**: บน 26.3 บอตถูกเตะ "Invalid move player packet received" [ผลค้นหา]
- **สาเหตุ**: แพ็กเก็ต accept_teleportation ถูกขยายให้พกตำแหน่ง/มุมที่ resolve แล้ว ถ้าไม่ใส่ฟิลด์จะ serialize เป็น NaN [ผลค้นหา]
- **workaround**: เซิร์ฟเรา = 26.1 (+ViaVersion) ยังไม่เกี่ยว · ถ้าอัป 26.3 ให้รอ mineflayer ที่รวม PR นี้ แล้ว **ล็อกเวอร์ชัน** (docs/wiki/server-tech.md#version-lock)
- **สถานะ**: PR เปิดโดยผู้ร่วมพัฒนา — merge หรือไม่ **[ไม่แน่ใจ]**
- **ลิงก์**: https://github.com/PrismarineJS/mineflayer/pull/4130

## 3. sneak ผ่าน player_input บน 1.21.3–1.21.5 เซิร์ฟไม่นับ
- **อาการ**: `bot.setControlState('sneak', true)` ไม่ทำให้บอตย่อจริงบน 1.21.3–1.21.5 [ผลค้นหา] (บน 26.1 ไม่กระทบ ตามคำอธิบาย: player_input พก sneak ตั้งแต่ 1.21.6)
- **สาเหตุ**: `physics.js:263-269` เลือกช่องทางจาก feature `newPlayerInputPacket` ซึ่ง minecraft-data เปิดตั้งแต่ 1.21.3 ทั้งที่เซิร์ฟ ≤1.21.5 อ่าน sneak จาก entity_action (PRESS/RELEASE_SHIFT_KEY) [ผลค้นหา]
- **ทางแก้ upstream**: เลือกช่องทางด้วย feature `sneakUsesEntityAction` (1.8–1.21.5) — ส่ง entity_action บน 1.21.3–1.21.5 [ผลค้นหา]
- **workaround (ESM)** สำหรับ client ที่อาจผ่าน ViaVersion ไปเซิร์ฟเก่า:
```js
export function setSneak(bot, on) {
  const v = bot.registry.version; // {'>=': fn}? ใช้ supportFeature ถ้ามี
  if (bot.supportFeature?.('newPlayerInputPacket') && !bot.registry.isNewerOrEqualTo?.('1.21.6')) {
    // 1.21.3–1.21.5: เซิร์ฟอ่านจาก entity_action
    bot._client.write('entity_action', { entityId: bot.entity.id, actionId: on ? 0 : 1, jumpBoost: 0 });
    return;
  }
  bot.setControlState('sneak', on);
}
```
(ชื่อ `isNewerOrEqualTo` ในโค้ดข้างบนเป็นของ minecraft-data registry — **ยังไม่ได้รันทดสอบ** [ไม่แน่ใจ])
- **สถานะ**: issue เปิดอยู่ตามชื่อหน้า — fix merge/ release **[ไม่แน่ใจ]** · 4.39.0 ยังมีโค้ดเดิม (ตรวจซอร์ส)
- **ลิงก์**: https://github.com/PrismarineJS/mineflayer/issues/4160 · https://github.com/PrismarineJS/mineflayer/pull/4063 ("send the movement input packets the vanilla client sends") · https://github.com/PrismarineJS/mineflayer/pull/4093 ("Dismount by holding sneak for one tick on 1.21.3+")

## 4. knockback ไม่ทำงานบน >= 1.21.9 (รวม 26.1) — กระทบเรา
- **อาการ**: บอตโดนตีแล้วไม่กระเด็น (velocity ฝั่งไคลเอนต์ไม่เปลี่ยน) → physics ไม่ตรงเซิร์ฟ → ถูกดึงกลับ/ตำแหน่งเพี้ยนหลังโดนตี [ผลค้นหา]
- **สาเหตุ**: ตั้งแต่ 1.21.9 `entity_velocity` ใช้ชนิด lpVec3 (ค่าเป็นบล็อก/tick แล้ว ไม่มีตัวหาร 1/8000) แต่ mineflayer ยังคูณ `fromNotchVelocity` ⇒ ค่าเล็กลง 8000 เท่า [ผลค้นหา] · **ยืนยันในซอร์ส**: `entities.js:285-290` เรียก `conv.fromNotchVelocity` เสมอ, grep lpVec3 ไม่พบ
- **ทางแก้ upstream**: minecraft-data PR #1206 "Add feature flag for lpVec3 entity velocity" ให้ mineflayer ข้ามการแปลงเก่า [ผลค้นหา]
- **workaround (ESM)** — เขียนทับ handler ในบอตเราเอง (ทดสอบก่อนใช้):
```js
// ใช้เมื่อเซิร์ฟ/โปรโตคอล >= 1.21.9 (packet.velocity เป็นหน่วยบล็อก/tick แล้ว)
export function fixLpVelocity(bot) {
  bot._client.on('entity_velocity', (p) => {
    const e = bot.entities[p.entityId];
    if (!e || !p.velocity) return;
    const v = p.velocity;
    // ยกเลิกผลของ handler เดิม (÷8000) แล้วตั้งค่าที่ถูก
    e.velocity.set(v.x, v.y, v.z);
  });
}
```
  หมายเหตุ: handler ของเราถูกเรียก **หลัง** ตัวเดิมถ้า register ทีหลัง → ค่าถูกทับถูกต้อง · ใช้เฉพาะ `bot.registry.version` ≥ 1.21.9 · **[ไม่แน่ใจ]** ว่าพิมพ์ฟิลด์ `p.velocity` ใน minecraft-data 3.117.0 ออกมาเป็น {x,y,z} ของ float จริงหรือไม่ — ตรวจด้วยการ log ครั้งแรกที่โดนตี
- **สถานะ**: issue #4167 เปิดตามหน้าค้นหา · ยังไม่ยืนยัน fix merged **[ไม่แน่ใจ]**
- **ลิงก์**: https://github.com/PrismarineJS/mineflayer/issues/4167 · https://github.com/PrismarineJS/minecraft-data/pull/1206 · ที่เกี่ยวข้อง (knockback จาก entity อื่นไม่แม่น) https://github.com/PrismarineJS/mineflayer/issues/3636 · เก่า https://github.com/PrismarineJS/mineflayer/issues/2004

## 5. ระเบิดแล้ว crash (explosion knockback)
- **อาการ**: TypeError ใน physics.js ตอนมีระเบิด (TNT/creeper) บน 1.21.4 [ผลค้นหา]
- **สาเหตุ**: รูปแบบแพ็กเก็ต explosion เปลี่ยน (1.21.3+ ใช้ `playerKnockback`) · 4.39.0 รองรับทั้ง `playerKnockback` และ `playerMotionX/Y/Z` แล้ว (`physics.js:314-328`, คอมเมนต์อ้าง #3635)
- **สถานะ**: **แก้แล้วใน 4.39.0** (ตรวจซอร์ส) · แต่ยังไม่เช็ก gameMode spectator (ดูข้อ 7) · ยังมีรายงาน "partial packet freeze / memory leak explosion packet" #3753 [ผลค้นหา ไม่ทราบสถานะ]
- **ลิงก์**: https://github.com/PrismarineJS/mineflayer/issues/3635 · https://github.com/PrismarineJS/mineflayer/issues/3753

## 6. ตารางแพ็กเก็ต 26.1.x ผิด / รองรับเวอร์ชัน
- **อาการ**: packet id ผิดสำหรับโปรโตคอล 775 (26.1.2) ใน minecraft-data → ถอดรหัสผิด/หลุด [ผลค้นหา: ชื่อ issue "pc26_1_2: wrong packet ID mappings for protocol 775"]
- **รองรับ**: README ของ mineflayer ระบุรองรับถึง 26.1 · มีงานเพิ่ม 26.2 (minecraft-data PR #1298 ชื่อ "Add Minecraft PC 26.2 data (protocol 776)") และ fork ภายนอก [ผลค้นหา] · issue "Add support for Minecraft Java Edition 26.1.2" #3893
- **workaround**: ระบุ `version: '26.1'` ตรง ๆ ใน createBot (ไม่ auto-detect ผ่าน ViaVersion) · ล็อกเวอร์ชันแพ็กเกจ
- **สถานะ**: สถานะ fix ของ #3888 / #3893 **[ไม่แน่ใจ]**
- **ลิงก์**: https://github.com/PrismarineJS/mineflayer/issues/3888 · https://github.com/PrismarineJS/mineflayer/issues/3893 · https://github.com/PrismarineJS/minecraft-data/pull/1298

## 7. สปีกเตเตอร์ถูกผลัก / physics ยังทำงาน
- **อาการ**: บอตโหมด spectator ตก/ถูกผลัก/ติดบล็อกในฝั่งไคลเอนต์ ทั้งที่ spectator ควรลอยผ่านบล็อกได้ → position ที่ส่งไม่ตรงกับเซิร์ฟ → ถูกดึงกลับ
- **สาเหตุ [ตรวจซอร์ส]**: ไม่มีโค้ด spectator ใน `prismarine-physics/index.js` (grep ว่าง) และ mineflayer แค่เก็บ `bot.game.gameMode` (`game.js:35-37`) · `physics.js:316` เช็กเฉพาะ creative สำหรับระเบิด ⇒ spectator โดน knockback/gravity จำลองได้ · ไม่พบ issue ของ mineflayer ที่ตรงเรื่องนี้ **[ไม่แน่ใจ]**
- **ที่พบฝั่งอื่น**: ViaVersion/ViaBackwards มี fix เกี่ยวกับ spectator ในการแปล 26.1→26.2 (swing packet ให้จับคลิกซ้ายของ spectator) และ ViaBackwards "spectate interact" 26.1→1.21.11 (ตามหน้า release) · Paper 26.1.2: issues #13473 (teleport ผู้เล่นที่กำลัง spectate entity ทำให้ desync) และ #14065 (PlayerTeleportEvent cancel ไม่ได้ขณะ spectate) [ผลค้นหา]
- **workaround (ESM)** — ปิด physics ตอนเป็น spectator, ควบคุมด้วย /tp ฝั่งเซิร์ฟแทน:
```js
export function guardSpectator(bot) {
  const apply = () => {
    const spec = bot.game?.gameMode === 'spectator';
    bot.physicsEnabled = !spec;      // spectator: ไม่ให้ physics ส่ง position เอง
    if (spec) { bot.clearControlStates(); try { bot.pathfinder?.setGoal(null); } catch {} }
  };
  bot.on('game', apply);   // gameMode เปลี่ยน
  bot.on('spawn', apply);
}
```
  (event 'game' ยิงเมื่อ login/respawn/gameMode เปลี่ยนตาม game.js — **ยังไม่ได้ทดสอบกับเซิร์ฟจริง** [ไม่แน่ใจ])
- **สถานะ**: unknown (ไม่มี issue ยืนยัน)
- **ลิงก์**: https://github.com/PaperMC/Paper/issues/13473 · https://github.com/PaperMC/Paper/issues/14065 · https://github.com/ViaVersion/ViaVersion/releases · https://github.com/ViaVersion/ViaBackwards/releases

## 8. ViaVersion: velocity/ตำแหน่งตอนแปลงเวอร์ชัน
- **เรื่อง**: ViaVersion PR #5054 "[26.2->26.3] Fix missing movement timestamp update and motion packet in ENTITY_POSITION_SYNC" — knockback กระตุกก่อนแก้ [ผลค้นหา] · ViaBackwards มี fix "conversion of large velocity 1.21.2->1.21" และ client_tick_end/movement packet แยกชัดเจน 1.21.2->1.21 (ตามหน้า release) · ViaVersion issue #4746 "Minecraft 26.1 support" · #4986 "ClientboundLevelParticlesPacket deserialization error when translating 26.1.2 → 26.2"
- **ผลกับเรา**: เซิร์ฟ Paper 26.2 + ViaVersion ให้บอต 26.1 ต่อเข้า (docs/wiki/server-tech.md) → ทิศ 26.1→26.2 ผ่าน ViaVersion; ปัญหา movement/velocity ที่แปลผิดอาจโผล่เป็น "moved too quickly" หรือ knockback ผิด · **[ไม่แน่ใจ]** ว่า s39 โดนข้อไหนจริง
- **workaround**: ตรงที่เป็นไปได้ ให้บอตต่อด้วย 26.2 ตรง (ไม่ผ่าน Via) เมื่อ mineflayer รองรับ · อัป ViaVersion เป็นตัวล่าสุด (เงื่อนไขล็อกเวอร์ชัน 3 วัน)
- **ลิงก์**: https://github.com/ViaVersion/ViaVersion/pull/5054 · https://github.com/ViaVersion/ViaVersion/issues/4746 · https://github.com/ViaVersion/ViaVersion/issues/4986 · https://github.com/ViaVersion/ViaBackwards/releases

## 9. player_input ตอนขี่/ลงพาหนะ (1.21.3+)
- **พฤติกรรม [ตรวจซอร์ส]**: `entities.js:868-895` ส่ง `player_input` แบบ forward/backward/left/right; ลงพาหนะส่ง `jump:true` (บรรทัด 888) — ไม่ใช่ shift
- **ที่เกี่ยวข้อง**: PR #4093 "Dismount by holding sneak for one tick on 1.21.3+" (vanilla ลงด้วย shift) [ผลค้นหา] · สถานะ merge **[ไม่แน่ใจ]**
- **workaround**: ถ้าลงจากพาหนะไม่ได้ ใช้ `bot.setControlState('sneak', true)` 1 tick แล้วปล่อย (`await bot.waitForTicks(1)`) หรือ `bot.dismount()` ตามเดิม
- **ลิงก์**: https://github.com/PrismarineJS/mineflayer/pull/4093 · https://github.com/PrismarineJS/mineflayer/pull/4066

---

## เจอแล้วในแล็บนี้ — บั๊ก "ตายแล้วเกิดปุ๊บวางบล็อก" (jing, 7 ต.ค. 2026)
- **อาการ**: เกิดใหม่แล้วบอตวางบล็อกต่อเสา/สะพานทันที
- **สาเหตุ [ตรวจซอร์ส]**: (1) `mf/health.js:12-19` ผูก emit 'spawn' กับ `update_health` — mineflayer ยิง 'spawn' ซ้ำทุกครั้งที่เกิดใหม่ → โค้ดเริ่มต้นที่ผูก `bot.on('spawn')` รันซ้ำ (2) pathfinder 2.4.5 ไม่ล้าง goal ตอนตาย + `allow1by1towers` เริ่มต้น true + บล็อกสร้างเป็นดิน/หินกรวด → เกิดใหม่แล้ววางแผนไปเป้าเดิมขณะชังก์ยังไม่โหลด (ใต้เท้า `blockAt` = null/ดูเป็นอากาศ) · และ `physics.js:429-441` หน่วง position_look หลังเกิด 1500 ms
- **แก้แล้ว**: `lib/adapter/mineflayer_brain.mjs:86-92` — `bot.on('death')` → `pathfinder.setGoal(null)` + `stop()` + `clearControlStates()` + emit `brain:died` · `bot.on('spawn')` (เฉพาะเมื่อ died) → `justDied` + `graceUntil = tick + respawnGraceTicks(60)` + ล้าง goal + emit `brain:respawned` · ช่วง grace ห้ามวางบล็อก (flag `respawnGrace` ใน extra0 บรรทัด 75)
- **สถานะ**: แก้ในปลั๊กอิน brain แล้ว · ยังไม่ได้ทดสอบกับเซิร์ฟ s39 จริง (ดู docs/wiki/server-tech.md#respawn-place)
- **เสริมฝั่งโค้ดบอต**: `bot.once('spawn')` สำหรับงานเริ่มครั้งเดียว · งานทุกครั้งที่เกิดแยกเป็นฟังก์ชัน idempotent · ตั้ง `movements.allow1by1towers = false` ถ้าไม่ต้องการต่อเสา

---

## สรุป 3 บรรทัด
1. **ทำอะไร**: ตรวจซอร์ส mineflayer 4.39.0 (physics/entities/health/game ระบุ file:line) + ค้น GitHub ด้วย WebSearch รวบรวม 9 หัวข้อ (moved too quickly, teleport_confirm 26.3, player_input sneak/ขี่, knockback lpVec3, explosion, packet 26.1.2, spectator, ViaVersion velocity) พร้อม workaround ESM และหัวข้อ respawn-place ที่แก้แล้ว
2. **ตัวเลขสำคัญ**: knockback ผิดบน ≥1.21.9 (#4167) ยืนยันในซอร์สว่า 4.39.0 ยังหาร 1/8000 เสมอ (`entities.js:285-290`) = กระทบ 26.1 · หน่วง respawn 1500 ms (`physics.js:441`) · grace หลังเกิด 60 tick · ค้นเว็บ 9 ครั้ง จาก 25 ที่อนุญาต
3. **ยังไม่ได้ verify**: สถานะ merged/open และเวอร์ชันที่แก้ของ #4167 #4160 #4107 #4099 #4108 #4093 #4130 #3888 #3893 #3753 (อ่านแค่ชื่อ/สรุปผลค้นหา — `gh` ถูกบล็อก) · โค้ด workaround ข้อ 3, 4, 7 ยังไม่ได้รันกับเซิร์ฟจริง · ไม่พบ issue เรื่อง spectator ถูกผลักใน mineflayer โดยตรง · ไม่ได้ค้นเว็บ docs.papermc.io/minecraft.wiki ได้ผลตรงหัวข้อ
