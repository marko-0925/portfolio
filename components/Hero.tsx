'use client'

import { ExternalLink, ArrowDown, Github, Linkedin } from 'lucide-react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef, useEffect } from 'react'
import { fadeInUp, fadeInLeft, fadeInRight, staggerContainer, textReveal } from '../utils/animations'
import TextReveal from './TextReveal'
import MagneticButton from './MagneticButton'

const Hero = () => {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"]
  })

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"])
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0])



  const scrollToProjects = () => {
    const element = document.querySelector('#projects')
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  const scrollToAbout = () => {
    const element = document.querySelector('#about')
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <motion.section
      ref={ref}
      id="hero"
      className="min-h-screen flex items-center justify-center relative overflow-hidden"
      style={{ y, opacity }}
    >
      {/* Ultra-clean background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-white via-gray-50/50 to-blue-50/20" />

        {/* Subtle geometric patterns */}
        <div className="absolute inset-0 opacity-[0.02]">
          <div className="absolute top-20 left-20 w-32 h-32 border border-gray-400 rounded-full" />
          <div className="absolute top-40 right-32 w-24 h-24 border border-gray-400 rotate-45" />
          <div className="absolute bottom-32 left-1/3 w-16 h-16 border border-gray-400 rounded-full" />
        </div>

        {/* Floating orbs - more subtle */}
        <motion.div
          className="absolute top-1/4 left-1/4 w-64 h-64 bg-gradient-to-r from-blue-400/5 to-purple-400/5 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.1, 1],
            x: [0, 20, 0],
            y: [0, -10, 0]
          }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-1/4 right-1/4 w-48 h-48 bg-gradient-to-r from-purple-400/5 to-pink-400/5 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            x: [0, -15, 0],
            y: [0, 10, 0]
          }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        />
      </div>

      <div className="container-max relative z-10 px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-20 items-center">

          {/* Left Content - Ultra Professional */}
          <motion.div
            className="space-y-12 text-center lg:text-left"
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
          >


            {/* Professional Introduction */}
            <div className="space-y-6">
              <motion.div
                className="inline-flex items-center gap-2 px-4 py-2 bg-white/60 backdrop-blur-sm border border-gray-200/50 rounded-full text-sm font-medium text-gray-700"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: 0.2 }}
              >
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                Available for new opportunities
              </motion.div>

              <div className="space-y-4">
                <TextReveal
                  className="text-5xl sm:text-6xl lg:text-7xl font-bold leading-[0.9] tracking-tight"
                  delay={0.2}
                >
                  Marko Djurdjevic
                </TextReveal>

                <motion.div
                  className="space-y-2"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: 0.4 }}
                >
                  <h2 className="text-2xl sm:text-3xl font-semibold text-gray-800">
                    Senior Full-Stack Developer
                  </h2>
                  <div className="flex items-center justify-center lg:justify-start gap-4 text-sm text-gray-600">
                    <span className="flex items-center gap-1">
                      📍 Serbia, Draga Vukovica Korcagina
                    </span>
                    <span className="flex items-center gap-1">
                      🚀 7+ Years Experience
                    </span>
                    <span className="flex items-center gap-1">
                      🤖 AI/ML Expert
                    </span>
                  </div>
                </motion.div>
              </div>
            </div>

            {/* Professional Description */}
            <motion.p
              className="text-xl text-gray-600 max-w-2xl leading-relaxed font-light"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 0.5 }}
            >
              I am a highly skilled full-stack developer and AI specialist with over 7 years of experience building
              intelligent applications that transform client ideas into reality. I specialize in integrating cutting-edge AI technologies
              to deliver exceptional user experiences and drive business growth through data-driven solutions.
            </motion.p>

            {/* Professional CTA Section */}
            <motion.div
              className="space-y-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 0.7 }}
            >
              <div className="flex flex-col sm:flex-row gap-4">
                <MagneticButton
                  onClick={scrollToProjects}
                  className="px-8 py-4 bg-gray-900 text-white font-medium rounded-2xl hover:bg-gray-800 transition-all duration-150 shadow-lg"
                >
                  <div className="flex items-center justify-center gap-3">
                    <ExternalLink size={18} />
                    View My Work
                  </div>
                </MagneticButton>


              </div>

              {/* Social Links */}
              <div className="flex items-center justify-center lg:justify-start gap-4">
                <MagneticButton
                  onClick={() => window.open('https://github.com/david-star0210', '_blank')}
                  className="p-3 bg-white/60 backdrop-blur-sm border border-gray-200/50 rounded-xl hover:bg-white/80 transition-all duration-150"
                >
                  <Github size={20} className="text-gray-700" />
                </MagneticButton>
                <MagneticButton
                  onClick={() => window.open('https://linkedin.com/in/david-crystal', '_blank')}
                  className="p-3 bg-white/60 backdrop-blur-sm border border-gray-200/50 rounded-xl hover:bg-white/80 transition-all duration-150"
                >
                  <Linkedin size={20} className="text-gray-700" />
                </MagneticButton>
              </div>
            </motion.div>

          </motion.div>

          {/* Right Content - Ultra Professional */}
          <motion.div
            className="flex justify-center lg:justify-end relative"
            variants={fadeInRight}
          >
            <div className="relative">

              {/* Professional Stats Cards */}
              <motion.div
                className="grid grid-cols-2 gap-4 mb-8"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.3 }}
              >
                <motion.div
                  className="bg-white/80 backdrop-blur-sm border border-gray-200/50 p-6 text-center shadow-lg"
                  whileHover={{ scale: 1.05, y: -5 }}
                  transition={{ duration: 0.15 }}
                >
                  <motion.div
                    className="text-3xl font-bold text-gray-900 mb-1"
                    animate={{ scale: [1, 1.05, 1] }}
                    transition={{ duration: 1.2, repeat: Infinity }}
                  >
                    7+
                  </motion.div>
                  <div className="text-sm text-gray-600 font-medium">Years</div>
                </motion.div>

                <motion.div
                  className="bg-white/80 backdrop-blur-sm border border-gray-200/50 p-6 text-center shadow-lg"
                  whileHover={{ scale: 1.05, y: -5 }}
                  transition={{ duration: 0.15 }}
                >
                  <motion.div
                    className="text-3xl font-bold text-gray-900 mb-1"
                    animate={{ scale: [1, 1.05, 1] }}
                    transition={{ duration: 1.2, repeat: Infinity, delay: 0.2 }}
                  >
                    50+
                  </motion.div>
                  <div className="text-sm text-gray-600 font-medium">Projects</div>
                </motion.div>

                <motion.div
                  className="bg-white/80 backdrop-blur-sm border border-gray-200/50 p-6 text-center shadow-lg col-span-2"
                  whileHover={{ scale: 1.05, y: -5 }}
                  transition={{ duration: 0.15 }}
                >
                  <motion.div
                    className="text-3xl font-bold text-gray-900 mb-1"
                    animate={{ scale: [1, 1.05, 1] }}
                    transition={{ duration: 1.2, repeat: Infinity, delay: 0.4 }}
                  >
                    1M+
                  </motion.div>
                  <div className="text-sm text-gray-600 font-medium">AI-Powered Users</div>
                </motion.div>
              </motion.div>

              {/* Professional Image */}
              <motion.div
                className="relative bg-white/80 backdrop-blur-sm border border-gray-200/50 rounded-3xl p-4 shadow-2xl"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: 0.4 }}
                whileHover={{
                  scale: 1.02,
                  boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.15)"
                }}
              >
                <motion.img
                  src={`${process.env.NODE_ENV === 'production' ? '/portfolio' : ''}/profile-avatar.png`}
                  alt="Marko Djurdjevic - Senior Full-Stack Developer"
                  className="w-80 h-auto object-cover rounded-2xl"
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.15 }}
                />

                {/* Subtle tech indicators */}
                <motion.div
                  className="absolute -top-2 -right-2 w-6 h-6 bg-green-500 rounded-full border-2 border-white shadow-lg"
                  animate={{
                    scale: [1, 1.2, 1],
                  }}
                  transition={{
                    duration: 1,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                />
              </motion.div>
            </div>
          </motion.div>

        </div>

        {/* Scroll Indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: 0.8 }}
        >
          <motion.button
            onClick={scrollToAbout}
            className="flex flex-col items-center gap-2 text-gray-600 hover:text-gray-900 transition-colors group"
            animate={{ y: [0, 5, 0] }}
            transition={{ duration: 1, repeat: Infinity }}
          >
            <span className="text-sm font-medium tracking-wide">Scroll to explore</span>
            <motion.div
              className="w-6 h-10 border-2 border-gray-400 rounded-full flex justify-center group-hover:border-gray-600 transition-colors"
              whileHover={{ scale: 1.1 }}
            >
              <motion.div
                className="w-1 h-3 bg-gray-400 rounded-full mt-2 group-hover:bg-gray-600 transition-colors"
                animate={{ y: [0, 12, 0] }}
                transition={{ duration: 0.8, repeat: Infinity }}
              />
            </motion.div>
            <ArrowDown size={16} className="group-hover:translate-y-1 transition-transform" />
          </motion.button>
        </motion.div>
      </div>
    </motion.section>
  )
}

export default Hero
