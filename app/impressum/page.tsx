import Link from 'next/link'
import { companyData } from '@/lib/companyData'

export const metadata = {
  title: 'Impressum – Pocket Service',
  description: 'Impressum von Pocket Service Digital.',
}

export default function ImpressumPage() {
  return (
    <main className="min-h-screen">
      <div className="border-b-2 border-black px-4 py-6 md:px-8">
        <div className="mx-auto flex max-w-4xl items-center justify-between">
          <Link
            href="/"
            className="text-xs font-bold uppercase tracking-wider text-black hover:underline"
          >
            ← Pocket Service
          </Link>
        </div>
      </div>

      <article className="mx-auto max-w-4xl px-4 py-16 md:px-8 md:py-24">
        <h1 className="text-heading mb-8">Impressum</h1>

        <div className="space-y-8 text-body">
          <section>
            <h2 className="text-subheading mb-4">Unternehmen</h2>
            <p>
              {companyData.name}
              <br />
              {companyData.owner}
            </p>
          </section>

          <section>
            <h2 className="text-subheading mb-4">Adresse</h2>
            <p>
              {companyData.address.street}
              <br />
              {companyData.address.city}, {companyData.address.country}
            </p>
          </section>

          <section>
            <h2 className="text-subheading mb-4">Firmenangaben</h2>
            <p>
              <strong>Unternehmensgegenstand:</strong>{' '}
              {companyData.business.activity}
            </p>
            <p>
              <strong>UID-Nummer:</strong> {companyData.business.uid} |{' '}
              <strong>GISA-Zahl:</strong> {companyData.business.gisa}
            </p>
            <p>
              <strong>Firmenbuchnummer:</strong> {companyData.business.companyRegister} |{' '}
              <strong>Firmenbuchgericht:</strong> {companyData.business.court}
            </p>
            <p>
              <strong>Firmensitz:</strong> {companyData.business.headquarters}
            </p>
          </section>

          <section>
            <h2 className="text-subheading mb-4">Kontakt</h2>
            <p>
              E-Mail:{' '}
              <a
                href={`mailto:${companyData.contact.email}`}
                className="underline hover:no-underline"
              >
                {companyData.contact.email}
              </a>
            </p>
          </section>

          <section>
            <h2 className="text-subheading mb-4">Berufsrecht</h2>
            <p>
              Gewerbeordnung:{' '}
              <a
                href="https://www.ris.bka.gv.at"
                target="_blank"
                rel="noopener noreferrer"
                className="underline hover:no-underline"
              >
                www.ris.bka.gv.at
              </a>
            </p>
          </section>

          <section>
            <h2 className="text-subheading mb-4">Aufsichtsbehörde</h2>
            <p>
              Bezirkshauptmannschaft Tulln – Außenstelle Klosterneuburg |{' '}
              <strong>Verleihungsstaat:</strong> Österreich
            </p>
          </section>

          <section>
            <p>
              Weitere Informationen zum Datenschutz finden Sie in unserer{' '}
              <Link href="/datenschutz" className="underline hover:no-underline">
                Datenschutzerklärung
              </Link>
              .
            </p>
          </section>
        </div>
      </article>

      <footer className="border-t-2 border-black px-4 py-6 text-center">
        <p className="text-small text-muted">
          © {new Date().getFullYear()} Pocket Service // keep IT simple
        </p>
        <p className="mt-2 text-small">
          <span className="text-muted">Impressum</span>
          {' · '}
          <Link href="/datenschutz" className="underline hover:no-underline">
            Datenschutz
          </Link>
        </p>
      </footer>
    </main>
  )
}
