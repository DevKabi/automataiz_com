"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Sparkles,
  ArrowRight,
  MapPin,
  Target,
  Quote,
  ShieldCheck,
  CheckCircle2,
} from "lucide-react";

export default function FounderShowcase() {
  return (
    <section className="relative py-24 sm:py-32 bg-[#050505] overflow-hidden border-t border-white/[0.06]">
      {/* Background ambient light */}
      <div className="absolute top-1/2 left-10 w-[500px] h-[500px] glow-orb-green opacity-15 pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-[450px] h-[450px] glow-orb-gold opacity-15 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Tag */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-green/10 border border-brand-green/30 text-brand-green text-xs font-mono mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Origin & Leadership</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-display font-bold text-white tracking-tight">
            Built from Real-World Failures, Systems &{" "}
            <span className="text-gradient-green-gold">Obsession with Growth.</span>
          </h2>
          <p className="mt-4 text-sm sm:text-base text-neutral-400">
            Automataiz was not born in a venture capital boardroom. It was created to solve software fragmentation for millions of underserved businesses.
          </p>
        </div>

        {/* 2-Column Founder Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          {/* Left Column: Real Founder Desk Photo & Portrait (5 Cols) */}
          <div className="lg:col-span-5 space-y-4">
            <div className="relative rounded-3xl overflow-hidden glass-panel border border-brand-green/30 shadow-2xl p-2 bg-[#080808]">
              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden">
                <Image
                  src="/images/founder-desk.jpg"
                  alt="Debasish Kabi, Founder & CEO of Automataiz"
                  fill
                  className="object-cover object-top hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />
                <div className="absolute bottom-4 left-4 right-4">
                  <div className="text-white font-display font-bold text-lg">
                    Debasish Kabi
                  </div>
                  <div className="text-brand-green text-xs font-mono">
                    Founder & CEO, Automataiz
                  </div>
                  <div className="text-neutral-400 text-[11px] flex items-center gap-1.5 mt-0.5">
                    <MapPin className="w-3 h-3 text-brand-gold" />
                    <span>Bhubaneswar, Odisha, India</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Stat Pill Grid */}
            <div className="grid grid-cols-3 gap-2 text-center text-xs font-mono">
              <div className="p-3 rounded-2xl bg-white/[0.02] border border-white/[0.06]">
                <div className="text-[10px] text-neutral-500">EXPERIENCE</div>
                <div className="font-bold text-white mt-0.5">7+ Years</div>
                <div className="text-[9px] text-brand-green">Perf Marketing</div>
              </div>
              <div className="p-3 rounded-2xl bg-white/[0.02] border border-white/[0.06]">
                <div className="text-[10px] text-neutral-500">LAUNCH DATE</div>
                <div className="font-bold text-white mt-0.5">Jan 1, 2025</div>
                <div className="text-[9px] text-brand-gold">Official Live</div>
              </div>
              <div className="p-3 rounded-2xl bg-white/[0.02] border border-white/[0.06]">
                <div className="text-[10px] text-neutral-500">CORE BELIEF</div>
                <div className="font-bold text-white mt-0.5">Human + AI</div>
                <div className="text-[9px] text-brand-lime">Collaborative</div>
              </div>
            </div>
          </div>

          {/* Right Column: Founder Narrative & Operating Principles (7 Cols) */}
          <div className="lg:col-span-7 space-y-6">
            <div className="p-6 sm:p-8 rounded-3xl glass-panel space-y-5">
              <Quote className="w-8 h-8 text-brand-green opacity-40" />

              <blockquote className="text-lg sm:text-xl font-display text-white font-medium italic leading-relaxed">
                &quot;Every business is built twice: first in the mind of the founder, then in reality. The future business will not be operated solely by humans, nor solely by AI. The future belongs to organizations where humans and AI work together.&quot;
              </blockquote>

              <div className="text-xs sm:text-sm text-neutral-300 space-y-3 leading-relaxed">
                <p>
                  Born in Bandhamundi, a small village in Odisha, Debasish Kabi learned the value of resilience, simplicity, and finding solutions with limited resources. After earning his engineering degree in 2011, serving in the Government of Odisha, directing creative projects, and managing safety engineering operations at L&T and Amazon warehouse projects, he launched his first venture in 2018.
                </p>
                <p>
                  When that early venture went bankrupt, it provided the ultimate lesson: <strong className="text-white">Businesses don&apos;t fail because they lack ambition; businesses fail because they lack systems.</strong>
                </p>
                <p>
                  Following 7+ years of leading performance marketing campaigns across Southeast Asia, Debasish founded Automataiz in Bhubaneswar, Odisha to build the central operating system for modern enterprises.
                </p>
              </div>

              {/* 3 Core Operating Principles */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-4 border-t border-white/[0.06] text-xs">
                <div className="p-3 rounded-xl bg-white/[0.02] border border-white/[0.04]">
                  <div className="font-mono font-bold text-brand-green">Principle #1</div>
                  <div className="font-semibold text-white mt-1">Simplicity Over Complexity</div>
                  <div className="text-[11px] text-neutral-400 mt-0.5">Fewer tools that do more.</div>
                </div>
                <div className="p-3 rounded-xl bg-white/[0.02] border border-white/[0.04]">
                  <div className="font-mono font-bold text-brand-gold">Principle #2</div>
                  <div className="font-semibold text-white mt-1">Systems Over Effort</div>
                  <div className="text-[11px] text-neutral-400 mt-0.5">Scale through repeatable systems.</div>
                </div>
                <div className="p-3 rounded-xl bg-white/[0.02] border border-white/[0.04]">
                  <div className="font-mono font-bold text-brand-lime">Principle #3</div>
                  <div className="font-semibold text-white mt-1">Automation Before Hiring</div>
                  <div className="text-[11px] text-neutral-400 mt-0.5">Automate before increasing headcount.</div>
                </div>
              </div>

              <div className="pt-2 flex items-center justify-between">
                <Link
                  href="/company"
                  className="inline-flex items-center gap-2 text-xs font-mono font-bold text-brand-green hover:text-brand-lime transition-colors"
                >
                  <span>Read Full Story &amp; 2030-2040 Vision</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>

                <span className="text-[11px] font-mono text-neutral-500">
                  Headquarters: Mancheswar, Bhubaneswar
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
