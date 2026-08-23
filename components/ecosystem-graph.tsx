"use client";

import React, { useState } from "react";
import {
  Magnet,
  Users2,
  GitFork,
  PhoneCall,
  Bot,
  CheckSquare,
  Inbox,
  Calendar,
  CreditCard,
  GraduationCap,
  FolderLock,
  Settings,
  Sparkles,
  ArrowRight,
} from "lucide-react";
import Link from "next/link";

interface ModuleNode {
  id: string;
  name: string;
  category: "Marketing" | "Sales" | "Operations" | "Finance" | "AI Layer";
  icon: any;
  desc: string;
  metrics: string;
  color: string;
}

const MODULES: ModuleNode[] = [
  {
    id: "leadgen",
    name: "Lead Generation",
    category: "Marketing",
    icon: Magnet,
    desc: "Multi-step funnels, high-converting landing pages, forms & ad launcher.",
    metrics: "3.4x Lead Volume",
    color: "from-brand-green/20 to-brand-green/5 border-brand-green/40 text-brand-green",
  },
  {
    id: "leadmgmt",
    name: "Unified CRM",
    category: "Sales",
    icon: Users2,
    desc: "Centralized lead profiles, custom fields, smart segments & customer memory.",
    metrics: "Single Source of Truth",
    color: "from-brand-gold/20 to-brand-gold/5 border-brand-gold/40 text-brand-gold",
  },
  {
    id: "leadauto",
    name: "Lead Automation",
    category: "Marketing",
    icon: GitFork,
    desc: "Behavioral triggers, multi-channel nurturing sequences & automatic assignments.",
    metrics: "<2m Response Time",
    color: "from-brand-lime/20 to-brand-lime/5 border-brand-lime/40 text-brand-lime",
  },
  {
    id: "sales",
    name: "Sales & Telecalling",
    category: "Sales",
    icon: PhoneCall,
    desc: "IVR smart routing, one-click dialing, pipeline tracking & deal forecasting.",
    metrics: "+42% Close Rate",
    color: "from-brand-green/20 to-brand-green/5 border-brand-green/40 text-brand-green",
  },
  {
    id: "ai-suite",
    name: "AI Suite & Nova",
    category: "AI Layer",
    icon: Bot,
    desc: "AI Brain, AI SDR, AI Marketing Manager & conversational executive co-pilot.",
    metrics: "24/7 Digital Workforce",
    color: "from-brand-gold/30 to-brand-green/20 border-brand-gold/60 text-white",
  },
  {
    id: "operations",
    name: "Operations & HRM",
    category: "Operations",
    icon: CheckSquare,
    desc: "Task prioritization, staff attendance, approval workflows & project tracking.",
    metrics: "Zero Bottlenecks",
    color: "from-brand-lime/20 to-brand-lime/5 border-brand-lime/40 text-brand-lime",
  },
  {
    id: "inbox",
    name: "Unified Inbox",
    category: "Operations",
    icon: Inbox,
    desc: "One central hub for WhatsApp WABA, Email, SMS, Instagram & Web Chat.",
    metrics: "100% Visibility",
    color: "from-brand-green/20 to-brand-green/5 border-brand-green/40 text-brand-green",
  },
  {
    id: "calendar",
    name: "Calendar & Scheduling",
    category: "Operations",
    icon: Calendar,
    desc: "Self-booking links, automated reminders, round-robin team scheduling.",
    metrics: "85% Show-Up Rate",
    color: "from-brand-gold/20 to-brand-gold/5 border-brand-gold/40 text-brand-gold",
  },
  {
    id: "finance",
    name: "Finance & Billing",
    category: "Finance",
    icon: CreditCard,
    desc: "Subscription billing, invoices, expense tracking & real-time CAC/LTV dashboards.",
    metrics: "Predictable Cash Flow",
    color: "from-brand-lime/20 to-brand-lime/5 border-brand-lime/40 text-brand-lime",
  },
  {
    id: "community",
    name: "Community & Courses",
    category: "Marketing",
    icon: GraduationCap,
    desc: "LMS course builder, member tiers, events, masterclasses & advocacy flywheels.",
    metrics: "High Retention",
    color: "from-brand-green/20 to-brand-green/5 border-brand-green/40 text-brand-green",
  },
  {
    id: "vault",
    name: "Knowledge Vault",
    category: "AI Layer",
    icon: FolderLock,
    desc: "Company SOPs, contracts, video archives & organizational memory for AI Brain.",
    metrics: "Instant Retrieval",
    color: "from-brand-gold/20 to-brand-gold/5 border-brand-gold/40 text-brand-gold",
  },
  {
    id: "governance",
    name: "Settings & Security",
    category: "Operations",
    icon: Settings,
    desc: "Enterprise role permissions, 3-level AI approval guards & full audit trails.",
    metrics: "Bank-Grade Safety",
    color: "from-white/10 to-white/5 border-white/20 text-neutral-200",
  },
];

