import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import type { UserRole } from "@/types/user";

interface AuthModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export function AuthModal({ open, onOpenChange }: AuthModalProps) {
  const [tab, setTab] = useState<"login" | "signup">("login");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState<UserRole>("regular");
  const navigate = useNavigate();

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    // UI only — simulate login
    localStorage.setItem(
      "mm_user",
      JSON.stringify({
        id: Math.random().toString(36).substr(2, 9),
        name: "Reader",
        email,
        role: "regular" as UserRole,
        isVerified: false,
      })
    );
    onOpenChange(false);
    navigate("/profile");
  };

  const handleSignup = (e: React.FormEvent) => {
    e.preventDefault();
    // UI only — simulate signup
    const isVerified = role === "verified_creator";
    localStorage.setItem(
      "mm_user",
      JSON.stringify({
        id: Math.random().toString(36).substr(2, 9),
        name,
        email,
        role,
        isVerified,
        verificationDate: isVerified ? new Date().toISOString() : undefined,
        monetization: role === "verified_creator" ? {
          subscriptionEnabled: false,
          monthlySubscriptionPrice: 99,
        } : undefined,
        earnings: role === "verified_creator" ? {
          totalEarnings: 0,
          monthlyEarnings: 0,
          subscriberCount: 0,
          conversionRate: 0,
        } : undefined,
      })
    );
    onOpenChange(false);
    navigate("/profile");
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle className="text-center font-serif text-2xl">
            Welcome to Modern<span className="text-accent">Muse</span>
          </DialogTitle>
        </DialogHeader>

        {/* Tab Switcher */}
        <div className="flex border-b border-border mb-6">
          <button
            onClick={() => setTab("login")}
            className={`flex-1 pb-3 text-sm font-semibold font-sans transition-colors relative ${
              tab === "login" ? "text-foreground" : "text-muted-foreground hover:text-foreground"
            }`}
          >
            Login
            {tab === "login" && (
              <span className="absolute bottom-0 left-0 w-full h-0.5 bg-accent" />
            )}
          </button>
          <button
            onClick={() => setTab("signup")}
            className={`flex-1 pb-3 text-sm font-semibold font-sans transition-colors relative ${
              tab === "signup" ? "text-foreground" : "text-muted-foreground hover:text-foreground"
            }`}
          >
            Sign Up
            {tab === "signup" && (
              <span className="absolute bottom-0 left-0 w-full h-0.5 bg-accent" />
            )}
          </button>
        </div>

        {tab === "login" ? (
          <form onSubmit={handleLogin} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="login-email" className="font-sans text-sm">Email</Label>
              <Input
                id="login-email"
                type="email"
                placeholder="you@example.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="login-password" className="font-sans text-sm">Password</Label>
              <Input
                id="login-password"
                type="password"
                placeholder="••••••••"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
            <button
              type="submit"
              className="w-full py-2.5 rounded-sm bg-accent text-accent-foreground font-semibold font-sans text-sm hover:opacity-90 transition-opacity"
            >
              Login
            </button>
            <p className="text-center text-xs text-muted-foreground font-sans">
              Don't have an account?{" "}
              <button type="button" onClick={() => setTab("signup")} className="text-accent hover:underline">
                Sign up
              </button>
            </p>
          </form>
        ) : (
          <form onSubmit={handleSignup} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="signup-name" className="font-sans text-sm">Full Name</Label>
              <Input
                id="signup-name"
                type="text"
                placeholder="Your name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="signup-email" className="font-sans text-sm">Email</Label>
              <Input
                id="signup-email"
                type="email"
                placeholder="you@example.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="signup-password" className="font-sans text-sm">Password</Label>
              <Input
                id="signup-password"
                type="password"
                placeholder="••••••••"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>

            {/* Role Selection */}
            <div className="space-y-3 border-t border-b border-border py-4">
              <Label className="font-sans text-sm font-semibold">Account Type</Label>
              <RadioGroup value={role} onValueChange={(value) => setRole(value as UserRole)}>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="regular" id="role-regular" />
                  <Label htmlFor="role-regular" className="font-sans text-sm font-normal cursor-pointer">
                    Regular Reader
                  </Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="verified_creator" id="role-creator" />
                  <Label htmlFor="role-creator" className="font-sans text-sm font-normal cursor-pointer">
                    Creator (Publish & Monetize)
                  </Label>
                </div>
              </RadioGroup>
              {role === "verified_creator" && (
                <p className="text-xs text-muted-foreground font-sans bg-accent/10 p-2 rounded">
                  ✓ Get verified creator badge, publish articles, and enable subscriptions
                </p>
              )}
            </div>

            <button
              type="submit"
              className="w-full py-2.5 rounded-sm bg-accent text-accent-foreground font-semibold font-sans text-sm hover:opacity-90 transition-opacity"
            >
              Create Account
            </button>
            <p className="text-center text-xs text-muted-foreground font-sans">
              Already have an account?{" "}
              <button type="button" onClick={() => setTab("login")} className="text-accent hover:underline">
                Login
              </button>
            </p>
          </form>
        )}
      </DialogContent>
    </Dialog>
  );
}
