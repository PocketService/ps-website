'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

interface GridElement {
  id: string
  title: string
  icon: string
  position: { x: number; y: number }
  size: { width: number; height: number }
  content: {
    title: string
    description: string
    features: string[]
    benefits: string[]
  }
}

const gridElements: GridElement[] = [
  {
    id: 'services',
    title: 'LEISTUNGEN',
    icon: '⚙',
    position: { x: 5, y: 10 },
    size: { width: 280, height: 180 },
    content: {
      title: 'UNSERE LEISTUNGEN',
      description: 'Von der Analyse bis zur laufenden Betreuung begleiten wir dich durch die komplette digitale Transformation.',
      features: [
        'Windows-Verwaltung & Benutzer-Management',
        'Cloud-Einrichtung (Microsoft 365/Azure)',
        'CRM-Implementierung & Datenmigration',
        'Projektmanagement-Tools & Workflows',
        'Integrationen & Automationen',
        '24/7 Monitoring & Support'
      ],
      benefits: [
        'Höhere Sicherheit durch zentrale Verwaltung',
        'Reduzierte Ausfallzeiten',
        'Automatisierte Wartungsprozesse',
        'Skalierbare Infrastruktur'
      ]
    }
  },
  {
    id: 'process',
    title: 'PROZESS',
    icon: '▣',
    position: { x: 65, y: 5 },
    size: { width: 250, height: 160 },
    content: {
      title: 'UNSER PROZESS',
      description: 'Drei klare Schritte führen dich von der ersten Analyse bis zur laufenden Betreuung deiner digitalen Infrastruktur.',
      features: [
        '1. ANALYSIEREN: Bedarf, Systeme, Ziele',
        '2. IMPLEMENTIEREN: Setup, Migration, Schulung',
        '3. BETREUEN: Monitoring, Updates, Weiterentwicklung'
      ],
      benefits: [
        'Strukturierte Herangehensweise',
        'Transparente Kommunikation',
        'Minimale Geschäftsunterbrechung',
        'Kontinuierliche Optimierung'
      ]
    }
  },
  {
    id: 'about',
    title: 'ÜBER UNS',
    icon: '◉',
    position: { x: 10, y: 60 },
    size: { width: 300, height: 140 },
    content: {
      title: 'ÜBER POCKET SERVICE',
      description: 'Wir sind dein Partner für digitale Transformation. Unser Fokus liegt auf praktischen, wartbaren Lösungen für Kleinbetriebe.',
      features: [
        'Spezialisiert auf Kleinbetriebe',
        'Schnelle Umsetzung mit bewährten Technologien',
        'Laufende Betreuung & Support',
        'Sicherheit & Compliance im Fokus'
      ],
      benefits: [
        'Maßgeschneiderte Lösungen',
        'Kosteneffiziente Ansätze',
        'Langfristige Partnerschaft',
        'Transparente Kommunikation'
      ]
    }
  },
  {
    id: 'contact',
    title: 'KONTAKT',
    icon: '◈',
    position: { x: 70, y: 55 },
    size: { width: 220, height: 120 },
    content: {
      title: 'KONTAKT AUFNEHMEN',
      description: 'Bereit für den nächsten Schritt? Wir freuen uns auf deine Nachricht und besprechen gerne deine Anforderungen.',
      features: [
        'Unverbindliche Beratung',
        'Antwort innerhalb von 24 Stunden',
        'Kostenloses Erstgespräch',
        'Maßgeschneiderte Lösungen'
      ],
      benefits: [
        'Schnelle Reaktionszeiten',
        'Professionelle Beratung',
        'Transparente Kommunikation',
        'Langfristige Partnerschaft'
      ]
    }
  }
]

