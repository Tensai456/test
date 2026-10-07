# DEEP_FUZZ — รอบ 1 (สุ่มเหตุการณ์ละ 200,000 สถานะ)

> `node scripts/deep_fuzz.mjs [N] [event...]` · seed คงที่ (ทำซ้ำได้) · ช่องโหว่จัดกลุ่ม "กฎที่ผิด | สิ่งที่บอตเลือก" · ยืนยันระดับจำลอง

## lava+ranged — ✅ ไม่พบช่องโหว่


การตัดสินใจหลัก: in-lava 100.0%

## lava+warden — ✅ ไม่พบช่องโหว่


การตัดสินใจหลัก: in-lava 100.0%

## lava+mixedCrowd — ✅ ไม่พบช่องโหว่


การตัดสินใจหลัก: in-lava 100.0%

## lava+neutral — ✅ ไม่พบช่องโหว่


การตัดสินใจหลัก: in-lava 100.0%

## lava+biomes — ✅ ไม่พบช่องโหว่


การตัดสินใจหลัก: in-lava 100.0%

## lava+traps — ✅ ไม่พบช่องโหว่


การตัดสินใจหลัก: in-lava 100.0%

## lava+gear — ✅ ไม่พบช่องโหว่


การตัดสินใจหลัก: in-lava 100.0%

## lava+oldWorld — ✅ ไม่พบช่องโหว่


การตัดสินใจหลัก: in-lava 100.0%

## veto+drowning — ✅ ไม่พบช่องโหว่


การตัดสินใจหลัก: drowning 92.4% · in-lava 3.0% · falling 2.6% · falling-no-clutch 2.0%

## veto+edgeKnock — ✅ ไม่พบช่องโหว่


การตัดสินใจหลัก: hostile-close 26.2% · low-hp-in-combat 17.9% · creeper-fusing 7.5% · on-fire 6.7% · skeleton-open 6.4% · breeze-ranged 6.0%

## veto+allMobs — ✅ ไม่พบช่องโหว่


การตัดสินใจหลัก: hostile-close 12.1% · low-hp-in-combat 10.5% · on-fire 7.2% · skeleton-open 6.9% · eat-to-regen 6.9% · hostile-approach 4.1%

## veto+effectsAll — ✅ ไม่พบช่องโหว่


การตัดสินใจหลัก: eat-to-regen 16.7% · levitation 8.8% · wither-effect 7.3% · no-food 6.8% · on-fire 6.6% · bad-effect 6.1%

## veto+trial — ✅ ไม่พบช่องโหว่


การตัดสินใจหลัก: hostile-close 20.7% · low-hp-in-combat 13.2% · skeleton-open 10.2% · on-fire 7.2% · eat-to-regen 7.1% · ominous-item-spawner 4.6%

## veto+pvp — ✅ ไม่พบช่องโหว่


การตัดสินใจหลัก: pvp-enemy-ranged 45.7% · pvp-enemy-close 12.5% · on-fire 7.2% · low-hp-in-combat 6.8% · eat-to-regen 3.1% · in-lava 3.0%

## veto+shelter — ✅ ไม่พบช่องโหว่


การตัดสินใจหลัก: wither-boss 13.8% · shelter-breached 9.1% · ghast-fireball 9.0% · eat-to-regen 8.2% · low-hp-in-combat 7.5% · on-fire 7.0%

## ranged+drowning — ✅ ไม่พบช่องโหว่


การตัดสินใจหลัก: drowning 92.4% · in-lava 3.0% · falling 2.7% · falling-no-clutch 2.0%

## ranged+edgeKnock — ✅ ไม่พบช่องโหว่


การตัดสินใจหลัก: hostile-close 27.3% · low-hp-in-combat 19.1% · skeleton-open 8.4% · ghast-fireball 7.2% · creeper-fusing 7.1% · on-fire 6.6%

## ranged+allMobs — ✅ ไม่พบช่องโหว่


การตัดสินใจหลัก: hostile-close 15.4% · low-hp-in-combat 14.0% · skeleton-open 11.4% · ghast-fireball 8.4% · on-fire 7.2% · underwater-guardian 3.1%

## ranged+effectsAll — ✅ ไม่พบช่องโหว่


การตัดสินใจหลัก: skeleton-open 16.5% · levitation 8.7% · hostile-close 8.6% · ghast-fireball 7.7% · low-hp-in-combat 7.0% · wither-effect 6.7%

## ranged+trial — ✅ ไม่พบช่องโหว่


การตัดสินใจหลัก: hostile-close 23.1% · low-hp-in-combat 16.3% · skeleton-open 13.0% · ghast-fireball 8.5% · on-fire 7.2% · breeze-ranged 4.6%

## ranged+pvp — ✅ ไม่พบช่องโหว่


