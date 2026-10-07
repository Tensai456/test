// mineflayer_brain.mjs — เสียบสมอง (decide: reflex + veto + แผน) เข้าบอต mineflayer 4.39 ด้วย bot.loadPlugin
//
//   import { brainPlugin } from './mc-lab/lib/adapter/mineflayer_brain.mjs';
//   bot.loadPlugin(brainPlugin({ goal: 'iron_kit', role: 'miner', enemyNames: [], team: () => [...] }));
//   bot.on('brain:decision', (d) => { ... })            // ทุกครั้งที่การตัดสินใจหลักเปลี่ยน
//   if (!bot.brain.allowed('sleep').ok) return;          // ถามก่อนทำสิ่งเสี่ยง (veto: นอนนอก overworld, ตีม็อบเป็นกลาง, ทิ้งอาวุธ ...)
//
// ตรวจกับซอร์ส mineflayer 4.39.0 แล้ว: physicsTick, entityHurt(entity, source), oxygenLevel, time.age, entity.elytraFlying,
//   player.ping, effects[id], blockAt() = null เมื่อชังก์ไม่โหลด · executor ค่าเริ่ม = ยืนยันระดับจำลอง ยังไม่ได้รันกับเซิร์ฟจริง
import { createTracker, toState } from './mineflayer_state.mjs';
import { decide } from '../chain.mjs';
import { chooseClutch } from '../fall_safety.mjs';
import { NO_SMELT } from '../economy/field_smelt.mjs';
import { passageBlocked, isPassageCell } from '../home/home_keep.mjs';

const HOSTILE_HINT = new Set(['zombie', 'skeleton', 'creeper', 'spider', 'witch', 'pillager', 'vindicator', 'blaze', 'ghast', 'wither_skeleton', 'piglin_brute', 'warden']);
const key = (d) => (d.mode === 'reflex' ? `reflex:${d.rule.id}` : d.mode === 'plan' ? `plan:${d.step.id}` : d.mode);

// executor ค่าเริ่ม — เฉพาะท่าที่ปลอดภัยและไม่ต้องหาเส้นทาง · ที่เหลือบอตเขียนเอง (ฟัง brain:decision)
// แต่ละตัว: async (bot, d, state) → คืนเมื่อทำเสร็จ · ถูกล็อกไม่ให้ซ้อนกัน
export const DEFAULT_EXECUTORS = {
  // ว่ายขึ้น: กดกระโดดค้างจนอากาศกลับ (kb/hazards/drowning)
  drowning: async (bot) => { bot.setControlState('jump', true); await wait(bot, 20); bot.setControlState('jump', false); },
  // ครีปเปอร์ ≤3 / ชาร์จ: หันหนีแล้ววิ่งถอย 1 วิ (kb/mobs/creeper)
  'creeper-fusing': async (bot, d, s) => flee(bot, 'creeper', 20),
  'charged-creeper': async (bot, d, s) => flee(bot, 'creeper', 40),
  // ตก: ถือของกันตกที่ chooseClutch เลือกไว้ในมือก่อน (การวาง/ใช้ตอนใกล้พื้น = โค้ดบอต) (kb/movement)
  falling: async (bot, d, s) => {
    const item = chooseClutch({ inventory: Object.keys(s.inv), dimension: s.dim, wallAdjacent: !!s.wallAdjacent, fallDistance: s.fallDistance, hp: s.hp });
    const it = item && bot.inventory.items().find((i) => i.name === item);
    if (it) await bot.equip(it, 'hand');
  },
  // กินเมื่อไม่มีศัตรูใกล้ (กฎ eat-* เช็กแล้ว) — เลือกอาหารชิ้นแรกที่มี
  'eat-to-regen': async (bot) => eat(bot),
  hungry: async (bot) => eat(bot),
  'eat-after-hunger-effect': async (bot) => eat(bot),
  // ชังก์ไม่โหลด: หยุดเดิน
  'chunk-unloaded': async (bot) => bot.clearControlStates(),
};

