'use client'

import { useRef } from 'react'
import { motion, useInView, AnimatePresence } from 'framer-motion'
import ASCIIBackground from '@/components/ASCIIBackground'
import OrganicBackground from '@/components/OrganicBackground'
import { useViewMode } from '@/hooks/useViewMode'

const systemsSocialLinks = [
  { label: 'LinkedIn', href: '#' },
  { label: 'GitHub', href: '#' },
  { label: 'Scholar', href: '#' },
]

const livingSocialLinks = [
  { label: 'LinkedIn', href: '#' },
  { label: 'Twitter', href: '#' },
  { label: 'Writing', href: '#' },
]

export default function Contact() {
  const containerRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(containerRef, { once: true, margin: '-100px' })
  const { mode } = useViewMode()

  const isLiving = mode === 'living'
  const socialLinks = isLiving ? livingSocialLinks : systemsSocialLinks

  return (
    <section
      id="contact"
      ref={containerRef}
      className="relative min-h-screen flex flex-col justify-center py-32 md:py-48 px-6 md:px-12 lg:px-24 overflow-hidden mode-transition"
    >
      {/* Background Pattern - Mode Aware */}
      <ASCIIBackground pattern="topographic" opacity={isLiving ? 0 : 0.04} animate={false} />
      <OrganicBackground opacity={isLiving ? 0.06 : 0} />

      <div className="relative z-10 max-w-4xl">
        {/* Section Label */}
        <motion.p
          className="text-micro mb-8"
          style={{ color: 'var(--color-dim)' }}
          initial={{ opacity: 0, x: -20 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          005 — Contact
        </motion.p>

        {/* Main Heading - Mode Aware */}
        <AnimatePresence mode="wait">
          {isLiving ? (
            <motion.h2
              key="living-heading"
              className="font-display text-massive font-semibold mb-8"
              style={{ color: 'var(--color-fg)' }}
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -40 }}
              transition={{ duration: 0.8 }}
            >
              Let&apos;s create<br />something meaningful
            </motion.h2>
          ) : (
            <motion.h2
              key="systems-heading"
              className="font-display text-massive font-semibold mb-8"
              style={{ color: 'var(--color-fg)' }}
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -40 }}
              transition={{ duration: 0.8 }}
            >
              Let&apos;s build<br />something
            </motion.h2>
          )}
        </AnimatePresence>

        {/* Description - Mode Aware */}
        <AnimatePresence mode="wait">
          {isLiving ? (
            <motion.p
              key="living-desc"
              className="text-body max-w-xl mb-16 leading-relaxed"
              style={{ color: 'var(--color-dim)' }}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -30 }}
              transition={{ duration: 0.6 }}
            >
              Exploring living systems, sustainable construction, democratizing tools, 
              or the cultural future of architecture? I&apos;d love to hear about it.
            </motion.p>
          ) : (
            <motion.p
              key="systems-desc"
              className="text-body max-w-xl mb-16 leading-relaxed"
              style={{ color: 'var(--color-dim)' }}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -30 }}
              transition={{ duration: 0.6 }}
            >
              Working on robotic fabrication, distributed manufacturing, computational 
              design, or adjacent technical challenges? Let&apos;s discuss.
            </motion.p>
          )}
        </AnimatePresence>

        {/* Large Email Link */}
        <motion.a
          href="mailto:clay@clayseifert.com"
          className="group inline-block mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          <span 
            className="font-display text-2xl md:text-4xl lg:text-5xl font-medium group-hover:opacity-100 transition-all duration-300"
            style={{ 
              color: 'var(--color-fg)',
            }}
          >
            clay@clayseifert.com
          </span>
          <motion.div
            className="h-[2px] mt-2 origin-left"
            style={{ backgroundColor: 'var(--color-accent)' }}
            initial={{ scaleX: 0 }}
            whileHover={{ scaleX: 1 }}
            transition={{ duration: 0.4 }}
          />
        </motion.a>

        {/* Social Links - Mode Aware */}
        <motion.div
          className="flex gap-8"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.7 }}
        >
          <AnimatePresence mode="wait">
            {socialLinks.map((link, index) => (
              <motion.a
                key={`${link.label}-${mode}`}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm transition-colors duration-300"
                style={{ 
                  color: 'var(--color-dim)',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.color = 'var(--color-accent)'
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.color = 'var(--color-dim)'
                }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
              >
                {link.label}
              </motion.a>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* Footer */}
      <motion.footer
        className="absolute bottom-8 left-6 md:left-12 lg:left-24 right-6 md:right-12 lg:right-24 flex flex-col md:flex-row justify-between items-start md:items-center gap-4"
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : {}}
        transition={{ duration: 0.6, delay: 1 }}
      >
        <p className="text-xs" style={{ color: 'var(--color-muted)' }}>
          © {new Date().getFullYear()} Clay Seifert
        </p>
        <p className="text-xs" style={{ color: 'var(--color-muted)' }}>
          Building toward a future worth inhabiting
        </p>
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="text-xs flex items-center gap-2 transition-colors duration-300"
          style={{ color: 'var(--color-dim)' }}
          onMouseEnter={(e) => {
            e.currentTarget.style.color = 'var(--color-accent)'
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.color = 'var(--color-dim)'
          }}
        >
          Back to top
          <span>↑</span>
        </button>
      </motion.footer>
    </section>
  )
}
