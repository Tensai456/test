// rule_expect.mjs — กฎ → คลาสท่าที่ "ควรเห็น" ภายในกี่วินาที · ค่าเริ่มนี้ = [คิดเอง] ปรับจากข้อมูลศุกร์
// win = วินาที · any = คลาสใดก็ได้ที่ไม่ใช่ idle
export const EXPECT = {
  'in-lava': { want: ['move', 'swim-up'], win: 1 }, drowning: { want: ['swim-up', 'move'], win: 2 },
  falling: { want: ['clutch'], win: 1.5 }, 'falling-no-clutch': { want: ['move', 'place'], win: 1.5 },
  'creeper-fusing': { want: ['flee'], win: 1 }, 'charged-creeper': { want: ['flee'], win: 1 }, 'creeper-bait': { want: ['flee', 'move'], win: 2 },
  'hostile-close': { want: ['fight', 'flee'], win: 1.5 }, 'low-hp-in-combat': { want: ['flee', 'eat'], win: 2 },
  outnumbered: { want: ['flee', 'move'], win: 2 }, 'armored-crowd': { want: ['flee', 'move'], win: 2 },
  'warden-near': { want: ['flee', 'move'], win: 2 }, 'skeleton-open': { want: ['fight', 'move', 'flee'], win: 2 },
  'hostile-approach': { want: ['fight', 'move', 'place'], win: 3 },
  hungry: { want: ['eat'], win: 5 }, 'eat-to-regen': { want: ['eat'], win: 5 }, 'eat-after-hunger-effect': { want: ['eat'], win: 5 },
  'night-exposed': { want: ['move', 'place', 'sleep'], win: 10 }, idle: { want: ['any'], win: 10 },
  'wrong-tool': { want: ['any'], win: 3 }, 'gravity-above': { want: ['move'], win: 2 },
};
export const DEFAULT_EXPECT = { want: ['any'], win: 3 };
// veto → คลาสท่าที่ถือว่า "ฝ่าฝืน" ถ้ารุ่นพี่ทำ
export const VETO_BREACH = { 'bed-wrong-dimension': ['sleep'], 'dig-straight-down': ['mine'], 'dont-provoke': ['fight'], 'piglin-container': ['mine'], 'no-block-in-passage': ['place'], 'respawn-grace': ['place'] };
// คีย์ state ที่กฎต้องใช้ (ถ้าขาด → unknown ไม่นับตัวส่วน)
export const NEEDS = { hungry: ['food', 'inv'], 'eat-to-regen': ['food', 'inv'], 'eat-after-hunger-effect': ['food', 'inv'], 'no-food': ['food', 'inv'],
  'in-lava': ['inLava'], 'on-fire': ['onFire'], edge: ['edgeDepth'], 'night-exposed': ['sheltered'], suffocating: ['suffocating'], 'danger-block': ['standingOn'] };
export const matches = (want, classes) => want.includes('any') ? [...classes].some((c) => c !== 'idle') : want.some((w) => classes.has(w));
