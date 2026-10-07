# ระดับแสง

<!-- สร้างอัตโนมัติโดย scripts/split_kb.mjs จาก docs/wiki/time-weather.md · ห้ามแก้มือ -->
> W = https://minecraft.wiki/w/ (อ้างเป็น W/Page) · ค่าที่ไม่มีแหล่งอ้าง = [ไม่แน่ใจ] · "เกณฑ์แล็บ" = threshold ที่แล็บตั้งเอง ไม่ใช่ค่าจากวิกิ

| หัวข้อ | ค่า | อ้างอิง |
|---|---|---|
| ช่วง | 0–15 | W/Light |
| ไฟฉาย (torch) | 14 | W/Light |
| Glowstone / Sea Lantern / Lantern / Beacon | 15 | W/Light |
| การกระจาย | ลดลง 1 ต่อบล็อก (taxicab), torch ข้างล่าง=13, เฉียง=12 | W/Light |
| สปอว์นมอนสเตอร์ Overworld | sky light ภายใน ≤7 และ block light = 0 | W/Mob_spawning |
| sky light บล็อกเห็นฟ้า | 15; "แสงแดด" = internal ≥12 และ sky 15 | W/Light |
| ระยะวางคบไฟ | ประมาณ 14 บล็อกถึงอันถัดไป (ค่าคุ้มสุดตามวิกิ) | W/Tutorial:Spawn-proofing |

บอตควร: ต้องการกัน mob ให้ block light ≥1 ทุกบล็อกที่ยืนได้ (ปลอดภัยเผื่อ: เว้นคบไฟ ≤ ระยะเกณฑ์แล็บ 7 บล็อก)
ตัดสินผล (เกณฑ์แล็บ): ผ่าน = ทุกพื้นที่ในฐานมี block light ≥1; ล้ม = เจอมอนสเตอร์เกิดในพื้นที่นั้น
