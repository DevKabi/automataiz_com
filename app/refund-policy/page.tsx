"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import {
  RotateCcw,
  CreditCard,
  CheckCircle2,
  AlertTriangle,
  Clock,
  ShieldCheck,
  Building2,
  FileText,
  Mail,
  Phone,
  MapPin,
  ChevronRight,
  HelpCircle,
  Sparkles,
  DollarSign,
  Receipt,
  Layers,
  ArrowRight,
} from "lucide-react";

interface PolicySection {
  id: string;
  title: string;
  badge: string;
  icon: any;
  summary: string;
  content: React.ReactNode;
}

export default function RefundCancellationPolicyPage() {
  const [activeSection, setActiveSection] = useState("overview");
  const [scrollProgress, setScrollProgress] = useState(0);

  const sections: PolicySection[] = [
    {
      id: "overview",
      title: "1. Overview & Subscription Model",
      badge: "Transparency",
      icon: ShieldCheck,
      summary: "Foundational principles governing our digital SaaS subscription billing and transparency.",
      content: (
        <div className="space-y-4 text-xs sm:text-sm text-neutral-300 leading-relaxed">
          <p>
            At <strong>Automataiz Technologies</strong>, we are committed to providing an enterprise-grade AI Business Operating System with completely transparent billing, clear contract terms, and frictionless account administration.
          </p>
          <p>
            Automataiz is delivered as a cloud-hosted Software-as-a-Service (SaaS) platform. Because our platform provisions immediate computational resources, unified CRM storage, multi-channel messaging infrastructure (WhatsApp WABA, SMS, IVR), and AI processing capacity upon subscription activation, this Refund &amp; Cancellation Policy outlines the exact rules and timelines governing subscription modifications, cancellations, and refund eligibility.
          </p>
        </div>
      ),
    },
    {
      id: "subscription-plans",
      title: "2. Subscription Plans, GST & Billing Cycles",
      badge: "Billing Framework",
      icon: CreditCard,
      summary: "Monthly, annual, and custom enterprise tiers, automated recurring cycles, and GST tax invoicing.",
      content: (
        <div className="space-y-4 text-xs sm:text-sm text-neutral-300 leading-relaxed">
          <p>
            Automataiz offers subscription tiers billed on either a recurring monthly or annual basis:
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-xs pt-1">
            <div className="p-4 rounded-2xl bg-white/[0.02] border border-white/[0.06] space-y-1">
              <strong className="text-white block font-mono text-xs text-brand-green">Monthly Subscriptions</strong>
              <p className="text-neutral-400">Billed in advance every 30 days. Provides ongoing operational flexibility with month-to-month commitments.</p>
            </div>
            <div className="p-4 rounded-2xl bg-white/[0.02] border border-white/[0.06] space-y-1">
              <strong className="text-white block font-mono text-xs text-brand-gold">Annual Subscriptions (Save 27%)</strong>
              <p className="text-neutral-400">Prepaid for a 12-month term at heavily discounted annual rates (e.g. ₹69,999/yr for Standard, ₹89,999/yr for Coaches OS).</p>
            </div>
          </div>
          <div className="p-3.5 rounded-2xl bg-white/[0.02] border border-white/[0.05] text-xs space-y-1">
            <strong className="text-white block font-sans">GST &amp; Tax Compliance:</strong>
            <span className="text-neutral-400">
              All subscription charges in India are subject to standard Goods and Services Tax (GST). Official GST tax invoices with your corporate GSTIN are generated automatically upon successful transaction settlement.
            </span>
          </div>
        </div>
      ),
    },
    {
      id: "cancellation-policy",
      title: "3. Cancellation Policy & Self-Service Portal",
      badge: "User Control",
      icon: RotateCcw,
      summary: "How to cancel subscriptions easily with zero hidden lock-ins and full end-of-term access.",
      content: (
        <div className="space-y-4 text-xs sm:text-sm text-neutral-300 leading-relaxed">
          <p>
            You may cancel your Automataiz subscription at any time directly through your self-service workspace administrative billing dashboard.
          </p>

          <div className="space-y-2 text-xs text-neutral-300">
            <div className="flex items-start gap-2.5 p-3.5 rounded-2xl bg-white/[0.02] border border-white/[0.05]">
              <CheckCircle2 className="w-4 h-4 text-brand-green shrink-0 mt-0.5" />
              <div>
                <strong className="text-white block">Full Access Until End of Paid Term:</strong>
                <span className="text-neutral-400">
                  When you cancel, your account remains 100% fully active with all 12 modules, AI agents, and CRM pipelines available until the conclusion of your current prepaid billing cycle.
                </span>
              </div>
            </div>

            <div className="flex items-start gap-2.5 p-3.5 rounded-2xl bg-white/[0.02] border border-white/[0.05]">
              <CheckCircle2 className="w-4 h-4 text-brand-green shrink-0 mt-0.5" />
              <div>
                <strong className="text-white block">No Future Recurring Charges:</strong>
                <span className="text-neutral-400">
                  Upon confirming cancellation, automatic renewals are halted immediately. Your payment method will not be debited for subsequent billing periods.
                </span>
              </div>
            </div>

            <div className="flex items-start gap-2.5 p-3.5 rounded-2xl bg-white/[0.02] border border-white/[0.05]">
              <CheckCircle2 className="w-4 h-4 text-brand-green shrink-0 mt-0.5" />
              <div>
                <strong className="text-white block">30-Day Data Export Grace Period:</strong>
                <span className="text-neutral-400">
                  Following the end of your billing cycle, your workspace enters a 30-day grace period during which you can download full CSV/JSON exports of all CRM records, customer lists, and financial invoices before permanent data sanitization.
                </span>
              </div>
            </div>
          </div>
        </div>
      ),
    },
    {
      id: "refund-eligibility",
      title: "4. Refund Eligibility & Evaluation Process",
      badge: "Refund Rules",
      icon: DollarSign,
      summary: "Criteria, review workflows, and standard payment processor turnaround times.",
      content: (
        <div className="space-y-4 text-xs sm:text-sm text-neutral-300 leading-relaxed">
          <p>
            Because Automataiz provides instant software provisioning, metered telephony gateway integrations, and real-time AI compute allocation, recurring SaaS subscriptions are generally non-refundable once the billing period has commenced.
          </p>

          <div className="p-4 rounded-2xl bg-white/[0.02] border border-brand-green/30 space-y-2">
            <h4 className="font-mono text-xs uppercase font-bold text-brand-green">
              7-Day Initial Satisfaction Review (New Subscriptions Only)
            </h4>
            <p className="text-xs text-neutral-300">
              For first-time subscribers experiencing verifiable technical barriers that our engineering support team is unable to resolve within 7 calendar days of initial account activation, you may submit an evaluation request to <a href="mailto:billing@automataiz.com" className="text-brand-green hover:underline font-mono">billing@automataiz.com</a>.
            </p>
          </div>

          <div className="space-y-2 text-xs text-neutral-400">
            <div className="flex items-start gap-2">
              <span className="text-brand-gold font-bold">•</span>
              <span><strong>Evaluation Timeline:</strong> Refund evaluation requests are reviewed by our billing compliance desk within 2 to 3 business days.</span>
            </div>
            <div className="flex items-start gap-2">
              <span className="text-brand-gold font-bold">•</span>
              <span><strong>Payout Method:</strong> Approved refunds are credited exclusively back to the original source payment instrument (UPI, credit/debit card, or net banking) via our payment gateway partners (Razorpay/Stripe).</span>
            </div>
            <div className="flex items-start gap-2">
              <span className="text-brand-gold font-bold">•</span>
              <span><strong>Bank Settlement Turnaround:</strong> Banks and card networks typically reflect refunded settlements in your statement within 5 to 7 standard banking days.</span>
            </div>
          </div>
        </div>
      ),
    },
    {
      id: "non-refundable-services",
      title: "5. Non-Refundable Services & Consumed Assets",
      badge: "Exclusions",
      icon: AlertTriangle,
      summary: "Explicit exclusions including consumed metered credits, setup services, and third-party fees.",
      content: (
        <div className="space-y-4 text-xs sm:text-sm text-neutral-300 leading-relaxed">
          <p>
            Under no circumstances are refunds provided for consumed operational resources or customized professional deliverables:
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 text-xs">
            {[
              "Past completed billing cycles and utilized software terms",
              "Consumed telephony fees (WhatsApp WABA conversation charges, SMS credits, IVR minutes)",
              "One-time white-glove onboarding and data migration engineering fees",
              "Custom AI model fine-tuning and proprietary workflow design services",
              "Domain registrations, SSL certificates, or custom dedicated IP allocations",
              "Third-party marketplace plugin licenses purchased through the App Store",
            ].map((item, idx) => (
              <div
                key={idx}
                className="p-3 rounded-xl bg-red-950/15 border border-red-500/20 text-neutral-300 flex items-start gap-2"
              >
                <span className="text-red-400 font-bold shrink-0">✕</span>
                <span>{item}</span>
              </div>
            ))}
          </div>
        </div>
      ),
    },
    {
      id: "annual-plans",
      title: "6. Annual Subscription Terms & Renewals",
      badge: "Annual Terms",
      icon: Clock,
      summary: "Terms governing prepaid 12-month commitments and renewal notification schedules.",
      content: (
        <div className="space-y-3 text-xs sm:text-sm text-neutral-300 leading-relaxed">
          <p>
            Annual subscriptions grant substantial cost savings (saving up to 27% compared to monthly billing) in exchange for a full 12-month operational commitment.
          </p>
          <p>
            Annual subscriptions are non-refundable mid-term. If you cancel an annual plan, you will continue to enjoy uninterrupted enterprise access for the remainder of the 365-day period, and your subscription will not renew upon anniversary expiration.
          </p>
          <p className="text-xs text-neutral-400">
            We transmit automated renewal reminders to the account administrator 30 days and 7 days prior to any annual renewal date.
          </p>
        </div>
      ),
    },
    {
      id: "enterprise-agreements",
      title: "7. Enterprise Agreements & Custom Contracts",
      badge: "Enterprise MSA",
      icon: Building2,
      summary: "Custom terms governing multi-location franchises, reseller licenses, and dedicated SLAs.",
      content: (
        <div className="space-y-3 text-xs sm:text-sm text-neutral-300 leading-relaxed">
          <p>
            Enterprise plans, White-Label SaaS reseller partnerships, and customized multi-tenant deployments are governed by individually executed Master Services Agreements (MSAs) and Statements of Work (SOWs).
          </p>
          <p>
            In the event of any conflict between these standard public Terms and a signed Enterprise MSA, the terms of the signed Enterprise MSA shall prevail.
          </p>
        </div>
      ),
    },
    {
      id: "failed-payments",
      title: "8. Failed Payments, Grace Periods & Reactivation",
      badge: "Payment Recovery",
      icon: Receipt,
      summary: "Automated retry cycles, 7-day operational grace periods, and instant reactivation.",
      content: (
        <div className="space-y-3 text-xs sm:text-sm text-neutral-300 leading-relaxed">
          <p>
            If a recurring subscription payment fails due to card expiration, insufficient funds, or banking network timeouts:
          </p>
          <div className="space-y-2 text-xs text-neutral-300">
            <div className="p-3 rounded-xl bg-white/[0.02] border border-white/[0.05]">
              <strong className="text-brand-gold block font-mono text-xs">1. Smart Retries:</strong>
              <span className="text-neutral-400">Our billing system attempts automated payment retries over a 7-day window and dispatches instant notification alerts to your administrator.</span>
            </div>
            <div className="p-3 rounded-xl bg-white/[0.02] border border-white/[0.05]">
              <strong className="text-brand-gold block font-mono text-xs">2. 7-Day Grace Period:</strong>
              <span className="text-neutral-400">Your live workflows, funnels, and CRM pipelines remain operational during this 7-day window to prevent business disruption.</span>
            </div>
            <div className="p-3 rounded-xl bg-white/[0.02] border border-white/[0.05]">
              <strong className="text-brand-gold block font-mono text-xs">3. Account Suspension &amp; Instant Restoration:</strong>
              <span className="text-neutral-400">If outstanding balances remain uncollected after 7 days, platform access is paused. Updating your payment instrument restores full access immediately with zero data loss.</span>
            </div>
          </div>
        </div>
      ),
    },
    {
      id: "promotional-pricing",
      title: "9. Promotional Pricing, Discounts & Coupons",
      badge: "Offers",
      icon: Sparkles,
      summary: "Conditions governing introductory campaigns, coupon codes, and renewal adjustments.",
      content: (
        <div className="space-y-3 text-xs sm:text-sm text-neutral-300 leading-relaxed">
          <p>
            Special promotional rates, launch campaign discounts, or coupon credits are valid strictly for the specified introductory period.
          </p>
          <p>
            Upon expiration of the promotional term, subscriptions automatically renew at standard published rates unless modified or cancelled prior to the renewal date.
          </p>
        </div>
      ),
    },
    {
      id: "exceptional-circumstances",
      title: "10. Exceptional Circumstances & Billing Errors",
      badge: "Guaranteed Fair Play",
      icon: ShieldCheck,
      summary: "Immediate 100% correction and refund guarantee for technical glitches or duplicate charges.",
      content: (
        <div className="space-y-3 text-xs sm:text-sm text-neutral-300 leading-relaxed">
          <p>
            In the rare event of a verified technical glitch, double billing, or unauthorized duplicate transaction caused by payment gateway timeouts, Automataiz guarantees an immediate 100% refund of the duplicated amount without delay.
          </p>
          <p className="text-xs text-neutral-400">
            Please report any suspected transaction discrepancy to <a href="mailto:billing@automataiz.com" className="text-brand-green hover:underline font-mono">billing@automataiz.com</a> with your transaction reference number for priority resolution within 24 hours.
          </p>
        </div>
      ),
    },
    {
      id: "policy-updates",
      title: "11. Policy Updates & Revision Versioning",
      badge: "Governance",
      icon: FileText,
      summary: "Notice protocols for updates to this Refund and Cancellation Policy.",
      content: (
        <div className="space-y-3 text-xs sm:text-sm text-neutral-300 leading-relaxed">
          <p>
            Automataiz reserves the right to modify this Policy to reflect evolving banking regulations, platform features, or payment methods.
          </p>
          <div className="p-3 rounded-xl bg-white/[0.02] border border-white/[0.06] font-mono text-xs text-neutral-400 flex items-center justify-between">
            <span>Current Version: <strong>v1.0 (Official Release)</strong></span>
            <span className="text-brand-green">Effective: January 1, 2025</span>
          </div>
        </div>
      ),
    },
    {
      id: "contact-billing",
      title: "12. Billing Support & Help Desk",
      badge: "Direct Contact",
      icon: Mail,
      summary: "Direct communication channels for our Billing and Accounts team in Bhubaneswar.",
      content: (
        <div className="space-y-4 text-xs sm:text-sm text-neutral-300 leading-relaxed">
          <p>
            Our billing specialists are available to answer any questions regarding subscriptions, invoices, GST credits, or plan adjustments:
          </p>

          <div className="p-6 rounded-3xl glass-panel border border-brand-green/30 bg-gradient-to-br from-[#0a1808] via-[#080808] to-[#141205] space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-brand-green/20 border border-brand-green/40 flex items-center justify-center text-brand-green">
                <Receipt className="w-5 h-5" />
              </div>
              <div>
                <h4 className="font-display font-bold text-white text-base">
                  Automataiz Accounts &amp; Billing Desk
                </h4>
                <div className="text-xs text-brand-green font-mono">
                  Department: Finance &amp; Customer Success
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs pt-2">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-brand-gold shrink-0 mt-0.5" />
                <div>
                  <strong className="text-white block">Corporate Office:</strong>
                  Automataiz, Om City, Mancheswar, Bhubaneswar, Odisha – 751017, India
                </div>
              </div>

              <div className="flex items-start gap-2.5">
                <Mail className="w-4 h-4 text-brand-green shrink-0 mt-0.5" />
                <div>
                  <strong className="text-white block">Dedicated Billing Email:</strong>
                  <a href="mailto:billing@automataiz.com" className="text-brand-green hover:underline">
                    billing@automataiz.com
                  </a>
                  <div className="text-neutral-500 text-[11px]">CC: hello@automataiz.com</div>
                </div>
              </div>

              <div className="flex items-start gap-2.5">
                <Phone className="w-4 h-4 text-brand-lime shrink-0 mt-0.5" />
                <div>
                  <strong className="text-white block">Direct Helpline:</strong>
                  <a href="tel:+918338091603" className="text-brand-lime hover:underline">
                    +91 8338091603
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-2.5">
                <Clock className="w-4 h-4 text-brand-gold shrink-0 mt-0.5" />
                <div>
                  <strong className="text-white block">Response Commitment:</strong>
                  <span>Under 24 business hours guaranteed</span>
                </div>
              </div>
            </div>

            <div className="pt-3 border-t border-white/[0.08] flex flex-col sm:flex-row items-center justify-between gap-3">
              <a
                href="mailto:billing@automataiz.com?subject=Billing%20Support%20Inquiry%20-%20Automataiz"
                className="w-full sm:w-auto px-6 py-3 rounded-xl text-xs font-bold text-black bg-gradient-to-r from-brand-green to-brand-gold hover:opacity-95 text-center shadow-glow-green/30"
              >
                Email Billing Support
              </a>
              <Link
                href="/pricing"
                className="text-xs font-mono text-neutral-400 hover:text-white underline"
              >
                View Pricing Plans &amp; ROI Calculator →
              </Link>
            </div>
          </div>
        </div>
      ),
    },
  ];

  // Scroll spy
  useEffect(() => {
    const handleScroll = () => {
      const totalScroll =
        document.documentElement.scrollHeight - window.innerHeight;
      const currentScroll = window.scrollY;
      setScrollProgress(totalScroll > 0 ? (currentScroll / totalScroll) * 100 : 0);

      const sectionElements = sections.map((sec) =>
        document.getElementById(sec.id)
      );

      for (let i = sectionElements.length - 1; i >= 0; i--) {
        const el = sectionElements[i];
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 180) {
            setActiveSection(sections[i].id);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [sections]);

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <div className="pt-28 pb-24 relative">
      {/* Top Reading Progress Bar */}
      <div className="fixed top-0 left-0 right-0 h-1 bg-white/5 z-50">
        <div
          className="h-full bg-gradient-to-r from-brand-green via-brand-lime to-brand-gold transition-all duration-150"
          style={{ width: `${scrollProgress}%` }}
        />
      </div>

      {/* SECTION 01: HERO */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative mb-16 sm:mb-20">
        {/* Ambient background glow */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[400px] glow-orb-green opacity-20 pointer-events-none" />
        <div className="absolute top-10 right-1/4 w-96 h-96 glow-orb-gold opacity-15 pointer-events-none" />

        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-brand-green/10 border border-brand-green/30 text-brand-green text-xs font-mono mb-4 shadow-glow-green/20">
          <RotateCcw className="w-3.5 h-3.5" />
          <span>ENTERPRISE TRUST CENTER // REFUND &amp; CANCELLATION POLICY</span>
        </div>

        <h1 className="text-4xl sm:text-6xl font-display font-extrabold text-white tracking-tight max-w-4xl mx-auto leading-tight">
          Refund &amp; Cancellation Policy.{" "}
          <span className="text-gradient-green-gold block mt-1">
            Fair, Transparent Billing.
          </span>
        </h1>

        <p className="mt-4 text-base sm:text-lg text-neutral-300 max-w-3xl mx-auto leading-relaxed">
          We believe in transparent billing and fair subscription practices. This policy explains how subscriptions, cancellations, and refunds are handled for Automataiz services.
        </p>

        {/* Action Buttons */}
        <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
          <Link
            href="/terms"
            className="px-6 py-3.5 rounded-xl text-xs font-bold text-black bg-gradient-to-r from-brand-green via-brand-lime to-brand-gold hover:opacity-95 transition-all shadow-glow-green/40 flex items-center gap-2"
          >
            <FileText className="w-4 h-4 text-black" />
            <span>Terms &amp; Conditions</span>
          </Link>
          <button
            onClick={() => scrollToSection("contact-billing")}
            className="px-6 py-3.5 rounded-xl text-xs font-semibold text-white bg-white/[0.08] hover:bg-white/[0.14] border border-white/[0.12] transition-all flex items-center gap-2"
          >
            <Mail className="w-4 h-4 text-brand-green" />
            <span>Contact Billing Support</span>
          </button>
        </div>

        {/* 4 Trust Telemetry Badges */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 max-w-4xl mx-auto mt-12 pt-8 border-t border-white/[0.08]">
          <div className="p-3.5 rounded-2xl bg-white/[0.02] border border-white/[0.06] text-center">
            <RotateCcw className="w-4 h-4 text-brand-green mx-auto mb-1" />
            <div className="font-bold text-white text-xs">Cancel Anytime</div>
            <div className="text-[10px] text-neutral-500 font-mono">1-Click Self-Service</div>
          </div>
          <div className="p-3.5 rounded-2xl bg-white/[0.02] border border-white/[0.06] text-center">
            <Receipt className="w-4 h-4 text-brand-gold mx-auto mb-1" />
            <div className="font-bold text-white text-xs">GST Compliant</div>
            <div className="text-[10px] text-neutral-500 font-mono">Automated Tax Invoices</div>
          </div>
          <div className="p-3.5 rounded-2xl bg-white/[0.02] border border-white/[0.06] text-center">
            <ShieldCheck className="w-4 h-4 text-brand-lime mx-auto mb-1" />
            <div className="font-bold text-white text-xs">Zero Lock-In</div>
            <div className="text-[10px] text-neutral-500 font-mono">Month-to-Month Flexibility</div>
          </div>
          <div className="p-3.5 rounded-2xl bg-white/[0.02] border border-white/[0.06] text-center">
            <Clock className="w-4 h-4 text-white mx-auto mb-1" />
            <div className="font-bold text-white text-xs">30-Day Export</div>
            <div className="text-[10px] text-neutral-500 font-mono">Full Data Portability</div>
          </div>
        </div>
      </section>

      {/* MAIN 2-COLUMN LAYOUT: Sticky TOC Left, Policy Articles Right */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          {/* SECTION 02: Sticky Left Table of Contents */}
          <aside className="lg:col-span-4 hidden lg:block">
            <div className="sticky top-28 space-y-4 p-5 rounded-3xl glass-panel border border-white/[0.1] bg-[#080808]/90 shadow-2xl backdrop-blur-xl">
              <div className="flex items-center justify-between border-b border-white/[0.08] pb-3">
                <div className="flex items-center gap-2">
                  <Receipt className="w-4 h-4 text-brand-green" />
                  <span className="font-mono text-xs font-bold text-white uppercase tracking-wider">
                    Policy Index
                  </span>
                </div>
                <span className="text-[10px] font-mono text-neutral-500">
                  {sections.length} Clauses
                </span>
              </div>

              <nav className="space-y-1 max-h-[calc(100vh-220px)] overflow-y-auto pr-1 scrollbar-thin">
                {sections.map((sec) => {
                  const isCurrent = activeSection === sec.id;
                  return (
                    <button
                      key={sec.id}
                      onClick={() => scrollToSection(sec.id)}
                      className={`w-full text-left px-3.5 py-2 rounded-xl text-xs transition-all flex items-center justify-between group ${
                        isCurrent
                          ? "bg-brand-green/15 text-brand-green font-bold border border-brand-green/30 shadow-sm"
                          : "text-neutral-400 hover:text-white hover:bg-white/[0.04]"
                      }`}
                    >
                      <span className="truncate pr-2">{sec.title}</span>
                      <ChevronRight
                        className={`w-3.5 h-3.5 shrink-0 transition-transform ${
                          isCurrent
                            ? "text-brand-green translate-x-0.5"
                            : "text-neutral-600 group-hover:text-neutral-300"
                        }`}
                      />
                    </button>
                  );
                })}
              </nav>

              {/* Billing Help Desk Quick Card */}
              <div className="pt-3 border-t border-white/[0.08] space-y-2">
                <div className="text-[11px] font-mono text-neutral-400">
                  Questions about your invoice?
                </div>
                <a
                  href="mailto:billing@automataiz.com"
                  className="w-full py-2.5 px-3 rounded-xl bg-white/[0.05] hover:bg-white/[0.1] border border-white/[0.08] text-neutral-200 hover:text-white text-xs font-mono flex items-center justify-center gap-2 transition-all"
                >
                  <Mail className="w-3.5 h-3.5 text-brand-green" />
                  <span>billing@automataiz.com</span>
                </a>
              </div>
            </div>
          </aside>

          {/* Policy Articles Body */}
          <main className="lg:col-span-8 space-y-8">
            {sections.map((sec) => {
              const Icon = sec.icon;
              return (
                <article
                  key={sec.id}
                  id={sec.id}
                  className="p-6 sm:p-9 rounded-3xl glass-panel border border-white/[0.08] hover:border-brand-green/30 bg-[#080808]/80 transition-all duration-300 scroll-mt-28 space-y-6"
                >
                  {/* Article Header */}
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-white/[0.06] pb-4">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-2xl bg-brand-green/10 border border-brand-green/30 flex items-center justify-center text-brand-green shrink-0">
                        <Icon className="w-5 h-5" />
                      </div>
                      <div>
                        <h2 className="text-xl sm:text-2xl font-display font-bold text-white">
                          {sec.title}
                        </h2>
                        <p className="text-xs text-neutral-400 mt-0.5">
                          {sec.summary}
                        </p>
                      </div>
                    </div>

                    <span className="text-[10px] font-mono px-2.5 py-1 rounded-full bg-white/[0.04] border border-white/[0.08] text-brand-gold self-start sm:self-center shrink-0">
                      {sec.badge}
                    </span>
                  </div>

                  {/* Article Content */}
                  <div>{sec.content}</div>
                </article>
              );
            })}

            {/* Bottom Contact Card */}
            <div className="p-8 rounded-3xl glass-panel border border-brand-green/30 bg-gradient-to-r from-black via-[#0a1808] to-black flex flex-col sm:flex-row items-center justify-between gap-6">
              <div>
                <h3 className="font-display font-bold text-xl text-white">
                  Need Help With Subscriptions or Invoices?
                </h3>
                <p className="text-xs text-neutral-300 mt-1">
                  Our dedicated billing team in Bhubaneswar is ready to assist with account adjustments, GST invoicing, and payment inquiries.
                </p>
              </div>

              <a
                href="mailto:billing@automataiz.com"
                className="w-full sm:w-auto px-6 py-3.5 rounded-xl text-xs font-bold text-black bg-gradient-to-r from-brand-green to-brand-gold hover:opacity-95 transition-all text-center shrink-0 shadow-glow-green/30"
              >
                Contact Billing Team
              </a>
            </div>
          </main>
        </div>
      </section>
    </div>
  );
}
