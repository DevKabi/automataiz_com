"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import {
  Sparkles,
  ChevronDown,
  Menu,
  X,
  Calculator,
  Layers,
  Building,
  Target,
  ArrowRight,
  Cpu,
  ShieldAlert,
} from "lucide-react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [productDropdown, setProductDropdown] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Product", href: "/product" },
    { name: "Solutions", href: "/solutions" },
    {
      name: "Growth Simulator",
      href: "/simulator",
      badge: "AI ROI",
      badgeColor: "bg-brand-green/20 text-brand-green border-brand-green/40",
    },
    { name: "Industries", href: "/industries" },
    { name: "Pricing", href: "/pricing" },
    { name: "Company", href: "/company" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#050505]/85 backdrop-blur-xl border-b border-white/[0.08] shadow-2xl shadow-black/80 py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand Logo */}
        <Link href="/" className="flex items-center gap-3 group">
          <Image
            src="/images/logo.png"
            alt="Automataiz"
            width={170}
            height={44}
            className="h-8 sm:h-9 w-auto object-contain transform group-hover:scale-105 transition-transform duration-300"
            priority
          />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-1 bg-white/[0.03] border border-white/[0.08] backdrop-blur-md rounded-full px-4 py-1.5 shadow-inner">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.name}
                href={link.href}
                className={`relative px-3.5 py-1.5 text-xs font-medium rounded-full transition-all duration-200 flex items-center gap-1.5 ${
                  isActive
                    ? "text-white bg-white/10 shadow-sm"
                    : "text-neutral-300 hover:text-white hover:bg-white/[0.05]"
                }`}
              >
                <span>{link.name}</span>
                {link.badge && (
                  <span
                    className={`text-[9px] font-mono px-1.5 py-0.2 rounded-full border animate-pulse ${link.badgeColor}`}
                  >
                    {link.badge}
                  </span>
                )}
              </Link>
            );
          })}
        </nav>

        {/* Right Actions */}
        <div className="hidden lg:flex items-center gap-3">
          <div className="flex items-center gap-2 px-2.5 py-1 rounded-full bg-brand-green/10 border border-brand-green/30 text-brand-green text-[11px] font-mono">
            <span className="w-2 h-2 rounded-full bg-brand-green animate-ping" />
            <span>AI Core Active</span>
          </div>

          <Link
            href="/simulator"
            className="group relative inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-semibold text-black bg-gradient-to-r from-brand-green via-brand-lime to-brand-gold hover:opacity-95 transition-all shadow-glow-green/30 hover:shadow-glow-gold/50"
          >
            <Sparkles className="w-3.5 h-3.5 text-black" />
            <span>Calculate ROI</span>
            <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
          </Link>
        </div>

        {/* Mobile Hamburger */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="lg:hidden p-2 rounded-xl bg-white/[0.05] border border-white/[0.1] text-neutral-300 hover:text-white"
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#080808]/95 backdrop-blur-2xl border-b border-white/[0.1] px-5 py-6 space-y-4 animate-in fade-in slide-in-from-top-4 duration-300">
          <div className="flex flex-col space-y-2">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`flex items-center justify-between px-4 py-3 rounded-xl text-sm font-medium transition-all ${
                    isActive
                      ? "bg-brand-green/15 text-brand-green border border-brand-green/30"
                      : "text-neutral-300 hover:bg-white/[0.05] hover:text-white"
                  }`}
                >
                  <span>{link.name}</span>
                  {link.badge && (
                    <span
                      className={`text-[10px] font-mono px-2 py-0.5 rounded-full border ${link.badgeColor}`}
                    >
                      {link.badge}
                    </span>
                  )}
                </Link>
              );
            })}
          </div>

          <div className="pt-4 border-t border-white/[0.08] flex flex-col gap-3">
            <Link
              href="/simulator"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full flex items-center justify-center gap-2 px-5 py-3 rounded-xl text-sm font-bold text-black bg-gradient-to-r from-brand-green via-brand-lime to-brand-gold shadow-glow-green/40"
            >
              <Sparkles className="w-4 h-4 text-black" />
              <span>Launch Growth Simulator™</span>
            </Link>

            <Link
              href="/contact"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full flex items-center justify-center gap-2 px-5 py-3 rounded-xl text-sm font-semibold text-white bg-white/[0.08] border border-white/[0.12] hover:bg-white/[0.12]"
            >
              <span>Book Strategy Demo</span>
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
