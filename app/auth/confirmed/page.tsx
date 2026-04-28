import type { Metadata } from "next";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import { ConfirmedClient } from "./ConfirmedClient";
import { APP_STORE_URL } from "@/lib/links";

export const metadata: Metadata = {
  title: "Email confirmed",
  description: "Your NutriMate email is confirmed. Head back to the app.",
  alternates: { canonical: "/auth/confirmed" },
  robots: { index: false, follow: false },
};

export default function ConfirmedPage() {
  return (
    <>
      <Nav />
      <main className="pt-32 pb-24">
        <div className="shell max-w-[640px] text-center">
          <ConfirmedClient appStoreUrl={APP_STORE_URL} />
        </div>
      </main>
      <Footer />
    </>
  );
}
