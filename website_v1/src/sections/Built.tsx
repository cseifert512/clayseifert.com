'use client'

import { useRef, useState } from 'react'
import { motion, useInView, AnimatePresence } from 'framer-motion'
import { useViewMode } from '@/hooks/useViewMode'

interface ProjectContent {
  id: number
  title: string
  year: string
  systemsDescription: string
  livingDescription: string
  tags: string[]
  systemsVisual: string
  livingVisual: string
  systemsFile: string
  livingFile: string
  link?: string
}

const projects: ProjectContent[] = [
  {
    id: 1,
    title: 'archipedia.ai',
    year: '2024',
    systemsDescription: 'Visual search engine for architectural precedents. Tech Stack: Vision transformers (ViT), geometric reasoning, vector embeddings, similarity search at scale. Challenge: Enabling architectural search beyond text—finding precedents through visual and spatial similarity.',
    livingDescription: 'Making architectural knowledge accessible through vision. Every architect has stood in front of a building and thought: "What else looks like this?" Traditional search fails. This tool lets designers find precedents through what they see, not what they can articulate. Democratizing access to architectural knowledge.',
    tags: ['AI/ML', 'Computer Vision', 'Architecture'],
    systemsVisual: 'Clean UI mockup of search interface with architectural similarity results, dark mode with technical annotations',
    livingVisual: 'Grid of architectural images showing visual connections and similarities, warm presentation',
    systemsFile: '/visuals/work/research-tech-1.jpg',
    livingFile: '/visuals/work/research-organic-1.jpg',
    link: '#',
  },
  {
    id: 2,
    title: 'Resia AI',
    year: '2023-24',
    systemsDescription: 'Home renovation marketplace platform. Tech implementation: Contractor matching algorithms, project management system, real-time communication infrastructure. Built marketplace architecture connecting supply and demand in fragmented construction industry.',
    livingDescription: 'Co-founded home renovation startup connecting homeowners with contractors. Learned invaluable lessons about marketplaces, construction industry dynamics, and product-market fit. Sometimes the most important lessons come from what doesn\'t work as planned. Understanding user needs in a traditional industry.',
    tags: ['Startup', 'Marketplace', 'Construction'],
    systemsVisual: 'Dashboard interface mockup showing project management and contractor matching system',
    livingVisual: 'Before/after renovation imagery or human-centered contractor interaction visuals',
    systemsFile: '/visuals/work/gallery-1.jpg',
    livingFile: '/visuals/work/gallery-2.jpg',
    link: '#',
  },
  {
    id: 3,
    title: 'Published Research',
    year: '2022-24',
    systemsDescription: 'Computational design research published in AAG, ACADIA, and CAADRIA conferences. Methodologies: Parametric optimization, digital fabrication workflows, geometric algorithms, performance analysis. Contributing to the academic foundation of computational architecture.',
    livingDescription: 'Research exploring how computation enables new architectural possibilities. Published in peer-reviewed conferences. This work contributes to the broader conversation about how technology can serve beauty, sustainability, and human experience—not just efficiency. Building the intellectual infrastructure for future practice.',
    tags: ['Research', 'Computational Design', 'Academic'],
    systemsVisual: 'Research figures composite showing parametric geometry studies and computational methods',
    livingVisual: 'Built prototypes and material studies from research showing physical manifestation',
    systemsFile: '/visuals/work/research-tech-1.jpg',
    livingFile: '/visuals/work/research-organic-1.jpg',
    link: '#',
  },
  {
    id: 4,
    title: 'UT Austin',
    year: '2020-24',
    systemsDescription: 'Dual degrees in Architecture + Computer Science. Technical foundation: Data structures, algorithms, machine learning, computational geometry. Architectural training: Design thinking, spatial reasoning, fabrication. Systematic integration of both disciplines in thesis work.',
    livingDescription: 'Dual degrees in Architecture + Computer Science. Bridging architectural thinking with technical implementation. Focused on computational design as a means to create more responsive, sustainable, beautiful buildings. Education as foundation for synthesis—refusing to choose between design vision and technical capability.',
    tags: ['Education', 'Architecture', 'CS'],
    systemsVisual: 'Computational models and technical drawings showing systematic design process',
    livingVisual: 'Architectural thesis renderings with human scale showing spatial experience',
    systemsFile: '/visuals/work/ut-austin-tech-1.jpg',
    livingFile: '/visuals/work/ut-austin-organic-1.jpg',
  },
]

