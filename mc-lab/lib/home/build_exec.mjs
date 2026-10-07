// build_exec.mjs — แปลงผลจำลอง (build_sim) เป็นคำสั่งวางจริงของ mineflayer 4.39 แล้วรันทีละก้อน
// ตรวจกับซอร์ส: bot._placeBlockWithOptions(ref, face, { half: 'top'|'bottom', forceLook }) (place_block.js/generic_place.js)
//  · half → คลิกหน้าที่ dy ±0.25 = บันได/แผ่นครึ่งได้ครึ่งล่าง/บน · บันไดหันตามทิศที่บอตมอง → ยืนฝั่งตรงข้าม facing (build_sim บังคับแล้ว)
// ความปลอดภัย: ทุกก้อนถาม bot.brain (มีภัย → หยุด · ทางเดินขึ้นบ้าน/ช่วงเพิ่งเกิด → veto) ก่อนวาง
const NB = [[0, -1, 0], [1, 0, 0], [-1, 0, 0], [0, 0, 1], [0, 0, -1], [0, 1, 0]];   // ล่างก่อน (วางบนพื้นแม่นสุด)
const NONSOLID = /(torch|door|bed|pane|carpet|sign|button|lever)$/;
const ITEM = { wall_torch: 'torch' };

// actions: [{ i, item, at:[x,y,z], ref:[x,y,z], face:[dx,dy,dz], half?, stand:[x,feet,z], scaffold }]
export function planActions(design, sim, origin = { x: 0, y: 0, z: 0 }) {
  const names = new Map(design.blocks.map((b) => [`${b.x},${b.y},${b.z}`, b]));
  const placed = new Set();
  const solid = (x, y, z) => y < 0 || (placed.has(`${x},${y},${z}`) && !NONSOLID.test(names.get(`${x},${y},${z}`)?.name ?? ''));
  const out = [];
  for (const st of sim.steps) {
    const [x, y, z] = st.at, b = names.get(`${x},${y},${z}`);
    const half = b.name.endsWith('_stairs') || (b.name.endsWith('_slab') && b.props?.type !== 'top') ? 'bottom' : undefined;
    let ref = null;
    for (const [dx, dy, dz] of NB) if (solid(x + dx, y + dy, z + dz)) { ref = [x + dx, y + dy, z + dz]; break; }
    if (!ref) throw new Error(`ไม่มีที่ยึด ${b.name} @${x},${y},${z}`);
    const face = [x - ref[0], y - ref[1], z - ref[2]];
    out.push({ i: st.i, item: ITEM[b.name] ?? b.name, block: b.name, at: [x + origin.x, y + origin.y, z + origin.z], ref: [ref[0] + origin.x, ref[1] + origin.y, ref[2] + origin.z],
      face, ...(half ? { half } : {}), stand: [st.stand[0] + origin.x, st.stand[1] + origin.y, st.stand[2] + origin.z], scaffold: st.scaffold });
    placed.add(`${x},${y},${z}`);
  }
  return out;
}

// รันจริง: io = { goto(x,feet,z), pillar(h) (ต่อนั่งร้านใต้เท้า h ชั้น), unpillar(h), vec(x,y,z) } — ฝั่งบอตใส่ให้ (เช่นใช้ pathfinder)
// คืน { done, at: ก้อนถัดไปที่ต้องทำต่อ, reason } · เรียกซ้ำด้วย from = at เพื่อทำต่อหลังหยุด
export async function runBuild(bot, actions, io, { from = 0, onStep } = {}) {
  for (let k = from; k < actions.length; k++) {
    const a = actions[k];
    // 1) ถามสมองก่อน: มีภัย (reflex ที่ไม่ใช่ veto) → หยุดให้สมองจัดการก่อน
    const th = bot.brain?.think?.();
    if (th && th.d.mode === 'reflex' && !th.d.rule.veto) return { done: false, at: k, reason: `หยุด: ${th.d.rule.id}` };
    const ok = bot.brain?.allowed?.('place_block', { pos: { x: a.at[0], y: a.at[1], z: a.at[2] } });
    if (ok && !ok.ok) return { done: false, at: k, reason: `ห้ามวาง: ${ok.vetoes.map((v) => v.id).join(',')}` };
    // 2) มีของไหม
    const it = bot.inventory.items().find((i) => i.name === a.item);
    if (!it) return { done: false, at: k, reason: `ของไม่พอ: ${a.item}` };
    // 3) ไปยืน + นั่งร้าน · 4) ถือของ · 5) วาง · 6) รื้อนั่งร้าน
    await io.goto(...a.stand.map((v, j) => (j === 1 ? v - a.scaffold : v)));
    if (a.scaffold) await io.pillar(a.scaffold);
    await bot.equip(it, 'hand');
    const ref = bot.blockAt(io.vec(...a.ref));
    if (!ref) return { done: false, at: k, reason: 'ชังก์ไม่โหลด' };
    await bot._placeBlockWithOptions(ref, io.vec(...a.face), { ...(a.half ? { half: a.half } : {}), forceLook: true });
    if (a.scaffold) await io.unpillar(a.scaffold);
    onStep?.(a, k + 1, actions.length);
  }
  return { done: true, at: actions.length };
}
