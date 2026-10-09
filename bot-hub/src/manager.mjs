// manager.mjs — คุมบอตทุกตัว: เปิด/ปิด (fork worker) · เปลี่ยนหน้าที่/สมอง/เป้า สด ๆ · สลับรุ่นพี่↔รุ่นน้อง · ส่งคำสั่ง
// emit('update', {id, status}) ทุกครั้งที่สถานะเปลี่ยน (server ส่งต่อทาง SSE)
import { fork } from 'node:child_process';
import { EventEmitter } from 'node:events';
import path from 'node:path';
import { ROOT, loadBots, saveBots, normalize } from './config.mjs';

const LIVE = ['role', 'brain', 'goal', 'watching', 'jobRole', 'home'];      // เปลี่ยนได้ไม่ต้องรีสตาร์ต
const RESTART = ['login'];                                                   // เปลี่ยนแล้วต้องเข้าเซิร์ฟใหม่ (= ผู้เล่นใหม่บน offline-mode)

export class BotManager extends EventEmitter {
  constructor({ sim = process.env.HUB_SIM === '1', persist = true } = {}) {
    super();
    this.sim = sim; this.persist = persist;
    this.cfg = loadBots();
    this.procs = new Map();      // id → child
    this.status = new Map();     // id → สถานะล่าสุด
    this.feed = new Map();       // id → เหตุการณ์ล่าสุด 30 อัน
  }
  list() { return this.cfg.bots.map((b) => ({ ...b, status: this.status.get(b.id) ?? { online: false }, running: this.procs.has(b.id), feed: this.feed.get(b.id) ?? [] })); }
  get(id) { const b = this.cfg.bots.find((x) => x.id === id); if (!b) throw new Error(`ไม่มีบอต ${id}`); return b; }
  loginOf(id) { return id ? this.cfg.bots.find((x) => x.id === id)?.login ?? id : null; }
  save() { if (this.persist) saveBots(this.cfg); }

  start(id) {
    const b = this.get(id);
    if (this.procs.has(id)) return;
    const env = { ...process.env, HUB_PROFILE: JSON.stringify({ ...b, watchingLogin: this.loginOf(b.watching) }), HUB_SIM: this.sim ? '1' : '0' };
    const child = fork(path.join(ROOT, 'src', 'worker.mjs'), [], { env, stdio: ['ignore', 'pipe', 'pipe', 'ipc'] });
    this.procs.set(id, child);
    this.push(id, { kind: 'event', text: this.sim ? 'เริ่ม (จำลอง)' : 'กำลังเข้าเซิร์ฟ' });
    child.on('message', (m) => this.onMsg(id, m));
    child.stderr.on('data', (d) => this.push(id, { kind: 'error', text: String(d).trim().slice(0, 300) }));
    child.on('exit', (code) => { this.procs.delete(id); this.setStatus(id, { ...(this.status.get(id) ?? {}), online: false }); this.push(id, { kind: 'event', text: `ปิดแล้ว (code ${code})` }); });
  }
  stop(id) { const c = this.procs.get(id); if (!c) return; c.send({ type: 'quit' }); setTimeout(() => this.procs.get(id) === c && c.kill(), 5000); }

  onMsg(id, m) {
    if (m.type === 'status') this.setStatus(id, { ...(this.status.get(id) ?? {}), ...m });
    else if (m.type === 'decision') { this.setStatus(id, { ...(this.status.get(id) ?? {}), thought: m.thought, source: m.source }); this.push(id, { kind: 'think', text: m.thought }); }
    else this.push(id, { kind: m.type, text: m.text });
  }
  setStatus(id, s) { delete s.id; delete s.type; this.status.set(id, s); this.emit('update', { id, status: s }); }
  push(id, e) { const f = this.feed.get(id) ?? []; f.unshift({ at: Date.now(), ...e }); this.feed.set(id, f.slice(0, 30)); this.emit('feed', { id, ...e }); }

  add(b) { const n = normalize(b); if (this.cfg.bots.some((x) => x.id === n.id)) throw new Error(`id ${n.id} ซ้ำ`); this.cfg.bots.push(n); this.save(); return n; }
  remove(id) { this.stop(id); this.cfg.bots = this.cfg.bots.filter((x) => x.id !== id); this.save(); }

  // คืน { profile, restartNeeded, warn }
  update(id, patch) {
    const b = this.get(id);
    const next = normalize({ ...b, ...patch, id });
    const changed = Object.keys(patch).filter((k) => JSON.stringify(b[k]) !== JSON.stringify(next[k]));
    Object.assign(b, next); this.save();
    const c = this.procs.get(id);
    const live = changed.filter((k) => LIVE.includes(k));
    if (c && live.length) c.send({ type: 'set', patch: Object.fromEntries(live.map((k) => [k, k === 'watching' ? b[k] : b[k]]).concat(live.includes('watching') ? [['watchingLogin', this.loginOf(b.watching)]] : [])) });
    if (c && changed.includes('skin')) c.send({ type: 'skin', skin: b.skin });
    const restartNeeded = !!c && changed.some((k) => RESTART.includes(k));
    const warn = changed.includes('login') ? 'เปลี่ยน login = ผู้เล่นคนใหม่บนเซิร์ฟ (ของ/ตำแหน่งเดิมไม่ตามมา) · ถ้าแค่อยากเปลี่ยนชื่อเรียก ให้แก้ display' : null;
    this.emit('update', { id, status: this.status.get(id) ?? { online: false } });
    return { profile: b, restartNeeded, warn };
  }

  // สลับหน้าที่ 2 ตัว (รุ่นพี่ ↔ รุ่นน้อง): role + watching แลกกัน · ผู้ฝึกงานที่ดูตัวเก่าจะย้ายไปดูตัวใหม่
  swap(a, b) {
    const A = this.get(a), B = this.get(b);
    const pa = { role: B.role, watching: B.watching === a ? b : B.watching }, pb = { role: A.role, watching: A.watching === b ? a : A.watching };
    this.update(a, pa); this.update(b, pb);
    for (const x of this.cfg.bots) if (x.id !== a && x.id !== b && (x.watching === a || x.watching === b)) this.update(x.id, { watching: x.watching === a ? b : a });
  }

  command(id, command, extra = {}) { const c = this.procs.get(id); if (!c) throw new Error(`${id} ไม่ได้เปิดอยู่`); c.send({ type: 'command', command, ...extra }); this.push(id, { kind: 'event', text: `ส่งคำสั่ง ${command}` }); }
  stopAll() { for (const id of this.procs.keys()) this.stop(id); }
}
