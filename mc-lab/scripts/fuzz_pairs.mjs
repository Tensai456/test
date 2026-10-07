// fuzz_pairs.mjs — chain แบบจับคู่ครบทุกคู่ (ไม่สุ่มเลือก) · ขนานทุกคอร์
// node scripts/fuzz_pairs.mjs [N=200000] [--round=R] [--workers=K] → docs/fuzz_out/pairs_w<i>.md + docs/PAIRS_FUZZ.md
// เหตุการณ์ที่รีเซ็ตกระเป๋า (weapons/weaponTactics/mlg) ไม่จับคู่กันเอง และอยู่ท้ายคู่เสมอ · ข้าม chain (สุ่มซ้อนอยู่แล้ว)
import { execFileSync, spawn } from 'node:child_process';
import fs from 'node:fs';
import os from 'node:os';
import path from 'node:path';

const ROOT = path.resolve(path.dirname(new URL(import.meta.url).pathname.replace(/^\/([A-Za-z]:)/, '$1')), '..');
const FUZZ = path.join(ROOT, 'scripts', 'deep_fuzz.mjs');
const N = Number(process.argv.slice(2).find((a) => !a.startsWith('--')) ?? 200000);
const ROUND = Number((process.argv.find((a) => a.startsWith('--round=')) ?? '--round=1').split('=')[1]);
const PURE = ['weapons', 'weaponTactics', 'mlg'];
const all = execFileSync(process.execPath, [FUZZ, '1', '--list'], { encoding: 'utf8' }).trim().split(/\s+/).filter((e) => e !== 'chain');
const base = all.filter((e) => !PURE.includes(e));
const pairs = [];
for (let i = 0; i < base.length; i++) for (let j = i + 1; j < base.length; j++) pairs.push(`${base[i]}+${base[j]}`);
for (const b of base) for (const p of PURE) pairs.push(`${b}+${p}`);
const flagW = process.argv.find((a) => a.startsWith('--workers='));
const W = Math.max(1, flagW ? Number(flagW.split('=')[1]) : os.cpus().length);
const groups = Array.from({ length: W }, (_, i) => pairs.filter((_, j) => j % W === i));
console.log(`คู่ ${pairs.length} · ${W} โปรเซส · คู่ละ ${N.toLocaleString()} · รวม ${(pairs.length * N).toLocaleString()} สถานะ`);
const t0 = Date.now();
const outs = await Promise.all(groups.map((g, i) => new Promise((resolve) => {
  let out = '';
  const p = spawn(process.execPath, [FUZZ, String(N), `--round=${ROUND}`, `--out=docs/fuzz_out/pairs_w${i}.md`, ...g], { cwd: ROOT });
  p.stdout.on('data', (d) => (out += d)); p.stderr.on('data', (d) => (out += d));
  p.on('close', () => resolve(out));
})));
const lines = outs.join('\n').split('\n').filter((l) => l.includes('ผิด'));
const bad = lines.filter((l) => !/ผิด 0 /.test(l));
const md = [`# PAIRS_FUZZ — จับคู่ครบ ${pairs.length} คู่ × ${N.toLocaleString()} (รอบ ${ROUND})`, '',
  `> \`node scripts/fuzz_pairs.mjs\` · ${((Date.now() - t0) / 60000).toFixed(1)} นาที · ยืนยันระดับจำลอง · รายละเอียดช่องโหว่: docs/fuzz_out/pairs_w*.md`, '',
  bad.length ? `## ❌ คู่ที่เจอช่องโหว่ ${bad.length} คู่` : '## ✅ ไม่พบช่องโหว่ทุกคู่', '', ...bad.map((l) => `- ${l.trim()}`), ''];
fs.writeFileSync(path.join(ROOT, 'docs', 'PAIRS_FUZZ.md'), md.join('\n'));
console.log(md.slice(4).join('\n'));
