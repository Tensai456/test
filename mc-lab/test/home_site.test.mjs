import { test } from 'node:test';
import assert from 'node:assert/strict';
import { siteMetrics, scoreSite, bestSites } from '../lib/home/home_site.mjs';

// กริดสมมติ 40×40: ซ้ายเป็นที่ราบมีต้นไม้ · กลางมีหลุมลึก · ขวาบนมีลาวา · ล่างขวาเป็นเนินชัน
function world() {
  return Array.from({ length: 40 }, (_, z) => Array.from({ length: 40 }, (_, x) => {
    if (x >= 18 && x <= 21 && z >= 10 && z <= 30) return { h: 55, top: 'stone' };          // หลุม/รอยแยก
    if (x >= 30 && z <= 8) return { h: 64, top: 'lava' };
    if (x >= 26 && z >= 25) return { h: 64 + (x - 26) + (z - 25), top: 'grass_block' };   // เนินชัน
    if (x <= 3 && z % 4 === 0) return { h: 64, top: 'oak_log' };
    return { h: 64, top: 'grass_block' };
  }));
}

test('ไม่เลือกที่ติดหลุม/ลาวา/เนินชัน · เลือกที่ราบใกล้ต้นไม้', () => {
  const g = world();
  const best = bestSites(g, { w: 11, l: 13, k: 3 });
  assert.ok(best.length >= 1);
  for (const b of best) {
    assert.equal(b.hazardCount, 0); assert.equal(b.holes, 0); assert.ok(b.span <= 3);
    assert.ok(b.x0 + 11 + 3 <= 18 || b.x0 - 3 > 21, `ทับหลุม ${b.x0}`);
  }
  assert.ok(best[0].x0 <= 8, `ควรอยู่ฝั่งต้นไม้ ได้ ${best[0].x0}`);
});

test('กรอบข้างหลุมโดนตัดทิ้ง · กรอบมีลาวาโดนตัดทิ้ง', () => {
  const g = world();
  assert.equal(scoreSite(siteMetrics(g, 6, 12, 11, 13)), null);        // ขอบขวาชนหลุม x=18
  assert.equal(scoreSite(siteMetrics(g, 26, 2, 11, 5)), null);         // ทับลาวา/หลุดแผนที่
});
