'use client'

import { Mail, Phone, MapPin, Linkedin, Github } from 'lucide-react'
import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import TextReveal from './TextReveal'
import MagneticButton from './MagneticButton'

const Contact = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: 'markodjkl@gmail.com',
      href: 'mailto:markodjkl@gmail.com'
    },
    {
      icon: Phone,
      label: 'Phone',
      value: '+381628908711',
      href: 'tel:+381628908711'
    },
    {
      icon: MapPin,
      label: 'Location',
      value: 'Serbia, Draga Vukovica Korcagina',
      href: '#'
    }
  ]

  const socialLinks = [
    {
      icon: Linkedin,
      label: 'LinkedIn',
      href: 'https://linkedin.com/in/marko-djurdjevic',
      color: 'hover:text-blue-600'
    },
    {
      icon: Github,
      label: 'GitHub',
      href: 'https://github.com/marko-djurdjevic',
      color: 'hover:text-gray-900'
    }
  ]



  return (
    <section 
      ref={ref}
      id="contact" 
      className="section-padding relative overflow-hidden bg-gradient-to-br from-gray-50/30 via-white to-blue-50/10"
    >
      <div className="absolute inset-0">
        <motion.div 
          className="absolute top-32 left-20 w-2 h-2 bg-blue-400/10 rounded-full"
          animate={{ 
            scale: [1, 1.5, 1],
            opacity: [0.1, 0.3, 0.1]
          }}
          transition={{ duration: 4, repeat: Infinity }}
        />
        <motion.div 
          className="absolute bottom-20 right-32 w-1.5 h-1.5 bg-purple-400/15 rounded-full"
          animate={{ 
            scale: [1, 2, 1],
            opacity: [0.15, 0.4, 0.15]
          }}
          transition={{ duration: 3, repeat: Infinity, delay: 1 }}
        />
      </div>

      <div className="container-max relative z-10">
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
        >
          <TextReveal 
            className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6"
            delay={0.2}
          >
            Get In Touch
          </TextReveal>
          <motion.p
            className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            I'm always interested in hearing about new opportunities and exciting projects. 
            Let's discuss how we can work together to build something amazing.
          </motion.p>
        </motion.div>

        <motion.div 
          className="grid md:grid-cols-3 gap-8 mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          {contactInfo.map((contact, index) => {
            const IconComponent = contact.icon
            return (
              <motion.div 
                key={index} 
                className="group relative"
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.6, delay: 0.8 + index * 0.1 }}
                whileHover={{ scale: 1.05, y: -5 }}
              >
                <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-lg border border-gray-200/50 text-center relative overflow-hidden">
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  />
                  
                  <div className="relative z-10">
                    <motion.div 
                      className="flex items-center justify-center w-16 h-16 bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded-2xl mx-auto mb-6 shadow-lg"
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      transition={{ duration: 0.3 }}
                    >
                      <IconComponent className="w-8 h-8 text-gray-700" />
                    </motion.div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3">
                      {contact.label}
                    </h3>
                    <motion.a
                      href={contact.href}
                      className="text-gray-600 hover:text-gray-900 transition-colors font-medium"
                      whileHover={{ scale: 1.05 }}
                    >
                      {contact.value}
                    </motion.a>
                  </div>
                </div>
              </motion.div>
            )
          })}
        </motion.div>

        <motion.div 
          className="flex justify-center gap-6 mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 1.0 }}
        >
          {socialLinks.map((social, index) => {
            const IconComponent = social.icon
            return (
              <MagneticButton
                key={index}
                className="group"
              >
                <motion.a
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 px-6 py-4 bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg border border-gray-200/50 text-gray-600 hover:text-gray-900 transition-all duration-300 hover:shadow-xl"
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <IconComponent size={24} />
                  <span className="font-semibold">{social.label}</span>
                </motion.a>
              </MagneticButton>
            )
          })}
        </motion.div>


      </div>
    </section>
  )
}

export default Contact
