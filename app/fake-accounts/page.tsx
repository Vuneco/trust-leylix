import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Fake-Accounts vermeiden – Leylix setzt auf echte Menschen",
  description:
    "Leylix reduziert Fake-Accounts, Bots und Spam durch verifizierte Nutzer und schafft mehr Vertrauen für Events und Communities.",
};

export default function FakeAccountsPage() {
  return (
    <main className="seoPage">
      <p className="sectionLabel">Leylix Trust</p>

      <h1>Fake-Accounts zerstören Vertrauen.</h1>

      <p className="seoIntro">
        Fake-Accounts, Bots und anonyme Profile machen digitale Plattformen
        unsicherer. Sie schwächen Communities, erschweren echte Begegnungen und
        können Veranstalter, Teilnehmer und Unternehmen verunsichern.
      </p>

      <section className="seoGrid">
        <div className="card">
          <h2>Weniger Bots</h2>
          <p>
            Leylix setzt auf echte Nutzer statt automatisierte Profile und
            künstliche Interaktionen.
          </p>
        </div>

        <div className="card">
          <h2>Mehr Sicherheit</h2>
          <p>
            Verifizierte Nutzer helfen dabei, Missbrauch und unsichere Kontakte
            zu reduzieren.
          </p>
        </div>

        <div className="card">
          <h2>Echte Communities</h2>
          <p>
            Vertrauen entsteht dort, wo echte Menschen miteinander verbunden
            werden.
          </p>
        </div>
      </section>

      <section className="seoTextBlock">
        <h2>Warum Fake-Accounts ein echtes Problem sind</h2>
        <p>
          Digitale Plattformen leben von Vertrauen. Wenn Nutzer nicht wissen,
          ob hinter einem Profil ein echter Mensch steht, entstehen Unsicherheit,
          Misstrauen und weniger echte Interaktionen. Besonders bei Events,
          Tickets, Locations und Community-Aufbau ist Vertrauen entscheidend.
        </p>
      </section>

      <section className="seoTextBlock">
        <h2>Der Leylix-Ansatz</h2>
        <p>
          Leylix möchte echte Menschen, sichere Events und vertrauensvolle
          Communities verbinden. Verifizierung ist dabei ein wichtiger Baustein,
          um Plattformqualität, Sicherheit und echte Begegnungen zu stärken.
        </p>
      </section>

      <div className="seoCta">
        <a href="https://leylix.com" className="primaryButton">
          Leylix entdecken
        </a>
      </div>
    </main>
  );
}