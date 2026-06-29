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
| 3 | Home Page | ⏳ Pending |
| 4 | Remaining Pages | ⏳ Pending |
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
  - Color surfaces (light + dark)
  - Spacing scale (8pt) + section spacing
  - Typography fluid scale (`--text-hero` through `--text-xs`)
  - Radius scale (`sm` → `2xl`)
  - Shadow tokens (`xs` → `glow`)
  - Motion durations + easing curves
  - Component heights (buttons, inputs, nav)
  - Container width tokens
- [x] Tailwind config extended to consume tokens
  - `fontSize`, `spacing`, `maxWidth`, `borderRadius`, `boxShadow`
  - `height` tokens including `h-13` → `--btn-height-lg`
  - `animate-fade-in`, `animate-fade-in-up` keyframes
- [x] Global component utilities: `.section-y`, `.eyebrow`, `.text-hero`, `.transition-default`
- [x] `prefers-reduced-motion` global overrides
- [x] `ThemeProvider` (`next-themes`) wired in `App.tsx`
- [x] `ThemeToggle` component in navbar (desktop + mobile)
- [x] `SkipLink` for WCAG bypass blocks
- [x] `PageMain` landmark (`#main-content`) on all pages
- [x] Navbar a11y: `aria-expanded`, `aria-controls`, improved labels
- [x] `index.html` theme-color + color-scheme meta
- [x] 404 page: dev-only console.error, design tokens, accessible CTA
- [x] Fixed broken `animate-fade-in` (Briktra page)

### Files Changed

- `src/index.css`
- `tailwind.config.ts`
- `src/App.tsx`
- `src/components/theme-provider.tsx` (new)
- `src/components/ThemeToggle.tsx` (new)
- `src/components/SkipLink.tsx` (new)
- `src/components/PageMain.tsx` (new)
- `src/components/Navbar.tsx`
- `src/pages/*.tsx` (PageMain wrapper)
- `index.html`

### Verification

- [x] `npm run build` passes
- [x] `npm run lint` passes (0 errors)
- [x] Dark mode toggle works
- [x] Skip link focuses main content
- [x] Reduced motion respected

---

## Phase 2 — Global Layout ✅

**Goal:** Navbar, Footer, PageLayout, mobile nav, breadcrumbs, section headers, global CTA, legal pages.

### Completed

- [x] `PageLayout` component (Navbar + optional Breadcrumbs + PageMain + Footer)
- [x] `SectionHeader` component
- [x] `GlobalCTA` component (used in Footer)
- [x] `Breadcrumbs` component with route labels
- [x] Navbar redesign: grouped Products dropdown, 4 primary links, wordmark
- [x] Mobile navigation via shadcn `Sheet` (focus trap via Radix)
- [x] Footer redesign: legal links, GitHub, GlobalCTA, Briktra in products
- [x] Centralized navigation data in `src/content/navigation.ts`
- [x] Legal pages: `/legal/privacy`, `/legal/terms`
- [x] All pages migrated to `PageLayout`

### Files Changed

- `src/components/Navbar.tsx`
- `src/components/Footer.tsx`
- `src/components/layout/*`
- `src/content/navigation.ts`
- `src/pages/legal/*`
- `src/pages/*.tsx`
- `src/App.tsx`

### Verification

- [x] `npm run build` passes
- [x] `npm run lint` passes (0 errors)

---

## Phase 3 — Home Page (Next)

- [ ] Redesign Navbar (grouped IA, fewer top-level items)
- [ ] Redesign Footer (legal links, social, newsletter)
- [ ] `PageLayout` component
- [ ] Mobile Sheet navigation + focus trap
- [ ] Breadcrumbs
- [ ] `SectionHeader` component
- [ ] Global CTA patterns

---

## Phase 3 — Home Page (Planned)

- [ ] Premium hero redesign
- [ ] Client logo marquee
- [ ] Replace iframe previews with screenshots
- [ ] Testimonials + case study preview
- [ ] Trust indicators
- [ ] Scroll animations (framer-motion)

---

## Phase 4–10

See `EDGEZENLABS_UI_UX_REVIEW.md` Section 19 (Roadmap) and Section 20 (Checklist).

---

## Commit Log

| Phase | Commit | Date |
|-------|--------|------|
| 1 | `feat(design-system): Phase 1 foundation — tokens, dark mode, a11y base` | 2026-06-29 |
| 2 | `feat(layout): Phase 2 global layout — nav, footer, PageLayout, legal` | 2026-06-29 |
