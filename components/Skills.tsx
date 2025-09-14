'use client'

import { motion, useInView } from 'framer-motion'
import { useRef, useState } from 'react'
import { fadeInUp, staggerContainer, scaleIn } from '../utils/animations'
import TextReveal from './TextReveal'
import AnimatedProgressBar from './AnimatedProgressBar'

const Skills = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })
  const [hoveredSkill, setHoveredSkill] = useState<number | null>(null)

  const skillCategories = [
    {
      title: 'Frontend',
      skills: [
        { name: 'HTML', level: 98, color: 'from-orange-500 to-red-500', icon: '🌐' },
        { name: 'CSS', level: 95, color: 'from-blue-400 to-purple-500', icon: '🎨' },
        { name: 'JavaScript', level: 95, color: 'from-yellow-400 to-yellow-600', icon: '🟨' },
        { name: 'TypeScript', level: 90, color: 'from-blue-600 to-blue-800', icon: '📘' },
        { name: 'React', level: 95, color: 'from-blue-500 to-cyan-500', icon: '⚛️' },
        { name: 'Vue', level: 85, color: 'from-green-400 to-green-600', icon: '💚' },
        { name: 'Angular', level: 80, color: 'from-red-500 to-red-700', icon: '🅰️' },
        { name: 'Flutter', level: 75, color: 'from-blue-400 to-cyan-500', icon: '📱' },
        { name: 'Svelte', level: 70, color: 'from-orange-400 to-red-500', icon: '🔥' },
      ]
    },
    {
      title: 'Backend',
      skills: [
        { name: 'Node.js', level: 88, color: 'from-green-500 to-green-700', icon: '🟢' },
        { name: 'Python', level: 82, color: 'from-blue-400 to-yellow-500', icon: '🐍' },
        { name: 'C#', level: 80, color: 'from-purple-600 to-indigo-700', icon: '🔷' },
        { name: 'PHP', level: 80, color: 'from-purple-600 to-indigo-700', icon: '🐘' },
        { name: 'Express', level: 87, color: 'from-gray-600 to-gray-800', icon: '🚀' },
        { name: '.NET', level: 78, color: 'from-blue-600 to-purple-600', icon: '🔵' },
        { name: 'Django', level: 75, color: 'from-green-600 to-green-800', icon: '🎯' },
        { name: 'Laravel', level: 73, color: 'from-red-500 to-orange-600', icon: '🔴' },
      ]
    },
    {
      title: 'Database',
      skills: [
        { name: 'MySQL', level: 88, color: 'from-blue-500 to-blue-700', icon: '🗄️' },
        { name: 'MongoDB', level: 85, color: 'from-green-600 to-green-800', icon: '🍃' },
        { name: 'PostgreSQL', level: 85, color: 'from-blue-700 to-indigo-800', icon: '🐘' },
        { name: 'Firebase', level: 80, color: 'from-yellow-500 to-orange-500', icon: '🔥' },
        { name: 'SSMS', level: 75, color: 'from-blue-600 to-indigo-700', icon: '🗃️' },
      ]
    },
    {
      title: 'Cloud Platforms',
      skills: [
        { name: 'AWS', level: 88, color: 'from-orange-400 to-orange-600', icon: '☁️' },
        { name: 'GCP', level: 82, color: 'from-blue-500 to-green-500', icon: '🌐' },
        { name: 'Azure', level: 80, color: 'from-blue-600 to-blue-800', icon: '🔵' },
      ]
    },
    {
      title: 'AI & Machine Learning',
      skills: [
        { name: 'Machine Learning', level: 88, color: 'from-purple-500 to-pink-500', icon: '🤖' },
        { name: 'Deep Learning', level: 85, color: 'from-indigo-500 to-purple-600', icon: '🧠' },
        { name: 'Natural Language Processing', level: 82, color: 'from-blue-500 to-cyan-500', icon: '💬' },
        { name: 'Computer Vision', level: 80, color: 'from-green-500 to-teal-500', icon: '👁️' },
        { name: 'TensorFlow', level: 85, color: 'from-orange-500 to-red-500', icon: '🔬' },
        { name: 'PyTorch', level: 83, color: 'from-red-500 to-orange-500', icon: '🔥' },
        { name: 'OpenAI GPT', level: 90, color: 'from-emerald-500 to-green-500', icon: '✨' },
        { name: 'Hugging Face', level: 78, color: 'from-yellow-500 to-orange-500', icon: '🤗' },
        { name: 'Scikit-learn', level: 85, color: 'from-blue-600 to-indigo-600', icon: '📊' },
        { name: 'Pandas & NumPy', level: 90, color: 'from-gray-600 to-gray-800', icon: '🐼' },
        { name: 'MLOps & Deployment', level: 80, color: 'from-purple-600 to-pink-600', icon: '🚀' },
        { name: 'Data Visualization', level: 85, color: 'from-cyan-500 to-blue-500', icon: '📈' },
      ]
    },
    {
      title: 'AI Integration & APIs',
      skills: [
        { name: 'OpenAI API', level: 92, color: 'from-emerald-500 to-green-500', icon: '🔮' },
        { name: 'LangChain', level: 85, color: 'from-blue-500 to-cyan-500', icon: '⛓️' },
        { name: 'Vector Databases', level: 80, color: 'from-purple-500 to-pink-500', icon: '🗃️' },
        { name: 'RAG Systems', level: 82, color: 'from-indigo-500 to-purple-500', icon: '🔍' },
        { name: 'AI Chatbots', level: 88, color: 'from-green-500 to-teal-500', icon: '💬' },
        { name: 'Prompt Engineering', level: 90, color: 'from-yellow-500 to-orange-500', icon: '✍️' },
        { name: 'Fine-tuning Models', level: 75, color: 'from-red-500 to-pink-500', icon: '🎯' },
        { name: 'AI Analytics', level: 85, color: 'from-cyan-500 to-blue-500', icon: '📊' },
      ]
    },
    {
      title: 'DevOps & Tools',
      skills: [
        { name: 'Docker', level: 85, color: 'from-blue-500 to-blue-700', icon: '🐳' },
        { name: 'Kubernetes', level: 78, color: 'from-blue-600 to-purple-600', icon: '⚙️' },
        { name: 'Kafka', level: 75, color: 'from-gray-600 to-gray-800', icon: '📡' },
        { name: 'CI/CD', level: 88, color: 'from-green-500 to-teal-600', icon: '🔄' },
        { name: 'GitHub', level: 92, color: 'from-gray-700 to-gray-900', icon: '📝' },
      ]
    }
  ]

  return (
    <section 
      ref={ref}
      id="skills" 
      className="section-padding relative overflow-hidden bg-white"
    >
      {/* Clean background with subtle elements */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-50/30 via-white to-blue-50/10" />
        
        {/* Minimal floating elements */}
        <motion.div 
          className="absolute top-32 left-16 w-2 h-2 bg-blue-400/10 rounded-full"
          animate={{ 
            scale: [1, 1.5, 1],
            opacity: [0.1, 0.3, 0.1]
          }}
          transition={{ duration: 4, repeat: Infinity }}
        />
        <motion.div 
          className="absolute bottom-32 right-16 w-1.5 h-1.5 bg-purple-400/15 rounded-full"
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
            Technical Skills
          </TextReveal>
          <motion.p
            className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            A comprehensive toolkit of modern technologies and frameworks 
            for building exceptional digital experiences.
          </motion.p>
        </motion.div>

        {/* Skills by Technology Categories */}
        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={staggerContainer}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={categoryIndex}
              className="group relative"
              variants={scaleIn}
              transition={{ delay: categoryIndex * 0.1 }}
              onHoverStart={() => setHoveredSkill(categoryIndex)}
              onHoverEnd={() => setHoveredSkill(null)}
            >
              <motion.div
                className="bg-white/80 backdrop-blur-sm rounded-2xl p-5 border border-gray-200/50 shadow-lg hover:shadow-xl transition-all duration-500 relative overflow-hidden h-full"
                whileHover={{
                  scale: 1.02,
                  y: -5,
                  boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.15)"
                }}
                transition={{ duration: 0.4 }}
              >
                {/* Animated background gradient on hover */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-purple-500/5 opacity-0 transition-opacity duration-500"
                  animate={{ opacity: hoveredSkill === categoryIndex ? 1 : 0 }}
                />

                <div className="relative z-10">
                  {/* Category Title */}
                  <motion.h3
                    className="text-lg font-bold text-gray-900 mb-4 text-center"
                    animate={hoveredSkill === categoryIndex ? {
                      scale: 1.05
                    } : {}}
                    transition={{ duration: 0.2 }}
                  >
                    {category.title}
                  </motion.h3>

                  {/* Skills Grid */}
                  <div className="grid grid-cols-3 gap-3">
                    {category.skills.map((skill, skillIndex) => (
                      <motion.div
                        key={skillIndex}
                        className="flex flex-col items-center p-2 rounded-lg hover:bg-gray-50/50 transition-colors group/skill"
                        whileHover={{ scale: 1.05 }}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.2, delay: categoryIndex * 0.1 + skillIndex * 0.05 }}
                      >
                        {/* Skill Icon */}
                        <motion.div
                          className="text-xl mb-1"
                          animate={hoveredSkill === categoryIndex ? {
                            scale: [1, 1.1, 1],
                          } : {}}
                          transition={{
                            duration: 1.5,
                            repeat: Infinity,
                            delay: skillIndex * 0.2
                          }}
                        >
                          {skill.icon}
                        </motion.div>

                        {/* Skill Name */}
                        <span className="text-xs font-medium text-gray-700 text-center leading-tight group-hover/skill:text-gray-900 transition-colors">
                          {skill.name}
                        </span>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default Skills
