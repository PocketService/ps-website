'use client'

import { motion } from 'framer-motion'
import { fadeInUp, fadeInUpStagger, fadeInUpChild } from '@/lib/motion'

export default function Hero() {
  const handlePrimaryCTA = () => {
    window.location.href = 'mailto:mail@pocket-service.com?subject=Erstgespräch'
  }

  const handleSecondaryCTA = () => {
    const element = document.getElementById('leistungen')
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center section relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-br from-orange-400 to-pink-500 rounded-full opacity-20 floating"
          animate={{
            x: [0, 100, 0],
            y: [0, -50, 0],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }}
        />
        <motion.div
          className="absolute top-40 right-20 w-24 h-24 bg-gradient-to-br from-teal-400 to-cyan-500 rounded-full opacity-20 floating"
          animate={{
            x: [0, -80, 0],
            y: [0, 60, 0],
            rotate: [0, -180, -360],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "linear"
          }}
        />
        <motion.div
          className="absolute bottom-40 left-1/4 w-40 h-40 bg-gradient-to-br from-blue-400 to-purple-500 rounded-full opacity-15 floating"
          animate={{
            x: [0, 120, 0],
            y: [0, -80, 0],
            rotate: [0, 90, 180, 270, 360],
          }}
          transition={{
            duration: 30,
            repeat: Infinity,
            ease: "linear"
          }}
        />
      </div>

      <div className="section-content text-center relative z-10">
        <motion.div
          variants={fadeInUpStagger}
          initial="initial"
          animate="animate"
          className="max-w-5xl mx-auto"
        >
          {/* Badge */}
          <motion.div
            variants={fadeInUpChild}
            className="inline-flex items-center px-6 py-3 rounded-full bg-gradient-to-r from-orange-100 to-teal-100 text-gray-700 font-semibold mb-8"
          >
            <span className="w-2 h-2 bg-gradient-to-r from-orange-500 to-teal-500 rounded-full mr-3 animate-pulse"></span>
            Digitalisierung für Kleinbetriebe
          </motion.div>

          <motion.h1
            variants={fadeInUpChild}
            className="text-display mb-8"
          >
            Digitale Ordnung für kleine Betriebe.
          </motion.h1>

          <motion.p
            variants={fadeInUpChild}
            className="text-subheading text-gray-600 mb-12 max-w-2xl mx-auto leading-relaxed"
          >
            Windows-Verwaltung, Cloud-Einrichtung, CRM & laufende Betreuung.
          </motion.p>

          <motion.div
            variants={fadeInUpChild}
            className="flex flex-col sm:flex-row gap-6 justify-center items-center"
          >
            <button
              onClick={handlePrimaryCTA}
              className="btn-primary group"
            >
              <span className="flex items-center">
                Kostenloses Erstgespräch
                <svg className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </span>
            </button>
            <button
              onClick={handleSecondaryCTA}
              className="btn-secondary group"
            >
              <span className="flex items-center">
                Mehr erfahren
                <svg className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </span>
            </button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}