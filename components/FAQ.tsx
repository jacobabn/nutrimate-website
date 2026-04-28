import { Reveal } from "./Reveal";

const Q = [
  ["How does NutriMate know my numbers?",
   "After a one-minute setup, NutriMate calculates your daily kcal and macros from gender, age, height, weight, activity level and goal. Every coach reply reads your day-so-far first, so it can reference real grams and timestamps."],
  ["Is logging really five seconds?",
   "For most meals, yes. Photo and barcode are sub-three. Manual entry has a one-tap \"fill macros\" that uses AI. Recent meals log in two taps."],
  ["What does the AI coach actually do?",
   "It chats with you in plain language and sends one to three short pushes a day at your chosen intensity. It references your real numbers and never moralises about food. You can change tone any time."],
  ["Where is my data stored?",
   "EU servers, Frankfurt region. Photos are private to your account. We never train models on your data. No third-party tracking SDKs."],
  ["Does it work without the AI?",
   "Yes. Manual logging, macro tracking, weight chart, trends, and weekly review run regardless. The AI layer adds the coach voice on top."],
  ["Apple Health support?",
   "Yes. Two-way for weight and energy. Read other types as we ship them. You stay in control of toggles per data type."],
  ["Can I cancel anytime?",
   "Yes. Cancel from the App Store. The free trial reminds you 24 hours before renewal. No support-channel refunds, store policies apply."],
  ["Android?",
   "iPhone first, Android later. The codebase is React Native, so the port is shorter than usual."],
] as const;

export function FAQ() {
  return (
    <section id="faq" className="py-20 md:py-28 bg-bg2 hairline scroll-mt-20">
      <div className="shell">
        <div className="max-w-[640px]">
          <Reveal><div className="section-label">· 07 · FAQ</div></Reveal>
          <Reveal delay={0.05}><h2 className="h2 mt-3">Questions, answered straight.</h2></Reveal>
        </div>

        <div className="mt-10 grid gap-3 max-w-[820px]">
          {Q.map(([q, a], i) => (
            <Reveal key={q} delay={i * 0.04}>
              <details className="faq" {...(i === 0 ? { open: true } : {})}>
                <summary>
                  <span>{q}</span>
                  <span className="chev" aria-hidden="true">▾</span>
                </summary>
                <div className="ans">{a}</div>
              </details>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
