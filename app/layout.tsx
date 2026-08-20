import type { Metadata } from "next";
import "./globals.css";
import CookieBanner from "@/components/CookieBanner";
import GoogleAnalytics from "@/components/GoogleAnalytics";
import LocalSchema from "@/components/LocalSchema";

export const metadata: Metadata = {
  metadataBase: new URL("https://osteriadamiduccia.it"),
  title: "Osteria da Miduccia | Trattoria Tradizionale a Caserta",
  description:
    "Trattoria tipica a Caserta dal 1987. Scopri i piatti della cucina campana preparati con ingredienti freschi. Prenota online il tuo tavolo da Miduccia!",
  keywords: [
    "osteria caserta",
    "trattoria caserta",
    "ristorante tradizionale caserta",
    "cucina campana",
    "miduccia",
  ],
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/apple-icon",
  },
  openGraph: {
    title: "Osteria da Miduccia | Trattoria Tradizionale a Caserta",
    description:
      "Trattoria tipica a Caserta dal 1987. Scopri i piatti della cucina campana e prenota online il tuo tavolo.",
    type: "website",
    locale: "it_IT",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="it" className="h-full antialiased" data-scroll-behavior="smooth">
      <body className="min-h-full flex flex-col">
        <LocalSchema />
        <GoogleAnalytics />
        {children}
        <CookieBanner />
      </body>
    </html>
  );
}