export default function Built() {
  const containerRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(containerRef, { once: true, margin: '-100px' })
  const [hoveredId, setHoveredId] = useState<number | null>(null)
  const { mode } = useViewMode()

  const hoveredProject = projects.find(p => p.id === hoveredId)
  const isLiving = mode === 'living'

  return (
    <section
      id="built"
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
          004 — Built
        </motion.p>
        <motion.h2
          className="font-display text-large font-medium max-w-3xl"
          style={{ color: 'var(--color-fg)' }}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          {isLiving ? 'Work in the world' : 'Proof of capability'}
        </motion.h2>
      </div>

      {/* Two Column Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24">
        {/* Left: Project List */}
        <div className="space-y-0">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              className="group relative border-t last:border-b mode-transition"
              style={{ borderColor: 'rgba(var(--color-muted-rgb, 58, 58, 58), 0.3)' }}
              initial={{ opacity: 0, x: -30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
              onMouseEnter={() => setHoveredId(project.id)}
              onMouseLeave={() => setHoveredId(null)}
            >
              <div className="py-8 flex items-start justify-between gap-4">
                <div className="flex-1">
                  {/* Title */}
                  <h3 
                    className="font-display text-xl md:text-2xl font-medium mb-2 transition-colors duration-300"
                    style={{ 
                      color: hoveredId === project.id ? 'var(--color-accent)' : 'var(--color-fg)'
                    }}
                  >
                    {project.link ? (
                      <a href={project.link} target="_blank" rel="noopener noreferrer">
                        {project.title}
                      </a>
                    ) : (
                      project.title
                    )}
                  </h3>

                  {/* Description - Mode Aware */}
                  <AnimatePresence mode="wait">
                    <motion.p
                      key={mode}
                      className="text-body leading-relaxed mb-4 max-w-md"
                      style={{ color: 'var(--color-dim)' }}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      {isLiving ? project.livingDescription : project.systemsDescription}
                    </motion.p>
                  </AnimatePresence>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map(tag => (
                      <span
                        key={tag}
                        className="text-xs px-2 py-1 rounded-sm mode-transition"
                        style={{
                          color: 'var(--color-muted)',
                          borderWidth: '1px',
                          borderStyle: 'solid',
                          borderColor: 'rgba(var(--color-muted-rgb, 58, 58, 58), 0.5)'
                        }}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Year */}
                <div className="text-right">
                  <span className="font-mono text-sm" style={{ color: 'var(--color-dim)' }}>
                    {project.year}
                  </span>
                  {project.link && (
                    <span 
                      className={`
                        block mt-2 text-sm
                        transition-all duration-300 transform
                        ${hoveredId === project.id ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-2'}
                      `}
                      style={{ color: 'var(--color-accent)' }}
                    >
                      ↗
                    </span>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Right: Hover Preview (Desktop Only) - Mode Aware */}
        <div className="hidden lg:block relative">
          <div className="sticky top-32">
            <AnimatePresence mode="wait">
              {hoveredProject ? (
                <motion.div
                  key={`${hoveredProject.id}-${mode}`}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.3 }}
                  className="aspect-[4/3] rounded-sm overflow-hidden"
                >
                  <img
                    src={isLiving ? hoveredProject.livingFile : hoveredProject.systemsFile}
                    alt={hoveredProject.title}
                    className="w-full h-full object-cover"
                  />
                </motion.div>
              ) : (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="aspect-[4/3] border border-dashed rounded-sm flex items-center justify-center mode-transition"
                  style={{ borderColor: 'rgba(var(--color-muted-rgb, 58, 58, 58), 0.2)' }}
                >
                  <p className="text-sm" style={{ color: 'var(--color-dim)' }}>
                    Hover over a project
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  )
}