export default function BrutalistGrid() {
  const [selectedElement, setSelectedElement] = useState<string | null>(null)
  const [elementsState, setElementsState] = useState(gridElements)

  const handleElementClick = (elementId: string) => {
    if (selectedElement === elementId) {
      // Reset to original positions
      setSelectedElement(null)
      setElementsState(gridElements)
    } else {
      // Move elements to make space for selected element
      setSelectedElement(elementId)
      const updatedElements = elementsState.map(element => {
        if (element.id === elementId) {
          // Selected element moves to top-left
          return { ...element, position: { x: 5, y: 5 } }
        } else {
          // Other elements move to the right side
          return { ...element, position: { x: 60, y: element.position.y } }
        }
      })
      setElementsState(updatedElements)
    }
  }

  const selectedElementData = gridElements.find(element => element.id === selectedElement)

  return (
    <div className="min-h-screen bg-white relative overflow-hidden p-4 md:p-8">
      {/* Header */}
      <div className="relative z-10 text-center mb-8 md:mb-12">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-6 md:mb-8"
        >
          <div className="inline-block px-4 py-2 md:px-6 md:py-3 border-4 border-black bg-white mb-4 md:mb-6">
            <span className="text-xs md:text-sm font-bold uppercase tracking-wider">POCKET SERVICE</span>
          </div>
        </motion.div>
        
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-display mb-3 md:mb-4"
        >
          DIGITALE ORDNUNG
        </motion.h1>
        
        <motion.p
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-subheading"
        >
          FÜR KLEINE BETRIEBE
        </motion.p>
      </div>

      {/* Interactive Grid Elements Container */}
      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Mobile Grid Layout */}
        <div className="block md:hidden">
          <div className="grid grid-cols-2 gap-4">
            {elementsState.map((element) => (
              <motion.div
                key={element.id}
                className={`grid-element ${selectedElement === element.id ? 'selected' : ''}`}
                initial={{ scale: 0, rotate: -180 }}
                animate={{ 
                  scale: 1, 
                  rotate: 0,
                  x: 0,
                  y: 0
                }}
                transition={{ 
                  type: "spring", 
                  stiffness: 300, 
                  damping: 30,
                  delay: elementsState.indexOf(element) * 0.1
                }}
                whileTap={{ scale: 0.95 }}
                onClick={() => handleElementClick(element.id)}
              >
                <div className="w-full h-32 flex flex-col items-center justify-center text-center p-4">
                  <div className="text-2xl mb-2 font-bold">{element.icon}</div>
                  <h3 className="text-xs font-bold uppercase tracking-wider">{element.title}</h3>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Desktop Grid Layout */}
        <div className="hidden md:block relative h-[600px]">
          {/* Grid Elements */}
          {elementsState.map((element) => (
            <motion.div
              key={element.id}
              className={`absolute grid-element ${selectedElement === element.id ? 'selected' : ''}`}
              style={{
                left: `${element.position.x}%`,
                top: `${element.position.y}%`,
                width: `${element.size.width}px`,
                height: `${element.size.height}px`,
              }}
              initial={{ scale: 0, rotate: -180 }}
              animate={{ 
                scale: 1, 
                rotate: 0,
                x: 0,
                y: 0
              }}
              transition={{ 
                type: "spring", 
                stiffness: 300, 
                damping: 30,
                delay: elementsState.indexOf(element) * 0.1
              }}
              whileHover={{ 
                scale: 1.02,
                rotate: selectedElement === element.id ? 0 : 2
              }}
              whileTap={{ scale: 0.98 }}
              onClick={() => handleElementClick(element.id)}
            >
              <div className="w-full h-full flex flex-col items-center justify-center text-center p-6">
                <div className="text-4xl mb-4 font-bold">{element.icon}</div>
                <h3 className="text-sm font-bold uppercase tracking-wider">{element.title}</h3>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Detail Content Area */}
        <AnimatePresence>
          {selectedElement && selectedElementData && (
            <motion.div
              key={selectedElement}
              initial={{ opacity: 0, x: -100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.5 }}
              className="fixed inset-4 md:absolute md:left-8 md:top-8 md:right-8 md:bottom-8 border-4 border-black bg-white overflow-hidden z-50"
              style={{ boxShadow: '20px 20px 0px #000000' }}
            >
              {/* Modal Header */}
              <div className="border-b-4 border-black bg-black text-white p-4 md:p-6 flex items-center justify-between">
                <div className="flex items-center">
                  <div className="text-2xl md:text-3xl mr-3 md:mr-4 font-bold">{selectedElementData.icon}</div>
                  <h2 className="text-lg md:text-heading">
                    {selectedElementData.content.title}
                  </h2>
                </div>
                
                {/* Close Button */}
                <button
                  onClick={() => {
                    setSelectedElement(null)
                    setElementsState(gridElements)
                  }}
                  className="w-10 h-10 md:w-12 md:h-12 border-4 border-white bg-white text-black flex items-center justify-center font-bold text-lg md:text-xl hover:bg-black hover:text-white hover:border-black transition-all duration-200"
                  style={{ boxShadow: '4px 4px 0px #000000' }}
                >
                  ×
                </button>
              </div>

              {/* Modal Content */}
              <div className="p-4 md:p-8 overflow-y-auto h-full">
                <div className="max-w-4xl">
                  {/* Description */}
                  <div className="mb-6 md:mb-8">
                    <p className="text-sm md:text-body">
                      {selectedElementData.content.description}
                    </p>
                  </div>

                  {/* Content Grid */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
                    {/* Features */}
                    <div>
                      <h3 className="text-sm md:text-subheading mb-4 md:mb-6">WAS WIR TUN:</h3>
                      <ul className="space-y-3 md:space-y-4">
                        {selectedElementData.content.features.map((feature, index) => (
                          <li key={index} className="flex items-start">
                            <span className="text-lg md:text-2xl mr-3 md:mr-4 font-bold">■</span>
                            <span className="text-sm md:text-body">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Benefits */}
                    <div>
                      <h3 className="text-sm md:text-subheading mb-4 md:mb-6">DEINE VORTEILE:</h3>
                      <ul className="space-y-3 md:space-y-4">
                        {selectedElementData.content.benefits.map((benefit, index) => (
                          <li key={index} className="flex items-start">
                            <span className="text-lg md:text-2xl mr-3 md:mr-4 font-bold">▲</span>
                            <span className="text-sm md:text-body">{benefit}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* CTA */}
                  <div className="mt-8 md:mt-12 pt-6 md:pt-8 border-t-4 border-black">
                    <button
                      onClick={() => {
                        if (selectedElement === 'contact') {
                          window.location.href = 'mailto:mail@pocket-service.com'
                        } else {
                          window.location.href = 'mailto:mail@pocket-service.com?subject=Beratung zu ' + selectedElementData.content.title
                        }
                      }}
                      className="btn-primary w-full md:w-auto text-sm md:text-base px-6 py-3 md:px-8 md:py-4"
                    >
                      {selectedElement === 'contact' ? 'E-MAIL SENDEN' : 'BERATUNG ANFRAGEN'}
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  )
}