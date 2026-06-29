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
| 6 | Motion | ⏳ Pending |
| 7 | Performance | ⏳ Pending |
| 8 | SEO | ⏳ Pending |
| 9 | Accessibility | ⏳ Pending |
| 10 | Final Polish | ⏳ Pending |

---

## Phase 5 — Components ✅

**Goal:** Standardize buttons, cards, forms, and shared marketing primitives across the site.

### Completed

- [x] Button variants: `primary`, `accent-outline`, token sizes (`lg`, `xl`)
- [x] Input/Textarea: `h-input`, `rounded-xl` defaults
- [x] Badge variants: `accent`, `muted` for tags
- [x] `MarketingCard` — interactive, accent-top, padding variants
- [x] `ProductLogo` — normalized logo container (Briktra-aware)
- [x] `BrowserChrome` — reusable browser mockup chrome
- [x] `StatCard`, `FeatureListItem`, `TechBadge`, `ServiceCard`
- [x] `ContactForm` — extracted with react-hook-form + zod validation
- [x] `ProductCard` refactored to use MarketingCard + ProductLogo
- [x] Sitewide CTA buttons migrated to `variant="primary"`
- [x] Removed unused `NavLink.tsx`
- [x] Build + lint verified

### Files Changed

- `src/components/ui/button.tsx`, `input.tsx`, `textarea.tsx`, `badge.tsx`
- `src/components/marketing/MarketingCard.tsx`, `ProductLogo.tsx`, `BrowserChrome.tsx`
- `src/components/marketing/StatCard.tsx`, `FeatureListItem.tsx`, `TechBadge.tsx`, `ServiceCard.tsx`, `ContactForm.tsx`
- `src/components/ProductCard.tsx`
- Pages + marketing components updated to use primitives

---

## Phase 6 — Motion (Next)

- [ ] Broader framer-motion rollout
- [ ] Stat counter animations
- [ ] Mobile menu transitions

---

## Phase 7–10

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
