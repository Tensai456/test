// load_jsonl.mjs — อ่าน jsonl แบบสตรีม (ไฟล์ใหญ่ได้) + ตรวจคุณภาพ: บรรทัดเสีย · tick ถอยหลัง/ซ้ำ · ช่องว่างเวลา
import fs from 'node:fs';
import readline from 'node:readline';

export async function* readJsonl(file, qc = { bad: 0, back: 0, gaps: 0, rows: 0 }) {
  const rl = readline.createInterface({ input: fs.createReadStream(file), crlfDelay: Infinity });
  let last = null;
  for await (const line of rl) {
    if (!line.trim()) continue;
    let row;
    try { row = JSON.parse(line); } catch { qc.bad++; continue; }
    const tk = row.tick ?? (row.t != null ? row.t / 50 : null);
    if (last != null && tk != null) { if (tk <= last) qc.back++; else if (tk - last > 40) qc.gaps++; }   // >2 วิไม่มีแถว
    last = tk ?? last;
    qc.rows++;
    yield row;
  }
}

// โหลดทั้งไฟล์เป็นอาร์เรย์ (ใช้กับไฟล์เล็ก/เทส)
export async function loadJsonl(file) {
  const qc = { bad: 0, back: 0, gaps: 0, rows: 0 }, rows = [];
  for await (const r of readJsonl(file, qc)) rows.push(r);
  return { rows, qc };
}
