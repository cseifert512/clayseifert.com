# Image Assets Organization

This directory contains source images for the dual-mode portfolio.

## Directory Structure

- **HIRANO/**: AI-generated conceptual images (robots, humans, organic patterns, futuristic themes)
- **PORTFOLIO/**: Architectural project images (thesis work, research, built projects)
- **PORTFOLIO_S (1).pdf**: Portfolio document (22MB)

## Organization Script

Run `node organize-assets.js` to automatically organize images into the `public/visuals/` structure.

### What the Script Does

1. Creates the proper directory structure in `public/visuals/`
2. Copies selected images to appropriate locations based on content:
   - **HIRANO images** → Living mode visuals (organic, human-centered)
   - **PORTFOLIO images** → Systems mode visuals (technical, architectural)
3. Generates `image-mapping.json` with complete image placement reference

### Manual Organization

If you prefer to organize manually, follow this mapping:

#### Hero Section
- **Systems**: Technical/futuristic imagery from HIRANO
- **Living**: Organic/nature-inspired imagery from HIRANO

#### Philosophy Section  
- **Systems**: Parametric/computational architecture from PORTFOLIO
- **Living**: Artistic/conceptual imagery from HIRANO

#### Domains Section (5 domains × 2 modes = 10 images)
- **Systems**: Technical diagrams and computational work from PORTFOLIO
- **Living**: Human-robot interaction and organic themes from HIRANO

#### Work/Projects Section
- **UT Austin**: Architectural thesis work from PORTFOLIO (both modes)
- **Research**: Academic/computational work from PORTFOLIO (both modes)
- **archipedia.ai**: Interface mockups (create separately)
- **Resia AI**: Dashboard mockups (create separately)

## Image Requirements

### Format
- **Hero/Backgrounds**: WebP or JPEG (optimized < 200KB)
- **Projects/Work**: JPEG or PNG
- **OG Images**: PNG (1200×630px)

### Optimization
All images should be optimized before deployment:
- Use WebP format when possible
- Compress to < 200KB per image
- Maintain aspect ratios appropriate to placement

## Usage in Components

Images are referenced in components via:

```typescript
<img 
  src={`/visuals/${mode === 'living' ? 'living' : 'systems'}/image-name.jpg`}
  alt="Description"
/>
```

Or using Next.js Image component:

```typescript
import Image from 'next/image'

<Image
  src="/visuals/hero/systems-tech-1.webp"
  alt="Parametric lattice structure"
  width={1920}
  height={1080}
  priority
/>
```

## Notes

- **HIRANO images** tend to be more conceptual/artistic - great for Living mode
- **PORTFOLIO images** are architectural work - ideal for both modes with different framing
- Some images work well for both modes with different context
- Keep originals in this directory; organized copies go to `public/visuals/`

