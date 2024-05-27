"use client";

import React from "react";
import { PricingPlans } from "./pricing-plans";

interface PricingProps {
  className?: string;
}

export const Pricing = (props: PricingProps) => {
  return <PricingPlans className={props.className} billingInterval="oneTime" />;
};
