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
| 5 | Components | ✅ Complete |
| 6 | Motion | ✅ Complete |
| 7 | Performance | ⏳ Pending |
| 8 | SEO | ⏳ Pending |
| 9 | Accessibility | ⏳ Pending |
| 10 | Final Polish | ⏳ Pending |

---

## Phase 6 — Motion ✅

**Goal:** Broader motion rollout, animated stats, page transitions, mobile nav stagger.

### Completed

- [x] `src/lib/motion.ts` — shared easing, stagger, and transition tokens
- [x] Enhanced `Reveal` — direction variants (`up`, `left`, `right`, `none`)
- [x] `AnimatedStat` — count-up for numeric stats on scroll (respects reduced motion)
- [x] `StaggerReveal` — staggered child reveals for grids/lists
- [x] `PageTransition` — subtle route enter animation via `PageMain`
- [x] `MobileNavMenu` — staggered slide-in for mobile sheet navigation
- [x] Sheet slide timing tuned for smoother open/close
- [x] Stat counters on home trust bar, case study metrics, About hero stats
- [x] Case study features + Briktra workflow/modules use Reveal/StaggerReveal
- [x] Legal pages wrapped with Reveal
- [x] Product detail sections alternate left/right reveal
- [x] Build + lint verified

### Files Changed

- `src/lib/motion.ts`
- `src/components/motion/AnimatedStat.tsx`, `StaggerReveal.tsx`, `PageTransition.tsx`
- `src/components/marketing/Reveal.tsx`, `StatCard.tsx`, `CaseStudyPreview.tsx`, `ProductDetailSection.tsx`
- `src/components/layout/MobileNavMenu.tsx`
- `src/components/PageMain.tsx`, `Navbar.tsx`, `ui/sheet.tsx`
- `src/pages/About.tsx`, `BriktraApp.tsx`, `legal/*`

---

## Phase 7 — Performance (Next)

- [ ] Code split routes (framer-motion, pages)
- [ ] Image optimization (WebP, dimensions, lazy load)
- [ ] Bundle prune (unused deps)
- [ ] Target bundle < 200KB gzip

---

## Phase 8–10

See `EDGEZENLABS_UI_UX_REVIEW.md` Section 19 (Roadmap) and Section 20 (Checklist).

---

## Commit Log

| Phase | Commit | Date |
|-------|--------|------|
| 1 | `feat(design-system): Phase 1 foundation — tokens, dark mode, a11y base` | 2026-06-29 |
| 2 | `feat(layout): Phase 2 global layout — nav, footer, PageLayout, legal` | 2026-06-29 |
| 3 | `feat(home): Phase 3 home redesign — hero, trust, motion, no iframes` | 2026-06-29 |
| 4 | `feat(pages): Phase 4 — align inner pages with design system` | 2026-06-29 |
| 5 | `feat(components): Phase 5 — buttons, cards, forms, marketing primitives` | 2026-06-29 |
| 6 | `feat(motion): Phase 6 — reveals, stat counters, page and nav transitions` | 2026-06-29 |
