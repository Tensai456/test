// split_kb.mjs — แยกเอกสารยาวใน docs/ เป็นไฟล์เล็ก 1 หัวข้อ/ไฟล์ ใน kb/ + index.json + README.md
// ใช้: node scripts/split_kb.mjs [--dry]  · แหล่งความจริง = docs/ (แก้ที่ docs แล้วรันใหม่) · ห้ามแก้ kb/ ด้วยมือ
import fs from 'node:fs';
import path from 'node:path';

const ROOT = path.resolve(path.dirname(new URL(import.meta.url).pathname), '..');
const DOCS = path.join(ROOT, 'docs');
const KB = path.join(ROOT, 'kb');
const DRY = process.argv.includes('--dry');
const W = 'https://minecraft.wiki/w/';

// แต่ละแหล่ง: ระดับหัวข้อที่ตัด (3 = ตัดที่ ### ถ้ามี, ไม่มีก็ใช้ ##) · dir · slug ตามลำดับ chunk (null = ข้าม)
const SOURCES = [
  { file: 'PROBLEM_PLAYBOOK.md', level: 3, dir: 'problems', slugs: [null, '../core/numbers', 'p01-mining-wrong-tool', 'p02-low-hp-not-eating', 'p03-team-food-zero', 'p04-desert-no-wood', 'p05-fall-death', 'p06-dig-down-lava', 'p07-drowning', 'p08-stuck-suffocation', 'p09-afk-idle', 'p10-home-near-hole', 'p11-first-night', 'p12-bed-nether-end', 'mobs-summary', 'pvp-hypotheses', 'test-checklist'] },
  { file: 'VANILLA_MOVEMENT.md', level: 3, dir: 'movement', slugs: ['speed-jump', 'fall-damage', 'fall-safe-blocks', 'clutch-mlg', 'edges-bridging-stuck', 'parkour-dropper-camera', 'pvp-movement', 'bot-rules', 'youtube-pending', 'unverified'] },
  { file: 'WEAPON_CATALOG.md', level: 2, dir: 'weapons', slugs: ['melee', 'ranged-thrown', 'explosive-fire-potion', 'enchantments-damage', 'bot-notes'] },
  { file: 'SIM_RESULTS.md', level: 2, dir: 'sim', slugs: ['physics-validation', 'pvp-results', 'survival-results', 'limitations'] },
  { file: 'playbook/BLOCK_PHYSICS.md', level: 2, dir: 'physics', slugs: ['player-entity-constants', 'slippery', 'speed-modifiers', 'bounce-fall', 'climbable', 'collision-shapes', 'fluids', 'gravity-blocks', 'bot-checklist', 'unverified'] },
  { file: 'playbook/HAZARDS.md', level: 2, dir: 'hazards', slugs: ['hunger-exhaustion', 'food-poisoning', 'status-effects', 'powder-snow-freezing', 'damage-blocks', 'fire-lightning', 'drowning', 'fall-void', 'falling-blocks', 'caves-lava', 'deep-dark-warden', 'night-lost-phantom', 'raid', 'structure-traps', 'boat-ice', 'death-item-loss', 'durability', 'reflex-priority', 'source-notes'] },
  { file: 'playbook/NETHER_END.md', level: 3, dir: 'nether-end', slugs: ['nether-mobs-table', 'm1-ghast', 'm2-blaze', 'm3-zombified-piglin', 'm4-piglin-brute', 'm5-hoglin-zoglin', 'm6-magma-cube-strider', 'e1-portal-build', 'e2-portal-coords-lost', 'e3-water-lava', 'e4-bed-anchor', 'e5-ground-fire', 'e6-ghast-breaks-portal', 'e7-gold-armor', 'd1-reach-end', 'd2-end-spawn-void', 'd3-ender-dragon', 'd4-end-enderman', 'd5-shulker-levitation', 'd6-gateway-elytra', 'd7-return-home', 'wither', 'unverified'] },
  { file: 'playbook/PROGRESSION.md', level: 3, dir: 'progression', slugs: ['milestones', 'wood-tools-recipes', 'tool-durability', 'armor', 'ores-y-levels', 'smelting-fuel', 'food', 'iron-first-set', 'enchant-anvil-villager', 'nether-to-end', 'p00-playbook-intro', 'p01-wood-table', 'p02-stone-furnace', 'p03-food', 'p04-bed', 'p05-iron', 'p06-diamond', 'p07-enchant', 'p08-nether-portal', 'p09-blaze-pearl', 'p10-stronghold-end', 'unverified'] },
];

// docs/wiki/<group>.md อัตโนมัติ: หัวข้อ "## <slug> · ชื่อ" → kb/<group>/<slug>.md (ไม่ต้องตั้ง slug ในสคริปต์)
const WIKI = path.join(DOCS, 'wiki');
const AUTO = fs.existsSync(WIKI) ? fs.readdirSync(WIKI).filter((f) => f.endsWith('.md')).sort() : [];

