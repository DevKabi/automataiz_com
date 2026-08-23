"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import {
  TrendingUp,
  Activity,
  Bot,
  Zap,
  Users,
  CheckCircle2,
  DollarSign,
  PhoneCall,
  MessageSquare,
  Sparkles,
  ArrowUpRight,
  ShieldCheck,
} from "lucide-react";
import { formatINR } from "@/lib/utils";

export default function HeroControlCenter() {
  const [activeTab, setActiveTab] = useState<"overview" | "ai-agents" | "pipeline" | "finance">("overview");
  const [liveRevenue, setLiveRevenue] = useState(3842900);
  const [leadCount, setLeadCount] = useState(1482);
  const [activeCalls, setActiveCalls] = useState(18);

  // Live simulation ticks
  useEffect(() => {
    const interval = setInterval(() => {
      setLiveRevenue((prev) => prev + Math.floor(Math.random() * 450) + 150);
      if (Math.random() > 0.6) {
        setLeadCount((prev) => prev + 1);
      }
      setActiveCalls(14 + Math.floor(Math.random() * 8));
    }, 2800);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full max-w-2xl mx-auto lg:max-w-none">
      {/* Outer ambient glow */}
      <div className="absolute -inset-1 bg-gradient-to-r from-brand-green/30 via-brand-lime/20 to-brand-gold/30 rounded-3xl blur-2xl opacity-60 group-hover:opacity-100 transition duration-1000 animate-pulse-glow" />

      {/* Main Glass Cockpit Frame */}
      <div className="relative rounded-3xl bg-[#080808]/90 border border-white/[0.12] p-5 sm:p-7 shadow-2xl backdrop-blur-2xl overflow-hidden">
        {/* Top Control Bar */}
        <div className="flex items-center justify-between border-b border-white/[0.08] pb-4 mb-5">
          <div className="flex items-center gap-3">
            <div className="flex items-center gap-1.5">
              <span className="w-3 h-3 rounded-full bg-red-500/80 border border-red-400" />
              <span className="w-3 h-3 rounded-full bg-yellow-500/80 border border-yellow-400" />
              <span className="w-3 h-3 rounded-full bg-brand-green/80 border border-brand-green" />
            </div>
            <div className="h-4 w-[1px] bg-white/10" />
            <div className="flex items-center gap-2">
              <Image
                src="/images/ai-chip.png"
                alt="AI Chip"
                width={20}
                height={20}
                className="animate-spin-slow object-contain"
              />
              <span className="font-mono text-xs font-semibold tracking-wider text-neutral-200">
                AUTOMATAIZ_OS // v2.5.0
              </span>
            </div>
          </div>

          <div className="flex items-center gap-2 font-mono text-[11px] text-brand-green bg-brand-green/10 border border-brand-green/30 px-3 py-1 rounded-full">
            <span className="w-1.5 h-1.5 rounded-full bg-brand-green animate-ping" />
            <span>AI Brain: 99.8% Efficiency</span>
          </div>
        </div>

        {/* Interactive Tabs */}
        <div className="flex items-center gap-2 mb-5 overflow-x-auto pb-1 scrollbar-none">
          {[
            { id: "overview", label: "Executive Cockpit", icon: Activity },
            { id: "ai-agents", label: "Digital Workforce", icon: Bot },
            { id: "pipeline", label: "Autonomous Pipeline", icon: Zap },
            { id: "finance", label: "Revenue Telemetry", icon: DollarSign },
          ].map((tab) => {
            const Icon = tab.icon;
            const isSelected = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id as any)}
                className={`flex items-center gap-2 px-3.5 py-1.5 rounded-xl text-xs font-medium transition-all shrink-0 ${
                  isSelected
                    ? "bg-gradient-to-r from-brand-green/20 to-brand-gold/20 text-white border border-brand-green/50 shadow-glow-green/20"
                    : "bg-white/[0.03] text-neutral-400 hover:text-white border border-white/[0.05]"
                }`}
              >
                <Icon className={`w-3.5 h-3.5 ${isSelected ? "text-brand-green" : "text-neutral-400"}`} />
                <span>{tab.label}</span>
              </button>
            );
          })}
        </div>

        {/* Tab 1: Overview Cockpit */}
        {activeTab === "overview" && (
          <div className="space-y-4 animate-in fade-in duration-300">
            {/* Top Metric Cards */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
              <div className="p-3.5 rounded-2xl bg-white/[0.02] border border-white/[0.06] hover:border-brand-green/30 transition-all">
                <div className="flex items-center justify-between text-neutral-400 text-[11px] mb-1">
                  <span>Monthly Revenue</span>
                  <TrendingUp className="w-3.5 h-3.5 text-brand-green" />
                </div>
                <div className="font-mono font-bold text-lg text-white">
                  ₹{(liveRevenue / 100000).toFixed(2)}L
                </div>
                <div className="text-[10px] text-brand-green font-mono flex items-center gap-1 mt-0.5">
                  <span>+34.8% vs Manual</span>
                </div>
              </div>

              <div className="p-3.5 rounded-2xl bg-white/[0.02] border border-white/[0.06] hover:border-brand-gold/30 transition-all">
                <div className="flex items-center justify-between text-neutral-400 text-[11px] mb-1">
                  <span>Qualified Leads</span>
                  <Users className="w-3.5 h-3.5 text-brand-gold" />
                </div>
                <div className="font-mono font-bold text-lg text-white">
                  {leadCount}
                </div>
                <div className="text-[10px] text-brand-gold font-mono flex items-center gap-1 mt-0.5">
                  <span>AI Scored &gt;85</span>
                </div>
              </div>

              <div className="col-span-2 sm:col-span-1 p-3.5 rounded-2xl bg-white/[0.02] border border-white/[0.06] hover:border-brand-lime/30 transition-all">
                <div className="flex items-center justify-between text-neutral-400 text-[11px] mb-1">
                  <span>AI SDR Speed</span>
                  <PhoneCall className="w-3.5 h-3.5 text-brand-lime" />
                </div>
                <div className="font-mono font-bold text-lg text-white">
                  &lt; 90 Secs
                </div>
                <div className="text-[10px] text-brand-lime font-mono flex items-center gap-1 mt-0.5">
                  <span>{activeCalls} live calls active</span>
                </div>
              </div>
            </div>

            {/* Middle Real-time Action Stream */}
            <div className="p-4 rounded-2xl bg-white/[0.02] border border-white/[0.06] space-y-2.5">
              <div className="flex items-center justify-between text-xs font-mono text-neutral-300 border-b border-white/[0.05] pb-2">
                <span className="flex items-center gap-2">
                  <Activity className="w-3.5 h-3.5 text-brand-green animate-pulse" />
                  Live AI Workflow Stream
                </span>
                <span className="text-brand-gold text-[11px]">Real-time Telemetry</span>
              </div>

              <div className="space-y-2 text-xs">
                <div className="flex items-center justify-between p-2 rounded-xl bg-brand-green/5 border border-brand-green/20">
                  <div className="flex items-center gap-2.5">
                    <div className="w-2 h-2 rounded-full bg-brand-green animate-ping" />
                    <span className="text-neutral-200">
                      <strong className="text-white">Nova AI</strong> scheduled high-value demo with <em>Dr. Alok Verma</em>
                    </span>
                  </div>
                  <span className="text-[10px] font-mono text-neutral-400">Just now</span>
                </div>

                <div className="flex items-center justify-between p-2 rounded-xl bg-white/[0.02] border border-white/[0.04]">
                  <div className="flex items-center gap-2.5">
                    <div className="w-2 h-2 rounded-full bg-brand-gold" />
                    <span className="text-neutral-200">
                      <strong className="text-white">AI SDR</strong> converted WhatsApp inquiry into ₹85,000 Opportunity
                    </span>
                  </div>
                  <span className="text-[10px] font-mono text-neutral-400">2m ago</span>
                </div>

                <div className="flex items-center justify-between p-2 rounded-xl bg-white/[0.02] border border-white/[0.04]">
                  <div className="flex items-center gap-2.5">
                    <div className="w-2 h-2 rounded-full bg-brand-lime" />
                    <span className="text-neutral-200">
                      <strong className="text-white">Ad Launcher</strong> auto-optimized Meta Campaign (CPL down to ₹142)
                    </span>
                  </div>
                  <span className="text-[10px] font-mono text-neutral-400">5m ago</span>
                </div>
              </div>
            </div>

            {/* Bottom Nova AI Assistant Bar */}
            <div className="p-3 rounded-2xl bg-gradient-to-r from-brand-green/15 via-[#0c180a] to-brand-gold/15 border border-brand-green/30 flex items-center justify-between gap-3">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-[#080808] border border-brand-green/40 flex items-center justify-center">
                  <Sparkles className="w-4 h-4 text-brand-green" />
                </div>
                <div>
                  <div className="text-xs font-semibold text-white">Nova AI Executive Briefing</div>
                  <div className="text-[11px] text-neutral-300">
                    &quot;Follow-up velocity improved 4.2x. Zero lead drop-offs detected today.&quot;
                  </div>
                </div>
              </div>
              <div className="px-2.5 py-1 rounded-full bg-black/60 border border-brand-green/40 text-[10px] font-mono text-brand-green shrink-0">
                100% Autonomous
              </div>
            </div>
          </div>
        )}

        {/* Tab 2: Digital Workforce */}
        {activeTab === "ai-agents" && (
          <div className="grid grid-cols-2 gap-3 animate-in fade-in duration-300">
            {[
              {
                role: "AI SDR Specialist",
                status: "18 Calls Active",
                tasks: "Instant lead qualification, voice IVR, WhatsApp booking",
                accent: "text-brand-green border-brand-green/30 bg-brand-green/5",
              },
              {
                role: "AI Marketing Manager",
                status: "Campaign Running",
                tasks: "Meta & Google Ads auto-tuning, daily social generation",
                accent: "text-brand-gold border-brand-gold/30 bg-brand-gold/5",
              },
              {
                role: "AI Customer Success",
                status: "99.4% CSAT",
                tasks: "Onboarding automation, churn detection, instant support",
                accent: "text-brand-lime border-brand-lime/30 bg-brand-lime/5",
              },
              {
                role: "AI Financial Analyst",
                status: "Forecast Ready",
                tasks: "Real-time CAC/LTV tracking, invoice reconciliations",
                accent: "text-neutral-200 border-white/10 bg-white/[0.02]",
              },
            ].map((agent, i) => (
              <div
                key={i}
                className={`p-3.5 rounded-2xl border ${agent.accent} space-y-2`}
              >
                <div className="flex items-center justify-between">
                  <div className="font-semibold text-xs text-white">{agent.role}</div>
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-black/40 border border-current">
                    {agent.status}
                  </span>
                </div>
                <p className="text-[11px] text-neutral-400 leading-snug">{agent.tasks}</p>
                <div className="pt-1 flex items-center justify-between text-[10px] text-neutral-500 font-mono">
                  <span>24/7/365 Non-stop</span>
                  <CheckCircle2 className="w-3 h-3 text-brand-green" />
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Tab 3: Autonomous Pipeline */}
        {activeTab === "pipeline" && (
          <div className="space-y-3 animate-in fade-in duration-300">
            <div className="grid grid-cols-4 gap-2 text-center text-[11px] font-mono text-neutral-400 border-b border-white/[0.08] pb-2">
              <div>New Lead</div>
              <div>AI Qualified</div>
              <div>Demo Scheduled</div>
              <div className="text-brand-green">Closed Won</div>
            </div>

            <div className="grid grid-cols-4 gap-2">
              <div className="space-y-2">
                <div className="p-2.5 rounded-xl bg-white/[0.03] border border-white/[0.06] text-xs">
                  <div className="font-semibold text-white text-[11px]">Rahul Fitness Club</div>
                  <div className="text-[10px] text-neutral-400">₹45,000 / mo</div>
                </div>
              </div>

              <div className="space-y-2">
                <div className="p-2.5 rounded-xl bg-brand-gold/10 border border-brand-gold/30 text-xs">
                  <div className="font-semibold text-white text-[11px]">Apex Real Estate</div>
                  <div className="text-[10px] text-brand-gold font-mono">Score 94 🔥</div>
                </div>
              </div>

              <div className="space-y-2">
                <div className="p-2.5 rounded-xl bg-brand-lime/10 border border-brand-lime/30 text-xs">
                  <div className="font-semibold text-white text-[11px]">Global Edu Academy</div>
                  <div className="text-[10px] text-brand-lime font-mono">Today 4:30 PM</div>
                </div>
              </div>

              <div className="space-y-2">
                <div className="p-2.5 rounded-xl bg-brand-green/15 border border-brand-green/40 text-xs">
                  <div className="font-semibold text-white text-[11px]">Zenith Agency</div>
                  <div className="text-[10px] text-brand-green font-mono font-bold">+₹1,20,000</div>
                </div>
              </div>
            </div>

            <div className="p-3 rounded-xl bg-white/[0.02] border border-white/[0.06] text-xs text-neutral-400 flex items-center justify-between">
              <span>Automated Pipeline Flow Velocity:</span>
              <strong className="text-white font-mono">3.8x Faster than manual CRM</strong>
            </div>
          </div>
        )}

        {/* Tab 4: Finance Telemetry */}
        {activeTab === "finance" && (
          <div className="space-y-3 animate-in fade-in duration-300">
            <div className="p-4 rounded-2xl bg-white/[0.02] border border-white/[0.06] flex items-center justify-between">
              <div>
                <div className="text-xs text-neutral-400">Total Run-rate ARR</div>
                <div className="font-mono font-bold text-2xl text-white">₹4.61 Crore</div>
              </div>
              <div className="text-right">
                <div className="text-xs text-neutral-400">Profit Margin</div>
                <div className="font-mono font-bold text-2xl text-brand-green">84.2%</div>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-3 text-xs">
              <div className="p-3 rounded-xl bg-white/[0.02] border border-white/[0.06]">
                <div className="text-neutral-400 text-[11px]">Customer Lifetime Value (LTV)</div>
                <div className="font-mono text-base font-bold text-white mt-1">₹3,40,000</div>
              </div>
              <div className="p-3 rounded-xl bg-white/[0.02] border border-white/[0.06]">
                <div className="text-neutral-400 text-[11px]">Blended CAC</div>
                <div className="font-mono text-base font-bold text-brand-gold mt-1">₹4,200 (LTV/CAC 80x)</div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