การตัดสินใจหลัก: skeleton-open 16.0% · pvp-enemy-ranged 13.1% · low-hp-in-combat 11.6% · pvp-enemy-close 11.1% · ghast-fireball 9.1% · hostile-close 8.1%

## ranged+shelter — ✅ ไม่พบช่องโหว่


การตัดสินใจหลัก: wither-boss 13.8% · ghast-fireball 13.1% · skeleton-open 11.1% · low-hp-in-combat 10.8% · hostile-close 9.4% · on-fire 7.0%

## creeper+warden — ✅ ไม่พบช่องโหว่


การตัดสินใจหลัก: warden-near 33.9% · creeper-fusing 24.2% · low-hp-in-combat 9.2% · sculk-near 7.1% · on-fire 5.2% · in-lava 2.9%

## creeper+mixedCrowd — ✅ ไม่พบช่องโหว่


การตัดสินใจหลัก: creeper-bait 49.8% · hostile-close 17.2% · low-hp-in-combat 11.0% · outnumbered 5.8% · on-fire 3.3% · in-lava 3.0%

## creeper+neutral — ✅ ไม่พบช่องโหว่


การตัดสินใจหลัก: creeper-fusing 24.7% · provoked-flee 14.9% · provoked-fight 8.7% · low-hp-in-combat 7.0% · on-fire 5.2% · provoked-pack 5.1%

## creeper+biomes — ✅ ไม่พบช่องโหว่


การตัดสินใจหลัก: creeper-fusing 23.6% · low-hp-in-combat 8.1% · hostile-close 7.1% · eat-to-regen 6.1% · nether-no-gold 5.7% · on-fire 5.0%

## creeper+traps — ✅ ไม่พบช่องโหว่


การตัดสินใจหลัก: creeper-fusing 24.5% · sculk-near 8.8% · trap-tnt-plate 7.4% · trap-tripwire 7.3% · low-hp-in-combat 7.0% · hostile-approach 5.6%

## creeper+gear — ✅ ไม่พบช่องโหว่


การตัดสินใจหลัก: creeper-fusing 24.4% · hostile-approach 11.4% · eat-to-regen 9.9% · low-hp-in-combat 6.9% · hostile-close 6.0% · nether-no-gold 5.6%

## creeper+oldWorld — ✅ ไม่พบช่องโหว่


การตัดสินใจหลัก: creeper-bait 29.5% · hostile-close 18.1% · low-hp-in-combat 13.7% · armored-crowd 7.7% · creeper-fusing 6.5% · skeleton-open 5.2%

## fall+effects — ✅ ไม่พบช่องโหว่


การตัดสินใจหลัก: falling 56.2% · falling-no-clutch 40.7% · in-lava 3.1%

## fall+underwater — ✅ ไม่พบช่องโหว่


การตัดสินใจหลัก: falling 56.0% · falling-no-clutch 41.0% · in-lava 3.0%

## fall+piglin — ✅ ไม่พบช่องโหว่


การตัดสินใจหลัก: falling-no-clutch 56.3% · falling 40.8% · in-lava 3.0%

## fall+bosses — ✅ ไม่พบช่องโหว่


การตัดสินใจหลัก: falling 55.9% · falling-no-clutch 41.0% · in-lava 3.0%

## fall+team — ✅ ไม่พบช่องโหว่


การตัดสินใจหลัก: falling 56.0% · falling-no-clutch 41.0% · in-lava 3.0%

## fall+tech — ✅ ไม่พบช่องโหว่


การตัดสินใจหลัก: falling 56.0% · falling-no-clutch 41.0% · in-lava 3.0%

## drowning+crowd — ✅ ไม่พบช่องโหว่


การตัดสินใจหลัก: drowning 92.4% · in-lava 3.0% · falling 2.7% · falling-no-clutch 2.0%

## drowning+creeperBait — ✅ ไม่พบช่องโหว่


การตัดสินใจหลัก: drowning 92.4% · in-lava 3.0% · falling 2.6% · falling-no-clutch 2.0%

## drowning+blocks — ✅ ไม่พบช่องโหว่


การตัดสินใจหลัก: drowning 92.3% · in-lava 3.1% · falling 2.6% · falling-no-clutch 2.0%

## drowning+raid — ✅ ไม่พบช่องโหว่


การตัดสินใจหลัก: drowning 92.5% · in-lava 2.9% · falling 2.8% · falling-no-clutch 1.8%

## drowning+travel — ✅ ไม่พบช่องโหว่


การตัดสินใจหลัก: drowning 78.0% · elytra-wall 17.6% · in-lava 3.0% · falling 0.8% · falling-no-clutch 0.6%

## drowning+weather — ✅ ไม่พบช่องโหว่


การตัดสินใจหลัก: drowning 92.4% · in-lava 3.0% · falling 2.8% · falling-no-clutch 1.8%

## warden+crowd — ✅ ไม่พบช่องโหว่


