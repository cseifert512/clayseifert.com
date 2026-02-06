'use client'

import { useEffect, useRef } from 'react'

interface ASCIIBackgroundProps {
  pattern?: 'cellular' | 'topographic' | 'network' | 'minimal'
  opacity?: number
  animate?: boolean
}

const patterns = {
  cellular: `
                    ·  ·  ·  ·  ·  ·  ·  ·  ·  ·  ·  ·  ·  ·  ·  ·  ·  ·  ·  ·
                 ·        ·        ·        ·        ·        ·        ·        ·
              ·     ○        ○        ○        ○        ○        ○        ○     ·
           ·       /│\\      /│\\      /│\\      /│\\      /│\\      /│\\      /│\\    ·
        ·         / │ \\    / │ \\    / │ \\    / │ \\    / │ \\    / │ \\    / │ \\   ·
     ·           ○──○──○  ○──○──○  ○──○──○  ○──○──○  ○──○──○  ○──○──○  ○──○──○  ·
  ·             /│\\ │ /│\\/│\\ │ /│\\/│\\ │ /│\\/│\\ │ /│\\/│\\ │ /│\\/│\\ │ /│\\/│\\ │ /│\\·
              ·/ │ \\│/ │ \\/ │ \\│/ │ \\/ │ \\│/ │ \\/ │ \\│/ │ \\/ │ \\│/ │ \\/ │ \\│/ │ \\
             ○──○──○──○──○──○──○──○──○──○──○──○──○──○──○──○──○──○──○──○──○──○──○
              \\│ /│\\ │ /│\\ │ /│\\ │ /│\\ │ /│\\ │ /│\\ │ /│\\ │ /│\\ │ /│\\ │ /│\\ │/
               \\│/ \\│/ \\│/ \\│/ \\│/ \\│/ \\│/ \\│/ \\│/ \\│/ \\│/ \\│/ \\│/ \\│/ \\│/ \\│/
                ○   ○   ○   ○   ○   ○   ○   ○   ○   ○   ○   ○   ○   ○   ○   ○
               /│\\ /│\\ /│\\ /│\\ /│\\ /│\\ /│\\ /│\\ /│\\ /│\\ /│\\ /│\\ /│\\ /│\\ /│\\ /│\\
              ○─○─○─○─○─○─○─○─○─○─○─○─○─○─○─○─○─○─○─○─○─○─○─○─○─○─○─○─○─○─○─○─○
               \\│/ \\│/ \\│/ \\│/ \\│/ \\│/ \\│/ \\│/ \\│/ \\│/ \\│/ \\│/ \\│/ \\│/ \\│/ \\│/
                ◦   ◦   ◦   ◦   ◦   ◦   ◦   ◦   ◦   ◦   ◦   ◦   ◦   ◦   ◦   ◦
                 ·  ·  ·  ·  ·  ·  ·  ·  ·  ·  ·  ·  ·  ·  ·  ·  ·  ·  ·  ·  ·
`,
  topographic: `
        ╭──────────────────────────────────────────────────────────────────────────╮
       ╱                                                                            ╲
      ╱   ╭────────────────────────────────────────────────────────────────────╮     ╲
     ╱   ╱                                                                      ╲     ╲
    ╱   ╱    ╭────────────────────────────────────────────────────────────╮      ╲     ╲
   ╱   ╱    ╱                                                              ╲      ╲     ╲
  ╱   ╱    ╱     ╭────────────────────────────────────────────────╮         ╲      ╲     ╲
 ╱   ╱    ╱     ╱                                                  ╲         ╲      ╲     ╲
╱   ╱    ╱     ╱      ╭────────────────────────────────╮            ╲         ╲      ╲     ╲
   ╱    ╱     ╱      ╱                                  ╲            ╲         ╲      ╲
  ╱    ╱     ╱      ╱        ╭──────────────────╮        ╲            ╲         ╲      ╲
 ╱    ╱     ╱      ╱        ╱                    ╲        ╲            ╲         ╲      ╲
╱    ╱     ╱      ╱        ╱      ╭──────╮        ╲        ╲            ╲         ╲      ╲
    ╱     ╱      ╱        ╱      ╱        ╲        ╲        ╲            ╲         ╲
   ╱     ╱      ╱        ╱      ╱    ◉     ╲        ╲        ╲            ╲         ╲
  ╱     ╱      ╱        ╱      ╱            ╲        ╲        ╲            ╲         ╲
`,
  network: `
           ◉─────────────────────────◉─────────────────────────◉
          ╱│╲                       ╱│╲                       ╱│╲
         ╱ │ ╲                     ╱ │ ╲                     ╱ │ ╲
        ╱  │  ╲                   ╱  │  ╲                   ╱  │  ╲
       ╱   │   ╲                 ╱   │   ╲                 ╱   │   ╲
      ◉────│────◉───────────────◉────│────◉───────────────◉────│────◉
       ╲   │   ╱                 ╲   │   ╱                 ╲   │   ╱
        ╲  │  ╱                   ╲  │  ╱                   ╲  │  ╱
         ╲ │ ╱                     ╲ │ ╱                     ╲ │ ╱
          ╲│╱                       ╲│╱                       ╲│╱
           ◉─────────────────────────◉─────────────────────────◉
          ╱│╲                       ╱│╲                       ╱│╲
         ╱ │ ╲                     ╱ │ ╲                     ╱ │ ╲
        ╱  │  ╲                   ╱  │  ╲                   ╱  │  ╲
       ╱   │   ╲                 ╱   │   ╲                 ╱   │   ╲
      ◉────│────◉───────────────◉────│────◉───────────────◉────│────◉
`,
  minimal: `
        ·   ·   ·   ·   ·   ·   ·   ·   ·   ·   ·   ·   ·   ·   ·   ·   ·   ·

        ·   ·   ·   ·   ·   ·   ·   ·   ·   ·   ·   ·   ·   ·   ·   ·   ·   ·

        ·   ·   ·   ·   ·   ·   ·   ·   ·   ·   ·   ·   ·   ·   ·   ·   ·   ·

        ·   ·   ·   ·   ·   ·   ·   ·   ·   ·   ·   ·   ·   ·   ·   ·   ·   ·

        ·   ·   ·   ·   ·   ·   ·   ·   ·   ·   ·   ·   ·   ·   ·   ·   ·   ·

        ·   ·   ·   ·   ·   ·   ·   ·   ·   ·   ·   ·   ·   ·   ·   ·   ·   ·
`,
}

