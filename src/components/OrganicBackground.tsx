'use client'

import { motion } from 'framer-motion'
import { useViewMode } from '@/hooks/useViewMode'

interface OrganicBackgroundProps {
  opacity?: number
  className?: string
}

export default function OrganicBackground({ 
  opacity = 0.08, 
  className = '' 
}: OrganicBackgroundProps) {
  const { mode } = useViewMode()

  if (mode !== 'living') return null

  return (
    <motion.div
      className={`absolute inset-0 pointer-events-none ${className}`}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1 }}
      style={{ opacity }}
    >
      {/* Organic mycelium-like texture pattern */}
      <svg
        className="absolute inset-0 w-full h-full"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          {/* Organic texture filter */}
          <filter id="organic-noise">
            <feTurbulence
              type="fractalNoise"
              baseFrequency="0.015"
              numOctaves="4"
              seed="2"
            />
            <feColorMatrix
              type="matrix"
              values="0 0 0 0 0.29
                      0 0 0 0 0.18
                      0 0 0 0 0.10
                      0 0 0 0.4 0"
            />
          </filter>

          {/* Radial gradient for vignette */}
          <radialGradient id="organic-vignette">
            <stop offset="0%" stopColor="#d4a574" stopOpacity="0.15" />
            <stop offset="50%" stopColor="#4a7c59" stopOpacity="0.1" />
            <stop offset="100%" stopColor="#2a1810" stopOpacity="0.05" />
          </radialGradient>
        </defs>

        {/* Organic texture layer */}
        <rect
          width="100%"
          height="100%"
          filter="url(#organic-noise)"
        />

        {/* Subtle radial overlay */}
        <rect
          width="100%"
          height="100%"
          fill="url(#organic-vignette)"
        />
      </svg>

      {/* Floating particles for breathing effect */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full"
            style={{
              width: Math.random() * 3 + 1 + 'px',
              height: Math.random() * 3 + 1 + 'px',
              backgroundColor: 'var(--color-primary)',
              left: Math.random() * 100 + '%',
              top: Math.random() * 100 + '%',
              opacity: 0.1,
            }}
            animate={{
              y: [0, -30, 0],
              x: [0, Math.random() * 20 - 10, 0],
              opacity: [0.05, 0.15, 0.05],
            }}
            transition={{
              duration: 8 + Math.random() * 4,
              repeat: Infinity,
              delay: Math.random() * 4,
              ease: 'easeInOut',
            }}
          />
        ))}
      </div>
    </motion.div>
  )
}