การตัดสินใจหลัก: warden-near 39.8% · low-hp-in-combat 24.8% · hostile-close 7.6% · on-fire 7.2% · sculk-near 6.2% · outnumbered 3.7%

## warden+creeperBait — ✅ ไม่พบช่องโหว่


การตัดสินใจหลัก: creeper-bait 79.6% · warden-near 4.9% · low-hp-in-combat 3.1% · in-lava 3.0% · falling 2.6% · falling-no-clutch 2.0%

## warden+blocks — ✅ ไม่พบช่องโหว่


การตัดสินใจหลัก: warden-near 50.5% · sculk-near 8.8% · on-fire 7.3% · low-hp-in-combat 6.5% · danger-block 5.3% · eat-to-regen 3.1%

## warden+raid — ✅ ไม่พบช่องโหว่


การตัดสินใจหลัก: warden-near 44.5% · low-hp-in-combat 16.8% · on-fire 7.2% · raid-evoker 6.2% · sculk-near 4.2% · in-lava 3.0%

## warden+travel — ✅ ไม่พบช่องโหว่


การตัดสินใจหลัก: warden-near 42.8% · elytra-wall 17.5% · sculk-near 9.1% · on-fire 6.1% · low-hp-in-combat 5.5% · eat-to-regen 3.2%

## warden+weather — ✅ ไม่พบช่องโหว่


การตัดสินใจหลัก: warden-near 36.6% · charged-creeper 20.9% · sculk-near 5.5% · low-hp-in-combat 5.4% · on-fire 5.2% · creeper-fusing 3.7%

## crowd+effects — ✅ ไม่พบช่องโหว่


การตัดสินใจหลัก: wither-effect 23.2% · low-hp-in-combat 19.8% · levitation 18.2% · hostile-close 16.2% · on-fire 5.8% · outnumbered 4.5%

## crowd+underwater — ✅ ไม่พบช่องโหว่


การตัดสินใจหลัก: drowning 29.0% · low-hp-in-combat 17.3% · hostile-close 16.5% · underwater-guardian 16.2% · outnumbered 5.4% · on-fire 5.1%

## crowd+piglin — ✅ ไม่พบช่องโหว่


การตัดสินใจหลัก: low-hp-in-combat 24.8% · hostile-close 15.9% · piglin-no-gold 15.6% · brute-near 11.3% · provoked-flee 8.3% · on-fire 7.3%

## crowd+bosses — ✅ ไม่พบช่องโหว่


การตัดสินใจหลัก: wither-boss 27.8% · dragon-fight 18.4% · low-hp-in-combat 13.8% · dragon-breath 9.8% · hostile-close 7.1% · on-fire 6.5%

## crowd+team — ✅ ไม่พบช่องโหว่


การตัดสินใจหลัก: hostile-close 40.6% · low-hp-in-combat 24.7% · outnumbered 11.3% · on-fire 7.2% · in-lava 3.0% · falling 2.6%

## crowd+tech — ✅ ไม่พบช่องโหว่


การตัดสินใจหลัก: hostile-close 40.5% · low-hp-in-combat 24.8% · outnumbered 11.3% · on-fire 7.2% · in-lava 3.0% · falling 2.6%

## effects+mixedCrowd — ✅ ไม่พบช่องโหว่


การตัดสินใจหลัก: creeper-bait 19.1% · wither-effect 18.3% · low-hp-in-combat 15.4% · levitation 14.2% · hostile-close 12.5% · on-fire 4.5%

## effects+neutral — ✅ ไม่พบช่องโหว่


การตัดสินใจหลัก: wither-effect 32.3% · levitation 18.1% · provoked-flee 9.1% · provoked-fight 5.9% · on-fire 5.8% · provoked-pack 3.2%

## effects+biomes — ✅ ไม่พบช่องโหว่


การตัดสินใจหลัก: wither-effect 28.3% · levitation 17.9% · on-fire 5.5% · eat-to-regen 5.2% · poisoned 4.6% · low-hp-in-combat 3.8%

## effects+traps — ✅ ไม่พบช่องโหว่


การตัดสินใจหลัก: wither-effect 27.9% · levitation 18.2% · trap-tnt-plate 9.3% · on-fire 5.8% · sculk-near 5.4% · eat-to-regen 4.5%

## effects+gear — ✅ ไม่พบช่องโหว่


การตัดสินใจหลัก: wither-effect 32.5% · levitation 18.2% · eat-to-regen 8.1% · poisoned 7.3% · on-fire 5.8% · eat-after-hunger-effect 4.1%

## effects+oldWorld — ✅ ไม่พบช่องโหว่


การตัดสินใจหลัก: wither-effect 24.3% · levitation 17.9% · low-hp-in-combat 17.8% · hostile-close 11.6% · on-fire 5.9% · armored-crowd 5.6%

## edgeKnock+allMobs — ✅ ไม่พบช่องโหว่


