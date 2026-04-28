import { Nav } from "@/components/Nav";
import { Hero } from "@/components/Hero";
import { HowItWorks } from "@/components/HowItWorks";
import { Coach } from "@/components/Coach";
import { Goals } from "@/components/Goals";
import { Trends } from "@/components/Trends";
import { Privacy } from "@/components/Privacy";
import { Pricing } from "@/components/Pricing";
import { FAQ } from "@/components/FAQ";
import { CTA } from "@/components/CTA";
import { Footer } from "@/components/Footer";
import { homeJsonLd } from "@/lib/jsonld";

export default function HomePage() {
  return (
    <>
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-50 focus:bg-white focus:px-3 focus:py-2 focus:rounded-md focus:shadow-soft"
      >
        Skip to content
      </a>
      <Nav />
      <main id="main" tabIndex={-1}>
        <Hero />
        <HowItWorks />
        <Coach />
        <Goals />
        <Trends />
        <Privacy />
        <Pricing />
        <FAQ />
        <CTA />
      </main>
      <Footer />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(homeJsonLd) }}
      />
    </>
  );
}
