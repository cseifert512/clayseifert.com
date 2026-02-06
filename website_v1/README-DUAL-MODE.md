# Dual-Mode Portfolio Implementation

## Overview

This portfolio website demonstrates synthesis between rational/classical thinking (Systems View) and romantic/humanist thinking (Living View) through a dual-perspective toggle mechanism.

## Key Features

### 🔄 Dual-Mode Toggle
- **Systems View**: Technical, computational, precise—focuses on capability and methodology
- **Living View**: Warm, philosophical, visceral—focuses on meaning and impact
- Seamless 1000ms transitions between modes
- Keyboard shortcut: `Shift + M`
- State persists across sessions via localStorage

### 🎨 Dual Theme System
- **Systems Theme**: Dark (#0A0A0A), cyan accent (#00FF94), technical fonts (Clash Display, Satoshi)
- **Living Theme**: Deep terracotta (#2a1810), ochre/forest green accents, humanist fonts (Crimson Pro, Plus Jakarta Sans)
- Smooth CSS variable-based transitions
- All components mode-aware and responsive

### 📝 Content Architecture

Every major section has dual-mode content variants:

#### Hero/Opening
- **Systems**: "Infrastructure for living futures" — computational and robotic systems
- **Living**: "Building spaces worth inhabiting" — architecture that's alive

#### Philosophy
- **Systems**: "Core Principles" — technical axioms and frameworks
- **Living**: "Why This Matters" — philosophical foundation and influences

#### Domains (5 domains, each with dual content)
1. Living Systems × Fabrication
2. Distributed Production
3. Material Intelligence
4. Computational Design × Physical Constraints
5. Systems Thinking at Scale

#### Built/Projects
- archipedia.ai, Resia AI, Published Research, UT Austin
- Each with technical and humanist framing

#### Working Notes
- **Systems**: Technical Papers | Prototypes | Code | Research
- **Living**: Essays | Observations | Field Notes | Influences

#### Contact
- **Systems**: "Let's build something" — technical collaboration
- **Living**: "Let's create something meaningful" — cultural exploration

## Visual Assets

### Current Status
All visuals are marked with placeholders containing:
- **WHERE**: Exact location in layout
- **WHAT (Systems)**: Technical/geometric visual description
- **WHAT (Living)**: Organic/humanist visual description
- **FILE PATH**: Expected file location

### Required Assets

See [`VISUAL_ASSETS_GUIDE.md`](./VISUAL_ASSETS_GUIDE.md) for detailed generation prompts.

#### Priority 1: Hero
- `public/visuals/hero/systems-lattice.webm` — Parametric lattice animation
- `public/visuals/hero/living-mycelium.webm` — Organic growth pattern

#### Priority 2: Sections
- **Philosophy**: Material study photography (2 images)
- **Domains**: 10 images total (2 per domain × 5 domains)
- **Projects**: 8 images total (2 per project × 4 projects)

#### Priority 3: Meta
- `public/visuals/og/og-systems.png` — OG image for Systems mode
- `public/visuals/og/og-living.png` — OG image for Living mode

## Technical Stack

- **Framework**: Next.js 14+ with TypeScript
- **Styling**: Tailwind CSS + CSS Variables
- **Animations**: Framer Motion
- **State**: React Context API
- **Fonts**: 
  - Systems: Clash Display, Satoshi
  - Living: Crimson Pro, Plus Jakarta Sans

## Implementation Details

### File Structure
```
src/
├── app/
│   ├── globals.css          # Dual theme CSS variables
│   ├── layout.tsx            # ViewModeProvider wrapper
│   └── page.tsx              # Main page with all sections
├── components/
│   ├── ASCIIBackground.tsx   # Systems mode background
│   ├── OrganicBackground.tsx # Living mode background
│   ├── ModeToggle.tsx        # Toggle UI component
│   ├── Navigation.tsx        # Mode-aware navigation
│   └── Cursor.tsx            # Custom cursor
├── contexts/
│   └── ViewModeContext.tsx   # Mode state management
├── hooks/
│   └── useViewMode.ts        # Mode context hook
├── lib/
│   ├── animations.ts         # Framer Motion variants
│   └── utils.ts              # Utility functions
├── sections/
│   ├── Opening.tsx           # Hero with dual content
│   ├── Philosophy.tsx        # Philosophy with dual content
│   ├── Domains.tsx           # 5 domains with dual content
│   ├── WorkingNotes.tsx      # Notes with dual categories
│   ├── Built.tsx             # Projects with dual descriptions
│   └── Contact.tsx           # Contact with dual CTAs
└── types/
    └── mode.ts               # TypeScript type definitions
```

### Mode State Management

```typescript
// Access current mode
const { mode, toggleMode, setMode } = useViewMode()

// Check if in Living mode
const isLiving = mode === 'living'

// Use in components
<div style={{ color: 'var(--color-accent)' }}>
  {isLiving ? 'Living content' : 'Systems content'}
</div>
```

### CSS Variables

All colors use CSS custom properties that change based on mode:

```css
/* Available in both modes */
var(--color-bg)       /* Background */
var(--color-fg)       /* Foreground text */
var(--color-accent)   /* Primary accent */
var(--color-primary)  /* Secondary accent */
var(--color-muted)    /* Muted borders/backgrounds */
var(--color-dim)      /* Dimmed text */
```

### Responsive Design

- **Desktop** (1024px+): Full dual-mode experience with hover states
- **Tablet** (768px-1023px): Maintained dual-mode, simplified layouts
- **Mobile** (<768px): Compact toggle, stacked layouts, touch-optimized

### Accessibility

- ✅ Keyboard navigation (Shift + M toggle)
- ✅ Screen reader announcements for mode changes
- ✅ WCAG AA contrast ratios in both modes
- ✅ `prefers-reduced-motion` respected
- ✅ Clear focus states in both themes
- ✅ Semantic HTML throughout
- ✅ ARIA labels on interactive elements

### Performance Targets

- ✅ < 2s initial load
- ✅ 60fps animations
- ✅ < 100ms toggle response
- ✅ Lazy loading for mode-specific content
- ✅ Optimized images (WebP < 200KB)

## Development

### Running Locally

```bash
npm install
npm run dev
```

Navigate to `http://localhost:3000`

### Testing Mode Toggle

1. Click the toggle in top-right corner
2. Or use keyboard shortcut: `Shift + M`
3. Mode preference persists in localStorage

### Adding New Dual-Mode Content

1. Import `useViewMode` hook
2. Add mode-aware conditional rendering
3. Use CSS variables for colors
4. Add smooth transitions with `mode-transition` class
5. Test both modes thoroughly

Example:
```typescript
import { useViewMode } from '@/hooks/useViewMode'

function MyComponent() {
  const { mode } = useViewMode()
  const isLiving = mode === 'living'
  
  return (
    <div className="mode-transition" style={{ color: 'var(--color-fg)' }}>
      {isLiving ? 'Living content' : 'Systems content'}
    </div>
  )
}
```

## Brand Voice

### Systems Mode
- Precise, technical, systematic
- Confident in capability
- Data and methodology-driven
- "Here's how it works"
- Clarity over poetry

### Living Mode
- Warm, philosophical, humanist
- Visionary but grounded
- Story and meaning-driven
- "Here's why it matters"
- Poetry and precision balanced

### Universal (Both Modes)
- Intellectually honest
- No bullshit
- Ambitious but not grandiose
- Synthesis over false binaries
- Respectful of complexity

## Success Metrics

### User Engagement
- Time on site: 2+ minutes average
- Toggle usage: 60%+ try both modes
- Page depth: 3+ pages viewed

### Message Clarity
- Exit surveys should reflect understanding of both technical capability AND vision/culture
- Contact inquiries should demonstrate dual-nature understanding

### Technical Performance
- Initial load < 2s ✅
- 60fps animations ✅
- < 100ms toggle response ✅
- Lighthouse > 90 (target)

## Next Steps

1. **Generate Visual Assets**: Use VISUAL_ASSETS_GUIDE.md to create all images/videos
2. **Replace Placeholders**: Swap visual markers with actual assets
3. **SEO Optimization**: Add dual OG images, update meta descriptions
4. **Analytics**: Track mode usage patterns
5. **User Testing**: Gather feedback on both modes
6. **Performance Audit**: Run Lighthouse, optimize as needed

## Philosophy

This isn't a portfolio with a dark mode toggle. This is a **demonstration of synthesis** in action. Visitors should leave thinking: "Oh, that's someone who refuses false binaries and builds at intersections."

Both modes must be fully realized, high-quality, and compelling. The Systems view should excite technical people. The Living view should excite humanists and visionaries. And the toggle should make everyone realize both are essential.

**The Aspiration**: When someone asks "What does Clay do?", the answer should naturally include BOTH: "He builds robotic fabrication systems for living architecture—the technical infrastructure for buildings that are sustainable, beautiful, and alive."

That's the synthesis. That's what this site communicates.

