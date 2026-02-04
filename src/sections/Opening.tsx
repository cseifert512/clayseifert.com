'use client'

import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import ASCIIBackground from '@/components/ASCIIBackground'

export default function Opening() {
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end start'],
  })

  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0])
  const y = useTransform(scrollYProgress, [0, 0.5], [0, -100])
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.95])

  return (
    <section
      ref={containerRef}
      className="relative min-h-screen flex flex-col justify-center overflow-hidden"
    >
      {/* ASCII Background */}
      <ASCIIBackground pattern="cellular" opacity={0.06} />

      {/* Visual Placeholder */}
      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-1/2 h-[80vh] opacity-20 pointer-events-none hidden lg:block">
        <div className="w-full h-full border border-muted rounded-lg flex items-center justify-center">
          <div className="text-center text-dim">
            <p className="text-micro mb-2">[ VISUAL: ORGANIC MESH STRUCTURE ]</p>
            <p className="text-xs text-muted max-w-xs">
              3D render of mycelium-like network with metallic nodes — biological meets robotic
            </p>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <motion.div
        className="relative z-10 px-6 md:px-12 lg:px-24 max-w-7xl"
        style={{ opacity, y, scale }}
      >
        {/* Thesis Statement - Massive Typography */}
        <div className="space-y-4 md:space-y-6">
          <motion.p
            className="font-display text-massive font-semibold text-fg leading-[0.9]"
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            Building systems
          </motion.p>
          <motion.p
            className="font-display text-massive font-semibold text-fg leading-[0.9]"
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.45 }}
          >
            that are{' '}
            <span className="text-accent">alive</span>
          </motion.p>
        </div>

        {/* Subtitle */}
        <motion.p
          className="mt-12 md:mt-16 text-body text-dim max-w-xl leading-relaxed"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7 }}
        >
          Exploring the synthesis of robotics, living systems, advanced manufacturing, 
          and computational design. The future worth building integrates technological 
          capability with ecological intelligence.
        </motion.p>

        {/* Name */}
        <motion.div
          className="mt-16 md:mt-24"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1 }}
        >
          <p className="text-micro text-muted mb-2">Builder / Inventor</p>
          <p className="font-display text-2xl md:text-3xl font-medium">Clay Seifert</p>
        </motion.div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
      >
        <span className="text-micro text-dim">Scroll</span>
        <motion.div
          className="w-[1px] h-12 bg-gradient-to-b from-accent to-transparent"
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

