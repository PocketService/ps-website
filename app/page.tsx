'use client'

import { useState, useEffect } from 'react'
import Modal from '@/components/Modal'
import Ballpit from '@/components/Ballpit'

export default function Home() {
  const [ballCount, setBallCount] = useState(400)
  const [isImpressumOpen, setIsImpressumOpen] = useState(false)

  useEffect(() => {
    const updateBallCount = () => {
      const width = window.innerWidth
      if (width < 768) {
        // Mobile
        setBallCount(160)
      } else if (width < 1024) {
        // Tablet
        setBallCount(222)
      } else {
        // Desktop
        setBallCount(330)
      }
    }

    updateBallCount()
    window.addEventListener('resize', updateBallCount)
    return () => window.removeEventListener('resize', updateBallCount)
  }, [])

  return (
    <main className="min-h-screen flex flex-col">
      {/* Impressum Button */}
      <button
        onClick={() => setIsImpressumOpen(true)}
        className="fixed top-4 right-4 z-50 px-4 py-2 bg-white border-2 border-black text-black text-xs font-bold uppercase tracking-wider hover:bg-black hover:text-white transition-colors focus-ring"
        style={{ boxShadow: '4px 4px 0px var(--fg)' }}
        aria-label="Impressum öffnen"
      >
        Impressum
      </button>

      {/* Impressum Modal */}
      <Modal
        isOpen={isImpressumOpen}
        onClose={() => setIsImpressumOpen(false)}
        title="Impressum"
      >
        <div className="text-sm space-y-4 leading-relaxed">
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
      </Modal>

      {/* Ballpit Background */}
      <div style={{position: 'relative', overflow: 'hidden', flex: '1', height: '100vh', minHeight: '100vh', width: '100%'}}>
        <div style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          zIndex: 0,
          fontSize: 'clamp(3rem, 8vw, 8rem)',
          fontWeight: 900,
          textTransform: 'uppercase',
          letterSpacing: '-0.05em',
          color: 'var(--fg)',
          pointerEvents: 'none',
          textAlign: 'center',
        }}>
          Work in Progress
        </div>
        <div style={{position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, zIndex: 1, width: '100%', height: '100%'}}>
          <Ballpit
            count={ballCount}
            gravity={0.0}
            friction={1}
            wallBounce={1}
            followCursor={false}
            colors={[
              0xE40303, // Rot 
              0xFF8C00, // Orange 
              0xFFED00, // Gelb 
              0x008026, // Grün 
              0x24408E, // Blau 
              0x732982  // Violett 
            ]}
          />
        </div>
      </div>
    </main>
  )
}
