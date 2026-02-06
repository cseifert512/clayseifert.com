'use client'

import { useRef, useState } from 'react'
import { motion, useInView, AnimatePresence } from 'framer-motion'
import Link from 'next/link'
import { useViewMode } from '@/hooks/useViewMode'

type SystemsCategory = 'all' | 'technical' | 'prototypes' | 'code' | 'research'
type LivingCategory = 'all' | 'essays' | 'observations' | 'field-notes' | 'influences'

const systemsCategories: { id: SystemsCategory; label: string }[] = [
  { id: 'all', label: 'All' },
  { id: 'technical', label: 'Technical Papers' },
  { id: 'prototypes', label: 'Prototypes' },
  { id: 'code', label: 'Code' },
  { id: 'research', label: 'Research' },
]

const livingCategories: { id: LivingCategory; label: string }[] = [
  { id: 'all', label: 'All' },
  { id: 'essays', label: 'Essays' },
  { id: 'observations', label: 'Observations' },
  { id: 'field-notes', label: 'Field Notes' },
  { id: 'influences', label: 'Influences' },
]

interface Entry {
  id: number
  systemsCategory: SystemsCategory
  livingCategory: LivingCategory
  title: string
  date: string
  systemsPreview: string
  livingPreview: string
  featured: boolean
  slug?: string
  externalLink?: string
  linkLabel?: string
}

const entries: Entry[] = [
  {
    id: 1,
    systemsCategory: 'technical',
    livingCategory: 'essays',
    title: 'Why Robotics Needs Biology',
    date: 'Dec 2024',
    systemsPreview: 'Analysis of biological intelligence systems as design patterns for robotic control architectures. Examining distributed sensing, adaptive behavior, and emergent coordination.',
    livingPreview: 'The artificial intelligence revolution has largely ignored the most sophisticated intelligence system we know. Nature already solved these problems.',
    featured: true,
    slug: 'why-robotics-needs-biology',
  },
  {
    id: 2,
    systemsCategory: 'research',
    livingCategory: 'essays',
    title: 'The Fab Lab Thesis Meets Advanced Manufacturing',
    date: 'Jan 2025',
    systemsPreview: 'Technical analysis: How distributed CNC networks with blockchain verification enable industrial-scale personal fabrication. Infrastructure requirements and protocol design.',
    livingPreview: 'Neil Gershenfeld\'s vision of personal fabrication is colliding with industrial-scale advanced manufacturing. What happens when communities can build for themselves?',
    featured: false,
    slug: 'fab-lab-thesis',
  },
  {
    id: 3,
    systemsCategory: 'technical',
    livingCategory: 'field-notes',
    title: 'Mycelium Structural Properties Under Load Testing',
    date: 'Jan 2025',
    systemsPreview: 'Tensile strength analysis of mycelium composites in controlled growth conditions. Experimental methodology and performance data.',
    livingPreview: 'Three months of experiments revealed something unexpected: the "weakest" biological materials become surprisingly strong when allowed to grow according to their nature.',
    featured: true,
    slug: 'mycelium-observations',
  },
  {
    id: 4,
    systemsCategory: 'research',
    livingCategory: 'observations',
    title: 'Studio Drift\'s Kinetic Sculptures',
    date: 'Dec 2024',
    systemsPreview: 'Technical analysis of swarm robotics implementation. Examining distributed control algorithms and emergent coordination patterns.',
    livingPreview: 'Reflections after seeing Franchise Freedom. The swarm behavior of drones mimicking starling murmurations—computation creating beauty that feels alive.',
    featured: false,
    slug: 'studio-drift-kinetic',
  },
  {
    id: 5,
    systemsCategory: 'prototypes',
    livingCategory: 'observations',
    title: 'archipedia.ai',
    date: '2024',
    systemsPreview: 'Vision transformers for architectural similarity search. Vector embeddings, geometric reasoning, and large-scale database optimization.',
    livingPreview: 'Making architectural knowledge accessible through vision. Democratizing how designers discover precedents and explore possibilities.',
    featured: true,
    externalLink: '#',
    linkLabel: 'View Project',
  },
]

