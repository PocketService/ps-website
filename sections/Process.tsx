'use client'

import { motion } from 'framer-motion'
import { fadeInUp, fadeInUpStagger, fadeInUpChild } from '@/lib/motion'

export default function Process() {
  return (
    <section id="prozess" className="min-h-screen flex items-center justify-center section bg-gradient-to-br from-gray-50 to-gray-100 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute top-20 right-10 w-64 h-64 bg-gradient-to-br from-orange-200 to-teal-200 rounded-full opacity-20"
          animate={{
            rotate: [0, 360],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }}
        />
        <motion.div
          className="absolute bottom-20 left-10 w-48 h-48 bg-gradient-to-br from-blue-200 to-purple-200 rounded-full opacity-20"
          animate={{
            rotate: [360, 0],
            scale: [1, 0.9, 1],
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
            <div className="inline-flex items-center px-6 py-3 rounded-full bg-gradient-to-r from-teal-100 to-blue-100 text-gray-700 font-semibold mb-6">
              <span className="w-2 h-2 bg-gradient-to-r from-teal-500 to-blue-500 rounded-full mr-3"></span>
              Unser Prozess
            </div>
            <h2 className="text-heading text-gray-900 mb-6">
              Strukturiert, transparent und auf deine Bedürfnisse zugeschnitten
            </h2>
            <p className="text-body text-gray-600 max-w-3xl mx-auto">
              Drei klare Schritte führen dich von der ersten Analyse bis zur laufenden Betreuung deiner digitalen Infrastruktur.
            </p>
          </motion.div>

          <motion.div
            variants={fadeInUpStagger}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, margin: '-100px' }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            {/* Schritt 1: Analysieren */}
            <motion.div
              variants={fadeInUpChild}
              className="text-center relative"
            >
              {/* Connection Line */}
              <div className="hidden md:block absolute top-16 left-full w-full h-0.5 bg-gradient-to-r from-gray-300 to-transparent transform translate-x-4"></div>

              <div className="relative p-8 rounded-3xl bg-white border border-gray-200 hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                {/* Step Number */}
                <div className="absolute -top-4 -right-4 w-12 h-12 bg-white border-4 border-gray-100 rounded-full flex items-center justify-center text-lg font-bold text-gray-600 shadow-lg">
                  01
                </div>

                {/* Icon */}
                <div className="w-20 h-20 bg-gradient-to-br from-orange-400 to-red-500 text-white rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg">
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                  </svg>
                </div>

                <h3 className="text-subheading text-gray-900 mb-4">
                  Analysieren
                </h3>
                <p className="text-body text-gray-600 mb-6">
                  Bedarf, Systeme, Ziele.
                </p>
                <div className="text-sm text-gray-500">
                  <div className="mb-2">• Bestandsaufnahme</div>
                  <div className="mb-2">• Schwachstellen-Analyse</div>
                  <div className="mb-2">• Zieldefinition</div>
                  <div>• Projektplanung</div>
                </div>
              </div>
            </motion.div>

            {/* Schritt 2: Implementieren */}
            <motion.div
              variants={fadeInUpChild}
              className="text-center relative"
            >
              {/* Connection Line */}
              <div className="hidden md:block absolute top-16 left-full w-full h-0.5 bg-gradient-to-r from-gray-300 to-transparent transform translate-x-4"></div>

              <div className="relative p-8 rounded-3xl bg-white border border-gray-200 hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                {/* Step Number */}
                <div className="absolute -top-4 -right-4 w-12 h-12 bg-white border-4 border-gray-100 rounded-full flex items-center justify-center text-lg font-bold text-gray-600 shadow-lg">
                  02
                </div>

                {/* Icon */}
                <div className="w-20 h-20 bg-gradient-to-br from-teal-400 to-cyan-500 text-white rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg">
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>

                <h3 className="text-subheading text-gray-900 mb-4">
                  Implementieren
                </h3>
                <p className="text-body text-gray-600 mb-6">
                  Setup, Migration, Schulung.
                </p>
                <div className="text-sm text-gray-500">
                  <div className="mb-2">• System-Setup</div>
                  <div className="mb-2">• Datenmigration</div>
                  <div className="mb-2">• Integration</div>
                  <div>• Benutzer-Schulung</div>
                </div>
              </div>
            </motion.div>

            {/* Schritt 3: Betreuen */}
            <motion.div
              variants={fadeInUpChild}
              className="text-center relative"
            >
              <div className="relative p-8 rounded-3xl bg-white border border-gray-200 hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                {/* Step Number */}
                <div className="absolute -top-4 -right-4 w-12 h-12 bg-white border-4 border-gray-100 rounded-full flex items-center justify-center text-lg font-bold text-gray-600 shadow-lg">
                  03
                </div>

                {/* Icon */}
                <div className="w-20 h-20 bg-gradient-to-br from-blue-400 to-purple-500 text-white rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg">
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>

                <h3 className="text-subheading text-gray-900 mb-4">
                  Betreuen
                </h3>
                <p className="text-body text-gray-600 mb-6">
                  Monitoring, Updates, Weiterentwicklung.
                </p>
                <div className="text-sm text-gray-500">
                  <div className="mb-2">• 24/7 Monitoring</div>
                  <div className="mb-2">• Sicherheits-Updates</div>
                  <div className="mb-2">• Performance-Optimierung</div>
                  <div>• Kontinuierliche Verbesserung</div>
                </div>
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
              className="btn-primary group"
            >
              <span className="flex items-center">
                Jetzt starten
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