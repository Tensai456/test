// row_to_state.mjs — แถว jsonl รุ่นพี่ → state ของ decide() (ตาราง docs/IMITATION_DESIGN.md §3) + tracker ข้ามแถว
// กติกา: ห้ามเดาเงียบ — คีย์ที่ไม่มีข้อมูลใส่ state._missing แล้ว replay จะตัดออกจากตัวส่วนของกฎที่ใช้คีย์นั้น
const HOSTILE = new Set(['zombie', 'husk', 'drowned', 'zombie_villager', 'skeleton', 'stray', 'bogged', 'parched', 'spider', 'cave_spider', 'creeper', 'witch', 'slime', 'magma_cube', 'phantom', 'silverfish', 'endermite', 'pillager', 'vindicator', 'evoker', 'vex', 'ravager', 'guardian', 'elder_guardian', 'warden', 'breeze', 'creaking', 'blaze', 'ghast', 'wither_skeleton', 'piglin_brute', 'hoglin', 'zoglin', 'shulker', 'ender_dragon', 'wither']);
const dist3 = (a, b) => Math.hypot(a[0] - b[0], a[1] - b[1], a[2] - b[2]);

export function createReplayTracker() {
  return { airborneFromY: null, lastPos: null, lastInv: '', idleSince: null, provoked: new Set(), deathTick: null, spawnAfterDeath: null };
}

// ctx: { role, team: [{hp, food, pos}], intern: แถวผู้ฝึกงานที่ดูตัวนี้ ณ เวลาใกล้สุด (ใช้ sonar ถ้ารุ่นพี่ไม่มี nearby) }
export function rowToState(row, tr, ctx = {}) {
  const missing = [];
  const tick = row.tick ?? (row.t != null ? row.t / 50 : 0);
  const pos = row.pos ?? null;
  if (!pos) missing.push('pos');
  // ตาย/เกิด → justDied / respawnGrace (60 tick หลังเกิด ตาม brainPlugin)
  for (const ev of row.events ?? []) { if (ev === 'death') tr.deathTick = tick; if (ev === 'spawn' && tr.deathTick != null) tr.spawnAfterDeath = tick; }
  const flags = { ...(row.flags ?? {}) };
  if (tr.spawnAfterDeath != null && tick - tr.spawnAfterDeath < 60) flags.respawnGrace = true;
  if (tr.deathTick != null && tick - tr.deathTick < 6000 && !row.flags?.recovered) flags.justDied = true;   // ของตกหายใน 6000 tick (W/Item_(entity))
  if (row.pose === 'gliding') flags.gliding = true;
  // ระยะตก (เหมือน mineflayer_state.fallDistance)
  let fallDistance = 0;
  if (pos && row.onGround != null && row.vel) {
    if (row.onGround || row.flagsRaw?.water || row.flagsRaw?.lava) tr.airborneFromY = null;
    else { tr.airborneFromY = Math.max(tr.airborneFromY ?? pos[1], pos[1]); if (row.vel[1] < 0) fallDistance = tr.airborneFromY - pos[1]; }
  } else missing.push('fallDistance');
  // idle (ตำแหน่ง/กระเป๋าไม่เปลี่ยน)
  const invSig = JSON.stringify(row.inv ?? {});
  if (!tr.lastPos || !pos || dist3(tr.lastPos, pos) > 1 || invSig !== tr.lastInv) { tr.lastPos = pos; tr.lastInv = invSig; tr.idleSince = tick; }
  // provoked จาก events "hurt:dmg:<type>#id" (มันตีเรา) และ act.attack "<type>#id" (เราตีมัน)
  for (const ev of row.events ?? []) { const m = /^hurt:[\d.]+:([a-z_]+)#?(\d+)?/.exec(ev); if (m?.[2]) tr.provoked.add(m[2]); }
  const atk = row.act?.attack ? /^([a-z_]+)#?(\d+)?/.exec(row.act.attack) : null;
  if (atk?.[2] && !HOSTILE.has(atk[1])) tr.provoked.add(atk[2]);
  // ม็อบรอบตัว: ของรุ่นพี่เองก่อน · ไม่มี → sonar ผู้ฝึกงาน (ระยะคิดใหม่จากพิกัดรุ่นพี่ถ้ามี pos ของม็อบ)
  let nearby = row.nearby;
  if (!nearby && ctx.intern?.sonar?.nearby) {
    nearby = ctx.intern.sonar.nearby.map((e) => (e.pos && pos ? { ...e, dist: +dist3(e.pos, pos).toFixed(1) } : { ...e, approx: true }));
    if (nearby.some((e) => e.approx)) missing.push('nearby.dist');
  }
  if (!nearby) { nearby = []; missing.push('nearby'); }
  nearby = nearby.map((e) => ({ ...e, hostile: e.hostile ?? HOSTILE.has(e.type), provoked: e.provoked ?? ((e.id != null && tr.provoked.has(String(e.id))) || undefined) }));
  for (const k of ['inLava', 'inWater', 'onFire']) if (row.flagsRaw?.[k.slice(2).toLowerCase()] == null && row.flagsRaw?.[k] == null) missing.push(k);
  for (const k of ['edgeDepth', 'sheltered', 'standingOn', 'suffocating']) if (row[k] == null) missing.push(k);
  if (row.food == null) missing.push('food');
  if (!row.inv) missing.push('inv');
  const action = row.act?.use === 'sleep' || row.pose === 'sleeping' ? 'sleep' : row.act?.attack ? 'attack' : row.act?.place ? 'place_block' : row.act?.dig ? 'mine' : null;
  const target = atk ? nearby.find((e) => String(e.id) === atk[2]) ?? { type: atk[1], hostile: HOSTILE.has(atk[1]) } : undefined;
  const digging = row.act?.dig ? { block: row.act.dig, canHarvest: row.act.canHarvest ?? true, belowFeet: !!row.act.digBelowFeet, gravityAbove: !!row.act.gravityAbove } : undefined;
  return {
    hp: row.hp, food: row.food, dim: String(row.dim ?? 'overworld').replace(/^minecraft:/, ''), time: row.timeOfDay ?? 0,
    inLava: !!(row.flagsRaw?.lava ?? row.flagsRaw?.inLava), inWater: !!(row.flagsRaw?.water ?? row.flagsRaw?.inWater), onFire: !!(row.flagsRaw?.fire ?? row.flagsRaw?.onFire),
    air: row.air != null ? (row.air / 20) * 15 : 15, fallDistance, suffocating: !!row.suffocating, standingOn: row.standingOn,
    edgeDepth: row.edgeDepth, sheltered: !!row.sheltered,
    nearby, nearBlocks: ctx.intern?.sonar?.blocks ?? row.nearBlocks ?? [], inv: row.inv ?? {}, worn: [...(row.armor ?? []), row.offhand].filter(Boolean),
    effects: row.effects ?? [], idleSeconds: (tick - (tr.idleSince ?? tick)) / 20,
    action, target, digging, flags, role: ctx.role,
    team: (ctx.team ?? []).filter((m) => m.pos && pos).map((m) => ({ hp: m.hp, food: m.food, dist: +dist3(m.pos, pos).toFixed(1) })),
    ping: row.ping, tps: row.tps,
    _missing: [...new Set(missing)], _tick: tick,
  };
}
