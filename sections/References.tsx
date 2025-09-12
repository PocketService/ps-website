'use client'

import { motion } from 'framer-motion'
import { fadeInUp, fadeInUpStagger, fadeInUpChild } from '@/lib/motion'

const testimonials = [
  {
    quote: 'Schnelle Umsetzung, klare Struktur, spürbarer Nutzen. Endlich haben wir eine IT-Infrastruktur, die mit unserem Wachstum mithält.',
    author: 'Max Mustermann',
    company: 'Mustermann GmbH',
    role: 'Geschäftsführer',
    avatar: '👨‍💼',
    rating: 5,
  },
]

export default function References() {
  return (
    <section id="referenzen" className="section bg-gradient-to-br from-gray-50 to-gray-100 relative overflow-hidden">
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

      <div className="section-content relative z-10">
        <motion.div
          variants={fadeInUp}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, margin: '-100px' }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center px-6 py-3 rounded-full bg-gradient-to-r from-orange-100 to-pink-100 text-gray-700 font-semibold mb-6">
            <span className="w-2 h-2 bg-gradient-to-r from-orange-500 to-pink-500 rounded-full mr-3"></span>
            Was unsere Kunden sagen
          </div>
          <h2 className="text-heading text-gray-900 mb-6">
            Echte Erfahrungen von zufriedenen Unternehmen
          </h2>
        </motion.div>

        <motion.div
          variants={fadeInUpStagger}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, margin: '-100px' }}
          className="max-w-4xl mx-auto"
        >
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              variants={fadeInUpChild}
              className="card group hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 relative overflow-hidden"
            >
              {/* Gradient Background */}
              <div className="absolute inset-0 bg-gradient-to-br from-orange-50 to-pink-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              
              <div className="relative z-10">
                {/* Quote Icon */}
                <div className="mb-6">
                  <svg className="w-8 h-8 text-orange-500" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h4v10h-10z"/>
                  </svg>
                </div>

                {/* Rating */}
                <div className="flex items-center justify-center mb-6">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <svg key={i} className="w-6 h-6 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>

                <blockquote className="text-xl text-gray-700 mb-8 italic leading-relaxed text-center">
                  "{testimonial.quote}"
                </blockquote>

                {/* Author */}
                <div className="border-t border-gray-200 pt-6">
                  <div className="flex items-center justify-center">
                    <div className="text-4xl mr-4">{testimonial.avatar}</div>
                    <div className="text-center">
                      <p className="font-semibold text-gray-900 text-lg">
                        {testimonial.author}
                      </p>
                      <p className="text-gray-600">
                        {testimonial.role}
                      </p>
                      <p className="text-gray-500">
                        {testimonial.company}
                      </p>
                    </div>
                  </div>
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
          className="text-center mt-16"
        >
          <div className="bg-gradient-to-r from-orange-50 to-pink-50 rounded-3xl p-8 border border-orange-100">
            <h3 className="text-subheading text-gray-900 mb-4">
              Werde Teil unserer Erfolgsgeschichten
            </h3>
            <p className="text-body text-gray-600 mb-6 max-w-2xl mx-auto">
              Lass uns gemeinsam deine digitale Transformation starten und dein Unternehmen auf das nächste Level bringen.
            </p>
            <button
              onClick={() => {
                const element = document.getElementById('kontakt')
                if (element) element.scrollIntoView({ behavior: 'smooth' })
              }}
              className="btn-primary group"
            >
              <span className="flex items-center">
                Jetzt unverbindlich beraten lassen
                <svg className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </span>
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}