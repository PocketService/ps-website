'use client'

import Link from 'next/link'
import SectionNav from '@/components/SectionNav'

const WAS_WIR_TUN = [
  {
    id: '01',
    title: 'Digitale Grundlagen',
    description:
      'Wir analysieren bestehende IT-Strukturen und schaffen eine stabile, nachvollziehbare Basis. Dazu gehören klare Konzepte für Systeme, Daten, Zugriffe und Sicherheit sowie eine verständliche Dokumentation.',
  },
  {
    id: '02',
    title: 'Prozesse & Digitalisierung',
    description:
      'Wir betrachten bestehende Arbeitsabläufe, identifizieren Reibungspunkte und vereinfachen Prozesse durch passende digitale Werkzeuge. Ziel ist nicht mehr Software, sondern klarere Abläufe und weniger Doppelarbeit.',
  },
  {
    id: '03',
    title: 'Daten & Auswertungen',
    description:
      'Wir strukturieren und bereiten Daten so auf, dass sie verlässlich genutzt werden können. Durch klare Auswertungen und übersichtliche Dashboards entstehen belastbare Entscheidungsgrundlagen.',
  },
] as const

const WIE_WIR_ARBEITEN = [
  'Analyse vor Umsetzung',
  'Transparente Entscheidungen',
  'Verständliche Lösungen statt Fachjargon',
] as const

export default function Home() {
  return (
    <main className="min-h-screen">
      <SectionNav />

      <div className="pt-14 md:pt-0 md:pl-16">
        {/* 1. Wer wir sind */}
        <section
          id="hero"
          className="min-h-[80vh] border-b-2 border-black px-4 py-16 md:px-8 md:py-24"
        >
          <div className="mx-auto max-w-4xl">
            <span className="mb-6 inline-block bg-black px-4 py-2 text-base font-bold uppercase tracking-wider text-white md:text-lg">
              {'/// POCKET SERVICE'}
            </span>
            <h1 className="text-heading mb-6">Wer wir sind</h1>
            <div className="flex gap-4">
              <div className="w-1 shrink-0 bg-black" />
              <div>
                <p className="text-body mb-4 max-w-2xl">
                  Pocket Service Digital unterstützt kleine und mittlere Unternehmen ohne eigene IT-Abteilung dabei, ihre digitalen Strukturen verständlich, zuverlässig und nachhaltig aufzubauen.
                </p>
                <p className="text-body mb-4 max-w-2xl">
                  Wir schaffen Ordnung in IT, Prozessen und Daten – ohne unnötige Komplexität.
                </p>
            
                <p className="text-subheading">Keep IT simple.</p>
              </div>
            </div>
          </div>
        </section>

        {/* 2. Was wir tun */}
        <section
          id="leistungen"
          className="border-b-2 border-black px-4 py-16 md:px-8 md:py-24"
        >
          <div className="mx-auto max-w-4xl">
            <h2 className="text-heading mb-2">Was wir tun</h2>
            <div className="mb-12 h-1 w-full bg-black" />
            <div className="space-y-0">
              {WAS_WIR_TUN.map((item, index) => (
                <div
                  key={item.id}
                  className={`flex gap-6 border-l-4 border-black pl-6 ${
                    index < WAS_WIR_TUN.length - 1 ? 'pb-10' : ''
                  }`}
                >
                  <span className="text-xs font-bold uppercase tracking-wider text-muted">
                    [{item.id}]
                  </span>
                  <div>
                    <h3 className="text-subheading mb-1">{item.title}</h3>
                    <p className="text-body">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 3. Wie wir arbeiten */}
        <section
          id="philosophie"
          className="border-b-2 border-black px-4 py-16 md:px-8 md:py-24"
        >
          <div className="mx-auto max-w-4xl">
            <h2 className="text-heading mb-2">Wie wir arbeiten</h2>
            <div className="mb-6 h-1 w-full bg-black" />
            <p className="text-body mb-6 max-w-2xl">
              Wir arbeiten so eng mit unseren Kund:innen zusammen, wie es ihre Ressourcen erlauben.
            </p>
            <p className="text-body mb-8 max-w-2xl">
              Wo sinnvoll, binden wir Teams aktiv ein und übergeben Prozesse bewusst in die Hände der Kund:innen.
            </p>
            <ul className="mb-8 space-y-3">
              {WIE_WIR_ARBEITEN.map((item) => (
                <li key={item} className="flex gap-4">
                  <span className="text-body">•</span>
                  <span className="text-body">{item}</span>
                </li>
              ))}
            </ul>
            <p className="text-body max-w-2xl">
              So entstehen Lösungen, die langfristig nutzbar und kosteneffizient sind – ohne unnötige Abhängigkeiten.
            </p>
          </div>
        </section>

        {/* 4. Kontakt */}
        <section
          id="kontakt"
          className="border-b-2 border-black px-4 py-16 md:px-8 md:py-24"
        >
          <div className="mx-auto max-w-4xl">
            <h2 className="text-heading mb-2">Kontakt</h2>
            <div className="mb-6 h-1 w-full bg-black" />
            <p className="text-body mb-4 max-w-2xl">
              Sie sind unsicher, wo Sie mit einem IT- oder Digitalthema anfangen sollen?
              Oft reicht ein kurzes Gespräch, um Klarheit zu schaffen.
            </p>
            <p className="text-body mb-6 max-w-2xl">
              Die ersten Beratungsgespräche sind kostenlos und unverbindlich.
              Eine kurze E-Mail mit ein paar Stichworten genügt.
            </p>
            <p className="text-body mb-6 font-bold">
              Interesse an einem kurzen Erstgespräch?
            </p>
            <div className="border-2 border-black p-6">
              <p className="text-xs font-bold uppercase tracking-wider text-muted">
                {'/// POCKET SERVICE DIGITAL'}
              </p>
              <a
                href="mailto:mail@pocket-service.com"
                className="mt-4 block text-body font-bold underline hover:no-underline"
              >
                mail@pocket-service.com
              </a>
            </div>
          </div>
        </section>

        <footer className="border-t-2 border-black px-4 py-6 text-center">
          <p className="text-small text-muted">
            © {new Date().getFullYear()} Pocket Service // keep IT simple
          </p>
          <p className="mt-2 text-small">
            <Link href="/impressum" className="underline hover:no-underline">
              Impressum
            </Link>
            {' · '}
            <Link href="/datenschutz" className="underline hover:no-underline">
              Datenschutz
            </Link>
          </p>
        </footer>
      </div>
    </main>
  )
}
