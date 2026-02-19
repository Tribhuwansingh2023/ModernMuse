import { DollarSign, TrendingUp, Users } from "lucide-react";
import { FadeInOnScroll } from "@/components/FadeInOnScroll";
import type { UserEarnings } from "@/types/user";

interface EarningsDashboardProps {
  earnings: UserEarnings;
}

export function EarningsDashboard({ earnings }: EarningsDashboardProps) {
  return (
    <FadeInOnScroll>
      <div className="space-y-6">
        <div>
          <h2 className="text-xl font-bold mb-4">Earnings Dashboard</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {/* Total Earnings Card */}
            <div className="border border-border rounded-sm p-6 bg-accent/5">
              <div className="flex items-start justify-between mb-3">
                <div>
                  <p className="text-sm text-muted-foreground font-sans mb-1">
                    Total Earnings
                  </p>
                  <p className="text-2xl font-bold">
                    ₹{earnings.totalEarnings.toLocaleString()}
                  </p>
                </div>
                <DollarSign className="text-accent w-6 h-6" />
              </div>
              <p className="text-xs text-muted-foreground font-sans">
                Lifetime earnings from subscriptions
              </p>
            </div>

            {/* Monthly Earnings Card */}
            <div className="border border-border rounded-sm p-6">
              <div className="flex items-start justify-between mb-3">
                <div>
                  <p className="text-sm text-muted-foreground font-sans mb-1">
                    This Month
                  </p>
                  <p className="text-2xl font-bold">
                    ₹{earnings.monthlyEarnings.toLocaleString()}
                  </p>
                </div>
                <TrendingUp className="text-green-600 w-6 h-6" />
              </div>
              <p className="text-xs text-muted-foreground font-sans">
                {earnings.conversionRate}% conversion rate
              </p>
            </div>

            {/* Subscribers Card */}
            <div className="border border-border rounded-sm p-6">
              <div className="flex items-start justify-between mb-3">
                <div>
                  <p className="text-sm text-muted-foreground font-sans mb-1">
                    Subscribers
                  </p>
                  <p className="text-2xl font-bold">
                    {earnings.subscriberCount.toLocaleString()}
                  </p>
                </div>
                <Users className="text-purple-600 w-6 h-6" />
              </div>
              <p className="text-xs text-muted-foreground font-sans">
                Active paid subscribers
              </p>
            </div>
          </div>
        </div>
      </div>
    </FadeInOnScroll>
  );
}
