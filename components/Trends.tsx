import { Reveal } from "./Reveal";

const HEAT_BG = ["#FCE4EC", "#F8D2DF", "#F4BFD0", "#F0AAC0", "#EE99B4"];
const SEED = [1,2,3,4,4,1,2,3,4,1,2,4,3,2,1,1,1,3,4,2,1,1,3,4,2,3,1,2,1,3,4,2,1,1,3,4];

const POINTS = [
  [0,118],[40,108],[80,112],[120,96],[160,90],[200,98],
  [240,82],[280,86],[320,72],[360,80],[400,68],[440,58],
  [480,72],[520,52],[560,60],[600,42],
];

export function Trends() {
  const path     = POINTS.map((p, i) => `${i ? "L" : "M"}${p[0]},${p[1]}`).join(" ");
  const fillPath = `${path} L600,160 L0,160 Z`;

  return (
    <section className="py-20 md:py-28 hairline">
      <div className="shell grid lg:grid-cols-2 gap-12 items-center">
        <div className="max-w-[540px]">
          <Reveal><div className="section-label">· 04 · Trends</div></Reveal>
          <Reveal delay={0.05}>
            <h2 className="h2 mt-3">Real progress lives in the boring weeks.</h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="lede mt-5">Weight chart with a smoothed line. Macro heatmap. Top meals. A weekly review that texts you the patterns you actually have.</p>
          </Reveal>

          <ul className="mt-7 grid gap-4">
            {[
              ["Weight history", "with goal range overlay and trendline."],
              ["Heatmap",        "for kcal across the last 90 days, at a glance."],
              ["Weekly review",  "on Sundays, written by the coach in your goal lens."],
              ["Apple Health export", "for weight and energy, two-way friendly."],
            ].map(([title, body], i) => (
              <Reveal as="li" key={title} delay={0.15 + i * 0.05}>
                <div className="flex items-start gap-3">
                  <span className="mt-2 w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
                  <span className="body"><b className="font-semibold">{title}</b> {body}</span>
                </div>
              </Reveal>
            ))}
          </ul>
        </div>

        <Reveal delay={0.15}>
          <div className="card p-6 lg:p-8">
            <div className="flex items-center justify-between">
              <div>
                <div className="meta">Last 30 days</div>
                <div className="font-extrabold tracking-tighter2 text-[28px] mt-1">
                  1,902 <span className="text-muted text-[18px] font-bold">avg kcal</span>
                </div>
              </div>
              <div className="pill-mint">- 1.4 kg</div>
            </div>

            <svg className="mt-5 w-full" viewBox="0 0 600 160" aria-hidden="true">
              <defs>
                <linearGradient id="spark" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%"   stopColor="#F06292" stopOpacity=".22"/>
                  <stop offset="100%" stopColor="#F06292" stopOpacity="0"/>
                </linearGradient>
              </defs>
              <path d={fillPath} fill="url(#spark)" />
              <path d={path} fill="none" stroke="#F06292" strokeWidth="2.5" strokeLinecap="round" />
            </svg>

            <div className="mt-7">
              <div className="meta mb-2">Macro heatmap · last 12 weeks</div>
              <div className="grid grid-cols-12 gap-1.5">
                {SEED.map((i, idx) => (
                  <span key={idx} className="aspect-square rounded-sm" style={{ background: HEAT_BG[i] }} />
                ))}
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
