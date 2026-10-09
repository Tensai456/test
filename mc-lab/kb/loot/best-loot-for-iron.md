# อันดับโครงสร้างให้เหล็กเร็วสุด [คิดเอง]

<!-- สร้างอัตโนมัติโดย scripts/split_kb.mjs จาก docs/wiki/loot.md · ห้ามแก้มือ -->
> W = https://minecraft.wiki/w/ (Village/Loot, Shipwreck, Buried_Treasure, Mineshaft, Monster_Room, Stronghold, Desert_Pyramid, Jungle_Pyramid, Pillager_Outpost, Woodland_Mansion, Igloo, Ruined_Portal, Nether_Fortress, Bastion_Remnant, End_City, Ancient_City, Trail_Ruins, Swamp_Hut, Warm_Ocean_Ruins, Vault, Ominous_Vault) · ข้อมูลจากสรุปผลค้นหา ไม่ได้เปิดหน้าเต็ม · % = โอกาสที่หีบหนึ่งใบมีของนั้นอย่างน้อย 1 ชุด ตามที่ snippet ระบุ · ไม่มีตัวเลข = [ไม่แน่ใจ] · เฉพาะข้อเท็จจริงใหม่ (รายละเอียดเดิมดู kb/structures/*)

| อันดับ | โครงสร้าง | เหตุผล (ตัวเลขจากวิกิ) | หมายเหตุ [คิดเอง] |
|---|---|---|---|
| 1 | shipwreck หีบ treasure | เหล็ก 97.4% (1-5) + nugget 94.5% + มรกต 73.7% | คาดคร่าวๆ ~2.9 ชิ้น/หีบ (97.4% x กลาง 3) |
| 2 | buried treasure | เหล็ก 99.4% (1-4) + ทอง 88% + cooked fish 75% | ~2.5 ชิ้น/หีบ; ต้องมีแผนที่จาก shipwreck map chest (100%) |
| 3 | bastion treasure | เหล็ก 33.7% (3-9) | ~2.0 ชิ้น/หีบ แต่อันตราย (ต้องเกราะเพชร) ไม่เหมาะ early game |
| 4 | หมู่บ้าน toolsmith/weaponsmith | 41.2%/40.9% (1-5) | ~1.2/หีบ; toolsmith เฉพาะ desert/taiga |
| 5 | หมู่บ้าน armorer | 54.2% (1-3) | ~1.1/หีบ + ขนมปัง 80.6%; ไม่เสี่ยง |
| 6 | jungle pyramid | 37.0% | 2 หีบ ~1.1/หีบ; มีกับดัก |
| 7 | pillager outpost / mineshaft / stronghold | 30.5% / 27.3% / 22.8% | จำนวนต่อกองบางส่วนไม่แน่ใจ [ไม่แน่ใจ] |
| 8 | monster room / nether fortress / desert pyramid / mansion | 18.5% / 17.9% / 17.0% / 13.5% | ไม่คุ้มถ้าต้องการเหล็กอย่างเดียว |

บอตควร: ทีมต้นเกมให้ทำตามลำดับ ล่องเรือหา shipwreck/หมู่บ้านใกล้ก่อน ผสมกับขุดแร่เหล็ก; การคาดค่าเฉลี่ยด้านบนเป็นเลขคิดเอง ไม่ใช่ตัวเลขวิกิ.
ตัดสินผล: เกณฑ์แล็บ — วัดจริงเทียบอันดับนี้ด้วย log เหล็กต่อนาทีเกม; ใช้ขุดแร่แทนถ้าหีบอยู่ไกลเกิน 500 บล็อก (ค่าแล็บตั้งเอง).
