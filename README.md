# NutriMate marketing site

Next.js 15 (App Router) + Tailwind. Statically rendered. Deployed to Vercel at
`nutrimate.abn.company`.

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # production build, static export
```

## Stack

- Next.js 15 + React 19 + TypeScript 5.7
- Tailwind 3.4 with custom design tokens (`tailwind.config.ts`)
- next/font for Plus Jakarta Sans + JetBrains Mono (zero render-block, self-hosted)
- framer-motion for entrance and intensity-rotor animations
- All pages prerendered as static (`○ (Static)` in build output)

## Structure

```
app/
  layout.tsx            # root + metadata + fonts
  page.tsx              # home, sections + JSON-LD
  globals.css           # tailwind layers + components
  legal/privacy/page.tsx
  legal/terms/page.tsx
  sitemap.ts robots.ts
components/
  Nav.tsx Hero.tsx HowItWorks.tsx Coach.tsx Goals.tsx
  Trends.tsx Privacy.tsx Pricing.tsx FAQ.tsx CTA.tsx Footer.tsx
  PhoneMock.tsx IntensityRotor.tsx Reveal.tsx BrandMark.tsx
lib/
  jsonld.ts             # Organization + WebSite + MobileApplication + FAQPage
public/
  icon.svg favicon.svg
```

## Voice rules

NutriMate's coach voice applies to the marketing copy too:

- No em-dashes anywhere.
- No "should". No food morality.
- Plain language. Specific over generic.
- One promise per section, one CTA verb across the page.

See `~/Desktop/Projects/NutriMate/docs/voice.md`.

## Deploy

Vercel auto-detects Next.js. Connect the repo, set the production domain to
`nutrimate.abn.company`. No env vars required for v1.
