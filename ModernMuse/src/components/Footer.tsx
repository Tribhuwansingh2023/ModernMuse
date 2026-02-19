import { Link } from "react-router-dom";
import { ArrowUp, Instagram, Twitter, Linkedin } from "lucide-react";
import { categories } from "@/data/articles";

export function Footer() {
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <footer className="border-t border-border bg-card mt-20">
      <div className="editorial-container py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-10">
          {/* Brand */}
          <div className="lg:col-span-2">
            <span className="font-serif text-2xl font-bold tracking-tight">
              Modern<span className="text-accent">Muse</span>
            </span>
            <p className="text-sm text-muted-foreground mt-3 font-sans leading-relaxed max-w-sm">
              A premium editorial platform exploring the intersection of technology, culture, and the art of living well — from the heart of India.
            </p>
            {/* Social Links */}
            <div className="flex items-center gap-3 mt-5">
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="p-2 rounded-sm border border-border text-muted-foreground hover:text-accent hover:border-accent transition-all duration-200" aria-label="Instagram">
                <Instagram size={16} />
              </a>
              <a href="https://x.com" target="_blank" rel="noopener noreferrer" className="p-2 rounded-sm border border-border text-muted-foreground hover:text-accent hover:border-accent transition-all duration-200" aria-label="Twitter">
                <Twitter size={16} />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="p-2 rounded-sm border border-border text-muted-foreground hover:text-accent hover:border-accent transition-all duration-200" aria-label="LinkedIn">
                <Linkedin size={16} />
              </a>
            </div>
          </div>

          {/* Categories */}
          <div>
            <h4 className="text-sm font-semibold tracking-widest uppercase mb-4 font-sans">Categories</h4>
            <ul className="space-y-2">
              {categories.map((cat) => (
                <li key={cat.name}>
                  <Link to={`/category/${cat.name.toLowerCase()}`} className="text-sm text-muted-foreground hover:text-accent transition-colors duration-200 font-sans">
                    {cat.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-sm font-semibold tracking-widest uppercase mb-4 font-sans">Company</h4>
            <ul className="space-y-2 text-sm font-sans">
              <li><Link to="/about" className="text-muted-foreground hover:text-accent transition-colors duration-200">About Us</Link></li>
              <li><Link to="/team" className="text-muted-foreground hover:text-accent transition-colors duration-200">Our Team</Link></li>
              <li><Link to="/careers" className="text-muted-foreground hover:text-accent transition-colors duration-200">Careers</Link></li>
              <li><Link to="/contact" className="text-muted-foreground hover:text-accent transition-colors duration-200">Contact Us</Link></li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="text-sm font-semibold tracking-widest uppercase mb-4 font-sans">Legal</h4>
            <ul className="space-y-2 text-sm font-sans">
              <li><Link to="/privacy" className="text-muted-foreground hover:text-accent transition-colors duration-200">Privacy Policy</Link></li>
              <li><Link to="/terms" className="text-muted-foreground hover:text-accent transition-colors duration-200">Terms & Conditions</Link></li>
              <li><Link to="/disclaimer" className="text-muted-foreground hover:text-accent transition-colors duration-200">Disclaimer</Link></li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col items-center gap-4 mt-12 pt-8 border-t border-border">
          <button
            onClick={scrollToTop}
            className="p-2 rounded-sm border border-border text-muted-foreground hover:text-accent hover:border-accent transition-all duration-200"
            aria-label="Back to top"
          >
            <ArrowUp size={16} />
          </button>
          <p className="text-xs text-muted-foreground font-sans text-center">
            © 2026 Modern Muse. All rights reserved. Made with ❤️ in India.
          </p>
        </div>
      </div>
    </footer>
  );
}
