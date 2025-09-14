'use client'

import { Briefcase, Cloud, Code, Calendar, MapPin, ChevronRight, Building } from 'lucide-react'
import { motion, useInView } from 'framer-motion'
import { useRef, useState } from 'react'
import { fadeInUp, staggerContainer, scaleIn } from '../utils/animations'
import TextReveal from './TextReveal'

const Experience = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })
  const [hoveredExperience, setHoveredExperience] = useState<number | null>(null)

  const experiences = [
    {
      title: 'Senior Full Stack Developer',
      company: 'Clevertech',
      location: 'Remote',
      period: '2020 – Present',
      icon: Cloud,
      achievements: [
        'Led AI integration initiatives, implementing machine learning models that increased user engagement by 300% and reduced operational costs by 40%.',
        'Developed intelligent chatbots using OpenAI GPT and LangChain, handling 10,000+ customer queries daily with 95% satisfaction rate.',
        'Built advanced recommendation systems using TensorFlow and PyTorch, improving conversion rates by 150% across multiple client projects.',
        'Architected RAG (Retrieval-Augmented Generation) systems for enterprise knowledge management, reducing information retrieval time by 80%.',
        'Implemented MLOps pipelines with automated model deployment, monitoring, and retraining using Docker and Kubernetes.'
      ]
    },
    {
      title: 'Full-Stack Developer',
      company: 'Dock Yard',
      location: 'Remote',
      period: '2017 – 2020',
      icon: Briefcase,
      achievements: [
        'Pioneered early AI integration in web applications, implementing natural language processing features that enhanced user experience by 200%.',
        'Developed predictive analytics dashboards using machine learning algorithms, helping clients make data-driven decisions and increase revenue by 35%.',
        'Built intelligent automation systems that reduced manual data processing time by 70%, significantly improving operational efficiency.',
        'Designed and deployed web apps with React, Node.js and PostgreSQL, boosting load times by 50% via optimized code and efficient queries.',
        'Managed complex state with Redux and automated CI/CD pipelines with Docker for reliable, fast releases.'
      ]
    },
    {
      title: 'Junior Frontend Developer',
      company: 'BrightMarbles',
      location: 'Remote',
      period: '2015 – 2017',
      icon: Code,
      achievements: [
        'Introduced data-driven UI improvements using basic machine learning concepts, resulting in 25% increase in user engagement.',
        'Improved the website performance by reducing average page load time from ~5s to under 2s using lazy loading and library optimization.',
        'Migrated and implemented new pages from the new designs using Figma that are given by designers, ensuring consistent performance across various devices.',
        'Began exploring AI technologies and their potential applications in web development, laying the foundation for future AI expertise.',
        'Thrived in a remote, multicultural team, demonstrating proactive communication and efficient coordination across multiple time zones.'
      ]
    }
  ]

  return (
    <section 
      ref={ref}
      id="experience" 
      className="section-padding relative overflow-hidden bg-gradient-to-br from-gray-50/30 via-white to-blue-50/10"
    >
      <div className="absolute inset-0">
        <motion.div 
          className="absolute top-20 right-20 w-2 h-2 bg-blue-400/10 rounded-full"
          animate={{ 
            scale: [1, 1.5, 1],
            opacity: [0.1, 0.3, 0.1]
          }}
          transition={{ duration: 4, repeat: Infinity }}
        />
        <motion.div 
          className="absolute bottom-32 left-16 w-1.5 h-1.5 bg-purple-400/15 rounded-full"
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
          variants={fadeInUp}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          <TextReveal 
            className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6"
            delay={0.2}
          >
            Professional Experience
          </TextReveal>
          <motion.p
            className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            A journey of building scalable solutions, leading teams, and delivering 
            exceptional results across diverse technology stacks and industries.
          </motion.p>
        </motion.div>

        <motion.div 
          className="space-y-12"
          variants={staggerContainer}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {experiences.map((exp, index) => {
            const IconComponent = exp.icon
            return (
              <motion.div 
                key={index} 
                className="relative"
                variants={scaleIn}
                transition={{ delay: index * 0.2 }}
                onHoverStart={() => setHoveredExperience(index)}
                onHoverEnd={() => setHoveredExperience(null)}
              >
                <motion.div
                  className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-lg border border-gray-200/50 relative overflow-hidden"
                  whileHover={{ 
                    scale: 1.02,
                    y: -5,
                    boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.15)"
                  }}
                  transition={{ duration: 0.4 }}
                >
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-purple-500/5 opacity-0 transition-opacity duration-500"
                    animate={{ opacity: hoveredExperience === index ? 1 : 0 }}
                  />
                  
                  <div className="relative z-10">
                    <div className="flex flex-col lg:flex-row gap-8">
                      <motion.div 
                        className="flex-shrink-0"
                        whileHover={{ scale: 1.1, rotate: 5 }}
                        transition={{ duration: 0.3 }}
                      >
                        <div className="w-16 h-16 bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded-2xl flex items-center justify-center shadow-lg">
                          <IconComponent className="w-8 h-8 text-gray-700" />
                        </div>
                      </motion.div>

                      <div className="flex-1">
                        <motion.div 
                          className="mb-6"
                          initial={{ opacity: 0, x: -20 }}
                          animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                          transition={{ delay: 0.3 + index * 0.1 }}
                        >
                          <h3 className="text-2xl font-bold text-gray-900 mb-2">
                            {exp.title}
                          </h3>
                          <div className="flex flex-wrap gap-4 text-gray-600">
                            <div className="flex items-center gap-2">
                              <Building className="w-4 h-4" />
                              <span className="font-medium">{exp.company}</span>
                            </div>
                            <div className="flex items-center gap-2">
                              <MapPin className="w-4 h-4" />
                              <span>{exp.location}</span>
                            </div>
                            <div className="flex items-center gap-2">
                              <Calendar className="w-4 h-4" />
                              <span>{exp.period}</span>
                            </div>
                          </div>
                        </motion.div>

                        <motion.div
                          className="space-y-4"
                          initial={{ opacity: 0, y: 20 }}
                          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                          transition={{ delay: 0.5 + index * 0.1 }}
                        >
                          {exp.achievements.map((achievement, achievementIndex) => (
                            <motion.div
                              key={achievementIndex}
                              className="flex items-start gap-4 p-3 rounded-xl hover:bg-gray-50/50 transition-colors group"
                              whileHover={{ x: 5 }}
                              initial={{ opacity: 0, x: -10 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ duration: 0.2, delay: 0.7 + index * 0.1 + achievementIndex * 0.05 }}
                            >
                              <motion.div
                                className="w-2 h-2 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mt-2 flex-shrink-0"
                                animate={{ 
                                  scale: [1, 1.2, 1],
                                }}
                                transition={{ 
                                  duration: 2, 
                                  repeat: Infinity,
                                  delay: achievementIndex * 0.2
                                }}
                              />
                              <span className="text-gray-700 leading-relaxed group-hover:text-gray-900 transition-colors">
                                {achievement}
                              </span>
                              <ChevronRight className="w-4 h-4 text-gray-400 opacity-0 group-hover:opacity-100 transition-opacity ml-auto flex-shrink-0" />
                            </motion.div>
                          ))}
                        </motion.div>
                      </div>
                    </div>
                  </div>
                </motion.div>

                {index < experiences.length - 1 && (
                  <motion.div 
                    className="absolute left-8 -bottom-6 w-0.5 h-12 bg-gradient-to-b from-blue-300 to-purple-300 rounded-full"
                    initial={{ scaleY: 0 }}
                    animate={{ scaleY: 1 }}
                    transition={{ delay: 0.8 + index * 0.2, duration: 0.5 }}
                  />
                )}
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}

export default Experience
