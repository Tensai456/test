# DEEP_FUZZ — รอบ 1 (สุ่มเหตุการณ์ละ 5,000 สถานะ)

> `node scripts/deep_fuzz.mjs [N] [event...]` · seed คงที่ (ทำซ้ำได้) · ช่องโหว่จัดกลุ่ม "กฎที่ผิด | สิ่งที่บอตเลือก" · ยืนยันระดับจำลอง

## homeKeep — ❌ ช่องโหว่ 29 กลุ่ม (1,565 สถานะ)

- **ทางขึ้นบ้าน/ประตูถูกขวาง + ไม่มีศัตรู ≤8 → ห้ามแผน (ต้องเคลียร์) | plan:stone-pick** — 227 สถานะ
  - `{"hp":11,"food":18,"dim":"overworld","nearby":[],"act":"place_block","inv":["bread","ladder","golden_boots","milk_bucket","torch"],"flags":{"inBase":true,"entranceBlocked":true,"targetInPassage":true}}`
  - `{"hp":20,"food":8,"dim":"overworld","nearby":[],"edge":3,"inv":["golden_apple","ender_pearl","cobblestone","bow"],"flags":{"inBase":true,"entranceBlocked":true}}`
  - `{"hp":14,"food":16,"dim":"overworld","nearby":[],"inv":["bread","ender_pearl","golden_boots","torch"],"flags":{"inBase":true,"entranceBlocked":true}}`
- **วางบล็อกบนทางเดินขึ้นบ้าน → veto | eat-to-regen** — 225 สถานะ
  - `{"hp":9,"food":10,"dim":"overworld","nearby":[{"type":"creeper","dist":33.5,"hostile":true}],"act":"place_block","inv":["bread","cooked_beef","golden_apple","totem_of_undying","torch","bow"],"flags":{"inBase":true,"entranceBlocked":true,"targetInPassage":true}}`
  - `{"hp":8,"food":0,"dim":"the_end","nearby":[],"act":"place_block","inv":["cooked_beef","water_bucket","hay_block","torch"],"flags":{"inBase":true,"targetInPassage":true}}`
  - `{"hp":5,"food":10,"dim":"overworld","nearby":[],"act":"place_block","inv":["bread","cooked_beef","golden_apple","water_bucket","hay_block","golden_boots"],"flags":{"inBase":true,"entranceBlocked":true,"targetInPassage":true}}`
- **ทางขึ้นบ้าน/ประตูถูกขวาง + ไม่มีศัตรู ≤8 → ห้ามแผน (ต้องเคลียร์) | plan:safe-spawn** — 175 สถานะ
  - `{"hp":19,"food":17,"dim":"the_end","nearby":[],"act":"place_block","inv":["bread","golden_apple","hay_block","shield","iron_sword","torch"],"flags":{"inBase":true,"entranceBlocked":true}}`
  - `{"hp":19,"food":10,"dim":"the_end","nearby":[],"inv":["cooked_beef","shield","torch"],"flags":{"inBase":true,"entranceBlocked":true}}`
  - `{"hp":11,"food":20,"dim":"the_end","nearby":[],"inv":["water_bucket","shield","milk_bucket"],"flags":{"inBase":true,"entranceBlocked":true}}`
- **วางบล็อกบนทางเดินขึ้นบ้าน → veto | plan:stone-pick** — 116 สถานะ
  - `{"hp":11,"food":18,"dim":"overworld","nearby":[],"act":"place_block","inv":["bread","ladder","golden_boots","milk_bucket","torch"],"flags":{"inBase":true,"entranceBlocked":true,"targetInPassage":true}}`
  - `{"hp":14,"food":12,"dim":"overworld","nearby":[],"act":"place_block","inv":["bread","cooked_beef","golden_apple","hay_block","shield","iron_sword","golden_boots","milk_bucket","cobblestone"],"flags":{"inBase":true,"entranceBlocked":true,"targetInPassage":true}}`
  - `{"hp":17,"food":18,"dim":"overworld","nearby":[],"act":"place_block","inv":["cooked_beef","ladder","shield","golden_boots","torch"],"flags":{"inBase":true,"targetInPassage":true}}`
