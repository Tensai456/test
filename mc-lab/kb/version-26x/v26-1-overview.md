# ภาพรวม 26.1

<!-- สร้างอัตโนมัติโดย scripts/split_kb.mjs จาก docs/wiki/version-26x.md · ห้ามแก้มือ -->
> แหล่งข้อมูล: ผลค้นหา minecraft.wiki เท่านั้น (snippet; ดึงหน้าตรงไม่ได้). `W = https://minecraft.wiki/w/`. ตัวเลขใดไม่มีใน snippet ระบุ [ไม่แน่ใจ]. ค้นเมื่อ 2026-10-07.

| การเปลี่ยนแปลง | รายละเอียด | แหล่ง |
|---|---|---|
| Java | ต้อง Java 25 (OpenJDK 25), RAM default 4 GB, GC เป็น ZGC | W/Java_Edition_26.1 |
| โครงสร้างเซฟ | โฟลเดอร์ data บนสุดเก็บเฉพาะข้อมูลร่วมข้ามมิติ; ข้อมูลผู้เล่นย้ายไป players/ (advancements, data, stats) | W/Java_Edition_26.1 |
| game_rules | ย้ายไป data/minecraft/game_rules.dat; มีหน้า World Options + ช่องค้นหา game rule ในเกม | W/Java_Edition_26.1_Snapshot_* |
| ลูกมอบ | ทุก baby mob มีโมเดลเฉพาะ; baby axolotl มี play dead; เสียงลูกใหม่ | W/Java_Edition_26.1 |
| golden dandelion | หยุดการโตของ baby mob เมื่อป้อน (ใช้ไม่ได้กับ undead ลูก, piglin, villager) | W/Java_Edition_26.1 |
| name tag | คราฟต์ได้ (กระดาษ 1 + นักเก็ต 1) | W/Java_Edition_26.1 |
| 26.1.2 | แก้ spectator โจมตีผู้เล่นอื่นได้ | W/Java_Edition_26.1.2 |

- ผลต่อบอต: ตรวจรันด้วย JDK 25; path เซฟ/สถิติผู้เล่นเปลี่ยนที่ (ถ้าบอตอ่าน playerdata/stats จากดิสก์ ต้องแก้เป็น players/data, players/stats). ลูก mob ที่ถูก golden dandelion จะไม่โต — อย่ารอให้โต. ไม่พบการเปลี่ยนสูตรดาเมจ/หิว/วิ่ง/knockback ใน snippet ของ 26.1 [ไม่แน่ใจ].
