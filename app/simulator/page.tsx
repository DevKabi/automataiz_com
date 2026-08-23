import React from "react";
import GrowthSimulator from "@/components/growth-simulator";
import BOSAssessment from "@/components/bos-assessment";
import { Sparkles, Trophy, FileDown, ShieldCheck } from "lucide-react";

export const metadata = {
  title: "AI Business Growth Simulator™ | Automataiz",
  description:
    "Calculate your hidden revenue leaks, manual follow-up waste, and projected growth with Automataiz AI Business Operating System. Download your Free AI Business Audit Report.",
};

export default function SimulatorPage() {
  return (
    <div className="pt-24 pb-20 space-y-16">
      {/* Top Banner */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-green/10 border border-brand-green/30 text-brand-green text-xs font-mono mb-4">
          <Sparkles className="w-3.5 h-3.5" />
          <span>Automataiz Revenue Intelligence Lab</span>
        </div>

        <h1 className="text-4xl sm:text-6xl font-display font-extrabold text-white tracking-tight max-w-4xl mx-auto leading-tight">
          AI Business Growth Simulator™ &amp;{" "}
          <span className="text-gradient-green-gold">Audit Engine.</span>
        </h1>
        <p className="mt-4 text-base sm:text-lg text-neutral-300 max-w-2xl mx-auto">
          Explore your business telemetry, uncover hidden revenue leaks, test automation scenarios, and download your free customized 4-pillar audit report.
        </p>
      </section>

      {/* Simulator Engine */}
      <GrowthSimulator />

      {/* 60-Second Diagnostic */}
      <BOSAssessment />
    </div>
  );
}
