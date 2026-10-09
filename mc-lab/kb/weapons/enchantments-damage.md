# 4. เอนชานต์ที่มีผลต่อดาเมจ

<!-- สร้างอัตโนมัติโดย scripts/split_kb.mjs จาก docs/WEAPON_CATALOG.md · ห้ามแก้มือ -->
> แหล่ง: minecraft.wiki ผ่าน WebSearch (ข้อความย่อ ไม่ใช่ทั้งหน้า) · ยืนยันระดับเอกสาร · โค้ดตัวเลขอยู่ `lib/pvp/weapons.mjs`
> HP = ครึ่งหัวใจ · ดาเมจ = ก่อนหักเกราะ · cooldown (tick) = 20 ÷ attack speed

| เอนชานต์ | ผล | แหล่ง |
|---|---|---|
| Sharpness | +0.5×เลเวล + 0.5 (Java) | [Enchantment](https://minecraft.wiki/w/Enchantment) |
| Smite / Bane | +2.5/เลเวล เฉพาะอันเดด / แมลง (ไม่มีผลกับผู้เล่น) | [Enchantment](https://minecraft.wiki/w/Enchantment) |
| Fire Aspect | ไฟ 4 วิ/เลเวล → I = 3, II = 7 ดาเมจรวม | [Fire Aspect](https://minecraft.wiki/w/Fire_Aspect) |
| Knockback | +2.586 บล็อก/เลเวล | [Knockback](https://minecraft.wiki/w/Knockback) |
| Density (กระบอง) | +0.5/บล็อกที่ตก/เลเวล | [Mace](https://minecraft.wiki/w/Mace) |
| Breach (กระบอง) | ลดผลเกราะและ toughness 15%/เลเวล | [Breach](https://minecraft.wiki/w/Breach) |
| Wind Burst (กระบอง) | ทุบโดนแล้วเด้งขึ้น 8 บล็อก/เลเวล → ทุบซ้ำได้ | [Mace](https://minecraft.wiki/w/Mace) |
| Impaling (ตรีศูล) | +2.5/เลเวล | [Impaling](https://minecraft.wiki/w/Impaling) |
| Lunge (หอก) | jab แล้วพุ่งไปข้างหน้า · ต้องมองระนาบพอดีจึงไปได้ไกลสุด | [Spear](https://minecraft.wiki/w/Spear) |

**บอตควร:**
- ก่อนสู้ ตรวจเอนชานต์ของดาบ/ของเป้าที่เห็นในมือ แล้วประเมินดาเมจ: Sharpness = +0.5×เลเวล+0.5 ([Enchantment](https://minecraft.wiki/w/Enchantment))
- Fire Aspect: ตีครั้งเดียวแล้วถอยให้ไฟทำงานได้ (I=3, II=7 ดาเมจรวม, [Fire Aspect](https://minecraft.wiki/w/Fire_Aspect)); ไม่ใช้ตอนยืนบนของไหม้ได้/ในป่าไม้ [คิดเอง]
- ถูกเป้า Knockback → ยืนห่างขอบหน้าผา/ลาวา >3 บล็อก (Knockback ≈ 2.586 บล็อก/เลเวล, [Knockback](https://minecraft.wiki/w/Knockback))
- เป้าใช้ Breach (กระบอง) → เกราะลดผลน้อยลง 15%/เลเวล → HP ต่ำให้เลี่ยงประชิด ([Breach](https://minecraft.wiki/w/Breach))
- เป้าใช้ Wind Burst/Density → หลบจากใต้เป้าที่อยู่สูง (ถอยแนวนอน ≥3 บล็อก) [คิดเอง]

**ตัดสินผล:** ภายใน 15 วิแรกของการปะทะ เทียบดาเมจที่ได้/โดนจริงกับที่ประเมิน; คลาดเกิน 30% → ปรับการประเมินเอนชานต์ของเป้าใหม่ (เกณฑ์แล็บ)
