import Link from 'next/link'
import { companyData } from '@/lib/companyData'

export const metadata = {
  title: 'Datenschutz – Pocket Service',
  description: 'Datenschutzerklärung von Pocket Service Digital.',
}

export default function DatenschutzPage() {
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
        <h1 className="text-heading mb-8">Datenschutzerklärung</h1>

        <div className="space-y-8 text-body">
          <section>
            <h2 className="text-subheading mb-4">Verantwortliche Stelle</h2>
            <p>
              {companyData.name}
              <br />
              {companyData.owner}
              <br />
              {companyData.address.street}
              <br />
              {companyData.address.city}, {companyData.address.country}
            </p>
            <p className="mt-4">
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
            <h2 className="text-subheading mb-4">Hosting und Server-Logs</h2>
            <p>
              Diese Website wird bei Vercel Inc. gehostet. Beim Aufruf der
              Website können durch den Hosting-Anbieter automatisch
              Zugriffsdaten (z. B. IP-Adresse, Zeitpunkt des Zugriffs,
              angeforderte URL) für technische und Sicherheitszwecke erfasst und
              gespeichert werden. Diese Verarbeitung erfolgt auf Grundlage eines
              berechtigten Interesses (Art. 6 Abs. 1 lit. f DSGVO) am sicheren
              und zuverlässigen Betrieb der Website.
            </p>
            <p className="mt-4">
              Weitere Informationen zur Datenverarbeitung durch Vercel finden
              Sie in der{' '}
              <a
                href="https://vercel.com/legal/privacy-policy"
                target="_blank"
                rel="noopener noreferrer"
                className="underline hover:no-underline"
              >
                Vercel Privacy Policy
              </a>
              .
            </p>
          </section>

          <section>
            <h2 className="text-subheading mb-4">Keine weiteren Daten</h2>
            <p>
              Diese Website verwendet keine Tracking-Tools, keine Cookies, die
              eine Einwilligung erfordern, und kein Kontaktformular. Ein
              E-Mail-Kontakt erfolgt über den Mail-Client des Nutzers – die
              Website erfasst dabei keine Daten.
            </p>
          </section>

          <section>
            <h2 className="text-subheading mb-4">Ihre Rechte</h2>
            <p>
              Sie haben das Recht auf Auskunft, Berichtigung, Löschung,
              Einschränkung der Verarbeitung, Datenübertragbarkeit und
              Widerspruch. Sie können sich bei Fragen zum Datenschutz an uns
              wenden. Zudem haben Sie das Recht, eine Beschwerde bei der
              zuständigen Datenschutzbehörde einzulegen.
            </p>
            <p className="mt-4">
              Österreichische Datenschutzbehörde:{' '}
              <a
                href="https://www.dsb.gv.at"
                target="_blank"
                rel="noopener noreferrer"
                className="underline hover:no-underline"
              >
                www.dsb.gv.at
              </a>
            </p>
          </section>
        </div>
      </article>

      <footer className="border-t-2 border-black px-4 py-6 text-center">
        <p className="text-small text-muted">
          © {new Date().getFullYear()} Pocket Service // keep IT simple
        </p>
        <p className="mt-2 text-small">
          <Link href="/impressum" className="underline hover:no-underline">
            Impressum
          </Link>
          {' · '}
          <span className="text-muted">Datenschutz</span>
        </p>
      </footer>
    </main>
  )
}
