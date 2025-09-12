'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { fadeInUp, fadeInUpStagger, fadeInUpChild } from '@/lib/motion'
import Modal from '@/components/Modal'

const tools = [
  { name: 'Microsoft 365', category: 'Productivity', color: 'from-blue-500 to-blue-600' },
  { name: 'Azure Entra ID', category: 'Identity', color: 'from-blue-600 to-indigo-600' },
  { name: 'Synology', category: 'Storage', color: 'from-gray-600 to-gray-700' },
  { name: 'Vercel', category: 'Hosting', color: 'from-gray-800 to-black' },
  { name: 'Supabase', category: 'Database', color: 'from-green-500 to-green-600' },
  { name: 'HubSpot', category: 'CRM', color: 'from-orange-500 to-orange-600' },
  { name: 'Asana', category: 'Project Management', color: 'from-purple-500 to-purple-600' },
  { name: 'Slack', category: 'Communication', color: 'from-purple-600 to-pink-600' },
  { name: 'Zapier', category: 'Automation', color: 'from-orange-400 to-red-500' },
  { name: 'Notion', category: 'Documentation', color: 'from-gray-700 to-gray-800' },
  { name: 'Figma', category: 'Design', color: 'from-purple-400 to-pink-500' },
  { name: 'GitHub', category: 'Development', color: 'from-gray-800 to-gray-900' },
]

const toolCategories = {
  'Productivity': {
    title: 'Productivity Tools',
    description: 'Tools für Produktivität und Zusammenarbeit',
    tools: ['Microsoft 365', 'Notion', 'Slack'],
    benefits: ['Verbesserte Zusammenarbeit', 'Zentrale Dokumentenverwaltung', 'Effiziente Kommunikation']
  },
  'Identity': {
    title: 'Identity & Security',
    description: 'Sicherheits- und Identitätsmanagement',
    tools: ['Azure Entra ID', 'Multi-Factor Authentication'],
    benefits: ['Höhere Sicherheit', 'Zentrale Benutzerverwaltung', 'Compliance']
  },
  'Storage': {
    title: 'Storage & Backup',
    description: 'Datenspeicherung und Backup-Lösungen',
    tools: ['Synology', 'Cloud Storage'],
    benefits: ['Sichere Datenspeicherung', 'Automatische Backups', 'Skalierbare Kapazität']
  },
  'Hosting': {
    title: 'Hosting & Infrastructure',
    description: 'Hosting und Infrastruktur-Lösungen',
    tools: ['Vercel', 'Cloud Hosting'],
    benefits: ['Hohe Verfügbarkeit', 'Skalierbare Infrastruktur', 'Schnelle Performance']
  },
  'Database': {
    title: 'Database & Analytics',
    description: 'Datenbanken und Analyse-Tools',
    tools: ['Supabase', 'Analytics Tools'],
    benefits: ['Strukturierte Datenverwaltung', 'Datenbasierte Entscheidungen', 'Real-time Analytics']
  },
  'CRM': {
    title: 'CRM & Sales',
    description: 'Kundenbeziehungs- und Vertriebsmanagement',
    tools: ['HubSpot', 'Sales Tools'],
    benefits: ['Bessere Kundenbeziehungen', 'Automatisierte Verkaufsprozesse', 'Lead-Management']
  },
  'Project Management': {
    title: 'Project Management',
    description: 'Projektplanung und -verfolgung',
    tools: ['Asana', 'Project Tools'],
    benefits: ['Transparente Projektfortschritte', 'Bessere Teamkoordination', 'Zeitmanagement']
  },
  'Communication': {
    title: 'Communication',
    description: 'Kommunikations- und Kollaborationstools',
    tools: ['Slack', 'Teams'],
    benefits: ['Effiziente Kommunikation', 'Team-Kollaboration', 'Informationsaustausch']
  },
  'Automation': {
    title: 'Automation',
    description: 'Automatisierung und Workflow-Tools',
    tools: ['Zapier', 'Automation Tools'],
    benefits: ['Reduzierte manuelle Arbeit', 'Höhere Effizienz', 'Weniger Fehler']
  },
  'Design': {
    title: 'Design & Development',
    description: 'Design- und Entwicklungstools',
    tools: ['Figma', 'GitHub'],
    benefits: ['Professionelles Design', 'Versionskontrolle', 'Kollaborative Entwicklung']
  }
}

