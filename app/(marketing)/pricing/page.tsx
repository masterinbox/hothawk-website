import { createMetadata } from "@/lib/seo";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export const metadata = createMetadata({
  title: "Pricing",
  description: "Simple uptime and infrastructure monitoring plans for teams of different sizes.",
  path: "/pricing",
});

const plans = [
  { name: "Starter", price: "$19", items: ["25 monitors", "5-min checks", "Direct alerts", "1 seat"] },
  { name: "Pro", price: "$79", items: ["150 monitors", "60-sec checks", "Status page", "5 seats"] },
  { name: "Scale", price: "$249", items: ["600 monitors", "30-sec checks", "Audit logs", "20 seats + API"] },
];

export default function PricingPage() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-16">
      <h1 className="text-4xl font-semibold">HotHawk Pricing</h1>
      <p className="mt-3 text-slate-300">Choose a plan based on check frequency, monitor volume, and team seats.</p>
      <div className="mt-8 grid gap-4 md:grid-cols-3">
        {plans.map((plan) => (
          <Card key={plan.name}>
            <p className="text-lg font-semibold">{plan.name}</p>
            <p className="mt-2 text-3xl font-bold">{plan.price}<span className="text-sm text-slate-400">/mo</span></p>
            <ul className="mt-4 space-y-2 text-sm text-slate-300">
              {plan.items.map((i) => <li key={i}>- {i}</li>)}
            </ul>
            <Button href="/signup" className="mt-6 w-full">Start {plan.name}</Button>
          </Card>
        ))}
      </div>
    </section>
  );
}

