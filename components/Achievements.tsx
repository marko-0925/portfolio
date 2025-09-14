'use client'

import { motion, useInView } from 'framer-motion'
import { useRef, useState } from 'react'
import { Award, TrendingUp, Users, Zap, Brain, Target } from 'lucide-react'
import { fadeInUp, staggerContainer, scaleIn } from '../utils/animations'
import TextReveal from './TextReveal'

const Achievements = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })
  const [hoveredAchievement, setHoveredAchievement] = useState<number | null>(null)

  const achievements = [
    {
      title: 'AI Impact Metrics',
      icon: TrendingUp,
      stats: [
        { label: 'User Engagement Increase', value: '300%', color: 'from-green-500 to-emerald-500' },
        { label: 'Operational Cost Reduction', value: '40%', color: 'from-blue-500 to-cyan-500' },
        { label: 'Conversion Rate Improvement', value: '150%', color: 'from-purple-500 to-pink-500' },
        { label: 'Processing Time Reduction', value: '80%', color: 'from-orange-500 to-red-500' }
      ]
    },
    {
      title: 'AI Certifications & Training',
      icon: Award,
      stats: [
        { label: 'OpenAI API Specialist', value: 'Certified', color: 'from-emerald-500 to-green-500' },
        { label: 'TensorFlow Developer', value: 'Advanced', color: 'from-orange-500 to-red-500' },
        { label: 'Machine Learning Engineer', value: 'Professional', color: 'from-blue-500 to-indigo-500' },
        { label: 'AI Ethics & Governance', value: 'Certified', color: 'from-purple-500 to-pink-500' }
      ]
    },
    {
      title: 'AI Project Success',
      icon: Target,
      stats: [
        { label: 'AI Models Deployed', value: '25+', color: 'from-cyan-500 to-blue-500' },
        { label: 'Client Satisfaction Rate', value: '98%', color: 'from-green-500 to-teal-500' },
        { label: 'AI Solutions Delivered', value: '50+', color: 'from-purple-500 to-indigo-500' },
        { label: 'Data Points Processed', value: '10M+', color: 'from-pink-500 to-rose-500' }
      ]
    },
    {
      title: 'AI Innovation Awards',
      icon: Brain,
      stats: [
        { label: 'Best AI Integration', value: '2023', color: 'from-yellow-500 to-orange-500' },
        { label: 'Innovation in Automation', value: '2022', color: 'from-blue-500 to-purple-500' },
        { label: 'Excellence in ML', value: '2023', color: 'from-green-500 to-emerald-500' },
        { label: 'AI Leadership Award', value: '2024', color: 'from-pink-500 to-purple-500' }
      ]
    }
  ]

  const certifications = [
    {
      name: 'OpenAI API Specialist Certification',
      issuer: 'OpenAI',
      year: '2024',
      description: 'Advanced certification in OpenAI API integration, prompt engineering, and fine-tuning techniques.',
      icon: '🔮'
    },
    {
      name: 'TensorFlow Developer Certificate',
      issuer: 'Google',
      year: '2023',
      description: 'Professional certification in TensorFlow for machine learning and deep learning applications.',
      icon: '🔬'
    },
    {
      name: 'Machine Learning Engineer',
      issuer: 'AWS',
      year: '2023',
      description: 'Comprehensive certification covering ML algorithms, model deployment, and MLOps practices.',
      icon: '🤖'
    },
    {
      name: 'AI Ethics & Governance',
      issuer: 'Microsoft',
      year: '2024',
      description: 'Specialized certification in responsible AI development and ethical AI implementation.',
      icon: '⚖️'
    }
  ]

  return (
    <section 
      ref={ref}
      id="achievements" 
      className="section-padding relative overflow-hidden bg-gradient-to-br from-gray-50/30 via-white to-purple-50/10"
    >
      <div className="absolute inset-0">
        <motion.div 
          className="absolute top-20 right-20 w-2 h-2 bg-purple-400/10 rounded-full"
          animate={{ 
            scale: [1, 1.5, 1],
            opacity: [0.1, 0.3, 0.1]
          }}
          transition={{ duration: 4, repeat: Infinity }}
        />
        <motion.div 
          className="absolute bottom-32 left-16 w-1.5 h-1.5 bg-blue-400/15 rounded-full"
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
            AI Achievements & Impact
          </TextReveal>
          <motion.p
            className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            Quantifiable results and professional recognition in AI development, 
            demonstrating real-world impact and technical excellence.
          </motion.p>
        </motion.div>

        {/* Achievement Stats Grid */}
        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20"
          variants={staggerContainer}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {achievements.map((achievement, index) => {
            const IconComponent = achievement.icon
            return (
              <motion.div
                key={index}
                className="group relative"
                variants={scaleIn}
                transition={{ delay: index * 0.1 }}
                onHoverStart={() => setHoveredAchievement(index)}
                onHoverEnd={() => setHoveredAchievement(null)}
              >
                <motion.div
                  className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 border border-gray-200/50 shadow-lg hover:shadow-xl transition-all duration-500 relative overflow-hidden h-full"
                  whileHover={{
                    scale: 1.02,
                    y: -5,
                    boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.15)"
                  }}
                  transition={{ duration: 0.4 }}
                >
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-pink-500/5 opacity-0 transition-opacity duration-500"
                    animate={{ opacity: hoveredAchievement === index ? 1 : 0 }}
                  />

                  <div className="relative z-10">
                    <motion.div
                      className="flex items-center gap-3 mb-4"
                      whileHover={{ scale: 1.05 }}
                      transition={{ duration: 0.2 }}
                    >
                      <div className="w-10 h-10 bg-gradient-to-br from-purple-500/10 to-pink-500/10 rounded-xl flex items-center justify-center">
                        <IconComponent className="w-5 h-5 text-purple-600" />
                      </div>
                      <h3 className="text-lg font-bold text-gray-900">{achievement.title}</h3>
                    </motion.div>

                    <div className="space-y-3">
                      {achievement.stats.map((stat, statIndex) => (
                        <motion.div
                          key={statIndex}
                          className="flex justify-between items-center p-2 rounded-lg hover:bg-gray-50/50 transition-colors"
                          whileHover={{ x: 5 }}
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.2, delay: index * 0.1 + statIndex * 0.05 }}
                        >
                          <span className="text-sm text-gray-600 font-medium">{stat.label}</span>
                          <motion.span
                            className={`text-sm font-bold bg-gradient-to-r ${stat.color} bg-clip-text text-transparent`}
                            animate={hoveredAchievement === index ? {
                              scale: [1, 1.1, 1],
                            } : {}}
                            transition={{
                              duration: 1.5,
                              repeat: Infinity,
                              delay: statIndex * 0.2
                            }}
                          >
                            {stat.value}
                          </motion.span>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            )
          })}
        </motion.div>

        {/* Certifications Section */}
        <motion.div
          className="max-w-6xl mx-auto"
          variants={staggerContainer}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          <motion.div
            className="text-center mb-12"
            variants={fadeInUp}
          >
            <h3 className="text-3xl font-bold text-gray-900 mb-4">Professional AI Certifications</h3>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Recognized expertise in cutting-edge AI technologies and best practices
            </p>
          </motion.div>

          <motion.div
            className="grid md:grid-cols-2 gap-8"
            variants={staggerContainer}
          >
            {certifications.map((cert, index) => (
              <motion.div
                key={index}
                className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 border border-gray-200/50 shadow-lg hover:shadow-xl transition-all duration-500"
                variants={scaleIn}
                whileHover={{
                  scale: 1.02,
                  y: -5,
                  boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.15)"
                }}
                transition={{ duration: 0.4 }}
              >
                <div className="flex items-start gap-4">
                  <motion.div
                    className="text-3xl"
                    whileHover={{ scale: 1.2, rotate: 10 }}
                    transition={{ duration: 0.3 }}
                  >
                    {cert.icon}
                  </motion.div>
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-2">
                      <h4 className="text-lg font-bold text-gray-900">{cert.name}</h4>
                      <span className="text-sm text-gray-500 bg-gray-100 px-2 py-1 rounded-full">
                        {cert.year}
                      </span>
                    </div>
                    <p className="text-sm text-gray-600 font-medium mb-2">{cert.issuer}</p>
                    <p className="text-sm text-gray-700 leading-relaxed">{cert.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default Achievements
