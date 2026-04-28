import type { Metadata, Viewport } from "next";
import { Plus_Jakarta_Sans, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-jakarta",
  weight: ["400", "500", "600", "700", "800"],
});

const mono = JetBrains_Mono({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-mono",
  weight: ["400", "500"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://nutrimate.abn.company"),
  title: {
    default: "NutriMate · A coach that knows your numbers.",
    template: "%s · NutriMate",
  },
  description: "NutriMate is an AI nutrition coach for iPhone. Log meals in five seconds with photo, barcode or text. Goal-aware macros, real-numbers feedback, and a coach that texts you back like a friend.",
  applicationName: "NutriMate",
  authors: [{ name: "ABN", url: "https://abn.company" }],
  keywords: ["nutrition", "calorie tracker", "AI coach", "macro tracker", "iPhone", "GDPR"],
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    siteName: "NutriMate",
    title: "NutriMate · A coach that knows your numbers.",
    description: "Log meals in five seconds. Goal-aware macros. A coach that texts you back.",
    url: "https://nutrimate.abn.company/",
    images: [{ url: "/og-image.png", width: 1200, height: 1200, alt: "NutriMate" }],
    locale: "en",
  },
  twitter: {
    card: "summary_large_image",
    title: "NutriMate · A coach that knows your numbers.",
    description: "Log meals in five seconds. Goal-aware macros. A coach that texts you back.",
    images: ["/og-image.png"],
  },
  icons: {
    icon: [
      { url: "/favicon.svg", type: "image/svg+xml" },
      { url: "/icon-192.png", sizes: "192x192", type: "image/png" },
      { url: "/icon-512.png", sizes: "512x512", type: "image/png" },
    ],
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" }],
  },
  robots: { index: true, follow: true },
  appleWebApp: { title: "NutriMate", statusBarStyle: "default", capable: false },
  itunes: { appId: "6741915797" },
};

export const viewport: Viewport = {
  themeColor: "#FBFAF7",
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${jakarta.variable} ${mono.variable}`}>
      <body className="font-sans">{children}</body>
    </html>
  );
}
