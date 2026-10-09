# สูตรหลอมที่จำเป็น

<!-- สร้างอัตโนมัติโดย scripts/split_kb.mjs จาก docs/wiki/navigation.md · ห้ามแก้มือ -->
> W = https://minecraft.wiki/w/ ; อ้างอิงรูปแบบ W/Page (เช่น W/Coordinates) · ข้อมูลจากสรุปผลค้นหา wiki เท่านั้น ไม่ได้เปิดหน้าเต็ม

| อินพุต | ผลลัพธ์ | เตาที่ใช้ได้ | XP ต่อชิ้น | แหล่ง |
|---|---|---|---|---|
| raw iron / iron ore | iron ingot | furnace, blast | 0.7 | W/Smelting, W/Raw_Iron |
| raw copper | copper ingot | furnace, blast | 0.7 | W/Smelting |
| raw gold / nether gold ore | gold ingot | furnace, blast | 1 | W/Smelting |
| coal ore | coal | furnace, blast | 0.1 | W/Smelting |
| diamond ore | diamond | furnace, blast | 1 | W/Smelting |
| redstone ore | redstone | furnace, blast | 0.7 | W/Smelting |
| lapis ore | lapis lazuli | furnace, blast | 0.2 | W/Smelting |
| emerald ore | emerald | furnace, blast | 1 | W/Smelting |
| ancient debris | netherite scrap | furnace, blast | 2 | W/Smelting |
| raw beef/chicken/cod/salmon, potato | steak/cooked/baked potato | furnace, smoker, campfire (campfire ไม่ให้ XP) | 0.35 | W/Steak, W/Smelting |
| sand | glass | furnace | 0.1 | W/Smelting |
| cobblestone | stone | furnace | 0.1 | W/Smelting |
| log | charcoal | furnace | 0.15 | W/Charcoal |
| clay ball | brick | furnace | 0.3 | W/Brick |
| cactus | green dye | furnace | 1 | W/Green_Dye |
| kelp | dried kelp | furnace, smoker, campfire | 0.1 | W/Kelp, W/Dried_Kelp |
- เวลา: furnace 200 tick/ชิ้น; blast furnace และ smoker 100 tick/ชิ้น (ใช้เชื้อเพลิงเร็วกว่า 2 เท่า จำนวนชิ้นต่อเชื้อเพลิงเท่าเดิม) (W/Furnace, W/Blast_Furnace, W/Smoker)
- blast furnace: เฉพาะแร่/โลหะดิบ/ancient debris/เครื่องมือเกราะโลหะ; smoker: เฉพาะอาหาร; ทั้งสองไม่ทำ sand/cobblestone/log/clay/cactus (W/Blast_Furnace, W/Smoker)
- ถ่านหิน/ถ่าน 1 ชิ้น = 80 วินาที = 8 ชิ้น; dried kelp block เป็นเชื้อเพลิง 20 ชิ้น (W/Furnace, W/Dried_Kelp_Block)
- XP สะสมในเตา ได้เมื่อผู้เล่นหยิบผลลัพธ์ด้วยมือผ่าน GUI; hopper ดึงออกไม่ให้ XP แต่ตัวนับเก็บไว้ (W/Smelting)
- XP ของอาหารอื่น (porkchop, mutton, rabbit ฯลฯ), ผล raw iron ผ่าน blast ฯลฯ ที่ไม่อยู่ในตาราง: [ไม่แน่ใจ]

บอตควร: เลือกเตาตามชนิดอินพุต (แร่→blast, อาหาร→smoker, อื่น→furnace); เติมเชื้อเพลิงตามสัดส่วน 1 coal : 8 ชิ้น; หยิบผลลัพธ์ผ่าน GUI ถ้าต้องการ XP
ตัดสินผล: (เกณฑ์แล็บ) ผ่าน = จำนวนผลลัพธ์ = จำนวนอินพุตที่ใส่ภายในเวลา (ชิ้น × 200 หรือ 100 tick); ใส่ผิดเตา = ไม่หลอม → รายงาน
