import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { FadeInOnScroll } from "@/components/FadeInOnScroll";

export default function PrivacyPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <section className="py-16 md:py-20">
          <div className="editorial-container">
            <FadeInOnScroll>
              <span className="category-badge mb-2">Legal</span>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">Privacy Policy</h1>
              <div className="max-w-3xl prose font-sans text-foreground/85 space-y-6 text-base leading-relaxed">
                <p><strong>Last updated:</strong> February 1, 2026</p>
                <h2 className="text-xl font-bold mt-8 mb-3">1. Information We Collect</h2>
                <p>We collect information you provide directly — such as your name, email address, and any messages you send through our contact form. We also collect usage data automatically, including pages visited, time spent, and device information.</p>
                <h2 className="text-xl font-bold mt-8 mb-3">2. How We Use Your Information</h2>
                <p>We use your information to deliver and improve our editorial content, respond to inquiries, send newsletters (with your consent), and analyse site performance. We do not sell your personal data to third parties.</p>
                <h2 className="text-xl font-bold mt-8 mb-3">3. Cookies</h2>
                <p>We use essential cookies for site functionality and analytics cookies to understand readership patterns. You can manage cookie preferences through your browser settings.</p>
                <h2 className="text-xl font-bold mt-8 mb-3">4. Data Security</h2>
                <p>We implement industry-standard security measures to protect your data. However, no method of transmission over the internet is 100% secure.</p>
                <h2 className="text-xl font-bold mt-8 mb-3">5. Your Rights</h2>
                <p>Under applicable Indian data protection laws, you have the right to access, correct, or delete your personal information. Contact us at privacy@modernmuse.in for any data-related requests.</p>
                <h2 className="text-xl font-bold mt-8 mb-3">6. Contact</h2>
                <p>For privacy-related queries, reach us at <strong>privacy@modernmuse.in</strong> or write to our Mumbai office.</p>
              </div>
            </FadeInOnScroll>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
