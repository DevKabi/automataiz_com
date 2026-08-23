"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  ShieldCheck,
  Lock,
  Bot,
  Cpu,
  Sparkles,
  Layers,
  Database,
  UserCheck,
  Eye,
  Sliders,
  CheckCircle2,
  AlertTriangle,
  FileText,
  Key,
  Server,
  Zap,
  Globe,
  HelpCircle,
  ChevronDown,
  ArrowRight,
  ArrowDown,
  BrainCircuit,
  MessageSquare,
  Users,
  Compass,
  Briefcase,
  TrendingUp,
  LineChart,
  Code2,
  Boxes,
  Workflow,
  Sparkle,
} from "lucide-react";

export default function AISafetyGovernancePage() {
  const [activeWorkflowStep, setActiveWorkflowStep] = useState(0);
  const [activeBoardroomTopic, setActiveBoardroomTopic] = useState(0);
  const [activeModel, setActiveModel] = useState("openai");
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const [selectedPillar, setSelectedPillar] = useState<number>(0);

  // Workflow pipeline steps
  const workflowSteps = [
    {
      id: "data",
      title: "1. Encrypted User Data",
      subtitle: "Customer-Sovereign Input",
      desc: "Prompts, CRM records, and business documents enter the platform with AES-256 encryption at rest and TLS 1.3 in transit. Data remains strictly isolated within your organization's cryptographic tenant.",
      icon: Database,
      badge: "Tenant Isolation",
      security: "Cryptographically isolated customer database",
    },
    {
      id: "brain",
      title: "2. AI Brain & Vector Store",
      subtitle: "Ephemeral Context Retrieval (RAG)",
      desc: "Your uploaded SOPs, policies, and FAQs are transformed into high-dimensional vector embeddings stored in a private index. Information is retrieved only when needed to fulfill specific tasks.",
      icon: BrainCircuit,
      badge: "Zero Model Training",
      security: "Zero data leakage across organizational boundaries",
    },
    {
      id: "nova",
      title: "3. Nova AI Assistant",
      subtitle: "Intelligent Reasoning Engine",
      desc: "Nova processes your requests in tandem with your private AI Brain context. Prompts are sanitized of sensitive credentials before being processed by your selected LLM endpoint.",
      icon: Bot,
      badge: "Prompt Sanitization",
      security: "Encrypted memory buffer erased post-inference",
    },
    {
      id: "agents",
      title: "4. Specialized AI Agents",
      subtitle: "Autonomous Task Execution",
      desc: "Digital agents (AI SDR, Marketing Manager, Operations Agent) generate drafts, analyze pipeline velocity, and prepare automated multi-channel sequences based on exact instructions.",
      icon: Users,
      badge: "Constrained Scope",
      security: "Strict role permissions & capability boundary fences",
    },
    {
      id: "actions",
      title: "5. Governed Business Actions",
      subtitle: "Multi-Engine Integration",
      desc: "Planned actions (sending WhatsApp broadcasts, updating CRM stages, generating invoices) are staged in a governed queue awaiting execution or human approval.",
      icon: Workflow,
      badge: "Action Queue",
      security: "Rate-limited, audited API dispatches",
    },
    {
      id: "review",
      title: "6. Human-in-the-Loop Review",
      subtitle: "Final Accountability Gate",
      desc: "Configurable 3-level approval rules ensure critical business actions (such as high-value payouts or mass messaging) are reviewed by human managers before dispatch.",
      icon: UserCheck,
      badge: "3-Tier Approval",
      security: "Full human oversight & immutable audit trail",
    },
  ];

  // 8 Major Ecosystem Components
  const ecosystemComponents = [
    {
      name: "Nova AI Assistant",
      role: "Unified Operating Co-Pilot",
      icon: Bot,
      purpose: "Provide conversational intelligence across all 12 platform business engines.",
      benefits: "Accelerates copy generation, workflow assembly, and real-time business telemetry inquiries.",
      governance: "Transparent rationale, citation of internal knowledge sources, and zero automatic execution on financial ledgers.",
      security: "Ephemeral prompt buffers cleared post-response; no prompt data stored on external servers.",
    },
    {
      name: "AI Brain",
      role: "Private Vector Knowledge Vault",
      icon: BrainCircuit,
      purpose: "Ground AI responses in your company's proprietary SOPs, FAQs, and product catalogs.",
      benefits: "Eliminates generic hallucinations by constraining AI answers strictly to your verified company facts.",
      governance: "Organizations retain 100% control to add, edit, or purge knowledge documents with 1 click.",
      security: "Isolated cryptographic embedding namespaces with strict tenant access controls.",
    },
    {
      name: "AI Workforce (Agents)",
      role: "Specialized Digital Employees",
      icon: Users,
      purpose: "Autonomously execute routine operational, marketing, sales qualification, and support tasks.",
      benefits: "Operates 24/7 with sub-90-second response times across WhatsApp, Email, and live web chat.",
      governance: "Bounded capability scopes with mandatory manager approval for critical thresholds.",
      security: "Role-Based Access Control (RBAC) preventing unauthorized access to executive financial ledgers.",
    },
    {
      name: "AI Studio",
      role: "Creative Asset & Copy Engine",
      icon: Sparkles,
      purpose: "Generate branded marketing copy, high-converting funnel content, and visual creative assets.",
      benefits: "Maintains consistent company brand voice across all campaigns, ads, and landing pages.",
      governance: "Built-in brand safety filters preventing misleading claims or policy violations.",
      security: "All generated assets remain 100% customer intellectual property.",
    },
    {
      name: "Boardroom AI",
      role: "Strategic Multi-Perspective Advisor",
      icon: Compass,
      purpose: "Simulate proven business frameworks (Marketing, Finance, Operations, Innovation, Leadership).",
      benefits: "Stress-tests strategies from 5 distinct executive viewpoints before committing capital.",
      governance: "Explicitly framed as AI-generated conceptual viewpoints, not literal fiduciary human advice.",
      security: "Strategic inquiries are processed in private, zero-retention memory instances.",
    },
    {
      name: "Knowledge Engine",
      role: "Real-Time Document Ingestion",
      icon: Database,
      purpose: "Continuously parse, vectorize, and index multi-format business documents (PDF, DOCX, CSV).",
      benefits: "Keeps your digital workforce updated on latest pricing sheets, policies, and offers automatically.",
      governance: "Version-controlled knowledge revisions with rollback history and source attribution.",
      security: "Virus scanning, file sanitization, and AES-256 encrypted blob storage.",
    },
    {
      name: "Prompt Library",
      role: "Verified Enterprise Prompt Templates",
      icon: FileText,
      purpose: "Curated repository of tested, high-yield system prompts for diverse industry workflows.",
      benefits: "Standardizes output quality across team members and eliminates prompt engineering guesswork.",
      governance: "Admin-curated prompt templates with version locking and role-based sharing permissions.",
      security: "Prevents prompt injection vulnerabilities through rigorous input sanitation guardrails.",
    },
    {
      name: "Model Hub",
      role: "Multi-LLM Bring-Your-Own-Key",
      icon: Key,
      purpose: "Flexibly route tasks to OpenAI, Anthropic, Google Gemini, DeepSeek, or private models.",
      benefits: "Avoids vendor lock-in and allows using specialized models for specialized tasks (e.g. reasoning vs code).",
      governance: "Complete cost telemetry, token rate limits, and fallback routing configurations.",
      security: "Customer API keys are stored in encrypted hardware vaults with zero employee access.",
    },
  ];

  // 5 AI Principles
  const principles = [
    {
      num: "01",
      title: "AI Assists People",
      desc: "AI is designed to amplify human capability, remove administrative drudgery, and accelerate execution—not to replace human purpose or creative intuition.",
      icon: Sparkles,
    },
    {
      num: "02",
      title: "Humans Remain Accountable",
      desc: "While AI drafts, analyzes, and suggests, human leaders and managers retain final responsibility and accountability for all business and legal decisions.",
      icon: UserCheck,
    },
    {
      num: "03",
      title: "Transparency by Default",
      desc: "Every AI-generated suggestion, lead score, and recommendation is explainable, traceable to source documents, and clearly differentiated from human input.",
      icon: Eye,
    },
    {
      num: "04",
      title: "Security & Zero Model Training",
      desc: "Customer data, proprietary documents, and private customer conversations are never used to train public or commercial third-party foundation models.",
      icon: Lock,
    },
    {
      num: "05",
      title: "Real Business Outcomes",
      desc: "We measure AI not by hype or vanity metrics, but by tangible business impact: faster response times, reduced operating costs, and scalable revenue growth.",
      icon: TrendingUp,
    },
  ];

  // 6 Pillars of AI Safety Framework
  const safetyPillars = [
    {
      id: "oversight",
      title: "1. Human Oversight",
      icon: UserCheck,
      summary: "3-tier approval workflows ensuring humans maintain control over high-stakes operational dispatches.",
      points: [
        "Configurable autonomy levels (Full Auto, Manager Review, Executive Sign-Off)",
        "Instant emergency kill-switch across all active AI workforce agents",
        "Mandatory human review for bulk communications exceeding defined thresholds",
      ],
    },
    {
      id: "transparency",
      title: "2. Absolute Transparency",
      icon: Eye,
      summary: "Traceable reasoning with direct citations to verified internal company knowledge sources.",
      points: [
        "Source document citations for all answers provided by the AI Brain",
        "Clear labeling on all automated AI-generated customer messages",
        "Detailed confidence scores and reasoning pathways exposed in admin audit logs",
      ],
    },
    {
      id: "security",
      title: "3. Enterprise Security",
      icon: Lock,
      summary: "Bank-grade cryptographic defenses protecting corporate telemetry at every stage of the AI pipeline.",
      points: [
        "TLS 1.3 in-transit and AES-256 at-rest encryption across all databases",
        "Multi-Factor Authentication (MFA) and granular Role-Based Access Control (RBAC)",
        "Automated vulnerability scans, penetration testing, and immutable audit trails",
      ],
    },
    {
      id: "privacy",
      title: "4. Zero-Leakage Privacy",
      icon: Database,
      summary: "Strict multi-tenant cryptographic isolation ensuring your business data remains 100% sovereign.",
      points: [
        "Foundational Guarantee: ZERO training on customer data for external LLM models",
        "Isolated vector databases with tenant-scoped access keys",
        "1-click complete data export and purge upon account cancellation",
      ],
    },
    {
      id: "reliability",
      title: "5. Systemic Reliability",
      icon: ShieldCheck,
      summary: "Deterministic guardrails, automated fallbacks, and 99.9% high-availability architecture.",
      points: [
        "Multi-model fallback routing preventing downtime during upstream LLM outages",
        "Input & output sanitization guardrails to prevent hallucinated data schemas",
        "Continuous latency and accuracy telemetry monitored 24/7",
      ],
    },
    {
      id: "accountability",
      title: "6. Business Accountability",
      icon: Briefcase,
      summary: "Responsible deployment practices aligned with Indian DPDP, GDPR, and international safety guidelines.",
      points: [
        "Strict Acceptable Use enforcement prohibiting spam, fraud, or deceptive practices",
        "Dedicated Privacy & Governance Officer (Debasish Kabi, Founder & CEO)",
        "Custom Data Processing Addendums (DPAs) available for enterprise compliance",
      ],
    },
  ];

  // Boardroom AI Thinking Frameworks
  const boardroomPerspectives = [
    {
      name: "Marketing Thinking",
      theme: "Customer Acquisition & Positioning",
      icon: TrendingUp,
      quote: "How do we position this offer to maximize organic word-of-mouth and lower CAC by 40%?",
      framework: "Category Creation, Hook-Story-Offer architecture, and Multi-Touch Funnel Economics.",
    },
    {
      name: "Finance Thinking",
      theme: "Unit Economics & Cash Velocity",
      icon: LineChart,
      quote: "What is the payback period on this customer acquisition cohort, and how does it protect cash flow?",
      framework: "LTV:CAC Ratio optimization, Working Capital efficiency, and Recurring Revenue stability.",
    },
    {
      name: "Operations Thinking",
      theme: "Process Elimination & Scalability",
      icon: Workflow,
      quote: "Can this process run autonomously 1,000 times a day without adding headcount or latency?",
      framework: "Lean Bottleneck Analysis, 80/20 System Automation, and Standard Operating Procedures (SOPs).",
    },
    {
      name: "Innovation Thinking",
      theme: "Disruptive Advantage & Future Proofing",
      icon: Sparkles,
      quote: "What will our industry look like in 5 years, and how do we build the defensible moat today?",
      framework: "First Principles Thinking, AI-Native Business Architectures, and Zero-Marginal-Cost Delivery.",
    },
    {
      name: "Leadership Thinking",
      theme: "Mission Clarity & Organizational Focus",
      icon: Compass,
      quote: "Does this initiative align with our 10-year manifesto, and does it create real customer value?",
      framework: "Essentialism, Radical Transparency, Customer-Centric North Star alignment.",
    },
  ];

  // FAQs
  const faqs = [
    {
      q: "How does the Nova AI Assistant process business data?",
      a: "Nova utilizes an Ephemeral Retrieval-Augmented Generation (RAG) architecture. When you ask a question or request a workflow, Nova retrieves relevant context chunks from your encrypted AI Brain, generates the response inside a secure ephemeral memory buffer, and returns the answer. No prompt data is retained in LLM training buffers.",
    },
    {
      q: "Can I connect my own AI API keys (Bring Your Own Key / BYOK)?",
      a: "Yes! Automataiz Model Hub supports direct Bring-Your-Own-Key (BYOK) for OpenAI, Anthropic Claude, Google Gemini, DeepSeek, and custom private LLM endpoints. Your API keys are encrypted in a dedicated hardware key vault and all requests run under your sovereign enterprise contract.",
    },
    {
      q: "Who owns the data and content generated by Automataiz AI?",
      a: "You retain 100% sovereign ownership over all uploaded documents, customer records, SOPs, and AI-generated outputs. Automataiz claims zero intellectual property rights over your data.",
    },
    {
      q: "Are my company's documents used to train public AI models?",
      a: "No, absolutely not. We enforce a strict Zero-Model-Training policy. Neither Automataiz nor our underlying LLM infrastructure partners use your proprietary business documents or customer conversations to train public foundation models.",
    },
    {
      q: "Can AI make mistakes, and how does Automataiz prevent errors?",
      a: "Like all large language models, AI can occasionally generate imperfect copy or probabilistic predictions. Automataiz mitigates this through 3 robust layers: (1) Grounding all responses in verified AI Brain documents, (2) Deterministic output schema validations, and (3) Configurable 3-level human approval gates for critical actions.",
    },
    {
      q: "Can I control which staff members have access to AI capabilities?",
      a: "Yes. Our granular Role-Based Access Control (RBAC) allows administrators to specify exact permissions per team member—such as who can query financial telemetry, who can trigger mass AI campaigns, and who can edit the AI Brain knowledge repository.",
    },
    {
      q: "How do I remove or update knowledge stored in the AI Brain?",
      a: "You can add, modify, or permanently delete documents, URLs, or FAQs from your AI Brain at any time with a single click. When deleted, associated vector embeddings are purged immediately from active index storage.",
    },
    {
      q: "Can I disable specific AI features if our internal policy requires it?",
      a: "Yes. Every AI module (AI Agents, Nova Co-Pilot, Boardroom AI, AI SDR auto-response) can be toggled on or off at the workspace level by your organization administrator.",
    },
  ];

  return (
    <div className="pt-28 pb-24 relative overflow-hidden">
      {/* SECTION 01: CINEMATIC HERO */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative mb-20">
        {/* Ambient glow orbs */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[450px] glow-orb-green opacity-25 pointer-events-none" />
        <div className="absolute top-10 right-1/4 w-96 h-96 glow-orb-gold opacity-20 pointer-events-none" />

        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-brand-green/10 border border-brand-green/30 text-brand-green text-xs font-mono mb-4 shadow-glow-green/20">
          <ShieldCheck className="w-3.5 h-3.5" />
          <span>ENTERPRISE TRUST CENTER // AI SAFETY &amp; GOVERNANCE FRAMEWORK</span>
        </div>

        <h1 className="text-4xl sm:text-6xl lg:text-7xl font-display font-extrabold text-white tracking-tight max-w-5xl mx-auto leading-[1.1]">
          AI You Can Trust.{" "}
          <span className="text-gradient-green-gold block mt-2">
            Built For Real Businesses.
          </span>
        </h1>

        <p className="mt-6 text-base sm:text-xl text-neutral-300 max-w-3xl mx-auto leading-relaxed">
          Automataiz combines powerful AI capabilities with enterprise-grade governance, security, and human oversight to help businesses automate responsibly.
        </p>

        {/* Buttons */}
        <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
          <Link
            href="/product"
            className="px-7 py-3.5 rounded-xl text-xs font-bold text-black bg-gradient-to-r from-brand-green via-brand-lime to-brand-gold hover:opacity-95 transition-all shadow-glow-green/40 flex items-center gap-2"
          >
            <Sparkles className="w-4 h-4 text-black" />
            <span>Explore AI Suite</span>
          </Link>
          <Link
            href="/contact"
            className="px-7 py-3.5 rounded-xl text-xs font-semibold text-white bg-white/[0.08] hover:bg-white/[0.14] border border-white/[0.12] transition-all flex items-center gap-2"
          >
            <UserCheck className="w-4 h-4 text-brand-green" />
            <span>Contact Governance Desk</span>
          </Link>
        </div>

        {/* 4 Trust Metrics */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 max-w-5xl mx-auto mt-14 pt-8 border-t border-white/[0.08]">
          <div className="p-4 rounded-2xl bg-white/[0.02] border border-brand-green/30 text-center">
            <Lock className="w-5 h-5 text-brand-green mx-auto mb-1.5" />
            <div className="font-bold text-white text-sm">Zero Model Training</div>
            <div className="text-[11px] text-neutral-500 font-mono">100% Private Customer Vaults</div>
          </div>
          <div className="p-4 rounded-2xl bg-white/[0.02] border border-brand-gold/30 text-center">
            <UserCheck className="w-5 h-5 text-brand-gold mx-auto mb-1.5" />
            <div className="font-bold text-white text-sm">3-Tier Human Oversight</div>
            <div className="text-[11px] text-neutral-500 font-mono">Configurable Approval Gates</div>
          </div>
          <div className="p-4 rounded-2xl bg-white/[0.02] border border-brand-lime/30 text-center">
            <Key className="w-5 h-5 text-brand-lime mx-auto mb-1.5" />
            <div className="font-bold text-white text-sm">Multi-Model BYOK</div>
            <div className="text-[11px] text-neutral-500 font-mono">OpenAI • Gemini • Claude • DeepSeek</div>
          </div>
          <div className="p-4 rounded-2xl bg-white/[0.02] border border-white/[0.08] text-center">
            <ShieldCheck className="w-5 h-5 text-white mx-auto mb-1.5" />
            <div className="font-bold text-white text-sm">AES-256 &amp; TLS 1.3</div>
            <div className="text-[11px] text-neutral-500 font-mono">Bank-Grade Cryptography</div>
          </div>
        </div>
      </section>

      {/* SECTION 02: OUR AI PHILOSOPHY */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-24">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="text-xs font-mono uppercase tracking-widest text-brand-green font-bold mb-2">
            FOUNDATIONAL ETHOS
          </div>
          <h2 className="text-3xl sm:text-4xl font-display font-bold text-white">
            AI Should Empower Humans, Not Replace Judgment.
          </h2>
          <p className="text-neutral-400 text-sm mt-3">
            We believe the highest ROI occurs when intelligent algorithms handle repetitive computational heavy lifting, while human leadership directs strategic vision and empathy.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {principles.map((p, idx) => {
            const Icon = p.icon;
            return (
              <div
                key={idx}
                className="p-6 rounded-3xl glass-panel border border-white/[0.08] hover:border-brand-green/40 hover:-translate-y-1 transition-all duration-300 space-y-3 flex flex-col justify-between"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-xs text-brand-gold font-bold">
                      {p.num}
                    </span>
                    <div className="w-8 h-8 rounded-xl bg-white/[0.04] border border-white/[0.08] flex items-center justify-center text-brand-green">
                      <Icon className="w-4 h-4" />
                    </div>
                  </div>
                  <h3 className="font-display font-bold text-white text-base">
                    {p.title}
                  </h3>
                  <p className="text-xs text-neutral-400 leading-relaxed">
                    {p.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* SECTION 03: HOW AI WORKS IN AUTOMATAIZ (Interactive Diagram) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-24">
        <div className="p-8 sm:p-12 rounded-3xl glass-panel border border-brand-green/30 bg-gradient-to-br from-[#080808] via-[#0a1408] to-[#080808] space-y-10">
          <div className="text-center max-w-2xl mx-auto">
            <div className="text-xs font-mono uppercase tracking-widest text-brand-lime font-bold mb-2">
              PIPELINE ARCHITECTURE
            </div>
            <h2 className="text-3xl font-display font-bold text-white">
              How AI Works in Automataiz
            </h2>
            <p className="text-xs sm:text-sm text-neutral-300 mt-2">
              Trace the lifecycle of a business action through our governed, 6-stage intelligent pipeline.
            </p>
          </div>

          {/* Interactive Steps Bar */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-2">
            {workflowSteps.map((step, idx) => {
              const isSelected = activeWorkflowStep === idx;
              const StepIcon = step.icon;
              return (
                <button
                  key={step.id}
                  onClick={() => setActiveWorkflowStep(idx)}
                  className={`p-3.5 rounded-2xl text-left transition-all flex flex-col justify-between gap-3 border ${
                    isSelected
                      ? "bg-brand-green/20 border-brand-green text-white shadow-glow-green/30 scale-[1.02]"
                      : "bg-white/[0.02] border-white/[0.06] text-neutral-400 hover:text-white hover:bg-white/[0.05]"
                  }`}
                >
                  <div className="flex items-center justify-between w-full">
                    <span className="text-[10px] font-mono font-bold text-brand-gold">
                      0{idx + 1}
                    </span>
                    <StepIcon className={`w-4 h-4 ${isSelected ? "text-brand-green" : "text-neutral-500"}`} />
                  </div>
                  <div className="text-xs font-bold truncate">
                    {step.title.split(". ")[1]}
                  </div>
                </button>
              );
            })}
          </div>

          {/* Active Step Deep-Dive Showcase */}
          <div className="p-6 sm:p-8 rounded-3xl bg-black/60 border border-white/[0.1] grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8 space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-green/10 border border-brand-green/30 text-brand-green text-xs font-mono font-bold">
                STAGE {activeWorkflowStep + 1} OF 6 // {workflowSteps[activeWorkflowStep].badge}
              </div>
              <h3 className="text-2xl font-display font-bold text-white">
                {workflowSteps[activeWorkflowStep].title}:{" "}
                <span className="text-brand-lime">
                  {workflowSteps[activeWorkflowStep].subtitle}
                </span>
              </h3>
              <p className="text-sm text-neutral-300 leading-relaxed">
                {workflowSteps[activeWorkflowStep].desc}
              </p>

              <div className="pt-3 border-t border-white/[0.08] flex items-center gap-2 text-xs font-mono text-brand-gold">
                <ShieldCheck className="w-4 h-4 text-brand-green shrink-0" />
                <span>Security Assurance: {workflowSteps[activeWorkflowStep].security}</span>
              </div>
            </div>

            <div className="lg:col-span-4 p-6 rounded-2xl bg-white/[0.03] border border-white/[0.08] text-center space-y-3">
              <div className="w-16 h-16 rounded-2xl bg-brand-green/10 border border-brand-green/30 flex items-center justify-center text-brand-green mx-auto">
                {React.createElement(workflowSteps[activeWorkflowStep].icon, { className: "w-8 h-8" })}
              </div>
              <div className="font-mono text-xs text-white font-bold">
                Automataiz Governance Gate
              </div>
              <div className="text-[11px] text-neutral-400">
                Verified zero-leakage cryptographic barrier enforced at this transition point.
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 04: THE AI ECOSYSTEM (8 Cards) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-24">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="text-xs font-mono uppercase tracking-widest text-brand-green font-bold mb-2">
            MODULAR INTELLIGENCE
          </div>
          <h2 className="text-3xl sm:text-4xl font-display font-bold text-white">
            The 8 Pillars of the Automataiz AI Ecosystem
          </h2>
          <p className="text-neutral-400 text-sm mt-3">
            Every component in our intelligence suite is engineered with built-in governance, security guardrails, and tenant isolation.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {ecosystemComponents.map((comp, idx) => {
            const Icon = comp.icon;
            return (
              <div
                key={idx}
                className="p-6 rounded-3xl glass-panel border border-white/[0.08] hover:border-brand-gold/40 hover:-translate-y-1 transition-all duration-300 space-y-4 flex flex-col justify-between group"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <div className="w-10 h-10 rounded-xl bg-brand-green/10 border border-brand-green/30 flex items-center justify-center text-brand-green group-hover:scale-105 transition-transform">
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className="text-[10px] font-mono px-2 py-0.5 rounded-md bg-white/[0.04] text-neutral-400 border border-white/[0.06]">
                      Pillar 0{idx + 1}
                    </span>
                  </div>

                  <h3 className="font-display font-bold text-white text-lg">
                    {comp.name}
                  </h3>
                  <div className="text-xs font-mono text-brand-lime font-medium">
                    {comp.role}
                  </div>
                  <p className="text-xs text-neutral-300 leading-relaxed">
                    {comp.purpose}
                  </p>
                </div>

                <div className="pt-3 border-t border-white/[0.06] space-y-2 text-[11px]">
                  <div className="text-neutral-400">
                    <strong className="text-brand-gold block font-mono">Governance:</strong>
                    {comp.governance}
                  </div>
                  <div className="text-neutral-500">
                    <strong className="text-white block font-mono">Security:</strong>
                    {comp.security}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* SECTION 05, 06, 07: FEATURE SPOTLIGHTS (Nova AI, AI Brain, AI Workforce) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-24 space-y-12">
        {/* Spotlight 1: Nova AI Assistant */}
        <div className="p-8 sm:p-12 rounded-3xl glass-panel border border-brand-green/30 bg-gradient-to-r from-black via-[#0a1808] to-black grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-7 space-y-5">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-brand-green/10 border border-brand-green/30 text-brand-green text-xs font-mono font-bold">
              FEATURE SPOTLIGHT // NOVA AI ASSISTANT
            </div>
            <h3 className="text-3xl sm:text-4xl font-display font-bold text-white">
              Your Unified AI Operating Co-Pilot
            </h3>
            <p className="text-sm text-neutral-300 leading-relaxed">
              Nova is the conversational intelligence layer embedded across your entire Automataiz dashboard. Ask questions, query pipeline analytics, generate multi-channel marketing campaigns, assemble workflows, and synthesize executive reports in seconds.
            </p>

            <div className="grid grid-cols-2 gap-2.5 text-xs text-neutral-300 pt-2">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-brand-green shrink-0" />
                <span>Instant Query of CRM Records</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-brand-green shrink-0" />
                <span>Automated Funnel Copywriting</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-brand-green shrink-0" />
                <span>One-Click Workflow Synthesis</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-brand-green shrink-0" />
                <span>Source-Grounded Reasoning</span>
              </div>
            </div>

            <div className="p-4 rounded-2xl bg-white/[0.02] border border-white/[0.08] text-xs text-neutral-400">
              <strong className="text-brand-gold font-mono block mb-1">Governance Notice:</strong>
              Nova provides assistive recommendations and automated drafts. Human operators retain final decision-making authority over all commercial and strategic operations.
            </div>
          </div>

          <div className="lg:col-span-5 p-6 rounded-2xl bg-black/80 border border-white/[0.1] font-mono text-xs space-y-3">
            <div className="flex items-center justify-between border-b border-white/[0.08] pb-2 text-neutral-400">
              <div className="flex items-center gap-2">
                <Bot className="w-4 h-4 text-brand-green" />
                <span className="text-white font-bold">Nova Co-Pilot Console</span>
              </div>
              <span className="text-[10px] text-brand-lime">Live Session (Encrypted)</span>
            </div>
            <div className="p-3 rounded-xl bg-white/[0.03] text-neutral-300 text-[11px]">
              &gt; User: &quot;Analyze last month&apos;s WhatsApp campaign conversion and suggest 3 high-converting follow-up angles.&quot;
            </div>
            <div className="p-3 rounded-xl bg-brand-green/10 border border-brand-green/20 text-neutral-200 text-[11px] space-y-1.5">
              <div className="text-brand-green font-bold flex items-center gap-1.5">
                <Sparkles className="w-3 h-3" /> Nova AI (Grounding from CRM + AI Brain):
              </div>
              <p>• Campaign &apos;Diwali Booster&apos; generated 1,420 leads with 18.4% conversion.</p>
              <p>• Angle 1: Scarcity flash credit (48h expiration).</p>
              <p>• Angle 2: 1-on-1 founder strategy session bonus.</p>
              <div className="text-[9px] text-neutral-400 pt-1">Status: Ready for Human Approval</div>
            </div>
          </div>
        </div>

        {/* Spotlight 2: AI Brain */}
        <div className="p-8 sm:p-12 rounded-3xl glass-panel border border-brand-gold/30 bg-gradient-to-r from-black via-[#141005] to-black grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-5 order-2 lg:order-1 p-6 rounded-2xl bg-black/80 border border-white/[0.1] space-y-4">
            <div className="text-xs font-mono font-bold text-brand-gold flex items-center gap-2">
              <BrainCircuit className="w-4 h-4" />
              <span>Vector Knowledge Store Registry</span>
            </div>
            <div className="space-y-2 text-xs">
              {[
                { name: "Company_SOP_Master_2026.pdf", chunks: "142 vectors", status: "Indexed" },
                { name: "Product_Pricing_Catalog_v4.xlsx", chunks: "88 vectors", status: "Indexed" },
                { name: "Customer_Support_FAQ_Database.json", chunks: "320 vectors", status: "Indexed" },
                { name: "Brand_Voice_Guidelines.docx", chunks: "45 vectors", status: "Indexed" },
              ].map((doc, i) => (
                <div key={i} className="p-2.5 rounded-xl bg-white/[0.02] border border-white/[0.05] flex items-center justify-between">
                  <div className="truncate pr-2 text-neutral-300">{doc.name}</div>
                  <span className="text-[10px] font-mono text-brand-green shrink-0">{doc.status}</span>
                </div>
              ))}
            </div>
            <div className="text-[10px] font-mono text-neutral-500 text-center">
              100% Isolated Cryptographic Tenant Vault
            </div>
          </div>

          <div className="lg:col-span-7 order-1 lg:order-2 space-y-5">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-brand-gold/10 border border-brand-gold/30 text-brand-gold text-xs font-mono font-bold">
              FEATURE SPOTLIGHT // AI BRAIN
            </div>
            <h3 className="text-3xl sm:text-4xl font-display font-bold text-white">
              Private Knowledge. Zero Fine-Tuning Leakage.
            </h3>
            <p className="text-sm text-neutral-300 leading-relaxed">
              Upload your company policies, product sheets, training manuals, and FAQs. The AI Brain converts your enterprise IP into private vector embeddings so your digital workforce speaks with complete domain mastery.
            </p>
            <div className="p-4 rounded-2xl bg-white/[0.02] border border-white/[0.08] text-xs text-neutral-400">
              <strong className="text-white font-mono block mb-1">Total Sovereign Control:</strong>
              You own your knowledge base. You can update documents in real time or purge entire indexes with 1 click.
            </div>
          </div>
        </div>

        {/* Spotlight 3: AI Agents Digital Workforce */}
        <div className="p-8 sm:p-12 rounded-3xl glass-panel border border-brand-lime/30 bg-gradient-to-r from-black via-[#0c1808] to-black space-y-8">
          <div className="max-w-3xl space-y-3">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-brand-lime/10 border border-brand-lime/30 text-brand-lime text-xs font-mono font-bold">
              FEATURE SPOTLIGHT // DIGITAL WORKFORCE
            </div>
            <h3 className="text-3xl sm:text-4xl font-display font-bold text-white">
              Autonomous Agents. Bounded Capabilities.
            </h3>
            <p className="text-sm text-neutral-300 leading-relaxed">
              Deploy autonomous AI agents across Sales, Marketing, Support, Operations, and Finance. Agents operate under strict permission boundaries with full audit logs and customizable human intervention gates.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { role: "AI SDR & Lead Qualifier", duty: "Engages leads under 90 seconds on WhatsApp & web chat to qualify budget and timing.", autonomy: "Level 1: Auto" },
              { role: "AI Marketing Manager", duty: "Drafts email newsletters, SMS blasts, and social media hooks tailored to your brand voice.", autonomy: "Level 2: Manager Review" },
              { role: "AI Support Specialist", duty: "Resolves tier-1 FAQs, tracks shipment/ticket status, and escalates complex queries.", autonomy: "Level 1: Auto" },
              { role: "AI Financial Analyst", duty: "Tracks recurring revenue, flags churn risks, and prepares weekly executive ledger briefings.", autonomy: "Level 3: Executive Review" },
            ].map((agent, idx) => (
              <div key={idx} className="p-5 rounded-2xl bg-black/60 border border-white/[0.08] space-y-3 flex flex-col justify-between">
                <div className="space-y-2">
                  <div className="font-mono text-xs font-bold text-brand-green">
                    AGENT #0{idx + 1}
                  </div>
                  <h4 className="font-display font-bold text-white text-base">
                    {agent.role}
                  </h4>
                  <p className="text-xs text-neutral-400 leading-relaxed">
                    {agent.duty}
                  </p>
                </div>
                <div className="pt-2 border-t border-white/[0.06] text-[10px] font-mono text-brand-gold">
                  Governance: {agent.autonomy}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 08: BOARDROOM AI */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-24">
        <div className="p-8 sm:p-12 rounded-3xl glass-panel border border-brand-gold/30 bg-gradient-to-br from-[#0c1406] via-black to-[#141206] space-y-10">
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-brand-gold/10 border border-brand-gold/30 text-brand-gold text-xs font-mono font-bold">
              EXECUTIVE ADVISORY // BOARDROOM AI
            </div>
            <h2 className="text-3xl sm:text-4xl font-display font-bold text-white">
              Advisory Intelligence For Better Strategic Decisions
            </h2>
            <p className="text-xs sm:text-sm text-neutral-300 leading-relaxed">
              Boardroom AI simulates strategic perspectives inspired by world-class business frameworks. Stress-test ideas before committing resources.
            </p>
          </div>

          {/* Perspective Selector Tabs */}
          <div className="flex items-center justify-center gap-2 flex-wrap">
            {boardroomPerspectives.map((p, idx) => (
              <button
                key={idx}
                onClick={() => setActiveBoardroomTopic(idx)}
                className={`px-4 py-2 rounded-xl text-xs font-mono transition-all flex items-center gap-2 ${
                  activeBoardroomTopic === idx
                    ? "bg-brand-gold text-black font-bold shadow-glow-gold/40 scale-105"
                    : "bg-white/[0.04] text-neutral-400 hover:text-white border border-white/[0.08]"
                }`}
              >
                {React.createElement(p.icon, { className: "w-3.5 h-3.5" })}
                <span>{p.name}</span>
              </button>
            ))}
          </div>

          {/* Active Perspective Display */}
          <div className="p-6 sm:p-8 rounded-2xl bg-black/70 border border-brand-gold/20 max-w-4xl mx-auto space-y-4">
            <div className="flex items-center justify-between border-b border-white/[0.08] pb-3">
              <span className="text-xs font-mono text-brand-gold uppercase tracking-wider font-bold">
                {boardroomPerspectives[activeBoardroomTopic].theme}
              </span>
              <span className="text-[10px] font-mono text-neutral-500">
                Framework Simulation Mode
              </span>
            </div>

            <div className="text-base sm:text-lg font-display font-semibold text-white italic">
              &ldquo;{boardroomPerspectives[activeBoardroomTopic].quote}&rdquo;
            </div>

            <div className="text-xs text-neutral-300">
              <strong className="text-brand-lime font-mono block mb-1">Underlying Concept Framework:</strong>
              {boardroomPerspectives[activeBoardroomTopic].framework}
            </div>

            <div className="p-3 rounded-xl bg-white/[0.02] border border-white/[0.05] text-[11px] text-neutral-400">
              <em>Note:</em> Boardroom AI synthesizes publicly documented management concepts and frameworks. It is designed for conceptual scenario modeling and does not constitute fiduciary or legal advice.
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 09: MODEL HUB (Bring Your Own Key) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-24">
        <div className="p-8 sm:p-12 rounded-3xl glass-panel border border-brand-green/30 bg-gradient-to-br from-[#060e06] via-black to-[#060e06] space-y-8">
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-brand-green/10 border border-brand-green/30 text-brand-green text-xs font-mono font-bold">
              MODEL AGNOSTIC // MULTI-LLM HUB
            </div>
            <h2 className="text-3xl sm:text-4xl font-display font-bold text-white">
              Bring Your Own Key (BYOK) or Use Managed Compute
            </h2>
            <p className="text-xs sm:text-sm text-neutral-300 leading-relaxed">
              Connect your own direct enterprise API keys or utilize our pre-configured high-speed managed clusters. Zero vendor lock-in.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { name: "OpenAI", model: "GPT-4o & o1-preview", desc: "Best-in-class multi-modal reasoning and tool calling.", status: "Supported (BYOK)" },
              { name: "Google", model: "Gemini 1.5 Pro", desc: "2-million token context window for massive document reasoning.", status: "Supported (BYOK)" },
              { name: "Anthropic", model: "Claude 3.5 Sonnet", desc: "Unmatched code generation and nuanced copywriting quality.", status: "Supported (BYOK)" },
              { name: "DeepSeek", model: "DeepSeek-V3 & R1", desc: "High-efficiency open reasoning models with ultra-low latency.", status: "Supported (BYOK)" },
            ].map((llm, idx) => (
              <div key={idx} className="p-5 rounded-2xl bg-black/60 border border-white/[0.08] hover:border-brand-green/40 transition-all space-y-2">
                <div className="flex items-center justify-between">
                  <span className="font-display font-bold text-white text-base">{llm.name}</span>
                  <span className="text-[10px] font-mono text-brand-green">{llm.status}</span>
                </div>
                <div className="text-xs font-mono text-brand-gold">{llm.model}</div>
                <p className="text-xs text-neutral-400 leading-relaxed">{llm.desc}</p>
              </div>
            ))}
          </div>

          <div className="p-4 rounded-2xl bg-white/[0.02] border border-white/[0.08] text-center text-xs text-neutral-400 max-w-2xl mx-auto">
            <Key className="w-4 h-4 text-brand-gold mx-auto mb-1" />
            <strong className="text-white">Hardware Key Security:</strong> Customer API keys are stored in encrypted environment vaults and dispatched directly to model providers with zero middleman logging.
          </div>
        </div>
      </section>

      {/* SECTION 11: AI SAFETY FRAMEWORK (6 Pillars Matrix) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-24">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="text-xs font-mono uppercase tracking-widest text-brand-green font-bold mb-2">
            GOVERNANCE MATRIX
          </div>
          <h2 className="text-3xl sm:text-4xl font-display font-bold text-white">
            The 6 Pillars of the Automataiz Safety Framework
          </h2>
          <p className="text-neutral-400 text-sm mt-3">
            Click on any pillar to inspect the underlying architectural safeguards and compliance policies.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {safetyPillars.map((pillar, idx) => {
            const Icon = pillar.icon;
            return (
              <div
                key={pillar.id}
                className="p-6 sm:p-8 rounded-3xl glass-panel border border-white/[0.08] hover:border-brand-green/40 hover:-translate-y-1 transition-all duration-300 space-y-4"
              >
                <div className="flex items-center justify-between">
                  <div className="w-10 h-10 rounded-2xl bg-brand-green/10 border border-brand-green/30 flex items-center justify-center text-brand-green">
                    <Icon className="w-5 h-5" />
                  </div>
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded-md bg-white/[0.04] text-brand-gold border border-white/[0.06]">
                    Pillar 0{idx + 1}
                  </span>
                </div>

                <h3 className="font-display font-bold text-white text-xl">
                  {pillar.title}
                </h3>
                <p className="text-xs text-neutral-300 leading-relaxed">
                  {pillar.summary}
                </p>

                <div className="pt-3 border-t border-white/[0.06] space-y-2">
                  {pillar.points.map((pt, i) => (
                    <div key={i} className="flex items-start gap-2 text-xs text-neutral-400">
                      <CheckCircle2 className="w-3.5 h-3.5 text-brand-green shrink-0 mt-0.5" />
                      <span>{pt}</span>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* SECTION 13: RESPONSIBLE AI CODE OF CONDUCT */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-24">
        <div className="p-8 sm:p-12 rounded-3xl glass-panel border border-red-500/30 bg-gradient-to-br from-[#120606] via-black to-[#120606] space-y-6">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-500/10 border border-red-500/30 text-red-400 text-xs font-mono font-bold">
              ETHICS &amp; COMPLIANCE // CODE OF CONDUCT
            </div>
            <h2 className="text-3xl font-display font-bold text-white">
              Prohibited Uses &amp; Enforcement
            </h2>
            <p className="text-xs sm:text-sm text-neutral-400">
              Automataiz maintains strict zero-tolerance policies against malicious deployment. The following activities result in immediate account suspension:
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 text-xs">
            {[
              { title: "Spam & Mass Harassment", desc: "Sending unsolicited broadcasts violating telecom, WhatsApp, or email DLT anti-spam rules." },
              { title: "Fraud & Deceptive Schemes", desc: "Deploying AI agents to execute deceptive financial schemes or fraudulent claims." },
              { title: "Misinformation & Impersonation", desc: "Generating misleading medical, financial, or legal advice impersonating licensed professionals." },
              { title: "Malware & Exploits", desc: "Attempting to reverse-engineer prompts, extract training data, or inject malicious payloads." },
              { title: "Harassment & Hate Speech", desc: "Generating discriminatory, defamatory, or abusive content targeting individuals." },
              { title: "Unauthorized Telecalling Abuse", desc: "Running robocalling or voice spam campaigns bypassing regulatory consent lists." },
            ].map((rule, idx) => (
              <div key={idx} className="p-4 rounded-2xl bg-white/[0.02] border border-red-500/20 space-y-1">
                <div className="font-mono text-red-400 font-bold text-xs flex items-center gap-1.5">
                  <span>✕</span>
                  <span>{rule.title}</span>
                </div>
                <p className="text-neutral-400 text-[11px] leading-relaxed">{rule.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 14: HUMAN + AI COLLABORATION (Split Screen) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-24">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="text-xs font-mono uppercase tracking-widest text-brand-green font-bold mb-2">
            SYNERGISTIC ARCHITECTURE
          </div>
          <h2 className="text-3xl sm:text-4xl font-display font-bold text-white">
            The Best Results Come From Humans &amp; AI Working Together
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Human Pillar */}
          <div className="p-8 rounded-3xl glass-panel border border-brand-gold/30 bg-gradient-to-br from-[#120f04] to-black space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-2xl bg-brand-gold/20 border border-brand-gold/40 flex items-center justify-center text-brand-gold">
                <UserCheck className="w-6 h-6" />
              </div>
              <div>
                <h3 className="font-display font-bold text-xl text-white">
                  Human Intelligence
                </h3>
                <span className="text-xs font-mono text-brand-gold">
                  Leadership, Vision &amp; Moral Judgment
                </span>
              </div>
            </div>
            <ul className="space-y-2 text-xs text-neutral-300 pt-2">
              <li className="flex items-center gap-2">
                <span className="text-brand-gold font-bold">•</span>
                <span>Sets strategic direction, company values, and long-term vision</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="text-brand-gold font-bold">•</span>
                <span>Builds genuine human trust and empathetic relationships with clients</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="text-brand-gold font-bold">•</span>
                <span>Provides ethical boundary decisions and final commercial sign-off</span>
              </li>
            </ul>
          </div>

          {/* AI Pillar */}
          <div className="p-8 rounded-3xl glass-panel border border-brand-green/30 bg-gradient-to-br from-[#061406] to-black space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-2xl bg-brand-green/20 border border-brand-green/40 flex items-center justify-center text-brand-green">
                <Bot className="w-6 h-6" />
              </div>
              <div>
                <h3 className="font-display font-bold text-xl text-white">
                  AI Acceleration
                </h3>
                <span className="text-xs font-mono text-brand-green">
                  Speed, Scale &amp; 24/7 Consistency
                </span>
              </div>
            </div>
            <ul className="space-y-2 text-xs text-neutral-300 pt-2">
              <li className="flex items-center gap-2">
                <span className="text-brand-green font-bold">•</span>
                <span>Responds to leads in &lt; 90 seconds across WhatsApp, SMS, and Web</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="text-brand-green font-bold">•</span>
                <span>Instantly synthesizes thousands of customer interactions and data points</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="text-brand-green font-bold">•</span>
                <span>Executes repetitive multi-step workflows with zero fatigue</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* SECTION 16: FREQUENTLY ASKED QUESTIONS */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mb-24">
        <div className="text-center max-w-2xl mx-auto mb-10">
          <div className="text-xs font-mono uppercase tracking-widest text-brand-green font-bold mb-2">
            FREQUENTLY ASKED QUESTIONS
          </div>
          <h2 className="text-3xl font-display font-bold text-white">
            Common Questions on AI Safety &amp; Governance
          </h2>
        </div>

        <div className="space-y-3">
          {faqs.map((faq, idx) => {
            const isOpen = openFaq === idx;
            return (
              <div
                key={idx}
                className="p-5 rounded-2xl glass-panel border border-white/[0.08] hover:border-brand-green/30 transition-all"
              >
                <button
                  onClick={() => setOpenFaq(isOpen ? null : idx)}
                  className="w-full text-left flex items-center justify-between gap-4"
                >
                  <span className="font-display font-bold text-white text-sm sm:text-base">
                    {faq.q}
                  </span>
                  <ChevronDown
                    className={`w-4 h-4 text-brand-green shrink-0 transition-transform ${
                      isOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>
                {isOpen && (
                  <p className="mt-3 text-xs sm:text-sm text-neutral-300 leading-relaxed pt-3 border-t border-white/[0.06]">
                    {faq.a}
                  </p>
                )}
              </div>
            );
          })}
        </div>
      </section>

      {/* SECTION 17: FINAL CTA */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="p-8 sm:p-14 rounded-3xl glass-panel border border-brand-green/40 bg-gradient-to-r from-black via-[#0a1808] to-black relative overflow-hidden shadow-glow-green/20">
          <div className="absolute -top-20 -right-20 w-80 h-80 bg-brand-green/20 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute -bottom-20 -left-20 w-80 h-80 bg-brand-gold/20 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-brand-green/10 border border-brand-green/30 text-brand-green text-xs font-mono font-bold">
              THE FUTURE OF BUSINESS. AUTOMATED RESPONSIBLY.
            </div>

            <h2 className="text-3xl sm:text-5xl font-display font-extrabold text-white tracking-tight">
              Build With AI.{" "}
              <span className="text-gradient-green-gold block mt-1">
                Operate With Confidence.
              </span>
            </h2>

            <p className="text-neutral-300 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed">
              Automataiz helps businesses automate responsibly with powerful AI, enterprise-grade controls, and human-centered governance.
            </p>

            <div className="pt-2 flex flex-wrap items-center justify-center gap-4">
              <Link
                href="/contact"
                className="px-8 py-4 rounded-xl text-xs font-bold text-black bg-gradient-to-r from-brand-green via-brand-lime to-brand-gold hover:opacity-95 transition-all shadow-glow-green/40 flex items-center gap-2"
              >
                <UserCheck className="w-4 h-4 text-black" />
                <span>Book a Guided Platform Tour</span>
              </Link>
              <Link
                href="/product"
                className="px-8 py-4 rounded-xl text-xs font-semibold text-white bg-white/[0.08] hover:bg-white/[0.14] border border-white/[0.12] transition-all flex items-center gap-2"
              >
                <Sparkles className="w-4 h-4 text-brand-green" />
                <span>Explore the AI Suite</span>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
