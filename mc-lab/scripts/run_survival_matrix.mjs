// ตาราง % รอด: อุปกรณ์ × ฉากม็อบ · node scripts/run_survival_matrix.mjs [n]
import { surviveRate } from '../lib/survival/survival_sim.mjs';
import { fallDamage, chooseClutch } from '../lib/fall_safety.mjs';

const n = Number(process.argv[2] ?? 300);
const GEAR = [
  ['มือเปล่า ไม่มีเกราะ (วันแรก)', { weapon: 'fist', armor: 'none' }],
  ['ดาบไม้ ไม่มีเกราะ', { weapon: 'wooden_sword', armor: 'none' }],
  ['ดาบหิน + หนัง', { weapon: 'stone_sword', armor: 'leather' }],
  ['ดาบเหล็ก + เหล็ก', { weapon: 'iron_sword', armor: 'iron' }],
  ['ดาบเหล็ก + เหล็ก + คริ', { weapon: 'iron_sword', armor: 'iron', crit: true }],
];
const SCEN = [
  ['ซอมบี้ 1', [{ type: 'zombie', dist: 6 }]],
  ['ซอมบี้ 3', [{ type: 'zombie', dist: 5 }, { type: 'zombie', dist: 6 }, { type: 'zombie', dist: 7 }]],
  ['แมงมุม 2', [{ type: 'spider', dist: 6 }, { type: 'spider', dist: 8 }]],
  ['โครงกระดูก 1', [{ type: 'skeleton', dist: 12 }]],
  ['ครีปเปอร์ 1 (ตีแล้วถอย)', [{ type: 'creeper', dist: 8 }]],
  ['คืนแรกผสม: ซอมบี้2+โครง1+ครีปเปอร์1', [{ type: 'zombie', dist: 5 }, { type: 'creeper', dist: 7 }, { type: 'zombie', dist: 9 }, { type: 'skeleton', dist: 14 }]],
];
const pct = (x) => `${(x * 100).toFixed(0)}%`;

console.log(`| อุปกรณ์ \\ ฉาก (n=${n}) | ${SCEN.map(s => s[0]).join(' | ')} |`);
console.log(`|---|${SCEN.map(() => '---').join('|')}|`);
for (const [g, bot] of GEAR) {
  const cells = SCEN.map(([, sc]) => { const r = surviveRate(bot, sc, { n }); return `${pct(r.rate)} (HP ${r.avgHpLeft.toFixed(0)})`; });
  console.log(`| ${g} | ${cells.join(' | ')} |`);
}

console.log('\n**ครีปเปอร์: เทียบกลยุทธ์ (ดาบไม้ ไม่มีเกราะ)**\n');
console.log('| กลยุทธ์ | % รอด | ระเบิดต่อรอบ |\n|---|---|---|');
for (const tac of ['stand', 'hit_back', 'flee']) {
  const r = surviveRate({ weapon: 'wooden_sword', armor: 'none', creeperTactic: tac }, [{ type: 'creeper', dist: 8 }], { n });
  console.log(`| ${tac} | ${pct(r.rate)} | ${r.blastsPerRun.toFixed(2)} |`);
}

console.log('\n**ตกจากที่สูงแบบสุ่ม 5–60 บล็อก (HP เต็ม, clutch สำเร็จ 80% ถ้ามีของ — ASSUME)**\n');
console.log('| ของในตัว | มิติ | % รอด |\n|---|---|---|');
const rnd = (() => { let s = 7; return () => (s = (s * 16807) % 2147483647) / 2147483647; })();
for (const [inv, dim] of [[[], 'overworld'], [['water_bucket'], 'overworld'], [['water_bucket'], 'the_nether'], [['hay_block'], 'the_nether']]) {
  let ok = 0;
  for (let i = 0; i < n; i++) {
    const h = 5 + rnd() * 55;
    const c = chooseClutch({ inventory: inv, dimension: dim });
    let dmg = fallDamage(h);
    if (c && rnd() < 0.8) dmg = c === 'hay_block' ? fallDamage(h, { landing: 'hay_block' }) : 0;
    if (dmg < 20) ok++;
  }
  console.log(`| ${inv.join(',') || '(ไม่มี)'} | ${dim} | ${pct(ok / n)} |`);
}
