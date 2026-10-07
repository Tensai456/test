# DEEP_FUZZ — รอบ 1 (สุ่มเหตุการณ์ละ 5,000 สถานะ)

> `node scripts/deep_fuzz.mjs [N] [event...]` · seed คงที่ (ทำซ้ำได้) · ช่องโหว่จัดกลุ่ม "กฎที่ผิด | สิ่งที่บอตเลือก" · ยืนยันระดับจำลอง

## fieldSmelt — ❌ ช่องโหว่ 33 กลุ่ม (1,928 สถานะ)

- **เกินรัศมีตะเวน → ห้ามแผน (หันกลับ หรือภัยที่ด่วนกว่า) | plan:stone-pick** — 366 สถานะ
  - `{"hp":14,"food":20,"dim":"overworld","nearby":[],"inv":["bread","golden_apple","hay_block","milk_bucket","bow"],"flags":{"smelting":true,"furnaceDone":true,"foodShort":true}}`
  - `{"hp":13,"food":14,"dim":"overworld","nearby":[{"type":"piglin_brute","dist":31.5,"hostile":true},{"type":"pillager","dist":37,"hostile":true}],"inv":["shield","totem_of_undying"],"flags":{"smelting":true,"furnaceDone":true,"foodShort":true}}`
  - `{"hp":10,"food":11,"dim":"overworld","nearby":[],"inv":["ender_pearl","ladder","iron_sword","golden_boots","cobblestone"],"flags":{"smelting":true,"furnaceDone":true}}`
- **เผาเสร็จ + ห่างเตา >6 → ห้ามแผน | plan:stone-pick** — 247 สถานะ
  - `{"hp":14,"food":20,"dim":"overworld","nearby":[],"inv":["bread","golden_apple","hay_block","milk_bucket","bow"],"flags":{"smelting":true,"furnaceDone":true,"foodShort":true}}`
  - `{"hp":13,"food":14,"dim":"overworld","nearby":[{"type":"piglin_brute","dist":31.5,"hostile":true},{"type":"pillager","dist":37,"hostile":true}],"inv":["shield","totem_of_undying"],"flags":{"smelting":true,"furnaceDone":true,"foodShort":true}}`
  - `{"hp":10,"food":11,"dim":"overworld","nearby":[],"inv":["ender_pearl","ladder","iron_sword","golden_boots","cobblestone"],"flags":{"smelting":true,"furnaceDone":true}}`
- **ไม้/อาหารไม่พอ + ไม่มีศัตรู ≤16 → ห้ามแผน | plan:stone-pick** — 241 สถานะ
  - `{"hp":14,"food":20,"dim":"overworld","nearby":[],"inv":["bread","golden_apple","hay_block","milk_bucket","bow"],"flags":{"smelting":true,"furnaceDone":true,"foodShort":true}}`
  - `{"hp":13,"food":14,"dim":"overworld","nearby":[{"type":"piglin_brute","dist":31.5,"hostile":true},{"type":"pillager","dist":37,"hostile":true}],"inv":["shield","totem_of_undying"],"flags":{"smelting":true,"furnaceDone":true,"foodShort":true}}`
  - `{"hp":18,"food":9,"dim":"overworld","nearby":[{"type":"skeleton","dist":22.5,"hostile":true}],"act":"smelt","inv":["water_bucket","hay_block","shield","iron_sword","milk_bucket","totem_of_undying","torch"],"flags":{"smelting":true,"furnaceDone":true,"foodShort":true,"noSmeltItem":true}}`
- **เกินรัศมีตะเวน → ห้ามแผน (หันกลับ หรือภัยที่ด่วนกว่า) | plan:safe-spawn** — 190 สถานะ
  - `{"hp":13,"food":10,"dim":"the_end","nearby":[{"type":"pillager","dist":17,"hostile":true},{"type":"spider","dist":14,"hostile":true}],"inv":["cooked_beef","golden_apple","water_bucket","iron_sword","totem_of_undying","bow"],"flags":{"smelting":true,"foodShort":true}}`
  - `{"hp":9,"food":16,"dim":"the_end","nearby":[],"inv":["hay_block","ender_pearl","ladder","iron_sword","torch","bow"],"flags":{"smelting":true,"fuelShort":true}}`
  - `{"hp":12,"food":14,"dim":"the_end","nearby":[],"inv":["cooked_beef","water_bucket","cobblestone","torch"],"flags":{"smelting":true,"furnaceDone":true}}`
