"use client";

import React, { useState } from "react";
import {
  TrendingUp,
  AlertTriangle,
  Sparkles,
  Zap,
  DollarSign,
  Users,
  Layers,
  ArrowUpRight,
  ShieldCheck,
  BellRing,
  Activity,
  CheckCircle2,
} from "lucide-react";
import { formatINR } from "@/lib/utils";

export default function CeoDashboardDemo() {
  const [selectedPillar, setSelectedPillar] = useState<
    "marketing" | "sales" | "operations" | "finance" | "ai"
  >("ai");

  return (
    <section className="relative py-24 sm:py-32 bg-[#060606] overflow-hidden border-t border-white/[0.06]">
      {/* Background ambient glow */}
      <div className="absolute top-1/2 right-1/4 w-[600px] h-[600px] glow-orb-gold opacity-15 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-gold/10 border border-brand-gold/30 text-brand-gold text-xs font-mono mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Executive Command Center</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-display font-bold text-white tracking-tight">
            The CEO Intelligence System.{" "}
            <span className="text-gradient-gold">5-Minute Business Clarity.</span>
          </h2>
          <p className="mt-4 text-sm sm:text-base text-neutral-400">
            A CEO should never open 10 different platforms or wait for weekly reports. Manage your entire business from a single intelligent cockpit.
          </p>
        </div>

        {/* Dashboard Frame */}
        <div className="p-6 sm:p-8 rounded-3xl glass-panel border border-white/[0.12] bg-[#080808]/90 shadow-2xl relative overflow-hidden">
          {/* Top Bar */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-b border-white/[0.08] pb-5 mb-6">
            <div className="flex items-center gap-3">
              <div className="w-3 h-3 rounded-full bg-brand-green animate-pulse" />
              <div>
                <h3 className="text-lg font-display font-bold text-white">
                  CEO Executive Intelligence Cockpit
                </h3>
                <p className="text-xs text-neutral-400 font-mono">
                  Live Sync Across All 4 Pillars + AI Intelligence Layer
                </p>
              </div>
            </div>

            {/* Pillar Selector Pills */}
            <div className="flex items-center gap-1.5 bg-white/[0.03] p-1 rounded-2xl border border-white/[0.06] overflow-x-auto max-w-full">
              {[
                { id: "ai", label: "AI Intelligence Layer", color: "text-brand-green" },
                { id: "marketing", label: "Marketing", color: "text-brand-gold" },
                { id: "sales", label: "Sales", color: "text-brand-lime" },
                { id: "operations", label: "Operations", color: "text-white" },
                { id: "finance", label: "Finance", color: "text-brand-green" },
              ].map((p) => {
                const isSelected = selectedPillar === p.id;
                return (
                  <button
                    key={p.id}
                    onClick={() => setSelectedPillar(p.id as any)}
                    className={`px-3 py-1.5 rounded-xl text-xs font-mono font-medium transition-all shrink-0 ${
                      isSelected
                        ? "bg-brand-green text-black font-bold shadow-glow-green/30"
                        : "text-neutral-400 hover:text-white hover:bg-white/[0.05]"
                    }`}
                  >
                    {p.label}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Dynamic Content based on selected pillar */}
          {selectedPillar === "ai" && (
            <div className="space-y-6 animate-in fade-in duration-300">
              {/* Daily Nova Briefing */}
              <div className="p-5 rounded-2xl bg-gradient-to-r from-[#0d1f0c] via-black to-[#191506] border border-brand-green/30 space-y-3">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2 text-xs font-mono text-brand-green font-bold">
                    <Sparkles className="w-4 h-4" />
                    <span>NOVA AI // MORNING EXECUTIVE BRIEFING</span>
                  </div>
                  <span className="text-[10px] font-mono text-neutral-400">08:30 AM Auto-Generated</span>
                </div>
                <p className="text-sm text-neutral-200 leading-relaxed">
                  &quot;Good morning. Revenue is pacing at <strong className="text-brand-green">+18% this month</strong>. Your AI SDR engaged 84 new prospects yesterday with an 82% qualification rate. Two high-value enterprise deals in Real Estate vertical require founder touchpoint today.&quot;
                </p>
              </div>

              {/* 2-Column: Early Warning (Left) vs Opportunity Detection (Right) */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {/* Early Warning */}
                <div className="p-5 rounded-2xl bg-red-950/15 border border-red-500/20 space-y-3">
                  <div className="flex items-center justify-between text-xs font-mono text-red-400 font-bold">
                    <span className="flex items-center gap-2">
                      <AlertTriangle className="w-4 h-4" />
                      EARLY RISK WARNING SYSTEM
                    </span>
                    <span className="text-[10px] px-2 py-0.5 rounded-full bg-red-500/20">Active Guard</span>
                  </div>
                  <div className="space-y-2 text-xs">
                    <div className="p-2.5 rounded-xl bg-black/40 border border-red-500/20 text-neutral-300">
                      <strong className="text-white">Lead Nurture SLA:</strong> 12 inbound inquiries waiting &gt;15 mins in Agency pipeline.
                      <div className="text-[11px] text-red-400 mt-1 font-mono">
                        Action Taken: Auto-routed to AI SDR for instant WhatsApp engagement.
                      </div>
                    </div>
                  </div>
                </div>

                {/* Opportunity Detection */}
                <div className="p-5 rounded-2xl bg-brand-green/10 border border-brand-green/30 space-y-3">
                  <div className="flex items-center justify-between text-xs font-mono text-brand-green font-bold">
                    <span className="flex items-center gap-2">
                      <Zap className="w-4 h-4" />
                      OPPORTUNITY DETECTION ENGINE
                    </span>
                    <span className="text-[10px] px-2 py-0.5 rounded-full bg-brand-green/20">Growth Trigger</span>
                  </div>
                  <div className="space-y-2 text-xs">
                    <div className="p-2.5 rounded-xl bg-black/40 border border-brand-green/20 text-neutral-300">
                      <strong className="text-white">Ad Arbitrage Detected:</strong> Meta Fitness campaign ROAS increased to 5.4x.
                      <div className="text-[11px] text-brand-gold mt-1 font-mono">
                        Recommendation: Scale daily budget by ₹15,000 to capture 240+ extra leads.
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {selectedPillar === "marketing" && (
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 animate-in fade-in duration-300">
              <div className="p-4 rounded-2xl bg-white/[0.02] border border-white/[0.06]">
                <div className="text-xs text-neutral-400">Total Leads (MTD)</div>
                <div className="font-mono font-bold text-2xl text-white mt-1">2,840</div>
                <div className="text-[10px] text-brand-green font-mono mt-1">+24.6% vs last month</div>
              </div>
              <div className="p-4 rounded-2xl bg-white/[0.02] border border-white/[0.06]">
                <div className="text-xs text-neutral-400">Blended Cost Per Lead</div>
                <div className="font-mono font-bold text-2xl text-brand-gold mt-1">₹148</div>
                <div className="text-[10px] text-brand-green font-mono mt-1">-32% ad spend waste</div>
              </div>
              <div className="p-4 rounded-2xl bg-white/[0.02] border border-white/[0.06]">
                <div className="text-xs text-neutral-400">Funnel Conversion Rate</div>
                <div className="font-mono font-bold text-2xl text-brand-lime mt-1">11.4%</div>
                <div className="text-[10px] text-brand-lime font-mono mt-1">Industry avg: 3.2%</div>
              </div>
              <div className="p-4 rounded-2xl bg-white/[0.02] border border-white/[0.06]">
                <div className="text-xs text-neutral-400">AI Social Reach</div>
                <div className="font-mono font-bold text-2xl text-neutral-200 mt-1">480K</div>
                <div className="text-[10px] text-brand-green font-mono mt-1">100% automated posts</div>
              </div>
            </div>
          )}

          {selectedPillar === "sales" && (
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 animate-in fade-in duration-300">
              <div className="p-4 rounded-2xl bg-white/[0.02] border border-white/[0.06]">
                <div className="text-xs text-neutral-400">Pipeline Deal Value</div>
                <div className="font-mono font-bold text-2xl text-white mt-1">₹84.5 Lakh</div>
                <div className="text-[10px] text-brand-gold font-mono mt-1">68 Qualified Deals</div>
              </div>
              <div className="p-4 rounded-2xl bg-white/[0.02] border border-white/[0.06]">
                <div className="text-xs text-neutral-400">Sales Conversion %</div>
                <div className="font-mono font-bold text-2xl text-brand-green mt-1">28.4%</div>
                <div className="text-[10px] text-brand-green font-mono mt-1">+8.2% with AI SDR</div>
              </div>
              <div className="p-4 rounded-2xl bg-white/[0.02] border border-white/[0.06]">
                <div className="text-xs text-neutral-400">Telecalling IVR Calls</div>
                <div className="font-mono font-bold text-2xl text-neutral-200 mt-1">1,420</div>
                <div className="text-[10px] text-neutral-400 font-mono mt-1">94% Answer rate</div>
              </div>
              <div className="p-4 rounded-2xl bg-white/[0.02] border border-white/[0.06]">
                <div className="text-xs text-neutral-400">Avg Deal Velocity</div>
                <div className="font-mono font-bold text-2xl text-brand-lime mt-1">4.2 Days</div>
                <div className="text-[10px] text-brand-lime font-mono mt-1">Down from 18 days</div>
              </div>
            </div>
          )}

          {selectedPillar === "operations" && (
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 animate-in fade-in duration-300">
              <div className="p-4 rounded-2xl bg-white/[0.02] border border-white/[0.06]">
                <div className="text-xs text-neutral-400">Task Completion Rate</div>
                <div className="font-mono font-bold text-2xl text-brand-green mt-1">98.2%</div>
                <div className="text-[10px] text-brand-green font-mono mt-1">Zero overdue tasks</div>
              </div>
              <div className="p-4 rounded-2xl bg-white/[0.02] border border-white/[0.06]">
                <div className="text-xs text-neutral-400">Automated Workflows</div>
                <div className="font-mono font-bold text-2xl text-white mt-1">142 Active</div>
                <div className="text-[10px] text-neutral-400 font-mono mt-1">8,400 triggers/day</div>
              </div>
              <div className="p-4 rounded-2xl bg-white/[0.02] border border-white/[0.06]">
                <div className="text-xs text-neutral-400">Support First Response</div>
                <div className="font-mono font-bold text-2xl text-brand-gold mt-1">&lt; 45 Secs</div>
                <div className="text-[10px] text-brand-gold font-mono mt-1">Via Unified Inbox</div>
              </div>
              <div className="p-4 rounded-2xl bg-white/[0.02] border border-white/[0.06]">
                <div className="text-xs text-neutral-400">Team Productivity</div>
                <div className="font-mono font-bold text-2xl text-brand-lime mt-1">4.6x Lift</div>
                <div className="text-[10px] text-brand-lime font-mono mt-1">Human + AI synergy</div>
              </div>
            </div>
          )}

          {selectedPillar === "finance" && (
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 animate-in fade-in duration-300">
              <div className="p-4 rounded-2xl bg-white/[0.02] border border-white/[0.06]">
                <div className="text-xs text-neutral-400">Monthly Recurring (MRR)</div>
                <div className="font-mono font-bold text-2xl text-white mt-1">₹38.4 Lakh</div>
                <div className="text-[10px] text-brand-green font-mono mt-1">ARR: ₹4.6 Crore</div>
              </div>
              <div className="p-4 rounded-2xl bg-white/[0.02] border border-white/[0.06]">
                <div className="text-xs text-neutral-400">Net Profit Margin</div>
                <div className="font-mono font-bold text-2xl text-brand-green mt-1">78.5%</div>
                <div className="text-[10px] text-brand-green font-mono mt-1">High leverage SaaS</div>
              </div>
              <div className="p-4 rounded-2xl bg-white/[0.02] border border-white/[0.06]">
                <div className="text-xs text-neutral-400">Customer Lifetime Value</div>
                <div className="font-mono font-bold text-2xl text-brand-gold mt-1">₹2,85,000</div>
                <div className="text-[10px] text-brand-gold font-mono mt-1">LTV/CAC ratio: 42x</div>
              </div>
              <div className="p-4 rounded-2xl bg-white/[0.02] border border-white/[0.06]">
                <div className="text-xs text-neutral-400">Gross Margin</div>
                <div className="font-mono font-bold text-2xl text-neutral-200 mt-1">91.4%</div>
                <div className="text-[10px] text-neutral-400 font-mono mt-1">Zero server bloat</div>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
