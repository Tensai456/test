# spawnpoint / spreadplayers / worldborder

<!-- สร้างอัตโนมัติโดย scripts/split_kb.mjs จาก docs/wiki/test-commands.md · ห้ามแก้มือ -->
> W = https://minecraft.wiki/w/ · ยืนยันจากผลค้นหา wiki เท่านั้น · รายการค้างดูท้ายไฟล์ · ต้องเป็น OP (permission level 2)

- `spawnpoint [<targets>] [<pos>] [<angle>]` ไม่ใส่ = ผู้รัน/ตำแหน่งที่รัน; level 2 (W/Commands/spawnpoint)
- `spreadplayers <spreadDistance> <maxRange> <respectTeams> <targets>` และรูป `... <maxRange> under <maxHeight> <respectTeams> <targets>`; maxRange = ระยะต่อแกนจากจุดกลาง (พื้นที่เป็นสี่เหลี่ยม) (W/Commands/spreadplayers)
- ตำแหน่งอาร์กิวเมนต์จุดศูนย์กลาง (x z) ในรูป Java: ผลค้นหาพูดถึงแต่ไม่แสดงลำดับ = [ไม่แน่ใจ] (ถ้าจะใช้ ตรวจหน้า wiki; ชุดรีเซ็ตด้านล่างใช้ `/tp` แทน)
- `worldborder center <pos>` (2D, เริ่มต้น 0 0) · `worldborder set <distance> [<time>]` · `worldborder damage amount <v>` (เริ่มต้น 0.2/วินาที/บล็อก) · `worldborder damage buffer <v>` (เริ่มต้น 5 บล็อก) (W/Commands/worldborder)
- ตัวอย่าง: `/worldborder center 0 0`, `/worldborder set 60`
