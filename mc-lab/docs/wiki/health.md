# เลือดและความเสียหาย (Health & Damage) — Minecraft Java

> W = https://minecraft.wiki/w/ · ข้อมูลจากสรุปผลค้นหาวิกิ (ไม่ได้เปิดหน้าเต็ม) · เกณฑ์ที่ติดป้าย "เกณฑ์แล็บ" คือค่าที่แล็บตั้งเอง ไม่ใช่ค่าของเกม · ค่าที่ไม่พบ = [ไม่แน่ใจ]

## health · เลือดและการฟื้นเลือดธรรมชาติ

| หัวข้อ | ค่า | แหล่ง |
|---|---|---|
| เลือดสูงสุดปกติ | 20 แต้ม (10 หัวใจ, ครึ่งหัวใจ = 1 แต้ม) | W/Health |
| ฟื้นปกติ | หิว ≥18 หรือ saturation ≠ 0 → ฟื้นทุก 4 วินาที | W/Health |
| หิว ≤17 | หยุดฟื้นเลือดธรรมชาติ | W/Health |
| Saturation boost (หิวเต็ม) | ใช้ saturation 1.5 ฟื้น 1 HP ทุก 0.5 วินาที (10 tick) | W/Food_mechanics |
| Exhaustion | ถึง 4.0 → รีเซ็ต, ลด saturation 1 (ถ้า 0 ลดหิว 1) | W/Food_mechanics |

[ไม่แน่ใจ] ค่าหิวเต็มที่แน่นอนสำหรับ fast regen (20) และตัวเลข tick ของ slow regen เกินจากที่ snippet ยืนยัน.

บอตควร:
- รักษาหิว ≥18 ก่อนสู้/หลังสู้ เพื่อฟื้นเลือด; กินเมื่อหิว ≤17
- อย่ารอฟื้นกลางศึกถ้าหิวต่ำ

ตัดสินผล: หลังจบการต่อสู้ ถ้าหิว ≥18 แล้วเลือดไม่เพิ่มใน 4 วินาที (80 tick) = ผิดปกติ/บอตอ่านค่าผิด (เกณฑ์แล็บ: หน้าต่างตรวจ 10 วินาที).

## healing · ไอเท็มฟื้นเลือด

| ไอเท็ม | ผล (Java) | แหล่ง |
|---|---|---|
| แอปเปิลทอง | Regeneration II 5 วิ (ฟื้น 4 HP) + Absorption 2:00 | W/Golden_Apple |
| แอปเปิลทองมนตร์ | Absorption IV 2 นาที (+16 HP), Regeneration II 20 วิ, Fire Res 5 นาที, Resistance I 5 นาที; กิน 32 tick | W/Enchanted_Golden_Apple |
| Suspicious Stew (ดอก oxeye daisy) | Regeneration 7 วิ | W/Suspicious_Stew |
| Potion Healing I | ฟื้นทันที 4 HP | W/Instant_Health |
| Potion Regeneration I | 45 วิ, 1 HP ทุก 50 tick (รวม 18 HP) | W/Potion_of_Regeneration |
| Potion Regeneration II | 22 วิ, 1 HP ทุก 25 tick | W/Potion_of_Regeneration |

[ไม่แน่ใจ] ค่า Healing II (สูตรวิกิ: 2×2^level) และ stew ดอกอื่น.

บอตควร:
- ใช้ potion/แอปเปิลทองก่อนเลือดต่ำวิกฤต (เกณฑ์แล็บ: ≤8 HP)
- แอปเปิลทองมนตร์ใช้ตอนเสี่ยงสูง (บอส/PvP) เพราะมี Resistance+Absorption

ตัดสินผล: หลังกิน/ดื่ม เลือด+Absorption ต้องเพิ่มภายใน 2 วินาที (เกณฑ์แล็บ); ใช้แล้วเลือดเต็มอยู่ = สิ้นเปลือง.

## absorption · Absorption

| หัวข้อ | ค่า | แหล่ง |
|---|---|---|
| ต่อเลเวล | +4 HP (หัวใจเหลือง) | W/Absorption |
| แอปเปิลทอง | Absorption I 2:00 | W/Golden_Apple |
| แอปเปิลทองมนตร์ | Absorption IV 2:00 | W/Enchanted_Golden_Apple |
| โทเท็ม | Absorption II 5 วิ | W/Totem_of_Undying |

บอตควร: ถือว่า Absorption ถูกหักก่อนเลือดจริง; อย่านับรวมเป็นเลือดถาวร (หมดตามเวลา).
ตัดสินผล: เมื่อรับดาเมจขณะมี Absorption เลือดปกติต้องคงเดิมจนกว่า Absorption หมด (เกณฑ์แล็บ).

## totem · โทเท็มแห่งความเป็นอมตะ

