# Petverz — Investor Landing Page Design Brief

## Purpose & Context
Ultra-premium investor landing page for Petverz: pet identity + wallet + service ecosystem. Position as *infrastructure*, not cute pet app. Apple product launch language + Stripe-level clarity.

## Tone
Refined, high-tech, minimalist. Premium tech infrastructure positioning. Generous whitespace. Large bold typography. Strategic, sparing use of neon blue accents for maximum impact.

## Color Palette

| Token | OKLCH | Usage |
|-------|-------|-------|
| background | `0.055 0 0` | #0B0F1A — dark near-black base |
| foreground | `0.93 0 0` | Off-white text |
| primary | `0.71 0.18 223` | #00C6FF — neon blue, CTAs & accents |
| secondary | `0.5 0.02 205` | Subtle cool grey for hierarchy |
| muted | `0.18 0.01 0` | Dark grey for tertiary content |
| border | `0.15 0.01 220` | Subtle blue-tinted borders |
| accent | `0.71 0.18 223` | Same as primary for consistency |
| destructive | `0.68 0.22 22` | Error red, minimal use |

## Typography

| Layer | Font | Style | Use |
|-------|------|-------|-----|
| display | Satoshi | 700–900 | Headlines, section titles, hero text |
| body | PlusJakartaSans | 400–700 | Body text, descriptions |
| mono | JetBrainsMono | 400–700 | Code, technical data, timestamps |

## Type Scale
- **Hero headline:** 48–72px, 700wt, tight line-height
- **Section title:** 32–48px, 700wt
- **Body:** 16–18px, 400wt, line-height 1.6
- **Caption:** 12–14px, 400wt, muted-foreground

## Elevation & Depth
- Cards: `bg-card` + 1px `border-border`, no shadow (Apple style)
- Subtle borders replace shadows for depth
- Glow effects (`glow-primary`) sparingly for hero/CTA elements
- Layered backgrounds: content sections on `bg-background`, alternate sections on `bg-muted/5`

## Structural Zones

| Zone | Background | Border | Usage |
|------|-----------|--------|-------|
| Header/Nav | `bg-background` | bottom border | Fixed or sticky, neon blue logo/CTA |
| Hero section | `bg-background` + radial gradient glow | none | Full-width, centered content, Petverz card mockup |
| Content section (odd) | `bg-background` | none | Problem, solution, demo, roadmap |
| Content section (even) | `bg-muted/5` | none | Core insight, why now, market, model |
| CTA sections | `bg-card` | 1px `border-border` | Invest CTA, email capture |
| Footer | `bg-muted/10` | top border | Links, legal |

## Spacing & Rhythm
- **Outer padding:** 2rem (mobile), 3rem (tablet), 4rem (desktop)
- **Section gap:** 6–8rem between major sections
- **Element gap:** 1.5–2rem within sections
- **Grid:** 12-column, container max-width 1400px

## Component Patterns
- **Buttons:** Large, 44px+ height, neon blue bg, bold text, glow on hover
- **Cards:** Minimal border, subtle hover lift (no heavy shadow)
- **Badges:** Small, primary color, solid fill
- **Links:** Underline with gradient, smooth hover

## Motion & Animation
- **Page load:** Staggered fade-in for sections (0.8s ease-out)
- **Scroll trigger:** Sections slide up + fade in on viewport entry
- **QR card:** Subtle pulse glow (2s cycle, 0.4–0.6 opacity)
- **CTA hover:** Glow intensity increase + slight scale (1.02x)
- **Transitions:** All interactive elements use `transition-smooth` (0.3s cubic-bezier)

## Signature Detail
**Neon blue glow on dark:** Strategic use of `glow-primary` on hero card, QR code, and primary CTAs creates immediate visual authority and luxury tech positioning. Glow is restrained (not neon overload) — appears only on highest-value elements.

## SVG & Mockups (No Stock Images)
- **Hero:** Premium Petverz card mockup with glowing QR code
- **Problem:** Broken ecosystem diagram — interconnected icons with broken lines
- **Solution:** Card → Scan → App flow diagram (3 steps, neon connectors)
- **Demo:** 3 stacked iPhone mockups (profile, wallet, QR scan screens)
- **Why Now:** Minimal growth chart, bars in primary accent color
- **Market:** Simple bar/pie chart, neon highlights
- **Model:** Revenue flow diagram, circular with 4 streams
- **Wins:** Layered architecture diagram, stacked elements with neon connectors
- **Roadmap:** Horizontal timeline, 4 phases with milestone markers

## Dark Mode
App runs in dark mode exclusively (class="dark" active). No light mode toggle. Light mode tokens present but unused.

## Constraints
- No heavy shadows (max glow depth 30px, 0.4 opacity)
- No stock images — custom SVG/mockups only
- No animation above 0.8s (avoid fatigue)
- No more than 3 accent colors (primary + secondary + destructive)
- No clutter — each section has one primary visual + minimal text
- Whitespace > content density
