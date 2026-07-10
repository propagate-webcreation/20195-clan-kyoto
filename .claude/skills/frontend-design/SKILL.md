---
name: frontend-design
description: Create distinctive, production-grade frontend interfaces with high design quality. Use this skill when building web components, pages, or applications. Generates creative, polished code that avoids generic AI aesthetics.
---

This skill guides creation of distinctive, production-grade frontend interfaces that avoid generic "AI slop" aesthetics. Implement real working code with exceptional attention to aesthetic details and creative choices.

## Design Thinking

Before coding, understand the context and commit to a BOLD aesthetic direction:
- **Purpose**: What problem does this interface solve? Who uses it?
- **Tone**: Pick an extreme: brutally minimal, maximalist chaos, retro-futuristic, organic/natural, luxury/refined, playful/toy-like, editorial/magazine, brutalist/raw, art deco/geometric, soft/pastel, industrial/utilitarian, etc. There are so many flavors to choose from. Use these for inspiration but design one that is true to the aesthetic direction.
- **Constraints**: Technical requirements (framework, performance, accessibility).
- **Differentiation**: What makes this UNFORGETTABLE? What's the one thing someone will remember?

**CRITICAL**: Choose a clear conceptual direction and execute it with precision. Bold maximalism and refined minimalism both work - the key is intentionality, not intensity.

Then implement working code that is:
- Production-grade and functional
- Visually striking and memorable
- Cohesive with a clear aesthetic point-of-view
- Meticulously refined in every detail

## Frontend Aesthetics Guidelines

Focus on:
- **Typography**: Typography is the single most important design element. It IS the design.
  - **Font pairing**: Use `next/font/google`. For Japanese, go beyond Noto — consider Shippori Mincho, Zen Old Mincho, Zen Kaku Gothic New, BIZ UDPMincho for distinctive character. Pair with an English display font (Cormorant Garamond, Playfair Display, DM Serif Display, Outfit, Space Grotesk).
  - **Jump ratio (ジャンプ率)**: The size difference between heading and body should be dramatic. Hero: 60-120px. Section heading: 40-80px. Body: 14-16px. Caption: 10-12px. Timid size differences = boring design.
  - **Letter-spacing**: English headings at `tracking-[0.2em]` to `tracking-[0.4em]` for elegance. Japanese body at `tracking-[0.04em]` to `tracking-[0.08em]` for readability. ALL-CAPS labels at `tracking-[0.3em]` with `text-[10px]` or `text-[11px]`.
  - **English + Japanese dual heading**: Use large English text as the visual element (e.g., "Company" at 96px) with a smaller Japanese subtitle below (e.g., "会社概要" at 16px). This is a signature pattern of premium Japanese web design.
  - **Font weight contrast**: Use extreme weight differences — 800 for headings, 400 for body. Never use 500 for everything.
  - **Numerals must be lining figures**: Forbidden to render numbers (phone numbers, addresses, years, prices, statistics) with oldstyle figures (where 3/4/7/9 dip below the baseline). Cormorant Garamond, EB Garamond, Playfair Display, Lora and similar serifs default to oldstyle — always pair with `font-variant-numeric: lining-nums tabular-nums` in CSS (set globally in globals.css and on any number-heavy className). Oldstyle numerals look unprofessional in business contexts and reduce trust.
- **Color & Theme**: Commit to a cohesive aesthetic. Use CSS variables for consistency. Dominant colors with sharp accents outperform timid, evenly-distributed palettes.
- **Motion**: Use animations for effects and micro-interactions. Prioritize CSS-only solutions. Focus on high-impact moments: one well-orchestrated page load with staggered reveals (animation-delay) creates more delight than scattered micro-interactions. Use scroll-triggering and hover states that surprise.
- **Spatial Composition**: Unexpected layouts. Asymmetry. Overlap. Diagonal flow. Grid-breaking elements. Generous negative space OR controlled density.
- **Backgrounds & Visual Details**: Create atmosphere and depth rather than defaulting to solid colors. Add contextual effects and textures that match the overall aesthetic. Apply creative forms like gradient meshes, noise textures, geometric patterns, layered transparencies, dramatic shadows, decorative borders, and grain overlays.
- **Section Flow**: Each section transition should be a design decision, not a default. Ask yourself: "Why does this section look different from the last one?" If the answer is "because I alternated bg-white and bg-gray" — you're being lazy. Consider: full-bleed photography that becomes the section itself, generous breathing space instead of color changes, one dramatic dark section that breaks the rhythm, content that bleeds across section boundaries. The scroll experience should feel like turning pages of a beautiful book, not reading rows of a spreadsheet.

