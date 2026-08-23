"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  Sparkles,
  ArrowRight,
  CheckCircle2,
  Dumbbell,
  GraduationCap,
  Building2,
  School,
  ShieldCheck,
  Briefcase,
  Store,
  TrendingUp,
  Clock,
  Zap,
} from "lucide-react";

interface IndustryDetail {
  id: string;
  name: string;
  tagline: string;
  icon: any;
  painPoints: string[];
  osModules: string[];
  workflow: string[];
  roiMetrics: { label: string; value: string }[];
  caseStudy: {
    client: string;
    result: string;
    quote: string;
  };
}

const INDUSTRIES_DATA: IndustryDetail[] = [
  {
    id: "fitness",
    name: "Health & Fitness",
    tagline: "The Operating System for Gyms, Yoga Studios & Wellness Centers",
    icon: Dumbbell,
    painPoints: [
      "High member churn after first 60 days without proactive check-ins",
      "Trial class booking requests lost in WhatsApp chats or missed calls",
      "Trainer schedules and client attendance tracked manually on clipboards",
      "Payment renewals requiring awkward manual reminder phone calls",
    ],
    osModules: [
      "Automated WhatsApp Trial Booking & Confirmation Engine",
      "Trainer Class Scheduling & Member Attendance Tracking",
      "AI Check-in Assistant (Flags inactive members after 5 days missed)",
      "Automated Recurring Subscription Billing & UPI Autopay",
    ],
    workflow: [
      "Instagram / Meta Ad Click → Instant WhatsApp Quiz",
      "Trial Slot Scheduled & Trainer Auto-Assigned",
      "Automated Day-Before & 1-Hour WhatsApp Reminders (88% Show-Up)",
      "Trial Completed → Instant Membership Offer & UPI Link",
      "Continuous Automated Retention Nurture & Workout Milestones",
    ],
    roiMetrics: [
      { label: "Trial Show-Up Rate", value: "88% (+35%)" },
      { label: "Member Churn Reduction", value: "42% Lower" },
      { label: "Admin Hours Saved", value: "24 hrs / wk" },
      { label: "Monthly Revenue Lift", value: "+38%" },
    ],
    caseStudy: {
      client: "IronFit Premium Gym Chain",
      result: "+₹4.2 Lakh Monthly Added Revenue",
      quote: "Automataiz automated 100% of our trial bookings and renewal reminders. Our front desk staff now focuses entirely on members.",
    },
  },
  {
    id: "coaches",
    name: "Trainers & Coaches",
    tagline: "The All-in-One Engine for High-Ticket Coaches, Creators & Mentors",
    icon: GraduationCap,
    painPoints: [
      "Paying for 8+ separate tools: Teachable, ClickFunnels, Calendly, Wati, Mailchimp",
      "High drop-off between webinar attendees and paid strategy discovery calls",
      "Manual 1-on-1 WhatsApp follow-ups that exhaust the creator",
      "Fragmented community engagement on disconnected social platforms",
    ],
    osModules: [
      "Integrated Course LMS & Digital Asset Hosting",
      "Webinar & Masterclass Live Registration Funnels",
      "AI SDR Discovery Call Qualifier & Calendar Sync",
      "Community Discussion Hub & Member Leaderboards",
    ],
    workflow: [
      "Lead Downloads Free Masterclass / Guide → Added to CRM",
      "Automated 5-Day Value Sequence via WhatsApp & Email",
      "AI Lead Scoring Identifies High-Ticket Prospects (>85 Score)",
      "1-Click Strategy Call Booked on Coach's Calendar",
      "Closed Client Enrolled in Private LMS Tier Automatically",
    ],
    roiMetrics: [
      { label: "Webinar-to-Call Rate", value: "28% (2.5x)" },
      { label: "Software Tool Cost Saved", value: "₹25,000 / mo" },
      { label: "Coach Time Reclaimed", value: "32 hrs / wk" },
      { label: "Client Course Completion", value: "74% (vs 22% avg)" },
    ],
    caseStudy: {
      client: "Apex Executive Leadership Academy",
      result: "Scaled to ₹18 Lakh/mo with 0 Extra Staff",
      quote: "We cancelled ClickFunnels, Teachable, and Kajabi. Automataiz gave us a unified course and community system that runs itself.",
    },
  },
  {
    id: "realestate",
    name: "Real Estate Developers & Brokers",
    tagline: "The High-Velocity Pipeline OS for Property Sales & Channel Partners",
    icon: Building2,
    painPoints: [
      "Spending Lakhs on Facebook & 99acres ads but 60% leads go cold",
      "Brokers failing to follow up with high-net-worth buyers within 5 minutes",
      "Site visits scheduled but buyers no-show without automated reminders",
      "Zero transparency into which channel partner is closing deals",
    ],
    osModules: [
      "Instant 60-Second Lead Engagement Engine (WhatsApp + Smart IVR)",
      "Property Pipeline Deal Tracking (New Inquiry → Qualified → Site Visit → Token → Registered)",
      "Automated Site Visit Confirmation & Location Routing",
      "Channel Partner Reseller Portal & Commission Ledger",
    ],
    workflow: [
      "High-Intent Buyer Submits Form for 3BHK Luxury Project",
      "AI SDR Calls Buyer in <90 Seconds to Qualify Budget & Timeline",
      "Automated WhatsApp Brochure & Interactive Video Tour Sent",
      "Site Visit Scheduled with Broker Calendar & Automated Navigation Link",
      "Live Deal Status Synced to CEO Dashboard with Commission Split",
    ],
    roiMetrics: [
      { label: "Lead Response Time", value: "<90 Seconds" },
      { label: "Site Visit Conversion", value: "3.4x Higher" },
      { label: "Cost Per Site Visit", value: "-48% Lower" },
      { label: "Broker Follow-Up SLA", value: "99.2% On-Time" },
    ],
    caseStudy: {
      client: "Vanguard Luxury Properties",
      result: "₹14.8 Crore In Closed Inventory in 90 Days",
      quote: "The speed-to-lead with Automataiz is astonishing. Contacting buyers within 2 minutes quadrupled our weekend site visits.",
    },
  },
  {
    id: "schools",
    name: "Schools & Educational Institutes",
    tagline: "The Complete Admission & Student Lifecycle Management System",
    icon: School,
    painPoints: [
      "Admission inquiries recorded on paper registers and lost during peak season",
      "Parents receiving conflicting information from different admission counselors",
      "Fee installment reminders requiring hundreds of manual phone calls",
      "Poor parent engagement after enrollment",
    ],
    osModules: [
      "Centralized Admission CRM & Inquiry Tracker",
      "Counselor In-Browser Telecalling & Call Recording",
      "Automated Parent WhatsApp Broadcasts & Fee Reminders",
      "Digital Student & Parent Portal with Attendance Tracking",
    ],
    workflow: [
      "Parent Submits Admission Inquiry on Website / Social Ad",
      "Auto-Assigned to Admission Counselor with Instant WhatsApp Brochure",
      "Campus Visit & Entrance Test Booked on Calendar",
      "Admission Letter & Fee Payment Link Sent Automatically",
      "Enrolled Student Synced to Academic Portal & Attendance System",
    ],
    roiMetrics: [
      { label: "Admission Conversion", value: "+52% Growth" },
      { label: "Fee Collection Velocity", value: "94% On-Time" },
      { label: "Inquiry Follow-up Rate", value: "100% Tracked" },
      { label: "Counselor Productivity", value: "3.8x Calls/Day" },
    ],
    caseStudy: {
      client: "Heritage Global Institute",
      result: "1,200+ New Student Admissions Enrolled",
      quote: "Automataiz gave our management complete visibility into our counselors' daily calls and increased our admission rate by 52%.",
    },
  },
  {
    id: "insurance",
    name: "Insurance & Financial Advisors",
    tagline: "The Trust & Lifetime Client Relationship Operating System",
    icon: ShieldCheck,
    painPoints: [
      "Losing policy renewals because renewal dates are tracked in spreadsheets",
      "Clients forgetting scheduled wealth advisory consultations",
      "Difficulty staying top-of-mind with past clients for cross-selling",
      "Complex compliance documentation and proposal tracking",
    ],
    osModules: [
      "Automated Policy Renewal Reminder Sequences (60, 30, 7 Days Prior)",
      "Client Portfolio Memory & Custom Attribute Tracking",
      "Financial Need Analysis Funnels & Quote Calculators",
      "Secure Document Vault for Policies and Tax Statements",
    ],
    workflow: [
      "Prospect Uses Free Retirement / Term Insurance Calculator",
      "Lead Scored & Consultation Booked with Advisor",
      "Automated WhatsApp Portfolio Review Sent Before Call",
      "Policy Issued & Stored in Client's Private Document Vault",
      "Annual Automated Policy Review & Family Cross-Sell Triggers",
    ],
    roiMetrics: [
      { label: "Policy Renewal Retention", value: "96.4%" },
      { label: "Advisory Show-Up Rate", value: "91%" },
      { label: "Cross-Sell Revenue", value: "+44%" },
      { label: "LTV Per Client", value: "3.2x Increase" },
    ],
    caseStudy: {
      client: "Fortress Wealth & Insurance Group",
      result: "96% Annual Renewal Retention Achieved",
      quote: "Automated renewal journeys alone recovered over ₹12 Lakhs in commissions that used to lapse every year.",
    },
  },
  {
    id: "msme",
    name: "Agencies, Consultants & MSMEs",
    tagline: "The Scalable Operating Layer for Client Service & Growth Businesses",
    icon: Briefcase,
    painPoints: [
      "Founder spending 60% of their day on manual coordination instead of sales",
      "Inconsistent client acquisition depending solely on word-of-mouth",
      "Delayed client invoice approvals and uncollected receivables",
      "No clear visibility into department performance or project SLAs",
    ],
    osModules: [
      "Vibe Outbound B2B Prospecting & Decision-Maker Discovery",
      "Client Project Milestones & Multi-Stage Approval Workflows",
      "Automated Retainer Invoicing & Recurring GST Billing",
      "CEO Command Cockpit for 5-Minute Complete Business Clarity",
    ],
    workflow: [
      "Vibe Prospecting Identifies High-Value Enterprise Decision Makers",
      "Custom Outreach Sequence Sent via Email & LinkedIn",
      "Discovery Call Scheduled & Automated Strategy Deck Generated",
      "Contract Signed & Retainer Invoiced via Razorpay/Stripe",
      "Project Tasks Auto-Assigned to Team with SLA Deadline Tracking",
    ],
    roiMetrics: [
      { label: "Client Retainer Retention", value: "+38%" },
      { label: "Founder Time Saved", value: "30 hrs / wk" },
      { label: "Invoice Pay Time", value: "2.4 Days (vs 18 days)" },
      { label: "Gross Profit Margin", value: "82% Margin" },
    ],
    caseStudy: {
      client: "ScaleUp Digital Growth Consultancy",
      result: "4.5x Revenue Growth in 12 Months",
      quote: "Automataiz is the backbone of our agency. We manage lead generation, client projects, team tasks, and billing without any other software.",
    },
  },
];

