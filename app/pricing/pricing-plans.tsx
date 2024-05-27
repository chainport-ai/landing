import React from "react";

import { PricingPlan } from "./pricing-plan";
import { siteConfig } from "@/lib/config";
import { cn } from "@/lib/utils";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";

const config = siteConfig.pricingPage;
const pricingPlans = config.pricingPlans;

interface PricingPlanProps {
  className?: string;
  billingInterval: "oneTime";
}

export const PricingPlans = (props: PricingPlanProps) => {
  const { billingInterval, className } = props;

  return (
    <section className={className}>
      <div className="md:text-center">
        <h2 className="font-display text-5xl">{config.headline}</h2>
        <p className="text-muted-foreground mt-2 text-lg">
          {config.subheadline}
        </p>
        <div className="mt-8 flex items-center justify-center space-x-4">
          <Label htmlFor="subscription" className="text-xl">
            Pay once, launch unlimited products
          </Label>
        </div>
      </div>
      <div
        className={cn("mt-16 grid grid-cols-3 items-center", {
          "mx-auto max-w-3xl grid-cols-2": pricingPlans.length === 2,
        })}
      >
        {pricingPlans.map((plan, index) => (
          <PricingPlan
            key={plan.name}
            name={plan.name}
            price={plan.price.oneTime}
            billing={plan.billing}
            description={plan.description}
            href={plan.href}
            features={plan.features}
            featured={plan.featured}
            className={
              index === 0
                ? "rounded-l-3xl"
                : index === 1
                ? "rounded-3xl"
                : index === 2
                ? "rounded-r-3xl"
                : "rounded-3xl"
            }
          />
        ))}
      </div>
    </section>
  );
};
