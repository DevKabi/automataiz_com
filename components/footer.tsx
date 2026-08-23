import React from "react";
import Link from "next/link";
import Image from "next/image";
import {
  MapPin,
  Mail,
  Phone,
  ArrowUpRight,
  ShieldCheck,
  Cpu,
  Sparkles,
} from "lucide-react";

export default function Footer() {
  return (
    <footer className="relative bg-[#060606] border-t border-white/[0.08] pt-20 pb-12 overflow-hidden z-10">
      {/* Background glow orbs */}
      <div className="absolute -top-40 left-1/4 w-96 h-96 rounded-full glow-orb-green pointer-events-none opacity-20" />
      <div className="absolute -top-40 right-1/4 w-96 h-96 rounded-full glow-orb-gold pointer-events-none opacity-20" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Call to Action Banner */}
        <div className="relative mb-20 p-8 sm:p-12 rounded-3xl glass-panel border border-brand-green/30 bg-gradient-to-r from-black via-[#091408] to-black overflow-hidden shadow-glow-green/20">
          <div className="absolute top-0 right-0 w-80 h-80 bg-brand-green/10 rounded-full blur-3xl pointer-events-none" />
          <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-8">
            <div className="max-w-2xl text-center lg:text-left">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-green/20 border border-brand-green/40 text-brand-green text-xs font-mono mb-4">
                <Sparkles className="w-3.5 h-3.5" />
                <span>The Billion-Dollar AI Operating System</span>
              </div>
              <h3 className="text-3xl sm:text-4xl font-display font-bold text-white tracking-tight">
                Run Your Entire Business From{" "}
                <span className="text-gradient-green-gold">One Intelligent Platform.</span>
              </h3>
              <p className="mt-3 text-sm sm:text-base text-neutral-400">
                Stop managing 15+ disconnected tools. Join the Human + AI Business Operating System and accelerate your growth with predictable systems.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
              <Link
                href="/simulator"
                className="w-full sm:w-auto px-8 py-4 rounded-xl text-sm font-bold text-black bg-gradient-to-r from-brand-green via-brand-lime to-brand-gold hover:opacity-95 transition-all text-center shadow-glow-green/50"
              >
                Launch AI Simulator™
              </Link>
              <Link
                href="/contact"
                className="w-full sm:w-auto px-8 py-4 rounded-xl text-sm font-semibold text-white bg-white/[0.08] hover:bg-white/[0.14] border border-white/[0.12] transition-all text-center"
              >
                Book Platform Tour
              </Link>
            </div>
          </div>
        </div>

        {/* Footer Navigation Columns */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 lg:gap-10 pb-16 border-b border-white/[0.08]">
          {/* Brand Col */}
          <div className="col-span-2 space-y-4">
            <Link href="/" className="inline-block group">
              <Image
                src="/images/logo.png"
                alt="Automataiz"
                width={190}
                height={50}
                className="h-10 w-auto object-contain transform group-hover:scale-105 transition-transform duration-300"
              />
              <p className="text-[10px] text-neutral-400 font-mono tracking-widest uppercase mt-1">
                AI Business Operating System
              </p>
            </Link>

            <p className="text-xs text-neutral-400 leading-relaxed pr-6">
              Automataiz unifies Marketing, Sales, Operations, Finance, and AI into one intelligent platform, eliminating software fragmentation for modern enterprises.
            </p>

            <div className="pt-2 space-y-2 text-xs text-neutral-300">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-brand-green shrink-0 mt-0.5" />
                <span>Automataiz HQ, Om City, Mancheswar, Bhubaneswar, Odisha – 751017, India</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-brand-green shrink-0" />
                <a href="mailto:hello@automataiz.com" className="hover:text-brand-green transition-colors">
                  hello@automataiz.com
                </a>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-brand-green shrink-0" />
                <a href="tel:+918338091603" className="hover:text-brand-green transition-colors">
                  +91 8338091603
                </a>
              </div>
            </div>

            {/* Official Social Media Channels */}
            <div className="pt-2">
              <div className="text-[11px] font-mono text-neutral-400 mb-2.5 uppercase tracking-wider">
                Follow Official Channels
              </div>
              <div className="flex items-center gap-2 flex-wrap">
                <a
                  href="https://www.linkedin.com/company/automataiz"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                  className="w-8 h-8 rounded-xl bg-white/[0.04] hover:bg-brand-green/20 border border-white/[0.08] hover:border-brand-green/40 text-neutral-400 hover:text-brand-green flex items-center justify-center transition-all duration-200"
                >
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                    <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z"/>
                  </svg>
                </a>
                <a
                  href="https://x.com/Automataiz"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="X (Twitter)"
                  className="w-8 h-8 rounded-xl bg-white/[0.04] hover:bg-brand-gold/20 border border-white/[0.08] hover:border-brand-gold/40 text-neutral-400 hover:text-brand-gold flex items-center justify-center transition-all duration-200"
                >
                  <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                  </svg>
                </a>
                <a
                  href="https://www.instagram.com/automataiz.saas/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram"
                  className="w-8 h-8 rounded-xl bg-white/[0.04] hover:bg-pink-500/20 border border-white/[0.08] hover:border-pink-500/40 text-neutral-400 hover:text-pink-400 flex items-center justify-center transition-all duration-200"
                >
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                  </svg>
                </a>
                <a
                  href="https://www.youtube.com/channel/UCzLu81z2ZEkQi4cWU3501CA"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="YouTube"
                  className="w-8 h-8 rounded-xl bg-white/[0.04] hover:bg-red-500/20 border border-white/[0.08] hover:border-red-500/40 text-neutral-400 hover:text-red-400 flex items-center justify-center transition-all duration-200"
                >
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                  </svg>
                </a>
                <a
                  href="https://www.facebook.com/automataiz"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Facebook"
                  className="w-8 h-8 rounded-xl bg-white/[0.04] hover:bg-blue-600/20 border border-white/[0.08] hover:border-blue-600/40 text-neutral-400 hover:text-blue-400 flex items-center justify-center transition-all duration-200"
                >
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                  </svg>
                </a>
              </div>
            </div>
          </div>

          {/* Product Modules */}
          <div>
            <h4 className="text-xs font-mono uppercase tracking-widest text-brand-green font-semibold mb-4">
              Platform
            </h4>
            <ul className="space-y-2 text-xs text-neutral-400">
              <li>
                <Link href="/product" className="hover:text-white transition-colors">
                  Lead Gen & Funnels
                </Link>
              </li>
              <li>
                <Link href="/product" className="hover:text-white transition-colors">
                  Unified CRM & Pipeline
                </Link>
              </li>
              <li>
                <Link href="/product" className="hover:text-white transition-colors">
                  Unified Inbox (WhatsApp WABA)
                </Link>
              </li>
              <li>
                <Link href="/product" className="hover:text-white transition-colors">
                  AI Social & Content
                </Link>
              </li>
              <li>
                <Link href="/product" className="hover:text-white transition-colors">
                  Ad Launcher Engine
                </Link>
              </li>
              <li>
                <Link href="/product" className="hover:text-white transition-colors">
                  Vibe Prospecting Outbound
                </Link>
              </li>
              <li>
                <Link href="/product" className="hover:text-white transition-colors">
                  Workflow Visual Automation
                </Link>
              </li>
            </ul>
          </div>

          {/* Solutions Pillars */}
          <div>
            <h4 className="text-xs font-mono uppercase tracking-widest text-brand-gold font-semibold mb-4">
              Solutions
            </h4>
            <ul className="space-y-2 text-xs text-neutral-400">
              <li>
                <Link href="/solutions" className="hover:text-white transition-colors">
                  Marketing OS
                </Link>
              </li>
              <li>
                <Link href="/solutions" className="hover:text-white transition-colors">
                  Sales OS & Telecalling
                </Link>
              </li>
              <li>
                <Link href="/solutions" className="hover:text-white transition-colors">
                  Operations & HRM
                </Link>
              </li>
              <li>
                <Link href="/solutions" className="hover:text-white transition-colors">
                  Finance & Revenue Engine
                </Link>
              </li>
              <li>
                <Link href="/solutions" className="hover:text-white transition-colors">
                  The Central AI Intelligence Layer
                </Link>
              </li>
              <li>
                <Link href="/solutions" className="hover:text-white transition-colors">
                  CEO Command Dashboard
                </Link>
              </li>
            </ul>
          </div>

          {/* Industry Verticals */}
          <div>
            <h4 className="text-xs font-mono uppercase tracking-widest text-brand-lime font-semibold mb-4">
              Industries
            </h4>
            <ul className="space-y-2 text-xs text-neutral-400">
              <li>
                <Link href="/industries" className="hover:text-white transition-colors">
                  Health & Fitness
                </Link>
              </li>
              <li>
                <Link href="/industries" className="hover:text-white transition-colors">
                  Trainers & Coaches
                </Link>
              </li>
              <li>
                <Link href="/industries" className="hover:text-white transition-colors">
                  Real Estate Firms
                </Link>
              </li>
              <li>
                <Link href="/industries" className="hover:text-white transition-colors">
                  Schools & Institutes
                </Link>
              </li>
              <li>
                <Link href="/industries" className="hover:text-white transition-colors">
                  Insurance & Financial
                </Link>
              </li>
              <li>
                <Link href="/industries" className="hover:text-white transition-colors">
                  Agencies & MSMEs
                </Link>
              </li>
            </ul>
          </div>

          {/* Company & Founder */}
          <div>
            <h4 className="text-xs font-mono uppercase tracking-widest text-neutral-300 font-semibold mb-4">
              Company
            </h4>
            <ul className="space-y-2 text-xs text-neutral-400">
              <li>
                <Link href="/company" className="hover:text-white transition-colors">
                  Founder Story (Debasish Kabi)
                </Link>
              </li>
              <li>
                <Link href="/company" className="hover:text-white transition-colors">
                  Vision 2030 - 2040
                </Link>
              </li>
              <li>
                <Link href="/company" className="hover:text-white transition-colors">
                  Operating Principles
                </Link>
              </li>
              <li>
                <Link href="/company" className="hover:text-white transition-colors">
                  The Automataiz Manifesto
                </Link>
              </li>
              <li>
                <Link href="/pricing" className="hover:text-white transition-colors">
                  Pricing Plans & ROI
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-white transition-colors">
                  Contact & Bookings
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-neutral-500">
          <div className="flex items-center gap-3">
            <span className="font-mono">© {new Date().getFullYear()} Automataiz Technologies. All rights reserved.</span>
            <span className="text-neutral-700">|</span>
            <span className="text-neutral-400">Official Tagline: &quot;The Future of Business. Automated.&quot;</span>
          </div>

          <div className="flex items-center gap-6">
            <Link href="/privacy" className="hover:text-neutral-300 transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms" className="hover:text-neutral-300 transition-colors">
              Terms of Service
            </Link>
            <Link href="/refund-policy" className="hover:text-neutral-300 transition-colors">
              Refund Policy
            </Link>
            <Link href="/ai-safety" className="hover:text-neutral-300 transition-colors">
              AI Safety & Governance
            </Link>
            <span className="text-brand-green font-mono">Bhubaneswar, India 🇮🇳</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
