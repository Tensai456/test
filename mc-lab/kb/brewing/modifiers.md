# redstone / glowstone

<!-- สร้างอัตโนมัติโดย scripts/split_kb.mjs จาก docs/wiki/brewing.md · ห้ามแก้มือ -->
> W = https://minecraft.wiki/w/ (Brewing, Brewing_Stand, Potion, Potion_of_*, Tipped_Arrow, Lingering_Potion, Splash_Potion) · ข้อมูลจากสรุปผลค้นหา snippet เท่านั้น ไม่ได้เปิดหน้าเต็ม

| ตัวปรับ | ผล | แหล่ง |
|---|---|---|
| redstone dust | ยืดเวลา (extended) | W/Potion_of_Fire_Resistance, W/Potion_of_Slow_Falling |
| glowstone dust | เพิ่มระดับ (II) ลดเวลา | W/Potion_of_Swiftness, W/Potion_of_Strength |
- Healing II = glowstone + Healing: ฟื้น 8 HP (4 หัวใจ) (W/Potion_of_Healing)
- ไม่มีระดับ II: Night Vision, Invisibility, Fire Resistance, Water Breathing, Weakness (W/Potion); Healing ไม่มี extended เพราะเป็น instant (W/Potion)
- redstone กับ glowstone ใช้พร้อมกันบนยาเดียวไม่ได้ (extended กับ II เป็นของคู่ที่ไม่ใช้ร่วมกัน) (W/Potion)

บอตควร: เลือกตามภารกิจ — ต้องการเวลายาว→redstone, ต้องการพลังสูง→glowstone (ห้ามทั้งสองบนยาเดียว)
ตัดสินผล: (เกณฑ์แล็บ) ผ่านถ้า tooltip ผลลัพธ์แสดงเวลา/ระดับตรงตารางถัดไป
