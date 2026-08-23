import React from "react";
import Link from "next/link";
import Image from "next/image";
import {
  Sparkles,
  ArrowRight,
  Play,
  CheckCircle2,
  TrendingUp,
  Zap,
  ShieldCheck,
  Cpu,
  Layers,
  ArrowUpRight,
  Target,
  Bot,
  Activity,
  Award,
  Users2,
  DollarSign,
  Briefcase,
  Building2,
  GraduationCap,
  Dumbbell,
  School,
} from "lucide-react";
import HeroControlCenter from "@/components/hero-control-center";
import GrowthSimulator from "@/components/growth-simulator";
import BOSAssessment from "@/components/bos-assessment";
import EcosystemGraph from "@/components/ecosystem-graph";
import CeoDashboardDemo from "@/components/ceo-dashboard-demo";
import DigitalWorkforceGrid from "@/components/digital-workforce-grid";
import FounderShowcase from "@/components/founder-showcase";
import AppHubServices from "@/components/app-hub-services";
import ScrollReveal from "@/components/scroll-reveal";
import Card3D from "@/components/card-3d";
import ParallaxFloat from "@/components/parallax-float";
import PricingSection from "@/components/pricing-section";

export default function HomePage() {
  return (
    <div className="space-y-0">
      {/* 1. HERO SECTION */}
      <section className="relative min-h-[92vh] flex items-center pt-28 pb-16 lg:py-32 overflow-hidden">
        {/* Ambient Top Lighting */}
        <div className="absolute top-10 left-1/2 -translate-x-1/2 w-[800px] h-[500px] glow-orb-green opacity-25 pointer-events-none" />
        <div className="absolute top-20 right-10 w-[500px] h-[500px] glow-orb-gold opacity-15 pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
            {/* Left Hero Content (7 Cols) */}
            <div className="lg:col-span-7 text-center lg:text-left space-y-6">
              {/* Top Tag Pill */}
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/[0.04] border border-white/[0.1] text-xs font-mono text-neutral-300 backdrop-blur-md shadow-inner">
                <span className="w-2 h-2 rounded-full bg-brand-green animate-ping" />
                <span className="text-brand-green font-bold">AUTOMATAIZ OS</span>
                <span className="text-neutral-500">|</span>
                <span>The AI Business Operating System</span>
              </div>

              {/* Main Headline */}
              <h1 className="text-4xl sm:text-6xl xl:text-7xl font-display font-black text-white tracking-tight leading-[1.08]">
                The Future of Business.{" "}
                <span className="text-gradient-green-gold block mt-1">
                  Automated.
                </span>
              </h1>

              {/* Subheadline */}
              <p className="text-base sm:text-xl text-neutral-300 max-w-2xl mx-auto lg:mx-0 font-normal leading-relaxed">
                Automataiz combines <strong className="text-white">Marketing, Sales, Operations, Finance, and AI</strong> into one intelligent Business Operating System. Replace 15+ disconnected tools with a unified digital brain.
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-2">
                <Link
                  href="/simulator"
                  className="w-full sm:w-auto px-8 py-4 rounded-2xl text-sm font-bold text-black bg-gradient-to-r from-brand-green via-brand-lime to-brand-gold hover:opacity-95 transition-all flex items-center justify-center gap-2.5 shadow-glow-green/50 hover:shadow-glow-gold/60"
                >
                  <Sparkles className="w-4 h-4 text-black" />
                  <span>Launch Growth Simulator™</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>

                <Link
                  href="/contact"
                  className="w-full sm:w-auto px-7 py-4 rounded-2xl text-sm font-semibold text-white bg-white/[0.06] hover:bg-white/[0.12] border border-white/[0.12] transition-all flex items-center justify-center gap-2 backdrop-blur-md"
                >
                  <Play className="w-4 h-4 text-brand-green fill-brand-green" />
                  <span>Book Strategy Demo</span>
                </Link>
              </div>

              {/* Hero Micro Proof Ticker */}
              <div className="pt-6 border-t border-white/[0.08] flex flex-wrap items-center justify-center lg:justify-start gap-6 text-xs sm:text-sm text-neutral-300 font-mono font-medium">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-brand-green shrink-0" />
                  <span>Zero Software Fragmentation</span>
                </div>
                <div className="flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-brand-gold shrink-0" />
                  <span>Single Source of Truth</span>
                </div>
                <div className="flex items-center gap-2">
                  <Bot className="w-4 h-4 text-brand-lime shrink-0" />
                  <span>Autonomous AI Digital Workforce</span>
                </div>
              </div>
            </div>

            {/* Right Hero Interactive 3D/Canvas Cockpit (5 Cols) */}
            <div className="lg:col-span-5">
              <HeroControlCenter />
            </div>
          </div>
        </div>
      </section>

      {/* 2. FLAGSHIP AI BUSINESS GROWTH SIMULATOR */}
      <ScrollReveal>
        <GrowthSimulator />
      </ScrollReveal>

      {/* 3. THE SOFTWARE FRAGMENTATION CRISIS vs THE UNIFIED OS */}
      <section className="relative py-24 sm:py-32 bg-[#050505] overflow-hidden border-t border-white/[0.06]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <ScrollReveal>
            <div className="text-center max-w-3xl mx-auto mb-16">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-red-500/10 border border-red-500/30 text-red-400 text-xs sm:text-sm font-mono mb-4 font-bold">
                <Zap className="w-4 h-4" />
                <span>The MSME Crisis &amp; Software Overload</span>
              </div>

              <h2 className="text-3xl sm:text-5xl font-display font-bold text-white tracking-tight">
                &quot;Businesses Do Not Fail Because They Lack Ambition.{" "}
                <span className="text-gradient-green-gold">They Fail Because They Lack Systems.&quot;</span>
              </h2>
              <p className="mt-4 text-sm sm:text-lg text-neutral-300">
                Technology was supposed to make business simpler. Instead, businesses got stuck managing 15 separate subscriptions, broken Zapier connections, and scattered customer data.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
            {/* The Old World */}
            <ScrollReveal direction="left">
              <Card3D glowColor="default" className="h-full">
                <div className="p-8 sm:p-9 rounded-3xl bg-red-950/15 border border-red-500/20 backdrop-blur-xl space-y-6 flex flex-col justify-between h-full">
                  <div className="space-y-4">
                    <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-red-500/20 text-red-400 text-xs sm:text-sm font-mono font-bold">
                      THE FRAGMENTED OLD WORLD
                    </div>
                    <h3 className="text-2xl sm:text-3xl font-display font-bold text-white">
                      Managing Tools Instead of Managing Outcomes
                    </h3>
                    <p className="text-sm sm:text-base text-neutral-300 leading-relaxed">
                      One tool for CRM. One for WhatsApp. One for Email. One for Landing Pages. One for Appointments. One for Invoicing. Result: Disconnected teams, lost follow-ups, and ₹2,00,000+/mo in invisible operational leaks.
                    </p>

                    <ul className="space-y-3 text-sm text-neutral-200 pt-2">
                      <li className="flex items-start gap-2.5 text-red-400">
                        <span className="font-bold text-base leading-none mt-0.5">✕</span>
                        <span>15+ logins, passwords, and monthly billing invoices</span>
                      </li>
                      <li className="flex items-start gap-2.5 text-red-400">
                        <span className="font-bold text-base leading-none mt-0.5">✕</span>
                        <span>Data silos: Marketing data doesn&apos;t talk to Sales or Finance</span>
                      </li>
                      <li className="flex items-start gap-2.5 text-red-400">
                        <span className="font-bold text-base leading-none mt-0.5">✕</span>
                        <span>Follow-ups delayed by hours or days—lost sales opportunities</span>
                      </li>
                      <li className="flex items-start gap-2.5 text-red-400">
                        <span className="font-bold text-base leading-none mt-0.5">✕</span>
                        <span>Business owner becomes the central operational bottleneck</span>
                      </li>
                    </ul>
                  </div>

                  <div className="p-4 rounded-2xl bg-black/50 border border-red-500/20 text-xs sm:text-sm font-mono text-red-400 font-bold">
                    Outcome: Chaos, High Headcount Cost, Stagnant Growth
                  </div>
                </div>
              </Card3D>
            </ScrollReveal>

            {/* The Automataiz Way */}
            <ScrollReveal direction="right">
              <Card3D glowColor="green" className="h-full">
                <div className="p-8 sm:p-9 rounded-3xl bg-brand-green/[0.08] border border-brand-green/40 backdrop-blur-xl space-y-6 flex flex-col justify-between shadow-glow-green/20 h-full">
                  <div className="space-y-4">
                    <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-brand-green/20 text-brand-green text-xs sm:text-sm font-mono font-bold">
                      THE AUTOMATAIZ OS REVOLUTION
                    </div>
                    <h3 className="text-2xl sm:text-3xl font-display font-bold text-white">
                      One Platform. One Database. One Intelligent Brain.
                    </h3>
                    <p className="text-sm sm:text-base text-neutral-200 leading-relaxed">
                      Automataiz converges Marketing, Sales, Operations, and Finance under one unified AI-driven operating system. Human leaders set vision, while AI executes daily workflows.
                    </p>

                    <ul className="space-y-3 text-sm text-neutral-100 pt-2">
                      <li className="flex items-start gap-2.5 text-brand-green">
                        <CheckCircle2 className="w-5 h-5 text-brand-green shrink-0 mt-0.5" />
                        <span>One unified database and single source of organizational truth</span>
                      </li>
                      <li className="flex items-start gap-2.5 text-brand-green">
                        <CheckCircle2 className="w-5 h-5 text-brand-green shrink-0 mt-0.5" />
                        <span>Instant autonomous follow-ups in &lt;90 seconds via WhatsApp &amp; Email</span>
                      </li>
                      <li className="flex items-start gap-2.5 text-brand-green">
                        <CheckCircle2 className="w-5 h-5 text-brand-green shrink-0 mt-0.5" />
                        <span>AI SDR and Digital Workforce active 24/7/365</span>
                      </li>
                      <li className="flex items-start gap-2.5 text-brand-green">
                        <CheckCircle2 className="w-5 h-5 text-brand-green shrink-0 mt-0.5" />
                        <span>CEO command cockpit gives 5-minute complete business visibility</span>
                      </li>
                    </ul>
                  </div>

                  <div className="p-4 rounded-2xl bg-black/60 border border-brand-green/30 text-xs sm:text-sm font-mono text-brand-green font-bold">
                    Outcome: Predictable Revenue, System Freedom, High Profitability
                  </div>
                </div>
              </Card3D>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* 4. THE FOUR-PILLAR ARCHITECTURE + CENTRAL AI LAYER */}
      <section className="relative py-24 sm:py-32 bg-[#070707] overflow-hidden border-t border-white/[0.06]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-lime/10 border border-brand-lime/30 text-brand-lime text-xs sm:text-sm font-mono mb-4 font-semibold">
              <Layers className="w-4 h-4" />
              <span>The Foundational Architecture</span>
            </div>

            <h2 className="text-3xl sm:text-5xl font-display font-bold text-white tracking-tight">
              The 4 Foundational Pillars.{" "}
              <span className="text-gradient-green-gold">Connected by AI.</span>
            </h2>
            <p className="mt-4 text-sm sm:text-lg text-neutral-300">
              A business lifecycle follows a clear rhythm: Attract (Marketing) → Convert (Sales) → Deliver (Operations) → Measure (Finance).
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Pillar 1: Marketing */}
            <ScrollReveal delay={0.1}>
              <Card3D glowColor="green" className="h-full">
                <div className="p-6 rounded-3xl glass-panel space-y-4 h-full flex flex-col justify-between">
                  <div className="space-y-4">
                    <div className="w-12 h-12 rounded-2xl bg-brand-green/20 border border-brand-green/40 flex items-center justify-center text-brand-green shadow-glow-green/20">
                      <Target className="w-6 h-6" />
                    </div>
                    <div className="text-xs font-mono text-brand-green font-bold uppercase">
                      Pillar 1 // Demand
                    </div>
                    <h3 className="text-xl sm:text-2xl font-display font-bold text-white">
                      Marketing OS
                    </h3>
                    <p className="text-sm text-neutral-300 leading-relaxed">
                      Generate awareness and predictable lead flow through Funnels, Websites, AI Social, Forms, Chat Widgets, and Ad Launcher.
                    </p>
                  </div>
                  <div className="pt-3 text-xs sm:text-sm font-mono text-neutral-300 border-t border-white/[0.06]">
                    Objective: <span className="text-brand-green font-bold">Predictable Demand</span>
                  </div>
                </div>
              </Card3D>
            </ScrollReveal>

            {/* Pillar 2: Sales */}
            <ScrollReveal delay={0.2}>
              <Card3D glowColor="gold" className="h-full">
                <div className="p-6 rounded-3xl glass-panel space-y-4 h-full flex flex-col justify-between">
                  <div className="space-y-4">
                    <div className="w-12 h-12 rounded-2xl bg-brand-gold/20 border border-brand-gold/40 flex items-center justify-center text-brand-gold shadow-glow-gold/20">
                      <TrendingUp className="w-6 h-6" />
                    </div>
                    <div className="text-xs font-mono text-brand-gold font-bold uppercase">
                      Pillar 2 // Revenue
                    </div>
                    <h3 className="text-xl sm:text-2xl font-display font-bold text-white">
                      Sales OS
                    </h3>
                    <p className="text-sm text-neutral-300 leading-relaxed">
                      Convert opportunities into revenue via Unified CRM, Pipeline stages, Telecalling, IVR routing, AI Lead Scoring &amp; Consultative selling.
                    </p>
                  </div>
                  <div className="pt-3 text-xs sm:text-sm font-mono text-neutral-300 border-t border-white/[0.06]">
                    Objective: <span className="text-brand-gold font-bold">High Conversion</span>
                  </div>
                </div>
              </Card3D>
            </ScrollReveal>

            {/* Pillar 3: Operations */}
            <ScrollReveal delay={0.3}>
              <Card3D glowColor="lime" className="h-full">
                <div className="p-6 rounded-3xl glass-panel space-y-4 h-full flex flex-col justify-between">
                  <div className="space-y-4">
                    <div className="w-12 h-12 rounded-2xl bg-brand-lime/20 border border-brand-lime/40 flex items-center justify-center text-brand-lime">
                      <CheckCircle2 className="w-6 h-6" />
                    </div>
                    <div className="text-xs font-mono text-brand-lime font-bold uppercase">
                      Pillar 3 // Delivery
                    </div>
                    <h3 className="text-xl sm:text-2xl font-display font-bold text-white">
                      Operations OS
                    </h3>
                    <p className="text-sm text-neutral-300 leading-relaxed">
                      Deliver consistently at scale through Tasks, HRM, Project Tracking, Workflow Automation, Approvals, and Unified Inbox.
                    </p>
                  </div>
                  <div className="pt-3 text-xs sm:text-sm font-mono text-neutral-300 border-t border-white/[0.06]">
                    Objective: <span className="text-brand-lime font-bold">Operational Excellence</span>
                  </div>
                </div>
              </Card3D>
            </ScrollReveal>

            {/* Pillar 4: Finance */}
            <ScrollReveal delay={0.4}>
              <Card3D glowColor="default" className="h-full">
                <div className="p-6 rounded-3xl glass-panel space-y-4 h-full flex flex-col justify-between">
                  <div className="space-y-4">
                    <div className="w-12 h-12 rounded-2xl bg-white/10 border border-white/20 flex items-center justify-center text-white">
                      <DollarSign className="w-6 h-6" />
                    </div>
                    <div className="text-xs font-mono text-neutral-300 font-bold uppercase">
                      Pillar 4 // Health
                    </div>
                    <h3 className="text-xl sm:text-2xl font-display font-bold text-white">
                      Finance OS
                    </h3>
                    <p className="text-sm text-neutral-300 leading-relaxed">
                      Measure business health through Invoicing, Subscription Billing, Expense Management, Product Catalog, and Revenue Intelligence.
                    </p>
                  </div>
                  <div className="pt-3 text-xs sm:text-sm font-mono text-neutral-300 border-t border-white/[0.06]">
                    Objective: <span className="text-white font-bold">Maximized Profitability</span>
                  </div>
                </div>
              </Card3D>
            </ScrollReveal>
          </div>

          {/* Central AI Layer Banner */}
          <div className="mt-8 p-6 sm:p-8 rounded-3xl glass-panel border border-brand-green/40 bg-gradient-to-r from-[#0b170a] via-[#080808] to-[#171406] flex flex-col lg:flex-row items-center justify-between gap-6">
            <div className="flex items-start gap-4">
              <div className="w-12 sm:w-14 h-12 sm:h-14 rounded-2xl bg-brand-green/20 border border-brand-green flex items-center justify-center text-brand-green shrink-0 shadow-glow-green/30">
                <Bot className="w-6 sm:w-7 h-6 sm:h-7" />
              </div>
              <div>
                <div className="text-xs sm:text-sm font-mono uppercase tracking-widest text-brand-green font-bold">
                  The Fifth Layer // Central Intelligence
                </div>
                <h4 className="text-2xl sm:text-3xl font-display font-bold text-white mt-1">
                  The AI Intelligence Layer &amp; Nova Co-Pilot
                </h4>
                <p className="text-sm sm:text-base text-neutral-200 mt-1 max-w-3xl leading-relaxed">
                  While other platforms treat AI as an add-on feature, Automataiz treats AI as infrastructure. The AI Brain understands your company context, analyzes trends across all 4 pillars, recommends strategic decisions, and executes workflows.
                </p>
              </div>
            </div>

            <Link
              href="/solutions"
              className="px-7 py-4 rounded-xl text-sm font-bold text-black bg-gradient-to-r from-brand-green via-brand-lime to-brand-gold hover:opacity-95 transition-all shrink-0 flex items-center gap-2 shadow-glow-green/30"
            >
              <span>Explore Architecture</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* 5. INTERACTIVE 12-MODULE ECOSYSTEM HUB */}
      <ScrollReveal>
        <EcosystemGraph />
      </ScrollReveal>

      {/* 5B. APP HUB & COMPREHENSIVE SERVICES MATRIX */}
      <ScrollReveal>
        <AppHubServices />
      </ScrollReveal>

      {/* 6. DIGITAL WORKFORCE & AI AGENTS */}
      <ScrollReveal>
        <DigitalWorkforceGrid />
      </ScrollReveal>

      {/* 7. CEO INTELLIGENCE COMMAND CENTER PREVIEW */}
      <ScrollReveal>
        <CeoDashboardDemo />
      </ScrollReveal>

      {/* 8. 60-SECOND BOS ASSESSMENT */}
      <ScrollReveal>
        <BOSAssessment />
      </ScrollReveal>

      {/* 9. INDUSTRY VERTICALS */}
      <section className="relative py-24 sm:py-32 bg-[#050505] overflow-hidden border-t border-white/[0.06]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <ScrollReveal>
            <div className="text-center max-w-3xl mx-auto mb-16">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-gold/10 border border-brand-gold/30 text-brand-gold text-xs sm:text-sm font-mono mb-4 font-semibold">
                <Building2 className="w-4 h-4" />
                <span>Tailored Vertical Operating Systems</span>
              </div>

              <h2 className="text-3xl sm:text-5xl font-display font-bold text-white tracking-tight">
                Built Specially For{" "}
                <span className="text-gradient-green-gold">Your Exact Industry.</span>
              </h2>
              <p className="mt-4 text-sm sm:text-lg text-neutral-300">
                Generic software creates users. Industry software creates market leaders. Explore pre-configured workflows, funnels, and AI agents tailored for your vertical.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: "Health & Fitness",
                icon: Dumbbell,
                pain: "Membership churn, missed follow-ups, trial drop-offs",
                solution: "Instant WhatsApp trial booking, trainer attendance & automated retention renewals",
                roi: "+45% Member Retention",
                color: "text-brand-green border-brand-green/30",
                glow: "green" as const,
              },
              {
                title: "Trainers & Coaches",
                icon: GraduationCap,
                pain: "Managing 8 separate tools for courses, funnels, and WhatsApp",
                solution: "All-in-one LMS, community tiers, payment links, and AI client follow-up",
                roi: "Save 28 hrs/week",
                color: "text-brand-gold border-brand-gold/30",
                glow: "gold" as const,
              },
              {
                title: "Real Estate Firms",
                icon: Building2,
                pain: "High ad spend on portals with 60% leads going cold before site visits",
                solution: "AI SDR qualification, automated broker site-visit routing & buyer pipeline tracking",
                roi: "3.2x Site Visit Ratio",
                color: "text-brand-lime border-brand-lime/30",
                glow: "lime" as const,
              },
              {
                title: "Schools & Institutes",
                icon: School,
                pain: "Fragmented student inquiry tracking and manual admission calls",
                solution: "Admission CRM, counselor IVR dialing, parent WhatsApp notifications & fees tracker",
                roi: "92% Admission Conversion",
                color: "text-brand-green border-brand-green/30",
                glow: "green" as const,
              },
              {
                title: "Insurance & Finance",
                icon: ShieldCheck,
                pain: "Losing policy renewals and slow client consultation scheduling",
                solution: "Automated policy renewal reminders, instant quote calculators & portfolio memory",
                roi: "4x Renewal Retention",
                color: "text-brand-gold border-brand-gold/30",
                glow: "gold" as const,
              },
              {
                title: "Agencies & MSMEs",
                icon: Briefcase,
                pain: "Founder bottleneck in managing client deliverables, sales calls, and invoicing",
                solution: "Centralized client portals, Vibe outbound prospecting & real-time CAC/LTV telemetry",
                roi: "85% Gross Profit Margin",
                color: "text-neutral-200 border-white/20",
                glow: "default" as const,
              },
            ].map((ind, i) => {
              const Icon = ind.icon;
              return (
                <ScrollReveal key={i} delay={i * 0.08}>
                  <Card3D glowColor={ind.glow} className="h-full">
                    <div className="p-6 sm:p-7 rounded-3xl glass-panel space-y-4 flex flex-col justify-between h-full">
                      <div className="space-y-3">
                        <div className="flex items-center justify-between">
                          <div className="w-11 h-11 rounded-2xl bg-white/[0.04] border border-white/[0.08] flex items-center justify-center text-white">
                            <Icon className="w-6 h-6 text-brand-green" />
                          </div>
                          <span className={`text-xs font-mono px-3 py-1 rounded-full border ${ind.color} font-bold`}>
                            {ind.roi}
                          </span>
                        </div>

                        <h3 className="font-display font-bold text-xl sm:text-2xl text-white">
                          {ind.title}
                        </h3>

                        <div className="space-y-2 text-xs sm:text-sm">
                          <div className="text-neutral-300">
                            <strong className="text-red-400 font-mono">Bottleneck:</strong> {ind.pain}
                          </div>
                          <div className="text-neutral-200">
                            <strong className="text-brand-green font-mono font-semibold">Automataiz OS:</strong> {ind.solution}
                          </div>
                        </div>
                      </div>

                      <Link
                        href="/industries"
                        className="pt-4 border-t border-white/[0.06] flex items-center justify-between text-xs sm:text-sm font-mono text-brand-green hover:text-brand-lime transition-colors font-bold"
                      >
                        <span>View Full Vertical Blueprint</span>
                        <ArrowRight className="w-4 h-4" />
                      </Link>
                    </div>
                  </Card3D>
                </ScrollReveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* 10. FOUNDER STORY & COMPANY NARRATIVE */}
      <FounderShowcase />

      {/* 11. ENTERPRISE PRICING SECTION */}
      <section className="relative py-24 sm:py-32 bg-[#060606] overflow-hidden border-t border-white/[0.06]">
        <PricingSection showTitle={true} showFaq={true} showComparison={true} />
      </section>
    </div>
  );
}