// ม็อบ: แยกระดับแถวจากตาราง → 1 ไฟล์/ม็อบ
const MOBS = {
  zombie: ['zombie'], husk: ['husk'], drowned: ['drowned'], zombie_villager: ['zombie villager', 'z.villager'],
  skeleton: ['skeleton'], stray: ['stray'], bogged: ['bogged'], parched: ['parched'], creeper: ['creeper'],
  spider: ['spider'], cave_spider: ['cave spider'], enderman: ['enderman'], witch: ['witch'], slime: ['slime'],
  phantom: ['phantom'], silverfish: ['silverfish'], pillager: ['pillager'], vindicator: ['vindicator'],
  evoker: ['evoker'], vex: ['vex'], ravager: ['ravager'], illusioner: ['illusioner'], guardian: ['guardian'],
  elder_guardian: ['elder guardian', 'elder'], warden: ['warden'], breeze: ['breeze'], creaking: ['creaking'],
  wolf: ['wolf'], bee: ['bee'], polar_bear: ['polar'], llama: ['llama'], goat: ['goat'], iron_golem: ['golem'],
  pufferfish: ['pufferfish'], dolphin: ['dolphin'], endermite: ['endermite'],
};

const out = []; // { path, title, source, text }

function chunks(md, level) {
  const lines = md.split('\n');
  const firstH2 = lines.findIndex((l) => l.startsWith('## '));
  const preamble = lines.slice(0, firstH2).filter((l) => l.startsWith('>') || /W\s*=|URL ย่อ|อ้างอิงย่อ/.test(l)).join('\n');
  const res = [];
  let cur = null, h2 = null;
  const push = () => { if (cur && cur.body.join('').trim()) res.push(cur); };
  for (const l of lines.slice(firstH2)) {
    if (l.startsWith('## ')) {
      push(); h2 = l.slice(3).trim();
      cur = { title: h2, parent: null, body: [] };
    } else if (level === 3 && l.startsWith('### ')) {
      push(); cur = { title: l.slice(4).trim(), parent: h2, body: [] };
    } else if (cur) cur.body.push(l);
  }
  push();
  return { preamble, chunks: res.map((c) => ({ ...c, text: c.body.join('\n').replace(/^-{3,}\s*$/gm, '').trim() })) };
}

function emit(rel, title, source, text, extra = {}) {
  out.push({ path: rel, title, source, text, ...extra });
}

for (const s of SOURCES) {
  const md = fs.readFileSync(path.join(DOCS, s.file), 'utf8');
  const { preamble, chunks: cs } = chunks(md, s.level);
  if (cs.length !== s.slugs.length) {
    console.error(`✗ ${s.file}: chunk ${cs.length} ≠ slug ${s.slugs.length}`);
    cs.forEach((c, i) => console.error(`  ${i}: ${c.parent ? c.parent + ' › ' : ''}${c.title}`));
    process.exit(1);
  }
  cs.forEach((c, i) => {
    const slug = s.slugs[i];
    if (!slug) return;
    const rel = path.normalize(path.join(s.dir, slug + '.md'));
    emit(rel, c.title, s.file, c.text, { parent: c.parent, preamble });
  });
}

// ---------- docs/wiki/ อัตโนมัติ ----------
for (const f of AUTO) {
  const md = fs.readFileSync(path.join(WIKI, f), 'utf8');
  const { preamble, chunks: cs } = chunks(md, 2);
  const group = f.replace(/\.md$/, '');
  for (const c of cs) {
    const m = c.title.match(/^([a-z0-9][a-z0-9-]*)\s*·\s*(.+)$/);
    if (!m) { console.error(`✗ wiki/${f}: หัวข้อต้องเป็น "## slug · ชื่อ" → "${c.title}"`); process.exit(1); }
    emit(path.join(group, `${m[1]}.md`), m[2], `wiki/${f}`, c.text, { preamble });
  }
}

