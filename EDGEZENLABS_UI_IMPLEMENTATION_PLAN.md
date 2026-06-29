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
| 7 | Performance | ✅ Complete |
| 8 | SEO | ⏳ Pending |
| 9 | Accessibility | ⏳ Pending |
| 10 | Final Polish | ⏳ Pending |

---

## Phase 7 — Performance ✅

**Goal:** Code splitting, image optimization, dependency pruning, smaller initial payload.

### Completed

- [x] Lazy-loaded all routes with `React.lazy` + `Suspense` + `PageLoader`
- [x] Vite `manualChunks` — `react-vendor`, `motion`, `forms`, `radix`, `icons`, `helmet`
- [x] Removed unused `@tanstack/react-query` provider
- [x] Removed duplicate shadcn `Toaster` (kept Sonner only)
- [x] `OptimizedImage` + `webpSource()` — WebP with PNG/JPEG fallback
- [x] `scripts/optimize-images.mjs` — sharp WebP conversion (`npm run optimize-images`)
- [x] WebP assets: expeniqo (1284→27KB), cardclash (1573→122KB), gstledger (906→43KB), mockup, OG crop
- [x] Favicon/OG meta switched from 1.4MB PNG to `ez.png` (7KB)
- [x] Font weights trimmed (400–700 only)
- [x] Explicit `width`/`height` on key images (CLS)
- [x] Removed unused `holographic_intel` import from Briktra

### Build results (post-split)

| Chunk | Gzip |
|-------|------|
| `react-vendor` | 61 KB |
| `motion` | 46 KB |
| `index` (app shell) | 20 KB |
| `radix` | 21 KB |
| Home route (`Index` + layout) | ~13 KB |

**Estimated home-first-load JS gzip: ~172 KB** (down from ~223 KB monolith)

### Files Changed

- `vite.config.ts`, `src/App.tsx`, `package.json`
- `src/components/PageLoader.tsx`, `OptimizedImage.tsx`, `src/lib/images.ts`
- `scripts/optimize-images.mjs`, `public/*.webp`, `index.html`
- Image consumers: `ProductLogo`, `HomeHero`, `CaseStudyPreview`, `ProductDetailSection`, `Products`, `BriktraApp`

---

## Phase 8 — SEO (Next)

- [ ] Per-page JSON-LD
- [ ] Absolute OG URLs
- [ ] `BrowserRouter` migration
- [ ] Sitemap

---

## Commit Log

| Phase | Commit | Date |
|-------|--------|------|
| 1–6 | (see prior commits) | 2026-06-29 |
| 7 | `perf: Phase 7 — code split, WebP images, bundle prune` | 2026-06-29 |
