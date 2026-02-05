# Visual Assets Production Guide
## For Use with Fuser (AI-Native Design Tool)

This document provides prompts, rationale, and specifications for generating all visual assets.

---

## General Prompting Guidelines for Fuser

### Style Consistency
Add these modifiers to maintain visual cohesion across all assets:
- **Color palette**: "dark background, near-black (#0A0A0A), with bioluminescent green (#00FF94) accents"
- **Aesthetic**: "high contrast, minimal, technical precision meets organic forms"
- **Mood**: "futuristic but grounded, alive but manufactured"

### Quality Modifiers
Append to prompts for better results:
- "8K resolution, cinematic lighting, depth of field"
- "professional photography, studio lighting"
- "clean composition, negative space"

---

## 1. Hero / Opening Section

**File:** `public/visuals/hero/organic-mesh.[webm|mp4|webp]`  
**Dimensions:** 1920×1080 or 1200×800  
**Format:** Video loop (8-15 sec) or static image

### Rationale

The hero visual needs to immediately communicate the core thesis: **biological intelligence meeting technological capability**. This isn't about choosing between nature and technology—it's about synthesis. 

A mycelium-like network with metallic/chrome nodes says: "I understand living systems AND I understand advanced manufacturing." It's visually striking without being literal. It avoids clichés (no robots, no generic tech imagery, no stock nature photos).

The network structure also mirrors how ideas connect across domains—a visual metaphor for the "intersection" positioning throughout the site.

### Prompt Option A — Organic Network (Recommended)
```
A 3D render of an intricate mycelium-like network structure floating in dark void. 
Thin organic filaments connecting chrome metallic nodes that pulse with subtle 
bioluminescent green (#00FF94) light. The structure resembles both neural networks 
and fungal mycelium. Dark background (#0A0A0A). Cinematic lighting with subtle 
volumetric fog. The aesthetic bridges biological growth patterns with technological 
precision. 8K, photorealistic render, depth of field.
```

### Prompt Option B — Living Circuitry
```
Abstract macro visualization of living circuitry—organic branching pathways with 
metallic sheen, resembling both blood vessels and circuit traces. Nodes glow with 
soft green bioluminescence. Dark background. The structure appears to be growing 
and connecting in real-time. Blend of microscopy and CGI aesthetic. High contrast, 
minimal color palette: black, silver, electric green.
```

### Prompt Option C — Computational Growth
```
Generative algorithmic structure that looks simultaneously grown and designed. 
Fractal branching patterns with chrome/silver material, dotted with glowing green 
points at intersections. Suggests both plant growth and network topology. 
Floating in dark space with subtle atmospheric haze. Technical precision meets 
organic unpredictability. Rendered with subsurface scattering on organic elements.
```

### For Video/Animation
Add to any prompt:
```
Seamless loop animation. Subtle pulsing of light through the network nodes. 
Gentle floating motion. Particles occasionally drift between connections. 
8-12 second loop, smooth transitions.
```

---

## 2. Philosophy Section

**File:** `public/visuals/philosophy/material-study.[webp|jpg]`  
**Dimensions:** 800×600  
**Format:** Static image

### Rationale

The philosophy section discusses *how* Clay thinks—synthesizing domains, embracing living systems, distributed capability. The visual should feel like **evidence of this thinking in action**.

A material study works because it's:
1. **Specific, not generic** — Shows actual engagement with physical materials
2. **At the intersection** — A bio-material or composite is literally where biology meets manufacturing
3. **Tactile** — Grounds abstract philosophy in physical reality
4. **Intriguing** — Macro photography creates wonder and invites closer inspection

This isn't decoration—it's proof that the ideas on this page connect to real material exploration.

### Prompt Option A — Mycelium Composite (Recommended)
```
Extreme macro photography of mycelium composite material surface. Dense fibrous 
texture with visible hyphal networks. Natural off-white and tan coloring with 
subtle variations in density. Some areas show the material's internal structure 
where fibers interconnect. Professional studio lighting from above-left. 
Shallow depth of field. The material appears both natural and manufactured. 
Clean, minimal composition. 8K detail.
```

