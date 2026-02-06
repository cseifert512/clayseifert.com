'use client'

import { useRef } from 'react'
import { motion, useInView, AnimatePresence } from 'framer-motion'
import { fadeInUp, staggerContainer, contentCrossfade, imageParallaxFade } from '@/lib/animations'
import { useViewMode } from '@/hooks/useViewMode'

export default function Philosophy() {
  const containerRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(containerRef, { once: true, margin: '-100px' })
  const { mode } = useViewMode()

  const isLiving = mode === 'living'

  return (
    <section
      id="philosophy"
      ref={containerRef}
      className="relative min-h-screen py-32 md:py-48 px-6 md:px-12 lg:px-24 mode-transition"
    >
      {/* Section Label */}
      <motion.p
        className="text-micro mb-16 md:mb-24"
        style={{ color: 'var(--color-dim)' }}
        initial={{ opacity: 0, x: -20 }}
        animate={isInView ? { opacity: 1, x: 0 } : {}}
        transition={{ duration: 0.6 }}
      >
        {isLiving ? '001 — Why This Matters' : '001 — Core Principles'}
      </motion.p>

      {/* Asymmetric Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
        {/* Left Column - Pull Quote */}
        <motion.div
          className="lg:col-span-5"
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <AnimatePresence mode="wait">
            {mode === 'systems' ? (
              <motion.blockquote
                key="systems-quote"
                className="font-display text-large font-medium leading-[1.1]"
                style={{ color: 'var(--color-fg)' }}
                variants={contentCrossfade}
                initial="hidden"
                animate="visible"
                exit="hidden"
              >
                The most interesting problems exist at{' '}
                <span style={{ color: 'var(--color-accent)' }}>boundaries</span>
                {' '}between fields
              </motion.blockquote>
            ) : (
              <motion.blockquote
                key="living-quote"
                className="font-display text-large font-medium leading-[1.1]"
                style={{ color: 'var(--color-fg)' }}
                variants={contentCrossfade}
                initial="hidden"
                animate="visible"
                exit="hidden"
              >
                The future worth building is{' '}
                <span style={{ color: 'var(--color-accent)' }}>alive</span>
                —not sterile steel and silicon monocultures
              </motion.blockquote>
            )}
          </AnimatePresence>

          {/* Visual Placeholder - Mode Aware */}
          <AnimatePresence mode="wait">
            <motion.div
              key={mode}
              className="mt-16 aspect-[4/3] border rounded-sm flex items-center justify-center mode-transition"
              style={{ borderColor: 'var(--color-muted)' }}
              variants={imageParallaxFade}
              initial="hidden"
              animate="visible"
              exit="hidden"
            >
              <div className="text-center p-8" style={{ color: 'var(--color-dim)' }}>
                {mode === 'systems' ? (
                  <>
                    <p className="text-micro mb-2" style={{ color: 'var(--color-accent)' }}>
                      [ VISUAL: PARAMETRIC MATERIAL ]
                    </p>
                    <p className="text-xs" style={{ color: 'var(--color-muted)' }}>
                      Systems: Close-up of 3D printed parametric lattice structure,
                      white/light gray with complex internal voids, bone-like geometry,
                      side lighting on dark background
                    </p>
                    <p className="text-xs mt-3 opacity-60">
                      File: public/visuals/philosophy/systems-material.webp
                    </p>
                  </>
                ) : (
                  <>
                    <p className="text-micro mb-2" style={{ color: 'var(--color-accent)' }}>
                      [ VISUAL: MYCELIUM COMPOSITE ]
                    </p>
                    <p className="text-xs" style={{ color: 'var(--color-muted)' }}>
                      Living: Extreme macro of mycelium composite surface,
                      dense fibrous texture with visible hyphal networks,
                      natural off-white and tan coloring, warm studio lighting
                    </p>
                    <p className="text-xs mt-3 opacity-60">
                      File: public/visuals/philosophy/living-material.webp
                    </p>
                  </>
                )}
              </div>
            </motion.div>
          </AnimatePresence>
        </motion.div>

        {/* Right Column - Body Text - Mode Aware */}
        <motion.div
          className="lg:col-span-6 lg:col-start-7"
          variants={staggerContainer}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
        >
          <AnimatePresence mode="wait">
            {mode === 'systems' ? (
              <motion.div
                key="systems-body"
                variants={contentCrossfade}
                initial="hidden"
                animate="visible"
                exit="hidden"
              >
                <motion.p 
                  className="text-body leading-relaxed mb-8"
                  style={{ color: 'var(--color-fg)', opacity: 0.9 }}
                  variants={fadeInUp}
                >
                  Building systems that integrate biological intelligence with computational 
                  precision requires synthesis across traditionally separate domains: robotics, 
                  materials science, distributed manufacturing, and ecological systems.
                </motion.p>

                <motion.p 
                  className="text-body leading-relaxed mb-8"
                  style={{ color: 'var(--color-fg)', opacity: 0.9 }}
                  variants={fadeInUp}
                >
                  The breakthrough innovations emerge at these intersections—not from 
                  incremental improvements within existing silos, but from fundamentally 
                  new approaches enabled by cross-domain integration.
                </motion.p>

                <motion.p 
                  className="text-body leading-relaxed mb-16"
                  style={{ color: 'var(--color-fg)', opacity: 0.9 }}
                  variants={fadeInUp}
                >
                  This is infrastructure-level work. The systems I'm building enable 
                  entirely new categories of construction and production.
                </motion.p>
              </motion.div>
            ) : (
              <motion.div
                key="living-body"
                variants={contentCrossfade}
                initial="hidden"
                animate="visible"
                exit="hidden"
              >
                <motion.p 
                  className="text-body leading-relaxed mb-8"
                  style={{ color: 'var(--color-fg)', opacity: 0.9 }}
                  variants={fadeInUp}
                >
                  We're at an inflection point where humanity's expansion—into space, 
                  up the Kardashev scale—is happening simultaneously with Earth's ecological 
                  challenges. The traditional narrative treats these as separate problems.
                </motion.p>

                <motion.p 
                  className="text-body leading-relaxed mb-8"
                  style={{ color: 'var(--color-fg)', opacity: 0.9 }}
                  variants={fadeInUp}
                >
                  This is a false dichotomy. The future worth building synthesizes technological 
                  capability with living systems, sustaining and elevating life both here and beyond.
                </motion.p>

                <motion.p 
                  className="text-body leading-relaxed mb-16"
                  style={{ color: 'var(--color-fg)', opacity: 0.9 }}
                  variants={fadeInUp}
                >
                  I don't have all the answers yet—but I'm building toward them.
                </motion.p>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Core Beliefs - Mode Aware */}
          <motion.div variants={fadeInUp}>
            <p className="text-micro mb-8" style={{ color: 'var(--color-dim)' }}>
              {isLiving ? 'What I Believe' : 'Core Axioms'}
            </p>
            
            <AnimatePresence mode="wait">
              {mode === 'systems' ? (
                <motion.div
                  key="systems-beliefs"
                  className="space-y-6"
                  variants={contentCrossfade}
                  initial="hidden"
                  animate="visible"
                  exit="hidden"
                >
                  {[
                    {
                      title: 'Domain synthesis',
                      desc: 'produces breakthrough innovation. Computational design + robotic fabrication + biological materials = new capabilities.',
                    },
                    {
                      title: 'Distributed capability',
                      desc: 'over centralized control. Democratizing advanced manufacturing strengthens the knowledge network.',
                    },
                    {
                      title: 'Systematic integration',
                      desc: 'of adaptive materials with robotic fabrication. Materials that respond, structures that compute.',
                    },
                    {
                      title: 'Infrastructure thinking',
                      desc: 'at scale. Building the foundations that enable entirely new categories of production.',
                    },
                  ].map((belief, i) => (
                    <motion.div
                      key={belief.title}
                      className="group flex gap-4"
                      initial={{ opacity: 0, x: -20 }}
                      animate={isInView ? { opacity: 1, x: 0 } : {}}
                      transition={{ delay: 0.6 + i * 0.1 }}
                    >
                      <span className="text-sm mt-1" style={{ color: 'var(--color-accent)' }}>→</span>
                      <p className="text-body" style={{ color: 'var(--color-fg)', opacity: 0.8 }}>
                        <span style={{ color: 'var(--color-fg)' }} className="font-medium">{belief.title}</span>{' '}
                        {belief.desc}
                      </p>
                    </motion.div>
                  ))}
                </motion.div>
              ) : (
                <motion.div
                  key="living-beliefs"
                  className="space-y-6"
                  variants={contentCrossfade}
                  initial="hidden"
                  animate="visible"
                  exit="hidden"
                >
                  {[
                    {
                      title: 'Living futures',
                      desc: 'over sterile optimization. The future should integrate with ecology, not replace it.',
                    },
                    {
                      title: 'Quality elevation',
                      desc: 'matters as much as expansion. How we live is as important as where we go.',
                    },
                    {
                      title: 'Democratized creation',
                      desc: 'enables unexpected innovation. When tools are accessible, breakthrough ideas come from anywhere.',
                    },
                    {
                      title: 'Synthesis over binaries',
                      desc: 'at every scale. Technology AND ecology. Efficiency AND beauty. Classical AND romantic.',
                    },
                  ].map((belief, i) => (
                    <motion.div
                      key={belief.title}
                      className="group flex gap-4"
                      initial={{ opacity: 0, x: -20 }}
                      animate={isInView ? { opacity: 1, x: 0 } : {}}
                      transition={{ delay: 0.6 + i * 0.1 }}
                    >
                      <span className="text-sm mt-1" style={{ color: 'var(--color-accent)' }}>→</span>
                      <p className="text-body" style={{ color: 'var(--color-fg)', opacity: 0.8 }}>
                        <span style={{ color: 'var(--color-fg)' }} className="font-medium">{belief.title}</span>{' '}
                        {belief.desc}
                      </p>
                    </motion.div>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>

          {/* Influences Section - Living Mode Only */}
          {isLiving && (
            <motion.div
              className="mt-16 pt-12 border-t"
              style={{ borderColor: 'var(--color-muted)' }}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 1.2 }}
            >
              <p className="text-micro mb-6" style={{ color: 'var(--color-dim)' }}>
                Influences & Lineage
              </p>
              <div className="space-y-4 text-body" style={{ color: 'var(--color-fg)', opacity: 0.8 }}>
                <p>
                  <span className="font-medium">Heatherwick Studio</span> — Beauty without compromise
                </p>
                <p>
                  <span className="font-medium">Fab Lab movement</span> — Democratizing creation
                </p>
                <p>
                  <span className="font-medium">Robert Pirsig</span> — Quality at intersections
                </p>
                <p>
                  <span className="font-medium">E.O. Wilson</span> — Biophilia and our innate connection to living systems
                </p>
              </div>
            </motion.div>
          )}
        </motion.div>
      </div>

      {/* Decorative Line */}
      <motion.div
        className="absolute bottom-0 left-6 md:left-12 lg:left-24 right-6 md:right-12 lg:right-24 h-[1px] bg-gradient-to-r from-transparent via-current to-transparent"
        style={{ color: 'var(--color-muted)' }}
        initial={{ scaleX: 0, originX: 0.5 }}
        animate={isInView ? { scaleX: 1 } : {}}
        transition={{ duration: 1.2, delay: 0.8 }}
      />
    </section>
  )
}
