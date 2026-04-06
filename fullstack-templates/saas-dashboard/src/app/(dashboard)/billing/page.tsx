import { createClient } from "@/lib/supabase/server";
import { redirect } from "next/navigation";
import PricingCards from "@/components/billing/PricingCards";

export const dynamic = "force-dynamic";

/* PLACEHOLDER — Replace priceIds with real Stripe Price IDs */
const PLANS = [
  {
    name: "Starter",
    price: "$0",
    period: "mo",
    description: "For individuals and small experiments.",
    priceId: "",
    popular: false,
    features: [
      { text: "Up to 3 projects", included: true },
      { text: "1 team member", included: true },
      { text: "Community support", included: true },
      { text: "Basic analytics", included: true },
      { text: "Custom domains", included: false },
      { text: "Priority support", included: false },
    ],
  },
  {
    name: "Pro",
    price: "$29",
    period: "mo",
    description: "For growing teams that need more power.",
    priceId: "price_PLACEHOLDER_PRO",
    popular: true,
    features: [
      { text: "Unlimited projects", included: true },
      { text: "Up to 10 team members", included: true },
      { text: "Priority support", included: true },
      { text: "Advanced analytics", included: true },
      { text: "Custom domains", included: true },
      { text: "API access", included: false },
    ],
  },
  {
    name: "Enterprise",
    price: "$99",
    period: "mo",
    description: "For organizations with advanced needs.",
    priceId: "price_PLACEHOLDER_ENTERPRISE",
    popular: false,
    features: [
      { text: "Unlimited everything", included: true },
      { text: "Unlimited team members", included: true },
      { text: "Dedicated support", included: true },
      { text: "Advanced analytics", included: true },
      { text: "Custom domains", included: true },
      { text: "Full API access", included: true },
    ],
  },
];

/* PLACEHOLDER — Replace with real current plan detection from your database */
const CURRENT_PLAN_NAME = "Starter";

export default async function BillingPage() {
  const supabase = await createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    redirect("/login");
  }

  return (
    <div className="space-y-8">
      {/* Header */}
      <div>
        <h1 className="font-heading text-2xl font-bold tracking-tight text-gradient">
          Billing
        </h1>
        <p className="mt-1 text-sm text-secondary">
          Manage your subscription and billing details.
        </p>
      </div>

      {/* Current plan indicator */}
      <div className="glass-card rounded-xl p-5 flex items-center justify-between">
        <div>
          <p className="text-xs text-muted uppercase tracking-wider font-medium">
            Current plan
          </p>
          <p className="mt-1 font-heading text-lg font-semibold text-primary">
            {CURRENT_PLAN_NAME}
          </p>
        </div>
        <div className="flex items-center gap-2">
          <span className="inline-flex items-center gap-1.5 text-xs font-medium text-success bg-success/10 border border-success/20 px-2.5 py-1 rounded-full">
            <span className="w-1.5 h-1.5 rounded-full bg-success animate-pulse-glow" />
            Active
          </span>
        </div>
      </div>

      {/* Pricing Cards */}
      <PricingCards
        plans={PLANS}
        currentPlanName={CURRENT_PLAN_NAME}
      />
    </div>
  );
}
