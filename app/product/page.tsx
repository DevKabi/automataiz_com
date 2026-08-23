"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Sparkles,
  ArrowRight,
  CheckCircle2,
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
  Zap,
  Play,
  Layers,
  Cpu,
  ShieldCheck,
  TrendingUp,
  Target,
} from "lucide-react";
import AppHubServices from "@/components/app-hub-services";
import ScrollReveal from "@/components/scroll-reveal";
import Card3D from "@/components/card-3d";

export default function ProductPage() {
  const [activeWorkflowStep, setActiveWorkflowStep] = useState(0);

  const workflowSteps = [
    {
      title: "1. Lead Generation Trigger",
      desc: "Prospect submits high-intent quiz or form on your custom Automataiz funnel or website.",
      tag: "Marketing Engine",
      color: "border-brand-green text-brand-green bg-brand-green/10",
    },
    {
      title: "2. Instant AI Scoring & Routing",
      desc: "AI Brain evaluates lead budget, urgency, and fit score (e.g. 92/100) within 300 milliseconds.",
      tag: "AI Intelligence Layer",
      color: "border-brand-gold text-brand-gold bg-brand-gold/10",
    },
    {
      title: "3. Multi-Channel WhatsApp & IVR Outreach",
      desc: "AI SDR initiates instant WhatsApp conversational sequence and schedules telecall appointment.",
      tag: "Sales OS",
      color: "border-brand-lime text-brand-lime bg-brand-lime/10",
    },
    {
      title: "4. Unified Inbox Sync & Telecalling",
      desc: "Sales rep or automated IVR connects with complete customer history, notes, and objection playbooks.",
      tag: "Operations Hub",
      color: "border-brand-green text-brand-green bg-brand-green/10",
    },
    {
      title: "5. Auto-Invoice & Onboarding Kickoff",
      desc: "Payment collected via Razorpay/Stripe, client gets instant LMS access, and tasks are auto-assigned.",
      tag: "Finance & Delivery",
      color: "border-brand-gold text-brand-gold bg-brand-gold/10",
    },
  ];

  return (
    <div className="pt-28 pb-20 space-y-24">
      {/* Top Banner */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-green/10 border border-brand-green/30 text-brand-green text-xs font-mono mb-4">
          <Cpu className="w-3.5 h-3.5" />
          <span>Complete Platform Ecosystem</span>
        </div>

        <h1 className="text-4xl sm:text-6xl font-display font-extrabold text-white tracking-tight max-w-4xl mx-auto leading-tight">
          Every Business Engine.{" "}
          <span className="text-gradient-green-gold">Natively Connected.</span>
        </h1>
        <p className="mt-4 text-base sm:text-lg text-neutral-300 max-w-2xl mx-auto">
          Explore the 12 integrated engines that turn fragmented software stacks into a single high-performing AI Business Operating System.
        </p>

        <div className="mt-8 flex justify-center gap-4">
          <Link
            href="/simulator"
            className="px-7 py-3.5 rounded-xl text-xs font-bold text-black bg-gradient-to-r from-brand-green via-brand-lime to-brand-gold hover:opacity-95 shadow-glow-green/40 flex items-center gap-2"
          >
            <Sparkles className="w-4 h-4 text-black" />
            <span>Test Your ROI Simulator</span>
          </Link>
          <Link
            href="/contact"
            className="px-7 py-3.5 rounded-xl text-xs font-semibold text-white bg-white/[0.08] hover:bg-white/[0.14] border border-white/[0.12]"
          >
            Request Live Demo
          </Link>
        </div>
      </section>

      {/* Interactive Visual Workflow Builder Simulator */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="p-8 sm:p-12 rounded-3xl glass-panel border border-brand-green/30 bg-gradient-to-br from-[#091508] via-[#080808] to-[#141205]">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <div className="text-xs font-mono uppercase text-brand-green font-bold tracking-widest mb-1">
              Interactive Simulation
            </div>
            <h2 className="text-2xl sm:text-4xl font-display font-bold text-white">
              Visual Workflow Automation in Action
            </h2>
            <p className="text-xs sm:text-sm text-neutral-400 mt-2">
              See how a single incoming lead triggers autonomous workflows across Marketing, Sales, Operations, and Finance without human manual delay.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3">
            {workflowSteps.map((step, idx) => {
              const isSelected = activeWorkflowStep === idx;
              return (
                <div
                  key={idx}
                  onClick={() => setActiveWorkflowStep(idx)}
                  className={`p-5 rounded-2xl cursor-pointer transition-all border ${
                    isSelected
                      ? "bg-white/[0.08] border-brand-green ring-1 ring-brand-green shadow-glow-green/30"
                      : "bg-white/[0.02] border-white/[0.06] hover:bg-white/[0.05]"
                  }`}
                >
                  <span className={`text-[10px] font-mono px-2 py-0.5 rounded-full border ${step.color}`}>
                    {step.tag}
                  </span>
                  <h3 className="font-display font-bold text-sm text-white mt-3">
                    {step.title}
                  </h3>
                  <p className="text-[11px] text-neutral-400 mt-1 leading-relaxed">
                    {step.desc}
                  </p>
                </div>
              );
            })}
          </div>

          <div className="mt-8 p-4 rounded-2xl bg-black/60 border border-white/[0.08] flex flex-col sm:flex-row items-center justify-between gap-4 text-xs">
            <div className="flex items-center gap-3">
              <span className="w-2.5 h-2.5 rounded-full bg-brand-green animate-ping shrink-0" />
              <span className="text-neutral-300">
                <strong className="text-white">Active Simulation Step:</strong> {workflowSteps[activeWorkflowStep].title} — Automated in &lt; 90s.
              </span>
            </div>
            <button
              onClick={() => setActiveWorkflowStep((prev) => (prev + 1) % workflowSteps.length)}
              className="px-4 py-2 rounded-xl bg-brand-green text-black font-bold font-mono text-[11px] hover:bg-brand-lime transition-all shrink-0"
            >
              Simulate Next Step →
            </button>
          </div>
        </div>
      </section>

      {/* 12 Detailed Modules Breakdown */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-display font-bold text-white">
            Comprehensive Deep-Dive Into All 12 Engines
          </h2>
          <p className="text-sm text-neutral-400 mt-2">
            Engineered to replace 15+ costly SaaS subscriptions with enterprise-grade cohesion.
          </p>
        </div>

        {/* Category 1: Marketing Engines */}
        <div className="space-y-6">
          <div className="flex items-center gap-2 border-b border-white/[0.08] pb-3">
            <Target className="w-5 h-5 text-brand-green" />
            <h3 className="font-display font-bold text-xl text-white">
              Marketing Engines (Demand Generation)
            </h3>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <ScrollReveal delay={0.1}>
              <Card3D glowColor="green" className="h-full">
                <div className="p-6 rounded-3xl glass-panel space-y-3 h-full flex flex-col justify-between">
                  <div className="space-y-3">
                    <div className="w-10 h-10 rounded-xl bg-brand-green/20 border border-brand-green/40 flex items-center justify-center text-brand-green shadow-glow-green/20">
                      <Magnet className="w-5 h-5" />
                    </div>
                    <h4 className="font-display font-bold text-lg text-white">Funnels &amp; Landing Pages</h4>
                    <p className="text-xs text-neutral-400 leading-relaxed">
                      Build high-converting multi-step lead capture flows, appointment funnels, webinar funnels, and application funnels. Integrated zero-delay form capture.
                    </p>
                  </div>
                  <div className="text-[11px] font-mono text-brand-green pt-2 border-t border-white/[0.06]">
                    Replaces: ClickFunnels, Leadpages, Unbounce
                  </div>
                </div>
              </Card3D>
            </ScrollReveal>

            <ScrollReveal delay={0.2}>
              <Card3D glowColor="gold" className="h-full">
                <div className="p-6 rounded-3xl glass-panel space-y-3 h-full flex flex-col justify-between">
                  <div className="space-y-3">
                    <div className="w-10 h-10 rounded-xl bg-brand-gold/20 border border-brand-gold/40 flex items-center justify-center text-brand-gold shadow-glow-gold/20">
                      <Zap className="w-5 h-5" />
                    </div>
                    <h4 className="font-display font-bold text-lg text-white">Ad Launcher &amp; Analytics</h4>
                    <p className="text-xs text-neutral-400 leading-relaxed">
                      Launch and optimize Meta Ads, Google Ads, and YouTube campaigns directly. AI Ad Assistant suggests hooks, copy, audience targeting, and budget allocations.
                    </p>
                  </div>
                  <div className="text-[11px] font-mono text-brand-gold pt-2 border-t border-white/[0.06]">
                    Replaces: AdEspresso, Madgicx, Complex Ad Managers
                  </div>
                </div>
              </Card3D>
            </ScrollReveal>

            <ScrollReveal delay={0.3}>
              <Card3D glowColor="lime" className="h-full">
                <div className="p-6 rounded-3xl glass-panel space-y-3 h-full flex flex-col justify-between">
                  <div className="space-y-3">
                    <div className="w-10 h-10 rounded-xl bg-brand-lime/20 border border-brand-lime/40 flex items-center justify-center text-brand-lime">
                      <Sparkles className="w-5 h-5" />
                    </div>
                    <h4 className="font-display font-bold text-lg text-white">AI Social &amp; Content Engine</h4>
                    <p className="text-xs text-neutral-400 leading-relaxed">
                      Generate and schedule daily social posts, Instagram carousels, video scripts, and weekly email newsletters. Content calendar with autonomous auto-posting.
                    </p>
                  </div>
                  <div className="text-[11px] font-mono text-brand-lime pt-2 border-t border-white/[0.06]">
                    Replaces: Buffer, Hootsuite, Copy.ai
                  </div>
                </div>
              </Card3D>
            </ScrollReveal>
          </div>
        </div>

        {/* Category 2: Sales & Communication */}
        <div className="space-y-6">
          <div className="flex items-center gap-2 border-b border-white/[0.08] pb-3">
            <TrendingUp className="w-5 h-5 text-brand-gold" />
            <h3 className="font-display font-bold text-xl text-white">
              Sales &amp; Communication Engines (Revenue Conversion)
            </h3>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <ScrollReveal delay={0.1}>
              <Card3D glowColor="gold" className="h-full">
                <div className="p-6 rounded-3xl glass-panel space-y-3 h-full flex flex-col justify-between">
                  <div className="space-y-3">
                    <div className="w-10 h-10 rounded-xl bg-brand-gold/20 border border-brand-gold/40 flex items-center justify-center text-brand-gold shadow-glow-gold/20">
                      <Users2 className="w-5 h-5" />
                    </div>
                    <h4 className="font-display font-bold text-lg text-white">Unified CRM &amp; Pipeline</h4>
                    <p className="text-xs text-neutral-400 leading-relaxed">
                      Organize every prospect with custom fields, lead scores, communication history, and visual deal pipelines (New Lead → Qualified → Demo → Proposal → Won).
                    </p>
                  </div>
                  <div className="text-[11px] font-mono text-brand-gold pt-2 border-t border-white/[0.06]">
                    Replaces: HubSpot, Pipedrive, Zoho CRM
                  </div>
                </div>
              </Card3D>
            </ScrollReveal>

            <ScrollReveal delay={0.2}>
              <Card3D glowColor="green" className="h-full">
                <div className="p-6 rounded-3xl glass-panel space-y-3 h-full flex flex-col justify-between">
                  <div className="space-y-3">
                    <div className="w-10 h-10 rounded-xl bg-brand-green/20 border border-brand-green/40 flex items-center justify-center text-brand-green shadow-glow-green/20">
                      <Inbox className="w-5 h-5" />
                    </div>
                    <h4 className="font-display font-bold text-lg text-white">Unified Inbox &amp; WhatsApp WABA</h4>
                    <p className="text-xs text-neutral-400 leading-relaxed">
                      Official WhatsApp Business API integration with broadcast campaigns, multi-agent chat, shared team inboxes, automated template messaging, and email/SMS sync.
                    </p>
                  </div>
                  <div className="text-[11px] font-mono text-brand-green pt-2 border-t border-white/[0.06]">
                    Replaces: Wati, Interakt, Zendesk
                  </div>
                </div>
              </Card3D>
            </ScrollReveal>

            <ScrollReveal delay={0.3}>
              <Card3D glowColor="lime" className="h-full">
                <div className="p-6 rounded-3xl glass-panel space-y-3 h-full flex flex-col justify-between">
                  <div className="space-y-3">
                    <div className="w-10 h-10 rounded-xl bg-brand-lime/20 border border-brand-lime/40 flex items-center justify-center text-brand-lime">
                      <PhoneCall className="w-5 h-5" />
                    </div>
                    <h4 className="font-display font-bold text-lg text-white">Telecalling &amp; Smart IVR</h4>
                    <p className="text-xs text-neutral-400 leading-relaxed">
                      Built-in click-to-dial telecalling, automatic call recording, speech-to-text sentiment analytics, and intelligent inbound IVR call routing.
                    </p>
                  </div>
                  <div className="text-[11px] font-mono text-brand-lime pt-2 border-t border-white/[0.06]">
                    Replaces: Exotel, Knowlarity, Cloud Telephony
                  </div>
                </div>
              </Card3D>
            </ScrollReveal>
          </div>
        </div>

        {/* Category 3: Operations & AI Workforce */}
        <div className="space-y-6">
          <div className="flex items-center gap-2 border-b border-white/[0.08] pb-3">
            <Bot className="w-5 h-5 text-brand-green" />
            <h3 className="font-display font-bold text-xl text-white">
              Operations &amp; Digital Workforce (Autonomous Execution)
            </h3>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <ScrollReveal delay={0.1}>
              <Card3D glowColor="green" className="h-full">
                <div className="p-6 rounded-3xl glass-panel space-y-3 h-full flex flex-col justify-between">
                  <div className="space-y-3">
                    <div className="w-10 h-10 rounded-xl bg-brand-green/20 border border-brand-green/40 flex items-center justify-center text-brand-green shadow-glow-green/20">
                      <Bot className="w-5 h-5" />
                    </div>
                    <h4 className="font-display font-bold text-lg text-white">Nova AI &amp; Digital Workforce</h4>
                    <p className="text-xs text-neutral-400 leading-relaxed">
                      AI SDR for instant outreach, AI Marketing Manager for campaigns, AI Customer Success agent, and Nova conversational command center for CEO daily briefing.
                    </p>
                  </div>
                  <div className="text-[11px] font-mono text-brand-green pt-2 border-t border-white/[0.06]">
                    Replaces: 3 to 5 Full-Time SDR &amp; Ops Headcount
                  </div>
                </div>
              </Card3D>
            </ScrollReveal>

            <ScrollReveal delay={0.2}>
              <Card3D glowColor="gold" className="h-full">
                <div className="p-6 rounded-3xl glass-panel space-y-3 h-full flex flex-col justify-between">
                  <div className="space-y-3">
                    <div className="w-10 h-10 rounded-xl bg-brand-gold/20 border border-brand-gold/40 flex items-center justify-center text-brand-gold shadow-glow-gold/20">
                      <Calendar className="w-5 h-5" />
                    </div>
                    <h4 className="font-display font-bold text-lg text-white">Calendar &amp; Scheduling</h4>
                    <p className="text-xs text-neutral-400 leading-relaxed">
                      Self-booking calendar links, automated WhatsApp appointment reminders, round-robin team scheduling, and calendar 2-way sync with Google and Outlook.
                    </p>
                  </div>
                  <div className="text-[11px] font-mono text-brand-gold pt-2 border-t border-white/[0.06]">
                    Replaces: Calendly, Acuity, OnceHub
                  </div>
                </div>
              </Card3D>
            </ScrollReveal>

            <ScrollReveal delay={0.3}>
              <Card3D glowColor="lime" className="h-full">
                <div className="p-6 rounded-3xl glass-panel space-y-3 h-full flex flex-col justify-between">
                  <div className="space-y-3">
                    <div className="w-10 h-10 rounded-xl bg-brand-lime/20 border border-brand-lime/40 flex items-center justify-center text-brand-lime">
                      <CreditCard className="w-5 h-5" />
                    </div>
                    <h4 className="font-display font-bold text-lg text-white">Finance, Invoicing &amp; Wallet</h4>
                    <p className="text-xs text-neutral-400 leading-relaxed">
                      Recurring SaaS subscriptions, one-time payment links, automated GST invoicing, wallet credit ledger, and real-time CAC/LTV profitability dashboards.
                    </p>
                  </div>
                  <div className="text-[11px] font-mono text-brand-lime pt-2 border-t border-white/[0.06]">
                    Replaces: Chargebee, QuickBooks, FreshBooks
                  </div>
                </div>
              </Card3D>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Complete App Hub & Services Matrix matching Platform UI */}
      <AppHubServices />

      {/* Bottom CTA */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="p-8 sm:p-12 rounded-3xl glass-panel border border-brand-green/30 bg-gradient-to-r from-black via-[#0a1808] to-black">
          <h2 className="text-3xl sm:text-4xl font-display font-bold text-white">
            Ready to Experience the Automataiz Advantage?
          </h2>
          <p className="mt-3 text-sm text-neutral-400 max-w-xl mx-auto">
            Book a 1-on-1 personalized platform walkthrough to see how Automataiz replaces your entire software stack.
          </p>
          <div className="mt-6 flex flex-col sm:flex-row justify-center gap-4">
            <Link
              href="/simulator"
              className="px-8 py-3.5 rounded-xl text-xs font-bold text-black bg-gradient-to-r from-brand-green to-brand-gold hover:opacity-95 shadow-glow-green/40"
            >
              Run Revenue Simulator
            </Link>
            <Link
              href="/contact"
              className="px-8 py-3.5 rounded-xl text-xs font-semibold text-white bg-white/[0.08] hover:bg-white/[0.14] border border-white/[0.12]"
            >
              Book Strategy Call
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