export default function IndustriesPage() {
  const [selectedIndustry, setSelectedIndustry] = useState<IndustryDetail>(
    INDUSTRIES_DATA[0]
  );

  return (
    <div className="pt-28 pb-20 space-y-24">
      {/* Top Banner */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-green/10 border border-brand-green/30 text-brand-green text-xs font-mono mb-4">
          <Building2 className="w-3.5 h-3.5" />
          <span>Industry Solutions Blueprint</span>
        </div>

        <h1 className="text-4xl sm:text-6xl font-display font-extrabold text-white tracking-tight max-w-4xl mx-auto leading-tight">
          Tailored Operating Systems for{" "}
          <span className="text-gradient-green-gold">Your Specific Vertical.</span>
        </h1>
        <p className="mt-4 text-base sm:text-lg text-neutral-300 max-w-2xl mx-auto">
          We don&apos;t believe in one-size-fits-all generic software. Automataiz combines our core platform with industry-specific workflows, funnels, and trained AI agents.
        </p>

        {/* Industry Pill Selector */}
        <div className="mt-10 flex items-center justify-center gap-2.5 overflow-x-auto pb-2 scrollbar-none">
          {INDUSTRIES_DATA.map((ind) => {
            const isSelected = selectedIndustry.id === ind.id;
            const Icon = ind.icon;
            return (
              <button
                key={ind.id}
                onClick={() => setSelectedIndustry(ind)}
                className={`px-4 py-2 rounded-2xl text-xs font-mono font-semibold transition-all flex items-center gap-2 shrink-0 ${
                  isSelected
                    ? "bg-gradient-to-r from-brand-green to-brand-gold text-black shadow-glow-green/40 font-bold"
                    : "bg-white/[0.04] text-neutral-400 hover:text-white border border-white/[0.08]"
                }`}
              >
                <Icon className="w-3.5 h-3.5" />
                <span>{ind.name}</span>
              </button>
            );
          })}
        </div>
      </section>

      {/* Selected Industry Full Showcase */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="p-8 sm:p-12 rounded-3xl glass-panel border border-brand-green/30 bg-gradient-to-br from-[#091508] via-[#080808] to-[#141205] space-y-12 animate-in fade-in duration-300">
          {/* Header info */}
          <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6 border-b border-white/[0.08] pb-8">
            <div>
              <div className="flex items-center gap-3 mb-2">
                <div className="w-12 h-12 rounded-2xl bg-brand-green/20 border border-brand-green/40 flex items-center justify-center text-brand-green">
                  <selectedIndustry.icon className="w-6 h-6" />
                </div>
                <div>
                  <h2 className="text-3xl font-display font-bold text-white">
                    {selectedIndustry.name} Operating System
                  </h2>
                  <p className="text-xs sm:text-sm text-neutral-400 font-mono">
                    {selectedIndustry.tagline}
                  </p>
                </div>
              </div>
            </div>

            <Link
              href="/simulator"
              className="px-6 py-3 rounded-xl text-xs font-bold text-black bg-gradient-to-r from-brand-green to-brand-gold hover:opacity-95 shadow-glow-green/30 shrink-0 flex items-center gap-2"
            >
              <Sparkles className="w-4 h-4" />
              <span>Simulate {selectedIndustry.name} ROI</span>
            </Link>
          </div>

          {/* 4 ROI Metrics Grid */}
          <div>
            <h3 className="text-xs font-mono uppercase tracking-widest text-brand-gold font-semibold mb-4">
              Measurable Business Transformation
            </h3>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              {selectedIndustry.roiMetrics.map((metric, idx) => (
                <div
                  key={idx}
                  className="p-4 rounded-2xl bg-white/[0.02] border border-white/[0.06] text-center"
                >
                  <div className="text-xs text-neutral-400">{metric.label}</div>
                  <div className="font-mono font-bold text-2xl text-brand-green mt-1">
                    {metric.value}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Pain Points vs Solutions Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Left: Traditional Pain Points */}
            <div className="p-6 rounded-2xl bg-red-950/15 border border-red-500/20 space-y-4">
              <h3 className="text-sm font-mono font-bold text-red-400 uppercase tracking-wider">
                Current Industry Bottlenecks &amp; Revenue Leaks
              </h3>
              <ul className="space-y-3 text-xs text-neutral-300">
                {selectedIndustry.painPoints.map((pain, idx) => (
                  <li key={idx} className="flex items-start gap-2.5">
                    <span className="text-red-400 font-bold shrink-0">✕</span>
                    <span>{pain}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Right: Automataiz Solution Modules */}
            <div className="p-6 rounded-2xl bg-brand-green/10 border border-brand-green/30 space-y-4 shadow-glow-green/20">
              <h3 className="text-sm font-mono font-bold text-brand-green uppercase tracking-wider">
                Automataiz Dedicated Vertical Capabilities
              </h3>
              <ul className="space-y-3 text-xs text-neutral-200">
                {selectedIndustry.osModules.map((mod, idx) => (
                  <li key={idx} className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-brand-green shrink-0 mt-0.5" />
                    <span>{mod}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Step-by-Step Vertical Workflow */}
          <div className="space-y-4">
            <h3 className="text-xs font-mono uppercase tracking-widest text-brand-lime font-semibold">
              End-to-End Autonomous Workflow Sequence
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-5 gap-3">
              {selectedIndustry.workflow.map((step, idx) => (
                <div
                  key={idx}
                  className="p-4 rounded-2xl bg-white/[0.02] border border-white/[0.06] text-xs text-neutral-300 space-y-2 relative"
                >
                  <div className="font-mono text-brand-gold font-bold">Step 0{idx + 1}</div>
                  <p className="text-[11px] text-neutral-300 leading-relaxed">{step}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Verified Case Study Quote */}
          <div className="p-6 rounded-2xl bg-black/60 border border-brand-gold/30 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div>
              <div className="text-xs font-mono text-brand-gold font-bold">
                VERIFIED CASE STUDY // {selectedIndustry.caseStudy.client}
              </div>
              <p className="text-sm text-white font-medium italic mt-1">
                &quot;{selectedIndustry.caseStudy.quote}&quot;
              </p>
            </div>
            <div className="px-4 py-2 rounded-xl bg-brand-green/20 border border-brand-green/40 text-brand-green font-mono text-xs font-bold shrink-0">
              {selectedIndustry.caseStudy.result}
            </div>
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="p-8 sm:p-12 rounded-3xl glass-panel border border-brand-green/30 bg-gradient-to-r from-black via-[#0a1808] to-black">
          <h2 className="text-3xl sm:text-4xl font-display font-bold text-white">
            Transform Your Vertical Today
          </h2>
          <p className="mt-3 text-sm text-neutral-400 max-w-xl mx-auto">
            Get your industry-tailored blueprint and see how Automataiz empowers your business to operate like an enterprise.
          </p>
          <div className="mt-6 flex flex-col sm:flex-row justify-center gap-4">
            <Link
              href="/simulator"
              className="px-8 py-3.5 rounded-xl text-xs font-bold text-black bg-gradient-to-r from-brand-green to-brand-gold hover:opacity-95 shadow-glow-green/40"
            >
              Run {selectedIndustry.name} Simulator
            </Link>
            <Link
              href="/contact"
              className="px-8 py-3.5 rounded-xl text-xs font-semibold text-white bg-white/[0.08] hover:bg-white/[0.14] border border-white/[0.12]"
            >
              Book Vertical Consultation
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
