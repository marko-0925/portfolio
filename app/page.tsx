'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Header from '../components/Header'
import Hero from '../components/Hero'
import About from '../components/About'
import Experience from '../components/Experience'
import Skills from '../components/Skills'
import Projects from '../components/Projects'
import Achievements from '../components/Achievements'
import Contact from '../components/Contact'
import Footer from '../components/Footer'
import LoadingAnimation from '../components/LoadingAnimation'
import ParticleBackground from '../components/ParticleBackground'
import CustomCursor from '../components/CustomCursor'
import FloatingNav from '../components/FloatingNav'
import ContactWidget from '../components/ChatWidget'
import './globals.css'

export default function Home() {
  const [isLoading, setIsLoading] = useState(true)

  const handleLoadingComplete = () => {
    setIsLoading(false)
  }

  return (
    <>
      <AnimatePresence mode="wait">
        {isLoading && (
          <LoadingAnimation onComplete={handleLoadingComplete} />
        )}
      </AnimatePresence>

      <AnimatePresence>
        {!isLoading && (
          <motion.main
            className="min-h-screen relative"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
          >
            <CustomCursor />
            <ParticleBackground />
            <FloatingNav />
            <div className="relative z-10">
              <Header />
              <Hero />
              <About />
              <Experience />
              <Skills />
              <Projects />
              <Achievements />
              <Contact />
              <Footer />
            </div>
            <ContactWidget />
          </motion.main>
        )}
      </AnimatePresence>
    </>
  )
}