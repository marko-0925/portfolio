'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Home, User, Briefcase, Code, Mail, Award, GraduationCap, Trophy } from 'lucide-react'

const FloatingNav = () => {
  const [activeSection, setActiveSection] = useState('hero')
  const [isVisible, setIsVisible] = useState(false)

  const navItems = [
    { id: 'hero', icon: Home, label: 'Home' },
    { id: 'about', icon: User, label: 'About' },
    { id: 'experience', icon: Briefcase, label: 'Experience' },
    { id: 'skills', icon: Award, label: 'Skills' },
    { id: 'projects', icon: Code, label: 'Projects' },
    { id: 'achievements', icon: Trophy, label: 'AI Achievements' },
    { id: 'contact', icon: Mail, label: 'Contact' }
  ]

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY
      setIsVisible(scrollY > 100)

      // Update active section based on scroll position
      const sections = navItems.map(item => item.id)
      const currentSection = sections.find(section => {
        const element = document.getElementById(section)
        if (element) {
          const rect = element.getBoundingClientRect()
          return rect.top <= 100 && rect.bottom >= 100
        }
        return false
      })

      if (currentSection) {
        setActiveSection(currentSection)
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId === 'hero' ? 'hero' : sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          className="fixed right-8 top-1/2 -translate-y-1/2 z-50"
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: 100 }}
          transition={{ duration: 0.3 }}
        >
          <motion.nav
            className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-2 shadow-2xl"
            initial={{ scale: 0.8 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.3, delay: 0.1 }}
          >
            <div className="flex flex-col gap-2">
              {navItems.map((item, index) => {
                const Icon = item.icon
                const isActive = activeSection === item.id

                return (
                  <motion.button
                    key={item.id}
                    onClick={() => scrollToSection(item.id)}
                    className={`relative p-3 rounded-xl transition-all duration-300 group ${
                      isActive 
                        ? 'bg-blue-500 text-white shadow-lg' 
                        : 'text-gray-600 hover:bg-white/20 hover:text-gray-900'
                    }`}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                  >
                    <Icon size={20} />
                    
                    {/* Tooltip */}
                    <motion.div
                      className="absolute right-full mr-3 top-1/2 -translate-y-1/2 bg-gray-900 text-white px-3 py-1 rounded-lg text-sm whitespace-nowrap opacity-0 group-hover:opacity-100 pointer-events-none"
                      initial={{ opacity: 0, x: 10 }}
                      whileHover={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      {item.label}
                      <div className="absolute left-full top-1/2 -translate-y-1/2 border-4 border-transparent border-l-gray-900" />
                    </motion.div>
                  </motion.button>
                )
              })}
            </div>
          </motion.nav>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

export default FloatingNav
