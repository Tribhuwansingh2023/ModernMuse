export function ArticleCardSkeleton() {
  return (
    <div className="article-card">
      <div className="skeleton-shimmer h-52 w-full" />
      <div className="p-5 space-y-3">
        <div className="skeleton-shimmer h-3 w-16 rounded" />
        <div className="skeleton-shimmer h-5 w-3/4 rounded" />
        <div className="skeleton-shimmer h-4 w-full rounded" />
        <div className="skeleton-shimmer h-4 w-2/3 rounded" />
        <div className="flex justify-between mt-4">
          <div className="skeleton-shimmer h-3 w-24 rounded" />
          <div className="skeleton-shimmer h-3 w-12 rounded" />
        </div>
      </div>
    </div>
  );
}

export function HeroSkeleton() {
  return (
    <div className="relative h-[70vh] min-h-[500px] skeleton-shimmer">
      <div className="absolute inset-0 flex items-end">
        <div className="editorial-container w-full pb-16">
          <div className="max-w-2xl space-y-4">
            <div className="h-6 w-20 rounded bg-muted" />
            <div className="h-12 w-full rounded bg-muted" />
            <div className="h-12 w-3/4 rounded bg-muted" />
            <div className="h-5 w-2/3 rounded bg-muted" />
          </div>
        </div>
      </div>
    </div>
  );
}
