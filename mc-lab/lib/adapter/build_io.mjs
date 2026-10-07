// build_io.mjs — io สำหรับ runBuild (lib/home/build_exec.mjs) บน mineflayer 4.39 + mineflayer-pathfinder 2.4.5
//   const io = makeBuildIO(bot, { goals, Vec3 })  // goals จาก require('mineflayer-pathfinder').goals · Vec3 จาก require('vec3')
// goto: เดินไปยืนที่ (x, เท้า, z) · pillar(h): ต่อเสาใต้เท้า h ชั้น (กระโดด → วางบล็อกใต้เท้าตอนลอยพ้น) · unpillar(h): ขุดลงทีละชั้น
// ⚠ ยืนยันระดับจำลอง — ท่ากระโดดวางใต้เท้าใช้จังหวะ (รอให้เท้าสูงพ้น +1.0 แล้ววาง) ต้องปรับจังหวะบนเซิร์ฟจริง (ping/TPS)
// นั่งร้านแท้ (ไผ่ 6 + เชือก → 6) ก่อน: ย่อไต่ลงได้ ไม่ตก (W/Scaffolding) · ไม่มี → บล็อกธรรมดา แล้วขุดลง/ใช้ descend.mjs
const SCAFFOLD = ['scaffolding', 'dirt', 'cobblestone', 'cobbled_deepslate', 'netherrack'];

export function makeBuildIO(bot, { goals, Vec3, scaffoldItems = SCAFFOLD, timeoutTicks = 40 } = {}) {
  const wait = (n) => bot.waitForTicks(n);
  const scaffoldItem = () => bot.inventory.items().find((i) => scaffoldItems.includes(i.name));
  return {
    vec: (x, y, z) => new Vec3(x, y, z),
    async goto(x, y, z) {
      const p = bot.entity.position;
      if (Math.floor(p.x) === x && Math.floor(p.z) === z && Math.abs(Math.floor(p.y) - y) <= 0) return;
      await bot.pathfinder.goto(new goals.GoalBlock(x, y, z));
    },
    async pillar(h) {
      const it = scaffoldItem();
      if (!it) throw new Error('ไม่มีบล็อกทำนั่งร้าน (ดิน/หินกรวด)');
      await bot.equip(it, 'hand');
      await bot.look(bot.entity.yaw, -Math.PI / 2, true);           // มองลงตรง
      for (let i = 0; i < h; i++) {
        const y0 = Math.floor(bot.entity.position.y);
        const below = bot.blockAt(bot.entity.position.offset(0, -1, 0));
        bot.setControlState('jump', true);
        let t = 0;
        while (bot.entity.position.y < y0 + 1.0 && t++ < timeoutTicks) await wait(1);   // รอเท้าพ้นช่องเดิม
        bot.setControlState('jump', false);
        if (t >= timeoutTicks) throw new Error('กระโดดไม่ขึ้น (หัวติด?)');
        await bot.placeBlock(below, new Vec3(0, 1, 0));            // วางบนหน้าบนของบล็อกเดิมใต้เท้า
        await wait(2);
      }
    },
    async unpillar(h) {
      const under = bot.blockAt(bot.entity.position.offset(0, -1, 0));
      if (under?.name === 'scaffolding') {                           // นั่งร้านแท้: กดย่อค้างไต่ลง แล้วค่อยทุบจากพื้น (ทุบล่างสุด → ทั้งเสาร่วง)
        const y0 = bot.entity.position.y; bot.setControlState('sneak', true);
        let t = 0; while (bot.entity.position.y > y0 - h + 0.1 && t++ < h * 20) await wait(1);
        bot.setControlState('sneak', false);
        return;
      }
      for (let i = 0; i < h; i++) {
        const below = bot.blockAt(bot.entity.position.offset(0, -1, 0));
        if (!below || !scaffoldItems.includes(below.name)) return;     // ไม่ใช่นั่งร้านเรา → ไม่ขุด (กันขุดพื้นบ้าน)
        await bot.dig(below);
        await wait(6);                                              // ตกลง 1 ชั้น
      }
    },
  };
}
