'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const navItems = [
  { label: 'Philosophy', href: '#philosophy' },
  { label: 'Domains', href: '#domains' },
  { label: 'Working Notes', href: '#notes' },
  { label: 'Built', href: '#built' },
  { label: 'Contact', href: '#contact' },
]

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 100)
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => {
      document.body.style.overflow = ''
    }
  }, [isOpen])

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault()
    setIsOpen(false)
    
    setTimeout(() => {
      const element = document.querySelector(href)
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' })
      }
    }, 300)
  }

  return (
    <>
      {/* Fixed Navigation Bar */}
      <header className="fixed top-0 left-0 right-0 z-50 pointer-events-none">
        <div className="flex items-center justify-between p-6 md:p-8">
          {/* Logo */}
          <motion.a
            href="#"
            onClick={(e) => {
              e.preventDefault()
              window.scrollTo({ top: 0, behavior: 'smooth' })
            }}
            className="font-display font-semibold text-lg tracking-tight pointer-events-auto mode-transition-fast"
            style={{ color: 'var(--color-fg)' }}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            CLAY
          </motion.a>

          {/* Menu Button */}
          <motion.button
            onClick={() => setIsOpen(true)}
            className="font-body text-sm tracking-widest uppercase pointer-events-auto mode-transition-fast"
            style={{ color: 'var(--color-fg)' }}
            onMouseEnter={(e) => {
              e.currentTarget.style.color = 'var(--color-accent)'
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.color = 'var(--color-fg)'
            }}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            aria-label="Open navigation menu"
          >
            Menu
          </motion.button>
        </div>
      </header>

      {/* Full Screen Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="fixed inset-0 z-100 mode-transition"
            style={{ backgroundColor: 'var(--color-bg)' }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
          >
            {/* ASCII Pattern Background */}
            <div className="absolute inset-0 overflow-hidden opacity-10 pointer-events-none select-none">
              <pre 
                className="font-mono text-[8px] leading-none whitespace-pre animate-drift mode-transition"
                style={{ color: 'var(--color-accent)' }}
              >
{`
    ╭────────────────────────────────────────────────────────────────────────────────────────────────╮
    │                                                                                                │
    │     ○───────○───────○───────○───────○───────○───────○───────○───────○───────○───────○        │
    │     │       │       │       │       │       │       │       │       │       │       │        │
    │     │   ◉   │   ◉   │   ◉   │   ◉   │   ◉   │   ◉   │   ◉   │   ◉   │   ◉   │   ◉   │        │
    │     │       │       │       │       │       │       │       │       │       │       │        │
    │     ○───────○───────○───────○───────○───────○───────○───────○───────○───────○───────○        │
    │     │       │       │       │       │       │       │       │       │       │       │        │
    │     │   ◉   │   ◉   │   ◉   │   ◉   │   ◉   │   ◉   │   ◉   │   ◉   │   ◉   │   ◉   │        │
    │     │       │       │       │       │       │       │       │       │       │       │        │
    │     ○───────○───────○───────○───────○───────○───────○───────○───────○───────○───────○        │
    │     │       │       │       │       │       │       │       │       │       │       │        │
    │     │   ◉   │   ◉   │   ◉   │   ◉   │   ◉   │   ◉   │   ◉   │   ◉   │   ◉   │   ◉   │        │
    │     │       │       │       │       │       │       │       │       │       │       │        │
    │     ○───────○───────○───────○───────○───────○───────○───────○───────○───────○───────○        │
    │                                                                                                │
    ╰────────────────────────────────────────────────────────────────────────────────────────────────╯
`}
              </pre>
            </div>

            {/* Close Button */}
            <motion.button
              onClick={() => setIsOpen(false)}
              className="absolute top-6 right-6 md:top-8 md:right-8 font-body text-sm tracking-widest uppercase mode-transition-fast"
              style={{ color: 'var(--color-fg)' }}
              onMouseEnter={(e) => {
                e.currentTarget.style.color = 'var(--color-accent)'
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.color = 'var(--color-fg)'
              }}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
              aria-label="Close navigation menu"
            >
              Close
            </motion.button>

            {/* Navigation Links */}
            <nav className="flex flex-col justify-center h-full px-8 md:px-16 lg:px-24">
              {navItems.map((item, index) => (
                <motion.a
                  key={item.href}
                  href={item.href}
                  onClick={(e) => handleNavClick(e, item.href)}
                  className="group relative py-3 md:py-4"
                  initial={{ opacity: 0, x: -60 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.1 + index * 0.08, duration: 0.5 }}
                >
                  <span 
                    className="font-display text-4xl md:text-6xl lg:text-7xl font-medium mode-transition-fast"
                    style={{ color: 'var(--color-fg)' }}
                  >
                    {item.label}
                  </span>
                  <span 
                    className="absolute -left-8 top-1/2 -translate-y-1/2 w-4 h-[2px] opacity-0 group-hover:opacity-100 transition-opacity duration-300 mode-transition"
                    style={{ backgroundColor: 'var(--color-accent)' }}
                  />
                </motion.a>
              ))}
            </nav>

            {/* Footer Info */}
            <motion.div
              className="absolute bottom-8 left-8 md:left-16"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
            >
              <p className="text-sm mode-transition" style={{ color: 'var(--color-dim)' }}>
                Builder at the intersection of robotics,<br />
                living systems & advanced manufacturing
              </p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}

