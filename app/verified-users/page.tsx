import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Verifizierte Nutzer – Mehr Sicherheit mit Leylix",
  description:
    "Warum verifizierte Nutzer für sichere Communities, echte Begegnungen und vertrauensvolle Events wichtig sind.",
};

export default function VerifiedUsersPage() {
  return (
    <main className="seoPage">
      <a href="/" className="backLink">
        ← Zur Leylix Trust Hauptseite
      </a>

      <p className="sectionLabel">Leylix Trust</p>

      <h1>Warum verifizierte Nutzer wichtig sind.</h1>

      <p className="seoIntro">
        Viele digitale Plattformen kämpfen mit Fake-Accounts, Bots und anonymen
        Profilen. Dadurch verlieren Communities Vertrauen und echte Begegnungen
        werden schwieriger. Leylix setzt deshalb auf verifizierte Nutzer, um
        sichere Interaktionen und echte Menschen stärker in den Mittelpunkt zu stellen.
      </p>

      <section className="seoGrid">
        <div className="card">
          <h2>Mehr Vertrauen</h2>
          <p>
            Verifizierte Nutzer schaffen mehr Sicherheit für Veranstalter,
            Teilnehmer und Communities.
          </p>
        </div>

        <div className="card">
          <h2>Weniger Fake-Accounts</h2>
          <p>
            Bots, Spam und gefälschte Profile können reduziert werden.
          </p>
        </div>

        <div className="card">
          <h2>Echte Begegnungen</h2>
          <p>
            Menschen sollen sich online sicherer verbinden und offline echter begegnen.
          </p>
        </div>
      </section>

      <section className="seoTextBlock">
        <h2>Sicherheit für Events und Communities</h2>
        <p>
          Veranstaltungen leben von Vertrauen. Teilnehmer möchten wissen, dass
          echte Menschen hinter Profilen stehen. Veranstalter benötigen sichere
          Strukturen, um Communities aufzubauen und Events besser zu organisieren.
          Genau dort setzt Leylix an.
        </p>
      </section>

      <section className="seoTextBlock">
        <h2>Europäisch gedacht</h2>
        <p>
          Leylix verbindet regionale Events, echte Menschen und sichere Communities.
          Nutzer entdecken Veranstaltungen in ihrer Nähe und können sich in einem
          vertrauensvolleren digitalen Umfeld bewegen.
        </p>
      </section>

            <section className="seoTextBlock">
        <h2>Vereine und regionale Communities</h2>
        <p>
          Auch Vereine profitieren von verifizierten Nutzern und sicheren Communities.
          Sportvereine, Kulturvereine, Musikvereine und regionale Organisationen
          können über Leylix neue Mitglieder gewinnen, Veranstaltungen sichtbarer
          machen und vertrauensvollere Communities aufbauen.
        </p>
      </section>

      <section className="seoTextBlock">
        <h2>Sicherheit für Sponsoring und Kooperationen</h2>
        <p>
          Unternehmen und Sponsoren möchten wissen, mit wem sie zusammenarbeiten.
          Verifizierte Nutzer und klarere Identitäten schaffen mehr Vertrauen
          zwischen Veranstaltern, Vereinen, Sponsoren und regionalen Partnern.
        </p>
      </section>

      <section className="seoTextBlock">
        <h2>Mehr Sicherheit für Service-Anbieter</h2>
        <p>
          Auch Event-Service-Anbieter profitieren von sicheren Communities.
          Catering, Security, Fotografen, Videografen, Speaker, DJs, Shuttle-Service
          und Technik-Anbieter können sich professioneller präsentieren und einfacher
          mit Veranstaltern und Communities vernetzen.
        </p>
      </section>

      <div className="seoCta">
        <a href="https://leylix.com" className="primaryButton">
          Zur Leylix Plattform
        </a>
      </div>
    </main>
  );
}