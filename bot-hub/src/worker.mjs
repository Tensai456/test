// worker.mjs — บอต 1 ตัว = 1 process (manager fork มา) · คุยกับ manager ผ่าน process.send / on('message')
//   โหมดจริง: mineflayer + mc-lab brainPlugin (สมองสลับสดได้ผ่าน opts.decide)
//   โหมดจำลอง (HUB_SIM=1): ไม่ต่อเซิร์ฟ สร้าง state ปลอมป้อนสมองจริง — ไว้ลองหน้าเว็บ/ท่อ log ก่อนมีเซิร์ฟ
// log: logs/<วันที่>/<senior|intern|other>_<login>.jsonl (สคีมา mc-lab/docs/IMITATION_DESIGN.md §1) → ใช้กับ tools/replay ได้ทันที
import fs from 'node:fs';
import path from 'node:path';
import { pathToFileURL } from 'node:url';
import { ROOT, loadEnv } from './config.mjs';
import { makeBrain } from './brains.mjs';
import { createLadder } from './ladder.mjs';

loadEnv();
let profile = JSON.parse(process.env.HUB_PROFILE);
const SIM = process.env.HUB_SIM === '1';
const LAB = path.resolve(ROOT, process.env.MC_LAB_PATH || '../mc-lab');
const lab = (p) => import(pathToFileURL(path.join(LAB, p)).href);
const send = (m) => process.send?.({ id: profile.id, ...m });

const { decide: rulesDecide, CHAINS, test } = await lab('lib/chain.mjs');
let brain = await makeBrain(profile.brain, { rulesDecide });
const ladder = createLadder({ chains: CHAINS, test });
const stats = { deaths: 0, objections: 0, startedAt: Date.now() };
let lastThought = '', paused = false;

// ---------- log jsonl ----------
const prefix = profile.role === 'senior' ? 'senior' : profile.role === 'intern' ? 'intern' : 'other';
const day = new Date().toISOString().slice(0, 10);
fs.mkdirSync(path.join(ROOT, 'logs', day), { recursive: true });
const logFile = path.join(ROOT, 'logs', day, `${prefix}_${profile.login}.jsonl`);
const out = fs.createWriteStream(logFile, { flags: 'a' });
const logRow = (r) => out.write(JSON.stringify(r) + '\n');

function decideNow(s) {
  const d = brain.decide(s, profile.goal);
  if (d.thought !== lastThought) { lastThought = d.thought; send({ type: 'decision', thought: d.thought, source: d.source, mode: d.mode }); }
  return d;
}
function status(s, d, extra = {}) {
  send({ type: 'status', online: true, hp: s.hp, food: s.food, saturation: s.saturation ?? null, pos: s.pos, dim: s.dim,
    deaths: stats.deaths, objections: stats.objections, thought: d?.thought ?? lastThought, source: d?.source,
    ladder: ladder.update(s, s.tick ?? 0), brainMissing: brain.missing, paused, logFile: path.relative(ROOT, logFile), ...extra });
}

// ---------- ข้อความจาก manager ----------
const handlers = { command: async () => {}, skin: () => {} };
process.on('message', async (m) => {
  try {
    if (m.type === 'quit') { out.end(); setTimeout(() => process.exit(0), 300); handlers.quit?.(); }
    if (m.type === 'set') {
      profile = { ...profile, ...m.patch };
      if (m.patch.brain) brain = await makeBrain(profile.brain, { rulesDecide });
      send({ type: 'event', text: `ตั้งค่าใหม่: ${Object.keys(m.patch).join(', ')}` });
    }
    if (m.type === 'command') await handlers.command(m);
    if (m.type === 'skin') handlers.skin(m.skin);
  } catch (e) { send({ type: 'error', text: e.message }); }
});

if (SIM) await runSim(); else await runReal();

