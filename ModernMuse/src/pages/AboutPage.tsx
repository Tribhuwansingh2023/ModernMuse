import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { FadeInOnScroll } from "@/components/FadeInOnScroll";

export default function AboutPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <section className="border-b border-border py-16 md:py-20">
          <div className="editorial-container">
            <FadeInOnScroll>
              <span className="category-badge mb-2">Our Story</span>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">About Modern Muse</h1>
              <div className="max-w-3xl space-y-6 text-foreground/85 font-sans text-base md:text-lg leading-relaxed">
                <p>
                  Modern Muse was born from a simple conviction: India's stories deserve world-class storytelling. Founded in 2024 in Mumbai, we set out to create an editorial platform that blends the depth of long-form journalism with the elegance of premium design.
                </p>
                <p>
                  We cover technology, culture, and lifestyle — not as separate verticals, but as interconnected threads of the Indian experience. From Bengaluru's startup kitchens to Jaipur's heritage workshops, from Delhi's sustainability pioneers to Mumbai's indie music basements, we go where the stories are.
                </p>
                <p>
                  Our editorial team brings together journalists, designers, and technologists who share a belief that thoughtful content can cut through the noise. We don't chase virality. We chase clarity, beauty, and truth.
                </p>
                <p>
                  Modern Muse is independently owned and reader-supported. We don't answer to algorithms or advertisers. We answer to you.
                </p>
              </div>
            </FadeInOnScroll>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
