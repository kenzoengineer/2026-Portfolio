import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Github, Linkedin, Mail, Download, ChevronDown } from 'lucide-react'
import { TypewriterEffect } from './ui/typewriter-effect'

interface HeroProps {
  darkMode: boolean
}

const Hero: React.FC<HeroProps> = ({ darkMode }) => {
  const [currentTitleIndex, setCurrentTitleIndex] = useState(0)

  const titleWords = [
    [
      { text: 'Software' },
      { text: 'Engineer', className: 'text-orange-500 dark:text-orange-500' },
    ],
    [
      { text: 'Full' },
      { text: 'Stack' },
      { text: 'Developer', className: 'text-orange-500 dark:text-orange-500' },
    ],
    [
      { text: 'Machine' },
      { text: 'Learning' },
      { text: 'Engineer', className: 'text-orange-500 dark:text-orange-500' },
    ],
    [
      { text: 'Software' },
      { text: 'Developer', className: 'text-orange-500 dark:text-orange-500' },
    ],
    [
      { text: 'Data' },
      { text: 'Scientist', className: 'text-orange-500 dark:text-orange-500' },
    ],
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTitleIndex((prev) => (prev + 1) % titleWords.length)
    }, 8000) // Change every 4 seconds

    return () => clearInterval(interval)
  }, [titleWords.length])

  const lightColors = {
    textPrimary: 'text-gray-900',
    textSecondary: 'text-gray-600',
    textAccent: 'text-orange-600',
    button: 'from-orange-500 to-amber-500',
    iconBg: 'bg-gray-100 hover:bg-orange-50',
    iconColor: 'text-gray-700 group-hover:text-orange-500',
  }

  const darkColors = {
    textPrimary: 'text-white',
    textSecondary: 'text-gray-300',
    textAccent: 'text-orange-500',
    button: 'from-orange-500 to-amber-500',
    iconBg: 'bg-gray-800 hover:bg-gray-700',
    iconColor: 'text-gray-300 group-hover:text-orange-400',
  }

  const colors = darkMode ? darkColors : lightColors

  const socialLinks = [
    { icon: Github, href: 'https://github.com', label: 'GitHub' },
    { icon: Linkedin, href: 'https://linkedin.com', label: 'LinkedIn' },
    { icon: Mail, href: 'mailto:your@email.com', label: 'Email' },
  ]

  return (
    <section id="home" className="min-h-screen flex items-center justify-center px-4 pt-20">
      <div className="max-w-6xl mx-auto w-full">
        <div className="flex flex-col items-center text-center space-y-8">
          {/* Greeting */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <p className={`text-lg md:text-4xl ${colors.textSecondary} mb-2`}>
              Hi, I'm
            </p>
            <h1 className={`text-5xl md:text-7xl lg:text-8xl font-bold ${colors.textPrimary} mb-4`}>
              Kevin Du
            </h1>
            <h2 className={`font-bold ${colors.textAccent} min-h-[80px] md:min-h-[100px] lg:min-h-[120px] flex items-center justify-center`}>
              <span className="text-3xl md:text-5xl lg:text-6xl">Aspiring</span>
              <span className="mx-2">

                <TypewriterEffect
                  key={currentTitleIndex}
                  words={titleWords[currentTitleIndex]}
                  size="text-3xl md:text-5xl lg:text-6xl"
                />
              </span>
            </h2>
          </motion.div>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className={`max-w-2xl text-lg md:text-xl ${colors.textSecondary}`}
          >
            Passionate about TBDX.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="flex flex-wrap gap-4 justify-center"
          >
            <motion.a
              href="#projects"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`px-8 py-3 font-semibold rounded-full bg-gradient-to-r ${colors.button} text-white shadow-lg hover:shadow-xl transition-shadow`}
            >
              View My Work
            </motion.a>
            <motion.a
              href="/resume.pdf"
              download
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`px-8 py-3 font-semibold rounded-full border-2 ${
                darkMode ? 'border-orange-500 text-orange-500' : 'border-orange-600 text-orange-600'
              } hover:bg-orange-500 hover:text-white transition-all flex items-center gap-2`}
            >
              <Download className="w-5 h-5" />
              Download CV
            </motion.a>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="flex gap-4"
          >
            {socialLinks.map((social, index) => (
              <motion.a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ y: -5 }}
                whileTap={{ scale: 0.95 }}
                className={`p-3 rounded-full ${colors.iconBg} transition-colors group`}
                aria-label={social.label}
              >
                <social.icon className={`w-6 h-6 ${colors.iconColor} transition-colors`} />
              </motion.a>
            ))}
          </motion.div>

          {/* Scroll Indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.8 }}
            className="absolute bottom-8"
          >
            <motion.a
              href="#about"
              animate={{ y: [0, 10, 0] }}
              transition={{ repeat: Infinity, duration: 2 }}
              className={colors.iconColor}
            >
              <ChevronDown className="w-8 h-8" />
            </motion.a>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Hero
