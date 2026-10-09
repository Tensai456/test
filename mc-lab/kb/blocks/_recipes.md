# สูตรคราฟต์จำเป็น (จากข้อมูลเกม 26.1) — ใช้แทน/ตรวจ kb/crafting

<!-- สร้างอัตโนมัติโดย scripts/gen_catalog.cjs 26.1 จาก minecraft-data · ห้ามแก้มือ -->
> เวลาขุด = วินาที, ไม่มีเอนชานต์/ยา, ยืนบนพื้น, ไม่อยู่ในน้ำ (อยู่ในน้ำหรือลอย ×5 ต่ออย่าง) · สูตร [Breaking](https://minecraft.wiki/w/Breaking)
> "ขั้นต่ำ" = ขั้นเครื่องมือต่ำสุดที่ขุดแล้วได้ของ · **ตัวหนา** = ขุดได้แต่ไม่ได้ของ · ค้นบล็อก→ไฟล์: `data/catalog_26.1/blocks/index.json`

> ใส่ = จำนวนต่อ 1 ครั้งคราฟต์ · ได้ = จำนวนที่ออก · 2x2 = ทำในช่องกระเป๋าได้ · หลายสูตร (เช่นไม้คนละชนิด) แสดงสูตรแรก · สูตรทั้งหมด 887 รายการ: `data/catalog_26.1/recipes.json`

| ของ | ใส่ | ได้ | ตาราง | จำนวนสูตร |
|---|---|---|---|---|
| oak_planks | oak_log×1 | 4 | 2x2 | 1 |
| stick | cherry_planks×2 | 4 | 2x2 | 13 |
| crafting_table | cherry_planks×4 | 1 | 2x2 | 12 |
| chest | cherry_planks×8 | 1 | 3x3 | 12 |
| furnace | cobbled_deepslate×8 | 1 | 3x3 | 3 |
| blast_furnace | iron_ingot×5, furnace×1, smooth_stone×3 | 1 | 3x3 | 1 |
| smoker | stripped_warped_hyphae×4, furnace×1 | 1 | 3x3 | 44 |
| torch | charcoal×1, stick×1 | 4 | 2x2 | 2 |
| ladder | stick×7 | 3 | 3x3 | 1 |
| oak_door | oak_planks×6 | 3 | 3x3 | 1 |
| oak_trapdoor | oak_planks×6 | 2 | 3x3 | 1 |
| oak_fence | oak_planks×4, stick×2 | 3 | 3x3 | 1 |
| oak_fence_gate | stick×4, oak_planks×2 | 1 | 3x3 | 1 |
| oak_boat | oak_planks×5 | 1 | 3x3 | 1 |
| white_bed | white_wool×3, cherry_planks×3 | 1 | 3x3 | 13 |
| bucket | iron_ingot×3 | 1 | 3x3 | 1 |
| shears | iron_ingot×2 | 1 | 2x2 | 1 |
| flint_and_steel | iron_ingot×1, flint×1 | 1 | 2x2 | 1 |
| compass | iron_ingot×4, redstone×1 | 1 | 3x3 | 1 |
| clock | gold_ingot×4, redstone×1 | 1 | 3x3 | 1 |
| map | paper×8, compass×1 | 1 | 3x3 | 1 |
| shield | cherry_planks×6, iron_ingot×1 | 1 | 3x3 | 12 |
| bow | stick×3, string×3 | 1 | 3x3 | 1 |
| arrow | flint×1, stick×1, feather×1 | 4 | 3x3 | 1 |
| crossbow | stick×3, iron_ingot×1, string×2, tripwire_hook×1 | 1 | 3x3 | 1 |
| fishing_rod | stick×3, string×2 | 1 | 3x3 | 1 |
| wooden_pickaxe | cherry_planks×3, stick×2 | 1 | 3x3 | 12 |
| wooden_axe | cherry_planks×3, stick×2 | 1 | 3x3 | 12 |
| wooden_shovel | cherry_planks×1, stick×2 | 1 | 3x3 | 12 |
| wooden_hoe | cherry_planks×2, stick×2 | 1 | 3x3 | 12 |
| wooden_sword | cherry_planks×2, stick×1 | 1 | 3x3 | 12 |
| wooden_spear | cherry_planks×1, stick×2 | 1 | 3x3 | 12 |
| stone_pickaxe | cobbled_deepslate×3, stick×2 | 1 | 3x3 | 3 |
| stone_axe | cobbled_deepslate×3, stick×2 | 1 | 3x3 | 3 |
| stone_shovel | cobbled_deepslate×1, stick×2 | 1 | 3x3 | 3 |
| stone_hoe | cobbled_deepslate×2, stick×2 | 1 | 3x3 | 3 |
| stone_sword | cobbled_deepslate×2, stick×1 | 1 | 3x3 | 3 |
| stone_spear | cobbled_deepslate×1, stick×2 | 1 | 3x3 | 3 |
| copper_pickaxe | copper_ingot×3, stick×2 | 1 | 3x3 | 1 |
| copper_axe | copper_ingot×3, stick×2 | 1 | 3x3 | 1 |
| copper_shovel | copper_ingot×1, stick×2 | 1 | 3x3 | 1 |
| copper_hoe | copper_ingot×2, stick×2 | 1 | 3x3 | 1 |
| copper_sword | copper_ingot×2, stick×1 | 1 | 3x3 | 1 |
| copper_spear | copper_ingot×1, stick×2 | 1 | 3x3 | 1 |
| iron_pickaxe | iron_ingot×3, stick×2 | 1 | 3x3 | 1 |
| iron_axe | iron_ingot×3, stick×2 | 1 | 3x3 | 1 |
| iron_shovel | iron_ingot×1, stick×2 | 1 | 3x3 | 1 |
| iron_hoe | iron_ingot×2, stick×2 | 1 | 3x3 | 1 |
| iron_sword | iron_ingot×2, stick×1 | 1 | 3x3 | 1 |
| iron_spear | iron_ingot×1, stick×2 | 1 | 3x3 | 1 |
| golden_pickaxe | gold_ingot×3, stick×2 | 1 | 3x3 | 1 |
| golden_axe | gold_ingot×3, stick×2 | 1 | 3x3 | 1 |
| golden_shovel | gold_ingot×1, stick×2 | 1 | 3x3 | 1 |
| golden_hoe | gold_ingot×2, stick×2 | 1 | 3x3 | 1 |
| golden_sword | gold_ingot×2, stick×1 | 1 | 3x3 | 1 |
| golden_spear | gold_ingot×1, stick×2 | 1 | 3x3 | 1 |
| diamond_pickaxe | diamond×3, stick×2 | 1 | 3x3 | 1 |
| diamond_axe | diamond×3, stick×2 | 1 | 3x3 | 1 |
| diamond_shovel | diamond×1, stick×2 | 1 | 3x3 | 1 |
| diamond_hoe | diamond×2, stick×2 | 1 | 3x3 | 1 |
| diamond_sword | diamond×2, stick×1 | 1 | 3x3 | 1 |
| diamond_spear | diamond×1, stick×2 | 1 | 3x3 | 1 |
| leather_helmet | leather×5 | 1 | 3x3 | 1 |
| leather_chestplate | leather×8 | 1 | 3x3 | 1 |
| leather_leggings | leather×7 | 1 | 3x3 | 1 |
| leather_boots | leather×4 | 1 | 3x3 | 1 |
| copper_helmet | copper_ingot×5 | 1 | 3x3 | 1 |
| copper_chestplate | copper_ingot×8 | 1 | 3x3 | 1 |
| copper_leggings | copper_ingot×7 | 1 | 3x3 | 1 |
| copper_boots | copper_ingot×4 | 1 | 3x3 | 1 |
| iron_helmet | iron_ingot×5 | 1 | 3x3 | 1 |
| iron_chestplate | iron_ingot×8 | 1 | 3x3 | 1 |
| iron_leggings | iron_ingot×7 | 1 | 3x3 | 1 |
| iron_boots | iron_ingot×4 | 1 | 3x3 | 1 |
| golden_helmet | gold_ingot×5 | 1 | 3x3 | 1 |
| golden_chestplate | gold_ingot×8 | 1 | 3x3 | 1 |
| golden_leggings | gold_ingot×7 | 1 | 3x3 | 1 |
| golden_boots | gold_ingot×4 | 1 | 3x3 | 1 |
| diamond_helmet | diamond×5 | 1 | 3x3 | 1 |
| diamond_chestplate | diamond×8 | 1 | 3x3 | 1 |
| diamond_leggings | diamond×7 | 1 | 3x3 | 1 |
| diamond_boots | diamond×4 | 1 | 3x3 | 1 |
| bread | wheat×3 | 1 | 3x3 | 1 |
| golden_apple | gold_ingot×8, apple×1 | 1 | 3x3 | 1 |
| glass_bottle | glass×3 | 3 | 3x3 | 1 |
| bookshelf | cherry_planks×6, book×3 | 1 | 3x3 | 12 |
| enchanting_table | book×1, diamond×2, obsidian×4 | 1 | 3x3 | 1 |
| anvil | iron_block×3, iron_ingot×4 | 1 | 3x3 | 1 |
| brewing_stand | blaze_rod×1, cobbled_deepslate×3 | 1 | 3x3 | 3 |
| cauldron | iron_ingot×7 | 1 | 3x3 | 1 |
| hopper | iron_ingot×5, chest×1 | 1 | 3x3 | 1 |
| iron_bars | iron_ingot×6 | 16 | 3x3 | 1 |
| lantern | iron_nugget×8, torch×1 | 1 | 3x3 | 1 |
| campfire | stick×3, coal×1, stripped_warped_hyphae×3 | 1 | 3x3 | 44 |
| scaffolding | bamboo×6, string×1 | 6 | 3x3 | 1 |
| ender_eye | ender_pearl×1, blaze_powder×1 | 1 | 2x2 | 1 |
| blaze_powder | blaze_rod×1 | 2 | 2x2 | 1 |
| smithing_table | iron_ingot×2, cherry_planks×4 | 1 | 3x3 | 12 |
| grindstone | stick×2, stone_slab×1, cherry_planks×2 | 1 | 3x3 | 12 |
| lectern | cherry_slab×4, bookshelf×1 | 1 | 3x3 | 12 |
| lodestone | chiseled_stone_bricks×8, iron_ingot×1 | 1 | 3x3 | 1 |
| recovery_compass | echo_shard×8, compass×1 | 1 | 3x3 | 1 |
| respawn_anchor | crying_obsidian×6, glowstone×3 | 1 | 3x3 | 1 |
| beacon | glass×5, nether_star×1, obsidian×3 | 1 | 3x3 | 1 |
| conduit | nautilus_shell×8, heart_of_the_sea×1 | 1 | 3x3 | 1 |
| netherite_ingot | netherite_scrap×4, gold_ingot×4 | 1 | 3x3 | 2 |
| mace | heavy_core×1, breeze_rod×1 | 1 | 2x2 | 1 |
| wind_charge | breeze_rod×1 | 4 | 2x2 | 1 |
| book | paper×3, leather×1 | 1 | 2x2 | 1 |
| paper | sugar_cane×3 | 3 | 3x3 | 1 |
| composter | cherry_slab×7 | 1 | 3x3 | 12 |
| minecart | iron_ingot×5 | 1 | 3x3 | 1 |
| rail | iron_ingot×6, stick×1 | 16 | 3x3 | 1 |
| powered_rail | gold_ingot×6, stick×1, redstone×1 | 6 | 3x3 | 1 |
| tnt | gunpowder×5, red_sand×4 | 1 | 3x3 | 2 |
| lead | string×5 | 2 | 3x3 | 1 |
| saddle | leather×3, iron_ingot×1 | 1 | 3x3 | 1 |
| spyglass | amethyst_shard×1, copper_ingot×2 | 1 | 3x3 | 1 |
| brush | feather×1, copper_ingot×1, stick×1 | 1 | 3x3 | 1 |
