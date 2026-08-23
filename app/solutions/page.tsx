"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  Sparkles,
  ArrowRight,
  Target,
  TrendingUp,
  CheckCircle2,
  DollarSign,
  Bot,
  Layers,
  ShieldCheck,
  Zap,
  Activity,
  Cpu,
} from "lucide-react";

export default function SolutionsPage() {
  const [activePillarTab, setActivePillarTab] = useState<
    "marketing" | "sales" | "operations" | "finance" | "ai"
  >("marketing");

  const pillars = {
    marketing: {
      title: "Marketing OS: Predictable Demand Engine",
      subtitle: "Attract High-Intent Attention & Capture Leads Consistently",
      color: "border-brand-green text-brand-green bg-brand-green/10",
      description:
        "Marketing is responsible for bringing potential buyers into your ecosystem. Without structured demand systems, business growth is left to luck and guesswork.",
      capabilities: [
        "Multi-Step Lead Capture Funnels with zero distraction architecture",
        "Conversion-Optimized Landing Pages & Corporate Websites",
        "AI Social & Content Generator (Posts, Reels scripts, Carousels)",
        "Automated Multi-Channel Ad Launcher (Meta, Google, YouTube)",
        "Vibe Outbound Prospecting for high-ticket B2B decision makers",
        "Automated Review Collection & Trust Reputation Engine",
      ],
      kpis: ["Lead Volume", "Cost Per Lead (CPL)", "Funnel Conversion Rate", "Campaign ROAS"],
    },
    sales: {
      title: "Sales OS: Predictable Revenue Machine",
      subtitle: "Transform Raw Inquiries Into High-Value Closed Customers",
      color: "border-brand-gold text-brand-gold bg-brand-gold/10",
      description:
        "Sales is the bridge between attention and income. Automataiz provides consultative sales pipelines, IVR dialing, and AI assistance so no deal goes cold.",
      capabilities: [
        "Unified Visual Deal Pipelines with custom stages & win probabilities",
        "AI Lead Scoring (Evaluates budget, urgency, and fit signals)",
        "Automated Smart IVR & In-Browser Telecalling with call recording",
        "1-Click Appointment Scheduling with WhatsApp confirmation reminders",
        "Consultative Discovery & Automated Proposal Generation",
        "Predictive Revenue & Sales Velocity Forecasting",
      ],
      kpis: ["Sales Conversion Rate", "Pipeline Value", "Average Deal Size", "Sales Cycle Velocity"],
    },
    operations: {
      title: "Operations OS: Scalable Delivery Framework",
      subtitle: "Deliver Quality Consistently Without Founder Bottlenecks",
      color: "border-brand-lime text-brand-lime bg-brand-lime/10",
      description:
        "Growth without operations creates chaos. Automataiz turns founder-dependent businesses into system-driven organizations that scale with ease.",
      capabilities: [
        "Unified Multi-Channel Inbox (WhatsApp WABA, Email, SMS, IG, Chat)",
        "Automated Task Management & Due Date Prioritization",
        "HRM & Staff Attendance, Roles, and Department Allocation",
        "Visual Drag-and-Drop Workflow Builder with custom branching logic",
        "3-Level Multi-Stage Approval Workflows for Finance & Campaigns",
        "Knowledge Vault for Centralized SOPs and Company Documents",
      ],
      kpis: ["Task Completion Rate", "First Response SLA", "Team Productivity Lift", "Customer CSAT"],
    },
    finance: {
      title: "Finance OS: Executive Business Intelligence",
      subtitle: "Real-Time Scoreboard & Profitability Analytics",
      color: "border-white/20 text-neutral-200 bg-white/5",
      description:
        "Finance is the scoreboard of the business. Transform bookkeeping into predictive executive intelligence with real-time CAC/LTV visibility.",
      capabilities: [
        "Automated Recurring Subscription Billing & Invoicing Engine",
        "Real-Time Customer Acquisition Cost (CAC) & Lifetime Value (LTV)",
        "Expense Ratios & Gross Margin Breakdown Dashboards",
        "Wallet Credit System for Metered Services & Reseller Accounts",
        "Revenue Forecasting & Risk Detection via AI Finance Analyst",
        "Unified GST Reports & Multi-Currency Ready Architecture",
      ],
      kpis: ["MRR / ARR", "Net Profit Margin", "LTV/CAC Ratio", "Cash Flow Health"],
    },
    ai: {
      title: "The AI Intelligence Layer & Nova Co-Pilot",
      subtitle: "The Central Nervous System Connecting All Four Pillars",
      color: "border-brand-green text-white bg-brand-green/20",
      description:
        "The AI Layer is the cognitive brain of Automataiz. It monitors data across Marketing, Sales, Operations, and Finance to give executives 5-minute clarity.",
      capabilities: [
        "Nova AI Universal Conversational Assistant for daily executive briefings",
        "AI Brain with organizational memory that never forgets customer context",
        "Autonomous AI Digital Workforce (AI SDR, AI Marketing Mgr, AI Support)",
        "Early Warning Risk System (detects churn, SLA breaches & ad fatigue)",
        "Opportunity Detection Engine (identifies high-ROI expansion opportunities)",
        "AI Studio to train custom agents with your own proprietary SOPs",
      ],
      kpis: ["AI Task Automation %", "Decision Accuracy", "Time Reclaimed/Mo", "Autonomous Revenue Lift"],
    },
  };

  return (
    <div className="pt-28 pb-20 space-y-24">
      {/* Top Banner */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-gold/10 border border-brand-gold/30 text-brand-gold text-xs font-mono mb-4">
          <Layers className="w-3.5 h-3.5" />
          <span>The Business Operating System Framework</span>
        </div>

        <h1 className="text-4xl sm:text-6xl font-display font-extrabold text-white tracking-tight max-w-4xl mx-auto leading-tight">
          Four Foundational Pillars.{" "}
          <span className="text-gradient-green-gold">One Intelligent Brain.</span>
        </h1>
        <p className="mt-4 text-base sm:text-lg text-neutral-300 max-w-2xl mx-auto">
          Unlike traditional CRMs that only store contacts, Automataiz coordinates the entire lifecycle of a business from demand to delivery and finance.
        </p>

        {/* Pillar Selector Tabs */}
        <div className="mt-10 flex items-center justify-center gap-2 overflow-x-auto pb-2 scrollbar-none">
          {[
            { id: "marketing", label: "1. Marketing OS" },
            { id: "sales", label: "2. Sales OS" },
            { id: "operations", label: "3. Operations OS" },
            { id: "finance", label: "4. Finance OS" },
            { id: "ai", label: "5. AI Intelligence Layer" },
          ].map((tab) => {
            const isSelected = activePillarTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActivePillarTab(tab.id as any)}
                className={`px-4 py-2 rounded-2xl text-xs font-mono font-semibold transition-all shrink-0 ${
                  isSelected
                    ? "bg-gradient-to-r from-brand-green to-brand-gold text-black shadow-glow-green/40 font-bold"
                    : "bg-white/[0.04] text-neutral-400 hover:text-white border border-white/[0.08]"
                }`}
              >
                {tab.label}
              </button>
            );
          })}
        </div>
      </section>

      {/* Active Pillar Showcase */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="p-8 sm:p-12 rounded-3xl glass-panel border border-brand-green/30 bg-gradient-to-br from-[#091508] via-[#080808] to-[#141205] space-y-10 animate-in fade-in duration-300">
          <div className="space-y-3">
            <span className={`text-xs font-mono px-3 py-1 rounded-full border ${pillars[activePillarTab].color}`}>
              {pillars[activePillarTab].subtitle}
            </span>
            <h2 className="text-3xl sm:text-4xl font-display font-bold text-white">
              {pillars[activePillarTab].title}
            </h2>
            <p className="text-sm sm:text-base text-neutral-300 max-w-3xl leading-relaxed">
              {pillars[activePillarTab].description}
            </p>
          </div>

          {/* Capabilities Grid */}
          <div>
            <h3 className="text-xs font-mono uppercase tracking-widest text-brand-gold font-semibold mb-4">
              Core Capabilities &amp; Built-In Modules
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {pillars[activePillarTab].capabilities.map((cap, idx) => (
                <div
                  key={idx}
                  className="p-4 rounded-2xl bg-white/[0.02] border border-white/[0.06] text-xs text-neutral-200 flex items-start gap-3"
                >
                  <CheckCircle2 className="w-4 h-4 text-brand-green shrink-0 mt-0.5" />
                  <span className="leading-relaxed">{cap}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Core KPIs Tracked */}
          <div className="pt-6 border-t border-white/[0.08]">
            <h3 className="text-xs font-mono uppercase tracking-widest text-neutral-400 mb-3">
              Telemetry &amp; Key Performance Indicators:
            </h3>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              {pillars[activePillarTab].kpis.map((kpi, idx) => (
                <div
                  key={idx}
                  className="p-3 rounded-xl bg-black/50 border border-brand-green/20 font-mono text-xs text-brand-green text-center"
                >
                  {kpi}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* The 2040 Vision: The Autonomous Enterprise */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="p-8 sm:p-12 rounded-3xl glass-panel border border-brand-gold/30 bg-gradient-to-r from-black via-[#161205] to-black space-y-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-gold/20 text-brand-gold text-xs font-mono">
            <Cpu className="w-3.5 h-3.5" />
            <span>Vision 2040 // Chapter 75 Blueprint</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-display font-bold text-white">
            The Autonomous Enterprise
          </h2>
          <p className="text-sm text-neutral-300 max-w-3xl leading-relaxed">
            By 2040, businesses will not ask &quot;Which software tool should we buy?&quot; They will ask &quot;Which Business Operating System should we run our company on?&quot;
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4 text-xs leading-relaxed text-neutral-300">
            <div className="p-5 rounded-2xl bg-white/[0.02] border border-white/[0.06] space-y-2">
              <h4 className="font-bold text-white font-display text-base text-brand-green">
                Human Responsibilities
              </h4>
              <p>Vision, Creative Direction, Strategic Relationships, Leadership, Ethics, and Long-Term Judgment.</p>
            </div>
            <div className="p-5 rounded-2xl bg-white/[0.02] border border-white/[0.06] space-y-2">
              <h4 className="font-bold text-white font-display text-base text-brand-gold">
                AI Responsibilities
              </h4>
              <p>Instant Telemetry, Workflow Execution, Lead Qualification, Campaign Tuning, 24/7 Support, and Autonomous Scheduling.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="p-8 sm:p-12 rounded-3xl glass-panel border border-brand-green/30 bg-gradient-to-r from-black via-[#0a1808] to-black">
          <h2 className="text-3xl sm:text-4xl font-display font-bold text-white">
            Upgrade Your Entire Organization Today
          </h2>
          <p className="mt-3 text-sm text-neutral-400 max-w-xl mx-auto">
            Experience how Automataiz unifies your Marketing, Sales, Operations, and Finance into one seamless system.
          </p>
          <div className="mt-6 flex flex-col sm:flex-row justify-center gap-4">
            <Link
              href="/simulator"
              className="px-8 py-3.5 rounded-xl text-xs font-bold text-black bg-gradient-to-r from-brand-green to-brand-gold hover:opacity-95 shadow-glow-green/40"
            >
              Calculate Your Automation ROI
            </Link>
            <Link
              href="/contact"
              className="px-8 py-3.5 rounded-xl text-xs font-semibold text-white bg-white/[0.08] hover:bg-white/[0.14] border border-white/[0.12]"
            >
              Book Strategy Consultation
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
