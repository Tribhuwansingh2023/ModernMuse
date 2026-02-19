import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { FadeInOnScroll } from "@/components/FadeInOnScroll";
import { VerificationBadge } from "@/components/VerificationBadge";
import { EarningsDashboard } from "@/components/EarningsDashboard";
import { User, PenSquare, LogOut, Settings } from "lucide-react";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";
import type { User as UserType, UserPost } from "@/types/user";

export default function ProfilePage() {
  const navigate = useNavigate();
  const [user, setUser] = useState<UserType | null>(null);
  const [posts, setPosts] = useState<UserPost[]>([]);
  const [showSettings, setShowSettings] = useState(false);
  const [subscriptionEnabled, setSubscriptionEnabled] = useState(false);
  const [monthlyPrice, setMonthlyPrice] = useState(99);

  useEffect(() => {
    const stored = localStorage.getItem("mm_user");
    if (!stored) {
      navigate("/");
      return;
    }
    const userData = JSON.parse(stored);
    setUser(userData);

    if (userData.monetization) {
      setSubscriptionEnabled(userData.monetization.subscriptionEnabled);
      setMonthlyPrice(userData.monetization.monthlySubscriptionPrice);
    }

    const storedPosts = localStorage.getItem("mm_user_posts");
    if (storedPosts) setPosts(JSON.parse(storedPosts));
  }, [navigate]);

  const handleLogout = () => {
    localStorage.removeItem("mm_user");
    navigate("/");
  };

  const handleSaveSettings = () => {
    if (!user) return;
    const updated = {
      ...user,
      monetization: {
        ...user.monetization,
        subscriptionEnabled,
        monthlySubscriptionPrice: monthlyPrice,
      },
    };
    setUser(updated);
    localStorage.setItem("mm_user", JSON.stringify(updated));
    setShowSettings(false);
  };

  if (!user) return null;

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 py-16">
        <div className="editorial-container max-w-3xl">
          <FadeInOnScroll>
            <div className="flex items-center justify-between mb-8">
              <div className="flex items-center gap-4">
                <div className="w-16 h-16 rounded-full bg-muted flex items-center justify-center">
                  <User size={28} className="text-muted-foreground" />
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <h1 className="text-2xl font-bold">{user.name}</h1>
                    {user.isVerified && (
                      <VerificationBadge
                        isVerified={user.isVerified}
                        verificationDate={user.verificationDate}
                        size="md"
                      />
                    )}
                  </div>
                  <p className="text-sm text-muted-foreground font-sans">{user.email}</p>
                  <span className="inline-block mt-1 text-xs font-semibold px-2 py-1 rounded bg-accent/10 text-accent">
                    {user.role === "verified_creator"
                      ? "Verified Creator"
                      : user.role === "admin"
                      ? "Admin"
                      : "Regular User"}
                  </span>
                </div>
              </div>
              {user.role === "verified_creator" && (
                <button
                  onClick={() => setShowSettings(!showSettings)}
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-sm border border-border text-sm font-sans text-muted-foreground hover:text-foreground transition-colors"
                >
                  <Settings size={16} />
                  Settings
                </button>
              )}
            </div>
          </FadeInOnScroll>

          <FadeInOnScroll delay={100}>
            <div className="flex items-center justify-between mb-8">
              <h2 className="text-xl font-bold">Your Posts</h2>
              <div className="flex gap-3">
                <Link
                  to="/create-post"
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-sm bg-accent text-accent-foreground text-sm font-semibold font-sans hover:opacity-90 transition-opacity"
                >
                  <PenSquare size={16} />
                  Create Post
                </Link>
                <button
                  onClick={handleLogout}
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-sm border border-border text-sm font-sans text-muted-foreground hover:text-foreground transition-colors"
                >
                  <LogOut size={16} />
                  Logout
                </button>
              </div>
            </div>
          </FadeInOnScroll>

          {posts.length === 0 ? (
            <FadeInOnScroll delay={200}>
              <div className="text-center py-16 border border-dashed border-border rounded-sm">
                <PenSquare size={32} className="mx-auto text-muted-foreground mb-3" />
                <p className="text-muted-foreground font-sans text-sm">
                  You haven't published any posts yet.
                </p>
                <Link
                  to="/create-post"
                  className="inline-block mt-4 text-sm text-accent hover:underline font-sans"
                >
                  Write your first post →
                </Link>
              </div>
            </FadeInOnScroll>
          ) : (
            <div className="space-y-4">
              {posts.map((post, i) => (
                <FadeInOnScroll key={post.id} delay={i * 80}>
                  <div className="border border-border rounded-sm p-5 hover:shadow-sm transition-shadow">
                    <span className="category-badge text-xs mb-1">{post.category}</span>
                    <h3 className="text-lg font-bold mb-1">{post.title}</h3>
                    <p className="text-sm text-muted-foreground font-sans line-clamp-2">{post.excerpt}</p>
                    <p className="text-xs text-muted-foreground/60 font-sans mt-2">{post.createdAt}</p>
                  </div>
                </FadeInOnScroll>
              ))}
            </div>
          )}

          {/* Earnings Dashboard - Verified Creators Only */}
          {user.role === "verified_creator" && user.earnings && (
            <div className="mt-16 pt-8 border-t border-border">
              <EarningsDashboard earnings={user.earnings} />
            </div>
          )}

          {/* Monetization Settings - Verified Creators Only */}
          {user.role === "verified_creator" && showSettings && (
            <FadeInOnScroll delay={200}>
              <div className="mt-16 pt-8 border-t border-border">
                <h2 className="text-xl font-bold mb-6">Monetization Settings</h2>
                <div className="border border-border rounded-sm p-6 space-y-6">
                  {/* Subscription Toggle */}
                  <div className="flex items-center justify-between pb-6 border-b border-border">
                    <div>
                      <h3 className="font-semibold text-base mb-1">Enable Subscription Content</h3>
                      <p className="text-sm text-muted-foreground font-sans">
                        Allow readers to subscribe for exclusive content
                      </p>
                    </div>
                    <Switch
                      checked={subscriptionEnabled}
                      onCheckedChange={setSubscriptionEnabled}
                      className="ml-4"
                    />
                  </div>

                  {/* Monthly Price */}
                  {subscriptionEnabled && (
                    <div className="space-y-3">
                      <div>
                        <Label className="text-sm font-semibold mb-2">
                          Monthly Subscription Price (₹)
                        </Label>
                        <input
                          type="number"
                          value={monthlyPrice}
                          onChange={(e) => setMonthlyPrice(Number(e.target.value))}
                          min={1}
                          max={10000}
                          className="w-full px-3 py-2 border border-border rounded-sm bg-background text-foreground text-sm"
                          placeholder="99"
                        />
                        <p className="text-xs text-muted-foreground font-sans mt-1">
                          Recommended: ₹99–₹499 per month
                        </p>
                      </div>
                    </div>
                  )}

                  {/* Bank Details */}
                  <div className="bg-muted/30 rounded-sm p-4">
                    <h4 className="text-sm font-semibold mb-2">Bank Account Details</h4>
                    <p className="text-xs text-muted-foreground font-sans mb-3">
                      Add or update your bank details to receive earnings
                    </p>
                    <button className="text-sm text-accent hover:underline font-sans">
                      {user.monetization?.bankDetails ? "Update" : "Add"} Bank Details →
                    </button>
                  </div>

                  {/* Save Button */}
                  <div className="flex gap-3 pt-4">
                    <button
                      onClick={handleSaveSettings}
                      className="flex-1 py-2.5 rounded-sm bg-accent text-accent-foreground font-semibold font-sans text-sm hover:opacity-90 transition-opacity"
                    >
                      Save Settings
                    </button>
                    <button
                      onClick={() => setShowSettings(false)}
                      className="flex-1 py-2.5 rounded-sm border border-border font-semibold font-sans text-sm hover:bg-muted/50 transition-colors"
                    >
                      Cancel
                    </button>
                  </div>
                </div>
              </div>
            </FadeInOnScroll>
          )}
        </div>
      </main>
      <Footer />
    </div>
  );
}
