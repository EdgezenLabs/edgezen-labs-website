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
| 8 | SEO | ✅ Complete |
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

## Phase 8 — SEO ✅

**Goal:** Clean URLs, structured data, crawlability, and social meta.

### Completed

- [x] `HashRouter` → `BrowserRouter` with GitHub Pages SPA fallback (`public/404.html` + `index.html` recovery script)
- [x] `src/lib/seo.ts` — `SITE_URL`, `absoluteUrl`, JSON-LD schema builders
- [x] `SEO.tsx` — absolute canonical/OG/Twitter URLs, per-page `WebPage` JSON-LD, `noindex` support
- [x] `SiteStructuredData` — global `Organization` + `WebSite` JSON-LD in app shell
- [x] SEO added to Privacy, Terms, NotFound (`noindex` on 404)
- [x] `scripts/generate-sitemap.mjs` — runs before build; `public/sitemap.xml`
- [x] `robots.txt` — `Sitemap:` directive
- [x] Products sidebar links fixed (`/products#slug` via `Link`)
- [x] Static `index.html` OG/Twitter images use absolute URLs

### Files Changed

- `src/App.tsx`, `src/components/SEO.tsx`, `src/components/SiteStructuredData.tsx`, `src/lib/seo.ts`
- `src/pages/Products.tsx`, `src/pages/NotFound.tsx`, `src/pages/legal/Privacy.tsx`, `src/pages/legal/Terms.tsx`
- `index.html`, `public/404.html`, `public/robots.txt`, `public/sitemap.xml`
- `scripts/generate-sitemap.mjs`, `package.json`
- Removed legacy root `404.html` (replaced by `public/404.html` copied to `dist`)

---

## Phase 9 — Accessibility (Next)

- [ ] WCAG 2.2 AA audit and fixes

---

## Commit Log

| Phase | Commit | Date |
|-------|--------|------|
| 1–6 | (see prior commits) | 2026-06-29 |
| 7 | `perf: Phase 7 — code split, WebP images, bundle prune` | 2026-06-29 |
| 8 | `feat(seo): Phase 8 — BrowserRouter, JSON-LD, sitemap` | 2026-06-29 |
