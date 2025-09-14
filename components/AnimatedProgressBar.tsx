'use client'

import { motion, useInView } from 'framer-motion'
import { useRef, useEffect, useState } from 'react'

interface AnimatedProgressBarProps {
  percentage: number
  color?: string
  delay?: number
  duration?: number
  showPercentage?: boolean
}

const AnimatedProgressBar = ({ 
  percentage, 
  color = "from-blue-500 to-purple-500", 
  delay = 0,
  duration = 1.5,
  showPercentage = true
}: AnimatedProgressBarProps) => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })
  const [currentPercentage, setCurrentPercentage] = useState(0)

  useEffect(() => {
    if (isInView) {
      const timer = setTimeout(() => {
        const interval = setInterval(() => {
          setCurrentPercentage(prev => {
            if (prev >= percentage) {
              clearInterval(interval)
              return percentage
            }
            return prev + 1
          })
        }, (duration * 1000) / percentage)
      }, delay * 1000)

      return () => clearTimeout(timer)
    }
  }, [isInView, percentage, delay, duration])

  return (
    <div ref={ref} className="w-full">
      <div className="flex justify-between items-center mb-2">
        {showPercentage && (
          <motion.span 
            className="text-sm font-semibold text-gray-700"
            initial={{ opacity: 0 }}
            animate={{ opacity: isInView ? 1 : 0 }}
            transition={{ delay: delay + 0.2 }}
          >
            {currentPercentage}%
          </motion.span>
        )}
      </div>
      
      <div className="w-full bg-gray-200 rounded-full h-3 overflow-hidden shadow-inner">
        <motion.div
          className={`h-full bg-gradient-to-r ${color} rounded-full relative overflow-hidden`}
          initial={{ width: "0%" }}
          animate={{ width: isInView ? `${percentage}%` : "0%" }}
          transition={{ 
            duration: duration, 
            delay: delay,
            ease: [0.25, 0.46, 0.45, 0.94]
          }}
        >
          {/* Animated shine effect */}
          <motion.div
            className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
            initial={{ x: "-100%" }}
            animate={{ x: "100%" }}
            transition={{
              duration: 1.5,
              delay: delay + duration,
              ease: "easeInOut"
            }}
          />
        </motion.div>
      </div>
    </div>
  )
}

export default AnimatedProgressBar
