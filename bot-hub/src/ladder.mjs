// ladder.mjs — บันไดเอาชีวิตรอดจนจบเกม = ต่อ chain ใน mc-lab/data/chains.json ตามลำดับ
//   first_night → iron_kit → nether → end → dragon  (31 ขั้น)
// % = ขั้นที่ผ่าน / ทั้งหมด · จำ "สูงสุดที่เคยถึง" ไว้ด้วย (ของถูกใช้ไปแล้ว ขั้นเก่าจะดูเหมือนยังไม่เสร็จ)
// ค้าง = อยู่ขั้นเดิมเกิน stuckMin นาที (เวลาเกม จาก tick) → บอกว่าค้างตรงไหน
export const LADDER = ['first_night', 'iron_kit', 'nether', 'end', 'dragon'];

export function createLadder({ chains, test, stuckMin = 15 } = {}) {
  const steps = LADDER.flatMap((g) => (chains[g] ?? []).map((st) => ({ goal: g, ...st })));
  let best = 0, curId = null, since = null;
  return {
    total: steps.length,
    update(s, tick = 0) {
      // ขั้นแรกที่ยังไม่ผ่าน (ข้ามขั้นที่ไม่ใช่หน้าที่ของ role นี้)
      let i = steps.findIndex((st) => !(st.roles && s.role && !st.roles.includes(s.role)) && !safeTest(test, st.done, s));
      if (i < 0) i = steps.length;
      best = Math.max(best, i);
      const st = steps[i] ?? null;
      const id = st ? `${st.goal}/${st.id}` : 'done';
      if (id !== curId) { curId = id; since = tick; }
      const stuckFor = (tick - since) / 1200;                      // 1200 tick = 1 นาที
      return {
        done: i, total: steps.length, pct: Math.round((100 * i) / steps.length),
        best, bestPct: Math.round((100 * best) / steps.length),
        stage: st?.goal ?? 'จบเกม', step: st ? { id: st.id, title: st.title ?? st.id } : null,
        stuckMin: Math.round(stuckFor), stuck: !!st && stuckFor >= stuckMin,
      };
    },
  };
}
const safeTest = (test, c, s) => { try { return test(c ?? {}, s); } catch { return false; } };
