'use client'

import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'

const LoadingAnimation = ({ onComplete }: { onComplete: () => void }) => {
  const [isComplete, setIsComplete] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsComplete(true)
      setTimeout(onComplete, 800)
    }, 2000)

    return () => clearTimeout(timer)
  }, [onComplete])

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3
      }
    },
    exit: {
      opacity: 0,
      scale: 0.8,
      transition: {
        duration: 0.8
      }
    }
  }

  const letterVariants = {
    hidden: {
      opacity: 0,
      y: 50,
      rotateX: -90
    },
    visible: {
      opacity: 1,
      y: 0,
      rotateX: 0,
      transition: {
        duration: 0.6
      }
    }
  }

  const circleVariants = {
    hidden: { scale: 0, rotate: -180 },
    visible: {
      scale: 1,
      rotate: 0,
      transition: {
        duration: 1
      }
    }
  }

  const name = "MARKO DJURDJEVIC"

  return (
    <motion.div
      className="fixed inset-0 z-50 flex items-center justify-center bg-gradient-to-br from-white via-blue-50 to-purple-50"
      variants={containerVariants}
      initial="hidden"
      animate={isComplete ? "exit" : "visible"}
    >
      <div className="text-center">
        {/* Animated circles */}
        <div className="relative mb-8">
          <motion.div
            className="w-20 h-20 mx-auto rounded-full opacity-20"
            style={{
              background: 'linear-gradient(to right, #3b82f6, #8b5cf6)'
            }}
            variants={circleVariants}
            animate={{
              scale: [1, 1.2, 1],
              rotate: [0, 360]
            }}
            transition={{
              scale: { duration: 2, repeat: Infinity, ease: "easeInOut" },
              rotate: { duration: 8, repeat: Infinity, ease: "linear" }
            }}
          />
          <motion.div
            className="absolute inset-0 w-16 h-16 mx-auto mt-2 rounded-full opacity-30"
            style={{
              background: 'linear-gradient(to right, #8b5cf6, #ec4899)'
            }}
            variants={circleVariants}
            animate={{
              scale: [1, 0.8, 1],
              rotate: [360, 0]
            }}
            transition={{
              scale: { duration: 2, repeat: Infinity, ease: "easeInOut", delay: 0.5 },
              rotate: { duration: 6, repeat: Infinity, ease: "linear" }
            }}
          />
        </div>

        {/* Animated name */}
        <motion.div
          className="flex justify-center space-x-1 mb-4"
          variants={containerVariants}
        >
          {name.split('').map((letter, index) => (
            <motion.span
              key={index}
              className={`text-2xl font-bold bg-gradient-to-r from-gray-900 via-blue-800 to-purple-800 bg-clip-text text-transparent ${
                letter === ' ' ? 'w-2' : ''
              }`}
              variants={letterVariants}
            >
              {letter === ' ' ? '\u00A0' : letter}
            </motion.span>
          ))}
        </motion.div>

        {/* Loading text */}
        <motion.p
          className="text-gray-600 text-sm tracking-wider"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.5 }}
        >
          FULL-STACK ENGINEER
        </motion.p>

        {/* Progress bar */}
        <motion.div
          className="w-48 h-1 mx-auto mt-6 bg-gray-200 rounded-full overflow-hidden"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 1.2, duration: 0.5 }}
        >
          <motion.div
            className="h-full rounded-full"
            style={{
              background: 'linear-gradient(to right, #3b82f6, #8b5cf6)'
            }}
            initial={{ width: "0%" }}
            animate={{ width: "100%" }}
            transition={{ delay: 1.5, duration: 1.5, ease: "easeInOut" }}
          />
        </motion.div>
      </div>
    </motion.div>
  )
}

export default LoadingAnimation
