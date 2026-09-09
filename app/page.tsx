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
  Target,
  Bot,
  DollarSign,
  Briefcase,
  Building2,
  GraduationCap,
  Dumbbell,
  School,
  FileDown,
  Calculator,
  Star,
  Quote,
  MapPin,
  Clock,
  SlidersHorizontal,
} from "lucide-react";
import HeroControlCenter from "@/components/hero-control-center";
import TestimonialsSection from "@/components/testimonials-section";
import TypewriterHeadline from "@/components/typewriter-headline";
import ScrollReveal from "@/components/scroll-reveal";
import Card3D from "@/components/card-3d";

export default function HomePage() {
  return (
    <div className="space-y-0">
      {/* 1. HERO SECTION */}
      <section className="relative min-h-[90vh] flex items-center pt-24 pb-12 sm:pt-28 sm:pb-16 lg:py-32 overflow-hidden">
        {/* Ambient Top Lighting */}
        <div className="absolute top-10 left-1/2 -translate-x-1/2 w-[800px] h-[500px] glow-orb-green opacity-25 pointer-events-none" />
        <div className="absolute top-20 right-10 w-[500px] h-[500px] glow-orb-gold opacity-15 pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">
            {/* Left Hero Content (7 Cols) */}
            <div className="lg:col-span-7 text-center lg:text-left space-y-6">
              {/* Top Tag Pill */}
              <div className="inline-flex items-center gap-2 px-3.5 sm:px-4 py-1.5 rounded-full bg-white/[0.04] border border-white/[0.1] text-xs font-mono text-neutral-300 backdrop-blur-md shadow-inner">
                <span className="w-2 h-2 rounded-full bg-brand-green animate-ping" />
                <span className="text-brand-green font-bold">AUTOMATAIZ OS</span>
                <span className="text-neutral-500">|</span>
                <span>The AI Business Operating System</span>
              </div>

              {/* Main Headline with Typewriter Keyboard Print Animation */}
              <h1 className="text-3xl sm:text-5xl md:text-6xl xl:text-7xl font-display font-black text-white tracking-tight leading-[1.12] sm:leading-[1.08]">
                The Future of Business.{" "}
                <span className="block mt-1 sm:mt-2 min-h-[1.15em]">
                  <TypewriterHeadline
                    words={[
                      "Automated.",
                      "Unified.",
                      "Autonomous.",
                      "Predictable.",
                      "Intelligent.",
                    ]}
                  />
                </span>
              </h1>

              {/* Subheadline */}
              <p className="text-sm sm:text-lg md:text-xl text-neutral-300 max-w-2xl mx-auto lg:mx-0 font-normal leading-relaxed">
                Automataiz combines <strong className="text-white">Marketing, Sales, Operations, Finance, and AI</strong> into one intelligent Business Operating System. Replace 15+ disconnected tools with a unified digital brain.
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3.5 sm:gap-4 pt-2">
                <Link
                  href="/simulator"
                  className="w-full sm:w-auto px-7 sm:px-8 py-3.5 sm:py-4 rounded-2xl text-xs sm:text-sm font-bold text-black bg-gradient-to-r from-brand-green via-brand-lime to-brand-gold hover:opacity-95 transition-all flex items-center justify-center gap-2.5 shadow-glow-green/50 hover:shadow-glow-gold/60"
                >
                  <Sparkles className="w-4 h-4 text-black" />
                  <span>Launch Growth Simulator™</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>

                <Link
                  href="/contact"
                  className="w-full sm:w-auto px-6 sm:px-7 py-3.5 sm:py-4 rounded-2xl text-xs sm:text-sm font-semibold text-white bg-white/[0.06] hover:bg-white/[0.12] border border-white/[0.12] transition-all flex items-center justify-center gap-2 backdrop-blur-md"
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

      {/* 2. GROWTH SIMULATOR TEASER / ADVERTISEMENT SECTION */}
      <section className="relative py-16 sm:py-24 bg-[#050505] overflow-hidden border-t border-white/[0.06]">
        {/* Background glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] glow-orb-green opacity-15 pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <ScrollReveal>
            <div className="p-8 sm:p-12 lg:p-14 rounded-3xl glass-panel border border-brand-green/30 bg-gradient-to-br from-[#081507] via-[#090909] to-[#141105] shadow-[0_20px_50px_rgba(24,179,0,0.1)]">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                {/* Left side: Teaser copy & Value props */}
                <div className="lg:col-span-7 space-y-6">
                  <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-green/15 border border-brand-green/30 text-brand-green text-xs font-mono font-bold">
                    <Sparkles className="w-3.5 h-3.5" />
                    <span>FLAGSHIP AI ENGINE // CHAPTER 01</span>
                  </div>

                  <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-extrabold text-white tracking-tight leading-tight">
                    Uncover Hidden Revenue Leaks in{" "}
                    <span className="text-gradient-green-gold">&lt;60 Seconds</span>
                  </h2>

                  <p className="text-sm sm:text-base text-neutral-300 leading-relaxed max-w-xl">
                    Are disconnected tools and delayed follow-ups quietly draining your monthly profits? Use our interactive <strong>AI Business Growth Simulator™</strong> to calculate manual waste, simulate automation scenarios, and download your customized 4-pillar audit report.
                  </p>

                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2">
                    <div className="p-3.5 rounded-2xl bg-white/[0.02] border border-white/[0.06]">
                      <div className="text-xs text-neutral-400 font-mono">STEP 01</div>
                      <div className="font-bold text-white text-xs sm:text-sm mt-1">Input Telemetry</div>
                      <div className="text-[11px] text-neutral-400 mt-0.5">Leads, deal size, tools</div>
                    </div>
                    <div className="p-3.5 rounded-2xl bg-white/[0.02] border border-white/[0.06]">
                      <div className="text-xs text-brand-gold font-mono">STEP 02</div>
                      <div className="font-bold text-white text-xs sm:text-sm mt-1">Detect Leaks</div>
                      <div className="text-[11px] text-neutral-400 mt-0.5">Speed-to-lead & churn</div>
                    </div>
                    <div className="p-3.5 rounded-2xl bg-white/[0.02] border border-white/[0.06]">
                      <div className="text-xs text-brand-green font-mono">STEP 03</div>
                      <div className="font-bold text-white text-xs sm:text-sm mt-1">Download PDF</div>
                      <div className="text-[11px] text-neutral-400 mt-0.5">Complete audit report</div>
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2">
                    <Link
                      href="/simulator"
                      className="px-7 py-4 rounded-2xl text-sm font-bold text-black bg-gradient-to-r from-brand-green via-brand-lime to-brand-gold hover:opacity-95 transition-all flex items-center justify-center gap-2 shadow-glow-green/40 hover:shadow-glow-gold/50"
                    >
                      <Calculator className="w-4 h-4 text-black" />
                      <span>Launch Growth Simulator™</span>
                      <ArrowRight className="w-4 h-4" />
                    </Link>

                    <Link
                      href="/simulator"
                      className="px-6 py-4 rounded-2xl text-sm font-semibold text-neutral-200 bg-white/[0.05] hover:bg-white/[0.1] border border-white/[0.1] transition-all flex items-center justify-center gap-2"
                    >
                      <FileDown className="w-4 h-4 text-brand-gold" />
                      <span>Take 60-Sec Audit Diagnostic</span>
                    </Link>
                  </div>
                </div>

                {/* Right side: Interactive Mini-Telemetry Visual Box */}
                <div className="lg:col-span-5">
                  <div className="p-6 sm:p-7 rounded-3xl bg-black/60 border border-brand-green/30 backdrop-blur-xl space-y-5 shadow-2xl relative">
                    <div className="flex items-center justify-between border-b border-white/[0.08] pb-3">
                      <div className="flex items-center gap-2">
                        <div className="w-2.5 h-2.5 rounded-full bg-brand-green animate-pulse" />
                        <span className="text-xs font-mono font-bold text-white uppercase tracking-wider">
                          Live Audit Preview
                        </span>
                      </div>
                      <span className="text-[11px] font-mono text-brand-gold bg-brand-gold/10 px-2.5 py-0.5 rounded-full border border-brand-gold/30">
                        Calculated in Real-Time
                      </span>
                    </div>

                    <div className="space-y-3 font-mono">
                      <div className="p-3.5 rounded-2xl bg-red-950/20 border border-red-500/30 flex items-center justify-between">
                        <div>
                          <div className="text-[11px] text-red-400">Estimated Revenue Leak</div>
                          <div className="text-xl font-black text-red-400">₹1,45,000 / mo</div>
                        </div>
                        <span className="text-xs px-2 py-1 rounded bg-red-500/20 text-red-400 font-bold">
                          -32% Efficiency
                        </span>
                      </div>

                      <div className="p-3.5 rounded-2xl bg-brand-green/10 border border-brand-green/30 flex items-center justify-between">
                        <div>
                          <div className="text-[11px] text-brand-green">Lead Follow-Up Velocity</div>
                          <div className="text-xl font-black text-white">&lt; 90 Seconds</div>
                        </div>
                        <span className="text-xs px-2 py-1 rounded bg-brand-green/20 text-brand-green font-bold">
                          Autonomous
                        </span>
                      </div>

                      <div className="p-3.5 rounded-2xl bg-brand-gold/10 border border-brand-gold/30 flex items-center justify-between">
                        <div>
                          <div className="text-[11px] text-brand-gold">Projected 12M ARR Lift</div>
                          <div className="text-xl font-black text-brand-gold">+ ₹38,50,000</div>
                        </div>
                        <span className="text-xs px-2 py-1 rounded bg-brand-gold/20 text-brand-gold font-bold">
                          +45% Growth
                        </span>
                      </div>
                    </div>

                    <div className="pt-2 text-center">
                      <Link
                        href="/simulator"
                        className="text-xs font-mono text-brand-green hover:text-brand-lime font-bold inline-flex items-center gap-1.5 transition-colors"
                      >
                        <span>Run Full Simulation with Your Own Data</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* 3. THE SOFTWARE FRAGMENTATION CRISIS vs THE UNIFIED OS */}
      <section className="relative py-20 sm:py-28 bg-[#070707] overflow-hidden border-t border-white/[0.06]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <ScrollReveal>
            <div className="text-center max-w-3xl mx-auto mb-14">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-red-500/10 border border-red-500/30 text-red-400 text-xs sm:text-sm font-mono mb-4 font-bold">
                <Zap className="w-4 h-4" />
                <span>The MSME Crisis &amp; Software Overload</span>
              </div>

              <h2 className="text-3xl sm:text-5xl font-display font-bold text-white tracking-tight">
                &quot;Businesses Do Not Fail Because They Lack Ambition.{" "}
                <span className="text-gradient-green-gold">They Fail Because They Lack Systems.&quot;</span>
              </h2>
              <p className="mt-4 text-sm sm:text-base text-neutral-300">
                Technology was supposed to make business simpler. Instead, businesses got stuck managing 15 separate subscriptions, broken Zapier connections, and scattered customer data.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
            {/* The Old World */}
            <ScrollReveal direction="left">
              <Card3D glowColor="default" className="h-full">
                <div className="p-8 rounded-3xl bg-red-950/15 border border-red-500/20 backdrop-blur-xl space-y-6 flex flex-col justify-between h-full">
                  <div className="space-y-4">
                    <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-red-500/20 text-red-400 text-xs sm:text-sm font-mono font-bold">
                      THE FRAGMENTED OLD WORLD
                    </div>
                    <h3 className="text-2xl sm:text-3xl font-display font-bold text-white">
                      Managing Tools Instead of Outcomes
                    </h3>
                    <p className="text-sm text-neutral-300 leading-relaxed">
                      One tool for CRM. One for WhatsApp. One for Email. One for Landing Pages. One for Appointments. Result: Disconnected teams, lost follow-ups, and ₹2,00,000+/mo in invisible operational leaks.
                    </p>

                    <ul className="space-y-2.5 text-xs sm:text-sm text-neutral-200 pt-2">
                      <li className="flex items-start gap-2.5 text-red-400">
                        <span className="font-bold text-base leading-none mt-0.5">✕</span>
                        <span>15+ logins, passwords, and recurring invoices</span>
                      </li>
                      <li className="flex items-start gap-2.5 text-red-400">
                        <span className="font-bold text-base leading-none mt-0.5">✕</span>
                        <span>Data silos: Marketing data doesn&apos;t talk to Sales or Finance</span>
                      </li>
                      <li className="flex items-start gap-2.5 text-red-400">
                        <span className="font-bold text-base leading-none mt-0.5">✕</span>
                        <span>Follow-ups delayed by hours or days—lost deal flow</span>
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
                <div className="p-8 rounded-3xl bg-brand-green/[0.08] border border-brand-green/40 backdrop-blur-xl space-y-6 flex flex-col justify-between shadow-glow-green/20 h-full">
                  <div className="space-y-4">
                    <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-brand-green/20 text-brand-green text-xs sm:text-sm font-mono font-bold">
                      THE AUTOMATAIZ OS REVOLUTION
                    </div>
                    <h3 className="text-2xl sm:text-3xl font-display font-bold text-white">
                      One Platform. One Database. One Brain.
                    </h3>
                    <p className="text-sm text-neutral-200 leading-relaxed">
                      Automataiz converges Marketing, Sales, Operations, and Finance under one unified AI-driven operating system. Human leaders set vision, while AI executes daily workflows.
                    </p>

                    <ul className="space-y-2.5 text-xs sm:text-sm text-neutral-100 pt-2">
                      <li className="flex items-start gap-2.5 text-brand-green">
                        <CheckCircle2 className="w-5 h-5 text-brand-green shrink-0 mt-0.5" />
                        <span>One unified database and single source of truth</span>
                      </li>
                      <li className="flex items-start gap-2.5 text-brand-green">
                        <CheckCircle2 className="w-5 h-5 text-brand-green shrink-0 mt-0.5" />
                        <span>Instant autonomous follow-ups in &lt;90 seconds</span>
                      </li>
                      <li className="flex items-start gap-2.5 text-brand-green">
                        <CheckCircle2 className="w-5 h-5 text-brand-green shrink-0 mt-0.5" />
                        <span>AI SDR and Digital Workforce active 24/7/365</span>
                      </li>
                    </ul>
                  </div>

                  <div className="p-4 rounded-2xl bg-black/60 border border-brand-green/30 text-xs sm:text-sm font-mono text-brand-green font-bold flex items-center justify-between">
                    <span>Outcome: System Freedom &amp; Profitability</span>
                    <Link href="/solutions" className="underline hover:text-white flex items-center gap-1">
                      <span>Learn More</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                </div>
              </Card3D>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* 4. THE FOUR-PILLAR SOLUTIONS ARCHITECTURE TEASER */}
      <section className="relative py-20 sm:py-28 bg-[#050505] overflow-hidden border-t border-white/[0.06]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-12">
          <ScrollReveal>
            <div className="text-center max-w-3xl mx-auto">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-lime/10 border border-brand-lime/30 text-brand-lime text-xs sm:text-sm font-mono mb-4 font-semibold">
                <Layers className="w-4 h-4" />
                <span>The Foundational Architecture</span>
              </div>

              <h2 className="text-3xl sm:text-5xl font-display font-bold text-white tracking-tight">
                The 4 Foundational Pillars.{" "}
                <span className="text-gradient-green-gold">Connected by AI.</span>
              </h2>
              <p className="mt-4 text-sm sm:text-base text-neutral-300">
                A business follows a natural rhythm: Attract (Marketing) → Convert (Sales) → Deliver (Operations) → Measure (Finance).
              </p>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Pillar 1: Marketing */}
            <ScrollReveal delay={0.1}>
              <Card3D glowColor="green" className="h-full">
                <div className="p-6 rounded-3xl glass-panel space-y-4 h-full flex flex-col justify-between">
                  <div className="space-y-3">
                    <div className="w-12 h-12 rounded-2xl bg-brand-green/20 border border-brand-green/40 flex items-center justify-center text-brand-green shadow-glow-green/20">
                      <Target className="w-6 h-6" />
                    </div>
                    <div className="text-xs font-mono text-brand-green font-bold uppercase">
                      Pillar 1 // Demand
                    </div>
                    <h3 className="text-xl font-display font-bold text-white">Marketing OS</h3>
                    <p className="text-xs sm:text-sm text-neutral-300 leading-relaxed">
                      Capture high-intent attention via Funnels, Websites, AI Social, Forms, and Multi-Channel Ad Launcher.
                    </p>
                  </div>
                  <div className="pt-3 text-xs font-mono text-neutral-300 border-t border-white/[0.06]">
                    Objective: <span className="text-brand-green font-bold">Predictable Demand</span>
                  </div>
                </div>
              </Card3D>
            </ScrollReveal>

            {/* Pillar 2: Sales */}
            <ScrollReveal delay={0.2}>
              <Card3D glowColor="gold" className="h-full">
                <div className="p-6 rounded-3xl glass-panel space-y-4 h-full flex flex-col justify-between">
                  <div className="space-y-3">
                    <div className="w-12 h-12 rounded-2xl bg-brand-gold/20 border border-brand-gold/40 flex items-center justify-center text-brand-gold shadow-glow-gold/20">
                      <TrendingUp className="w-6 h-6" />
                    </div>
                    <div className="text-xs font-mono text-brand-gold font-bold uppercase">
                      Pillar 2 // Revenue
                    </div>
                    <h3 className="text-xl font-display font-bold text-white">Sales OS</h3>
                    <p className="text-xs sm:text-sm text-neutral-300 leading-relaxed">
                      Convert leads to revenue with Visual Pipelines, AI Lead Scoring, IVR Calling, and Automated Scheduling.
                    </p>
                  </div>
                  <div className="pt-3 text-xs font-mono text-neutral-300 border-t border-white/[0.06]">
                    Objective: <span className="text-brand-gold font-bold">High Conversion</span>
                  </div>
                </div>
              </Card3D>
            </ScrollReveal>

            {/* Pillar 3: Operations */}
            <ScrollReveal delay={0.3}>
              <Card3D glowColor="lime" className="h-full">
                <div className="p-6 rounded-3xl glass-panel space-y-4 h-full flex flex-col justify-between">
                  <div className="space-y-3">
                    <div className="w-12 h-12 rounded-2xl bg-brand-lime/20 border border-brand-lime/40 flex items-center justify-center text-brand-lime">
                      <CheckCircle2 className="w-6 h-6" />
                    </div>
                    <div className="text-xs font-mono text-brand-lime font-bold uppercase">
                      Pillar 3 // Delivery
                    </div>
                    <h3 className="text-xl font-display font-bold text-white">Operations OS</h3>
                    <p className="text-xs sm:text-sm text-neutral-300 leading-relaxed">
                      Scale delivery through Unified Inbox, Automated Tasks, Staff Attendance, and 3-Level Approval Workflows.
                    </p>
                  </div>
                  <div className="pt-3 text-xs font-mono text-neutral-300 border-t border-white/[0.06]">
                    Objective: <span className="text-brand-lime font-bold">Scalable Delivery</span>
                  </div>
                </div>
              </Card3D>
            </ScrollReveal>

            {/* Pillar 4: Finance */}
            <ScrollReveal delay={0.4}>
              <Card3D glowColor="default" className="h-full">
                <div className="p-6 rounded-3xl glass-panel space-y-4 h-full flex flex-col justify-between">
                  <div className="space-y-3">
                    <div className="w-12 h-12 rounded-2xl bg-white/10 border border-white/20 flex items-center justify-center text-white">
                      <DollarSign className="w-6 h-6" />
                    </div>
                    <div className="text-xs font-mono text-neutral-300 font-bold uppercase">
                      Pillar 4 // Health
                    </div>
                    <h3 className="text-xl font-display font-bold text-white">Finance OS</h3>
                    <p className="text-xs sm:text-sm text-neutral-300 leading-relaxed">
                      Measure business health through Recurring Invoicing, CAC/LTV Telemetry, Gross Margins, and GST Reports.
                    </p>
                  </div>
                  <div className="pt-3 text-xs font-mono text-neutral-300 border-t border-white/[0.06]">
                    Objective: <span className="text-white font-bold">Max Profitability</span>
                  </div>
                </div>
              </Card3D>
            </ScrollReveal>
          </div>

          {/* Central AI Layer Teaser Banner & Solutions Link */}
          <ScrollReveal>
            <div className="p-6 sm:p-8 rounded-3xl glass-panel border border-brand-green/40 bg-gradient-to-r from-[#0b170a] via-[#080808] to-[#171406] flex flex-col lg:flex-row items-center justify-between gap-6">
              <div className="flex items-start gap-4">
                <div className="w-12 sm:w-14 h-12 sm:h-14 rounded-2xl bg-brand-green/20 border border-brand-green flex items-center justify-center text-brand-green shrink-0 shadow-glow-green/30">
                  <Bot className="w-6 sm:w-7 h-6 sm:h-7" />
                </div>
                <div>
                  <div className="text-xs sm:text-sm font-mono uppercase tracking-widest text-brand-green font-bold">
                    The Central Nervous System
                  </div>
                  <h4 className="text-xl sm:text-2xl font-display font-bold text-white mt-1">
                    AI Intelligence Layer &amp; Nova Co-Pilot
                  </h4>
                  <p className="text-xs sm:text-sm text-neutral-300 mt-1 max-w-2xl leading-relaxed">
                    The AI Brain monitors telemetry across all 4 pillars, recommends strategic actions, and executes routine tasks 24/7.
                  </p>
                </div>
              </div>

              <Link
                href="/solutions"
                className="px-7 py-4 rounded-xl text-sm font-bold text-black bg-gradient-to-r from-brand-green via-brand-lime to-brand-gold hover:opacity-95 transition-all shrink-0 flex items-center gap-2 shadow-glow-green/30"
              >
                <span>Explore Solutions Architecture</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* 5. INDUSTRY VERTICALS TEASER SECTION */}
      <section className="relative py-20 sm:py-28 bg-[#060606] overflow-hidden border-t border-white/[0.06]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-12">
          <ScrollReveal>
            <div className="text-center max-w-3xl mx-auto">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-gold/10 border border-brand-gold/30 text-brand-gold text-xs sm:text-sm font-mono mb-4 font-semibold">
                <Building2 className="w-4 h-4" />
                <span>Tailored Vertical Operating Systems</span>
              </div>

              <h2 className="text-3xl sm:text-5xl font-display font-bold text-white tracking-tight">
                Built Specially For{" "}
                <span className="text-gradient-green-gold">Your Exact Industry</span>
              </h2>
              <p className="mt-4 text-sm sm:text-base text-neutral-300">
                Explore pre-configured workflows, high-converting funnels, and trained AI SDR agents tailored specifically for your vertical.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: "Real Estate Firms",
                icon: Building2,
                pain: "60% leads go cold before site visits",
                solution: "AI SDR qualification & automated broker site-visit routing",
                roi: "3.2x Site Visit Ratio",
                color: "text-brand-lime border-brand-lime/30",
                glow: "lime" as const,
              },
              {
                title: "Trainers & Coaches",
                icon: GraduationCap,
                pain: "Managing 8 separate SaaS subscriptions",
                solution: "All-in-one LMS, community tiers, payment links & AI follow-up",
                roi: "Save 28 hrs/week",
                color: "text-brand-gold border-brand-gold/30",
                glow: "gold" as const,
              },
              {
                title: "Health & Fitness",
                icon: Dumbbell,
                pain: "Membership churn & trial drop-offs",
                solution: "Instant WhatsApp trial booking & automated retention renewals",
                roi: "+45% Retention Lift",
                color: "text-brand-green border-brand-green/30",
                glow: "green" as const,
              },
              {
                title: "Schools & Institutes",
                icon: School,
                pain: "Inquiries lost across counselor calls",
                solution: "Admission CRM, counselor IVR dialing & parent WhatsApp alerts",
                roi: "92% Admission Rate",
                color: "text-brand-green border-brand-green/30",
                glow: "green" as const,
              },
              {
                title: "Insurance & Wealth",
                icon: ShieldCheck,
                pain: "Lapsing policy renewals in Excel sheets",
                solution: "Automated renewal sequences & client portfolio memory",
                roi: "4x Renewal Retention",
                color: "text-brand-gold border-brand-gold/30",
                glow: "gold" as const,
              },
              {
                title: "Agencies & MSMEs",
                icon: Briefcase,
                pain: "Founder bottleneck in managing client tasks",
                solution: "Client portals, Vibe prospecting & real-time telemetry",
                roi: "85% Gross Margin",
                color: "text-neutral-200 border-white/20",
                glow: "default" as const,
              },
            ].map((ind, i) => {
              const Icon = ind.icon;
              return (
                <ScrollReveal key={i} delay={i * 0.08}>
                  <Card3D glowColor={ind.glow} className="h-full">
                    <div className="p-6 rounded-3xl glass-panel space-y-4 flex flex-col justify-between h-full">
                      <div className="space-y-3">
                        <div className="flex items-center justify-between">
                          <div className="w-10 h-10 rounded-2xl bg-white/[0.04] border border-white/[0.08] flex items-center justify-center text-white">
                            <Icon className="w-5 h-5 text-brand-green" />
                          </div>
                          <span className={`text-xs font-mono px-3 py-0.5 rounded-full border ${ind.color} font-bold`}>
                            {ind.roi}
                          </span>
                        </div>

                        <h3 className="font-display font-bold text-lg sm:text-xl text-white">
                          {ind.title}
                        </h3>

                        <div className="space-y-1.5 text-xs">
                          <div className="text-neutral-300">
                            <strong className="text-red-400 font-mono">Pain:</strong> {ind.pain}
                          </div>
                          <div className="text-neutral-200">
                            <strong className="text-brand-green font-mono font-semibold">Solution:</strong> {ind.solution}
                          </div>
                        </div>
                      </div>

                      <Link
                        href="/industries"
                        className="pt-3 border-t border-white/[0.06] flex items-center justify-between text-xs font-mono text-brand-green hover:text-brand-lime transition-colors font-bold"
                      >
                        <span>View Vertical Blueprint</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </Link>
                    </div>
                  </Card3D>
                </ScrollReveal>
              );
            })}
          </div>

          <div className="text-center pt-2">
            <Link
              href="/industries"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-2xl text-sm font-bold text-white bg-white/[0.06] hover:bg-white/[0.12] border border-white/[0.12] transition-all backdrop-blur-md"
            >
              <span>Explore All Industry Blueprints &amp; Case Studies</span>
              <ArrowRight className="w-4 h-4 text-brand-green" />
            </Link>
          </div>
        </div>
      </section>

      {/* 6. CUSTOMER REVIEWS & FEEDBACK (INDIAN BUSINESS LEADERS & PORTFOLIOS) */}
      <TestimonialsSection />

      {/* 7. PRICING TEASER / ADVERTISEMENT SECTION */}
      <section className="relative py-20 sm:py-28 bg-[#050505] overflow-hidden border-t border-white/[0.06]">
        {/* Glow */}
        <div className="absolute top-1/2 right-1/4 w-[600px] h-[300px] glow-orb-gold opacity-15 pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-12">
          <ScrollReveal>
            <div className="text-center max-w-3xl mx-auto space-y-4">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-gold/10 border border-brand-gold/30 text-brand-gold text-xs font-mono font-bold">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Simple, Transparent Pricing</span>
              </div>

              <h2 className="text-3xl sm:text-5xl font-display font-extrabold text-white tracking-tight">
                Enterprise Power.{" "}
                <span className="text-gradient-green-gold">Accessible Pricing.</span>
              </h2>

              <p className="text-sm sm:text-base text-neutral-300">
                Replace 15+ disconnected subscriptions starting at just ₹4,999/month. Scale effortlessly with software plans, 10 professional services, and dedicated managed services.
              </p>
            </div>
          </ScrollReveal>

          {/* Pricing Preview Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 items-stretch max-w-6xl mx-auto">
            {/* Starter Plan Preview */}
            <ScrollReveal delay={0.1}>
              <div className="p-7 rounded-3xl glass-panel border border-white/[0.1] flex flex-col justify-between h-full space-y-6">
                <div className="space-y-4">
                  <div className="text-xs font-mono text-neutral-400 uppercase tracking-wider font-bold">
                    STARTER OS
                  </div>
                  <div className="space-y-1">
                    <div className="flex items-baseline gap-2">
                      <span className="text-3xl sm:text-4xl font-display font-black text-white">₹4,999</span>
                      <span className="text-xs text-neutral-400 font-mono">/ mo</span>
                    </div>
                    <div className="text-xs text-brand-green font-mono">($65 / mo in USD)</div>
                  </div>
                  <p className="text-xs text-neutral-300 leading-relaxed">
                    Ideal for solopreneurs and small teams launching core CRM, funnels, and basic automated journeys.
                  </p>

                  <ul className="space-y-2 text-xs text-neutral-300 pt-2 border-t border-white/[0.06]">
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-brand-green shrink-0" />
                      <span>Unified CRM &amp; Deal Pipelines</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-brand-green shrink-0" />
                      <span>Funnels &amp; Landing Pages</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-brand-green shrink-0" />
                      <span>WhatsApp &amp; Email Automation</span>
                    </li>
                  </ul>
                </div>

                <Link
                  href="/pricing"
                  className="w-full py-3 rounded-xl text-xs font-bold text-white bg-white/[0.06] hover:bg-white/[0.12] border border-white/[0.1] text-center transition-all block"
                >
                  View Starter Plan Details
                </Link>
              </div>
            </ScrollReveal>

            {/* Growth Plan Preview (Featured) */}
            <ScrollReveal delay={0.2}>
              <div className="p-7 rounded-3xl glass-panel border-2 border-brand-green/50 bg-gradient-to-b from-brand-green/[0.1] to-transparent flex flex-col justify-between h-full space-y-6 relative shadow-glow-green/30">
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-3.5 py-0.5 rounded-full bg-gradient-to-r from-brand-green to-brand-gold text-black text-[11px] font-mono font-bold uppercase tracking-wider">
                  ★ Most Popular
                </div>

                <div className="space-y-4 pt-1">
                  <div className="text-xs font-mono text-brand-green uppercase tracking-wider font-bold">
                    GROWTH OS
                  </div>
                  <div className="space-y-1">
                    <div className="flex items-baseline gap-2">
                      <span className="text-3xl sm:text-4xl font-display font-black text-white">₹7,999</span>
                      <span className="text-xs text-neutral-400 font-mono">/ mo</span>
                    </div>
                    <div className="text-xs text-brand-gold font-mono">($99 / mo in USD)</div>
                  </div>
                  <p className="text-xs text-neutral-200 leading-relaxed">
                    The complete AI Operating System for scaling businesses requiring advanced workflows &amp; Nova AI Co-Pilot.
                  </p>

                  <ul className="space-y-2 text-xs text-neutral-100 pt-2 border-t border-white/[0.08]">
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-brand-green shrink-0" />
                      <span>Full 4 Pillars (Marketing, Sales, Ops, Finance)</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-brand-green shrink-0" />
                      <span>Nova AI Co-Pilot &amp; Digital Workforce</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-brand-green shrink-0" />
                      <span>In-Browser Telecalling &amp; Smart IVR</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-brand-green shrink-0" />
                      <span>CEO Intelligence Dashboard</span>
                    </li>
                  </ul>
                </div>

                <Link
                  href="/pricing"
                  className="w-full py-3.5 rounded-xl text-xs font-bold text-black bg-gradient-to-r from-brand-green via-brand-lime to-brand-gold hover:opacity-95 text-center transition-all block shadow-glow-green/40 font-mono"
                >
                  Explore Growth Plan &rarr;
                </Link>
              </div>
            </ScrollReveal>

            {/* Managed Services & Enterprise Preview */}
            <ScrollReveal delay={0.3}>
              <div className="p-7 rounded-3xl glass-panel border border-brand-gold/30 bg-gradient-to-b from-brand-gold/[0.05] to-transparent flex flex-col justify-between h-full space-y-6">
                <div className="space-y-4">
                  <div className="text-xs font-mono text-brand-gold uppercase tracking-wider font-bold">
                    MANAGED SERVICES &amp; ENTERPRISE
                  </div>
                  <div className="space-y-1">
                    <div className="flex items-baseline gap-2">
                      <span className="text-3xl sm:text-4xl font-display font-black text-white">₹24,999</span>
                      <span className="text-xs text-neutral-400 font-mono">/ mo</span>
                    </div>
                    <div className="text-xs text-brand-gold font-mono">($329 / mo in USD)</div>
                  </div>
                  <p className="text-xs text-neutral-300 leading-relaxed">
                    Dedicated AI, Automation &amp; Growth Partner handling ad campaigns, creatives, workflows, and integrations.
                  </p>

                  <ul className="space-y-2 text-xs text-neutral-300 pt-2 border-t border-white/[0.06]">
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-brand-gold shrink-0" />
                      <span>Dedicated Account Strategist &amp; Tech Lead</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-brand-gold shrink-0" />
                      <span>Meta &amp; Google Ads Campaign Management</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-brand-gold shrink-0" />
                      <span>10 Available One-Time Implementation Services</span>
                    </li>
                  </ul>
                </div>

                <Link
                  href="/pricing"
                  className="w-full py-3 rounded-xl text-xs font-bold text-brand-gold bg-brand-gold/10 hover:bg-brand-gold/20 border border-brand-gold/30 text-center transition-all block"
                >
                  View Managed &amp; Professional Services
                </Link>
              </div>
            </ScrollReveal>
          </div>

          {/* Pricing Banner Link */}
          <div className="text-center pt-2">
            <Link
              href="/pricing"
              className="inline-flex items-center gap-2.5 px-8 py-4 rounded-2xl text-sm font-bold text-black bg-gradient-to-r from-brand-green via-brand-lime to-brand-gold hover:opacity-95 transition-all shadow-glow-green/40 hover:shadow-glow-gold/50"
            >
              <span>See Full Pricing Page, Comparison Matrix &amp; 10 Professional Services</span>
              <ArrowRight className="w-4 h-4 text-black" />
            </Link>
          </div>
        </div>
      </section>

      {/* 8. FOUNDER STORY & COMPANY NARRATIVE TEASER */}
      <section className="relative py-20 sm:py-28 bg-[#060606] overflow-hidden border-t border-white/[0.06]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <ScrollReveal>
            <div className="p-8 sm:p-12 rounded-3xl glass-panel border border-brand-green/30 bg-gradient-to-br from-[#091508] via-[#080808] to-[#141205]">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                {/* Left: Founder Photo */}
                <div className="lg:col-span-5 space-y-3">
                  <div className="relative aspect-[4/3] rounded-2xl overflow-hidden glass-panel border border-brand-green/30">
                    <Image
                      src="/images/founder-desk.jpg"
                      alt="Debasish Kabi, Founder & CEO of Automataiz"
                      fill
                      className="object-cover object-top"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />
                    <div className="absolute bottom-3 left-4 right-4">
                      <div className="text-white font-display font-bold text-base">
                        Debasish Kabi
                      </div>
                      <div className="text-brand-green text-xs font-mono">
                        Founder &amp; CEO, Automataiz
                      </div>
                      <div className="text-neutral-400 text-[11px] flex items-center gap-1 mt-0.5">
                        <MapPin className="w-3 h-3 text-brand-gold" />
                        <span>Bhubaneswar, Odisha, India</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Right: Narrative Teaser */}
                <div className="lg:col-span-7 space-y-5">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-green/15 text-brand-green text-xs font-mono font-bold">
                    ORIGIN &amp; PHILOSOPHY
                  </div>

                  <h3 className="text-2xl sm:text-3xl font-display font-bold text-white leading-tight">
                    &quot;Companies Are Built by Products.{" "}
                    <span className="text-gradient-green-gold">Empires Are Built by Philosophies.&quot;</span>
                  </h3>

                  <p className="text-xs sm:text-sm text-neutral-300 leading-relaxed">
                    Born in Bandhamundi, a small village in Odisha, Debasish Kabi experienced firsthand how small businesses struggle with fragmented software. After engineering, government service, and 7+ years managing performance advertising across Southeast Asia, he founded Automataiz on January 1, 2025, to build a unified AI Business Operating System.
                  </p>

                  <div className="pt-2 flex flex-col sm:flex-row items-start sm:items-center gap-4">
                    <Link
                      href="/company"
                      className="px-6 py-3 rounded-xl text-xs font-bold text-black bg-gradient-to-r from-brand-green to-brand-gold hover:opacity-95 transition-all shadow-glow-green/30 flex items-center gap-2"
                    >
                      <span>Read Founder Story &amp; 2040 Vision</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Link>

                    <span className="text-xs font-mono text-neutral-400">
                      Headquarters: Bhubaneswar, Odisha
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* 9. FINAL CALL TO ACTION */}
      <section className="relative py-20 sm:py-24 bg-[#050505] overflow-hidden border-t border-white/[0.06]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <ScrollReveal>
            <div className="p-8 sm:p-12 rounded-3xl glass-panel border border-brand-green/40 bg-gradient-to-r from-[#0b1a0a] via-[#080808] to-[#171406] space-y-6 shadow-glow-green/20">
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-brand-green/20 text-brand-green text-xs font-mono font-bold">
                TRANSFORM YOUR BUSINESS
              </div>

              <h2 className="text-3xl sm:text-5xl font-display font-extrabold text-white tracking-tight">
                Ready to Experience the{" "}
                <span className="text-gradient-green-gold">Automataiz Revolution?</span>
              </h2>

              <p className="text-sm sm:text-base text-neutral-300 max-w-xl mx-auto leading-relaxed">
                Join ambitious Indian founders and business leaders replacing software chaos with predictable, automated revenue today.
              </p>

              <div className="pt-3 flex flex-col sm:flex-row justify-center items-center gap-4">
                <Link
                  href="/simulator"
                  className="w-full sm:w-auto px-8 py-4 rounded-2xl text-sm font-bold text-black bg-gradient-to-r from-brand-green via-brand-lime to-brand-gold hover:opacity-95 transition-all shadow-glow-green/50 flex items-center justify-center gap-2"
                >
                  <Sparkles className="w-4 h-4 text-black" />
                  <span>Launch Growth Simulator™</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>

                <Link
                  href="/contact"
                  className="w-full sm:w-auto px-7 py-4 rounded-2xl text-sm font-semibold text-white bg-white/[0.06] hover:bg-white/[0.12] border border-white/[0.12] transition-all flex items-center justify-center gap-2"
                >
                  <Play className="w-4 h-4 text-brand-green fill-brand-green" />
                  <span>Book Strategy Tour</span>
                </Link>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
}
