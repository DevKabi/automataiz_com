"use client";

import React, { useState } from "react";
import {
  Wrench,
  Megaphone,
  Bot,
  Users2,
  GraduationCap,
  Settings,
  Mail,
  MessageSquare,
  Smartphone,
  PhoneCall,
  Radio,
  GitFork,
  Layout,
  FileSpreadsheet,
  HelpCircle,
  Sparkles,
  BarChart3,
  CreditCard,
  Share2,
  Calendar,
  Wallet,
  BookOpen,
  UserCheck,
  Users,
  MessagesSquare,
  Trophy,
  UserCog,
  Lock,
  ShoppingBag,
  CheckSquare,
  Activity,
  School,
  Search,
  ArrowRight,
  CheckCircle2,
  ExternalLink,
} from "lucide-react";

export interface ServiceCard {
  id: string;
  name: string;
  category: "builders" | "marketing" | "ai-suite" | "crm-sales" | "learning-community" | "operations";
  categoryLabel: string;
  icon: any;
  desc: string;
  isNew?: boolean;
  colorScheme: {
    bg: string;
    border: string;
    iconBg: string;
    iconColor: string;
    badgeColor?: string;
  };
  highlights: string[];
}

export const APP_HUB_SERVICES: ServiceCard[] = [
  // 1. Builders
  {
    id: "website-builder",
    name: "Website Builder",
    category: "builders",
    categoryLabel: "Builders",
    icon: Layout,
    desc: "Build ultra-fast, responsive, SEO-ready business websites with drag-and-drop simplicity and zero code.",
    colorScheme: {
      bg: "from-brand-green/10 to-transparent",
      border: "border-brand-green/30 hover:border-brand-green/60",
      iconBg: "bg-brand-green/20 border-brand-green/40",
      iconColor: "text-brand-green",
    },
    highlights: ["Drag & Drop Canvas", "Lightning Fast CDN", "Built-in SEO Suite", "Custom Domain Mapping"],
  },
  {
    id: "funnel-builder",
    name: "Funnel Builder",
    category: "builders",
    categoryLabel: "Builders",
    icon: GitFork,
    desc: "Design high-converting multi-step lead capture, appointment, webinar, and checkout funnels with 1-click upsells.",
    colorScheme: {
      bg: "from-brand-gold/10 to-transparent",
      border: "border-brand-gold/30 hover:border-brand-gold/60",
      iconBg: "bg-brand-gold/20 border-brand-gold/40",
      iconColor: "text-brand-gold",
    },
    highlights: ["1-Click Upsells & Downsells", "A/B Split Testing", "Order Bumps", "Automated Checkout"],
  },
  {
    id: "form-builder",
    name: "Forms & Surveys",
    category: "builders",
    categoryLabel: "Builders",
    icon: FileSpreadsheet,
    desc: "Capture rich customer data with smart conditional logic, multi-step questionnaires, and instant CRM sync.",
    colorScheme: {
      bg: "from-brand-lime/10 to-transparent",
      border: "border-brand-lime/30 hover:border-brand-lime/60",
      iconBg: "bg-brand-lime/20 border-brand-lime/40",
      iconColor: "text-brand-lime",
    },
    highlights: ["Conditional Logic", "File Uploads", "Instant Lead Webhooks", "Embedded Quiz Flows"],
  },
  {
    id: "chat-builder",
    name: "Chat Widget Builder",
    category: "builders",
    categoryLabel: "Builders",
    icon: MessageSquare,
    desc: "Deploy customized floating chat widgets that convert website visitors into real-time WhatsApp or CRM conversations.",
    colorScheme: {
      bg: "from-blue-500/10 to-transparent",
      border: "border-blue-500/30 hover:border-blue-500/60",
      iconBg: "bg-blue-500/20 border-blue-500/40",
      iconColor: "text-blue-400",
    },
    highlights: ["Custom Colors & Avatars", "Automated Greeting Bots", "WhatsApp Direct Redirect", "Mobile Friendly"],
  },

  // 2. Marketing
  {
    id: "emails",
    name: "Emails",
    category: "marketing",
    categoryLabel: "Marketing",
    icon: Mail,
    desc: "Design beautiful email campaigns, automate sequences, and analyze open rates and conversions.",
    colorScheme: {
      bg: "from-sky-500/10 to-transparent",
      border: "border-sky-500/30 hover:border-sky-500/60",
      iconBg: "bg-sky-500/20 border-sky-500/40",
      iconColor: "text-sky-400",
    },
    highlights: ["Drag & Drop Visual Email Designer", "Automated Drip Sequences", "Smart Subject Line AI", "Real-Time Open Tracking"],
  },
  {
    id: "whatsapp-sender",
    name: "WhatsApp Sender",
    category: "marketing",
    categoryLabel: "Marketing",
    icon: MessageSquare,
    desc: "Send personalized WhatsApp messages, broadcast to segments, and track engagement in real-time.",
    colorScheme: {
      bg: "from-sky-500/10 to-transparent",
      border: "border-sky-500/30 hover:border-sky-500/60",
      iconBg: "bg-sky-500/20 border-sky-500/40",
      iconColor: "text-sky-400",
    },
    highlights: ["Personalized Merge Tags", "Segmented Broadcasts", "Live Read Receipts", "Automated Interactive Replies"],
  },
  {
    id: "waba",
    name: "WABA",
    category: "marketing",
    categoryLabel: "Marketing",
    icon: MessageSquare,
    desc: "Connect through official WhatsApp Business API for verified business messaging at scale.",
    colorScheme: {
      bg: "from-sky-500/10 to-transparent",
      border: "border-sky-500/30 hover:border-sky-500/60",
      iconBg: "bg-sky-500/20 border-sky-500/40",
      iconColor: "text-sky-400",
    },
    highlights: ["Meta Official Green Tick Support", "High-Volume Message Delivery", "Approved Template Manager", "Zero Ban Risk Architecture"],
  },
  {
    id: "sms",
    name: "SMS",
    category: "marketing",
    categoryLabel: "Marketing",
    icon: Smartphone,
    desc: "Send targeted SMS campaigns with scheduling, personalization, and detailed delivery analytics.",
    colorScheme: {
      bg: "from-sky-500/10 to-transparent",
      border: "border-sky-500/30 hover:border-sky-500/60",
      iconBg: "bg-sky-500/20 border-sky-500/40",
      iconColor: "text-sky-400",
    },
    highlights: ["DLT Compliant Routing", "Instant OTP & Notifications", "Dynamic Short-Links", "Click-Through Analytics"],
  },
  {
    id: "ivr-calls",
    name: "IVR Calls",
    category: "marketing",
    categoryLabel: "Marketing",
    icon: PhoneCall,
    desc: "Set up interactive voice response systems with call routing, recording, and automated responses.",
    colorScheme: {
      bg: "from-sky-500/10 to-transparent",
      border: "border-sky-500/30 hover:border-sky-500/60",
      iconBg: "bg-sky-500/20 border-sky-500/40",
      iconColor: "text-sky-400",
    },
    highlights: ["Multi-Level Voice Menus", "Smart Department Routing", "Automated Voice Broadcasts", "Call Recording & Logs"],
  },
  {
    id: "bulk-campaigns",
    name: "Bulk Campaigns",
    category: "marketing",
    categoryLabel: "Marketing",
    icon: Radio,
    desc: "Launch mass campaigns across email, SMS, and WhatsApp simultaneously with unified analytics.",
    colorScheme: {
      bg: "from-sky-500/10 to-transparent",
      border: "border-sky-500/30 hover:border-sky-500/60",
      iconBg: "bg-sky-500/20 border-sky-500/40",
      iconColor: "text-sky-400",
    },
    highlights: ["Cross-Channel Blaster", "Smart Throttling", "Unified Conversion Dashboard", "Audience Exclusion Filters"],
  },
  {
    id: "workflow-automation",
    name: "Workflow Automation",
    category: "marketing",
    categoryLabel: "Marketing",
    icon: GitFork,
    desc: "Create complex automation sequences with triggers, conditions, and multi-channel actions.",
    colorScheme: {
      bg: "from-sky-500/10 to-transparent",
      border: "border-sky-500/30 hover:border-sky-500/60",
      iconBg: "bg-sky-500/20 border-sky-500/40",
      iconColor: "text-sky-400",
    },
    highlights: ["Visual Branching Builder", "Multi-Action Webhooks", "Behavioral If/Else Logic", "Time-Delayed Journeys"],
  },

  // 3. AI Suite (NEW)
  {
    id: "ai-dashboard",
    name: "AI Dashboard",
    category: "ai-suite",
    categoryLabel: "AI Suite",
    icon: Layout,
    desc: "Central command center to monitor all AI activities, performance metrics, and automation health.",
    isNew: true,
    colorScheme: {
      bg: "from-pink-500/10 to-transparent",
      border: "border-pink-500/30 hover:border-pink-500/60",
      iconBg: "bg-pink-500/20 border-pink-500/40",
      iconColor: "text-pink-400",
      badgeColor: "bg-brand-green/20 text-brand-green border-brand-green/40",
    },
    highlights: ["Live Token & Cost Telemetry", "Agent Performance Gauges", "Autonomous Task Health", "Accuracy & Quality Metrics"],
  },
  {
    id: "ai-brain",
    name: "AI Brain",
    category: "ai-suite",
    categoryLabel: "AI Suite",
    icon: Bot,
    desc: "Train your AI with custom data, FAQs, and business knowledge for intelligent responses.",
    isNew: true,
    colorScheme: {
      bg: "from-pink-500/10 to-transparent",
      border: "border-pink-500/30 hover:border-pink-500/60",
      iconBg: "bg-pink-500/20 border-pink-500/40",
      iconColor: "text-pink-400",
      badgeColor: "bg-brand-green/20 text-brand-green border-brand-green/40",
    },
    highlights: ["SOP & PDF Ingestion", "Vector Knowledge Store", "Zero-Hallucination Guardrails", "Multi-Department Memory"],
  },
  {
    id: "ai-funnels",
    name: "AI Funnels",
    category: "ai-suite",
    categoryLabel: "AI Suite",
    icon: Sparkles,
    desc: "Let AI optimize your funnels with automatic A/B testing and conversion improvements.",
    isNew: true,
    colorScheme: {
      bg: "from-pink-500/10 to-transparent",
      border: "border-pink-500/30 hover:border-pink-500/60",
      iconBg: "bg-pink-500/20 border-pink-500/40",
      iconColor: "text-pink-400",
      badgeColor: "bg-brand-green/20 text-brand-green border-brand-green/40",
    },
    highlights: ["Dynamic Headline Generation", "Automated A/B Optimization", "Drop-Off Heatmap AI", "Predictive Conversion Scoring"],
  },
  {
    id: "ai-agent-inbox",
    name: "AI Agent Inbox",
    category: "ai-suite",
    categoryLabel: "AI Suite",
    icon: Bot,
    desc: "AI-powered inbox that auto-responds, qualifies leads, and routes conversations intelligently.",
    isNew: true,
    colorScheme: {
      bg: "from-pink-500/10 to-transparent",
      border: "border-pink-500/30 hover:border-pink-500/60",
      iconBg: "bg-pink-500/20 border-pink-500/40",
      iconColor: "text-pink-400",
      badgeColor: "bg-brand-green/20 text-brand-green border-brand-green/40",
    },
    highlights: ["Sub-90s Auto-Replies", "BANT Lead Qualification", "Calendar Booking Automation", "Human Escalation Handoff"],
  },

  // 4. CRM & Sales
  {
    id: "crm",
    name: "CRM",
    category: "crm-sales",
    categoryLabel: "CRM & Sales",
    icon: Users2,
    desc: "Manage customer relationships, track every interaction, and automate follow-ups intelligently.",
    colorScheme: {
      bg: "from-emerald-500/10 to-transparent",
      border: "border-emerald-500/30 hover:border-emerald-500/60",
      iconBg: "bg-emerald-500/20 border-emerald-500/40",
      iconColor: "text-emerald-400",
    },
    highlights: ["Visual Kanban Pipeline", "Complete Timeline Memory", "Custom Field Builder", "Lead Scoring Engine"],
  },
  {
    id: "analytics",
    name: "Analytics",
    category: "crm-sales",
    categoryLabel: "CRM & Sales",
    icon: BarChart3,
    desc: "Track lead sources, conversion rates, and visualize your entire customer journey.",
    colorScheme: {
      bg: "from-emerald-500/10 to-transparent",
      border: "border-emerald-500/30 hover:border-emerald-500/60",
      iconBg: "bg-emerald-500/20 border-emerald-500/40",
      iconColor: "text-emerald-400",
    },
    highlights: ["Multi-Touch Attribution", "Funnel Velocity Metrics", "Ad ROAS Tracking", "Team Performance KPIs"],
  },
  {
    id: "finance",
    name: "Finance",
    category: "crm-sales",
    categoryLabel: "CRM & Sales",
    icon: Wallet,
    desc: "Track revenue, manage invoices, handle refunds, and generate comprehensive financial reports.",
    colorScheme: {
      bg: "from-emerald-500/10 to-transparent",
      border: "border-emerald-500/30 hover:border-emerald-500/60",
      iconBg: "bg-emerald-500/20 border-emerald-500/40",
      iconColor: "text-emerald-400",
    },
    highlights: ["Recurring MRR / ARR Ledger", "GST-Compliant Invoicing", "Automated Payment Reminders", "Expense & Margin Tracking"],
  },
  {
    id: "payment-gateway",
    name: "Payment Gateway",
    category: "crm-sales",
    categoryLabel: "CRM & Sales",
    icon: CreditCard,
    desc: "Accept payments via cards, UPI, wallets, and international methods with instant settlements.",
    colorScheme: {
      bg: "from-emerald-500/10 to-transparent",
      border: "border-emerald-500/30 hover:border-emerald-500/60",
      iconBg: "bg-emerald-500/20 border-emerald-500/40",
      iconColor: "text-emerald-400",
    },
    highlights: ["UPI Autopay & QR Codes", "Razorpay / Stripe Native Sync", "Zero Friction Checkout", "Multi-Currency Ready"],
  },
  {
    id: "affiliate",
    name: "Affiliate",
    category: "crm-sales",
    categoryLabel: "CRM & Sales",
    icon: Share2,
    desc: "Manage affiliate programs, track referrals, set commission tiers, and automate payouts.",
    colorScheme: {
      bg: "from-emerald-500/10 to-transparent",
      border: "border-emerald-500/30 hover:border-emerald-500/60",
      iconBg: "bg-emerald-500/20 border-emerald-500/40",
      iconColor: "text-emerald-400",
    },
    highlights: ["Affiliate Partner Portal", "Custom Commission Rules", "Cookie & Link Tracking", "1-Click Payout Engine"],
  },
  {
    id: "calendar-booking",
    name: "Calendar Booking",
    category: "crm-sales",
    categoryLabel: "CRM & Sales",
    icon: Calendar,
    desc: "Let clients book appointments with automated reminders and calendar sync.",
    colorScheme: {
      bg: "from-emerald-500/10 to-transparent",
      border: "border-emerald-500/30 hover:border-emerald-500/60",
      iconBg: "bg-emerald-500/20 border-emerald-500/40",
      iconColor: "text-emerald-400",
    },
    highlights: ["Round-Robin Team Routing", "WhatsApp Confirmation Reminders", "Timezone Auto-Detection", "Google / Outlook 2-Way Sync"],
  },

  // 5. Learning & Community
  {
    id: "lms",
    name: "LMS",
    category: "learning-community",
    categoryLabel: "Learning & Community",
    icon: GraduationCap,
    desc: "Deliver courses with video hosting, progress tracking, certificates, and student engagement tools.",
    colorScheme: {
      bg: "from-amber-500/10 to-transparent",
      border: "border-amber-500/30 hover:border-amber-500/60",
      iconBg: "bg-amber-500/20 border-amber-500/40",
      iconColor: "text-amber-400",
    },
    highlights: ["Drip Content Scheduling", "Video DRM Security", "Automated Certificates", "Quiz & Assignment Engine"],
  },
  {
    id: "student-portal",
    name: "Student Portal",
    category: "learning-community",
    categoryLabel: "Learning & Community",
    icon: BookOpen,
    desc: "Dedicated interface for students to access courses, submit assignments, and track progress.",
    colorScheme: {
      bg: "from-amber-500/10 to-transparent",
      border: "border-amber-500/30 hover:border-amber-500/60",
      iconBg: "bg-amber-500/20 border-amber-500/40",
      iconColor: "text-amber-400",
    },
    highlights: ["Mobile App Friendly", "Progress Gamification", "Resource Download Hub", "Peer Engagement Feed"],
  },
  {
    id: "community",
    name: "Community",
    category: "learning-community",
    categoryLabel: "Learning & Community",
    icon: Users,
    desc: "Build branded social communities with moderation tools, gamification, and engagement features.",
    colorScheme: {
      bg: "from-amber-500/10 to-transparent",
      border: "border-amber-500/30 hover:border-amber-500/60",
      iconBg: "bg-amber-500/20 border-amber-500/40",
      iconColor: "text-amber-400",
    },
    highlights: ["Topic Spaces & Channels", "Member Directory & DM", "Gamified Leaderboards", "Exclusive Tier Access"],
  },
  {
    id: "discussion-forum",
    name: "Discussion Forum",
    category: "learning-community",
    categoryLabel: "Learning & Community",
    icon: MessagesSquare,
    desc: "Create topic-based discussion threads with upvoting, tagging, and expert highlighting.",
    colorScheme: {
      bg: "from-amber-500/10 to-transparent",
      border: "border-amber-500/30 hover:border-amber-500/60",
      iconBg: "bg-amber-500/20 border-amber-500/40",
      iconColor: "text-amber-400",
    },
    highlights: ["Rich Text & Code Blocks", "Upvote & Solution Marking", "Moderator Badges", "Email Notification Digests"],
  },
  {
    id: "success-habits",
    name: "Success Habits",
    category: "learning-community",
    categoryLabel: "Learning & Community",
    icon: Trophy,
    desc: "Gamify user engagement with goal tracking, habit streaks, and achievement badges.",
    colorScheme: {
      bg: "from-amber-500/10 to-transparent",
      border: "border-amber-500/30 hover:border-amber-500/60",
      iconBg: "bg-amber-500/20 border-amber-500/40",
      iconColor: "text-amber-400",
    },
    highlights: ["Daily Streak Counter", "Milestone Rewards", "Social Accountability", "Badge Showcase Profiles"],
  },

  // 6. Operations
  {
    id: "manage-staff",
    name: "Manage Staff",
    category: "operations",
    categoryLabel: "Operations",
    icon: UserCog,
    desc: "Set user roles, permissions, and enable seamless team collaboration across your organization.",
    colorScheme: {
      bg: "from-indigo-500/10 to-transparent",
      border: "border-indigo-500/30 hover:border-indigo-500/60",
      iconBg: "bg-indigo-500/20 border-indigo-500/40",
      iconColor: "text-indigo-400",
    },
    highlights: ["Granular Role Permissions", "Department Assignment", "Activity Audit Logs", "Staff Performance Tracking"],
  },
  {
    id: "vault",
    name: "Vault",
    category: "operations",
    categoryLabel: "Operations",
    icon: Lock,
    desc: "Secure file storage and document management with encryption and access controls.",
    colorScheme: {
      bg: "from-indigo-500/10 to-transparent",
      border: "border-indigo-500/30 hover:border-indigo-500/60",
      iconBg: "bg-indigo-500/20 border-indigo-500/40",
      iconColor: "text-indigo-400",
    },
    highlights: ["End-to-End Encryption", "SOP & Contract Archiving", "Version Control History", "AI Brain Knowledge Access"],
  },
  {
    id: "app-store",
    name: "App Store",
    category: "operations",
    categoryLabel: "Operations",
    icon: ShoppingBag,
    desc: "Integrate third-party apps and extend platform functionality with our marketplace.",
    colorScheme: {
      bg: "from-indigo-500/10 to-transparent",
      border: "border-indigo-500/30 hover:border-indigo-500/60",
      iconBg: "bg-indigo-500/20 border-indigo-500/40",
      iconColor: "text-indigo-400",
    },
    highlights: ["1-Click App Installations", "Webhooks & API Keys", "Custom Plugin Architecture", "Developer Ecosystem"],
  },
  {
    id: "project-management",
    name: "Project Management",
    category: "operations",
    categoryLabel: "Operations",
    icon: CheckSquare,
    desc: "Full project tracking with tasks, milestones, Gantt charts, and team assignments.",
    colorScheme: {
      bg: "from-indigo-500/10 to-transparent",
      border: "border-indigo-500/30 hover:border-indigo-500/60",
      iconBg: "bg-indigo-500/20 border-indigo-500/40",
      iconColor: "text-indigo-400",
    },
    highlights: ["Milestone & Due Date SLAs", "Kanban & Gantt Views", "Task Dependency Mapping", "Time Tracking & Timesheets"],
  },
  {
    id: "health-module",
    name: "Health Module",
    category: "operations",
    categoryLabel: "Operations",
    icon: Activity,
    desc: "Patient management, appointments, prescriptions, and health tracking for clinics.",
    colorScheme: {
      bg: "from-indigo-500/10 to-transparent",
      border: "border-indigo-500/30 hover:border-indigo-500/60",
      iconBg: "bg-indigo-500/20 border-indigo-500/40",
      iconColor: "text-indigo-400",
    },
    highlights: ["Patient Electronic Records", "Doctor Consultation Schedules", "Digital Prescriptions", "WhatsApp Treatment Follow-ups"],
  },
  {
    id: "school-module",
    name: "School Module",
    category: "operations",
    categoryLabel: "Operations",
    icon: School,
    desc: "Student enrollment, attendance, academic management, and parent communication.",
    colorScheme: {
      bg: "from-indigo-500/10 to-transparent",
      border: "border-indigo-500/30 hover:border-indigo-500/60",
      iconBg: "bg-indigo-500/20 border-indigo-500/40",
      iconColor: "text-indigo-400",
    },
    highlights: ["Inquiry-to-Admission CRM", "Digital Attendance Register", "Fee Collection Engine", "Parent Broadcast Portal"],
  },
];

