import { articles } from "@/data/articles";
import { Header } from "@/components/Header";
import { CultureCarousel } from "@/components/CultureCarousel";
import { EditorsPicks } from "@/components/EditorsPicks";
import { ArticleCard } from "@/components/ArticleCard";
import { Footer } from "@/components/Footer";
import { FadeInOnScroll } from "@/components/FadeInOnScroll";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      {/* Hero Slider — directly below header */}
      <CultureCarousel />

      {/* Editors' Picks */}
      <EditorsPicks />

      {/* Latest Articles */}
      <section className="py-16">
        <div className="editorial-container">
          <FadeInOnScroll>
            <div className="mb-10">
              <span className="text-xs font-semibold tracking-widest uppercase text-accent font-sans">Latest</span>
              <h2 className="text-2xl md:text-3xl font-bold mt-1">Latest Articles</h2>
            </div>
          </FadeInOnScroll>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
            <div className="lg:col-span-2 space-y-8">
              {articles.slice(0, 4).map((article, i) => (
                <FadeInOnScroll key={article.slug} delay={i * 100}>
                  <ArticleCard article={article} variant="horizontal" />
                </FadeInOnScroll>
              ))}
            </div>

            <aside className="lg:col-span-1">
              <div className="lg:sticky lg:top-24 space-y-8">
                <FadeInOnScroll>
                  <div className="border border-border rounded-sm p-6">
                    <h3 className="text-sm font-semibold tracking-widest uppercase mb-4 font-sans">Trending</h3>
                    <div className="space-y-4">
                      {articles.slice(2, 6).map((article, i) => (
                        <a key={article.slug} href={`/article/${article.slug}`} className="flex gap-3 group">
                          <span className="text-2xl font-bold text-muted-foreground/30 font-serif flex-shrink-0 w-8">
                            {String(i + 1).padStart(2, "0")}
                          </span>
                          <div className="min-w-0">
                            <p className="text-sm font-medium leading-snug group-hover:text-accent transition-colors line-clamp-2">
                              {article.title}
                            </p>
                            <p className="text-xs text-muted-foreground mt-1 font-sans">{article.readTime} min read</p>
                          </div>
                        </a>
                      ))}
                    </div>
                  </div>
                </FadeInOnScroll>

                <FadeInOnScroll delay={200}>
                  <div className="border border-border rounded-sm p-6 bg-card">
                    <h3 className="text-sm font-semibold tracking-widest uppercase mb-3 font-sans">Newsletter</h3>
                    <p className="text-sm text-muted-foreground font-sans mb-4">
                      Get the best stories delivered to your inbox every week.
                    </p>
                    <input
                      type="email"
                      placeholder="your@email.com"
                      className="w-full rounded-sm border border-border bg-background px-3 py-2 text-sm font-sans outline-none focus:ring-1 focus:ring-accent mb-3"
                    />
                    <button className="w-full bg-foreground text-background font-sans text-sm font-medium py-2 rounded-sm hover:opacity-90 transition-opacity">
                      Subscribe
                    </button>
                  </div>
                </FadeInOnScroll>
              </div>
            </aside>
          </div>
        </div>
      </section>

      {/* More Articles Grid */}
      <section className="py-16 border-t border-border">
        <div className="editorial-container">
          <FadeInOnScroll>
            <h2 className="text-2xl md:text-3xl font-bold mb-10">More to Explore</h2>
          </FadeInOnScroll>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {articles.slice(3).map((article, i) => (
              <FadeInOnScroll key={article.slug} delay={i * 100}>
                <ArticleCard article={article} />
              </FadeInOnScroll>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
