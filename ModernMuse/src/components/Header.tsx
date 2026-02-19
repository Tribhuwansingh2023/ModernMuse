import { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import { Search, X, Moon, Sun, Menu } from "lucide-react";
import { useTheme } from "@/hooks/useTheme";
import { searchArticles, type Article } from "@/data/articles";
import { AuthModal } from "./AuthModal";

const navLinks = [
  { name: "Home", path: "/" },
  { name: "Tech", path: "/category/tech" },
  { name: "Culture", path: "/category/culture" },
  { name: "Lifestyle", path: "/category/lifestyle" },
  { name: "Business", path: "/category/business" },
  { name: "Travel", path: "/category/travel" },
  { name: "About", path: "/about" },
  { name: "Contact", path: "/contact" },
];

export function Header() {
  const { isDark, toggle } = useTheme();
  const [searchOpen, setSearchOpen] = useState(false);
  const [query, setQuery] = useState("");
  const [results, setResults] = useState<Article[]>([]);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [authModalOpen, setAuthModalOpen] = useState(false);
  const searchRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (query.length > 1) {
      setResults(searchArticles(query));
    } else {
      setResults([]);
    }
  }, [query]);

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (searchRef.current && !searchRef.current.contains(e.target as Node)) {
        setSearchOpen(false);
        setQuery("");
      }
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  return (
    <>
      <header className="sticky top-0 z-40 border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/80">
        <div className="editorial-container">
          <div className="flex h-16 items-center justify-between">
            {/* Logo */}
            <Link to="/" className="flex items-center gap-2 flex-shrink-0">
              <span className="font-serif text-2xl font-bold tracking-tight text-foreground">
                Modern<span className="text-accent">Muse</span>
              </span>
            </Link>

            {/* Desktop Nav */}
            <nav className="hidden lg:flex items-center gap-6">
              {navLinks.map((link) => (
                <Link key={link.name} to={link.path} className="nav-link text-sm">
                  {link.name}
                </Link>
              ))}
            </nav>

            {/* Actions */}
            <div className="flex items-center gap-2">
              {/* Search */}
              <div ref={searchRef} className="relative">
                {searchOpen ? (
                  <div className="flex items-center gap-2">
                    <input
                      type="text"
                      value={query}
                      onChange={(e) => setQuery(e.target.value)}
                      placeholder="Search articles..."
                      className="w-40 sm:w-56 rounded-sm border border-border bg-background px-3 py-1.5 text-sm font-sans outline-none focus:ring-1 focus:ring-accent animate-fade-in"
                      autoFocus
                    />
                    <button onClick={() => { setSearchOpen(false); setQuery(""); }} className="p-1 text-muted-foreground hover:text-foreground transition-colors">
                      <X size={18} />
                    </button>
                  </div>
                ) : (
                  <button onClick={() => setSearchOpen(true)} className="p-2 text-muted-foreground hover:text-foreground transition-colors" aria-label="Search">
                    <Search size={18} />
                  </button>
                )}

                {searchOpen && results.length > 0 && (
                  <div className="absolute right-0 top-full mt-2 w-80 rounded-sm border border-border bg-background shadow-lg animate-fade-in z-50">
                    {results.slice(0, 5).map((article) => (
                      <Link
                        key={article.slug}
                        to={`/article/${article.slug}`}
                        className="flex gap-3 p-3 hover:bg-muted transition-colors border-b border-border last:border-0"
                        onClick={() => { setSearchOpen(false); setQuery(""); }}
                      >
                        <img src={article.image} alt="" className="w-12 h-12 object-cover rounded-sm flex-shrink-0" />
                        <div className="min-w-0">
                          <p className="text-xs category-badge">{article.category}</p>
                          <p className="text-sm font-medium text-foreground truncate">{article.title}</p>
                        </div>
                      </Link>
                    ))}
                  </div>
                )}
                {searchOpen && query.length > 1 && results.length === 0 && (
                  <div className="absolute right-0 top-full mt-2 w-80 rounded-sm border border-border bg-background shadow-lg animate-fade-in z-50 p-4 text-center text-sm text-muted-foreground">
                    No articles found
                  </div>
                )}
              </div>

              {/* Theme Toggle */}
              <button onClick={toggle} className="p-2 text-muted-foreground hover:text-foreground transition-colors" aria-label="Toggle theme">
                {isDark ? <Sun size={18} /> : <Moon size={18} />}
              </button>

              {/* Subscribe Button */}
              <button
                onClick={() => setAuthModalOpen(true)}
                className="hidden sm:inline-flex items-center px-4 py-1.5 rounded-sm bg-accent text-accent-foreground text-sm font-semibold font-sans hover:opacity-90 transition-opacity"
              >
                Subscribe
              </button>

              {/* Mobile Menu Toggle */}
              <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="p-2 text-muted-foreground hover:text-foreground transition-colors lg:hidden" aria-label="Menu">
                <Menu size={20} />
              </button>
            </div>
          </div>

          {/* Mobile Nav */}
          {mobileMenuOpen && (
            <nav className="lg:hidden pb-4 animate-fade-in">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  className="block py-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {link.name}
                </Link>
              ))}
              <button
                onClick={() => { setMobileMenuOpen(false); setAuthModalOpen(true); }}
                className="mt-2 w-full py-2 rounded-sm bg-accent text-accent-foreground text-sm font-semibold font-sans"
              >
                Subscribe
              </button>
            </nav>
          )}
        </div>
      </header>

      <AuthModal open={authModalOpen} onOpenChange={setAuthModalOpen} />
    </>
  );
}
