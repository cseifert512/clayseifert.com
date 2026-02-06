'use client'

import { useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useViewMode } from '@/hooks/useViewMode'

export default function ModeToggle() {
  const { mode, toggleMode } = useViewMode()

  // Keyboard shortcut: Shift + M
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.shiftKey && e.key === 'M') {
        e.preventDefault()
        toggleMode()
      }
    }

    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [toggleMode])

  return (
    <motion.button
      onClick={toggleMode}
      className="fixed bottom-6 right-6 md:bottom-8 md:right-12 z-50 flex items-center gap-2 md:gap-3 px-3 md:px-4 py-2 md:py-3 rounded-full border transition-all duration-300 group shadow-lg"
      style={{
        backgroundColor: 'var(--color-bg)',
        borderColor: 'var(--color-muted)',
      }}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      aria-label={`Switch to ${mode === 'systems' ? 'living' : 'systems'} view. Currently in ${mode} mode. Keyboard shortcut: Shift plus M`}
      aria-live="polite"
      title="Toggle view mode (Shift + M)"
    >
      {/* Icon Container */}
      <div className="relative w-5 h-5 md:w-6 md:h-6 flex items-center justify-center">
        <AnimatePresence mode="wait">
          {mode === 'systems' ? (
            <motion.svg
              key="systems"
              className="absolute inset-0 w-full h-full"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              initial={{ opacity: 0, rotate: -90 }}
              animate={{ opacity: 1, rotate: 0 }}
              exit={{ opacity: 0, rotate: 90 }}
              transition={{ duration: 0.3 }}
              style={{ color: 'var(--color-accent)' }}
            >
              {/* Geometric lattice/network node */}
              <circle cx="12" cy="12" r="3" />
              <line x1="12" y1="2" x2="12" y2="9" />
              <line x1="12" y1="15" x2="12" y2="22" />
              <line x1="2" y1="12" x2="9" y2="12" />
              <line x1="15" y1="12" x2="22" y2="12" />
              <line x1="5" y1="5" x2="9.5" y2="9.5" />
              <line x1="14.5" y1="14.5" x2="19" y2="19" />
              <line x1="19" y1="5" x2="14.5" y2="9.5" />
              <line x1="9.5" y1="14.5" x2="5" y2="19" />
            </motion.svg>
          ) : (
            <motion.svg
              key="living"
              className="absolute inset-0 w-full h-full"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              initial={{ opacity: 0, rotate: -90 }}
              animate={{ opacity: 1, rotate: 0 }}
              exit={{ opacity: 0, rotate: 90 }}
              transition={{ duration: 0.3 }}
              style={{ color: 'var(--color-accent)' }}
            >
              {/* Organic mycelium/growth pattern */}
              <path d="M12 2C12 2 8 6 8 10C8 12 9 13 10 13C10 13 9 15 9 17C9 19 10 20 11 20" strokeLinecap="round" />
              <path d="M12 2C12 2 16 6 16 10C16 12 15 13 14 13C14 13 15 15 15 17C15 19 14 20 13 20" strokeLinecap="round" />
              <path d="M12 8C12 8 10 10 8 10C6 10 5 9 5 8" strokeLinecap="round" />
              <path d="M12 8C12 8 14 10 16 10C18 10 19 9 19 8" strokeLinecap="round" />
              <circle cx="12" cy="12" r="1.5" fill="currentColor" />
              <circle cx="8" cy="10" r="1" fill="currentColor" />
              <circle cx="16" cy="10" r="1" fill="currentColor" />
            </motion.svg>
          )}
        </AnimatePresence>
      </div>

      {/* Label */}
      <div className="hidden sm:flex items-center gap-2 text-micro font-medium" style={{ color: 'var(--color-fg)' }}>
        <span className={mode === 'systems' ? 'opacity-100' : 'opacity-40'}>
          SYSTEMS
        </span>
        <span style={{ color: 'var(--color-dim)' }}>⟷</span>
        <span className={mode === 'living' ? 'opacity-100' : 'opacity-40'}>
          LIVING
        </span>
      </div>
      
      {/* Mobile Label - Icon Only */}
      <span className="sm:hidden text-xs font-medium" style={{ color: 'var(--color-fg)' }}>
        {mode === 'systems' ? 'SYS' : 'LIV'}
      </span>
    </motion.button>
  )
}

