import React from 'react'
import { motion } from 'framer-motion'

export interface MagicCardProps {
  title: string
  subtitle?: string
  typeLine?: string
  description: string
  image: string
  footer?: React.ReactNode
  manaCost?: string | { icon: string; color: string }[]
  maxWidth?: string
  scale?: number
  transformOrigin?: string
  interactive?: boolean
  darkMode?: boolean
  // Custom styling options
  gradientFrom?: string
  gradientVia?: string
  gradientTo?: string
  baseBgColor?: string
  panelBgColor?: string
  textPrimaryColor?: string
  textSecondaryColor?: string
  accentColor?: string
  borderColor?: string
  glowColor?: string
  customClassName?: string
  rarityText?: string
}

/**
 * A customizable, Magic-the-Gathering-inspired card frame.
 * Keeps layout compact and responsive; adjust clamp values as needed.
 */
const MagicCard: React.FC<MagicCardProps> = ({
  title,
  subtitle,
  typeLine = 'Legendary Hobby',
  description,
  image,
  footer = 'Collector No. 26 // 2026 Portfolio',
  manaCost = '—',
  maxWidth,
  scale,
  transformOrigin,
  interactive = true,
  darkMode = false,
  gradientFrom,
  gradientVia,
  gradientTo,
  baseBgColor,
  panelBgColor,
  textPrimaryColor,
  textSecondaryColor,
  accentColor,
  borderColor,
  glowColor,
  customClassName,
  rarityText = 'Fusion · Rare',
}) => {
  const baseBg = baseBgColor ?? (darkMode ? 'bg-gray-950' : 'bg-orange-50')
  const panelBg = panelBgColor ?? (darkMode ? 'bg-gray-900/90' : 'bg-white/95')
  const textPrimary = textPrimaryColor ?? (darkMode ? 'text-white' : 'text-gray-900')
  const textSecondary = textSecondaryColor ?? (darkMode ? 'text-gray-300' : 'text-gray-600')
  const accent = accentColor ?? 'text-orange-600'
  const gradient = `from-${gradientFrom ?? 'orange-500'} via-${gradientVia ?? 'amber-400'} to-${gradientTo ?? 'yellow-300'}`
  const border = borderColor ?? 'border-black/10'
  const glow = glowColor ?? 'rgba(249,115,22,0.35)'
  const cardMaxWidth = maxWidth ?? 'clamp(280px, 68vw, 720px)'
  const cardTransformOrigin = transformOrigin ?? 'center top'

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.96, y: 12 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.96, y: -12 }}
      transition={{ duration: 0.35 }}
      className="w-full"
      style={{
        ...(scale ? { transform: `scale(${scale})`, transformOrigin: cardTransformOrigin } : {}),
        pointerEvents: interactive ? 'auto' : 'none',
      }}
    >
      <div className={`relative w-full mx-auto ${customClassName ?? ''}`} style={{ maxWidth: cardMaxWidth }}>
        <div className={`rounded-2xl p-[3px] shadow-2xl bg-gradient-to-br ${gradientFrom ? `from-${gradientFrom}` : 'from-orange-500'} ${gradientVia ? `via-${gradientVia}` : 'via-amber-400'} ${gradientTo ? `to-${gradientTo}` : 'to-yellow-300'}`}>
          <div className={`rounded-[18px] ${baseBg} border ${border} overflow-hidden`}> 
            <div className={`relative h-[180px] md:h-[220px] w-full overflow-hidden border-b ${border}`}>
              <img src={image} alt={title} className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-b from-black/10 to-transparent" />
            </div>

            <div className={`px-4 md:px-5 py-4 space-y-3 ${panelBg}`}>
              <div className="flex items-center justify-between">
                <div>
                  <p className={`text-xs md:text-sm uppercase tracking-[0.12em] ${title === 'Coding' ? 'text-white' : textSecondary}`}>{typeLine}</p>
                  <h3 className={`text-xl md:text-2xl font-bold leading-snug ${title === 'Coding' ? 'text-white' : textPrimary}`}>{title}</h3>
                  {subtitle && <p className={`text-sm md:text-base ${title === 'Coding' ? 'text-white' : textSecondary}`}>{subtitle}</p>}
                </div>
                <div className={`text-right text-xs md:text-sm font-semibold ${title === 'Coding' ? 'text-white' : accent}`}>{rarityText}</div>
              </div>

              <div className={`rounded-xl border ${border} bg-gradient-to-br from-white/40 to-white/10 backdrop-blur-sm p-3 md:p-4`}>
                <p className={`text-sm md:text-base leading-relaxed ${title === 'Coding' ? 'text-white' : textSecondary}`}>{description}</p>
              </div>

              <div className="flex items-center justify-between text-xs md:text-sm">
                <div className={`flex items-center gap-2 ${title === 'Coding' ? 'text-white' : textSecondary}`}>
                  <span>Mana Cost:</span>
                  {Array.isArray(manaCost) ? (
                    <div className="flex items-center gap-1">
                      {manaCost.map((mana, index) => (
                        <span key={index} className={`inline-flex h-5 w-5 items-center justify-center rounded-full ${mana.color} text-white text-xs font-bold`}>
                          {mana.icon}
                        </span>
                      ))}
                    </div>
                  ) : (
                    <span>{manaCost}</span>
                  )}
                </div>
                <div className={`${title === 'Coding' ? 'text-white' : accent} font-semibold`}>{footer}</div>
              </div>
            </div>
          </div>
        </div>

        <div className="pointer-events-none absolute -inset-2 rounded-3xl border border-white/20" style={{ boxShadow: `0 0 60px ${glow}` }} />
      </div>
    </motion.div>
  )
}

export default MagicCard
