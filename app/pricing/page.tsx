"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  Sparkles,
  CheckCircle2,
  ArrowRight,
  HelpCircle,
  Zap,
  ShieldCheck,
  Building2,
  DollarSign,
  ChevronDown,
} from "lucide-react";

export default function PricingPage() {
  const [isAnnual, setIsAnnual] = useState(true);
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const faqs = [
    {
      q: "How does Automataiz replace my existing software stack?",
      a: "Automataiz natively combines CRM, Funnels, WhatsApp WABA automation, Email Marketing, Calendar Scheduling, Invoicing, and AI Agents into a single platform. You can cancel tools like ClickFunnels, HubSpot, Wati, Calendly, and Zapier immediately.",
    },
    {
      q: "Is there any setup fee or long-term contract?",
      a: "No long-term contracts for monthly plans. You can upgrade, downgrade, or cancel anytime. We also offer dedicated white-glove onboarding and custom workflow setup services if you want our engineering team to build your systems.",
    },
    {
      q: "How does the WhatsApp Business API (WABA) work with Automataiz?",
      a: "Automataiz connects directly to Meta's official WhatsApp Business API. You get official green tick readiness, verified business broadcasts, automated follow-up sequences, and shared multi-agent chat without risk of number bans.",
    },
    {
      q: "What is the White-Label & SaaS Reseller Program?",
      a: "Agencies and consultants can rebrand Automataiz with their own logo, domain, and colors to resell software subscriptions to their own clients, keeping 100% of their client retainers and recurring monthly revenue.",
    },
    {
      q: "Can I migrate my existing leads and contacts from other platforms?",
      a: "Yes! Automataiz includes 1-click CSV import and automated mapping for contacts, past conversation notes, pipelines, and tags from HubSpot, Salesforce, Zoho, Google Sheets, or Excel.",
    },
  ];

  return (
    <div className="pt-28 pb-20 space-y-24">
      {/* Header */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-green/10 border border-brand-green/30 text-brand-green text-xs font-mono mb-4">
          <DollarSign className="w-3.5 h-3.5" />
          <span>Value-Based Pricing Architecture</span>
        </div>

        <h1 className="text-4xl sm:text-6xl font-display font-extrabold text-white tracking-tight max-w-4xl mx-auto leading-tight">
          Invest in Revenue Growth.{" "}
          <span className="text-gradient-green-gold">Eliminate Software Waste.</span>
        </h1>
        <p className="mt-4 text-base sm:text-lg text-neutral-300 max-w-2xl mx-auto">
          Replacing 10+ fragmented tools typically saves ₹35,000/month while recovering Lakhs in missed lead follow-ups.
        </p>

        {/* Monthly / Annual Toggle */}
        <div className="mt-10 flex items-center justify-center gap-4">
          <span className={`text-xs font-mono ${!isAnnual ? "text-white font-bold" : "text-neutral-400"}`}>
            Monthly Billing
          </span>
          <button
            onClick={() => setIsAnnual(!isAnnual)}
            className="w-14 h-7 rounded-full bg-white/10 p-1 border border-white/20 relative transition-all"
          >
            <div
              className={`w-5 h-5 rounded-full bg-gradient-to-r from-brand-green to-brand-gold transition-transform duration-300 ${
                isAnnual ? "translate-x-7" : "translate-x-0"
              }`}
            />
          </button>
          <div className="flex items-center gap-2">
            <span className={`text-xs font-mono ${isAnnual ? "text-white font-bold" : "text-neutral-400"}`}>
              Annual Billing
            </span>
            <span className="px-2 py-0.5 rounded-full bg-brand-green/20 border border-brand-green/40 text-brand-green text-[10px] font-mono font-bold animate-pulse">
              SAVE 27%
            </span>
          </div>
        </div>
      </section>

      {/* 3 Pricing Cards */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
          {/* Plan 1: Standard */}
          <div className="p-8 rounded-3xl glass-panel space-y-6 flex flex-col justify-between">
            <div className="space-y-4">
              <div className="text-xs font-mono uppercase tracking-wider text-neutral-400">
                Standard Business OS
              </div>
              <div className="flex items-baseline gap-1">
                <span className="font-display font-black text-4xl text-white">
                  {isAnnual ? "₹69,999" : "₹7,999"}
                </span>
                <span className="text-xs text-neutral-400 font-mono">
                  {isAnnual ? "/ year" : "/ month"}
                </span>
              </div>
              <p className="text-xs text-neutral-400">
                For growth-focused MSMEs, service businesses, and agencies managing lead acquisition and operations.
              </p>

              <ul className="space-y-2.5 text-xs text-neutral-300 pt-4 border-t border-white/[0.06]">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-brand-green shrink-0" />
                  <span>Unified CRM &amp; Pipeline Engine</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-brand-green shrink-0" />
                  <span>Funnels &amp; Website Builder</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-brand-green shrink-0" />
                  <span>Unified Inbox (WhatsApp WABA, Email, SMS)</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-brand-green shrink-0" />
                  <span>Telecalling &amp; Smart IVR Inbound Routing</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-brand-green shrink-0" />
                  <span>AI Lead Scoring &amp; Automated Follow-Ups</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-brand-green shrink-0" />
                  <span>Finance, GST Invoicing &amp; CEO Dashboard</span>
                </li>
              </ul>
            </div>

            <Link
              href="/contact"
              className="w-full py-3.5 rounded-xl text-xs font-bold text-white bg-white/[0.08] hover:bg-white/[0.14] border border-white/[0.1] text-center transition-all"
            >
              Get Started Standard
            </Link>
          </div>

          {/* Plan 2: Trainers & Coaches (Featured) */}
          <div className="p-8 rounded-3xl glass-panel border-2 border-brand-green ring-1 ring-brand-green/40 bg-brand-green/[0.05] shadow-glow-green/30 space-y-6 flex flex-col justify-between relative">
            <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-3.5 py-0.5 rounded-full bg-gradient-to-r from-brand-green to-brand-gold text-black text-[10px] font-mono font-bold uppercase tracking-widest">
              MOST POPULAR
            </div>

            <div className="space-y-4">
              <div className="text-xs font-mono uppercase tracking-wider text-brand-green font-bold">
                Trainers &amp; Coaches OS
              </div>
              <div className="flex items-baseline gap-1">
                <span className="font-display font-black text-4xl text-white">
                  {isAnnual ? "₹89,999" : "₹9,999"}
                </span>
                <span className="text-xs text-neutral-400 font-mono">
                  {isAnnual ? "/ year" : "/ month"}
                </span>
              </div>
              <p className="text-xs text-neutral-300">
                Complete all-in-one ecosystem for coaches, trainers, and course creators wanting community and digital store.
              </p>

              <ul className="space-y-2.5 text-xs text-neutral-200 pt-4 border-t border-white/[0.08]">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-brand-green shrink-0" />
                  <span>Everything in Standard Business OS</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-brand-gold shrink-0" />
                  <span>Unlimited Course LMS Hosting &amp; Video Storage</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-brand-gold shrink-0" />
                  <span>Private Community Platform &amp; Gamified Ranks</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-brand-gold shrink-0" />
                  <span>Live Webinar &amp; Masterclass Registration Funnels</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-brand-gold shrink-0" />
                  <span>Digital Store (Sell Ebooks, Templates &amp; Bundles)</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-brand-gold shrink-0" />
                  <span>AI Client Retention &amp; Inactivity Flags</span>
                </li>
              </ul>
            </div>

            <Link
              href="/contact"
              className="w-full py-3.5 rounded-xl text-xs font-bold text-black bg-gradient-to-r from-brand-green via-brand-lime to-brand-gold hover:opacity-95 text-center transition-all shadow-glow-green/40"
            >
              Launch Coaching OS
            </Link>
          </div>

          {/* Plan 3: Enterprise & Reseller */}
          <div className="p-8 rounded-3xl glass-panel space-y-6 flex flex-col justify-between">
            <div className="space-y-4">
              <div className="text-xs font-mono uppercase tracking-wider text-brand-gold font-bold">
                Enterprise &amp; White-Label
              </div>
              <div className="flex items-baseline gap-1">
                <span className="font-display font-black text-4xl text-white">
                  Custom
                </span>
              </div>
              <p className="text-xs text-neutral-400">
                For large multi-location enterprises, franchises, and agencies building recurring SaaS reseller businesses.
              </p>

              <ul className="space-y-2.5 text-xs text-neutral-300 pt-4 border-t border-white/[0.06]">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-brand-lime shrink-0" />
                  <span>Autonomous AI Digital Workforce (AI SDR &amp; Ops)</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-brand-lime shrink-0" />
                  <span>Full White-Label SaaS Reseller Portal &amp; Domain</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-brand-lime shrink-0" />
                  <span>Multi-Tenant Sub-Account Management</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-brand-lime shrink-0" />
                  <span>Custom AI Model Fine-Tuning with Knowledge Vault</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-brand-lime shrink-0" />
                  <span>Dedicated Solution Architect &amp; Priority 24/7 SLA</span>
                </li>
              </ul>
            </div>

            <Link
              href="/contact"
              className="w-full py-3.5 rounded-xl text-xs font-bold text-white bg-white/[0.08] hover:bg-white/[0.14] border border-white/[0.1] text-center transition-all"
            >
              Contact Solutions Team
            </Link>
          </div>
        </div>
      </section>

      {/* Add-On Services Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="text-center max-w-2xl mx-auto">
          <h3 className="text-xs font-mono uppercase tracking-widest text-brand-gold font-bold mb-2">
            Accelerated Onboarding &amp; Implementation
          </h3>
          <h2 className="text-2xl sm:text-3xl font-display font-bold text-white">
            Need Us To Build It For You?
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-xs">
          <div className="p-6 rounded-3xl glass-panel space-y-3">
            <div className="font-mono font-bold text-brand-green text-sm">
              White-Glove Setup &amp; Migration
            </div>
            <p className="text-neutral-400 leading-relaxed">
              Our engineering team sets up your custom domains, imports your CRM records, and configures all WhatsApp WABA templates.
            </p>
          </div>

          <div className="p-6 rounded-3xl glass-panel space-y-3">
            <div className="font-mono font-bold text-brand-gold text-sm">
              Custom AI Workflow Architecture
            </div>
            <p className="text-neutral-400 leading-relaxed">
              We design custom multi-step behavioral workflows, automated lead scoring rules, and telecalling routing for your sales team.
            </p>
          </div>

          <div className="p-6 rounded-3xl glass-panel space-y-3">
            <div className="font-mono font-bold text-brand-lime text-sm">
              1-on-1 Founder &amp; Team Training
            </div>
            <p className="text-neutral-400 leading-relaxed">
              Personalized training workshops for your marketing, sales, and operations personnel to maximize adoption in the first 30 days.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ Accordion */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
        <div className="text-center max-w-2xl mx-auto mb-8">
          <h2 className="text-2xl sm:text-3xl font-display font-bold text-white">
            Frequently Asked Questions
          </h2>
        </div>

        <div className="space-y-3">
          {faqs.map((faq, idx) => {
            const isOpen = openFaq === idx;
            return (
              <div
                key={idx}
                className="p-5 rounded-2xl glass-panel border border-white/[0.08] cursor-pointer transition-all"
                onClick={() => setOpenFaq(isOpen ? null : idx)}
              >
                <div className="flex items-center justify-between gap-4">
                  <h4 className="font-display font-semibold text-sm sm:text-base text-white">
                    {faq.q}
                  </h4>
                  <ChevronDown
                    className={`w-4 h-4 text-brand-green shrink-0 transition-transform ${
                      isOpen ? "rotate-180" : ""
                    }`}
                  />
                </div>
                {isOpen && (
                  <p className="mt-3 text-xs sm:text-sm text-neutral-300 leading-relaxed pt-3 border-t border-white/[0.06] animate-in fade-in duration-200">
                    {faq.a}
                  </p>
                )}
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
}
