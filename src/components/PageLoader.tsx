/** Lightweight route-level fallback — no external deps */
const PageLoader = () => (
  <div className="flex min-h-[50vh] items-center justify-center" role="status" aria-live="polite" aria-label="Loading page">
    <div className="flex flex-col items-center gap-4">
      <div className="h-8 w-8 animate-spin rounded-full border-2 border-border border-t-accent" />
      <p className="text-sm text-muted-foreground">Loading…</p>
    </div>
  </div>
);

export default PageLoader;
