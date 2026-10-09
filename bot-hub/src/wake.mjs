// wake.mjs — หาว่าประโยค (จาก STT/แชต) เรียกบอตตัวไหน + สั่งอะไร · ทนการสะกดเพี้ยน (จาร์วิส/จอวิส/จาวิส/jarvis)
//
// วิธี: ทำให้เป็นรูปกลาง (normalize) แล้ววัดระยะ Levenshtein แบบหน้าต่างเลื่อน · ผ่านถ้า ระยะ/ความยาวชื่อ ≤ 0.34
//   · ภาษาไทย: ตัดวรรณยุกต์/ไม้ไต่คู้ · ตัวที่มีการันต์ (ร์) ตัดทิ้งทั้งตัว · สระเสียงใกล้กัน (า/อ, ิ/ี, ุ/ู, ั/ะ) รวมเป็นตัวเดียว · ร/ล รวม
//   · บอตออนไลน์ตัวเดียว → เรียกชื่ออะไรก็ได้ (ชื่อบอตตัวไหนก็ได้ หรือคำเรียก เช่น "บอท") ก็ไปหาตัวนั้น (กติกา jing)
const TONE = /[่-๋็]/g;                 // ่ ้ ๊ ๋ ็
const KARAN = /.์/g;                               // ตัวที่มี ์ ตามหลัง = ไม่ออกเสียง
const FOLD = [[/[อา]/g, 'า'], [/[ีิ]/g, 'ิ'], [/[ูุ]/g, 'ุ'], [/[ะั]/g, 'ั'], [/ล/g, 'ร'], [/[ซศษส]/g, 'ส'], [/[ทธฑฒถฐต]/g, 'ท'], [/[คฆข]/g, 'ค'], [/[พภผ]/g, 'พ'], [/[ณน]/g, 'น']];
export const CALL_WORDS = ['บอท', 'บอต', 'bot', 'เฮ้ย', 'นี่', 'hey'];

export function norm(t) {
  let s = String(t).toLowerCase().replace(KARAN, '').replace(TONE, '').replace(/[^\p{L}\p{N}]+/gu, '');
  for (const [re, to] of FOLD) s = s.replace(re, to);
  return s;
}

export function lev(a, b) {
  const m = a.length, n = b.length;
  let prev = Array.from({ length: n + 1 }, (_, j) => j);
  for (let i = 1; i <= m; i++) {
    const cur = [i];
    for (let j = 1; j <= n; j++) cur[j] = Math.min(prev[j] + 1, cur[j - 1] + 1, prev[j - 1] + (a[i - 1] === b[j - 1] ? 0 : 1));
    prev = cur;
  }
  return prev[n];
}

// ระยะดีสุดของ name ในข้อความ (หน้าต่างยาว name±1) → {score 0..1 (ต่ำ=ใกล้), at: ตำแหน่งท้ายชื่อในข้อความ normalize}
export function findName(textN, nameN) {
  if (!nameN) return { score: 1, at: -1 };
  let best = { score: 1, at: -1 };
  for (let L = Math.max(1, nameN.length - 1); L <= nameN.length + 1; L++) {
    for (let i = 0; i + L <= textN.length; i++) {
      const sc = lev(textN.slice(i, i + L), nameN) / nameN.length;
      if (sc < best.score) best = { score: sc, at: i + L };
    }
  }
  return best;
}

// คำสั่ง (คำไทย/อังกฤษที่ STT ให้มาบ่อย) → id · ใส่ใน COMMANDS เพิ่มได้
export const COMMANDS = [
  { id: 'come', words: ['มานี่', 'มาหา', 'มาตรงนี้', 'มา', 'come'] },
  { id: 'follow', words: ['ตาม', 'ตามมา', 'follow'] },
  { id: 'stop', words: ['หยุด', 'พอ', 'stop'] },
  { id: 'status', words: ['สถานะ', 'เลือด', 'เป็นไง', 'status'] },
  { id: 'work', words: ['ไปทำงาน', 'ทำงาน', 'ไปขุด', 'work'] },
  { id: 'home', words: ['กลับบ้าน', 'home'] },
];
export function parseCommand(rest) {
  const r = norm(rest);
  // คำยาวก่อน ("ตามมา" ต้องไม่ถูกจับเป็น "มา")
  const all = COMMANDS.flatMap((c) => c.words.map((w) => [norm(w), c.id])).sort((a, b) => b[0].length - a[0].length);
  for (const [w, id] of all) if (r.includes(w)) return id;
  return rest.trim() ? 'chat' : 'call';
}

// bots = [{id, display, login, aliases, online}] → { bot, score, command, rest } | null
export function route(text, bots, { threshold = 0.34 } = {}) {
  const tn = norm(text);
  if (!tn) return null;
  let best = null;
  for (const b of bots) {
    for (const name of new Set([b.display, b.login, b.id, ...(b.aliases ?? [])].filter(Boolean))) {
      const nn = norm(name);
      if (nn.length < 2) continue;
      const f = findName(tn, nn);
      if (!best || f.score < best.score) best = { bot: b, score: f.score, name };
    }
  }
  const online = bots.filter((b) => b.online);
  const rest = stripName(text, best?.name);
  if (best && best.score <= threshold) {
    // ชื่อตรงตัวที่ออฟไลน์ แต่ออนไลน์อยู่ตัวเดียว → ส่งให้ตัวนั้น
    const bot = !best.bot.online && online.length === 1 ? online[0] : best.bot;
    return { bot, score: +best.score.toFixed(2), matched: best.name, command: parseCommand(rest), rest };
  }
  if (online.length === 1 && (CALL_WORDS.some((w) => tn.startsWith(norm(w))) || (best && best.score <= 0.5))) {
    return { bot: online[0], score: best ? +best.score.toFixed(2) : 1, matched: null, command: parseCommand(text), rest: text };
  }
  return null;
}
// ตัดคำที่ใกล้ชื่อออกจากหัวประโยค (ประมาณ: ตัดคำแรก ถ้าคำแรกใกล้ชื่อ)
function stripName(text, name) {
  if (!name) return text;
  const words = String(text).trim().split(/\s+/);
  const nn = norm(name);
  if (words.length > 1 && lev(norm(words[0]), nn) / nn.length <= 0.5) return words.slice(1).join(' ');
  // ไม่มีเว้นวรรค (ไทยติดกัน) → ตัดตามความยาวที่จับได้
  const tn = norm(text), f = findName(tn, nn);
  return f.at > 0 && f.at <= nn.length + 2 ? String(text).slice(Math.min(text.length, name.length)).trim() : text;
}
