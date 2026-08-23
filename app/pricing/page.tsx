"use client";

import React from "react";
import PricingSection from "@/components/pricing-section";

export default function PricingPage() {
  return (
    <div className="pt-28 pb-20">
      <PricingSection showTitle={true} showFaq={true} showComparison={true} />
    </div>
  );
}
