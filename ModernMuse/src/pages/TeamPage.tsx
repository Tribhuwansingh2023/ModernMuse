import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { FadeInOnScroll } from "@/components/FadeInOnScroll";

const team = [
  { name: "Meera Iyer", role: "Editor-in-Chief", bio: "Former arts editor at The Hindu. Meera brings 15 years of cultural journalism and an unwavering eye for stories that matter." },
  { name: "Aarav Sharma", role: "Head of Technology", bio: "Ex-Google engineer turned tech journalist. Aarav covers India's innovation landscape with technical depth and human warmth." },
  { name: "Rohan Verma", role: "Environment & Travel Editor", bio: "Climate reporter and avid trekker. Rohan writes about sustainability with the urgency it deserves and the optimism it needs." },
  { name: "Ananya Kapoor", role: "Digital Culture Writer", bio: "Creator economy specialist and UX researcher. Ananya decodes how India creates, consumes, and connects online." },
  { name: "Priya Rathore", role: "Design Director", bio: "Trained at NID Ahmedabad. Priya ensures every pixel on Modern Muse reflects our commitment to editorial excellence." },
  { name: "Vikram Desai", role: "Head of Product", bio: "Full-stack developer with a passion for media technology. Vikram builds the tools that power our storytelling." },
];

export default function TeamPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <section className="border-b border-border py-16 md:py-20">
          <div className="editorial-container">
            <FadeInOnScroll>
              <span className="category-badge mb-2">People</span>
              <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Team</h1>
              <p className="text-lg text-muted-foreground font-sans max-w-2xl mb-12">
                The journalists, designers, and technologists behind Modern Muse.
              </p>
            </FadeInOnScroll>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {team.map((member, i) => (
                <FadeInOnScroll key={member.name} delay={i * 100}>
                  <div className="border border-border rounded-sm p-6 bg-card hover:shadow-lg transition-shadow duration-300">
                    <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center mb-4">
                      <span className="text-accent font-serif font-bold text-lg">{member.name.charAt(0)}</span>
                    </div>
                    <h3 className="font-bold text-lg mb-1">{member.name}</h3>
                    <p className="text-sm text-accent font-sans font-medium mb-3">{member.role}</p>
                    <p className="text-sm text-muted-foreground font-sans leading-relaxed">{member.bio}</p>
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
