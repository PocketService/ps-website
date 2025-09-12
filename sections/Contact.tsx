'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { fadeInUp, fadeInUpStagger, fadeInUpChild } from '@/lib/motion'
import Modal from '@/components/Modal'
import { companyData } from '@/lib/companyData'

export default function Contact() {
  const [isImpressumOpen, setIsImpressumOpen] = useState(false)
  const [isDatenschutzOpen, setIsDatenschutzOpen] = useState(false)

  const handleContactClick = () => {
    window.location.href = 'mailto:mail@pocket-service.com'
  }

  const currentYear = new Date().getFullYear()

  return (
    <>
      <section id="kontakt" className="min-h-screen flex items-center justify-center section bg-gradient-to-br from-gray-50 to-gray-100 relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <motion.div
            className="absolute top-20 right-20 w-40 h-40 bg-gradient-to-br from-teal-200 to-blue-200 rounded-full opacity-20"
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
            className="absolute bottom-20 left-20 w-32 h-32 bg-gradient-to-br from-orange-200 to-pink-200 rounded-full opacity-20"
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
            className="max-w-4xl mx-auto text-center"
          >
            <motion.div
              variants={fadeInUpChild}
              className="inline-flex items-center px-6 py-3 rounded-full bg-gradient-to-r from-teal-100 to-blue-100 text-gray-700 font-semibold mb-8"
            >
              <span className="w-2 h-2 bg-gradient-to-r from-teal-500 to-blue-500 rounded-full mr-3"></span>
              Kontakt
            </motion.div>

            <motion.h2
              variants={fadeInUpChild}
              className="text-heading text-gray-900 mb-8"
            >
              Lass uns sprechen – unverbindlich.
            </motion.h2>

            <motion.p
              variants={fadeInUpChild}
              className="text-body text-gray-600 mb-12 max-w-3xl mx-auto"
            >
              Bereit für den nächsten Schritt? Wir freuen uns auf deine Nachricht und besprechen gerne, wie wir dein Unternehmen digitalisieren können. Antwort innerhalb von 24 Stunden garantiert.
            </motion.p>

            <motion.div
              variants={fadeInUpChild}
              className="space-y-8"
            >
              <button
                onClick={handleContactClick}
                className="btn-primary group text-lg px-12 py-6"
              >
                <span className="flex items-center">
                  E-Mail senden
                  <svg className="ml-3 w-6 h-6 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </span>
              </button>
              
              <div className="text-small text-gray-500 space-y-2">
                <p className="text-lg font-medium text-gray-700">mail@pocket-service.com</p>
                <p>Antwort innerhalb von 24 Stunden</p>
                <p>Unverbindliche Beratung</p>
              </div>
            </motion.div>

            {/* Contact Info Cards */}
            <motion.div
              variants={fadeInUpChild}
              className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16"
            >
              <div className="bg-white border border-gray-200 rounded-2xl p-6 hover:shadow-lg transition-all duration-300">
                <div className="text-3xl mb-4">📧</div>
                <h3 className="font-semibold text-gray-900 mb-2">E-Mail</h3>
                <p className="text-gray-600">mail@pocket-service.com</p>
              </div>
              <div className="bg-white border border-gray-200 rounded-2xl p-6 hover:shadow-lg transition-all duration-300">
                <div className="text-3xl mb-4">⏰</div>
                <h3 className="font-semibold text-gray-900 mb-2">Antwortzeit</h3>
                <p className="text-gray-600">Innerhalb von 24h</p>
              </div>
              <div className="bg-white border border-gray-200 rounded-2xl p-6 hover:shadow-lg transition-all duration-300">
                <div className="text-3xl mb-4">🎯</div>
                <h3 className="font-semibold text-gray-900 mb-2">Beratung</h3>
                <p className="text-gray-600">Unverbindlich & kostenlos</p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gradient-to-r from-gray-900 to-gray-800 text-white py-12 relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-orange-500 via-teal-500 to-blue-500"></div>
        </div>

        <div className="section-content relative z-10">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-6 md:mb-0 text-center md:text-left">
              <h3 className="text-xl font-bold mb-2">Pocket Service</h3>
              <p className="text-gray-400 mb-2">
                Digitalisierung für Kleinbetriebe
              </p>
              <p className="text-small text-gray-500">
                © {currentYear} {companyData.name}. Alle Rechte vorbehalten.
              </p>
            </div>
            <div className="flex space-x-8">
              <button
                onClick={() => setIsImpressumOpen(true)}
                className="text-small text-gray-400 hover:text-white transition-colors focus-ring rounded px-4 py-2 hover:bg-white hover:bg-opacity-10"
              >
                Impressum
              </button>
              <button
                onClick={() => setIsDatenschutzOpen(true)}
                className="text-small text-gray-400 hover:text-white transition-colors focus-ring rounded px-4 py-2 hover:bg-white hover:bg-opacity-10"
              >
                Datenschutz
              </button>
            </div>
          </div>
        </div>
      </footer>

      {/* Impressum Modal */}
      <Modal
        isOpen={isImpressumOpen}
        onClose={() => setIsImpressumOpen(false)}
        title="Impressum"
      >
        <div className="space-y-6 text-body text-gray-700">
          <div>
            <h3 className="font-semibold text-gray-900 mb-2">Firmeninformationen</h3>
            <p className="mb-1"><strong>{companyData.name}</strong></p>
            <p className="mb-1">Inhaber: {companyData.owner}</p>
            <p className="mb-1">{companyData.address.street}</p>
            <p className="mb-1">{companyData.address.city}</p>
            <p className="mb-1">{companyData.address.country}</p>
          </div>

          <div>
            <h3 className="font-semibold text-gray-900 mb-2">Kontakt</h3>
            <p className="mb-1">E-Mail: {companyData.contact.email}</p>
            <p className="mb-1">Website: {companyData.contact.domain}</p>
          </div>

          <div>
            <h3 className="font-semibold text-gray-900 mb-2">Geschäftsinformationen</h3>
            <p className="mb-1">UID-Nummer: {companyData.business.uid}</p>
            <p className="mb-1">GISA-Zahl: {companyData.business.gisa}</p>
            <p className="mb-1">Firmenbuchnummer: {companyData.business.companyRegister}</p>
            <p className="mb-1">Firmenbuchgericht: {companyData.business.court}</p>
            <p className="mb-1">Firmensitz: {companyData.business.headquarters}</p>
            <p className="mb-1">Gewerbe: {companyData.business.activity}</p>
          </div>
        </div>
      </Modal>

      {/* Datenschutz Modal */}
      <Modal
        isOpen={isDatenschutzOpen}
        onClose={() => setIsDatenschutzOpen(false)}
        title="Datenschutzerklärung"
      >
        <div className="space-y-6 text-body text-gray-700">
          <div>
            <h3 className="font-semibold text-gray-900 mb-2">Datenschutz</h3>
            <p className="mb-4">
              Diese Website ist eine statische Seite ohne Cookies oder Tracking-Technologien. 
              Wir sammeln keine personenbezogenen Daten über diese Website.
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-gray-900 mb-2">Kontakt per E-Mail</h3>
            <p className="mb-4">
              Wenn Sie uns per E-Mail kontaktieren, werden Ihre Angaben zwecks Bearbeitung der Anfrage 
              und für den Fall von Anschlussfragen bei uns gespeichert. Diese Daten geben wir nicht 
              ohne Ihre Einwilligung weiter.
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-gray-900 mb-2">Ihre Rechte</h3>
            <p className="mb-4">
              Sie haben jederzeit das Recht auf Auskunft über Ihre bei uns gespeicherten personenbezogenen Daten, 
              deren Herkunft und Empfänger sowie den Zweck der Datenverarbeitung. 
              Kontaktieren Sie uns unter: {companyData.contact.email}
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-gray-900 mb-2">Auskunft, Löschung, Sperrung</h3>
            <p className="mb-4">
              Sie haben jederzeit das Recht auf unentgeltliche Auskunft über Ihre gespeicherten personenbezogenen Daten, 
              deren Herkunft und Empfänger und den Zweck der Datenverarbeitung sowie ein Recht auf Berichtigung, 
              Sperrung oder Löschung dieser Daten.
            </p>
          </div>
        </div>
      </Modal>
    </>
  )
}