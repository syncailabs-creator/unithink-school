# SEO Implementation — Unithink School

Complete reference for how SEO is implemented across this project.

---

## Architecture

SEO is handled entirely through the `<SEO>` component (`src/components/SEO.tsx`) using `react-helmet-async`. Every page renders exactly one `<SEO>` instance as its first child.

`HelmetProvider` wraps the app in `src/main.tsx`, making helmet tags available everywhere without prop drilling.

---

## SEO Component

**File:** `src/components/SEO.tsx`

### Props

| Prop | Type | Required | Default | Purpose |
|---|---|---|---|---|
| `title` | string | Yes | — | Page title (auto-appended with `\| Unithink School`) |
| `description` | string | Yes | — | Meta description (150–160 chars ideal) |
| `keywords` | string | No | — | Comma-separated keywords |
| `canonical` | string | No | site root | Canonical URL path e.g. `/corporate` |
| `ogImage` | string | No | `/og-image.jpg` | Open Graph image (1200×630px) |
| `ogType` | `'website' \| 'article'` | No | `'website'` | OG type |
| `jsonLd` | object \| object[] | No | — | JSON-LD structured data (one or array) |
| `noIndex` | boolean | No | `false` | Adds `noindex, nofollow` for non-public pages |

### Tags injected

```html
<!-- Primary -->
<title>Page Title | Unithink School</title>
<meta name="description" content="..." />
<meta name="keywords" content="..." />
<meta name="robots" content="index, follow" />   <!-- noindex, nofollow if noIndex=true -->
<link rel="canonical" href="https://www.unithinkschool.com/path" />

<!-- Open Graph -->
<meta property="og:type" content="website" />
<meta property="og:title" content="..." />
<meta property="og:description" content="..." />
<meta property="og:image" content="https://www.unithinkschool.com/og-image.jpg" />
<meta property="og:image:alt" content="..." />
<meta property="og:image:width" content="1200" />
<meta property="og:image:height" content="630" />
<meta property="og:url" content="https://www.unithinkschool.com/path" />
<meta property="og:site_name" content="Unithink School" />
<meta property="og:locale" content="en_IN" />

<!-- Twitter Card -->
<meta name="twitter:card" content="summary_large_image" />
<meta name="twitter:site" content="@unithinkschool" />
<meta name="twitter:title" content="..." />
<meta name="twitter:description" content="..." />
<meta name="twitter:image" content="..." />
<meta name="twitter:image:alt" content="..." />

<!-- JSON-LD (one <script> per schema object) -->
<script type="application/ld+json">{ ... }</script>
```

### Usage example

```tsx
<SEO
  title="Corporate AI Training India | AI Workshops"
  description="Custom corporate AI training for teams. Build automation and AI agents on real data."
  keywords="corporate AI training India, AI automation workshop"
  canonical="/corporate"
  jsonLd={[breadcrumbSchema([...]), courseSchema(...)]}
/>
```

---

## JSON-LD Schemas

All schema helpers are exported from `src/components/SEO.tsx`.

### Static schemas (pre-built objects)

#### `organizationSchema`
Type: `EducationalOrganization`
Used on: Home, About, SuccessStories
Includes: name, logo, address (Ahmedabad), contact point, social profiles

#### `localBusinessSchema`
Type: `LocalBusiness + EducationalOrganization`
Used on: Home, Contact
Includes: geo coordinates, opening hours, price range, email, phone

#### `webSiteSchema`
Type: `WebSite`
Used on: Home only
Includes: SearchAction with URL template for sitelinks search box

---

### Schema factory functions

#### `breadcrumbSchema(items)`

```ts
breadcrumbSchema([
  { name: 'Home', url: 'https://www.unithinkschool.com' },
  { name: 'Corporate', url: 'https://www.unithinkschool.com/corporate' },
])
// → BreadcrumbList with ListItem positions
```

Used on: every page except Home (which is the root).

#### `faqSchema(faqs)`

```ts
faqSchema([{ question: 'Q?', answer: 'A.' }, ...])
// → FAQPage with Question/Answer entities
```

