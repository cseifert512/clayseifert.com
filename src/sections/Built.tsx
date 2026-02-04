'use client'

import { useRef, useState } from 'react'
import { motion, useInView, AnimatePresence } from 'framer-motion'

const projects = [
  {
    id: 1,
    title: 'archipedia.ai',
    year: '2024',
    description: 'Visual search engine for architectural precedents using vision transformers and geometric reasoning.',
    tags: ['AI/ML', 'Computer Vision', 'Architecture'],
    link: '#', // TODO: Add actual link
    visual: 'Interface showing architectural search results with similar building matches',
  },
  {
    id: 2,
    title: 'Resia AI',
    year: '2023-24',
    description: 'Co-founded home renovation startup connecting homeowners with contractors. Learned invaluable lessons about marketplaces, construction industry dynamics, and product-market fit.',
    tags: ['Startup', 'Marketplace', 'Construction'],
    link: '#', // TODO: Add actual link
    visual: 'Product interface showing renovation project management dashboard',
  },
  {
    id: 3,
    title: 'Published Research',
    year: '2022-24',
    description: 'Computational design research published in AAG, ACADIA, and CAADRIA conferences. Exploring parametric design, digital fabrication, and geometric optimization.',
    tags: ['Research', 'Computational Design', 'Academic'],
    link: '#', // TODO: Add actual link
    visual: 'Research paper figures showing parametric geometry studies',
  },
  {
    id: 4,
    title: 'UT Austin',
    year: '2020-24',
    description: 'Dual degrees in Architecture + Computer Science. Focused on computational design, digital fabrication, and parametric modeling. Bridging architectural thinking with technical implementation.',
    tags: ['Education', 'Architecture', 'CS'],
    visual: 'Architectural thesis project renderings and diagrams',
  },
]

export default function Built() {
  const containerRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(containerRef, { once: true, margin: '-100px' })
  const [hoveredId, setHoveredId] = useState<number | null>(null)

  const hoveredProject = projects.find(p => p.id === hoveredId)

  return (
    <section
      id="built"
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
          004 — Built
        </motion.p>
        <motion.h2
          className="font-display text-large font-medium text-fg max-w-3xl"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Proof of capability
        </motion.h2>
      </div>

      {/* Two Column Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24">
        {/* Left: Project List */}
        <div className="space-y-0">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              className="group relative border-t border-muted/30 last:border-b"
              initial={{ opacity: 0, x: -30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
              onMouseEnter={() => setHoveredId(project.id)}
              onMouseLeave={() => setHoveredId(null)}
            >
              <div className="py-8 flex items-start justify-between gap-4">
                <div className="flex-1">
                  {/* Title */}
                  <h3 className="font-display text-xl md:text-2xl font-medium text-fg group-hover:text-accent transition-colors duration-300 mb-2">
                    {project.link ? (
                      <a href={project.link} target="_blank" rel="noopener noreferrer">
                        {project.title}
                      </a>
                    ) : (
                      project.title
                    )}
                  </h3>

                  {/* Description */}
                  <p className="text-body text-dim leading-relaxed mb-4 max-w-md">
                    {project.description}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map(tag => (
                      <span
                        key={tag}
                        className="text-xs text-muted border border-muted/50 px-2 py-1 rounded-sm"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Year */}
                <div className="text-right">
                  <span className="font-mono text-sm text-dim">{project.year}</span>
                  {project.link && (
                    <span 
                      className={`
                        block mt-2 text-accent text-sm
                        transition-all duration-300 transform
                        ${hoveredId === project.id ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-2'}
                      `}
                    >
                      ↗
                    </span>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Right: Hover Preview (Desktop Only) */}
        <div className="hidden lg:block relative">
          <div className="sticky top-32">
            <AnimatePresence mode="wait">
              {hoveredProject ? (
                <motion.div
                  key={hoveredProject.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.3 }}
                  className="aspect-[4/3] border border-muted/50 rounded-sm bg-muted/5 flex items-center justify-center"
                >
                  <div className="text-center p-8">
                    <p className="text-micro text-accent mb-2">[ VISUAL ]</p>
                    <p className="text-sm text-dim max-w-xs">{hoveredProject.visual}</p>
                  </div>
                </motion.div>
              ) : (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="aspect-[4/3] border border-muted/20 border-dashed rounded-sm flex items-center justify-center"
                >
                  <p className="text-dim text-sm">Hover over a project</p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  )
}

