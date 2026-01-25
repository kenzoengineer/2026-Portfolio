import React from 'react'
import { motion } from 'framer-motion'
import { Briefcase, GraduationCap } from 'lucide-react'

interface ExperienceProps {
  darkMode: boolean
}

const Experience: React.FC<ExperienceProps> = ({ darkMode }) => {
  const lightColors = {
    textPrimary: 'text-gray-900',
    textSecondary: 'text-gray-600',
    textAccent: 'text-orange-600',
    cardBg: 'bg-white',
    cardBorder: 'border-gray-200',
    iconBg: 'bg-orange-100',
    iconColor: 'text-orange-600',
    timelineBg: 'bg-gray-200',
    timelineActive: 'bg-gradient-to-b from-orange-500 to-amber-500',
  }

  const darkColors = {
    textPrimary: 'text-white',
    textSecondary: 'text-gray-300',
    textAccent: 'text-orange-500',
    cardBg: 'bg-gray-800',
    cardBorder: 'border-gray-700',
    iconBg: 'bg-orange-900/30',
    iconColor: 'text-orange-400',
    timelineBg: 'bg-gray-700',
    timelineActive: 'bg-gradient-to-b from-orange-500 to-amber-500',
  }

  const colors = darkMode ? darkColors : lightColors

  const experiences = [
    {
      type: 'work',
      title: 'Developer',
      company: 'Canada Life',
      period: '2025 - 2026',
      description: 'Developed and maintained multiple client projects using modern web technologies. Collaborated with design and product teams to deliver high-quality solutions.',
      achievements: [
        'Contributed to the development of backend integrations supporting insurance underwriting workflows.',
        'Analyzed and documented 70+ existing workflows, translating complex business logic into clear, maintainable pseudocode.',
        'Supported the migration of underwriting workflows from legacy systems to the current software platform.',
      ],
    },
    {
      type: 'work',
      title: 'IT & OWL Technical Support',
      company: 'University of Western Ontario',
      period: '2024 - 2025',
      description: '',
      achievements: [
        'Designed and implemented an inventory management system for the Orthodontics Department.',
        'Administered and maintained 60+ workstations running specialized dental software.',
        'Supported faculty in the migration and adoption of dental software systems to Axium, including configuration, testing, and user support',
      ],
    },
    {
      type: 'education',
      title: 'Bachelor of Medical Sciences/Science',
      company: 'University of Western Ontario',
      period: '2020 - 2025',
      description: 'Specialized in Computer Sciences and Interdiscplinary Medical Sciences (Qualified for a Pharmacology Major)',
      achievements: [
        'Final year GPA: 3.95/4.0 ',
      ],
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.5 },
    },
  }

  return (
    <section id="experience" className="min-h-screen flex items-center justify-center px-4 py-20">
      <div className="max-w-6xl mx-auto w-full">
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className={`text-4xl md:text-5xl font-bold ${colors.textPrimary} mb-4`}>
            Experience & <span className={colors.textAccent}>Education</span>
          </h2>
          <div className="h-1 w-20 bg-gradient-to-r from-orange-500 to-amber-500 mx-auto rounded-full" />
        </motion.div>

        {/* Timeline */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="relative"
        >
          {/* Timeline Line */}
          <div className={`absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 ${colors.timelineBg} hidden md:block`} />
          <div className={`absolute left-8 md:left-1/2 top-0 h-full w-0.5 ${colors.timelineActive}`} 
               style={{ 
                 background: darkMode 
                   ? 'linear-gradient(to bottom, #f97316, #f59e0b)' 
                   : 'linear-gradient(to bottom, #f97316, #f59e0b)' 
               }} 
          />

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className={`relative flex flex-col md:flex-row gap-8 ${
                  index % 2 === 0 ? 'md:flex-row-reverse' : ''
                }`}
              >
                {/* Timeline Icon */}
                <div className="absolute left-8 md:left-1/2 -ml-4 md:-ml-4">
                  <div className={`${colors.iconBg} w-12 h-12 rounded-full flex items-center justify-center border-4 ${
                    darkMode ? 'border-gray-900' : 'border-white'
                  }`}>
                    {exp.type === 'work' ? (
                      <Briefcase className={`w-6 h-6 ${colors.iconColor}`} />
                    ) : (
                      <GraduationCap className={`w-6 h-6 ${colors.iconColor}`} />
                    )}
                  </div>
                </div>

                {/* Spacer for alignment */}
                <div className="hidden md:block md:w-1/2" />

                {/* Content Card */}
                <motion.div
                  whileHover={{ y: -5, scale: 1.02 }}
                  className={`md:w-1/2 ml-20 md:ml-0 ${colors.cardBg} p-6 rounded-2xl border ${colors.cardBorder} shadow-lg hover:shadow-xl transition-shadow`}
                >
                  <div className={`inline-block px-3 py-1 ${colors.iconBg} ${colors.iconColor} rounded-full text-sm font-semibold mb-3`}>
                    {exp.period}
                  </div>
                  <h3 className={`text-2xl font-bold ${colors.textPrimary} mb-1`}>
                    {exp.title}
                  </h3>
                  <p className={`${colors.textAccent} font-semibold mb-3`}>
                    {exp.company}
                  </p>
                  <p className={`${colors.textSecondary} mb-4`}>
                    {exp.description}
                  </p>
                  <ul className={`space-y-2 ${colors.textSecondary}`}>
                    {exp.achievements.map((achievement, i) => (
                      <li key={i} className="flex items-start">
                        <span className={`${colors.textAccent} mr-2`}>▸</span>
                        <span>{achievement}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Experience
