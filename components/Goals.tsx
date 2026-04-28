import { Reveal } from "./Reveal";

const GOALS = [
  { tag: "tag-lose",     label: "Lose",     title: "Frame the deficit, kindly.",
    body: "Hunger as a signal, not a moral failing. Plateaus normal. Non-scale wins counted.",
    pace: "Pace · 0.25 to 0.75 kg / week" },
  { tag: "tag-maintain", label: "Maintain", title: "Less drama. More signal.",
    body: "Stability beats movement. Watch slow drift over four-plus weeks, not days.",
    pace: "Pace · steady" },
  { tag: "tag-gain",     label: "Gain",     title: "Frame the surplus.",
    body: "Under-eating is the bigger risk. Liquid calories welcome. No food morality.",
    pace: "Pace · 0.2 to 0.5 kg / week" },
  { tag: "tag-recomp",   label: "Recomp",   title: "The slow signal.",
    body: "Photos, measurements and strength count. Protein priority. Patience.",
    pace: "Pace · scale lags" },
];

export function Goals() {
  return (
    <section id="goals" className="py-20 md:py-28 bg-bg2 hairline scroll-mt-20">
      <div className="shell">
        <div className="flex items-end justify-between flex-wrap gap-6 mb-12">
          <div className="max-w-[620px]">
            <Reveal><div className="section-label">· 03 · Goal-aware engine</div></Reveal>
            <Reveal delay={0.05}>
              <h2 className="h2 mt-3">One app, four shapes. The numbers move with your goal.</h2>
            </Reveal>
          </div>
          <Reveal delay={0.1}>
            <p className="lede max-w-[420px]">Lose, maintain, gain or recomp, NutriMate redraws targets, framing and coach tone. No retemplating, no half-fits.</p>
          </Reveal>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
          {GOALS.map((g, i) => (
            <Reveal key={g.label} delay={i * 0.06}>
              <article className="card-lift p-7 h-full">
                <div className={`tag ${g.tag}`}>{g.label}</div>
                <h3 className="h3 mt-4">{g.title}</h3>
                <p className="body text-muted mt-2">{g.body}</p>
                <div className="mono text-[12px] text-subtle uppercase tracking-[0.16em] mt-5">{g.pace}</div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
