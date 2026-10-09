// gen_manifest.mjs — รายการไฟล์ทั้ง repo + ขนาด + คำอธิบาย 1 บรรทัด (บรรทัดแรกของโค้ด / หัวเรื่องแรกของ md) → MANIFEST.md
// node scripts/gen_manifest.mjs
import fs from 'node:fs';
import path from 'node:path';

const ROOT = path.resolve(path.dirname(new URL(import.meta.url).pathname), '..');
const SKIP = new Set(['node_modules', '.git']);
const files = [];
(function walk(d) {
  for (const e of fs.readdirSync(d, { withFileTypes: true })) {
    if (SKIP.has(e.name)) continue;
    const p = path.join(d, e.name);
    if (e.isDirectory()) walk(p); else files.push(p);
  }
})(ROOT);
const rel = (p) => path.relative(ROOT, p).split(path.sep).join('/');
function describe(p) {
  const ext = path.extname(p);
  if (!['.md', '.mjs', '.cjs', '.js', '.sh', '.html', '.json'].includes(ext)) return '';
  if (ext === '.json') { try { const j = JSON.parse(fs.readFileSync(p, 'utf8')); return Array.isArray(j) ? `JSON array ${j.length} รายการ` : `JSON ${Object.keys(j).length} คีย์`; } catch { return 'JSON'; } }
  const head = fs.readFileSync(p, 'utf8').split('\n').slice(0, 6);
  if (ext === '.md') return (head.find((l) => l.startsWith('#')) ?? '').replace(/^#+\s*/, '').slice(0, 120);
  if (ext === '.html') return ((head.join(' ').match(/<title>(.*?)<\/title>/) ?? [])[1] ?? 'HTML').slice(0, 120);
  return (head.find((l) => /^(\/\/|#)\s*\S/.test(l) && !l.startsWith('#!')) ?? '').replace(/^(\/\/|#)\s*/, '').slice(0, 140);
}
const groups = {};
for (const f of files.sort()) { const r = rel(f); const top = r.includes('/') ? r.split('/').slice(0, r.startsWith('kb/') || r.startsWith('docs/') ? 2 : 1).join('/') : '(ราก)'; (groups[top] ??= []).push(f); }
const kb = (n) => (n / 1024).toFixed(1);
const total = files.reduce((a, f) => a + fs.statSync(f).size, 0);
const md = ['# MANIFEST — ไฟล์ทั้งหมดใน mc-lab', '', `> สร้างโดย \`node scripts/gen_manifest.mjs\` · ${files.length} ไฟล์ · ${(total / 1048576).toFixed(2)} MB · คำอธิบาย = บรรทัดแรกของไฟล์`, '',
  '## สรุปตามโฟลเดอร์', '', '| โฟลเดอร์ | ไฟล์ | KB |', '|---|---|---|',
  ...Object.entries(groups).map(([g, fs2]) => `| ${g} | ${fs2.length} | ${kb(fs2.reduce((a, f) => a + fs.statSync(f).size, 0))} |`), ''];
for (const [g, fs2] of Object.entries(groups)) {
  md.push(`## ${g}`, '', '| ไฟล์ | KB | คืออะไร |', '|---|---|---|');
  for (const f of fs2) md.push(`| ${rel(f)} | ${kb(fs.statSync(f).size)} | ${describe(f).replace(/\|/g, '/')} |`);
  md.push('');
}
fs.writeFileSync(path.join(ROOT, 'MANIFEST.md'), md.join('\n'));
console.log(`MANIFEST.md: ${files.length} ไฟล์ · ${(total / 1048576).toFixed(2)} MB`);