### Prompt Option B — Parametric Lattice
```
Close-up photograph of a 3D printed lattice structure with organic, bone-like 
geometry. White or light gray material with complex internal voids optimized 
for strength-to-weight ratio. The structure appears computationally designed 
but resembles trabecular bone or coral. Side lighting creating strong shadows 
that reveal depth. Dark background. Professional product photography aesthetic.
```

### Prompt Option C — Adaptive Surface
```
Macro photograph of a responsive material surface—could be shape-memory alloy, 
smart textile, or bio-polymer. The surface shows subtle texture variations 
suggesting embedded intelligence or responsiveness. Monochromatic with subtle 
green accent lighting from one edge. Scientific photography meets art object. 
Extremely sharp focus on texture details.
```

### Prompt Option D — Living Material Interface
```
Abstract macro view of where organic material meets manufactured substrate. 
Perhaps bacterial cellulose growing on a geometric scaffold, or plant roots 
interfacing with a technical mesh. The boundary between grown and made is 
ambiguous. Natural lighting, neutral tones with hint of green vitality. 
Documentary photography style.
```

---

## 3. Domain Visuals

Each domain gets a unique visual that appears on hover. These are **conceptual illustrations** that reinforce each domain's focus.

**Dimensions:** 600×400 for all  
**Format:** WebP

### 3.1 Living Systems × Fabrication

**File:** `public/visuals/domains/living-systems.webp`

#### Rationale
This domain asks: "How do we build systems that work WITH biology?" The visual should show integration, not opposition. Growth patterns suggest intelligence emerging from simple rules—relevant to both biology and robotics.

#### Prompt Option A — Branching Network
```
Abstract visualization of organic branching patterns—like tree roots, blood 
vessels, or lightning. White/silver branches on dark background. Some branches 
terminate in small geometric nodes suggesting technological endpoints. The 
pattern appears to be growing outward from center. Minimal, high contrast. 
Technical illustration meets natural history diagram.
```

#### Prompt Option B — Bio-Robotic Interface
```
Conceptual diagram showing organic filaments weaving through a geometric grid 
structure. The organic elements (soft, curved, green-tinged) and technical 
elements (rigid, precise, metallic) interlock without conflict. Abstract, 
not literal. Dark background, minimal palette.
```

---

### 3.2 Distributed Production

**File:** `public/visuals/domains/distributed-production.webp`

#### Rationale
Distributed production is about **networks over centralization**. The visual should feel like a map of connections—nodes of capability spread across space, each connected to others. This communicates resilience, accessibility, and collective intelligence.

#### Prompt Option A — Network Topology
```
Abstract visualization of a distributed network—many nodes of varying sizes 
connected by thin lines. No single central hub. Some nodes cluster, others 
spread out. White/green nodes on dark background. Resembles both a city 
map at night and a neural network diagram. Clean, technical, minimal.
```

#### Prompt Option B — Mesh Grid
```
Geometric mesh pattern where intersections glow with soft green light. 
The mesh warps and varies in density across the frame, suggesting organic 
adaptation of a regular structure. Dark background. Suggests both digital 
network and physical fabrication grid.
```

---

### 3.3 Material Intelligence

**File:** `public/visuals/domains/material-intelligence.webp`

#### Rationale
"Material Intelligence" suggests materials that respond, adapt, and compute. The visual should feel **alive at the material scale**—surfaces that seem to think, textures with embedded logic.

#### Prompt Option A — Responsive Surface
```
Abstract close-up of a material surface with subtle gradients and patterns 
suggesting embedded responsiveness. Perhaps a grid of small cells or pores 
that vary in size, implying the material is reacting to something unseen. 
Monochromatic gray with slight green luminescence in some cells. Scientific 
visualization aesthetic.
```

