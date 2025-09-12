'use client'

import { motion } from 'framer-motion'
import { fadeInUp, fadeInUpStagger, fadeInUpChild } from '@/lib/motion'

export default function Services() {
  return (
    <section id="leistungen" className="min-h-screen flex items-center justify-center section relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute top-20 right-20 w-40 h-40 bg-gradient-to-br from-orange-200 to-pink-200 rounded-full opacity-20"
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }}
        />
        <motion.div
          className="absolute bottom-20 left-20 w-32 h-32 bg-gradient-to-br from-teal-200 to-blue-200 rounded-full opacity-20"
          animate={{
            scale: [1, 0.8, 1],
            rotate: [360, 180, 0],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "linear"
          }}
        />
      </div>

      <div className="section-content relative z-10">
        <motion.div
          variants={fadeInUpStagger}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, margin: '-100px' }}
          className="max-w-6xl mx-auto"
        >
          <motion.div
            variants={fadeInUpChild}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center px-6 py-3 rounded-full bg-gradient-to-r from-orange-100 to-teal-100 text-gray-700 font-semibold mb-6">
              <span className="w-2 h-2 bg-gradient-to-r from-orange-500 to-teal-500 rounded-full mr-3"></span>
              Unsere Leistungen
            </div>
            <h2 className="text-heading text-gray-900 mb-6">
              Von der Analyse bis zur laufenden Betreuung
            </h2>
            <p className="text-body text-gray-600 max-w-3xl mx-auto">
              Wir begleiten dich durch die komplette digitale Transformation – strukturiert, transparent und auf deine Bedürfnisse zugeschnitten.
            </p>
          </motion.div>

          <motion.div
            variants={fadeInUpStagger}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, margin: '-100px' }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {/* Windows-Verwaltung */}
            <motion.div
              variants={fadeInUpChild}
              className="card group hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
            >
              <div className="text-4xl mb-4">🖥️</div>
              <h3 className="text-subheading text-gray-900 mb-4">Windows-Verwaltung</h3>
              <p className="text-body text-gray-600 mb-6">
                Benutzer, Geräte, Updates & Policies sauber geregelt. Zentrale Verwaltung für höhere Sicherheit und reduzierte Ausfallzeiten.
              </p>
              <div className="flex items-center text-sm text-gray-500">
                <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                Automatisierte Wartungsprozesse
              </div>
            </motion.div>

            {/* Cloud-Einrichtung */}
            <motion.div
              variants={fadeInUpChild}
              className="card group hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
            >
              <div className="text-4xl mb-4">☁️</div>
              <h3 className="text-subheading text-gray-900 mb-4">Cloud-Einrichtung</h3>
              <p className="text-body text-gray-600 mb-6">
                Microsoft 365/Azure: Mail, Files, Teams strukturiert & sicher. Zugriff von überall mit automatischen Backups.
              </p>
              <div className="flex items-center text-sm text-gray-500">
                <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                Skalierbare Infrastruktur
              </div>
            </motion.div>

            {/* CRM-Implementierung */}
            <motion.div
              variants={fadeInUpChild}
              className="card group hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
            >
              <div className="text-4xl mb-4">📊</div>
              <h3 className="text-subheading text-gray-900 mb-4">CRM-Implementierung</h3>
              <p className="text-body text-gray-600 mb-6">
                Auswahl, Setup, Datenmigration & Workflows. Bessere Kundenbeziehungen durch systematische Datenverwaltung.
              </p>
              <div className="flex items-center text-sm text-gray-500">
                <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                Automatisierte Verkaufsprozesse
              </div>
            </motion.div>

            {/* Projektmanagement */}
            <motion.div
              variants={fadeInUpChild}
              className="card group hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
            >
              <div className="text-4xl mb-4">📋</div>
              <h3 className="text-subheading text-gray-900 mb-4">Projektmanagement</h3>
              <p className="text-body text-gray-600 mb-6">
                Evaluierung, Einführung, Vorlagen & Schulung. Transparente Projektfortschritte und bessere Teamkoordination.
              </p>
              <div className="flex items-center text-sm text-gray-500">
                <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                Reduzierte Projektrisiken
              </div>
            </motion.div>

            {/* Integrationen */}
            <motion.div
              variants={fadeInUpChild}
              className="card group hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
            >
              <div className="text-4xl mb-4">🔗</div>
              <h3 className="text-subheading text-gray-900 mb-4">Integrationen</h3>
              <p className="text-body text-gray-600 mb-6">
                APIs, Schnittstellen, Single Sign-On. Eliminierung von Doppelarbeit durch nahtlose Arbeitsabläufe.
              </p>
              <div className="flex items-center text-sm text-gray-500">
                <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                Höhere Produktivität
              </div>
            </motion.div>

            {/* Laufende Betreuung */}
            <motion.div
              variants={fadeInUpChild}
              className="card group hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
            >
              <div className="text-4xl mb-4">🛡️</div>
              <h3 className="text-subheading text-gray-900 mb-4">Laufende Betreuung</h3>
              <p className="text-body text-gray-600 mb-6">
                Monitoring, Security-Härtung, Support. Minimale Ausfallzeiten durch proaktive Problemlösung.
              </p>
              <div className="flex items-center text-sm text-gray-500">
                <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                24/7 System-Monitoring
              </div>
            </motion.div>
          </motion.div>

          {/* Bottom CTA */}
          <motion.div
            variants={fadeInUpChild}
            className="text-center mt-16"
          >
            <button
              onClick={() => {
                const element = document.getElementById('kontakt')
                if (element) element.scrollIntoView({ behavior: 'smooth' })
              }}
              className="btn-tertiary group"
            >
              <span className="flex items-center">
                Jetzt unverbindlich beraten lassen
                <svg className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </span>
            </button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}