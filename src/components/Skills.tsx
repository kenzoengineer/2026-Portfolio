import React, { useMemo, useState } from 'react'
import { motion } from 'framer-motion'
import { TypewriterEffect } from './ui/typewriter-effect'
import { GlareCard } from './ui/glare-card'
import typescriptIcon from '../assets/typescript.svg'
import javascriptIcon from '../assets/logo-javascript.svg'
import rustIcon from '../assets/rust-logo-512x512-blk.png'
import cppIcon from '../assets/c-plus-plus.svg'
import reactIcon from '../assets/react.svg'
import awsIcon from '../assets/aws.svg'

interface SkillsProps {
  darkMode: boolean
}

const Skills: React.FC<SkillsProps> = ({ darkMode }) => {
  const lightColors = {
    textPrimary: 'text-gray-900',
    textSecondary: 'text-gray-600',
    textAccent: 'text-orange-600',
    cardBg: 'bg-white',
    cardBorder: 'border-gray-200',
    skillBg: 'bg-gray-100',
    skillHover: 'hover:bg-orange-50',
    progressBg: 'bg-gray-200',
    progressFill: 'bg-gradient-to-r from-orange-500 to-amber-500',
  }

  const darkColors = {
    textPrimary: 'text-white',
    textSecondary: 'text-gray-300',
    textAccent: 'text-orange-500',
    cardBg: 'bg-gray-800',
    cardBorder: 'border-gray-700',
    skillBg: 'bg-gray-700',
    skillHover: 'hover:bg-gray-600',
    progressBg: 'bg-gray-700',
    progressFill: 'bg-gradient-to-r from-orange-500 to-amber-500',
  }

  const colors = darkMode ? darkColors : lightColors

  const skillCategories = [
    {
      title: 'Languages',
      color: 'bg-red-500',
      skills: [
        { name: 'Python', icon: 'PY', image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg' },
        { name: 'Rust', icon: 'RS', image: rustIcon },
        { name: 'Java', icon: 'JAVA', image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg' },
        { name: 'TypeScript', icon: 'TS', image: typescriptIcon },
        { name: 'JavaScript', icon: 'JS', image: javascriptIcon },
        { name: 'C++', icon: 'CPP', image: cppIcon },
      ],
    },
    {
      title: 'Frameworks',
      color: 'bg-orange-500',
      skills: [
        { name: 'FastAPI', image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/fastapi/fastapi-original.svg' },
        { name: 'Springboot', image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original.svg' },
        { name: 'Pytorch', image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pytorch/pytorch-original.svg' },
        { name: 'Keras', image: 'https://cdn.jsdelivr.net/gh/devicons/devicon@v2.17.0/icons/keras/keras-plain.svg' },
        { name: 'React', image: reactIcon },
        { name: 'Vite', image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vitejs/vitejs-original.svg' },
      ],
    },
    {
      title: 'Tools',
      color: 'bg-blue-500',
      skills: [
        { name: 'Git', image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg' },
        { name: 'Docker', image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg' },
        { name: 'Kubernetes', image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kubernetes/kubernetes-plain.svg' },
        { name: 'Jupyter Notebook', image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jupyter/jupyter-original.svg' },
        { name: 'AWS', image: awsIcon },
        { name: 'Pandas', image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pandas/pandas-original.svg' },
      ],
    },
  ]

  const [activeSkill, setActiveSkill] = useState<string>('')

  const typewriterWords = activeSkill
    ? [{ text: activeSkill, className: 'text-orange-500' }]
    : [{ text: '...', className: 'text-orange-500' }]

  return (
    <section id="skills" className="min-h-screen flex items-center justify-center px-4 py-20">
      <div className="max-w-6xl mx-auto w-full flex flex-col gap-10">
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className={`text-4xl md:text-5xl font-bold ${colors.textPrimary} mb-4`}>
            My <span className={colors.textAccent}>Skills</span>
          </h2>
          <div className="h-1 w-20 bg-gradient-to-r from-orange-500 to-amber-500 mx-auto rounded-full" />
        </motion.div>

        {/* Two-column layout: left text, right cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
          {/* Left: competence text */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="flex md:justify-end justify-center md:self-center"
          >
            <div className={`text-center ${colors.cardBg} border ${colors.cardBorder} rounded-2xl px-6 py-4 shadow-md w-full max-w-sm`}>
              <p className={`text-xs uppercase tracking-[0.2em] ${colors.textSecondary}`}>Kevin is competent at</p>
              <div className="mt-1 flex justify-center">
                <TypewriterEffect key={activeSkill || 'placeholder'} words={typewriterWords} />
              </div>
            </div>
          </motion.div>

          {/* Right: skills cards */}
          <div className="w-full space-y-8">
            {skillCategories.map((category, index) => (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="space-y-3"
              >
                <h3 className={`text-lg font-bold ${colors.textPrimary}`}>
                  {category.title}
                </h3>
                <div className="flex flex-wrap gap-3">
                  {category.skills.map(skill => (
                    <motion.div
                      key={skill.name}
                      whileHover={{ scale: 1.05 }}
                      onMouseEnter={() => setActiveSkill(skill.name)}
                      onMouseLeave={() => setActiveSkill('')}
                      className="cursor-pointer"
                    >
                      <GlareCard containerClassName="w-16 h-16" darkMode={darkMode}>
                        <div className={`w-full h-full ${category.color} flex items-center justify-center p-2`}>
                          <img src={skill.image} alt={skill.name} className="w-10 h-10 object-contain filter brightness-0 invert" />
                        </div>
                      </GlareCard>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Skills
