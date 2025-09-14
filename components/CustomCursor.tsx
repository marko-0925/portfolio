'use client'

import { useEffect, useRef } from 'react'
import { motion } from 'framer-motion'

const CustomCursor = () => {
  const cursorRef = useRef<HTMLDivElement>(null)
  const followerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const cursor = cursorRef.current
    const follower = followerRef.current
    
    if (!cursor || !follower) return

    let mouseX = 0
    let mouseY = 0
    let followerX = 0
    let followerY = 0

    const handleMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX
      mouseY = e.clientY
      
      cursor.style.transform = `translate3d(${mouseX - 4}px, ${mouseY - 4}px, 0)`
    }

    const animateFollower = () => {
      const dx = mouseX - followerX
      const dy = mouseY - followerY
      
      followerX += dx * 0.1
      followerY += dy * 0.1
      
      follower.style.transform = `translate3d(${followerX - 20}px, ${followerY - 20}px, 0)`
      
      requestAnimationFrame(animateFollower)
    }

    const handleMouseEnter = () => {
      cursor.style.opacity = '1'
      follower.style.opacity = '1'
    }

    const handleMouseLeave = () => {
      cursor.style.opacity = '0'
      follower.style.opacity = '0'
    }

    const handleMouseDown = () => {
      cursor.style.transform += ' scale(0.8)'
      follower.style.transform += ' scale(1.2)'
    }

    const handleMouseUp = () => {
      cursor.style.transform = cursor.style.transform.replace(' scale(0.8)', '')
      follower.style.transform = follower.style.transform.replace(' scale(1.2)', '')
    }

    document.addEventListener('mousemove', handleMouseMove)
    document.addEventListener('mouseenter', handleMouseEnter)
    document.addEventListener('mouseleave', handleMouseLeave)
    document.addEventListener('mousedown', handleMouseDown)
    document.addEventListener('mouseup', handleMouseUp)
    
    animateFollower()

    return () => {
      document.removeEventListener('mousemove', handleMouseMove)
      document.removeEventListener('mouseenter', handleMouseEnter)
      document.removeEventListener('mouseleave', handleMouseLeave)
      document.removeEventListener('mousedown', handleMouseDown)
      document.removeEventListener('mouseup', handleMouseUp)
    }
  }, [])

  return (
    <>
      <div
        ref={cursorRef}
        className="fixed top-0 left-0 w-2 h-2 bg-blue-500 rounded-full pointer-events-none z-[9999] mix-blend-difference transition-opacity duration-300"
        style={{ opacity: 0 }}
      />
      <div
        ref={followerRef}
        className="fixed top-0 left-0 w-10 h-10 border border-blue-500/30 rounded-full pointer-events-none z-[9998] transition-opacity duration-300"
        style={{ opacity: 0 }}
      />
    </>
  )
}

export default CustomCursor
