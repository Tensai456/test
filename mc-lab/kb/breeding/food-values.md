# ค่า hunger/saturation ของผลผลิต

<!-- สร้างอัตโนมัติโดย scripts/split_kb.mjs จาก docs/wiki/breeding.md · ห้ามแก้มือ -->
> W = https://minecraft.wiki/w/ (Breeding, Tutorial:Animal_farming, Tutorial:Egg_farming, Tutorial:Hoglin_farming, Tutorial:Goat_farming, Golden_Dandelion, Baby, Looting, Food, Mooshroom, Suspicious_Stew, Nautilus, Happy_Ghast, Camel, Horse, Hoglin, Strider, Panda) · ข้อมูลจากสรุปผลค้นหา ไม่ได้เปิดหน้าเต็ม · เสริมจาก kb/animals (ไม่ซ้ำ: คูลดาวน์/โต 20 นาที/ลด 10%/รั้ว/อาหารผสมพื้นฐานมีแล้ว)

| ไอเท็ม | hunger | saturation | แหล่ง |
|---|---|---|---|
| Steak (วัว/mooshroom สุก) | 8 | 12.8 | W/Steak |
| Cooked Porkchop (หมู/hoglin สุก) | 8 | 12.8 | W/Cooked_Porkchop |
| Cooked Mutton | 6 | 9.6 | W/Cooked_Mutton |
| Cooked Chicken | 6 | 7.2 | W/Cooked_Chicken |
| Cooked Rabbit | 5 | 6 | W/Cooked_Rabbit |
| Cooked Salmon | 6 | 9.6 | W/Cooked_Salmon |
| Rabbit Stew | 10 | [ไม่แน่ใจ] sat (kb/blocks/_foods = 12) | W/Rabbit_Stew |
| Mushroom Stew / Suspicious Stew / Beetroot Soup | 6 | 7.2 | W/Mushroom_Stew, W/Suspicious_Stew, W/Beetroot_Soup |
| Raw Beef | 3 | 1.8 | W/Raw_Beef |
| Raw Chicken | 2 | 1.2 (30% ติด Hunger 30 วิ) | W/Raw_Chicken |
| Raw Mutton | 2 | 1.2 | W/Raw_Mutton |
| Raw Porkchop | 3 | snippet บอก 0.6 แต่ตาราง lab = 1.8 → [ไม่แน่ใจ] | W/Raw_Porkchop |
| เวลากิน | 32 tick (1.6 วิ), stack 64; Suspicious Stew กินได้แม้หิวเต็ม | W/Food, W/Suspicious_Stew |

บอตควร: ย่างก่อนกิน (เนื้อสุกให้ hunger มากกว่าดิบ ~2.7 เท่าสำหรับ steak/porkchop); กิน stew แล้วทิ้งชามไว้ใช้ต่อ (ชามไม่หายตาม W/Beetroot_Soup).
ตัดสินผล: เกณฑ์แล็บ — จัดอันดับอาหารด้วย hunger ต่อชิ้น แล้ว saturation ต่อชิ้น.
