"use client";

import React, { useState } from "react";
import {
  Bot,
  Sparkles,
  PhoneCall,
  Megaphone,
  CheckSquare,
  HeartHandshake,
  DollarSign,
  Briefcase,
  PlusCircle,
  ShieldCheck,
  CheckCircle2,
  ArrowRight,
} from "lucide-react";
import Link from "next/link";

interface Agent {
  id: string;
  name: string;
  department: string;
  icon: any;
  status: string;
  kpis: string[];
  responsibilities: string[];
  color: string;
}

const AI_AGENTS: Agent[] = [
  {
    id: "sdr",
    name: "AI Sales Development Rep (SDR)",
    department: "Sales Department",
    icon: PhoneCall,
    status: "Active (24/7 Lead Qual)",
    kpis: ["<90s First Response", "82% Qualification Rate", "240+ Booked Calls/Mo"],
    responsibilities: [
      "Instantly engages new leads over WhatsApp, IVR and Web Chat",
      "Qualifies budget, authority, timeline, and buying criteria",
      "Books qualified demos directly onto executive calendars",
    ],
    color: "from-brand-green/20 to-brand-green/5 border-brand-green/40 text-brand-green",
  },
  {
    id: "marketing",
    name: "AI Marketing Manager",
    department: "Marketing Department",
    icon: Megaphone,
    status: "Active (Campaign Tuning)",
    kpis: ["-32% Ad CPL", "3x Organic Social Reach", "100% Automated Copy"],
    responsibilities: [
      "Generates high-converting ad copy, hooks, and video scripts",
      "Monitors Meta and Google Ads performance in real time",
      "Schedules social posts, carousels, and email newsletters",
    ],
    color: "from-brand-gold/20 to-brand-gold/5 border-brand-gold/40 text-brand-gold",
  },
  {
    id: "operations",
    name: "AI Operations Coordinator",
    department: "Operations Department",
    icon: CheckSquare,
    status: "Active (SLA Monitoring)",
    kpis: ["99.8% On-time SLA", "Zero Missed Tasks", "4.6x Team Velocity"],
    responsibilities: [
      "Monitors workflow execution across teams and departments",
      "Auto-assigns tasks and detects operational bottlenecks",
      "Generates daily performance digests and accountability logs",
    ],
    color: "from-brand-lime/20 to-brand-lime/5 border-brand-lime/40 text-brand-lime",
  },
  {
    id: "cs",
    name: "AI Customer Success Agent",
    department: "Customer Experience",
    icon: HeartHandshake,
    status: "Active (Retention Guard)",
    kpis: ["98% Customer Satisfaction", "<45s Resolution", "18% Upsell Rate"],
    responsibilities: [
      "Guides new customers through automated onboarding sequences",
      "Monitors customer activity and flags churn risks early",
      "Identifies expansion and upsell opportunities automatically",
    ],
    color: "from-brand-green/20 to-brand-green/5 border-brand-green/40 text-brand-green",
  },
  {
    id: "finance",
    name: "AI Financial Analyst",
    department: "Finance Department",
    icon: DollarSign,
    status: "Active (Cash Flow Audit)",
    kpis: ["99.9% Accuracy", "Real-time LTV/CAC", "Automated Invoicing"],
    responsibilities: [
      "Tracks MRR, ARR, and gross margins across all revenue channels",
      "Reconciles customer billing, subscriptions, and wallet credits",
      "Generates executive profitability forecasts for leadership",
    ],
    color: "from-brand-gold/20 to-brand-gold/5 border-brand-gold/40 text-brand-gold",
  },
  {
    id: "ea",
    name: "AI Executive Assistant",
    department: "Executive Office",
    icon: Briefcase,
    status: "Active (CEO Advisory)",
    kpis: ["Daily CEO Briefing", "Zero Calendar Conflicts", "Instant SOP Access"],
    responsibilities: [
      "Prepares daily business summaries and strategic priority lists",
      "Coordinates cross-departmental communications and approvals",
      "Instantly searches the Knowledge Vault for documents and SOPs",
    ],
    color: "from-white/10 to-white/5 border-white/20 text-neutral-200",
  },
];

