'use client'

import { useState, useEffect } from 'react'

const SECTIONS = [
  { id: 'hero', label: 'Wer' },
  { id: 'leistungen', label: 'Was' },
  { id: 'philosophie', label: 'Wie' },
  { id: 'kontakt', label: 'Kontakt' },
] as const

export default function SectionNav() {
  const [activeSection, setActiveSection] = useState<number>(1)

  useEffect(() => {
    const updateActiveSection = () => {
      const viewportHeight = window.innerHeight
      const viewportMiddle = viewportHeight * 0.4

      let bestSection = 1
      let bestScore = -1

      SECTIONS.forEach(({ id }, index) => {
        const el = document.getElementById(id)
        if (!el) return

        const rect = el.getBoundingClientRect()
        const sectionMiddle = rect.top + rect.height / 2
        const distanceFromView = Math.abs(sectionMiddle - viewportMiddle)

        if (rect.top < viewportHeight && rect.bottom > 0) {
          const visibleHeight =
            Math.min(rect.bottom, viewportHeight) - Math.max(rect.top, 0)
          const score = visibleHeight - distanceFromView * 0.1

          if (score > bestScore) {
            bestScore = score
            bestSection = index + 1
          }
        }
      })

      setActiveSection(bestSection)
    }

    updateActiveSection()

    window.addEventListener('scroll', updateActiveSection, { passive: true })
    window.addEventListener('resize', updateActiveSection)

    return () => {
      window.removeEventListener('scroll', updateActiveSection)
      window.removeEventListener('resize', updateActiveSection)
    }
  }, [])

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <>
      {/* Desktop: vertical bar left */}
      <nav
        className="fixed left-0 top-0 z-40 hidden h-screen w-16 flex-col border-r-2 border-black bg-white md:flex"
        aria-label="Sektions-Navigation"
      >
        {SECTIONS.map(({ id, label }, index) => (
          <button
            key={id}
            onClick={() => scrollToSection(id)}
            className={`flex flex-1 items-center justify-center border-b-2 border-black text-sm font-bold uppercase tracking-wider transition-colors last:border-b-0 focus-ring [writing-mode:vertical-rl] [text-orientation:mixed] ${
              activeSection === index + 1
                ? 'bg-black text-white'
                : 'bg-white text-black hover:bg-gray-100'
            }`}
            aria-label={`Zu ${label} springen`}
            aria-current={activeSection === index + 1 ? 'true' : undefined}
          >
            {label}
          </button>
        ))}
      </nav>

      {/* Mobile: horizontal bar at top */}
      <nav
        className="fixed left-0 right-0 top-0 z-40 flex flex-row border-b-2 border-black bg-white md:hidden"
        aria-label="Sektions-Navigation"
      >
        {SECTIONS.map(({ id, label }, index) => (
          <button
            key={id}
            onClick={() => scrollToSection(id)}
            className={`flex flex-1 items-center justify-center border-r-2 border-black py-3 text-sm font-bold uppercase tracking-wider last:border-r-0 focus-ring ${
              activeSection === index + 1
                ? 'bg-black text-white'
                : 'bg-white text-black hover:bg-gray-100'
            }`}
            aria-label={`Zu ${label} springen`}
            aria-current={activeSection === index + 1 ? 'true' : undefined}
          >
            {label}
          </button>
        ))}
      </nav>
    </>
  )
}
