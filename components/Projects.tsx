'use client'

import { motion } from 'framer-motion'
import { ExternalLink } from 'lucide-react'

const Projects = () => {
  const projects = [
    {
      title: 'AI-Powered Real Estate Assistant',
      url: 'https://davidsonhomes.com',
      description:
        'An intelligent real estate platform featuring AI-driven property recommendations, natural language search, and predictive analytics for market trends. Integrated OpenAI GPT for personalized property suggestions and automated customer support.',
      technologies: ['React', 'Node.js', 'PostgreSQL', 'OpenAI GPT', 'TensorFlow', 'Python'],
      features: [
        'AI-powered property recommendation engine with 95% accuracy',
        'Natural language search using OpenAI GPT for intuitive property queries',
        'Predictive analytics for market trends and property valuations',
        'Intelligent chatbot handling 1000+ customer inquiries daily',
        'Computer vision for automated property image analysis and categorization'
      ],
      image: `${process.env.NODE_ENV === 'production' ? '/portfolio' : ''}/davidsonhomes-demo.png`
    },
    {
      title: 'Intelligent Hotel Management System',
      url: 'https://hermitage.at',
      description:
        'An advanced hotel booking platform with AI-powered dynamic pricing, intelligent demand forecasting, and personalized guest experience optimization. Features machine learning algorithms for revenue optimization and guest satisfaction prediction.',
      technologies: ['Vue.js', 'Express', 'MongoDB', 'TypeScript', 'Python', 'Scikit-learn', 'OpenAI API'],
      features: [
        'AI-driven dynamic pricing optimization increasing revenue by 25%',
        'Predictive analytics for demand forecasting with 90% accuracy',
        'Intelligent guest preference learning and personalized recommendations',
        'Natural language processing for multilingual customer support',
        'Computer vision for automated room condition assessment'
      ],
      image: `${process.env.NODE_ENV === 'production' ? '/portfolio' : ''}/hermitage-demo.png`
    },
    {
      title: 'AI-Enhanced Luxury Hotel Platform',
      url: 'https://hotel-royal.it',
      description:
        'A sophisticated hotel management platform with AI-powered guest behavior analysis, intelligent concierge services, and automated operational optimization. Features deep learning models for personalized guest experiences and operational efficiency.',
      technologies: ['Angular', 'C#', '.NET', 'MySQL', 'Python', 'PyTorch', 'TensorFlow'],
      features: [
        'AI-powered guest behavior analysis and personalized service recommendations',
        'Intelligent concierge chatbot with natural language understanding',
        'Automated operational optimization reducing costs by 30%',
        'Predictive maintenance system for hotel facilities',
        'Advanced sentiment analysis for guest feedback processing'
      ],
      image: `${process.env.NODE_ENV === 'production' ? '/portfolio' : ''}/hotel-royal-demo.png`
    },
    {
      title: 'AI-Driven Business Proposal Platform',
      url: 'https://offorte.com',
      description:
        'An intelligent proposal and quotation platform with AI-powered content generation, automated pricing optimization, and predictive analytics for proposal success rates. Features advanced natural language processing for dynamic proposal creation and client engagement optimization.',
      technologies: ['React', 'Python', 'Django', 'PostgreSQL', 'Redis', 'OpenAI GPT', 'LangChain', 'Hugging Face'],
      features: [
        'AI-powered proposal content generation with 85% client approval rate',
        'Intelligent pricing optimization using machine learning algorithms',
        'Predictive analytics for proposal success probability and client engagement',
        'Natural language processing for automated proposal customization',
        'Advanced analytics dashboard with AI-driven insights and recommendations'
      ],
      image: `${process.env.NODE_ENV === 'production' ? '/portfolio' : ''}/offorte-demo.png`
    }
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2
      }
    }
  }

  const projectVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0
    }
  }

  return (
    <section id="projects" className="section-padding bg-white">
      <div className="container-max">
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <motion.h2
            className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            Featured Projects
          </motion.h2>
          <motion.p
            className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            A showcase of innovative solutions and technical excellence across various domains and technologies.
          </motion.p>
        </motion.div>

        <motion.div
          className="space-y-16"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {projects.map((project, index) => (
            <motion.div
              key={index}
              className="grid lg:grid-cols-2 gap-12 items-center"
              variants={projectVariants}
            >
              {/* Project Image */}
              <motion.div
                className={`order-2 ${index % 2 === 0 ? 'lg:order-1' : 'lg:order-2'}`}
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                <motion.div
                  className="relative group"
                  whileHover={{ y: -10 }}
                  transition={{ duration: 0.3 }}
                >
                  <motion.img
                    src={project.image}
                    alt={`${project.title} screenshot`}
                    className="rounded-xl shadow-lg object-contain w-full h-auto bg-white group-hover:shadow-2xl transition-shadow duration-300"
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    viewport={{ once: true }}
                  />
                  {/* Overlay with link */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center"
                    whileHover={{ opacity: 1 }}
                  >
                    <motion.a
                      href={project.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-white/90 backdrop-blur-sm text-gray-900 px-4 py-2 rounded-lg font-medium flex items-center gap-2 hover:bg-white transition-colors"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <ExternalLink size={16} />
                      View Live
                    </motion.a>
                  </motion.div>
                </motion.div>
              </motion.div>

              {/* Project Content */}
              <motion.div
                className={`order-1 ${index % 2 === 0 ? 'lg:order-2' : 'lg:order-1'} space-y-6`}
                initial={{ opacity: 0, x: index % 2 === 0 ? 50 : -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                viewport={{ once: true }}
              >
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                  viewport={{ once: true }}
                >
                  <motion.h3
                    className="text-2xl font-bold text-gray-900 mb-3"
                    whileHover={{ scale: 1.02 }}
                  >
                    <motion.a
                      href={project.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:underline bg-gradient-to-r from-primary-600 to-purple-600 bg-clip-text text-transparent hover:from-primary-700 hover:to-purple-700 transition-all duration-300"
                      whileHover={{ scale: 1.05 }}
                    >
                      {project.title}
                    </motion.a>
                  </motion.h3>
                  <motion.p
                    className="text-gray-600 leading-relaxed"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.5 }}
                    viewport={{ once: true }}
                  >
                    {project.description}
                  </motion.p>
                </motion.div>

                {/* Technologies */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.6 }}
                  viewport={{ once: true }}
                >
                  <h4 className="text-sm font-semibold text-gray-900 mb-3 uppercase tracking-wide">
                    Technologies Used
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, techIndex) => (
                      <motion.span
                        key={techIndex}
                        className="px-3 py-1 bg-gradient-to-r from-primary-100 to-purple-100 text-primary-700 text-sm font-medium rounded-full hover:from-primary-200 hover:to-purple-200 cursor-default"
                        initial={{ opacity: 0, scale: 0 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.3, delay: 0.7 + techIndex * 0.1 }}
                        whileHover={{
                          scale: 1.1,
                          boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)"
                        }}
                        viewport={{ once: true }}
                      >
                        {tech}
                      </motion.span>
                    ))}
                  </div>
                </motion.div>

                {/* Key Features */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.8 }}
                  viewport={{ once: true }}
                >
                  <h4 className="text-sm font-semibold text-gray-900 mb-3 uppercase tracking-wide">
                    Key Features
                  </h4>
                  <ul className="space-y-2">
                    {project.features.map((feature, featureIndex) => (
                      <motion.li
                        key={featureIndex}
                        className="flex items-start gap-3"
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.3, delay: 0.9 + featureIndex * 0.1 }}
                        whileHover={{ x: 5 }}
                        viewport={{ once: true }}
                      >
                        <motion.div
                          className="w-1.5 h-1.5 bg-gradient-to-r from-primary-600 to-purple-600 rounded-full mt-2 flex-shrink-0"
                          animate={{
                            scale: [1, 1.2, 1],
                          }}
                          transition={{
                            duration: 2,
                            repeat: Infinity,
                            delay: featureIndex * 0.2
                          }}
                        ></motion.div>
                        <span className="text-gray-700 text-sm">{feature}</span>
                      </motion.li>
                    ))}
                  </ul>
                </motion.div>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default Projects