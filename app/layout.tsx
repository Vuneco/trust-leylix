import type { Metadata } from "next";
import "./globals.css";
import SmoothScroll from "./SmoothScroll";

export const metadata: Metadata = {
  title: "Leylix Trust – Echte Menschen. Sichere Events.",
  description:
    "Leylix ist die europäische Plattform für echte Menschen, sichere Communities und verifizierte Nutzer.",
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