การตัดสินใจหลัก: hostile-close 24.5% · low-hp-in-combat 19.2% · creeper-fusing 7.3% · on-fire 6.6% · skeleton-open 4.4% · breeze-ranged 3.4%

## edgeKnock+effectsAll — ✅ ไม่พบช่องโหว่


การตัดสินใจหลัก: hostile-close 21.4% · low-hp-in-combat 16.1% · levitation 8.1% · creeper-fusing 7.5% · on-fire 6.0% · wither-effect 5.2%

## edgeKnock+trial — ✅ ไม่พบช่องโหว่


การตัดสินใจหลัก: hostile-close 32.2% · low-hp-in-combat 19.8% · on-fire 6.6% · skeleton-open 5.5% · creeper-fusing 5.3% · breeze-ranged 4.8%

## edgeKnock+pvp — ✅ ไม่พบช่องโหว่


การตัดสินใจหลัก: hostile-close 20.4% · low-hp-in-combat 18.9% · pvp-enemy-close 11.4% · pvp-enemy-ranged 10.9% · creeper-fusing 7.2% · on-fire 6.6%

## edgeKnock+shelter — ✅ ไม่พบช่องโหว่


การตัดสินใจหลัก: hostile-close 14.2% · low-hp-in-combat 13.4% · wither-boss 12.3% · creeper-fusing 7.8% · ghast-fireball 7.4% · on-fire 6.3%

## mixedCrowd+allMobs — ✅ ไม่พบช่องโหว่


การตัดสินใจหลัก: hostile-close 22.7% · creeper-bait 19.8% · low-hp-in-combat 18.8% · outnumbered 8.6% · on-fire 5.8% · in-lava 3.0%

## mixedCrowd+effectsAll — ✅ ไม่พบช่องโหว่


การตัดสินใจหลัก: hostile-close 25.4% · creeper-bait 18.8% · low-hp-in-combat 17.6% · outnumbered 7.5% · levitation 7.0% · on-fire 5.2%

## mixedCrowd+trial — ✅ ไม่พบช่องโหว่


การตัดสินใจหลัก: hostile-close 26.9% · creeper-bait 19.5% · low-hp-in-combat 19.4% · outnumbered 13.0% · on-fire 5.7% · in-lava 3.0%

## mixedCrowd+pvp — ✅ ไม่พบช่องโหว่


การตัดสินใจหลัก: hostile-close 24.3% · low-hp-in-combat 19.5% · creeper-bait 19.2% · outnumbered 10.7% · pvp-enemy-close 6.4% · on-fire 5.7%

## mixedCrowd+shelter — ✅ ไม่พบช่องโหว่


การตัดสินใจหลัก: creeper-bait 23.6% · hostile-close 17.3% · low-hp-in-combat 15.2% · wither-boss 10.6% · outnumbered 6.0% · ghast-fireball 5.9%

## creeperBait+neutral — ✅ ไม่พบช่องโหว่


การตัดสินใจหลัก: creeper-bait 79.5% · low-hp-in-combat 3.1% · in-lava 3.1% · falling 2.6% · provoked-flee 2.0% · falling-no-clutch 2.0%

## creeperBait+biomes — ✅ ไม่พบช่องโหว่


การตัดสินใจหลัก: creeper-bait 77.9% · drowning 3.3% · in-lava 3.1% · low-hp-in-combat 3.0% · falling 2.4% · skeleton-open 2.2%

## creeperBait+traps — ✅ ไม่พบช่องโหว่


การตัดสินใจหลัก: creeper-bait 79.6% · low-hp-in-combat 3.1% · in-lava 3.0% · falling 2.6% · falling-no-clutch 2.0% · skeleton-open 1.7%

## creeperBait+gear — ✅ ไม่พบช่องโหว่


การตัดสินใจหลัก: creeper-bait 79.7% · low-hp-in-combat 3.1% · skeleton-open 3.1% · in-lava 3.0% · falling 2.6% · falling-no-clutch 1.9%

## creeperBait+oldWorld — ✅ ไม่พบช่องโหว่


การตัดสินใจหลัก: creeper-bait 79.5% · low-hp-in-combat 3.2% · in-lava 3.0% · hostile-close 2.8% · falling 2.6% · falling-no-clutch 2.0%

## underwater+piglin — ✅ ไม่พบช่องโหว่


การตัดสินใจหลัก: drowning 29.0% · underwater-guardian 13.6% · brute-near 9.2% · piglin-no-gold 8.5% · low-hp-in-combat 7.7% · provoked-flee 6.8%

## underwater+bosses — ✅ ไม่พบช่องโหว่


การตัดสินใจหลัก: drowning 28.9% · wither-boss 19.6% · dragon-fight 16.0% · dragon-breath 7.0% · on-fire 4.5% · low-hp-in-combat 3.7%

## underwater+team — ✅ ไม่พบช่องโหว่