// =====================================================================
async function runSim() {
  // state ปลอมรูปเดียวกับ toState · ทุก 250 ms · ได้ของตามขั้นที่สมองวางแผน (ให้ % บันไดขยับ) · มีม็อบ/หิว/ตายสุ่ม
  let tick = 6000, hp = 20, food = 20, sat = 5, inv = {}, nearby = [], flags = {};
  const rnd = Math.random;
  const timer = setInterval(() => {
    tick += 5;
    if (rnd() < 0.01) nearby = [{ type: rnd() < 0.5 ? 'zombie' : 'creeper', dist: 2 + rnd() * 10, hostile: true }];
    if (rnd() < 0.02) nearby = [];
    if (nearby.length && rnd() < 0.05) hp = Math.max(0, hp - 3);
    if (tick % 400 === 0) { if (sat > 0) sat--; else food = Math.max(0, food - 1); }
    if (food >= 18 && hp < 20 && tick % 80 === 0) hp++;
    if (hp <= 0) { stats.deaths++; hp = 20; food = 20; nearby = []; send({ type: 'event', text: 'ตาย (จำลอง)' }); logRow({ t: Date.now(), tick, who: profile.login, events: ['death'] }); }
    const s = { hp, food, saturation: sat, air: 20, dim: 'overworld', pos: [0, 64, 0], time: tick % 24000, tick, inv, worn: [], nearby, nearBlocks: [], flags, role: profile.jobRole, effects: [] };
    const d = decideNow(s);
    if (paused) { status(s, d); return; }
    // ทำตามสมองแบบหยาบ: กิน/หนี/ได้ของตามขั้นแผน
    if (d.mode === 'reflex' && /eat|hungry/.test(d.rule.id)) { food = Math.min(20, food + 6); sat = 6; }
    if (d.mode === 'reflex' && /creeper|flee|crowd/.test(d.rule.id)) nearby = [];
    if (d.mode === 'plan' && tick % 40 === 0) grant(d.step, inv, flags);
    if (tick % 20 === 0) status(s, d);
    logRow({ t: Date.now(), tick, who: profile.login, pos: s.pos, hp, food, inv: { ...inv }, nearby, events: [], brain: { kind: profile.brain, thought: d.thought } });
  }, 250);
  handlers.command = async (m) => { if (m.command === 'stop') paused = true; if (m.command === 'work') paused = false; send({ type: 'event', text: `(จำลอง) รับคำสั่ง ${m.command}` }); };
  handlers.quit = () => clearInterval(timer);
}
function grant(step, inv, flags) {
  const done = step.done ?? {};
  for (const [k, v] of Object.entries(done)) {
    if (k === 'has' || k === 'hasOrWear') for (const [it, n] of Object.entries(v)) { if ((inv[it] ?? 0) < n) { inv[it] = (inv[it] ?? 0) + 1; return; } }
    if (k === 'hasAny') for (const [alts, n] of Object.entries(v)) { const it = alts.split('|')[0]; if ((inv[it] ?? 0) < n) { inv[it] = (inv[it] ?? 0) + 1; return; } }
    if (k === 'flag') { flags[v] = true; return; }
  }
}

