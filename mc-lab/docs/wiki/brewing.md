# การต้มยา (Brewing) — Minecraft Java Edition
> W = https://minecraft.wiki/w/ (Brewing, Brewing_Stand, Potion, Potion_of_*, Tipped_Arrow, Lingering_Potion, Splash_Potion) · ข้อมูลจากสรุปผลค้นหา snippet เท่านั้น ไม่ได้เปิดหน้าเต็ม

## brewing-stand · แท่นต้มยาและเชื้อเพลิง
| รายการ | ค่า | แหล่ง |
|---|---|---|
| blaze powder 1 ชิ้น | ต้มได้ 20 รอบ (operation) | W/Brewing_Stand |
| ช่องขวดยา | 3 ช่อง ต้มพร้อมกันได้ → สูงสุด 60 ขวด/ผง 1 ชิ้น | W/Brewing_Stand |
| เวลาต้ม 1 รอบ | 20 วินาที (400 tick) | W/Brewing_Stand |
| ประวัติ | เดิม 30 รอบ ลดเป็น 20 ตั้งแต่ 1.9 (15w43a) | W/Brewing_Stand |
- ผง blaze ได้จาก blaze rod (W/Blaze_Powder) — จำนวนต่อแท่ง [ไม่แน่ใจ]

บอตควร: เติม blaze powder ก่อนเริ่มทุกชุด; เติมขวด 3 ช่องให้เต็มเพื่อคุ้มเชื้อเพลิง; รอ ≥20 วินาที/ขั้น
ตัดสินผล: (เกณฑ์แล็บ) ผ่านถ้าครบ 3 ขวดต่อ 1 รอบ และเชื้อเพลิงลดตามจำนวนรอบที่คาดไว้

## base-chain · ขวดน้ำ → Awkward → ยา
| ขั้น | สูตร | แหล่ง |
|---|---|---|
| Awkward Potion | น้ำขวด + nether wart | [ไม่แน่ใจ] (snippet ไม่ระบุตรง; หน้า W/Brewing) |
| ยาเอฟเฟกต์ | ส่วนผสม + Awkward Potion | W/Brewing |
| ยาที่ใช้ขวดน้ำตรง ๆ | Weakness = fermented spider eye + ขวดน้ำ | W/Potion_of_Weakness |
- ที่มาของขวดน้ำ (เติมจากหม้อต้ม/น้ำ) [ไม่แน่ใจ]

บอตควร: ทำ Awkward เป็นชุดใหญ่แล้วค่อยแตกสูตร ลดรอบเชื้อเพลิง
ตัดสินผล: (เกณฑ์แล็บ) ตรวจชื่อไอเทมผลลัพธ์เป็น Awkward ก่อนเติมส่วนผสมถัดไป

## recipes · สูตรยาแต่ละชนิด (ส่วนผสม + Awkward)
| ยา | ส่วนผสม | แหล่ง |
|---|---|---|
| Swiftness | sugar | W/Potion_of_Swiftness |
| Fire Resistance | magma cream | W/Potion_of_Fire_Resistance |
| Slow Falling | phantom membrane | W/Potion_of_Slow_Falling |
| Turtle Master | turtle shell | W/Potion_of_the_Turtle_Master |
| Night Vision | golden carrot | W/Potion_of_Night_Vision |
| Leaping | rabbit's foot | W/Potion_of_Leaping |
| Water Breathing | pufferfish | W/Potion_of_Water_Breathing |
| Healing | glistering melon slice | W/Potion_of_Healing |
| Poison | spider eye | W/Potion_of_Poison |
| Strength | blaze powder | W/Potion_of_Strength |
| Weakness | fermented spider eye + ขวดน้ำ (ไม่ใช้ Awkward) | W/Potion_of_Weakness |
- Regeneration (ghast tear), Invisibility, Slowness, Harming: [ไม่แน่ใจ] จาก snippet; ดู unverified

บอตควร: เก็บ lookup ตารางนี้เป็น data; ตรวจว่ามีส่วนผสมครบก่อนสั่งต้ม
ตัดสินผล: (เกณฑ์แล็บ) ผ่านถ้าผลตรงชื่อยาในตาราง

## modifiers · redstone / glowstone
| ตัวปรับ | ผล | แหล่ง |
|---|---|---|
| redstone dust | ยืดเวลา (extended) | W/Potion_of_Fire_Resistance, W/Potion_of_Slow_Falling |
| glowstone dust | เพิ่มระดับ (II) ลดเวลา | W/Potion_of_Swiftness, W/Potion_of_Strength |
- Healing II = glowstone + Healing: ฟื้น 8 HP (4 หัวใจ) (W/Potion_of_Healing)
- Healing/Fire Resistance ฯลฯ บางชนิดไม่มีระดับ II [ไม่แน่ใจ] — ตรวจรายตัว

บอตควร: เลือกตามภารกิจ — ต้องการเวลายาว→redstone, ต้องการพลังสูง→glowstone (ห้ามทั้งสองบนยาเดียวกันเกินที่เกมอนุญาต [ไม่แน่ใจ])
ตัดสินผล: (เกณฑ์แล็บ) ผ่านถ้า tooltip ผลลัพธ์แสดงเวลา/ระดับตรงตารางถัดไป

