"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import {
  FileText,
  ShieldCheck,
  Scale,
  Lock,
  UserCheck,
  CreditCard,
  Zap,
  AlertTriangle,
  Bot,
  Database,
  Building2,
  Share2,
  Clock,
  CheckCircle2,
  Mail,
  Phone,
  MapPin,
  ChevronRight,
  ExternalLink,
  HelpCircle,
  Sparkles,
} from "lucide-react";

interface TermSection {
  id: string;
  title: string;
  badge: string;
  icon: any;
  summary: string;
  content: React.ReactNode;
}

export default function TermsAndConditionsPage() {
  const [activeSection, setActiveSection] = useState("acceptance");
  const [scrollProgress, setScrollProgress] = useState(0);

  const sections: TermSection[] = [
    {
      id: "acceptance",
      title: "1. Acceptance of Terms",
      badge: "Binding Agreement",
      icon: Scale,
      summary: "Formation of legally binding agreement by accessing or using Automataiz services.",
      content: (
        <div className="space-y-4 text-xs sm:text-sm text-neutral-300 leading-relaxed">
          <p>
            These Terms &amp; Conditions (&quot;Terms&quot;) constitute a legally binding agreement entered into between you (either personally or on behalf of an entity, &quot;you&quot; or &quot;Customer&quot;) and <strong>Automataiz Technologies</strong> (&quot;Automataiz,&quot; &quot;we,&quot; &quot;us,&quot; or &quot;our&quot;), governing your access to and utilization of the Automataiz website, AI Business Operating System platform, mobile portals, APIs, and digital workforce agents (collectively, the &quot;Services&quot;).
          </p>
          <p>
            By accessing the Platform, creating an account, or purchasing a subscription, you expressly acknowledge that you have read, understood, and agree to be bound by these Terms and our companion <Link href="/privacy" className="text-brand-green hover:underline font-semibold">Privacy Policy</Link>. If you do not agree with all of these Terms, you are prohibited from using the Services and must discontinue use immediately.
          </p>
        </div>
      ),
    },
    {
      id: "eligibility",
      title: "2. Eligibility & Authority",
      badge: "Authority",
      icon: UserCheck,
      summary: "Commercial capacity requirements and legal authority to bind business organizations.",
      content: (
        <div className="space-y-4 text-xs sm:text-sm text-neutral-300 leading-relaxed">
          <p>
            The Automataiz platform is strictly a commercial, enterprise B2B Business Operating System. To access or use the Services:
          </p>
          <ul className="space-y-2 text-xs text-neutral-300">
            <li className="flex items-start gap-2">
              <CheckCircle2 className="w-4 h-4 text-brand-green shrink-0 mt-0.5" />
              <span>You must be at least 18 years of age (or the legal age of majority in your jurisdiction) and possess full legal capacity to enter into binding agreements.</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle2 className="w-4 h-4 text-brand-green shrink-0 mt-0.5" />
              <span>If you are accepting these Terms on behalf of a company, partnership, or legal entity, you represent and warrant that you possess full corporate authority to bind that organization to these Terms.</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle2 className="w-4 h-4 text-brand-green shrink-0 mt-0.5" />
              <span>Your use of the Services must not violate any applicable local, national, or international laws, trade sanctions, or regulatory frameworks.</span>
            </li>
          </ul>
        </div>
      ),
    },
    {
      id: "account-registration",
      title: "3. Account Registration & Security",
      badge: "Access Control",
      icon: Lock,
      summary: "Requirements for account integrity, multi-factor authentication, and team permissions.",
      content: (
        <div className="space-y-4 text-xs sm:text-sm text-neutral-300 leading-relaxed">
          <p>
            To access our operating engines, you must register for an official Automataiz organization account. You agree to provide accurate, current, and complete corporate registration details and maintain the security of your authentication credentials.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-xs pt-1">
            <div className="p-4 rounded-2xl bg-white/[0.02] border border-white/[0.06] space-y-1">
              <strong className="text-white block font-mono text-xs text-brand-gold">Credential Confidentiality</strong>
              <p className="text-neutral-400">You are solely responsible for all activities occurring under your account credentials and for maintaining strict confidentiality of API tokens and passwords.</p>
            </div>
            <div className="p-4 rounded-2xl bg-white/[0.02] border border-white/[0.06] space-y-1">
              <strong className="text-white block font-mono text-xs text-brand-gold">Team &amp; Role Permissions</strong>
              <p className="text-neutral-400">Administrators may provision sub-accounts for staff. You are responsible for configuring appropriate Role-Based Access Control (RBAC) tiers.</p>
            </div>
          </div>
          <p className="text-xs text-neutral-400">
            You must immediately notify our Security Team at <a href="mailto:privacy@automataiz.com" className="text-brand-green hover:underline">privacy@automataiz.com</a> upon discovering any unauthorized account breach or compromised API credential.
          </p>
        </div>
      ),
    },
    {
      id: "subscriptions-billing",
      title: "4. Subscriptions, Pricing & GST Billing",
      badge: "Commerce",
      icon: CreditCard,
      summary: "Subscription cycles, automated renewals, GST invoices, and plan upgrades.",
      content: (
        <div className="space-y-4 text-xs sm:text-sm text-neutral-300 leading-relaxed">
          <p>
            Automataiz offers subscription plans (Standard Business OS, Trainers &amp; Coaches OS, and Enterprise Custom tiers) billed on either a monthly or annual recurring cycle.
          </p>
          <div className="space-y-2.5">
            <div className="p-3.5 rounded-2xl bg-white/[0.02] border border-white/[0.05]">
              <strong className="text-white block text-xs">Automated Recurring Billing:</strong>
              <span className="text-xs text-neutral-400">
                Subscriptions automatically renew at the end of each billing cycle unless cancelled prior to the renewal date via your workspace billing portal.
              </span>
            </div>
            <div className="p-3.5 rounded-2xl bg-white/[0.02] border border-white/[0.05]">
              <strong className="text-white block text-xs">Taxes &amp; GST Invoicing:</strong>
              <span className="text-xs text-neutral-400">
                All fees are exclusive of applicable taxes. For customers in India, standard Goods &amp; Services Tax (GST) is applied and reflected on official GST-compliant tax invoices.
              </span>
            </div>
            <div className="p-3.5 rounded-2xl bg-white/[0.02] border border-white/[0.05]">
              <strong className="text-white block text-xs">Upgrades, Downgrades &amp; Price Adjustments:</strong>
              <span className="text-xs text-neutral-400">
                Plan upgrades take effect immediately with prorated billing adjustments. We provide a minimum of 30 days advance notice prior to any recurring fee modifications.
              </span>
            </div>
          </div>
        </div>
      ),
    },
    {
      id: "free-trials",
      title: "5. Free Trials & Conversions",
      badge: "Evaluation",
      icon: Sparkles,
      summary: "Rules governing trial access, feature limits, and automatic conversion.",
      content: (
        <div className="space-y-3 text-xs sm:text-sm text-neutral-300 leading-relaxed">
          <p>
            Automataiz may make trial access available to evaluate our operating system. Free trials are provided solely for non-production evaluation purposes and are limited to one trial per organization.
          </p>
          <p>
            If a trial requires billing details, it will automatically convert to the selected paid subscription upon expiration unless cancelled prior to the conclusion of the trial period.
          </p>
        </div>
      ),
    },
    {
      id: "acceptable-use",
      title: "6. Acceptable Use Policy",
      badge: "Compliance",
      icon: AlertTriangle,
      summary: "Prohibited activities including spam, telephony abuse, malware, and platform disruption.",
      content: (
        <div className="space-y-4 text-xs sm:text-sm text-neutral-300 leading-relaxed">
          <p>
            You agree to utilize Automataiz strictly in accordance with ethical business standards and applicable telecommunications regulations. You shall NOT:
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
            {[
              "Send unsolicited commercial messages (SPAM) via WhatsApp, Email, or SMS",
              "Violate WhatsApp Business API (WABA) or Meta Messaging Policies",
              "Upload malware, viruses, or code designed to disrupt platform infrastructure",
              "Attempt unauthorized reverse-engineering, scraping, or source code decompilation",
              "Deploy AI agents for fraudulent, misleading, defamatory, or illegal operations",
              "Resell access to unauthorized third parties outside of approved White-Label reseller terms",
            ].map((rule, i) => (
              <div
                key={i}
                className="p-3 rounded-xl bg-red-950/15 border border-red-500/20 text-neutral-300 flex items-start gap-2"
              >
                <span className="text-red-400 font-bold shrink-0">✕</span>
                <span>{rule}</span>
              </div>
            ))}
          </div>
        </div>
      ),
    },
    {
      id: "ai-services",
      title: "7. AI Services, Models & Output Disclaimers",
      badge: "AI Governance",
      icon: Bot,
      summary: "Customer review responsibilities, generative model limitations, and human oversight.",
      content: (
        <div className="space-y-4 text-xs sm:text-sm text-neutral-300 leading-relaxed">
          <div className="p-4 rounded-2xl bg-white/[0.02] border border-brand-green/30 space-y-2">
            <h4 className="font-mono text-xs uppercase font-bold text-brand-green">
              Generative AI Co-Pilot Capabilities (Nova AI &amp; AI Agents)
            </h4>
            <p className="text-xs text-neutral-300">
              Automataiz incorporates advanced AI models to generate insights, automate outreach, draft communications, and qualify leads. Because large language models process probabilistic predictions, <strong className="text-white">AI outputs may occasionally contain inaccuracies or hallucinations.</strong>
            </p>
          </div>

          <div className="space-y-2 text-xs text-neutral-400">
            <div className="flex items-start gap-2">
              <CheckCircle2 className="w-4 h-4 text-brand-gold shrink-0 mt-0.5" />
              <span><strong>Customer Review Responsibility:</strong> You are solely responsible for reviewing and verifying all AI-generated copy, proposals, and automated broadcast messages before dispatch.</span>
            </div>
            <div className="flex items-start gap-2">
              <CheckCircle2 className="w-4 h-4 text-brand-gold shrink-0 mt-0.5" />
              <span><strong>Human-in-the-Loop Governance:</strong> Automataiz provides 3-level approval rules (Automatic, Manager Approval, Executive Approval). We strongly recommend enabling approval gates for high-stakes actions.</span>
            </div>
            <div className="flex items-start gap-2">
              <CheckCircle2 className="w-4 h-4 text-brand-gold shrink-0 mt-0.5" />
              <span><strong>Business Decisions:</strong> Strategic, financial, legal, and operational decisions executed by your business remain your sole professional responsibility.</span>
            </div>
          </div>
        </div>
      ),
    },
    {
      id: "user-content",
      title: "8. User Content & Data Ownership",
      badge: "Ownership",
      icon: Database,
      summary: "Unconditional customer ownership of uploaded data, SOPs, and customer registries.",
      content: (
        <div className="space-y-3 text-xs sm:text-sm text-neutral-300 leading-relaxed">
          <p>
            <strong className="text-white">You retain 100% intellectual property ownership</strong> over all customer lists, lead profiles, uploaded documents, video courses, SOPs, and proprietary data uploaded to the Platform.
          </p>
          <p>
            You grant Automataiz a limited, non-exclusive, worldwide license strictly to host, transmit, and process your data as required to deliver the Services and execute your configured workflows. As outlined in our Privacy Policy, your proprietary content is never used to train public third-party AI models.
          </p>
        </div>
      ),
    },
    {
      id: "intellectual-property",
      title: "9. Intellectual Property & Trademarks",
      badge: "Platform Rights",
      icon: ShieldCheck,
      summary: "Automataiz proprietary trademarks, software architecture, UI designs, and patents.",
      content: (
        <div className="space-y-3 text-xs sm:text-sm text-neutral-300 leading-relaxed">
          <p>
            The Automataiz name, logo, AI Chip brand assets, software codebase, visual designs, UI components, documentation, and underlying algorithms are the exclusive intellectual property of Automataiz Technologies.
          </p>
          <p>
            Except as explicitly granted under an active subscription or authorized White-Label Reseller agreement, you may not copy, modify, distribute, or create derivative works from the Platform.
          </p>
        </div>
      ),
    },
    {
      id: "third-party-integrations",
      title: "10. Third-Party Integrations & External APIs",
      badge: "Ecosystem",
      icon: Share2,
      summary: "Customer compliance responsibilities when connecting external API providers.",
      content: (
        <div className="space-y-3 text-xs sm:text-sm text-neutral-300 leading-relaxed">
          <p>
            Automataiz supports seamless integrations with third-party providers (including Meta, WhatsApp, OpenAI, Anthropic, Google, Razorpay, and Stripe).
          </p>
          <p>
            Your utilization of third-party services is governed by their respective terms of service and privacy policies. Automataiz is not responsible for outages, policy changes, or account restrictions imposed by external third-party platforms.
          </p>
        </div>
      ),
    },
    {
      id: "service-availability",
      title: "11. Service Availability & Maintenance",
      badge: "Reliability",
      icon: Clock,
      summary: "Target 99.9% uptime, scheduled maintenance windows, and beta capabilities.",
      content: (
        <div className="space-y-3 text-xs sm:text-sm text-neutral-300 leading-relaxed">
          <p>
            We target a 99.9% platform availability SLA across core engines. However, temporary downtime may occur for planned infrastructure maintenance, security patching, or unexpected telecom carrier disruptions.
          </p>
          <p>
            We provide advance notification for scheduled maintenance windows whenever commercially practicable. Features identified as &quot;Beta&quot; or &quot;Experimental&quot; are provided for testing purposes and may undergo continuous refinement.
          </p>
        </div>
      ),
    },
    {
      id: "security",
      title: "12. Security & Customer Obligations",
      badge: "Cybersecurity",
      icon: Lock,
      summary: "Shared responsibility model for organization authentication and API token hygiene.",
      content: (
        <div className="space-y-3 text-xs sm:text-sm text-neutral-300 leading-relaxed">
          <p>
            Automataiz enforces AES-256 encryption at rest, TLS 1.3 in transit, and continuous security monitoring.
          </p>
          <p>
            Security is a shared responsibility: Customers must enforce strong passwords, mandate Multi-Factor Authentication (MFA) across staff accounts, and promptly revoke credentials when employees depart the organization.
          </p>
        </div>
      ),
    },
    {
      id: "termination",
      title: "13. Suspension & Termination",
      badge: "Account Lifecycle",
      icon: AlertTriangle,
      summary: "Cancellation rights, account suspension for policy breaches, and data export grace period.",
      content: (
        <div className="space-y-3 text-xs sm:text-sm text-neutral-300 leading-relaxed">
          <p>
            You may cancel your subscription at any time via your workspace billing portal. Cancellation will take effect at the conclusion of your current prepaid billing cycle.
          </p>
          <p>
            We reserve the right to suspend or terminate accounts that engage in egregious terms violations (such as mass messaging spam, fraud, or intentional platform disruption). Customers have a 30-day window following cancellation to export their CRM records and data.
          </p>
        </div>
      ),
    },
    {
      id: "disclaimers",
      title: "14. Warranty Disclaimers",
      badge: "Legal Notice",
      icon: Scale,
      summary: "Platform provided on an 'as is' and 'as available' basis to the maximum extent permitted by law.",
      content: (
        <div className="space-y-3 text-xs sm:text-sm text-neutral-300 leading-relaxed">
          <p className="uppercase text-[11px] text-neutral-400 font-mono">
            TO THE MAXIMUM EXTENT PERMITTED BY APPLICABLE LAW, THE SERVICES ARE PROVIDED ON AN &quot;AS IS&quot; AND &quot;AS AVAILABLE&quot; BASIS. AUTOMATAIZ DISCLAIMS ALL WARRANTIES OF ANY KIND, WHETHER EXPRESS, IMPLIED, STATUTORY, OR OTHERWISE, INCLUDING WITHOUT LIMITATION WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, AND NON-INFRINGEMENT.
          </p>
        </div>
      ),
    },
    {
      id: "limitation-of-liability",
      title: "15. Limitation of Liability",
      badge: "Liability Cap",
      icon: ShieldCheck,
      summary: "Exclusion of indirect damages and aggregate liability limits.",
      content: (
        <div className="space-y-3 text-xs sm:text-sm text-neutral-300 leading-relaxed">
          <p className="text-neutral-300">
            In no event shall Automataiz, its founder, officers, directors, or employees be liable for any indirect, incidental, special, consequential, or punitive damages (including loss of profits, revenue, data, or business goodwill) arising from your use of the Services.
          </p>
          <p className="text-xs text-neutral-400">
            Our aggregate liability for all claims arising out of or related to these Terms shall not exceed the total fees paid by you to Automataiz in the twelve (12) months preceding the event giving rise to liability.
          </p>
        </div>
      ),
    },
    {
      id: "indemnification",
      title: "16. Indemnification",
      badge: "Indemnity",
      icon: ShieldCheck,
      summary: "Customer agreement to defend and indemnify Automataiz against unlawful third-party claims.",
      content: (
        <div className="space-y-3 text-xs sm:text-sm text-neutral-300 leading-relaxed">
          <p>
            You agree to defend, indemnify, and hold harmless Automataiz and its affiliates against any third-party claims, liabilities, damages, or costs (including legal fees) arising from your violation of these Terms, unauthorized messaging campaigns, or infringement of third-party rights.
          </p>
        </div>
      ),
    },
    {
      id: "governing-law",
      title: "17. Governing Law & Dispute Resolution",
      badge: "Jurisdiction",
      icon: Scale,
      summary: "Jurisdiction and dispute resolution framework in Bhubaneswar, Odisha, India.",
      content: (
        <div className="space-y-3 text-xs sm:text-sm text-neutral-300 leading-relaxed">
          <p>
            These Terms shall be governed by and construed in accordance with the laws of <strong>India</strong>. Any legal action, suit, or proceeding arising out of or relating to these Terms shall be subject to the exclusive jurisdiction of the competent courts located in <strong>Bhubaneswar, Odisha, India</strong>.
          </p>
          <div className="p-3.5 rounded-xl bg-white/[0.02] border border-white/[0.06] text-xs text-neutral-400">
            <em>Note for Corporate Counsel:</em> Customized enterprise dispute arbitration clauses (such as Singapore International Arbitration Centre / SIAC rules) are available for international enterprise accounts upon mutual written agreement.
          </div>
        </div>
      ),
    },
    {
      id: "changes-to-terms",
      title: "18. Changes & Policy Version Updates",
      badge: "Revisions",
      icon: Clock,
      summary: "Advance notification protocols for updates to these Terms.",
      content: (
        <div className="space-y-3 text-xs sm:text-sm text-neutral-300 leading-relaxed">
          <p>
            We may amend these Terms periodically. For material modifications, we will provide a minimum of 30 days advance notice via email and an in-app administrative dashboard banner. Continued use of the Services following the effective date constitutes full acceptance of the revised Terms.
          </p>
          <div className="p-3 rounded-xl bg-white/[0.02] border border-white/[0.06] font-mono text-xs text-neutral-400 flex items-center justify-between">
            <span>Version: <strong>v1.0 (Official Enterprise Release)</strong></span>
            <span className="text-brand-green">Effective: January 1, 2025</span>
          </div>
        </div>
      ),
    },
    {
      id: "contact-legal",
      title: "19. Legal Contact Information",
      badge: "Contact",
      icon: Mail,
      summary: "Official communication channels for our Legal and Executive team.",
      content: (
        <div className="space-y-4 text-xs sm:text-sm text-neutral-300 leading-relaxed">
          <div className="p-6 rounded-3xl glass-panel border border-brand-green/30 bg-gradient-to-br from-[#0a1808] via-[#080808] to-[#141205] space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-brand-green/20 border border-brand-green/40 flex items-center justify-center text-brand-green">
                <Scale className="w-5 h-5" />
              </div>
              <div>
                <h4 className="font-display font-bold text-white text-base">
                  Automataiz Legal Affairs &amp; Compliance
                </h4>
                <div className="text-xs text-brand-green font-mono">
                  Officer: Debasish Kabi (Founder &amp; CEO)
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs pt-2">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-brand-gold shrink-0 mt-0.5" />
                <div>
                  <strong className="text-white block">Corporate Headquarters:</strong>
                  Automataiz, Om City, Mancheswar, Bhubaneswar, Odisha – 751017, India
                </div>
              </div>

              <div className="flex items-start gap-2.5">
                <Mail className="w-4 h-4 text-brand-green shrink-0 mt-0.5" />
                <div>
                  <strong className="text-white block">Legal &amp; Contracts Desk:</strong>
                  <a href="mailto:hello@automataiz.com" className="text-brand-green hover:underline">
                    hello@automataiz.com
                  </a>
                  <div className="text-neutral-500 text-[11px]">CC: privacy@automataiz.com</div>
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
                  <strong className="text-white block">Response SLA:</strong>
                  <span>Under 24 business hours guaranteed</span>
                </div>
              </div>
            </div>

            <div className="pt-3 border-t border-white/[0.08] flex flex-col sm:flex-row items-center justify-between gap-3">
              <a
                href="mailto:hello@automataiz.com?subject=Legal%20Terms%20Inquiry%20-%20Automataiz"
                className="w-full sm:w-auto px-6 py-3 rounded-xl text-xs font-bold text-black bg-gradient-to-r from-brand-green to-brand-gold hover:opacity-95 text-center shadow-glow-green/30"
              >
                Contact Legal Department
              </a>
              <Link
                href="/privacy"
                className="text-xs font-mono text-neutral-400 hover:text-white underline"
              >
                Review Companion Privacy Policy →
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

        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-brand-gold/10 border border-brand-gold/30 text-brand-gold text-xs font-mono mb-4 shadow-glow-gold/20">
          <Scale className="w-3.5 h-3.5" />
          <span>LEGAL AGREEMENT // TERMS &amp; CONDITIONS v1.0</span>
        </div>

        <h1 className="text-4xl sm:text-6xl font-display font-extrabold text-white tracking-tight max-w-4xl mx-auto leading-tight">
          Terms &amp; Conditions.{" "}
          <span className="text-gradient-gold block mt-1">
            Clear, Transparent &amp; Fair.
          </span>
        </h1>

        <p className="mt-4 text-base sm:text-lg text-neutral-300 max-w-3xl mx-auto leading-relaxed">
          These Terms govern your access to and use of the Automataiz AI Business Operating System, website, applications, and related services.
        </p>

        {/* Action Buttons */}
        <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
          <Link
            href="/privacy"
            className="px-6 py-3.5 rounded-xl text-xs font-bold text-black bg-gradient-to-r from-brand-green via-brand-lime to-brand-gold hover:opacity-95 transition-all shadow-glow-green/40 flex items-center gap-2"
          >
            <ShieldCheck className="w-4 h-4 text-black" />
            <span>Review Privacy Policy</span>
          </Link>
          <button
            onClick={() => scrollToSection("contact-legal")}
            className="px-6 py-3.5 rounded-xl text-xs font-semibold text-white bg-white/[0.08] hover:bg-white/[0.14] border border-white/[0.12] transition-all flex items-center gap-2"
          >
            <Mail className="w-4 h-4 text-brand-green" />
            <span>Contact Legal Team</span>
          </button>
        </div>

        {/* 4 Trust Telemetry Badges */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 max-w-4xl mx-auto mt-12 pt-8 border-t border-white/[0.08]">
          <div className="p-3.5 rounded-2xl bg-white/[0.02] border border-white/[0.06] text-center">
            <ShieldCheck className="w-4 h-4 text-brand-green mx-auto mb-1" />
            <div className="font-bold text-white text-xs">Customer Owns Data</div>
            <div className="text-[10px] text-neutral-500 font-mono">100% Sovereign IP</div>
          </div>
          <div className="p-3.5 rounded-2xl bg-white/[0.02] border border-white/[0.06] text-center">
            <Bot className="w-4 h-4 text-brand-gold mx-auto mb-1" />
            <div className="font-bold text-white text-xs">Zero AI Model Training</div>
            <div className="text-[10px] text-neutral-500 font-mono">Private Vaults</div>
          </div>
          <div className="p-3.5 rounded-2xl bg-white/[0.02] border border-white/[0.06] text-center">
            <Clock className="w-4 h-4 text-brand-lime mx-auto mb-1" />
            <div className="font-bold text-white text-xs">99.9% Target SLA</div>
            <div className="text-[10px] text-neutral-500 font-mono">High Availability</div>
          </div>
          <div className="p-3.5 rounded-2xl bg-white/[0.02] border border-white/[0.06] text-center">
            <Building2 className="w-4 h-4 text-white mx-auto mb-1" />
            <div className="font-bold text-white text-xs">Enterprise Fair Terms</div>
            <div className="text-[10px] text-neutral-500 font-mono">Transparent &amp; Direct</div>
          </div>
        </div>
      </section>

      {/* MAIN 2-COLUMN LAYOUT: Sticky TOC Left, Terms Articles Right */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          {/* SECTION 02: Sticky Left Table of Contents */}
          <aside className="lg:col-span-4 hidden lg:block">
            <div className="sticky top-28 space-y-4 p-5 rounded-3xl glass-panel border border-white/[0.1] bg-[#080808]/90 shadow-2xl backdrop-blur-xl">
              <div className="flex items-center justify-between border-b border-white/[0.08] pb-3">
                <div className="flex items-center gap-2">
                  <FileText className="w-4 h-4 text-brand-gold" />
                  <span className="font-mono text-xs font-bold text-white uppercase tracking-wider">
                    Terms Index
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
                          ? "bg-brand-gold/15 text-brand-gold font-bold border border-brand-gold/30 shadow-sm"
                          : "text-neutral-400 hover:text-white hover:bg-white/[0.04]"
                      }`}
                    >
                      <span className="truncate pr-2">{sec.title}</span>
                      <ChevronRight
                        className={`w-3.5 h-3.5 shrink-0 transition-transform ${
                          isCurrent
                            ? "text-brand-gold translate-x-0.5"
                            : "text-neutral-600 group-hover:text-neutral-300"
                        }`}
                      />
                    </button>
                  );
                })}
              </nav>

              {/* Legal Desk Quick Help */}
              <div className="pt-3 border-t border-white/[0.08] space-y-2">
                <div className="text-[11px] font-mono text-neutral-400">
                  Contract or enterprise queries?
                </div>
                <a
                  href="mailto:hello@automataiz.com"
                  className="w-full py-2.5 px-3 rounded-xl bg-white/[0.05] hover:bg-white/[0.1] border border-white/[0.08] text-neutral-200 hover:text-white text-xs font-mono flex items-center justify-center gap-2 transition-all"
                >
                  <Mail className="w-3.5 h-3.5 text-brand-gold" />
                  <span>hello@automataiz.com</span>
                </a>
              </div>
            </div>
          </aside>

          {/* Terms Articles Body */}
          <main className="lg:col-span-8 space-y-8">
            {sections.map((sec) => {
              const Icon = sec.icon;
              return (
                <article
                  key={sec.id}
                  id={sec.id}
                  className="p-6 sm:p-9 rounded-3xl glass-panel border border-white/[0.08] hover:border-brand-gold/30 bg-[#080808]/80 transition-all duration-300 scroll-mt-28 space-y-6"
                >
                  {/* Article Header */}
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-white/[0.06] pb-4">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-2xl bg-brand-gold/10 border border-brand-gold/30 flex items-center justify-center text-brand-gold shrink-0">
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

                    <span className="text-[10px] font-mono px-2.5 py-1 rounded-full bg-white/[0.04] border border-white/[0.08] text-brand-green self-start sm:self-center shrink-0">
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
                  Have Questions About These Terms?
                </h3>
                <p className="text-xs text-neutral-300 mt-1">
                  Our legal and compliance team is available to assist with enterprise MSA reviews and vendor evaluations.
                </p>
              </div>

              <Link
                href="/contact"
                className="w-full sm:w-auto px-6 py-3.5 rounded-xl text-xs font-bold text-black bg-gradient-to-r from-brand-green to-brand-gold hover:opacity-95 transition-all text-center shrink-0 shadow-glow-green/30"
              >
                Contact Legal Desk
              </Link>
            </div>
          </main>
        </div>
      </section>
    </div>
  );
}
