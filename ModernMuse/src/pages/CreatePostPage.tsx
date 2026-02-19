import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { FadeInOnScroll } from "@/components/FadeInOnScroll";
import { RichTextEditor } from "@/components/RichTextEditor";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

const categoryOptions = ["Tech", "Culture", "Lifestyle", "Business", "Travel"];

export default function CreatePostPage() {
  const navigate = useNavigate();
  const [title, setTitle] = useState("");
  const [category, setCategory] = useState(categoryOptions[0]);
  const [content, setContent] = useState("");
  const [imageUrl, setImageUrl] = useState("");

  useEffect(() => {
    const stored = localStorage.getItem("mm_user");
    if (!stored) navigate("/");
  }, [navigate]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const existing = JSON.parse(localStorage.getItem("mm_user_posts") || "[]");
    const newPost = {
      id: Date.now().toString(),
      title,
      category,
      excerpt: content.replace(/<[^>]*>/g, "").slice(0, 160),
      content,
      imageUrl,
      createdAt: new Date().toLocaleDateString("en-IN", {
        year: "numeric",
        month: "long",
        day: "numeric",
      }),
    };
    localStorage.setItem("mm_user_posts", JSON.stringify([newPost, ...existing]));
    navigate("/profile");
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 py-16">
        <div className="editorial-container max-w-3xl">
          <FadeInOnScroll>
            <h1 className="text-3xl font-bold mb-8">Create Post</h1>
          </FadeInOnScroll>

          <form onSubmit={handleSubmit} className="space-y-6">
            <FadeInOnScroll delay={50}>
              <div className="space-y-2">
                <Label htmlFor="title" className="font-sans text-sm">Title</Label>
                <Input
                  id="title"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  placeholder="Your article title"
                  required
                />
              </div>
            </FadeInOnScroll>

            <FadeInOnScroll delay={100}>
              <div className="space-y-2">
                <Label htmlFor="category" className="font-sans text-sm">Category</Label>
                <select
                  id="category"
                  value={category}
                  onChange={(e) => setCategory(e.target.value)}
                  className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm font-sans outline-none focus:ring-2 focus:ring-ring"
                >
                  {categoryOptions.map((c) => (
                    <option key={c} value={c}>{c}</option>
                  ))}
                </select>
              </div>
            </FadeInOnScroll>

            <FadeInOnScroll delay={150}>
              <div className="space-y-2">
                <Label htmlFor="image" className="font-sans text-sm">Featured Image URL</Label>
                <Input
                  id="image"
                  value={imageUrl}
                  onChange={(e) => setImageUrl(e.target.value)}
                  placeholder="https://example.com/image.jpg"
                />
              </div>
            </FadeInOnScroll>

            <FadeInOnScroll delay={200}>
              <div className="space-y-2">
                <Label className="font-sans text-sm">Content</Label>
                <RichTextEditor content={content} onChange={setContent} />
              </div>
            </FadeInOnScroll>

            <FadeInOnScroll delay={250}>
              <div className="flex gap-3">
                <button
                  type="submit"
                  className="px-6 py-2.5 rounded-sm bg-accent text-accent-foreground font-semibold font-sans text-sm hover:opacity-90 transition-opacity"
                >
                  Publish Post
                </button>
                <button
                  type="button"
                  onClick={() => navigate("/profile")}
                  className="px-6 py-2.5 rounded-sm border border-border text-sm font-sans text-muted-foreground hover:text-foreground transition-colors"
                >
                  Cancel
                </button>
              </div>
            </FadeInOnScroll>
          </form>
        </div>
      </main>
      <Footer />
    </div>
  );
}
