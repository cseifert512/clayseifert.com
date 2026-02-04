'use client'

import { useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'

const domains = [
  {
    id: '01',
    title: 'Living Systems × Fabrication',
    description: 'How do we build robotic and manufacturing systems that work with biological intelligence rather than against it? The future of construction and production should integrate adaptive, living materials and ecological thinking.',
    visual: 'Organic growth pattern — mycelium networks, biological branching structures',
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
    description: 'Democratizing advanced manufacturing tools and knowledge — inspired by Fab Lab philosophy. When you decentralize the means of production, innovation comes from unexpected places and the knowledge network strengthens.',
    visual: 'Network/node visualization — distributed mesh, decentralized topology',
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
    description: 'Moving beyond inert materials to responsive, adaptive, ecologically-integrated material systems. How do we design with materials that evolve, heal, and integrate into living ecosystems?',
    visual: 'Material macro photography — responsive surfaces, adaptive textures',
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
    description: 'Bridging the gap between digital design tools and physical manufacturing reality. Parametric thinking meets robotic fabrication, advanced simulation meets real-world constraints.',
    visual: 'Wireframe/mesh structure — parametric geometry, computational forms',
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
    description: 'Addressing Kardashev-scale challenges (energy, expansion, planetary boundaries) with Earth-scale solutions. How do we sustain and elevate life as we expand our technological capabilities?',
    visual: 'Abstract system diagram — interconnected loops, feedback systems',
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

  return (
    <section
      id="domains"
      ref={containerRef}
      className="relative py-32 md:py-48"
    >
      {/* Section Header */}
      <div className="px-6 md:px-12 lg:px-24 mb-16 md:mb-24">
        <motion.p
          className="text-micro text-dim mb-4"
          initial={{ opacity: 0, x: -20 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          002 — Domains of Inquiry
        </motion.p>
        <motion.h2
          className="font-display text-large font-medium text-fg max-w-4xl"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Exploring intersections where{' '}
          <span className="text-accent">breakthrough</span> innovation emerges
        </motion.h2>
      </div>

      {/* Domain List - Full Width */}
      <div className="relative">
        {domains.map((domain, index) => (
          <motion.div
            key={domain.id}
            className="group relative border-t border-muted/30 last:border-b"
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
              <pre className="font-mono text-[10px] text-accent whitespace-pre absolute right-12 top-1/2 -translate-y-1/2">
                {domain.ascii}
              </pre>
            </div>

            <div className="relative px-6 md:px-12 lg:px-24 py-8 md:py-12 grid grid-cols-12 gap-4 md:gap-8 items-start">
              {/* Number */}
              <div className="col-span-2 md:col-span-1">
                <span className="font-mono text-sm text-dim">{domain.id}</span>
              </div>

              {/* Title */}
              <div className="col-span-10 md:col-span-4">
                <h3 className="font-display text-xl md:text-2xl font-medium text-fg group-hover:text-accent transition-colors duration-300">
                  {domain.title}
                </h3>
              </div>

              {/* Description */}
              <div className="col-span-12 md:col-span-5 md:col-start-6">
                <p className="text-body text-dim group-hover:text-fg/70 transition-colors duration-300 leading-relaxed">
                  {domain.description}
                </p>
              </div>

              {/* Arrow Indicator */}
              <div className="hidden md:flex col-span-2 justify-end items-center">
                <span 
                  className={`
                    text-accent text-xl transition-all duration-300 transform
                    ${hoveredIndex === index ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-4'}
                  `}
                >
                  →
                </span>
              </div>
            </div>

            {/* Visual Placeholder - Shows on Hover (Desktop) */}
            <motion.div
              className={`
                hidden lg:block absolute right-24 top-1/2 -translate-y-1/2 w-64 h-40 
                border border-muted/50 rounded-sm bg-bg/80 backdrop-blur-sm
                transition-all duration-500 pointer-events-none z-10
                ${hoveredIndex === index ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'}
              `}
            >
              <div className="flex items-center justify-center h-full p-4 text-center">
                <div>
                  <p className="text-micro text-accent mb-1">[ VISUAL ]</p>
                  <p className="text-xs text-dim">{domain.visual}</p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}

