# EdgeZen Labs — UI Implementation Plan

**Source of truth:** `EDGEZENLABS_UI_UX_REVIEW.md`  
**Started:** June 29, 2026  
**Status:** In progress

---

## Phase Overview

| Phase | Focus | Status |
|-------|--------|--------|
| 1 | Design System Foundation | ✅ Complete |
| 2 | Global Layout | ✅ Complete |
| 3 | Home Page | ✅ Complete |
| 4 | Remaining Pages | ✅ Complete |
| 5 | Components | ⏳ Pending |
| 6 | Motion | ⏳ Pending |
| 7 | Performance | ⏳ Pending |
| 8 | SEO | ⏳ Pending |
| 9 | Accessibility | ⏳ Pending |
| 10 | Final Polish | ⏳ Pending |

---

## Phase 1 — Design System Foundation ✅

**Goal:** Tokens, typography, spacing, shadows, motion utilities, dark mode, theme toggle, a11y base — **no page redesigns**.

### Completed

- [x] Expanded CSS design tokens in `src/index.css`
- [x] Tailwind config extended to consume tokens
- [x] `ThemeProvider`, `ThemeToggle`, `SkipLink`, `PageMain`
- [x] `prefers-reduced-motion` global overrides
- [x] Build + lint verified

---

## Phase 2 — Global Layout ✅

**Goal:** Navbar, Footer, PageLayout, mobile nav, breadcrumbs, section headers, global CTA, legal pages.

### Completed

- [x] `PageLayout`, `SectionHeader`, `GlobalCTA`, `Breadcrumbs`
- [x] Navbar + Footer redesign, legal pages
- [x] Centralized `src/content/navigation.ts`
- [x] Build + lint verified

---

## Phase 3 — Home Page ✅

**Goal:** Premium hero, trust, testimonials, case study, no iframes, scroll motion.

### Completed

- [x] Full home redesign with marketing components
- [x] `Reveal`, centralized `src/content/home.ts` + `products.ts`
- [x] No iframe previews on home
- [x] Build + lint verified

---

## Phase 4 — Remaining Pages ✅

**Goal:** Align About, Services, Products, Websites, Technologies, Contact, and Briktra with the design system.

### Completed

- [x] `PageHero` + `PageCTA` layout components
- [x] Content layer: `websites.ts`, `about.ts`, `services.ts`, `technologies.ts`, `products-detail.ts`
- [x] `ProductDetailSection` + `WebsiteShowcaseCard` marketing components
- [x] About — honest stats, PageHero, Reveal, SectionHeader, PageCTA, SEO
- [x] Services — shared content, process phases with unique copy, SEO
- [x] Products — 6 product lines (fixed count), shared detail data, hash scroll
- [x] Websites — iframe previews removed, gradient mockups, SEO
- [x] Technologies — shared stack data, Reveal cards, SEO
- [x] Contact — privacy checkbox, autocomplete, Label/Checkbox, SEO
- [x] Briktra — Reveal on hero + platform features (light alignment)
- [x] `home.ts` re-exports `homeWebsites` from `websites.ts`
- [x] Build + lint verified

### Files Changed

- `src/components/layout/PageHero.tsx`, `PageCTA.tsx`
- `src/components/marketing/ProductDetailSection.tsx`, `WebsiteShowcaseCard.tsx`
- `src/content/websites.ts`, `about.ts`, `services.ts`, `technologies.ts`, `products-detail.ts`
- `src/content/home.ts`
- `src/pages/About.tsx`, `Services.tsx`, `Products.tsx`, `Websites.tsx`, `Technologies.tsx`, `Contact.tsx`, `BriktraApp.tsx`

---

## Phase 5 — Components (Next)

- [ ] Button variants audit
- [ ] Card patterns
- [ ] Form field consistency
- [ ] Shared marketing primitives

---

## Phase 6–10

See `EDGEZENLABS_UI_UX_REVIEW.md` Section 19 (Roadmap) and Section 20 (Checklist).

---

## Commit Log

| Phase | Commit | Date |
|-------|--------|------|
| 1 | `feat(design-system): Phase 1 foundation — tokens, dark mode, a11y base` | 2026-06-29 |
| 2 | `feat(layout): Phase 2 global layout — nav, footer, PageLayout, legal` | 2026-06-29 |
| 3 | `feat(home): Phase 3 home redesign — hero, trust, motion, no iframes` | 2026-06-29 |
| 4 | `feat(pages): Phase 4 — align inner pages with design system` | 2026-06-29 |
