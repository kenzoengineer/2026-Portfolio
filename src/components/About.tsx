import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import MagicCard from './ui/MagicCard'
import { CometCard } from './ui/comet-card'
import baseArtImage from '../assets/hobbies/art2.PNG'
import baseGamingImage from '../assets/hobbies/gaming.webp'
import baseLearningImage from '../assets/hobbies/learn.jpeg'
import baseCompetitionImage from '../assets/hobbies/competition.jpg'
import paintingImage from '../assets/hobbies/art.PNG'
import magicImage from '../assets/hobbies/magic.jpg'
import readingImage from '../assets/hobbies/reading.avif'
import boardGamesImage from '../assets/hobbies/ROOT.jpg'
import esportsImage from '../assets/hobbies/esports.jpg'
import badmintonImage from '../assets/hobbies/badminton.webp'
import codingImage from '../assets/hobbies/coding.jpg'

interface AboutProps {
  darkMode: boolean
}

const About: React.FC<AboutProps> = ({ darkMode }) => {
  const [selectedCards, setSelectedCards] = useState<number[]>([])

  const cards = [
    { id: 0, title: 'Art', icon: '艺', src: baseArtImage, color: 'bg-red-500' },
    { id: 1, title: 'Gaming', icon: '赛', src: baseGamingImage, color: 'bg-orange-500' },
    { id: 2, title: 'Learning', icon: '学', src: baseLearningImage, color: 'bg-blue-500' },
    { id: 3, title: 'Competition', icon: '心', src: baseCompetitionImage, color: 'bg-violet-500' },
  ]

  const combinations: Record<string, { 
    title: string; 
    description: string; 
    image: string;
    gradientFrom?: string;
    gradientVia?: string;
    gradientTo?: string;
    accentColor?: string;
    baseBgColor?: string;
    panelBgColor?: string;
    typeLine?: string;
    footer?: React.ReactNode;
    rarityText?: string;
    manaCost?: { icon: string; color: string }[];
  }> = {
    '0-1': {
      title: 'Painting',
      description: 'In my spare time, I enjoy oil painting on large canvases often of video game characters. I also love working in a particularly unhinged medium: MS Paint, using only a mouse and keyboard. This year, I even participated in Inktober, but with a twist MS Paint only.',
      image: paintingImage,
      gradientFrom: 'red-500',
      gradientVia: 'red-400',
      gradientTo: 'orange-500',
      accentColor: 'text-red-600',
      typeLine: 'Legendary Enchantment ',
      footer: (
        <>
          <a href="https://www.instagram.com/vida_n64/?hl=en" target="_blank" rel="noopener noreferrer" className="hover:underline">Click learn more</a> | 2026
        </>
      ),
      rarityText: 'Rare',
      manaCost: [{ icon: '艺', color: 'bg-red-500' }, { icon: '赛', color: 'bg-orange-500' }],
    },
    '0-2': {
      title: 'Magic the Gathering',
      description: 'I really like pretty cards. Learning new games and taking inspiration from the huge range of artists in Magic is something I genuinely enjoy',
      image: magicImage,
      gradientFrom: 'red-500',
      gradientVia: 'purple-500',
      gradientTo: 'blue-500',
      accentColor: 'text-red-600',
      typeLine: 'Artifact',
      footer: 'Magic | 2026',
      rarityText: 'Rare',
      manaCost: [{ icon: '艺', color: 'bg-red-500' }, { icon: '学', color: 'bg-blue-500' }],
    },
    '0-2-3': {
      title: 'Reading',
      description: 'I enjoy a wide range of books from reference material to light novels. I like reading both to improve myself and to explore ideas about the human condition.',
      image: readingImage,
      gradientFrom: 'red-500',
      gradientVia: 'violet-500',
      gradientTo: 'blue-500',
      accentColor: 'text-violet-600',
      typeLine: 'Sorcery',
      footer: 'Books | 2026',
      rarityText: 'Rare',
      manaCost: [
        { icon: '艺', color: 'bg-red-500' },
        { icon: '学', color: 'bg-blue-500' },
        { icon: '心', color: 'bg-violet-500' },
      ],
    },
    '1-2': {
      title: 'Board Games',
      description: "I love playing board games such as Root, Wingspan, and The Stardew Valley Board Game, especially for their strategy, design, and shared experiences.",
      image: boardGamesImage,
      gradientFrom: 'orange-500',
      gradientVia: 'amber-400',
      gradientTo: 'blue-500',
      accentColor: 'text-orange-600',
      typeLine: 'Planeswalker',
      footer: 'WEGA | 2026',
      rarityText: 'Uncommon',
      manaCost: [{ icon: '赛', color: 'bg-orange-500' }, { icon: '学', color: 'bg-blue-500' }],
    },
    '1-3': {
      title: 'Esports',
      description: "I’ve played on three separate esports teams simultaneously and helped develop my school’s club into a proper esports organization.",
      image: esportsImage,
      gradientFrom: 'orange-500',
      gradientVia: 'pink-500',
      gradientTo: 'violet-500',
      accentColor: 'text-orange-600',
      typeLine: 'Creature - Sliver',
      footer: 'Esports | 2026',
      rarityText: 'Uncommon',
      manaCost: [{ icon: '赛', color: 'bg-orange-500' }, { icon: '心', color: 'bg-violet-500' }],
    },
    '2-3': {
      title: 'Badminton',
      description: 'I’ve been playing badminton since I was 13. I trained seriously for several years and continue to play casually to this day.',
      image: badmintonImage,
      gradientFrom: 'blue-500',
      gradientVia: 'indigo-500',
      gradientTo: 'violet-500',
      accentColor: 'text-blue-600',
      typeLine: 'Instant',
      footer: 'Sports | 2026',
      rarityText: 'Common',
      manaCost: [{ icon: '学', color: 'bg-blue-500' }, { icon: '心', color: 'bg-violet-500' }],
    },
    '0-1-2-3': {
      title: 'Coding',
      description: 'What I love most about coding is that there’s always another way to look at a problem. It’s a constant mix of creativity and logic and a way for me to add convenience and meaning to my everyday life.',
      image: codingImage,
      gradientFrom: 'red-500',
      gradientVia: 'violet-500',
      gradientTo: 'blue-500',
      accentColor: 'text-white',
      textPrimaryColor: 'text-white',
      textSecondaryColor: 'text-white',
      baseBgColor: 'bg-gradient-to-br from-red-900 via-violet-900 to-blue-900',
      panelBgColor: 'bg-gradient-to-br from-red-800 via-violet-800 to-blue-800',
      typeLine: 'Legendary Artifact ',
      
      footer: (
        <>
          SSS | 2026
        </>
      ),
      rarityText: 'Mythic',
      manaCost: [{ icon: '艺', color: 'bg-red-500' }, { icon: '赛', color: 'bg-orange-500' }, { icon: '学', color: 'bg-blue-500' }, { icon: '心', color: 'bg-violet-500' }],
    },
  }

  const handleCardClick = (id: number) => {
    if (selectedCards.includes(id)) {
      setSelectedCards(selectedCards.filter(cardId => cardId !== id))
    } else if (selectedCards.length < 4) {
      setSelectedCards([...selectedCards, id])
    } else {
      setSelectedCards([id])
    }
  }

  const getCombinationKey = () => {
    if (selectedCards.length === 4) {
      return '0-1-2-3'
    }
    if (selectedCards.length === 3) {
      const sorted = [...selectedCards].sort((a, b) => a - b)
      return `${sorted[0]}-${sorted[1]}-${sorted[2]}`
    }
    if (selectedCards.length === 2) {
      const sorted = [...selectedCards].sort((a, b) => a - b)
      return `${sorted[0]}-${sorted[1]}`
    }
    return null
  }

  const getManaCostLabel = () => {
    if (selectedCards.length === 0) return '—'
    const sorted = [...selectedCards].sort((a, b) => a - b)
    const labels = sorted
      .map(id => cards.find(card => card.id === id)?.icon)
      .filter(Boolean)
    return labels.length ? labels.join(' + ') : '—'
  }

  const currentCombination = getCombinationKey() ? combinations[getCombinationKey()!] : null

  return (
    <>
      <section
        id="about"
        className="min-h-screen flex items-center justify-center px-6 py-24"
      >
        <div className="max-w-5xl mx-auto text-center space-y-6">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className={`text-sm md:text-base uppercase tracking-[0.35em] ${darkMode ? 'text-orange-200' : 'text-orange-500'}`}
          >
            Introduction
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className={`text-5xl md:text-7xl lg:text-8xl font-black leading-tight ${darkMode ? 'text-white' : 'text-gray-900'}`}
          >
            ABOUT ME
          </motion.h1>
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="h-1 w-28 mx-auto rounded-full bg-gradient-to-r from-orange-500 to-amber-400"
          />
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className={`max-w-3xl mx-auto text-lg md:text-xl ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}
          >
            Scroll down to explore the interactive cards and see how my interests intersect with each other.
          </motion.p>
        </div>
      </section>

      <section className="h-screen flex items-center justify-center px-4 py-8 md:py-12">
        <div className={`w-full max-w-7xl h-full flex flex-col items-center justify-between border-4 ${darkMode ? 'border-gray-700' : 'border-gray-300'} px-4 md:px-8`}>
          {/* Combination Display Area - Upper Half */}
          <div className="w-full flex items-center justify-center px-2 h-1/2 py-4">
          <AnimatePresence mode="wait">
            {currentCombination ? (
              <MagicCard
                key={getCombinationKey()}
                title={currentCombination.title}
                description={currentCombination.description}
                image={currentCombination.image}
                typeLine={currentCombination.typeLine ?? "Legendary Hobby Fusion"}
                footer={currentCombination.footer ?? "Fusion Set // 2026 Portfolio"}
                rarityText={currentCombination.rarityText}
                maxWidth="clamp(200px, 48vw, 400px"
                scale={0.68}
                transformOrigin="center center"
                interactive={true}
                manaCost={currentCombination.manaCost ?? getManaCostLabel()}
                darkMode={darkMode}
                gradientFrom={currentCombination.gradientFrom}
                gradientVia={currentCombination.gradientVia}
                gradientTo={currentCombination.gradientTo}
                accentColor={currentCombination.accentColor}
                baseBgColor={currentCombination.baseBgColor}
                panelBgColor={currentCombination.panelBgColor}
              />
            ) : (
              <motion.div
                key="placeholder"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className={`text-center ${darkMode ? 'text-gray-500' : 'text-gray-400'}`}
              >
                <p className="text-xl">Pick 2-4 cards below to see the magic! (Hint: there's 7 in total ;))</p>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Card Fan - Lower Half */}
        <div className="w-full flex items-end justify-center h-1/2">
          <div className="relative w-full flex items-end justify-center gap-3 md:gap-6 overflow-visible px-3 md:px-5">
            {cards.map((card, index) => {
              const isSelected = selectedCards.includes(card.id)
              
              return (
                <motion.div
                  key={card.id}
                  className="cursor-pointer"
                  style={{
                    transformOrigin: 'center center',
                  }}
                  initial={{ rotate: 0, y: 0 }}
                  animate={{
                    rotate: isSelected ? 90 : 0,
                    y: 0,
                    scale: isSelected ? 1.05 : 1,
                  }}
                  whileHover={!isSelected ? { scale: 1.04 } : undefined}
                  transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                  onClick={() => handleCardClick(card.id)}
                >
                  <CometCard className="w-[clamp(90px,18vw,220px)] h-[clamp(145px,29vw,290px)]">
                    <button
                      type="button"
                      aria-label={`Select ${card.title}`}
                      className={`flex h-full w-full cursor-pointer flex-col items-center rounded-[16px] border-0 ${darkMode ? 'bg-[#1F2121]' : 'bg-white'} p-2 md:p-4 shadow-2xl transition-colors duration-200 ${
                        isSelected ? 'ring-2 ring-orange-500' : ''
                      }`}
                      style={{
                        transformStyle: 'preserve-3d',
                        opacity: 1,
                      }}
                    >
                      <div className="flex-1 w-full">
                        <div className="relative mt-2 aspect-[3/4] w-full overflow-hidden rounded-[16px]">
                          <img
                            loading="lazy"
                            className="absolute inset-0 h-full w-full rounded-[16px] bg-black object-cover contrast-75"
                            alt={card.title}
                            src={card.src}
                            style={{
                              boxShadow: 'rgba(0, 0, 0, 0.05) 0px 5px 6px 0px',
                              opacity: 1,
                            }}
                          />
                        </div>
                      </div>
                      <div className={`mt-2 flex w-full flex-shrink-0 flex-col items-center justify-center gap-1 px-3 pb-3 font-mono text-center ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                        <div className="text-xs flex items-center gap-2">
                          <span className={`inline-flex h-6 w-6 items-center justify-center rounded-full ${card.color} text-white text-sm font-bold`}>{card.icon}</span>
                          <span>{card.title}</span>
                        </div>
                      </div>
                    </button>
                  </CometCard>
                </motion.div>
              )
            })}
          </div>
        </div>
        </div>
      </section>
    </>
  )
}

export default About
