import { Link } from "react-router-dom";
import { articles } from "@/data/articles";

export function Hero() {
  const featured = articles[0];

  return (
    <section className="relative h-[70vh] min-h-[500px] overflow-hidden">
      <img
        src={featured.image}
        alt={featured.title}
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="hero-overlay absolute inset-0" />
      <div className="absolute inset-0 flex items-end">
        <div className="editorial-container w-full pb-12 md:pb-16">
          <div className="max-w-2xl animate-fade-in">
            <span className="category-badge mb-3 inline-block bg-accent/10 px-3 py-1 rounded-sm text-accent-foreground backdrop-blur-sm" style={{ color: 'hsl(var(--accent))' }}>
              {featured.category}
            </span>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-primary-foreground mb-4">
              <Link to={`/article/${featured.slug}`} className="hover:underline decoration-accent underline-offset-4">
                {featured.title}
              </Link>
            </h1>
            <p className="text-base sm:text-lg text-primary-foreground/80 mb-4 max-w-xl font-sans">
              {featured.excerpt}
            </p>
            <div className="flex items-center gap-3 text-sm text-primary-foreground/60 font-sans">
              <span>{featured.author}</span>
              <span>·</span>
              <span>{featured.readTime} min read</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
