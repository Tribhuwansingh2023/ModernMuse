import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { FadeInOnScroll } from "@/components/FadeInOnScroll";

const openings = [
  { title: "Senior Culture Writer", location: "Mumbai", type: "Full-time", description: "We're looking for a seasoned journalist with deep knowledge of India's arts, film, and music scenes." },
  { title: "Frontend Engineer", location: "Bengaluru / Remote", type: "Full-time", description: "Help us build a best-in-class editorial platform using React, TypeScript, and modern web technologies." },
  { title: "Visual Designer", location: "Remote", type: "Contract", description: "Create compelling visual narratives for our digital and social platforms." },
  { title: "Editorial Intern", location: "Mumbai", type: "Internship", description: "A 6-month programme for aspiring journalists passionate about technology and culture." },
];

export default function CareersPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <section className="border-b border-border py-16 md:py-20">
          <div className="editorial-container">
            <FadeInOnScroll>
              <span className="category-badge mb-2">Join Us</span>
              <h1 className="text-4xl md:text-5xl font-bold mb-4">Careers</h1>
              <p className="text-lg text-muted-foreground font-sans max-w-2xl mb-12">
                We're building India's most thoughtful editorial platform. If you care about great storytelling and beautiful design, we'd love to hear from you.
              </p>
            </FadeInOnScroll>
            <div className="space-y-6 max-w-3xl">
              {openings.map((job, i) => (
                <FadeInOnScroll key={job.title} delay={i * 100}>
                  <div className="border border-border rounded-sm p-6 bg-card hover:border-accent/50 transition-colors duration-300">
                    <div className="flex flex-wrap items-start justify-between gap-3 mb-3">
                      <h3 className="font-bold text-lg">{job.title}</h3>
                      <div className="flex gap-2">
                        <span className="text-xs font-sans font-medium bg-secondary text-secondary-foreground px-2 py-1 rounded-sm">{job.location}</span>
                        <span className="text-xs font-sans font-medium bg-accent/10 text-accent px-2 py-1 rounded-sm">{job.type}</span>
                      </div>
                    </div>
                    <p className="text-sm text-muted-foreground font-sans leading-relaxed">{job.description}</p>
                  </div>
                </FadeInOnScroll>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
