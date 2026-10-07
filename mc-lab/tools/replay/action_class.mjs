// action_class.mjs — หน้าต่างแถว (ปัจจุบัน → อนาคต W วินาที) → คลาสท่าที่รุ่นพี่ทำจริง
// คลาส: eat · fight · flee · mine · place · sleep · swim-up · clutch · move · idle (หลายคลาสพร้อมกันได้ คืนเป็น Set)
const d2 = (a, b) => Math.hypot(a[0] - b[0], a[2] - b[2]);
export function actionClasses(rows) {
  const out = new Set();
  if (!rows.length) return out;
  const a = rows[0], z = rows.at(-1);
  for (const r of rows) {
    const act = r.act ?? {};
    if (act.use === 'eat') out.add('eat');
    if (act.attack) out.add('fight');
    if (act.dig) out.add('mine');
    if (act.place) out.add('place');
    if (act.use === 'sleep' || r.pose === 'sleeping') out.add('sleep');
    if (act.use === 'clutch' || (act.place && /water_bucket|slime_block|hay_block|ladder|scaffolding|cobweb|powder_snow/.test(act.place))) out.add('clutch');
    if (act.use === 'shield') out.add('fight');
  }
  if (a.pos && z.pos) {
    const moved = d2(a.pos, z.pos);
    if (moved > 1.5) out.add('move');
    if (z.pos[1] - a.pos[1] > 0.8 && (a.air ?? 20) < 20) out.add('swim-up');
    // หนี = ระยะจากม็อบศัตรูใกล้สุด (ตัวเดิม) เพิ่ม ≥1.5
    const m0 = (a.nearby ?? []).filter((e) => e.hostile !== false && e.pos).sort((p, q) => p.dist - q.dist)[0];
    if (m0) { const m1 = (z.nearby ?? []).find((e) => e.id === m0.id && e.pos); if (m1 && d2(z.pos, m1.pos) - d2(a.pos, m0.pos) >= 1.5) out.add('flee'); }
    if (!out.size && moved <= 1) out.add('idle');
  }
  return out;
}
