import ScrollReveal from "./ScrollReveal";
import ExperiencePreview from "./ExperiencePreview";

export default function Home() {
  return (
    <>
      <header className="navbar">
        <div className="logo">Leylix Trust</div>

        <nav>
          <a href="#problem">Problem</a>
          <a href="#solution">Lösung</a>
          <a href="#verified">Verifizierung</a>
          <a href="#faq">FAQ</a>
          <a className="navButton" href="https://leylix.com">
            Zur Leylix Webseite
          </a>
        </nav>
      </header>

      <main>
        <section className="hero">
          <div className="orb orb1"></div>
<div className="orb orb2"></div>
<div className="orb orb3"></div>
          <div className="brandLabel">Leylix</div>

          <div className="heroContent">
            <p className="eyebrow">Europäische Plattform für echte Begegnungen</p>

            <h1>Mehr echte Menschen. Weniger Fake-Accounts.</h1>

            <p className="heroText">
              Leylix verbindet echte Menschen, Events, Locations und Communities.
              Mit verifizierten Nutzern schafft Leylix mehr Sicherheit, Vertrauen
              und echte Begegnungen.
            </p>

            <div className="heroStatement">
  <p>
    Auf anderen Plattformen sucht jeder einzeln.
    <br />
    <strong>Auf Leylix findet man sich.</strong>
  </p>

  <span>
    Menschen, Communities, Vereine, Sponsoren,
    Locations und Service-Anbieter
    in einem gemeinsamen Event-Ökosystem.
  </span>
</div>

            <div className="heroActions">
              <a className="primaryButton" href="https://leylix.com">
                Leylix entdecken
              </a>
              <a className="secondaryButton" href="#verified">
                Mehr erfahren
              </a>

              <a className="secondaryButton" href="/verified-users">
  Verifizierte Nutzer
</a>

<a className="secondaryButton" href="/fake-accounts">
  Fake-Accounts
</a>

<a className="secondaryButton" href="/european-platform">
  Europäische Plattform
</a>

            </div>
          </div>
          <div className="heroVisual">

  <div className="phone phoneMain">
    <img src="/images/leylix/homescreen.PNG" alt="Leylix Homescreen" />
  </div>

  <div className="phone phoneLeft">
    <img src="/images/leylix/events-on-map.PNG" alt="Leylix Map" />
  </div>

  <div className="phone phoneRight">
    <img src="/images/leylix/event-detail.PNG" alt="Leylix Event" />
  </div>

  <div className="phone phoneBottom">
    <img src="/images/leylix/ticket.PNG" alt="Leylix Ticket" />
  </div>

</div>
        </section>

        <ScrollReveal>
  <section id="problem" className="section">
          <p className="sectionLabel">Das Problem</p>
          <h2>Das Internet verliert Vertrauen.</h2>
          <p>
            Viele Plattformen kämpfen mit Fake-Accounts, anonymen Profilen, Spam,
            Bots und unsicheren Interaktionen. Leylix setzt auf echte Menschen,
            klare Identitäten und sichere Begegnungen.
          </p>

          <div className="cards">
            <div className="card">
              <h3>Fake-Accounts</h3>
              <p>Unklare Identitäten schwächen Vertrauen und echte Begegnungen.</p>
            </div>

            <div className="card">
              <h3>Bots & Spam</h3>
              <p>Automatisierte Profile zerstören die Qualität digitaler Communities.</p>
            </div>

            <div className="card">
              <h3>Unsichere Events</h3>
              <p>Events brauchen echte Teilnehmer, klare Abläufe und Vertrauen.</p>
            </div>
          </div>
        </section>
        </ScrollReveal>
        <ScrollReveal>
          <section className="section experienceSection">
            <p className="sectionLabel">Leylix in Aktion</p>
            <h2>Alles rund um Events an einem Ort.</h2>
            <p>
              Leylix zeigt nicht nur Events. Die Plattform verbindet Veranstalter,
              Vereine, Locations, Sponsoren, Service-Anbieter und echte Teilnehmer
              in einem gemeinsamen Event-Ökosystem.
            </p>

            <ExperiencePreview />
          </section>
        </ScrollReveal>

        <ScrollReveal>
  <section id="solution" className="section darkSection">
          <p className="sectionLabel">Die Lösung</p>
          <h2>Leylix bringt Vertrauen zurück.</h2>
          <p>
            Leylix ist eine europäische Plattform für echte Events, verifizierte
            Nutzer, sichere Communities, Locations, Tickets und Sponsoring.
          </p>

          <div className="featureGrid">
            <div>Verifizierte Nutzer</div>
            <div>Regionale Events</div>
            <div>Sichere Communities</div>
            <div>Event-Tickets</div>
            <div>Locations</div>
            <div>Sponsoring</div>
          </div>
        </section>
        </ScrollReveal>

        <ScrollReveal>
  <section id="verified" className="section">
          <p className="sectionLabel">Verifizierung</p>
          <h2>Warum echte Nutzer wichtig sind.</h2>
          <p>
            Durch verifizierte Nutzer können Veranstalter, Teilnehmer, Locations
            und Unternehmen sicherer miteinander interagieren. Leylix reduziert
            Missbrauch und stärkt echte Begegnungen.
          </p>
        </section>
        </ScrollReveal>

        <ScrollReveal>
  <section className="section">
          <p className="sectionLabel">Europa</p>
          <h2>Europäisch gedacht. Regional erlebbar.</h2>
          <p>
            Leylix zeigt Events basierend auf der Nähe der Nutzer. So entstehen
            echte Communities dort, wo Menschen wirklich leben.
          </p>
        </section>
        </ScrollReveal>

        <ScrollReveal>
  <section id="faq" className="section faq">
          <p className="sectionLabel">FAQ</p>
          <h2>Häufige Fragen</h2>

          <details>
            <summary>Was ist Leylix?</summary>
            <p>
              Leylix ist eine Plattform für Events, Locations, Tickets,
              Sponsoring und echte Communities.
            </p>
          </details>

          <details>
            <summary>Warum setzt Leylix auf verifizierte Nutzer?</summary>
            <p>
              Damit echte Menschen miteinander interagieren und Fake-Accounts,
              Bots und Missbrauch reduziert werden.
            </p>
          </details>

          <details>
            <summary>Ist Leylix ein WhatsApp-Ersatz?</summary>
            <p>
              Nein. Leylix ist keine Kopie eines Messengers. Leylix ist eine
              Plattform für echte Begegnungen, Events und verifizierte Communities.
            </p>
          </details>
        </section>
        </ScrollReveal>

        <section className="ctaSection">
          <div className="brandLabel">Leylix</div>
          <h2>Werde Teil echter Communities.</h2>
          <p>
            Entdecke Leylix und erlebe Events mit mehr Vertrauen, Sicherheit und
            echten Menschen.
          </p>
          <a className="primaryButton" href="https://leylix.com">
            Zur Leylix Webseite
          </a>
        </section>
      </main>

      <footer className="footer">
  <div className="footerGrid">

    <div>
      <h3>Leylix Trust</h3>
      <p>
        Mehr echte Menschen. Weniger Fake-Accounts.
      </p>
    </div>

    <div>
  <h4>SEO Seiten</h4>

  <a href="/verified-users">Verifizierte Nutzer</a>
  <a href="/fake-accounts">Fake-Accounts</a>
  <a href="/european-platform">Europäische Plattform</a>
</div>

<div>
  <h4>Rechtliches</h4>

  <a href="/impressum">Impressum</a>
  <a href="/datenschutz">Datenschutz</a>
</div>

<div>
  <h4>Plattform</h4>

  <a href="https://leylix.com">Leylix Webseite</a>
</div>

  </div>

  <p className="footerBottom">
    © Leylix – Echte Menschen. Sichere Events. Verifizierte Communities.
  </p>
</footer>
    </>
  );
}
