// fuzz_chain.mjs — ดัน chain/chainDeep ทีละ 200k ขนานทุกคอร์ (แต่ละโปรเซสคนละรอบ) จนครบเป้า · หยุดทันทีที่เจอช่องโหว่
// node scripts/fuzz_chain.mjs <event> <จากรอบ> <ถึงรอบ> [N=200000] → docs/fuzz_out/<event>_r<round>.md (เก็บเฉพาะรอบที่เจอ) + docs/FUZZ_LOG.md
import { spawn } from 'node:child_process';
import fs from 'node:fs';
import os from 'node:os';
import path from 'node:path';

const ROOT = path.resolve(path.dirname(new URL(import.meta.url).pathname.replace(/^\/([A-Za-z]:)/, '$1')), '..');
const [ev = 'chain', a = '1', b = a, n = '200000'] = process.argv.slice(2);
const from = Number(a), to = Number(b), N = Number(n), W = os.cpus().length;
const rounds = Array.from({ length: to - from + 1 }, (_, i) => from + i);
let done = 0, holes = [];
const one = (round) => new Promise((resolve) => {
  const out = `docs/fuzz_out/${ev}_r${round}.md`;
  let txt = '';
  const p = spawn(process.execPath, ['scripts/deep_fuzz.mjs', String(N), `--round=${round}`, `--out=${out}`, ev], { cwd: ROOT });
  p.stdout.on('data', (d) => (txt += d)); p.stderr.on('data', (d) => (txt += d));
  p.on('close', () => { const bad = !/ผิด 0 /.test(txt); if (bad) holes.push(round); else fs.rmSync(path.join(ROOT, out), { force: true }); resolve(); });
});
const t0 = Date.now();
while (rounds.length && !holes.length) {
  await Promise.all(rounds.splice(0, W).map(one));
  done = to - from + 1 - rounds.length;
  console.log(`${ev}: ${done} รอบ × ${N.toLocaleString()} = ${(done * N).toLocaleString()} · ${((Date.now() - t0) / 1000).toFixed(0)}s${holes.length ? ` · ❌ ช่องโหว่ รอบ ${holes.join(',')}` : ''}`);
}
fs.appendFileSync(path.join(ROOT, 'docs', 'FUZZ_LOG.md'), `\n- ${new Date().toISOString().slice(0, 16)} · ${ev} รอบ ${from}–${from + done - 1} × ${N.toLocaleString()} = ${(done * N).toLocaleString()} · ${holes.length ? `❌ รอบ ${holes.join(',')} (docs/fuzz_out/${ev}_r*.md)` : '✅ 0 ช่องโหว่'}\n`);