function wait(bot, ticks) { return new Promise((res) => { let n = 0; const f = () => { if (++n >= ticks) { bot.removeListener('physicsTick', f); res(); } }; bot.on('physicsTick', f); }); }
async function flee(bot, type, ticks) {
  const me = bot.entity.position;
  const m = Object.values(bot.entities).filter((e) => e.name === type && e.position).sort((a, b) => a.position.distanceTo(me) - b.position.distanceTo(me))[0];
  if (!m) return;
  await bot.lookAt(me.plus(me.minus(m.position)).offset(0, 1.6, 0), true);   // มองทิศตรงข้ามม็อบ
  bot.setControlState('sprint', true); bot.setControlState('forward', true);
  await wait(bot, ticks);
  bot.setControlState('forward', false); bot.setControlState('sprint', false);
}
async function eat(bot) {
  const foods = bot.registry?.foodsByName ?? {};
  const it = bot.inventory.items().find((i) => foods[i.name]);
  if (!it) return;
  await bot.equip(it, 'hand');
  await bot.consume();
}

export function brainPlugin(opts = {}) {
  return (bot) => {
    const tr = createTracker();
    const every = opts.everyTicks ?? 4;                                  // 4 tick = 5 ครั้ง/วิ (OODA: วงรอบสั้น)
    const executors = { ...(opts.defaultExecutors === false ? {} : DEFAULT_EXECUTORS), ...(opts.executors ?? {}) };
    const goalOf = (s) => (typeof opts.goal === 'function' ? opts.goal(s) : opts.goal ?? 'first_night');
    // เผาไป ตะเวนไป: จำตำแหน่งเตา + รอยเท้า (breadcrumb ทุก 4 บล็อก) เพื่อเดินกลับ (กติกา jing · kb/field-smelting)
    let smelt = null;
    const smeltState = () => {
      if (!smelt || !bot.entity) return {};
      const dist = Math.round(bot.entity.position.distanceTo(smelt.pos));
      const done = (bot.time?.age ?? 0) >= smelt.readyAt;
      return { furnaceDist: dist, roamRadius: smelt.roamRadius, roamExcess: dist - smelt.roamRadius, flags: { smelting: true, ...(done ? { furnaceDone: true } : {}), ...(smelt.fuelShort ? { fuelShort: true } : {}), ...(smelt.foodShort ? { foodShort: true } : {}) } };
    };
    // ทางเดินขึ้นบ้าน + ปากประตู: ลงทะเบียนด้วย bot.brain.setPassages([{x,y,z}]) · เช็กทุก 20 tick
    let passages = [], blocked = [];
    const extra0 = () => ({ ...(blocked.length ? { passageBlocked: blocked } : {}), flags: { ...(blocked.length ? { entranceBlocked: true } : {}), ...(tick < graceUntil ? { respawnGrace: true } : {}), ...(justDied ? { justDied: true } : {}) } });
    const extra = (more = {}) => { const sm = { ...smeltState(), ...extra0(), flags: { ...(smeltState().flags ?? {}), ...(extra0().flags ?? {}) } }; return { role: opts.role, enemyNames: opts.enemyNames ?? [], team: opts.team?.() ?? [], ...sm, ...more, flags: { ...(opts.flags?.() ?? {}), ...(sm.flags ?? {}), ...(more.flags ?? {}) } }; };
    let tick = 0, lastKey = null, busy = false;

    // ม็อบเป็นกลางโกรธ: เราตีมัน หรือมันตีเรา (entityHurt(entity, source) — mineflayer 4.39)
    bot.on('entityHurt', (entity, source) => {
      if (source === bot.entity && entity?.id != null && !HOSTILE_HINT.has(entity.name)) tr.provoked.add(entity.id);
      if (entity === bot.entity && source?.id != null) tr.provoked.add(source.id);
    });
    bot.on('entityGone', (e) => tr.provoked.delete(e.id));

    // ตาย → เกิดใหม่ (แก้บั๊ก "เกิดปุ๊บวางบล็อก" ที่ jing เจอ):
    //  · mineflayer 4.39 ส่ง 'spawn' ซ้ำทุกครั้งที่เกิดใหม่ (health.js) → โค้ดเริ่มต้นที่ผูก bot.on('spawn') จะรันซ้ำ
    //  · mineflayer-pathfinder 2.4.5 ไม่ล้าง goal ตอนตาย → เกิดใหม่แล้ววางแผนไปเป้าเดิม + allow1by1towers/สะพาน = วางบล็อก (ชังก์ยังโหลดไม่ครบ ใต้เท้าดูเป็นอากาศ)
    //  → ตอนตาย: หยุด pathfinder + ปล่อยปุ่ม · ตอนเกิด: ช่วงพัก (grace) 60 tick ห้ามวางบล็อก + ตั้ง justDied ให้กฎ death-recovery
    let died = false, graceUntil = -1, justDied = false;
    bot.on('death', () => { died = true; try { bot.pathfinder?.setGoal(null); bot.pathfinder?.stop?.(); } catch {} bot.clearControlStates?.(); bot.emit('brain:died'); });
    bot.on('spawn', () => { if (!died) return; died = false; justDied = true; graceUntil = tick + (opts.respawnGraceTicks ?? 60); try { bot.pathfinder?.setGoal(null); } catch {} bot.clearControlStates?.(); bot.emit('brain:respawned'); });

    const think = (more) => { const s = toState(bot, tr, extra(more)); return { s, d: decide(s, goalOf(s)) }; };

    bot.brain = {
      tracker: tr,
      last: null,
      state: null,
      think: () => think(),
      // ถามก่อนทำ: action = 'sleep' | 'attack' | 'drop_weapon' | 'wall_in' | 'mine_ore' | 'open_container' | ...
      allowed(action, more = {}) {
        if (action === 'place_block' && more.pos && isPassageCell(passages, more.pos)) more = { ...more, flags: { ...(more.flags ?? {}), targetInPassage: true } };
        if (action === 'smelt' && more.item && NO_SMELT.includes(more.item)) more = { ...more, flags: { ...(more.flags ?? {}), noSmeltItem: true } };
        const { d } = think({ action, ...more });
        return { ok: d.vetoes.length === 0, vetoes: d.vetoes.map((v) => ({ id: v.id, why: v.do })) };
      },
    };

    // เริ่มเผา: plan = ผลจาก smeltPlan() (lib/economy/field_smelt.mjs) · pos = ตำแหน่งเตา
    bot.brain.startSmelt = (pos, plan) => { smelt = { pos, roamRadius: plan.roamRadius, readyAt: (bot.time?.age ?? 0) + plan.sec * 20, fuelShort: plan.fuelAction !== 'ok', foodShort: plan.foodAction !== 'ok' && plan.foodAction !== 'eat-from-chest', trail: [pos] }; };
    bot.brain.endSmelt = () => { smelt = null; };
    bot.brain.setPassages = (cells) => { passages = cells; };
    bot.brain.clearDeath = () => { justDied = false; };   // เรียกเมื่อเก็บของคืนแล้ว/เลิกตามของ
    bot.brain.blockedPassage = () => blocked;
    bot.brain.trailBack = () => (smelt ? [...smelt.trail].reverse() : []);   // จุดทางกลับ (ส่งให้ pathfinder ทีละจุด)

    bot.on('physicsTick', async () => {
      if (smelt && bot.entity) { const last = smelt.trail.at(-1); if (bot.entity.position.distanceTo(last) >= 4 && smelt.trail.length < 500) smelt.trail.push(bot.entity.position.clone ? bot.entity.position.clone() : bot.entity.position); }
      if (passages.length && tick % 20 === 0 && bot.blockAt) {
        blocked = passageBlocked(passages, (x, y, z) => { const p = bot.entity.position.clone(); p.x = x; p.y = y; p.z = z; return bot.blockAt(p); });   // clone Vec3 แล้วตั้งค่า (ไม่ต้อง import vec3)
      }
      if (++tick % every || !bot.entity) return;
      const { s, d } = think();
      bot.brain.state = s; bot.brain.last = d;
      const k = key(d);
      if (k !== lastKey) { lastKey = k; bot.emit('brain:decision', d, s); }
      const ex = d.mode === 'reflex' && !d.rule.veto && executors[d.rule.id];
      if (!ex || busy) return;
      busy = true;
      try { await ex(bot, d, s); } catch (err) { bot.emit('brain:error', err, d); } finally { busy = false; }
    });
  };
}