| ผลเมื่อทำงาน | ค่า | แหล่ง |
|---|---|---|
| เลือด | ฟื้นเหลือ 1 HP, ล้างเอฟเฟกต์ทั้งหมดก่อน | W/Totem_of_Undying |
| Regeneration II | 45 วิ | W/Totem_of_Undying |
| Absorption II | 5 วิ | W/Totem_of_Undying |
| Fire Resistance I | 40 วิ | W/Totem_of_Undying |

[ไม่แน่ใจ] เงื่อนไขที่โทเท็มใช้ไม่ได้ (เช่น /kill, void) ไม่ได้ยืนยันจาก snippet.

บอตควร:
- ถือโทเท็มที่ offhand (หรือมือหลัก) ในสถานการณ์เสี่ยง
- หลังโทเท็มทำงาน ให้ถอยและเติมเลือด ไม่สู้ต่อทันที

ตัดสินผล: ถ้าตายทั้งที่ถือโทเท็ม = ผิดเงื่อนไข/ตรวจสอบสาเหตุ; หลังทำงานภายใน 5 วินาทีบอตควรไม่เข้าปะทะซ้ำ (เกณฑ์แล็บ).

## damage-types · ชนิดความเสียหายและสิ่งที่ลดได้

| ชนิด | เกราะ | Protection | อื่น ๆ | แหล่ง |
|---|---|---|---|---|
| Starvation | ไม่ลด | ไม่ลด | Resistance ไม่ลด | W/Damage, W/Resistance |
| Void | ไม่ลด | ไม่ลด | ~4 HP ต่อ 0.5 วิ | W/Damage, W/Void |
| Magic | ข้ามเกราะ | ลดได้ | Resistance ลดได้ | W/Damage |
| Fall | ไม่ลด | ลดได้ | Feather Falling ลดได้ | W/Damage |
| ทั่วไป (ตี/ลูกธนู ฯลฯ) | ลด | ลด | Resistance ลด | W/Armor |

- Fall: ปลอดภัย 3 บล็อก, เกินนั้น ~1 HP ต่อบล็อก (W/Damage)
- [ไม่แน่ใจ] ค่าไฟ/ลาวา/จมน้ำ/ระเบิด รายตัว ไม่ได้ยืนยัน

บอตควร: เฝ้าระวังความสูงตก >3 บล็อก; หลีกเลี่ยงตก void (เกราะไม่ช่วย).
ตัดสินผล: ตกเกิน 3 บล็อกแล้วเลือดลด = ถูกต้อง; ตกลง void ถือว่าล้มเหลว (เกณฑ์แล็บ: ตายภายใน 5 วินาที).

## armor · เกราะและ Toughness

| หัวข้อ | ค่า | แหล่ง |
|---|---|---|
| สูตรลด | ลด% = min(20, max(A/5, A − 4D/min(T+8, 20)))/25 | W/Armor |
| ลดสูงสุด | 80% (A=20) | W/Armor |
| ต่ำสุด/แต้ม | 0.8% ต่อแต้มเกราะ | W/Armor |
| Toughness | ยิ่งสูง ดาเมจแรงยิ่งไม่ทำให้เกราะด้อยลง | W/Armor |

A=armor points, D=ดาเมจก่อนลด, T=toughness.

บอตควร: ใส่เกราะครบชุดก่อนออกสำรวจ; เลือกชุดที่แต้ม/toughness สูงสุดที่มี.
ตัดสินผล: เทียบดาเมจที่รับจริงกับสูตร ยอมคลาดเคลื่อน ±1 HP (เกณฑ์แล็บ).

## enchant · มนตร์ลดดาเมจ

| มนตร์ | EPF ต่อเลเวล | ลดต่อเลเวล | แหล่ง |
|---|---|---|---|
| Protection | 1 (สรุปจาก 4%/เลเวล) | 4% (สูงสุด 16% ที่ IV ต่อชิ้น) | W/Protection |
| Fire Protection | 2 (I–IV = 2,4,6,8) | EPF/25 | W/Fire_Protection |
| Blast Protection | 2 (2,4,6,8); ลด knockback ระเบิด 15%×เลเวล | EPF/25 | W/Blast_Protection |
| Projectile Protection | 2 (2,4,6,8) | 8%/เลเวล | W/Projectile_Protection |
| Feather Falling | 3 (3,6,9,12) | 12%/เลเวล (IV = 48%) | W/Feather_Falling |

- EPF รวมทุกชิ้นบวกกัน, เพดาน 20, ลด = EPF/25 → สูงสุด 80% (W/Protection)
- Protection ไม่ลด hunger, sonic boom ของ warden, void, /kill (W/Protection)
- สี่มนตร์ป้องกัน (Protection/Fire/Blast/Projectile) ใช้ร่วมกันไม่ได้ (W/Protection)

บอตควร: เลือกมนตร์ตามภัย (ระเบิด→Blast, ธนู→Projectile, ตก→Feather Falling).
ตัดสินผล: ชุดที่ EPF ตรงภัยต้องลดดาเมจตามตาราง; ไม่ตรงภัย = เลือกผิด.

## resistance · เอฟเฟกต์ Resistance

