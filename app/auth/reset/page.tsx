import type { Metadata } from "next";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import { ResetClient } from "./ResetClient";

export const metadata: Metadata = {
  title: "Reset password",
  description: "Set a new password for your NutriMate account.",
  alternates: { canonical: "/auth/reset" },
  robots: { index: false, follow: false },
};

export default function ResetPage() {
  return (
    <>
      <Nav />
      <main className="pt-32 pb-24">
        <div className="shell max-w-[520px]">
          <ResetClient />
        </div>
      </main>
      <Footer />
    </>
  );
}
