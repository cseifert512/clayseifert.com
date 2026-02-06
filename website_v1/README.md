# Clay Seifert — Premium Portfolio

A distinctive, high-contrast portfolio website with organic-tech aesthetics, experimental typography, and custom interactions.

## Design Philosophy

**No templates. No generic components. Everything custom-crafted.**

The site feels like visiting a digital laboratory — where organic forms meet technical precision. High contrast creates drama. Experimental typography creates identity. Empty space creates tension.

## Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS (heavily customized)
- **Animations**: Framer Motion
- **Fonts**: Clash Display + Satoshi (Fontshare)

## Design System

### Colors
```
Background:    #0A0A0A (near-black)
Foreground:    #FAFAFA (off-white)  
Accent:        #00FF94 (bioluminescent green)
Muted:         #3A3A3A (borders, secondary)
Dim:           #666666 (tertiary text)
```

### Typography
- **Display**: Clash Display — Geometric with character, massive scale (120px+)
- **Body**: Satoshi — Clean, modern, highly legible

## Features

- **Floating Minimal Navigation** — Clean page with hidden full-screen overlay nav
- **ASCII Art Backgrounds** — Cellular and topographic patterns with subtle animation
- **Custom Cursor** — Dot cursor with magnetic hover effects (desktop only)
- **Scroll Animations** — Framer Motion powered reveals and parallax
- **Editorial Layouts** — Asymmetric grids, dramatic typography, intentional tension

## Project Structure

```
src/
├── app/
│   ├── globals.css       # Design system, animations
│   ├── layout.tsx        # Root layout
│   └── page.tsx          # Main page
├── components/
│   ├── Navigation.tsx    # Floating nav + overlay
│   ├── ASCIIBackground.tsx
│   └── Cursor.tsx        # Custom cursor
├── sections/
│   ├── Opening.tsx       # Hero with massive typography
│   ├── Philosophy.tsx    # Asymmetric layout
│   ├── Domains.tsx       # Full-bleed domain list
│   ├── WorkingNotes.tsx  # Editorial grid
│   ├── Built.tsx         # Hover-reveal work list
│   └── Contact.tsx       # Minimal contact
└── lib/
    └── animations.ts     # Framer Motion variants
```

## Getting Started

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build
```

## Visual Placeholders

The site includes placeholder boxes for custom visuals. Recommended assets:

### Hero/Opening
- 3D render of mycelium-like network with metallic/chrome nodes
- Biological meets robotic aesthetic
- Format: WebM/MP4 loop or high-res image

### Philosophy Section
- Close-up of adaptive material
- Mycelium composite, parametric lattice
- Material macro photography

### Domain Backgrounds
Each domain can have its own visual:
- Living Systems: Organic growth pattern
- Distributed Production: Network/node visualization
- Material Intelligence: Material macro photography
- Computational Design: Wireframe/mesh structure
- Systems Thinking: Abstract system diagram

## Customization

### Update Personal Info
- `src/sections/Opening.tsx` — Name, title
- `src/sections/Contact.tsx` — Email, social links
- `src/app/layout.tsx` — Meta description

### Replace Visuals
Search for `[ VISUAL:` in the codebase to find all placeholder locations.

### Modify Colors
Edit CSS variables in `src/app/globals.css` and Tailwind config in `tailwind.config.ts`.

## Deployment

Optimized for Vercel:

```bash
npx vercel
```

## Performance

- ASCII art rendered as text (not images)
- Framer Motion with GPU-accelerated transforms
- Lazy loading for heavy sections
- Reduced motion media query support

## License

MIT
