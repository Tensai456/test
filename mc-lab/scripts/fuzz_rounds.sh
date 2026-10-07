#!/bin/sh
# fuzz_rounds.sh <จากรอบ> <ถึงรอบ> [N=200000] — รันทีละรอบ (seed ใหม่) หยุดทันทีที่เจอช่องโหว่ · ผลสะสมใน docs/FUZZ_LOG.md
cd "$(dirname "$0")/.."
N=${3:-200000}
for r in $(seq "$1" "$2"); do
  out=$(node scripts/deep_fuzz.mjs "$N" --round="$r")
  bad=$(echo "$out" | awk -F'ผิด ' '{split($2,a," "); gsub(",","",a[1]); s+=a[1]} END{print s+0}')
  echo "| $r | $N × 10 เหตุการณ์ | $bad |" >> docs/FUZZ_LOG.md
  echo "round $r: holes=$bad"
  [ "$bad" -gt 0 ] && { echo "$out" | grep -v "ผิด 0 "; exit 1; }
done
