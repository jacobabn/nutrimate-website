import { Reveal } from "./Reveal";
import { BrandMark } from "./BrandMark";
import { IntensityRotor } from "./IntensityRotor";

const RULES = [
  "Plain language, no jargon, no markdown.",
  "References your real macros and timestamps.",
  "Never says \"should\". Never moralises about food.",
  "Under sixty words. Reads like a text, not a press release.",
];

export function Coach() {
  return (
    <section id="coach" className="py-20 md:py-28 hairline scroll-mt-20">
      <div className="shell">
        <div className="grid lg:grid-cols-2 gap-14 items-start">
          <div className="max-w-[560px]">
            <Reveal><div className="section-label">· 02 · The coach</div></Reveal>
            <Reveal delay={0.05}>
              <h2 className="h2 mt-3">A coach that texts you back like a friend.</h2>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="lede mt-5">No bullet lists. No assistant voice. Plain language, your real numbers, one concrete next step. The coach reads your day before it replies.</p>
            </Reveal>

            <div className="mt-7 grid gap-4">
              <Reveal delay={0.15}>
                <div className="card p-5 flex gap-4 items-start">
                  <BrandMark size={36} className="shrink-0" />
                  <div>
                    <div className="meta">You</div>
                    <p className="body mt-1">Had pizza for lunch. Feeling guilty.</p>
                    <div className="meta mt-3">NutriMate</div>
                    <p className="body mt-1">
                      Tight day, yeah. You're at 1,180 kcal with 720 to spend. Lean dinner closes the gap, soup with chicken or eggs and rice. Rest of the week is yours.
                    </p>
                  </div>
                </div>
              </Reveal>

              <Reveal delay={0.2}>
                <div className="card p-5">
                  <div className="meta mb-2">Hard rules baked into every reply</div>
                  <ul className="grid gap-2 body">
                    {RULES.map((r) => (
                      <li key={r} className="flex items-start gap-2">
                        <span className="mt-2 w-1.5 h-1.5 rounded-full bg-primary" />
                        <span>{r}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            </div>
          </div>

          <Reveal delay={0.1}>
            <div className="lg:pt-10">
              <IntensityRotor />
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
