# Entry D3: Ender Dragon

<!-- สร้างอัตโนมัติโดย scripts/split_kb.mjs จาก docs/playbook/NETHER_END.md › 3. The End · ห้ามแก้มือ -->
URL ย่อ: W = https://minecraft.wiki/w/

- อาการ: มังกรบินวน, HP ฟื้นเมื่อเทียบกับ crystal, ถูกพ่น cloud
- สาเหตุ: end crystal 10 ต้น (2 ต้นมีกรงเหล็ก) ฟื้นให้ 1 HP ทุก 0.5 วินาที ถ้าอยู่ในรัศมี 32 บล็อก
- แก้ (ลำดับ): (1) ทำลาย crystal ทุกต้นบนเสา obsidian (สูง Y 76-103 ทีละ 3) ด้วยธนู; เสากรงเหล็กปีนไปพังกรงหรือยิงทะลุไม่ได้ ต้องตัดกรงก่อน (2) ระวัง crystal ระเบิด power 6 (3) ช่วง perching กลาง (0,0) ตีหัวด้วยดาบ/ลูกธนู (4) ยืนห่าง dragon's breath cloud
- ตัวเลข: HP 200; ลดดาเมจ ~75% ถ้าไม่โดนหัว; breath 3 HP/วินาที; ดรอป XP 12000 ตอนฆ่าครั้งแรก + dragon egg + exit portal + gateway (W/Ender_Dragon, W/End_crystal, W/End_Spike, W/Exit_portal)
- ตัดสินผล: ถูก = crystal ทุกต้นถูกทำลายก่อนเริ่มสู้ใกล้; HP บอทไม่ต่ำกว่า 8 ระหว่าง perch; ผิด = ยืนใน purple cloud > 2 วินาที (6 HP)
- เทสจริง: นับจำนวน crystal ที่ทำลายใน 3 นาทีแรก; ยืนใน cloud ตรวจ HP loss ต่อวินาที
