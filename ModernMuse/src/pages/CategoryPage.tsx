import { useParams, Link } from "react-router-dom";
import { getArticlesByCategory, categories } from "@/data/articles";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { ArticleCard } from "@/components/ArticleCard";
import { FadeInOnScroll } from "@/components/FadeInOnScroll";

export default function CategoryPage() {
  const { name } = useParams<{ name: string }>();
  const categoryName = name ? name.charAt(0).toUpperCase() + name.slice(1) : "";
  const category = categories.find((c) => c.name.toLowerCase() === name?.toLowerCase());
  const articlesInCategory = getArticlesByCategory(categoryName);

  if (!category) {
    return (
      <div className="min-h-screen flex flex-col">
        <Header />
        <div className="flex-1 flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-4xl font-bold mb-4">Category Not Found</h1>
            <Link to="/" className="text-accent hover:underline font-sans">← Back to Home</Link>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-1">
        {/* Category Header */}
        <section className="border-b border-border py-16 md:py-20">
          <div className="editorial-container">
            <FadeInOnScroll>
              <span className="category-badge mb-2">Category</span>
              <h1 className="text-4xl md:text-5xl font-bold mb-4">{category.name}</h1>
              <p className="text-lg text-muted-foreground font-sans max-w-2xl">{category.description}</p>
            </FadeInOnScroll>
          </div>
        </section>

        {/* Articles Grid */}
        <section className="py-12 md:py-16">
          <div className="editorial-container">
            {articlesInCategory.length === 0 ? (
              <p className="text-muted-foreground font-sans text-center py-12">No articles in this category yet.</p>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {articlesInCategory.map((article, i) => (
                  <FadeInOnScroll key={article.slug} delay={i * 100}>
                    <ArticleCard article={article} />
                  </FadeInOnScroll>
                ))}
              </div>
            )}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
