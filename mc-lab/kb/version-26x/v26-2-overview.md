# ภาพรวม 26.2 Chaos Cubed

<!-- สร้างอัตโนมัติโดย scripts/split_kb.mjs จาก docs/wiki/version-26x.md · ห้ามแก้มือ -->
> แหล่งข้อมูล: ผลค้นหา minecraft.wiki เท่านั้น (snippet; ดึงหน้าตรงไม่ได้). `W = https://minecraft.wiki/w/`. ตัวเลขใดไม่มีใน snippet ระบุ [ไม่แน่ใจ]. ค้นเมื่อ 2026-10-07.

| การเปลี่ยนแปลง | รายละเอียด | แหล่ง |
|---|---|---|
| ไบโอมใหม่ | sulfur caves (ใต้ดิน/ในเขา) มีแถบ sulfur และ cinnabar; แทนที่ spider ด้วย cave spider | W/Sulfur_Caves |
| บล็อกใหม่ | ชุดบล็อก sulfur, potent sulfur, cinnabar (stairs/slab/wall/polished/bricks/chiseled) | W/Java_Edition_26.2-snapshot-1 |
| มอบใหม่ | sulfur cube | W/Sulfur_Cube |
| กราฟิก | Vulkan ทดลอง (ตัวเลือก Graphics API; default กลับเป็น OpenGL) | W/Java_Edition_26.2 |
| อื่นๆ | friends list; hitbox/eye height/ตำแหน่งผู้ขี่ของหลาย mob ปรับ (baby hoglin/strider/zoglin ตรง Bedrock) | W/Java_Edition_26.2 |
| tags | sulfur_caves อยู่ใน #is_overworld, mineshaft/ruined portal/trial chambers; sulfur/cinnabar/potent_sulfur อยู่ใน #overworld_carver_replaceables | W/Java_Edition_26.2-snapshot-1 |

- ผลต่อบอต: ต้องมี block id ใหม่ในตารางบล็อก/ขุดเหมือง; ถ้ายังใช้ registry เก่า บล็อกใต้ดินจะเป็น unknown. hitbox ที่เปลี่ยนมีผลต่อ pathfinding/raycast เล็กน้อย.
