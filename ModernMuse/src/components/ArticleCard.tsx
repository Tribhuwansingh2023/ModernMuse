import { useState } from "react";
import { Link } from "react-router-dom";
import { Bookmark, Heart } from "lucide-react";
import { VerificationBadge } from "@/components/VerificationBadge";
import type { Article } from "@/data/articles";

interface ArticleCardProps {
  article: Article;
  variant?: "default" | "horizontal";
}

export function ArticleCard({ article, variant = "default" }: ArticleCardProps) {
  const [bookmarked, setBookmarked] = useState(false);
  const [liked, setLiked] = useState(false);
  const [likeCount, setLikeCount] = useState(Math.floor(Math.random() * 50) + 10);

  const handleLike = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setLiked(!liked);
    setLikeCount((c) => (liked ? c - 1 : c + 1));
  };

  const handleBookmark = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setBookmarked(!bookmarked);
  };

  if (variant === "horizontal") {
    return (
      <article className="article-card flex flex-col sm:flex-row gap-0">
        <Link to={`/article/${article.slug}`} className="article-card-image sm:w-1/3 flex-shrink-0">
          <img src={article.image} alt={article.title} className="w-full h-48 sm:h-full object-cover" loading="lazy" />
        </Link>
        <div className="flex-1 p-5 flex flex-col justify-between">
          <div>
            <span className="category-badge mb-2">{article.category}</span>
            <h3 className="text-lg font-bold leading-snug mb-2">
              <Link to={`/article/${article.slug}`} className="hover:text-accent transition-colors">{article.title}</Link>
            </h3>
            <p className="text-sm text-muted-foreground font-sans line-clamp-2">{article.excerpt}</p>
          </div>
          <div className="flex items-center justify-between mt-4 text-xs text-muted-foreground font-sans">
            <div className="flex items-center gap-2">
              <div className="flex items-center gap-1">
                <span>{article.author}</span>
                {article.isAuthorVerified && (
                  <VerificationBadge
                    isVerified={article.isAuthorVerified}
                    verificationDate={article.authorVerificationDate}
                    size="sm"
                  />
                )}
              </div>
              <span>·</span>
              <span>{article.readTime} min</span>
            </div>
            <div className="flex items-center gap-2">
              <button onClick={handleLike} className={`btn-like flex items-center gap-1 ${liked ? "liked text-accent" : ""}`}>
                <Heart size={14} fill={liked ? "currentColor" : "none"} />
                <span>{likeCount}</span>
              </button>
              <button onClick={handleBookmark} className="btn-like">
                <Bookmark size={14} fill={bookmarked ? "currentColor" : "none"} className={bookmarked ? "text-accent" : ""} />
              </button>
            </div>
          </div>
        </div>
      </article>
    );
  }

  return (
    <article className="article-card">
      <Link to={`/article/${article.slug}`} className="article-card-image block">
        <img src={article.image} alt={article.title} className="w-full h-52 object-cover" loading="lazy" />
      </Link>
      <div className="p-5">
        <span className="category-badge mb-2">{article.category}</span>
        <h3 className="text-lg font-bold leading-snug mb-2">
          <Link to={`/article/${article.slug}`} className="hover:text-accent transition-colors">{article.title}</Link>
        </h3>
        <p className="text-sm text-muted-foreground font-sans line-clamp-3">{article.excerpt}</p>
        <div className="flex items-center justify-between mt-4 text-xs text-muted-foreground font-sans">
          <div className="flex items-center gap-2">
            <div className="flex items-center gap-1">
              <span>{article.author}</span>
              {article.isAuthorVerified && (
                <VerificationBadge
                  isVerified={article.isAuthorVerified}
                  verificationDate={article.authorVerificationDate}
                  size="sm"
                />
              )}
            </div>
            <span>·</span>
            <span>{article.readTime} min</span>
          </div>
          <div className="flex items-center gap-2">
            <button onClick={handleLike} className={`btn-like flex items-center gap-1 ${liked ? "liked text-accent" : ""}`}>
              <Heart size={14} fill={liked ? "currentColor" : "none"} />
              <span>{likeCount}</span>
            </button>
            <button onClick={handleBookmark} className="btn-like">
              <Bookmark size={14} fill={bookmarked ? "currentColor" : "none"} className={bookmarked ? "text-accent" : ""} />
            </button>
          </div>
        </div>
      </div>
    </article>
  );
}
