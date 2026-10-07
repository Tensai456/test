// fuzz_events_ext.mjs — เหตุการณ์ชุด 2 (12 หมวดที่ jing สั่งเพิ่ม 7 ต.ค. 2026) · deep_fuzz.mjs import แล้วรวมเข้า EVENTS
// แต่ละเหตุการณ์: gen(s, r) ปรับ state · inv = [[ชื่อ invariant, (s, d) => ผ่านไหม]]
const near = (s, f) => (s.nearby ?? []).filter(f);
const top = (d) => (d.mode === 'reflex' ? d.rule.id : d.mode);
const isAction = (d) => d.mode === 'reflex' && !d.rule.veto;
const prioAtLeast = (d, p) => d.mode === 'reflex' && !d.rule.veto && d.rule.prio >= p;
const hasVeto = (d, id) => d.vetoes.some((v) => v.id === id);
const pick = (r, a) => a[Math.floor(r() * a.length)];
const dist = (r, max) => Math.round(r() * max * 2) / 2;
const mob = (r, type, max, extra = {}) => ({ type, dist: dist(r, max), hostile: true, ...extra });
const flags = (s) => (s.flags ??= {});

export const EXT_EVENTS = {
  raid: { gen: (s, r) => { s.dim = 'overworld'; if (r() < 0.6) flags(s).raidActive = true;
      for (let i = 0, k = 1 + Math.floor(r() * 5); i < k; i++) s.nearby.push(mob(r, pick(r, ['pillager', 'vindicator', 'evoker', 'vex', 'ravager', 'witch']), 24));
      if (r() < 0.2) { s.action = 'drink_ominous'; if (r() < 0.6) flags(s).nearVillage = true; } },
    inv: [['evoker ≤16 → prio ≥79 (ฆ่าก่อน/หรือภัยที่ด่วนกว่า)', (s, d) => !near(s, (e) => e.type === 'evoker' && e.dist <= 16).length || prioAtLeast(d, 79)],
      ['ravager ≤10 → ห้ามยืนแลก (hostile-close)', (s, d) => !near(s, (e) => e.type === 'ravager' && e.dist <= 10).length || top(d) !== 'hostile-close'],
      ['ดื่ม ominous ใกล้หมู่บ้าน → ต้องมี veto', (s, d) => !(s.action === 'drink_ominous' && s.flags?.nearVillage) || hasVeto(d, 'ominous-near-village')],
      ['raid กำลังเกิด → ห้ามทำแผนต่อ', (s, d) => !s.flags?.raidActive || d.mode === 'reflex']] },
  bosses: { gen: (s, r) => { const w = r() < 0.5;
      if (w) { s.dim = pick(r, ['overworld', 'the_nether']); s.nearby.push(mob(r, 'wither', 48)); if (r() < 0.4) s.effects = ['wither']; }
      else { s.dim = 'the_end'; s.edgeDepth = r() < 0.5 ? 60 : 0; s.nearby.push(mob(r, 'ender_dragon', 120)); if (r() < 0.4) s.nearBlocks = [{ type: 'dragon_breath', dist: dist(r, 6) }]; }
      if (r() < 0.2) s.action = 'build_wither'; if (s.action === 'build_wither' && r() < 0.5) flags(s).witherArenaReady = true; },
    inv: [['Wither ≤32 → prio ≥85', (s, d) => !near(s, (e) => e.type === 'wither' && e.dist <= 32).length || prioAtLeast(d, 85)],
      ['มังกร ≤96 → prio ≥81', (s, d) => !near(s, (e) => e.type === 'ender_dragon' && e.dist <= 96).length || prioAtLeast(d, 81)],
      ['ในเมฆลมหายใจ ≤3 → prio ≥86', (s, d) => !(s.nearBlocks ?? []).some((b) => b.type === 'dragon_breath' && b.dist <= 3) || prioAtLeast(d, 86)],
      ['สร้าง Wither โดยไม่เตรียมสนาม → veto', (s, d) => !(s.action === 'build_wither' && !s.flags?.witherArenaReady) || hasVeto(d, 'wither-build-site')]] },
  trial: { gen: (s, r) => { s.dim = 'overworld'; s.nearBlocks = [{ type: pick(r, ['trial_spawner', 'trial_spawner', 'ominous_item_spawner', 'vault']), dist: dist(r, 16) }];
      for (let i = 0, k = Math.floor(r() * 4); i < k; i++) s.nearby.push(mob(r, pick(r, ['zombie', 'husk', 'skeleton', 'bogged', 'stray', 'spider', 'cave_spider', 'slime', 'silverfish', 'breeze']), 14));
      if (r() < 0.3) s.effects = ['trial_omen']; },
    inv: [['spawner ≤14 + ม็อบ ≥2 → ห้ามแผน', (s, d) => !((s.nearBlocks ?? []).some((b) => b.type === 'trial_spawner' && b.dist <= 14) && near(s, (e) => e.hostile && e.dist <= 14).length >= 2) || d.mode === 'reflex'],
      ['ominous item spawner ≤4 → prio ≥76', (s, d) => !(s.nearBlocks ?? []).some((b) => b.type === 'ominous_item_spawner' && b.dist <= 4) || prioAtLeast(d, 76)]] },
  traps: { gen: (s, r) => { const t = r();
      if (t < 0.3) s.nearBlocks = [{ type: 'stone_pressure_plate', dist: dist(r, 4) }, { type: 'tnt', dist: dist(r, 10) }];
      else if (t < 0.55) s.nearBlocks = [{ type: pick(r, ['tripwire', 'tripwire_hook']), dist: dist(r, 6) }];
      else if (t < 0.75) s.nearBlocks = [{ type: 'spawner', dist: dist(r, 20) }];
      else { s.nearBlocks = [{ type: pick(r, ['sculk_sensor', 'calibrated_sculk_sensor']), dist: dist(r, 12) }]; s.action = pick(r, ['place_block', 'open_container', 'break_block', 'walk']); if (r() < 0.4) flags(s).woolOccluded = true; } },
    inv: [['แผ่นกด ≤2 + TNT ≤8 → prio ≥84', (s, d) => !((s.nearBlocks ?? []).some((b) => b.type === 'stone_pressure_plate' && b.dist <= 2) && (s.nearBlocks ?? []).some((b) => b.type === 'tnt' && b.dist <= 8)) || prioAtLeast(d, 84)],
      ['tripwire ≤3 → prio ≥81', (s, d) => !(s.nearBlocks ?? []).some((b) => ['tripwire', 'tripwire_hook'].includes(b.type) && b.dist <= 3) || prioAtLeast(d, 81)],
      ['ทำสิ่งที่สั่นใกล้ sensor ≤8 ไม่มีขนแกะ → veto', (s, d) => !(['place_block', 'open_container', 'break_block'].includes(s.action) && (s.nearBlocks ?? []).some((b) => b.type.includes('sculk_sensor') && b.dist <= 8) && !s.flags?.woolOccluded) || hasVeto(d, 'sculk-vibration')]] },
  travel: { gen: (s, r) => { const g = r() < 0.7; if (g) { flags(s).gliding = true; s.fallDistance = Math.round(r() * 80); s.wallAhead = dist(r, 30); s.elytraDurability = Math.floor(r() * 432); }
      else { flags(s).mounted = true; } },
    inv: [['ร่อนอยู่ + กำแพง <8 → prio ≥91', (s, d) => !(s.flags?.gliding && s.wallAhead < 8) || prioAtLeast(d, 91)],
      ['ร่อนอยู่ → ห้ามตีความเป็น "ตก"', (s, d) => !s.flags?.gliding || !['falling', 'falling-no-clutch'].includes(top(d))],
      ['ร่อน + เอลิทรา <20 → prio ≥70', (s, d) => !(s.flags?.gliding && s.elytraDurability < 20) || prioAtLeast(d, 70)]] },
  team: { gen: (s, r) => { s.team = []; for (let i = 0; i < 3; i++) s.team.push({ hp: 1 + Math.floor(r() * 20), food: Math.floor(r() * 21), dist: dist(r, 48) });
      if (r() < 0.2) flags(s).teammateDied = true; if (r() < 0.3) { s.action = 'mine_ore'; if (r() < 0.5) flags(s).oreClaimed = true; }
      if (r() < 0.5) s.inv.bread = 1 + Math.floor(r() * 6); },
    inv: [['เพื่อนหิว <6 ≤32 + เรามีอาหาร + ไม่มีศัตรู ≤6 → ห้ามแผน', (s, d) => !(s.team.some((m) => m.food < 6 && m.dist <= 32) && s.inv.bread && !near(s, (e) => e.hostile && e.dist <= 6).length) || d.mode === 'reflex'],
      ['เพื่อนตาย → ห้ามแผน', (s, d) => !s.flags?.teammateDied || d.mode === 'reflex'],
      ['ขุดสายที่เพื่อนจอง → veto', (s, d) => !(s.action === 'mine_ore' && s.flags?.oreClaimed) || hasVeto(d, 'ore-claimed')]] },
  pvp: { gen: (s, r) => { for (let i = 0, k = 1 + Math.floor(r() * 2); i < k; i++) s.nearby.push(mob(r, 'player', 40));
      if (r() < 0.3) s.action = pick(r, ['drop_weapon', 'wall_in', 'pvp_engage']); },
    inv: [['ผู้เล่นศัตรู ≤6 → prio ≥76', (s, d) => !near(s, (e) => e.type === 'player' && e.dist <= 6).length || prioAtLeast(d, 76)],
      ['ผู้เล่นศัตรู ≤30 → ห้ามแผน', (s, d) => !near(s, (e) => e.type === 'player' && e.dist <= 30).length || isAction(d)],
      ['ทิ้งอาวุธ → veto เสมอ', (s, d) => s.action !== 'drop_weapon' || hasVeto(d, 'drop-weapon')],
      ['ขังตัวตอนมีผู้เล่นศัตรู ≤24 → veto', (s, d) => !(s.action === 'wall_in' && near(s, (e) => e.type === 'player' && e.dist <= 24).length) || hasVeto(d, 'self-wall-pvp')]] },
  gear: { gen: (s, r) => { if (r() < 0.5) { s.digging = { block: 'stone', canHarvest: true }; s.toolDurability = Math.floor(r() * 60); }
      if (r() < 0.4) s.armorDurabilityMin = Math.floor(r() * 50); if (r() < 0.4) flags(s).invFull = true; },
    inv: [['ขุดอยู่ + เครื่องมือ <10 → ห้ามแผน', (s, d) => !(s.digging && s.toolDurability < 10) || d.mode === 'reflex'],
      ['กระเป๋าเต็ม + ไม่มีศัตรู ≤8 → ห้ามแผน', (s, d) => !(s.flags?.invFull && !near(s, (e) => e.hostile && e.dist <= 8).length) || d.mode === 'reflex']] },
  weather: { gen: (s, r) => { s.dim = 'overworld'; if (r() < 0.5) flags(s).thunder = true;
      if (r() < 0.5) s.nearby.push(mob(r, 'creeper', 16, { charged: r() < 0.6 }));
      if (r() < 0.3) { s.nearBlocks = [{ type: 'fire', dist: dist(r, 10) }]; if (r() < 0.6) flags(s).inBase = true; } },
    inv: [['ครีปเปอร์ชาร์จ ≤12 → prio ≥90', (s, d) => !near(s, (e) => e.type === 'creeper' && e.charged && e.dist <= 12).length || prioAtLeast(d, 90)],
      ['ไฟในฐาน ≤6 → ห้ามแผน', (s, d) => !(s.flags?.inBase && (s.nearBlocks ?? []).some((b) => b.type === 'fire' && b.dist <= 6)) || d.mode === 'reflex']] },
  tech: { gen: (s, r) => { if (r() < 0.3) flags(s).chunkUnloaded = true; if (r() < 0.2) flags(s).justKicked = true;
      s.tps = Math.round(r() * 20 * 10) / 10; s.ping = Math.floor(r() * 600);
      if (r() < 0.4) s.action = pick(r, ['elytra_launch', 'mlg_practice', 'pvp_engage', 'parkour', 'mine']); },
    inv: [['ชังก์ไม่โหลด → ห้ามเดินตามแผน (reflex)', (s, d) => !s.flags?.chunkUnloaded || d.mode === 'reflex'],
      ['TPS <15 + งานอิงจังหวะ → veto', (s, d) => !(s.tps < 15 && ['elytra_launch', 'mlg_practice', 'pvp_engage', 'parkour'].includes(s.action)) || hasVeto(d, 'tps-risky')],
      ['ping >300 + งานอิงจังหวะ → veto', (s, d) => !(s.ping > 300 && ['pvp_engage', 'parkour', 'mlg_practice'].includes(s.action)) || hasVeto(d, 'ping-risky')]] },
  shelter: { gen: (s, r) => { flags(s).inShelter = true; if (r() < 0.4) flags(s).shelterBreached = true;
      for (let i = 0, k = Math.floor(r() * 4); i < k; i++) s.nearby.push(mob(r, pick(r, ['creeper', 'zombie', 'enderman', 'ghast', 'wither', 'ravager', 'skeleton', 'spider']), 16));
      s.nearby.forEach((e) => { if (e.type === 'enderman') e.hostile = false; });
      if (r() < 0.3) { s.action = 'build_shelter'; if (r() < 0.5) flags(s).shelterDirt = true; if (r() < 0.6) s.inv.cobblestone = 20 + Math.floor(r() * 44); } },
    inv: [['ที่หลบโดนเจาะ → ห้ามแผน', (s, d) => !s.flags?.shelterBreached || d.mode === 'reflex'],
      ['Wither ≤32 ขณะอยู่ในที่หลบ → prio ≥85', (s, d) => !near(s, (e) => e.type === 'wither' && e.dist <= 32).length || prioAtLeast(d, 85)],
      ['มีหินกรวด ≥20 แต่สร้างด้วยดิน → veto', (s, d) => !(s.action === 'build_shelter' && s.flags?.shelterDirt && (s.inv.cobblestone ?? 0) >= 20) || hasVeto(d, 'shelter-dirt')]] },
  oldWorld: { gen: (s, r) => { for (let i = 0, k = 1 + Math.floor(r() * 5); i < k; i++) s.nearby.push(mob(r, pick(r, ['zombie', 'husk', 'skeleton', 'stray', 'drowned']), 10, { armored: r() < 0.7 })); },
    inv: [['ม็อบใส่เกราะ ≥2 ≤6 + เลือด <16 → ห้ามยืนแลก', (s, d) => !(near(s, (e) => e.armored && e.dist <= 6).length >= 2 && s.hp < 16) || top(d) !== 'hostile-close']] },
};
