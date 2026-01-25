import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Github, ExternalLink } from 'lucide-react'
import { IconArrowLeft, IconArrowRight } from '@tabler/icons-react'
import umaImage from '../assets/Umamusume_Pretty_Derby_game_cover.jpg'
import lungCancerImage from '../assets/lung-cancer.jpg.webp'
import riftRewindImage from '../assets/riftrewind.jpg'

interface ProjectsProps {
  darkMode: boolean
}

const Projects: React.FC<ProjectsProps> = ({ darkMode }) => {
  const [active, setActive] = useState(0)

const projects = [
  {
    title: 'UmaAPI',
    description:
      'Production-ready REST API serving structured Uma Musume character, skill, and event data. Implements Redis caching for low-latency responses, localization-ready schemas, and clean versioned endpoints designed for frontend and third-party integrations.',
    image: umaImage,
    tags: [
      'Python',
      'FastAPI',
      'PostgreSQL',
      'Redis',
      'SQLAlchemy',
      'REST API',
      'Docker',
    ],
    github: 'https://github.com/VidaLucia/UmaAPI',
    live: null,
  },
  {
    title: 'Medical Imaging Diagnostics',
    description:
      'Deep learning–based medical imaging platform for disease classification using chest X-ray data. Implements CNN architectures with transfer learning to diagnose lung cancer, pneumonia, and tuberculosis, with a deployed web interface for interactive inference and visualization.',
    image: lungCancerImage,
    tags: [
      'Python',
      'PyTorch',
      'CNN',
      'Transfer Learning',
      'Medical Imaging',
      'Computer Vision',
      'Deep Learning',
    ],
    github: 'https://github.com/nathan-nw/MedicalImagingDiagnostics',
    live: 'https://medical-imaging-diagnostics.vercel.app',
  },
  {
    title: 'Rift Rewind',
    description:
      'Interactive League of Legends match analytics platform featuring timeline-based match playback, champion performance insights, and player progression summaries. Built with a modern React stack and designed to integrate with a FastAPI backend and ML-driven analysis.',
    image: riftRewindImage,
    tags: [
      'React',
      'TypeScript',
      'Vite',
      'Tailwind CSS',
      'Data Visualization',
      'Game Analytics',
      'API Integration',
    ],
    github: 'https://github.com/VidaLucia/rift-rewind-vl',
    live: null,
  },
];

  const handleNext = () => {
    setActive((prev) => (prev + 1) % projects.length)
  }

  const handlePrev = () => {
    setActive((prev) => (prev - 1 + projects.length) % projects.length)
  }

  const isActive = (index: number) => {
    return index === active
  }

  const randomRotateY = () => {
    return Math.floor(Math.random() * 21) - 10
  }

  return (
    <section id="projects" className="min-h-screen flex items-center justify-center px-4 py-20">
      <div className="max-w-6xl mx-auto w-full">
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className={`text-4xl md:text-5xl font-bold ${darkMode ? 'text-white' : 'text-gray-900'} mb-4`}>
            Featured <span className="text-orange-500">Projects</span>
          </h2>
          <div className="h-1 w-20 bg-gradient-to-r from-orange-500 to-amber-500 mx-auto rounded-full" />
        </motion.div>

        {/* Animated Projects */}
        <div className="mx-auto max-w-sm md:max-w-4xl lg:max-w-6xl">
          <div className="relative grid grid-cols-1 gap-20 md:grid-cols-2">
            {/* Project Images Stack */}
            <div>
              <div className="relative h-80 w-full">
                <AnimatePresence>
                  {projects.map((project, index) => (
                    <motion.div
                      key={project.image}
                      initial={{
                        opacity: 0,
                        scale: 0.9,
                        z: -100,
                        rotate: randomRotateY(),
                      }}
                      animate={{
                        opacity: isActive(index) ? 1 : 0.7,
                        scale: isActive(index) ? 1 : 0.95,
                        z: isActive(index) ? 0 : -100,
                        rotate: isActive(index) ? 0 : randomRotateY(),
                        zIndex: isActive(index)
                          ? 40
                          : projects.length + 2 - index,
                        y: isActive(index) ? [0, -80, 0] : 0,
                      }}
                      exit={{
                        opacity: 0,
                        scale: 0.9,
                        z: 100,
                        rotate: randomRotateY(),
                      }}
                      transition={{
                        duration: 0.4,
                        ease: 'easeInOut',
                      }}
                      className="absolute inset-0 origin-bottom"
                    >
                      <img
                        src={project.image}
                        alt={project.title}
                        draggable={false}
                        className="h-full w-full rounded-3xl object-cover object-center shadow-2xl"
                      />
                    </motion.div>
                  ))}
                </AnimatePresence>
              </div>
            </div>

            {/* Project Details */}
            <div className="flex flex-col justify-between py-4">
              <motion.div
                key={active}
                initial={{
                  y: 20,
                  opacity: 0,
                }}
                animate={{
                  y: 0,
                  opacity: 1,
                }}
                exit={{
                  y: -20,
                  opacity: 0,
                }}
                transition={{
                  duration: 0.2,
                  ease: 'easeInOut',
                }}
              >
                <h3 className={`text-3xl font-bold mb-2 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                  {projects[active].title}
                </h3>
                
                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {projects[active].tags.map((tag) => (
                    <span
                      key={tag}
                      className={`px-3 py-1 rounded-full text-sm font-medium ${
                        darkMode 
                          ? 'bg-orange-900/30 text-orange-400' 
                          : 'bg-orange-100 text-orange-700'
                      }`}
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <motion.p className={`text-lg ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                  {projects[active].description.split(' ').map((word, index) => (
                    <motion.span
                      key={index}
                      initial={{
                        filter: 'blur(10px)',
                        opacity: 0,
                        y: 5,
                      }}
                      animate={{
                        filter: 'blur(0px)',
                        opacity: 1,
                        y: 0,
                      }}
                      transition={{
                        duration: 0.2,
                        ease: 'easeInOut',
                        delay: 0.02 * index,
                      }}
                      className="inline-block"
                    >
                      {word}&nbsp;
                    </motion.span>
                  ))}
                </motion.p>

                {/* Links */}
                <div className="flex gap-4 mt-8">
                  <motion.a
                    href={projects[active].github}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className={`flex items-center gap-2 px-6 py-3 rounded-lg font-semibold transition-colors ${
                      darkMode 
                        ? 'bg-gray-700 hover:bg-gray-600 text-gray-300' 
                        : 'bg-gray-100 hover:bg-gray-200 text-gray-700'
                    }`}
                  >
                    <Github className="w-5 h-5" />
                    Code
                  </motion.a>
                  {(() => {
                    const hasLive = Boolean(projects[active].live)
                    return (
                      <motion.a
                        {...(hasLive ? { href: projects[active].live!, target: '_blank', rel: 'noopener noreferrer' } : { tabIndex: -1, 'aria-disabled': true })}
                        whileHover={hasLive ? { scale: 1.05 } : undefined}
                        whileTap={hasLive ? { scale: 0.95 } : undefined}
                        className={`flex items-center gap-2 px-6 py-3 rounded-lg font-semibold shadow-lg transition ${
                          hasLive
                            ? 'bg-gradient-to-r from-orange-500 to-amber-500 text-white hover:shadow-xl'
                            : 'bg-gray-200 text-gray-500 cursor-not-allowed opacity-70'
                        }`}
                        style={{ pointerEvents: hasLive ? 'auto' : 'none' }}
                      >
                        <ExternalLink className="w-5 h-5" />
                        {hasLive ? 'Live Demo' : 'Live Demo Unavailable'}
                      </motion.a>
                    )
                  })()}
                </div>
              </motion.div>

              {/* Navigation Buttons */}
              <div className="flex gap-4 pt-12 md:pt-0">
                <button
                  onClick={handlePrev}
                  className={`group/button flex h-10 w-10 items-center justify-center rounded-full transition-colors ${
                    darkMode 
                      ? 'bg-gray-800 hover:bg-gray-700' 
                      : 'bg-gray-100 hover:bg-gray-200'
                  }`}
                >
                  <IconArrowLeft className={`h-5 w-5 transition-transform duration-300 group-hover/button:rotate-12 ${
                    darkMode ? 'text-gray-400' : 'text-gray-900'
                  }`} />
                </button>
                <button
                  onClick={handleNext}
                  className={`group/button flex h-10 w-10 items-center justify-center rounded-full transition-colors ${
                    darkMode 
                      ? 'bg-gray-800 hover:bg-gray-700' 
                      : 'bg-gray-100 hover:bg-gray-200'
                  }`}
                >
                  <IconArrowRight className={`h-5 w-5 transition-transform duration-300 group-hover/button:-rotate-12 ${
                    darkMode ? 'text-gray-400' : 'text-gray-900'
                  }`} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Projects
