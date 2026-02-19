import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { FadeInOnScroll } from "@/components/FadeInOnScroll";

export default function TermsPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <section className="py-16 md:py-20">
          <div className="editorial-container">
            <FadeInOnScroll>
              <span className="category-badge mb-2">Legal</span>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">Terms & Conditions</h1>
              <div className="max-w-3xl prose font-sans text-foreground/85 space-y-6 text-base leading-relaxed">
                <p><strong>Effective date:</strong> February 1, 2026</p>
                <h2 className="text-xl font-bold mt-8 mb-3">1. Acceptance of Terms</h2>
                <p>By accessing Modern Muse, you agree to these Terms & Conditions. If you disagree with any part, please discontinue use of our platform.</p>
                <h2 className="text-xl font-bold mt-8 mb-3">2. Intellectual Property</h2>
                <p>All content published on Modern Muse — including articles, images, and design elements — is the intellectual property of Modern Muse Media Pvt. Ltd. unless otherwise credited. Reproduction without written permission is prohibited.</p>
                <h2 className="text-xl font-bold mt-8 mb-3">3. User Conduct</h2>
                <p>You agree not to use our platform for any unlawful purpose, to distribute malware, or to attempt unauthorised access to our systems.</p>
                <h2 className="text-xl font-bold mt-8 mb-3">4. Disclaimer</h2>
                <p>Content is provided for informational purposes only. We make no guarantees regarding accuracy or completeness. Views expressed by authors are their own.</p>
                <h2 className="text-xl font-bold mt-8 mb-3">5. Limitation of Liability</h2>
                <p>Modern Muse shall not be liable for any indirect, incidental, or consequential damages arising from your use of the platform.</p>
                <h2 className="text-xl font-bold mt-8 mb-3">6. Governing Law</h2>
                <p>These terms are governed by the laws of India. Any disputes shall be subject to the exclusive jurisdiction of courts in Mumbai, Maharashtra.</p>
              </div>
            </FadeInOnScroll>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