// =====================================================================
async function runReal() {
  const mineflayer = (await import('mineflayer')).default;
  const pf = await import('mineflayer-pathfinder');
  const { pathfinder, Movements, goals } = pf.default ?? pf;
  const { brainPlugin } = await lab('lib/adapter/mineflayer_brain.mjs');
  const { toState, createTracker } = await lab('lib/adapter/mineflayer_state.mjs');

  const bot = mineflayer.createBot({ host: process.env.MC_HOST || '127.0.0.1', port: +(process.env.MC_PORT || 25565), username: profile.login,
    auth: process.env.MC_AUTH || 'offline', version: process.env.MC_VERSION || false, profilesFolder: path.join(ROOT, '.auth') });
  bot.loadPlugin(pathfinder);
  const doesWork = profile.role === 'senior' || profile.role === 'worker';
  bot.loadPlugin(brainPlugin({ goal: () => profile.goal, role: profile.jobRole, decide: (s, g) => decideNow(s, g), defaultExecutors: doesWork }));

  const fill = (tpl) => tpl.replace(/\{skin\}/g, profile.skin).replace(/\{name\}/g, profile.display).replace(/\{login\}/g, profile.login);
  handlers.skin = (skin) => { profile.skin = skin; if (skin && process.env.SKIN_CMD) bot.chat(fill(process.env.SKIN_CMD)); };
  let first = true;
  bot.on('spawn', () => {
    if (first) {
      first = false;
      bot.pathfinder.setMovements(new Movements(bot));
      if (profile.skin && process.env.SKIN_CMD) bot.chat(fill(process.env.SKIN_CMD));
      if (process.env.NICK_CMD) bot.chat(fill(process.env.NICK_CMD));
    }
    send({ type: 'event', text: 'เกิด/เกิดใหม่' });
  });
  bot.on('death', () => { stats.deaths++; send({ type: 'event', text: 'ตาย' }); events.push('death'); });
  bot.on('kicked', (r) => send({ type: 'error', text: `โดนเตะ: ${typeof r === 'string' ? r : JSON.stringify(r)}` }));
  bot.on('error', (e) => send({ type: 'error', text: e.message }));
  bot.on('end', (r) => { send({ type: 'status', online: false, reason: String(r ?? '') }); setTimeout(() => process.exit(0), 200); });
  bot.on('chat', (u, msg) => { if (u !== bot.username) events.push(`chat:${u}:${msg}`); });
  let events = [];
  handlers.quit = () => bot.quit();

  // ไปหาผู้เล่น/ตาม · watching = id บอตอีกตัว → ชื่อล็อกอินมาจาก manager (profile.watchingLogin)
  const playerEntity = (name) => name && bot.players[name]?.entity;
  handlers.command = async (m) => {
    const who = m.player ?? profile.watchingLogin;
    if (m.command === 'stop') { paused = true; bot.pathfinder.setGoal(null); bot.clearControlStates(); }
    if (m.command === 'work') paused = false;
    if (m.command === 'come' || m.command === 'follow') {
      const e = playerEntity(m.player);
      if (!e) { bot.chat(`มองไม่เห็น ${m.player ?? 'คนเรียก'} (ต้องอยู่ในระยะโหลด)`); return; }
      bot.pathfinder.setGoal(m.command === 'come' ? new goals.GoalNear(e.position.x, e.position.y, e.position.z, 2) : new goals.GoalFollow(e, 3), m.command === 'follow');
    }
    if (m.command === 'home' && profile.home) bot.pathfinder.setGoal(new goals.GoalNear(...profile.home, 2));
    if (m.command === 'status') bot.chat(`hp ${Math.round(bot.health)} หิว ${bot.food} ตาย ${stats.deaths} · ${lastThought}`.slice(0, 250));
    send({ type: 'event', text: `คำสั่ง ${m.command}${who ? ` (${who})` : ''}` });
  };

  // ผู้ฝึกงาน/ผู้ชม: ตามรุ่นพี่ห่าง ๆ
  setInterval(() => {
    if (paused || !bot.entity || !['intern', 'spectator'].includes(profile.role)) return;
    const e = playerEntity(profile.watchingLogin);
    if (e && !bot.pathfinder.goal) bot.pathfinder.setGoal(new goals.GoalFollow(e, profile.role === 'spectator' ? 8 : 5), true);
  }, 2000);

  // log 4 แถว/วิ + สถานะขึ้นหน้าเว็บ 1 ครั้ง/วิ
  const tr = createTracker();
  const shadow = createShadow();
  let n = 0;
  setInterval(() => {
    if (!bot.entity) return;
    const s = bot.brain?.state ?? toState(bot, tr, {});
    const d = bot.brain?.last ?? null;
    const tick = bot.time?.age ?? 0;
    if (profile.role === 'intern') logRow(internRow(bot, s, tick, shadow));
    else logRow(seniorRow(bot, s, d, tick, events));
    events = [];
    if (++n % 4 === 0) status({ ...s, saturation: bot.foodSaturation, tick }, d, { ping: bot.player?.ping });
  }, 250);
}