การตัดสินใจหลัก: drowning 28.9% · underwater-guardian 20.3% · eat-to-regen 7.3% · low-hp-in-combat 6.3% · on-fire 5.0% · hostile-close 4.9%

## underwater+tech — ✅ ไม่พบช่องโหว่


การตัดสินใจหลัก: drowning 28.9% · underwater-guardian 20.4% · low-hp-in-combat 6.3% · eat-to-regen 5.9% · on-fire 5.1% · hostile-close 4.9%

## allMobs+blocks — ✅ ไม่พบช่องโหว่


การตัดสินใจหลัก: danger-block 13.7% · low-hp-in-combat 10.4% · hostile-close 9.6% · on-fire 7.3% · eat-to-regen 5.5% · skeleton-open 5.5%

## allMobs+raid — ✅ ไม่พบช่องโหว่


การตัดสินใจหลัก: low-hp-in-combat 18.3% · raid-evoker 17.7% · hostile-close 8.4% · raid-ravager 8.3% · on-fire 7.2% · raid-vex 7.2%

## allMobs+travel — ✅ ไม่พบช่องโหว่


การตัดสินใจหลัก: elytra-wall 17.5% · hostile-close 10.2% · low-hp-in-combat 8.8% · on-fire 6.0% · eat-to-regen 5.9% · skeleton-open 5.9%

## allMobs+weather — ✅ ไม่พบช่องโหว่


การตัดสินใจหลัก: charged-creeper 20.8% · hostile-close 9.1% · low-hp-in-combat 8.1% · on-fire 5.3% · hostile-approach 5.0% · skeleton-open 4.8%

## neutral+blocks — ✅ ไม่พบช่องโหว่


การตัดสินใจหลัก: provoked-flee 17.9% · danger-block 16.4% · provoked-fight 11.7% · on-fire 7.3% · provoked-pack 6.3% · eat-to-regen 5.6%

## neutral+raid — ✅ ไม่พบช่องโหว่


การตัดสินใจหลัก: provoked-flee 18.8% · low-hp-in-combat 14.6% · raid-evoker 13.8% · on-fire 7.2% · raid-ravager 6.5% · raid-vex 5.1%

## neutral+travel — ✅ ไม่พบช่องโหว่


การตัดสินใจหลัก: provoked-flee 18.9% · elytra-wall 17.7% · provoked-fight 12.4% · provoked-pack 6.6% · on-fire 6.3% · eat-to-regen 5.8%

## neutral+weather — ✅ ไม่พบช่องโหว่


การตัดสินใจหลัก: charged-creeper 21.0% · provoked-flee 16.2% · provoked-fight 10.5% · provoked-pack 5.6% · on-fire 5.2% · eat-to-regen 4.8%

## blocks+piglin — ✅ ไม่พบช่องโหว่


การตัดสินใจหลัก: piglin-no-gold 17.7% · danger-block 15.7% · brute-near 11.2% · provoked-flee 8.2% · provoked-fight 7.4% · on-fire 7.3%

## blocks+bosses — ✅ ไม่พบช่องโหว่


การตัดสินใจหลัก: wither-boss 28.0% · dragon-fight 20.0% · dragon-breath 9.8% · danger-block 9.0% · on-fire 6.5% · wither-effect 4.2%

## blocks+team — ✅ ไม่พบช่องโหว่


การตัดสินใจหลัก: eat-to-regen 20.6% · danger-block 16.4% · on-fire 7.3% · hungry 7.3% · nether-no-gold 5.7% · teammate-hungry 3.6%

## blocks+tech — ✅ ไม่พบช่องโหว่


การตัดสินใจหลัก: danger-block 16.5% · eat-to-regen 16.2% · chunk-unloaded 11.7% · on-fire 7.3% · nether-no-gold 4.3% · no-food 4.2%

## piglin+biomes — ✅ ไม่พบช่องโหว่


การตัดสินใจหลัก: piglin-no-gold 17.9% · brute-near 12.2% · provoked-flee 10.4% · low-hp-in-combat 7.2% · provoked-fight 7.0% · on-fire 6.9%

## piglin+traps — ✅ ไม่พบช่องโหว่


การตัดสินใจหลัก: piglin-no-gold 16.2% · trap-tnt-plate 11.0% · trap-tripwire 10.5% · brute-near 10.0% · provoked-flee 7.7% · on-fire 7.2%

## piglin+gear — ✅ ไม่พบช่องโหว่


การตัดสินใจหลัก: piglin-no-gold 21.9% · brute-near 14.0% · provoked-flee 10.5% · provoked-fight 9.3% · on-fire 7.3% · eat-to-regen 5.4%

## piglin+oldWorld — ✅ ไม่พบช่องโหว่


การตัดสินใจหลัก: low-hp-in-combat 22.6% · piglin-no-gold 16.5% · brute-near 11.6% · hostile-close 11.3% · provoked-flee 8.5% · on-fire 7.2%

## effectsAll+trial — ✅ ไม่พบช่องโหว่


