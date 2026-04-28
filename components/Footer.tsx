import Link from "next/link";
import { BrandMark } from "./BrandMark";

export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="border-t border-line">
      <div className="shell py-14 grid md:grid-cols-[1.4fr_1fr_1fr_1fr] gap-10">
        <div>
          <div className="flex items-center gap-2.5">
            <BrandMark size={32} />
            <span className="font-extrabold tracking-tighter3 text-[19px]">NutriMate</span>
          </div>
          <p className="body text-muted mt-4 max-w-[320px]">A coach that knows your numbers. Goal-aware nutrition for iPhone.</p>
          <p className="meta mt-6">Made on a quiet morning in Amsterdam.</p>
        </div>

        <FooterCol title="Product">
          <a href="#how">How it works</a>
          <a href="#coach">Coach</a>
          <a href="#goals">Goals</a>
          <a href="#pricing">Pricing</a>
        </FooterCol>
        <FooterCol title="Company">
          <a href="https://abn.company" rel="noopener">ABN</a>
          <a href="mailto:hello@abn.company">Support</a>
        </FooterCol>
        <FooterCol title="Legal">
          <Link href="/legal/privacy">Privacy</Link>
          <Link href="/legal/terms">Terms</Link>
        </FooterCol>
      </div>
      <div className="border-t border-line">
        <div className="shell py-6 flex items-center justify-between flex-wrap gap-3 text-[12.5px] text-subtle">
          <span>© {year} ABN. All rights reserved.</span>
          <span className="mono uppercase tracking-[0.18em] text-[11px]">N 52°22′ · E 04°54′</span>
        </div>
      </div>
    </footer>
  );
}

function FooterCol({ title, children }: { title: string; children: React.ReactNode }) {
  const links = Array.isArray(children) ? children : [children];
  return (
    <div>
      <div className="meta">{title}</div>
      <ul className="mt-4 grid gap-2.5 text-[14.5px]">
        {links.map((l, i) => (
          <li key={i} className="hover:text-ink text-ink2 transition-colors">{l}</li>
        ))}
      </ul>
    </div>
  );
}
