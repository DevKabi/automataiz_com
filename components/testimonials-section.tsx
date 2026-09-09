"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  Star,
  Quote,
  CheckCircle2,
  Building2,
  TrendingUp,
  Sparkles,
  MapPin,
  ShieldCheck,
  Award,
  ArrowRight,
  Briefcase,
  GraduationCap,
  Dumbbell,
} from "lucide-react";
import Card3D from "@/components/card-3d";
import ScrollReveal from "@/components/scroll-reveal";

interface Testimonial {
  id: string;
  name: string;
  role: string;
  company: string;
  city: string;
  portfolio: string;
  industry: string;
  rating: number;
  avatarColor: string;
  initials: string;
  quote: string;
  highlightMetric: string;
  metricLabel: string;
  verifiedPlan: string;
}

const TESTIMONIALS: Testimonial[] = [
  {
    id: "rajesh-singhania",
    name: "Rajesh Singhania",
    role: "Managing Director",
    company: "Singhania Realcon & Infra",
    city: "Mumbai, Maharashtra",
    portfolio: "Luxury Residential & Commercial Developments (₹45 Cr+ Active Projects)",
    industry: "Real Estate & Infrastructure",
    rating: 5,
    avatarColor: "from-amber-500 to-amber-700",
    initials: "RS",
    quote:
      "Automataiz completely revolutionized our sales velocity. The AI SDR contacts new inquiries within 45 seconds of seeing our Meta & Google ads. We converted ₹3.2 Crore in luxury inventory within just 60 days of deployment. Zero broker lead leaks.",
    highlightMetric: "₹3.2 Cr",
    metricLabel: "Inventory Closed in 60 Days",
    verifiedPlan: "Enterprise OS Client",
  },
  {
    id: "priya-sundaram",
    name: "Priya Sundaram",
    role: "Founder & Chief Mentor",
    company: "Elevate Leadership Academy",
    city: "Bengaluru, Karnataka",
    portfolio: "Executive EdTech & High-Ticket Coaching (50,000+ Alumni across India)",
    industry: "EdTech & Executive Coaching",
    rating: 5,
    avatarColor: "from-emerald-500 to-teal-700",
    initials: "PS",
    quote:
      "We cancelled 6 separate SaaS subscriptions (Kajabi, Calendly, Zapier, Mailchimp, Wati, Teachable), immediately saving ₹35,000 every month. Our webinar-to-consultation conversion rate doubled because the WhatsApp and email nurture journeys are fully automated.",
    highlightMetric: "₹35,000/mo",
    metricLabel: "Saved on Disconnected SaaS",
    verifiedPlan: "Growth OS Client",
  },
  {
    id: "vikramaditya-patnaik",
    name: "Vikramaditya Patnaik",
    role: "Director of Operations",
    company: "Patnaik Logistics & Supply Chain",
    city: "Bhubaneswar & Kolkata",
    portfolio: "B2B Freight, Fleet Operations & MSME Warehousing (₹28 Cr Annual Turnover)",
    industry: "Logistics & Supply Chain",
    rating: 5,
    avatarColor: "from-blue-600 to-indigo-800",
    initials: "VP",
    quote:
      "As a scaling logistics business, manual dispatch tracking and delayed client invoice approvals were our biggest bottlenecks. Automataiz reduced our invoice payment cycle from 22 days to 3 days, and team task accountability is 100% visible on the CEO dashboard.",
    highlightMetric: "22d → 3d",
    metricLabel: "Invoice Payment Velocity",
    verifiedPlan: "Enterprise OS Client",
  },
  {
    id: "ananya-deshmukh",
    name: "Ananya Deshmukh",
    role: "Co-Founder & CEO",
    company: "Aura Health & Fitness Clubs",
    city: "Pune, Maharashtra",
    portfolio: "Multi-Location Premium Fitness Centers (14 Branches, 8,500+ Active Members)",
    industry: "Health, Fitness & Wellness",
    rating: 5,
    avatarColor: "from-lime-500 to-emerald-700",
    initials: "AD",
    quote:
      "Managing membership renewals and trial class bookings across 14 branches used to require 4 full-time front desk coordinators. Automataiz automated 100% of our WhatsApp trial bookings and renewal journeys. Trial show-up rate jumped from 52% to 89%.",
    highlightMetric: "89%",
    metricLabel: "Trial Class Show-up Rate",
    verifiedPlan: "Growth OS Client",
  },
  {
    id: "rohan-mehra",
    name: "Rohan Mehra",
    role: "Founder & Growth Partner",
    company: "Apex Media Growth Group",
    city: "Gurugram, Delhi NCR",
    portfolio: "Full-Funnel Performance Marketing & Creative Studio (60+ Retainer Clients)",
    industry: "Digital Agency & Marketing",
    rating: 5,
    avatarColor: "from-purple-600 to-violet-800",
    initials: "RM",
    quote:
      "Automataiz is the operating system we always dreamed of. Our account managers reclaimed 25+ hours each week by replacing manual client updates, task chasing, and disconnected tools. Our agency gross profit margin expanded from 58% to 82%.",
    highlightMetric: "25 hrs/wk",
    metricLabel: "Saved Per Account Manager",
    verifiedPlan: "Growth OS + Managed Services",
  },
  {
    id: "karthik-venkatraman",
    name: "Karthik Venkatraman",
    role: "Founder & Chief Advisor",
    company: "FinShield Wealth & Advisory",
    city: "Hyderabad & Chennai",
    portfolio: "Private Wealth Management & Corporate Insurance (₹120 Cr Portfolio Under Advisory)",
    industry: "BFSI & Wealth Management",
    rating: 5,
    avatarColor: "from-yellow-600 to-amber-800",
    initials: "KV",
    quote:
      "Automated policy renewal journeys recovered over ₹18 Lakhs in commissions that previously lapsed unnoticed in Excel sheets. The client document vault and 1-click consultation scheduler have elevated our client trust to an executive level.",
    highlightMetric: "₹18 Lakhs",
    metricLabel: "Recovered Annual Commissions",
    verifiedPlan: "Growth OS Client",
  },
];

