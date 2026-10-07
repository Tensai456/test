// kb.mjs — ดึงความรู้จาก kb/ แบบเจาะจง (ไม่ต้องโหลดทั้งคลัง)
// findKb('creeper') → [{path,title,...}] · readKb('mobs/creeper.md') → ข้อความ · blockInfo('iron_ore') → ข้อมูลบล็อก
import fs from 'node:fs';
import path from 'node:path';

const ROOT = path.resolve(path.dirname(new URL(import.meta.url).pathname), '..');
const KB = path.join(ROOT, 'kb');
let _index = null;
const index = () => (_index ??= JSON.parse(fs.readFileSync(path.join(KB, 'index.json'), 'utf8')));

// ค้นด้วยคำ (อังกฤษหรือไทย) ใน path/title/keywords · group = จำกัดหมวด เช่น 'mobs'
export function findKb(query, { group, limit = 5 } = {}) {
  const terms = query.toLowerCase().split(/\s+/).filter(Boolean);
  return index()
    .filter((i) => !group || i.group === group)
    .map((i) => {
      const hay = `${i.path} ${i.title} ${i.keywords.join(' ')}`.toLowerCase();
      const base = i.path.toLowerCase().split('/').pop().replace(/\.md$/, '');
      const score = terms.reduce((s, t) => s + (base === t ? 2 : 0) + (i.path.toLowerCase().includes(t) ? 3 : 0) + (hay.includes(t) ? 1 : 0), 0);   // ชื่อไฟล์ตรงเป๊ะ = ไฟล์หลักของหัวข้อ
      return { ...i, score };
    })
    .filter((i) => i.score > 0)
    .sort((a, b) => b.score - a.score || a.lines - b.lines)
    .slice(0, limit);
}

export function readKb(rel) {
  const p = path.join(KB, rel);
  if (!p.startsWith(KB)) throw new Error('path นอก kb/');
  return fs.readFileSync(p, 'utf8');
}

// ข้อมูลบล็อกเดียวจาก JSON ที่แยกกลุ่มไว้ (โหลดแค่กลุ่มเดียว)
const _groups = {};
const _bidx = {};
export function blockInfo(name, ver = '26.1') {
  _bidx[ver] ??= JSON.parse(fs.readFileSync(path.join(ROOT, 'data', `catalog_${ver}`, 'blocks', 'index.json'), 'utf8'));
  const idx = _bidx[ver][name];
  if (!idx) return null;
  _groups[idx.group] ??= JSON.parse(fs.readFileSync(path.join(ROOT, 'data', `catalog_${ver}`, idx.json), 'utf8'));
  return _groups[idx.group].find((b) => b.name === name) ?? null;
}