การตัดสินใจหลัก: hostile-close 17.8% · low-hp-in-combat 12.2% · skeleton-open 8.9% · on-fire 6.9% · eat-to-regen 6.2% · levitation 6.1%

## effectsAll+pvp — ✅ ไม่พบช่องโหว่


การตัดสินใจหลัก: pvp-enemy-ranged 37.2% · pvp-enemy-close 10.2% · levitation 8.8% · wither-effect 6.9% · on-fire 6.5% · low-hp-in-combat 6.1%

## effectsAll+shelter — ✅ ไม่พบช่องโหว่


การตัดสินใจหลัก: wither-boss 12.4% · levitation 8.4% · shelter-breached 7.5% · ghast-fireball 7.3% · low-hp-in-combat 6.8% · eat-to-regen 6.7%

## biomes+trial — ✅ ไม่พบช่องโหว่


การตัดสินใจหลัก: hostile-close 19.0% · low-hp-in-combat 13.9% · skeleton-open 8.4% · on-fire 6.8% · eat-to-regen 4.6% · freezing 3.6%

## biomes+pvp — ✅ ไม่พบช่องโหว่


การตัดสินใจหลัก: pvp-enemy-ranged 29.2% · pvp-enemy-close 9.7% · low-hp-in-combat 9.0% · on-fire 6.9% · hostile-close 4.4% · freezing 3.6%

## biomes+shelter — ✅ ไม่พบช่องโหว่


การตัดสินใจหลัก: wither-boss 13.0% · ghast-fireball 9.0% · low-hp-in-combat 8.7% · on-fire 6.5% · hostile-close 6.5% · shelter-breached 5.7%

## raid+traps — ✅ ไม่พบช่องโหว่


การตัดสินใจหลัก: low-hp-in-combat 14.5% · raid-evoker 13.8% · trap-tnt-plate 9.5% · trap-tripwire 9.2% · on-fire 7.3% · raid-ravager 6.5%

## raid+gear — ✅ ไม่พบช่องโหว่


การตัดสินใจหลัก: raid-evoker 19.0% · low-hp-in-combat 14.7% · raid-ravager 9.0% · raid-vex 8.7% · on-fire 7.3% · hostile-close 6.8%

## raid+oldWorld — ✅ ไม่พบช่องโหว่


การตัดสินใจหลัก: low-hp-in-combat 23.6% · raid-evoker 17.2% · hostile-close 13.5% · raid-ravager 8.2% · raid-vex 7.9% · on-fire 7.3%

## bosses+team — ✅ ไม่พบช่องโหว่


การตัดสินใจหลัก: wither-boss 28.0% · dragon-fight 24.9% · dragon-breath 9.9% · on-fire 6.5% · wither-effect 5.3% · eat-to-regen 4.6%

## bosses+tech — ✅ ไม่พบช่องโหว่


การตัดสินใจหลัก: wither-boss 28.0% · dragon-fight 25.0% · dragon-breath 9.8% · on-fire 6.5% · wither-effect 5.4% · eat-to-regen 3.6%

## trial+travel — ✅ ไม่พบช่องโหว่


การตัดสินใจหลัก: elytra-wall 17.5% · hostile-close 17.4% · low-hp-in-combat 11.1% · skeleton-open 8.7% · on-fire 6.2% · eat-to-regen 6.0%

## trial+weather — ✅ ไม่พบช่องโหว่


การตัดสินใจหลัก: charged-creeper 20.9% · hostile-close 15.5% · low-hp-in-combat 10.0% · skeleton-open 7.3% · on-fire 5.2% · eat-to-regen 5.0%

## traps+travel — ✅ ไม่พบช่องโหว่


การตัดสินใจหลัก: elytra-wall 17.6% · sculk-near 11.4% · eat-to-regen 9.6% · trap-tnt-plate 9.5% · trap-tripwire 9.3% · on-fire 6.1%

## traps+weather — ✅ ไม่พบช่องโหว่


การตัดสินใจหลัก: charged-creeper 21.0% · eat-to-regen 9.8% · sculk-near 6.8% · trap-tnt-plate 5.7% · trap-tripwire 5.4% · on-fire 5.2%

## travel+team — ✅ ไม่พบช่องโหว่


การตัดสินใจหลัก: eat-to-regen 21.7% · elytra-wall 17.4% · hungry 8.3% · nether-no-gold 6.8% · on-fire 6.2% · teammate-hungry 4.3%

## travel+tech — ✅ ไม่พบช่องโหว่


การตัดสินใจหลัก: elytra-wall 17.5% · eat-to-regen 17.1% · chunk-unloaded 12.9% · on-fire 6.2% · nether-no-gold 5.3% · no-food 4.8%

## team+gear — ✅ ไม่พบช่องโหว่


การตัดสินใจหลัก: eat-to-regen 25.8% · hungry 9.9% · on-fire 7.2% · nether-no-gold 7.0% · inventory-full 5.6% · no-food 4.2%

