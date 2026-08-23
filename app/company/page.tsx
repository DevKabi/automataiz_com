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
  Calendar,
  Building2,
  Globe,
  Award,
  Users,
  Layers,
  Heart,
  TrendingUp,
} from "lucide-react";

export default function CompanyPage() {
  return (
    <div className="pt-28 pb-20 space-y-24">
      {/* Top Hero Banner */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-green/10 border border-brand-green/30 text-brand-green text-xs font-mono mb-4">
          <Sparkles className="w-3.5 h-3.5" />
          <span>About Automataiz</span>
        </div>

        <h1 className="text-4xl sm:text-6xl font-display font-extrabold text-white tracking-tight max-w-4xl mx-auto leading-tight">
          &quot;Companies Are Built by Products.{" "}
          <span className="text-gradient-green-gold">Empires Are Built by Philosophies.&quot;</span>
        </h1>
        <p className="mt-4 text-base sm:text-lg text-neutral-300 max-w-2xl mx-auto">
          Automataiz was founded in Bhubaneswar, Odisha with a global ambition: to build the operating system powering the next generation of businesses where humans and AI work together.
        </p>
      </section>

      {/* Founder Story Chapter: Debasish Kabi */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="p-8 sm:p-12 rounded-3xl glass-panel border border-brand-green/30 bg-gradient-to-br from-[#091508] via-[#080808] to-[#141205] space-y-12">
          <div className="flex items-center gap-2 text-xs font-mono text-brand-gold uppercase tracking-wider">
            <span>Chapter 02 // Founder Story &amp; Origin</span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
            {/* Left: Founder Images */}
            <div className="lg:col-span-5 space-y-4">
              <div className="relative rounded-3xl overflow-hidden glass-panel border border-brand-green/40 shadow-2xl p-2 bg-[#080808]">
                <div className="relative aspect-[4/3] rounded-2xl overflow-hidden">
                  <Image
                    src="/images/founder-desk.jpg"
                    alt="Debasish Kabi Founder & CEO Desk"
                    fill
                    className="object-cover object-top"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4">
                    <div className="text-white font-display font-bold text-lg">
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

              {/* Second Portrait */}
              <div className="relative rounded-2xl overflow-hidden glass-panel border border-white/[0.08] p-2 bg-[#080808] flex items-center gap-4">
                <div className="relative w-20 h-20 rounded-xl overflow-hidden shrink-0">
                  <Image
                    src="/images/founder.jpg"
                    alt="Debasish Kabi Portrait"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="text-xs space-y-1">
                  <div className="font-semibold text-white">Focus. Automate. Grow.</div>
                  <p className="text-neutral-400 text-[11px] leading-relaxed">
                    &quot;Every mistake became data. Every loss became education.&quot;
                  </p>
                </div>
              </div>
            </div>

            {/* Right: Detailed Story Narrative */}
            <div className="lg:col-span-7 space-y-6 text-sm text-neutral-300 leading-relaxed">
              <h2 className="text-3xl font-display font-bold text-white">
                From Bandhamundi Village to Building Global AI Infrastructure
              </h2>

              <p>
                Debasish Kabi was born on May 14, 1987, in Bandhamundi, a small rural village in Odisha, India. Growing up in a rural environment taught him the value of simplicity, resilience, hard work, and finding solutions when resources are scarce.
              </p>

              <p>
                Driven by curiosity, Debasish completed his B.Tech in Engineering in 2011. Rather than looking at problems emotionally, engineering taught him to look at challenges structurally: <strong className="text-white">Every challenge is a system. Every system can be improved.</strong>
              </p>

              <p>
                After graduation, he served as a Revenue Inspector under the Government of Odisha. While government service provided stability, he felt a relentless urge to build and innovate. He explored film direction—mastering storytelling, audience psychology, and branding—before transitioning into industrial safety engineering on large-scale projects with <strong>Larsen &amp; Toubro</strong> and <strong>Amazon warehouse operations</strong>.
              </p>

              <div className="p-4 rounded-2xl bg-white/[0.02] border border-white/[0.06] space-y-2">
                <h4 className="font-bold text-brand-gold font-mono text-xs uppercase">
                  The Lessons of 2018 Failure
                </h4>
                <p className="text-xs text-neutral-300">
                  In 2018, Debasish launched his first consulting venture, which eventually failed and went bankrupt. Rather than viewing failure as a setback, he treated it as market research. The bankruptcy revealed crucial truths:
                  <br />
                  • Businesses fail without systems.
                  <br />
                  • Businesses fail without predictable lead generation.
                  <br />
                  • Businesses fail without automation.
                  <br />
                  • Businesses fail when founders are trapped doing manual work.
                </p>
              </div>

              <p>
                Seeking broader exposure, Debasish spent several years in Thailand and Cambodia managing high-velocity digital marketing and performance advertising campaigns across Meta, Google, and paid funnels. After 7+ years of deep practical customer acquisition experience, he saw the same problem across every industry: <em>businesses were drowning in 15 disconnected software tools.</em>
              </p>

              <p>
                On <strong>January 1, 2025</strong>, Automataiz was officially launched from Bhubaneswar, Odisha to build a unified AI Business Operating System that replaces fragmented tools with a single source of truth.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Strategic Roadmap: Vision 2030 to Vision 2040 */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <div className="text-center max-w-3xl mx-auto">
          <div className="text-xs font-mono uppercase tracking-widest text-brand-gold font-bold mb-2">
            The Billion-Dollar Strategic Blueprint
          </div>
          <h2 className="text-3xl sm:text-4xl font-display font-bold text-white">
            Long-Term Company Roadmap
          </h2>
          <p className="text-sm text-neutral-400 mt-2">
            &quot;If your vision does not scare you, it is probably too small.&quot;
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Phase 1 */}
          <div className="p-6 rounded-3xl glass-panel space-y-4 border-brand-green/30">
            <div className="text-xs font-mono text-brand-green font-bold">
              PHASE 1 // 2025–2027
            </div>
            <h3 className="font-display font-bold text-xl text-white">Foundation &amp; Validation</h3>
            <p className="text-xs text-neutral-400 leading-relaxed">
              Achieve Product-Market Fit with 100+ businesses operating on Automataiz across primary verticals (Fitness, Coaches, Real Estate).
            </p>
            <div className="pt-3 border-t border-white/[0.06] text-xs font-mono text-brand-green font-bold">
              Target: ₹10 Crore ARR
            </div>
          </div>

          {/* Phase 2 */}
          <div className="p-6 rounded-3xl glass-panel space-y-4 border-brand-gold/30">
            <div className="text-xs font-mono text-brand-gold font-bold">
              PHASE 2 // 2027–2030
            </div>
            <h3 className="font-display font-bold text-xl text-white">Vertical Domination</h3>
            <p className="text-xs text-neutral-400 leading-relaxed">
              Dominate specific verticals with pre-trained AI agents and industry ecosystems. 1,000+ active operating businesses.
            </p>
            <div className="pt-3 border-t border-white/[0.06] text-xs font-mono text-brand-gold font-bold">
              Target: ₹100 Crore ARR
            </div>
          </div>

          {/* Phase 3 */}
          <div className="p-6 rounded-3xl glass-panel space-y-4 border-brand-lime/30">
            <div className="text-xs font-mono text-brand-lime font-bold">
              PHASE 3 // 2030–2033
            </div>
            <h3 className="font-display font-bold text-xl text-white">AI Workforce Revolution</h3>
            <p className="text-xs text-neutral-400 leading-relaxed">
              Position AI as digital workforce (AI SDR, AI Marketing, AI Operations, AI Finance). 10,000+ businesses.
            </p>
            <div className="pt-3 border-t border-white/[0.06] text-xs font-mono text-brand-lime font-bold">
              Target: ₹250 Crore ARR
            </div>
          </div>

          {/* Phase 4 & Beyond */}
          <div className="p-6 rounded-3xl glass-panel space-y-4 border-white/20">
            <div className="text-xs font-mono text-white font-bold">
              PHASE 4 // 2035–2040
            </div>
            <h3 className="font-display font-bold text-xl text-white">Autonomous Enterprise</h3>
            <p className="text-xs text-neutral-400 leading-relaxed">
              Global expansion across Southeast Asia, Middle East, Europe, and North America. Billion-dollar AI ecosystem.
            </p>
            <div className="pt-3 border-t border-white/[0.06] text-xs font-mono text-brand-gold font-bold">
              Target: $1B+ Valuation
            </div>
          </div>
        </div>
      </section>

      {/* 7 Operating Principles */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="text-center max-w-2xl mx-auto">
          <div className="text-xs font-mono uppercase tracking-widest text-brand-green font-bold mb-2">
            The Automataiz Operating Principles
          </div>
          <h2 className="text-3xl font-display font-bold text-white">
            How We Build &amp; Decide
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 text-xs">
          {[
            { num: "01", title: "Simplicity Over Complexity", desc: "Businesses need fewer tools, not more. Every feature must simplify operations." },
            { num: "02", title: "Systems Over Effort", desc: "Hard work is important; systems are essential. Scale through repeatable architecture." },
            { num: "03", title: "Automation Before Hiring", desc: "Before hiring more headcount: eliminate inefficiencies and automate repetitive workflows." },
            { num: "04", title: "Data Before Opinion", desc: "Opinions are useful; data is essential. Important decisions must be supported by measurable evidence." },
            { num: "05", title: "Customer Success First", desc: "Customers do not buy software; they buy outcomes. Their growth determines our success." },
            { num: "06", title: "Continuous Innovation", desc: "Technology evolves rapidly. Innovation is not optional; it is survival." },
            { num: "07", title: "Think Long-Term", desc: "Short-term thinking creates short-term businesses. Every decision supports the next decade." },
            { num: "08", title: "Human + AI Synergy", desc: "Humans provide leadership and creativity; AI provides speed, consistency, and scale." },
          ].map((principle, idx) => (
            <div key={idx} className="p-5 rounded-2xl bg-white/[0.02] border border-white/[0.06] space-y-2">
              <div className="font-mono font-bold text-brand-green text-xs">
                PRINCIPLE #{principle.num}
              </div>
              <h4 className="font-display font-bold text-white text-sm">
                {principle.title}
              </h4>
              <p className="text-neutral-400 leading-relaxed">{principle.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* The Automataiz Manifesto */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="p-8 sm:p-12 rounded-3xl glass-panel border border-brand-green/30 bg-gradient-to-br from-[#0c1a0a] via-black to-[#191506] text-center space-y-6">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-brand-green/20 text-brand-green text-xs font-mono font-bold">
            THE AUTOMATAIZ MANIFESTO
          </div>

          <h2 className="text-3xl sm:text-4xl font-display font-bold text-white tracking-tight">
            The Future of Business. Automated.
          </h2>

          <div className="text-xs sm:text-sm text-neutral-300 space-y-4 max-w-2xl mx-auto leading-relaxed text-left">
            <p>We believe business should be simpler.</p>
            <p>We believe technology should reduce complexity, not create it.</p>
            <p>We believe small businesses deserve access to capabilities once reserved for large enterprises.</p>
            <p>We believe AI should empower people, not replace purpose.</p>
            <p>We believe business owners should spend less time managing software and more time building companies.</p>
            <p className="font-bold text-white pt-2">
              From Bandhamundi to Bhubaneswar, and from India to the world—that future is what Automataiz exists to build.
            </p>
          </div>

          <div className="pt-6 border-t border-white/[0.08] flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-neutral-400">
            <div>
              Debasish Kabi, Founder &amp; CEO
            </div>
            <div className="text-brand-green font-bold">
              Automataiz Technologies
            </div>
          </div>

          {/* Social Channels */}
          <div className="pt-2 flex items-center justify-center gap-3 flex-wrap">
            <a
              href="https://www.linkedin.com/company/automataiz"
              target="_blank"
              rel="noopener noreferrer"
              className="px-3.5 py-1.5 rounded-full bg-white/[0.04] hover:bg-brand-green/20 border border-white/[0.08] hover:border-brand-green/40 text-neutral-300 hover:text-brand-green text-xs font-mono flex items-center gap-1.5 transition-all"
            >
              <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z"/>
              </svg>
              <span>LinkedIn</span>
            </a>
            <a
              href="https://x.com/Automataiz"
              target="_blank"
              rel="noopener noreferrer"
              className="px-3.5 py-1.5 rounded-full bg-white/[0.04] hover:bg-brand-gold/20 border border-white/[0.08] hover:border-brand-gold/40 text-neutral-300 hover:text-brand-gold text-xs font-mono flex items-center gap-1.5 transition-all"
            >
              <svg className="w-3 h-3 fill-current" viewBox="0 0 24 24">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
              </svg>
              <span>X</span>
            </a>
            <a
              href="https://www.instagram.com/automataiz.saas/"
              target="_blank"
              rel="noopener noreferrer"
              className="px-3.5 py-1.5 rounded-full bg-white/[0.04] hover:bg-pink-500/20 border border-white/[0.08] hover:border-pink-500/40 text-neutral-300 hover:text-pink-400 text-xs font-mono flex items-center gap-1.5 transition-all"
            >
              <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
              </svg>
              <span>Instagram</span>
            </a>
            <a
              href="https://www.youtube.com/channel/UCzLu81z2ZEkQi4cWU3501CA"
              target="_blank"
              rel="noopener noreferrer"
              className="px-3.5 py-1.5 rounded-full bg-white/[0.04] hover:bg-red-500/20 border border-white/[0.08] hover:border-red-500/40 text-neutral-300 hover:text-red-400 text-xs font-mono flex items-center gap-1.5 transition-all"
            >
              <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
              </svg>
              <span>YouTube</span>
            </a>
            <a
              href="https://www.facebook.com/automataiz"
              target="_blank"
              rel="noopener noreferrer"
              className="px-3.5 py-1.5 rounded-full bg-white/[0.04] hover:bg-blue-600/20 border border-white/[0.08] hover:border-blue-600/40 text-neutral-300 hover:text-blue-400 text-xs font-mono flex items-center gap-1.5 transition-all"
            >
              <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
              </svg>
              <span>Facebook</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