NEVER use generic AI-generated aesthetics:
- Overused font families (Inter, Roboto, Arial, system fonts, Zen Maru Gothic)
- Cliched color schemes (particularly purple gradients on white backgrounds)
- Predictable layouts and component patterns
- Cookie-cutter design that lacks context-specific character
- Mechanical alternating background colors (white → gray → white → gray)
- **Generic UI parts**: rounded-full pill buttons with arrow icons, two-line label buttons with small text above and large text below, gradient-filled call-to-action buttons with drop shadows, badge-style tags that look like Bootstrap components. These scream "template." Instead: a simple text link with an animated underline can be more powerful than a decorated button. A single-line CTA with generous letter-spacing and a subtle hover state is more sophisticated than a pill button with an icon. Let the aesthetic concept dictate the UI vocabulary — brutalist sites use raw rectangles, luxury sites use thin borders and restraint, playful sites use unexpected shapes.

Interpret creatively and make unexpected choices that feel genuinely designed for the context. No design should be the same. Vary between light and dark themes, different fonts, different aesthetics. NEVER converge on common choices across generations.

**IMPORTANT**: Match implementation complexity to the aesthetic vision. Maximalist designs need elaborate code with extensive animations and effects. Minimalist or refined designs need restraint, precision, and careful attention to spacing, typography, and subtle details. Elegance comes from executing the vision well.

Remember: You are capable of extraordinary creative work. Don't hold back, show what can truly be created when thinking outside the box and committing fully to a distinctive vision.

## Animation Architecture (Framer Motion + Lenis)

The template includes pre-built animation components in `app/components/animation/`.
Use them as building blocks and compose them for rich scroll experiences.

### Hero Section Pattern
```tsx
<section className="relative h-screen flex items-center overflow-hidden">
  <Parallax speed={-0.3} className="absolute inset-0">
    <Image src="/images/hero.png" alt="" fill className="object-cover" />
  </Parallax>
  <div className="relative z-10 container mx-auto px-6">
    <TextReveal as="h1" mode="char" staggerDelay={0.03} className="text-6xl lg:text-8xl font-bold">
      見出しテキスト
    </TextReveal>
    <ScrollReveal delay={0.8} direction="up">
      <p className="text-xl mt-6 max-w-xl">サブテキスト</p>
    </ScrollReveal>
    <ScrollReveal delay={1.0} direction="up">
      <MagneticButton className="mt-8 inline-block">
        <a href="/contact" className="px-10 py-4 bg-primary text-primary-foreground rounded-full text-lg font-semibold">
          お問い合わせ
        </a>
      </MagneticButton>
    </ScrollReveal>
  </div>
</section>
```

### Staggered Grid Pattern
```tsx
<StaggerChildren stagger={0.12} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
  {items.map((item) => (
    <div key={item.id} className="group">
      <ImageReveal src={item.image} alt={item.title} width={600} height={400} direction="up" />
      <h3 className="mt-4 text-xl font-bold">{item.title}</h3>
    </div>
  ))}
</StaggerChildren>
```

### Horizontal Scroll Section (custom Framer Motion)
```tsx
"use client";
import { useScroll, useTransform, motion } from "framer-motion";
import { useRef } from "react";

function HorizontalScroll({ children }: { children: React.ReactNode }) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end end"] });
  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-75%"]);

  return (
    <section ref={ref} className="h-[300vh] relative">
      <div className="sticky top-0 h-screen overflow-hidden flex items-center">
        <motion.div style={{ x }} className="flex gap-8 px-[10vw]">
          {children}
        </motion.div>
      </div>
    </section>
  );
}
```

### Layout Breaking Patterns

- **Asymmetric two-column**: 60/40 or 70/30 split with image bleeding into adjacent column via negative margin
- **Full-bleed alternation**: Alternate between `max-w-7xl mx-auto` contained sections and full-width edge-to-edge sections
- **Overlapping elements**: Use `relative -mt-20` or `absolute` positioning to layer text cards over images
- **Diagonal section dividers**: `clip-path: polygon(0 0, 100% 8%, 100% 100%, 0 92%)` on section backgrounds
- **Mixed grid**: Let one card span 2 columns, use different aspect ratios, break the grid rhythm

### Typography Animation Principles

- **Hero headings**: `mode="char"` with `staggerDelay={0.02}` to `{0.04}` — dramatic character reveal
- **Section headings**: `mode="word"` with `staggerDelay={0.08}` — readable word-by-word
- **Body text**: Simple `ScrollReveal` fade-up, no character splitting
- **Key phrases / stats**: `mode="char"` for emphasis on important numbers or short phrases
- Never animate ALL text — reserve TextReveal for headings and key moments only