export default function EcosystemGraph() {
  const [selectedModule, setSelectedModule] = useState<ModuleNode>(MODULES[4]);

  return (
    <section className="relative py-24 sm:py-32 bg-[#050505] overflow-hidden border-t border-white/[0.06]">
      {/* Ambient background glows */}
      <div className="absolute top-1/3 left-1/3 w-[500px] h-[500px] glow-orb-green opacity-15 pointer-events-none" />
      <div className="absolute bottom-10 right-1/4 w-96 h-96 glow-orb-gold opacity-15 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-green/10 border border-brand-green/30 text-brand-green text-xs font-mono mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            <span>The Unified Ecosystem</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-display font-bold text-white tracking-tight">
            12 Essential Business Functions.{" "}
            <span className="text-gradient-green-gold">One Intelligent OS.</span>
          </h2>
          <p className="mt-4 text-sm sm:text-base text-neutral-400">
            No more broken Zapier connections, scattered logins, or missing customer data. Every module natively communicates in real time.
          </p>
        </div>

        {/* 12-Module Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {MODULES.map((mod) => {
            const Icon = mod.icon;
            const isSelected = selectedModule.id === mod.id;
            return (
              <div
                key={mod.id}
                onClick={() => setSelectedModule(mod)}
                className={`p-5 rounded-3xl glass-panel glass-panel-hover cursor-pointer transition-all duration-300 relative group overflow-hidden ${
                  isSelected
                    ? "border-brand-green ring-1 ring-brand-green/50 bg-brand-green/[0.07] shadow-glow-green/30"
                    : "hover:border-white/20"
                }`}
              >
                {/* Top Badge */}
                <div className="flex items-center justify-between mb-4">
                  <div
                    className={`w-10 h-10 rounded-2xl bg-gradient-to-br ${mod.color} border flex items-center justify-center`}
                  >
                    <Icon className="w-5 h-5" />
                  </div>
                  <span className="text-[10px] font-mono px-2.5 py-0.5 rounded-full bg-white/[0.05] border border-white/[0.08] text-neutral-300">
                    {mod.category}
                  </span>
                </div>

                <h3 className="font-display font-bold text-base text-white group-hover:text-brand-green transition-colors">
                  {mod.name}
                </h3>
                <p className="text-xs text-neutral-400 mt-1.5 line-clamp-2 leading-relaxed">
                  {mod.desc}
                </p>

                <div className="mt-4 pt-3 border-t border-white/[0.06] flex items-center justify-between text-[11px] font-mono">
                  <span className="text-brand-gold">{mod.metrics}</span>
                  <span className="text-neutral-500 group-hover:text-white flex items-center gap-1 transition-colors">
                    Explore <ArrowRight className="w-3 h-3 group-hover:translate-x-0.5 transition-transform" />
                  </span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Selected Module Deep-Dive Spotlight Card */}
        <div className="mt-12 p-6 sm:p-8 rounded-3xl glass-panel border border-brand-gold/30 bg-gradient-to-r from-[#0d160b] via-[#090909] to-[#171406]">
          <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6">
            <div className="flex items-start gap-4">
              <div className="w-14 h-14 rounded-2xl bg-black/60 border border-brand-green/50 flex items-center justify-center text-brand-green shrink-0 shadow-glow-green/40">
                <selectedModule.icon className="w-7 h-7" />
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <span className="text-xs font-mono uppercase tracking-wider text-brand-green">
                    {selectedModule.category} Module
                  </span>
                  <span className="text-neutral-500">•</span>
                  <span className="text-xs font-mono text-brand-gold">
                    {selectedModule.metrics}
                  </span>
                </div>
                <h4 className="text-2xl font-display font-bold text-white mt-1">
                  {selectedModule.name}
                </h4>
                <p className="text-xs sm:text-sm text-neutral-300 mt-1 max-w-2xl leading-relaxed">
                  {selectedModule.desc} Fully interconnected with all other 11 modules through the Central AI Intelligence Layer.
                </p>
              </div>
            </div>

            <Link
              href="/product"
              className="px-6 py-3 rounded-xl text-xs font-bold text-black bg-gradient-to-r from-brand-green via-brand-lime to-brand-gold hover:opacity-95 transition-all shrink-0 flex items-center gap-2 shadow-glow-green/30"
            >
              <span>Explore All Features</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