#### Prompt Option B — Gradient Structure
```
Cross-section visualization of a material with graduated internal structure—
dense on one side, porous on the other, with smooth transition. Suggests 
functionally graded materials that respond differently across their volume. 
Technical illustration style, dark background, subtle green accent.
```

---

### 3.4 Computational Design × Physical Constraints

**File:** `public/visuals/domains/computational-design.webp`

#### Rationale
This domain bridges digital and physical—parametric design meeting manufacturing reality. The visual should feel **precisely computed yet physically plausible**. Wireframes, meshes, and optimized geometries communicate algorithmic design.

#### Prompt Option A — Parametric Mesh
```
Wireframe visualization of a complex curved surface—like a minimal surface 
or topology-optimized structure. White lines on dark background forming an 
organic yet mathematically precise form. Some faces filled with subtle green 
gradient. Technical 3D modeling aesthetic, orthographic or slight perspective view.
```

#### Prompt Option B — Optimized Geometry
```
Abstract shape showing topology optimization—material only where structurally 
needed, resulting in organic-looking branches and voids. White/silver on dark 
background. The form clearly came from computation but resembles bone or coral. 
Clean render, studio lighting.
```

---

### 3.5 Systems Thinking at Scale

**File:** `public/visuals/domains/systems-thinking.webp`

#### Rationale
Systems thinking operates at the largest scales—planetary boundaries, energy flows, Kardashev civilizations. The visual should feel **cosmic yet connected**—suggesting loops, cycles, and interdependence at scale.

#### Prompt Option A — Feedback Loops
```
Abstract diagram of interconnected circular flows—loops within loops, 
suggesting feedback systems and cycles. Minimalist line art, white on dark 
background, with key connection points highlighted in green. Resembles both 
ecological cycles and system dynamics diagrams. Clean, conceptual.
```

#### Prompt Option B — Nested Scales
```
Visualization suggesting scale transition—concentric circles or nested 
structures implying zoom from molecular to planetary. Subtle gradient 
from center outward. Minimal, abstract, suggesting infinite zoom in 
either direction. Dark background, green accent at center.
```

---

## 4. Work/Built Section

Project visuals that appear on hover. These should feel like **product shots or interface screenshots**—evidence of real things built.

**Dimensions:** 800×600 for all  
**Format:** WebP

### 4.1 archipedia.ai

**File:** `public/visuals/work/archipedia.webp`

#### Rationale
archipedia.ai is a visual search tool—the visual should immediately communicate "search interface showing architectural images." It proves the project exists and is functional.

#### Prompt Option A — Search Interface
```
Clean UI mockup of an architectural visual search interface. A search bar at 
top, below it a grid of architectural photographs showing similar buildings. 
One image highlighted as the query, others shown as matches with similarity 
scores. Dark mode interface, minimal design, green accent color. Professional 
product screenshot aesthetic.
```

#### Prompt Option B — Results Grid
```
Grid of architectural photographs arranged by visual similarity—buildings 
with similar forms, materials, or spatial qualities clustered together. 
Subtle connection lines between related images. Dark background, images 
float with soft shadows. Suggests AI-powered visual organization.
```

---

### 4.2 Resia AI

**File:** `public/visuals/work/resia.webp`

#### Rationale
Resia was a home renovation startup. The visual should feel like a **product in the construction/home space**—professional, trustworthy, functional.

#### Prompt Option A — Dashboard View
```
Clean dashboard interface for home renovation project management. Shows 
project timeline, contractor assignments, budget tracking. Cards and 
charts with renovation-related data. Dark mode UI with green accents. 
Professional SaaS product screenshot. Minimal, organized, trustworthy.
```

#### Prompt Option B — Marketplace Interface
```
Interface showing contractor profiles and project matches. Profile cards 
with ratings, specialties, availability. One highlighted match. Clean 
modern UI design, dark theme, professional aesthetic. Suggests a 
polished marketplace product.
```

---

### 4.3 Published Research

