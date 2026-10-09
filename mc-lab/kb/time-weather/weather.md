# ฝน/พายุ

<!-- สร้างอัตโนมัติโดย scripts/split_kb.mjs จาก docs/wiki/time-weather.md · ห้ามแก้มือ -->
> W = https://minecraft.wiki/w/ (อ้างเป็น W/Page) · ค่าที่ไม่มีแหล่งอ้าง = [ไม่แน่ใจ] · "เกณฑ์แล็บ" = threshold ที่แล็บตั้งเอง ไม่ใช่ค่าจากวิกิ

| หัวข้อ | ค่า | อ้างอิง |
|---|---|---|
| ฝน เปิด | 12000–24000 tick | W/Weather |
| ฝน ปิด | 12000–180000 tick | W/Weather |
| ฟ้าผ่า-พายุ เปิด | 3600–15600 tick | W/Weather |
| พายุ ปิด | 12000–180000 tick | W/Weather |
| `/weather clear` | timer clear ล็อก flag ฝน/พายุเป็นปิด | W/Weather |
| ฝนดับไฟ | block tick มีโอกาส 20–65% ตามอายุไฟ (20% + 3%/age); ไม่ดับไฟบน netherrack | W/Weather |
| แสงช่วงฝน | ลดเหลือ 12 ตอนเที่ยง | W/Light |

บอตควร: อ่านสถานะ isRaining/thunderState จาก bot.isRaining/ข้อมูลเกม; ถ้าฝนตกอย่าคาดว่ามอนสเตอร์ไหม้
ตัดสินผล (เกณฑ์แล็บ): ผ่าน = ตรวจจับฝน/พายุถูกต้องเทียบ `/weather` ที่สั่ง
