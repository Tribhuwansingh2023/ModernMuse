import { useState, useEffect, useCallback } from "react";
import { Link } from "react-router-dom";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { articles } from "@/data/articles";

export function CultureCarousel() {
  // Use all articles for the hero slider, not just culture
  const featured = articles.slice(0, 5);
  const [current, setCurrent] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [touchStart, setTouchStart] = useState<number | null>(null);

  const goTo = useCallback(
    (index: number) => {
      if (isTransitioning) return;
      setIsTransitioning(true);
      setCurrent(index);
      setTimeout(() => setIsTransitioning(false), 600);
    },
    [isTransitioning]
  );

  const next = useCallback(() => {
    goTo((current + 1) % featured.length);
  }, [current, featured.length, goTo]);

  const prev = useCallback(() => {
    goTo((current - 1 + featured.length) % featured.length);
  }, [current, featured.length, goTo]);

  useEffect(() => {
    const timer = setInterval(next, 35000);
    return () => clearInterval(timer);
  }, [next]);

  const handleTouchStart = (e: React.TouchEvent) => setTouchStart(e.touches[0].clientX);
  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStart === null) return;
    const diff = touchStart - e.changedTouches[0].clientX;
    if (Math.abs(diff) > 50) {
      diff > 0 ? next() : prev();
    }
    setTouchStart(null);
  };

  if (featured.length === 0) return null;

  const article = featured[current];

  return (
    <section className="relative">
      <div
        className="relative overflow-hidden"
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
      >
        <Link to={`/article/${article.slug}`} className="group block">
          <div className="relative h-[70vh] min-h-[500px] overflow-hidden">
            <img
              key={article.slug}
              src={article.image}
              alt={article.title}
              className="w-full h-full object-cover transition-all duration-700 group-hover:scale-[1.02]"
              style={{ animation: "carouselFadeIn 0.6s ease-out" }}
            />
            <div className="hero-overlay absolute inset-0" />

            {/* Arrows */}
            <button
              onClick={(e) => { e.preventDefault(); prev(); }}
              className="absolute left-4 top-1/2 -translate-y-1/2 z-10 p-2 rounded-full bg-background/20 backdrop-blur-sm text-primary-foreground/80 hover:bg-background/40 transition-all duration-200"
              aria-label="Previous"
            >
              <ChevronLeft size={24} />
            </button>
            <button
              onClick={(e) => { e.preventDefault(); next(); }}
              className="absolute right-4 top-1/2 -translate-y-1/2 z-10 p-2 rounded-full bg-background/20 backdrop-blur-sm text-primary-foreground/80 hover:bg-background/40 transition-all duration-200"
              aria-label="Next"
            >
              <ChevronRight size={24} />
            </button>

            {/* Content */}
            <div className="absolute inset-0 flex items-end">
              <div className="editorial-container w-full pb-16 md:pb-20">
                <div
                  className="max-w-2xl"
                  style={{ animation: "carouselSlideUp 0.6s ease-out" }}
                  key={`text-${article.slug}`}
                >
                  <span
                    className="category-badge mb-3 inline-block bg-accent/10 px-3 py-1 rounded-sm backdrop-blur-sm text-accent-foreground"
                    style={{ color: "hsl(var(--accent))" }}
                  >
                    {article.category}
                  </span>
                  <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-primary-foreground mb-4">
                    {article.title}
                  </h1>
                  <p className="text-base sm:text-lg text-primary-foreground/80 font-sans max-w-xl line-clamp-2 mb-3">
                    {article.excerpt}
                  </p>
                  <div className="flex items-center gap-3 text-sm text-primary-foreground/60 font-sans">
                    <span>{article.author}</span>
                    <span>·</span>
                    <span>{article.readTime} min read</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Dots — inside the hero image, bottom center */}
            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10 flex items-center gap-2">
              {featured.map((_, i) => (
                <button
                  key={i}
                  onClick={(e) => { e.preventDefault(); goTo(i); }}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    i === current
                      ? "w-6 bg-accent"
                      : "w-2 bg-primary-foreground/40 hover:bg-primary-foreground/60"
                  }`}
                  aria-label={`Go to slide ${i + 1}`}
                />
              ))}
            </div>
          </div>
        </Link>
      </div>
    </section>
  );
}
