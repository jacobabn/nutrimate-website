import { Reveal } from "./Reveal";
import { PhoneMock } from "./PhoneMock";
import { APP_LINK_PROPS } from "@/lib/links";

export function Hero() {
  return (
    <section className="pt-32 md:pt-36 pb-16 md:pb-24 overflow-hidden">
      <div className="shell grid lg:grid-cols-[minmax(0,1fr)_auto] gap-12 items-center">
        <div className="max-w-[640px]">
          <Reveal>
            <div className="eyebrow mb-5"><span className="dot" /><span>v2.0 · iPhone first</span></div>
          </Reveal>
          <Reveal delay={0.05}>
            <h1 className="display-1">A coach that knows your numbers.</h1>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="lede mt-6 max-w-[560px]">
              NutriMate logs meals in five seconds, then thinks for you. Real targets, real text-back, real progress. Lose, maintain, gain or recomp, the app reshapes around your goal.
            </p>
          </Reveal>
          <Reveal delay={0.15}>
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <a {...APP_LINK_PROPS} className="btn-pink">Start 7 days free</a>
              <a href="#how" className="btn-ghost">See how it works</a>
            </div>
          </Reveal>
          <Reveal delay={0.2}>
            <div className="mt-6 flex items-center gap-2 mono text-[12px] uppercase tracking-[0.18em] text-subtle">
              <span className="w-1.5 h-1.5 rounded-full bg-ok" />
              <span>EU-hosted · GDPR-safe · Cancel anytime</span>
            </div>
          </Reveal>

          <Reveal delay={0.3}>
            <div className="mt-10 grid grid-cols-3 gap-6 max-w-[520px]">
              <Stat n="5s"   label="to log a meal" />
              <Stat n="4"    label="log paths" />
              <Stat n="1–3"  label="pushes / day" />
            </div>
          </Reveal>
        </div>

        <PhoneMock />
      </div>
    </section>
  );
}

function Stat({ n, label }: { n: string; label: string }) {
  return (
    <div>
      <div className="display-2 leading-none tracking-tighter3">{n}</div>
      <div className="meta mt-1">{label}</div>
    </div>
  );
}
