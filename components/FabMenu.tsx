'use client'

import { useState, useEffect, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

export default function FabMenu() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrollProgress, setScrollProgress] = useState(0)
  const menuRef = useRef<HTMLDivElement>(null)

  // Calculate scroll progress
  useEffect(() => {
    const updateScrollProgress = () => {
      const scrollTop = window.scrollY
      const docHeight = document.documentElement.scrollHeight - window.innerHeight
      const progress = Math.min(scrollTop / docHeight, 1)
      setScrollProgress(progress)
    }

    window.addEventListener('scroll', updateScrollProgress)
    updateScrollProgress()

    return () => window.removeEventListener('scroll', updateScrollProgress)
  }, [])

  // Handle outside click
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsOpen(false)
      }
    }

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside)
      return () => document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [isOpen])

  // Handle ESC key
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setIsOpen(false)
      }
    }

    if (isOpen) {
      document.addEventListener('keydown', handleKeyDown)
      return () => document.removeEventListener('keydown', handleKeyDown)
    }
  }, [isOpen])

  const handleMenuToggle = () => {
    setIsOpen(!isOpen)
  }

  const handleContactClick = () => {
    window.location.href = 'mailto:mail@pocket-service.com'
  }

  const circumference = 2 * Math.PI * 20 // radius = 20
  const strokeDasharray = circumference
  const strokeDashoffset = circumference - (scrollProgress * circumference)

  return (
    <div className="fixed bottom-6 right-6 z-50" ref={menuRef}>
      {/* Contact Button */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            transition={{ type: 'spring', stiffness: 300, damping: 30 }}
            className="absolute bottom-0 right-0 mb-20 mr-0"
          >
            <motion.button
              onClick={handleContactClick}
              className="w-16 h-16 border-4 border-black bg-white text-black rounded-none shadow-lg hover:shadow-xl transition-all duration-200 focus-ring flex items-center justify-center font-bold"
              style={{ boxShadow: '8px 8px 0px #000000' }}
              whileHover={{ 
                scale: 1.05,
                transform: 'translate(-2px, -2px)',
                boxShadow: '10px 10px 0px #000000'
              }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="text-xl font-bold">@</span>
            </motion.button>
          </motion.div>
        )}
      </AnimatePresence>

      {/* FAB Button */}
      <motion.button
        onClick={handleMenuToggle}
        className="relative w-16 h-16 border-4 border-black bg-black text-white rounded-none shadow-lg hover:shadow-xl transition-all duration-200 focus-ring flex items-center justify-center font-bold"
        style={{ boxShadow: '8px 8px 0px #000000' }}
        aria-expanded={isOpen}
        aria-controls="fab-menu"
        aria-label={isOpen ? 'Navigation schließen' : 'Navigation öffnen'}
        whileHover={{ 
          scale: 1.05,
          transform: 'translate(-2px, -2px)',
          boxShadow: '10px 10px 0px #000000'
        }}
        whileTap={{ scale: 0.95 }}
      >
        {/* Progress ring */}
        <svg
          className="absolute inset-0 w-full h-full transform -rotate-90"
          viewBox="0 0 44 44"
        >
          <circle
            cx="22"
            cy="22"
            r="20"
            stroke="rgba(255, 255, 255, 0.3)"
            strokeWidth="2"
            fill="none"
          />
          <motion.circle
            cx="22"
            cy="22"
            r="20"
            stroke="white"
            strokeWidth="2"
            fill="none"
            strokeLinecap="round"
            strokeDasharray={strokeDasharray}
            strokeDashoffset={strokeDashoffset}
            transition={{ duration: 0.1 }}
          />
        </svg>

        {/* Menu icon */}
        <motion.div
          animate={{ rotate: isOpen ? 45 : 0 }}
          transition={{ duration: 0.2 }}
          className="relative z-10"
        >
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <line x1="3" y1="6" x2="21" y2="6" />
            <line x1="3" y1="12" x2="21" y2="12" />
            <line x1="3" y1="18" x2="21" y2="18" />
          </svg>
        </motion.div>
      </motion.button>
    </div>
  )
}