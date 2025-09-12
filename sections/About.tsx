'use client'

import { motion } from 'framer-motion'
import { fadeInUp, fadeInUpStagger, fadeInUpChild } from '@/lib/motion'

export default function About() {
  return (
    <section id="ueber-uns" className="min-h-screen flex items-center justify-center section relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute top-20 left-20 w-40 h-40 bg-gradient-to-br from-purple-200 to-pink-200 rounded-full opacity-20"
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
          className="absolute bottom-20 right-20 w-32 h-32 bg-gradient-to-br from-teal-200 to-blue-200 rounded-full opacity-20"
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
            <div className="inline-flex items-center px-6 py-3 rounded-full bg-gradient-to-r from-purple-100 to-pink-100 text-gray-700 font-semibold mb-6">
              <span className="w-2 h-2 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full mr-3"></span>
              Über uns
            </div>
            <h2 className="text-heading text-gray-900 mb-6">
              Dein Partner für digitale Transformation
            </h2>
            <p className="text-body text-gray-600 max-w-3xl mx-auto">
              Wir sind Pocket Service – ein spezialisiertes Team für die Digitalisierung von Kleinbetrieben. 
              Unser Fokus liegt auf praktischen, wartbaren Lösungen, die dein Business voranbringen.
            </p>
          </motion.div>

          <motion.div
            variants={fadeInUpStagger}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, margin: '-100px' }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {/* Werte */}
            <motion.div
              variants={fadeInUpChild}
              className="card group hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
            >
              <div className="text-4xl mb-4">🎯</div>
              <h3 className="text-subheading text-gray-900 mb-4">Fokus auf Kleinbetriebe</h3>
              <p className="text-body text-gray-600 mb-6">
                Wir verstehen die spezifischen Herausforderungen kleiner Unternehmen und entwickeln maßgeschneiderte Lösungen.
              </p>
              <div className="text-sm text-gray-500">
                <div className="mb-2">• Maßgeschneiderte Lösungen</div>
                <div className="mb-2">• Verständnis für KMU-Bedürfnisse</div>
                <div>• Kosteneffiziente Ansätze</div>
              </div>
            </motion.div>

            {/* Expertise */}
            <motion.div
              variants={fadeInUpChild}
              className="card group hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
            >
              <div className="text-4xl mb-4">⚡</div>
              <h3 className="text-subheading text-gray-900 mb-4">Schnelle Umsetzung</h3>
              <p className="text-body text-gray-600 mb-6">
                Wir setzen auf bewährte Technologien und strukturierte Prozesse für eine schnelle, reibungslose Implementierung.
              </p>
              <div className="text-sm text-gray-500">
                <div className="mb-2">• Bewährte Technologien</div>
                <div className="mb-2">• Strukturierte Prozesse</div>
                <div>• Minimale Geschäftsunterbrechung</div>
              </div>
            </motion.div>

            {/* Support */}
            <motion.div
              variants={fadeInUpChild}
              className="card group hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
            >
              <div className="text-4xl mb-4">🤝</div>
              <h3 className="text-subheading text-gray-900 mb-4">Laufende Betreuung</h3>
              <p className="text-body text-gray-600 mb-6">
                Unser Service endet nicht mit der Implementierung. Wir begleiten dich kontinuierlich bei der Weiterentwicklung.
              </p>
              <div className="text-sm text-gray-500">
                <div className="mb-2">• Kontinuierlicher Support</div>
                <div className="mb-2">• Proaktive Wartung</div>
                <div>• Langfristige Partnerschaft</div>
              </div>
            </motion.div>

            {/* Sicherheit */}
            <motion.div
              variants={fadeInUpChild}
              className="card group hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
            >
              <div className="text-4xl mb-4">🔒</div>
              <h3 className="text-subheading text-gray-900 mb-4">Sicherheit & Compliance</h3>
              <p className="text-body text-gray-600 mb-6">
                Datenschutz und Sicherheit stehen bei uns an erster Stelle. Wir implementieren höchste Sicherheitsstandards.
              </p>
              <div className="text-sm text-gray-500">
                <div className="mb-2">• DSGVO-konform</div>
                <div className="mb-2">• Höchste Sicherheitsstandards</div>
                <div>• Regelmäßige Audits</div>
              </div>
            </motion.div>

            {/* Flexibilität */}
            <motion.div
              variants={fadeInUpChild}
              className="card group hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
            >
              <div className="text-4xl mb-4">🔄</div>
              <h3 className="text-subheading text-gray-900 mb-4">Skalierbare Lösungen</h3>
              <p className="text-body text-gray-600 mb-6">
                Unsere Lösungen wachsen mit deinem Unternehmen mit. Keine teuren Neuanschaffungen bei Expansion.
              </p>
              <div className="text-sm text-gray-500">
                <div className="mb-2">• Mitwachsende Infrastruktur</div>
                <div className="mb-2">• Flexible Anpassungen</div>
                <div>• Kosteneffiziente Skalierung</div>
              </div>
            </motion.div>

            {/* Transparenz */}
            <motion.div
              variants={fadeInUpChild}
              className="card group hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
            >
              <div className="text-4xl mb-4">📊</div>
              <h3 className="text-subheading text-gray-900 mb-4">Transparente Kommunikation</h3>
              <p className="text-body text-gray-600 mb-6">
                Du bleibst immer informiert über den Fortschritt. Regelmäßige Updates und klare Kommunikation sind unser Standard.
              </p>
              <div className="text-sm text-gray-500">
                <div className="mb-2">• Regelmäßige Updates</div>
                <div className="mb-2">• Klare Kommunikation</div>
                <div>• Transparente Abrechnung</div>
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
              className="btn-secondary group"
            >
              <span className="flex items-center">
                Lerne uns kennen
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