export default function DigitalWorkforceGrid() {
  const [selectedAgent, setSelectedAgent] = useState<Agent>(AI_AGENTS[0]);

  return (
    <section className="relative py-24 sm:py-32 bg-[#070707] overflow-hidden border-t border-white/[0.06]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-green/10 border border-brand-green/30 text-brand-green text-xs font-mono mb-4">
            <Bot className="w-3.5 h-3.5" />
            <span>The Digital Labor Revolution</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-display font-bold text-white tracking-tight">
            Deploy Your Autonomous{" "}
            <span className="text-gradient-green-gold">AI Digital Workforce.</span>
          </h2>
          <p className="mt-4 text-sm sm:text-base text-neutral-400">
            The future of business is not human versus AI. It is <strong className="text-white">Human Leaders + AI Workforce</strong>. Scale your output exponentially without ballooning overhead.
          </p>
        </div>

        {/* 6 AI Agents Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {AI_AGENTS.map((agent) => {
            const Icon = agent.icon;
            const isSelected = selectedAgent.id === agent.id;
            return (
              <div
                key={agent.id}
                onClick={() => setSelectedAgent(agent)}
                className={`p-6 rounded-3xl glass-panel glass-panel-hover cursor-pointer transition-all duration-300 relative group overflow-hidden ${
                  isSelected
                    ? "border-brand-green ring-1 ring-brand-green/50 bg-brand-green/[0.06] shadow-glow-green/30"
                    : ""
                }`}
              >
                {/* Top Badge & Status */}
                <div className="flex items-center justify-between mb-4">
                  <div
                    className={`w-11 h-11 rounded-2xl bg-gradient-to-br ${agent.color} border flex items-center justify-center`}
                  >
                    <Icon className="w-5 h-5" />
                  </div>
                  <span className="text-[10px] font-mono px-2.5 py-1 rounded-full bg-black/60 border border-brand-green/40 text-brand-green flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-brand-green animate-ping" />
                    {agent.status}
                  </span>
                </div>

                <div className="text-[11px] font-mono text-neutral-400 uppercase tracking-wider">
                  {agent.department}
                </div>
                <h3 className="font-display font-bold text-lg text-white mt-1 group-hover:text-brand-green transition-colors">
                  {agent.name}
                </h3>

                {/* Key KPIs */}
                <div className="mt-4 space-y-1.5 text-xs font-mono">
                  {agent.kpis.map((kpi, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-neutral-300">
                      <span className="w-1 h-1 rounded-full bg-brand-gold" />
                      <span>{kpi}</span>
                    </div>
                  ))}
                </div>

                {/* Responsibilities */}
                <div className="mt-4 pt-4 border-t border-white/[0.06] space-y-1.5 text-xs text-neutral-400">
                  {agent.responsibilities.slice(0, 2).map((res, idx) => (
                    <div key={idx} className="flex items-start gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-brand-green shrink-0 mt-0.5" />
                      <span className="line-clamp-1">{res}</span>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        {/* AI Studio Featurette Box */}
        <div className="mt-12 p-7 sm:p-9 rounded-3xl glass-panel border border-brand-green/30 bg-gradient-to-r from-[#0d1c0b] via-[#080808] to-[#1a1705] flex flex-col lg:flex-row items-center justify-between gap-6">
          <div className="flex items-start gap-4">
            <div className="w-14 h-14 rounded-2xl bg-black/80 border border-brand-gold/50 flex items-center justify-center text-brand-gold shrink-0 shadow-glow-gold/40">
              <Sparkles className="w-7 h-7" />
            </div>
            <div>
              <div className="inline-flex items-center gap-2 text-xs font-mono text-brand-gold font-bold uppercase tracking-wider">
                Automataiz AI Studio™
              </div>
              <h4 className="text-2xl font-display font-bold text-white mt-1">
                Build & Train Custom AI Employees for Your Business
              </h4>
              <p className="text-xs sm:text-sm text-neutral-300 mt-1 max-w-2xl leading-relaxed">
                Upload your company SOPs, train specialized AI agents on your exact business logic, set custom 3-level approval rules, and deploy them across your CRM, WhatsApp, and workflows.
              </p>
            </div>
          </div>

          <Link
            href="/product"
            className="px-6 py-3.5 rounded-xl text-xs font-bold text-black bg-gradient-to-r from-brand-green via-brand-lime to-brand-gold hover:opacity-95 transition-all shrink-0 flex items-center gap-2 shadow-glow-green/40"
          >
            <span>Explore AI Studio</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
