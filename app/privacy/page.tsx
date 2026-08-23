"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  ShieldCheck,
  Lock,
  Eye,
  Bot,
  Database,
  Globe,
  FileText,
  Mail,
  Phone,
  MapPin,
  CheckCircle2,
  AlertCircle,
  Sparkles,
  ArrowRight,
  ChevronRight,
  Server,
  Layers,
  Clock,
  UserCheck,
  Cpu,
  Share2,
  Download,
  HelpCircle,
  ExternalLink,
} from "lucide-react";

interface PolicySection {
  id: string;
  title: string;
  badge: string;
  icon: any;
  summary: string;
  content: React.ReactNode;
}

export default function PrivacyPolicyPage() {
  const [activeSection, setActiveSection] = useState("introduction");
  const [scrollProgress, setScrollProgress] = useState(0);

  const sections: PolicySection[] = [
    {
      id: "introduction",
      title: "1. Introduction & Scope",
      badge: "Governance",
      icon: ShieldCheck,
      summary: "Who we are, the purpose of this policy, and whom it protects across the Automataiz ecosystem.",
      content: (
        <div className="space-y-4 text-xs sm:text-sm text-neutral-300 leading-relaxed">
          <p>
            Welcome to the <strong>Automataiz Trust &amp; Privacy Center</strong>. Automataiz Technologies (&quot;Automataiz,&quot; &quot;we,&quot; &quot;our,&quot; or &quot;us&quot;), headquartered in Bhubaneswar, Odisha, operates the all-in-one AI-powered Business Operating System (the &quot;Platform&quot;) designed to help modern businesses market, sell, operate, and scale through a unified intelligent environment.
          </p>
          <p>
            This Privacy Policy sets forth our high standards of transparency, data governance, and privacy protection. It outlines how we collect, store, process, transfer, and safeguard business data, personal credentials, customer records, and AI interactions across our web applications, APIs, mobile interfaces, and digital workforce agents.
          </p>
          <div className="p-4 rounded-2xl bg-white/[0.02] border border-white/[0.06] space-y-2">
            <h4 className="font-mono text-xs uppercase font-bold text-brand-green">
              Who This Policy Applies To:
            </h4>
            <ul className="space-y-1.5 text-xs text-neutral-300">
              <li className="flex items-start gap-2">
                <span className="text-brand-green font-bold">•</span>
                <span><strong>Business Customers &amp; Account Owners:</strong> Registered organizations, founders, administrators, and team members utilizing our operating system.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-brand-green font-bold">•</span>
                <span><strong>End-Users &amp; Client Leads:</strong> Individuals who interact with our customers via Automataiz-hosted funnels, landing pages, forms, web chat widgets, WhatsApp WABA broadcasts, or IVR calls.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-brand-green font-bold">•</span>
                <span><strong>Website Visitors:</strong> Any person accessing our public web properties, interactive simulators, knowledge resources, or booking pages.</span>
              </li>
            </ul>
          </div>
        </div>
      ),
    },
    {
      id: "information-collected",
      title: "2. Information We Collect",
      badge: "Data Inventory",
      icon: Database,
      summary: "Comprehensive catalog of personal, operational, communication, and technical data collected.",
      content: (
        <div className="space-y-4 text-xs sm:text-sm text-neutral-300 leading-relaxed">
          <p>
            We collect information strictly necessary to provide enterprise-grade software capabilities, maintain multi-tenant security, and deliver intelligent automated business outcomes.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
            <div className="p-4 rounded-2xl bg-white/[0.02] border border-white/[0.06] space-y-2">
              <div className="font-mono font-bold text-brand-gold text-xs">
                A. Personal &amp; Account Information
              </div>
              <p className="text-xs text-neutral-400">
                Full names, business email addresses, verified phone numbers, authentication credentials, billing contact details, staff roles, and profile preferences.
              </p>
            </div>

            <div className="p-4 rounded-2xl bg-white/[0.02] border border-white/[0.06] space-y-2">
              <div className="font-mono font-bold text-brand-gold text-xs">
                B. Business &amp; Operational Telemetry
              </div>
              <p className="text-xs text-neutral-400">
                Company names, industry vertical configurations, team member headcount, pipeline stages, revenue inputs entered into ROI simulators, and custom field schemas.
              </p>
            </div>

            <div className="p-4 rounded-2xl bg-white/[0.02] border border-white/[0.06] space-y-2">
              <div className="font-mono font-bold text-brand-gold text-xs">
                C. Communications &amp; Customer Data
              </div>
              <p className="text-xs text-neutral-400">
                Customer contact records, form submissions, appointment bookings, email campaign engagement, official WhatsApp Business API (WABA) transcripts, SMS logs, and IVR telecalling records.
              </p>
            </div>

            <div className="p-4 rounded-2xl bg-white/[0.02] border border-white/[0.06] space-y-2">
              <div className="font-mono font-bold text-brand-gold text-xs">
                D. AI Interactions &amp; Knowledge Assets
              </div>
              <p className="text-xs text-neutral-400">
                Prompts entered into Nova AI, instructions for AI SDR and digital agents, and proprietary business documents (SOPs, PDFs, policy docs) uploaded into the Knowledge Vault or AI Studio.
              </p>
            </div>
          </div>

          <div className="p-4 rounded-2xl bg-white/[0.02] border border-white/[0.06] text-xs text-neutral-400">
            <strong className="text-white block mb-1">Device &amp; Usage Analytics:</strong>
            IP addresses, browser signatures, operating system telemetry, login timestamps, referral URLs, and session performance logs to prevent unauthorized account access and optimize platform speed.
          </div>
        </div>
      ),
    },
    {
      id: "how-we-use",
      title: "3. How We Use Your Information",
      badge: "Processing Rationale",
      icon: Layers,
      summary: "The specific legitimate business and operational purposes governing all data processing.",
      content: (
        <div className="space-y-4 text-xs sm:text-sm text-neutral-300 leading-relaxed">
          <p>
            Automataiz processes collected information solely to fulfill our contractual commitments, deliver requested business services, and improve platform reliability.
          </p>

          <div className="space-y-3">
            {[
              {
                title: "Service Delivery & Multi-Engine Execution",
                desc: "Executing CRM pipeline automations, routing WhatsApp messages, powering drag-and-drop builders, and provisioning unified inbox operations.",
              },
              {
                title: "AI Co-Pilot & Digital Workforce Capabilities",
                desc: "Supplying real-time context to Nova AI, enabling AI SDR lead qualification, and generating automated executive briefings on the CEO dashboard.",
              },
              {
                title: "Billing & Financial Operations",
                desc: "Processing recurring SaaS subscriptions, calculating wallet ledger usage for metered telephony/AI APIs, and issuing GST-compliant invoices.",
              },
              {
                title: "Platform Security, Fraud Prevention & Audit Logging",
                desc: "Detecting malicious traffic, enforcing role-based permissions, monitoring SLA thresholds, and maintaining immutable security audit trails.",
              },
              {
                title: "Customer Support & Systems Engineering",
                desc: "Diagnosing technical bottlenecks, responding to support inquiries, and delivering critical service advisories.",
              },
            ].map((item, idx) => (
              <div
                key={idx}
                className="p-3.5 rounded-2xl bg-white/[0.02] border border-white/[0.05] flex items-start gap-3"
              >
                <CheckCircle2 className="w-4 h-4 text-brand-green shrink-0 mt-0.5" />
                <div>
                  <strong className="text-white block text-xs">{item.title}</strong>
                  <span className="text-xs text-neutral-400">{item.desc}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      ),
    },
    {
      id: "ai-data-processing",
      title: "4. AI Data Processing & Zero-Model-Training Guarantee",
      badge: "AI Architecture",
      icon: Bot,
      summary: "Our strict zero-training privacy architecture, tenant isolation, and customer-owned AI models.",
      content: (
        <div className="space-y-4 text-xs sm:text-sm text-neutral-300 leading-relaxed">
          <div className="p-5 rounded-2xl bg-brand-green/10 border border-brand-green/40 space-y-2 shadow-glow-green/20">
            <div className="flex items-center gap-2 font-mono font-bold text-brand-green text-xs">
              <Lock className="w-4 h-4" />
              <span>THE AUTOMATAIZ ZERO-MODEL-TRAINING GUARANTEE</span>
            </div>
            <p className="text-xs text-neutral-200 leading-relaxed">
              We hold a strict foundational policy: <strong className="text-white">Your proprietary business data, uploaded SOPs, customer records, and private prompts are NEVER used to train public or foundational third-party AI models.</strong> Your organizational intelligence remains 100% yours.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
            <div className="p-4 rounded-2xl bg-white/[0.02] border border-white/[0.06] space-y-2">
              <h4 className="font-mono text-xs font-bold text-brand-gold">
                1. Ephemeral Retrieval-Augmented Generation (RAG)
              </h4>
              <p className="text-xs text-neutral-400">
                Documents in your Knowledge Vault are converted into private cryptographic vector embeddings. Context is injected into prompts strictly at runtime and deleted from processing memory immediately after response generation.
              </p>
            </div>

            <div className="p-4 rounded-2xl bg-white/[0.02] border border-white/[0.06] space-y-2">
              <h4 className="font-mono text-xs font-bold text-brand-gold">
                2. Strict Multi-Tenant Logical Isolation
              </h4>
              <p className="text-xs text-neutral-400">
                Every business organization operates in an isolated cryptographic tenant space. AI Agents assigned to your workspace cannot query, cross-reference, or leak data into another company&apos;s environment.
              </p>
            </div>

            <div className="p-4 rounded-2xl bg-white/[0.02] border border-white/[0.06] space-y-2">
              <h4 className="font-mono text-xs font-bold text-brand-gold">
                3. Customer-Owned API Key (BYOK) Support
              </h4>
              <p className="text-xs text-neutral-400">
                For enterprises with direct contracts with LLM vendors (OpenAI, Anthropic, Google Vertex AI), Automataiz supports direct API key passthrough so all telemetry stays bound to your sovereign enterprise agreements.
              </p>
            </div>

            <div className="p-4 rounded-2xl bg-white/[0.02] border border-white/[0.06] space-y-2">
              <h4 className="font-mono text-xs font-bold text-brand-gold">
                4. Human Review &amp; Access Controls
              </h4>
              <p className="text-xs text-neutral-400">
                Automataiz engineers and staff do NOT inspect private business prompts or uploaded documents unless explicitly granted temporary written permission by your authorized administrator for debugging purposes.
              </p>
            </div>
          </div>
        </div>
      ),
    },
    {
      id: "cookies",
      title: "5. Cookie Policy & Tracking Technologies",
      badge: "Tracking Controls",
      icon: Eye,
      summary: "How cookies, session tokens, and local storage are utilized and how you can manage them.",
      content: (
        <div className="space-y-4 text-xs sm:text-sm text-neutral-300 leading-relaxed">
          <p>
            We use cookies and secure browser storage technologies to maintain authenticated sessions, secure user accounts, and provide responsive platform interactions.
          </p>

          <div className="space-y-2.5">
            <div className="p-3.5 rounded-2xl bg-white/[0.02] border border-white/[0.05]">
              <strong className="text-white block text-xs">Essential &amp; Security Cookies:</strong>
              <span className="text-xs text-neutral-400">
                Mandatory cookies required for user authentication, CSRF token validation, session persistence, and load balancing across our cloud cluster.
              </span>
            </div>

            <div className="p-3.5 rounded-2xl bg-white/[0.02] border border-white/[0.05]">
              <strong className="text-white block text-xs">Functional &amp; Preference Cookies:</strong>
              <span className="text-xs text-neutral-400">
                Preserve user interface settings, dark-mode styling, active simulator configurations, and temporary form draft data.
              </span>
            </div>

            <div className="p-3.5 rounded-2xl bg-white/[0.02] border border-white/[0.05]">
              <strong className="text-white block text-xs">Analytics &amp; Performance Cookies:</strong>
              <span className="text-xs text-neutral-400">
                Anonymized, aggregated telemetry to gauge page load velocities, API response latency, and feature adoption across the platform.
              </span>
            </div>
          </div>

          <p className="text-xs text-neutral-400">
            You can configure your browser to block or alert you about cookies; however, disabling essential session cookies will prevent login into the Automataiz application.
          </p>
        </div>
      ),
    },
    {
      id: "third-party-services",
      title: "6. Third-Party Services & Sub-Processors",
      badge: "Ecosystem Partners",
      icon: Share2,
      summary: "Verified infrastructure partners, payment gateways, and communication networks.",
      content: (
        <div className="space-y-4 text-xs sm:text-sm text-neutral-300 leading-relaxed">
          <p>
            To deliver global enterprise SaaS reliability, Automataiz partners with industry-leading sub-processors adhering to stringent data protection standards (SOC 2, ISO 27001, PCI-DSS).
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5 text-xs">
            <div className="p-4 rounded-2xl bg-white/[0.02] border border-white/[0.06] space-y-1">
              <strong className="text-white block">Cloud Infrastructure &amp; Compute</strong>
              <p className="text-neutral-400">AWS / Google Cloud enterprise data centers with 99.99% uptime SLAs and hardware encryption.</p>
            </div>

            <div className="p-4 rounded-2xl bg-white/[0.02] border border-white/[0.06] space-y-1">
              <strong className="text-white block">Payment &amp; Billing Gateways</strong>
              <p className="text-neutral-400">Razorpay and Stripe for PCI-DSS Level 1 compliant card, UPI, and recurring subscription processing.</p>
            </div>

            <div className="p-4 rounded-2xl bg-white/[0.02] border border-white/[0.06] space-y-1">
              <strong className="text-white block">Telephony &amp; WhatsApp WABA</strong>
              <p className="text-neutral-400">Meta WhatsApp Business API, licensed telecom DLT SMS aggregators, and Twilio/Exotel for voice IVR.</p>
            </div>

            <div className="p-4 rounded-2xl bg-white/[0.02] border border-white/[0.06] space-y-1">
              <strong className="text-white block">Third-Party Customer Integrations</strong>
              <p className="text-neutral-400">Any optional app connected via the App Store (e.g. Google Calendar, Zoom) only receives data explicitly permitted by your admin.</p>
            </div>
          </div>
        </div>
      ),
    },
    {
      id: "data-security",
      title: "7. Enterprise Data Security & Encryption",
      badge: "Defense in Depth",
      icon: Lock,
      summary: "Bank-grade cryptographic standards, role-based access, automated backups, and disaster recovery.",
      content: (
        <div className="space-y-4 text-xs sm:text-sm text-neutral-300 leading-relaxed">
          <p>
            We implement defense-in-depth architectural safeguards to shield your business against unauthorized access, loss, or data alteration.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-center">
            <div className="p-4 rounded-2xl bg-white/[0.02] border border-brand-green/30">
              <div className="text-brand-green font-mono font-bold text-sm">TLS 1.3</div>
              <div className="text-[11px] text-neutral-400 mt-1">In-Transit Encryption for all API &amp; Web traffic</div>
            </div>
            <div className="p-4 rounded-2xl bg-white/[0.02] border border-brand-gold/30">
              <div className="text-brand-gold font-mono font-bold text-sm">AES-256</div>
              <div className="text-[11px] text-neutral-400 mt-1">At-Rest Database &amp; File Vault Encryption</div>
            </div>
            <div className="p-4 rounded-2xl bg-white/[0.02] border border-brand-lime/30">
              <div className="text-brand-lime font-mono font-bold text-sm">RBAC + MFA</div>
              <div className="text-[11px] text-neutral-400 mt-1">Role-based controls and mandatory multi-factor auth</div>
            </div>
          </div>

          <div className="space-y-2 text-xs text-neutral-400">
            <div className="flex items-start gap-2">
              <CheckCircle2 className="w-4 h-4 text-brand-green shrink-0 mt-0.5" />
              <span><strong>Automated Backups &amp; Disaster Recovery:</strong> Encrypted multi-region daily snapshots with 15-minute point-in-time recovery capabilities.</span>
            </div>
            <div className="flex items-start gap-2">
              <CheckCircle2 className="w-4 h-4 text-brand-green shrink-0 mt-0.5" />
              <span><strong>Immutable Audit Trails:</strong> Every administrative change, staff login, and API request is logged with immutable timestamps.</span>
            </div>
            <div className="flex items-start gap-2">
              <CheckCircle2 className="w-4 h-4 text-brand-green shrink-0 mt-0.5" />
              <span><strong>AI 3-Level Governance Guard:</strong> Multi-tiered approval requirements (Level 1: Auto, Level 2: Manager, Level 3: Executive) to prevent unintended actions.</span>
            </div>
          </div>
        </div>
      ),
    },
    {
      id: "international-transfers",
      title: "8. International Data Transfers & Sovereignty",
      badge: "Global Compliance",
      icon: Globe,
      summary: "Mechanisms ensuring cross-border transfer compliance with global privacy regulations.",
      content: (
        <div className="space-y-4 text-xs sm:text-sm text-neutral-300 leading-relaxed">
          <p>
            Automataiz serves enterprises globally. When customer data is routed across international boundaries for processing (such as global CDN edge nodes or multi-region LLM endpoints), we enforce rigorous safeguards.
          </p>
          <p>
            All international transfers are executed pursuant to Standard Contractual Clauses (SCCs), robust Data Processing Addendums (DPAs), and strict compliance with the Indian Digital Personal Data Protection Act (DPDP), the European General Data Protection Regulation (GDPR), and cross-border encryption mandates.
          </p>
        </div>
      ),
    },
    {
      id: "data-retention",
      title: "9. Data Retention & Account Deletion",
      badge: "Lifecycle",
      icon: Clock,
      summary: "How long information is preserved and our instant data portability and purge processes.",
      content: (
        <div className="space-y-4 text-xs sm:text-sm text-neutral-300 leading-relaxed">
          <p>
            We retain business and account data for the duration of your active subscription. You maintain total sovereign ownership over your customer records.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
            <div className="p-4 rounded-2xl bg-white/[0.02] border border-white/[0.06] space-y-1">
              <strong className="text-white block">Account Closure &amp; Complete Purge:</strong>
              <p className="text-neutral-400">Upon account cancellation, all customer contact databases, Knowledge Vault assets, and AI history are permanently erased from active servers within 30 days.</p>
            </div>
            <div className="p-4 rounded-2xl bg-white/[0.02] border border-white/[0.06] space-y-1">
              <strong className="text-white block">1-Click Full Data Portability:</strong>
              <p className="text-neutral-400">Export your entire CRM contact registry, deals, pipeline logs, and invoice receipts in standardized CSV or JSON formats at any time.</p>
            </div>
          </div>
        </div>
      ),
    },
    {
      id: "your-rights",
      title: "10. Your Privacy Rights & Controls",
      badge: "User Empowerment",
      icon: UserCheck,
      summary: "Your rights regarding access, rectification, deletion, restriction, and consent withdrawal.",
      content: (
        <div className="space-y-4 text-xs sm:text-sm text-neutral-300 leading-relaxed">
          <p>
            Regardless of your geographical location, Automataiz extends full privacy rights to all organizations and their authorized users:
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
            {[
              "Right to Access: Request a full copy of all data stored in your organization.",
              "Right to Rectification: Correct inaccurate or outdated customer details.",
              "Right to Erasure (Be Forgotten): Request permanent deletion of specific records.",
              "Right to Restrict Processing: Limit how specific sub-modules handle your data.",
              "Right to Object: Opt out of marketing notifications and non-essential telemetry.",
              "Right to Withdraw Consent: Revoke previously granted permissions instantly.",
            ].map((r, i) => (
              <div
                key={i}
                className="p-3 rounded-xl bg-white/[0.02] border border-white/[0.05] flex items-center gap-2 text-neutral-300"
              >
                <CheckCircle2 className="w-3.5 h-3.5 text-brand-green shrink-0" />
                <span>{r}</span>
              </div>
            ))}
          </div>

          <p className="text-xs text-neutral-400 pt-2">
            To exercise any of these statutory rights, submit a request directly to our Data Protection Office at{" "}
            <a href="mailto:privacy@automataiz.com" className="text-brand-green hover:underline">
              privacy@automataiz.com
            </a>
            . We fulfill verified requests within 30 days with zero processing fees.
          </p>
        </div>
      ),
    },
    {
      id: "childrens-privacy",
      title: "11. Children's Privacy",
      badge: "B2B Restriction",
      icon: AlertCircle,
      summary: "Automataiz is exclusively a commercial enterprise B2B platform.",
      content: (
        <div className="space-y-3 text-xs sm:text-sm text-neutral-300 leading-relaxed">
          <p>
            Automataiz is an enterprise Business Operating System designed strictly for commercial organizations, entrepreneurs, and professional teams. The Platform is not intended for or directed toward individuals under the age of 18. We do not knowingly solicit or collect personal information from minors.
          </p>
        </div>
      ),
    },
    {
      id: "changes-to-policy",
      title: "12. Changes & Policy Version Updates",
      badge: "Versioning",
      icon: FileText,
      summary: "Notification protocol for policy amendments and revision logs.",
      content: (
        <div className="space-y-3 text-xs sm:text-sm text-neutral-300 leading-relaxed">
          <p>
            As Automataiz introduces new AI capabilities, vertical solutions, and regulatory adaptations, we may update this Privacy Policy periodically.
          </p>
          <p>
            When material updates occur, we will notify registered account administrators via email and display a prominent notification banner inside the platform dashboard at least 30 days prior to the effective date.
          </p>
          <div className="p-3 rounded-xl bg-white/[0.02] border border-white/[0.06] font-mono text-xs text-neutral-400 flex items-center justify-between">
            <span>Current Version: <strong>v1.0 (Enterprise Trust Release)</strong></span>
            <span className="text-brand-green">Effective: January 1, 2025</span>
          </div>
        </div>
      ),
    },
    {
      id: "contact-information",
      title: "13. Privacy Office & Grievance Contact",
      badge: "Direct Contact",
      icon: Mail,
      summary: "Direct contact channels for our Legal, Privacy, and Grievance Officer in Bhubaneswar, Odisha.",
      content: (
        <div className="space-y-4 text-xs sm:text-sm text-neutral-300 leading-relaxed">
          <p>
            If you have questions, inquiries, or security disclosures regarding this Privacy Policy or our data governance architecture, please contact our dedicated Privacy &amp; Legal Office:
          </p>

          <div className="p-6 rounded-3xl glass-panel border border-brand-green/30 bg-gradient-to-br from-[#0a1808] via-[#080808] to-[#141205] space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-brand-green/20 border border-brand-green/40 flex items-center justify-center text-brand-green">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <div>
                <h4 className="font-display font-bold text-white text-base">
                  Automataiz Privacy &amp; Grievance Office
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
                  <strong className="text-white block">Headquarters:</strong>
                  Automataiz, Om City, Mancheswar, Bhubaneswar, Odisha – 751017, India
                </div>
              </div>

              <div className="flex items-start gap-2.5">
                <Mail className="w-4 h-4 text-brand-green shrink-0 mt-0.5" />
                <div>
                  <strong className="text-white block">Dedicated Privacy Email:</strong>
                  <a href="mailto:privacy@automataiz.com" className="text-brand-green hover:underline">
                    privacy@automataiz.com
                  </a>
                  <div className="text-neutral-500 text-[11px]">CC: hello@automataiz.com</div>
                </div>
              </div>

              <div className="flex items-start gap-2.5">
                <Phone className="w-4 h-4 text-brand-lime shrink-0 mt-0.5" />
                <div>
                  <strong className="text-white block">Helpline &amp; Legal Desk:</strong>
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
                href="mailto:privacy@automataiz.com?subject=Privacy%20Inquiry%20-%20Automataiz"
                className="w-full sm:w-auto px-6 py-3 rounded-xl text-xs font-bold text-black bg-gradient-to-r from-brand-green to-brand-gold hover:opacity-95 text-center shadow-glow-green/30"
              >
                Email Privacy Officer
              </a>
              <Link
                href="/contact"
                className="text-xs font-mono text-neutral-400 hover:text-white underline"
              >
                Schedule Corporate Legal Consultation →
              </Link>
            </div>
          </div>
        </div>
      ),
    },
  ];

  // Scroll spy to update active TOC
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
      {/* Scroll Progress Bar at the Top */}
      <div className="fixed top-0 left-0 right-0 h-1 bg-white/5 z-50">
        <div
          className="h-full bg-gradient-to-r from-brand-green via-brand-lime to-brand-gold transition-all duration-150"
          style={{ width: `${scrollProgress}%` }}
        />
      </div>

      {/* SECTION 01: HERO */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative mb-16 sm:mb-20">
        {/* Ambient glow */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[400px] glow-orb-green opacity-20 pointer-events-none" />
        <div className="absolute top-10 right-1/4 w-96 h-96 glow-orb-gold opacity-15 pointer-events-none" />

        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-brand-green/10 border border-brand-green/30 text-brand-green text-xs font-mono mb-4 shadow-glow-green/20">
          <ShieldCheck className="w-3.5 h-3.5" />
          <span>ENTERPRISE TRUST CENTER // PRIVACY POLICY v1.0</span>
        </div>

        <h1 className="text-4xl sm:text-6xl font-display font-extrabold text-white tracking-tight max-w-4xl mx-auto leading-tight">
          Your Privacy Matters.{" "}
          <span className="text-gradient-green-gold block mt-1">
            Enterprise Trust by Design.
          </span>
        </h1>

        <p className="mt-4 text-base sm:text-lg text-neutral-300 max-w-3xl mx-auto leading-relaxed">
          At Automataiz, protecting your business data is one of our highest priorities. This Privacy Policy explains how we collect, use, protect, and manage your information when you use our AI Business Operating System.
        </p>

        {/* Action Buttons */}
        <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
          <button
            onClick={() => scrollToSection("contact-information")}
            className="px-6 py-3.5 rounded-xl text-xs font-bold text-black bg-gradient-to-r from-brand-green via-brand-lime to-brand-gold hover:opacity-95 transition-all shadow-glow-green/40 flex items-center gap-2"
          >
            <Mail className="w-4 h-4 text-black" />
            <span>Contact Privacy Team</span>
          </button>
          <Link
            href="/solutions"
            className="px-6 py-3.5 rounded-xl text-xs font-semibold text-white bg-white/[0.08] hover:bg-white/[0.14] border border-white/[0.12] transition-all flex items-center gap-2"
          >
            <ShieldCheck className="w-4 h-4 text-brand-green" />
            <span>Back to Trust Center &amp; Architecture</span>
          </Link>
        </div>

        {/* 4 Trust Highlights Badges */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 max-w-4xl mx-auto mt-12 pt-8 border-t border-white/[0.08]">
          <div className="p-3.5 rounded-2xl bg-white/[0.02] border border-white/[0.06] text-center">
            <Lock className="w-4 h-4 text-brand-green mx-auto mb-1" />
            <div className="font-bold text-white text-xs">AES-256 &amp; TLS 1.3</div>
            <div className="text-[10px] text-neutral-500 font-mono">Bank-Grade Encryption</div>
          </div>
          <div className="p-3.5 rounded-2xl bg-white/[0.02] border border-white/[0.06] text-center">
            <Bot className="w-4 h-4 text-brand-gold mx-auto mb-1" />
            <div className="font-bold text-white text-xs">Zero AI Model Training</div>
            <div className="text-[10px] text-neutral-500 font-mono">Customer Data Protected</div>
          </div>
          <div className="p-3.5 rounded-2xl bg-white/[0.02] border border-white/[0.06] text-center">
            <Database className="w-4 h-4 text-brand-lime mx-auto mb-1" />
            <div className="font-bold text-white text-xs">Tenant Isolation</div>
            <div className="text-[10px] text-neutral-500 font-mono">Multi-Tenant Guardrails</div>
          </div>
          <div className="p-3.5 rounded-2xl bg-white/[0.02] border border-white/[0.06] text-center">
            <Globe className="w-4 h-4 text-white mx-auto mb-1" />
            <div className="font-bold text-white text-xs">DPDP &amp; GDPR Ready</div>
            <div className="text-[10px] text-neutral-500 font-mono">Global Privacy Aligned</div>
          </div>
        </div>
      </section>

      {/* MAIN 2-COLUMN LAYOUT: Sticky TOC Left, Policy Articles Right */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          {/* SECTION 02: Sticky Left Table of Contents (4 Cols) */}
          <aside className="lg:col-span-4 hidden lg:block">
            <div className="sticky top-28 space-y-4 p-5 rounded-3xl glass-panel border border-white/[0.1] bg-[#080808]/90 shadow-2xl backdrop-blur-xl">
              <div className="flex items-center justify-between border-b border-white/[0.08] pb-3">
                <div className="flex items-center gap-2">
                  <FileText className="w-4 h-4 text-brand-green" />
                  <span className="font-mono text-xs font-bold text-white uppercase tracking-wider">
                    Table of Contents
                  </span>
                </div>
                <span className="text-[10px] font-mono text-neutral-500">
                  {sections.length} Clauses
                </span>
              </div>

              <nav className="space-y-1 max-h-[calc(100vh-220px)] overflow-y-auto pr-1 scrollbar-thin">
                {sections.map((sec, idx) => {
                  const isCurrent = activeSection === sec.id;
                  const Icon = sec.icon;
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

              {/* Trust Desk Quick Contact */}
              <div className="pt-3 border-t border-white/[0.08] space-y-2">
                <div className="text-[11px] font-mono text-neutral-400">
                  Have a specific privacy inquiry?
                </div>
                <a
                  href="mailto:privacy@automataiz.com"
                  className="w-full py-2.5 px-3 rounded-xl bg-white/[0.05] hover:bg-white/[0.1] border border-white/[0.08] text-neutral-200 hover:text-white text-xs font-mono flex items-center justify-center gap-2 transition-all"
                >
                  <Mail className="w-3.5 h-3.5 text-brand-green" />
                  <span>privacy@automataiz.com</span>
                </a>
              </div>
            </div>
          </aside>

          {/* Policy Articles Body (8 Cols) */}
          <main className="lg:col-span-8 space-y-8">
            {sections.map((sec, idx) => {
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

            {/* Final Trust Verification Card */}
            <div className="p-8 rounded-3xl glass-panel border border-brand-gold/30 bg-gradient-to-r from-black via-[#161205] to-black flex flex-col sm:flex-row items-center justify-between gap-6">
              <div>
                <h3 className="font-display font-bold text-xl text-white">
                  Need an Enterprise Custom DPA or BAA?
                </h3>
                <p className="text-xs text-neutral-300 mt-1">
                  We provide custom Data Processing Addendums (DPAs), standard security questionnaires, and audit assistance for scaling enterprises.
                </p>
              </div>

              <Link
                href="/contact"
                className="w-full sm:w-auto px-6 py-3.5 rounded-xl text-xs font-bold text-black bg-gradient-to-r from-brand-green to-brand-gold hover:opacity-95 transition-all text-center shrink-0 shadow-glow-green/30"
              >
                Request Enterprise DPA
              </Link>
            </div>
          </main>
        </div>
      </section>
    </div>
  );
}
