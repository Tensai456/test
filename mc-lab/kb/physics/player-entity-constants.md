# 0. ค่าพื้นฐานผู้เล่น/เอนทิตี

<!-- สร้างอัตโนมัติโดย scripts/split_kb.mjs จาก docs/playbook/BLOCK_PHYSICS.md · ห้ามแก้มือ -->
> ที่มา: ค้นผ่าน search snippet ของ minecraft.wiki เท่านั้น (ไม่ได้เปิดหน้าเต็ม). `[ไม่แน่ใจ]` = ไม่พบในผลค้น ห้ามถือเป็นตัวเลขจริง.
> หน่วย: "b/s" = บล็อก/วินาที, "tick" = 1/20 วินาที. ค่าความแข็ง/ทนทานบล็อกอยู่ที่ minecraft-data ไม่ซ้ำที่นี่.

| รายการ | ค่า | แหล่ง |
|---|---|---|
| Hitbox ยืน | 0.6 กว้าง × 1.8 สูง, ตา 1.62 | [Hitbox](https://minecraft.wiki/w/Hitbox) |
| Hitbox ย่อ (sneak) | 0.6 × 1.5, ตา 1.27 | [Hitbox](https://minecraft.wiki/w/Hitbox), [Sneaking](https://minecraft.wiki/w/Sneaking) |
| Hitbox ว่าย/คลาน/ร่อน | 0.6 × 0.6, ตา 0.4 | [Hitbox](https://minecraft.wiki/w/Hitbox) |
| Step height (ก้าวขึ้นโดยไม่กระโดด) | 0.6 บล็อก | [Attribute](https://minecraft.wiki/w/Attribute) |
| ความสูงกระโดดปกติ | ~1.2522 บล็อก (Jump Boost I = 1.8361, II = 2.5168) | [Fence](https://minecraft.wiki/w/Fence) (ผลค้น "fence collision") |
| เดิน / วิ่ง / ย่อ | 4.317 / 5.612 / 1.295 b/s | [Walking](https://minecraft.wiki/w/Walking), [Sprinting](https://minecraft.wiki/w/Sprinting) |
| ว่ายน้ำผิวน้ำนิ่ง | 2.20 b/s; ใต้น้ำตามกระแส 1.81; ทวนกระแส 0.39 | [Swimming](https://minecraft.wiki/w/Swimming) |
| Sprint-swim | ~3.918 b/s (Depth Strider III = 5.305) | [Swimming](https://minecraft.wiki/w/Swimming) |

### ค่าคงที่ฟิสิกส์ต่อ tick (ผู้เล่น/มอบ/ไอเทม/โพรเจกไทล์)

| เอนทิตี | แรงโน้มถ่วง (ต่อ tick) | drag | แหล่ง |
|---|---|---|---|
| ผู้เล่น/living | -0.08 | แนวตั้ง 0.98, แนวนอน 0.91 (× ค่า friction บล็อก) | [Entity](https://minecraft.wiki/w/Entity) |
| Falling block, TNT | -0.04 | แนวตั้ง 0.98 | [Entity](https://minecraft.wiki/w/Entity) |
| ไอเทม (dropped) | -0.04 | 0.98 ทั้งแนวตั้ง/แนวนอน | [Entity](https://minecraft.wiki/w/Entity) |
| ลูกศร, trident | -0.05 | แนวตั้ง 0.99 | [Entity](https://minecraft.wiki/w/Entity) |
| Falling block hitbox | 0.98 × 0.98 | — | [Falling Block](https://minecraft.wiki/w/Falling_Block) |
| เรือ (boat) | [ไม่แน่ใจ] | — | — |

บอตควร: ใช้ -0.08 / 0.98 / 0.91 ใน physics ของ pathfinder (mineflayer ใช้ค่านี้อยู่แล้ว); ห้ามคาดว่าไอเทมตกเร็วเท่าผู้เล่น.