const v3 = (p) => (p ? [+p.x.toFixed(2), +p.y.toFixed(2), +p.z.toFixed(2)] : null);
function seniorRow(bot, s, d, tick, events) {
  const e = bot.entity, inv = {};
  for (const it of bot.inventory.items()) inv[it.name] = (inv[it.name] ?? 0) + it.count;
  const slot = (i) => bot.inventory.slots[i]?.name ?? null;
  return { t: Date.now(), tick, who: profile.login, pos: v3(e.position), yaw: e.yaw, pitch: e.pitch, vel: v3(e.velocity), onGround: e.onGround,
    hand: bot.heldItem?.name ?? null, offhand: slot(45), armor: [slot(5), slot(6), slot(7), slot(8)], inv, hp: bot.health, food: bot.food, sat: bot.foodSaturation,
    air: bot.oxygenLevel, dim: s.dim, act: { dig: bot.targetDigBlock?.name ?? null, key: Object.entries(bot.controlState ?? {}).filter(([, v]) => v).map(([k]) => k) },
    effects: s.effects ?? [], timeOfDay: bot.time?.timeOfDay, brain: { kind: profile.brain, source: d?.source, thought: d?.thought }, events };
}

// ผู้ฝึกงาน: ใช้สมองตัวเองตัดสิน "สถานการณ์รอบรุ่นพี่" (ม็อบวัดระยะจากรุ่นพี่) · reflex ≥50 ค้าง ≥2 วิ = แย้ง
// ข้อจำกัด: ไม่เห็น inv/food ของรุ่นพี่ (IMITATION_DESIGN §1.3) → ใส่ hp/food = 20 (กฎหิวไม่ยิง) · verdict ตอนนี้ = unknown เสมอ [ยังไม่ทำ: จับรุ่นพี่ตาย/เลือดลดใน 10 วิ → right]
function createShadow() { return { since: null, rule: null, open: null }; }
function internRow(bot, s, tick, sh) {
  const sen = bot.players[profile.watchingLogin]?.entity;
  const row = { t: Date.now(), tick, who: profile.login, watching: profile.watchingLogin, sonar: { nearby: s.nearby ?? [] }, seniorSeen: null, shadow: null, objection: null, verdict: null };
  if (!sen) return row;
  const eq = sen.equipment ?? [];
  row.seniorSeen = { pos: v3(sen.position), hand: eq[0]?.name ?? null, armor: [eq[5]?.name ?? null, eq[4]?.name ?? null, eq[3]?.name ?? null, eq[2]?.name ?? null] };
  const near = Object.values(bot.entities).filter((e) => e !== sen && e !== bot.entity && e.position && e.type !== 'object' && e.position.distanceTo(sen.position) < 16)
    .map((e) => ({ type: e.name, dist: +e.position.distanceTo(sen.position).toFixed(1), hostile: e.kind === 'Hostile mobs' }));
  const view = { ...s, hp: 20, food: 20, inv: {}, worn: [], nearby: near, pos: row.seniorSeen.pos };
  const d = brain.decide(view, profile.goal);
  row.shadow = { kind: profile.brain, decision: d.mode === 'reflex' ? { mode: 'reflex', rule: d.rule.id } : { mode: d.mode, step: d.step?.id }, thought: d.thought };
  const danger = d.mode === 'reflex' && !d.rule.veto && d.rule.prio >= 50 ? d.rule.id : null;
  if (danger !== sh.rule) { sh.rule = danger; sh.since = tick; }
  if (danger && !sh.open && tick - sh.since >= 40) {
    sh.open = { id: `o-${tick}`, rule: danger, claim: d.rule.do ?? danger, at: tick };
    row.objection = sh.open; stats.objections++;
    send({ type: 'event', text: `แย้ง ${profile.watchingLogin}: ${sh.open.claim}` });
  }
  if (sh.open && tick - sh.open.at >= 200) { row.verdict = { objId: sh.open.id, result: 'unknown', by: 'auto', after_s: 10 }; sh.open = null; }
  return row;
}
