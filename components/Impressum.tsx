'use client'

import { useState } from 'react'

export default function Impressum() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <section className="bg-white border-t-2 border-black py-4 px-4">
      <div className="max-w-4xl mx-auto">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="w-full text-left focus-ring"
          aria-expanded={isOpen}
          aria-label={isOpen ? 'Impressum schließen' : 'Impressum öffnen'}
        >
          <h2 className="text-sm font-bold uppercase flex items-center justify-between">
            <span>Impressum</span>
            <span className="text-lg">{isOpen ? '−' : '+'}</span>
          </h2>
        </button>
        
        {isOpen && (
          <div className="text-xs space-y-2 mt-4 leading-relaxed">
            <div>
              <p className="font-bold">Pocket Service Digital e.U.</p>
              <p>Konstantin Michalek</p>
            </div>

            <div>
              <p>Klosterneuburger Gasse, 62,</p>
              <p>3400 Klosterneuburg, Österreich</p>
            </div>

            <div>
              <p><strong>Unternehmensgegenstand:</strong> Dienstleistungen in der automatischen Datenverarbeitung und Informationstechnik</p>
              <p><strong>UID-Nummer:</strong> ATU76469304 | <strong>GISA-Zahl:</strong> 38750779</p>
              <p><strong>Firmenbuchnummer:</strong> FN 550448 h | <strong>Firmenbuchgericht:</strong> Bezirksgericht Korneuburg</p>
              <p><strong>Firmensitz:</strong> 3400 Klosterneuburg</p>
            </div>

            <div>
              <p><strong>E-Mail:</strong> <a href="mailto:mail@pocket-service.com" className="underline hover:no-underline">mail@pocket-service.com</a></p>
            </div>

            <div>
              <p><strong>Berufsrecht:</strong> Gewerbeordnung: <a href="https://www.ris.bka.gv.at" target="_blank" rel="noopener noreferrer" className="underline hover:no-underline">www.ris.bka.gv.at</a></p>
            </div>

            <div>
              <p><strong>Aufsichtsbehörde/Gewerbebehörde:</strong> Bezirkshauptmannschaft Tulln – Außenstelle Klosterneuburg | <strong>Verleihungsstaat:</strong> Österreich</p>
            </div>
          </div>
        )}
      </div>
    </section>
  )
}