Used on: Home, WorkshopsHub, Corporate, Students, Faculty, AIMentor.

#### `courseSchema(name, description, provider, options?)`

```ts
courseSchema(
  'Corporate AI Training Workshop',
  'Description...',
  'Unithink School',
  {
    url: 'https://www.unithinkschool.com/corporate',
    educationalLevel: 'Intermediate',
    teaches: ['AI Automation', 'n8n Workflows'],
    courseMode: 'blended',
    offers: { price: '1500', priceCurrency: 'INR' }
  }
)
// → Course with optional CourseInstance and Offer
```

Used on: Corporate, Students, Faculty.

---

## Schema coverage per page

| Page | Schemas |
|---|---|
| `/` | Organization, LocalBusiness, WebSite, FAQPage |
| `/ai-workshops` | BreadcrumbList, FAQPage |
| `/corporate` | BreadcrumbList, Course, FAQPage |
| `/students` | BreadcrumbList, Course, FAQPage |
| `/faculty` | BreadcrumbList, Course, FAQPage |
| `/about` | BreadcrumbList, Organization |
| `/ai-mentor` | BreadcrumbList, Service (with OfferCatalog), FAQPage |
| `/our-work` | BreadcrumbList, Organization |
| `/contact` | BreadcrumbList, LocalBusiness |
| `/privacy` | — (noIndex) |
| `/terms` | — (noIndex) |
| `/404` | — (noIndex) |

---

## noIndex pages

These pages are excluded from search engine indexing via `noIndex` prop:

- `/privacy` — Privacy Policy
- `/terms` — Terms of Service
- `/404` — Not Found page

These render `<meta name="robots" content="noindex, nofollow" />` and are excluded from `sitemap.xml`.

---

## Sitemap

**File:** `public/sitemap.xml` (static, served directly by Netlify)

| URL | Priority | Changefreq |
|---|---|---|
| `/` | 1.0 | weekly |
| `/corporate` | 0.9 | monthly |
| `/students` | 0.9 | monthly |
| `/faculty` | 0.9 | monthly |
| `/ai-workshops` | 0.8 | monthly |
| `/ai-mentor` | 0.8 | monthly |
| `/about` | 0.7 | monthly |
| `/our-work` | 0.7 | monthly |
| `/contact` | 0.6 | yearly |
| `/faq` | 0.5 | monthly |

Update `sitemap.xml` manually whenever a new public route is added.

---

## robots.txt

**File:** `public/robots.txt`

```
User-agent: *
Allow: /

Sitemap: https://www.unithinkschool.com/sitemap.xml
```

All bots allowed. Sitemap URL declared for automatic discovery.

---

## OG Image

**File:** `public/og-image.jpg` — must be **1200×630px**

This is the default image used across all Open Graph and Twitter Card previews. To use a page-specific image, pass `ogImage="/custom-og.jpg"` to the `<SEO>` component.

Currently a single shared image is used site-wide. Replace `public/og-image.jpg` with the actual branded image before launch.

---

## Keyword strategy per page

| Page | Target intent |
|---|---|
| Home | Brand + generic AI training India |
| Corporate | B2B: teams, L&D, efficiency, automation |
| Students | Student placement, portfolio, engineering colleges |
| Faculty | AICTE, FDP, NEP 2020, NAAC, college educators |
| AI Mentor | Beginners, roadmap, career guidance, affordable |
| Our Work | Trust/proof: case studies, outcomes, results |
| Contact | Bottom-funnel: book, enquire, get quote |

---

## What to update before launch

1. **`public/og-image.jpg`** — replace placeholder with real 1200×630 branded image
2. **`SITE_URL` in SEO.tsx** — currently `https://www.unithinkschool.com`, confirm domain is correct
3. **`twitter:site`** — currently `@unithinkschool`, confirm Twitter/X handle
4. **LinkedIn/Instagram URLs** in `organizationSchema.sameAs` — confirm handles
5. **`localBusinessSchema.geo`** — confirm exact lat/long for Ahmedabad office
6. **Submit sitemap** to Google Search Console after first deployment: `https://www.unithinkschool.com/sitemap.xml`