## team+oldWorld — ✅ ไม่พบช่องโหว่


การตัดสินใจหลัก: hostile-close 29.0% · low-hp-in-combat 22.2% · armored-crowd 13.8% · skeleton-open 8.8% · on-fire 7.3% · in-lava 3.0%

## pvp+shelter — ✅ ไม่พบช่องโหว่


การตัดสินใจหลัก: pvp-enemy-ranged 19.5% · wither-boss 13.6% · low-hp-in-combat 10.3% · ghast-fireball 8.8% · pvp-enemy-close 7.2% · on-fire 6.9%

## gear+shelter — ✅ ไม่พบช่องโหว่


การตัดสินใจหลัก: wither-boss 13.8% · ghast-fireball 9.0% · shelter-breached 9.0% · eat-to-regen 8.3% · low-hp-in-combat 7.4% · on-fire 7.0%

## weather+oldWorld — ✅ ไม่พบช่องโหว่


การตัดสินใจหลัก: charged-creeper 20.9% · hostile-close 20.7% · low-hp-in-combat 15.8% · armored-crowd 9.7% · skeleton-open 6.3% · on-fire 5.2%

## lava+weapons — ✅ ไม่พบช่องโหว่


การตัดสินใจหลัก: in-lava 100.0%

## veto+weaponTactics — ✅ ไม่พบช่องโหว่


การตัดสินใจหลัก: eat-to-regen 20.5% · wrong-tool 9.1% · no-food 8.4% · hungry 7.9% · on-fire 7.1% · nether-no-gold 6.8%

## ranged+mlg — ✅ ไม่พบช่องโหว่


การตัดสินใจหลัก: falling 76.0% · falling-no-clutch 24.0%

## fall+weapons — ✅ ไม่พบช่องโหว่


การตัดสินใจหลัก: falling-no-clutch 97.1% · in-lava 2.9%

## drowning+weaponTactics — ✅ ไม่พบช่องโหว่


การตัดสินใจหลัก: drowning 92.5% · in-lava 2.9% · falling 2.6% · falling-no-clutch 2.0%

## warden+mlg — ✅ ไม่พบช่องโหว่


การตัดสินใจหลัก: falling 76.0% · falling-no-clutch 24.0%

## effects+weapons — ✅ ไม่พบช่องโหว่


การตัดสินใจหลัก: wither-effect 32.4% · levitation 18.2% · no-food 9.7% · poisoned 9.7% · bad-effect 6.8% · on-fire 5.8%

## edgeKnock+weaponTactics — ✅ ไม่พบช่องโหว่


การตัดสินใจหลัก: hostile-close 26.4% · low-hp-in-combat 17.8% · creeper-fusing 7.4% · on-fire 6.6% · skeleton-open 6.4% · breeze-ranged 6.1%

## mixedCrowd+mlg — ✅ ไม่พบช่องโหว่


การตัดสินใจหลัก: falling 75.9% · falling-no-clutch 24.1%

## underwater+weapons — ✅ ไม่พบช่องโหว่


การตัดสินใจหลัก: drowning 28.8% · underwater-guardian 20.3% · low-hp-in-combat 6.3% · no-food 6.1% · on-fire 5.1% · hostile-close 4.9%

## allMobs+weaponTactics — ✅ ไม่พบช่องโหว่


การตัดสินใจหลัก: hostile-close 12.1% · low-hp-in-combat 10.4% · on-fire 7.1% · eat-to-regen 6.9% · skeleton-open 6.9% · hostile-approach 5.3%

## neutral+mlg — ✅ ไม่พบช่องโหว่


การตัดสินใจหลัก: falling 76.0% · falling-no-clutch 24.0%

## piglin+weapons — ✅ ไม่พบช่องโหว่


การตัดสินใจหลัก: piglin-no-gold 22.0% · brute-near 13.9% · provoked-flee 10.4% · provoked-fight 9.4% · on-fire 7.3% · no-food 6.5%

## effectsAll+weaponTactics — ✅ ไม่พบช่องโหว่


การตัดสินใจหลัก: eat-to-regen 16.7% · levitation 8.8% · bad-effect 8.1% · wither-effect 7.2% · no-food 6.8% · on-fire 6.6%

## biomes+mlg — ✅ ไม่พบช่องโหว่


การตัดสินใจหลัก: falling 72.9% · falling-no-clutch 27.1%

## bosses+weapons — ✅ ไม่พบช่องโหว่


การตัดสินใจหลัก: wither-boss 28.0% · dragon-fight 25.1% · dragon-breath 9.7% · on-fire 6.5% · wither-effect 5.3% · falling-no-clutch 4.5%

## trial+weaponTactics — ✅ ไม่พบช่องโหว่


