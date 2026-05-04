# Unithink School — Developer Reference

AI training website for Unithink School. 8-page React SPA with Tailwind CSS v4, Framer Motion, and react-router-dom.

---

## Stack

| Layer | Technology |
|---|---|
| Framework | React 19 + TypeScript |
| Build | Vite 6 |
| Styling | Tailwind CSS v4 (CSS-first config) |
| Animation | Framer Motion (`motion/react`) |
| Routing | react-router-dom v7 |
| Icons | lucide-react |
| Deployment | Netlify (via `netlify.toml`) |

---

## Local Development

```bash
npm install
npm run dev       # http://localhost:5173
npm run build     # outputs to /dist
npm run preview   # preview the production build
```

---

## Project Structure

```
src/
├── components/         # Shared UI components
│   ├── Navbar.tsx      # Sticky nav, mobile drawer, Workshops dropdown
│   ├── Hero.tsx        # Page hero with infographic panel, stats bar, floating badges
│   ├── Stats.tsx       # Reusable 4-stat grid with icons + shimmer numbers
│   ├── Programs.tsx    # 3-card program overview (Corporate / Students / Faculty)
│   ├── Pricing.tsx     # 3-tier pricing cards
│   ├── ToolsSection.tsx# Tool icon grid (16 tools), audience-aware copy
│   ├── FAQ.tsx         # Accordion FAQ with category tabs
│   ├── Contact.tsx     # Shared contact section (used in multiple pages)
│   ├── VideoSection.tsx# Auto-play video grid (muted, fullscreen, sound toggle)
│   ├── TrustBar.tsx    # Scrolling logo/institution strip
│   ├── EducatorsSection.tsx # Trainer cards
│   ├── DotGrid.tsx     # Amber dot background decoration
│   ├── WorkshopGallery.tsx  # Masonry photo gallery
│   ├── FormatSection.tsx    # Workshop format/pricing cards
│   ├── AudienceSection.tsx  # Audience targeting cards
│   ├── ProblemSection.tsx   # Problem statement cards
│   ├── ParticipantTestimonials.tsx # Video + text testimonials
│   ├── AIMentor.tsx    # AI Mentor feature component
│   ├── Differentiation.tsx  # Why us section
│   └── SEO.tsx         # Meta tags + JSON-LD schema injection
│
├── pages/              # Route-level pages
│   ├── Home.tsx        # /
│   ├── WorkshopsHub.tsx# /ai-workshops
│   ├── Corporate.tsx   # /corporate
│   ├── Students.tsx    # /students
│   ├── Faculty.tsx     # /faculty
│   ├── About.tsx       # /about
│   ├── AIMentor.tsx    # /ai-mentor
│   ├── SuccessStories.tsx # /our-work
│   ├── Contact.tsx     # /contact
│   ├── FAQ.tsx         # /faq
│   ├── Privacy.tsx     # /privacy
│   └── Terms.tsx       # /terms
│
├── data/               # Static data (FAQs per page)
├── types.ts            # Shared TypeScript interfaces
├── lib/utils.ts        # cn() Tailwind class helper
├── App.tsx             # Router setup
└── index.css           # Tailwind theme, CSS variables, global styles
```

---

## Design System

### Theme tokens (src/index.css)

All colors use CSS custom properties, toggled by `data-theme="dark"` on `<html>`:

```css
--color-bg          /* page background */
--color-bg-2        /* section alt background */
--color-bg-elevated /* cards, elevated surfaces */
--color-text        /* primary text */
--color-text-2      /* secondary text */
--color-text-muted  /* captions, labels */
--color-accent      /* amber #FBB03B — primary brand color */
--color-accent-bg   /* soft amber fill for icon containers */
--color-border      /* subtle border color */
```

### Typography

Single font: **Montserrat** (all weights via Google Fonts). No secondary typeface.

Heading scale uses responsive Tailwind classes throughout:
- H1: `text-4xl sm:text-5xl md:text-6xl lg:text-7xl`
- H2: `text-3xl md:text-4xl lg:text-5xl`
- H3: `text-xl md:text-2xl`

Eyebrow pattern (used site-wide):
```jsx
<div className="flex items-center gap-4">
  <div className="w-12 h-[1px] bg-color-accent" />
  <span className="text-xs uppercase tracking-[0.3em] font-extrabold text-color-accent">
    Label Text
  </span>
  <div className="w-12 h-[1px] bg-color-accent" />
</div>
```