export default function ASCIIBackground({ 
  pattern = 'cellular', 
  opacity = 0.08,
  animate = true 
}: ASCIIBackgroundProps) {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!animate || !containerRef.current) return

    let animationId: number
    let offset = 0

    const animatePattern = () => {
      if (containerRef.current) {
        offset += 0.05
        containerRef.current.style.transform = `translate(${Math.sin(offset) * 3}px, ${Math.cos(offset) * 2}px)`
      }
      animationId = requestAnimationFrame(animatePattern)
    }

    animationId = requestAnimationFrame(animatePattern)

    return () => cancelAnimationFrame(animationId)
  }, [animate])

  // Repeat pattern to fill screen
  const repeatedPattern = Array(6).fill(patterns[pattern]).join('\n')

  return (
    <div 
      className="absolute inset-0 overflow-hidden pointer-events-none select-none"
      style={{ opacity }}
    >
      <div 
        ref={containerRef}
        className="absolute inset-0 flex items-center justify-center"
      >
        <pre 
          className="font-mono text-[6px] md:text-[8px] leading-tight text-accent whitespace-pre"
          style={{ 
            textShadow: '0 0 20px currentColor',
            filter: 'blur(0.3px)'
          }}
        >
          {repeatedPattern}
        </pre>
      </div>
    </div>
  )
}