การตัดสินใจหลัก: hostile-close 20.5% · low-hp-in-combat 13.1% · skeleton-open 10.2% · on-fire 7.3% · eat-to-regen 7.1% · ominous-item-spawner 4.5%

## traps+mlg — ✅ ไม่พบช่องโหว่


การตัดสินใจหลัก: falling 76.0% · falling-no-clutch 24.0%

## team+weapons — ✅ ไม่พบช่องโหว่


การตัดสินใจหลัก: no-food 24.3% · nether-no-gold 12.1% · recover 9.3% · teammate-died 7.2% · on-fire 7.2% · plan:stone-pick 6.2%

## pvp+weaponTactics — ✅ ไม่พบช่องโหว่


การตัดสินใจหลัก: pvp-enemy-ranged 45.8% · pvp-enemy-close 12.4% · on-fire 7.3% · low-hp-in-combat 6.9% · eat-to-regen 3.1% · in-lava 3.0%

## gear+mlg — ✅ ไม่พบช่องโหว่


การตัดสินใจหลัก: falling 76.0% · falling-no-clutch 24.0%

## tech+weapons — ✅ ไม่พบช่องโหว่


การตัดสินใจหลัก: chunk-unloaded 21.8% · no-food 17.2% · nether-no-gold 8.5% · on-fire 7.3% · recover 6.5% · kicked 5.1%

## shelter+weaponTactics — ✅ ไม่พบช่องโหว่


การตัดสินใจหลัก: wither-boss 13.8% · shelter-breached 9.1% · ghast-fireball 9.0% · eat-to-regen 8.3% · low-hp-in-combat 7.5% · on-fire 7.1%

## oldWorld+mlg — ✅ ไม่พบช่องโหว่


การตัดสินใจหลัก: falling 76.0% · falling-no-clutch 24.0%

## MLG — อัตรารอดตามความสูง × ของกันตก (ผลลัพธ์จำลอง: clutchWindow + ความแม่นวาง 90% ASSUME)

| ความสูง | ของที่ใช้ | ตัวอย่าง | รอด |
|---|---|---|---|
| 100+ | cobweb | 22,863 | 90.2% |
| 100+ | ender_pearl | 23,723 | 90.1% |
| 100+ | ladder | 7,314 | 89.9% |
| 100+ | oak_boat | 30,242 | 89.9% |
| 100+ | powder_snow_bucket | 35,856 | 90.1% |
| 100+ | slime_block | 49,359 | 90.1% |
| 100+ | twisting_vines | 14,755 | 90.1% |
| 100+ | water_bucket | 46,869 | 89.9% |
| 100+ | ไม่มีของ | 94,601 | 0.0% |
| 24–49 | cobweb | 18,479 | 90.1% |
| 24–49 | ender_pearl | 19,410 | 90.1% |
| 24–49 | hay_block | 26,821 | 89.9% |
| 24–49 | honey_block | 21,736 | 89.9% |
| 24–49 | ladder | 5,953 | 90.1% |
| 24–49 | oak_boat | 24,159 | 89.6% |
| 24–49 | powder_snow_bucket | 34,107 | 90.0% |
| 24–49 | scaffolding | 953 | 88.8% |
| 24–49 | slime_block | 52,562 | 89.8% |
| 24–49 | twisting_vines | 15,431 | 89.9% |
| 24–49 | water_bucket | 49,919 | 90.2% |
| 24–49 | ไม่มีของ | 77,112 | 0.0% |
| 4–23 | cobweb | 9,985 | 94.2% |
| 4–23 | ender_pearl | 10,446 | 94.5% |
| 4–23 | hay_block | 27,354 | 95.3% |
| 4–23 | honey_block | 22,112 | 95.5% |
| 4–23 | ladder | 3,954 | 94.2% |
| 4–23 | oak_boat | 16,434 | 94.0% |
| 4–23 | powder_snow_bucket | 22,152 | 94.4% |
| 4–23 | scaffolding | 17,350 | 94.3% |
| 4–23 | slime_block | 39,140 | 94.5% |
| 4–23 | twisting_vines | 11,565 | 94.6% |
| 4–23 | water_bucket | 37,719 | 94.7% |
| 4–23 | ไม่มีของ | 41,767 | 43.1% |
| 50–99 | cobweb | 41,560 | 89.9% |
| 50–99 | ender_pearl | 44,010 | 89.8% |
| 50–99 | hay_block | 21,298 | 90.0% |
| 50–99 | honey_block | 17,263 | 89.7% |
| 50–99 | ladder | 13,432 | 89.8% |
| 50–99 | oak_boat | 55,863 | 89.8% |
| 50–99 | powder_snow_bucket | 70,471 | 89.9% |
| 50–99 | slime_block | 100,910 | 89.9% |
| 50–99 | twisting_vines | 29,497 | 90.1% |
| 50–99 | water_bucket | 96,458 | 89.9% |
| 50–99 | ไม่มีของ | 177,036 | 0.0% |