export default function WorkingNotes() {
  const containerRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(containerRef, { once: true, margin: '-100px' })
  const { mode } = useViewMode()
  const [activeSystemsCategory, setActiveSystemsCategory] = useState<SystemsCategory>('all')
  const [activeLivingCategory, setActiveLivingCategory] = useState<LivingCategory>('all')
  const [hoveredId, setHoveredId] = useState<number | null>(null)

  const isLiving = mode === 'living'
  const activeCategory = isLiving ? activeLivingCategory : activeSystemsCategory
  
  const filteredEntries = activeCategory === 'all' 
    ? entries 
    : entries.filter(e => isLiving 
        ? e.livingCategory === activeCategory 
        : e.systemsCategory === activeCategory
      )

  return (
    <section
      id="notes"
      ref={containerRef}
      className="relative py-32 md:py-48 px-6 md:px-12 lg:px-24 mode-transition"
    >
      {/* Section Header */}
      <div className="mb-16 md:mb-24">
        <motion.p
          className="text-micro mb-4"
          style={{ color: 'var(--color-dim)' }}
          initial={{ opacity: 0, x: -20 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          003 — Working Notes
        </motion.p>
        <motion.h2
          className="font-display text-large font-medium max-w-3xl mb-6"
          style={{ color: 'var(--color-fg)' }}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          {isLiving ? 'Thinking in process' : 'Documenting the work'}
        </motion.h2>
        <AnimatePresence mode="wait">
          <motion.p
            key={mode}
            className="text-body max-w-xl"
            style={{ color: 'var(--color-dim)' }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            {isLiving 
              ? 'Essays, observations, field notes, and influences organized by theme. Ideas develop over time through exploration and reflection.'
              : 'Technical papers, prototypes, code samples, and research organized by methodology. Over time, systematic patterns emerge.'
            }
          </motion.p>
        </AnimatePresence>
      </div>

      {/* Category Filter - Mode Aware */}
      <motion.div
        className="flex flex-wrap gap-4 mb-12 md:mb-16"
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6, delay: 0.4 }}
      >
        <AnimatePresence mode="wait">
          {isLiving ? (
            <motion.div
              key="living-cats"
              className="flex flex-wrap gap-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              {livingCategories.map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => setActiveLivingCategory(cat.id)}
                  className={`
                    text-sm transition-all duration-300
                    ${activeLivingCategory === cat.id 
                      ? '' 
                      : 'hover:opacity-100'
                    }
                  `}
                  style={{
                    color: activeLivingCategory === cat.id ? 'var(--color-accent)' : 'var(--color-dim)'
                  }}
                >
                  {cat.label}
                  {activeLivingCategory === cat.id && (
                    <motion.div
                      className="h-[1px] mt-1"
                      style={{ backgroundColor: 'var(--color-accent)' }}
                      layoutId="category-underline"
                    />
                  )}
                </button>
              ))}
            </motion.div>
          ) : (
            <motion.div
              key="systems-cats"
              className="flex flex-wrap gap-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              {systemsCategories.map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => setActiveSystemsCategory(cat.id)}
                  className={`
                    text-sm transition-all duration-300
                    ${activeSystemsCategory === cat.id 
                      ? '' 
                      : 'hover:opacity-100'
                    }
                  `}
                  style={{
                    color: activeSystemsCategory === cat.id ? 'var(--color-accent)' : 'var(--color-dim)'
                  }}
                >
                  {cat.label}
                  {activeSystemsCategory === cat.id && (
                    <motion.div
                      className="h-[1px] mt-1"
                      style={{ backgroundColor: 'var(--color-accent)' }}
                      layoutId="category-underline"
                    />
                  )}
                </button>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>

      {/* Editorial Grid */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-8">
        <AnimatePresence mode="wait">
          {filteredEntries.map((entry, index) => {
            const isFeatured = entry.featured
            const colSpan = isFeatured ? 'md:col-span-7' : 'md:col-span-5'
            
            const isInternal = !!entry.slug
            const href = isInternal ? `/articles/${entry.slug}` : entry.externalLink
            const linkLabel = entry.linkLabel || (isInternal ? 'Read More' : 'View')
            
            const CardContent = (
              <div 
                className={`
                  relative p-6 md:p-8 border rounded-sm h-full
                  transition-all duration-500 mode-transition
                  ${hoveredId === entry.id ? 'border-opacity-100' : 'border-opacity-30'}
                `}
                style={{
                  borderColor: hoveredId === entry.id ? 'var(--color-accent)' : 'var(--color-muted)',
                  backgroundColor: hoveredId === entry.id ? 'rgba(var(--color-muted-rgb, 58, 58, 58), 0.05)' : 'transparent'
                }}
              >
                {/* Category & Date */}
                <div className="flex justify-between items-center mb-4">
                  <span className="text-micro" style={{ color: 'var(--color-accent)' }}>
                    {isLiving ? entry.livingCategory : entry.systemsCategory}
                  </span>
                  <span className="text-micro" style={{ color: 'var(--color-dim)' }}>
                    {entry.date}
                  </span>
                </div>

                {/* Title */}
                <h3 
                  className="font-display text-xl md:text-2xl font-medium mb-3 group-hover:transition-colors group-hover:duration-300"
                  style={{ 
                    color: hoveredId === entry.id ? 'var(--color-accent)' : 'var(--color-fg)'
                  }}
                >
                  {entry.title}
                </h3>

                {/* Preview - Mode Aware */}
                <AnimatePresence mode="wait">
                  <motion.p
                    key={mode}
                    className="text-body leading-relaxed mb-6"
                    style={{ color: 'var(--color-dim)' }}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    {isLiving ? entry.livingPreview : entry.systemsPreview}
                  </motion.p>
                </AnimatePresence>

                {/* Link */}
                <div 
                  className="flex items-center gap-2 text-sm transition-colors duration-300"
                  style={{ 
                    color: hoveredId === entry.id ? 'var(--color-accent)' : 'rgba(var(--color-fg-rgb, 250, 250, 250), 0.6)'
                  }}
                >
                  <span>{linkLabel}</span>
                  <span className="transform transition-transform duration-300 group-hover:translate-x-2">→</span>
                </div>

                {/* Corner Accent */}
                <div 
                  className={`
                    absolute top-0 right-0 w-16 h-16 pointer-events-none
                    transition-opacity duration-500
                    ${hoveredId === entry.id ? 'opacity-100' : 'opacity-0'}
                  `}
                >
                  <div 
                    className="absolute top-0 right-0 w-full h-[1px] bg-gradient-to-l from-current to-transparent"
                    style={{ color: 'var(--color-accent)' }}
                  />
                  <div 
                    className="absolute top-0 right-0 h-full w-[1px] bg-gradient-to-b from-current to-transparent"
                    style={{ color: 'var(--color-accent)' }}
                  />
                </div>
              </div>
            )
            
            return (
              <motion.article
                key={`${entry.id}-${mode}`}
                className={`group relative ${colSpan}`}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -30 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                onMouseEnter={() => setHoveredId(entry.id)}
                onMouseLeave={() => setHoveredId(null)}
              >
                {isInternal ? (
                  <Link href={href!} className="block h-full">
                    {CardContent}
                  </Link>
                ) : href ? (
                  <a 
                    href={href} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="block h-full"
                  >
                    {CardContent}
                  </a>
                ) : (
                  CardContent
                )}
              </motion.article>
            )
          })}
        </AnimatePresence>
      </div>

      {/* Decorative Element */}
      <motion.div
        className="absolute bottom-0 left-6 md:left-12 lg:left-24 right-6 md:right-12 lg:right-24 h-[1px] bg-gradient-to-r from-transparent via-current to-transparent"
        style={{ color: 'var(--color-muted)' }}
        initial={{ scaleX: 0, originX: 0.5 }}
        animate={isInView ? { scaleX: 1 } : {}}
        transition={{ duration: 1.2, delay: 1 }}
      />
    </section>
  )
}
