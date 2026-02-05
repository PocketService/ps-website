import type { Metadata } from 'next'
import { Space_Mono } from 'next/font/google'
import './globals.css'

const spaceMono = Space_Mono({ weight: ['400', '700'], subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Pocket Service – Digitalisierung für KMU',
  description: 'Von Excel zu Datenbanken. IT-Dienstleistungen für kleine und mittelständische Unternehmen.',
  keywords: 'Digitalisierung, KMU, Datenbanken, Cloud, CRM, Prozessautomatisierung',
  authors: [{ name: 'Pocket Service' }],
  creator: 'Pocket Service',
  publisher: 'Pocket Service Digital e.U.',
  robots: 'index, follow',
  openGraph: {
    type: 'website',
    locale: 'de_AT',
    url: 'https://pocket-service.com',
    siteName: 'pocket-service.com',
    title: 'Pocket Service – Digitalisierung für KMU',
    description: 'Von Excel zu Datenbanken. IT-Dienstleistungen für kleine und mittelständische Unternehmen.',
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
    title: 'Pocket Service – Digitalisierung für KMU',
    description: 'Von Excel zu Datenbanken. IT-Dienstleistungen für kleine und mittelständische Unternehmen.',
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
  description: 'Von Excel zu Datenbanken. IT-Dienstleistungen für kleine und mittelständische Unternehmen.',
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
      <body className={`${spaceMono.className} antialiased`}>
        {children}
      </body>
    </html>
  )
}
