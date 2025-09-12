# Pocket Service Website

Eine minimalistische Landing Page für Pocket Service - Digitalisierung für Kleinbetriebe.

## Features

- **Next.js 14** mit App Router
- **TypeScript** für Typsicherheit
- **Tailwind CSS** für Styling
- **Framer Motion** für Animationen
- **Kreative Navigation** mit Floating Action Button (FAB)
- **Responsive Design** mobile-first
- **Accessibility** (A11y) optimiert
- **SEO** mit next-seo und JSON-LD
- **Statische Generierung** (SSG)

## Installation

```bash
npm install
```

## Entwicklung

```bash
npm run dev
```

Öffne [http://localhost:3000](http://localhost:3000) in deinem Browser.

## Build für Produktion

```bash
npm run build
npm start
```

## Deployment auf Vercel

1. Verbinde dein Repository mit Vercel
2. Stelle sicher, dass der Build Command `npm run build` ist
3. Output Directory: `.next`
4. Deploy!

Das Projekt ist bereits für Vercel optimiert und benötigt keine zusätzliche Konfiguration.

## Projektstruktur

```
/app
  /globals.css          # Globale Styles mit CSS-Variablen
  /layout.tsx           # Root Layout mit SEO
  /page.tsx             # Hauptseite mit allen Sections
/components
  FabMenu.tsx           # Floating Action Button Navigation
  Modal.tsx             # Generische Modal-Komponente
/sections
  Hero.tsx              # Hero-Section mit Claim
  Services.tsx          # Leistungen-Grid
  Process.tsx           # 3-Schritte Prozess
  Toolkit.tsx           # Tools & Technologien
  References.tsx        # Kundenstimmen
  Contact.tsx           # Kontakt + Footer + Modals
/lib
  motion.ts             # Framer Motion Variants
  navLinks.ts           # Navigation Links
  companyData.ts        # Firmendaten für Impressum
```

## Technische Details

- **Navigation**: Radiales FAB-Menü mit Scroll-Progress-Ring
- **Animationen**: Sanfte Scroll-Reveal-Effekte mit Framer Motion
- **Modals**: Impressum und Datenschutz als Overlays
- **Responsive**: Mobile-first Design mit Tailwind Breakpoints
- **Performance**: Optimiert für Lighthouse-Scores
- **Accessibility**: ARIA-Labels, Focus-Management, Keyboard-Navigation

## Scripts

- `npm run dev` - Entwicklungsserver
- `npm run build` - Produktions-Build
- `npm run start` - Produktions-Server
- `npm run lint` - ESLint Check
- `npm run lint:fix` - ESLint Auto-Fix
- `npm run format` - Prettier Formatting
- `npm run type-check` - TypeScript Check
