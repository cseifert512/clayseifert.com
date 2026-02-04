'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import ASCIIBackground from '@/components/ASCIIBackground'

const socialLinks = [
  { label: 'LinkedIn', href: '#' }, // TODO: Add actual link
  { label: 'Twitter', href: '#' }, // TODO: Add actual link
  { label: 'GitHub', href: '#' }, // TODO: Add actual link
]

export default function Contact() {
  const containerRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(containerRef, { once: true, margin: '-100px' })

  return (
    <section
      id="contact"
      ref={containerRef}
      className="relative min-h-screen flex flex-col justify-center py-32 md:py-48 px-6 md:px-12 lg:px-24 overflow-hidden"
    >
      {/* Background Pattern */}
      <ASCIIBackground pattern="topographic" opacity={0.04} animate={false} />

      <div className="relative z-10 max-w-4xl">
        {/* Section Label */}
        <motion.p
          className="text-micro text-dim mb-8"
          initial={{ opacity: 0, x: -20 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          005 — Contact
        </motion.p>

        {/* Main Heading */}
        <motion.h2
          className="font-display text-massive font-semibold text-fg mb-8"
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Let&apos;s build
        </motion.h2>

        {/* Description */}
        <motion.p
          className="text-body text-dim max-w-xl mb-16 leading-relaxed"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          If you&apos;re working on living systems, robotic fabrication, advanced 
          manufacturing, decentralized production, or adjacent explorations—I&apos;d 
          love to hear about it.
        </motion.p>

        {/* Large Email Link */}
        <motion.a
          href="mailto:clay@example.com" // TODO: Add actual email
          className="group inline-block mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          <span className="font-display text-2xl md:text-4xl lg:text-5xl font-medium text-fg group-hover:text-accent transition-colors duration-300">
            clay@example.com
          </span>
          <motion.div
            className="h-[2px] bg-accent mt-2 origin-left"
            initial={{ scaleX: 0 }}
            whileHover={{ scaleX: 1 }}
            transition={{ duration: 0.4 }}
          />
        </motion.a>

        {/* Social Links */}
        <motion.div
          className="flex gap-8"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.7 }}
        >
          {socialLinks.map((link, index) => (
            <motion.a
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-dim hover:text-accent transition-colors duration-300"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: 0.8 + index * 0.1 }}
            >
              {link.label}
            </motion.a>
          ))}
        </motion.div>
      </div>

      {/* Footer */}
      <motion.footer
        className="absolute bottom-8 left-6 md:left-12 lg:left-24 right-6 md:right-12 lg:right-24 flex flex-col md:flex-row justify-between items-start md:items-center gap-4"
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : {}}
        transition={{ duration: 0.6, delay: 1 }}
      >
        <p className="text-xs text-muted">
          © {new Date().getFullYear()} Clay Seifert
        </p>
        <p className="text-xs text-muted">
          Building toward a future worth inhabiting
        </p>
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="text-xs text-dim hover:text-accent transition-colors duration-300 flex items-center gap-2"
        >
          Back to top
          <span>↑</span>
        </button>
      </motion.footer>
    </section>
  )
}

