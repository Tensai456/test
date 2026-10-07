# แท่นต้มยาและเชื้อเพลิง

<!-- สร้างอัตโนมัติโดย scripts/split_kb.mjs จาก docs/wiki/brewing.md · ห้ามแก้มือ -->
> W = https://minecraft.wiki/w/ (Brewing, Brewing_Stand, Potion, Potion_of_*, Tipped_Arrow, Lingering_Potion, Splash_Potion) · ข้อมูลจากสรุปผลค้นหา snippet เท่านั้น ไม่ได้เปิดหน้าเต็ม

| รายการ | ค่า | แหล่ง |
|---|---|---|
| blaze powder 1 ชิ้น | ต้มได้ 20 รอบ (operation) | W/Brewing_Stand |
| ช่องขวดยา | 3 ช่อง ต้มพร้อมกันได้ → สูงสุด 60 ขวด/ผง 1 ชิ้น | W/Brewing_Stand |
| เวลาต้ม 1 รอบ | 20 วินาที (400 tick) | W/Brewing_Stand |
| ประวัติ | เดิม 30 รอบ ลดเป็น 20 ตั้งแต่ 1.9 (15w43a) | W/Brewing_Stand |
- ผง blaze ได้จาก blaze rod 1 แท่ง → 2 ผง (สูตรคราฟต์ kb/blocks/_recipes.md, data/catalog_26.1/recipes.json)
- Brewing stand คราฟต์: blaze_rod×1 + cobbled_deepslate×3 (kb/blocks/_recipes.md); glass_bottle: glass×3 → 3 ขวด

บอตควร: เติม blaze powder ก่อนเริ่มทุกชุด; เติมขวด 3 ช่องให้เต็มเพื่อคุ้มเชื้อเพลิง; รอ ≥20 วินาที/ขั้น
ตัดสินผล: (เกณฑ์แล็บ) ผ่านถ้าครบ 3 ขวดต่อ 1 รอบ และเชื้อเพลิงลดตามจำนวนรอบที่คาดไว้
