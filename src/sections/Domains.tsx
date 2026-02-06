'use client'

import { useRef, useState } from 'react'
import { motion, useInView, AnimatePresence } from 'framer-motion'
import { useViewMode } from '@/hooks/useViewMode'

interface DomainContent {
  id: string
  title: string
  systemsDescription: string
  livingDescription: string
  systemsVisual: string
  livingVisual: string
  systemsFile: string
  livingFile: string
  ascii: string
}

const domains: DomainContent[] = [
  {
    id: '01',
    title: 'Living Systems × Fabrication',
    systemsDescription: 'Integration challenges: How do we create robotic end-effectors that work with non-uniform biological materials? Can we develop feedback systems that adapt to material variance in real-time? Computer vision for material assessment, adaptive toolpath generation, mycelium composite characterization.',
    livingDescription: 'What if construction worked with biological intelligence instead of treating everything as inert matter? Mycelium composites that grow into structural forms. Materials that heal and adapt. Buildings that breathe. This isn\'t speculative—it\'s the foundation of a construction revolution that respects ecology while expanding human capability.',
    systemsVisual: 'Parametric diagram of robotic arm with material feeds, technical wireframe showing adaptive toolpath generation',
    livingVisual: 'Close-up photography of mycelium growth with natural branching patterns, organic material texture',
    systemsFile: 'public/visuals/domains/living-systems-tech.webp',
    livingFile: 'public/visuals/domains/living-systems-organic.webp',
    ascii: `
    ╭─○─╮   ╭─○─╮
    │   │   │   │
    ○───○───○───○
    │   │   │   │
    ╰─○─╯   ╰─○─╯
    `,
  },
  {
    id: '02',
    title: 'Distributed Production',
    systemsDescription: 'Network architecture for distributed manufacturing: How do we coordinate multiple fabrication nodes while maintaining quality? Blockchain-verified production chains, distributed file systems for design data, peer-to-peer knowledge networks. Building infrastructure for truly decentralized advanced manufacturing.',
    livingDescription: 'Democratizing advanced manufacturing tools and knowledge—inspired by Fab Lab philosophy. When you decentralize the means of production, innovation comes from unexpected places and the knowledge network strengthens. Communities building for themselves, not waiting for centralized solutions.',
    systemsVisual: 'Network topology diagram with white/green nodes on dark background, distributed mesh visualization',
    livingVisual: 'Community workshop photography or abstract mesh suggesting connection and collaboration',
    systemsFile: 'public/visuals/domains/distributed-tech.webp',
    livingFile: 'public/visuals/domains/distributed-organic.webp',
    ascii: `
    ◉───────◉───────◉
    │ ╲   ╱ │ ╲   ╱ │
    │  ╲ ╱  │  ╲ ╱  │
    ◉───◉───◉───◉───◉
    `,
  },
  {
    id: '03',
    title: 'Material Intelligence',
    systemsDescription: 'Responsive material systems: Shape-memory alloys with embedded sensing, bio-polymers with programmable properties, functionally graded materials that compute structurally. How do we design materials that respond to environmental conditions without external control systems?',
    livingDescription: 'Moving beyond inert materials to responsive, adaptive, ecologically-integrated material systems. How do we design with materials that evolve, heal, and integrate into living ecosystems? Materials as participants in ecological cycles, not just resources to extract.',
    systemsVisual: 'Gradient structure cross-section showing functionally graded material, technical illustration style',
    livingVisual: 'Responsive surface macro photography showing organic texture variations and natural adaptation',
    systemsFile: 'public/visuals/domains/material-intel-tech.webp',
    livingFile: 'public/visuals/domains/material-intel-organic.webp',
    ascii: `
    ░░▒▒▓▓██▓▓▒▒░░
    ▒▒▓▓██████▓▓▒▒
    ▓▓████████████
    ▒▒▓▓██████▓▓▒▒
    ░░▒▒▓▓██▓▓▒▒░░
    `,
  },
  {
    id: '04',
    title: 'Computational Design × Physical Constraints',
    systemsDescription: 'Bridging digital and physical: Parametric modeling meets manufacturing reality. Physics simulation for fabrication planning, topology optimization with real-world constraints, robotic path planning for complex geometries. Building the computational infrastructure for physical construction.',
    livingDescription: 'Parametric thinking meets robotic fabrication, advanced simulation meets real-world constraints. The computer enables us to explore organic complexity that\'s actually buildable. Natural forms emerge from computational logic—not arbitrary curves, but structures optimized for beauty AND performance.',
    systemsVisual: 'Wireframe parametric mesh showing topology optimization, clean technical 3D modeling aesthetic',
    livingVisual: 'Built structure photography showing organic computation made physical, architectural scale',
    systemsFile: 'public/visuals/domains/computational-tech.webp',
    livingFile: 'public/visuals/domains/computational-organic.webp',
    ascii: `
    ╱╲    ╱╲    ╱╲
   ╱  ╲  ╱  ╲  ╱  ╲
  ╱────╲╱────╲╱────╲
  ╲────╱╲────╱╲────╱
   ╲  ╱  ╲  ╱  ╲  ╱
    ╲╱    ╲╱    ╲╱
    `,
  },
  {
    id: '05',
    title: 'Systems Thinking at Scale',
    systemsDescription: 'Kardashev-scale engineering with planetary boundaries: Energy systems for distributed production, closed-loop material flows, computational modeling of multi-scale systems. How do we build infrastructure that scales from workshop to civilization while maintaining systemic coherence?',
    livingDescription: 'Addressing Kardashev-scale challenges (energy, expansion, planetary boundaries) with Earth-scale solutions. How do we sustain and elevate life as we expand our technological capabilities? Building systems that work at the scale of civilizations while respecting the scale of ecosystems.',
    systemsVisual: 'Feedback loop diagram showing system dynamics, interconnected cycles and flows visualization',
    livingVisual: 'Nested scales imagery or planetary perspective showing interconnection from local to global',
    systemsFile: 'public/visuals/domains/systems-thinking-tech.webp',
    livingFile: 'public/visuals/domains/systems-thinking-organic.webp',
    ascii: `
    ╭──────────────╮
    │  ╭────────╮  │
    │  │  ╭──╮  │  │
    │  │  │◉ │  │  │
    │  │  ╰──╯  │  │
    │  ╰────────╯  │
    ╰──────────────╯
    `,
  },
]

