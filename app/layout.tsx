import type { Metadata } from "next";
import "./globals.css";
import CookieBanner from "@/components/CookieBanner";
import GoogleAnalytics from "@/components/GoogleAnalytics";
import LocalSchema from "@/components/LocalSchema";

export const metadata: Metadata = {
  metadataBase: new URL("https://osteriadamiduccia.it"),
  title: "Osteria da Miduccia | Trattoria Tradizionale a Caserta",
  description:
    "Osteria da Miduccia: la trattoria dove la tradizione campana incontra l'amore per la buona cucina. Piatti tipici casertani, ingredienti freschi e un'atmosfera che sa di casa. Prenota il tuo tavolo a Caserta.",
  keywords: [
    "osteria caserta",
    "trattoria caserta",
    "ristorante tradizionale caserta",
    "cucina campana",
    "miduccia",
  ],
  openGraph: {
    title: "Osteria da Miduccia | Trattoria Tradizionale a Caserta",
    description:
      "La tradizione campana in tavola. Piatti tipici, ingredienti freschi e l'atmosfera di casa.",
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
