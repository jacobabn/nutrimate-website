import { Reveal } from "./Reveal";

const STEPS = [
  { emoji: "📸", bg: "bg-soft-pink", title: "Photo",   body: "Snap. Vision model identifies dishes, fills macros, you confirm or tweak.",            time: "~3 seconds" },
  { emoji: "📊", bg: "bg-soft-mint", title: "Barcode", body: "Scan the pack. We pull from OpenFoodFacts, fall back to AI for branded labels.",         time: "~2 seconds" },
  { emoji: "✏️", bg: "bg-soft-blue", title: "Manual",  body: "Type \"two eggs and toast\". One tap autofills macros and an emoji thumbnail.",          time: "~5 seconds" },
  { emoji: "🔁", bg: "bg-bg2",       title: "Recent",  body: "Re-log a meal you already eat from your history. Two taps, full macros.",                time: "~1 second" },
];

export function HowItWorks() {
  return (
    <section id="how" className="py-20 md:py-28 bg-bg2 hairline scroll-mt-20">
      <div className="shell">
        <div className="flex items-end justify-between flex-wrap gap-6 mb-12">
          <div className="max-w-[620px]">
            <Reveal><div className="section-label">· 01 · How it works</div></Reveal>
            <Reveal delay={0.05}>
              <h2 className="h2 mt-3">Four ways to log. Pick the one that takes five seconds today.</h2>
            </Reveal>
          </div>
          <Reveal delay={0.1}>
            <p className="lede max-w-[420px]">Most apps make you measure. NutriMate just asks: how did you eat. Photo, barcode, manual, recent. Done.</p>
          </Reveal>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {STEPS.map((s, i) => (
            <Reveal key={s.title} delay={i * 0.06}>
              <article className="card-lift p-7 h-full">
                <div className={`w-11 h-11 rounded-2xl ${s.bg} grid place-items-center text-[22px]`}>{s.emoji}</div>
                <h3 className="h3 mt-5">{s.title}</h3>
                <p className="body text-muted mt-2">{s.body}</p>
                <div className="mt-5 mono text-[11px] text-subtle uppercase tracking-[0.18em]">{s.time}</div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
