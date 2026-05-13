import Link from "next/link";

export default function ImpressumPage() {
  return (
    <main className="seoPage">
      <Link href="/" className="backLink">
        ← Zurück zur Startseite
      </Link>

      <p className="sectionLabel">Impressum</p>

      <h1>Impressum</h1>

      <section className="seoTextBlock">
        <h2>Angaben gemäß § 5 TMG</h2>

        <p>
          Vuneco GmbH
          <br />
          Thomaß-Eßer-Straße 86
          <br />
          53879 Euskirchen
          <br />
          Deutschland
        </p>
      </section>

      <section className="seoTextBlock">
        <h2>Vertreten durch</h2>

        <p>
          Esat Vurcak
          <br />
          Geschäftsführer
        </p>
      </section>

      <section className="seoTextBlock">
        <h2>Kontakt</h2>

        <p>
          Telefon: +49 151 51402200
          <br />
          E-Mail: info@vuneco.com
        </p>
      </section>

      <section className="seoTextBlock">
        <h2>Registereintrag</h2>

        <p>
          Eingetragen im Handelsregister.
          <br />
          Registergericht: Amtsgericht Bonn
          <br />
          Registernummer: HRB 18406
        </p>
      </section>

      <section className="seoTextBlock">
        <h2>Umsatzsteuer-ID</h2>

        <p>
          Umsatzsteuer-Identifikationsnummer gemäß § 27 a
          Umsatzsteuergesetz:
          <br />
          DE232287677
        </p>
      </section>

      <section className="seoTextBlock">
        <h2>Verantwortlich nach § 18 Abs. 2 MStV</h2>

        <p>
          Esat Vurcak
          <br />
          Vuneco GmbH
          <br />
          Thomaß-Eßer-Straße 86
          <br />
          53879 Euskirchen
        </p>
      </section>

      <section className="seoTextBlock">
        <h2>Haftung für Inhalte</h2>

        <p>
          Als Diensteanbieter sind wir gemäß § 7 Abs. 1 TMG für eigene Inhalte
          auf diesen Seiten nach den allgemeinen Gesetzen verantwortlich.
        </p>

        <p>
          Nach §§ 8 bis 10 TMG sind wir als Diensteanbieter jedoch nicht
          verpflichtet, übermittelte oder gespeicherte fremde Informationen zu
          überwachen oder nach Umständen zu forschen, die auf eine rechtswidrige
          Tätigkeit hinweisen.
        </p>

        <p>
          Verpflichtungen zur Entfernung oder Sperrung der Nutzung von
          Informationen nach den allgemeinen Gesetzen bleiben hiervon unberührt.
        </p>

        <p>
          Eine diesbezügliche Haftung ist jedoch erst ab dem Zeitpunkt der
          Kenntnis einer konkreten Rechtsverletzung möglich. Bei Bekanntwerden
          entsprechender Rechtsverletzungen entfernen wir diese Inhalte umgehend.
        </p>
      </section>

      <section className="seoTextBlock">
        <h2>Haftung für Links</h2>

        <p>
          Unser Angebot enthält Links zu externen Websites Dritter, auf deren
          Inhalte wir keinen Einfluss haben. Deshalb können wir für diese fremden
          Inhalte auch keine Gewähr übernehmen.
        </p>

        <p>
          Für die Inhalte der verlinkten Seiten ist stets der jeweilige Anbieter
          oder Betreiber der Seiten verantwortlich.
        </p>

        <p>
          Bei Bekanntwerden von Rechtsverletzungen entfernen wir solche Links
          umgehend.
        </p>
      </section>

      <section className="seoTextBlock">
        <h2>Urheberrecht</h2>

        <p>
          Die auf dieser Website erstellten Inhalte und Werke unterliegen dem
          deutschen Urheberrecht.
        </p>

        <p>
          Beiträge Dritter sind als solche gekennzeichnet.
        </p>

        <p>
          Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art der
          Verwertung außerhalb der Grenzen des Urheberrechts bedürfen der
          schriftlichen Zustimmung des jeweiligen Autors bzw. Erstellers.
        </p>

        <p>
          Downloads und Kopien dieser Seite sind nur für den privaten,
          nicht kommerziellen Gebrauch gestattet.
        </p>
      </section>

      <section className="seoTextBlock">
        <h2>Alternative Streitbeilegung nach § 36 VSBG</h2>

        <p>
          Wir sind nicht verpflichtet und nicht bereit, an einem
          Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle
          teilzunehmen.
        </p>
      </section>
    </main>
  );
}