// replay.mjs — ป้อนแถว log รุ่นพี่เข้า decide() ตัวเดียวกับบอตจริง แล้วเทียบกับท่าที่รุ่นพี่ทำ (docs/IMITATION_DESIGN.md §4)
// node tools/replay/replay.mjs <โฟลเดอร์ log> [--out=docs/REPLAY_REPORT.md] [--goal=iron_kit]
//   โฟลเดอร์มี senior_<ชื่อ>.jsonl และ intern_<ชื่อ>.jsonl (สคีมา §1.1/§1.2) · ทดลองก่อนด้วย scripts/gen_synthetic_logs.mjs
import fs from 'node:fs';
import path from 'node:path';
import { decide } from '../../lib/chain.mjs';
import { loadJsonl } from './load_jsonl.mjs';
import { rowToState, createReplayTracker } from './row_to_state.mjs';
import { actionClasses } from './action_class.mjs';
import { EXPECT, DEFAULT_EXPECT, VETO_BREACH, NEEDS, matches } from './rule_expect.mjs';
import { summarize, renderReport } from './metrics.mjs';

const tickOf = (r) => r.tick ?? (r.t != null ? r.t / 50 : 0);
// แถวช่วง [i, i+sec] ตาม tick
function windowRows(rows, i, sec) { const t0 = tickOf(rows[i]), out = []; for (let j = i; j < rows.length && tickOf(rows[j]) - t0 <= sec * 20; j++) out.push(rows[j]); return out; }
function outcome(rows, i) {   // ตายใน 10 วิ / เลือดลด ≥4 ใน 5 วิ = ผลแย่
  const t0 = tickOf(rows[i]), hp0 = rows[i].hp;
  for (let j = i + 1; j < rows.length && tickOf(rows[j]) - t0 <= 200; j++) {
    if ((rows[j].events ?? []).includes('death')) return 'died';
    if (tickOf(rows[j]) - t0 <= 100 && hp0 != null && rows[j].hp != null && hp0 - rows[j].hp >= 4) return 'hurt';
  }
  return 'ok';
}
const lastAtOrBefore = (arr, tk) => { let lo = 0, hi = arr.length - 1, best = null; while (lo <= hi) { const m = (lo + hi) >> 1; if (arr[m].tick <= tk) { best = arr[m]; lo = m + 1; } else hi = m - 1; } return best; };

// rows ของรุ่นพี่ 1 ตัว → ผลรายแถว
export function replaySenior(rows, { who, role, goal = 'iron_kit', goalOf, team = [], interns = [] } = {}) {
  const tr = createReplayTracker(), res = [];
  for (let i = 0; i < rows.length; i++) {
    const row = rows[i], tk = tickOf(row);
    const intern = interns.map((ir) => lastAtOrBefore(ir, tk)).find((r) => r && r.watching === who && tk - r.tick <= 10);
    const s = rowToState(row, tr, { role, team: team.map((t) => lastAtOrBefore(t, tk)).filter(Boolean), intern });
    const d = decide(s, goalOf?.(row) ?? goal);
    const pred = d.mode === 'reflex' ? { kind: d.rule.veto ? 'veto' : 'reflex', id: d.rule.id } : { kind: d.mode, id: d.step?.id ?? d.mode };
    const r = { i, t: tk, who, pred, vetoes: d.vetoes.map((v) => v.id), missing: s._missing, cls: null, actual: [], outcome: outcome(rows, i) };
    if (s.flags.respawnGrace || s.flags.chunkUnloaded) { r.cls = 'excluded'; res.push(r); continue; }   // ช่วงพักหลังเกิด/ชังก์ไม่โหลด (§4.3)
    if (pred.kind === 'reflex') {
      const ex = EXPECT[pred.id] ?? DEFAULT_EXPECT;
      const need = NEEDS[pred.id] ?? [];
      if (need.some((k) => s._missing.includes(k)) || s._missing.includes('pos')) { r.cls = 'unknown'; res.push(r); continue; }
      const cl = actionClasses(windowRows(rows, i, ex.win));
      r.actual = [...cl]; r.cls = matches(ex.want, cl) ? 'match' : 'miss';
    } else {
      const cl = actionClasses(windowRows(rows, i, 2));
      r.actual = [...cl];
      // ท่าป้องกัน = หนี/กันตก/ว่ายขึ้น · กินนับเฉพาะตอนเลือดต่ำ (<10) — กินตอนปกติไม่ใช่การป้องกัน
      r.cls = ['flee', 'clutch', 'swim-up'].some((c) => cl.has(c)) || (cl.has('eat') && s.hp < 10) ? 'extra' : 'plan-ok';
      r.ctx = { nearest: s.nearby.filter((e) => e.hostile).sort((a, b) => a.dist - b.dist)[0], hp: s.hp, food: s.food };
    }
    // veto: รุ่นพี่ทำท่าที่ห้าม = ผู้สมัคร "รุ่นพี่ผิด" (ไม่นับเป็นความไม่ตรงของเรา)
    const cl1 = actionClasses(windowRows(rows, i, 1));
    r.breach = r.vetoes.filter((v) => (VETO_BREACH[v] ?? []).some((c) => cl1.has(c)));
    res.push(r);
  }
  return res;
}

