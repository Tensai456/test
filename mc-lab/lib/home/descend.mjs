// descend.mjs — ลงจากที่สูงหลังสร้างเสร็จ (เสา/หลังคา) แบบเสียเลือดน้อยสุด · ฟังก์ชันล้วน
// กติกา jing: ไม่มีนั่งร้านแท้ (scaffolding ทำจากไผ่) → ต่อเสาด้วยบล็อกธรรมดา แล้ว "MLG ลง" หรือ "หาทางลงที่เลือดลดน้อยสุด"
// วิกิ: ตก ≤3 บล็อกไม่เสียเลือด (W/Damage) · นั่งร้านแท้ ย่อแล้วไต่ลงได้ ไม่ตก (W/Scaffolding) · scaffolding = ไผ่ 6 + เชือก 1 → 6 (recipes.json)
import { fallDamage, chooseClutch } from '../fall_safety.mjs';

const SAFE_DROP = 3;
// tops: Map "x,z" → ความสูงพื้นที่ยืนได้ (บนหลังคา/ผนัง/พื้น) · start = {x, z, feet} · ground = ความสูงเท้าบนพื้นดิน
// คืนตัวเลือกเรียงจากดีสุด: { kind, damage, sec, path?, item? }
export function descendOptions({ tops = new Map(), start, ground, hp = 20, inv = [], dim = 'overworld', pillarH = 0, onScaffolding = false } = {}) {
  const opts = [];
  const drop = start.feet - ground;
  if (onScaffolding) opts.push({ kind: 'scaffold-climb', damage: 0, sec: drop * 0.4, why: 'ย่อไต่ลงนั่งร้าน (W/Scaffolding)' });
  // 1) เดินลงทีละขั้น: BFS บนจุดยืนข้างเคียง (8 ทิศ) ที่ต่ำลงไม่เกิน 3 ต่อก้าว จนถึงพื้น
  const key = (x, z) => `${x},${z}`;
  const seen = new Map([[key(start.x, start.z), { feet: start.feet, path: [] }]]);
  const q = [{ x: start.x, z: start.z, feet: start.feet, path: [] }];
  let stepPath = null;
  while (q.length && !stepPath) {
    const c = q.shift();
    for (const [dx, dz] of [[1, 0], [-1, 0], [0, 1], [0, -1], [1, 1], [1, -1], [-1, 1], [-1, -1]]) {
      const nx = c.x + dx, nz = c.z + dz;
      const t = tops.get(key(nx, nz));
      const feet = t != null ? t + 1 : ground;                         // ไม่มีหลังคา/ผนัง = พื้นดิน
      const d = c.feet - feet;
      if (d < 0 && d < -1) continue;                                    // ขึ้นได้ ≤1 (กระโดด)
      if (d > SAFE_DROP) continue;                                      // ตกเกิน 3 = เสียเลือด → ไม่ใช่ "เดินลง"
      if (seen.has(key(nx, nz)) && seen.get(key(nx, nz)).feet >= feet) continue;
      const step = { x: nx, z: nz, feet, path: [...c.path, [nx, feet, nz]] };
      seen.set(key(nx, nz), step);
      if (feet <= ground) { stepPath = step.path; break; }
      if (step.path.length < 40) q.push(step);
    }
  }
  if (stepPath) opts.push({ kind: 'walk-down', damage: 0, sec: stepPath.length * 0.5, path: stepPath, why: 'ลงทีละขั้น ≤3 บล็อก' });
  // 2) ขุดเสาลง (ถ้ายืนบนเสาที่ต่อเอง)
  if (pillarH > 0 && pillarH >= drop) opts.push({ kind: 'dig-down', damage: 0, sec: pillarH * 0.8, why: 'ขุดเสาที่ต่อเองลงทีละชั้น' });
  // 3) MLG: ของกันตกที่รอดได้
  const item = chooseClutch({ inventory: inv, dimension: dim, fallDistance: drop, hp });
  if (item) opts.push({ kind: 'mlg', item, damage: ['hay_block', 'honey_block'].includes(item) ? fallDamage(drop, { landing: item }) : 0, sec: 1.5, risky: true, why: `MLG ด้วย ${item}` });
  // 4) กระโดดลงตรง ๆ ถึงพื้น (จุดข้างเคียงที่ไม่มีหลังคาขวาง) · ต้องไม่ตาย (เหลือ ≥4) · จุดตกบนหลังคาต่ำกว่า = ใช้ walk-down แทน
  const groundDmg = fallDamage(drop);
  const best = { kind: 'jump', damage: groundDmg, sec: 1, to: [start.x, ground, start.z], why: 'กระโดดลงพื้นตรง ๆ' };
  if (best.damage < hp - 4) opts.push(best);
  // เรียง: เลือดไม่ลดก่อน (เดินลง/ไต่/ขุด) → MLG (เสี่ยงพลาด) → กระโดด · เท่ากันเลือกเร็วกว่า
  const rank = (o) => o.damage * 100 + (o.risky ? 50 : 0) + o.sec;
  return opts.sort((a, b) => rank(a) - rank(b));
}
