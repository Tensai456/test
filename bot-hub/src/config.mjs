// config.mjs — โหลด .env (ไม่ใช้ dotenv) + โปรไฟล์บอต config/bots.json (ไม่มี → ก๊อปจาก bots.example.json)
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

export const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
export const ROLES = ['senior', 'intern', 'spectator', 'worker'];
export const BRAIN_PARTS = ['old', 'rules', 'fly-small', 'fly-full'];
export const BRAIN_ALIASES = { smart: 'fly-small+rules' };   // smart = สมองเล็ก + กฎ

export function loadEnv(file = path.join(ROOT, '.env')) {
  if (!fs.existsSync(file)) return;
  for (const line of fs.readFileSync(file, 'utf8').split(/\r?\n/)) {
    const m = /^\s*([A-Z0-9_]+)\s*=\s*(.*?)\s*$/.exec(line);
    if (!m || line.trimStart().startsWith('#')) continue;
    let v = m[2].replace(/\s+#.*$/, '');                 // ตัดคอมเมนต์ท้ายบรรทัด
    if (/^".*"$/.test(v)) v = v.slice(1, -1);
    if (process.env[m[1]] === undefined) process.env[m[1]] = v;
  }
}

const CFG = path.join(ROOT, 'config', 'bots.json');
const EXAMPLE = path.join(ROOT, 'config', 'bots.example.json');

export function loadBots() {
  const f = fs.existsSync(CFG) ? CFG : EXAMPLE;
  const j = JSON.parse(fs.readFileSync(f, 'utf8'));
  return { bots: (j.bots ?? []).map(normalize), discordMap: j.discordMap ?? {} };
}
export function saveBots(cfg) {
  fs.writeFileSync(CFG, JSON.stringify({ bots: cfg.bots, discordMap: cfg.discordMap }, null, 2));
}

// ตรวจ+เติมค่าเริ่ม · โยน error ถ้าค่าผิด (หน้าเว็บแสดงข้อความนี้)
export function normalize(b) {
  const out = { goal: 'iron_kit', aliases: [], skin: '', autoStart: false, watching: null, ...b };
  if (!out.id) out.id = String(out.login ?? '').toLowerCase();
  if (!out.id || !out.login) throw new Error('ต้องมี login');
  if (!/^[A-Za-z0-9_]{3,16}$/.test(out.login)) throw new Error(`login "${out.login}" ต้องเป็น A-Z 0-9 _ ยาว 3–16`);
  out.display ||= out.login;
  if (!ROLES.includes(out.role)) throw new Error(`role ต้องเป็น ${ROLES.join('/')}`);
  parseBrain(out.brain);
  return out;
}

// "smart" → ['fly-small','rules'] · "fly-small+old" → ['fly-small','old']
export function parseBrain(spec) {
  const parts = String(BRAIN_ALIASES[spec] ?? spec ?? '').split('+').map((x) => x.trim()).filter(Boolean);
  if (!parts.length) throw new Error('brain ว่าง');
  for (const p of parts) if (!BRAIN_PARTS.includes(p)) throw new Error(`สมอง "${p}" ไม่รู้จัก (มี ${BRAIN_PARTS.join(', ')}, smart)`);
  return parts;
}
