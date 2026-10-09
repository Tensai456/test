#!/bin/bash
# fuzz_parallel.sh <จากรอบ> <ถึงรอบ> [N=200000] — แบ่ง 4 กลุ่มรันพร้อมกัน (4 คอร์) · หยุดเมื่อเจอช่องโหว่ · ผล: docs/fuzz_out/
cd "$(dirname "$0")/.."
N=${3:-200000}
G=("lava veto ranged creeper fall drowning" "warden crowd effects edgeKnock mixedCrowd creeperBait" "underwater allMobs neutral blocks piglin" "weaponTactics effectsAll mlg biomes weapons")
for r in $(seq "$1" "$2"); do
  for i in 0 1 2 3; do node scripts/deep_fuzz.mjs "$N" --round="$r" --out="docs/fuzz_out/g$i.md" ${G[$i]} > "docs/fuzz_out/g$i.log" 2>&1 & done
  wait
  bad=$(cat docs/fuzz_out/g*.log | awk -F'ผิด ' '{split($2,a," "); gsub(",","",a[1]); s+=a[1]} END{print s+0}')
  echo "| $r (ชุดกฎ 57 ข้อ · ขนาน 4) | $N × 22 เหตุการณ์ | $bad |" >> docs/FUZZ_LOG.md
  echo "round $r: holes=$bad"
  [ "$bad" -gt 0 ] && { grep -h -v "ผิด 0 " docs/fuzz_out/g*.log; exit 1; }
done
echo DONE
