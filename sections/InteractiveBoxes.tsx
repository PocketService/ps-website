'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

interface Box {
  id: string
  title: string
  icon: string
  color: string
  position: { x: number; y: number }
  size: { width: number; height: number }
  content: {
    title: string
    description: string
    features: string[]
    benefits: string[]
  }
}

const boxes: Box[] = [
  {
    id: 'services',
    title: 'Leistungen',
    icon: '🛠️',
    color: 'from-orange-400 to-red-500',
    position: { x: 10, y: 20 },
    size: { width: 300, height: 200 },
    content: {
      title: 'Unsere Leistungen',
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
    title: 'Prozess',
    icon: '⚙️',
    color: 'from-teal-400 to-cyan-500',
    position: { x: 60, y: 10 },
    size: { width: 250, height: 180 },
    content: {
      title: 'Unser Prozess',
      description: 'Drei klare Schritte führen dich von der ersten Analyse bis zur laufenden Betreuung deiner digitalen Infrastruktur.',
      features: [
        '1. Analysieren: Bedarf, Systeme, Ziele',
        '2. Implementieren: Setup, Migration, Schulung',
        '3. Betreuen: Monitoring, Updates, Weiterentwicklung'
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
    title: 'Über uns',
    icon: '🤝',
    color: 'from-purple-400 to-pink-500',
    position: { x: 20, y: 60 },
    size: { width: 280, height: 160 },
    content: {
      title: 'Über Pocket Service',
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
    title: 'Kontakt',
    icon: '📧',
    color: 'from-blue-400 to-indigo-500',
    position: { x: 70, y: 50 },
    size: { width: 220, height: 140 },
    content: {
      title: 'Kontakt aufnehmen',
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

export default function InteractiveBoxes() {
  const [selectedBox, setSelectedBox] = useState<string | null>(null)
  const [boxesState, setBoxesState] = useState(boxes)

  const handleBoxClick = (boxId: string) => {
    if (selectedBox === boxId) {
      // Reset to original positions
      setSelectedBox(null)
      setBoxesState(boxes)
    } else {
      // Move boxes to make space for selected box
      setSelectedBox(boxId)
      const updatedBoxes = boxesState.map(box => {
        if (box.id === boxId) {
          // Selected box moves to top-left
          return { ...box, position: { x: 5, y: 5 } }
        } else {
          // Other boxes move to the right side
          return { ...box, position: { x: 60, y: box.position.y } }
        }
      })
      setBoxesState(updatedBoxes)
    }
  }

  const selectedBoxData = boxes.find(box => box.id === selectedBox)

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 relative overflow-hidden p-8">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute top-20 left-20 w-32 h-32 bg-gradient-to-br from-orange-200 to-pink-200 rounded-full opacity-20"
          animate={{
            y: [0, -30, 0],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div
          className="absolute bottom-20 right-20 w-40 h-40 bg-gradient-to-br from-teal-200 to-blue-200 rounded-full opacity-20"
          animate={{
            y: [0, 30, 0],
            rotate: [360, 180, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      </div>

      {/* Header */}
      <div className="relative z-10 text-center mb-8">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="inline-flex items-center px-6 py-3 rounded-full bg-gradient-to-r from-orange-100 to-teal-100 text-gray-700 font-semibold mb-6"
        >
          <span className="w-2 h-2 bg-gradient-to-r from-orange-500 to-teal-500 rounded-full mr-3 animate-pulse"></span>
          Pocket Service
        </motion.div>
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-4xl md:text-6xl font-bold mb-4"
        >
          <span className="bg-gradient-to-r from-orange-500 via-teal-500 to-blue-500 bg-clip-text text-transparent">
            Digitale Ordnung
          </span>
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-xl text-gray-600"
        >
          für kleine Betriebe
        </motion.p>
      </div>

      {/* Interactive Boxes Container */}
      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="relative h-[600px]">
          {/* Boxes */}
          {boxesState.map((box) => (
            <motion.div
              key={box.id}
              className="absolute cursor-pointer"
              style={{
                left: `${box.position.x}%`,
                top: `${box.position.y}%`,
                width: `${box.size.width}px`,
                height: `${box.size.height}px`,
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
                delay: boxesState.indexOf(box) * 0.1
              }}
              whileHover={{ 
                scale: 1.05,
                rotate: selectedBox === box.id ? 0 : 5
              }}
              whileTap={{ scale: 0.95 }}
              onClick={() => handleBoxClick(box.id)}
            >
              <div className={`w-full h-full bg-gradient-to-br ${box.color} rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 flex flex-col items-center justify-center text-white relative overflow-hidden`}>
                {/* Background Pattern */}
                <div className="absolute inset-0 bg-white bg-opacity-10"></div>
                
                <div className="relative z-10 text-center">
                  <div className="text-4xl mb-3">{box.icon}</div>
                  <h3 className="text-xl font-bold">{box.title}</h3>
                </div>

                {/* Hover Effect */}
                <motion.div
                  className="absolute inset-0 bg-white bg-opacity-20 rounded-2xl"
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                  transition={{ duration: 0.3 }}
                />
              </div>
            </motion.div>
          ))}

          {/* Detail Content Area */}
          <AnimatePresence>
            {selectedBox && selectedBoxData && (
              <motion.div
                key={selectedBox}
                initial={{ opacity: 0, x: -100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -100 }}
                transition={{ duration: 0.5 }}
                className="absolute left-8 top-8 right-8 bottom-8 bg-white rounded-3xl shadow-2xl p-8 overflow-y-auto"
              >
                <div className="max-w-4xl">
                  {/* Header */}
                  <div className="flex items-center mb-6">
                    <div className="text-4xl mr-4">{selectedBoxData.icon}</div>
                    <div>
                      <h2 className="text-3xl font-bold text-gray-900 mb-2">
                        {selectedBoxData.content.title}
                      </h2>
                      <p className="text-gray-600">
                        {selectedBoxData.content.description}
                      </p>
                    </div>
                  </div>

                  {/* Content Grid */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {/* Features */}
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-4">Was wir tun:</h3>
                      <ul className="space-y-3">
                        {selectedBoxData.content.features.map((feature, index) => (
                          <li key={index} className="flex items-start">
                            <svg className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                            </svg>
                            <span className="text-gray-700">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Benefits */}
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-4">Deine Vorteile:</h3>
                      <ul className="space-y-3">
                        {selectedBoxData.content.benefits.map((benefit, index) => (
                          <li key={index} className="flex items-start">
                            <svg className="w-5 h-5 text-blue-500 mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                            </svg>
                            <span className="text-gray-700">{benefit}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* CTA */}
                  <div className="mt-8 pt-6 border-t border-gray-200">
                    <button
                      onClick={() => {
                        if (selectedBox === 'contact') {
                          window.location.href = 'mailto:mail@pocket-service.com'
                        } else {
                          window.location.href = 'mailto:mail@pocket-service.com?subject=Beratung zu ' + selectedBoxData.content.title
                        }
                      }}
                      className={`px-8 py-4 rounded-full font-semibold text-white transition-all duration-300 hover:scale-105 focus-ring bg-gradient-to-r ${selectedBoxData.color}`}
                    >
                      {selectedBox === 'contact' ? 'E-Mail senden' : 'Beratung anfragen'}
                    </button>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </div>
  )
}
