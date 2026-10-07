# BLOCK_CATALOG — ทุกบล็อกใน Java 26.1 (สร้างอัตโนมัติจาก minecraft-data)

> สร้างด้วย `node scripts/gen_catalog.cjs 26.1` · ห้ามแก้มือ · JSON เต็มอยู่ `data/catalog_26.1/`
> เวลาขุด = วินาที, ไม่มีเอนชานต์/ยา, ยืนบนพื้น, ไม่อยู่ในน้ำ (อยู่ในน้ำหรือลอย ×5 ต่ออย่าง) · สูตร [Breaking](https://minecraft.wiki/w/Breaking)
> "เครื่องมือ" = ชนิดที่ขุดเร็วสุด · "ขั้นต่ำ" = ขั้นเครื่องมือต่ำสุดที่ขุดแล้วได้ของ · ตัวหนา = ขุดแล้วไม่ได้ของ

จำนวน: บล็อก 1168 · ไอเทม 1506 · อาหาร 44 · เอนทิตี 157 · เอนชานต์ 43 · เอฟเฟกต์ 40

## 1. บล็อกพิเศษ (อันตราย/ฟิสิกส์)

- **อันตราย:** lava, wither_rose, tnt, fire, soul_fire, cactus, magma_block, campfire, soul_campfire, sweet_berry_bush, powder_snow, sculk_sensor, calibrated_sculk_sensor, sculk_shrieker, pointed_dripstone
- **ร่วงได้:** sand, suspicious_sand, red_sand, gravel, suspicious_gravel, dragon_egg, anvil, chipped_anvil, damaged_anvil, white_concrete_powder, orange_concrete_powder, magenta_concrete_powder, light_blue_concrete_powder, yellow_concrete_powder, lime_concrete_powder, pink_concrete_powder, gray_concrete_powder, light_gray_concrete_powder, cyan_concrete_powder, purple_concrete_powder, blue_concrete_powder, brown_concrete_powder, green_concrete_powder, red_concrete_powder, black_concrete_powder, scaffolding, pointed_dripstone
- **ทำให้ช้า:** water, lava, cobweb, soul_sand, sweet_berry_bush, honey_block, powder_snow, mud
- **ลื่น/เด้ง:** ice, slime_block, packed_ice, frosted_ice, blue_ice
- **ปีนได้:** ladder, vine, scaffolding, weeping_vines, weeping_vines_plant, twisting_vines, twisting_vines_plant, cave_vines, cave_vines_plant
- **ลดหรือกันดาเมจตก:** water, white_bed, orange_bed, magenta_bed, light_blue_bed, yellow_bed, lime_bed, pink_bed, gray_bed, light_gray_bed, cyan_bed, purple_bed, blue_bed, brown_bed, green_bed, red_bed, black_bed, cobweb, ladder, vine, slime_block, hay_block, scaffolding, sweet_berry_bush, weeping_vines, twisting_vines, honey_block, powder_snow

## 2. อาหารทั้งหมด (เรียงตาม อิ่ม + saturation)

| อาหาร | อิ่ม | saturation |
|---|---|---|
| Rabbit Stew | 10 | 12 |
| Cooked Porkchop | 8 | 12.8 |
| Steak | 8 | 12.8 |
| Golden Carrot | 6 | 14.400001 |
| Cooked Salmon | 6 | 9.6 |
| Cooked Mutton | 6 | 9.6 |
| Golden Apple | 4 | 9.6 |
| Enchanted Golden Apple | 4 | 9.6 |
| Mushroom Stew | 6 | 7.2000003 |
| Cooked Chicken | 6 | 7.2000003 |
| Beetroot Soup | 6 | 7.2000003 |
| Suspicious Stew | 6 | 7.2000003 |
| Pumpkin Pie | 8 | 4.8 |
| Bread | 5 | 6 |
| Cooked Cod | 5 | 6 |
| Baked Potato | 5 | 6 |
| Cooked Rabbit | 5 | 6 |
| Honey Bottle | 6 | 1.2 |
| Carrot | 3 | 3.6000001 |
| Apple | 4 | 2.4 |
| Chorus Fruit | 4 | 2.4 |
| Spider Eye | 2 | 3.2 |
| Raw Porkchop | 3 | 1.8000001 |
| Raw Beef | 3 | 1.8000001 |
| Raw Rabbit | 3 | 1.8000001 |
| Rotten Flesh | 4 | 0.8 |
| Melon Slice | 2 | 1.2 |
| Raw Chicken | 2 | 1.2 |
| Poisonous Potato | 2 | 1.2 |
| Raw Mutton | 2 | 1.2 |
| Bucket of Salmon | 2 | 0.4 |
| Bucket of Cod | 2 | 0.4 |
| Raw Cod | 2 | 0.4 |
| Raw Salmon | 2 | 0.4 |
| Cookie | 2 | 0.4 |
| Sweet Berries | 2 | 0.4 |
| Glow Berries | 2 | 0.4 |
| Beetroot | 1 | 1.2 |
| Dried Kelp | 1 | 0.6 |
| Potato | 1 | 0.6 |
| Bucket of Pufferfish | 1 | 0.2 |
| Bucket of Tropical Fish | 1 | 0.2 |
| Tropical Fish | 1 | 0.2 |
| Pufferfish | 1 | 0.2 |

## 3. ทุกบล็อก

| บล็อก | ความแข็ง | กันระเบิด | เครื่องมือ | ขั้นต่ำ | มือ | ไม้ | หิน | เหล็ก | เพชร | เนเธอไรต์ | แสง | แท็ก |
|---|---|---|---|---|---|---|---|---|---|---|---|---|
| acacia_button | 0.5 | 0.5 | axe | — | 0.75 | 0.40 | 0.20 | 0.15 | 0.10 | 0.10 |  |  |
| acacia_door | 3 | 3 | axe | — | 4.55 | 2.30 | 1.15 | 0.75 | 0.60 | 0.50 |  |  |
| acacia_fence | 2 | 3 | axe | — | 3.00 | 1.50 | 0.75 | 0.50 | 0.40 | 0.35 |  |  |
| acacia_fence_gate | 2 | 3 | axe | — | 3.00 | 1.50 | 0.75 | 0.50 | 0.40 | 0.35 |  |  |
| acacia_hanging_sign | 1 | 1 | axe | — | 1.50 | 0.75 | 0.40 | 0.25 | 0.20 | 0.20 |  |  |
| acacia_leaves | 0.2 | 0.2 | hoe | — | 0.30 | 0.15 | 0.10 | ทันที | ทันที | ทันที |  |  |
| acacia_log | 2 | 2 | axe | — | 3.00 | 1.50 | 0.75 | 0.50 | 0.40 | 0.35 |  |  |
| acacia_planks | 2 | 3 | axe | — | 3.00 | 1.50 | 0.75 | 0.50 | 0.40 | 0.35 |  |  |
| acacia_pressure_plate | 0.5 | 0.5 | axe | — | 0.75 | 0.40 | 0.20 | 0.15 | 0.10 | 0.10 |  |  |
| acacia_sapling | 0 | 0 | hand | — | ทันที | ทันที | ทันที | ทันที | ทันที | ทันที |  |  |
| acacia_shelf | 2 | 3 | axe | — | 3.00 | 1.50 | 0.75 | 0.50 | 0.40 | 0.35 |  |  |
| acacia_sign | 1 | 1 | axe | — | 1.50 | 0.75 | 0.40 | 0.25 | 0.20 | 0.20 |  |  |
| acacia_slab | 2 | 3 | axe | — | 3.00 | 1.50 | 0.75 | 0.50 | 0.40 | 0.35 |  |  |
| acacia_stairs | 2 | 3 | axe | — | 3.00 | 1.50 | 0.75 | 0.50 | 0.40 | 0.35 |  |  |
| acacia_trapdoor | 3 | 3 | axe | — | 4.55 | 2.30 | 1.15 | 0.75 | 0.60 | 0.50 |  |  |
| acacia_wall_hanging_sign | 1 | 1 | axe | — | 1.50 | 0.75 | 0.40 | 0.25 | 0.20 | 0.20 |  |  |
| acacia_wall_sign | 1 | 1 | axe | — | 1.50 | 0.75 | 0.40 | 0.25 | 0.20 | 0.20 |  |  |
| acacia_wood | 2 | 2 | axe | — | 3.00 | 1.50 | 0.75 | 0.50 | 0.40 | 0.35 |  |  |
| activator_rail | 0.7 | 0.7 | pickaxe | — | 1.05 | 0.55 | 0.30 | 0.20 | 0.15 | 0.15 |  |  |
| air | 0 | 0 | hand | — | ทันที | ทันที | ทันที | ทันที | ทันที | ทันที |  |  |
| allium | 0 | 0 | hand | — | ทันที | ทันที | ทันที | ทันที | ทันที | ทันที |  |  |
| amethyst_block | 1.5 | 1.5 | pickaxe | wooden | **7.50** | 1.15 | 0.60 | 0.40 | 0.30 | 0.25 |  |  |
| amethyst_cluster | 1.5 | 1.5 | pickaxe | — | 2.30 | 1.15 | 0.60 | 0.40 | 0.30 | 0.25 | 5 |  |
| ancient_debris | 30 | 1200 | pickaxe | diamond | **150.00** | **75.00** | **37.50** | **25.00** | 5.65 | 5.00 |  |  |
| andesite | 1.5 | 6 | pickaxe | wooden | **7.50** | 1.15 | 0.60 | 0.40 | 0.30 | 0.25 |  |  |
| andesite_slab | 1.5 | 6 | pickaxe | wooden | **7.50** | 1.15 | 0.60 | 0.40 | 0.30 | 0.25 |  |  |
| andesite_stairs | 1.5 | 6 | pickaxe | wooden | **7.50** | 1.15 | 0.60 | 0.40 | 0.30 | 0.25 |  |  |
| andesite_wall | 1.5 | 6 | pickaxe | wooden | **7.50** | 1.15 | 0.60 | 0.40 | 0.30 | 0.25 |  |  |
| anvil | 5 | 1200 | pickaxe | wooden | **25.00** | 3.75 | 1.90 | 1.25 | 0.95 | 0.85 |  | gravity |
| attached_melon_stem | 0 | 0 | hand | — | ทันที | ทันที | ทันที | ทันที | ทันที | ทันที |  |  |
| attached_pumpkin_stem | 0 | 0 | hand | — | ทันที | ทันที | ทันที | ทันที | ทันที | ทันที |  |  |
| azalea | 0 | 0 | hand | — | ทันที | ทันที | ทันที | ทันที | ทันที | ทันที |  |  |
| azalea_leaves | 0.2 | 0.2 | hoe | — | 0.30 | 0.15 | 0.10 | ทันที | ทันที | ทันที |  |  |
| azure_bluet | 0 | 0 | hand | — | ทันที | ทันที | ทันที | ทันที | ทันที | ทันที |  |  |
| bamboo | 1 | 1 | sword | — | 1.50 | 0.75 | 0.40 | 0.25 | 0.20 | 0.20 |  |  |
| bamboo_block | 2 | 2 | axe | — | 3.00 | 1.50 | 0.75 | 0.50 | 0.40 | 0.35 |  |  |
| bamboo_button | 0.5 | 0.5 | axe | — | 0.75 | 0.40 | 0.20 | 0.15 | 0.10 | 0.10 |  |  |
| bamboo_door | 3 | 3 | axe | — | 4.55 | 2.30 | 1.15 | 0.75 | 0.60 | 0.50 |  |  |
| bamboo_fence | 2 | 3 | axe | — | 3.00 | 1.50 | 0.75 | 0.50 | 0.40 | 0.35 |  |  |
| bamboo_fence_gate | 2 | 3 | axe | — | 3.00 | 1.50 | 0.75 | 0.50 | 0.40 | 0.35 |  |  |
| bamboo_hanging_sign | 1 | 1 | axe | — | 1.50 | 0.75 | 0.40 | 0.25 | 0.20 | 0.20 |  |  |
| bamboo_mosaic | 2 | 3 | axe | — | 3.00 | 1.50 | 0.75 | 0.50 | 0.40 | 0.35 |  |  |
| bamboo_mosaic_slab | 2 | 3 | axe | — | 3.00 | 1.50 | 0.75 | 0.50 | 0.40 | 0.35 |  |  |
| bamboo_mosaic_stairs | 2 | 3 | axe | — | 3.00 | 1.50 | 0.75 | 0.50 | 0.40 | 0.35 |  |  |
| bamboo_planks | 2 | 3 | axe | — | 3.00 | 1.50 | 0.75 | 0.50 | 0.40 | 0.35 |  |  |
| bamboo_pressure_plate | 0.5 | 0.5 | axe | — | 0.75 | 0.40 | 0.20 | 0.15 | 0.10 | 0.10 |  |  |
| bamboo_sapling | 1 | 1 | sword | — | 1.50 | 0.75 | 0.40 | 0.25 | 0.20 | 0.20 |  |  |
| bamboo_shelf | 2 | 3 | axe | — | 3.00 | 1.50 | 0.75 | 0.50 | 0.40 | 0.35 |  |  |
| bamboo_sign | 1 | 1 | axe | — | 1.50 | 0.75 | 0.40 | 0.25 | 0.20 | 0.20 |  |  |
| bamboo_slab | 2 | 3 | axe | — | 3.00 | 1.50 | 0.75 | 0.50 | 0.40 | 0.35 |  |  |
| bamboo_stairs | 2 | 3 | axe | — | 3.00 | 1.50 | 0.75 | 0.50 | 0.40 | 0.35 |  |  |
| bamboo_trapdoor | 3 | 3 | axe | — | 4.55 | 2.30 | 1.15 | 0.75 | 0.60 | 0.50 |  |  |
| bamboo_wall_hanging_sign | 1 | 1 | axe | — | 1.50 | 0.75 | 0.40 | 0.25 | 0.20 | 0.20 |  |  |
| bamboo_wall_sign | 1 | 1 | axe | — | 1.50 | 0.75 | 0.40 | 0.25 | 0.20 | 0.20 |  |  |
| barrel | 2.5 | 2.5 | axe | — | 3.75 | 1.90 | 0.95 | 0.65 | 0.50 | 0.45 |  |  |
| barrier | -1 | 3600000.8 | hand | — | — | — | — | — | — | — |  |  |
| basalt | 1.25 | 4.2 | pickaxe | wooden | **6.25** | 0.95 | 0.50 | 0.35 | 0.25 | 0.25 |  |  |
| beacon | 3 | 3 | hand | — | 4.55 | 4.55 | 4.55 | 4.55 | 4.55 | 4.55 | 15 |  |
| bedrock | -1 | 3600000 | hand | — | — | — | — | — | — | — |  |  |
| bee_nest | 0.3 | 0.3 | axe | — | 0.45 | 0.25 | 0.15 | 0.10 | 0.10 | ทันที |  |  |
| beehive | 0.6 | 0.6 | axe | — | 0.90 | 0.45 | 0.25 | 0.15 | 0.15 | 0.10 |  |  |
| beetroots | 0 | 0 | hand | — | ทันที | ทันที | ทันที | ทันที | ทันที | ทันที |  |  |
| bell | 5 | 5 | pickaxe | — | 7.50 | 3.75 | 1.90 | 1.25 | 0.95 | 0.85 |  |  |
| big_dripleaf | 0.1 | 0.1 | axe | — | 0.15 | 0.10 | ทันที | ทันที | ทันที | ทันที |  |  |
| big_dripleaf_stem | 0.1 | 0.1 | axe | — | 0.15 | 0.10 | ทันที | ทันที | ทันที | ทันที |  |  |
| birch_button | 0.5 | 0.5 | axe | — | 0.75 | 0.40 | 0.20 | 0.15 | 0.10 | 0.10 |  |  |
| birch_door | 3 | 3 | axe | — | 4.55 | 2.30 | 1.15 | 0.75 | 0.60 | 0.50 |  |  |
| birch_fence | 2 | 3 | axe | — | 3.00 | 1.50 | 0.75 | 0.50 | 0.40 | 0.35 |  |  |
| birch_fence_gate | 2 | 3 | axe | — | 3.00 | 1.50 | 0.75 | 0.50 | 0.40 | 0.35 |  |  |
| birch_hanging_sign | 1 | 1 | axe | — | 1.50 | 0.75 | 0.40 | 0.25 | 0.20 | 0.20 |  |  |
| birch_leaves | 0.2 | 0.2 | hoe | — | 0.30 | 0.15 | 0.10 | ทันที | ทันที | ทันที |  |  |
| birch_log | 2 | 2 | axe | — | 3.00 | 1.50 | 0.75 | 0.50 | 0.40 | 0.35 |  |  |
| birch_planks | 2 | 3 | axe | — | 3.00 | 1.50 | 0.75 | 0.50 | 0.40 | 0.35 |  |  |
| birch_pressure_plate | 0.5 | 0.5 | axe | — | 0.75 | 0.40 | 0.20 | 0.15 | 0.10 | 0.10 |  |  |
| birch_sapling | 0 | 0 | hand | — | ทันที | ทันที | ทันที | ทันที | ทันที | ทันที |  |  |
| birch_shelf | 2 | 3 | axe | — | 3.00 | 1.50 | 0.75 | 0.50 | 0.40 | 0.35 |  |  |
| birch_sign | 1 | 1 | axe | — | 1.50 | 0.75 | 0.40 | 0.25 | 0.20 | 0.20 |  |  |
| birch_slab | 2 | 3 | axe | — | 3.00 | 1.50 | 0.75 | 0.50 | 0.40 | 0.35 |  |  |
| birch_stairs | 2 | 3 | axe | — | 3.00 | 1.50 | 0.75 | 0.50 | 0.40 | 0.35 |  |  |
| birch_trapdoor | 3 | 3 | axe | — | 4.55 | 2.30 | 1.15 | 0.75 | 0.60 | 0.50 |  |  |
| birch_wall_hanging_sign | 1 | 1 | axe | — | 1.50 | 0.75 | 0.40 | 0.25 | 0.20 | 0.20 |  |  |
| birch_wall_sign | 1 | 1 | axe | — | 1.50 | 0.75 | 0.40 | 0.25 | 0.20 | 0.20 |  |  |
| birch_wood | 2 | 2 | axe | — | 3.00 | 1.50 | 0.75 | 0.50 | 0.40 | 0.35 |  |  |
| black_banner | 1 | 1 | axe | — | 1.50 | 0.75 | 0.40 | 0.25 | 0.20 | 0.20 |  |  |
| black_bed | 0.2 | 0.2 | hand | — | 0.30 | 0.30 | 0.30 | 0.30 | 0.30 | 0.30 |  | fallSafe |
| black_candle | 0.1 | 0.1 | hand | — | 0.15 | 0.15 | 0.15 | 0.15 | 0.15 | 0.15 |  |  |
| black_candle_cake | 0.5 | 0.5 | hand | — | 0.75 | 0.75 | 0.75 | 0.75 | 0.75 | 0.75 |  |  |
| black_carpet | 0.1 | 0.1 | hand | — | 0.15 | 0.15 | 0.15 | 0.15 | 0.15 | 0.15 |  |  |
| black_concrete | 1.8 | 1.8 | pickaxe | wooden | **9.00** | 1.35 | 0.70 | 0.45 | 0.35 | 0.30 |  |  |
| black_concrete_powder | 0.5 | 0.5 | shovel | — | 0.75 | 0.40 | 0.20 | 0.15 | 0.10 | 0.10 |  | gravity |
| black_glazed_terracotta | 1.4 | 1.4 | pickaxe | wooden | **7.00** | 1.05 | 0.55 | 0.35 | 0.30 | 0.25 |  |  |
| black_shulker_box | 2 | 2 | pickaxe | — | 3.00 | 1.50 | 0.75 | 0.50 | 0.40 | 0.35 |  |  |
| black_stained_glass | 0.3 | 0.3 | hand | — | 0.45 | 0.45 | 0.45 | 0.45 | 0.45 | 0.45 |  |  |
| black_stained_glass_pane | 0.3 | 0.3 | hand | — | 0.45 | 0.45 | 0.45 | 0.45 | 0.45 | 0.45 |  |  |
| black_terracotta | 1.25 | 4.2 | pickaxe | wooden | **6.25** | 0.95 | 0.50 | 0.35 | 0.25 | 0.25 |  |  |
| black_wall_banner | 1 | 1 | axe | — | 1.50 | 0.75 | 0.40 | 0.25 | 0.20 | 0.20 |  |  |
| black_wool | 0.8 | 0.8 | hand | — | 1.20 | 1.20 | 1.20 | 1.20 | 1.20 | 1.20 |  |  |
| blackstone | 1.5 | 6 | pickaxe | wooden | **7.50** | 1.15 | 0.60 | 0.40 | 0.30 | 0.25 |  |  |
| blackstone_slab | 2 | 6 | pickaxe | wooden | **10.00** | 1.50 | 0.75 | 0.50 | 0.40 | 0.35 |  |  |
| blackstone_stairs | 1.5 | 6 | pickaxe | wooden | **7.50** | 1.15 | 0.60 | 0.40 | 0.30 | 0.25 |  |  |
| blackstone_wall | 1.5 | 6 | pickaxe | wooden | **7.50** | 1.15 | 0.60 | 0.40 | 0.30 | 0.25 |  |  |
| blast_furnace | 3.5 | 3.5 | pickaxe | wooden | **17.50** | 2.65 | 1.35 | 0.90 | 0.70 | 0.60 |  |  |
| blue_banner | 1 | 1 | axe | — | 1.50 | 0.75 | 0.40 | 0.25 | 0.20 | 0.20 |  |  |
| blue_bed | 0.2 | 0.2 | hand | — | 0.30 | 0.30 | 0.30 | 0.30 | 0.30 | 0.30 |  | fallSafe |
| blue_candle | 0.1 | 0.1 | hand | — | 0.15 | 0.15 | 0.15 | 0.15 | 0.15 | 0.15 |  |  |
| blue_candle_cake | 0.5 | 0.5 | hand | — | 0.75 | 0.75 | 0.75 | 0.75 | 0.75 | 0.75 |  |  |
| blue_carpet | 0.1 | 0.1 | hand | — | 0.15 | 0.15 | 0.15 | 0.15 | 0.15 | 0.15 |  |  |
| blue_concrete | 1.8 | 1.8 | pickaxe | wooden | **9.00** | 1.35 | 0.70 | 0.45 | 0.35 | 0.30 |  |  |
| blue_concrete_powder | 0.5 | 0.5 | shovel | — | 0.75 | 0.40 | 0.20 | 0.15 | 0.10 | 0.10 |  | gravity |
| blue_glazed_terracotta | 1.4 | 1.4 | pickaxe | wooden | **7.00** | 1.05 | 0.55 | 0.35 | 0.30 | 0.25 |  |  |
| blue_ice | 2.8 | 2.8 | pickaxe | — | 4.20 | 2.10 | 1.05 | 0.70 | 0.55 | 0.50 |  | slippery |
| blue_orchid | 0 | 0 | hand | — | ทันที | ทันที | ทันที | ทันที | ทันที | ทันที |  |  |
| blue_shulker_box | 2 | 2 | pickaxe | — | 3.00 | 1.50 | 0.75 | 0.50 | 0.40 | 0.35 |  |  |
| blue_stained_glass | 0.3 | 0.3 | hand | — | 0.45 | 0.45 | 0.45 | 0.45 | 0.45 | 0.45 |  |  |
| blue_stained_glass_pane | 0.3 | 0.3 | hand | — | 0.45 | 0.45 | 0.45 | 0.45 | 0.45 | 0.45 |  |  |
| blue_terracotta | 1.25 | 4.2 | pickaxe | wooden | **6.25** | 0.95 | 0.50 | 0.35 | 0.25 | 0.25 |  |  |
| blue_wall_banner | 1 | 1 | axe | — | 1.50 | 0.75 | 0.40 | 0.25 | 0.20 | 0.20 |  |  |
| blue_wool | 0.8 | 0.8 | hand | — | 1.20 | 1.20 | 1.20 | 1.20 | 1.20 | 1.20 |  |  |
| bone_block | 2 | 2 | pickaxe | wooden | **10.00** | 1.50 | 0.75 | 0.50 | 0.40 | 0.35 |  |  |
| bookshelf | 1.5 | 1.5 | axe | — | 2.30 | 1.15 | 0.60 | 0.40 | 0.30 | 0.25 |  |  |
| brain_coral | 0 | 0 | hand | — | ทันที | ทันที | ทันที | ทันที | ทันที | ทันที |  |  |
| brain_coral_block | 1.5 | 6 | pickaxe | wooden | **7.50** | 1.15 | 0.60 | 0.40 | 0.30 | 0.25 |  |  |
| brain_coral_fan | 0 | 0 | hand | — | ทันที | ทันที | ทันที | ทันที | ทันที | ทันที |  |  |
| brain_coral_wall_fan | 0 | 0 | hand | — | ทันที | ทันที | ทันที | ทันที | ทันที | ทันที |  |  |
| brewing_stand | 0.5 | 0.5 | pickaxe | — | 0.75 | 0.40 | 0.20 | 0.15 | 0.10 | 0.10 | 1 |  |
| brick_slab | 2 | 6 | pickaxe | wooden | **10.00** | 1.50 | 0.75 | 0.50 | 0.40 | 0.35 |  |  |
| brick_stairs | 2 | 6 | pickaxe | wooden | **10.00** | 1.50 | 0.75 | 0.50 | 0.40 | 0.35 |  |  |
| brick_wall | 2 | 6 | pickaxe | wooden | **10.00** | 1.50 | 0.75 | 0.50 | 0.40 | 0.35 |  |  |
| bricks | 2 | 6 | pickaxe | wooden | **10.00** | 1.50 | 0.75 | 0.50 | 0.40 | 0.35 |  |  |
| brown_banner | 1 | 1 | axe | — | 1.50 | 0.75 | 0.40 | 0.25 | 0.20 | 0.20 |  |  |
| brown_bed | 0.2 | 0.2 | hand | — | 0.30 | 0.30 | 0.30 | 0.30 | 0.30 | 0.30 |  | fallSafe |
| brown_candle | 0.1 | 0.1 | hand | — | 0.15 | 0.15 | 0.15 | 0.15 | 0.15 | 0.15 |  |  |
| brown_candle_cake | 0.5 | 0.5 | hand | — | 0.75 | 0.75 | 0.75 | 0.75 | 0.75 | 0.75 |  |  |
| brown_carpet | 0.1 | 0.1 | hand | — | 0.15 | 0.15 | 0.15 | 0.15 | 0.15 | 0.15 |  |  |
| brown_concrete | 1.8 | 1.8 | pickaxe | wooden | **9.00** | 1.35 | 0.70 | 0.45 | 0.35 | 0.30 |  |  |
| brown_concrete_powder | 0.5 | 0.5 | shovel | — | 0.75 | 0.40 | 0.20 | 0.15 | 0.10 | 0.10 |  | gravity |
| brown_glazed_terracotta | 1.4 | 1.4 | pickaxe | wooden | **7.00** | 1.05 | 0.55 | 0.35 | 0.30 | 0.25 |  |  |
| brown_mushroom | 0 | 0 | hand | — | ทันที | ทันที | ทันที | ทันที | ทันที | ทันที | 1 |  |
| brown_mushroom_block | 0.2 | 0.2 | axe | — | 0.30 | 0.15 | 0.10 | ทันที | ทันที | ทันที |  |  |
| brown_shulker_box | 2 | 2 | pickaxe | — | 3.00 | 1.50 | 0.75 | 0.50 | 0.40 | 0.35 |  |  |
| brown_stained_glass | 0.3 | 0.3 | hand | — | 0.45 | 0.45 | 0.45 | 0.45 | 0.45 | 0.45 |  |  |
| brown_stained_glass_pane | 0.3 | 0.3 | hand | — | 0.45 | 0.45 | 0.45 | 0.45 | 0.45 | 0.45 |  |  |
| brown_terracotta | 1.25 | 4.2 | pickaxe | wooden | **6.25** | 0.95 | 0.50 | 0.35 | 0.25 | 0.25 |  |  |
| brown_wall_banner | 1 | 1 | axe | — | 1.50 | 0.75 | 0.40 | 0.25 | 0.20 | 0.20 |  |  |
| brown_wool | 0.8 | 0.8 | hand | — | 1.20 | 1.20 | 1.20 | 1.20 | 1.20 | 1.20 |  |  |
| bubble_column | 0 | 0 | hand | — | ทันที | ทันที | ทันที | ทันที | ทันที | ทันที |  |  |
| bubble_coral | 0 | 0 | hand | — | ทันที | ทันที | ทันที | ทันที | ทันที | ทันที |  |  |
| bubble_coral_block | 1.5 | 6 | pickaxe | wooden | **7.50** | 1.15 | 0.60 | 0.40 | 0.30 | 0.25 |  |  |
| bubble_coral_fan | 0 | 0 | hand | — | ทันที | ทันที | ทันที | ทันที | ทันที | ทันที |  |  |
| bubble_coral_wall_fan | 0 | 0 | hand | — | ทันที | ทันที | ทันที | ทันที | ทันที | ทันที |  |  |
| budding_amethyst | 1.5 | 1.5 | pickaxe | wooden | **7.50** | 1.15 | 0.60 | 0.40 | 0.30 | 0.25 |  |  |
| bush | 0 | 0 | hand | — | ทันที | ทันที | ทันที | ทันที | ทันที | ทันที |  |  |
| cactus | 0.4 | 0.4 | hand | — | 0.60 | 0.60 | 0.60 | 0.60 | 0.60 | 0.60 |  | danger |
| cactus_flower | 0 | 0 | hand | — | ทันที | ทันที | ทันที | ทันที | ทันที | ทันที |  |  |
| cake | 0.5 | 0.5 | hand | — | 0.75 | 0.75 | 0.75 | 0.75 | 0.75 | 0.75 |  |  |
| calcite | 0.75 | 0.75 | pickaxe | wooden | **3.75** | 0.60 | 0.30 | 0.20 | 0.15 | 0.15 |  |  |
| calibrated_sculk_sensor | 1.5 | 1.5 | hoe | — | 2.30 | 1.15 | 0.60 | 0.40 | 0.30 | 0.25 | 1 | danger |
| campfire | 2 | 2 | axe | — | 3.00 | 1.50 | 0.75 | 0.50 | 0.40 | 0.35 | 15 | danger |
| candle | 0.1 | 0.1 | hand | — | 0.15 | 0.15 | 0.15 | 0.15 | 0.15 | 0.15 |  |  |
| candle_cake | 0.5 | 0.5 | hand | — | 0.75 | 0.75 | 0.75 | 0.75 | 0.75 | 0.75 |  |  |
| carrots | 0 | 0 | hand | — | ทันที | ทันที | ทันที | ทันที | ทันที | ทันที |  |  |
| cartography_table | 2.5 | 2.5 | axe | — | 3.75 | 1.90 | 0.95 | 0.65 | 0.50 | 0.45 |  |  |
| carved_pumpkin | 1 | 1 | axe | — | 1.50 | 0.75 | 0.40 | 0.25 | 0.20 | 0.20 |  |  |
| cauldron | 2 | 2 | pickaxe | wooden | **10.00** | 1.50 | 0.75 | 0.50 | 0.40 | 0.35 |  |  |
| cave_air | 0 | 0 | hand | — | ทันที | ทันที | ทันที | ทันที | ทันที | ทันที |  |  |
| cave_vines | 0 | 0 | hand | — | ทันที | ทันที | ทันที | ทันที | ทันที | ทันที |  | climbable |
| cave_vines_plant | 0 | 0 | hand | — | ทันที | ทันที | ทันที | ทันที | ทันที | ทันที |  | climbable |
| chain_command_block | -1 | 3600000 | hand | undefined | — | — | — | — | — | — |  |  |
| cherry_button | 0.5 | 0.5 | axe | — | 0.75 | 0.40 | 0.20 | 0.15 | 0.10 | 0.10 |  |  |
| cherry_door | 3 | 3 | axe | — | 4.55 | 2.30 | 1.15 | 0.75 | 0.60 | 0.50 |  |  |
| cherry_fence | 2 | 3 | axe | — | 3.00 | 1.50 | 0.75 | 0.50 | 0.40 | 0.35 |  |  |
| cherry_fence_gate | 2 | 3 | axe | — | 3.00 | 1.50 | 0.75 | 0.50 | 0.40 | 0.35 |  |  |
| cherry_hanging_sign | 1 | 1 | axe | — | 1.50 | 0.75 | 0.40 | 0.25 | 0.20 | 0.20 |  |  |
| cherry_leaves | 0.2 | 0.2 | hoe | — | 0.30 | 0.15 | 0.10 | ทันที | ทันที | ทันที |  |  |
| cherry_log | 2 | 2 | axe | — | 3.00 | 1.50 | 0.75 | 0.50 | 0.40 | 0.35 |  |  |
| cherry_planks | 2 | 3 | axe | — | 3.00 | 1.50 | 0.75 | 0.50 | 0.40 | 0.35 |  |  |
| cherry_pressure_plate | 0.5 | 0.5 | axe | — | 0.75 | 0.40 | 0.20 | 0.15 | 0.10 | 0.10 |  |  |
| cherry_sapling | 0 | 0 | hand | — | ทันที | ทันที | ทันที | ทันที | ทันที | ทันที |  |  |
| cherry_shelf | 2 | 3 | axe | — | 3.00 | 1.50 | 0.75 | 0.50 | 0.40 | 0.35 |  |  |
| cherry_sign | 1 | 1 | axe | — | 1.50 | 0.75 | 0.40 | 0.25 | 0.20 | 0.20 |  |  |
| cherry_slab | 2 | 3 | axe | — | 3.00 | 1.50 | 0.75 | 0.50 | 0.40 | 0.35 |  |  |
| cherry_stairs | 2 | 3 | axe | — | 3.00 | 1.50 | 0.75 | 0.50 | 0.40 | 0.35 |  |  |
| cherry_trapdoor | 3 | 3 | axe | — | 4.55 | 2.30 | 1.15 | 0.75 | 0.60 | 0.50 |  |  |
| cherry_wall_hanging_sign | 1 | 1 | axe | — | 1.50 | 0.75 | 0.40 | 0.25 | 0.20 | 0.20 |  |  |
| cherry_wall_sign | 1 | 1 | axe | — | 1.50 | 0.75 | 0.40 | 0.25 | 0.20 | 0.20 |  |  |
| cherry_wood | 2 | 2 | axe | — | 3.00 | 1.50 | 0.75 | 0.50 | 0.40 | 0.35 |  |  |
| chest | 2.5 | 2.5 | axe | — | 3.75 | 1.90 | 0.95 | 0.65 | 0.50 | 0.45 |  |  |
| chipped_anvil | 5 | 1200 | pickaxe | wooden | **25.00** | 3.75 | 1.90 | 1.25 | 0.95 | 0.85 |  | gravity |
| chiseled_bookshelf | 1.5 | 1.5 | axe | — | 2.30 | 1.15 | 0.60 | 0.40 | 0.30 | 0.25 |  |  |
| chiseled_copper | 3 | 6 | pickaxe | stone | **15.00** | **7.50** | 1.15 | 0.75 | 0.60 | 0.50 |  |  |
| chiseled_deepslate | 3.5 | 6 | pickaxe | wooden | **17.50** | 2.65 | 1.35 | 0.90 | 0.70 | 0.60 |  |  |
| chiseled_nether_bricks | 2 | 6 | pickaxe | wooden | **10.00** | 1.50 | 0.75 | 0.50 | 0.40 | 0.35 |  |  |
| chiseled_polished_blackstone | 1.5 | 6 | pickaxe | wooden | **7.50** | 1.15 | 0.60 | 0.40 | 0.30 | 0.25 |  |  |
| chiseled_quartz_block | 0.8 | 0.8 | pickaxe | wooden | **4.00** | 0.60 | 0.30 | 0.20 | 0.15 | 0.15 |  |  |
| chiseled_red_sandstone | 0.8 | 0.8 | pickaxe | wooden | **4.00** | 0.60 | 0.30 | 0.20 | 0.15 | 0.15 |  |  |
| chiseled_resin_bricks | 1.5 | 6 | pickaxe | wooden | **7.50** | 1.15 | 0.60 | 0.40 | 0.30 | 0.25 |  |  |
| chiseled_sandstone | 0.8 | 0.8 | pickaxe | wooden | **4.00** | 0.60 | 0.30 | 0.20 | 0.15 | 0.15 |  |  |
| chiseled_stone_bricks | 1.5 | 6 | pickaxe | wooden | **7.50** | 1.15 | 0.60 | 0.40 | 0.30 | 0.25 |  |  |
| chiseled_tuff | 1.5 | 6 | pickaxe | wooden | **7.50** | 1.15 | 0.60 | 0.40 | 0.30 | 0.25 |  |  |
| chiseled_tuff_bricks | 1.5 | 6 | pickaxe | wooden | **7.50** | 1.15 | 0.60 | 0.40 | 0.30 | 0.25 |  |  |
| chorus_flower | 0.4 | 0.4 | axe | — | 0.60 | 0.30 | 0.15 | 0.10 | 0.10 | 0.10 |  |  |
| chorus_plant | 0.4 | 0.4 | axe | — | 0.60 | 0.30 | 0.15 | 0.10 | 0.10 | 0.10 |  |  |
| clay | 0.6 | 0.6 | shovel | — | 0.90 | 0.45 | 0.25 | 0.15 | 0.15 | 0.10 |  |  |
| closed_eyeblossom | 0 | 0 | hand | — | ทันที | ทันที | ทันที | ทันที | ทันที | ทันที |  |  |
| coal_block | 5 | 6 | pickaxe | wooden | **25.00** | 3.75 | 1.90 | 1.25 | 0.95 | 0.85 |  |  |
| coal_ore | 3 | 3 | pickaxe | wooden | **15.00** | 2.30 | 1.15 | 0.75 | 0.60 | 0.50 |  |  |
| coarse_dirt | 0.5 | 0.5 | shovel | — | 0.75 | 0.40 | 0.20 | 0.15 | 0.10 | 0.10 |  |  |
| cobbled_deepslate | 3.5 | 6 | pickaxe | wooden | **17.50** | 2.65 | 1.35 | 0.90 | 0.70 | 0.60 |  |  |
| cobbled_deepslate_slab | 3.5 | 6 | pickaxe | wooden | **17.50** | 2.65 | 1.35 | 0.90 | 0.70 | 0.60 |  |  |
| cobbled_deepslate_stairs | 3.5 | 6 | pickaxe | wooden | **17.50** | 2.65 | 1.35 | 0.90 | 0.70 | 0.60 |  |  |
| cobbled_deepslate_wall | 3.5 | 6 | pickaxe | wooden | **17.50** | 2.65 | 1.35 | 0.90 | 0.70 | 0.60 |  |  |
| cobblestone | 2 | 6 | pickaxe | wooden | **10.00** | 1.50 | 0.75 | 0.50 | 0.40 | 0.35 |  |  |
| cobblestone_slab | 2 | 6 | pickaxe | wooden | **10.00** | 1.50 | 0.75 | 0.50 | 0.40 | 0.35 |  |  |
| cobblestone_stairs | 2 | 6 | pickaxe | wooden | **10.00** | 1.50 | 0.75 | 0.50 | 0.40 | 0.35 |  |  |
| cobblestone_wall | 2 | 6 | pickaxe | wooden | **10.00** | 1.50 | 0.75 | 0.50 | 0.40 | 0.35 |  |  |
| cobweb | 4 | 4 | sword | wooden | **20.00** | 0.40 | 0.40 | 0.40 | 0.40 | 0.40 |  | slows fallSafe |
| cocoa | 0.2 | 3 | axe | — | 0.30 | 0.15 | 0.10 | ทันที | ทันที | ทันที |  |  |
| command_block | -1 | 3600000 | hand | undefined | — | — | — | — | — | — |  |  |
| comparator | 0 | 0 | hand | — | ทันที | ทันที | ทันที | ทันที | ทันที | ทันที |  |  |
| composter | 0.6 | 0.6 | axe | — | 0.90 | 0.45 | 0.25 | 0.15 | 0.15 | 0.10 |  |  |
| conduit | 3 | 3 | pickaxe | — | 4.55 | 2.30 | 1.15 | 0.75 | 0.60 | 0.50 | 15 |  |
| copper_bars | 5 | 6 | pickaxe | wooden | **25.00** | 3.75 | 1.90 | 1.25 | 0.95 | 0.85 |  |  |
| copper_block | 3 | 6 | pickaxe | stone | **15.00** | **7.50** | 1.15 | 0.75 | 0.60 | 0.50 |  |  |
| copper_bulb | 3 | 6 | pickaxe | stone | **15.00** | **7.50** | 1.15 | 0.75 | 0.60 | 0.50 |  |  |
| copper_chain | 5 | 6 | pickaxe | wooden | **25.00** | 3.75 | 1.90 | 1.25 | 0.95 | 0.85 |  |  |
| copper_chest | 3 | 6 | pickaxe | stone | **15.00** | **7.50** | 1.15 | 0.75 | 0.60 | 0.50 |  |  |
| copper_door | 3 | 6 | pickaxe | — | 4.55 | 2.30 | 1.15 | 0.75 | 0.60 | 0.50 |  |  |
| copper_golem_statue | 3 | 6 | pickaxe | — | 4.55 | 2.30 | 1.15 | 0.75 | 0.60 | 0.50 |  |  |
| copper_grate | 3 | 6 | pickaxe | stone | **15.00** | **7.50** | 1.15 | 0.75 | 0.60 | 0.50 |  |  |
| copper_lantern | 3.5 | 3.5 | pickaxe | — | 5.30 | 2.65 | 1.35 | 0.90 | 0.70 | 0.60 | 15 |  |
| copper_ore | 3 | 3 | pickaxe | stone | **15.00** | **7.50** | 1.15 | 0.75 | 0.60 | 0.50 |  |  |
| copper_torch | 0 | 0 | hand | — | ทันที | ทันที | ทันที | ทันที | ทันที | ทันที | 14 |  |
| copper_trapdoor | 3 | 6 | pickaxe | stone | **15.00** | **7.50** | 1.15 | 0.75 | 0.60 | 0.50 |  |  |
| copper_wall_torch | 0 | 0 | hand | — | ทันที | ทันที | ทันที | ทันที | ทันที | ทันที | 14 |  |
| cornflower | 0 | 0 | hand | — | ทันที | ทันที | ทันที | ทันที | ทันที | ทันที |  |  |
| cracked_deepslate_bricks | 3.5 | 6 | pickaxe | wooden | **17.50** | 2.65 | 1.35 | 0.90 | 0.70 | 0.60 |  |  |
| cracked_deepslate_tiles | 3.5 | 6 | pickaxe | wooden | **17.50** | 2.65 | 1.35 | 0.90 | 0.70 | 0.60 |  |  |
| cracked_nether_bricks | 2 | 6 | pickaxe | wooden | **10.00** | 1.50 | 0.75 | 0.50 | 0.40 | 0.35 |  |  |
| cracked_polished_blackstone_bricks | 1.5 | 6 | pickaxe | wooden | **7.50** | 1.15 | 0.60 | 0.40 | 0.30 | 0.25 |  |  |
| cracked_stone_bricks | 1.5 | 6 | pickaxe | wooden | **7.50** | 1.15 | 0.60 | 0.40 | 0.30 | 0.25 |  |  |
| crafter | 1.5 | 3.5 | pickaxe | — | 2.30 | 1.15 | 0.60 | 0.40 | 0.30 | 0.25 |  |  |
| crafting_table | 2.5 | 2.5 | axe | — | 3.75 | 1.90 | 0.95 | 0.65 | 0.50 | 0.45 |  |  |
| creaking_heart | 10 | 10 | axe | — | 15.00 | 7.50 | 3.75 | 2.50 | 1.90 | 1.70 |  |  |
| creeper_head | 1 | 1 | hand | — | 1.50 | 1.50 | 1.50 | 1.50 | 1.50 | 1.50 |  |  |
| creeper_wall_head | 1 | 1 | hand | — | 1.50 | 1.50 | 1.50 | 1.50 | 1.50 | 1.50 |  |  |
| crimson_button | 0.5 | 0.5 | axe | — | 0.75 | 0.40 | 0.20 | 0.15 | 0.10 | 0.10 |  |  |
| crimson_door | 3 | 3 | axe | — | 4.55 | 2.30 | 1.15 | 0.75 | 0.60 | 0.50 |  |  |
| crimson_fence | 2 | 3 | axe | — | 3.00 | 1.50 | 0.75 | 0.50 | 0.40 | 0.35 |  |  |
| crimson_fence_gate | 2 | 3 | axe | — | 3.00 | 1.50 | 0.75 | 0.50 | 0.40 | 0.35 |  |  |
| crimson_fungus | 0 | 0 | hand | — | ทันที | ทันที | ทันที | ทันที | ทันที | ทันที |  |  |
| crimson_hanging_sign | 1 | 1 | axe | — | 1.50 | 0.75 | 0.40 | 0.25 | 0.20 | 0.20 |  |  |
| crimson_hyphae | 2 | 2 | axe | — | 3.00 | 1.50 | 0.75 | 0.50 | 0.40 | 0.35 |  |  |
| crimson_nylium | 0.4 | 0.4 | pickaxe | wooden | **2.00** | 0.30 | 0.15 | 0.10 | 0.10 | 0.10 |  |  |
| crimson_planks | 2 | 3 | axe | — | 3.00 | 1.50 | 0.75 | 0.50 | 0.40 | 0.35 |  |  |
| crimson_pressure_plate | 0.5 | 0.5 | axe | — | 0.75 | 0.40 | 0.20 | 0.15 | 0.10 | 0.10 |  |  |
| crimson_roots | 0 | 0 | hand | — | ทันที | ทันที | ทันที | ทันที | ทันที | ทันที |  |  |
| crimson_shelf | 2 | 3 | axe | — | 3.00 | 1.50 | 0.75 | 0.50 | 0.40 | 0.35 |  |  |
| crimson_sign | 1 | 1 | axe | — | 1.50 | 0.75 | 0.40 | 0.25 | 0.20 | 0.20 |  |  |
| crimson_slab | 2 | 3 | axe | — | 3.00 | 1.50 | 0.75 | 0.50 | 0.40 | 0.35 |  |  |
| crimson_stairs | 2 | 3 | axe | — | 3.00 | 1.50 | 0.75 | 0.50 | 0.40 | 0.35 |  |  |
| crimson_stem | 2 | 2 | axe | — | 3.00 | 1.50 | 0.75 | 0.50 | 0.40 | 0.35 |  |  |
| crimson_trapdoor | 3 | 3 | axe | — | 4.55 | 2.30 | 1.15 | 0.75 | 0.60 | 0.50 |  |  |
| crimson_wall_hanging_sign | 1 | 1 | axe | — | 1.50 | 0.75 | 0.40 | 0.25 | 0.20 | 0.20 |  |  |
| crimson_wall_sign | 1 | 1 | axe | — | 1.50 | 0.75 | 0.40 | 0.25 | 0.20 | 0.20 |  |  |
| crying_obsidian | 50 | 1200 | pickaxe | diamond | **250.00** | **125.00** | **62.50** | **41.70** | 9.40 | 8.35 | 10 |  |
| cut_copper | 3 | 6 | pickaxe | stone | **15.00** | **7.50** | 1.15 | 0.75 | 0.60 | 0.50 |  |  |
| cut_copper_slab | 3 | 6 | pickaxe | stone | **15.00** | **7.50** | 1.15 | 0.75 | 0.60 | 0.50 |  |  |
| cut_copper_stairs | 3 | 6 | pickaxe | stone | **15.00** | **7.50** | 1.15 | 0.75 | 0.60 | 0.50 |  |  |
| cut_red_sandstone | 0.8 | 0.8 | pickaxe | wooden | **4.00** | 0.60 | 0.30 | 0.20 | 0.15 | 0.15 |  |  |
| cut_red_sandstone_slab | 2 | 6 | pickaxe | wooden | **10.00** | 1.50 | 0.75 | 0.50 | 0.40 | 0.35 |  |  |
| cut_sandstone | 0.8 | 0.8 | pickaxe | wooden | **4.00** | 0.60 | 0.30 | 0.20 | 0.15 | 0.15 |  |  |
| cut_sandstone_slab | 2 | 6 | pickaxe | wooden | **10.00** | 1.50 | 0.75 | 0.50 | 0.40 | 0.35 |  |  |
| cyan_banner | 1 | 1 | axe | — | 1.50 | 0.75 | 0.40 | 0.25 | 0.20 | 0.20 |  |  |
| cyan_bed | 0.2 | 0.2 | hand | — | 0.30 | 0.30 | 0.30 | 0.30 | 0.30 | 0.30 |  | fallSafe |
| cyan_candle | 0.1 | 0.1 | hand | — | 0.15 | 0.15 | 0.15 | 0.15 | 0.15 | 0.15 |  |  |
| cyan_candle_cake | 0.5 | 0.5 | hand | — | 0.75 | 0.75 | 0.75 | 0.75 | 0.75 | 0.75 |  |  |
| cyan_carpet | 0.1 | 0.1 | hand | — | 0.15 | 0.15 | 0.15 | 0.15 | 0.15 | 0.15 |  |  |
| cyan_concrete | 1.8 | 1.8 | pickaxe | wooden | **9.00** | 1.35 | 0.70 | 0.45 | 0.35 | 0.30 |  |  |
| cyan_concrete_powder | 0.5 | 0.5 | shovel | — | 0.75 | 0.40 | 0.20 | 0.15 | 0.10 | 0.10 |  | gravity |
| cyan_glazed_terracotta | 1.4 | 1.4 | pickaxe | wooden | **7.00** | 1.05 | 0.55 | 0.35 | 0.30 | 0.25 |  |  |
| cyan_shulker_box | 2 | 2 | pickaxe | — | 3.00 | 1.50 | 0.75 | 0.50 | 0.40 | 0.35 |  |  |
| cyan_stained_glass | 0.3 | 0.3 | hand | — | 0.45 | 0.45 | 0.45 | 0.45 | 0.45 | 0.45 |  |  |
| cyan_stained_glass_pane | 0.3 | 0.3 | hand | — | 0.45 | 0.45 | 0.45 | 0.45 | 0.45 | 0.45 |  |  |
| cyan_terracotta | 1.25 | 4.2 | pickaxe | wooden | **6.25** | 0.95 | 0.50 | 0.35 | 0.25 | 0.25 |  |  |
| cyan_wall_banner | 1 | 1 | axe | — | 1.50 | 0.75 | 0.40 | 0.25 | 0.20 | 0.20 |  |  |
| cyan_wool | 0.8 | 0.8 | hand | — | 1.20 | 1.20 | 1.20 | 1.20 | 1.20 | 1.20 |  |  |
| damaged_anvil | 5 | 1200 | pickaxe | wooden | **25.00** | 3.75 | 1.90 | 1.25 | 0.95 | 0.85 |  | gravity |
| dandelion | 0 | 0 | hand | — | ทันที | ทันที | ทันที | ทันที | ทันที | ทันที |  |  |
| dark_oak_button | 0.5 | 0.5 | axe | — | 0.75 | 0.40 | 0.20 | 0.15 | 0.10 | 0.10 |  |  |
| dark_oak_door | 3 | 3 | axe | — | 4.55 | 2.30 | 1.15 | 0.75 | 0.60 | 0.50 |  |  |
| dark_oak_fence | 2 | 3 | axe | — | 3.00 | 1.50 | 0.75 | 0.50 | 0.40 | 0.35 |  |  |
| dark_oak_fence_gate | 2 | 3 | axe | — | 3.00 | 1.50 | 0.75 | 0.50 | 0.40 | 0.35 |  |  |
| dark_oak_hanging_sign | 1 | 1 | axe | — | 1.50 | 0.75 | 0.40 | 0.25 | 0.20 | 0.20 |  |  |
| dark_oak_leaves | 0.2 | 0.2 | hoe | — | 0.30 | 0.15 | 0.10 | ทันที | ทันที | ทันที |  |  |
| dark_oak_log | 2 | 2 | axe | — | 3.00 | 1.50 | 0.75 | 0.50 | 0.40 | 0.35 |  |  |
| dark_oak_planks | 2 | 3 | axe | — | 3.00 | 1.50 | 0.75 | 0.50 | 0.40 | 0.35 |  |  |
| dark_oak_pressure_plate | 0.5 | 0.5 | axe | — | 0.75 | 0.40 | 0.20 | 0.15 | 0.10 | 0.10 |  |  |
| dark_oak_sapling | 0 | 0 | hand | — | ทันที | ทันที | ทันที | ทันที | ทันที | ทันที |  |  |
| dark_oak_shelf | 2 | 3 | axe | — | 3.00 | 1.50 | 0.75 | 0.50 | 0.40 | 0.35 |  |  |
| dark_oak_sign | 1 | 1 | axe | — | 1.50 | 0.75 | 0.40 | 0.25 | 0.20 | 0.20 |  |  |
| dark_oak_slab | 2 | 3 | axe | — | 3.00 | 1.50 | 0.75 | 0.50 | 0.40 | 0.35 |  |  |
| dark_oak_stairs | 2 | 3 | axe | — | 3.00 | 1.50 | 0.75 | 0.50 | 0.40 | 0.35 |  |  |
| dark_oak_trapdoor | 3 | 3 | axe | — | 4.55 | 2.30 | 1.15 | 0.75 | 0.60 | 0.50 |  |  |
| dark_oak_wall_hanging_sign | 1 | 1 | axe | — | 1.50 | 0.75 | 0.40 | 0.25 | 0.20 | 0.20 |  |  |
| dark_oak_wall_sign | 1 | 1 | axe | — | 1.50 | 0.75 | 0.40 | 0.25 | 0.20 | 0.20 |  |  |
| dark_oak_wood | 2 | 2 | axe | — | 3.00 | 1.50 | 0.75 | 0.50 | 0.40 | 0.35 |  |  |
| dark_prismarine | 1.5 | 6 | pickaxe | wooden | **7.50** | 1.15 | 0.60 | 0.40 | 0.30 | 0.25 |  |  |
| dark_prismarine_slab | 1.5 | 6 | pickaxe | wooden | **7.50** | 1.15 | 0.60 | 0.40 | 0.30 | 0.25 |  |  |
| dark_prismarine_stairs | 1.5 | 6 | pickaxe | wooden | **7.50** | 1.15 | 0.60 | 0.40 | 0.30 | 0.25 |  |  |
| daylight_detector | 0.2 | 0.2 | axe | — | 0.30 | 0.15 | 0.10 | ทันที | ทันที | ทันที |  |  |
| dead_brain_coral | 0 | 0 | hand | wooden | **ทันที** | **ทันที** | **ทันที** | **ทันที** | **ทันที** | **ทันที** |  |  |
| dead_brain_coral_block | 1.5 | 6 | pickaxe | wooden | **7.50** | 1.15 | 0.60 | 0.40 | 0.30 | 0.25 |  |  |
| dead_brain_coral_fan | 0 | 0 | hand | wooden | **ทันที** | **ทันที** | **ทันที** | **ทันที** | **ทันที** | **ทันที** |  |  |
| dead_brain_coral_wall_fan | 0 | 0 | hand | wooden | **ทันที** | **ทันที** | **ทันที** | **ทันที** | **ทันที** | **ทันที** |  |  |
| dead_bubble_coral | 0 | 0 | hand | wooden | **ทันที** | **ทันที** | **ทันที** | **ทันที** | **ทันที** | **ทันที** |  |  |
| dead_bubble_coral_block | 1.5 | 6 | pickaxe | wooden | **7.50** | 1.15 | 0.60 | 0.40 | 0.30 | 0.25 |  |  |
| dead_bubble_coral_fan | 0 | 0 | hand | wooden | **ทันที** | **ทันที** | **ทันที** | **ทันที** | **ทันที** | **ทันที** |  |  |
| dead_bubble_coral_wall_fan | 0 | 0 | hand | wooden | **ทันที** | **ทันที** | **ทันที** | **ทันที** | **ทันที** | **ทันที** |  |  |
| dead_bush | 0 | 0 | hand | — | ทันที | ทันที | ทันที | ทันที | ทันที | ทันที |  |  |
| dead_fire_coral | 0 | 0 | hand | wooden | **ทันที** | **ทันที** | **ทันที** | **ทันที** | **ทันที** | **ทันที** |  |  |
| dead_fire_coral_block | 1.5 | 6 | pickaxe | wooden | **7.50** | 1.15 | 0.60 | 0.40 | 0.30 | 0.25 |  |  |
| dead_fire_coral_fan | 0 | 0 | hand | wooden | **ทันที** | **ทันที** | **ทันที** | **ทันที** | **ทันที** | **ทันที** |  |  |
| dead_fire_coral_wall_fan | 0 | 0 | hand | wooden | **ทันที** | **ทันที** | **ทันที** | **ทันที** | **ทันที** | **ทันที** |  |  |
| dead_horn_coral | 0 | 0 | hand | wooden | **ทันที** | **ทันที** | **ทันที** | **ทันที** | **ทันที** | **ทันที** |  |  |
| dead_horn_coral_block | 1.5 | 6 | pickaxe | wooden | **7.50** | 1.15 | 0.60 | 0.40 | 0.30 | 0.25 |  |  |
| dead_horn_coral_fan | 0 | 0 | hand | wooden | **ทันที** | **ทันที** | **ทันที** | **ทันที** | **ทันที** | **ทันที** |  |  |
| dead_horn_coral_wall_fan | 0 | 0 | hand | wooden | **ทันที** | **ทันที** | **ทันที** | **ทันที** | **ทันที** | **ทันที** |  |  |
| dead_tube_coral | 0 | 0 | hand | wooden | **ทันที** | **ทันที** | **ทันที** | **ทันที** | **ทันที** | **ทันที** |  |  |
| dead_tube_coral_block | 1.5 | 6 | pickaxe | wooden | **7.50** | 1.15 | 0.60 | 0.40 | 0.30 | 0.25 |  |  |
| dead_tube_coral_fan | 0 | 0 | hand | wooden | **ทันที** | **ทันที** | **ทันที** | **ทันที** | **ทันที** | **ทันที** |  |  |
| dead_tube_coral_wall_fan | 0 | 0 | hand | wooden | **ทันที** | **ทันที** | **ทันที** | **ทันที** | **ทันที** | **ทันที** |  |  |
| decorated_pot | 0 | 0 | hand | — | ทันที | ทันที | ทันที | ทันที | ทันที | ทันที |  |  |
| deepslate | 3 | 6 | pickaxe | wooden | **15.00** | 2.30 | 1.15 | 0.75 | 0.60 | 0.50 |  |  |
| deepslate_brick_slab | 3.5 | 6 | pickaxe | wooden | **17.50** | 2.65 | 1.35 | 0.90 | 0.70 | 0.60 |  |  |
| deepslate_brick_stairs | 3.5 | 6 | pickaxe | wooden | **17.50** | 2.65 | 1.35 | 0.90 | 0.70 | 0.60 |  |  |
| deepslate_brick_wall | 3.5 | 6 | pickaxe | wooden | **17.50** | 2.65 | 1.35 | 0.90 | 0.70 | 0.60 |  |  |
| deepslate_bricks | 3.5 | 6 | pickaxe | wooden | **17.50** | 2.65 | 1.35 | 0.90 | 0.70 | 0.60 |  |  |
| deepslate_coal_ore | 4.5 | 3 | pickaxe | wooden | **22.50** | 3.40 | 1.70 | 1.15 | 0.85 | 0.75 |  |  |
| deepslate_copper_ore | 4.5 | 3 | pickaxe | stone | **22.50** | **11.25** | 1.70 | 1.15 | 0.85 | 0.75 |  |  |
| deepslate_diamond_ore | 4.5 | 3 | pickaxe | iron | **22.50** | **11.25** | **5.65** | 1.15 | 0.85 | 0.75 |  |  |
| deepslate_emerald_ore | 4.5 | 3 | pickaxe | iron | **22.50** | **11.25** | **5.65** | 1.15 | 0.85 | 0.75 |  |  |
| deepslate_gold_ore | 4.5 | 3 | pickaxe | iron | **22.50** | **11.25** | **5.65** | 1.15 | 0.85 | 0.75 |  |  |
| deepslate_iron_ore | 4.5 | 3 | pickaxe | stone | **22.50** | **11.25** | 1.70 | 1.15 | 0.85 | 0.75 |  |  |
| deepslate_lapis_ore | 4.5 | 3 | pickaxe | stone | **22.50** | **11.25** | 1.70 | 1.15 | 0.85 | 0.75 |  |  |
| deepslate_redstone_ore | 4.5 | 3 | pickaxe | iron | **22.50** | **11.25** | **5.65** | 1.15 | 0.85 | 0.75 |  |  |
| deepslate_tile_slab | 3.5 | 6 | pickaxe | wooden | **17.50** | 2.65 | 1.35 | 0.90 | 0.70 | 0.60 |  |  |
| deepslate_tile_stairs | 3.5 | 6 | pickaxe | wooden | **17.50** | 2.65 | 1.35 | 0.90 | 0.70 | 0.60 |  |  |
| deepslate_tile_wall | 3.5 | 6 | pickaxe | wooden | **17.50** | 2.65 | 1.35 | 0.90 | 0.70 | 0.60 |  |  |
| deepslate_tiles | 3.5 | 6 | pickaxe | wooden | **17.50** | 2.65 | 1.35 | 0.90 | 0.70 | 0.60 |  |  |
| detector_rail | 0.7 | 0.7 | pickaxe | — | 1.05 | 0.55 | 0.30 | 0.20 | 0.15 | 0.15 |  |  |
| diamond_block | 5 | 6 | pickaxe | iron | **25.00** | **12.50** | **6.25** | 1.25 | 0.95 | 0.85 |  |  |
| diamond_ore | 3 | 3 | pickaxe | iron | **15.00** | **7.50** | **3.75** | 0.75 | 0.60 | 0.50 |  |  |
| diorite | 1.5 | 6 | pickaxe | wooden | **7.50** | 1.15 | 0.60 | 0.40 | 0.30 | 0.25 |  |  |
| diorite_slab | 1.5 | 6 | pickaxe | wooden | **7.50** | 1.15 | 0.60 | 0.40 | 0.30 | 0.25 |  |  |
| diorite_stairs | 1.5 | 6 | pickaxe | wooden | **7.50** | 1.15 | 0.60 | 0.40 | 0.30 | 0.25 |  |  |
| diorite_wall | 1.5 | 6 | pickaxe | wooden | **7.50** | 1.15 | 0.60 | 0.40 | 0.30 | 0.25 |  |  |
| dirt | 0.5 | 0.5 | shovel | — | 0.75 | 0.40 | 0.20 | 0.15 | 0.10 | 0.10 |  |  |
| dirt_path | 0.65 | 0.65 | shovel | — | 1.00 | 0.50 | 0.25 | 0.20 | 0.15 | 0.15 |  |  |
| dispenser | 3.5 | 3.5 | pickaxe | wooden | **17.50** | 2.65 | 1.35 | 0.90 | 0.70 | 0.60 |  |  |
| dragon_egg | 3 | 9 | hand | — | 4.55 | 4.55 | 4.55 | 4.55 | 4.55 | 4.55 | 1 | gravity |
| dragon_head | 1 | 1 | hand | — | 1.50 | 1.50 | 1.50 | 1.50 | 1.50 | 1.50 |  |  |
| dragon_wall_head | 1 | 1 | hand | — | 1.50 | 1.50 | 1.50 | 1.50 | 1.50 | 1.50 |  |  |
| dried_ghast | 0 | 0 | hand | — | ทันที | ทันที | ทันที | ทันที | ทันที | ทันที |  |  |
| dried_kelp_block | 0.5 | 2.5 | hoe | — | 0.75 | 0.40 | 0.20 | 0.15 | 0.10 | 0.10 |  |  |
| dripstone_block | 1.5 | 1 | pickaxe | wooden | **7.50** | 1.15 | 0.60 | 0.40 | 0.30 | 0.25 |  |  |
| dropper | 3.5 | 3.5 | pickaxe | wooden | **17.50** | 2.65 | 1.35 | 0.90 | 0.70 | 0.60 |  |  |
| emerald_block | 5 | 6 | pickaxe | iron | **25.00** | **12.50** | **6.25** | 1.25 | 0.95 | 0.85 |  |  |
| emerald_ore | 3 | 3 | pickaxe | iron | **15.00** | **7.50** | **3.75** | 0.75 | 0.60 | 0.50 |  |  |
| enchanting_table | 5 | 1200 | pickaxe | wooden | **25.00** | 3.75 | 1.90 | 1.25 | 0.95 | 0.85 | 7 |  |
| end_gateway | -1 | 3600000 | hand | — | — | — | — | — | — | — | 15 |  |
| end_portal | -1 | 3600000 | hand | — | — | — | — | — | — | — | 15 |  |
| end_portal_frame | -1 | 3600000 | hand | — | — | — | — | — | — | — | 1 |  |
| end_rod | 0 | 0 | hand | — | ทันที | ทันที | ทันที | ทันที | ทันที | ทันที | 14 |  |
| end_stone | 3 | 9 | pickaxe | wooden | **15.00** | 2.30 | 1.15 | 0.75 | 0.60 | 0.50 |  |  |
| end_stone_brick_slab | 3 | 9 | pickaxe | wooden | **15.00** | 2.30 | 1.15 | 0.75 | 0.60 | 0.50 |  |  |
| end_stone_brick_stairs | 3 | 9 | pickaxe | wooden | **15.00** | 2.30 | 1.15 | 0.75 | 0.60 | 0.50 |  |  |
| end_stone_brick_wall | 3 | 9 | pickaxe | wooden | **15.00** | 2.30 | 1.15 | 0.75 | 0.60 | 0.50 |  |  |
| end_stone_bricks | 3 | 9 | pickaxe | wooden | **15.00** | 2.30 | 1.15 | 0.75 | 0.60 | 0.50 |  |  |
| ender_chest | 22.5 | 600 | pickaxe | — | 33.75 | 16.90 | 8.45 | 5.65 | 4.25 | 3.75 | 7 |  |
| exposed_chiseled_copper | 3 | 6 | pickaxe | stone | **15.00** | **7.50** | 1.15 | 0.75 | 0.60 | 0.50 |  |  |
| exposed_copper | 3 | 6 | pickaxe | stone | **15.00** | **7.50** | 1.15 | 0.75 | 0.60 | 0.50 |  |  |
| exposed_copper_bars | 5 | 6 | pickaxe | wooden | **25.00** | 3.75 | 1.90 | 1.25 | 0.95 | 0.85 |  |  |
| exposed_copper_bulb | 3 | 6 | pickaxe | stone | **15.00** | **7.50** | 1.15 | 0.75 | 0.60 | 0.50 |  |  |
| exposed_copper_chain | 5 | 6 | pickaxe | wooden | **25.00** | 3.75 | 1.90 | 1.25 | 0.95 | 0.85 |  |  |
| exposed_copper_chest | 3 | 6 | pickaxe | stone | **15.00** | **7.50** | 1.15 | 0.75 | 0.60 | 0.50 |  |  |
| exposed_copper_door | 3 | 6 | pickaxe | — | 4.55 | 2.30 | 1.15 | 0.75 | 0.60 | 0.50 |  |  |
| exposed_copper_golem_statue | 3 | 6 | pickaxe | — | 4.55 | 2.30 | 1.15 | 0.75 | 0.60 | 0.50 |  |  |
| exposed_copper_grate | 3 | 6 | pickaxe | stone | **15.00** | **7.50** | 1.15 | 0.75 | 0.60 | 0.50 |  |  |
| exposed_copper_lantern | 3.5 | 3.5 | pickaxe | — | 5.30 | 2.65 | 1.35 | 0.90 | 0.70 | 0.60 | 15 |  |
| exposed_copper_trapdoor | 3 | 6 | pickaxe | stone | **15.00** | **7.50** | 1.15 | 0.75 | 0.60 | 0.50 |  |  |
| exposed_cut_copper | 3 | 6 | pickaxe | stone | **15.00** | **7.50** | 1.15 | 0.75 | 0.60 | 0.50 |  |  |
| exposed_cut_copper_slab | 3 | 6 | pickaxe | stone | **15.00** | **7.50** | 1.15 | 0.75 | 0.60 | 0.50 |  |  |
| exposed_cut_copper_stairs | 3 | 6 | pickaxe | stone | **15.00** | **7.50** | 1.15 | 0.75 | 0.60 | 0.50 |  |  |
| exposed_lightning_rod | 3 | 6 | pickaxe | stone | **15.00** | **7.50** | 1.15 | 0.75 | 0.60 | 0.50 |  |  |
| farmland | 0.6 | 0.6 | shovel | — | 0.90 | 0.45 | 0.25 | 0.15 | 0.15 | 0.10 |  |  |
| fern | 0 | 0 | hand | — | ทันที | ทันที | ทันที | ทันที | ทันที | ทันที |  |  |
| fire | 0 | 0 | hand | — | ทันที | ทันที | ทันที | ทันที | ทันที | ทันที | 15 | danger |
| fire_coral | 0 | 0 | hand | — | ทันที | ทันที | ทันที | ทันที | ทันที | ทันที |  |  |
| fire_coral_block | 1.5 | 6 | pickaxe | wooden | **7.50** | 1.15 | 0.60 | 0.40 | 0.30 | 0.25 |  |  |
| fire_coral_fan | 0 | 0 | hand | — | ทันที | ทันที | ทันที | ทันที | ทันที | ทันที |  |  |
| fire_coral_wall_fan | 0 | 0 | hand | — | ทันที | ทันที | ทันที | ทันที | ทันที | ทันที |  |  |
| firefly_bush | 0 | 0 | hand | — | ทันที | ทันที | ทันที | ทันที | ทันที | ทันที | 2 |  |
| fletching_table | 2.5 | 2.5 | axe | — | 3.75 | 1.90 | 0.95 | 0.65 | 0.50 | 0.45 |  |  |
| flower_pot | 0 | 0 | hand | — | ทันที | ทันที | ทันที | ทันที | ทันที | ทันที |  |  |
| flowering_azalea | 0 | 0 | hand | — | ทันที | ทันที | ทันที | ทันที | ทันที | ทันที |  |  |
| flowering_azalea_leaves | 0.2 | 0.2 | hoe | — | 0.30 | 0.15 | 0.10 | ทันที | ทันที | ทันที |  |  |
| frogspawn | 0 | 0 | hand | — | ทันที | ทันที | ทันที | ทันที | ทันที | ทันที |  |  |
| frosted_ice | 0.5 | 0.5 | hand | — | 0.75 | 0.75 | 0.75 | 0.75 | 0.75 | 0.75 |  | slippery |
| furnace | 3.5 | 3.5 | pickaxe | wooden | **17.50** | 2.65 | 1.35 | 0.90 | 0.70 | 0.60 |  |  |
| gilded_blackstone | 1.5 | 6 | pickaxe | wooden | **7.50** | 1.15 | 0.60 | 0.40 | 0.30 | 0.25 |  |  |
| glass | 0.3 | 0.3 | hand | — | 0.45 | 0.45 | 0.45 | 0.45 | 0.45 | 0.45 |  |  |
| glass_pane | 0.3 | 0.3 | hand | — | 0.45 | 0.45 | 0.45 | 0.45 | 0.45 | 0.45 |  |  |
| glow_lichen | 0.2 | 0.2 | axe | — | 0.30 | 0.15 | 0.10 | ทันที | ทันที | ทันที |  |  |
| glowstone | 0.3 | 0.3 | hand | — | 0.45 | 0.45 | 0.45 | 0.45 | 0.45 | 0.45 | 15 |  |
| gold_block | 3 | 6 | pickaxe | iron | **15.00** | **7.50** | **3.75** | 0.75 | 0.60 | 0.50 |  |  |
| gold_ore | 3 | 3 | pickaxe | iron | **15.00** | **7.50** | **3.75** | 0.75 | 0.60 | 0.50 |  |  |
| golden_dandelion | 0 | 0 | hand | — | ทันที | ทันที | ทันที | ทันที | ทันที | ทันที |  |  |
| granite | 1.5 | 6 | pickaxe | wooden | **7.50** | 1.15 | 0.60 | 0.40 | 0.30 | 0.25 |  |  |
| granite_slab | 1.5 | 6 | pickaxe | wooden | **7.50** | 1.15 | 0.60 | 0.40 | 0.30 | 0.25 |  |  |
| granite_stairs | 1.5 | 6 | pickaxe | wooden | **7.50** | 1.15 | 0.60 | 0.40 | 0.30 | 0.25 |  |  |
| granite_wall | 1.5 | 6 | pickaxe | wooden | **7.50** | 1.15 | 0.60 | 0.40 | 0.30 | 0.25 |  |  |
| grass_block | 0.6 | 0.6 | shovel | — | 0.90 | 0.45 | 0.25 | 0.15 | 0.15 | 0.10 |  |  |
| gravel | 0.6 | 0.6 | shovel | — | 0.90 | 0.45 | 0.25 | 0.15 | 0.15 | 0.10 |  | gravity |
| gray_banner | 1 | 1 | axe | — | 1.50 | 0.75 | 0.40 | 0.25 | 0.20 | 0.20 |  |  |
| gray_bed | 0.2 | 0.2 | hand | — | 0.30 | 0.30 | 0.30 | 0.30 | 0.30 | 0.30 |  | fallSafe |
| gray_candle | 0.1 | 0.1 | hand | — | 0.15 | 0.15 | 0.15 | 0.15 | 0.15 | 0.15 |  |  |
| gray_candle_cake | 0.5 | 0.5 | hand | — | 0.75 | 0.75 | 0.75 | 0.75 | 0.75 | 0.75 |  |  |
| gray_carpet | 0.1 | 0.1 | hand | — | 0.15 | 0.15 | 0.15 | 0.15 | 0.15 | 0.15 |  |  |
| gray_concrete | 1.8 | 1.8 | pickaxe | wooden | **9.00** | 1.35 | 0.70 | 0.45 | 0.35 | 0.30 |  |  |
| gray_concrete_powder | 0.5 | 0.5 | shovel | — | 0.75 | 0.40 | 0.20 | 0.15 | 0.10 | 0.10 |  | gravity |
| gray_glazed_terracotta | 1.4 | 1.4 | pickaxe | wooden | **7.00** | 1.05 | 0.55 | 0.35 | 0.30 | 0.25 |  |  |
| gray_shulker_box | 2 | 2 | pickaxe | — | 3.00 | 1.50 | 0.75 | 0.50 | 0.40 | 0.35 |  |  |
| gray_stained_glass | 0.3 | 0.3 | hand | — | 0.45 | 0.45 | 0.45 | 0.45 | 0.45 | 0.45 |  |  |
| gray_stained_glass_pane | 0.3 | 0.3 | hand | — | 0.45 | 0.45 | 0.45 | 0.45 | 0.45 | 0.45 |  |  |
| gray_terracotta | 1.25 | 4.2 | pickaxe | wooden | **6.25** | 0.95 | 0.50 | 0.35 | 0.25 | 0.25 |  |  |
| gray_wall_banner | 1 | 1 | axe | — | 1.50 | 0.75 | 0.40 | 0.25 | 0.20 | 0.20 |  |  |
| gray_wool | 0.8 | 0.8 | hand | — | 1.20 | 1.20 | 1.20 | 1.20 | 1.20 | 1.20 |  |  |
| green_banner | 1 | 1 | axe | — | 1.50 | 0.75 | 0.40 | 0.25 | 0.20 | 0.20 |  |  |
| green_bed | 0.2 | 0.2 | hand | — | 0.30 | 0.30 | 0.30 | 0.30 | 0.30 | 0.30 |  | fallSafe |
| green_candle | 0.1 | 0.1 | hand | — | 0.15 | 0.15 | 0.15 | 0.15 | 0.15 | 0.15 |  |  |
| green_candle_cake | 0.5 | 0.5 | hand | — | 0.75 | 0.75 | 0.75 | 0.75 | 0.75 | 0.75 |  |  |
| green_carpet | 0.1 | 0.1 | hand | — | 0.15 | 0.15 | 0.15 | 0.15 | 0.15 | 0.15 |  |  |
| green_concrete | 1.8 | 1.8 | pickaxe | wooden | **9.00** | 1.35 | 0.70 | 0.45 | 0.35 | 0.30 |  |  |
| green_concrete_powder | 0.5 | 0.5 | shovel | — | 0.75 | 0.40 | 0.20 | 0.15 | 0.10 | 0.10 |  | gravity |
| green_glazed_terracotta | 1.4 | 1.4 | pickaxe | wooden | **7.00** | 1.05 | 0.55 | 0.35 | 0.30 | 0.25 |  |  |
| green_shulker_box | 2 | 2 | pickaxe | — | 3.00 | 1.50 | 0.75 | 0.50 | 0.40 | 0.35 |  |  |
| green_stained_glass | 0.3 | 0.3 | hand | — | 0.45 | 0.45 | 0.45 | 0.45 | 0.45 | 0.45 |  |  |
| green_stained_glass_pane | 0.3 | 0.3 | hand | — | 0.45 | 0.45 | 0.45 | 0.45 | 0.45 | 0.45 |  |  |
| green_terracotta | 1.25 | 4.2 | pickaxe | wooden | **6.25** | 0.95 | 0.50 | 0.35 | 0.25 | 0.25 |  |  |
| green_wall_banner | 1 | 1 | axe | — | 1.50 | 0.75 | 0.40 | 0.25 | 0.20 | 0.20 |  |  |
| green_wool | 0.8 | 0.8 | hand | — | 1.20 | 1.20 | 1.20 | 1.20 | 1.20 | 1.20 |  |  |
| grindstone | 2 | 6 | pickaxe | wooden | **10.00** | 1.50 | 0.75 | 0.50 | 0.40 | 0.35 |  |  |
| hanging_roots | 0 | 0 | hand | — | ทันที | ทันที | ทันที | ทันที | ทันที | ทันที |  |  |
| hay_block | 0.5 | 0.5 | hoe | — | 0.75 | 0.40 | 0.20 | 0.15 | 0.10 | 0.10 |  | fallSafe |
| heavy_core | 10 | 1200 | pickaxe | — | 15.00 | 7.50 | 3.75 | 2.50 | 1.90 | 1.70 |  |  |
| heavy_weighted_pressure_plate | 0.5 | 0.5 | pickaxe | — | 0.75 | 0.40 | 0.20 | 0.15 | 0.10 | 0.10 |  |  |
| honey_block | 0 | 0 | hand | — | ทันที | ทันที | ทันที | ทันที | ทันที | ทันที |  | slows fallSafe |
| honeycomb_block | 0.6 | 0.6 | hand | — | 0.90 | 0.90 | 0.90 | 0.90 | 0.90 | 0.90 |  |  |
| hopper | 3 | 4.8 | pickaxe | wooden | **15.00** | 2.30 | 1.15 | 0.75 | 0.60 | 0.50 |  |  |
| horn_coral | 0 | 0 | hand | — | ทันที | ทันที | ทันที | ทันที | ทันที | ทันที |  |  |
| horn_coral_block | 1.5 | 6 | pickaxe | wooden | **7.50** | 1.15 | 0.60 | 0.40 | 0.30 | 0.25 |  |  |
| horn_coral_fan | 0 | 0 | hand | — | ทันที | ทันที | ทันที | ทันที | ทันที | ทันที |  |  |
| horn_coral_wall_fan | 0 | 0 | hand | — | ทันที | ทันที | ทันที | ทันที | ทันที | ทันที |  |  |
| ice | 0.5 | 0.5 | pickaxe | — | 0.75 | 0.40 | 0.20 | 0.15 | 0.10 | 0.10 |  | slippery |
| infested_chiseled_stone_bricks | 0.75 | 0.75 | pickaxe | — | 1.15 | 0.60 | 0.30 | 0.20 | 0.15 | 0.15 |  |  |
| infested_cobblestone | 1 | 0.75 | pickaxe | — | 1.50 | 0.75 | 0.40 | 0.25 | 0.20 | 0.20 |  |  |
| infested_cracked_stone_bricks | 0.75 | 0.75 | pickaxe | — | 1.15 | 0.60 | 0.30 | 0.20 | 0.15 | 0.15 |  |  |
| infested_deepslate | 1.5 | 0.75 | pickaxe | — | 2.30 | 1.15 | 0.60 | 0.40 | 0.30 | 0.25 |  |  |
| infested_mossy_stone_bricks | 0.75 | 0.75 | pickaxe | — | 1.15 | 0.60 | 0.30 | 0.20 | 0.15 | 0.15 |  |  |
| infested_stone | 0.75 | 0.75 | pickaxe | — | 1.15 | 0.60 | 0.30 | 0.20 | 0.15 | 0.15 |  |  |
| infested_stone_bricks | 0.75 | 0.75 | pickaxe | — | 1.15 | 0.60 | 0.30 | 0.20 | 0.15 | 0.15 |  |  |
| iron_bars | 5 | 6 | pickaxe | wooden | **25.00** | 3.75 | 1.90 | 1.25 | 0.95 | 0.85 |  |  |
| iron_block | 5 | 6 | pickaxe | stone | **25.00** | **12.50** | 1.90 | 1.25 | 0.95 | 0.85 |  |  |
| iron_chain | 5 | 6 | pickaxe | wooden | **25.00** | 3.75 | 1.90 | 1.25 | 0.95 | 0.85 |  |  |
| iron_door | 5 | 5 | pickaxe | — | 7.50 | 3.75 | 1.90 | 1.25 | 0.95 | 0.85 |  |  |
| iron_ore | 3 | 3 | pickaxe | stone | **15.00** | **7.50** | 1.15 | 0.75 | 0.60 | 0.50 |  |  |
| iron_trapdoor | 5 | 5 | pickaxe | wooden | **25.00** | 3.75 | 1.90 | 1.25 | 0.95 | 0.85 |  |  |
| jack_o_lantern | 1 | 1 | axe | — | 1.50 | 0.75 | 0.40 | 0.25 | 0.20 | 0.20 | 15 |  |
| jigsaw | -1 | 3600000 | hand | undefined | — | — | — | — | — | — |  |  |
| jukebox | 2 | 6 | axe | — | 3.00 | 1.50 | 0.75 | 0.50 | 0.40 | 0.35 |  |  |
| jungle_button | 0.5 | 0.5 | axe | — | 0.75 | 0.40 | 0.20 | 0.15 | 0.10 | 0.10 |  |  |
| jungle_door | 3 | 3 | axe | — | 4.55 | 2.30 | 1.15 | 0.75 | 0.60 | 0.50 |  |  |
| jungle_fence | 2 | 3 | axe | — | 3.00 | 1.50 | 0.75 | 0.50 | 0.40 | 0.35 |  |  |
| jungle_fence_gate | 2 | 3 | axe | — | 3.00 | 1.50 | 0.75 | 0.50 | 0.40 | 0.35 |  |  |
| jungle_hanging_sign | 1 | 1 | axe | — | 1.50 | 0.75 | 0.40 | 0.25 | 0.20 | 0.20 |  |  |
| jungle_leaves | 0.2 | 0.2 | hoe | — | 0.30 | 0.15 | 0.10 | ทันที | ทันที | ทันที |  |  |
| jungle_log | 2 | 2 | axe | — | 3.00 | 1.50 | 0.75 | 0.50 | 0.40 | 0.35 |  |  |
| jungle_planks | 2 | 3 | axe | — | 3.00 | 1.50 | 0.75 | 0.50 | 0.40 | 0.35 |  |  |
| jungle_pressure_plate | 0.5 | 0.5 | axe | — | 0.75 | 0.40 | 0.20 | 0.15 | 0.10 | 0.10 |  |  |
| jungle_sapling | 0 | 0 | hand | — | ทันที | ทันที | ทันที | ทันที | ทันที | ทันที |  |  |
| jungle_shelf | 2 | 3 | axe | — | 3.00 | 1.50 | 0.75 | 0.50 | 0.40 | 0.35 |  |  |
| jungle_sign | 1 | 1 | axe | — | 1.50 | 0.75 | 0.40 | 0.25 | 0.20 | 0.20 |  |  |
| jungle_slab | 2 | 3 | axe | — | 3.00 | 1.50 | 0.75 | 0.50 | 0.40 | 0.35 |  |  |
| jungle_stairs | 2 | 3 | axe | — | 3.00 | 1.50 | 0.75 | 0.50 | 0.40 | 0.35 |  |  |
| jungle_trapdoor | 3 | 3 | axe | — | 4.55 | 2.30 | 1.15 | 0.75 | 0.60 | 0.50 |  |  |
| jungle_wall_hanging_sign | 1 | 1 | axe | — | 1.50 | 0.75 | 0.40 | 0.25 | 0.20 | 0.20 |  |  |
| jungle_wall_sign | 1 | 1 | axe | — | 1.50 | 0.75 | 0.40 | 0.25 | 0.20 | 0.20 |  |  |
| jungle_wood | 2 | 2 | axe | — | 3.00 | 1.50 | 0.75 | 0.50 | 0.40 | 0.35 |  |  |
| kelp | 0 | 0 | hand | — | ทันที | ทันที | ทันที | ทันที | ทันที | ทันที |  |  |
| kelp_plant | 0 | 0 | hand | — | ทันที | ทันที | ทันที | ทันที | ทันที | ทันที |  |  |
| ladder | 0.4 | 0.4 | axe | — | 0.60 | 0.30 | 0.15 | 0.10 | 0.10 | 0.10 |  | climbable fallSafe |
| lantern | 3.5 | 3.5 | pickaxe | — | 5.30 | 2.65 | 1.35 | 0.90 | 0.70 | 0.60 | 15 |  |
| lapis_block | 3 | 3 | pickaxe | stone | **15.00** | **7.50** | 1.15 | 0.75 | 0.60 | 0.50 |  |  |
| lapis_ore | 3 | 3 | pickaxe | stone | **15.00** | **7.50** | 1.15 | 0.75 | 0.60 | 0.50 |  |  |
| large_amethyst_bud | 1.5 | 1.5 | pickaxe | — | 2.30 | 1.15 | 0.60 | 0.40 | 0.30 | 0.25 | 4 |  |
| large_fern | 0 | 0 | hand | — | ทันที | ทันที | ทันที | ทันที | ทันที | ทันที |  |  |
| lava | 100 | 100 | hand | — | 150.00 | 150.00 | 150.00 | 150.00 | 150.00 | 150.00 | 15 | danger slows |
| lava_cauldron | 2 | 2 | pickaxe | wooden | **10.00** | 1.50 | 0.75 | 0.50 | 0.40 | 0.35 | 15 |  |
| leaf_litter | 0 | 0 | hand | — | ทันที | ทันที | ทันที | ทันที | ทันที | ทันที |  |  |
| lectern | 2.5 | 2.5 | axe | — | 3.75 | 1.90 | 0.95 | 0.65 | 0.50 | 0.45 |  |  |
| lever | 0.5 | 0.5 | hand | — | 0.75 | 0.75 | 0.75 | 0.75 | 0.75 | 0.75 |  |  |
| light | -1 | 3600000.8 | hand | — | — | — | — | — | — | — | 15 |  |
| light_blue_banner | 1 | 1 | axe | — | 1.50 | 0.75 | 0.40 | 0.25 | 0.20 | 0.20 |  |  |
| light_blue_bed | 0.2 | 0.2 | hand | — | 0.30 | 0.30 | 0.30 | 0.30 | 0.30 | 0.30 |  | fallSafe |
| light_blue_candle | 0.1 | 0.1 | hand | — | 0.15 | 0.15 | 0.15 | 0.15 | 0.15 | 0.15 |  |  |
| light_blue_candle_cake | 0.5 | 0.5 | hand | — | 0.75 | 0.75 | 0.75 | 0.75 | 0.75 | 0.75 |  |  |
| light_blue_carpet | 0.1 | 0.1 | hand | — | 0.15 | 0.15 | 0.15 | 0.15 | 0.15 | 0.15 |  |  |
| light_blue_concrete | 1.8 | 1.8 | pickaxe | wooden | **9.00** | 1.35 | 0.70 | 0.45 | 0.35 | 0.30 |  |  |
| light_blue_concrete_powder | 0.5 | 0.5 | shovel | — | 0.75 | 0.40 | 0.20 | 0.15 | 0.10 | 0.10 |  | gravity |
| light_blue_glazed_terracotta | 1.4 | 1.4 | pickaxe | wooden | **7.00** | 1.05 | 0.55 | 0.35 | 0.30 | 0.25 |  |  |
| light_blue_shulker_box | 2 | 2 | pickaxe | — | 3.00 | 1.50 | 0.75 | 0.50 | 0.40 | 0.35 |  |  |
| light_blue_stained_glass | 0.3 | 0.3 | hand | — | 0.45 | 0.45 | 0.45 | 0.45 | 0.45 | 0.45 |  |  |
| light_blue_stained_glass_pane | 0.3 | 0.3 | hand | — | 0.45 | 0.45 | 0.45 | 0.45 | 0.45 | 0.45 |  |  |
| light_blue_terracotta | 1.25 | 4.2 | pickaxe | wooden | **6.25** | 0.95 | 0.50 | 0.35 | 0.25 | 0.25 |  |  |
| light_blue_wall_banner | 1 | 1 | axe | — | 1.50 | 0.75 | 0.40 | 0.25 | 0.20 | 0.20 |  |  |
| light_blue_wool | 0.8 | 0.8 | hand | — | 1.20 | 1.20 | 1.20 | 1.20 | 1.20 | 1.20 |  |  |
| light_gray_banner | 1 | 1 | axe | — | 1.50 | 0.75 | 0.40 | 0.25 | 0.20 | 0.20 |  |  |
| light_gray_bed | 0.2 | 0.2 | hand | — | 0.30 | 0.30 | 0.30 | 0.30 | 0.30 | 0.30 |  | fallSafe |
| light_gray_candle | 0.1 | 0.1 | hand | — | 0.15 | 0.15 | 0.15 | 0.15 | 0.15 | 0.15 |  |  |
| light_gray_candle_cake | 0.5 | 0.5 | hand | — | 0.75 | 0.75 | 0.75 | 0.75 | 0.75 | 0.75 |  |  |
| light_gray_carpet | 0.1 | 0.1 | hand | — | 0.15 | 0.15 | 0.15 | 0.15 | 0.15 | 0.15 |  |  |
| light_gray_concrete | 1.8 | 1.8 | pickaxe | wooden | **9.00** | 1.35 | 0.70 | 0.45 | 0.35 | 0.30 |  |  |
| light_gray_concrete_powder | 0.5 | 0.5 | shovel | — | 0.75 | 0.40 | 0.20 | 0.15 | 0.10 | 0.10 |  | gravity |
| light_gray_glazed_terracotta | 1.4 | 1.4 | pickaxe | wooden | **7.00** | 1.05 | 0.55 | 0.35 | 0.30 | 0.25 |  |  |
| light_gray_shulker_box | 2 | 2 | pickaxe | — | 3.00 | 1.50 | 0.75 | 0.50 | 0.40 | 0.35 |  |  |
| light_gray_stained_glass | 0.3 | 0.3 | hand | — | 0.45 | 0.45 | 0.45 | 0.45 | 0.45 | 0.45 |  |  |
| light_gray_stained_glass_pane | 0.3 | 0.3 | hand | — | 0.45 | 0.45 | 0.45 | 0.45 | 0.45 | 0.45 |  |  |
| light_gray_terracotta | 1.25 | 4.2 | pickaxe | wooden | **6.25** | 0.95 | 0.50 | 0.35 | 0.25 | 0.25 |  |  |
| light_gray_wall_banner | 1 | 1 | axe | — | 1.50 | 0.75 | 0.40 | 0.25 | 0.20 | 0.20 |  |  |
| light_gray_wool | 0.8 | 0.8 | hand | — | 1.20 | 1.20 | 1.20 | 1.20 | 1.20 | 1.20 |  |  |
| light_weighted_pressure_plate | 0.5 | 0.5 | pickaxe | — | 0.75 | 0.40 | 0.20 | 0.15 | 0.10 | 0.10 |  |  |
| lightning_rod | 3 | 6 | pickaxe | stone | **15.00** | **7.50** | 1.15 | 0.75 | 0.60 | 0.50 |  |  |
| lilac | 0 | 0 | hand | — | ทันที | ทันที | ทันที | ทันที | ทันที | ทันที |  |  |
| lily_of_the_valley | 0 | 0 | hand | — | ทันที | ทันที | ทันที | ทันที | ทันที | ทันที |  |  |
| lily_pad | 0 | 0 | hand | — | ทันที | ทันที | ทันที | ทันที | ทันที | ทันที |  |  |
| lime_banner | 1 | 1 | axe | — | 1.50 | 0.75 | 0.40 | 0.25 | 0.20 | 0.20 |  |  |
| lime_bed | 0.2 | 0.2 | hand | — | 0.30 | 0.30 | 0.30 | 0.30 | 0.30 | 0.30 |  | fallSafe |
| lime_candle | 0.1 | 0.1 | hand | — | 0.15 | 0.15 | 0.15 | 0.15 | 0.15 | 0.15 |  |  |
| lime_candle_cake | 0.5 | 0.5 | hand | — | 0.75 | 0.75 | 0.75 | 0.75 | 0.75 | 0.75 |  |  |
| lime_carpet | 0.1 | 0.1 | hand | — | 0.15 | 0.15 | 0.15 | 0.15 | 0.15 | 0.15 |  |  |
| lime_concrete | 1.8 | 1.8 | pickaxe | wooden | **9.00** | 1.35 | 0.70 | 0.45 | 0.35 | 0.30 |  |  |
| lime_concrete_powder | 0.5 | 0.5 | shovel | — | 0.75 | 0.40 | 0.20 | 0.15 | 0.10 | 0.10 |  | gravity |
| lime_glazed_terracotta | 1.4 | 1.4 | pickaxe | wooden | **7.00** | 1.05 | 0.55 | 0.35 | 0.30 | 0.25 |  |  |
| lime_shulker_box | 2 | 2 | pickaxe | — | 3.00 | 1.50 | 0.75 | 0.50 | 0.40 | 0.35 |  |  |
| lime_stained_glass | 0.3 | 0.3 | hand | — | 0.45 | 0.45 | 0.45 | 0.45 | 0.45 | 0.45 |  |  |
| lime_stained_glass_pane | 0.3 | 0.3 | hand | — | 0.45 | 0.45 | 0.45 | 0.45 | 0.45 | 0.45 |  |  |
| lime_terracotta | 1.25 | 4.2 | pickaxe | wooden | **6.25** | 0.95 | 0.50 | 0.35 | 0.25 | 0.25 |  |  |
| lime_wall_banner | 1 | 1 | axe | — | 1.50 | 0.75 | 0.40 | 0.25 | 0.20 | 0.20 |  |  |
| lime_wool | 0.8 | 0.8 | hand | — | 1.20 | 1.20 | 1.20 | 1.20 | 1.20 | 1.20 |  |  |
| lodestone | 3.5 | 3.5 | pickaxe | wooden | **17.50** | 2.65 | 1.35 | 0.90 | 0.70 | 0.60 |  |  |
| loom | 2.5 | 2.5 | axe | — | 3.75 | 1.90 | 0.95 | 0.65 | 0.50 | 0.45 |  |  |
| magenta_banner | 1 | 1 | axe | — | 1.50 | 0.75 | 0.40 | 0.25 | 0.20 | 0.20 |  |  |
| magenta_bed | 0.2 | 0.2 | hand | — | 0.30 | 0.30 | 0.30 | 0.30 | 0.30 | 0.30 |  | fallSafe |
| magenta_candle | 0.1 | 0.1 | hand | — | 0.15 | 0.15 | 0.15 | 0.15 | 0.15 | 0.15 |  |  |
| magenta_candle_cake | 0.5 | 0.5 | hand | — | 0.75 | 0.75 | 0.75 | 0.75 | 0.75 | 0.75 |  |  |
| magenta_carpet | 0.1 | 0.1 | hand | — | 0.15 | 0.15 | 0.15 | 0.15 | 0.15 | 0.15 |  |  |
| magenta_concrete | 1.8 | 1.8 | pickaxe | wooden | **9.00** | 1.35 | 0.70 | 0.45 | 0.35 | 0.30 |  |  |
| magenta_concrete_powder | 0.5 | 0.5 | shovel | — | 0.75 | 0.40 | 0.20 | 0.15 | 0.10 | 0.10 |  | gravity |
| magenta_glazed_terracotta | 1.4 | 1.4 | pickaxe | wooden | **7.00** | 1.05 | 0.55 | 0.35 | 0.30 | 0.25 |  |  |
| magenta_shulker_box | 2 | 2 | pickaxe | — | 3.00 | 1.50 | 0.75 | 0.50 | 0.40 | 0.35 |  |  |
| magenta_stained_glass | 0.3 | 0.3 | hand | — | 0.45 | 0.45 | 0.45 | 0.45 | 0.45 | 0.45 |  |  |
| magenta_stained_glass_pane | 0.3 | 0.3 | hand | — | 0.45 | 0.45 | 0.45 | 0.45 | 0.45 | 0.45 |  |  |
| magenta_terracotta | 1.25 | 4.2 | pickaxe | wooden | **6.25** | 0.95 | 0.50 | 0.35 | 0.25 | 0.25 |  |  |
| magenta_wall_banner | 1 | 1 | axe | — | 1.50 | 0.75 | 0.40 | 0.25 | 0.20 | 0.20 |  |  |
| magenta_wool | 0.8 | 0.8 | hand | — | 1.20 | 1.20 | 1.20 | 1.20 | 1.20 | 1.20 |  |  |
| magma_block | 0.5 | 0.5 | pickaxe | wooden | **2.50** | 0.40 | 0.20 | 0.15 | 0.10 | 0.10 | 3 | danger |
| mangrove_button | 0.5 | 0.5 | axe | — | 0.75 | 0.40 | 0.20 | 0.15 | 0.10 | 0.10 |  |  |
| mangrove_door | 3 | 3 | axe | — | 4.55 | 2.30 | 1.15 | 0.75 | 0.60 | 0.50 |  |  |
| mangrove_fence | 2 | 3 | axe | — | 3.00 | 1.50 | 0.75 | 0.50 | 0.40 | 0.35 |  |  |
| mangrove_fence_gate | 2 | 3 | axe | — | 3.00 | 1.50 | 0.75 | 0.50 | 0.40 | 0.35 |  |  |
| mangrove_hanging_sign | 1 | 1 | axe | — | 1.50 | 0.75 | 0.40 | 0.25 | 0.20 | 0.20 |  |  |
| mangrove_leaves | 0.2 | 0.2 | hoe | — | 0.30 | 0.15 | 0.10 | ทันที | ทันที | ทันที |  |  |
| mangrove_log | 2 | 2 | axe | — | 3.00 | 1.50 | 0.75 | 0.50 | 0.40 | 0.35 |  |  |
| mangrove_planks | 2 | 3 | axe | — | 3.00 | 1.50 | 0.75 | 0.50 | 0.40 | 0.35 |  |  |
| mangrove_pressure_plate | 0.5 | 0.5 | axe | — | 0.75 | 0.40 | 0.20 | 0.15 | 0.10 | 0.10 |  |  |
| mangrove_propagule | 0 | 0 | hand | — | ทันที | ทันที | ทันที | ทันที | ทันที | ทันที |  |  |
| mangrove_roots | 0.7 | 0.7 | axe | — | 1.05 | 0.55 | 0.30 | 0.20 | 0.15 | 0.15 |  |  |
| mangrove_shelf | 2 | 3 | axe | — | 3.00 | 1.50 | 0.75 | 0.50 | 0.40 | 0.35 |  |  |
| mangrove_sign | 1 | 1 | axe | — | 1.50 | 0.75 | 0.40 | 0.25 | 0.20 | 0.20 |  |  |
| mangrove_slab | 2 | 3 | axe | — | 3.00 | 1.50 | 0.75 | 0.50 | 0.40 | 0.35 |  |  |
| mangrove_stairs | 2 | 3 | axe | — | 3.00 | 1.50 | 0.75 | 0.50 | 0.40 | 0.35 |  |  |
| mangrove_trapdoor | 3 | 3 | axe | — | 4.55 | 2.30 | 1.15 | 0.75 | 0.60 | 0.50 |  |  |
| mangrove_wall_hanging_sign | 1 | 1 | axe | — | 1.50 | 0.75 | 0.40 | 0.25 | 0.20 | 0.20 |  |  |
| mangrove_wall_sign | 1 | 1 | axe | — | 1.50 | 0.75 | 0.40 | 0.25 | 0.20 | 0.20 |  |  |
| mangrove_wood | 2 | 2 | axe | — | 3.00 | 1.50 | 0.75 | 0.50 | 0.40 | 0.35 |  |  |
| medium_amethyst_bud | 1.5 | 1.5 | pickaxe | — | 2.30 | 1.15 | 0.60 | 0.40 | 0.30 | 0.25 | 2 |  |
| melon | 1 | 1 | axe | — | 1.50 | 0.75 | 0.40 | 0.25 | 0.20 | 0.20 |  |  |
| melon_stem | 0 | 0 | hand | — | ทันที | ทันที | ทันที | ทันที | ทันที | ทันที |  |  |
| moss_block | 0.1 | 0.1 | hoe | — | 0.15 | 0.10 | ทันที | ทันที | ทันที | ทันที |  |  |
| moss_carpet | 0.1 | 0.1 | hoe | — | 0.15 | 0.10 | ทันที | ทันที | ทันที | ทันที |  |  |
| mossy_cobblestone | 2 | 6 | pickaxe | wooden | **10.00** | 1.50 | 0.75 | 0.50 | 0.40 | 0.35 |  |  |
| mossy_cobblestone_slab | 2 | 6 | pickaxe | wooden | **10.00** | 1.50 | 0.75 | 0.50 | 0.40 | 0.35 |  |  |
| mossy_cobblestone_stairs | 2 | 6 | pickaxe | wooden | **10.00** | 1.50 | 0.75 | 0.50 | 0.40 | 0.35 |  |  |
| mossy_cobblestone_wall | 2 | 6 | pickaxe | wooden | **10.00** | 1.50 | 0.75 | 0.50 | 0.40 | 0.35 |  |  |
| mossy_stone_brick_slab | 1.5 | 6 | pickaxe | wooden | **7.50** | 1.15 | 0.60 | 0.40 | 0.30 | 0.25 |  |  |
| mossy_stone_brick_stairs | 1.5 | 6 | pickaxe | wooden | **7.50** | 1.15 | 0.60 | 0.40 | 0.30 | 0.25 |  |  |
| mossy_stone_brick_wall | 1.5 | 6 | pickaxe | wooden | **7.50** | 1.15 | 0.60 | 0.40 | 0.30 | 0.25 |  |  |
| mossy_stone_bricks | 1.5 | 6 | pickaxe | wooden | **7.50** | 1.15 | 0.60 | 0.40 | 0.30 | 0.25 |  |  |
| moving_piston | -1 | 0 | hand | — | — | — | — | — | — | — |  |  |
| mud | 0.5 | 0.5 | shovel | — | 0.75 | 0.40 | 0.20 | 0.15 | 0.10 | 0.10 |  | slows |
| mud_brick_slab | 1.5 | 3 | pickaxe | wooden | **7.50** | 1.15 | 0.60 | 0.40 | 0.30 | 0.25 |  |  |
| mud_brick_stairs | 1.5 | 3 | pickaxe | wooden | **7.50** | 1.15 | 0.60 | 0.40 | 0.30 | 0.25 |  |  |
| mud_brick_wall | 1.5 | 3 | pickaxe | wooden | **7.50** | 1.15 | 0.60 | 0.40 | 0.30 | 0.25 |  |  |
| mud_bricks | 1.5 | 3 | pickaxe | wooden | **7.50** | 1.15 | 0.60 | 0.40 | 0.30 | 0.25 |  |  |
| muddy_mangrove_roots | 0.7 | 0.7 | shovel | — | 1.05 | 0.55 | 0.30 | 0.20 | 0.15 | 0.15 |  |  |
| mushroom_stem | 0.2 | 0.2 | axe | — | 0.30 | 0.15 | 0.10 | ทันที | ทันที | ทันที |  |  |
| mycelium | 0.6 | 0.6 | shovel | — | 0.90 | 0.45 | 0.25 | 0.15 | 0.15 | 0.10 |  |  |
| nether_brick_fence | 2 | 6 | pickaxe | wooden | **10.00** | 1.50 | 0.75 | 0.50 | 0.40 | 0.35 |  |  |
| nether_brick_slab | 2 | 6 | pickaxe | wooden | **10.00** | 1.50 | 0.75 | 0.50 | 0.40 | 0.35 |  |  |
| nether_brick_stairs | 2 | 6 | pickaxe | wooden | **10.00** | 1.50 | 0.75 | 0.50 | 0.40 | 0.35 |  |  |
| nether_brick_wall | 2 | 6 | pickaxe | wooden | **10.00** | 1.50 | 0.75 | 0.50 | 0.40 | 0.35 |  |  |
| nether_bricks | 2 | 6 | pickaxe | wooden | **10.00** | 1.50 | 0.75 | 0.50 | 0.40 | 0.35 |  |  |
| nether_gold_ore | 3 | 3 | pickaxe | wooden | **15.00** | 2.30 | 1.15 | 0.75 | 0.60 | 0.50 |  |  |
| nether_portal | -1 | 0 | hand | — | — | — | — | — | — | — | 11 |  |
| nether_quartz_ore | 3 | 3 | pickaxe | wooden | **15.00** | 2.30 | 1.15 | 0.75 | 0.60 | 0.50 |  |  |
| nether_sprouts | 0 | 0 | hand | — | ทันที | ทันที | ทันที | ทันที | ทันที | ทันที |  |  |
| nether_wart | 0 | 0 | hand | — | ทันที | ทันที | ทันที | ทันที | ทันที | ทันที |  |  |
| nether_wart_block | 1 | 1 | hoe | — | 1.50 | 0.75 | 0.40 | 0.25 | 0.20 | 0.20 |  |  |
| netherite_block | 50 | 1200 | pickaxe | diamond | **250.00** | **125.00** | **62.50** | **41.70** | 9.40 | 8.35 |  |  |
| netherrack | 0.4 | 0.4 | pickaxe | wooden | **2.00** | 0.30 | 0.15 | 0.10 | 0.10 | 0.10 |  |  |
| note_block | 0.8 | 0.8 | axe | — | 1.20 | 0.60 | 0.30 | 0.20 | 0.15 | 0.15 |  |  |
| oak_button | 0.5 | 0.5 | axe | — | 0.75 | 0.40 | 0.20 | 0.15 | 0.10 | 0.10 |  |  |
| oak_door | 3 | 3 | axe | — | 4.55 | 2.30 | 1.15 | 0.75 | 0.60 | 0.50 |  |  |
| oak_fence | 2 | 3 | axe | — | 3.00 | 1.50 | 0.75 | 0.50 | 0.40 | 0.35 |  |  |
| oak_fence_gate | 2 | 3 | axe | — | 3.00 | 1.50 | 0.75 | 0.50 | 0.40 | 0.35 |  |  |
| oak_hanging_sign | 1 | 1 | axe | — | 1.50 | 0.75 | 0.40 | 0.25 | 0.20 | 0.20 |  |  |
| oak_leaves | 0.2 | 0.2 | hoe | — | 0.30 | 0.15 | 0.10 | ทันที | ทันที | ทันที |  |  |
| oak_log | 2 | 2 | axe | — | 3.00 | 1.50 | 0.75 | 0.50 | 0.40 | 0.35 |  |  |
| oak_planks | 2 | 3 | axe | — | 3.00 | 1.50 | 0.75 | 0.50 | 0.40 | 0.35 |  |  |
| oak_pressure_plate | 0.5 | 0.5 | axe | — | 0.75 | 0.40 | 0.20 | 0.15 | 0.10 | 0.10 |  |  |
| oak_sapling | 0 | 0 | hand | — | ทันที | ทันที | ทันที | ทันที | ทันที | ทันที |  |  |
| oak_shelf | 2 | 3 | axe | — | 3.00 | 1.50 | 0.75 | 0.50 | 0.40 | 0.35 |  |  |
| oak_sign | 1 | 1 | axe | — | 1.50 | 0.75 | 0.40 | 0.25 | 0.20 | 0.20 |  |  |
| oak_slab | 2 | 3 | axe | — | 3.00 | 1.50 | 0.75 | 0.50 | 0.40 | 0.35 |  |  |
| oak_stairs | 2 | 3 | axe | — | 3.00 | 1.50 | 0.75 | 0.50 | 0.40 | 0.35 |  |  |
| oak_trapdoor | 3 | 3 | axe | — | 4.55 | 2.30 | 1.15 | 0.75 | 0.60 | 0.50 |  |  |
| oak_wall_hanging_sign | 1 | 1 | axe | — | 1.50 | 0.75 | 0.40 | 0.25 | 0.20 | 0.20 |  |  |
| oak_wall_sign | 1 | 1 | axe | — | 1.50 | 0.75 | 0.40 | 0.25 | 0.20 | 0.20 |  |  |
| oak_wood | 2 | 2 | axe | — | 3.00 | 1.50 | 0.75 | 0.50 | 0.40 | 0.35 |  |  |
| observer | 3 | 3 | pickaxe | wooden | **15.00** | 2.30 | 1.15 | 0.75 | 0.60 | 0.50 |  |  |
| obsidian | 50 | 1200 | pickaxe | diamond | **250.00** | **125.00** | **62.50** | **41.70** | 9.40 | 8.35 |  |  |
| ochre_froglight | 0.3 | 0.3 | hand | — | 0.45 | 0.45 | 0.45 | 0.45 | 0.45 | 0.45 | 15 |  |
| open_eyeblossom | 0 | 0 | hand | — | ทันที | ทันที | ทันที | ทันที | ทันที | ทันที |  |  |
| orange_banner | 1 | 1 | axe | — | 1.50 | 0.75 | 0.40 | 0.25 | 0.20 | 0.20 |  |  |
| orange_bed | 0.2 | 0.2 | hand | — | 0.30 | 0.30 | 0.30 | 0.30 | 0.30 | 0.30 |  | fallSafe |
| orange_candle | 0.1 | 0.1 | hand | — | 0.15 | 0.15 | 0.15 | 0.15 | 0.15 | 0.15 |  |  |
| orange_candle_cake | 0.5 | 0.5 | hand | — | 0.75 | 0.75 | 0.75 | 0.75 | 0.75 | 0.75 |  |  |
| orange_carpet | 0.1 | 0.1 | hand | — | 0.15 | 0.15 | 0.15 | 0.15 | 0.15 | 0.15 |  |  |
| orange_concrete | 1.8 | 1.8 | pickaxe | wooden | **9.00** | 1.35 | 0.70 | 0.45 | 0.35 | 0.30 |  |  |
| orange_concrete_powder | 0.5 | 0.5 | shovel | — | 0.75 | 0.40 | 0.20 | 0.15 | 0.10 | 0.10 |  | gravity |
| orange_glazed_terracotta | 1.4 | 1.4 | pickaxe | wooden | **7.00** | 1.05 | 0.55 | 0.35 | 0.30 | 0.25 |  |  |
| orange_shulker_box | 2 | 2 | pickaxe | — | 3.00 | 1.50 | 0.75 | 0.50 | 0.40 | 0.35 |  |  |
| orange_stained_glass | 0.3 | 0.3 | hand | — | 0.45 | 0.45 | 0.45 | 0.45 | 0.45 | 0.45 |  |  |
| orange_stained_glass_pane | 0.3 | 0.3 | hand | — | 0.45 | 0.45 | 0.45 | 0.45 | 0.45 | 0.45 |  |  |
| orange_terracotta | 1.25 | 4.2 | pickaxe | wooden | **6.25** | 0.95 | 0.50 | 0.35 | 0.25 | 0.25 |  |  |
| orange_tulip | 0 | 0 | hand | — | ทันที | ทันที | ทันที | ทันที | ทันที | ทันที |  |  |
| orange_wall_banner | 1 | 1 | axe | — | 1.50 | 0.75 | 0.40 | 0.25 | 0.20 | 0.20 |  |  |
| orange_wool | 0.8 | 0.8 | hand | — | 1.20 | 1.20 | 1.20 | 1.20 | 1.20 | 1.20 |  |  |
| oxeye_daisy | 0 | 0 | hand | — | ทันที | ทันที | ทันที | ทันที | ทันที | ทันที |  |  |
| oxidized_chiseled_copper | 3 | 6 | pickaxe | stone | **15.00** | **7.50** | 1.15 | 0.75 | 0.60 | 0.50 |  |  |
| oxidized_copper | 3 | 6 | pickaxe | stone | **15.00** | **7.50** | 1.15 | 0.75 | 0.60 | 0.50 |  |  |
| oxidized_copper_bars | 5 | 6 | pickaxe | wooden | **25.00** | 3.75 | 1.90 | 1.25 | 0.95 | 0.85 |  |  |
| oxidized_copper_bulb | 3 | 6 | pickaxe | stone | **15.00** | **7.50** | 1.15 | 0.75 | 0.60 | 0.50 |  |  |
| oxidized_copper_chain | 5 | 6 | pickaxe | wooden | **25.00** | 3.75 | 1.90 | 1.25 | 0.95 | 0.85 |  |  |
| oxidized_copper_chest | 3 | 6 | pickaxe | stone | **15.00** | **7.50** | 1.15 | 0.75 | 0.60 | 0.50 |  |  |
| oxidized_copper_door | 3 | 6 | pickaxe | — | 4.55 | 2.30 | 1.15 | 0.75 | 0.60 | 0.50 |  |  |
| oxidized_copper_golem_statue | 3 | 6 | pickaxe | — | 4.55 | 2.30 | 1.15 | 0.75 | 0.60 | 0.50 |  |  |
| oxidized_copper_grate | 3 | 6 | pickaxe | stone | **15.00** | **7.50** | 1.15 | 0.75 | 0.60 | 0.50 |  |  |
| oxidized_copper_lantern | 3.5 | 3.5 | pickaxe | — | 5.30 | 2.65 | 1.35 | 0.90 | 0.70 | 0.60 | 15 |  |
| oxidized_copper_trapdoor | 3 | 6 | pickaxe | stone | **15.00** | **7.50** | 1.15 | 0.75 | 0.60 | 0.50 |  |  |
| oxidized_cut_copper | 3 | 6 | pickaxe | stone | **15.00** | **7.50** | 1.15 | 0.75 | 0.60 | 0.50 |  |  |
| oxidized_cut_copper_slab | 3 | 6 | pickaxe | stone | **15.00** | **7.50** | 1.15 | 0.75 | 0.60 | 0.50 |  |  |
| oxidized_cut_copper_stairs | 3 | 6 | pickaxe | stone | **15.00** | **7.50** | 1.15 | 0.75 | 0.60 | 0.50 |  |  |
| oxidized_lightning_rod | 3 | 6 | pickaxe | stone | **15.00** | **7.50** | 1.15 | 0.75 | 0.60 | 0.50 |  |  |
| packed_ice | 0.5 | 0.5 | pickaxe | — | 0.75 | 0.40 | 0.20 | 0.15 | 0.10 | 0.10 |  | slippery |
| packed_mud | 1 | 3 | pickaxe | — | 1.50 | 0.75 | 0.40 | 0.25 | 0.20 | 0.20 |  |  |
| pale_hanging_moss | 0 | 0 | hand | — | ทันที | ทันที | ทันที | ทันที | ทันที | ทันที |  |  |
| pale_moss_block | 0.1 | 0.1 | hoe | — | 0.15 | 0.10 | ทันที | ทันที | ทันที | ทันที |  |  |
| pale_moss_carpet | 0.1 | 0.1 | hoe | — | 0.15 | 0.10 | ทันที | ทันที | ทันที | ทันที |  |  |
| pale_oak_button | 0.5 | 0.5 | axe | — | 0.75 | 0.40 | 0.20 | 0.15 | 0.10 | 0.10 |  |  |
| pale_oak_door | 3 | 3 | axe | — | 4.55 | 2.30 | 1.15 | 0.75 | 0.60 | 0.50 |  |  |
| pale_oak_fence | 2 | 3 | axe | — | 3.00 | 1.50 | 0.75 | 0.50 | 0.40 | 0.35 |  |  |
| pale_oak_fence_gate | 2 | 3 | axe | — | 3.00 | 1.50 | 0.75 | 0.50 | 0.40 | 0.35 |  |  |
| pale_oak_hanging_sign | 1 | 1 | axe | — | 1.50 | 0.75 | 0.40 | 0.25 | 0.20 | 0.20 |  |  |
| pale_oak_leaves | 0.2 | 0.2 | hoe | — | 0.30 | 0.15 | 0.10 | ทันที | ทันที | ทันที |  |  |
| pale_oak_log | 2 | 2 | axe | — | 3.00 | 1.50 | 0.75 | 0.50 | 0.40 | 0.35 |  |  |
| pale_oak_planks | 2 | 3 | axe | — | 3.00 | 1.50 | 0.75 | 0.50 | 0.40 | 0.35 |  |  |
| pale_oak_pressure_plate | 0.5 | 0.5 | axe | — | 0.75 | 0.40 | 0.20 | 0.15 | 0.10 | 0.10 |  |  |
| pale_oak_sapling | 0 | 0 | hand | — | ทันที | ทันที | ทันที | ทันที | ทันที | ทันที |  |  |
| pale_oak_shelf | 2 | 3 | axe | — | 3.00 | 1.50 | 0.75 | 0.50 | 0.40 | 0.35 |  |  |
| pale_oak_sign | 1 | 1 | axe | — | 1.50 | 0.75 | 0.40 | 0.25 | 0.20 | 0.20 |  |  |
| pale_oak_slab | 2 | 3 | axe | — | 3.00 | 1.50 | 0.75 | 0.50 | 0.40 | 0.35 |  |  |
| pale_oak_stairs | 2 | 3 | axe | — | 3.00 | 1.50 | 0.75 | 0.50 | 0.40 | 0.35 |  |  |
| pale_oak_trapdoor | 3 | 3 | axe | — | 4.55 | 2.30 | 1.15 | 0.75 | 0.60 | 0.50 |  |  |
| pale_oak_wall_hanging_sign | 1 | 1 | axe | — | 1.50 | 0.75 | 0.40 | 0.25 | 0.20 | 0.20 |  |  |
| pale_oak_wall_sign | 1 | 1 | axe | — | 1.50 | 0.75 | 0.40 | 0.25 | 0.20 | 0.20 |  |  |
| pale_oak_wood | 2 | 2 | axe | — | 3.00 | 1.50 | 0.75 | 0.50 | 0.40 | 0.35 |  |  |
| pearlescent_froglight | 0.3 | 0.3 | hand | — | 0.45 | 0.45 | 0.45 | 0.45 | 0.45 | 0.45 | 15 |  |
| peony | 0 | 0 | hand | — | ทันที | ทันที | ทันที | ทันที | ทันที | ทันที |  |  |
| petrified_oak_slab | 2 | 6 | pickaxe | wooden | **10.00** | 1.50 | 0.75 | 0.50 | 0.40 | 0.35 |  |  |
| piglin_head | 1 | 1 | hand | — | 1.50 | 1.50 | 1.50 | 1.50 | 1.50 | 1.50 |  |  |
| piglin_wall_head | 1 | 1 | hand | — | 1.50 | 1.50 | 1.50 | 1.50 | 1.50 | 1.50 |  |  |
| pink_banner | 1 | 1 | axe | — | 1.50 | 0.75 | 0.40 | 0.25 | 0.20 | 0.20 |  |  |
| pink_bed | 0.2 | 0.2 | hand | — | 0.30 | 0.30 | 0.30 | 0.30 | 0.30 | 0.30 |  | fallSafe |
| pink_candle | 0.1 | 0.1 | hand | — | 0.15 | 0.15 | 0.15 | 0.15 | 0.15 | 0.15 |  |  |
| pink_candle_cake | 0.5 | 0.5 | hand | — | 0.75 | 0.75 | 0.75 | 0.75 | 0.75 | 0.75 |  |  |
| pink_carpet | 0.1 | 0.1 | hand | — | 0.15 | 0.15 | 0.15 | 0.15 | 0.15 | 0.15 |  |  |
| pink_concrete | 1.8 | 1.8 | pickaxe | wooden | **9.00** | 1.35 | 0.70 | 0.45 | 0.35 | 0.30 |  |  |
| pink_concrete_powder | 0.5 | 0.5 | shovel | — | 0.75 | 0.40 | 0.20 | 0.15 | 0.10 | 0.10 |  | gravity |
| pink_glazed_terracotta | 1.4 | 1.4 | pickaxe | wooden | **7.00** | 1.05 | 0.55 | 0.35 | 0.30 | 0.25 |  |  |
| pink_petals | 0 | 0 | hand | — | ทันที | ทันที | ทันที | ทันที | ทันที | ทันที |  |  |
| pink_shulker_box | 2 | 2 | pickaxe | — | 3.00 | 1.50 | 0.75 | 0.50 | 0.40 | 0.35 |  |  |
| pink_stained_glass | 0.3 | 0.3 | hand | — | 0.45 | 0.45 | 0.45 | 0.45 | 0.45 | 0.45 |  |  |
| pink_stained_glass_pane | 0.3 | 0.3 | hand | — | 0.45 | 0.45 | 0.45 | 0.45 | 0.45 | 0.45 |  |  |
| pink_terracotta | 1.25 | 4.2 | pickaxe | wooden | **6.25** | 0.95 | 0.50 | 0.35 | 0.25 | 0.25 |  |  |
| pink_tulip | 0 | 0 | hand | — | ทันที | ทันที | ทันที | ทันที | ทันที | ทันที |  |  |
| pink_wall_banner | 1 | 1 | axe | — | 1.50 | 0.75 | 0.40 | 0.25 | 0.20 | 0.20 |  |  |
| pink_wool | 0.8 | 0.8 | hand | — | 1.20 | 1.20 | 1.20 | 1.20 | 1.20 | 1.20 |  |  |
| piston | 1.5 | 1.5 | pickaxe | — | 2.30 | 1.15 | 0.60 | 0.40 | 0.30 | 0.25 |  |  |
| piston_head | 1.5 | 1.5 | pickaxe | — | 2.30 | 1.15 | 0.60 | 0.40 | 0.30 | 0.25 |  |  |
| pitcher_crop | 0 | 0 | hand | — | ทันที | ทันที | ทันที | ทันที | ทันที | ทันที |  |  |
| pitcher_plant | 0 | 0 | hand | — | ทันที | ทันที | ทันที | ทันที | ทันที | ทันที |  |  |
| player_head | 1 | 1 | hand | — | 1.50 | 1.50 | 1.50 | 1.50 | 1.50 | 1.50 |  |  |
| player_wall_head | 1 | 1 | hand | — | 1.50 | 1.50 | 1.50 | 1.50 | 1.50 | 1.50 |  |  |
| podzol | 0.5 | 0.5 | shovel | — | 0.75 | 0.40 | 0.20 | 0.15 | 0.10 | 0.10 |  |  |
| pointed_dripstone | 1.5 | 3 | pickaxe | — | 2.30 | 1.15 | 0.60 | 0.40 | 0.30 | 0.25 |  | danger gravity |
| polished_andesite | 1.5 | 6 | pickaxe | wooden | **7.50** | 1.15 | 0.60 | 0.40 | 0.30 | 0.25 |  |  |
| polished_andesite_slab | 1.5 | 6 | pickaxe | wooden | **7.50** | 1.15 | 0.60 | 0.40 | 0.30 | 0.25 |  |  |
| polished_andesite_stairs | 1.5 | 6 | pickaxe | wooden | **7.50** | 1.15 | 0.60 | 0.40 | 0.30 | 0.25 |  |  |
| polished_basalt | 1.25 | 4.2 | pickaxe | wooden | **6.25** | 0.95 | 0.50 | 0.35 | 0.25 | 0.25 |  |  |
| polished_blackstone | 2 | 6 | pickaxe | wooden | **10.00** | 1.50 | 0.75 | 0.50 | 0.40 | 0.35 |  |  |
| polished_blackstone_brick_slab | 2 | 6 | pickaxe | wooden | **10.00** | 1.50 | 0.75 | 0.50 | 0.40 | 0.35 |  |  |
| polished_blackstone_brick_stairs | 1.5 | 6 | pickaxe | wooden | **7.50** | 1.15 | 0.60 | 0.40 | 0.30 | 0.25 |  |  |
| polished_blackstone_brick_wall | 1.5 | 6 | pickaxe | wooden | **7.50** | 1.15 | 0.60 | 0.40 | 0.30 | 0.25 |  |  |
| polished_blackstone_bricks | 1.5 | 6 | pickaxe | wooden | **7.50** | 1.15 | 0.60 | 0.40 | 0.30 | 0.25 |  |  |
| polished_blackstone_button | 0.5 | 0.5 | pickaxe | — | 0.75 | 0.40 | 0.20 | 0.15 | 0.10 | 0.10 |  |  |
| polished_blackstone_pressure_plate | 0.5 | 0.5 | pickaxe | — | 0.75 | 0.40 | 0.20 | 0.15 | 0.10 | 0.10 |  |  |
| polished_blackstone_slab | 2 | 6 | pickaxe | wooden | **10.00** | 1.50 | 0.75 | 0.50 | 0.40 | 0.35 |  |  |
| polished_blackstone_stairs | 2 | 6 | pickaxe | wooden | **10.00** | 1.50 | 0.75 | 0.50 | 0.40 | 0.35 |  |  |
| polished_blackstone_wall | 2 | 6 | pickaxe | wooden | **10.00** | 1.50 | 0.75 | 0.50 | 0.40 | 0.35 |  |  |
| polished_deepslate | 3.5 | 6 | pickaxe | wooden | **17.50** | 2.65 | 1.35 | 0.90 | 0.70 | 0.60 |  |  |
| polished_deepslate_slab | 3.5 | 6 | pickaxe | wooden | **17.50** | 2.65 | 1.35 | 0.90 | 0.70 | 0.60 |  |  |
| polished_deepslate_stairs | 3.5 | 6 | pickaxe | wooden | **17.50** | 2.65 | 1.35 | 0.90 | 0.70 | 0.60 |  |  |
| polished_deepslate_wall | 3.5 | 6 | pickaxe | wooden | **17.50** | 2.65 | 1.35 | 0.90 | 0.70 | 0.60 |  |  |
| polished_diorite | 1.5 | 6 | pickaxe | wooden | **7.50** | 1.15 | 0.60 | 0.40 | 0.30 | 0.25 |  |  |
| polished_diorite_slab | 1.5 | 6 | pickaxe | wooden | **7.50** | 1.15 | 0.60 | 0.40 | 0.30 | 0.25 |  |  |
| polished_diorite_stairs | 1.5 | 6 | pickaxe | wooden | **7.50** | 1.15 | 0.60 | 0.40 | 0.30 | 0.25 |  |  |
| polished_granite | 1.5 | 6 | pickaxe | wooden | **7.50** | 1.15 | 0.60 | 0.40 | 0.30 | 0.25 |  |  |
| polished_granite_slab | 1.5 | 6 | pickaxe | wooden | **7.50** | 1.15 | 0.60 | 0.40 | 0.30 | 0.25 |  |  |
| polished_granite_stairs | 1.5 | 6 | pickaxe | wooden | **7.50** | 1.15 | 0.60 | 0.40 | 0.30 | 0.25 |  |  |
| polished_tuff | 1.5 | 6 | pickaxe | wooden | **7.50** | 1.15 | 0.60 | 0.40 | 0.30 | 0.25 |  |  |
| polished_tuff_slab | 1.5 | 6 | pickaxe | wooden | **7.50** | 1.15 | 0.60 | 0.40 | 0.30 | 0.25 |  |  |
| polished_tuff_stairs | 1.5 | 6 | pickaxe | wooden | **7.50** | 1.15 | 0.60 | 0.40 | 0.30 | 0.25 |  |  |
| polished_tuff_wall | 1.5 | 6 | pickaxe | wooden | **7.50** | 1.15 | 0.60 | 0.40 | 0.30 | 0.25 |  |  |
| poppy | 0 | 0 | hand | — | ทันที | ทันที | ทันที | ทันที | ทันที | ทันที |  |  |
| potatoes | 0 | 0 | hand | — | ทันที | ทันที | ทันที | ทันที | ทันที | ทันที |  |  |
| potted_acacia_sapling | 0 | 0 | hand | — | ทันที | ทันที | ทันที | ทันที | ทันที | ทันที |  |  |
| potted_allium | 0 | 0 | hand | — | ทันที | ทันที | ทันที | ทันที | ทันที | ทันที |  |  |
| potted_azalea_bush | 0 | 0 | hand | — | ทันที | ทันที | ทันที | ทันที | ทันที | ทันที |  |  |
| potted_azure_bluet | 0 | 0 | hand | — | ทันที | ทันที | ทันที | ทันที | ทันที | ทันที |  |  |
| potted_bamboo | 0 | 0 | hand | — | ทันที | ทันที | ทันที | ทันที | ทันที | ทันที |  |  |
| potted_birch_sapling | 0 | 0 | hand | — | ทันที | ทันที | ทันที | ทันที | ทันที | ทันที |  |  |
| potted_blue_orchid | 0 | 0 | hand | — | ทันที | ทันที | ทันที | ทันที | ทันที | ทันที |  |  |
| potted_brown_mushroom | 0 | 0 | hand | — | ทันที | ทันที | ทันที | ทันที | ทันที | ทันที |  |  |
| potted_cactus | 0 | 0 | hand | — | ทันที | ทันที | ทันที | ทันที | ทันที | ทันที |  |  |
| potted_cherry_sapling | 0 | 0 | hand | — | ทันที | ทันที | ทันที | ทันที | ทันที | ทันที |  |  |
| potted_closed_eyeblossom | 0 | 0 | hand | — | ทันที | ทันที | ทันที | ทันที | ทันที | ทันที |  |  |
| potted_cornflower | 0 | 0 | hand | — | ทันที | ทันที | ทันที | ทันที | ทันที | ทันที |  |  |
| potted_crimson_fungus | 0 | 0 | hand | — | ทันที | ทันที | ทันที | ทันที | ทันที | ทันที |  |  |
| potted_crimson_roots | 0 | 0 | hand | — | ทันที | ทันที | ทันที | ทันที | ทันที | ทันที |  |  |
| potted_dandelion | 0 | 0 | hand | — | ทันที | ทันที | ทันที | ทันที | ทันที | ทันที |  |  |
| potted_dark_oak_sapling | 0 | 0 | hand | — | ทันที | ทันที | ทันที | ทันที | ทันที | ทันที |  |  |
| potted_dead_bush | 0 | 0 | hand | — | ทันที | ทันที | ทันที | ทันที | ทันที | ทันที |  |  |
| potted_fern | 0 | 0 | hand | — | ทันที | ทันที | ทันที | ทันที | ทันที | ทันที |  |  |
| potted_flowering_azalea_bush | 0 | 0 | hand | — | ทันที | ทันที | ทันที | ทันที | ทันที | ทันที |  |  |
| potted_golden_dandelion | 0 | 0 | hand | — | ทันที | ทันที | ทันที | ทันที | ทันที | ทันที |  |  |
| potted_jungle_sapling | 0 | 0 | hand | — | ทันที | ทันที | ทันที | ทันที | ทันที | ทันที |  |  |
| potted_lily_of_the_valley | 0 | 0 | hand | — | ทันที | ทันที | ทันที | ทันที | ทันที | ทันที |  |  |
| potted_mangrove_propagule | 0 | 0 | hand | — | ทันที | ทันที | ทันที | ทันที | ทันที | ทันที |  |  |
| potted_oak_sapling | 0 | 0 | hand | — | ทันที | ทันที | ทันที | ทันที | ทันที | ทันที |  |  |
| potted_open_eyeblossom | 0 | 0 | hand | — | ทันที | ทันที | ทันที | ทันที | ทันที | ทันที |  |  |
| potted_orange_tulip | 0 | 0 | hand | — | ทันที | ทันที | ทันที | ทันที | ทันที | ทันที |  |  |
| potted_oxeye_daisy | 0 | 0 | hand | — | ทันที | ทันที | ทันที | ทันที | ทันที | ทันที |  |  |
| potted_pale_oak_sapling | 0 | 0 | hand | — | ทันที | ทันที | ทันที | ทันที | ทันที | ทันที |  |  |
| potted_pink_tulip | 0 | 0 | hand | — | ทันที | ทันที | ทันที | ทันที | ทันที | ทันที |  |  |
| potted_poppy | 0 | 0 | hand | — | ทันที | ทันที | ทันที | ทันที | ทันที | ทันที |  |  |
| potted_red_mushroom | 0 | 0 | hand | — | ทันที | ทันที | ทันที | ทันที | ทันที | ทันที |  |  |
| potted_red_tulip | 0 | 0 | hand | — | ทันที | ทันที | ทันที | ทันที | ทันที | ทันที |  |  |
| potted_spruce_sapling | 0 | 0 | hand | — | ทันที | ทันที | ทันที | ทันที | ทันที | ทันที |  |  |
| potted_torchflower | 0 | 0 | hand | — | ทันที | ทันที | ทันที | ทันที | ทันที | ทันที |  |  |
| potted_warped_fungus | 0 | 0 | hand | — | ทันที | ทันที | ทันที | ทันที | ทันที | ทันที |  |  |
| potted_warped_roots | 0 | 0 | hand | — | ทันที | ทันที | ทันที | ทันที | ทันที | ทันที |  |  |
| potted_white_tulip | 0 | 0 | hand | — | ทันที | ทันที | ทันที | ทันที | ทันที | ทันที |  |  |
| potted_wither_rose | 0 | 0 | hand | — | ทันที | ทันที | ทันที | ทันที | ทันที | ทันที |  |  |
| powder_snow | 0.25 | 0.25 | hand | — | 0.40 | 0.40 | 0.40 | 0.40 | 0.40 | 0.40 |  | danger slows fallSafe |
| powder_snow_cauldron | 2 | 2 | pickaxe | wooden | **10.00** | 1.50 | 0.75 | 0.50 | 0.40 | 0.35 |  |  |
| powered_rail | 0.7 | 0.7 | pickaxe | — | 1.05 | 0.55 | 0.30 | 0.20 | 0.15 | 0.15 |  |  |
| prismarine | 1.5 | 6 | pickaxe | wooden | **7.50** | 1.15 | 0.60 | 0.40 | 0.30 | 0.25 |  |  |
| prismarine_brick_slab | 1.5 | 6 | pickaxe | wooden | **7.50** | 1.15 | 0.60 | 0.40 | 0.30 | 0.25 |  |  |
| prismarine_brick_stairs | 1.5 | 6 | pickaxe | wooden | **7.50** | 1.15 | 0.60 | 0.40 | 0.30 | 0.25 |  |  |
| prismarine_bricks | 1.5 | 6 | pickaxe | wooden | **7.50** | 1.15 | 0.60 | 0.40 | 0.30 | 0.25 |  |  |
| prismarine_slab | 1.5 | 6 | pickaxe | wooden | **7.50** | 1.15 | 0.60 | 0.40 | 0.30 | 0.25 |  |  |
| prismarine_stairs | 1.5 | 6 | pickaxe | wooden | **7.50** | 1.15 | 0.60 | 0.40 | 0.30 | 0.25 |  |  |
| prismarine_wall | 1.5 | 6 | pickaxe | wooden | **7.50** | 1.15 | 0.60 | 0.40 | 0.30 | 0.25 |  |  |
| pumpkin | 1 | 1 | axe | — | 1.50 | 0.75 | 0.40 | 0.25 | 0.20 | 0.20 |  |  |
| pumpkin_stem | 0 | 0 | hand | — | ทันที | ทันที | ทันที | ทันที | ทันที | ทันที |  |  |
| purple_banner | 1 | 1 | axe | — | 1.50 | 0.75 | 0.40 | 0.25 | 0.20 | 0.20 |  |  |
| purple_bed | 0.2 | 0.2 | hand | — | 0.30 | 0.30 | 0.30 | 0.30 | 0.30 | 0.30 |  | fallSafe |
| purple_candle | 0.1 | 0.1 | hand | — | 0.15 | 0.15 | 0.15 | 0.15 | 0.15 | 0.15 |  |  |
| purple_candle_cake | 0.5 | 0.5 | hand | — | 0.75 | 0.75 | 0.75 | 0.75 | 0.75 | 0.75 |  |  |
| purple_carpet | 0.1 | 0.1 | hand | — | 0.15 | 0.15 | 0.15 | 0.15 | 0.15 | 0.15 |  |  |
| purple_concrete | 1.8 | 1.8 | pickaxe | wooden | **9.00** | 1.35 | 0.70 | 0.45 | 0.35 | 0.30 |  |  |
| purple_concrete_powder | 0.5 | 0.5 | shovel | — | 0.75 | 0.40 | 0.20 | 0.15 | 0.10 | 0.10 |  | gravity |
| purple_glazed_terracotta | 1.4 | 1.4 | pickaxe | wooden | **7.00** | 1.05 | 0.55 | 0.35 | 0.30 | 0.25 |  |  |
| purple_shulker_box | 2 | 2 | pickaxe | — | 3.00 | 1.50 | 0.75 | 0.50 | 0.40 | 0.35 |  |  |
| purple_stained_glass | 0.3 | 0.3 | hand | — | 0.45 | 0.45 | 0.45 | 0.45 | 0.45 | 0.45 |  |  |
| purple_stained_glass_pane | 0.3 | 0.3 | hand | — | 0.45 | 0.45 | 0.45 | 0.45 | 0.45 | 0.45 |  |  |
| purple_terracotta | 1.25 | 4.2 | pickaxe | wooden | **6.25** | 0.95 | 0.50 | 0.35 | 0.25 | 0.25 |  |  |
| purple_wall_banner | 1 | 1 | axe | — | 1.50 | 0.75 | 0.40 | 0.25 | 0.20 | 0.20 |  |  |
| purple_wool | 0.8 | 0.8 | hand | — | 1.20 | 1.20 | 1.20 | 1.20 | 1.20 | 1.20 |  |  |
| purpur_block | 1.5 | 6 | pickaxe | wooden | **7.50** | 1.15 | 0.60 | 0.40 | 0.30 | 0.25 |  |  |
| purpur_pillar | 1.5 | 6 | pickaxe | wooden | **7.50** | 1.15 | 0.60 | 0.40 | 0.30 | 0.25 |  |  |
| purpur_slab | 2 | 6 | pickaxe | wooden | **10.00** | 1.50 | 0.75 | 0.50 | 0.40 | 0.35 |  |  |
| purpur_stairs | 1.5 | 6 | pickaxe | wooden | **7.50** | 1.15 | 0.60 | 0.40 | 0.30 | 0.25 |  |  |
| quartz_block | 0.8 | 0.8 | pickaxe | wooden | **4.00** | 0.60 | 0.30 | 0.20 | 0.15 | 0.15 |  |  |
| quartz_bricks | 0.8 | 0.8 | pickaxe | wooden | **4.00** | 0.60 | 0.30 | 0.20 | 0.15 | 0.15 |  |  |
| quartz_pillar | 0.8 | 0.8 | pickaxe | wooden | **4.00** | 0.60 | 0.30 | 0.20 | 0.15 | 0.15 |  |  |
| quartz_slab | 2 | 6 | pickaxe | wooden | **10.00** | 1.50 | 0.75 | 0.50 | 0.40 | 0.35 |  |  |
| quartz_stairs | 0.8 | 0.8 | pickaxe | wooden | **4.00** | 0.60 | 0.30 | 0.20 | 0.15 | 0.15 |  |  |
| rail | 0.7 | 0.7 | pickaxe | — | 1.05 | 0.55 | 0.30 | 0.20 | 0.15 | 0.15 |  |  |
| raw_copper_block | 5 | 6 | pickaxe | stone | **25.00** | **12.50** | 1.90 | 1.25 | 0.95 | 0.85 |  |  |
| raw_gold_block | 5 | 6 | pickaxe | iron | **25.00** | **12.50** | **6.25** | 1.25 | 0.95 | 0.85 |  |  |
| raw_iron_block | 5 | 6 | pickaxe | stone | **25.00** | **12.50** | 1.90 | 1.25 | 0.95 | 0.85 |  |  |
| red_banner | 1 | 1 | axe | — | 1.50 | 0.75 | 0.40 | 0.25 | 0.20 | 0.20 |  |  |
| red_bed | 0.2 | 0.2 | hand | — | 0.30 | 0.30 | 0.30 | 0.30 | 0.30 | 0.30 |  | fallSafe |
| red_candle | 0.1 | 0.1 | hand | — | 0.15 | 0.15 | 0.15 | 0.15 | 0.15 | 0.15 |  |  |
| red_candle_cake | 0.5 | 0.5 | hand | — | 0.75 | 0.75 | 0.75 | 0.75 | 0.75 | 0.75 |  |  |
| red_carpet | 0.1 | 0.1 | hand | — | 0.15 | 0.15 | 0.15 | 0.15 | 0.15 | 0.15 |  |  |
| red_concrete | 1.8 | 1.8 | pickaxe | wooden | **9.00** | 1.35 | 0.70 | 0.45 | 0.35 | 0.30 |  |  |
| red_concrete_powder | 0.5 | 0.5 | shovel | — | 0.75 | 0.40 | 0.20 | 0.15 | 0.10 | 0.10 |  | gravity |
| red_glazed_terracotta | 1.4 | 1.4 | pickaxe | wooden | **7.00** | 1.05 | 0.55 | 0.35 | 0.30 | 0.25 |  |  |
| red_mushroom | 0 | 0 | hand | — | ทันที | ทันที | ทันที | ทันที | ทันที | ทันที |  |  |
| red_mushroom_block | 0.2 | 0.2 | axe | — | 0.30 | 0.15 | 0.10 | ทันที | ทันที | ทันที |  |  |
| red_nether_brick_slab | 2 | 6 | pickaxe | wooden | **10.00** | 1.50 | 0.75 | 0.50 | 0.40 | 0.35 |  |  |
| red_nether_brick_stairs | 2 | 6 | pickaxe | wooden | **10.00** | 1.50 | 0.75 | 0.50 | 0.40 | 0.35 |  |  |
| red_nether_brick_wall | 2 | 6 | pickaxe | wooden | **10.00** | 1.50 | 0.75 | 0.50 | 0.40 | 0.35 |  |  |
| red_nether_bricks | 2 | 6 | pickaxe | wooden | **10.00** | 1.50 | 0.75 | 0.50 | 0.40 | 0.35 |  |  |
| red_sand | 0.5 | 0.5 | shovel | — | 0.75 | 0.40 | 0.20 | 0.15 | 0.10 | 0.10 |  | gravity |
| red_sandstone | 0.8 | 0.8 | pickaxe | wooden | **4.00** | 0.60 | 0.30 | 0.20 | 0.15 | 0.15 |  |  |
| red_sandstone_slab | 2 | 6 | pickaxe | wooden | **10.00** | 1.50 | 0.75 | 0.50 | 0.40 | 0.35 |  |  |
| red_sandstone_stairs | 0.8 | 0.8 | pickaxe | wooden | **4.00** | 0.60 | 0.30 | 0.20 | 0.15 | 0.15 |  |  |
| red_sandstone_wall | 0.8 | 0.8 | pickaxe | wooden | **4.00** | 0.60 | 0.30 | 0.20 | 0.15 | 0.15 |  |  |
| red_shulker_box | 2 | 2 | pickaxe | — | 3.00 | 1.50 | 0.75 | 0.50 | 0.40 | 0.35 |  |  |
| red_stained_glass | 0.3 | 0.3 | hand | — | 0.45 | 0.45 | 0.45 | 0.45 | 0.45 | 0.45 |  |  |
| red_stained_glass_pane | 0.3 | 0.3 | hand | — | 0.45 | 0.45 | 0.45 | 0.45 | 0.45 | 0.45 |  |  |
| red_terracotta | 1.25 | 4.2 | pickaxe | wooden | **6.25** | 0.95 | 0.50 | 0.35 | 0.25 | 0.25 |  |  |
| red_tulip | 0 | 0 | hand | — | ทันที | ทันที | ทันที | ทันที | ทันที | ทันที |  |  |
| red_wall_banner | 1 | 1 | axe | — | 1.50 | 0.75 | 0.40 | 0.25 | 0.20 | 0.20 |  |  |
| red_wool | 0.8 | 0.8 | hand | — | 1.20 | 1.20 | 1.20 | 1.20 | 1.20 | 1.20 |  |  |
| redstone_block | 5 | 6 | pickaxe | wooden | **25.00** | 3.75 | 1.90 | 1.25 | 0.95 | 0.85 |  |  |
| redstone_lamp | 0.3 | 0.3 | hand | — | 0.45 | 0.45 | 0.45 | 0.45 | 0.45 | 0.45 |  |  |
| redstone_ore | 3 | 3 | pickaxe | iron | **15.00** | **7.50** | **3.75** | 0.75 | 0.60 | 0.50 |  |  |
| redstone_torch | 0 | 0 | hand | — | ทันที | ทันที | ทันที | ทันที | ทันที | ทันที | 7 |  |
| redstone_wall_torch | 0 | 0 | hand | — | ทันที | ทันที | ทันที | ทันที | ทันที | ทันที | 7 |  |
| redstone_wire | 0 | 0 | hand | — | ทันที | ทันที | ทันที | ทันที | ทันที | ทันที |  |  |
| reinforced_deepslate | 55 | 1200 | hand | — | 82.50 | 82.50 | 82.50 | 82.50 | 82.50 | 82.50 |  |  |
| repeater | 0 | 0 | hand | — | ทันที | ทันที | ทันที | ทันที | ทันที | ทันที |  |  |
| repeating_command_block | -1 | 3600000 | hand | undefined | — | — | — | — | — | — |  |  |
| resin_block | 0 | 0 | hand | — | ทันที | ทันที | ทันที | ทันที | ทันที | ทันที |  |  |
| resin_brick_slab | 1.5 | 6 | pickaxe | wooden | **7.50** | 1.15 | 0.60 | 0.40 | 0.30 | 0.25 |  |  |
| resin_brick_stairs | 1.5 | 6 | pickaxe | wooden | **7.50** | 1.15 | 0.60 | 0.40 | 0.30 | 0.25 |  |  |
| resin_brick_wall | 1.5 | 6 | pickaxe | wooden | **7.50** | 1.15 | 0.60 | 0.40 | 0.30 | 0.25 |  |  |
| resin_bricks | 1.5 | 6 | pickaxe | wooden | **7.50** | 1.15 | 0.60 | 0.40 | 0.30 | 0.25 |  |  |
| resin_clump | 0 | 0 | hand | — | ทันที | ทันที | ทันที | ทันที | ทันที | ทันที |  |  |
| respawn_anchor | 50 | 1200 | pickaxe | diamond | **250.00** | **125.00** | **62.50** | **41.70** | 9.40 | 8.35 |  |  |
| rooted_dirt | 0.5 | 0.5 | shovel | — | 0.75 | 0.40 | 0.20 | 0.15 | 0.10 | 0.10 |  |  |
| rose_bush | 0 | 0 | hand | — | ทันที | ทันที | ทันที | ทันที | ทันที | ทันที |  |  |
| sand | 0.5 | 0.5 | shovel | — | 0.75 | 0.40 | 0.20 | 0.15 | 0.10 | 0.10 |  | gravity |
| sandstone | 0.8 | 0.8 | pickaxe | wooden | **4.00** | 0.60 | 0.30 | 0.20 | 0.15 | 0.15 |  |  |
| sandstone_slab | 2 | 6 | pickaxe | wooden | **10.00** | 1.50 | 0.75 | 0.50 | 0.40 | 0.35 |  |  |
| sandstone_stairs | 0.8 | 0.8 | pickaxe | wooden | **4.00** | 0.60 | 0.30 | 0.20 | 0.15 | 0.15 |  |  |
| sandstone_wall | 0.8 | 0.8 | pickaxe | wooden | **4.00** | 0.60 | 0.30 | 0.20 | 0.15 | 0.15 |  |  |
| scaffolding | 0 | 0 | hand | — | ทันที | ทันที | ทันที | ทันที | ทันที | ทันที |  | gravity climbable fallSafe |
| sculk | 0.2 | 0.2 | hoe | — | 0.30 | 0.15 | 0.10 | ทันที | ทันที | ทันที |  |  |
| sculk_catalyst | 3 | 3 | hoe | — | 4.55 | 2.30 | 1.15 | 0.75 | 0.60 | 0.50 | 6 |  |
| sculk_sensor | 1.5 | 1.5 | hoe | — | 2.30 | 1.15 | 0.60 | 0.40 | 0.30 | 0.25 | 1 | danger |
| sculk_shrieker | 3 | 3 | hoe | — | 4.55 | 2.30 | 1.15 | 0.75 | 0.60 | 0.50 |  | danger |
| sculk_vein | 0.2 | 0.2 | hoe | — | 0.30 | 0.15 | 0.10 | ทันที | ทันที | ทันที |  |  |
| sea_lantern | 0.3 | 0.3 | hand | — | 0.45 | 0.45 | 0.45 | 0.45 | 0.45 | 0.45 | 15 |  |
| sea_pickle | 0 | 0 | hand | — | ทันที | ทันที | ทันที | ทันที | ทันที | ทันที | 6 |  |
| seagrass | 0 | 0 | hand | — | ทันที | ทันที | ทันที | ทันที | ทันที | ทันที |  |  |
| short_dry_grass | 0 | 0 | hand | — | ทันที | ทันที | ทันที | ทันที | ทันที | ทันที |  |  |
| short_grass | 0 | 0 | hand | — | ทันที | ทันที | ทันที | ทันที | ทันที | ทันที |  |  |
| shroomlight | 1 | 1 | hoe | — | 1.50 | 0.75 | 0.40 | 0.25 | 0.20 | 0.20 | 15 |  |
| shulker_box | 2 | 2 | pickaxe | — | 3.00 | 1.50 | 0.75 | 0.50 | 0.40 | 0.35 |  |  |
| skeleton_skull | 1 | 1 | hand | — | 1.50 | 1.50 | 1.50 | 1.50 | 1.50 | 1.50 |  |  |
| skeleton_wall_skull | 1 | 1 | hand | — | 1.50 | 1.50 | 1.50 | 1.50 | 1.50 | 1.50 |  |  |
| slime_block | 0 | 0 | hand | — | ทันที | ทันที | ทันที | ทันที | ทันที | ทันที |  | slippery fallSafe |
| small_amethyst_bud | 1.5 | 1.5 | pickaxe | — | 2.30 | 1.15 | 0.60 | 0.40 | 0.30 | 0.25 | 1 |  |
| small_dripleaf | 0 | 0 | hand | — | ทันที | ทันที | ทันที | ทันที | ทันที | ทันที |  |  |
| smithing_table | 2.5 | 2.5 | axe | — | 3.75 | 1.90 | 0.95 | 0.65 | 0.50 | 0.45 |  |  |
| smoker | 3.5 | 3.5 | pickaxe | wooden | **17.50** | 2.65 | 1.35 | 0.90 | 0.70 | 0.60 |  |  |
| smooth_basalt | 1.25 | 4.2 | pickaxe | wooden | **6.25** | 0.95 | 0.50 | 0.35 | 0.25 | 0.25 |  |  |
| smooth_quartz | 2 | 6 | pickaxe | wooden | **10.00** | 1.50 | 0.75 | 0.50 | 0.40 | 0.35 |  |  |
| smooth_quartz_slab | 2 | 6 | pickaxe | wooden | **10.00** | 1.50 | 0.75 | 0.50 | 0.40 | 0.35 |  |  |
| smooth_quartz_stairs | 2 | 6 | pickaxe | wooden | **10.00** | 1.50 | 0.75 | 0.50 | 0.40 | 0.35 |  |  |
| smooth_red_sandstone | 2 | 6 | pickaxe | wooden | **10.00** | 1.50 | 0.75 | 0.50 | 0.40 | 0.35 |  |  |
| smooth_red_sandstone_slab | 2 | 6 | pickaxe | wooden | **10.00** | 1.50 | 0.75 | 0.50 | 0.40 | 0.35 |  |  |
| smooth_red_sandstone_stairs | 2 | 6 | pickaxe | wooden | **10.00** | 1.50 | 0.75 | 0.50 | 0.40 | 0.35 |  |  |
| smooth_sandstone | 2 | 6 | pickaxe | wooden | **10.00** | 1.50 | 0.75 | 0.50 | 0.40 | 0.35 |  |  |
| smooth_sandstone_slab | 2 | 6 | pickaxe | wooden | **10.00** | 1.50 | 0.75 | 0.50 | 0.40 | 0.35 |  |  |
| smooth_sandstone_stairs | 2 | 6 | pickaxe | wooden | **10.00** | 1.50 | 0.75 | 0.50 | 0.40 | 0.35 |  |  |
| smooth_stone | 2 | 6 | pickaxe | wooden | **10.00** | 1.50 | 0.75 | 0.50 | 0.40 | 0.35 |  |  |
| smooth_stone_slab | 2 | 6 | pickaxe | wooden | **10.00** | 1.50 | 0.75 | 0.50 | 0.40 | 0.35 |  |  |
| sniffer_egg | 0.5 | 0.5 | hand | — | 0.75 | 0.75 | 0.75 | 0.75 | 0.75 | 0.75 |  |  |
| snow | 0.1 | 0.1 | shovel | wooden | **0.50** | 0.10 | ทันที | ทันที | ทันที | ทันที |  |  |
| snow_block | 0.2 | 0.2 | shovel | wooden | **1.00** | 0.15 | 0.10 | ทันที | ทันที | ทันที |  |  |
| soul_campfire | 2 | 2 | axe | — | 3.00 | 1.50 | 0.75 | 0.50 | 0.40 | 0.35 | 10 | danger |
| soul_fire | 0 | 0 | hand | — | ทันที | ทันที | ทันที | ทันที | ทันที | ทันที | 10 | danger |
| soul_lantern | 3.5 | 3.5 | pickaxe | — | 5.30 | 2.65 | 1.35 | 0.90 | 0.70 | 0.60 | 10 |  |
| soul_sand | 0.5 | 0.5 | shovel | — | 0.75 | 0.40 | 0.20 | 0.15 | 0.10 | 0.10 |  | slows |
| soul_soil | 0.5 | 0.5 | shovel | — | 0.75 | 0.40 | 0.20 | 0.15 | 0.10 | 0.10 |  |  |
| soul_torch | 0 | 0 | hand | — | ทันที | ทันที | ทันที | ทันที | ทันที | ทันที | 10 |  |
| soul_wall_torch | 0 | 0 | hand | — | ทันที | ทันที | ทันที | ทันที | ทันที | ทันที | 10 |  |
| spawner | 5 | 5 | pickaxe | wooden | **25.00** | 3.75 | 1.90 | 1.25 | 0.95 | 0.85 |  |  |
| sponge | 0.6 | 0.6 | hoe | — | 0.90 | 0.45 | 0.25 | 0.15 | 0.15 | 0.10 |  |  |
| spore_blossom | 0 | 0 | hand | — | ทันที | ทันที | ทันที | ทันที | ทันที | ทันที |  |  |
| spruce_button | 0.5 | 0.5 | axe | — | 0.75 | 0.40 | 0.20 | 0.15 | 0.10 | 0.10 |  |  |
| spruce_door | 3 | 3 | axe | — | 4.55 | 2.30 | 1.15 | 0.75 | 0.60 | 0.50 |  |  |
| spruce_fence | 2 | 3 | axe | — | 3.00 | 1.50 | 0.75 | 0.50 | 0.40 | 0.35 |  |  |
| spruce_fence_gate | 2 | 3 | axe | — | 3.00 | 1.50 | 0.75 | 0.50 | 0.40 | 0.35 |  |  |
| spruce_hanging_sign | 1 | 1 | axe | — | 1.50 | 0.75 | 0.40 | 0.25 | 0.20 | 0.20 |  |  |
| spruce_leaves | 0.2 | 0.2 | hoe | — | 0.30 | 0.15 | 0.10 | ทันที | ทันที | ทันที |  |  |
| spruce_log | 2 | 2 | axe | — | 3.00 | 1.50 | 0.75 | 0.50 | 0.40 | 0.35 |  |  |
| spruce_planks | 2 | 3 | axe | — | 3.00 | 1.50 | 0.75 | 0.50 | 0.40 | 0.35 |  |  |
| spruce_pressure_plate | 0.5 | 0.5 | axe | — | 0.75 | 0.40 | 0.20 | 0.15 | 0.10 | 0.10 |  |  |
| spruce_sapling | 0 | 0 | hand | — | ทันที | ทันที | ทันที | ทันที | ทันที | ทันที |  |  |
| spruce_shelf | 2 | 3 | axe | — | 3.00 | 1.50 | 0.75 | 0.50 | 0.40 | 0.35 |  |  |
| spruce_sign | 1 | 1 | axe | — | 1.50 | 0.75 | 0.40 | 0.25 | 0.20 | 0.20 |  |  |
| spruce_slab | 2 | 3 | axe | — | 3.00 | 1.50 | 0.75 | 0.50 | 0.40 | 0.35 |  |  |
| spruce_stairs | 2 | 3 | axe | — | 3.00 | 1.50 | 0.75 | 0.50 | 0.40 | 0.35 |  |  |
| spruce_trapdoor | 3 | 3 | axe | — | 4.55 | 2.30 | 1.15 | 0.75 | 0.60 | 0.50 |  |  |
| spruce_wall_hanging_sign | 1 | 1 | axe | — | 1.50 | 0.75 | 0.40 | 0.25 | 0.20 | 0.20 |  |  |
| spruce_wall_sign | 1 | 1 | axe | — | 1.50 | 0.75 | 0.40 | 0.25 | 0.20 | 0.20 |  |  |
| spruce_wood | 2 | 2 | axe | — | 3.00 | 1.50 | 0.75 | 0.50 | 0.40 | 0.35 |  |  |
| sticky_piston | 1.5 | 1.5 | pickaxe | — | 2.30 | 1.15 | 0.60 | 0.40 | 0.30 | 0.25 |  |  |
| stone | 1.5 | 6 | pickaxe | wooden | **7.50** | 1.15 | 0.60 | 0.40 | 0.30 | 0.25 |  |  |
| stone_brick_slab | 2 | 6 | pickaxe | wooden | **10.00** | 1.50 | 0.75 | 0.50 | 0.40 | 0.35 |  |  |
| stone_brick_stairs | 1.5 | 6 | pickaxe | wooden | **7.50** | 1.15 | 0.60 | 0.40 | 0.30 | 0.25 |  |  |
| stone_brick_wall | 1.5 | 6 | pickaxe | wooden | **7.50** | 1.15 | 0.60 | 0.40 | 0.30 | 0.25 |  |  |
| stone_bricks | 1.5 | 6 | pickaxe | wooden | **7.50** | 1.15 | 0.60 | 0.40 | 0.30 | 0.25 |  |  |
| stone_button | 0.5 | 0.5 | pickaxe | — | 0.75 | 0.40 | 0.20 | 0.15 | 0.10 | 0.10 |  |  |
| stone_pressure_plate | 0.5 | 0.5 | pickaxe | — | 0.75 | 0.40 | 0.20 | 0.15 | 0.10 | 0.10 |  |  |
| stone_slab | 2 | 6 | pickaxe | wooden | **10.00** | 1.50 | 0.75 | 0.50 | 0.40 | 0.35 |  |  |
| stone_stairs | 1.5 | 6 | pickaxe | wooden | **7.50** | 1.15 | 0.60 | 0.40 | 0.30 | 0.25 |  |  |
| stonecutter | 3.5 | 3.5 | pickaxe | wooden | **17.50** | 2.65 | 1.35 | 0.90 | 0.70 | 0.60 |  |  |
| stripped_acacia_log | 2 | 2 | axe | — | 3.00 | 1.50 | 0.75 | 0.50 | 0.40 | 0.35 |  |  |
| stripped_acacia_wood | 2 | 2 | axe | — | 3.00 | 1.50 | 0.75 | 0.50 | 0.40 | 0.35 |  |  |
| stripped_bamboo_block | 2 | 2 | axe | — | 3.00 | 1.50 | 0.75 | 0.50 | 0.40 | 0.35 |  |  |
| stripped_birch_log | 2 | 2 | axe | — | 3.00 | 1.50 | 0.75 | 0.50 | 0.40 | 0.35 |  |  |
| stripped_birch_wood | 2 | 2 | axe | — | 3.00 | 1.50 | 0.75 | 0.50 | 0.40 | 0.35 |  |  |
| stripped_cherry_log | 2 | 2 | axe | — | 3.00 | 1.50 | 0.75 | 0.50 | 0.40 | 0.35 |  |  |
| stripped_cherry_wood | 2 | 2 | axe | — | 3.00 | 1.50 | 0.75 | 0.50 | 0.40 | 0.35 |  |  |
| stripped_crimson_hyphae | 2 | 2 | axe | — | 3.00 | 1.50 | 0.75 | 0.50 | 0.40 | 0.35 |  |  |
| stripped_crimson_stem | 2 | 2 | axe | — | 3.00 | 1.50 | 0.75 | 0.50 | 0.40 | 0.35 |  |  |
| stripped_dark_oak_log | 2 | 2 | axe | — | 3.00 | 1.50 | 0.75 | 0.50 | 0.40 | 0.35 |  |  |
| stripped_dark_oak_wood | 2 | 2 | axe | — | 3.00 | 1.50 | 0.75 | 0.50 | 0.40 | 0.35 |  |  |
| stripped_jungle_log | 2 | 2 | axe | — | 3.00 | 1.50 | 0.75 | 0.50 | 0.40 | 0.35 |  |  |
| stripped_jungle_wood | 2 | 2 | axe | — | 3.00 | 1.50 | 0.75 | 0.50 | 0.40 | 0.35 |  |  |
| stripped_mangrove_log | 2 | 2 | axe | — | 3.00 | 1.50 | 0.75 | 0.50 | 0.40 | 0.35 |  |  |
| stripped_mangrove_wood | 2 | 2 | axe | — | 3.00 | 1.50 | 0.75 | 0.50 | 0.40 | 0.35 |  |  |
| stripped_oak_log | 2 | 2 | axe | — | 3.00 | 1.50 | 0.75 | 0.50 | 0.40 | 0.35 |  |  |
| stripped_oak_wood | 2 | 2 | axe | — | 3.00 | 1.50 | 0.75 | 0.50 | 0.40 | 0.35 |  |  |
| stripped_pale_oak_log | 2 | 2 | axe | — | 3.00 | 1.50 | 0.75 | 0.50 | 0.40 | 0.35 |  |  |
| stripped_pale_oak_wood | 2 | 2 | axe | — | 3.00 | 1.50 | 0.75 | 0.50 | 0.40 | 0.35 |  |  |
| stripped_spruce_log | 2 | 2 | axe | — | 3.00 | 1.50 | 0.75 | 0.50 | 0.40 | 0.35 |  |  |
| stripped_spruce_wood | 2 | 2 | axe | — | 3.00 | 1.50 | 0.75 | 0.50 | 0.40 | 0.35 |  |  |
| stripped_warped_hyphae | 2 | 2 | axe | — | 3.00 | 1.50 | 0.75 | 0.50 | 0.40 | 0.35 |  |  |
| stripped_warped_stem | 2 | 2 | axe | — | 3.00 | 1.50 | 0.75 | 0.50 | 0.40 | 0.35 |  |  |
| structure_block | -1 | 3600000 | hand | undefined | — | — | — | — | — | — |  |  |
| structure_void | 0 | 0 | hand | — | ทันที | ทันที | ทันที | ทันที | ทันที | ทันที |  |  |
| sugar_cane | 0 | 0 | hand | — | ทันที | ทันที | ทันที | ทันที | ทันที | ทันที |  |  |
| sunflower | 0 | 0 | hand | — | ทันที | ทันที | ทันที | ทันที | ทันที | ทันที |  |  |
| suspicious_gravel | 0.25 | 0.25 | shovel | — | 0.40 | 0.20 | 0.10 | 0.10 | ทันที | ทันที |  | gravity |
| suspicious_sand | 0.25 | 0.25 | shovel | — | 0.40 | 0.20 | 0.10 | 0.10 | ทันที | ทันที |  | gravity |
| sweet_berry_bush | 0 | 0 | hand | — | ทันที | ทันที | ทันที | ทันที | ทันที | ทันที |  | danger slows fallSafe |
| tall_dry_grass | 0 | 0 | hand | — | ทันที | ทันที | ทันที | ทันที | ทันที | ทันที |  |  |
| tall_grass | 0 | 0 | hand | — | ทันที | ทันที | ทันที | ทันที | ทันที | ทันที |  |  |
| tall_seagrass | 0 | 0 | hand | — | ทันที | ทันที | ทันที | ทันที | ทันที | ทันที |  |  |
| target | 0.5 | 0.5 | hoe | — | 0.75 | 0.40 | 0.20 | 0.15 | 0.10 | 0.10 |  |  |
| terracotta | 1.25 | 4.2 | pickaxe | wooden | **6.25** | 0.95 | 0.50 | 0.35 | 0.25 | 0.25 |  |  |
| test_block | -1 | 3600000 | hand | — | — | — | — | — | — | — |  |  |
| test_instance_block | -1 | 3600000 | hand | — | — | — | — | — | — | — |  |  |
| tinted_glass | 0.3 | 0.3 | hand | — | 0.45 | 0.45 | 0.45 | 0.45 | 0.45 | 0.45 |  |  |
| tnt | 0 | 0 | hand | — | ทันที | ทันที | ทันที | ทันที | ทันที | ทันที |  | danger |
| torch | 0 | 0 | hand | — | ทันที | ทันที | ทันที | ทันที | ทันที | ทันที | 14 |  |
| torchflower | 0 | 0 | hand | — | ทันที | ทันที | ทันที | ทันที | ทันที | ทันที |  |  |
| torchflower_crop | 0 | 0 | hand | — | ทันที | ทันที | ทันที | ทันที | ทันที | ทันที |  |  |
| trapped_chest | 2.5 | 2.5 | axe | — | 3.75 | 1.90 | 0.95 | 0.65 | 0.50 | 0.45 |  |  |
| trial_spawner | 50 | 50 | hand | — | 75.00 | 75.00 | 75.00 | 75.00 | 75.00 | 75.00 |  |  |
| tripwire | 0 | 0 | hand | — | ทันที | ทันที | ทันที | ทันที | ทันที | ทันที |  |  |
| tripwire_hook | 0 | 0 | hand | — | ทันที | ทันที | ทันที | ทันที | ทันที | ทันที |  |  |
| tube_coral | 0 | 0 | hand | — | ทันที | ทันที | ทันที | ทันที | ทันที | ทันที |  |  |
| tube_coral_block | 1.5 | 6 | pickaxe | wooden | **7.50** | 1.15 | 0.60 | 0.40 | 0.30 | 0.25 |  |  |
| tube_coral_fan | 0 | 0 | hand | — | ทันที | ทันที | ทันที | ทันที | ทันที | ทันที |  |  |
| tube_coral_wall_fan | 0 | 0 | hand | — | ทันที | ทันที | ทันที | ทันที | ทันที | ทันที |  |  |
| tuff | 1.5 | 6 | pickaxe | wooden | **7.50** | 1.15 | 0.60 | 0.40 | 0.30 | 0.25 |  |  |
| tuff_brick_slab | 1.5 | 6 | pickaxe | wooden | **7.50** | 1.15 | 0.60 | 0.40 | 0.30 | 0.25 |  |  |
| tuff_brick_stairs | 1.5 | 6 | pickaxe | wooden | **7.50** | 1.15 | 0.60 | 0.40 | 0.30 | 0.25 |  |  |
| tuff_brick_wall | 1.5 | 6 | pickaxe | wooden | **7.50** | 1.15 | 0.60 | 0.40 | 0.30 | 0.25 |  |  |
| tuff_bricks | 1.5 | 6 | pickaxe | wooden | **7.50** | 1.15 | 0.60 | 0.40 | 0.30 | 0.25 |  |  |
| tuff_slab | 1.5 | 6 | pickaxe | wooden | **7.50** | 1.15 | 0.60 | 0.40 | 0.30 | 0.25 |  |  |
| tuff_stairs | 1.5 | 6 | pickaxe | wooden | **7.50** | 1.15 | 0.60 | 0.40 | 0.30 | 0.25 |  |  |
| tuff_wall | 1.5 | 6 | pickaxe | wooden | **7.50** | 1.15 | 0.60 | 0.40 | 0.30 | 0.25 |  |  |
| turtle_egg | 0.5 | 0.5 | hand | — | 0.75 | 0.75 | 0.75 | 0.75 | 0.75 | 0.75 |  |  |
| twisting_vines | 0 | 0 | hand | — | ทันที | ทันที | ทันที | ทันที | ทันที | ทันที |  | climbable fallSafe |
| twisting_vines_plant | 0 | 0 | hand | — | ทันที | ทันที | ทันที | ทันที | ทันที | ทันที |  | climbable |
| vault | 50 | 50 | hand | — | 75.00 | 75.00 | 75.00 | 75.00 | 75.00 | 75.00 | 6 |  |
| verdant_froglight | 0.3 | 0.3 | hand | — | 0.45 | 0.45 | 0.45 | 0.45 | 0.45 | 0.45 | 15 |  |
| vine | 0.2 | 0.2 | axe | — | 0.30 | 0.15 | 0.10 | ทันที | ทันที | ทันที |  | climbable fallSafe |
| void_air | 0 | 0 | hand | — | ทันที | ทันที | ทันที | ทันที | ทันที | ทันที |  |  |
| wall_torch | 0 | 0 | hand | — | ทันที | ทันที | ทันที | ทันที | ทันที | ทันที | 14 |  |
| warped_button | 0.5 | 0.5 | axe | — | 0.75 | 0.40 | 0.20 | 0.15 | 0.10 | 0.10 |  |  |
| warped_door | 3 | 3 | axe | — | 4.55 | 2.30 | 1.15 | 0.75 | 0.60 | 0.50 |  |  |
| warped_fence | 2 | 3 | axe | — | 3.00 | 1.50 | 0.75 | 0.50 | 0.40 | 0.35 |  |  |
| warped_fence_gate | 2 | 3 | axe | — | 3.00 | 1.50 | 0.75 | 0.50 | 0.40 | 0.35 |  |  |
| warped_fungus | 0 | 0 | hand | — | ทันที | ทันที | ทันที | ทันที | ทันที | ทันที |  |  |
| warped_hanging_sign | 1 | 1 | axe | — | 1.50 | 0.75 | 0.40 | 0.25 | 0.20 | 0.20 |  |  |
| warped_hyphae | 2 | 2 | axe | — | 3.00 | 1.50 | 0.75 | 0.50 | 0.40 | 0.35 |  |  |
| warped_nylium | 0.4 | 0.4 | pickaxe | wooden | **2.00** | 0.30 | 0.15 | 0.10 | 0.10 | 0.10 |  |  |
| warped_planks | 2 | 3 | axe | — | 3.00 | 1.50 | 0.75 | 0.50 | 0.40 | 0.35 |  |  |
| warped_pressure_plate | 0.5 | 0.5 | axe | — | 0.75 | 0.40 | 0.20 | 0.15 | 0.10 | 0.10 |  |  |
| warped_roots | 0 | 0 | hand | — | ทันที | ทันที | ทันที | ทันที | ทันที | ทันที |  |  |
| warped_shelf | 2 | 3 | axe | — | 3.00 | 1.50 | 0.75 | 0.50 | 0.40 | 0.35 |  |  |
| warped_sign | 1 | 1 | axe | — | 1.50 | 0.75 | 0.40 | 0.25 | 0.20 | 0.20 |  |  |
| warped_slab | 2 | 3 | axe | — | 3.00 | 1.50 | 0.75 | 0.50 | 0.40 | 0.35 |  |  |
| warped_stairs | 2 | 3 | axe | — | 3.00 | 1.50 | 0.75 | 0.50 | 0.40 | 0.35 |  |  |
| warped_stem | 2 | 2 | axe | — | 3.00 | 1.50 | 0.75 | 0.50 | 0.40 | 0.35 |  |  |
| warped_trapdoor | 3 | 3 | axe | — | 4.55 | 2.30 | 1.15 | 0.75 | 0.60 | 0.50 |  |  |
| warped_wall_hanging_sign | 1 | 1 | axe | — | 1.50 | 0.75 | 0.40 | 0.25 | 0.20 | 0.20 |  |  |
| warped_wall_sign | 1 | 1 | axe | — | 1.50 | 0.75 | 0.40 | 0.25 | 0.20 | 0.20 |  |  |
| warped_wart_block | 1 | 1 | hoe | — | 1.50 | 0.75 | 0.40 | 0.25 | 0.20 | 0.20 |  |  |
| water | 100 | 100 | hand | — | 150.00 | 150.00 | 150.00 | 150.00 | 150.00 | 150.00 |  | slows fallSafe |
| water_cauldron | 2 | 2 | pickaxe | wooden | **10.00** | 1.50 | 0.75 | 0.50 | 0.40 | 0.35 |  |  |
| waxed_chiseled_copper | 3 | 6 | pickaxe | stone | **15.00** | **7.50** | 1.15 | 0.75 | 0.60 | 0.50 |  |  |
| waxed_copper_bars | 5 | 6 | pickaxe | wooden | **25.00** | 3.75 | 1.90 | 1.25 | 0.95 | 0.85 |  |  |
| waxed_copper_block | 3 | 6 | pickaxe | stone | **15.00** | **7.50** | 1.15 | 0.75 | 0.60 | 0.50 |  |  |
| waxed_copper_bulb | 3 | 6 | pickaxe | stone | **15.00** | **7.50** | 1.15 | 0.75 | 0.60 | 0.50 |  |  |
| waxed_copper_chain | 5 | 6 | pickaxe | wooden | **25.00** | 3.75 | 1.90 | 1.25 | 0.95 | 0.85 |  |  |
| waxed_copper_chest | 3 | 6 | pickaxe | stone | **15.00** | **7.50** | 1.15 | 0.75 | 0.60 | 0.50 |  |  |
| waxed_copper_door | 3 | 6 | pickaxe | — | 4.55 | 2.30 | 1.15 | 0.75 | 0.60 | 0.50 |  |  |
| waxed_copper_golem_statue | 3 | 6 | pickaxe | — | 4.55 | 2.30 | 1.15 | 0.75 | 0.60 | 0.50 |  |  |
| waxed_copper_grate | 3 | 6 | pickaxe | stone | **15.00** | **7.50** | 1.15 | 0.75 | 0.60 | 0.50 |  |  |
| waxed_copper_lantern | 3.5 | 3.5 | pickaxe | — | 5.30 | 2.65 | 1.35 | 0.90 | 0.70 | 0.60 | 15 |  |
| waxed_copper_trapdoor | 3 | 6 | pickaxe | stone | **15.00** | **7.50** | 1.15 | 0.75 | 0.60 | 0.50 |  |  |
| waxed_cut_copper | 3 | 6 | pickaxe | stone | **15.00** | **7.50** | 1.15 | 0.75 | 0.60 | 0.50 |  |  |
| waxed_cut_copper_slab | 3 | 6 | pickaxe | stone | **15.00** | **7.50** | 1.15 | 0.75 | 0.60 | 0.50 |  |  |
| waxed_cut_copper_stairs | 3 | 6 | pickaxe | stone | **15.00** | **7.50** | 1.15 | 0.75 | 0.60 | 0.50 |  |  |
| waxed_exposed_chiseled_copper | 3 | 6 | pickaxe | stone | **15.00** | **7.50** | 1.15 | 0.75 | 0.60 | 0.50 |  |  |
| waxed_exposed_copper | 3 | 6 | pickaxe | stone | **15.00** | **7.50** | 1.15 | 0.75 | 0.60 | 0.50 |  |  |
| waxed_exposed_copper_bars | 5 | 6 | pickaxe | wooden | **25.00** | 3.75 | 1.90 | 1.25 | 0.95 | 0.85 |  |  |
| waxed_exposed_copper_bulb | 3 | 6 | pickaxe | stone | **15.00** | **7.50** | 1.15 | 0.75 | 0.60 | 0.50 |  |  |
| waxed_exposed_copper_chain | 5 | 6 | pickaxe | wooden | **25.00** | 3.75 | 1.90 | 1.25 | 0.95 | 0.85 |  |  |
| waxed_exposed_copper_chest | 3 | 6 | pickaxe | stone | **15.00** | **7.50** | 1.15 | 0.75 | 0.60 | 0.50 |  |  |
| waxed_exposed_copper_door | 3 | 6 | pickaxe | — | 4.55 | 2.30 | 1.15 | 0.75 | 0.60 | 0.50 |  |  |
| waxed_exposed_copper_golem_statue | 3 | 6 | pickaxe | — | 4.55 | 2.30 | 1.15 | 0.75 | 0.60 | 0.50 |  |  |
| waxed_exposed_copper_grate | 3 | 6 | pickaxe | stone | **15.00** | **7.50** | 1.15 | 0.75 | 0.60 | 0.50 |  |  |
| waxed_exposed_copper_lantern | 3.5 | 3.5 | pickaxe | — | 5.30 | 2.65 | 1.35 | 0.90 | 0.70 | 0.60 | 15 |  |
| waxed_exposed_copper_trapdoor | 3 | 6 | pickaxe | stone | **15.00** | **7.50** | 1.15 | 0.75 | 0.60 | 0.50 |  |  |
| waxed_exposed_cut_copper | 3 | 6 | pickaxe | stone | **15.00** | **7.50** | 1.15 | 0.75 | 0.60 | 0.50 |  |  |
| waxed_exposed_cut_copper_slab | 3 | 6 | pickaxe | stone | **15.00** | **7.50** | 1.15 | 0.75 | 0.60 | 0.50 |  |  |
| waxed_exposed_cut_copper_stairs | 3 | 6 | pickaxe | stone | **15.00** | **7.50** | 1.15 | 0.75 | 0.60 | 0.50 |  |  |
| waxed_exposed_lightning_rod | 3 | 6 | pickaxe | stone | **15.00** | **7.50** | 1.15 | 0.75 | 0.60 | 0.50 |  |  |
| waxed_lightning_rod | 3 | 6 | pickaxe | stone | **15.00** | **7.50** | 1.15 | 0.75 | 0.60 | 0.50 |  |  |
| waxed_oxidized_chiseled_copper | 3 | 6 | pickaxe | stone | **15.00** | **7.50** | 1.15 | 0.75 | 0.60 | 0.50 |  |  |
| waxed_oxidized_copper | 3 | 6 | pickaxe | stone | **15.00** | **7.50** | 1.15 | 0.75 | 0.60 | 0.50 |  |  |
| waxed_oxidized_copper_bars | 5 | 6 | pickaxe | wooden | **25.00** | 3.75 | 1.90 | 1.25 | 0.95 | 0.85 |  |  |
| waxed_oxidized_copper_bulb | 3 | 6 | pickaxe | stone | **15.00** | **7.50** | 1.15 | 0.75 | 0.60 | 0.50 |  |  |
| waxed_oxidized_copper_chain | 5 | 6 | pickaxe | wooden | **25.00** | 3.75 | 1.90 | 1.25 | 0.95 | 0.85 |  |  |
| waxed_oxidized_copper_chest | 3 | 6 | pickaxe | stone | **15.00** | **7.50** | 1.15 | 0.75 | 0.60 | 0.50 |  |  |
| waxed_oxidized_copper_door | 3 | 6 | pickaxe | — | 4.55 | 2.30 | 1.15 | 0.75 | 0.60 | 0.50 |  |  |
| waxed_oxidized_copper_golem_statue | 3 | 6 | pickaxe | — | 4.55 | 2.30 | 1.15 | 0.75 | 0.60 | 0.50 |  |  |
| waxed_oxidized_copper_grate | 3 | 6 | pickaxe | stone | **15.00** | **7.50** | 1.15 | 0.75 | 0.60 | 0.50 |  |  |
| waxed_oxidized_copper_lantern | 3.5 | 3.5 | pickaxe | — | 5.30 | 2.65 | 1.35 | 0.90 | 0.70 | 0.60 | 15 |  |
| waxed_oxidized_copper_trapdoor | 3 | 6 | pickaxe | stone | **15.00** | **7.50** | 1.15 | 0.75 | 0.60 | 0.50 |  |  |
| waxed_oxidized_cut_copper | 3 | 6 | pickaxe | stone | **15.00** | **7.50** | 1.15 | 0.75 | 0.60 | 0.50 |  |  |
| waxed_oxidized_cut_copper_slab | 3 | 6 | pickaxe | stone | **15.00** | **7.50** | 1.15 | 0.75 | 0.60 | 0.50 |  |  |
| waxed_oxidized_cut_copper_stairs | 3 | 6 | pickaxe | stone | **15.00** | **7.50** | 1.15 | 0.75 | 0.60 | 0.50 |  |  |
| waxed_oxidized_lightning_rod | 3 | 6 | pickaxe | stone | **15.00** | **7.50** | 1.15 | 0.75 | 0.60 | 0.50 |  |  |
| waxed_weathered_chiseled_copper | 3 | 6 | pickaxe | stone | **15.00** | **7.50** | 1.15 | 0.75 | 0.60 | 0.50 |  |  |
| waxed_weathered_copper | 3 | 6 | pickaxe | stone | **15.00** | **7.50** | 1.15 | 0.75 | 0.60 | 0.50 |  |  |
| waxed_weathered_copper_bars | 5 | 6 | pickaxe | wooden | **25.00** | 3.75 | 1.90 | 1.25 | 0.95 | 0.85 |  |  |
| waxed_weathered_copper_bulb | 3 | 6 | pickaxe | stone | **15.00** | **7.50** | 1.15 | 0.75 | 0.60 | 0.50 |  |  |
| waxed_weathered_copper_chain | 5 | 6 | pickaxe | wooden | **25.00** | 3.75 | 1.90 | 1.25 | 0.95 | 0.85 |  |  |
| waxed_weathered_copper_chest | 3 | 6 | pickaxe | stone | **15.00** | **7.50** | 1.15 | 0.75 | 0.60 | 0.50 |  |  |
| waxed_weathered_copper_door | 3 | 6 | pickaxe | — | 4.55 | 2.30 | 1.15 | 0.75 | 0.60 | 0.50 |  |  |
| waxed_weathered_copper_golem_statue | 3 | 6 | pickaxe | — | 4.55 | 2.30 | 1.15 | 0.75 | 0.60 | 0.50 |  |  |
| waxed_weathered_copper_grate | 3 | 6 | pickaxe | stone | **15.00** | **7.50** | 1.15 | 0.75 | 0.60 | 0.50 |  |  |
| waxed_weathered_copper_lantern | 3.5 | 3.5 | pickaxe | — | 5.30 | 2.65 | 1.35 | 0.90 | 0.70 | 0.60 | 15 |  |
| waxed_weathered_copper_trapdoor | 3 | 6 | pickaxe | stone | **15.00** | **7.50** | 1.15 | 0.75 | 0.60 | 0.50 |  |  |
| waxed_weathered_cut_copper | 3 | 6 | pickaxe | stone | **15.00** | **7.50** | 1.15 | 0.75 | 0.60 | 0.50 |  |  |
| waxed_weathered_cut_copper_slab | 3 | 6 | pickaxe | stone | **15.00** | **7.50** | 1.15 | 0.75 | 0.60 | 0.50 |  |  |
| waxed_weathered_cut_copper_stairs | 3 | 6 | pickaxe | stone | **15.00** | **7.50** | 1.15 | 0.75 | 0.60 | 0.50 |  |  |
| waxed_weathered_lightning_rod | 3 | 6 | pickaxe | stone | **15.00** | **7.50** | 1.15 | 0.75 | 0.60 | 0.50 |  |  |
| weathered_chiseled_copper | 3 | 6 | pickaxe | stone | **15.00** | **7.50** | 1.15 | 0.75 | 0.60 | 0.50 |  |  |
| weathered_copper | 3 | 6 | pickaxe | stone | **15.00** | **7.50** | 1.15 | 0.75 | 0.60 | 0.50 |  |  |
| weathered_copper_bars | 5 | 6 | pickaxe | wooden | **25.00** | 3.75 | 1.90 | 1.25 | 0.95 | 0.85 |  |  |
| weathered_copper_bulb | 3 | 6 | pickaxe | stone | **15.00** | **7.50** | 1.15 | 0.75 | 0.60 | 0.50 |  |  |
| weathered_copper_chain | 5 | 6 | pickaxe | wooden | **25.00** | 3.75 | 1.90 | 1.25 | 0.95 | 0.85 |  |  |
| weathered_copper_chest | 3 | 6 | pickaxe | stone | **15.00** | **7.50** | 1.15 | 0.75 | 0.60 | 0.50 |  |  |
| weathered_copper_door | 3 | 6 | pickaxe | — | 4.55 | 2.30 | 1.15 | 0.75 | 0.60 | 0.50 |  |  |
| weathered_copper_golem_statue | 3 | 6 | pickaxe | — | 4.55 | 2.30 | 1.15 | 0.75 | 0.60 | 0.50 |  |  |
| weathered_copper_grate | 3 | 6 | pickaxe | stone | **15.00** | **7.50** | 1.15 | 0.75 | 0.60 | 0.50 |  |  |
| weathered_copper_lantern | 3.5 | 3.5 | pickaxe | — | 5.30 | 2.65 | 1.35 | 0.90 | 0.70 | 0.60 | 15 |  |
| weathered_copper_trapdoor | 3 | 6 | pickaxe | stone | **15.00** | **7.50** | 1.15 | 0.75 | 0.60 | 0.50 |  |  |
| weathered_cut_copper | 3 | 6 | pickaxe | stone | **15.00** | **7.50** | 1.15 | 0.75 | 0.60 | 0.50 |  |  |
| weathered_cut_copper_slab | 3 | 6 | pickaxe | stone | **15.00** | **7.50** | 1.15 | 0.75 | 0.60 | 0.50 |  |  |
| weathered_cut_copper_stairs | 3 | 6 | pickaxe | stone | **15.00** | **7.50** | 1.15 | 0.75 | 0.60 | 0.50 |  |  |
| weathered_lightning_rod | 3 | 6 | pickaxe | stone | **15.00** | **7.50** | 1.15 | 0.75 | 0.60 | 0.50 |  |  |
| weeping_vines | 0 | 0 | hand | — | ทันที | ทันที | ทันที | ทันที | ทันที | ทันที |  | climbable fallSafe |
| weeping_vines_plant | 0 | 0 | hand | — | ทันที | ทันที | ทันที | ทันที | ทันที | ทันที |  | climbable |
| wet_sponge | 0.6 | 0.6 | hoe | — | 0.90 | 0.45 | 0.25 | 0.15 | 0.15 | 0.10 |  |  |
| wheat | 0 | 0 | hand | — | ทันที | ทันที | ทันที | ทันที | ทันที | ทันที |  |  |
| white_banner | 1 | 1 | axe | — | 1.50 | 0.75 | 0.40 | 0.25 | 0.20 | 0.20 |  |  |
| white_bed | 0.2 | 0.2 | hand | — | 0.30 | 0.30 | 0.30 | 0.30 | 0.30 | 0.30 |  | fallSafe |
| white_candle | 0.1 | 0.1 | hand | — | 0.15 | 0.15 | 0.15 | 0.15 | 0.15 | 0.15 |  |  |
| white_candle_cake | 0.5 | 0.5 | hand | — | 0.75 | 0.75 | 0.75 | 0.75 | 0.75 | 0.75 |  |  |
| white_carpet | 0.1 | 0.1 | hand | — | 0.15 | 0.15 | 0.15 | 0.15 | 0.15 | 0.15 |  |  |
| white_concrete | 1.8 | 1.8 | pickaxe | wooden | **9.00** | 1.35 | 0.70 | 0.45 | 0.35 | 0.30 |  |  |
| white_concrete_powder | 0.5 | 0.5 | shovel | — | 0.75 | 0.40 | 0.20 | 0.15 | 0.10 | 0.10 |  | gravity |
| white_glazed_terracotta | 1.4 | 1.4 | pickaxe | wooden | **7.00** | 1.05 | 0.55 | 0.35 | 0.30 | 0.25 |  |  |
| white_shulker_box | 2 | 2 | pickaxe | — | 3.00 | 1.50 | 0.75 | 0.50 | 0.40 | 0.35 |  |  |
| white_stained_glass | 0.3 | 0.3 | hand | — | 0.45 | 0.45 | 0.45 | 0.45 | 0.45 | 0.45 |  |  |
| white_stained_glass_pane | 0.3 | 0.3 | hand | — | 0.45 | 0.45 | 0.45 | 0.45 | 0.45 | 0.45 |  |  |
| white_terracotta | 1.25 | 4.2 | pickaxe | wooden | **6.25** | 0.95 | 0.50 | 0.35 | 0.25 | 0.25 |  |  |
| white_tulip | 0 | 0 | hand | — | ทันที | ทันที | ทันที | ทันที | ทันที | ทันที |  |  |
| white_wall_banner | 1 | 1 | axe | — | 1.50 | 0.75 | 0.40 | 0.25 | 0.20 | 0.20 |  |  |
| white_wool | 0.8 | 0.8 | hand | — | 1.20 | 1.20 | 1.20 | 1.20 | 1.20 | 1.20 |  |  |
| wildflowers | 0 | 0 | hand | — | ทันที | ทันที | ทันที | ทันที | ทันที | ทันที |  |  |
| wither_rose | 0 | 0 | hand | — | ทันที | ทันที | ทันที | ทันที | ทันที | ทันที |  | danger |
| wither_skeleton_skull | 1 | 1 | hand | — | 1.50 | 1.50 | 1.50 | 1.50 | 1.50 | 1.50 |  |  |
| wither_skeleton_wall_skull | 1 | 1 | hand | — | 1.50 | 1.50 | 1.50 | 1.50 | 1.50 | 1.50 |  |  |
| yellow_banner | 1 | 1 | axe | — | 1.50 | 0.75 | 0.40 | 0.25 | 0.20 | 0.20 |  |  |
| yellow_bed | 0.2 | 0.2 | hand | — | 0.30 | 0.30 | 0.30 | 0.30 | 0.30 | 0.30 |  | fallSafe |
| yellow_candle | 0.1 | 0.1 | hand | — | 0.15 | 0.15 | 0.15 | 0.15 | 0.15 | 0.15 |  |  |
| yellow_candle_cake | 0.5 | 0.5 | hand | — | 0.75 | 0.75 | 0.75 | 0.75 | 0.75 | 0.75 |  |  |
| yellow_carpet | 0.1 | 0.1 | hand | — | 0.15 | 0.15 | 0.15 | 0.15 | 0.15 | 0.15 |  |  |
| yellow_concrete | 1.8 | 1.8 | pickaxe | wooden | **9.00** | 1.35 | 0.70 | 0.45 | 0.35 | 0.30 |  |  |
| yellow_concrete_powder | 0.5 | 0.5 | shovel | — | 0.75 | 0.40 | 0.20 | 0.15 | 0.10 | 0.10 |  | gravity |
| yellow_glazed_terracotta | 1.4 | 1.4 | pickaxe | wooden | **7.00** | 1.05 | 0.55 | 0.35 | 0.30 | 0.25 |  |  |
| yellow_shulker_box | 2 | 2 | pickaxe | — | 3.00 | 1.50 | 0.75 | 0.50 | 0.40 | 0.35 |  |  |
| yellow_stained_glass | 0.3 | 0.3 | hand | — | 0.45 | 0.45 | 0.45 | 0.45 | 0.45 | 0.45 |  |  |
| yellow_stained_glass_pane | 0.3 | 0.3 | hand | — | 0.45 | 0.45 | 0.45 | 0.45 | 0.45 | 0.45 |  |  |
| yellow_terracotta | 1.25 | 4.2 | pickaxe | wooden | **6.25** | 0.95 | 0.50 | 0.35 | 0.25 | 0.25 |  |  |
| yellow_wall_banner | 1 | 1 | axe | — | 1.50 | 0.75 | 0.40 | 0.25 | 0.20 | 0.20 |  |  |
| yellow_wool | 0.8 | 0.8 | hand | — | 1.20 | 1.20 | 1.20 | 1.20 | 1.20 | 1.20 |  |  |
| zombie_head | 1 | 1 | hand | — | 1.50 | 1.50 | 1.50 | 1.50 | 1.50 | 1.50 |  |  |
| zombie_wall_head | 1 | 1 | hand | — | 1.50 | 1.50 | 1.50 | 1.50 | 1.50 | 1.50 |  |  |

## 4. เอนทิตีทั้งหมด (ขนาดกล่องชน)

| เอนทิตี | ประเภท | หมวด | กว้าง | สูง |
|---|---|---|---|---|
| acacia_boat | other | Vehicles | 1.375 | 0.5625 |
| acacia_chest_boat | other | Vehicles | 1.375 | 0.5625 |
| allay | mob | Passive mobs | 0.35 | 0.6 |
| area_effect_cloud | other | UNKNOWN | 6 | 0.5 |
| armadillo | animal | Passive mobs | 0.7 | 0.65 |
| armor_stand | living | Immobile | 0.5 | 1.975 |
| arrow | projectile | Projectiles | 0.5 | 0.5 |
| axolotl | animal | Passive mobs | 0.75 | 0.42 |
| bamboo_chest_raft | other | Vehicles | 1.375 | 0.5625 |
| bamboo_raft | other | Vehicles | 1.375 | 0.5625 |
| bat | ambient | UNKNOWN | 0.5 | 0.9 |
| bee | animal | Passive mobs | 0.7 | 0.6 |
| birch_boat | other | Vehicles | 1.375 | 0.5625 |
| birch_chest_boat | other | Vehicles | 1.375 | 0.5625 |
| blaze | hostile | Hostile mobs | 0.6 | 1.8 |
| block_display | other | UNKNOWN | 0 | 0 |
| bogged | hostile | Hostile mobs | 0.6 | 1.99 |
| breeze | hostile | Hostile mobs | 0.6 | 1.77 |
| breeze_wind_charge | projectile | Projectiles | 0.3125 | 0.3125 |
| camel | animal | Passive mobs | 1.7 | 2.375 |
| camel_husk | animal | Passive mobs | 1.7 | 2.375 |
| cat | animal | Passive mobs | 0.6 | 0.7 |
| cave_spider | hostile | Hostile mobs | 0.7 | 0.5 |
| cherry_boat | other | Vehicles | 1.375 | 0.5625 |
| cherry_chest_boat | other | Vehicles | 1.375 | 0.5625 |
| chest_minecart | other | Vehicles | 0.98 | 0.7 |
| chicken | animal | Passive mobs | 0.4 | 0.7 |
| cod | water_creature | Passive mobs | 0.5 | 0.3 |
| copper_golem | mob | Passive mobs | 0.49 | 0.98 |
| command_block_minecart | other | Vehicles | 0.98 | 0.7 |
| cow | animal | Passive mobs | 0.9 | 1.4 |
| creaking | hostile | Hostile mobs | 0.9 | 2.7 |
| creeper | hostile | Hostile mobs | 0.6 | 1.7 |
| dark_oak_boat | other | Vehicles | 1.375 | 0.5625 |
| dark_oak_chest_boat | other | Vehicles | 1.375 | 0.5625 |
| dolphin | passive | Passive mobs | 0.9 | 0.6 |
| donkey | animal | Passive mobs | 1.3964844 | 1.5 |
| dragon_fireball | projectile | Projectiles | 1 | 1 |
| drowned | hostile | Hostile mobs | 0.6 | 1.95 |
| egg | projectile | Projectiles | 0.25 | 0.25 |
| elder_guardian | hostile | Hostile mobs | 1.9975 | 1.9975 |
| enderman | hostile | Hostile mobs | 0.6 | 2.9 |
| endermite | hostile | Hostile mobs | 0.4 | 0.3 |
| ender_dragon | mob | Hostile mobs | 16 | 8 |
| ender_pearl | projectile | Projectiles | 0.25 | 0.25 |
| end_crystal | other | Hostile mobs | 2 | 2 |
| evoker | hostile | Hostile mobs | 0.6 | 1.95 |
| evoker_fangs | other | Projectiles | 0.5 | 0.8 |
| experience_bottle | projectile | Projectiles | 0.25 | 0.25 |
| experience_orb | other | UNKNOWN | 0.5 | 0.5 |
| eye_of_ender | other | Projectiles | 0.25 | 0.25 |
| falling_block | other | UNKNOWN | 0.98 | 0.98 |
| fireball | projectile | Projectiles | 1 | 1 |
| firework_rocket | projectile | Projectiles | 0.25 | 0.25 |
| fox | animal | Passive mobs | 0.6 | 0.7 |
| frog | animal | Passive mobs | 0.5 | 0.5 |
| furnace_minecart | other | Vehicles | 0.98 | 0.7 |
| ghast | mob | Hostile mobs | 4 | 4 |
| happy_ghast | animal | Passive mobs | 4 | 4 |
| giant | hostile | Hostile mobs | 3.6 | 12 |
| glow_item_frame | other | Immobile | 0.5 | 0.5 |
| glow_squid | passive | Passive mobs | 0.8 | 0.8 |
| goat | animal | Passive mobs | 0.9 | 1.3 |
| guardian | hostile | Hostile mobs | 0.85 | 0.85 |
| hoglin | animal | Hostile mobs | 1.3964844 | 1.4 |
| hopper_minecart | other | Vehicles | 0.98 | 0.7 |
| horse | animal | Passive mobs | 1.3964844 | 1.6 |
| husk | hostile | Hostile mobs | 0.6 | 1.95 |
| illusioner | hostile | Hostile mobs | 0.6 | 1.95 |
| interaction | other | UNKNOWN | 0 | 0 |
| iron_golem | mob | Passive mobs | 1.4 | 2.7 |
| item | other | UNKNOWN | 0.25 | 0.25 |
| item_display | other | UNKNOWN | 0 | 0 |
| item_frame | other | Immobile | 0.5 | 0.5 |
| jungle_boat | other | Vehicles | 1.375 | 0.5625 |
| jungle_chest_boat | other | Vehicles | 1.375 | 0.5625 |
| leash_knot | other | Immobile | 0.375 | 0.5 |
| lightning_bolt | other | UNKNOWN | 0 | 0 |
| llama | animal | Passive mobs | 0.9 | 1.87 |
| llama_spit | projectile | Projectiles | 0.25 | 0.25 |
| magma_cube | mob | Hostile mobs | 0.52 | 0.52 |
| mangrove_boat | other | Vehicles | 1.375 | 0.5625 |
| mangrove_chest_boat | other | Vehicles | 1.375 | 0.5625 |
| mannequin | living | Immobile | 0.6 | 1.8 |
| marker | other | UNKNOWN | 0 | 0 |
| minecart | other | Vehicles | 0.98 | 0.7 |
| mooshroom | animal | Passive mobs | 0.9 | 1.4 |
| mule | animal | Passive mobs | 1.3964844 | 1.6 |
| nautilus | animal | Passive mobs | 0.875 | 0.95 |
| oak_boat | other | Vehicles | 1.375 | 0.5625 |
| oak_chest_boat | other | Vehicles | 1.375 | 0.5625 |
| ocelot | animal | Passive mobs | 0.6 | 0.7 |
| ominous_item_spawner | other | UNKNOWN | 0.25 | 0.25 |
| painting | other | Immobile | 0.5 | 0.5 |
| pale_oak_boat | other | Vehicles | 1.375 | 0.5625 |
| pale_oak_chest_boat | other | Vehicles | 1.375 | 0.5625 |
| panda | animal | Passive mobs | 1.3 | 1.25 |
| parched | hostile | Hostile mobs | 0.6 | 1.99 |
| parrot | animal | Passive mobs | 0.5 | 0.9 |
| phantom | mob | Hostile mobs | 0.9 | 0.5 |
| pig | animal | Passive mobs | 0.9 | 0.9 |
| piglin | hostile | Hostile mobs | 0.6 | 1.95 |
| piglin_brute | hostile | Hostile mobs | 0.6 | 1.95 |
| pillager | hostile | Hostile mobs | 0.6 | 1.95 |
| polar_bear | animal | Passive mobs | 1.4 | 1.4 |
| splash_potion | projectile | Projectiles | 0.25 | 0.25 |
| lingering_potion | projectile | Projectiles | 0.25 | 0.25 |
| pufferfish | water_creature | Passive mobs | 0.7 | 0.7 |
| rabbit | animal | Passive mobs | 0.49 | 0.6 |
| ravager | hostile | Hostile mobs | 1.95 | 2.2 |
| salmon | water_creature | Passive mobs | 0.7 | 0.4 |
| sheep | animal | Passive mobs | 0.9 | 1.3 |
| shulker | mob | Hostile mobs | 1 | 1 |
| shulker_bullet | projectile | Projectiles | 0.3125 | 0.3125 |
| silverfish | hostile | Hostile mobs | 0.4 | 0.3 |
| skeleton | hostile | Hostile mobs | 0.6 | 1.99 |
| skeleton_horse | animal | Passive mobs | 1.3964844 | 1.6 |
| slime | mob | Hostile mobs | 0.52 | 0.52 |
| small_fireball | projectile | Projectiles | 0.3125 | 0.3125 |
| sniffer | animal | Passive mobs | 1.9 | 1.75 |
| snowball | projectile | Projectiles | 0.25 | 0.25 |
| snow_golem | mob | Passive mobs | 0.7 | 1.9 |
| spawner_minecart | other | Vehicles | 0.98 | 0.7 |
| spectral_arrow | projectile | Projectiles | 0.5 | 0.5 |
| spider | hostile | Hostile mobs | 1.4 | 0.9 |
| spruce_boat | other | Vehicles | 1.375 | 0.5625 |
| spruce_chest_boat | other | Vehicles | 1.375 | 0.5625 |
| squid | passive | Passive mobs | 0.8 | 0.8 |
| stray | hostile | Hostile mobs | 0.6 | 1.99 |
| strider | animal | Hostile mobs | 0.9 | 1.7 |
| tadpole | water_creature | Passive mobs | 0.4 | 0.3 |
| text_display | other | UNKNOWN | 0 | 0 |
| tnt | other | UNKNOWN | 0.98 | 0.98 |
| tnt_minecart | other | Vehicles | 0.98 | 0.7 |
| trader_llama | animal | Passive mobs | 0.9 | 1.87 |
| trident | projectile | Projectiles | 0.5 | 0.5 |
| tropical_fish | water_creature | Passive mobs | 0.5 | 0.4 |
| turtle | animal | Passive mobs | 1.2 | 0.4 |
| vex | hostile | Hostile mobs | 0.4 | 0.8 |
| villager | passive | UNKNOWN | 0.6 | 1.95 |
| vindicator | hostile | Hostile mobs | 0.6 | 1.95 |
| wandering_trader | passive | UNKNOWN | 0.6 | 1.95 |
| warden | hostile | Hostile mobs | 0.9 | 2.9 |
| wind_charge | projectile | Projectiles | 0.3125 | 0.3125 |
| witch | hostile | Hostile mobs | 0.6 | 1.95 |
| wither | hostile | Hostile mobs | 0.9 | 3.5 |
| wither_skeleton | hostile | Hostile mobs | 0.7 | 2.4 |
| wither_skull | projectile | Projectiles | 0.3125 | 0.3125 |
| wolf | animal | Passive mobs | 0.6 | 0.85 |
| zoglin | hostile | Hostile mobs | 1.3964844 | 1.4 |
| zombie | hostile | Hostile mobs | 0.6 | 1.95 |
| zombie_horse | animal | Passive mobs | 1.3964844 | 1.6 |
| zombie_nautilus | animal | Passive mobs | 0.875 | 0.95 |
| zombie_villager | hostile | Hostile mobs | 0.6 | 1.95 |
| zombified_piglin | hostile | Hostile mobs | 0.6 | 1.95 |
| player | player | UNKNOWN | 0.6 | 1.8 |
| fishing_bobber | projectile | Projectiles | 0.25 | 0.25 |

## 5. เอนชานต์ทั้งหมด

| เอนชานต์ | เลเวลสูงสุด | ใช้กับ | treasure | ห้ามคู่กับ |
|---|---|---|---|---|
| aqua_affinity | 1 | head_armor |  |  |
| bane_of_arthropods | 5 | weapon |  | breach, density, impaling, sharpness, smite |
| binding_curse | 1 | equippable | ✓ |  |
| blast_protection | 4 | armor |  | fire_protection, projectile_protection, protection |
| breach | 4 | mace |  | bane_of_arthropods, density, impaling, sharpness, smite |
| channeling | 1 | trident |  | riptide |
| density | 5 | mace |  | bane_of_arthropods, breach, impaling, sharpness, smite |
| depth_strider | 3 | foot_armor |  | frost_walker |
| efficiency | 5 | mining |  |  |
| feather_falling | 4 | foot_armor |  |  |
| fire_aspect | 2 | fire_aspect |  |  |
| fire_protection | 4 | armor |  | blast_protection, projectile_protection, protection |
| flame | 1 | bow |  |  |
| fortune | 3 | mining_loot |  | silk_touch |
| frost_walker | 2 | foot_armor | ✓ | depth_strider |
| impaling | 5 | trident |  | bane_of_arthropods, breach, density, sharpness, smite |
| infinity | 1 | bow |  | mending |
| knockback | 2 | melee_weapon |  |  |
| looting | 3 | melee_weapon |  |  |
| loyalty | 3 | trident |  | riptide |
| luck_of_the_sea | 3 | fishing |  |  |
| lunge | 3 | lunge |  |  |
| lure | 3 | fishing |  |  |
| mending | 1 | durability | ✓ | infinity |
| multishot | 1 | crossbow |  | piercing |
| piercing | 4 | crossbow |  | multishot |
| power | 5 | bow |  |  |
| projectile_protection | 4 | armor |  | blast_protection, fire_protection, protection |
| protection | 4 | armor |  | blast_protection, fire_protection, projectile_protection |
| punch | 2 | bow |  |  |
| quick_charge | 3 | crossbow |  |  |
| respiration | 3 | head_armor |  |  |
| riptide | 3 | trident |  | channeling, loyalty |
| sharpness | 5 | sharp_weapon |  | bane_of_arthropods, breach, density, impaling, smite |
| silk_touch | 1 | mining_loot |  | fortune |
| smite | 5 | weapon |  | bane_of_arthropods, breach, density, impaling, sharpness |
| soul_speed | 3 | foot_armor | ✓ |  |
| sweeping_edge | 3 | sweeping |  |  |
| swift_sneak | 3 | leg_armor | ✓ |  |
| thorns | 3 | armor |  |  |
| unbreaking | 3 | durability |  |  |
| vanishing_curse | 1 | vanishing | ✓ |  |
| wind_burst | 3 | mace | ✓ |  |

## 6. เอฟเฟกต์ทั้งหมด

Speed (ดี) · Slowness (ร้าย) · Haste (ดี) · MiningFatigue (ร้าย) · Strength (ดี) · InstantHealth (ดี) · InstantDamage (ร้าย) · JumpBoost (ดี) · Nausea (ร้าย) · Regeneration (ดี) · Resistance (ดี) · FireResistance (ดี) · WaterBreathing (ดี) · Invisibility (ดี) · Blindness (ร้าย) · NightVision (ดี) · Hunger (ร้าย) · Weakness (ร้าย) · Poison (ร้าย) · Wither (ร้าย) · HealthBoost (ดี) · Absorption (ดี) · Saturation (ดี) · Glowing (ร้าย) · Levitation (ร้าย) · Luck (ดี) · BadLuck (ร้าย) · SlowFalling (ดี) · ConduitPower (ดี) · DolphinsGrace (ดี) · BadOmen (ร้าย) · HeroOfTheVillage (ดี) · Darkness (ร้าย) · TrialOmen (ร้าย) · RaidOmen (ร้าย) · WindCharged (ร้าย) · Weaving (ร้าย) · Oozing (ร้าย) · Infested (ร้าย) · BreathOfTheNautilus (ดี)
