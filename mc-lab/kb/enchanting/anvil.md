# ทั่ง การรวม และ Too Expensive

<!-- สร้างอัตโนมัติโดย scripts/split_kb.mjs จาก docs/wiki/enchanting.md · ห้ามแก้มือ -->
> W = https://minecraft.wiki/w/ (เช่น W/Enchanting_table_mechanics = https://minecraft.wiki/w/Enchanting_table_mechanics) · ค้นผ่าน snippet เท่านั้น ไม่ได้เปิดหน้าเต็ม · เกณฑ์แล็บ = ค่าที่แล็บตั้งเอง ไม่ใช่ค่าวานิลลา

| ข้อเท็จจริง | ค่า | แหล่ง |
|---|---|---|
| prior work penalty | เพิ่มทุกการใช้ทั่ง (ยกเว้นเปลี่ยนชื่อ) โตประมาณสองเท่า; เพิ่มทีละ 2n+1 (n=ค่าสูงสุดของสองชิ้น) | W/Anvil_mechanics |
| ขีดจำกัดโหมด Survival | ทำได้เมื่อ ≤39 เลเวล; เกินแล้ว "Too Expensive!" (เท่ากับ 40 ขึ้นไปถูกปฏิเสธ) | W/Anvil_mechanics |
| ซ่อมด้วยวัสดุ | 1 เลเวล/หน่วย, หน่วยละ 25% ความทนทาน | W/Anvil_mechanics |
| รวมสองชิ้น ซ่อม | บวกความทนทานชิ้นสังเวย + โบนัส 12%; ค่าซ่อม 2 เลเวล | W/Anvil_mechanics |
| ค่าเสริมพลัง (Java) | เลเวลสุดท้ายของ enchant × ตัวคูณ (ตัวคูณแยก "จากไอเท็ม/จากหนังสือ"; Bedrock ใช้ผลต่างเลเวล) | W/Anvil_mechanics |
| ตัวคูณ (ไอเท็ม/หนังสือ) ที่ยืนยัน | Protection, Sharpness, Efficiency 1/1 · Unbreaking 2/1 · Mending, Fortune, Looting 4/2 · Thorns, Silk Touch, Infinity 8/4 | W/Anvil_mechanics (snippet) |
| ตัวคูณ enchant อื่น | [ไม่แน่ใจ] ตารางเต็มไม่ได้อยู่ใน snippet | - |
| ค่ารวม | prior work ของทั้งสองชิ้น + ค่าเปลี่ยนชื่อ (1) + ค่าซ่อม (2) + ค่า enchant | W/Anvil_mechanics |
| เปลี่ยนชื่อ | 1 เลเวล | W/Anvil_mechanics |

บอตควร: รวมหนังสือที่ penalty เท่ากันก่อน (ทรี) แล้วค่อยใส่ไอเท็ม; ใส่ของแพงๆ เช่น Mending เป็นขั้นแรกๆ; ล้าง penalty ด้วย grindstone/ซ่อมในโต๊ะคราฟต์ถ้าจำเป็น
ตัดสินผล: ค่าคำนวณ ≥40 → ยกเลิกลำดับนั้น เปลี่ยนลำดับ; เกณฑ์แล็บ: เตือนเมื่อ ≥35 (ตั้งเอง)