## durations · ระยะเวลายา (ดื่ม, Java)
| ยา | ปกติ | Extended | II |
|---|---|---|---|
| Swiftness | 3:00 | 8:00 | 1:30 (+40%) |
| Fire Resistance | 3:00 | 8:00 | — |
| Strength | 3:00 | 8:00 | 1:30 |
| Slow Falling | 1:30 | 4:00 | — |
| Water Breathing | 3:00 | 8:00 | — |
| Night Vision | 3:00 | 8:00 | — |
| Invisibility | 3:00 | 8:00 | — |
| Regeneration | 0:45 | 1:30 | 0:22 |
| Turtle Master | 0:20 | 0:40 | 0:20 |
แหล่ง: W/Potion_of_Swiftness, _Fire_Resistance, _Strength, _Slow_Falling, _Water_Breathing, _Night_Vision, _Invisibility, _Regeneration, _the_Turtle_Master
- Strength I/II ใน Java: +3 damage ต่อระดับ → II = +6 (W/Potion_of_Strength)
- Turtle Master: Slowness IV + Resistance III (II: Slowness VI + Resistance IV) (W/Potion_of_the_Turtle_Master)

บอตควร: ตั้งตัวจับเวลาเติมยา ก่อนหมด ~10 วินาที; อย่าใช้ Turtle Master เป็นยาเดินปกติ (ช้า)
ตัดสินผล: (เกณฑ์แล็บ) ผ่านถ้าเวลาที่วัดในเกมต่างจากตาราง ≤ 1 วินาที

## corruption · Fermented spider eye
- ทำลายผลยา: Healing/Poison → Harming; Healing II และ Poison extended → Harming extended (W/Fermented_Spider_Eye)
- Harming/Healing: Instant Health ฟื้นสิ่งมีชีวิตทั่วไป แต่ทำดาเมจ undead (W/Instant_Health)
- Weakness ได้จากขวดน้ำ + fermented spider eye (W/Potion_of_Weakness)
- ผล corruption ของ Swiftness→Slowness, Night Vision→Invisibility, Leaping→Slowness: [ไม่แน่ใจ]

บอตควร: ห้ามใช้ยา Harming กับตัวเอง/เพื่อน; undead (zombie/skeleton) ต้องระวังเมื่อโยน Healing
ตัดสินผล: (เกณฑ์แล็บ) ผ่านถ้าไม่เผลอเติม fermented spider eye ในชุดยาตัวเอง

## splash-lingering-arrow · Splash / Lingering / Tipped Arrow
| รูปแบบ | ระยะเวลาเทียบยาดื่ม | แหล่ง |
|---|---|---|
| Splash | เท่ากันใน Java (Legacy Console = 3/4) | W/Splash_Potion, W/Brewing |
| Lingering | 1/4 (เช่น 8:00 → 2:00) | W/Lingering_Potion, W/Brewing |
| Tipped arrow | 1/8 ของยา | W/Tipped_Arrow |
- ส่วนผสมแปลง: gunpowder→splash, dragon's breath→lingering, สูตร tipped arrow: [ไม่แน่ใจ] (snippet ไม่ระบุ)

บอตควร: ใช้ splash สำหรับ debuff/heal ศัตรู-พวกที่อยู่ไกล; tipped arrow ได้เวลาสั้นมาก ใช้เฉพาะ instant (Harming)
ตัดสินผล: (เกณฑ์แล็บ) ผ่านถ้าคำนวณเวลาตามอัตราส่วนข้างต้นตรงกับที่เห็น

## bot-loadout · ยาที่ควรพก
| ยา | ใช้เมื่อ | เวลา (ปกติ→ext) |
|---|---|---|
| Fire Resistance | Nether/ลาวา/ไฟ | 3:00→8:00 |
| Healing (II) | HP ต่ำ PvP | instant; II = 8 HP |
| Strength | PvP/มอนสเตอร์ | 3:00→8:00 |
| Swiftness | หนี/ไล่ | 3:00→8:00 |
| Slow Falling | ตก/End | 1:30→4:00 |
| Water Breathing | ใต้น้ำ/monument | 3:00→8:00 |
| Turtle Master | ตั้งรับ (Resistance III) | 0:20→0:40 |
แหล่ง: ตาราง durations ด้านบน

บอตควร: ลำดับความสำคัญ Fire Resistance > Healing > Strength > Swiftness; ดื่ม Fire Resistance ก่อนเข้า Nether ทุกครั้ง; ใช้ extended (redstone) กับยากันตาย
ตัดสินผล: (เกณฑ์แล็บ) ผ่านถ้าก่อนออกสำรวจมี Fire Resistance ≥1 และ Healing ≥2 (ค่าที่แล็บตั้งเอง ไม่ใช่ค่าเกม)

## unverified · ยังไม่ยืนยัน
- งบค้นหาเต็มก่อนตรวจรอบสุดท้าย; ทุกข้อมูลมาจาก snippet ไม่ใช่หน้าเต็ม
- Awkward = nether wart + ขวดน้ำ, Regeneration/Invisibility/Slowness/Harming/Leaping ระดับ II และเวลา, Poison/Weakness/Slowness/Leaping/Harming เวลา, ผลของ corruption ที่เหลือ
- gunpowder/dragon's breath/สูตร tipped arrow (8 ลูก+lingering), ที่มาและวิธีเติมขวดน้ำ, จำนวน blaze powder ต่อ rod
- ข้อจำกัดใช้ redstone+glowstone พร้อมกัน, ยาที่ไม่มี II
