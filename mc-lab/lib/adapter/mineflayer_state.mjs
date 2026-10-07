// mineflayer_state.mjs — แปลงบอต mineflayer → state ที่ lib/chain.mjs decide() ใช้
// ใช้: const tracker = createTracker(); ทุก tick: const s = toState(bot, tracker, { role, team }); decide(s, goal)
// ⚠ ชื่อฟิลด์ mineflayer ที่ติด [ตรวจ] = [ไม่แน่ใจ] กับ 4.39 / 26.1 — ตรวจตอนต่อบอตจริงครั้งแรก
const HOSTILE = new Set(['zombie', 'husk', 'drowned', 'zombie_villager', 'skeleton', 'stray', 'bogged', 'parched', 'spider', 'cave_spider', 'creeper', 'witch', 'slime', 'magma_cube', 'phantom', 'silverfish', 'endermite', 'pillager', 'vindicator', 'evoker', 'vex', 'ravager', 'guardian', 'elder_guardian', 'warden', 'breeze', 'creaking', 'blaze', 'ghast', 'wither_skeleton', 'piglin_brute', 'hoglin', 'zoglin', 'shulker', 'ender_dragon', 'wither']);
const ARMOR_SLOTS = [5, 6, 7, 8];                                   // หมวก/เสื้อ/กางเกง/รองเท้า [ตรวจ]
const DIM = (d) => String(d ?? 'overworld').replace(/^minecraft:/, '');

export function createTracker() {
  return { airborneFromY: null, lastPos: null, idleSince: null, lastInv: '', provoked: new Set() };
}

// ระยะตก: mineflayer ไม่มี fallDistance ตรง ๆ [ตรวจ] → จำ Y สูงสุดตั้งแต่ลอย แล้วคิด (สูงสุด − ปัจจุบัน) ตอนกำลังตก
function fallDistance(e, tr) {
  if (e.onGround || e.isInWater || e.isInLava) { tr.airborneFromY = null; return 0; }
  tr.airborneFromY = Math.max(tr.airborneFromY ?? e.position.y, e.position.y);
  return e.velocity.y < 0 ? tr.airborneFromY - e.position.y : 0;
}

// ม็อบเป็นกลางที่โกรธ: ส่งชื่อ id มาเองจาก event (เช่น entityHurt ของเรา หรือ ม็อบตีเรา) → tracker.provoked.add(entity.id)
export function toState(bot, tr = createTracker(), extra = {}) {
  const e = bot.entity;
  const me = e.position;
  const nearby = Object.values(bot.entities ?? {})
    .filter((x) => x !== e && x.position && x.name && x.type !== 'player' && x.type !== 'object' && x.type !== 'orb')
    .map((x) => ({ type: x.name, dist: Math.round(me.distanceTo(x.position) * 10) / 10, hostile: HOSTILE.has(x.name), provoked: tr.provoked.has(x.id) || undefined }))
    .filter((x) => x.dist <= 64);
  const items = bot.inventory?.items?.() ?? [];
  const inv = {};
  for (const it of items) inv[it.name] = (inv[it.name] ?? 0) + it.count;
  const worn = ARMOR_SLOTS.map((i) => bot.inventory?.slots?.[i]?.name).filter(Boolean);
  if (bot.inventory?.slots?.[45]) worn.push(bot.inventory.slots[45].name);           // มือรอง [ตรวจ]
  // effects: mineflayer เก็บเป็น { [id]: {amplifier, duration} } [ตรวจ] → แปลงชื่อด้วย bot.registry
  const effects = Object.keys(e.effects ?? {}).map((id) => bot.registry?.effects?.[id]?.name?.replace(/([a-z])([A-Z])/g, '$1_$2').toLowerCase()).filter(Boolean);
  // idle: ตำแหน่ง+กระเป๋าไม่เปลี่ยน
  // เวลา: ใช้ tick เกม (bot.time.age) ถ้ามี — เซิร์ฟแล็กแล้วนาฬิกาเครื่องจะเพี้ยน · 1 tick = 50 ms
  const now = extra.now ?? (bot.time?.age != null ? Number(bot.time.age) * 50 : Date.now());
  const invSig = JSON.stringify(inv);
  const moved = !tr.lastPos || tr.lastPos.distanceTo(me) > 1 || invSig !== tr.lastInv;
  if (moved) { tr.lastPos = me.clone ? me.clone() : me; tr.lastInv = invSig; tr.idleSince = now; }
  const below = bot.blockAt?.(me.offset(0, -1, 0));
  const head = bot.blockAt?.(me.offset(0, 1.62, 0));
  return {
    hp: bot.health, food: bot.food, dim: DIM(bot.game?.dimension), time: bot.time?.timeOfDay ?? 0,
    inLava: !!e.isInLava, inWater: !!e.isInWater, onFire: !!(e.metadata?.[0] & 0x01),   // flag ติดไฟ [ตรวจ]
    air: ((bot.oxygenLevel ?? 20) / 20) * 15,                                            // 20 = เต็ม → วินาที [ตรวจ]
    fallDistance: fallDistance(e, tr), suffocating: !!(head && head.boundingBox === 'block'),
    standingOn: below?.name, nearby, inv, worn, effects,
    idleSeconds: (now - (tr.idleSince ?? now)) / 1000,
    ...extra,
  };
}