export default function TestimonialsSection() {
  const [activeFilter, setActiveFilter] = useState<string>("all");

  const categories = [
    { id: "all", label: "All Business Leaders" },
    { id: "realestate", label: "Real Estate & Infra" },
    { id: "edtech", label: "EdTech & Coaching" },
    { id: "msme", label: "MSME & Logistics" },
    { id: "fitness", label: "Health & Fitness" },
    { id: "agency", label: "Agencies & BFSI" },
  ];

  const filteredTestimonials = TESTIMONIALS.filter((t) => {
    if (activeFilter === "all") return true;
    if (activeFilter === "realestate") return t.industry.includes("Real Estate");
    if (activeFilter === "edtech") return t.industry.includes("EdTech");
    if (activeFilter === "msme") return t.industry.includes("Logistics");
    if (activeFilter === "fitness") return t.industry.includes("Fitness");
    if (activeFilter === "agency") return t.industry.includes("Agency") || t.industry.includes("BFSI");
    return true;
  });

  return (
    <section className="relative py-20 sm:py-28 bg-[#060606] overflow-hidden border-t border-white/[0.06]">
      {/* Ambient Glows */}
      <div className="absolute top-1/2 left-0 w-[500px] h-[500px] glow-orb-green opacity-10 pointer-events-none -translate-y-1/2" />
      <div className="absolute top-1/3 right-0 w-[500px] h-[500px] glow-orb-gold opacity-10 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-12">
        {/* Header */}
        <ScrollReveal>
          <div className="text-center max-w-3xl mx-auto space-y-4">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-green/10 border border-brand-green/30 text-brand-green text-xs font-mono font-bold">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Customer Stories &amp; Verified Reviews</span>
            </div>

            <h2 className="text-3xl sm:text-5xl font-display font-extrabold text-white tracking-tight leading-tight">
              Trusted by Ambitious{" "}
              <span className="text-gradient-green-gold">Indian Business Leaders</span>
            </h2>

            <p className="text-sm sm:text-lg text-neutral-300">
              See how visionary founders, directors, and enterprise executives across India replaced software chaos with predictable, automated revenue.
            </p>

            {/* Trust Stats Bar */}
            <div className="pt-4 flex flex-wrap items-center justify-center gap-6 text-xs sm:text-sm font-mono text-neutral-300">
              <div className="flex items-center gap-2">
                <div className="flex text-amber-400">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                  ))}
                </div>
                <span className="font-bold text-white">4.96 / 5.0</span>
                <span className="text-neutral-500">(150+ Reviews)</span>
              </div>
              <div className="hidden sm:inline text-neutral-600">•</div>
              <div className="flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-brand-green" />
                <span className="font-bold text-white">₹45+ Cr</span>
                <span>Revenue Managed</span>
              </div>
              <div className="hidden sm:inline text-neutral-600">•</div>
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-brand-gold" />
                <span className="font-bold text-white">99.9%</span>
                <span>Uptime SLA</span>
              </div>
            </div>
          </div>
        </ScrollReveal>

        {/* Filter Tabs */}
        <div className="flex items-center justify-start sm:justify-center gap-2 overflow-x-auto pb-2 touch-scroll scrollbar-none">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveFilter(cat.id)}
              className={`px-4 py-2 rounded-xl text-xs font-mono font-semibold transition-all shrink-0 ${
                activeFilter === cat.id
                  ? "bg-gradient-to-r from-brand-green to-brand-gold text-black shadow-glow-green/30 font-bold"
                  : "bg-white/[0.04] text-neutral-400 hover:text-white border border-white/[0.08]"
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Testimonial Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 items-stretch">
          {filteredTestimonials.map((t, index) => (
            <ScrollReveal key={t.id} delay={index * 0.08}>
              <Card3D glowColor="green" className="h-full">
                <div className="p-6 sm:p-7 rounded-3xl glass-panel border border-white/[0.1] hover:border-brand-green/40 transition-all flex flex-col justify-between h-full bg-gradient-to-b from-white/[0.03] to-transparent space-y-6">
                  {/* Top: Star rating & Verified badge */}
                  <div className="space-y-4">
                    <div className="flex items-center justify-between gap-2 border-b border-white/[0.06] pb-3">
                      <div className="flex text-amber-400 gap-0.5">
                        {[...Array(t.rating)].map((_, i) => (
                          <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                        ))}
                      </div>
                      <span className="text-[11px] font-mono px-2.5 py-0.5 rounded-full bg-brand-green/15 text-brand-green border border-brand-green/30 font-bold flex items-center gap-1">
                        <CheckCircle2 className="w-3 h-3" />
                        <span>{t.verifiedPlan}</span>
                      </span>
                    </div>

                    {/* Highlight Metric Callout Box */}
                    <div className="p-3 rounded-2xl bg-black/50 border border-brand-gold/30 flex items-center justify-between gap-3">
                      <div>
                        <div className="text-[11px] font-mono text-neutral-400 uppercase tracking-wider">
                          {t.metricLabel}
                        </div>
                        <div className="font-mono font-extrabold text-xl text-brand-gold">
                          {t.highlightMetric}
                        </div>
                      </div>
                      <div className="w-8 h-8 rounded-xl bg-brand-gold/15 text-brand-gold flex items-center justify-center shrink-0">
                        <TrendingUp className="w-4 h-4" />
                      </div>
                    </div>

                    {/* Quote Text */}
                    <div className="relative">
                      <Quote className="w-7 h-7 text-white/10 absolute -top-2 -left-1 pointer-events-none" />
                      <p className="text-xs sm:text-sm text-neutral-200 leading-relaxed pl-4 italic">
                        &quot;{t.quote}&quot;
                      </p>
                    </div>
                  </div>

                  {/* Bottom: Client Profile & Portfolio Info */}
                  <div className="pt-4 border-t border-white/[0.08] space-y-3">
                    <div className="flex items-center gap-3">
                      {/* Monogram Avatar */}
                      <div
                        className={`w-11 h-11 rounded-2xl bg-gradient-to-br ${t.avatarColor} text-white font-display font-extrabold text-sm flex items-center justify-center shrink-0 shadow-lg border border-white/20`}
                      >
                        {t.initials}
                      </div>

                      <div className="min-w-0 flex-1">
                        <div className="font-display font-bold text-white text-sm truncate">
                          {t.name}
                        </div>
                        <div className="text-xs text-brand-green font-medium truncate">
                          {t.role}, {t.company}
                        </div>
                        <div className="text-[11px] text-neutral-400 flex items-center gap-1 mt-0.5 truncate">
                          <MapPin className="w-3 h-3 text-neutral-500 shrink-0" />
                          <span>{t.city}</span>
                        </div>
                      </div>
                    </div>

                    {/* Client Portfolio Line */}
                    <div className="p-2.5 rounded-xl bg-white/[0.02] border border-white/[0.05] text-[11px] text-neutral-300 font-mono">
                      <strong className="text-neutral-400 font-semibold">Portfolio:</strong> {t.portfolio}
                    </div>
                  </div>
                </div>
              </Card3D>
            </ScrollReveal>
          ))}
        </div>

        {/* Bottom CTA within reviews */}
        <ScrollReveal>
          <div className="p-6 sm:p-8 rounded-3xl glass-panel border border-brand-green/30 bg-gradient-to-r from-[#0b170a] via-[#080808] to-[#171406] flex flex-col sm:flex-row items-center justify-between gap-6">
            <div className="space-y-1 text-center sm:text-left">
              <h3 className="text-xl sm:text-2xl font-display font-bold text-white">
                Ready to Join India&apos;s Fastest-Growing Automated Businesses?
              </h3>
              <p className="text-xs sm:text-sm text-neutral-300">
                Book a personalized strategy walkthrough and calculate your growth potential in 15 minutes.
              </p>
            </div>

            <div className="flex items-center gap-3 shrink-0">
              <Link
                href="/simulator"
                className="px-6 py-3 rounded-xl text-xs font-bold text-black bg-gradient-to-r from-brand-green to-brand-gold hover:opacity-95 transition-all shadow-glow-green/30 flex items-center gap-2"
              >
                <span>Calculate My ROI</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
              <Link
                href="/contact"
                className="px-5 py-3 rounded-xl text-xs font-semibold text-white bg-white/[0.06] hover:bg-white/[0.12] border border-white/[0.12] transition-all"
              >
                Book Demo
              </Link>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
