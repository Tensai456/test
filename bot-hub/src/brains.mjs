// brains.mjs — ประกอบสมองจากชิ้นส่วน: old | rules | fly-small | fly-full (ผสมด้วย +)
//
// กติกาผสม:
//   · ถ้ามี "rules" อยู่ในชุด → reflex prio ≥50 และ veto ของกฎชนะเสมอ (ความปลอดภัยมาก่อน)
//   · นอกนั้นถามทีละชิ้นตามลำดับที่เขียน ชิ้นแรกที่ตอบ (ไม่ใช่ null) ชนะ · ไม่มีใครตอบ → แผนจากกฎ (ถ้ามี rules)
//   · ชิ้นที่ยังไม่ได้เสียบไฟล์ (env ว่าง) → ข้าม + แจ้ง missing (หน้าเว็บโชว์ป้าย "สมองยังไม่เสียบ")
//
// สัญญาของสมองภายนอก (ไฟล์ .mjs ที่ OLD_BRAIN_PATH / FLY_SMALL_PATH / FLY_FULL_PATH ชี้):
//   export function decide(state, goal) → null | { action: 'eat'|'flee'|..., thought?: 'ข้อความ', ...อื่น ๆ }
//   (หรือคืนรูปแบบเดียวกับ mc-lab decide: { mode, rule|step, vetoes } ก็ได้ — ส่งต่อตรง ๆ)
//   state = รูปแบบเดียวกับ mc-lab/lib/adapter/mineflayer_state.mjs toState()
import path from 'node:path';
import { pathToFileURL } from 'node:url';
import { parseBrain, ROOT } from './config.mjs';

const ENV_OF = { old: 'OLD_BRAIN_PATH', 'fly-small': 'FLY_SMALL_PATH', 'fly-full': 'FLY_FULL_PATH' };
const cache = new Map();

export async function loadPart(part, { rulesDecide } = {}) {
  if (part === 'rules') return rulesDecide;
  const p = process.env[ENV_OF[part]];
  if (!p) return null;
  const abs = path.resolve(ROOT, p);
  if (!cache.has(abs)) cache.set(abs, import(pathToFileURL(abs).href).then((m) => m.decide ?? m.default?.decide ?? null));
  return cache.get(abs);
}

// ห่อคำตอบสมองภายนอกให้เป็นรูปที่ mineflayer_brain เข้าใจ (mode plan → emit brain:decision ได้)
export function wrap(part, r) {
  if (!r) return null;
  if (r.mode) return { ...r, source: part, vetoes: r.vetoes ?? [] };
  return { mode: 'plan', source: part, step: { id: `${part}:${r.action ?? '?'}`, title: r.thought ?? r.action ?? '' }, raw: r, vetoes: [] };
}

// คืน { decide(state, goal), parts, missing } · decide คืน decision + .source + .thought
export async function makeBrain(spec, { rulesDecide, REFLEX_MIN = 50 } = {}) {
  const parts = parseBrain(spec);
  const fns = {};
  const missing = [];
  for (const p of parts) { const f = await loadPart(p, { rulesDecide }); if (f) fns[p] = f; else missing.push(p); }
  const hasRules = !!fns.rules;
  const decide = (s, goal) => {
    let ruled = null;
    if (hasRules) {
      ruled = fns.rules(s, goal);
      if (ruled.mode === 'reflex' && (ruled.rule.veto || ruled.rule.prio >= REFLEX_MIN)) return withThought({ ...ruled, source: 'rules' });
    }
    for (const p of parts) {
      if (p === 'rules' || !fns[p]) continue;
      let r = null;
      try { r = wrap(p, fns[p](s, goal)); } catch (e) { r = null; s._brainError = `${p}: ${e.message}`; }
      if (r) return withThought({ ...r, vetoes: ruled?.vetoes ?? r.vetoes });   // veto ของกฎยังติดไปด้วย → bot.brain.allowed() ใช้ได้
    }
    if (ruled) return withThought({ ...ruled, source: 'rules' });
    return { mode: 'idle', source: 'none', vetoes: [], thought: missing.length ? `สมองยังไม่เสียบ: ${missing.join(', ')}` : 'ไม่มีความเห็น' };
  };
  return { decide, parts, missing };
}

// ข้อความ "คิดอะไรอยู่" แบบอ่านง่าย
export function withThought(d) {
  if (d.thought) return d;
  const t = d.mode === 'reflex' ? `${d.rule.veto ? 'ห้าม' : 'ด่วน'}: ${d.rule.do ?? d.rule.id}`
    : d.mode === 'plan' ? `แผน ${d.step.goal ?? ''} ${d.step.index != null ? `${d.step.index + 1}/${d.step.total}` : ''}: ${d.step.title ?? d.step.id}`.replace(/\s+/g, ' ')
    : d.mode === 'goal-done' ? `เป้า ${d.goal} เสร็จแล้ว` : d.mode;
  return { ...d, thought: t };
}
