// metrics.mjs — สรุปผล replay: agreement · coverage · รายกฎ · veto ที่รุ่นพี่ฝ่าฝืน · ท่าป้องกันที่เราไม่มีกฎ · ความแม่นการแย้ง · ข้อเสนอปรับกฎ
// ตัวส่วน (§4.3): ไม่นับ unknown/excluded · รายงานจำนวนแยกเสมอ
export function summarize({ results, objections, qc }) {
  const all = Object.values(results).flat();
  const perRule = {}, breaches = {}, extras = {};
  let match = 0, miss = 0, unknown = 0, excluded = 0, reflex = 0;
  for (const r of all) {
    if (r.cls === 'excluded') { excluded++; continue; }
    if (r.cls === 'unknown') { unknown++; (perRule[r.pred.id] ??= blank()).unknown++; continue; }
    if (r.pred.kind === 'reflex') {
      reflex++;
      const p = (perRule[r.pred.id] ??= blank());
      p.n++;
      if (r.cls === 'match') { match++; p.match++; } else { miss++; p.miss++; p[r.outcome === 'ok' ? 'missFine' : 'missBad']++; }
    }
    if (r.cls === 'extra') {
      const n = r.ctx?.nearest; const k = n ? `${n.type} ≤${Math.ceil(n.dist / 4) * 4}` : `ไม่มีม็อบ · hp ${r.ctx?.hp ?? '?'}`;
      const e = (extras[k] ??= { n: 0, ok: 0, acts: {} }); e.n++; if (r.outcome === 'ok') e.ok++; for (const a of r.actual) e.acts[a] = (e.acts[a] ?? 0) + 1;
    }
    for (const v of r.breach ?? []) { const b = (breaches[v] ??= { n: 0, bad: 0 }); b.n++; if (r.outcome !== 'ok') b.bad++; }
  }
  const evaluated = match + miss;
  const perWho = Object.fromEntries(Object.entries(results).map(([w, rs]) => { const m = rs.filter((x) => x.cls === 'match').length, x = rs.filter((y) => y.cls === 'miss').length; const died = rs.filter((y, i) => y.outcome === 'died' && rs[i - 1]?.outcome !== 'died').length; return [w, { rows: rs.length, match: m, miss: x, died }]; }));
  const suggestions = [];
  for (const [id, p] of Object.entries(perRule)) {
    if (p.n < 5) continue;
    const rate = p.miss / p.n;
    if (rate > 0.5 && p.missFine > p.missBad) suggestions.push(`**${id}**: รุ่นพี่ไม่ทำตาม ${(rate * 100).toFixed(0)}% และส่วนใหญ่ไม่เป็นอะไร → กฎอาจยิงเร็ว/เข้มเกิน หรือหน้าต่างเวลาที่คาดสั้นไป (rule_expect) → ทดลองขยับเกณฑ์แล้ว replay ซ้ำ`);
    if (p.missBad >= 3 && p.missBad >= p.missFine) suggestions.push(`**${id}**: รุ่นพี่ไม่ทำตามแล้วเจ็บ/ตาย ${p.missBad} ครั้ง → กฎถูก รุ่นพี่ผิด · ใช้แถวพวกนี้เป็นตัวอย่างลบ (ห้ามลอก)`);
  }
  for (const [k, e] of Object.entries(extras)) if (e.n >= 5 && e.ok / e.n >= 0.8) suggestions.push(`ท่าป้องกันที่เราไม่มีกฎ (${k}): รุ่นพี่ทำ ${e.n} ครั้ง รอด ${(100 * e.ok / e.n).toFixed(0)}% → พิจารณาเพิ่ม/ขยายเงื่อนไขกฎ (ท่า: ${Object.keys(e.acts).join(', ')})`);
  for (const [v, b] of Object.entries(breaches)) suggestions.push(`veto **${v}**: รุ่นพี่ฝ่าฝืน ${b.n} ครั้ง (ผลแย่ ${b.bad}) → คงไว้เป็นข้อห้ามแข็ง · เป็นหลักฐาน "รุ่นพี่ผิด" ให้ผู้ฝึกงาน`);
  return { perWho, total: all.length, evaluated, reflex, match, miss, unknown, excluded, coverage: all.length ? evaluated / all.length : 0, agreement: evaluated ? match / evaluated : 0, perRule, breaches, extras, objections, qc, suggestions };
}
const blank = () => ({ n: 0, match: 0, miss: 0, missFine: 0, missBad: 0, unknown: 0 });
const pct = (a, b) => (b ? `${((a / b) * 100).toFixed(1)}%` : '–');

