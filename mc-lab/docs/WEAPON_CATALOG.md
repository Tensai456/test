# WEAPON_CATALOG — อาวุธและของทุกอย่างที่ทำดาเมจ/ใช้สู้ได้ (Java วานิลลา)

> แหล่ง: minecraft.wiki ผ่าน WebSearch (ข้อความย่อ ไม่ใช่ทั้งหน้า) · ยืนยันระดับเอกสาร · โค้ดตัวเลขอยู่ `lib/pvp/weapons.mjs`
> HP = ครึ่งหัวใจ · ดาเมจ = ก่อนหักเกราะ · cooldown (tick) = 20 ÷ attack speed

## 1. อาวุธระยะประชิด

| อาวุธ | ดาเมจ | speed → cooldown | จุดเด่น/วิธีใช้ | แหล่ง |
|---|---|---|---|---|
| ดาบเหล็ก/เพชร/เนเธอไรต์ | 6 / 7 / 8 | 1.6 → 12.5 tick | ตีเร็ว · sweep · คริ ×1.5 | [Iron](https://minecraft.wiki/w/Iron_Sword) · [Diamond](https://minecraft.wiki/w/Diamond_Sword) · [Netherite](https://minecraft.wiki/w/Netherite_Sword) |
| ขวานเหล็ก/เพชร/เนเธอไรต์ | 9 / 9 / 10 | 0.9–1.0 → 20–22 tick | ดาเมจต่อครั้งสูง · **ตีโล่แล้วปิดโล่ 5 วิ** | [Axe](https://minecraft.wiki/w/Axe) · [Shield](https://minecraft.wiki/w/Shield) |
| กระบอง (mace) | 6 (ปกติ) | 0.6 → 33 tick | ทุบจากที่สูง: +4/บล็อก (3 บล็อกแรก), +2 (5 ถัดไป), +1 (ที่เหลือ) · ต้องตกมา ≥1.5 บล็อก · ทุบโดนแล้วไม่เสียเลือดตก | [Mace](https://minecraft.wiki/w/Mace) |
| หอก (spear) เหล็ก/เพชร | jab 3 / 4 | 1.05 / 0.95 | jab = แทงเบา + กระเด็น ตีหลายตัวได้ · **charge** (กดใช้ค้าง) ระยะ 2–4.5 บล็อก ต้องวิ่งเข้าหากัน ≥4.6 บล็อก/วิ จึงมีดาเมจ, ≥5.1 จึงกระเด็น · ตัวคูณ charge 0.95 / 1.075 · เอนชานต์ Lunge พุ่งไปข้างหน้าตอน jab | [Spear](https://minecraft.wiki/w/Spear) · [Iron Spear](https://minecraft.wiki/w/Iron_Spear) · [Diamond Spear](https://minecraft.wiki/w/Diamond_Spear) |
| ตรีศูล (ตีประชิด) | 9 | 1.1 → 18 tick | Impaling +2.5/เลเวล | [Trident](https://minecraft.wiki/w/Trident) |
| จอบ (Java) | 1 ทุกวัสดุ | — | ไม่ใช่อาวุธ | [Hoe](https://minecraft.wiki/w/Iron_Hoe) |
| พลั่ว/อีเต้อ | [ไม่แน่ใจ ค่า Java — ข้อมูลที่เจอเป็นของ Bedrock] | | ใช้แทนเมื่อไม่มีดาบ/ขวาน | [Shovel](https://minecraft.wiki/w/Iron_Shovel) |

## 2. ยิงไกล/ขว้าง

| ของ | ดาเมจ/ผล | หมายเหตุ | แหล่ง |
|---|---|---|---|
| ธนู | ง้างเต็ม (1 วิ) ความเร็ว 3 บล็อก/tick · คริ 6–11 (เฉลี่ย ~9) | ลูกตกลงโค้ง (gravity 0.05, drag 0.99) → ต้องเล็งสูงกว่าเป้า + เล็งดัก | [Bow](https://minecraft.wiki/w/Bow) · [Arrow](https://minecraft.wiki/w/Arrow) |
| หน้าไม้ | ความเร็ว 3.15 · คริ 7–11 · ขึ้นสาย 1.25 วิ (Quick Charge III = 0.5 วิ) | ขึ้นสายรอไว้ได้ · Multishot ยิง 3 ลูก · Piercing ทะลุ | [Crossbow](https://minecraft.wiki/w/Crossbow) |
| หน้าไม้ + พลุ (firework) | 1 ดาว: 5–6 (สูงสุด 7) · +2 ต่อดาว · สูงสุด 19 (7 ดาว) | ระเบิดกระจาย · Piercing ไม่มีผลกับพลุ | [Firework Rocket](https://minecraft.wiki/w/Firework_Rocket) |
| ตรีศูล (ขว้าง) | 8 (Channeling + ฟ้าผ่าตอนพายุ = 13) | Loyalty = บินกลับมือ · Riptide = พุ่งตัวเองตอนอยู่ในน้ำหรือฝนตก (ขว้างไม่ได้) | [Trident](https://minecraft.wiki/w/Trident) |
| ลูกลม (wind charge) | 1 + กระเด็นแรง (ของผู้เล่นแรงกว่าของ breeze 22%) · cooldown 10 tick | ปาใต้เท้า = กระโดดสูง (รวมกับกระบอง) · โดนแล้วรีเซ็ตระยะตก | [Wind Charge](https://minecraft.wiki/w/Wind_Charge) |
| **เบ็ดตกปลา** | **0 ดาเมจ และไม่กระเด็น** (ตั้งแต่ 1.9) | **ใช้ดึงเป้าเข้าหาตัว** ระยะ ~12 บล็อก → ดึงเข้ามาในระยะคอมโบ, ดึงคนที่หนี, ดึงตอนเราอยู่สูงกว่า = เป้าลอยขึ้นแล้วตกได้ดาเมจตก · ไม่ใช่เบ็ดแบบ 1.8 ที่ใช้ "rod combo" | [Fishing Rod](https://minecraft.wiki/w/Fishing_Rod) |
| หิมะ/ไข่ | 0 · **ผู้เล่น Java ไม่กระเด็น** (มีผลแค่กับม็อบ, blaze โดนหิมะ 3) | ใช้กับผู้เล่นไม่ได้ผล | [Snowball](https://minecraft.wiki/w/Snowball) · [Egg](https://minecraft.wiki/w/Egg) |
| ไข่มุก (ender pearl) | ตัวเองเสีย 5 เมื่อวาร์ป | ใช้หนี/ไล่ตาม/clutch | [Ender Pearl](https://minecraft.wiki/w/Ender_Pearl) |

## 3. ระเบิด/ไฟ/ยา/สิ่งแวดล้อม

| ของ | ผล | หมายเหตุ | แหล่ง |
|---|---|---|---|
| End crystal | ระเบิดแรงทันทีเมื่อตี · วางบน obsidian/bedrock | "Crystal PvP" · อันตรายต่อตัวเองด้วย | [PvP (Java)](https://minecraft.wiki/w/Tutorial:PvP_(Java_Edition)) |
| Respawn anchor | ใส่ glowstone แล้วกดใช้นอกนรก = ระเบิดทันที | วางไฟด้วย | [PvP (Java)](https://minecraft.wiki/w/Tutorial:PvP_(Java_Edition)) |
| เตียงในนรก/End | ระเบิดเมื่อนอน | [ไม่แน่ใจ ค่าดาเมจ] | [Bed](https://minecraft.wiki/w/Bed) |
| TNT / TNT minecart | ระเบิด · minecart จุดด้วยธนู Flame ได้ทันที | ใช้ทำกับดัก/กันไล่ตาม | [PvP (Java)](https://minecraft.wiki/w/Tutorial:PvP_(Java_Edition)) |
| ถังลาวา / หินเหล็กไฟ / Fire charge | ไฟติดตัวเป้า | ยา Fire Resistance กันได้ | [PvP (Java)](https://minecraft.wiki/w/Tutorial:PvP_(Java_Edition)) |
| ยาสาด Harming | ทะลุเกราะ (แต่ Protection ยังลดได้) | ค่าดาเมจต่อเลเวล [ไม่แน่ใจ] | [Splash Potion](https://minecraft.wiki/w/Splash_Potion) · [PvP (Java)](https://minecraft.wiki/w/Tutorial:PvP_(Java_Edition)) |
| ยาสาด Poison/Weakness/Slowness | ลดพลังหรือความเร็วเป้า | | [Splash Potion](https://minecraft.wiki/w/Splash_Potion) |
| ใยแมงมุม | เป้าเคลื่อนช้ามาก | ใช้ขังคู่ต่อสู้ (ไม่ใช่ขังตัวเอง) | [Cobweb](https://minecraft.wiki/w/Cobweb) |
| ดึงตกที่สูง / หินย้อย | ดาเมจตก (หินย้อยทำระยะตก ×2) | ดู VANILLA_MOVEMENT §2 | [Pointed Dripstone](https://minecraft.wiki/w/Pointed_Dripstone) |

**บอตควร:**
- ห้ามใช้ End crystal/respawn anchor/เตียงในนรก/TNT เว้นแต่ jing อนุญาตโหมดระเบิด (§5); ถ้าเป้าใช้ → ถอยออกนอกระยะ ≥8 บล็อก [คิดเอง]
- โดนไฟ/ลาวา: หา/ดื่ม Fire Resistance ถ้ามี ไม่มีให้ลงน้ำทันที (นรกใช้ไม่ได้ → หนีออกจากแหล่งไฟ) ([Fire](https://minecraft.wiki/w/Fire))
- โดนใยแมงมุม: ตัดด้วยดาบ/กรรไกร หรือรอ; ห้ามวางใยขังตัวเอง ([Cobweb](https://minecraft.wiki/w/Cobweb))
- โดนยาสาด Harming/Poison: Harming ทะลุเกราะ → HP<8 ให้ถอยและกิน/ดื่ม; Poison/Weakness/Slowness → ถอยออกจากเมฆยา (ความกว้างเมฆ [ไม่แน่ใจ]) ([Splash Potion](https://minecraft.wiki/w/Splash_Potion))
- TNT minecart/TNT: เห็น TNT ที่ถูกจุดหรือ minecart ใกล้ → วิ่งออก ≥8 บล็อก [คิดเอง]

**ตัดสินผล:** ภายใน 5 วิหลังโดน ต้องออกจากพื้นที่อันตรายและ HP หยุดลด; ถ้ายังลดต่อ 2 วิติด → ใช้ของฟื้น/หนีแบบฉุกเฉิน (เกณฑ์แล็บ)

## 4. เอนชานต์ที่มีผลต่อดาเมจ

| เอนชานต์ | ผล | แหล่ง |
|---|---|---|
| Sharpness | +0.5×เลเวล + 0.5 (Java) | [Enchantment](https://minecraft.wiki/w/Enchantment) |
| Smite / Bane | +2.5/เลเวล เฉพาะอันเดด / แมลง (ไม่มีผลกับผู้เล่น) | [Enchantment](https://minecraft.wiki/w/Enchantment) |
| Fire Aspect | ไฟ 4 วิ/เลเวล → I = 3, II = 7 ดาเมจรวม | [Fire Aspect](https://minecraft.wiki/w/Fire_Aspect) |
| Knockback | +2.586 บล็อก/เลเวล | [Knockback](https://minecraft.wiki/w/Knockback) |
| Density (กระบอง) | +0.5/บล็อกที่ตก/เลเวล | [Mace](https://minecraft.wiki/w/Mace) |
| Breach (กระบอง) | ลดผลเกราะและ toughness 15%/เลเวล | [Breach](https://minecraft.wiki/w/Breach) |
| Wind Burst (กระบอง) | ทุบโดนแล้วเด้งขึ้น 8 บล็อก/เลเวล → ทุบซ้ำได้ | [Mace](https://minecraft.wiki/w/Mace) |
| Impaling (ตรีศูล) | +2.5/เลเวล | [Impaling](https://minecraft.wiki/w/Impaling) |
| Lunge (หอก) | jab แล้วพุ่งไปข้างหน้า · ต้องมองระนาบพอดีจึงไปได้ไกลสุด | [Spear](https://minecraft.wiki/w/Spear) |

**บอตควร:**
- ก่อนสู้ ตรวจเอนชานต์ของดาบ/ของเป้าที่เห็นในมือ แล้วประเมินดาเมจ: Sharpness = +0.5×เลเวล+0.5 ([Enchantment](https://minecraft.wiki/w/Enchantment))
- Fire Aspect: ตีครั้งเดียวแล้วถอยให้ไฟทำงานได้ (I=3, II=7 ดาเมจรวม, [Fire Aspect](https://minecraft.wiki/w/Fire_Aspect)); ไม่ใช้ตอนยืนบนของไหม้ได้/ในป่าไม้ [คิดเอง]
- ถูกเป้า Knockback → ยืนห่างขอบหน้าผา/ลาวา >3 บล็อก (Knockback ≈ 2.586 บล็อก/เลเวล, [Knockback](https://minecraft.wiki/w/Knockback))
- เป้าใช้ Breach (กระบอง) → เกราะลดผลน้อยลง 15%/เลเวล → HP ต่ำให้เลี่ยงประชิด ([Breach](https://minecraft.wiki/w/Breach))
- เป้าใช้ Wind Burst/Density → หลบจากใต้เป้าที่อยู่สูง (ถอยแนวนอน ≥3 บล็อก) [คิดเอง]

**ตัดสินผล:** ภายใน 15 วิแรกของการปะทะ เทียบดาเมจที่ได้/โดนจริงกับที่ประเมิน; คลาดเกิน 30% → ปรับการประเมินเอนชานต์ของเป้าใหม่ (เกณฑ์แล็บ)

## 5. ข้อสังเกตสำหรับบอต
- **เบ็ด**: ใน Java ปัจจุบันเบ็ดเป็นอุปกรณ์ "ควบคุมระยะ" ไม่ใช่อาวุธ → ใช้ตอนเป้าถอยออกนอก 3 บล็อก (หนี/กินแอปเปิล) เพื่อดึงกลับเข้ามา แล้วสลับเป็นดาบทันที
- **หิมะ/ไข่ใช้กับผู้เล่นไม่ได้** → อย่าเสียช่องกระเป๋า
- **หอก** ต้องได้ความเร็วเข้าหากัน ≥4.6 บล็อก/วิ: วิ่งอย่างเดียวได้ 5.6 ถ้าเป้ายืนนิ่งก็ผ่าน แต่ถ้าเป้าถอยหนีด้วยการเดิน 4.3 จะเหลือ 1.3 → charge ไม่มีดาเมจ อาจเป็นเหตุที่หอกแพ้ 0% (สมมติฐาน รอข้อมูลจริง)
- **กระบองเดี่ยวแพ้** (8–25%): cooldown 33 tick ช้ามาก ถ้าไม่ได้ทุบจะเสียเปรียบดาบชัดเจน → ต้องใช้คู่ดาบ + ทุบเฉพาะตอนมีความสูง (ตรงกับข้อมูล jing: กระบองมีแค่ 21% ของการตี แต่ทำ 54% ของดาเมจ)
- **ระเบิด/ลาวา** ใช้ได้ตามกฎ แต่เสี่ยงทำร้ายตัวเองและทำลายพื้น → ควรเป็นโหมดแยกที่ jing อนุญาตก่อน
