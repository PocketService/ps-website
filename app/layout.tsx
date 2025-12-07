import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Pocket Service – Digitalisierung für Kleinbetriebe',
  description: 'Windows-Verwaltung, Cloud-Einrichtung, CRM/PM-Implementierung & laufende Betreuung.',
  keywords: 'Digitalisierung, Kleinbetriebe, Windows-Verwaltung, Cloud, CRM, Projektmanagement',
  authors: [{ name: 'Pocket Service' }],
  creator: 'Pocket Service',
  publisher: 'Vialndawo e.U.',
  robots: 'index, follow',
  openGraph: {
    type: 'website',
    locale: 'de_AT',
    url: 'https://pocket-service.com',
    siteName: 'pocket-service.com',
    title: 'Pocket Service – Digitalisierung für Kleinbetriebe',
    description: 'Windows-Verwaltung, Cloud-Einrichtung, CRM/PM-Implementierung & laufende Betreuung.',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Pocket Service - Digitalisierung für Kleinbetriebe',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Pocket Service – Digitalisierung für Kleinbetriebe',
    description: 'Windows-Verwaltung, Cloud-Einrichtung, CRM/PM-Implementierung & laufende Betreuung.',
    images: ['/og-image.jpg'],
  },
  alternates: {
    canonical: 'https://pocket-service.com',
  },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'Pocket Service',
  url: 'https://pocket-service.com',
  email: 'mail@pocket-service.com',
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'Klosterneuburger Gasse 62',
    addressLocality: 'Klosterneuburg',
    postalCode: '3400',
    addressCountry: 'AT',
  },
  founder: {
    '@type': 'Person',
    name: 'Konstantin Michalek',
  },
  description: 'Digitalisierung für Kleinbetriebe - Windows-Verwaltung, Cloud-Einrichtung, CRM/PM-Implementierung & laufende Betreuung.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="de" className="scroll-smooth">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={`${inter.className} antialiased`}>
        {children}
      </body>
    </html>
  )
}