const CATEGORIES = [
  { id: "all", label: "All Services", icon: Sparkles },
  { id: "builders", label: "Builders", icon: Wrench },
  { id: "marketing", label: "Marketing", icon: Megaphone },
  { id: "ai-suite", label: "AI Suite", icon: Bot, isNew: true },
  { id: "crm-sales", label: "CRM & Sales", icon: Users2 },
  { id: "learning-community", label: "Learning & Community", icon: GraduationCap },
  { id: "operations", label: "Operations", icon: Settings },
];

export default function AppHubServices() {
  const [activeCategory, setActiveCategory] = useState<string>("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedService, setSelectedService] = useState<ServiceCard | null>(null);

  const filteredServices = APP_HUB_SERVICES.filter((service) => {
    const matchesCategory =
      activeCategory === "all" || service.category === activeCategory;
    const matchesSearch =
      service.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      service.desc.toLowerCase().includes(searchQuery.toLowerCase()) ||
      service.categoryLabel.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <section id="app-hub" className="relative py-24 sm:py-32 bg-[#050505] overflow-hidden border-t border-white/[0.06]">
      {/* Background ambient lighting */}
      <div className="absolute top-1/4 right-1/4 w-[600px] h-[600px] glow-orb-green opacity-15 pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-[500px] h-[500px] glow-orb-gold opacity-15 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-green/10 border border-brand-green/30 text-brand-green text-xs font-mono mb-4">
            <ShoppingBag className="w-3.5 h-3.5" />
            <span>Automataiz App Hub &amp; Service Matrix</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-display font-bold text-white tracking-tight">
            30+ Integrated Services.{" "}
            <span className="text-gradient-green-gold">Zero Fragmentation.</span>
          </h2>
          <p className="mt-4 text-sm sm:text-base text-neutral-400">
            From drag-and-drop builders and automated marketing channels to AI Suite, unified CRM, course LMS, and complete operations management.
          </p>
        </div>

        {/* Category Navigation Bar matching the exact screenshots */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-10">
          {/* Category Tabs */}
          <div className="flex items-center gap-1.5 bg-[#0a0a0a] p-1.5 rounded-2xl border border-white/[0.08] overflow-x-auto max-w-full scrollbar-none shadow-xl">
            {CATEGORIES.map((cat) => {
              const Icon = cat.icon;
              const isSelected = activeCategory === cat.id;
              return (
                <button
                  key={cat.id}
                  onClick={() => setActiveCategory(cat.id)}
                  className={`flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs font-medium transition-all shrink-0 ${
                    isSelected
                      ? "bg-white/15 text-white font-bold shadow-sm border border-white/20"
                      : "text-neutral-400 hover:text-white hover:bg-white/[0.05]"
                  }`}
                >
                  <Icon className={`w-3.5 h-3.5 ${isSelected ? "text-brand-green" : "text-neutral-400"}`} />
                  <span>{cat.label}</span>
                  {cat.isNew && (
                    <span className="text-[9px] font-mono font-bold px-1.5 py-0.2 rounded-full bg-brand-green/20 text-brand-green border border-brand-green/40">
                      NEW
                    </span>
                  )}
                </button>
              );
            })}
          </div>

          {/* Search Bar */}
          <div className="relative w-full md:w-64">
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-neutral-500" />
            <input
              type="text"
              placeholder="Search 30+ services..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-9 pr-4 py-2 rounded-xl bg-white/[0.04] border border-white/[0.1] focus:border-brand-green focus:outline-none text-xs text-white placeholder:text-neutral-500"
            />
          </div>
        </div>

        {/* Services Grid matching the exact card design */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {filteredServices.map((service) => {
            const Icon = service.icon;
            return (
              <div
                key={service.id}
                onClick={() => setSelectedService(service)}
                className={`p-6 rounded-3xl glass-panel border ${service.colorScheme.border} bg-gradient-to-br ${service.colorScheme.bg} transition-all duration-300 hover:translate-y-[-2px] hover:shadow-2xl cursor-pointer relative group flex flex-col justify-between`}
              >
                <div>
                  {/* Top Bar with Icon & NEW Badge */}
                  <div className="flex items-center justify-between mb-4">
                    <div
                      className={`w-11 h-11 rounded-2xl ${service.colorScheme.iconBg} border flex items-center justify-center`}
                    >
                      <Icon className={`w-5 h-5 ${service.colorScheme.iconColor}`} />
                    </div>

                    <div className="flex items-center gap-2">
                      <span className="text-[10px] font-mono text-neutral-400 bg-white/[0.04] px-2 py-0.5 rounded-full border border-white/[0.06]">
                        {service.categoryLabel}
                      </span>
                      {service.isNew && (
                        <span className="text-[10px] font-mono font-bold px-2 py-0.5 rounded-full bg-brand-green/20 text-brand-green border border-brand-green/40 animate-pulse">
                          NEW
                        </span>
                      )}
                    </div>
                  </div>

                  <h3 className="text-lg font-display font-bold text-white group-hover:text-brand-green transition-colors">
                    {service.name}
                  </h3>
                  <p className="text-xs text-neutral-300 mt-2 leading-relaxed">
                    {service.desc}
                  </p>
                </div>

                {/* Highlights footer */}
                <div className="mt-5 pt-4 border-t border-white/[0.06] flex items-center justify-between text-[11px] font-mono">
                  <span className="text-neutral-400 truncate max-w-[200px]">
                    {service.highlights[0]}
                  </span>
                  <span className="text-brand-green group-hover:translate-x-0.5 transition-transform flex items-center gap-1 font-bold">
                    Details <ArrowRight className="w-3 h-3" />
                  </span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Modal / Detail Drawer for Selected Service */}
        {selectedService && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-xl animate-in fade-in duration-200">
            <div className="relative w-full max-w-lg rounded-3xl bg-[#090909] border border-white/[0.15] p-6 sm:p-8 shadow-2xl space-y-6">
              {/* Close */}
              <button
                onClick={() => setSelectedService(null)}
                className="absolute top-5 right-5 text-neutral-400 hover:text-white p-2 rounded-full bg-white/[0.05]"
              >
                ✕
              </button>

              <div className="flex items-center gap-3">
                <div
                  className={`w-12 h-12 rounded-2xl ${selectedService.colorScheme.iconBg} border flex items-center justify-center`}
                >
                  <selectedService.icon
                    className={`w-6 h-6 ${selectedService.colorScheme.iconColor}`}
                  />
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-mono text-brand-green uppercase">
                      {selectedService.categoryLabel}
                    </span>
                    {selectedService.isNew && (
                      <span className="text-[9px] font-mono font-bold px-1.5 py-0.2 rounded-full bg-brand-green/20 text-brand-green border border-brand-green/40">
                        NEW
                      </span>
                    )}
                  </div>
                  <h3 className="text-2xl font-display font-bold text-white mt-0.5">
                    {selectedService.name}
                  </h3>
                </div>
              </div>

              <p className="text-sm text-neutral-300 leading-relaxed">
                {selectedService.desc}
              </p>

              <div className="space-y-3">
                <div className="text-xs font-mono uppercase tracking-widest text-brand-gold font-bold">
                  Core Included Capabilities:
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {selectedService.highlights.map((h, i) => (
                    <div
                      key={i}
                      className="flex items-center gap-2 p-2.5 rounded-xl bg-white/[0.02] border border-white/[0.06] text-xs text-neutral-200"
                    >
                      <CheckCircle2 className="w-3.5 h-3.5 text-brand-green shrink-0" />
                      <span>{h}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-4 border-t border-white/[0.08] flex items-center justify-between gap-3">
                <a
                  href="/contact"
                  className="flex-1 py-3 rounded-xl text-xs font-bold text-black bg-gradient-to-r from-brand-green to-brand-gold hover:opacity-95 text-center transition-all shadow-glow-green/40"
                >
                  Book Demo for {selectedService.name}
                </a>
                <button
                  onClick={() => setSelectedService(null)}
                  className="px-5 py-3 rounded-xl text-xs font-semibold text-neutral-400 hover:text-white bg-white/[0.05]"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
