# Entry E4: นอนเตียง / respawn anchor ผิดมิติ

<!-- สร้างอัตโนมัติโดย scripts/split_kb.mjs จาก docs/playbook/NETHER_END.md › 2. สภาพแวดล้อม Nether · ห้ามแก้มือ -->
URL ย่อ: W = https://minecraft.wiki/w/

- อาการ: ระเบิดเมื่อกด use บนเตียงใน Nether/End
- สาเหตุ: เตียงระเบิดนอก Overworld; respawn anchor ระเบิดใน Overworld/End
- แก้: ห้ามบอทใช้เตียงใน Nether/End; ใช้ respawn anchor เฉพาะ Nether
- ตัวเลข: power 5 (TNT 4, end crystal 6) (W/Bed, W/Respawn_Anchor)
- ตัดสินผล: ผิดทุกครั้งที่ interact bed ใน Nether/End (window 0 วินาที)
- เทสจริง: unit test: guard ปฏิเสธคำสั่ง sleep เมื่อ dimension != overworld
