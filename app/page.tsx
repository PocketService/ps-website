'use client'

import { useState, useEffect } from 'react'
import Impressum from '@/components/Impressum'
import Ballpit from '@/components/Ballpit'

export default function Home() {
  const [ballCount, setBallCount] = useState(400)

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
      {/* Ballpit Background */}
      <div style={{position: 'relative', overflow: 'hidden', flex: '1', height: 'calc(100vh - 80px)', minHeight: 'calc(100vh - 80px)', width: '100%'}}>
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
            friction={0.99}
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

      {/* Impressum Section */}
      <Impressum />
    </main>
  )
}
