export default function Loading() {
  return (
    <main className="page-shell" aria-busy="true" aria-label="Loading page">
      <div className="skeleton skeleton-heading" />
      <div className="stats-grid" aria-hidden="true">
        <div className="card skeleton skeleton-card" />
        <div className="card skeleton skeleton-card" />
        <div className="card skeleton skeleton-card" />
      </div>
      <div className="card skeleton skeleton-panel" aria-hidden="true" />
      <span className="sr-only">Loading your homeschool records…</span>
    </main>
  );
}
