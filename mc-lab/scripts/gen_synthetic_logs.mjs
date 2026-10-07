// gen_synthetic_logs.mjs — สร้าง log สังเคราะห์ตามสคีมา docs/IMITATION_DESIGN.md §1 เพื่อเทส replay ก่อนได้ข้อมูลจริง
// node scripts/gen_synthetic_logs.mjs [โฟลเดอร์=logs/synthetic] [นาที=10] [seed=1]
// ⚠ ข้อมูลปลอม — ใช้ทดสอบท่อเท่านั้น ตัวเลขในรายงานจากไฟล์นี้ไม่มีความหมายกับรุ่นพี่จริง
import fs from 'node:fs';
import path from 'node:path';
import { rng32 } from '../lib/pvp/duel_sim.mjs';

const [dir = 'logs/synthetic', minArg = '10', seedArg = '1'] = process.argv.slice(2);
const MIN = Number(minArg), r = rng32(Number(seedArg));
const SENIORS = ['Jarvis', 'Fable', 'Nexus', 'Vikta'], INTERNS = ['Sonar27', 'Sonar28', 'Sonar29', 'Sonar30'];
// นิสัยสมมติรายตัว: โอกาสทำตามกฎ (กินตอนหิว / หนีครีปเปอร์ / ไม่ขุดลงตรง)
const HABIT = { Jarvis: 0.9, Fable: 0.75, Nexus: 0.6, Vikta: 0.85 };
fs.mkdirSync(dir, { recursive: true });
let mobId = 100;

for (const [k, who] of SENIORS.entries()) {
  const good = HABIT[who];
  const rows = [], irows = [];
  let pos = [k * 20, 64, 0], hp = 20, food = 20, tick = 6000, ep = null, epLeft = 0;
  for (let step = 0; step < MIN * 60 * 4; step++, tick += 5) {   // 250 ms = 5 tick
    if (!epLeft) {
      const x = r();
      ep = x < 0.15 ? 'zombie' : x < 0.25 ? 'creeper' : x < 0.35 ? 'hungry' : x < 0.42 ? 'afk' : x < 0.47 ? 'digdown' : 'mine';
      epLeft = ep === 'afk' ? 160 : 24; food = ep === 'hungry' ? 5 : Math.max(food, 12);
      ep === 'zombie' || ep === 'creeper' ? (ep = { kind: ep, id: mobId++, pos: [pos[0] + 6, 64, pos[2]], obey: r() < good }) : (ep = { kind: ep, obey: r() < good });
    }
    epLeft--;
    const row = { t: tick * 50, tick, who, pos: [...pos], yaw: 0, pitch: 0, vel: [0, 0, 0], onGround: true, hand: 'iron_pickaxe', armor: ['iron_helmet', 'iron_chestplate', null, null],
      inv: { cooked_beef: 6, cobblestone: 40, torch: 20 }, hp, food, air: 20, dim: 'overworld', pose: 'standing', act: {}, effects: [], timeOfDay: 6000,
      flagsRaw: { lava: false, water: false, fire: false }, sheltered: false, edgeDepth: 0, standingOn: 'stone', suffocating: false, nearby: [], events: [] };
    if (ep.kind === 'zombie' || ep.kind === 'creeper') {
      const d = Math.hypot(ep.pos[0] - pos[0], ep.pos[2] - pos[2]);
      row.nearby = [{ type: ep.kind, id: ep.id, dist: +d.toFixed(1), hostile: true, pos: [...ep.pos] }];
      if (ep.kind === 'zombie') { ep.pos[0] += Math.sign(pos[0] - ep.pos[0]) * 0.4; if (d < 3) { row.act.attack = `zombie#${ep.id}`; if (r() < 0.2) { hp -= 1; row.events.push(`hurt:1:zombie#${ep.id}`); } } }
      else { ep.pos[0] += Math.sign(pos[0] - ep.pos[0]) * 0.5; if (d < 4) { if (ep.obey) pos[0] -= 1.2; else if (d < 2.5 && epLeft % 6 === 0) { hp -= 7; row.events.push(`hurt:7:creeper#${ep.id}`); } } }
    } else if (ep.kind === 'hungry') { if (ep.obey && epLeft < 20) { row.act.use = 'eat'; food = Math.min(20, food + 1); } }
    else if (ep.kind === 'afk') { /* ยืนนิ่ง */ }
    else if (ep.kind === 'digdown') { row.act.dig = 'stone'; if (!ep.obey) { row.act.digBelowFeet = true; pos[1] -= 0.25; } }
    else { row.act.dig = 'stone'; pos[2] += 0.3; }
    if (hp <= 0) { row.events.push('death'); hp = 20; pos = [k * 20, 64, 0]; rows.push(row); rows.push({ ...row, tick: tick + 2, t: (tick + 2) * 50, events: ['spawn'], hp: 20 }); continue; }
    hp = Math.min(20, hp + (food >= 18 && step % 16 === 0 ? 1 : 0));
    rows.push(row);
    // ผู้ฝึกงาน: เห็นแค่ตำแหน่ง/ม็อบ · แย้งเมื่อเห็นขุดลงตรง (ถูก) และบางครั้งแย้งผิด
    const ir = { t: row.t, tick, who: INTERNS[k], watching: who, sonar: { nearby: row.nearby, blocks: [] }, seniorSeen: { pos: row.pos, hand: row.hand }, objection: null, verdict: null };
    if (row.act.digBelowFeet && r() < 0.3) { const id = `o-${tick}`; ir.objection = { id, rule: 'dig-straight-down', claim: 'ขุดลงตรง', at: tick }; ir.verdict = { objId: id, result: 'right', by: 'auto', after_s: 0 }; }
    else if (r() < 0.002) { const id = `o-${tick}`; ir.objection = { id, rule: 'night-exposed', claim: 'ยืนกลางแจ้งกลางคืน', at: tick }; ir.verdict = { objId: id, result: 'wrong', by: 'auto', after_s: 0, basis: 'กลางวัน' }; }
    irows.push(ir);
  }
  fs.writeFileSync(path.join(dir, `senior_${who}.jsonl`), rows.map((x) => JSON.stringify(x)).join('\n') + '\n');
  fs.writeFileSync(path.join(dir, `intern_${INTERNS[k]}.jsonl`), irows.map((x) => JSON.stringify(x)).join('\n') + '\n');
}
console.log(`สร้าง log สังเคราะห์ ${SENIORS.length} รุ่นพี่ × ${MIN} นาที → ${dir}`);
