# 7. Gravity blocks

<!-- สร้างอัตโนมัติโดย scripts/split_kb.mjs จาก docs/playbook/BLOCK_PHYSICS.md · ห้ามแก้มือ -->
> ที่มา: ค้นผ่าน search snippet ของ minecraft.wiki เท่านั้น (ไม่ได้เปิดหน้าเต็ม). `[ไม่แน่ใจ]` = ไม่พบในผลค้น ห้ามถือเป็นตัวเลขจริง.
> หน่วย: "b/s" = บล็อก/วินาที, "tick" = 1/20 วินาที. ค่าความแข็ง/ทนทานบล็อกอยู่ที่ minecraft-data ไม่ซ้ำที่นี่.

| บล็อก | พฤติกรรม | อันตราย | แหล่ง |
|---|---|---|---|
| Sand/Red sand/Gravel/Concrete powder | ตกเมื่อไม่มีฐาน; ลงทับหัว = **หายใจไม่ออก (suffocation) จนกว่าจะขุด/ขยับออก** | ห้ามขุดใต้เสาทราย/กรวดขณะยืนใต้; ขุดขึ้นต้องใส่คบ/บล็อกกัน | [Sand](https://minecraft.wiki/w/Sand), [Gravel](https://minecraft.wiki/w/Gravel), [Falling Block](https://minecraft.wiki/w/Falling_Block) |
| Anvil | ดาเมจ 2 HP × (ระยะตก − 1), เพดาน 40 HP; ระยะตก >1 เสื่อมสภาพ 5% × ระยะ | อย่ายืนใต้ | [Anvil](https://minecraft.wiki/w/Anvil) |
| Pointed dripstone (stalactite ตก) | ดาเมจ 1 HP ต่อบล็อกที่ตกหลังตก 2 บล็อก (ขั้นต่ำนับ 6) ต่อบล็อก; ตัวอย่าง 4 บล็อก = 18 HP; เพดาน 40 | ห้ามยืนใต้หินงอกที่โตแล้ว | [Pointed Dripstone](https://minecraft.wiki/w/Pointed_Dripstone) |
| Scaffolding (distance 7) | กลายเป็น falling block | ตั้งไกลไป พังทั้งชุด | [Scaffolding](https://minecraft.wiki/w/Scaffolding) |
| Dragon Egg | วาร์ปไปอากาศใกล้ (สูงสุด 7 แนวตั้ง, 15 แนวนอน) แล้วตกตามแรงโน้มถ่วง; **ไม่ทำให้หายใจไม่ออกและไม่ทับ** | เก็บไข่: ระวังเคลื่อนที่ | [Dragon Egg](https://minecraft.wiki/w/Dragon_Egg) |
| Falling block / TNT | ดูตาราง §0 | — | [Entity](https://minecraft.wiki/w/Entity) |

บอตควร:
- ก่อนขุดแนวตั้ง: ตรวจบล็อกเหนือหัว 1-3 บล็อกว่าเป็น sand/red sand/gravel/concrete powder/anvil/pointed dripstone (stalactite) หรือไม่ ถ้าใช่ ห้ามขุดใต้ฐานขณะยืนใต้; วางคบ/บล็อกกั้นก่อน (W/Falling_Block)
- ถูกทับ (suffocation): ขุด/ขยับออกทันที ภายใน 1 วินาที (เกณฑ์แล็บ [คิดเอง]) เพราะ HP ลดต่อเนื่อง
- ห้ามยืนใต้ anvil (ดาเมจ 2 HP × (ตก−1) เพดาน 40) และใต้ stalactite ที่โตแล้ว (ตัวอย่างตก 4 บล็อก = 18 HP; W/Pointed_Dripstone)
- scaffolding: ตั้งไม่เกิน 6 บล็อกจากฐาน ไม่ถึง distance 7 (W/Scaffolding)
- dragon egg: ไม่ทับ/ไม่ suffocate แต่วาร์ปได้ (<=7 แนวตั้ง, 15 แนวนอน) ไล่เก็บตามตำแหน่งใหม่
ตัดสินผล: ภายใน 10 วินาทีหลังขุดใต้ gravity block ถ้าไม่มี HP ลด/suffocation และตำแหน่งบอตไม่ถูกบล็อกทับ = ถูก (เกณฑ์แล็บ [คิดเอง]); เห็น falling_block entity เหนือหัว < 3 บล็อก ให้ถอยข้างทันที