- **ไม้/อาหารไม่พอ + ไม่มีศัตรู ≤16 → ห้ามแผน | plan:safe-spawn** — 138 สถานะ
  - `{"hp":9,"food":16,"dim":"the_end","nearby":[],"inv":["hay_block","ender_pearl","ladder","iron_sword","torch","bow"],"flags":{"smelting":true,"fuelShort":true}}`
  - `{"hp":20,"food":15,"dim":"the_end","nearby":[],"act":"smelt","inv":["cooked_beef","golden_apple","water_bucket","hay_block","shield","golden_boots","cobblestone"],"flags":{"smelting":true,"furnaceDone":true,"foodShort":true,"noSmeltItem":true}}`
  - `{"hp":11,"food":9,"dim":"the_end","nearby":[],"act":"smelt","inv":["milk_bucket","totem_of_undying","torch","bow"],"flags":{"smelting":true,"foodShort":true,"noSmeltItem":true}}`
- **เผาเสร็จ + ห่างเตา >6 → ห้ามแผน | plan:safe-spawn** — 135 สถานะ
  - `{"hp":20,"food":15,"dim":"the_end","nearby":[],"act":"smelt","inv":["cooked_beef","golden_apple","water_bucket","hay_block","shield","golden_boots","cobblestone"],"flags":{"smelting":true,"furnaceDone":true,"foodShort":true,"noSmeltItem":true}}`
  - `{"hp":12,"food":14,"dim":"the_end","nearby":[],"inv":["cooked_beef","water_bucket","cobblestone","torch"],"flags":{"smelting":true,"furnaceDone":true}}`
  - `{"hp":11,"food":12,"dim":"the_end","nearby":[{"type":"husk","dist":13.5,"hostile":true},{"type":"blaze","dist":38,"hostile":true}],"inv":["iron_sword","milk_bucket"],"flags":{"smelting":true,"furnaceDone":true,"fuelShort":true}}`
- **เผาเพชร/ถ่าน ฯลฯ → veto | eat-to-regen** — 122 สถานะ
  - `{"hp":5,"food":2,"dim":"the_nether","nearby":[],"act":"smelt","inv":["cooked_beef","golden_apple","hay_block","milk_bucket","torch"],"flags":{"smelting":true,"noSmeltItem":true}}`
  - `{"hp":1,"food":17,"dim":"overworld","nearby":[],"act":"smelt","inv":["golden_apple","ladder","milk_bucket","totem_of_undying","cobblestone","torch"],"flags":{"smelting":true,"furnaceDone":true,"foodShort":true,"noSmeltItem":true}}`
  - `{"hp":7,"food":16,"dim":"overworld","nearby":[],"act":"smelt","inv":["cooked_beef","ender_pearl","shield"],"flags":{"smelting":true,"fuelShort":true,"noSmeltItem":true}}`
- **เผาเพชร/ถ่าน ฯลฯ → veto | nether-no-gold** — 63 สถานะ
  - `{"hp":3,"food":19,"dim":"the_nether","nearby":[],"act":"smelt","inv":["bread","water_bucket","golden_boots","milk_bucket","totem_of_undying","bow"],"flags":{"smelting":true,"furnaceDone":true,"foodShort":true,"noSmeltItem":true}}`
  - `{"hp":5,"food":12,"dim":"the_nether","nearby":[],"act":"smelt","inv":["water_bucket","iron_sword","golden_boots"],"flags":{"smelting":true,"noSmeltItem":true}}`
  - `{"hp":12,"food":11,"dim":"the_nether","nearby":[],"act":"smelt","inv":["cooked_beef","golden_apple","milk_bucket","torch"],"flags":{"smelting":true,"fuelShort":true,"noSmeltItem":true}}`

การตัดสินใจหลัก: eat-to-regen 20.9% · plan:stone-pick 10.1% · nether-no-gold 8.9% · no-food 8.1% · on-fire 7.7% · hungry 7.6%
