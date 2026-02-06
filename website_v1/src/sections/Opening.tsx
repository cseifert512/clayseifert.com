'use client'

import { useRef } from 'react'
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion'
import Image from 'next/image'
import ASCIIBackground from '@/components/ASCIIBackground'
import OrganicBackground from '@/components/OrganicBackground'
import { useViewMode } from '@/hooks/useViewMode'
import { contentCrossfade, imageParallaxFade } from '@/lib/animations'

export default function Opening() {
  const containerRef = useRef<HTMLDivElement>(null)
  const { mode } = useViewMode()
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end start'],
  })

  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0])
  const y = useTransform(scrollYProgress, [0, 0.5], [0, -100])
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.95])

  const isLiving = mode === 'living'

  return (
    <section
      ref={containerRef}
      className="relative min-h-screen flex flex-col justify-center overflow-hidden mode-transition"
    >
      {/* Background Layers */}
      <ASCIIBackground pattern="cellular" opacity={isLiving ? 0 : 0.06} />
      <OrganicBackground opacity={isLiving ? 0.08 : 0} />

      {/* Hero Visual - Mode Aware */}
      <AnimatePresence mode="wait">
        <motion.div
          key={mode}
          className="absolute right-0 top-1/2 -translate-y-1/2 w-1/2 h-[80vh] pointer-events-none hidden lg:block overflow-hidden rounded-lg"
          variants={imageParallaxFade}
          initial="hidden"
          animate="visible"
          exit="hidden"
        >
          <motion.img
            src={mode === 'systems' ? '/visuals/hero/systems-tech-1.webp' : '/visuals/hero/living-organic-1.jpeg'}
            alt={mode === 'systems' ? 'Computational infrastructure visualization' : 'Organic living systems'}
            className="w-full h-full object-cover opacity-30"
            animate={{ scale: [1, 1.05, 1] }}
            transition={{ duration: 20, repeat: Infinity, ease: 'easeInOut' }}
          />
        </motion.div>
      </AnimatePresence>

      {/* Main Content - Mode Aware */}
      <motion.div
        className="relative z-10 px-6 md:px-12 lg:px-24 max-w-7xl"
        style={{ opacity, y, scale }}
      >
        <AnimatePresence mode="wait">
          {mode === 'systems' ? (
            <motion.div
              key="systems-content"
              variants={contentCrossfade}
              initial="hidden"
              animate="visible"
              exit="hidden"
            >
              {/* Systems View Content */}
              <div className="space-y-4 md:space-y-6">
                <motion.p
                  className="font-display text-massive font-semibold leading-[0.9]"
                  style={{ color: 'var(--color-fg)' }}
                >
                  Infrastructure for
                </motion.p>
                <motion.p
                  className="font-display text-massive font-semibold leading-[0.9]"
                  style={{ color: 'var(--color-fg)' }}
                >
                  living{' '}
                  <span style={{ color: 'var(--color-accent)' }}>futures</span>
                </motion.p>
              </div>

              {/* Subtitle */}
              <motion.p
                className="mt-12 md:mt-16 text-body max-w-xl leading-relaxed"
                style={{ color: 'var(--color-dim)' }}
              >
                I'm building the computational and robotic systems to construct 
                sustainable, beautiful architecture at scale.
              </motion.p>
              
              <motion.p
                className="mt-6 text-body max-w-xl leading-relaxed"
                style={{ color: 'var(--color-dim)' }}
              >
                Not sterile optimization. Not naive organicism. 
                Something new at the intersection.
              </motion.p>
            </motion.div>
          ) : (
            <motion.div
              key="living-content"
              variants={contentCrossfade}
              initial="hidden"
              animate="visible"
              exit="hidden"
            >
              {/* Living View Content */}
              <div className="space-y-4 md:space-y-6">
                <motion.p
                  className="font-display text-massive font-semibold leading-[0.9]"
                  style={{ color: 'var(--color-fg)' }}
                >
                  Building spaces
                </motion.p>
                <motion.p
                  className="font-display text-massive font-semibold leading-[0.9]"
                  style={{ color: 'var(--color-fg)' }}
                >
                  worth{' '}
                  <span style={{ color: 'var(--color-accent)' }}>inhabiting</span>
                </motion.p>
              </div>

              {/* Subtitle */}
              <motion.p
                className="mt-12 md:mt-16 text-body max-w-xl leading-relaxed"
                style={{ color: 'var(--color-dim)' }}
              >
                I'm creating infrastructure for architecture that's alive—
                integrated with ecology, elevated in quality, 
                radically sustainable, and profoundly beautiful.
              </motion.p>
              
              <motion.p
                className="mt-6 text-body max-w-xl leading-relaxed"
                style={{ color: 'var(--color-dim)' }}
              >
                The future worth building serves life, not just efficiency.
              </motion.p>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Name - Shared across modes */}
        <motion.div
          className="mt-16 md:mt-24"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1 }}
        >
          <p className="text-micro mb-2" style={{ color: 'var(--color-muted)' }}>
            Builder / Inventor
          </p>
          <p className="font-display text-2xl md:text-3xl font-medium" style={{ color: 'var(--color-fg)' }}>
            Clay Seifert
          </p>
        </motion.div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
      >
        <span className="text-micro" style={{ color: 'var(--color-dim)' }}>Scroll</span>
        <motion.div
          className="w-[1px] h-12 bg-gradient-to-b from-current to-transparent"
          style={{ color: 'var(--color-accent)' }}
          animate={{ 
            scaleY: [1, 0.5, 1],
            opacity: [0.8, 0.3, 0.8] 
          }}
          transition={{ 
            duration: 2, 
            repeat: Infinity, 
            ease: 'easeInOut' 
          }}
        />
      </motion.div>
    </section>
  )
}
