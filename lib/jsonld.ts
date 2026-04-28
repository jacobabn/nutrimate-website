export const SITE_URL = "https://nutrimate.abn.company";

export const homeJsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": "https://abn.company/#org",
      name: "ABN",
      url: "https://abn.company/",
      logo: `${SITE_URL}/icon.svg`,
    },
    {
      "@type": "WebSite",
      "@id": `${SITE_URL}/#site`,
      url: `${SITE_URL}/`,
      name: "NutriMate",
      publisher: { "@id": "https://abn.company/#org" },
    },
    {
      "@type": "MobileApplication",
      "@id": `${SITE_URL}/#app`,
      name: "NutriMate AI",
      applicationCategory: "HealthApplication",
      operatingSystem: "iOS 16+",
      offers: [
        { "@type": "Offer", name: "Annual",  price: "79.99", priceCurrency: "EUR", category: "subscription" },
        { "@type": "Offer", name: "Monthly", price: "7.99",  priceCurrency: "EUR", category: "subscription" },
      ],
      publisher: { "@id": "https://abn.company/#org" },
      url: `${SITE_URL}/`,
    },
    {
      "@type": "FAQPage",
      mainEntity: [
        ["How does NutriMate know my numbers?",
         "After a one-minute setup, NutriMate calculates your daily kcal and macros from gender, age, height, weight, activity, and goal. The coach reads your day-so-far before it replies, so suggestions reference real grams and timestamps."],
        ["Is logging really five seconds?",
         "Photo, barcode, manual or recent. Most logs land in under five seconds. The vision model fills in the macros for photos and the manual flow autofills with one tap."],
        ["What does the AI coach actually do?",
         "It chats with you in plain language, references your real macros, and sends one to three short pushes a day at your chosen intensity (easy, medium, hard). Never moralises about food."],
        ["Where is my data stored?",
         "EU servers (Frankfurt). Photos are private to your account. We never train models on your data. No third-party tracking SDKs."],
        ["Can I cancel anytime?",
         "Yes. Cancel from the App Store at any time. The free trial reminds you 24 hours before the renewal."],
      ].map(([q, a]) => ({
        "@type": "Question",
        name: q,
        acceptedAnswer: { "@type": "Answer", text: a },
      })),
    },
  ],
};
