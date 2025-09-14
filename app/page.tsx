'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import LoadingAnimation from '../components/LoadingAnimation'
import './globals.css'

export default function Home() {
  const [isLoading, setIsLoading] = useState(true)

  const handleLoadingComplete = () => {
    console.log('Loading complete called')
    setIsLoading(false)
  }

  // Fallback: automatically hide loading after 3 seconds
  useEffect(() => {
    const fallbackTimer = setTimeout(() => {
      console.log('Fallback timer triggered')
      setIsLoading(false)
    }, 3000)

    return () => clearTimeout(fallbackTimer)
  }, [])

  // Debug logging
  useEffect(() => {
    console.log('isLoading state:', isLoading)
  }, [isLoading])

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
            className="min-h-screen relative bg-white text-black"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
          >
            <div className="p-8">
              <h1 className="text-4xl font-bold text-center mb-8">Marko Djurdjevic</h1>
              <h2 className="text-2xl text-center mb-8">Full-Stack Engineer</h2>
              <div className="max-w-4xl mx-auto">
                <p className="text-lg mb-4">
                  Welcome to my portfolio! This is a test to see if the basic content is working.
                </p>
                <p className="text-lg mb-4">
                  If you can see this text, the loading animation is working correctly and the main content is rendering.
                </p>
                <div className="bg-blue-100 p-4 rounded-lg">
                  <p className="text-blue-800">
                    This blue box confirms that Tailwind CSS is working properly.
                  </p>
                </div>
              </div>
            </div>
          </motion.main>
        )}
      </AnimatePresence>
    </>
  )
}