export function renderReport(S, { dir, sec }) {
  const L = [`# REPLAY_REPORT — รุ่นพี่ vs สมองใหม่ (decide)`, '', `> \`node tools/replay/replay.mjs ${dir}\` · ${sec.toFixed(1)} วิ · ตัวส่วนไม่นับแถวที่ประเมินไม่ได้ (docs/IMITATION_DESIGN.md §4.3)`, '',
    '## 1. ภาพรวม', '', '| รายการ | ค่า |', '|---|---|',
    `| แถวทั้งหมด | ${S.total.toLocaleString()} |`, `| ประเมินได้ (reflex ที่มีข้อมูลครบ) | ${S.evaluated.toLocaleString()} (${pct(S.evaluated, S.total)}) |`,
    `| **ตรงกัน (agreement)** | **${pct(S.match, S.evaluated)}** |`, `| ข้อมูลไม่พอ (unknown) | ${S.unknown.toLocaleString()} |`, `| ตัดออก (เพิ่งเกิด/ตาย/ชังก์ไม่โหลด) | ${S.excluded.toLocaleString()} |`, '',
    '### ต่อรุ่นพี่', '', '| รุ่นพี่ | แถว | ตรงกัน | ช่วงก่อนตาย (ครั้ง) |', '|---|---|---|---|',
    ...Object.entries(S.perWho).map(([w, p]) => `| ${w} | ${p.rows} | ${pct(p.match, p.match + p.miss)} | ${p.died} |`), '',
    '## 2. รายกฎ', '', '| กฎ | n | ตรง | ไม่ตรง (ไม่เป็นไร / เจ็บ-ตาย) | unknown |', '|---|---|---|---|---|',
    ...Object.entries(S.perRule).sort((a, b) => b[1].n - a[1].n).map(([id, p]) => `| ${id} | ${p.n} | ${pct(p.match, p.n)} | ${p.miss} (${p.missFine} / ${p.missBad}) | ${p.unknown} |`), '',
    '## 3. veto ที่รุ่นพี่ฝ่าฝืน', '', ...(Object.keys(S.breaches).length ? Object.entries(S.breaches).map(([v, b]) => `- ${v}: ${b.n} ครั้ง · ผลแย่ ${b.bad}`) : ['- ไม่พบ']), '',
    '## 4. ท่าป้องกันของรุ่นพี่ตอนที่เราทำแผนอยู่ (ผู้สมัคร "ขาดกฎ")', '', '| บริบท | ครั้ง | รอด | ท่า |', '|---|---|---|---|',
    ...Object.entries(S.extras).sort((a, b) => b[1].n - a[1].n).slice(0, 15).map(([k, e]) => `| ${k} | ${e.n} | ${pct(e.ok, e.n)} | ${Object.keys(e.acts).join(', ')} |`), '',
    '## 5. การแย้งของผู้ฝึกงาน', '', '| ผู้ฝึกงาน | แย้ง | ความแม่น (ถูก/(ถูก+ผิด)) | ยังไม่รู้ | ตรงกับ decide ณ เวลานั้น |', '|---|---|---|---|---|',
    ...Object.entries(S.objections).map(([k, o]) => `| ${k} | ${o.objections} | ${pct(o.right, o.right + o.wrong)} | ${o.unknown} | ${pct(o.agreeDecide, o.checked)} |`), '',
    '## 6. ข้อเสนอปรับ (ต้อง replay ซ้ำ + fuzz ซ้ำก่อนปล่อย)', '', ...(S.suggestions.length ? S.suggestions.map((s) => `- ${s}`) : ['- ยังไม่มี (ข้อมูลน้อยเกินเกณฑ์ n ≥5)']), '',
    '## 7. คุณภาพไฟล์', '', '| ไฟล์ | แถว | บรรทัดเสีย | tick ถอยหลัง/ซ้ำ | ช่องว่าง >2 วิ |', '|---|---|---|---|---|',
    ...Object.entries(S.qc).map(([f, q]) => `| ${f} | ${q.rows} | ${q.bad} | ${q.back} | ${q.gaps} |`), ''];
  return L.join('\n');
}