- **วางบล็อกบนทางเดินขึ้นบ้าน → veto | nether-no-gold** — 109 สถานะ
  - `{"hp":2,"food":11,"dim":"the_nether","nearby":[],"act":"place_block","inv":["hay_block","ladder","bow"],"flags":{"inBase":true,"targetInPassage":true}}`
  - `{"hp":11,"food":16,"dim":"the_nether","nearby":[],"edge":8,"act":"place_block","inv":["ender_pearl","ladder","shield","milk_bucket","torch"],"flags":{"inBase":true,"targetInPassage":true}}`
  - `{"hp":11,"food":13,"dim":"the_nether","nearby":[],"act":"place_block","inv":["bread","golden_boots","totem_of_undying","torch"],"flags":{"inBase":true,"entranceBlocked":true,"targetInPassage":true}}`
- **วางบล็อกบนทางเดินขึ้นบ้าน → veto | no-food** — 105 สถานะ
  - `{"hp":5,"food":2,"dim":"overworld","nearby":[],"act":"place_block","inv":["water_bucket","ender_pearl","iron_sword","totem_of_undying","cobblestone"],"flags":{"inBase":true,"entranceBlocked":true,"targetInPassage":true}}`
  - `{"hp":19,"food":3,"dim":"overworld","nearby":[],"act":"place_block","inv":["ender_pearl","iron_sword","milk_bucket"],"flags":{"inBase":true,"targetInPassage":true}}`
  - `{"hp":18,"food":0,"dim":"overworld","nearby":[],"edge":19,"act":"place_block","inv":["cobblestone"],"flags":{"inBase":true,"targetInPassage":true}}`
- **วางบล็อกบนทางเดินขึ้นบ้าน → veto | hungry** — 91 สถานะ
  - `{"hp":14,"food":6,"dim":"the_nether","nearby":[],"act":"place_block","inv":["cooked_beef","ender_pearl","ladder","golden_boots","milk_bucket","cobblestone","torch"],"flags":{"inBase":true,"entranceBlocked":true,"targetInPassage":true}}`
  - `{"hp":14,"food":6,"dim":"overworld","nearby":[],"act":"place_block","inv":["bread","golden_apple","cobblestone","torch"],"flags":{"inBase":true,"entranceBlocked":true,"targetInPassage":true}}`
  - `{"hp":19,"food":3,"dim":"the_end","nearby":[],"act":"place_block","inv":["cooked_beef","hay_block","shield"],"flags":{"inBase":true,"entranceBlocked":true,"targetInPassage":true}}`
- **วางบล็อกบนทางเดินขึ้นบ้าน → veto | plan:safe-spawn** — 78 สถานะ
  - `{"hp":8,"food":8,"dim":"the_end","nearby":[],"edge":1,"act":"place_block","inv":["ender_pearl","iron_sword","golden_boots","milk_bucket"],"flags":{"inBase":true,"entranceBlocked":true,"targetInPassage":true}}`
  - `{"hp":14,"food":20,"dim":"the_end","nearby":[],"act":"place_block","inv":["bread","cooked_beef","golden_apple","golden_boots","torch"],"flags":{"inBase":true,"entranceBlocked":true,"targetInPassage":true}}`
  - `{"hp":20,"food":8,"dim":"the_end","nearby":[],"act":"place_block","inv":[],"flags":{"inBase":true,"entranceBlocked":true,"targetInPassage":true}}`

การตัดสินใจหลัก: eat-to-regen 20.2% · nether-no-gold 9.1% · plan:stone-pick 9.0% · no-food 8.8% · hungry 7.9% · on-fire 7.1%
