import React from 'react'

export default function Impressum() {
    return (
        <div>
            {/* Hero */}
            <div
                style={{
                    background: 'linear-gradient(135deg, var(--color-primary), var(--color-secondary))',
                    color: 'white',
                    padding: 'var(--spacing-3xl) 0',
                    textAlign: 'center',
                }}
            >
                <div className="container">
                    <h1 style={{ color: 'white', marginBottom: 'var(--spacing-md)' }}>
                        Impressum
                    </h1>
                    <p style={{ fontSize: 'var(--font-size-xl)', color: 'white' }}>
                        Angaben gemäß § 5 TMG
                    </p>
                </div>
            </div>

            {/* Content */}
            <section>
                <div className="container" style={{ maxWidth: '900px' }}>
                    <h2>Anbieter</h2>
                    <p>
                        <strong>TravelDreams GmbH</strong><br />
                        Musterstraße 123<br />
                        10115 Berlin<br />
                        Deutschland
                    </p>

                    <h2>Kontakt</h2>
                    <p>
                        Telefon: +49 123 456 7890<br />
                        Telefax: +49 123 456 7891<br />
                        E-Mail: info@traveldreams.de<br />
                        Website: www.traveldreams.de
                    </p>

                    <h2>Geschäftsführung</h2>
                    <p>
                        Max Mustermann<br />
                        Erika Musterfrau
                    </p>

                    <h2>Registereintrag</h2>
                    <p>
                        Handelsregister: Amtsgericht Berlin<br />
                        Registernummer: HRB 12345 B
                    </p>

                    <h2>Umsatzsteuer-ID</h2>
                    <p>
                        Umsatzsteuer-Identifikationsnummer gemäß § 27a Umsatzsteuergesetz:<br />
                        DE123456789
                    </p>

                    <h2>Verantwortlich für den Inhalt nach § 55 Abs. 2 RStV</h2>
                    <p>
                        Max Mustermann<br />
                        Musterstraße 123<br />
                        10115 Berlin
                    </p>

                    <h2>Streitschlichtung</h2>
                    <p>
                        Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS) bereit:
                    </p>
                    <p>
                        <a
                            href="https://ec.europa.eu/consumers/odr/"
                            target="_blank"
                            rel="noopener noreferrer"
                            style={{ color: 'var(--color-primary)' }}
                        >
                            https://ec.europa.eu/consumers/odr/
                        </a>
                    </p>
                    <p>
                        Unsere E-Mail-Adresse finden Sie oben im Impressum.
                    </p>
                    <p>
                        Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren vor einer
                        Verbraucherschlichtungsstelle teilzunehmen.
                    </p>

                    <h2>Haftung für Inhalte</h2>
                    <p>
                        Als Diensteanbieter sind wir gemäß § 7 Abs.1 TMG für eigene Inhalte auf diesen Seiten
                        nach den allgemeinen Gesetzen verantwortlich. Nach §§ 8 bis 10 TMG sind wir als
                        Diensteanbieter jedoch nicht verpflichtet, übermittelte oder gespeicherte fremde
                        Informationen zu überwachen oder nach Umständen zu forschen, die auf eine rechtswidrige
                        Tätigkeit hinweisen.
                    </p>

                    <h2>Haftung für Links</h2>
                    <p>
                        Unser Angebot enthält Links zu externen Websites Dritter, auf deren Inhalte wir keinen
                        Einfluss haben. Deshalb können wir für diese fremden Inhalte auch keine Gewähr übernehmen.
                    </p>

                    <h2>Urheberrecht</h2>
                    <p>
                        Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen
                        dem deutschen Urheberrecht. Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art
                        der Verwertung außerhalb der Grenzen des Urheberrechtes bedürfen der schriftlichen
                        Zustimmung des jeweiligen Autors bzw. Erstellers.
                    </p>

                    <h2>Bildnachweise</h2>
                    <p>
                        Die verwendeten Bilder stammen aus folgenden Quellen:
                    </p>
                    <ul style={{ marginLeft: '1.5rem', marginBottom: '1rem' }}>
                        <li><strong>Eigene Fotografien:</strong> thomaskirche-innenraum-leipzig.jpg, ruhmeshalle-voelkerschlachtdenkmal-leipzig.jpg, Sachsentherme1.jpg - © Eigene Aufnahmen</li>
                        <li><strong>Unsplash.com:</strong> Kostenlose Bilder unter Unsplash-Lizenz für kommerzielle Nutzung</li>
                        <li><strong>Wikipedia/Wikimedia Commons:</strong> Bilder unter Creative Commons Lizenz mit entsprechender Namensnennung</li>
                    </ul>
                    <p style={{ fontSize: '0.9rem', color: '#666' }}>
                        <strong>Hinweis:</strong> Alle verwendeten Bilder werden unter den jeweiligen Lizenzbedingungen genutzt. 
                        Bei Fragen zu Bildrechten kontaktieren Sie uns bitte.
                    </p>

                    <p style={{ marginTop: 'var(--spacing-2xl)', fontSize: '0.875rem', color: 'var(--color-text-light)' }}>
                        Stand: November 2025
                    </p>
                </div>
            </section>
        </div>
    )
}
