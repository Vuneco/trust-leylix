import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Europäische Event-Plattform – Leylix Trust",
  description:
    "Leylix ist eine europäische Plattform für echte Events, verifizierte Nutzer, sichere Communities und regionale Begegnungen.",
};

export default function EuropeanPlatformPage() {
  return (
    <main className="seoPage">

      <a href="/" className="backLink">
  ← Zur Leylix Trust Hauptseite
</a>

      <p className="sectionLabel">Leylix Trust</p>

      <h1>Europäisch gedacht. Regional erlebbar.</h1>

      <p className="seoIntro">
        Leylix verbindet europäische Plattform-Qualität mit echten regionalen
        Begegnungen. Nutzer entdecken Events in ihrer Nähe, Veranstalter erreichen
        echte Menschen und Communities entstehen dort, wo Menschen wirklich leben.
      </p>

      <section className="seoGrid">
        <div className="card">
          <h2>Europäische Ausrichtung</h2>
          <p>
            Leylix wird als moderne Plattform für Europa aufgebaut — mit Fokus auf
            Vertrauen, Sicherheit und echte Nutzer.
          </p>
        </div>

        <div className="card">
          <h2>Regionale Events</h2>
          <p>
            Events werden dort sichtbar, wo sie relevant sind: in der Nähe der
            Menschen, die wirklich teilnehmen können.
          </p>
        </div>

        <div className="card">
          <h2>Echte Communities</h2>
          <p>
            Leylix stärkt lokale Gemeinschaften, Veranstalter, Locations und
            Unternehmen durch direkte digitale Sichtbarkeit.
          </p>
        </div>
      </section>

      <section className="seoTextBlock">
        <h2>Warum Europa eigene digitale Plattformen braucht</h2>
        <p>
          Digitale Plattformen prägen, wie Menschen Veranstaltungen entdecken,
          Kontakte knüpfen und Communities aufbauen. Leylix verfolgt einen Ansatz,
          bei dem Vertrauen, echte Begegnungen und regionale Sichtbarkeit im
          Mittelpunkt stehen.
        </p>
      </section>

      <section className="seoTextBlock">
        <h2>Leylix als Plattform für echte Begegnungen</h2>
        <p>
          Leylix ist keine anonyme Massenplattform. Leylix verbindet Events,
          Locations, Tickets, Sponsoring und Communities in einem System, das auf
          echte Menschen und verlässliche Strukturen setzt.
        </p>
      </section>

      <div className="seoCta">
        <a href="https://leylix.com" className="primaryButton">
          Zur Leylix Webseite
        </a>
      </div>
    </main>
  );
}