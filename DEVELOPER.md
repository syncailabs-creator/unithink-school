# Unithink School — Developer Guide

> Everything a new developer needs to read the code, make changes, and ship without breaking things.

---

## Table of Contents

1. [Quick Start](#1-quick-start)
2. [Tech Stack](#2-tech-stack)
3. [Project Structure](#3-project-structure)
4. [Routing — Adding Pages](#4-routing--adding-pages)
5. [Design System — Tokens, Fonts, Dark Mode](#5-design-system--tokens-fonts-dark-mode)
6. [Component Patterns](#6-component-patterns)
7. [Animation System](#7-animation-system)
8. [SEO — Per-Page Meta & Structured Data](#8-seo--per-page-meta--structured-data)
9. [FAQ Data Files](#9-faq-data-files)
10. [TypeScript Types](#10-typescript-types)
11. [Page Architecture — How Each Page Is Built](#11-page-architecture--how-each-page-is-built)
12. [Key Design Decisions & Why](#12-key-design-decisions--why)
13. [Gotchas & Common Mistakes](#13-gotchas--common-mistakes)
14. [Checklist: Adding a New Workshop Page](#14-checklist-adding-a-new-workshop-page)

---

## 1. Quick Start

```bash
npm install
npm run dev        # http://localhost:3000 with HMR
npm run build      # production build → /dist
npm run preview    # preview production build locally
npm run lint       # TypeScript type-check only (no ESLint configured)
```

---

## 2. Tech Stack

| Layer | Library | Version | Notes |
|---|---|---|---|
| UI | React | 19 | Named exports (no default exports in components) |
| Build | Vite | 6 | With `@tailwindcss/vite` plugin, no separate PostCSS config |
| Styling | Tailwind CSS | 4 | Uses `@theme` block in index.css — no tailwind.config.js |
| Routing | React Router | 7 | `lazy()` code-split on every page |
| Animation | Motion (Framer) | 12 | Import from `motion/react`, NOT `framer-motion` |
| Icons | Lucide React | 0.546 | Tree-shaken, import per icon |
| SEO | react-helmet-async | 3 | `<HelmetProvider>` wraps the app in main.tsx |
| Utilities | clsx + tailwind-merge | — | Combined as `cn()` in `src/lib/utils.ts` |

---

## 3. Project Structure

```
unithink-school/
│
├── src/
│   ├── App.tsx              # Routes + Navbar/Footer shell
│   ├── main.tsx             # React root, HelmetProvider, BrowserRouter
│   ├── types.ts             # Shared TypeScript interfaces
│   ├── index.css            # Tailwind + ALL theme tokens + animations
│   │
│   ├── components/          # Reusable section components
│   │   ├── Hero.tsx           # Full-page hero — accepts props, used by all 4 workshop pages
│   │   ├── Navbar.tsx         # Top nav + mobile menu + workshop dropdown
│   │   ├── Footer.tsx
│   │   ├── SEO.tsx            # <Helmet> wrapper + schema.org helpers
│   │   ├── TrustBar.tsx       # Scrolling logo carousel
│   │   ├── Programs.tsx       # Three-card program overview (Home only)
│   │   ├── Stats.tsx          # Stat number grid
│   │   ├── ProblemSection.tsx # "Problem" card grid
│   │   ├── AudienceSection.tsx# Audience card grid
│   │   ├── FormatSection.tsx  # Pricing/format card grid
│   │   ├── ToolsSection.tsx   # AI tools showcase (audience-aware)
│   │   ├── EducatorsSection.tsx
│   │   ├── VideoSection.tsx   # YouTube embed section
│   │   ├── Differentiation.tsx# Comparison table section
│   │   ├── Pricing.tsx        # Pricing cards
│   │   ├── AIMentor.tsx       # AI chatbot feature block
│   │   ├── Contact.tsx        # Contact form (Web3Forms)
│   │   ├── FAQ.tsx            # Accordion FAQ with category filter
│   │   ├── WhatsAppFloat.tsx  # Bottom-right floating WhatsApp button
│   │   └── ThemeToggle.tsx    # Dark/light toggle in Navbar
│   │
│   ├── pages/               # Full page files — compose components
│   │   ├── Home.tsx
│   │   ├── Corporate.tsx
│   │   ├── Students.tsx
│   │   ├── Faculty.tsx
│   │   ├── WorkshopsHub.tsx
│   │   ├── AIMentor.tsx
│   │   ├── SuccessStories.tsx # "Our Work" page — fully custom layout
│   │   ├── Contact.tsx
│   │   ├── Privacy.tsx
│   │   ├── Terms.tsx
│   │   └── NotFound.tsx
│   │
│   ├── data/                # Static content arrays
│   │   ├── faq-home.ts
│   │   ├── faq-corporate.ts
│   │   ├── faq-students.ts
│   │   ├── faq-faculty.ts
│   │   └── faq-workshops-hub.ts
│   │
│   ├── hooks/
│   │   └── useScrollReveal.ts  # Intersection observer helper
│   │
│   └── lib/
│       └── utils.ts            # cn() — clsx + tailwind-merge
│
├── public/
│   └── content/             # Workshop photos (ws1.jpg … ws6.jpg, etc.)
│
├── vite.config.ts
├── tsconfig.json
└── DEVELOPER.md             # ← you are here
```

---

## 4. Routing — Adding Pages

All routes live in `src/App.tsx`. Every page is **lazy-loaded** — this keeps initial bundle small.

### To add a new page:

**Step 1** — Create the page file:
```tsx
// src/pages/NewPage.tsx
export function NewPage() {
  return <div>...</div>;
}
```

**Step 2** — Add a lazy import in `App.tsx`:
```tsx
const NewPage = lazy(() => import('./pages/NewPage').then(m => ({ default: m.NewPage })));
```

**Step 3** — Add the route:
```tsx
<Route path="/new-page" element={<NewPage />} />
```

**Step 4** — If it needs a Navbar link, update `src/components/Navbar.tsx` in the `workshopLinks` array.

> The `ScrollToTop` component in `App.tsx` auto-scrolls to top on every navigation. No action needed.

---

## 5. Design System — Tokens, Fonts, Dark Mode

### Where tokens live

All tokens are CSS custom properties in `src/index.css` inside the `:root` block.  
Tailwind 4 reads them via the `@theme` block at the top of the same file — this is why there is **no `tailwind.config.js`**.

### Color tokens

| Token | Light | Dark | Usage |
|---|---|---|---|
| `--color-bg` | `#FFFFFF` | `#050505` | Page backgrounds |
| `--color-bg-2` | `#F8FAFC` | `#0A0A0A` | Alternate section bg |
| `--color-text` | `#050A18` | `#FFFFFF` | Headings, body text |
| `--color-text-2` | `#64748B` | `#A1A1AA` | Subtext, descriptions |
| `--color-text-muted` | `#94A3B8` | `#71717A` | Labels, captions |
| `--color-accent` | `#FBB03B` | `#FBB03B` | Brand gold — same in both modes |
| `--color-border` | `#EEF2F7` | `rgba(255,255,255,0.08)` | Card/divider borders |
| `--color-accent-bg` | `#FEF9EC` | `rgba(251,176,59,0.1)` | Accent tint backgrounds |

### Using tokens in Tailwind classes

Tailwind 4 exposes every token with a `color-` prefix:

```tsx
// ✅ Correct — uses CSS variable
<div className="bg-color-bg text-color-accent border-color-border" />

// ❌ Wrong — hardcoded color won't respect dark mode
<div className="bg-white text-yellow-400" />
```

### Using tokens in inline styles (for gradients, box-shadows)

```tsx
// Use the raw hex / rgba directly — CSS vars don't work inside rgba()
style={{ background: 'rgba(251, 176, 59, 0.12)' }}  // accent at 12% opacity

// Or use --color-accent-rgb which is always the RGB triplet
style={{ background: `rgba(var(--color-accent-rgb), 0.12)` }}
```

### Fonts

```tsx
// Headings → Playfair Display (declared as font-heading)
<h1 className="font-heading font-black">Title</h1>

// Body / UI → Plus Jakarta Sans (default font-sans)
<p className="font-sans">Text</p>

// Code / mono → JetBrains Mono
<code className="font-mono">code</code>
```

### Dark Mode

Dark mode is **CSS-variable driven**, not Tailwind's `dark:` prefix.

The `ThemeToggle` component sets:
```js
document.documentElement.setAttribute('data-theme', 'dark');
```

The CSS responds:
```css
:root[data-theme='dark'] {
  --color-bg: #050505;
  /* ... all dark values */
}
```

**You never need to add `dark:` prefixes.** If you use `bg-color-bg`, it automatically becomes dark in dark mode. The only exception is utility classes like `.glass` which have explicit dark overrides in `index.css`.

### Component utility classes (from index.css)

| Class | What it does |
|---|---|
| `.container` | `max-w-7xl mx-auto px-6 md:px-10 lg:px-12` |
| `.section` | Vertical padding: `py-16 md:py-24 lg:py-32` |
| `.glass` | Glassmorphic card background + blur |
| `.btn-primary` | Gold gradient CTA button |
| `.btn-secondary` | Outlined ghost button |
| `.gradient-text` | Gold gradient text clip |
| `.shimmer-text` | Animated shimmer on text |
| `.badge-float` | Floating badge shadow |
| `.no-scrollbar` | Hides scrollbar, keeps scroll |

---

## 6. Component Patterns

### Named exports — always

Every component and page uses **named exports**, not default exports:
```tsx
// ✅ Correct
export function Hero({ ... }: HeroProps) { ... }

// ❌ Wrong — breaks the lazy import pattern in App.tsx
export default function Hero() { ... }
```

### Props-driven components

Reusable section components accept props so the same component can be used across multiple pages with different content:

```tsx
// Same Hero component used on Corporate, Students, Faculty pages
<Hero
  eyebrow="Corporate AI Training"
  title={<>Your Team Already Has the Talent. <br /> Now Give Them the <span className="text-color-accent">AI Skills</span> to Use It.</>}
  subheadline="AI workshops built around your business."
  primaryCTA={{ text: "Book a Free Discovery Call", href: "#contact" }}
  secondaryCTA={{ text: "Download Brochure", href: "https://wa.me/..." }}
  trustLine="Trusted by 200+ organisations"
  visualCard={{ title: "...", description: "...", stats: [...] }}
  badges={{ top: { icon: <Zap />, title: "40%", subtitle: "Efficiency Gain" }, ... }}
/>
```

### Inline data pattern

Page-specific data lives as `const` arrays at the top of the page file — not in `src/data/`. Only FAQ data is extracted to `src/data/` because it's large and shared across the FAQ component.

```tsx
// src/pages/Corporate.tsx — data at top, component below
const corporateStats = [
  { value: '1,800+', label: 'Participants Trained' },
  ...
];

const problemCards = [
  { title: "...", description: "..." },
  ...
];

export function Corporate() {
  return (
    <Stats items={corporateStats} />
    <ProblemSection cards={problemCards} />
    ...
  );
}
```

### The `cn()` utility

Use `cn()` whenever you need conditional or merged Tailwind classes:

```tsx
import { cn } from '@/src/lib/utils';

// Conditional classes
<div className={cn(
  "base-class px-4 py-2",
  isActive && "bg-color-accent text-white",
  isDisabled && "opacity-50 cursor-not-allowed"
)} />

// Overriding with variants
function Button({ className, ...props }) {
  return (
    <button className={cn("btn-primary", className)} {...props} />
  );
}
```

---

## 7. Animation System

### Two animation layers

**Layer 1 — CSS keyframes** (in `index.css`): For ambient/continuous effects.

| Class | Effect | Duration |
|---|---|---|
| `animate-aurora` | Slow drifting glow blob | 18s loop |
| `animate-aurora-slow` | Slower drift | 26s loop |
| `animate-float` | Vertical float | 6s loop |
| `animate-marquee` | Logo carousel scroll | 28s loop |
| `animate-pulse-ring` | Expanding ring | 2s loop |
| `shimmer-text` | Gold shimmer on text | 4s loop |
| `animate-fill-bar` | Progress bar fill | 1.4s one-shot |
| `animate-stat-pop` | Number pop-in | 0.6s one-shot |

**Layer 2 — Framer Motion** (from `motion/react`): For scroll-triggered, entrance, and interactive animations.

```tsx
// IMPORTANT: import from 'motion/react', NOT 'framer-motion'
import { motion } from 'motion/react';
```

### Standard scroll-reveal pattern

```tsx
<motion.div
  initial={{ opacity: 0, y: 30 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}              // Fires once, doesn't replay on scroll-up
  transition={{ duration: 0.8, delay: 0.15 }}
>
  Content
</motion.div>
```

### Standard entrance animation (hero / above fold)

Use `animate` (not `whileInView`) for elements visible on load:
```tsx
<motion.div
  initial={{ opacity: 0, x: -20 }}
  animate={{ opacity: 1, x: 0 }}
  transition={{ duration: 0.6 }}
>
  Content
</motion.div>
```

### Staggered list items

```tsx
{items.map((item, i) => (
  <motion.div
    key={i}
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.6, delay: i * 0.1 }}  // delay increases per item
  >
    {item}
  </motion.div>
))}
```

### Animated progress bars

```tsx
<motion.div
  initial={{ width: 0 }}
  whileInView={{ width: `${percentage}%` }}
  viewport={{ once: true }}
  transition={{ duration: 1.4, delay: 0.3, ease: [0.4, 0, 0.2, 1] }}
  className="h-2 rounded-full bg-color-accent"
/>
```

### Floating badge loop (for always-moving elements)

```tsx
<motion.div
  animate={{ y: [0, -8, 0] }}
  transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
>
  Badge
</motion.div>
```

### Halftone dot corner effect (Hero.tsx)

The decorative corner dots (top-left, top-right, bottom-left, bottom-right) use SVG `data:` URL `backgroundImage` — **not** CSS `radial-gradient` dots. This is intentional:

> CSS `radial-gradient` dots at small radii (< 2px) get anti-aliased by browsers to near-invisible. SVG circles in `data:` URLs render crisp at any size.

Each corner has 3 layers: amber glow wash → dual SVG dot grid with mask → depth shadow dim.

---

## 8. SEO — Per-Page Meta & Structured Data

The `<SEO>` component wraps `react-helmet-async`'s `<Helmet>`. Every page must include it.

### Basic usage

```tsx
import { SEO } from '../components/SEO';

<SEO
  title="Page Title"              // Appended: "Page Title | Unithink School"
  description="160-char max"
  keywords="comma, separated"
  canonical="/page-path"          // Relative path — base URL auto-added
/>
```

### With structured data (schema.org)

```tsx
import { SEO, courseSchema, faqSchema, breadcrumbSchema } from '../components/SEO';

<SEO
  title="..."
  description="..."
  canonical="/faculty"
  jsonLd={[
    breadcrumbSchema([
      { name: 'Home', url: 'https://www.unithinkschool.com' },
      { name: 'Faculty Development', url: 'https://www.unithinkschool.com/faculty' },
    ]),
    courseSchema('Course Name', 'Description', 'Unithink School', {
      url: 'https://www.unithinkschool.com/faculty',
      educationalLevel: 'Professional Development',
      teaches: ['AI Tools', 'Research Automation'],
      duration: 'P5D',          // ISO 8601: P5D = 5 days
      courseMode: 'onsite',
      offers: { price: '0', priceCurrency: 'INR', availability: 'https://schema.org/InStock' },
    }),
    faqSchema(facultyFAQs.map(f => ({ question: f.question, answer: f.answer }))),
  ]}
/>
```

The `jsonLd` prop accepts a single object or an array — multiple schemas are rendered as separate `<script type="application/ld+json">` tags.

---

## 9. FAQ Data Files

### Structure

Every page that has a FAQ section has a corresponding data file in `src/data/`:

```
src/data/faq-home.ts
src/data/faq-corporate.ts
src/data/faq-students.ts
src/data/faq-faculty.ts
src/data/faq-workshops-hub.ts
```

### Format

```typescript
import { FAQCategory, FAQItem } from '../types';

export const homeFAQCategories: FAQCategory[] = [
  { id: 'general', label: 'General' },
  { id: 'programs', label: 'Programs' },
];

export const homeFAQs: FAQItem[] = [
  {
    category: 'general',           // Must match a category id above
    question: 'What is X?',
    answer: 'X is...',
  },
  ...
];
```

### Usage in a page

```tsx
import { homeFAQs, homeFAQCategories } from '../data/faq-home';

<FAQ
  eyebrow="Everything You Need to Know"
  title="Frequently Asked Questions"
  description="Clear answers about AI workshops."
  items={homeFAQs}
  categories={homeFAQCategories}
/>
```

---

## 10. TypeScript Types

All shared interfaces are in `src/types.ts`. Import directly:

```tsx
import { FAQItem, FAQCategory, FormatCard, StatItem } from '../types';
```

| Interface | Used for |
|---|---|
| `StatItem` | `{ value, label }` — Stats component |
| `ProblemCard` | `{ title, description }` — ProblemSection |
| `AudienceCard` | `{ title, description, icon? }` — AudienceSection |
| `FormatCard` | `{ title, price, bestFor, whatHappens, includes[], isPopular? }` — FormatSection |
| `FAQItem` | `{ question, answer, category? }` — FAQ component |
| `FAQCategory` | `{ id, label }` — FAQ category filter |
| `TestimonialItem` | `{ quote, author, role }` |
| `StepItem` | `{ title, description }` |

If you need a new shared shape used in more than one file, add it to `src/types.ts`. If it's only used inside one component, define the interface at the top of that file.

---

## 11. Page Architecture — How Each Page Is Built

### Workshop pages (Corporate, Students, Faculty)

These three pages share an identical composition pattern:

```tsx
export function Corporate() {
  return (
    <div className="flex flex-col relative overflow-hidden">
      <SEO ... />

      {/* Page-specific background blobs (unique per page) */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none -z-10">
        <div className="absolute ..." />   {/* 2–3 blobs with different positions */}
      </div>

      {/* Sections — always in this order */}
      <Hero ... />
      <TrustBar ... />
      <Stats ... />
      <ProblemSection ... />
      <AudienceSection ... />
      <div id="formats">
        <FormatSection ... />
      </div>
      <ToolsSection audience="corporate" />   {/* "corporate" | "students" | "faculty" */}
      <EducatorsSection ... />
      <VideoSection compact={true} />
      <Differentiation />
      <Pricing />
      <AIMentor />
      <Contact />
      <FAQ ... />
    </div>
  );
}
```

The outer `div` is `flex flex-col relative overflow-hidden` — this is important. The background blobs use `absolute` positioning and need `overflow-hidden` to not cause horizontal scroll.

### Home page

Same pattern but uses `Programs` instead of `ProblemSection` / `AudienceSection`, and `VideoSection` without `compact`.

### SuccessStories page (Our Work)

Fully custom layout — does not use the shared `<Hero>` component. It has:
1. A custom 2-column hero with an infographic panel and halftone corner dots
2. Impact stats section
3. "Journey + Coverage" animated section (the arc diagram + coverage tree)
4. Workshop photo grid
5. Case studies (expandable cards)
6. Experiences list
7. VideoSection
8. Contact

---

## 12. Key Design Decisions & Why

### Why Tailwind 4 with `@theme` instead of a config file?

Tailwind 4's `@theme` block in CSS lets you define tokens once as CSS custom properties. They are then simultaneously available as CSS variables (for inline styles, JS, dark mode) AND as Tailwind utility classes. No duplication, no config file to maintain.

### Why `motion/react` not `framer-motion`?

The `motion` package (v12+) is Framer Motion's new separate package. The import path is `motion/react`. The API is identical — just the import path changed. Don't import from `framer-motion`.

### Why SVG `data:` URLs for halftone dots?

CSS `radial-gradient` dots become invisible at sub-pixel radii due to browser anti-aliasing. SVG circles in `data:` URLs always render crisp. If you need to add more decorative dots anywhere, use the SVG approach.

### Why named exports everywhere?

`React.lazy()` requires a module that exports a default. The pattern:
```tsx
lazy(() => import('./pages/Home').then(m => ({ default: m.Home })))
```
…lets us keep named exports while satisfying lazy loading. This makes auto-imports in IDEs more reliable and avoids ambiguous default export naming.

### Why no ESLint?

The project uses `tsc --noEmit` for type-checking only. If you add ESLint, configure it not to conflict with Tailwind class ordering or the existing React 19 / motion imports.

---

## 13. Gotchas & Common Mistakes

### 1. Editing a file before reading it

The `Edit` tool (and manual VS Code edits) require you to know the exact string. Always read the specific section of a file before editing. If the string doesn't match exactly (including whitespace), the edit fails silently.

### 2. Using `dark:` Tailwind prefix

Don't do this:
```tsx
// ❌ dark: prefix won't work — dark mode is CSS variable based
<div className="bg-white dark:bg-black" />

// ✅ Use token instead
<div className="bg-color-bg" />
```

### 3. Using `rgba()` with CSS variable tokens

CSS `var()` doesn't work inside `rgba()`:
```tsx
// ❌ Won't work
style={{ background: 'rgba(var(--color-accent), 0.12)' }}

// ✅ Use the -rgb version
style={{ background: 'rgba(var(--color-accent-rgb), 0.12)' }}

// ✅ Or use the raw hex
style={{ background: 'rgba(251, 176, 59, 0.12)' }}
```

### 4. ToolsSection audience prop

`<ToolsSection>` renders different tool sets based on `audience`:
```tsx
<ToolsSection audience="corporate" />   // Business tools
<ToolsSection audience="students" />    // Dev/coding tools
<ToolsSection audience="faculty" />     // Teaching tools
<ToolsSection audience="general" />     // Mix (Home page)
```
Forgetting this prop shows the wrong tools on the page.

### 5. Outer div class on pages

Every workshop page must have this outer wrapper — not just any div:
```tsx
<div className="flex flex-col relative overflow-hidden">
```
Without `overflow-hidden`, background blobs cause horizontal scroll. Without `relative`, absolutely positioned blobs escape the page boundary.

### 6. Background blobs use `-z-10`

The page-level background container must have `-z-10`:
```tsx
<div className="absolute top-0 left-0 w-full h-full pointer-events-none -z-10">
```
Without this, the blobs sit above content and block clicks.

### 7. FormatSection anchor id

The CTA "Choose Your Format" link in the Hero uses `href="#formats"`. The FormatSection must be wrapped in:
```tsx
<div id="formats">
  <FormatSection ... />
</div>
```

### 8. WhatsApp URLs are pre-encoded

WhatsApp `href` values in `secondaryCTA` use `%20` encoding, not spaces. Example:
```tsx
href="https://wa.me/919726217070?text=Hi%2C%20I%20would%20like%20to%20request%20the%20brochure"
```
Do not un-encode these — they are intentional.

---

## 14. Checklist: Adding a New Workshop Page

Use this when adding a new audience segment (e.g., "Entrepreneurs", "Schools").

- [ ] Create `src/pages/NewAudience.tsx` — copy `Corporate.tsx` as template
- [ ] Create `src/data/faq-new-audience.ts` — use `faq-corporate.ts` as template
- [ ] Add typed stats, problem cards, audience cards, formats at the top of the page file
- [ ] Add `<SEO>` with unique `title`, `description`, `keywords`, `canonical`
- [ ] Pass `audience="new-audience"` to `<ToolsSection>` — or extend the component if a new track is needed
- [ ] Add the page to `src/App.tsx`: lazy import + `<Route>`
- [ ] Add the route to `Navbar.tsx` in `workshopLinks`
- [ ] Add the page to `Programs.tsx` if it should appear on the Home page program cards
- [ ] Add SEO breadcrumb + courseSchema + faqSchema to the `<SEO jsonLd>` prop
- [ ] Test dark mode — look for any hardcoded colors
- [ ] Run `npm run build` — verify 0 TypeScript errors

---

*Last updated: April 2026*