**File:** `public/visuals/work/research.webp`

#### Rationale
Academic research is credible but often visually dry. The visual should show **compelling figures from papers**—proof that the research produces interesting visual/spatial work, not just text.

#### Prompt Option A — Research Figures Composite
```
Composite layout showing several research paper figures: parametric geometry 
studies, fabrication diagrams, computational models. Clean academic figure 
aesthetic but visually striking content. White backgrounds, technical line 
work, some showing 3D forms, others showing process diagrams. Arranged in 
an editorial grid layout.
```

#### Prompt Option B — Parametric Study
```
Single compelling research figure showing parametric variation study—a grid 
of forms varying along two parameters, showing systematic design exploration. 
Clean technical illustration style, black line work on white, possibly with 
one variation highlighted in green. Academic but visually engaging.
```

---

### 4.4 UT Austin

**File:** `public/visuals/work/ut-austin.webp`

#### Rationale
Education context—should show **thesis-level architectural work**. Renders, models, drawings that demonstrate design capability and computational sophistication.

#### Prompt Option A — Thesis Project Render
```
Architectural visualization of a computationally-designed structure. 
Complex geometry, interesting material expression, sophisticated spatial 
quality. Evening lighting, dramatic shadows. The building feels both 
technically advanced and habitable. Professional architectural rendering 
quality.
```

#### Prompt Option B — Design Process Composite
```
Composite showing architectural design process: computational model, 
physical mockup photo, technical drawing, final render. Arranged in 
editorial grid. Shows range of skills from digital to physical. 
Clean layout, consistent lighting across images.
```

---

## 5. Open Graph Image

**File:** `public/visuals/og/og-image.png`  
**Dimensions:** 1200×630 (OG standard)  
**Format:** PNG

### Rationale
The OG image appears when the site is shared on social media. It needs to:
1. **Be readable** at thumbnail size
2. **Communicate identity** (name, what Clay does)
3. **Look premium** (first impression for many people)

### Prompt Option A — Text + Visual Element
```
Social media preview card design. Dark background (#0A0A0A). Left side: 
"Clay Seifert" in large bold text, below it smaller text "Builder at 
the intersection of robotics, living systems & advanced manufacturing". 
Right side: abstract visual element—could be simplified version of the 
organic mesh network from the hero. Green accent (#00FF94) used sparingly. 
Clean, high contrast, readable at small size. 1200x630 pixels.
```

### Prompt Option B — Minimal Typography
```
Minimal OG image with strong typography. Dark background. "Clay Seifert" 
centered, very large. Below, a thin green line, then the tagline in smaller 
text. No imagery—pure typography. The restraint communicates confidence. 
Clean sans-serif font, high contrast.
```

---

## Production Checklist

### Priority 1 — Core (Generate First)
- [ ] Hero organic mesh
- [ ] OG image

### Priority 2 — Enhanced Experience
- [ ] Philosophy material study
- [ ] archipedia.ai interface
- [ ] Resia AI interface
- [ ] Research figures
- [ ] UT Austin thesis work

### Priority 3 — Polish
- [ ] Living Systems domain
- [ ] Distributed Production domain
- [ ] Material Intelligence domain
- [ ] Computational Design domain
- [ ] Systems Thinking domain

---

## Fuser Tips

1. **Generate variations** — Run each prompt 3-4 times, pick the best
2. **Iterate** — Use good outputs as reference for refined prompts
3. **Upscale** — Generate at high resolution, then crop/resize to specs
4. **Color correct** — Ensure green accents match #00FF94 exactly
5. **Test in context** — Drop images into the actual site to check fit

---

## File Naming Convention

```
[section]-[descriptor].[format]

Examples:
- hero/organic-mesh.webp
- domains/living-systems.webp
- work/archipedia.webp
```

After generating, optimize file sizes:
- Images: Use Squoosh (squoosh.app) to compress to WebP < 200KB
- Videos: Use HandBrake to compress to < 2MB while maintaining quality
