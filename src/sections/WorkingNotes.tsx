'use client'

import { useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'

type Category = 'all' | 'essays' | 'notes' | 'prototypes' | 'reading'

const categories: { id: Category; label: string }[] = [
  { id: 'all', label: 'All' },
  { id: 'essays', label: 'Essays' },
  { id: 'notes', label: 'Field Notes' },
  { id: 'prototypes', label: 'Prototypes' },
  { id: 'reading', label: 'Reading' },
]

const entries = [
  {
    id: 1,
    category: 'essays' as Category,
    title: 'Why Robotics Needs Biology',
    date: 'Dec 2024',
    preview: 'The artificial intelligence revolution has largely ignored the most sophisticated intelligence system we know.',
    featured: true,
  },
  {
    id: 2,
    category: 'essays' as Category,
    title: 'The Fab Lab Thesis Meets Advanced Manufacturing',
    date: 'Jan 2025',
    preview: 'Neil Gershenfeld\'s vision of personal fabrication is colliding with industrial-scale advanced manufacturing.',
    featured: false,
  },
  {
    id: 3,
    category: 'notes' as Category,
    title: 'Observations on Mycelium Structural Properties',
    date: 'Jan 2025',
    preview: 'Notes from experiments with mycelium-based composites. Surprising tensile strength in specific growth conditions.',
    featured: true,
  },
  {
    id: 4,
    category: 'notes' as Category,
    title: 'Studio Drift\'s Kinetic Sculptures',
    date: 'Dec 2024',
    preview: 'Reflections after seeing Franchise Freedom. The swarm behavior of drones mimicking starling murmurations.',
    featured: false,
  },
  {
    id: 5,
    category: 'prototypes' as Category,
    title: 'archipedia.ai',
    date: '2024',
    preview: 'Visual search engine for architectural precedents using vision transformers and geometric reasoning.',
    featured: true,
    link: '#',
  },
  {
    id: 6,
    category: 'prototypes' as Category,
    title: 'Resia AI',
    date: '2023-24',
    preview: 'Co-founded home renovation startup. Learned about marketplaces, construction dynamics, and product-market fit.',
    featured: false,
    link: '#',
  },
  {
    id: 7,
    category: 'reading' as Category,
    title: 'The Biophilia Hypothesis — E.O. Wilson',
    date: 'Jan 2025',
    preview: 'Revisiting Wilson\'s foundational text on humanity\'s innate connection to living systems.',
    featured: false,
  },
  {
    id: 8,
    category: 'reading' as Category,
    title: 'Fab: The Coming Revolution',
    date: 'Dec 2024',
    preview: 'The book that sparked the Fab Lab movement. Gershenfeld\'s vision of digital-physical convergence.',
    featured: false,
  },
]

export default function WorkingNotes() {
  const containerRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(containerRef, { once: true, margin: '-100px' })
  const [activeCategory, setActiveCategory] = useState<Category>('all')
  const [hoveredId, setHoveredId] = useState<number | null>(null)

  const filteredEntries = activeCategory === 'all' 
    ? entries 
    : entries.filter(e => e.category === activeCategory)

  return (
    <section
      id="notes"
      ref={containerRef}
      className="relative py-32 md:py-48 px-6 md:px-12 lg:px-24"
    >
      {/* Section Header */}
      <div className="mb-16 md:mb-24">
        <motion.p
          className="text-micro text-dim mb-4"
          initial={{ opacity: 0, x: -20 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          003 — Working Notes
        </motion.p>
        <motion.h2
          className="font-display text-large font-medium text-fg max-w-3xl mb-6"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Documenting the process
        </motion.h2>
        <motion.p
          className="text-body text-dim max-w-xl"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          Essays, observations, prototypes, and references organized by topic. 
          Over time, patterns emerge.
        </motion.p>
      </div>

      {/* Category Filter */}
      <motion.div
        className="flex flex-wrap gap-4 mb-12 md:mb-16"
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6, delay: 0.4 }}
      >
        {categories.map((cat) => (
          <button
            key={cat.id}
            onClick={() => setActiveCategory(cat.id)}
            className={`
              text-sm transition-all duration-300
              ${activeCategory === cat.id 
                ? 'text-accent' 
                : 'text-dim hover:text-fg'
              }
            `}
          >
            {cat.label}
            {activeCategory === cat.id && (
              <motion.div
                className="h-[1px] bg-accent mt-1"
                layoutId="category-underline"
              />
            )}
          </button>
        ))}
      </motion.div>

      {/* Editorial Grid */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-8">
        {filteredEntries.map((entry, index) => {
          // Create asymmetric layout
          const isFeatured = entry.featured
          const colSpan = isFeatured ? 'md:col-span-7' : 'md:col-span-5'
          
          return (
            <motion.article
              key={entry.id}
              className={`group relative ${colSpan}`}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.5 + index * 0.1 }}
              onMouseEnter={() => setHoveredId(entry.id)}
              onMouseLeave={() => setHoveredId(null)}
            >
              <div 
                className={`
                  relative p-6 md:p-8 border border-muted/30 rounded-sm
                  transition-all duration-500
                  ${hoveredId === entry.id ? 'border-accent/50 bg-muted/5' : 'bg-transparent'}
                `}
              >
                {/* Category & Date */}
                <div className="flex justify-between items-center mb-4">
                  <span className="text-micro text-accent">{entry.category}</span>
                  <span className="text-micro text-dim">{entry.date}</span>
                </div>

                {/* Title */}
                <h3 className="font-display text-xl md:text-2xl font-medium text-fg mb-3 group-hover:text-accent transition-colors duration-300">
                  {entry.title}
                </h3>

                {/* Preview */}
                <p className="text-body text-dim leading-relaxed mb-6">
                  {entry.preview}
                </p>

                {/* Link */}
                <div className="flex items-center gap-2 text-sm text-fg/60 group-hover:text-accent transition-colors duration-300">
                  <span>{entry.link ? 'View Project' : 'Read More'}</span>
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
                  <div className="absolute top-0 right-0 w-full h-[1px] bg-gradient-to-l from-accent to-transparent" />
                  <div className="absolute top-0 right-0 h-full w-[1px] bg-gradient-to-b from-accent to-transparent" />
                </div>
              </div>
            </motion.article>
          )
        })}
      </div>

      {/* Decorative Element */}
      <motion.div
        className="absolute bottom-0 left-6 md:left-12 lg:left-24 right-6 md:right-12 lg:right-24 h-[1px] bg-gradient-to-r from-muted via-muted to-transparent"
        initial={{ scaleX: 0, originX: 0 }}
        animate={isInView ? { scaleX: 1 } : {}}
        transition={{ duration: 1.2, delay: 1 }}
      />
    </section>
  )
}