export default function Domains() {
  const containerRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(containerRef, { once: true, margin: '-100px' })
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)
  const { mode } = useViewMode()

  const isLiving = mode === 'living'

  return (
    <section
      id="domains"
      ref={containerRef}
      className="relative py-32 md:py-48 mode-transition"
    >
      {/* Section Header */}
      <div className="px-6 md:px-12 lg:px-24 mb-16 md:mb-24">
        <motion.p
          className="text-micro mb-4"
          style={{ color: 'var(--color-dim)' }}
          initial={{ opacity: 0, x: -20 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          002 — Domains of Inquiry
        </motion.p>
        <motion.h2
          className="font-display text-large font-medium max-w-4xl"
          style={{ color: 'var(--color-fg)' }}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Exploring intersections where{' '}
          <span style={{ color: 'var(--color-accent)' }}>breakthrough</span> innovation emerges
        </motion.h2>
      </div>

      {/* Domain List - Full Width */}
      <div className="relative">
        {domains.map((domain, index) => (
          <motion.div
            key={domain.id}
            className="group relative border-t last:border-b mode-transition"
            style={{ borderColor: 'rgba(var(--color-muted-rgb, 58, 58, 58), 0.3)' }}
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
          >
            {/* Background ASCII on Hover */}
            <div 
              className={`
                absolute inset-0 overflow-hidden pointer-events-none transition-opacity duration-500
                ${hoveredIndex === index ? 'opacity-10' : 'opacity-0'}
              `}
            >
              <pre 
                className="font-mono text-[10px] whitespace-pre absolute right-12 top-1/2 -translate-y-1/2"
                style={{ color: 'var(--color-accent)' }}
              >
                {domain.ascii}
              </pre>
            </div>

            <div className="relative px-6 md:px-12 lg:px-24 py-8 md:py-12 grid grid-cols-12 gap-4 md:gap-8 items-start">
              {/* Number */}
              <div className="col-span-2 md:col-span-1">
                <span className="font-mono text-sm" style={{ color: 'var(--color-dim)' }}>
                  {domain.id}
                </span>
              </div>

              {/* Title */}
              <div className="col-span-10 md:col-span-4">
                <h3 
                  className="font-display text-xl md:text-2xl font-medium group-hover:opacity-100 transition-all duration-300"
                  style={{ 
                    color: hoveredIndex === index ? 'var(--color-accent)' : 'var(--color-fg)',
                  }}
                >
                  {domain.title}
                </h3>
              </div>

              {/* Description - Mode Aware */}
              <div className="col-span-12 md:col-span-5 md:col-start-6">
                <AnimatePresence mode="wait">
                  <motion.p
                    key={mode}
                    className="text-body leading-relaxed transition-colors duration-300"
                    style={{ 
                      color: hoveredIndex === index ? 'rgba(var(--color-fg-rgb, 250, 250, 250), 0.7)' : 'var(--color-dim)'
                    }}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    {isLiving ? domain.livingDescription : domain.systemsDescription}
                  </motion.p>
                </AnimatePresence>
              </div>

              {/* Arrow Indicator */}
              <div className="hidden md:flex col-span-2 justify-end items-center">
                <span 
                  className={`
                    text-xl transition-all duration-300 transform
                    ${hoveredIndex === index ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-4'}
                  `}
                  style={{ color: 'var(--color-accent)' }}
                >
                  →
                </span>
              </div>
            </div>

            {/* Visual Placeholder - Shows on Hover (Desktop) - Mode Aware */}
            <AnimatePresence>
              {hoveredIndex === index && (
                <motion.div
                  className="hidden lg:block absolute right-24 top-1/2 -translate-y-1/2 w-80 border rounded-sm backdrop-blur-sm z-10 mode-transition"
                  style={{ 
                    borderColor: 'var(--color-muted)',
                    backgroundColor: 'rgba(var(--color-bg-rgb, 10, 10, 10), 0.8)'
                  }}
                  initial={{ opacity: 0, x: 8 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 8 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="flex flex-col p-6">
                    <p className="text-micro mb-3" style={{ color: 'var(--color-accent)' }}>
                      [ VISUAL ]
                    </p>
                    <p className="text-xs leading-relaxed mb-4" style={{ color: 'var(--color-dim)' }}>
                      {isLiving ? domain.livingVisual : domain.systemsVisual}
                    </p>
                    <p className="text-xs opacity-60 font-mono" style={{ color: 'var(--color-dim)' }}>
                      {isLiving ? domain.livingFile : domain.systemsFile}
                    </p>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
