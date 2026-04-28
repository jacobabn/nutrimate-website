import Link from "next/link";
import { Reveal } from "./Reveal";
import { APP_LINK_PROPS } from "@/lib/links";

const ANNUAL_FEATURES = [
  "Full AI coach, chat and pushes",
  "All four log paths",
  "Goal-aware macro engine",
  "Trends, weekly review, achievements",
  "Apple Health two-way",
];

const MONTHLY_FEATURES = [
  "Same features as annual",
  "Pause whenever, no questions",
  "Family sharing supported",
];

export function Pricing() {
  return (
    <section id="pricing" className="py-20 md:py-28 hairline scroll-mt-20">
      <div className="shell">
        <div className="max-w-[680px]">
          <Reveal><div className="section-label">· 06 · Pricing</div></Reveal>
          <Reveal delay={0.05}><h2 className="h2 mt-3">One subscription. Cancel anytime.</h2></Reveal>
          <Reveal delay={0.1}><p className="lede mt-5">Start with a free trial. The full coach, all four log paths, every chart, no caps.</p></Reveal>
        </div>

        <div className="grid md:grid-cols-2 gap-5 mt-12">
          <Reveal delay={0.15}>
            <article className="card-lift p-8 relative overflow-hidden h-full">
              <div className="absolute top-5 right-5 pill-tint">Best value</div>
              <div className="tag tag-recomp">Annual</div>
              <div className="mt-5 flex items-baseline gap-2">
                <span className="display-2 leading-none tracking-tighter3 text-ok">FREE</span>
                <span className="font-bold text-muted">for 7 days</span>
              </div>
              <p className="body mt-3">Then €79.99 per year. That's €6.66 a month.</p>
              <ul className="mt-6 grid gap-2 body">
                {ANNUAL_FEATURES.map((f) => (
                  <li key={f} className="flex items-start gap-2">
                    <span className="mt-2 w-1.5 h-1.5 rounded-full bg-primary" />
                    <span>{f}</span>
                  </li>
                ))}
              </ul>
              <a {...APP_LINK_PROPS} className="btn-pink w-full mt-7">Start 7 days free</a>
            </article>
          </Reveal>

          <Reveal delay={0.2}>
            <article className="card-lift p-8 h-full">
              <div className="tag tag-maintain">Monthly</div>
              <div className="mt-5 flex items-baseline gap-2">
                <span className="display-2 leading-none tracking-tighter3 text-ok">FREE</span>
                <span className="font-bold text-muted">for 3 days</span>
              </div>
              <p className="body mt-3">Then €7.99 per month.</p>
              <ul className="mt-6 grid gap-2 body">
                {MONTHLY_FEATURES.map((f) => (
                  <li key={f} className="flex items-start gap-2">
                    <span className="mt-2 w-1.5 h-1.5 rounded-full bg-ink2" />
                    <span>{f}</span>
                  </li>
                ))}
              </ul>
              <a {...APP_LINK_PROPS} className="btn-ghost w-full mt-7">Try monthly</a>
            </article>
          </Reveal>
        </div>

        <Reveal delay={0.3}>
          <div className="mt-8 text-[12.5px] text-subtle leading-[1.55] max-w-[820px]">
            Subscriptions auto-renew unless cancelled at least 24 hours before the period ends. Manage or cancel from your Apple ID. By subscribing you agree to our{" "}
            <Link className="underline hover:text-ink" href="/legal/terms">Terms</Link> and{" "}
            <Link className="underline hover:text-ink" href="/legal/privacy">Privacy Policy</Link>. Prices shown in EUR.
          </div>
        </Reveal>
      </div>
    </section>
  );
}