export default function Toolkit() {
  const [selectedCategory, setSelectedCategory] = useState<any>(null)

  return (
    <>
      <section id="toolkit" className="section relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-purple-200 via-pink-200 to-orange-200"></div>
        </div>

        <div className="section-content relative z-10">
          <motion.div
            variants={fadeInUp}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, margin: '-100px' }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center px-6 py-3 rounded-full bg-gradient-to-r from-purple-100 to-pink-100 text-gray-700 font-semibold mb-6">
              <span className="w-2 h-2 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full mr-3"></span>
              Unser Toolkit
            </div>
            <h2 className="text-heading text-gray-900 mb-6">
              Bewährte Tools und Technologien
            </h2>
          </motion.div>

          <motion.div
            variants={fadeInUpStagger}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, margin: '-100px' }}
            className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4"
          >
            {tools.map((tool, index) => (
              <motion.div
                key={index}
                variants={fadeInUpChild}
                className="group cursor-pointer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setSelectedCategory(toolCategories[tool.category as keyof typeof toolCategories])}
              >
                <div className="bg-white border border-gray-200 rounded-xl p-4 text-center hover:shadow-lg transition-all duration-300 hover:-translate-y-1 relative overflow-hidden">
                  {/* Gradient Background on Hover */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${tool.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300`}></div>
                  
                  <div className="relative z-10">
                    {/* Tool Icon */}
                    <div className={`w-12 h-12 bg-gradient-to-br ${tool.color} rounded-lg mx-auto mb-3 flex items-center justify-center shadow-md group-hover:shadow-lg transition-all duration-300`}>
                      <div className="w-8 h-8 bg-white rounded-md flex items-center justify-center">
                        <div className="w-5 h-5 bg-gray-300 rounded"></div>
                      </div>
                    </div>
                    
                    <h3 className="text-xs font-semibold text-gray-900 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-purple-600 group-hover:to-pink-600 group-hover:bg-clip-text transition-all duration-300">
                      {tool.name}
                    </h3>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Bottom CTA */}
          <motion.div
            variants={fadeInUp}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, margin: '-100px' }}
            className="text-center mt-12"
          >
            <button
              onClick={() => {
                const element = document.getElementById('kontakt')
                if (element) element.scrollIntoView({ behavior: 'smooth' })
              }}
              className="btn-secondary group"
            >
              <span className="flex items-center">
                Tool-Beratung anfragen
                <svg className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </span>
            </button>
          </motion.div>
        </div>
      </section>

      {/* Toolkit Detail Modal */}
      <Modal
        isOpen={!!selectedCategory}
        onClose={() => setSelectedCategory(null)}
        title={selectedCategory?.title || ''}
      >
        {selectedCategory && (
          <div className="space-y-6">
            <p className="text-body text-gray-600 mb-6">
              {selectedCategory.description}
            </p>

            <div>
              <h3 className="font-semibold text-gray-900 mb-4">Tools in dieser Kategorie:</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {selectedCategory.tools.map((tool: string, index: number) => (
                  <div key={index} className="flex items-center p-3 bg-gray-50 rounded-lg">
                    <svg className="w-5 h-5 text-green-500 mr-3" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span className="text-gray-700 font-medium">{tool}</span>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h3 className="font-semibold text-gray-900 mb-4">Deine Vorteile:</h3>
              <ul className="space-y-2">
                {selectedCategory.benefits.map((benefit: string, index: number) => (
                  <li key={index} className="flex items-start">
                    <svg className="w-5 h-5 text-blue-500 mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="text-gray-700">{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="pt-6 border-t border-gray-200">
              <button
                onClick={() => {
                  setSelectedCategory(null)
                  window.location.href = 'mailto:mail@pocket-service.com?subject=Beratung zu ' + selectedCategory.title
                }}
                className="btn-primary w-full"
              >
                Beratung zu {selectedCategory.title} anfragen
              </button>
            </div>
          </div>
        )}
      </Modal>
    </>
  )
}