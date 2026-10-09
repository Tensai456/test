# Entry E5: ผิวพื้น/ไฟ/อันตรายอื่น

<!-- สร้างอัตโนมัติโดย scripts/split_kb.mjs จาก docs/playbook/NETHER_END.md › 2. สภาพแวดล้อม Nether · ห้ามแก้มือ -->
URL ย่อ: W = https://minecraft.wiki/w/

| อันตราย | ผล | แหล่ง |
|---|---|---|
| Soul sand | เดินช้าลง (ตัวเลขเปอร์เซ็นต์ [ไม่แน่ใจ]); Soul Speed I-III เร็วขึ้น 40.5/51/61.5% | W/Soul_Speed |
| Soul soil | ไม่ทำให้ mob ช้า | W/Soul_Soil |
| Magma block | 1 HP ไฟทุก 0.5 วินาที แม้ใต้น้ำ | W/Magma_Block |
| Soul fire | ดาเมจมากกว่าไฟปกติ (ค่า [ไม่แน่ใจ]) | W/Soul_Fire |
| Basalt deltas | magma cube spawn สูง, มีลาวาบ่อ | W/Basalt_Deltas |
| ป้อมเนเธอร์ | blaze/wither skeleton เท่านั้น; มีลาวา, nether wart | W/Nether_Fortress |
- ตัดสินผล: ถูก = ไม่ยืนบน magma block เกิน 1 วินาทีโดยไม่มี sneak
- เทสจริง: วางบอทบน magma block ตรวจว่าเดินออกภายใน 1 วินาที
- บอตควร:
  - ก่อนก้าว: อ่านบล็อกใต้เท้า/ปลายทาง ถ้าเป็น magma block ตั้ง path cost สูงหรือห้ามผ่าน; ถ้าจำเป็นต้องข้ามให้ sneak (W/Magma_Block ผ่าน BLOCK_PHYSICS §5)
  - เมื่อ HP ลดทีละ 1 ทุก ~0.5 วิ โดยยืนบน magma/soul fire: ก้าวออกทันทีภายใน 1 วินาที (เกณฑ์ใน E5)
  - soul sand: ใส่ path cost สูง ยกเว้นมี Soul Speed (+40.5/51/61.5% I-III, W/Soul_Speed); soul soil เดินได้ปกติ
  - basalt deltas: มอง magma cube spawn สูง อย่าหยุดพักกลางพื้นที่; เห็นลาวาบ่อให้เว้น 2 บล็อก [คิดเอง]
  - ป้อมเนเธอร์: เข้าเมื่อ HP >= 10 (ยืมจาก M2) และมีบล็อกปิดทางถอย
- ตัดสินผล: ผิดถ้า HP ลด >= 2 จาก magma/soul fire ใน 5 วินาที (เกณฑ์แล็บ [คิดเอง]); ถูกถ้าผ่านโซนโดย HP ไม่ลดจากพื้นเลย
