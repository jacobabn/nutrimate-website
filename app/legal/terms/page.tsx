import type { Metadata } from "next";
import Link from "next/link";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";

export const metadata: Metadata = {
  title: "Terms",
  description: "The legal bit. Plain English where possible.",
  alternates: { canonical: "/legal/terms" },
};

export default function TermsPage() {
  return (
    <>
      <Nav />
      <main className="pt-32 pb-24">
        <div className="shell max-w-[820px]">
          <div className="section-label">· Legal · Terms</div>
          <h1 className="display-2 mt-3">Terms of Service</h1>
          <p className="meta mt-3">Last updated · 2026-04-28</p>

          <div className="card-lift p-8 mt-10 grid gap-8">
            <section>
              <h2 className="h3">The deal</h2>
              <p className="body text-muted mt-2">
                NutriMate is provided by ABN. By using NutriMate you agree to these terms and to the Privacy Policy. NutriMate is a personal nutrition tool. It is not medical advice. If you have a medical condition, talk to a doctor.
              </p>
            </section>

            <section>
              <h2 className="h3">Subscriptions</h2>
              <p className="body text-muted mt-2">
                NutriMate offers a monthly and an annual subscription. Free trials apply where shown. Subscriptions auto-renew at the end of the period unless cancelled at least 24 hours before. Manage or cancel any time in your Apple ID account settings.
              </p>
            </section>

            <section>
              <h2 className="h3">Refunds</h2>
              <p className="body text-muted mt-2">
                Refunds are handled by the App Store under Apple's policies. We do not process refunds outside that flow.
              </p>
            </section>

            <section>
              <h2 className="h3">Acceptable use</h2>
              <p className="body text-muted mt-2">
                Don't try to break the app, scrape it, share your account, or use it for harm. We may suspend accounts that abuse the service.
              </p>
            </section>

            <section>
              <h2 className="h3">Limitations</h2>
              <p className="body text-muted mt-2">
                NutriMate is provided as is. We do our best to keep it running and useful. We are not liable for indirect or consequential damages. To the extent allowed by law, our total liability is capped at what you paid us in the last 12 months.
              </p>
            </section>

            <section>
              <h2 className="h3">Changes</h2>
              <p className="body text-muted mt-2">
                We may update these terms. Material changes will be communicated in-app or by email. Continued use means you accept the latest version.
              </p>
            </section>

            <section>
              <h2 className="h3">Contact</h2>
              <p className="body text-muted mt-2">
                ABN, Amsterdam, Netherlands. Email <a className="underline hover:text-ink" href="mailto:hello@abn.company">hello@abn.company</a>.
              </p>
            </section>
          </div>

          <Link href="/" className="btn-ghost mt-10 inline-flex">← Back home</Link>
        </div>
      </main>
      <Footer />
    </>
  );
}
