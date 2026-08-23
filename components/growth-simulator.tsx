"use client";

import React, { useState, useMemo } from "react";
import {
  Sparkles,
  TrendingUp,
  AlertTriangle,
  Clock,
  Zap,
  Award,
  ArrowRight,
  ChevronRight,
  Dumbbell,
  GraduationCap,
  Building2,
  School,
  ShieldCheck,
  Briefcase,
  Store,
  FileDown,
  Trophy,
  CheckCircle2,
  BarChart3,
  RefreshCcw,
} from "lucide-react";
import {
  calculateSimulatorResults,
  SimulatorInputs,
  INDUSTRY_CONFIGS,
} from "@/lib/simulator-calc";
import { formatINR, formatNumber } from "@/lib/utils";
import AuditModal from "./audit-modal";

const industryIcons: Record<string, any> = {
  fitness: Dumbbell,
  coaches: GraduationCap,
  realestate: Building2,
  schools: School,
  insurance: ShieldCheck,
  agency: Briefcase,
  msme: Store,
};

export default function GrowthSimulator() {
  const [inputs, setInputs] = useState<SimulatorInputs>({
    industry: "fitness",
    monthlyLeads: 250,
    conversionRate: 4,
    customerValue: 25000,
    followupHoursWeekly: 25,
    monthlyAdSpend: 35000,
  });

  const [activeStep, setActiveStep] = useState<number>(1);
  const [auditModalOpen, setAuditModalOpen] = useState(false);

  const results = useMemo(() => {
    return calculateSimulatorResults(inputs);
  }, [inputs]);

  const selectIndustry = (key: string) => {
    const config = INDUSTRY_CONFIGS[key];
    setInputs((prev) => ({
      ...prev,
      industry: key,
      customerValue: config ? config.avgTicket : prev.customerValue,
    }));
  };

  return (
    <section id="simulator" className="relative py-24 sm:py-32 overflow-hidden bg-[#070707]">
      {/* Background radial glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[700px] h-[700px] glow-orb-green opacity-20 pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-96 h-96 glow-orb-gold opacity-15 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-green/10 border border-brand-green/30 text-brand-green text-xs font-mono mb-4 shadow-glow-green/20">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Interactive Gamification Engine</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-display font-bold text-white tracking-tight leading-tight">
            Discover How Much Revenue You’re{" "}
            <span className="text-gradient-green-gold">Losing Every Month</span>
          </h2>
          <p className="mt-4 text-sm sm:text-base text-neutral-400">
            Select your parameters below and let our AI calculate your hidden revenue leaks, manual follow-up waste, and projected growth with Automataiz.
          </p>
        </div>

        {/* Step Indicator Tabs */}
        <div className="flex items-center justify-center gap-2 mb-10 overflow-x-auto pb-2 touch-scroll scrollbar-none">
          {[
            { step: 1, label: "1. Industry" },
            { step: 2, label: "2. Monthly Leads" },
            { step: 3, label: "3. Conversion %" },
            { step: 4, label: "4. Customer Value" },
            { step: 5, label: "5. Follow-Up Time" },
            { step: 6, label: "6. Ad Spend" },
          ].map((item) => (
            <button
              key={item.step}
              onClick={() => setActiveStep(item.step)}
              className={`px-4 py-2 rounded-full text-xs sm:text-sm font-mono font-semibold transition-all shrink-0 ${
                activeStep === item.step
                  ? "bg-brand-green text-black font-bold shadow-glow-green/40"
                  : "bg-white/[0.04] text-neutral-300 hover:text-white border border-white/[0.08]"
              }`}
            >
              {item.label}
            </button>
          ))}
        </div>

        {/* Main 2-Column Grid: Configurator Left, Live Intelligence Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Left Column: Interactive Inputs (5 Cols) */}
          <div className="lg:col-span-5 space-y-6">
            <div className="p-6 sm:p-7 rounded-3xl glass-panel space-y-6">
              {/* Step 1: Industry Selection */}
              <div>
                <div className="flex items-center justify-between mb-3">
                  <label className="text-sm font-mono uppercase tracking-wider text-brand-green font-bold">
                    Step 1: Select Your Industry
                  </label>
                  <span className="text-xs sm:text-sm text-neutral-300 font-mono">
                    {INDUSTRY_CONFIGS[inputs.industry]?.name}
                  </span>
                </div>
                <div className="grid grid-cols-2 gap-2.5">
                  {Object.entries(INDUSTRY_CONFIGS).map(([key, config]) => {
                    const Icon = industryIcons[key] || Building2;
                    const isSelected = inputs.industry === key;
                    return (
                      <button
                        key={key}
                        onClick={() => selectIndustry(key)}
                        className={`p-3.5 rounded-2xl text-left transition-all border flex items-center gap-2.5 ${
                          isSelected
                            ? "bg-gradient-to-r from-brand-green/20 to-brand-gold/15 border-brand-green text-white shadow-glow-green/20"
                            : "bg-white/[0.02] border-white/[0.06] text-neutral-300 hover:text-white hover:bg-white/[0.05]"
                        }`}
                      >
                        <div
                          className={`w-8 h-8 rounded-xl flex items-center justify-center shrink-0 ${
                            isSelected
                              ? "bg-brand-green text-black"
                              : "bg-white/5 text-neutral-300"
                          }`}
                        >
                          <Icon className="w-4 h-4" />
                        </div>
                        <div className="overflow-hidden">
                          <div className="text-sm font-semibold truncate">
                            {config.name}
                          </div>
                        </div>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Step 2: Monthly Leads Slider */}
              <div className="pt-5 border-t border-white/[0.06]">
                <div className="flex items-center justify-between mb-2">
                  <label className="text-sm font-mono uppercase tracking-wider text-neutral-200 font-bold">
                    Step 2: Leads Generated Per Month
                  </label>
                  <span className="font-mono text-base sm:text-lg font-extrabold text-brand-green">
                    {formatNumber(inputs.monthlyLeads)} leads
                  </span>
                </div>
                <input
                  type="range"
                  min="10"
                  max="5000"
                  step="10"
                  value={inputs.monthlyLeads}
                  onChange={(e) =>
                    setInputs({ ...inputs, monthlyLeads: Number(e.target.value) })
                  }
                  className="w-full accent-brand-green"
                />
                <div className="flex justify-between text-xs text-neutral-400 font-mono mt-1.5">
                  <span>10 leads</span>
                  <span>1,000</span>
                  <span>2,500</span>
                  <span>5,000+</span>
                </div>
              </div>

              {/* Step 3: Lead-to-Customer Conversion Rate */}
              <div className="pt-5 border-t border-white/[0.06]">
                <div className="flex items-center justify-between mb-2">
                  <label className="text-sm font-mono uppercase tracking-wider text-neutral-200 font-bold">
                    Step 3: Conversion Rate
                  </label>
                  <span className="font-mono text-base sm:text-lg font-extrabold text-brand-gold">
                    {inputs.conversionRate}%
                  </span>
                </div>
                <input
                  type="range"
                  min="1"
                  max="35"
                  step="0.5"
                  value={inputs.conversionRate}
                  onChange={(e) =>
                    setInputs({
                      ...inputs,
                      conversionRate: Number(e.target.value),
                    })
                  }
                  className="w-full accent-brand-gold"
                />
                <div className="flex justify-between text-xs text-neutral-400 font-mono mt-1.5">
                  <span>1%</span>
                  <span>10%</span>
                  <span>20%</span>
                  <span>35%</span>
                </div>
              </div>

              {/* Step 4: Average Customer Value (INR) */}
              <div className="pt-5 border-t border-white/[0.06]">
                <div className="flex items-center justify-between mb-2">
                  <label className="text-sm font-mono uppercase tracking-wider text-neutral-200 font-bold">
                    Step 4: Average Deal / Customer Value
                  </label>
                  <span className="font-mono text-base sm:text-lg font-extrabold text-white">
                    {formatINR(inputs.customerValue)}
                  </span>
                </div>
                <input
                  type="range"
                  min="2000"
                  max="500000"
                  step="2000"
                  value={inputs.customerValue}
                  onChange={(e) =>
                    setInputs({
                      ...inputs,
                      customerValue: Number(e.target.value),
                    })
                  }
                  className="w-full"
                />
                <div className="flex justify-between text-xs text-neutral-400 font-mono mt-1.5">
                  <span>₹2,000</span>
                  <span>₹1 Lakh</span>
                  <span>₹3 Lakh</span>
                  <span>₹5 Lakh+</span>
                </div>
              </div>

              {/* Step 5: Manual Follow-Up Hours Weekly */}
              <div className="pt-5 border-t border-white/[0.06]">
                <div className="flex items-center justify-between mb-2">
                  <label className="text-sm font-mono uppercase tracking-wider text-neutral-200 font-bold">
                    Step 5: Team Weekly Follow-Up Time
                  </label>
                  <span className="font-mono text-base sm:text-lg font-extrabold text-brand-lime">
                    {inputs.followupHoursWeekly} Hours / Wk
                  </span>
                </div>
                <input
                  type="range"
                  min="0"
                  max="80"
                  step="1"
                  value={inputs.followupHoursWeekly}
                  onChange={(e) =>
                    setInputs({
                      ...inputs,
                      followupHoursWeekly: Number(e.target.value),
                    })
                  }
                  className="w-full"
                />
                <div className="flex justify-between text-xs text-neutral-400 font-mono mt-1.5">
                  <span>0 hrs</span>
                  <span>20 hrs</span>
                  <span>40 hrs</span>
                  <span>80 hrs</span>
                </div>
              </div>

              {/* Step 6: Monthly Ad Spend */}
              <div className="pt-5 border-t border-white/[0.06]">
                <div className="flex items-center justify-between mb-2">
                  <label className="text-sm font-mono uppercase tracking-wider text-neutral-200 font-bold">
                    Step 6: Monthly Marketing / Ad Spend
                  </label>
                  <span className="font-mono text-base sm:text-lg font-extrabold text-neutral-200">
                    {formatINR(inputs.monthlyAdSpend)}
                  </span>
                </div>
                <input
                  type="range"
                  min="0"
                  max="500000"
                  step="5000"
                  value={inputs.monthlyAdSpend}
                  onChange={(e) =>
                    setInputs({
                      ...inputs,
                      monthlyAdSpend: Number(e.target.value),
                    })
                  }
                  className="w-full"
                />
                <div className="flex justify-between text-xs text-neutral-400 font-mono mt-1.5">
                  <span>₹0</span>
                  <span>₹1 Lakh</span>
                  <span>₹3 Lakh</span>
                  <span>₹5 Lakh+</span>
                </div>
              </div>
            </div>

            {/* Reset Defaults button */}
            <button
              onClick={() =>
                setInputs({
                  industry: "fitness",
                  monthlyLeads: 250,
                  conversionRate: 4,
                  customerValue: 25000,
                  followupHoursWeekly: 25,
                  monthlyAdSpend: 35000,
                })
              }
              className="w-full py-3.5 rounded-2xl bg-white/[0.02] hover:bg-white/[0.06] border border-white/[0.08] text-sm font-mono font-semibold text-neutral-300 hover:text-white flex items-center justify-center gap-2 transition-all"
            >
              <RefreshCcw className="w-4 h-4" />
              <span>Reset to Standard Benchmark</span>
            </button>
          </div>

          {/* Right Column: Dynamic AI Results & Wow Moment (7 Cols) */}
          <div className="lg:col-span-7 space-y-6">
            {/* Top Score Banner: Business Growth Score & Health Meter */}
            <div className="p-6 sm:p-7 rounded-3xl glass-panel border border-brand-green/30 bg-gradient-to-br from-[#0a1408] via-[#080808] to-[#121105]">
              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
                <div>
                  <div className="text-xs sm:text-sm font-mono uppercase tracking-widest text-neutral-300 font-semibold">
                    Calculated Health Metric
                  </div>
                  <div className="text-2xl sm:text-4xl font-display font-extrabold text-white mt-1">
                    Business Growth Score™
                  </div>
                  <div className="flex flex-wrap items-center gap-2.5 mt-2.5">
                    <span
                      className={`px-3.5 py-1 rounded-full text-xs sm:text-sm font-mono font-bold ${
                        results.healthStatus === "GREEN"
                          ? "bg-brand-green/20 text-brand-green border border-brand-green/40"
                          : results.healthStatus === "YELLOW"
                          ? "bg-brand-gold/20 text-brand-gold border border-brand-gold/40"
                          : "bg-red-500/20 text-red-400 border border-red-500/40"
                      }`}
                    >
                      {results.healthStatus === "GREEN" ? "🟢" : results.healthStatus === "YELLOW" ? "🟡" : "🔴"}{" "}
                      {results.healthLabel}
                    </span>
                    <span className="text-xs sm:text-sm text-neutral-300 font-medium">
                      Operating at ~{results.efficiencyPercent}% efficiency
                    </span>
                  </div>
                </div>

                <div className="relative w-32 h-32 rounded-2xl bg-black/60 border border-brand-green/40 flex flex-col items-center justify-center p-3 shadow-glow-green/30 shrink-0">
                  <div className="text-xs font-mono text-neutral-400 uppercase font-semibold">Score</div>
                  <div className="font-display font-black text-3xl sm:text-4xl text-white">
                    {results.growthScore}
                    <span className="text-sm text-neutral-500 font-normal">/100</span>
                  </div>
                  <div className="text-xs font-mono text-brand-green font-bold">
                    IQ {results.businessIqScore}
                  </div>
                </div>
              </div>

              {/* 6 Sub-Scores Grid */}
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-6 mt-6 border-t border-white/[0.08]">
                {[
                  { label: "Marketing Score", val: results.subScores.marketingScore, color: "text-brand-green" },
                  { label: "Sales Pipeline", val: results.subScores.salesScore, color: "text-brand-gold" },
                  { label: "Automation Index", val: results.subScores.automationScore, color: "text-brand-lime" },
                  { label: "Lead Mgmt", val: results.subScores.leadManagementScore, color: "text-neutral-200" },
                  { label: "Follow-Up Speed", val: results.subScores.followupScore, color: "text-brand-green" },
                  { label: "Productivity", val: results.subScores.productivityScore, color: "text-brand-gold" },
                ].map((score, i) => (
                  <div key={i} className="p-3 rounded-xl bg-white/[0.02] border border-white/[0.05]">
                    <div className="text-xs sm:text-sm text-neutral-300 truncate font-medium">{score.label}</div>
                    <div className={`font-mono font-extrabold text-base sm:text-lg mt-0.5 ${score.color}`}>
                      {score.val}/100
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Current vs Automataiz Comparative Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {/* Card 1: Current Business Leaks */}
              <div className="p-5 sm:p-6 rounded-3xl bg-red-950/15 border border-red-500/20 backdrop-blur-xl space-y-4">
                <div className="flex items-center justify-between text-xs sm:text-sm font-mono text-red-400 font-bold">
                  <span className="flex items-center gap-1.5">
                    <AlertTriangle className="w-4 h-4 text-red-400" />
                    CURRENT REVENUE LEAKS
                  </span>
                  <span className="text-xs text-neutral-400 font-normal">Without Automataiz</span>
                </div>

                <div className="space-y-3">
                  <div>
                    <div className="text-xs sm:text-sm text-neutral-300">Estimated Monthly Lost Revenue</div>
                    <div className="font-mono font-black text-2xl sm:text-3xl text-red-400">
                      {formatINR(results.lostRevenueMonthly)}
                      <span className="text-sm text-neutral-400 font-normal"> / mo</span>
                    </div>
                    <div className="text-xs text-neutral-400 font-mono mt-0.5">
                      ₹{(results.lostRevenueAnnual / 100000).toFixed(1)} Lakhs / year disappearing
                    </div>
                  </div>

                  <div className="pt-3 border-t border-red-500/10 grid grid-cols-2 gap-2 text-xs sm:text-sm">
                    <div>
                      <div className="text-xs text-neutral-400">Lost Leads / Mo</div>
                      <div className="font-mono font-bold text-neutral-200 text-sm sm:text-base">
                        {results.leadsLostMonthly} Leads
                      </div>
                    </div>
                    <div>
                      <div className="text-xs text-neutral-400">Hours Wasted</div>
                      <div className="font-mono font-bold text-neutral-200 text-sm sm:text-base">
                        {results.hoursWastedMonthly} hrs / mo
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Card 2: With Automataiz OS */}
              <div className="p-5 sm:p-6 rounded-3xl bg-brand-green/10 border border-brand-green/40 backdrop-blur-xl space-y-4 shadow-glow-green/20">
                <div className="flex items-center justify-between text-xs sm:text-sm font-mono text-brand-green">
                  <span className="flex items-center gap-1.5 font-bold">
                    <Zap className="w-4 h-4 text-brand-green" />
                    WITH AUTOMATAIZ OS
                  </span>
                  <span className="bg-brand-green/20 px-2.5 py-0.5 rounded-full text-xs font-bold font-mono">
                    +{results.projectedRevenueIncreasePercent}% LIFT
                  </span>
                </div>

                <div className="space-y-3">
                  <div>
                    <div className="text-xs sm:text-sm text-neutral-200">Projected Monthly Revenue</div>
                    <div className="font-mono font-black text-2xl sm:text-3xl text-white">
                      {formatINR(results.projectedMonthlyRevenue)}
                      <span className="text-sm text-brand-green font-normal"> / mo</span>
                    </div>
                    <div className="text-xs sm:text-sm text-brand-green font-mono font-semibold mt-0.5">
                      +{formatINR(results.projectedMonthlyProfitIncrease)} Additional Profit/mo
                    </div>
                  </div>

                  <div className="pt-3 border-t border-brand-green/20 grid grid-cols-2 gap-2 text-xs sm:text-sm">
                    <div>
                      <div className="text-xs text-neutral-300">Time Reclaimed</div>
                      <div className="font-mono font-bold text-brand-gold text-sm sm:text-base">
                        {results.projectedTimeSavedMonthly} hrs / mo
                      </div>
                    </div>
                    <div>
                      <div className="text-xs text-neutral-300">Projected ROI</div>
                      <div className="font-mono font-bold text-brand-green text-sm sm:text-base">
                        {results.projectedRoiPercent}%
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Dynamic AI Diagnostic Recommendations */}
            <div className="p-5 sm:p-6 rounded-3xl glass-panel space-y-3">
              <div className="flex items-center justify-between text-xs sm:text-sm font-mono text-brand-gold border-b border-white/[0.06] pb-2 font-bold">
                <span className="flex items-center gap-2">
                  <Sparkles className="w-4 h-4" />
                  Dynamic AI Diagnosis & Recommended Strategy
                </span>
                <span className="text-xs text-neutral-400 font-mono">Nova AI Engine</span>
              </div>

              <div className="space-y-2.5">
                {results.recommendations.map((rec, idx) => (
                  <div
                    key={idx}
                    className="flex items-start gap-3 p-3.5 rounded-2xl bg-white/[0.02] border border-white/[0.04] text-xs sm:text-sm text-neutral-200 leading-relaxed"
                  >
                    <CheckCircle2 className="w-4 h-4 text-brand-green shrink-0 mt-0.5" />
                    <span>{rec}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Achievement Badges & Challenge Leaderboard */}
            <div className="p-5 sm:p-6 rounded-3xl glass-panel space-y-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2 text-xs sm:text-sm font-mono text-neutral-200 font-semibold">
                  <Trophy className="w-4 h-4 text-brand-gold" />
                  <span>Your Unlocked Growth Badges</span>
                </div>
                <span className="text-xs text-neutral-400 font-mono">Social Proof Benchmark</span>
              </div>

              <div className="flex flex-wrap gap-2">
                {results.badges.map((badge, i) => (
                  <span
                    key={i}
                    className="px-3.5 py-1.5 rounded-full text-xs sm:text-sm font-mono bg-gradient-to-r from-brand-green/20 to-brand-gold/20 border border-brand-green/40 text-neutral-100 flex items-center gap-2 font-medium"
                  >
                    <Award className="w-4 h-4 text-brand-gold" />
                    {badge}
                  </span>
                ))}
              </div>

              {/* Anonymous Industry Leaderboard */}
              <div className="pt-3 border-t border-white/[0.06]">
                <div className="text-xs sm:text-sm font-mono text-neutral-300 mb-2 font-medium">
                  Top Performing Verticals Operating on Automataiz:
                </div>
                <div className="grid grid-cols-3 gap-2.5 text-center text-xs sm:text-sm font-mono">
                  <div className="p-2.5 rounded-xl bg-white/[0.02] border border-white/[0.05]">
                    <div className="text-xs text-neutral-300">1. Health & Fitness</div>
                    <div className="text-brand-green font-bold text-sm sm:text-base">Score 91</div>
                  </div>
                  <div className="p-2.5 rounded-xl bg-white/[0.02] border border-white/[0.05]">
                    <div className="text-xs text-neutral-300">2. Real Estate</div>
                    <div className="text-brand-gold font-bold text-sm sm:text-base">Score 88</div>
                  </div>
                  <div className="p-2.5 rounded-xl bg-white/[0.02] border border-white/[0.05]">
                    <div className="text-xs text-neutral-300">3. Coaches & Trainers</div>
                    <div className="text-brand-lime font-bold text-sm sm:text-base">Score 85</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Big Action CTA: Download Free AI Business Audit PDF */}
            <div className="p-6 sm:p-8 rounded-3xl bg-gradient-to-r from-brand-green via-brand-lime to-brand-gold text-black shadow-glow-green/40 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div>
                <h4 className="font-display font-black text-xl sm:text-2xl tracking-tight">
                  Get Your Free AI Business Audit Report (PDF)
                </h4>
                <p className="text-xs sm:text-sm text-black/85 mt-1 font-medium">
                  Includes full 4-pillar leak roadmap, CAC reduction matrix & 90-day action plan.
                </p>
              </div>

              <button
                onClick={() => setAuditModalOpen(true)}
                className="w-full sm:w-auto px-6 py-4 rounded-xl bg-black text-white font-bold text-sm sm:text-base hover:bg-neutral-900 transition-all flex items-center justify-center gap-2 shadow-2xl shrink-0"
              >
                <FileDown className="w-5 h-5 text-brand-green" />
                <span>Download My Audit PDF</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Audit Download Lead Modal */}
      <AuditModal
        isOpen={auditModalOpen}
        onClose={() => setAuditModalOpen(false)}
        inputs={inputs}
        results={results}
      />
    </section>
  );
}
