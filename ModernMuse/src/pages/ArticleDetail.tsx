import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { ArrowLeft, Share2, Twitter, Facebook, Bookmark, Heart } from "lucide-react";
import { getArticleBySlug } from "@/data/articles";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { FadeInOnScroll } from "@/components/FadeInOnScroll";

export default function ArticleDetail() {
  const { slug } = useParams<{ slug: string }>();
  const article = getArticleBySlug(slug || "");
  const [progress, setProgress] = useState(0);
  const [bookmarked, setBookmarked] = useState(false);
  const [liked, setLiked] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrolled = window.scrollY;
      setProgress(scrollHeight > 0 ? (scrolled / scrollHeight) * 100 : 0);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  if (!article) {
    return (
      <div className="min-h-screen flex flex-col">
        <Header />
        <div className="flex-1 flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-4xl font-bold mb-4">Article Not Found</h1>
            <Link to="/" className="text-accent hover:underline font-sans">← Back to Home</Link>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  const formattedDate = new Date(article.date).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <div className="min-h-screen flex flex-col">
      {/* Reading Progress */}
      <div className="reading-progress" style={{ width: `${progress}%` }} />

      <Header />

      <main className="flex-1">
        {/* Cover Image */}
        <div className="relative h-[50vh] min-h-[400px] overflow-hidden">
          <img src={article.image} alt={article.title} className="w-full h-full object-cover" />
          <div className="hero-overlay absolute inset-0" />
        </div>

        <article className="editorial-container py-10 md:py-16">
          <div className="max-w-3xl mx-auto">
            <FadeInOnScroll>
              <Link to="/" className="inline-flex items-center gap-1 text-sm text-muted-foreground hover:text-foreground transition-colors mb-8 font-sans">
                <ArrowLeft size={14} />
                Back to Home
              </Link>

              <div className="mb-8">
                <span className="category-badge mb-3 inline-block">{article.category}</span>
                <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight mb-4">
                  {article.title}
                </h1>
                <p className="text-lg text-muted-foreground font-sans mb-6">{article.excerpt}</p>

                <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground font-sans pb-6 border-b border-border">
                  <div>
                    <span className="font-medium text-foreground">{article.author}</span>
                    <span className="block text-xs">{article.authorRole}</span>
                  </div>
                  <span>·</span>
                  <span>{formattedDate}</span>
                  <span>·</span>
                  <span>{article.readTime} min read</span>
                </div>
              </div>
            </FadeInOnScroll>

            {/* Share & Actions Bar */}
            <FadeInOnScroll delay={100}>
              <div className="flex items-center gap-3 mb-10 py-3">
                <span className="text-xs font-semibold tracking-widest uppercase text-muted-foreground font-sans mr-2">Share</span>
                <button className="p-2 rounded-sm border border-border text-muted-foreground hover:text-foreground hover:border-foreground transition-all" aria-label="Share">
                  <Share2 size={14} />
                </button>
                <button className="p-2 rounded-sm border border-border text-muted-foreground hover:text-foreground hover:border-foreground transition-all" aria-label="Twitter">
                  <Twitter size={14} />
                </button>
                <button className="p-2 rounded-sm border border-border text-muted-foreground hover:text-foreground hover:border-foreground transition-all" aria-label="Facebook">
                  <Facebook size={14} />
                </button>
                <div className="flex-1" />
                <button onClick={() => setLiked(!liked)} className={`btn-like p-2 rounded-sm border border-border transition-all ${liked ? "liked text-accent border-accent" : "text-muted-foreground hover:text-foreground hover:border-foreground"}`}>
                  <Heart size={14} fill={liked ? "currentColor" : "none"} />
                </button>
                <button onClick={() => setBookmarked(!bookmarked)} className={`btn-like p-2 rounded-sm border border-border transition-all ${bookmarked ? "text-accent border-accent" : "text-muted-foreground hover:text-foreground hover:border-foreground"}`}>
                  <Bookmark size={14} fill={bookmarked ? "currentColor" : "none"} />
                </button>
              </div>
            </FadeInOnScroll>

            {/* Article Content */}
            <FadeInOnScroll delay={200}>
              <div className="prose prose-lg max-w-none font-sans">
                {article.content.split("\n\n").map((paragraph, i) => (
                  <p key={i} className="text-foreground/85 leading-relaxed mb-6 text-base md:text-lg">
                    {paragraph}
                  </p>
                ))}
              </div>
            </FadeInOnScroll>
          </div>
        </article>
      </main>

      <Footer />
    </div>
  );
}
