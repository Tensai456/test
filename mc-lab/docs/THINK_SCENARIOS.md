# THINK_SCENARIOS — เจอแบบนี้ บอตจะทำอะไร (ห้องทดลองความคิด)

> สร้างโดย `node scripts/think_scenarios.mjs` · ใช้ `lib/chain.mjs` decide() กับกฎใน `data/triggers.json` + `data/chains.json`
> ✅ = ตรงกับที่ควรทำ · ❌ = ช่องโหว่ของกฎ (ต้องแก้ data/) · **ยืนยันระดับจำลองเท่านั้น** — เอาไปเทียบตอนลองจริง

ผล: ตรง 50/50

| ผล | หมวด | สถานการณ์ | ตัดสินใจ | ทำอะไร | ความรู้ที่ใช้ |
|---|---|---|---|---|---|
| ✅ | ตก | ตกจากหน้าผา 20 บล็อก มีถังน้ำ | falling | chooseClutch → สลับช่อง → มองลง (pitch −90°) → วางทุก tick ที่เข้าระยะ | `movement/clutch-mlg.md` `problems/p05-fall-death.md` |
| ✅ | ตก | ตก 20 บล็อก ในนรก มีแค่ถังน้ำ | falling-no-clutch | [คิดเอง] ไม่มีของกันตก: บังคับตัวกลางอากาศไปหาน้ำ/ผงหิมะ/ใบไม้/หญ้าแห้งใต้ตัว · ลงพื้นแล้วถอยจากขอบ กินฟื้นเลือด · ขอถังน้ำจากทีม | `movement/fall-safe-blocks.md` `movement/clutch-mlg.md` |
| ✅ | ตก | เดินขอบหน้าผาลึก 10 | edge | ย่อ (sneak) ค้างตอนเดินขอบ | `movement/edges-bridging-stuck.md` |
| ✅ | ลาวา | ตกลงลาวา | in-lava | กระโดดออกทางบล็อกปลอดภัยล่าสุด · มียาไฟให้ดื่ม · ห้ามขุดต่อ | `hazards/caves-lava.md` `hazards/damage-blocks.md` |
| ✅ | ไฟ | ติดไฟ (โดนลูกไฟ) | on-fire | ลงน้ำ/ใช้ถังน้ำ · ดื่มยาไฟ · ออกจากบล็อกไฟ | `hazards/fire-lightning.md` |
| ✅ | น้ำ | ดำน้ำ อากาศเหลือ 3 วิ | drowning | ว่ายขึ้นตรง · ห้ามขุดใต้น้ำ | `hazards/drowning.md` `problems/p07-drowning.md` |
| ✅ | ติด | ทรายร่วงทับหัว | suffocating | ขุดบล็อกที่ทับหัวทันที · ถ้าทรายร่วงต่อให้ถอยออก | `problems/p08-stuck-suffocation.md` `hazards/falling-blocks.md` |
| ✅ | ม็อบ | ครีปเปอร์ห่าง 2 บล็อก | creeper-fusing | ถอยออก ≥6 บล็อก (ดาเมจ 0 ตามสูตรวิกิ) หรือตีตอนวิ่งให้กระเด็นแล้วถอย · ถอยไม่ทัน: วางบล็อกบัง · ห้ามอยู่ ≤3 (เกราะเหล็กยังโดน 11–21) | `mobs/creeper.md` |
| ✅ | ม็อบ | ซอมบี้ 3 ตัวห่าง 3 | hostile-close | สู้ตามไฟล์ม็อบ: รอชาร์จ ≥95% · กระโดดคริ (ปล่อยวิ่ง) · ยกโล่ระหว่างรอ | `mobs/zombie.md` `mobs/_rules.md` |
| ✅ | ม็อบ | โครงกระดูกห่าง 12 ในที่โล่ง | skeleton-open | หลบหลังบล็อกหรือวิ่งซิกแซกเข้าหา · ยกโล่ | `mobs/skeleton.md` |
| ✅ | ม็อบ | เลือด 5 ซอมบี้ห่าง 3 มีขนมปัง | low-hp-in-combat | ลดโล่ก่อนถอย (ยกโล่เดินช้าเหลือ 20%) → วิ่งออกนอกระยะ → กินแอปเปิลทอง/อาหาร · มีโทเท็มให้ถือมือรอง | `health/healing.md` `health/totem.md` |
| ✅ | ม็อบ | warden ห่าง 15 | warden-near | ย่อเดินออก ห้ามสู้ ห้ามวิ่ง/วางบล็อกใกล้ sculk | `mobs/warden.md` `hazards/deep-dark-warden.md` |
| ✅ | ม็อบ | enderman ห่าง 20 (ยังไม่โกรธ) | enderman-near | ห้ามมองหน้า · ถ้าจะล่าไข่มุก: วางบล็อก ตี 1 ครั้ง ถอย ตีต่อ | `mobs/enderman.md` |
| ✅ | ม็อบ | แมงมุมห่าง 2 กลางคืน | hostile-close | สู้ตามไฟล์ม็อบ: รอชาร์จ ≥95% · กระโดดคริ (ปล่อยวิ่ง) · ยกโล่ระหว่างรอ | `mobs/spider.md` `mobs/_rules.md` |
| ✅ | ม็อบ | phantom โฉบลงมา (ไม่ได้นอน 3 คืน) | phantom-attack | หลบใต้หลังคา/ตีตอนมันโฉบลง · คืนนี้ต้องนอนเพื่อรีเซ็ต | `mobs/phantom.md` `hazards/night-lost-phantom.md` |
| ✅ | ม็อบ | witch ห่าง 8 กำลังปายา | witch-ranged | เข้าประชิดเร็ว (ยาสาดระยะไกล) · มีนมไว้ล้างพิษ · ฆ่าก่อนมันดื่มยารักษา | `mobs/witch.md` |
| ✅ | อาหาร | เลือด 9 หิว 14 ไม่มีศัตรู มีสเต๊ก | eat-to-regen | กินจนหิว ≥18 (ฟื้นเลือดเอง) · เลือกอาหาร saturation สูงก่อน | `problems/p02-low-hp-not-eating.md` `health/health.md` |
| ✅ | อาหาร | หิว 5 มีขนมปัง | hungry | กินทันที (หิว ≤6 วิ่งไม่ได้) | `hazards/hunger-exhaustion.md` |
| ✅ | อาหาร | หิว 5 ไม่มีอาหารเลย | no-food | ฆ่าสัตว์ใกล้สุด/ตกปลา/เก็บพืช · ลดวิ่ง+กระโดด (เปลือง exhaustion) · แจ้งทีมขออาหาร | `problems/p03-team-food-zero.md` `progression/p03-food.md` |
| ✅ | อาหาร | โดน husk ตีจนติด Hunger | eat-after-hunger-effect | Hunger ทำให้หิวเร็ว → กินอาหารรอง (ไม่ใช่ของดีสุด) หลังพ้นการต่อสู้ | `mobs/husk.md` `hazards/status-effects.md` |
| ✅ | กลางคืน | ค่ำแล้ว อยู่ที่โล่ง ยังไม่มีเตียง | night-exposed | กลับบ้าน/นอน · คืนแรกไม่มีบ้าน: เข้าเนินเขา/ที่กำบัง + คบเพลิง — [ต้องให้ jing ยืนยัน: กฎห้ามก่อกำแพงรอบตัว] ทางเลือกที่ไม่ขังตัว [คิดเอง]: ยืนในที่สว่าง (คบเพลิงรอบรัศมี) ใกล้ทีม หันหลังชนผนัง | `problems/p11-first-night.md` `time-weather/sleeping.md` |
| ✅ | กลางคืน | จะนอนในนรก | bed-wrong-dimension | ห้ามใช้เตียง (ระเบิด power 5) | `problems/p12-bed-nether-end.md` `nether-end/e4-bed-anchor.md` |
| ✅ | นรก | เข้านรกไม่มีทอง | nether-no-gold | ใส่รองเท้าทอง (กฎ jing: ทองทำรองเท้าเท่านั้น) หรือกลับ overworld | `nether-end/e7-gold-armor.md` |
| ✅ | นรก | ghast ยิงลูกไฟห่าง 30 | ghast-fireball | ตีลูกไฟสะท้อนกลับ/ยิงธนู · ยืนหลังบล็อกกันระเบิดสูง (cobblestone) · อย่ายืนขอบลาวา | `nether-end/m1-ghast.md` |
| ✅ | นรก | piglin brute ห่าง 6 ใน bastion | brute-near | brute ไม่สนทอง — ถอยออกจาก bastion หรือสู้ด้วยโล่+ดาบ ห้ามสู้ในที่แคบใกล้ลาวา | `nether-end/m4-piglin-brute.md` |
| ✅ | End | ยืนขอบเกาะ End ใต้เท้าเป็น void | edge | ย่อ (sneak) ค้างตอนเดินขอบ | `movement/edges-bridging-stuck.md` |
| ✅ | End | โดน shulker ลอยขึ้น (levitation) | levitation | อยู่ใต้หลังคา/เกาะบล็อกเหนือหัว · หยุดลอยแล้วเตรียมกันตก (ถังน้ำ/Slow Falling) · ฆ่า shulker จากที่กำบัง | `nether-end/d5-shulker-levitation.md` `movement/clutch-mlg.md` |
| ✅ | ขุด | ขุดหินด้วยมือเปล่า | wrong-tool | หยุดขุด · ทำ/สลับเครื่องมือขั้นที่ขุดได้ของ | `problems/p01-mining-wrong-tool.md` |
| ✅ | ขุด | ขุดแร่เหล็กด้วยอีเต้อไม้ | wrong-tool | หยุดขุด · ทำ/สลับเครื่องมือขั้นที่ขุดได้ของ | `problems/p01-mining-wrong-tool.md` |
| ✅ | ขุด | จะขุดบล็อกใต้เท้าตรง ๆ | dig-straight-down | ห้ามขุดใต้เท้าตรง ๆ (ยกเว้นเสาของตัวเอง) · ขุดเป็นขั้นบันได | `problems/p06-dig-down-lava.md` `hazards/caves-lava.md` |
| ✅ | ว่าง | ยืนนิ่ง 40 วิ ไม่มีอะไรทำ | plan:logs | ซุง ≥4 | `progression/p01-wood-table.md` `problems/p04-desert-no-wood.md` |
| ✅ | ความหนาว | ติดผงหิมะ กำลังแข็ง | freezing | ออกจากผงหิมะทันที (กระโดด/ขุด) · ใส่รองเท้าหนังกันได้ | `hazards/powder-snow-freezing.md` |
| ✅ | แผน | เกิดใหม่มือเปล่า | plan:logs | ซุง ≥4 | `progression/p01-wood-table.md` `problems/p04-desert-no-wood.md` |
| ✅ | แผน | มีซุง 4 ยังไม่มีโต๊ะ | plan:table | โต๊ะคราฟต์ | `blocks/_recipes.md` |
| ✅ | แผน | มีอีเต้อเหล็ก+เตา ยังไม่มีเกราะ | plan:chestplate | เสื้อเกราะเหล็กก่อน (กฎ jing) | `progression/armor.md` |
| ✅ | แผน | ชุดเหล็กครบ จะไปนรก มีเพชร 1 อัน | plan:obsidian | obsidian ≥10 | `nether-end/e1-portal-build.md` |
| ✅ | ซ้อน | ตกลงลาวาตอนมีครีปเปอร์ใกล้ | in-lava | กระโดดออกทางบล็อกปลอดภัยล่าสุด · มียาไฟให้ดื่ม · ห้ามขุดต่อ | `hazards/caves-lava.md` `hazards/damage-blocks.md` |
| ✅ | ซ้อน | เลือด 6 กลางคืน โครงกระดูกยิงจาก 12 | skeleton-open | หลบหลังบล็อกหรือวิ่งซิกแซกเข้าหา · ยกโล่ | `mobs/skeleton.md` |
| ✅ | ซ้อน | ตก + ติดไฟพร้อมกัน มีถังน้ำ | falling | chooseClutch → สลับช่อง → มองลง (pitch −90°) → วางทุก tick ที่เข้าระยะ | `movement/clutch-mlg.md` `problems/p05-fall-death.md` |
| ✅ | ซ้อน | จมน้ำ + drowned ห่าง 3 | drowning | ว่ายขึ้นตรง · ห้ามขุดใต้น้ำ | `hazards/drowning.md` `problems/p07-drowning.md` |
| ✅ | ไม่มีของ | ตก 20 ไม่มีของกันตกเลย | falling-no-clutch | [คิดเอง] ไม่มีของกันตก: บังคับตัวกลางอากาศไปหาน้ำ/ผงหิมะ/ใบไม้/หญ้าแห้งใต้ตัว · ลงพื้นแล้วถอยจากขอบ กินฟื้นเลือด · ขอถังน้ำจากทีม | `movement/fall-safe-blocks.md` `movement/clutch-mlg.md` |
| ✅ | ไม่มีของ | ตก 20 ชิดกำแพง มีบันได | falling | chooseClutch → สลับช่อง → มองลง (pitch −90°) → วางทุก tick ที่เข้าระยะ | `movement/clutch-mlg.md` `problems/p05-fall-death.md` |
| ✅ | ไม่มีของ | ตก 20 ในนรก มีฟาง | falling | chooseClutch → สลับช่อง → มองลง (pitch −90°) → วางทุก tick ที่เข้าระยะ | `movement/clutch-mlg.md` `problems/p05-fall-death.md` |
| ✅ | biome | เกิดในทะเลทราย ไม่มีต้นไม้ | desert-no-wood | ทุบพุ่มไม้แห้ง (ได้ไม้ ทำแผ่นไม้ไม่ได้) · หาหมู่บ้าน · เดินตรงทางเดียวจนเจอต้นไม้ จดจุดเกิด | `problems/p04-desert-no-wood.md` `biomes/desert-badlands.md` |
| ✅ | biome | deep dark เจอ shrieker ห่าง 5 | sculk-near | ย่อเดิน (ไม่สั่นสะเทือน) · ห้ามวางบล็อก/ขุดใกล้ shrieker · ถอยออกจาก deep dark | `hazards/deep-dark-warden.md` |
| ✅ | ทีม | เพื่อนเลือด 4 ห่าง 10 ตัวเองเลือดเต็ม | teammate-down | [คิดเอง] ไปยืนระหว่างเพื่อนกับม็อบ · โยนอาหารให้ · คุ้มกันจนเพื่อนหิว ≥18 | `health/healing.md` `mobs/_rules.md` |
| ✅ | ทีม | เพื่อนเลือดต่ำ แต่ตัวเองเลือด 8 | plan:stone-pick | อีเต้อหิน | `progression/p02-stone-furnace.md` |
| ✅ | ทีม | นักสู้ (ไม่ใช่นักขุด) ได้เหล็กแล้ว | plan:chestplate | เสื้อเกราะเหล็กก่อน (กฎ jing) | `progression/armor.md` |
| ✅ | ทีม | นักขุดได้เหล็กแล้ว | plan:iron-pick | อีเต้อเหล็ก (นักขุด 1 ตัว — กฎ jing) | `progression/p05-iron.md` `progression/ores-y-levels.md` |
| ✅ | แผน | มีตา 12 ยังไม่เจอป้อม | plan:stronghold | หาป้อม (สามเหลี่ยม) | `navigation/stronghold-triangulation.md` `structures/stronghold.md` |

## ช่องโหว่ที่ต้องแก้

- ไม่มี