// ---------- ม็อบรายตัว ----------
{
  const file = 'playbook/MOB_TACTICS.md';
  const md = fs.readFileSync(path.join(DOCS, file), 'utf8');
  const { chunks: cs } = chunks(md, 2);
  const per = Object.fromEntries(Object.keys(MOBS).map((k) => [k, []]));
  for (const c of cs) {
    const rows = c.text.split('\n');
    const header = rows.filter((r) => r.startsWith('|')).slice(0, 2);
    if (header.length < 2) { // ไม่ใช่ตาราง → เป็นกฎรวม
      emit(path.join('mobs', c.title.startsWith('0') ? '_rules.md' : '_unverified.md'), c.title, file, c.text);
      continue;
    }
    const note = rows.filter((r) => !r.startsWith('|') && r.trim()).join('\n');
    for (const r of rows.filter((r) => r.startsWith('|')).slice(2)) {
      const first = r.split('|')[1].toLowerCase();
      for (const [k, aliases] of Object.entries(MOBS)) {
        const hit = aliases.some((a) => first.includes(a)) && !(k === 'guardian' && /elder guardian/.test(first) && !/guardian\s*\//.test(first) && !/^\s*guardian\b/.test(first))
          && !(k === 'zombie' && /zombie villager/.test(first) && !/zombie\s*\//.test(first) && !/^\s*zombie\s*$/.test(first) && !/zombie\/husk/.test(first))
          && !(k === 'spider' && /^\s*cave spider\s*$/.test(first))
          && !(k === 'skeleton' && /wither/.test(first));
        if (hit) per[k].push({ section: c.title, header, row: r, note });
      }
    }
  }
  for (const [k, items] of Object.entries(per)) {
    if (!items.length) continue;
    const parts = [];
    let last = null;
    for (const it of items) {
      if (it.section !== last) { parts.push(`\n### ${it.section}\n`, ...it.header); last = it.section; }
      parts.push(it.row);
    }
    emit(path.join('mobs', `${k}.md`), k.replace(/_/g, ' '), file, parts.join('\n').trim(), { preamble: '> กฎแล็บที่ใช้กับทุกม็อบ: `mobs/_rules.md`' });
  }
}

// ---------- เขียนไฟล์ ----------
const kw = (t) => [...new Set((t.toLowerCase().match(/[a-z][a-z0-9_]+/g) || []).filter((w) => w.length > 2))];
const index = out.map((o) => ({ path: o.path.replace(/\\/g, '/'), title: o.title, group: o.path.split(path.sep)[0], source: o.source, keywords: kw(o.title + ' ' + o.path), lines: o.text.split('\n').length }));
if (DRY) { for (const i of index) console.log(i.path.padEnd(42), i.lines, i.title); process.exit(0); }

// ลบเฉพาะหมวดที่สคริปต์นี้สร้าง (kb/blocks/ มาจาก gen_catalog.cjs — ไม่แตะ)
for (const g of new Set(index.map((i) => i.group))) fs.rmSync(path.join(KB, g), { recursive: true, force: true });
// รวมไฟล์จาก kb/blocks/ เข้า index
const BLK = path.join(KB, 'blocks');
if (fs.existsSync(BLK)) for (const f of fs.readdirSync(BLK).filter((f) => f.endsWith('.md')).sort()) {
  const t = fs.readFileSync(path.join(BLK, f), 'utf8');
  index.push({ path: `blocks/${f}`, title: (t.match(/^# (.*)$/m) || [, f])[1], group: 'blocks', source: 'minecraft-data (gen_catalog.cjs)', keywords: kw(f), lines: t.split('\n').length });
}
for (const o of out) {
  const p = path.join(KB, o.path);
  fs.mkdirSync(path.dirname(p), { recursive: true });
  const head = [`# ${o.title}`, '', `<!-- สร้างอัตโนมัติโดย scripts/split_kb.mjs จาก docs/${o.source}${o.parent ? ' › ' + o.parent : ''} · ห้ามแก้มือ -->`];
  if (o.preamble) head.push(o.preamble.replace(/^W=.*$/m, `ลิงก์ย่อ W = ${W}`));
  fs.writeFileSync(p, head.join('\n') + '\n\n' + o.text + '\n');
}
fs.writeFileSync(path.join(KB, 'index.json'), JSON.stringify(index, null, 1));

const groups = {};
for (const i of index) (groups[i.group] ??= []).push(i);
const GROUP_TH = { core: 'ตัวเลขกลาง', problems: 'ปัญหา → วิธีแก้ (สมองเดิม)', movement: 'การเคลื่อนที่/การตก', physics: 'ฟิสิกส์บล็อกพิเศษ', hazards: 'อันตรายนอกการต่อสู้', mobs: 'ม็อบ overworld (1 ตัว/ไฟล์)', 'nether-end': 'นรก / End / บอส', progression: 'ทรัพยากร/ไต่ระดับ', weapons: 'อาวุธ', sim: 'ตัวจำลอง', blocks: 'บล็อก/ไอเทม/อาหาร (จาก minecraft-data)' };
const readme = ['# KB — คลังความรู้ Minecraft (Java วานิลลา) สำหรับบอต', '',
  '> 1 หัวข้อ = 1 ไฟล์ · ดึงเฉพาะที่ใช้ · ค้นด้วย `index.json` (path, title, group, keywords)',
  '> สร้างโดย `node scripts/split_kb.mjs` (เอกสาร) + `node scripts/gen_catalog.cjs` (บล็อก) — **แก้ที่ docs/ แล้วรันใหม่ ห้ามแก้ kb/ ตรง**',
  '> ความน่าเชื่อถือ: minecraft-data > วิกิ > เกณฑ์แล็บ > ผลจำลอง', ''];
for (const [g, items] of Object.entries(groups).sort()) {
  readme.push(`## ${GROUP_TH[g] ?? g} (\`${g}/\`)`, '');
  for (const i of items.sort((a, b) => a.path.localeCompare(b.path))) readme.push(`- [${i.title}](${i.path}) · ${i.lines} บรรทัด`);
  readme.push('');
}
fs.writeFileSync(path.join(KB, 'README.md'), readme.join('\n'));
console.log(`OK kb/: ${out.length} ไฟล์ · ${Object.keys(groups).length} หมวด`);
