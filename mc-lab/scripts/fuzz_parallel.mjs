// fuzz_parallel.mjs — รัน deep_fuzz ขนานเต็มทุกคอร์ (Windows/Mac/Linux ใช้ได้ ไม่ต้องใช้ bash)
// node scripts/fuzz_parallel.mjs <จากรอบ> <ถึงรอบ> [N=200000] [--workers=K]
//  · ตรวจจำนวนคอร์อัตโนมัติ (os.cpus) · คอร์ ≥ จำนวนเหตุการณ์ = 1 เหตุการณ์ต่อ 1 โปรเซส
//  · หยุดทันทีที่รอบไหนเจอช่องโหว่ · ผล: docs/fuzz_out/w<i>.md + ต่อท้าย docs/FUZZ_LOG.md
import { execFileSync, spawn } from 'node:child_process';
import fs from 'node:fs';
import os from 'node:os';
import path from 'node:path';

const ROOT = path.resolve(path.dirname(new URL(import.meta.url).pathname.replace(/^\/([A-Za-z]:)/, '$1')), '..');
const FUZZ = path.join(ROOT, 'scripts', 'deep_fuzz.mjs');
const args = process.argv.slice(2).filter((a) => !a.startsWith('--'));
const from = Number(args[0] ?? 1), to = Number(args[1] ?? from), N = Number(args[2] ?? 200000);
const EVENTS = execFileSync(process.execPath, [FUZZ, '1', '--list'], { encoding: 'utf8' }).trim().split(/\s+/);
const flagW = process.argv.find((a) => a.startsWith('--workers='));
const W = Math.max(1, Math.min(EVENTS.length, flagW ? Number(flagW.split('=')[1]) : os.cpus().length));
// กระจายแบบวนรอบ (round-robin)
const groups = Array.from({ length: W }, (_, i) => EVENTS.filter((_, j) => j % W === i));
fs.mkdirSync(path.join(ROOT, 'docs', 'fuzz_out'), { recursive: true });
console.log(`คอร์ ${os.cpus().length} · ใช้ ${W} โปรเซส · ${EVENTS.length} เหตุการณ์ · รอบ ${from}–${to} × ${N.toLocaleString()}`);

function run(i, round) {
  return new Promise((resolve) => {
    let out = '';
    const p = spawn(process.execPath, [FUZZ, String(N), `--round=${round}`, `--out=docs/fuzz_out/w${i}.md`, ...groups[i]], { cwd: ROOT });
    p.stdout.on('data', (d) => (out += d));
    p.stderr.on('data', (d) => (out += d));
    p.on('close', () => resolve(out));
  });
}

for (let r = from; r <= to; r++) {
  const t0 = Date.now();
  const outs = await Promise.all(groups.map((_, i) => run(i, r)));
  const lines = outs.join('').split('\n').filter((l) => l.includes('ผิด'));
  const bad = lines.reduce((a, l) => a + Number((l.split('ผิด ')[1] ?? '0').split(' ')[0].replace(/,/g, '')), 0);
  fs.appendFileSync(path.join(ROOT, 'docs', 'FUZZ_LOG.md'), `| ${r} (ขนาน ${W}) | ${N} × ${EVENTS.length} เหตุการณ์ | ${bad} |\n`);
  console.log(`round ${r}: holes=${bad} · ${((Date.now() - t0) / 1000).toFixed(0)}s`);
  if (bad > 0) { console.log(lines.filter((l) => !l.includes('ผิด 0 ')).join('\n')); process.exit(1); }
}
console.log('DONE');
