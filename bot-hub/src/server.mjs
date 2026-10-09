// server.mjs — หน้าเว็บ + API (node:http ล้วน ไม่มี express) · เปิด http://127.0.0.1:8787
//   GET  /api/bots                     รายชื่อ + สถานะ
//   GET  /api/events                   SSE สด (update / feed)
//   POST /api/bots                     เพิ่มบอต {login, display, role, brain, ...}
//   PATCH /api/bots/:id                แก้ (role/brain/goal/watching = สด · login = ต้องรีสตาร์ต)
//   DELETE /api/bots/:id
//   POST /api/bots/:id/start|stop
//   POST /api/bots/:id/command         {command, player?}
//   POST /api/swap                     {a, b}  สลับหน้าที่
//   POST /api/say                      {text, player?}  ลองท่อ "เรียกชื่อ" ด้วยข้อความ (เหมือนเสียงจาก Discord)
import http from 'node:http';
import fs from 'node:fs';
import path from 'node:path';
import { ROOT, loadEnv, ROLES, BRAIN_PARTS } from './config.mjs';
import { BotManager } from './manager.mjs';
import { route } from './wake.mjs';

loadEnv();
const HOST = process.env.HUB_HOST || '127.0.0.1', PORT = +(process.env.HUB_PORT || 8787), TOKEN = process.env.HUB_TOKEN || '';
if (HOST !== '127.0.0.1' && HOST !== 'localhost' && !TOKEN) { console.error('เปิดให้ LAN เข้า (HUB_HOST) ต้องตั้ง HUB_TOKEN ด้วย'); process.exit(1); }

export const hub = new BotManager();
export function sayToBots(text, player) {
  const bots = hub.list().map((b) => ({ ...b, online: !!b.status?.online }));
  const r = route(text, bots);
  if (!r) return { matched: false };
  const cmd = r.command === 'call' ? 'come' : r.command;
  if (hub.procs.has(r.bot.id) && cmd !== 'chat') hub.command(r.bot.id, cmd, { player });
  return { matched: true, bot: r.bot.id, command: cmd, score: r.score, heard: text };
}

const clients = new Set();
const sse = (ev, data) => { const s = `event: ${ev}\ndata: ${JSON.stringify(data)}\n\n`; for (const c of clients) c.write(s); };
hub.on('update', (d) => sse('update', d));
hub.on('feed', (d) => sse('feed', d));

const body = (req) => new Promise((ok, no) => { let s = ''; req.on('data', (c) => { s += c; if (s.length > 1e5) no(new Error('ใหญ่เกิน')); }); req.on('end', () => { try { ok(s ? JSON.parse(s) : {}); } catch (e) { no(e); } }); });
const send = (res, code, obj) => { res.writeHead(code, { 'content-type': 'application/json; charset=utf-8' }); res.end(JSON.stringify(obj)); };

const server = http.createServer(async (req, res) => {
  const url = new URL(req.url, 'http://x');
  try {
    if (url.pathname === '/' || url.pathname === '/index.html') { res.writeHead(200, { 'content-type': 'text/html; charset=utf-8' }); return res.end(fs.readFileSync(path.join(ROOT, 'web', 'index.html'))); }
    if (TOKEN && req.headers['x-hub-token'] !== TOKEN && url.searchParams.get('token') !== TOKEN) return send(res, 401, { error: 'ต้องมี token' });
    if (url.pathname === '/api/meta') return send(res, 200, { roles: ROLES, brains: [...BRAIN_PARTS, 'smart'], sim: hub.sim });
    if (url.pathname === '/api/events') {
      res.writeHead(200, { 'content-type': 'text/event-stream', 'cache-control': 'no-cache', connection: 'keep-alive' });
      res.write(`event: hello\ndata: {}\n\n`); clients.add(res); req.on('close', () => clients.delete(res)); return;
    }
    if (url.pathname === '/api/bots' && req.method === 'GET') return send(res, 200, hub.list());
    if (url.pathname === '/api/bots' && req.method === 'POST') return send(res, 200, hub.add(await body(req)));
    if (url.pathname === '/api/swap' && req.method === 'POST') { const { a, b } = await body(req); hub.swap(a, b); return send(res, 200, { ok: true }); }
    if (url.pathname === '/api/say' && req.method === 'POST') { const { text, player } = await body(req); return send(res, 200, sayToBots(text, player)); }
    const m = /^\/api\/bots\/([\w-]+)(?:\/(start|stop|command))?$/.exec(url.pathname);
    if (m) {
      const [, id, act] = m;
      if (act === 'start') { hub.start(id); return send(res, 200, { ok: true }); }
      if (act === 'stop') { hub.stop(id); return send(res, 200, { ok: true }); }
      if (act === 'command') { const { command, player } = await body(req); hub.command(id, command, { player }); return send(res, 200, { ok: true }); }
      if (req.method === 'PATCH') return send(res, 200, hub.update(id, await body(req)));
      if (req.method === 'DELETE') { hub.remove(id); return send(res, 200, { ok: true }); }
    }
    send(res, 404, { error: 'ไม่พบ' });
  } catch (e) { send(res, 400, { error: e.message }); }
});

if (import.meta.url === `file://${process.argv[1]}`) {
  server.listen(PORT, HOST, () => console.log(`bot-hub ${hub.sim ? '(จำลอง) ' : ''}→ http://${HOST}:${PORT}`));
  for (const b of hub.cfg.bots) if (b.autoStart) hub.start(b.id);
  if (process.env.DISCORD_TOKEN) import('./discord.mjs').then((d) => d.startDiscord({ hub, sayToBots })).catch((e) => console.error('Discord ไม่เริ่ม:', e.message));
  const bye = () => { hub.stopAll(); setTimeout(() => process.exit(0), 1500); };
  process.on('SIGINT', bye); process.on('SIGTERM', bye);
}
export { server };
