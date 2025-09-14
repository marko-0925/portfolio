'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import TextReveal from './TextReveal'
import { fadeInUp, staggerContainer } from '../utils/animations'

const About = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  return (
    <section id="about" className="section-padding bg-gradient-to-br from-gray-50/30 via-white to-blue-50/10">
      <div className="container-max">
        <div className="max-w-6xl mx-auto" ref={ref}>
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8 }}
          >
            <TextReveal 
              className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6"
              delay={0.2}
            >
              About Me
            </TextReveal>
            <motion.p
              className="text-xl text-gray-600 max-w-3xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              My work philosophy: "Transform client visions into intelligent solutions that exceed expectations through AI-powered innovation"
            </motion.p>
          </motion.div>
          
          <motion.div
            className="max-w-4xl mx-auto text-center"
            variants={staggerContainer}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
          >
            <motion.div
              className="space-y-6"
              variants={fadeInUp}
            >
              <motion.p
                className="text-lg leading-relaxed text-gray-700"
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.6, delay: 0.6 }}
              >
                With over <strong>7 years of experience</strong> in full-stack development and AI integration, I've evolved from a Junior Frontend Developer
                at BrightMarbles to a Senior Full Stack Developer & AI Specialist at Clevertech. I specialize in
                building intelligent applications that leverage machine learning, natural language processing, and advanced AI technologies
                to solve complex business challenges and deliver exceptional user experiences.
              </motion.p>
              <motion.p
                className="text-lg leading-relaxed text-gray-700"
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.6, delay: 0.8 }}
              >
                My passion for AI innovation and problem-solving has driven me to deliver exceptional results
                for clients across various industries. I've successfully implemented AI solutions that have
                increased user engagement by 300%, reduced operational costs by 40%, and automated complex workflows
                that previously required manual intervention. My expertise spans the entire AI development lifecycle,
                from data preprocessing to model deployment and monitoring.
              </motion.p>
              <motion.p 
                className="text-lg leading-relaxed text-gray-700"
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.6, delay: 1.0 }}
              >
                When I'm not building AI-powered solutions, you'll find me researching the latest machine learning algorithms,
                contributing to open-source AI projects, or sharing knowledge through technical blogs and mentoring
                the next generation of AI developers. I'm passionate about democratizing AI technology and making it
                accessible to businesses of all sizes.
              </motion.p>
            </motion.div>

            <motion.div
              className="space-y-6"
              variants={fadeInUp}
            >
              <motion.div
                className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-lg border border-gray-200/50"
                whileHover={{ scale: 1.02, y: -5 }}
                transition={{ duration: 0.3 }}
              >
                <h3 className="text-2xl font-bold text-gray-900 mb-6">AI & Technical Expertise</h3>
                <div className="space-y-4">
                  <motion.div
                    className="flex items-center gap-4 p-3 rounded-xl hover:bg-gray-50/50 transition-colors"
                    whileHover={{ x: 5 }}
                  >
                    <div className="w-3 h-3 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full"></div>
                    <span className="text-gray-700 font-medium">AI/ML Integration & Development</span>
                  </motion.div>
                  <motion.div
                    className="flex items-center gap-4 p-3 rounded-xl hover:bg-gray-50/50 transition-colors"
                    whileHover={{ x: 5 }}
                  >
                    <div className="w-3 h-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full"></div>
                    <span className="text-gray-700 font-medium">Natural Language Processing</span>
                  </motion.div>
                  <motion.div
                    className="flex items-center gap-4 p-3 rounded-xl hover:bg-gray-50/50 transition-colors"
                    whileHover={{ x: 5 }}
                  >
                    <div className="w-3 h-3 bg-gradient-to-r from-green-500 to-teal-500 rounded-full"></div>
                    <span className="text-gray-700 font-medium">Intelligent Automation & Workflows</span>
                  </motion.div>
                  <motion.div
                    className="flex items-center gap-4 p-3 rounded-xl hover:bg-gray-50/50 transition-colors"
                    whileHover={{ x: 5 }}
                  >
                    <div className="w-3 h-3 bg-gradient-to-r from-orange-500 to-red-500 rounded-full"></div>
                    <span className="text-gray-700 font-medium">Data-Driven Solution Architecture</span>
                  </motion.div>
                </div>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default About
