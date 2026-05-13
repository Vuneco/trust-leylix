import type { Metadata } from "next";
import "./globals.css";
import SmoothScroll from "./SmoothScroll";

export const metadata: Metadata = {
  metadataBase: new URL("https://trust.leylix.com"),

  title: "Leylix Trust – Echte Menschen. Sichere Events.",

  description:
  "Leylix ist die europäische Plattform für echte Menschen, sichere Communities, verifizierte Nutzer, regionale Events, Vereine, Sponsoring, Locations und Event-Service-Anbieter.",

  keywords: [
  "Leylix",
  "Events",
  "Event Plattform",
  "regionale Events",
  "verifizierte Nutzer",
  "Fake Accounts",
  "sichere Communities",
  "europäische Plattform",
  "Eventerstellung",
  "Event-Tickets",
  "Locations",
  "Sponsoring",
  "Event Sponsoring",
  "Vereine",
  "Vereinsmitglieder gewinnen",
  "Service Anbieter",
  "Event Service Anbieter",
  "Catering",
  "Security",
  "Speaker",
  "DJs",
  "Fotografen",
  "Videografen",
  "Shuttle Service",
  "Eventtechnik",
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
    "Leylix verbindet echte Menschen, regionale Events, Vereine, Sponsoren, Locations und Event-Service-Anbieter in einer europäischen Plattform.",
  url: "https://trust.leylix.com",
  siteName: "Leylix Trust",
  locale: "de_DE",
  type: "website",
},

  twitter: {
  card: "summary_large_image",
  title: "Leylix Trust",
  description:
    "Echte Menschen, regionale Events, Vereine, Sponsoren, Locations und Event-Service-Anbieter auf einer europäischen Plattform.",
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
