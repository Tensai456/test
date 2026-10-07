#!/bin/sh
# kb_merge.sh <group...> — แยก docs/wiki เข้า kb/, ติ๊ก ✅ ในคิว, commit+push
set -e
cd "$(dirname "$0")/.."
node scripts/split_kb.mjs
for g in "$@"; do sed -i "s/| \`$g\` \(.*\) | 🔄 |/| \`$g\` \1 | ✅ |/" docs/RESEARCH_QUEUE.md; done
cd .. && git add -A mc-lab && git commit -q -m "KB: add $*

Co-Authored-By: Claude Opus 5.5 <noreply@anthropic.com>
Claude-Session: https://claude.ai/code/session_01Tg17iha7th9qt6jdTpxy4Q" && git push -q -u origin claude/focused-heisenberg-3hmesx 2>&1 | tail -1
grep -c "✅" mc-lab/docs/RESEARCH_QUEUE.md
