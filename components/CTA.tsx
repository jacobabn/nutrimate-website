import { Reveal } from "./Reveal";
import { BrandMark } from "./BrandMark";

export function CTA() {
  return (
    <section id="download" className="py-24 md:py-32 hairline relative overflow-hidden scroll-mt-20">
      <div
        className="absolute inset-0 -z-10 opacity-60"
        style={{ background: "radial-gradient(60% 60% at 50% 0%, #FFE4ED 0%, rgba(255,228,237,0) 70%)" }}
      />
      <div className="shell text-center max-w-[760px] mx-auto">
        <Reveal>
          <div className="mx-auto animate-ringPulse">
            <BrandMark size={64} className="mx-auto" />
          </div>
        </Reveal>
        <Reveal delay={0.05}>
          <h2 className="display-2 mt-7">Logging takes five seconds. The thinking takes none.</h2>
        </Reveal>
        <Reveal delay={0.1}>
          <p className="lede mt-5">Try the full coach for seven days, free. Cancel anytime in the App Store.</p>
        </Reveal>

        <Reveal delay={0.15}>
          <div className="mt-9 flex items-center justify-center gap-3 flex-wrap">
            <a href="#" aria-label="Download on the App Store" className="btn-primary h-14 px-6 text-[16px]">
              <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor" aria-hidden="true">
                <path d="M16.36 12.71c-.02-2.16 1.77-3.2 1.85-3.25-1.01-1.47-2.58-1.67-3.13-1.69-1.34-.13-2.61.79-3.29.79-.68 0-1.73-.77-2.85-.74-1.46.02-2.81.85-3.56 2.16-1.52 2.63-.39 6.51 1.1 8.65.72 1.04 1.59 2.21 2.71 2.17 1.09-.04 1.5-.7 2.82-.7s1.7.7 2.85.68c1.18-.02 1.92-1.06 2.64-2.1.83-1.21 1.18-2.38 1.2-2.45-.03-.01-2.3-.88-2.34-3.52ZM14.27 6.33c.6-.73 1-1.74.89-2.74-.86.04-1.91.57-2.53 1.29-.55.64-1.04 1.68-.91 2.66.96.07 1.95-.49 2.55-1.21Z"/>
              </svg>
              Download on the App Store
            </a>
            <a href="#pricing" className="btn-ghost h-14 px-6 text-[16px]">See pricing</a>
          </div>
        </Reveal>
        <Reveal delay={0.2}>
          <p className="meta mt-5">iPhone, iOS 16 or newer. Android coming.</p>
        </Reveal>
      </div>
    </section>
  );
}
