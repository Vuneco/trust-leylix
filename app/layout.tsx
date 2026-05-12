import type { Metadata } from "next";
import "./globals.css";
import SmoothScroll from "./SmoothScroll";

export const metadata: Metadata = {
  metadataBase: new URL("https://trust.leylix.com"),

  title: "Leylix Trust – Echte Menschen. Sichere Events.",

  description:
    "Leylix ist die europäische Plattform für echte Menschen, sichere Communities, verifizierte Nutzer und regionale Events.",

  keywords: [
    "Leylix",
    "Events",
    "verifizierte Nutzer",
    "Fake Accounts",
    "sichere Communities",
    "europäische Plattform",
    "Event Plattform",
    "regionale Events",
    "Tickets",
    "Sponsoring",
  ],

  authors: [{ name: "Leylix" }],
  creator: "Leylix",
  publisher: "Leylix",

  robots: {
    index: true,
    follow: true,
  },

  alternates: {
    canonical: "https://trust.leylix.com",
  },

  openGraph: {
    title: "Leylix Trust – Echte Menschen. Sichere Events.",
    description:
      "Leylix verbindet echte Menschen, sichere Communities und regionale Events.",
    url: "https://trust.leylix.com",
    siteName: "Leylix Trust",
    locale: "de_DE",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Leylix Trust",
    description:
      "Echte Menschen. Sichere Communities. Regionale Events.",
  },

  category: "technology",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="de">
  <body>
    <SmoothScroll>{children}</SmoothScroll>
  </body>
</html>
  );
}
