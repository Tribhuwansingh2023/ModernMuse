export type UserRole = "regular" | "verified_creator" | "admin";

export interface MonetizationSettings {
  subscriptionEnabled: boolean;
  monthlySubscriptionPrice: number;
  bankDetails?: {
    accountHolder: string;
    accountNumber: string;
    bankName: string;
  };
}

export interface UserEarnings {
  totalEarnings: number;
  monthlyEarnings: number;
  subscriberCount: number;
  conversionRate: number;
}

export interface User {
  id: string;
  name: string;
  email: string;
  role: UserRole;
  isVerified: boolean;
  verificationDate?: string;
  bio?: string;
  avatar?: string;
  monetization?: MonetizationSettings;
  earnings?: UserEarnings;
}

export interface UserPost {
  id: string;
  title: string;
  category: string;
  excerpt: string;
  createdAt: string;
  isSubscriptionOnly?: boolean;
  views?: number;
  earnings?: number;
}