| หัวข้อ | ค่า | แหล่ง |
|---|---|---|
| ลดดาเมจ | 20%×เลเวล | W/Resistance |
| ไม่ลด | starvation, void, /kill | W/Resistance |

บอตควร: ใช้แอปเปิลทองมนตร์/potion ก่อนปะทะหนัก.
ตัดสินผล: ขณะมี Resistance I ดาเมจที่รับควรต่ำกว่าปกติ ~20% (เกณฑ์แล็บ: ยอมคลาด ±1 HP).

## difficulty · ระดับความยาก

| หัวข้อ | ค่า | แหล่ง |
|---|---|---|
| ดาเมจม็อบ Normal | D (ฐาน) | W/Difficulty |
| Hard | 1.5×D | W/Difficulty |
| Easy | min(D, 0.5×D+1) | W/Difficulty |
| Starvation Easy | หยุดที่เลือด ≤10 HP | W/Damage |
| Starvation Normal | หยุดที่ 1 HP | W/Damage |
| Starvation Hard/Hardcore | ตายได้ | W/Damage |
| Starvation อัตรา | 1 HP ทุก 4 วิ (80 tick) เมื่อหิว 0 | W/Food_mechanics |
| Regional difficulty | 0.00–6.75; inhabited time คิดสูงสุด 50 ชม. | W/Difficulty |
| Clamped regional | 0–1; Easy = 0, Hard ≥0.125 | W/Difficulty |

บอตควร: ตรวจ /difficulty ก่อนวางแผน; Hard เผื่อเลือด 1.5 เท่า; อย่าฝากชีวิตกับ starvation limit.
ตัดสินผล: เทียบดาเมจม็อบที่รับกับสูตรตามระดับ (เกณฑ์แล็บ: ±1 HP).

## invuln · ช่วงอมตะหลังโดนดาเมจ

| หัวข้อ | ค่า | แหล่ง |
|---|---|---|
| ระยะ | 10 tick (0.5 วิ) | W/Damage |
| ดาเมจ ≤ ครั้งแรก | ถูกเมิน | W/Damage |
| ดาเมจ > ครั้งแรก | ถูกหักเฉพาะส่วนต่าง, ไม่รีเซ็ตตัวจับเวลา | W/Damage |

บอตควร: อย่าตีรัวภายใน 10 tick (เสียแรงเปล่า); สลับอาวุธแรงกว่าเพื่อทำส่วนต่างได้.
ตัดสินผล: การโจมตีซ้ำภายใน 10 tick ที่ไม่เพิ่มดาเมจ = ไม่มีผล (เกณฑ์แล็บ: นับ hit ที่ห่าง <0.5 วิ เป็นสิ้นเปลือง).

## death · ความตายและเกิดใหม่

| หัวข้อ | ค่า | แหล่ง |
|---|---|---|
| ไอเท็ม | ตกกระจายที่จุดตาย (ยกเว้น Curse of Vanishing) ถ้า keep_inventory=false | W/Death |
| XP ที่ดรอป | เลเวลล่าสุด×7 สูงสุด 100 | W/Death |
| เกิดใหม่ | จุดเกิด (เตียง/Respawn Anchor) หรือจุดเกิดโลก | W/Player |
| Respawn Anchor | เกิดข้างแท่น ลด 1 charge | W/Respawn_Anchor |
| Hardcore | ตายแล้วเข้า spectator ถาวร | W/Tutorial:Hardcore_mode |
| immediate_respawn | เกิดใหม่ทันทีไม่มีหน้าจอตาย | W/Death |

[ไม่แน่ใจ] เวลาที่ไอเท็มที่ดรอปหายเอง (ไม่อยู่ใน snippet).

บอตควร:
- หลังเกิดใหม่ บันทึกพิกัดตายแล้วกลับไปเก็บของ
- ตั้งเตียงใกล้ฐานก่อนเสี่ยง

ตัดสินผล: หลังตาย บอตต้องเกิดใหม่และรายงานพิกัดตายภายใน 10 วินาที (เกณฑ์แล็บ); ใน hardcore ถือว่าจบการทดลอง.

## unverified · ยังไม่ยืนยัน

- ค่า Healing II, ผล stew ของดอกไม้ชนิดอื่นนอก oxeye daisy
- สูตรเลือดหิวสำหรับ slow regen (tick แน่นอนเมื่อหิว 18–19) ไม่อยู่ใน snippet
- ดาเมจไฟ/ลาวา/จมน้ำ/ระเบิด/แคคตัส รายตัว
- EPF ของ Protection = 1 ต่อเลเวล: สรุปจาก 4%/เลเวลของ W/Protection (EPF/25), ไม่ได้อ่านตารางตรง
- ข้อยกเว้นของโทเท็ม, เวลาไอเท็มดรอปหาย, ค่าเลือดฐานของ regional difficulty ต่อดาเมจม็อบ
- ทุกค่าอ้างจากสรุปผลค้นหา ไม่ได้เปิดหน้าวิกิเต็ม ควรตรวจซ้ำก่อนใช้เป็นเกณฑ์ตัดสิน
