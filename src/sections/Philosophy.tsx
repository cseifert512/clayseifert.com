'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { fadeInUp, staggerContainer } from '@/lib/animations'

export default function Philosophy() {
  const containerRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(containerRef, { once: true, margin: '-100px' })

  return (
    <section
      id="philosophy"
      ref={containerRef}
      className="relative min-h-screen py-32 md:py-48 px-6 md:px-12 lg:px-24"
    >
      {/* Section Label */}
      <motion.p
        className="text-micro text-dim mb-16 md:mb-24"
        initial={{ opacity: 0, x: -20 }}
        animate={isInView ? { opacity: 1, x: 0 } : {}}
        transition={{ duration: 0.6 }}
      >
        001 — Philosophy
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
          <blockquote className="font-display text-large font-medium leading-[1.1] text-fg">
            The future worth building is{' '}
            <span className="text-accent">alive</span>
            —not sterile steel and silicon monocultures.
          </blockquote>

          {/* Visual Placeholder */}
          <div className="mt-16 aspect-[4/3] border border-muted rounded-sm flex items-center justify-center">
            <div className="text-center text-dim p-8">
              <p className="text-micro mb-2">[ VISUAL: MATERIAL STUDY ]</p>
              <p className="text-xs text-muted">
                Close-up of adaptive material — mycelium composite, parametric lattice
              </p>
            </div>
          </div>
        </motion.div>

        {/* Right Column - Body Text */}
        <motion.div
          className="lg:col-span-6 lg:col-start-7"
          variants={staggerContainer}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
        >
          <motion.p 
            className="text-body text-fg/90 leading-relaxed mb-8"
            variants={fadeInUp}
          >
            We&apos;re at an inflection point where humanity&apos;s expansion—into space, 
            up the Kardashev scale—is happening simultaneously with Earth&apos;s ecological 
            challenges. The traditional narrative treats these as separate problems.
          </motion.p>

          <motion.p 
            className="text-body text-fg/90 leading-relaxed mb-8"
            variants={fadeInUp}
          >
            This is a false dichotomy. The future worth building synthesizes technological 
            capability with living systems, sustaining and elevating life both here and beyond.
          </motion.p>

          <motion.p 
            className="text-body text-fg/90 leading-relaxed mb-16"
            variants={fadeInUp}
          >
            I don&apos;t have all the answers yet—but I&apos;m building toward them.
          </motion.p>

          {/* Core Beliefs */}
          <motion.div variants={fadeInUp}>
            <p className="text-micro text-dim mb-8">What I Believe</p>
            
            <div className="space-y-6">
              {[
                {
                  title: 'Domain synthesis',
                  desc: 'produces breakthrough innovation. The most interesting problems exist at boundaries between fields.',
                },
                {
                  title: 'Distributed capability',
                  desc: 'over centralized control. Democratizing tools of creation strengthens the knowledge network.',
                },
                {
                  title: 'Living futures',
                  desc: 'over sterile optimization. The future should integrate with ecology, not replace it.',
                },
                {
                  title: 'Quality elevation',
                  desc: 'matters as much as expansion. How we live is as important as where we go.',
                },
              ].map((belief, i) => (
                <motion.div
                  key={belief.title}
                  className="group flex gap-4"
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: 0.6 + i * 0.1 }}
                >
                  <span className="text-accent text-sm mt-1">→</span>
                  <p className="text-body text-fg/80">
                    <span className="text-fg font-medium">{belief.title}</span>{' '}
                    {belief.desc}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Decorative Line */}
      <motion.div
        className="absolute bottom-0 left-6 md:left-12 lg:left-24 right-6 md:right-12 lg:right-24 h-[1px] bg-gradient-to-r from-muted via-muted to-transparent"
        initial={{ scaleX: 0, originX: 0 }}
        animate={isInView ? { scaleX: 1 } : {}}
        transition={{ duration: 1.2, delay: 0.8 }}
      />
    </section>
  )
}