// การแย้งของผู้ฝึกงาน: ความแม่น (verdict) + ตรงกับ decide ณ เวลานั้นไหม (ผู้ฝึกงานกฎล้วนต้อง ~100% = sanity check pipeline)
export function scoreObjections(internRows, seniorResults) {
  const by = {};
  const idx = Object.fromEntries(Object.entries(seniorResults).map(([w, rs]) => [w, rs.map((x) => ({ ...x, tick: x.t }))]));   // ทำครั้งเดียว (ไม่ map ซ้ำทุกคำแย้ง)
  for (const r of internRows) {
    const o = r.objection, v = r.verdict, k = r.who;
    by[k] ??= { objections: 0, right: 0, wrong: 0, unknown: 0, agreeDecide: 0, checked: 0 };
    if (o) {
      by[k].objections++;
      const sr = idx[r.watching]; const near = sr && lastAtOrBefore(sr, r.tick);
      if (near) { by[k].checked++; if (near.pred.id === o.rule || near.vetoes.includes(o.rule)) by[k].agreeDecide++; }
    }
    if (v) by[k][v.result === 'right' ? 'right' : v.result === 'wrong' ? 'wrong' : 'unknown']++;
  }
  return by;
}

export async function replayDir(dir, opt = {}) {
  const files = fs.readdirSync(dir);
  const seniors = {}, interns = {}, qc = {};
  for (const f of files.filter((x) => x.endsWith('.jsonl'))) {
    const { rows, qc: q } = await loadJsonl(path.join(dir, f)); qc[f] = q;
    const m = /^(senior|intern)_(.+)\.jsonl$/.exec(f); if (!m) continue;
    (m[1] === 'senior' ? seniors : interns)[m[2]] = rows.map((r) => ({ ...r, tick: tickOf(r) }));
  }
  const internArr = Object.values(interns);
  const results = {};
  for (const [who, rows] of Object.entries(seniors)) {
    const team = Object.entries(seniors).filter(([w]) => w !== who).map(([, r]) => r);
    results[who] = replaySenior(rows, { who, role: opt.roles?.[who], goal: opt.goal, team, interns: internArr });
  }
  const objections = scoreObjections(internArr.flat(), results);
  return { results, objections, qc };
}

if (import.meta.url === `file://${process.argv[1]}`) {
  const dir = process.argv[2];
  if (!dir) { console.error('ใช้: node tools/replay/replay.mjs <โฟลเดอร์ log> [--out=...] [--goal=...]'); process.exit(1); }
  const out = (process.argv.find((a) => a.startsWith('--out=')) ?? '--out=docs/REPLAY_REPORT.md').split('=')[1];
  const goal = (process.argv.find((a) => a.startsWith('--goal=')) ?? '--goal=iron_kit').split('=')[1];
  const t0 = Date.now();
  const r = await replayDir(dir, { goal });
  const sum = summarize(r);
  fs.writeFileSync(out, renderReport(sum, { dir, sec: (Date.now() - t0) / 1000 }));
  console.log(`แถว ${sum.total} · ประเมินได้ ${sum.evaluated} (${(sum.coverage * 100).toFixed(0)}%) · ตรง ${(sum.agreement * 100).toFixed(1)}% → ${out}`);
}
