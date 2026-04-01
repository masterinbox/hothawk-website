"use client";

import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const plans = [
  {
    name: "Starter",
    monthly: 19,
    yearly: 190,
    items: ["25 monitors", "5-minute check interval", "Core alert channels", "1 seat"],
  },
  {
    name: "Pro",
    monthly: 79,
    yearly: 790,
    items: ["150 monitors", "60-second checks", "Branded status page", "SSL, DNS, and domain checks", "5 seats"],
  },
  {
    name: "Scale",
    monthly: 249,
    yearly: 2490,
    items: ["600 monitors", "30-second checks", "Multiple status pages", "Audit-friendly activity", "API access", "20 seats"],
  },
];

export function PricingPlans() {
  const [yearly, setYearly] = useState(false);
  return (
    <div>
      <div className="flex items-center justify-center gap-3">
        <span className={cn("text-sm", !yearly ? "text-slate-100" : "text-slate-500")}>Monthly</span>
        <button
          type="button"
          role="switch"
          aria-checked={yearly}
          onClick={() => setYearly((v) => !v)}
          className={cn(
            "relative h-7 w-12 rounded-full border border-slate-700 transition",
            yearly ? "bg-sky-500/30" : "bg-slate-800"
          )}
        >
          <span
            className={cn(
              "absolute top-0.5 h-5 w-5 rounded-full bg-slate-100 transition",
              yearly ? "left-6" : "left-0.5"
            )}
          />
        </button>
        <span className={cn("text-sm", yearly ? "text-slate-100" : "text-slate-500")}>
          Yearly <span className="text-sky-400">(save ~2 months)</span>
        </span>
      </div>
      <div className="mt-10 grid gap-4 md:grid-cols-3">
        {plans.map((plan) => {
          const price = yearly ? plan.yearly : plan.monthly;
          const suffix = yearly ? "/yr" : "/mo";
          return (
            <Card key={plan.name} className="flex flex-col">
              <p className="text-lg font-semibold text-slate-100">{plan.name}</p>
              <p className="mt-2 text-3xl font-bold text-slate-50">
                ${price}
                <span className="text-sm font-normal text-slate-400">{suffix}</span>
              </p>
              <ul className="mt-4 flex-1 space-y-2 text-sm text-slate-300">
                {plan.items.map((i) => (
                  <li key={i}>- {i}</li>
                ))}
              </ul>
              <Button href="/signup" className="mt-6 w-full">
                Start {plan.name}
              </Button>
            </Card>
          );
        })}
      </div>
    </div>
  );
}
