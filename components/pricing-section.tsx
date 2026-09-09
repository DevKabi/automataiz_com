"use client";

import React, { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import {
  CheckCircle2,
  Sparkles,
  ArrowRight,
  ShieldCheck,
  Zap,
  Lock,
  Headphones,
  RotateCcw,
  CreditCard,
  Building2,
  ChevronDown,
  Info,
  Layers,
  Bot,
  Flame,
  Star,
  DollarSign,
  HelpCircle,
  Clock,
  ArrowUpRight,
  Check,
  X,
  Server,
  Globe,
  Users2,
  Database,
} from "lucide-react";
import Card3D from "@/components/card-3d";
import ScrollReveal from "@/components/scroll-reveal";

interface PricingSectionProps {
  showTitle?: boolean;
  showFaq?: boolean;
  showComparison?: boolean;
  className?: string;
}

export default function PricingSection({
  showTitle = true,
  showFaq = true,
  showComparison = true,
  className = "",
}: PricingSectionProps) {
  // Billing toggle: monthly or yearly
  const [billingPeriod, setBillingPeriod] = useState<"monthly" | "yearly">("yearly");
  // Currency toggle: INR or USD
  const [currency, setCurrency] = useState<"INR" | "USD">("INR");
  // FAQ accordion state
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const isYearly = billingPeriod === "yearly";
  const isUSD = currency === "USD";

  const faqs = [
    {
      q: "Can I upgrade anytime?",
      a: "Yes, absolutely! You can upgrade your plan instantly at any time from your account dashboard. Any remaining balance from your existing billing cycle will be prorated automatically towards your new tier.",
    },
    {
      q: "Can I downgrade later?",
      a: "Yes. You have full freedom to downgrade to a lower plan at the end of your active billing cycle without any penalties or cancellation fees.",
    },
    {
      q: "Do you offer custom pricing?",
      a: "Yes. For large enterprises, franchise networks, government bodies, and white-label SaaS resellers requiring multi-tenant private clouds, dedicated SLA guarantees, and custom AI model fine-tuning, our solutions architecture team provides bespoke enterprise pricing packages.",
    },
    {
      q: "Is GST applicable?",
      a: "For Indian businesses with a valid GSTIN number, GST invoices with input tax credit (ITC) eligibility are generated automatically upon checkout. International clients paying in USD are exempt from Indian domestic GST.",
    },
    {
      q: "Do you offer onboarding support?",
      a: "Every customer receives access to our comprehensive video academy and community. Growth and Enterprise plans include dedicated white-glove 1-on-1 onboarding, CRM data migration from your old tools, and custom workflow setup by our engineering team.",
    },
    {
      q: "Can I pay yearly?",
      a: "Yes! Choosing annual billing unlocks massive cost savings of up to ₹16,000/year (save 2 months free) compared to month-to-month billing.",
    },
    {
      q: "Can I switch currency?",
      a: "Yes. You can review pricing in either 🇮🇳 INR or 🇺🇸 USD using the currency switcher above. When completing checkout, you will be billed in your preferred local currency.",
    },
    {
      q: "How is USD calculated?",
      a: "USD rates displayed are standard fixed conversion benchmarks ($65/mo, $649/yr for Starter and $99/mo, $989/yr for Growth). Final billing amounts charged by international payment processors (Stripe/PayPal) may experience minor fluctuations based on real-time forex exchange rates.",
    },
  ];

  const comparisonModules = [
    {
      category: "Demand & Marketing OS",
      features: [
        { name: "Website & Funnel Builder", startup: "Unlimited Funnels", growth: "Unlimited Funnels + Custom Code", enterprise: "Unlimited + Multi-Brand" },
        { name: "Landing Pages & Subdomains", startup: "5 Custom Domains", growth: "Unlimited Domains", enterprise: "Unlimited + CDN Edge" },
        { name: "AI Social & Content Generator", startup: "Basic (50 posts/mo)", growth: "Advanced (Unlimited)", enterprise: "Custom Model Fine-Tuning" },
        { name: "Ad Launcher (Meta/Google/YT)", startup: "✔ Basic", growth: "✔ Advanced AI Targeting", enterprise: "✔ Multi-Account Manager" },
      ],
    },
    {
      category: "Sales & Communication OS",
      features: [
        { name: "Unified CRM & Lead Management", startup: "10,000 Contacts", growth: "Unlimited Contacts", enterprise: "Unlimited + Dedicated DB" },
        { name: "Visual Deal Pipelines", startup: "3 Pipelines", growth: "Unlimited Pipelines", enterprise: "Unlimited + Multi-Branch" },
        { name: "Official WhatsApp WABA Automation", startup: "✔ Broadcasts & Chat", growth: "✔ Multi-Agent + Bot Flows", enterprise: "✔ High-Throughput Tier" },
        { name: "Email Marketing & Campaigns", startup: "15,000 Emails/mo", growth: "100,000 Emails/mo", enterprise: "Dedicated SMTP & IP Pool" },
        { name: "In-Browser Telecalling & Smart IVR", startup: "Standard Dialer", growth: "Smart IVR + Call Recording", enterprise: "Custom Telephony SIP Trunk" },
        { name: "Appointment Booking & Calendar", startup: "✔ 2-Way Sync", growth: "✔ Round-Robin Scheduling", enterprise: "✔ Multi-Location Timezones" },
      ],
    },
    {
      category: "Autonomous AI & Digital Workforce",
      features: [
        { name: "AI Co-Pilot (Nova Assistant)", startup: "Basic Copilot", growth: "Advanced Executive AI", enterprise: "Custom Trained Knowledge Vault" },
        { name: "AI Lead Scoring & Prioritization", startup: "—", growth: "✔ Real-Time Scoring", enterprise: "✔ Predictive Win Probability" },
        { name: "Autonomous AI SDR Agents", startup: "—", growth: "✔ 1 Active AI Agent", enterprise: "✔ Unlimited Custom AI Agents" },
      ],
    },
    {
      category: "Operations, Finance & Infrastructure",
      features: [
        { name: "Workflow Builder & Triggers", startup: "Basic Workflows", growth: "Advanced Multi-Branch", enterprise: "Unlimited Complex Webhooks" },
        { name: "Finance, Invoicing & GST Ledger", startup: "✔ Standard Invoicing", growth: "✔ Recurring Subscriptions", enterprise: "✔ Multi-Entity Accounting Sync" },
        { name: "Community & Course LMS", startup: "1 Community Tier", growth: "Unlimited Courses & Tiers", enterprise: "White-Label LMS & App" },
        { name: "Team Users & Access Seats", startup: "3 Users Included", growth: "10 Users Included", enterprise: "Unlimited Users" },
        { name: "Cloud File Storage", startup: "25 GB Cloud Storage", growth: "250 GB Cloud Storage", enterprise: "Unlimited Cloud Storage" },
        { name: "REST API & Webhooks Access", startup: "—", growth: "✔ Full Developer API", enterprise: "✔ Dedicated API Gateway" },
        { name: "White-Label Reseller Portal", startup: "—", growth: "—", enterprise: "✔ Complete White-Label" },
        { name: "Support & Security SLA", startup: "Standard Email Support", growth: "Priority Chat & Call Support", enterprise: "24/7 Dedicated SLA & Manager" },
      ],
    },
  ];

  return (
    <div className={`space-y-24 ${className}`}>
      {/* 1. SECTION HEADER */}
      {showTitle && (
        <ScrollReveal>
          <div className="max-w-4xl mx-auto text-center px-4 sm:px-6">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-brand-green/20 via-brand-lime/10 to-brand-gold/20 border border-brand-green/40 text-brand-green text-sm font-mono font-bold uppercase tracking-widest mb-5 shadow-glow-green/20">
              <Sparkles className="w-4 h-4 text-brand-gold animate-pulse" />
              <span>💎 Pricing</span>
            </div>

            <h2 className="text-3xl sm:text-5xl lg:text-6xl font-display font-extrabold text-white tracking-tight leading-tight">
              Simple, Transparent Pricing for{" "}
              <span className="text-gradient-green-gold">Every Growing Business</span>
            </h2>

            <p className="mt-5 text-base sm:text-lg lg:text-xl text-neutral-200 max-w-2xl mx-auto leading-relaxed">
              Choose the perfect plan for your business today. Start small, scale effortlessly, and upgrade whenever your business grows.
            </p>
          </div>
        </ScrollReveal>
      )}

      {/* 2. DUAL TOGGLES: BILLING PERIOD + CURRENCY */}
      <div className="max-w-xl mx-auto px-4 flex flex-col items-center gap-5">
        {/* Billing Period Toggle (Monthly | Yearly) */}
        <div className="p-2 rounded-2xl bg-black/80 border border-white/[0.12] backdrop-blur-xl flex items-center gap-2 shadow-2xl relative">
          <button
            type="button"
            onClick={() => setBillingPeriod("monthly")}
            className={`relative z-10 px-6 sm:px-7 py-3 rounded-xl text-sm sm:text-base font-mono font-bold transition-all duration-300 ${
              !isYearly ? "text-black" : "text-neutral-300 hover:text-white"
            }`}
          >
            {!isYearly && (
              <motion.div
                layoutId="active-billing-pill"
                className="absolute inset-0 bg-gradient-to-r from-brand-green to-brand-lime rounded-xl shadow-glow-green"
                transition={{ type: "spring", stiffness: 400, damping: 30 }}
              />
            )}
            <span className="relative z-10">Monthly Billing</span>
          </button>

          <button
            type="button"
            onClick={() => setBillingPeriod("yearly")}
            className={`relative z-10 px-6 sm:px-7 py-3 rounded-xl text-sm sm:text-base font-mono font-bold transition-all duration-300 flex items-center gap-2 ${
              isYearly ? "text-black" : "text-neutral-300 hover:text-white"
            }`}
          >
            {isYearly && (
              <motion.div
                layoutId="active-billing-pill"
                className="absolute inset-0 bg-gradient-to-r from-brand-green via-brand-lime to-brand-gold rounded-xl shadow-glow-green"
                transition={{ type: "spring", stiffness: 400, damping: 30 }}
              />
            )}
            <span className="relative z-10">Yearly Billing</span>
            <span
              className={`relative z-10 text-xs font-black px-2.5 py-0.5 rounded-full uppercase tracking-wider ${
                isYearly
                  ? "bg-black/80 text-brand-gold border border-brand-gold/40"
                  : "bg-brand-green/20 text-brand-green border border-brand-green/40"
              }`}
            >
              Save 20%
            </span>
          </button>
        </div>

        {/* Currency Toggle (🇮🇳 INR | 🇺🇸 USD) */}
        <div className="flex flex-col items-center gap-2">
          <div className="p-1.5 rounded-2xl bg-white/[0.04] border border-white/[0.08] flex items-center gap-1.5">
            <button
              type="button"
              onClick={() => setCurrency("INR")}
              className={`px-5 py-2 rounded-xl text-xs sm:text-sm font-mono font-bold transition-all ${
                !isUSD
                  ? "bg-brand-green/20 text-brand-green border border-brand-green/40 shadow-sm"
                  : "text-neutral-300 hover:text-white"
              }`}
            >
              🇮🇳 INR (₹)
            </button>
            <button
              type="button"
              onClick={() => setCurrency("USD")}
              className={`px-5 py-2 rounded-xl text-xs sm:text-sm font-mono font-bold transition-all ${
                isUSD
                  ? "bg-brand-gold/20 text-brand-gold border border-brand-gold/40 shadow-sm"
                  : "text-neutral-300 hover:text-white"
              }`}
            >
              🇺🇸 USD ($)
            </button>
          </div>

          <p className="text-xs sm:text-sm font-mono text-neutral-300 text-center flex items-center gap-1.5">
            <Info className="w-4 h-4 text-neutral-400 shrink-0" />
            <span>Approximate USD pricing. Final billing may vary based on exchange rate.</span>
          </p>
        </div>
      </div>

      {/* 3. THREE PRICING CARDS */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8 items-stretch">
          {/* ======================================================================
              PLAN 01: STARTER
             ====================================================================== */}
          <ScrollReveal delay={0.1}>
            <Card3D glowColor="green" className="h-full">
              <div className="p-6 sm:p-8 lg:p-9 rounded-3xl glass-panel border border-white/[0.12] bg-[#070707]/90 space-y-6 sm:space-y-7 flex flex-col justify-between h-full relative overflow-hidden transition-all duration-300 hover:border-brand-green/50 hover:shadow-[0_20px_50px_rgba(24,179,0,0.15)]">
                {/* Top Badge */}
                <div className="space-y-4">
                  <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-brand-green/15 border border-brand-green/30 text-brand-green text-xs font-mono font-bold uppercase tracking-wider">
                    <Flame className="w-4 h-4 text-brand-green" />
                    <span>🔥 Most Popular for Startups</span>
                  </div>

                  <div>
                    <h3 className="text-3xl sm:text-4xl font-display font-black text-white">
                      Starter
                    </h3>
                    <p className="text-sm sm:text-base text-neutral-300 mt-1 leading-relaxed">
                      For early-stage companies, solo founders, and growing MSMEs automating lead acquisition.
                    </p>
                  </div>

                  {/* Price Block */}
                  <div className="pt-4 border-t border-white/[0.06] space-y-2">
                    <div className="flex items-baseline gap-2">
                      {/* Strikethrough Original Price */}
                      {!isUSD ? (
                        <span className="text-base sm:text-lg font-mono text-neutral-400 line-through">
                          {isYearly ? "₹1,19,988/year" : "₹9,999/month"}
                        </span>
                      ) : null}

                      {/* Offer Price */}
                      <span className="text-5xl sm:text-6xl font-display font-black text-white tracking-tight">
                        {!isUSD
                          ? isYearly
                            ? "₹49,999"
                            : "₹4,999"
                          : isYearly
                          ? "$649"
                          : "$65"}
                      </span>

                      <span className="text-sm text-neutral-300 font-mono">
                        {isYearly ? "/year" : "/month"}
                      </span>
                    </div>

                    {/* Savings Badge */}
                    {isYearly && !isUSD && (
                      <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-brand-green/20 border border-brand-green/40 text-brand-green font-mono text-xs font-bold">
                        <Sparkles className="w-3.5 h-3.5" />
                        <span>Save ₹9,989/year (2 Months Free)</span>
                      </div>
                    )}
                    {isYearly && isUSD && (
                      <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-brand-green/20 border border-brand-green/40 text-brand-green font-mono text-xs font-bold">
                        <Sparkles className="w-3.5 h-3.5" />
                        <span>Save $131/year (17% OFF)</span>
                      </div>
                    )}
                  </div>

                  {/* Feature Checklist */}
                  <div className="space-y-3 pt-4 border-t border-white/[0.06]">
                    <div className="text-xs sm:text-sm font-mono uppercase tracking-widest text-neutral-300 font-bold">
                      Included Capabilities:
                    </div>
                    <ul className="space-y-3 text-sm sm:text-base text-neutral-100">
                      {[
                        "AI Business Dashboard",
                        "Website & Funnel Builder",
                        "CRM",
                        "WhatsApp Automation",
                        "Email Marketing",
                        "Lead Management",
                        "Appointment Booking",
                        "Calendar",
                        "Basic Workflow Automation",
                        "Community",
                        "Basic Analytics",
                      ].map((item, i) => (
                        <li key={i} className="flex items-center gap-3">
                          <CheckCircle2 className="w-5 h-5 text-brand-green shrink-0" />
                          <span className="leading-snug">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* CTA Button */}
                <div className="pt-6">
                  <Link
                    href="/contact?plan=starter"
                    className="w-full py-4.5 rounded-2xl text-sm sm:text-base font-extrabold text-black bg-gradient-to-r from-brand-green via-brand-lime to-brand-gold hover:opacity-95 text-center flex items-center justify-center gap-2 shadow-glow-green/30 transition-all hover:scale-[1.02] active:scale-[0.98]"
                  >
                    <span>Start Your Free Trial</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            </Card3D>
          </ScrollReveal>

          {/* ======================================================================
              PLAN 02: GROWTH (HIGHLIGHTED / BEST VALUE)
             ====================================================================== */}
          <ScrollReveal delay={0.2}>
            <Card3D glowColor="gold" className="h-full">
              <div className="p-6 sm:p-8 lg:p-9 rounded-3xl glass-panel border-2 border-brand-gold/60 ring-2 ring-brand-green/40 bg-gradient-to-b from-[#11190a]/90 via-[#070707]/95 to-[#191508]/90 space-y-6 sm:space-y-7 flex flex-col justify-between h-full relative overflow-hidden shadow-[0_25px_60px_rgba(244,200,0,0.18)] transition-all duration-300 hover:border-brand-gold hover:scale-[1.02]">
                {/* Glowing Top Recommended Banner */}
                <div className="absolute top-0 inset-x-0 h-1.5 bg-gradient-to-r from-brand-green via-brand-lime to-brand-gold animate-pulse" />

                {/* Top Badge */}
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-gradient-to-r from-brand-gold/20 to-brand-green/20 border border-brand-gold/50 text-brand-gold text-xs font-mono font-black uppercase tracking-widest shadow-glow-gold/30">
                      <Star className="w-4 h-4 fill-brand-gold text-brand-gold" />
                      <span>⭐ Best Value</span>
                    </div>

                    <span className="text-xs font-mono text-brand-green px-2.5 py-0.5 rounded-full bg-brand-green/10 border border-brand-green/30 font-bold uppercase">
                      Recommended
                    </span>
                  </div>

                  <div>
                    <h3 className="text-3xl sm:text-4xl font-display font-black text-white flex items-center gap-2">
                      <span>Growth</span>
                      <Sparkles className="w-6 h-6 text-brand-gold" />
                    </h3>
                    <p className="text-sm sm:text-base text-neutral-200 mt-1 leading-relaxed">
                      For high-growth scaleups, agencies, and businesses ready for full automation &amp; AI SDR.
                    </p>
                  </div>

                  {/* Price Block */}
                  <div className="pt-4 border-t border-white/[0.08] space-y-2">
                    <div className="flex items-baseline gap-2">
                      {/* Strikethrough Original Price */}
                      {!isUSD ? (
                        <span className="text-base sm:text-lg font-mono text-neutral-400 line-through">
                          {isYearly ? "₹1,79,988/year" : "₹14,999/month"}
                        </span>
                      ) : null}

                      {/* Offer Price */}
                      <span className="text-5xl sm:text-6xl font-display font-black text-white tracking-tight">
                        {!isUSD
                          ? isYearly
                            ? "₹79,999"
                            : "₹7,999"
                          : isYearly
                          ? "$989"
                          : "$99"}
                      </span>

                      <span className="text-sm text-neutral-300 font-mono">
                        {isYearly ? "/year" : "/month"}
                      </span>
                    </div>

                    {/* Savings Badge */}
                    {isYearly && !isUSD && (
                      <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-brand-gold/20 border border-brand-gold/40 text-brand-gold font-mono text-xs font-bold">
                        <Sparkles className="w-3.5 h-3.5" />
                        <span>Save ₹15,989/year (2 Months Free)</span>
                      </div>
                    )}
                    {isYearly && isUSD && (
                      <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-brand-gold/20 border border-brand-gold/40 text-brand-gold font-mono text-xs font-bold">
                        <Sparkles className="w-3.5 h-3.5" />
                        <span>Save $199/year (17% OFF)</span>
                      </div>
                    )}
                  </div>

                  {/* Feature Checklist */}
                  <div className="space-y-3 pt-4 border-t border-white/[0.08]">
                    <div className="text-xs sm:text-sm font-mono uppercase tracking-widest text-brand-gold font-bold flex items-center gap-1">
                      <span>Everything in Starter, plus:</span>
                    </div>
                    <ul className="space-y-3 text-sm sm:text-base text-neutral-100">
                      {[
                        "Unlimited CRM",
                        "Advanced Automation",
                        "Advanced AI Assistant",
                        "Sales Pipeline",
                        "Email & WhatsApp Campaigns",
                        "Marketing Automation",
                        "Advanced Analytics",
                        "Team Collaboration",
                        "Workflow Builder",
                        "Lead Scoring",
                        "Priority Support",
                        "API Access",
                      ].map((item, i) => (
                        <li key={i} className="flex items-center gap-3">
                          <CheckCircle2 className="w-5 h-5 text-brand-gold shrink-0" />
                          <span className="font-medium leading-snug">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* CTA Button */}
                <div className="pt-6">
                  <Link
                    href="/contact?plan=growth"
                    className="w-full py-4.5 rounded-2xl text-sm sm:text-base font-extrabold text-black bg-gradient-to-r from-brand-gold via-[#ffd200] to-brand-green hover:opacity-95 text-center flex items-center justify-center gap-2 shadow-[0_10px_30px_rgba(244,200,0,0.4)] transition-all hover:scale-[1.03] active:scale-[0.98]"
                  >
                    <span>Book a Demo</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            </Card3D>
          </ScrollReveal>

          {/* ======================================================================
              PLAN 03: ENTERPRISE
             ====================================================================== */}
          <ScrollReveal delay={0.3}>
            <Card3D glowColor="lime" className="h-full">
              <div className="p-6 sm:p-8 lg:p-9 rounded-3xl glass-panel border border-brand-gold/30 bg-[#070707]/90 space-y-6 sm:space-y-7 flex flex-col justify-between h-full relative overflow-hidden transition-all duration-300 hover:border-brand-gold/60 hover:shadow-[0_20px_50px_rgba(244,200,0,0.12)]">
                {/* Top Badge */}
                <div className="space-y-4">
                  <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-white/[0.08] border border-white/[0.15] text-neutral-200 text-xs font-mono font-bold uppercase tracking-wider">
                    <Building2 className="w-4 h-4 text-brand-lime" />
                    <span>Enterprise</span>
                  </div>

                  <div>
                    <h3 className="text-3xl sm:text-4xl font-display font-black text-white">
                      Enterprise
                    </h3>
                    <p className="text-sm sm:text-base text-neutral-300 mt-1 leading-relaxed">
                      Tailored solutions for enterprises with custom workflows, integrations and dedicated support.
                    </p>
                  </div>

                  {/* Price Block */}
                  <div className="pt-4 border-t border-white/[0.06] space-y-2">
                    <div className="flex items-baseline gap-2">
                      <span className="text-5xl sm:text-6xl font-display font-black text-white tracking-tight">
                        Custom Pricing
                      </span>
                    </div>
                    <div className="text-sm font-mono text-brand-lime font-bold">
                      Contact Sales for Tailored Deployment
                    </div>
                  </div>

                  {/* Feature Checklist */}
                  <div className="space-y-3 pt-4 border-t border-white/[0.06]">
                    <div className="text-xs sm:text-sm font-mono uppercase tracking-widest text-neutral-300 font-bold">
                      Everything in Growth, plus:
                    </div>
                    <ul className="space-y-3 text-sm sm:text-base text-neutral-100">
                      {[
                        "Unlimited Users",
                        "Dedicated Success Manager",
                        "White Label",
                        "Custom Integrations",
                        "Private Cloud Deployment",
                        "Advanced Security",
                        "SSO",
                        "Audit Logs",
                        "Custom AI Agents",
                        "Priority Infrastructure",
                        "24×7 Premium Support",
                        "SLA",
                      ].map((item, i) => (
                        <li key={i} className="flex items-center gap-3">
                          <CheckCircle2 className="w-5 h-5 text-brand-lime shrink-0" />
                          <span className="leading-snug">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* CTA Button */}
                <div className="pt-6">
                  <Link
                    href="/contact?plan=enterprise"
                    className="w-full py-4.5 rounded-2xl text-sm sm:text-base font-bold text-white bg-white/[0.08] hover:bg-white/[0.15] border border-white/[0.15] hover:border-brand-lime/50 text-center flex items-center justify-center gap-2 transition-all hover:scale-[1.02] active:scale-[0.98]"
                  >
                    <span>Talk to Sales</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            </Card3D>
          </ScrollReveal>
        </div>
      </div>

      {/* 4. TRUST & GUARANTEES SECTION */}
      <ScrollReveal>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="p-6 sm:p-8 lg:p-10 rounded-3xl glass-panel border border-white/[0.1] bg-gradient-to-r from-[#091508] via-[#080808] to-[#141205]">
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 sm:gap-6 text-center">
              {[
                { title: "30-Day Guarantee", desc: "100% Money Back", icon: RotateCcw, color: "text-brand-green" },
                { title: "No Hidden Charges", desc: "Transparent Billing", icon: ShieldCheck, color: "text-brand-gold" },
                { title: "Secure Payments", desc: "256-bit SSL / PCI-DSS", icon: Lock, color: "text-brand-lime" },
                { title: "Free Migration", desc: "White-Glove CSV Import", icon: Database, color: "text-brand-green" },
                { title: "Cancel Anytime", desc: "No Lock-in Contracts", icon: Zap, color: "text-brand-gold" },
                { title: "Priority Support", desc: "Dedicated Engineering", icon: Headphones, color: "text-brand-lime" },
              ].map((item, idx) => {
                const Icon = item.icon;
                return (
                  <div key={idx} className="space-y-2 flex flex-col items-center">
                    <div className="w-12 sm:w-14 h-12 sm:h-14 rounded-2xl bg-white/[0.04] border border-white/[0.08] flex items-center justify-center">
                      <Icon className={`w-6 sm:w-7 h-6 sm:h-7 ${item.color}`} />
                    </div>
                    <div className="font-display font-bold text-sm sm:text-base text-white">
                      {item.title}
                    </div>
                    <div className="text-xs sm:text-sm text-neutral-300 font-mono">
                      {item.desc}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </ScrollReveal>

      {/* 5. PAYMENT METHODS */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 text-center space-y-4">
        <div className="text-xs sm:text-sm font-mono uppercase tracking-widest text-neutral-300 font-bold">
          Accepted Enterprise Payment Methods &amp; Gateways
        </div>
        <div className="flex flex-wrap items-center justify-center gap-2.5 sm:gap-4">
          {[
            "Razorpay",
            "UPI",
            "Credit Card",
            "Debit Card",
            "Net Banking",
            "Visa",
            "Mastercard",
            "American Express",
            "Stripe",
          ].map((method, idx) => (
            <div
              key={idx}
              className="px-4 sm:px-5 py-2 sm:py-2.5 rounded-xl bg-white/[0.03] border border-white/[0.08] text-xs sm:text-sm font-mono font-medium text-neutral-200 hover:border-brand-green/40 hover:text-white transition-all shadow-sm"
            >
              {method}
            </div>
          ))}
        </div>
      </div>

      {/* 6. DETAILED FEATURE COMPARISON TABLE */}
      {showComparison && (
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6 sm:space-y-8">
          <ScrollReveal>
            <div className="text-center max-w-3xl mx-auto">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-green/10 border border-brand-green/30 text-brand-green text-sm font-mono mb-3">
                <Layers className="w-4 h-4" />
                <span>Granular Capability Matrix</span>
              </div>
              <h3 className="text-3xl sm:text-5xl font-display font-extrabold text-white">
                Compare Plans in Detail
              </h3>
              <p className="text-sm sm:text-base text-neutral-300 mt-2">
                Evaluate which tier aligns with your current scale, team size, and automation needs.
              </p>
            </div>
          </ScrollReveal>

          {/* Mobile Swipe Cue */}
          <div className="lg:hidden flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl bg-brand-green/10 border border-brand-green/20 text-brand-green text-xs sm:text-sm font-mono">
            <ArrowRight className="w-4 h-4 animate-pulse" />
            <span>Swipe horizontally to compare all plan tiers</span>
          </div>

          <ScrollReveal>
            <div className="rounded-3xl glass-panel border border-white/[0.1] overflow-hidden overflow-x-auto touch-scroll">
              <table className="w-full text-left border-collapse min-w-[720px]">
                <thead>
                  <tr className="border-b border-white/[0.1] bg-black/60">
                    <th className="p-5 text-base sm:text-lg font-display font-bold text-white w-2/5">
                      Platform Modules &amp; Specs
                    </th>
                    <th className="p-5 text-base sm:text-lg font-display font-bold text-white w-1/5 text-center">
                      <div className="text-brand-green font-mono text-xs sm:text-sm uppercase">Starter</div>
                      <div>{!isUSD ? (isYearly ? "₹49,999/yr" : "₹4,999/mo") : (isYearly ? "$649/yr" : "$65/mo")}</div>
                    </th>
                    <th className="p-5 text-base sm:text-lg font-display font-bold text-brand-gold w-1/5 text-center bg-brand-gold/[0.04] border-x border-brand-gold/30">
                      <div className="text-brand-gold font-mono text-xs sm:text-sm uppercase">Growth ⭐</div>
                      <div>{!isUSD ? (isYearly ? "₹79,999/yr" : "₹7,999/mo") : (isYearly ? "$989/yr" : "$99/mo")}</div>
                    </th>
                    <th className="p-5 text-base sm:text-lg font-display font-bold text-white w-1/5 text-center">
                      <div className="text-brand-lime font-mono text-xs sm:text-sm uppercase">Enterprise</div>
                      <div>Custom</div>
                    </th>
                  </tr>
                </thead>

                <tbody className="divide-y divide-white/[0.06] text-sm sm:text-base">
                  {comparisonModules.map((cat, cIdx) => (
                    <React.Fragment key={cIdx}>
                      <tr className="bg-white/[0.03]">
                        <td
                          colSpan={4}
                          className="p-4 font-mono text-xs sm:text-sm uppercase tracking-widest text-brand-green font-bold bg-[#091508]/80"
                        >
                          {cat.category}
                        </td>
                      </tr>
                      {cat.features.map((feat, fIdx) => (
                        <tr
                          key={fIdx}
                          className="hover:bg-white/[0.02] transition-colors"
                        >
                          <td className="p-4 text-neutral-100 font-medium">
                            {feat.name}
                          </td>
                          <td className="p-4 text-center text-neutral-300 font-mono text-sm sm:text-base">
                            {feat.startup === "✔" ? (
                              <Check className="w-5 h-5 text-brand-green mx-auto" />
                            ) : feat.startup === "—" ? (
                              <span className="text-neutral-500">—</span>
                            ) : (
                              feat.startup
                            )}
                          </td>
                          <td className="p-4 text-center text-white font-mono text-sm sm:text-base bg-brand-gold/[0.03] border-x border-brand-gold/20 font-bold">
                            {feat.growth === "✔" ? (
                              <Check className="w-5 h-5 text-brand-gold mx-auto" />
                            ) : (
                              feat.growth
                            )}
                          </td>
                          <td className="p-4 text-center text-neutral-200 font-mono text-sm sm:text-base">
                            {feat.enterprise === "✔" ? (
                              <Check className="w-5 h-5 text-brand-lime mx-auto" />
                            ) : (
                              feat.enterprise
                            )}
                          </td>
                        </tr>
                      ))}
                    </React.Fragment>
                  ))}
                </tbody>
              </table>
            </div>
          </ScrollReveal>
        </section>
      )}

      {/* 7. FREQUENTLY ASKED QUESTIONS (FAQ) */}
      {showFaq && (
        <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          <ScrollReveal>
            <div className="text-center max-w-2xl mx-auto">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-gold/10 border border-brand-gold/30 text-brand-gold text-sm font-mono mb-3">
                <HelpCircle className="w-4 h-4" />
                <span>Pricing Questions Answered</span>
              </div>
              <h3 className="text-3xl sm:text-5xl font-display font-extrabold text-white">
                Frequently Asked Questions
              </h3>
            </div>
          </ScrollReveal>

          <div className="space-y-4">
            {faqs.map((faq, idx) => {
              const isOpen = openFaq === idx;
              return (
                <ScrollReveal key={idx} delay={idx * 0.05}>
                  <div className="rounded-2xl glass-panel border border-white/[0.08] overflow-hidden transition-all">
                    <button
                      type="button"
                      onClick={() => setOpenFaq(isOpen ? null : idx)}
                      className="w-full p-5 sm:p-6 text-left flex items-center justify-between gap-4 font-display font-bold text-base sm:text-lg text-white hover:text-brand-green transition-colors"
                    >
                      <span>{faq.q}</span>
                      <ChevronDown
                        className={`w-5 h-5 text-brand-green shrink-0 transition-transform duration-300 ${
                          isOpen ? "rotate-180" : "rotate-0"
                        }`}
                      />
                    </button>

                    <AnimatePresence>
                      {isOpen && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.3, ease: "easeInOut" }}
                        >
                          <div className="px-5 sm:px-6 pb-5 sm:pb-6 text-sm sm:text-base text-neutral-200 leading-relaxed border-t border-white/[0.04] pt-4">
                            {faq.a}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                </ScrollReveal>
              );
            })}
          </div>
        </section>
      )}

      {/* 8. BOTTOM ENTERPRISE CTA BANNER */}
      <ScrollReveal>
        <div className="max-w-5xl mx-auto px-4 sm:px-6 text-center">
          <div className="p-8 sm:p-12 rounded-3xl glass-panel border border-brand-green/30 bg-gradient-to-r from-black via-[#0a1808] to-black space-y-5 shadow-[0_20px_50px_rgba(24,179,0,0.15)]">
            <h3 className="text-3xl sm:text-5xl font-display font-extrabold text-white">
              Still Have Questions? Talk to Our Solutions Team
            </h3>
            <p className="text-sm sm:text-base text-neutral-200 max-w-xl mx-auto leading-relaxed">
              Schedule a 1-on-1 strategy session to calculate your exact software savings and get a customized demo for your industry.
            </p>
            <div className="pt-3 flex flex-col sm:flex-row justify-center gap-4">
              <Link
                href="/simulator"
                className="px-8 py-4 rounded-xl text-sm sm:text-base font-bold text-black bg-gradient-to-r from-brand-green via-brand-lime to-brand-gold hover:opacity-95 shadow-glow-green/30"
              >
                Calculate ROI in Simulator
              </Link>
              <Link
                href="/contact"
                className="px-8 py-4 rounded-xl text-sm sm:text-base font-semibold text-white bg-white/[0.08] hover:bg-white/[0.15] border border-white/[0.12]"
              >
                Schedule Founder Strategy Call
              </Link>
            </div>
          </div>
        </div>
      </ScrollReveal>
    </div>
  );
}
