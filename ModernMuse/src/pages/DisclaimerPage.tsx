import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { FadeInOnScroll } from "@/components/FadeInOnScroll";

export default function DisclaimerPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <section className="py-16 md:py-20">
          <div className="editorial-container">
            <FadeInOnScroll>
              <span className="category-badge mb-2">Legal</span>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">Disclaimer</h1>
              <div className="max-w-3xl prose font-sans text-foreground/85 space-y-6 text-base leading-relaxed">
                <p><strong>Last updated:</strong> February 1, 2026</p>
                <p>The information provided on Modern Muse is for general informational and editorial purposes only. All content is published in good faith and for general information purposes.</p>
                <h2 className="text-xl font-bold mt-8 mb-3">Editorial Independence</h2>
                <p>Modern Muse maintains full editorial independence. Our articles, opinions, and recommendations are not influenced by advertisers, sponsors, or any external parties.</p>
                <h2 className="text-xl font-bold mt-8 mb-3">Accuracy</h2>
                <p>While we strive for accuracy, we make no representations or warranties of any kind about the completeness, accuracy, or reliability of the information. Any reliance you place on such information is at your own risk.</p>
                <h2 className="text-xl font-bold mt-8 mb-3">External Links</h2>
                <p>Our platform may contain links to third-party websites. We have no control over and assume no responsibility for the content or practices of any third-party sites.</p>
                <h2 className="text-xl font-bold mt-8 mb-3">Professional Advice</h2>
                <p>Content published on Modern Muse does not constitute professional advice — whether legal, financial, medical, or otherwise. Always consult qualified professionals for specific advice.</p>
              </div>
            </FadeInOnScroll>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