### Layout utilities

```css
.container  /* max-w-7xl mx-auto px-6 md:px-10 lg:px-12 */
.section    /* py-12 md:py-20 lg:py-28 */
.btn-primary
.btn-secondary
```

### Responsiveness rules

- Mobile-first. All spacing uses responsive prefixes — no bare `py-24`, `gap-16`, `mb-20` etc.
- Hero top padding: `pt-[72px] md:pt-[100px]` (accounts for 60px fixed navbar)
- Grids always stack on mobile: `grid lg:grid-cols-2`, `grid sm:grid-cols-2 lg:grid-cols-3`
- All sections have `relative overflow-hidden` when using absolute decorative elements
- Navbar dropdown constrained: `w-[min(380px,calc(100vw-24px))]`

---

## Key Components

### Stats

```tsx
<Stats
  items={[
    { value: '1,800+', label: 'Participants Trained', icon: Users },
    { value: '95%',    label: 'Satisfaction Rate',    icon: Star },
  ]}
  heading="Optional Heading"
  subheading="Optional subheading text"
/>
```

`icon` is optional — any lucide-react component. When provided, renders a small amber gradient icon box above the number.

### Hero

```tsx
<Hero
  eyebrow="Page Label"
  title={<>Headline with <span className="text-color-accent">Accent</span></>}
  subheadline="Supporting copy..."
  primaryCTA={{ text: "CTA Text", href: "/path" }}
  secondaryCTA={{ text: "Secondary", href: "#section" }}
  stats={[{ value: '3+', label: 'Projects' }]}   // optional 3-col stat bar
  image={{ src: '/content/photo.jpg', alt: '...' }} // optional right panel
  badges={{ top: { icon, title, subtitle }, bottom: { icon, title, subtitle } }}
  metrics={[...]}     // infographic panel metrics
  trustLine="Trust copy shown below CTAs"
/>
```

Right panel is `hidden lg:block` — only shows on desktop.

### VideoSection

Auto-plays on scroll (muted by default), sound toggle, fullscreen button. When one video is unmuted all others mute automatically. Resets to muted when scrolled out of view.

```tsx
<VideoSection />           // full layout: 1 featured + 4 portraits
<VideoSection compact />   // 1 featured + 2 portraits
```

Videos are served from `/public/content/`. Replace filenames in `workshopVideos` array inside `VideoSection.tsx`.

---

## Pages & Routes

| Route | Page | Notes |
|---|---|---|
| `/` | Home | Full landing page |
| `/ai-workshops` | WorkshopsHub | Hub linking to all 3 program pages |
| `/corporate` | Corporate | Corporate AI training program |
| `/students` | Students | Student workshop program |
| `/faculty` | Faculty | 1-Day and 2-Day FDP formats |
| `/about` | About | Company story, team, process |
| `/ai-mentor` | AIMentor | 1-on-1 AI mentorship product |
| `/our-work` | SuccessStories | Case studies + delivery record |
| `/contact` | Contact | Contact form + FAQ |

---

## Faculty Program Formats

Two formats only (updated from previous 3-day/5-day):
- **1-Day FDP** — 8 hours, awareness/introduction
- **2-Day FDP Intensive** — 16 hours, AICTE + NAAC documentation (marked popular)

---

## Content Placeholders

The following are not yet replaced with real content:

| Placeholder | Location |
|---|---|
| Workshop photos | `image={{ src: '' }}` in Hero props across Corporate/Students/Faculty |
| Video testimonials | `/public/content/ws_video2-5.mp4` — reuse same file currently |
| Participant photos | Testimonial cards use initials fallback |

---

## Deployment (Netlify)

`netlify.toml` at project root handles build config and SPA routing:

```toml
[build]
  command = "npm run build"
  publish = "dist"

[[redirects]]
  from = "/*"
  to = "/index.html"
  status = 200
```

The redirect rule is required — without it, direct URL visits return 404 on Netlify.

**Deploy steps:**
1. `git init && git add . && git commit -m "initial"`
2. Push to GitHub
3. Connect repo in Netlify dashboard → auto-detects build settings from `netlify.toml`
