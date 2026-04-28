import { Reveal } from "./Reveal";

const ITEMS = [
  { meta: "Storage",  title: "EU-hosted",          body: "Frankfurt region. Data never leaves the EU for processing." },
  { meta: "Photos",   title: "Private by default", body: "Meal and progress photos are scoped to your account with signed URLs." },
  { meta: "Models",   title: "No training on you", body: "We never train models on your data. The OpenAI key never ships in the client." },
  { meta: "Tracking", title: "No third-party SDKs",body: "No Facebook, no Google Analytics, no advertiser pixels. Ever." },
];

export function Privacy() {
  return (
    <section className="py-20 md:py-28 bg-soft-mint hairline">
      <div className="shell">
        <div className="max-w-[680px]">
          <Reveal><div className="section-label">· 05 · Privacy</div></Reveal>
          <Reveal delay={0.05}><h2 className="h2 mt-3">Your day is yours. Quiet by default.</h2></Reveal>
          <Reveal delay={0.1}><p className="lede mt-5">NutriMate is built around health data. We treat it the way we'd want ours treated.</p></Reveal>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5 mt-12">
          {ITEMS.map((it, i) => (
            <Reveal key={it.title} delay={i * 0.06}>
              <div className="card-lift p-6 h-full">
                <div className="meta">{it.meta}</div>
                <h3 className="h3 mt-2">{it.title}</h3>
                <p className="body text-muted mt-2">{it.body}</p>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.3}>
          <p className="meta mt-10">Account deletion lives in Account, one tap, full wipe (Apple guideline 5.1.1.v).</p>
        </Reveal>
      </div>
    </section>
  );
}
