// discord.mjs — บอต Discord: (1) พิมพ์ในแชต "จาร์วิส มานี่" (2) ฟังเสียงในห้องเสียง → STT → จับชื่อ → สั่งบอตในเกม
// [ยังไม่ได้เทส: ต้องมี DISCORD_TOKEN + ติดตั้ง optionalDependencies + ตัว STT บนเครื่อง jing]
//   ในแชต:  !join = เข้าห้องเสียงที่เราอยู่ · !leave = ออก · ข้อความอื่น = ลองจับชื่อ
//   เสียง:  แต่ละคนพูดจบ (เงียบ 0.8 วิ) → ไฟล์ wav → STT_CMD → ข้อความ → sayToBots()
//   ผูก Discord ↔ ชื่อในเกม: config/bots.json → discordMap { "<discord user id>": "<ชื่อในเกม>" }
import fs from 'node:fs';
import path from 'node:path';
import { execFile } from 'node:child_process';
import { ROOT } from './config.mjs';

export async function startDiscord({ hub, sayToBots }) {
  const { Client, GatewayIntentBits, Events } = await import('discord.js');
  const voice = await import('@discordjs/voice').catch(() => null);
  const prism = (await import('prism-media').catch(() => null))?.default;
  const client = new Client({ intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildMessages, GatewayIntentBits.MessageContent, GatewayIntentBits.GuildVoiceStates] });
  const mcName = (uid) => hub.cfg.discordMap?.[uid] ?? null;
  const tmp = path.join(ROOT, 'tmp'); fs.mkdirSync(tmp, { recursive: true });

  client.on(Events.MessageCreate, async (msg) => {
    if (msg.author.bot || !msg.guild) return;
    if (msg.content === '!join') {
      const ch = msg.member?.voice?.channel;
      if (!ch) return msg.reply('เข้าห้องเสียงก่อน');
      if (!voice || !prism) return msg.reply('ยังไม่ได้ติดตั้ง @discordjs/voice / prism-media (npm i)');
      listen(voice, prism, ch, msg.channel);
      return msg.reply(`ฟังอยู่ที่ ${ch.name} · เรียกชื่อบอตได้เลย`);
    }
    if (msg.content === '!leave') { voice?.getVoiceConnection(msg.guild.id)?.destroy(); return msg.reply('ออกแล้ว'); }
    const r = sayToBots(msg.content, mcName(msg.author.id));
    if (r.matched) msg.react('👂').catch(() => {});
  });

  function listen(voice, prism, ch, textCh) {
    const conn = voice.joinVoiceChannel({ channelId: ch.id, guildId: ch.guild.id, adapterCreator: ch.guild.voiceAdapterCreator, selfDeaf: false, selfMute: true });
    const busy = new Set();
    conn.receiver.speaking.on('start', (uid) => {
      if (busy.has(uid)) return; busy.add(uid);
      const opus = conn.receiver.subscribe(uid, { end: { behavior: voice.EndBehaviorType.AfterSilence, duration: 800 } });
      const pcm = opus.pipe(new prism.opus.Decoder({ rate: 48000, channels: 2, frameSize: 960 }));
      const chunks = [];
      pcm.on('data', (c) => chunks.push(c));
      pcm.on('end', async () => {
        busy.delete(uid);
        const buf = Buffer.concat(chunks);
        if (buf.length < 48000 * 4 * 0.4) return;                     // สั้นกว่า 0.4 วิ = ไม่ใช่คำพูด
        const wav = path.join(tmp, `${uid}-${Date.now()}.wav`);
        fs.writeFileSync(wav, toWav16k(buf));
        try {
          const text = await stt(wav, hub.cfg.bots);
          if (!text) return;
          const r = sayToBots(text, mcName(uid));
          if (r.matched) textCh.send(`👂 ได้ยิน "${text}" → ${r.bot} ${r.command} (ห่าง ${r.score})`).catch(() => {});
        } catch (e) { console.error('STT:', e.message); } finally { fs.rm(wav, () => {}); }
      });
    });
  }

  await client.login(process.env.DISCORD_TOKEN);
  console.log('Discord พร้อม');
  return client;
}

// รันคำสั่ง STT · {prompt} = ชื่อบอตทุกตัว (ให้ Whisper สะกดชื่อตรงขึ้น) · {wav} = ไฟล์
function stt(wav, bots) {
  const prompt = bots.flatMap((b) => [b.display, b.login]).join(', ');
  const cmd = (process.env.STT_CMD || '').replace('{wav}', wav).replace('{prompt}', prompt.replace(/"/g, ''));
  if (!cmd) return Promise.reject(new Error('ยังไม่ได้ตั้ง STT_CMD'));
  const args = cmd.match(/"[^"]*"|\S+/g).map((a) => a.replace(/^"|"$/g, ''));
  return new Promise((ok, no) => execFile(args[0], args.slice(1), { timeout: 30000 }, (err, out) => (err ? no(err) : ok(String(out).replace(/\[[^\]]*\]/g, '').trim()))));
}

// PCM 48k stereo s16le → WAV 16k mono (Whisper ต้องการ 16 kHz) · ลดแบบเฉลี่ยทุก 3 เฟรม
export function toWav16k(pcm) {
  const frames = Math.floor(pcm.length / 4), outN = Math.floor(frames / 3);
  const data = Buffer.alloc(outN * 2);
  for (let i = 0; i < outN; i++) {
    let sum = 0;
    for (let k = 0; k < 3; k++) { const f = (i * 3 + k) * 4; sum += pcm.readInt16LE(f) + pcm.readInt16LE(f + 2); }
    data.writeInt16LE(Math.max(-32768, Math.min(32767, Math.round(sum / 6))), i * 2);
  }
  const h = Buffer.alloc(44);
  h.write('RIFF', 0); h.writeUInt32LE(36 + data.length, 4); h.write('WAVE', 8); h.write('fmt ', 12);
  h.writeUInt32LE(16, 16); h.writeUInt16LE(1, 20); h.writeUInt16LE(1, 22); h.writeUInt32LE(16000, 24); h.writeUInt32LE(32000, 28);
  h.writeUInt16LE(2, 32); h.writeUInt16LE(16, 34); h.write('data', 36); h.writeUInt32LE(data.length, 40);
  return Buffer.concat([h, data]);
}
