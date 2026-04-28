import type { Metadata } from "next";
import Link from "next/link";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";

export const metadata: Metadata = {
  title: "Privacy",
  description: "How NutriMate handles your data. Plain English.",
  alternates: { canonical: "/legal/privacy" },
};

export default function PrivacyPage() {
  return (
    <>
      <Nav />
      <main className="pt-32 pb-24">
        <div className="shell max-w-[820px]">
          <div className="section-label">· Legal · Privacy</div>
          <h1 className="display-2 mt-3">Privacy Policy</h1>
          <p className="meta mt-3">Last updated · 2026-04-28</p>

          <div className="card-lift p-8 mt-10">
            <h2 className="h3 mt-0">What we collect</h2>
            <p className="body text-muted mt-2">
              An email address (for sign-in), the answers you give in onboarding (gender, age, height, weight, activity, goal), the meals you log, your weight, body photos and measurements you choose to add, and notification preferences.
            </p>

            <h2 className="h3 mt-8">Where it lives</h2>
            <p className="body text-muted mt-2">
              In an EU-hosted Supabase project (Frankfurt region). Photos sit in private buckets and are accessed via short-lived signed URLs. We never copy your data to non-EU servers for processing.
            </p>

            <h2 className="h3 mt-8">What we do with it</h2>
            <p className="body text-muted mt-2">
              Run the app for you, calculate your targets, and send the AI coach the context it needs to give a useful reply. We do not train models on your data. We do not sell it. We do not share it with advertisers.
            </p>

            <h2 className="h3 mt-8">Sub-processors</h2>
            <ul className="body text-muted mt-2 grid gap-2">
              <li>· Supabase (database, auth, storage, edge functions) · EU.</li>
              <li>· OpenAI (LLM + vision) · receives only the minimum context needed for the reply, never your photos as training data.</li>
              <li>· Apple (App Store, push notifications, Sign in with Apple) · only what Apple itself needs.</li>
            </ul>

            <h2 className="h3 mt-8">Your rights</h2>
            <p className="body text-muted mt-2">
              You can export, edit or delete your data from inside the app at any time. Account deletion is one tap in the Account screen and wipes everything within 30 days.
            </p>

            <h2 className="h3 mt-8">Contact</h2>
            <p className="body text-muted mt-2">
              Questions, requests, complaints. Email <a className="underline hover:text-ink" href="mailto:hello@abn.company">hello@abn.company</a>.
            </p>
          </div>

          <Link href="/" className="btn-ghost mt-10 inline-flex">← Back home</Link>
        </div>
      </main>
      <Footer />
    </>
  );
}
