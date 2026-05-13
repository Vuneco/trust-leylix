import Link from "next/link";

export default function DatenschutzPage() {
  return (
    <main className="seoPage">
      <Link href="/" className="backLink">
        ← Zurück zur Startseite
      </Link>

      <p className="sectionLabel">Datenschutz</p>

      <h1>Datenschutzerklärung</h1>

      <section className="seoTextBlock">
        <h2>Allgemeine Hinweise</h2>

        <p>
          Der Schutz Ihrer persönlichen Daten ist uns wichtig.
          Wir behandeln personenbezogene Daten vertraulich und
          entsprechend der gesetzlichen Datenschutzvorschriften
          sowie dieser Datenschutzerklärung.
        </p>
      </section>

      <section className="seoTextBlock">
        <h2>Verantwortlicher</h2>

        <p>
          Vuneco GmbH
          <br />
          Thomaß-Eßer-Straße 86
          <br />
          53879 Euskirchen
          <br />
          Deutschland
          <br />
          E-Mail: info@vuneco.com
        </p>
      </section>

      <section className="seoTextBlock">
        <h2>Server-Logfiles</h2>

        <p>
          Beim Besuch dieser Website können automatisch Informationen
          durch den Hosting-Provider erfasst werden. Dazu gehören unter anderem:
        </p>

        <p>
          Browsertyp,
          Betriebssystem,
          Referrer URL,
          Uhrzeit der Anfrage,
          IP-Adresse.
        </p>
      </section>

      <section className="seoTextBlock">
        <h2>Cookies</h2>

        <p>
          Diese Website verwendet Cookies, um die Nutzung der Website
          technisch zu ermöglichen und die Benutzerfreundlichkeit zu verbessern.
        </p>
      </section>

      <section className="seoTextBlock">
        <h2>Externe Links</h2>

        <p>
          Diese Website kann Links zu externen Websites enthalten.
          Für die Inhalte externer Seiten übernehmen wir keine Haftung.
        </p>
      </section>

      <section className="seoTextBlock">
        <h2>Ihre Rechte</h2>

        <p>
          Sie haben jederzeit das Recht auf Auskunft,
          Berichtigung,
          Löschung,
          Einschränkung der Verarbeitung
          sowie Widerspruch gegen die Verarbeitung Ihrer Daten.
        </p>
      </section>

      <section className="seoTextBlock">
        <h2>Kontakt</h2>

        <p>
          Bei Fragen zum Datenschutz:
          <br />
          info@vuneco.com
        </p>
      </section>
    </main>
  );
}