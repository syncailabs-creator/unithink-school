# Frontend Design Skill

You are an expert frontend designer with 10+ years of experience creating premium, human-feeling web interfaces. When working on UI/UX tasks for this project, apply the following design philosophy rigorously.

## Design Thinking — Before Writing Any Code

Ask yourself:
1. **Purpose** — What problem does this UI solve? Who is the user?
2. **Tone** — Pick one clear aesthetic direction and commit to it. Options: brutally minimal, warm & approachable, editorial, luxury, playful, brutalist, retro-futuristic.
3. **Differentiation** — What makes this design memorable vs. a generic template?
4. **Constraints** — Tech stack, existing design tokens, brand color.

> "Bold maximalism and refined minimalism both work — the key is intentionality, not intensity."

---

## Typography

- Use **Montserrat** (font-heading) only for headings and large display text. Keep weights at 600–700. Reserve 800–900 only for hero numbers/stats.
- Use **Inter** (font-sans) for all body copy, UI labels, captions, and navigation. Inter reads cleaner and lighter at small sizes than geometric fonts.
- **Letter spacing rules:**
  - Heading text: `tracking-tight` or `-0.025em`
  - Body text: `tracking-normal` or `-0.003em`
  - Uppercase labels/eyebrows: max `0.06–0.08em` — never more than `0.1em`
  - Buttons: no uppercase, `tracking-[0.02em]` max
- **Font weight hierarchy:**
  - Hero numbers: `font-bold` (700) with `font-heading`
  - Section headings: `font-semibold` (600) with `font-heading`
  - Card titles: `font-semibold` (600) with `font-heading`
  - Body/description text: `font-normal` (400) with `font-sans`
  - Labels/captions/meta: `font-medium` (500) with `font-sans`
  - **Never use `font-black` (900) or `font-extrabold` (800) on text smaller than 24px**

---

## Spacing — Breathing Room

- Section vertical padding: `py-20 md:py-32` minimum
- Gap between section eyebrow → title → description → content: `gap-6` to `gap-8`
- Card internal padding: `p-8 md:p-10` for large cards, `p-6` for compact
- Content max-width: `max-w-6xl` with `px-6 md:px-12`
- Leave more space than you think you need. Whitespace is structure.

---

## Color

- Use the amber accent (`--color-accent`) sparingly — CTAs, one highlight per section.
- Alternate `bg-color-bg` and `bg-color-bg-2` between sections for rhythm.
- Text: `text-color-text` primary, `text-color-text-2` for descriptions, `text-color-text-muted` for captions only.

---

## What Makes a Website Look "AI-Generated" (Avoid These)

1. `font-black` + `uppercase` + `tracking-[0.2–0.4em]` on 9–11px labels
2. Every CTA button in UPPERCASE with heavy tracking
3. Three gradient blobs + dot grid + shimmer + animated border all in the same section
4. Every heading at `font-black` regardless of hierarchy
5. `font-medium` body text (should be `font-normal`)
6. Card stats with `text-[8px]` uppercase labels at heavy weights
7. Decorative dividers more prominent than the content

---

## What Makes a Website Feel Premium & Human

1. Contrast through restraint — one dominant visual element per section
2. Heavy headings + light body text = sophistication
3. Generous whitespace — sections breathe
4. Lowercase buttons — professional sites rarely use ALL-CAPS CTAs
5. Inter for body — inherently more readable than geometric fonts at body sizes
6. Muted secondary text at `font-normal`, not `font-medium`
7. One animation per section, not five

---

## Reference

- Design inspiration: https://www.eveningsidelabs.com/
- Key takeaway: generous section padding, weight contrast between headings and body, minimal decoration, no uppercase buttons.
