import { useState } from "react";
import { Mail, Phone, MapPin } from "lucide-react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { FadeInOnScroll } from "@/components/FadeInOnScroll";

export default function ContactPage() {
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // UI only — no backend
    alert("Thank you for reaching out! We'll get back to you soon.");
    setForm({ name: "", email: "", subject: "", message: "" });
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <section className="py-16 md:py-20">
          <div className="editorial-container">
            <FadeInOnScroll>
              <span className="category-badge mb-2">Get in Touch</span>
              <h1 className="text-4xl md:text-5xl font-bold mb-4">Contact Us</h1>
              <p className="text-lg text-muted-foreground font-sans max-w-2xl mb-12">
                Have a story tip, partnership inquiry, or just want to say hello? We'd love to hear from you.
              </p>
            </FadeInOnScroll>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
              {/* Contact Form */}
              <div className="lg:col-span-2">
                <FadeInOnScroll delay={100}>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-medium font-sans mb-2">Full Name</label>
                        <input
                          type="text"
                          required
                          maxLength={100}
                          value={form.name}
                          onChange={(e) => setForm({ ...form, name: e.target.value })}
                          placeholder="Aarav Sharma"
                          className="w-full rounded-sm border border-border bg-background px-4 py-3 text-sm font-sans outline-none focus:ring-1 focus:ring-accent transition-shadow"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium font-sans mb-2">Email Address</label>
                        <input
                          type="email"
                          required
                          maxLength={255}
                          value={form.email}
                          onChange={(e) => setForm({ ...form, email: e.target.value })}
                          placeholder="aarav@example.com"
                          className="w-full rounded-sm border border-border bg-background px-4 py-3 text-sm font-sans outline-none focus:ring-1 focus:ring-accent transition-shadow"
                        />
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm font-medium font-sans mb-2">Subject</label>
                      <input
                        type="text"
                        required
                        maxLength={200}
                        value={form.subject}
                        onChange={(e) => setForm({ ...form, subject: e.target.value })}
                        placeholder="Story tip, partnership, feedback..."
                        className="w-full rounded-sm border border-border bg-background px-4 py-3 text-sm font-sans outline-none focus:ring-1 focus:ring-accent transition-shadow"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium font-sans mb-2">Message</label>
                      <textarea
                        required
                        maxLength={2000}
                        rows={6}
                        value={form.message}
                        onChange={(e) => setForm({ ...form, message: e.target.value })}
                        placeholder="Tell us what's on your mind..."
                        className="w-full rounded-sm border border-border bg-background px-4 py-3 text-sm font-sans outline-none focus:ring-1 focus:ring-accent transition-shadow resize-none"
                      />
                    </div>
                    <button
                      type="submit"
                      className="bg-foreground text-background font-sans text-sm font-medium px-8 py-3 rounded-sm hover:opacity-90 transition-opacity"
                    >
                      Send Message
                    </button>
                  </form>
                </FadeInOnScroll>
              </div>

              {/* Contact Info */}
              <div>
                <FadeInOnScroll delay={200}>
                  <div className="space-y-6">
                    <div className="border border-border rounded-sm p-6 bg-card">
                      <div className="flex items-start gap-3">
                        <Mail size={18} className="text-accent mt-0.5 flex-shrink-0" />
                        <div>
                          <h3 className="font-medium text-sm mb-1">Email</h3>
                          <p className="text-sm text-muted-foreground font-sans">hello@modernmuse.in</p>
                          <p className="text-sm text-muted-foreground font-sans">editorial@modernmuse.in</p>
                        </div>
                      </div>
                    </div>
                    <div className="border border-border rounded-sm p-6 bg-card">
                      <div className="flex items-start gap-3">
                        <Phone size={18} className="text-accent mt-0.5 flex-shrink-0" />
                        <div>
                          <h3 className="font-medium text-sm mb-1">Phone</h3>
                          <p className="text-sm text-muted-foreground font-sans">+91 22 4567 8900</p>
                          <p className="text-sm text-muted-foreground font-sans">Mon–Fri, 10 AM – 6 PM IST</p>
                        </div>
                      </div>
                    </div>
                    <div className="border border-border rounded-sm p-6 bg-card">
                      <div className="flex items-start gap-3">
                        <MapPin size={18} className="text-accent mt-0.5 flex-shrink-0" />
                        <div>
                          <h3 className="font-medium text-sm mb-1">Office</h3>
                          <p className="text-sm text-muted-foreground font-sans">
                            Modern Muse Media Pvt. Ltd.<br />
                            3rd Floor, Trade Tower<br />
                            Bandra Kurla Complex<br />
                            Mumbai 400051, India
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </FadeInOnScroll>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
