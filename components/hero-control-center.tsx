"use client";

import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import {
  TrendingUp,
  Activity,
  Bot,
  Zap,
  Users,
  CheckCircle2,
  DollarSign,
  PhoneCall,
  MessageSquare,
  Sparkles,
  ArrowUpRight,
  ShieldCheck,
  Cpu,
  Layers,
} from "lucide-react";
import { formatINR } from "@/lib/utils";

export default function HeroControlCenter() {
  const [activeTab, setActiveTab] = useState<"overview" | "ai-agents" | "pipeline" | "finance">("overview");
  const [liveRevenue, setLiveRevenue] = useState(3842900);
  const [leadCount, setLeadCount] = useState(1482);
  const [activeCalls, setActiveCalls] = useState(18);

  const containerRef = useRef<HTMLDivElement>(null);
  const mouseX = useMotionValue(0.5);
  const mouseY = useMotionValue(0.5);

  const rotateX = useSpring(useTransform(mouseY, [0, 1], [10, -10]), {
    stiffness: 200,
    damping: 25,
  });
  const rotateY = useSpring(useTransform(mouseX, [0, 1], [-10, 10]), {
    stiffness: 200,
    damping: 25,
  });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    mouseX.set((e.clientX - rect.left) / rect.width);
    mouseY.set((e.clientY - rect.top) / rect.height);
  };

  const handleMouseLeave = () => {
    mouseX.set(0.5);
    mouseY.set(0.5);
  };

  // Live simulation ticks
  useEffect(() => {
    const interval = setInterval(() => {
      setLiveRevenue((prev) => prev + Math.floor(Math.random() * 450) + 150);
      if (Math.random() > 0.6) {
        setLeadCount((prev) => prev + 1);
      }
      setActiveCalls(14 + Math.floor(Math.random() * 8));
    }, 2800);
    return () => clearInterval(interval);
  }, []);

  return (
    <div
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="perspective-1200 relative w-full max-w-2xl mx-auto lg:max-w-none"
    >
      {/* Outer ambient glow */}
      <div className="absolute -inset-2 bg-gradient-to-r from-brand-green/30 via-brand-lime/20 to-brand-gold/30 rounded-3xl blur-2xl opacity-70 group-hover:opacity-100 transition duration-1000 animate-pulse-glow" />

      {/* Floating 3D Satellite Badge 1 (Top Left) */}
      <motion.div
        animate={{ y: [0, -8, 0], rotate: [0, 2, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
        className="hidden sm:flex absolute -top-5 -left-6 z-30 items-center gap-2 px-3.5 py-1.5 rounded-2xl bg-[#0a1808]/90 border border-brand-green/40 shadow-xl backdrop-blur-md text-xs font-mono text-brand-green"
      >
        <span className="w-2 h-2 rounded-full bg-brand-green animate-ping" />
        <span>Sub-90s AI Lead Engagement</span>
      </motion.div>

      {/* Floating 3D Satellite Badge 2 (Bottom Right) */}
      <motion.div
        animate={{ y: [0, 8, 0], rotate: [0, -2, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        className="hidden sm:flex absolute -bottom-5 -right-6 z-30 items-center gap-2 px-3.5 py-1.5 rounded-2xl bg-[#141208]/90 border border-brand-gold/40 shadow-xl backdrop-blur-md text-xs font-mono text-brand-gold"
      >
        <Sparkles className="w-3.5 h-3.5 text-brand-gold" />
        <span>₹80,000+ Disconnected SaaS Saved</span>
      </motion.div>

      {/* Main 3D Glass Cockpit Frame */}
      <motion.div
        style={{
          rotateX,
          rotateY,
          transformStyle: "preserve-3d",
        }}
        className="relative rounded-3xl bg-[#080808]/90 border border-white/[0.14] p-5 sm:p-7 shadow-[0_30px_70px_rgba(0,0,0,0.8)] backdrop-blur-2xl overflow-hidden transition-shadow duration-500 hover:border-brand-green/40"
      >
        {/* Radar Scanner Line */}
        <div className="absolute inset-x-0 h-[2px] bg-gradient-to-r from-transparent via-brand-green to-transparent opacity-40 animate-radar-scan pointer-events-none z-10" />

        {/* Top Control Bar */}
        <div className="flex items-center justify-between border-b border-white/[0.08] pb-4 mb-5 relative z-20">
          <div className="flex items-center gap-3">
            <div className="flex items-center gap-1.5">
              <span className="w-3 h-3 rounded-full bg-red-500/80 border border-red-400 shadow-sm" />
              <span className="w-3 h-3 rounded-full bg-yellow-500/80 border border-yellow-400 shadow-sm" />
              <span className="w-3 h-3 rounded-full bg-brand-green/80 border border-brand-green shadow-sm" />
            </div>
            <div className="h-4 w-[1px] bg-white/10" />
            <div className="flex items-center gap-2">
              <Image
                src="/images/ai-chip.png"
                alt="AI Chip"
                width={20}
                height={20}
                className="animate-spin-slow object-contain"
              />
              <span className="font-mono text-xs font-semibold tracking-wider text-neutral-200">
                AUTOMATAIZ_OS // v2.5.0
              </span>
            </div>
          </div>

          <div className="flex items-center gap-2 font-mono text-[11px] text-brand-green bg-brand-green/10 border border-brand-green/30 px-3 py-1 rounded-full shadow-inner">
            <span className="w-1.5 h-1.5 rounded-full bg-brand-green animate-ping" />
            <span>AI Brain: 99.8% Efficiency</span>
          </div>
        </div>

        {/* Interactive Tabs */}
        <div className="flex items-center gap-2 mb-5 overflow-x-auto pb-1 scrollbar-none relative z-20">
          {[
            { id: "overview", label: "Executive Cockpit", icon: Activity },
            { id: "ai-agents", label: "Digital Workforce", icon: Bot },
            { id: "pipeline", label: "Autonomous Pipeline", icon: Zap },
            { id: "finance", label: "Financial Ledger", icon: DollarSign },
          ].map((tab) => {
            const Icon = tab.icon;
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id as any)}
                className={`flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl text-xs font-medium transition-all duration-200 whitespace-nowrap ${
                  isActive
                    ? "bg-brand-green text-black font-bold shadow-glow-green"
                    : "bg-white/[0.03] text-neutral-400 hover:text-white hover:bg-white/[0.06] border border-white/[0.05]"
                }`}
              >
                <Icon className="w-3.5 h-3.5" />
                <span>{tab.label}</span>
              </button>
            );
          })}
        </div>

        {/* TAB 1: EXECUTIVE COCKPIT OVERVIEW */}
        {activeTab === "overview" && (
          <div className="space-y-4 relative z-20">
            {/* Top Metric Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              <div className="p-4 rounded-2xl bg-white/[0.02] border border-white/[0.08] hover:border-brand-green/30 transition-all">
                <div className="flex items-center justify-between text-neutral-400 text-xs mb-1">
                  <span>Run-Rate MRR</span>
                  <TrendingUp className="w-3.5 h-3.5 text-brand-green" />
                </div>
                <div className="text-xl sm:text-2xl font-mono font-bold text-white tracking-tight">
                  {formatINR(liveRevenue)}
                </div>
                <div className="flex items-center gap-1 mt-1 text-[10px] text-brand-green font-mono">
                  <span>+28.4%</span>
                  <span className="text-neutral-400">vs last month</span>
                </div>
              </div>

              <div className="p-4 rounded-2xl bg-white/[0.02] border border-white/[0.08] hover:border-brand-gold/30 transition-all">
                <div className="flex items-center justify-between text-neutral-400 text-xs mb-1">
                  <span>Leads Engaged</span>
                  <Users className="w-3.5 h-3.5 text-brand-gold" />
                </div>
                <div className="text-xl sm:text-2xl font-mono font-bold text-brand-gold tracking-tight">
                  {leadCount.toLocaleString("en-IN")}
                </div>
                <div className="flex items-center gap-1 mt-1 text-[10px] text-brand-gold font-mono">
                  <span>⚡ 98.4%</span>
                  <span className="text-neutral-400">sub-90s response</span>
                </div>
              </div>

              <div className="p-4 rounded-2xl bg-white/[0.02] border border-white/[0.08] hover:border-brand-lime/30 transition-all">
                <div className="flex items-center justify-between text-neutral-400 text-xs mb-1">
                  <span>Live AI Voice &amp; WA</span>
                  <PhoneCall className="w-3.5 h-3.5 text-brand-lime" />
                </div>
                <div className="text-xl sm:text-2xl font-mono font-bold text-brand-lime tracking-tight">
                  {activeCalls} active
                </div>
                <div className="flex items-center gap-1 mt-1 text-[10px] text-brand-lime font-mono">
                  <span>0 dropped calls</span>
                </div>
              </div>
            </div>

            {/* Live Telemetry Feed */}
            <div className="p-4 rounded-2xl bg-white/[0.02] border border-white/[0.06] space-y-2.5">
              <div className="flex items-center justify-between text-xs font-mono text-neutral-400 border-b border-white/[0.05] pb-2">
                <span>Autonomous Execution Event Feed</span>
                <span className="text-[10px] text-brand-green flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-brand-green animate-ping" />
                  Synced
                </span>
              </div>

              <div className="space-y-2 text-xs">
                <div className="flex items-center justify-between p-2 rounded-xl bg-white/[0.02] border border-white/[0.04]">
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-brand-green" />
                    <span className="text-neutral-200">WhatsApp AI Agent qualified high-ticket lead</span>
                  </div>
                  <span className="text-[10px] font-mono text-neutral-400">12s ago</span>
                </div>

                <div className="flex items-center justify-between p-2 rounded-xl bg-white/[0.02] border border-white/[0.04]">
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-brand-gold" />
                    <span className="text-neutral-200">Automated UPI Autopay settlement received</span>
                  </div>
                  <span className="text-[10px] font-mono text-brand-gold">₹14,999</span>
                </div>

                <div className="flex items-center justify-between p-2 rounded-xl bg-white/[0.02] border border-white/[0.04]">
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-brand-lime" />
                    <span className="text-neutral-200">AI Funnel generated +18.6% conversion on checkout</span>
                  </div>
                  <span className="text-[10px] font-mono text-neutral-400">1m ago</span>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* TAB 2: DIGITAL WORKFORCE */}
        {activeTab === "ai-agents" && (
          <div className="space-y-3 relative z-20">
            <div className="p-3.5 rounded-2xl bg-white/[0.02] border border-white/[0.08] flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-xl bg-brand-green/20 border border-brand-green/40 flex items-center justify-center text-brand-green">
                  <Bot className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-xs font-bold text-white">Nova AI SDR (Inbound &amp; WhatsApp)</div>
                  <div className="text-[10px] text-neutral-400">Speed: 42s avg • 1,482 chats resolved</div>
                </div>
              </div>
              <span className="px-2 py-0.5 rounded-full bg-brand-green/10 text-brand-green text-[10px] font-mono border border-brand-green/30">
                ACTIVE
              </span>
            </div>

            <div className="p-3.5 rounded-2xl bg-white/[0.02] border border-white/[0.08] flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-xl bg-brand-gold/20 border border-brand-gold/40 flex items-center justify-center text-brand-gold">
                  <DollarSign className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-xs font-bold text-white">Nova AI Finance &amp; Tax Reconciler</div>
                  <div className="text-[10px] text-neutral-400">Zero GST leak • Auto invoice generation</div>
                </div>
              </div>
              <span className="px-2 py-0.5 rounded-full bg-brand-gold/10 text-brand-gold text-[10px] font-mono border border-brand-gold/30">
                ACTIVE
              </span>
            </div>

            <div className="p-3.5 rounded-2xl bg-white/[0.02] border border-white/[0.08] flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-xl bg-brand-lime/20 border border-brand-lime/40 flex items-center justify-center text-brand-lime">
                  <Zap className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-xs font-bold text-white">Nova AI Funnel &amp; Ad Optimizer</div>
                  <div className="text-[10px] text-neutral-400">Autonomous multi-variant A/B copy tests</div>
                </div>
              </div>
              <span className="px-2 py-0.5 rounded-full bg-brand-lime/10 text-brand-lime text-[10px] font-mono border border-brand-lime/30">
                ACTIVE
              </span>
            </div>
          </div>
        )}

        {/* TAB 3: PIPELINE */}
        {activeTab === "pipeline" && (
          <div className="space-y-3 relative z-20">
            <div className="grid grid-cols-3 gap-2 text-center text-xs">
              <div className="p-3 rounded-xl bg-white/[0.02] border border-white/[0.06]">
                <span className="text-[10px] text-neutral-400 uppercase font-mono">New Inbound</span>
                <div className="text-base font-bold text-white mt-1">42 Leads</div>
                <div className="text-[9px] text-brand-green">Auto-Qualified</div>
              </div>
              <div className="p-3 rounded-xl bg-white/[0.02] border border-white/[0.06]">
                <span className="text-[10px] text-neutral-400 uppercase font-mono">Demo Booked</span>
                <div className="text-base font-bold text-brand-gold mt-1">18 Demos</div>
                <div className="text-[9px] text-neutral-400">Reminders Active</div>
              </div>
              <div className="p-3 rounded-xl bg-white/[0.02] border border-white/[0.06]">
                <span className="text-[10px] text-neutral-400 uppercase font-mono">Closed Won</span>
                <div className="text-base font-bold text-brand-green mt-1">12 Deals</div>
                <div className="text-[9px] text-brand-green">UPI Paid</div>
              </div>
            </div>
            <div className="p-3 rounded-xl bg-white/[0.02] border border-white/[0.06] text-xs text-neutral-300">
              ⚡ <strong>Zero Pipeline Stagnation:</strong> Leads not responding within 24 hours are automatically engaged with customized 12-touch multi-channel drip sequences.
            </div>
          </div>
        )}

        {/* TAB 4: FINANCE */}
        {activeTab === "finance" && (
          <div className="space-y-3 relative z-20">
            <div className="p-4 rounded-2xl bg-white/[0.02] border border-white/[0.08] space-y-2">
              <div className="flex justify-between text-xs">
                <span className="text-neutral-400">Gross Collections (MTD):</span>
                <span className="font-mono font-bold text-white">₹38,42,900</span>
              </div>
              <div className="flex justify-between text-xs">
                <span className="text-neutral-400">Recurring UPI Subscriptions:</span>
                <span className="font-mono font-bold text-brand-green">86.4%</span>
              </div>
              <div className="flex justify-between text-xs">
                <span className="text-neutral-400">SaaS Consolidation Savings:</span>
                <span className="font-mono font-bold text-brand-gold">₹84,200 / mo</span>
              </div>
            </div>
          </div>
        )}

        {/* Bottom Status bar */}
        <div className="mt-5 pt-4 border-t border-white/[0.08] flex items-center justify-between text-[11px] font-mono text-neutral-400 relative z-20">
          <div className="flex items-center gap-2">
            <ShieldCheck className="w-3.5 h-3.5 text-brand-green" />
            <span>SOC2 / ISO 27001 Logical Encryption Active</span>
          </div>
          <span className="text-neutral-400">Bhubaneswar HQ Node</span>
        </div>
      </motion.div>
    </div>
  );
}
