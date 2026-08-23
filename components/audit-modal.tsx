"use client";

import React, { useState } from "react";
import {
  X,
  Sparkles,
  Download,
  CheckCircle2,
  FileText,
  Lock,
  ArrowRight,
  ShieldCheck,
} from "lucide-react";
import confetti from "canvas-confetti";
import { SimulatorInputs, SimulatorOutputs } from "@/lib/simulator-calc";
import { generateAuditPDF, AuditLeadData } from "@/lib/audit-generator";

interface AuditModalProps {
  isOpen: boolean;
  onClose: () => void;
  inputs: SimulatorInputs;
  results: SimulatorOutputs;
}

export default function AuditModal({
  isOpen,
  onClose,
  inputs,
  results,
}: AuditModalProps) {
  const [formData, setFormData] = useState<AuditLeadData>({
    name: "",
    email: "",
    phone: "",
    businessName: "",
    teamSize: "1-10",
    monthlyRevenue: "₹5L - ₹20L",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 },
        colors: ["#18B300", "#75B800", "#F4C800", "#FFD200"],
      });

      // Generate the PDF report
      generateAuditPDF(formData, inputs, results);

      setIsSuccess(true);
    } catch (err) {
      console.error(err);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-xl animate-in fade-in duration-300">
      <div className="relative w-full max-w-lg rounded-3xl bg-[#090909] border border-white/[0.15] p-6 sm:p-8 shadow-2xl overflow-hidden">
        {/* Ambient background glows */}
        <div className="absolute -top-24 -right-24 w-60 h-60 bg-brand-green/20 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute -bottom-24 -left-24 w-60 h-60 bg-brand-gold/15 rounded-full blur-3xl pointer-events-none" />

        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-full bg-white/[0.05] hover:bg-white/[0.1] text-neutral-400 hover:text-white transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        {!isSuccess ? (
          <div>
            <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-brand-green/15 border border-brand-green/30 text-brand-green text-xs font-mono w-fit mb-3">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Instant AI Business Audit (PDF)</span>
            </div>

            <h3 className="text-2xl font-display font-bold text-white tracking-tight">
              Unlock Your Detailed Executive Roadmap
            </h3>
            <p className="text-xs text-neutral-400 mt-1 mb-6">
              Receive your customized 4-pillar leak diagnosis, ROI payback roadmap, and step-by-step automation implementation guide.
            </p>

            <form onSubmit={handleSubmit} className="space-y-3.5 text-xs">
              <div>
                <label className="block text-neutral-300 font-medium mb-1">
                  Full Name *
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Debasish Kabi"
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                  className="w-full px-3.5 py-2.5 rounded-xl bg-white/[0.04] border border-white/[0.1] focus:border-brand-green focus:outline-none text-white text-xs placeholder:text-neutral-600"
                />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-neutral-300 font-medium mb-1">
                    Business Email *
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="you@company.com"
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                    className="w-full px-3.5 py-2.5 rounded-xl bg-white/[0.04] border border-white/[0.1] focus:border-brand-green focus:outline-none text-white text-xs placeholder:text-neutral-600"
                  />
                </div>
                <div>
                  <label className="block text-neutral-300 font-medium mb-1">
                    Phone / WhatsApp *
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="+91 98765 43210"
                    value={formData.phone}
                    onChange={(e) =>
                      setFormData({ ...formData, phone: e.target.value })
                    }
                    className="w-full px-3.5 py-2.5 rounded-xl bg-white/[0.04] border border-white/[0.1] focus:border-brand-green focus:outline-none text-white text-xs placeholder:text-neutral-600"
                  />
                </div>
              </div>

              <div>
                <label className="block text-neutral-300 font-medium mb-1">
                  Company / Organization Name *
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Acme Health & Fitness"
                  value={formData.businessName}
                  onChange={(e) =>
                    setFormData({ ...formData, businessName: e.target.value })
                  }
                  className="w-full px-3.5 py-2.5 rounded-xl bg-white/[0.04] border border-white/[0.1] focus:border-brand-green focus:outline-none text-white text-xs placeholder:text-neutral-600"
                />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-neutral-300 font-medium mb-1">
                    Team Size
                  </label>
                  <select
                    value={formData.teamSize}
                    onChange={(e) =>
                      setFormData({ ...formData, teamSize: e.target.value })
                    }
                    className="w-full px-3.5 py-2.5 rounded-xl bg-[#121212] border border-white/[0.1] focus:border-brand-green focus:outline-none text-white text-xs"
                  >
                    <option value="Solo / Founder">Solo / Founder</option>
                    <option value="2-10">2-10 Employees</option>
                    <option value="11-50">11-50 Employees</option>
                    <option value="50+">50+ Enterprise</option>
                  </select>
                </div>
                <div>
                  <label className="block text-neutral-300 font-medium mb-1">
                    Current Monthly Revenue
                  </label>
                  <select
                    value={formData.monthlyRevenue}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        monthlyRevenue: e.target.value,
                      })
                    }
                    className="w-full px-3.5 py-2.5 rounded-xl bg-[#121212] border border-white/[0.1] focus:border-brand-green focus:outline-none text-white text-xs"
                  >
                    <option value="< ₹2 Lakh">&lt; ₹2 Lakh</option>
                    <option value="₹2L - ₹10L">₹2L - ₹10L</option>
                    <option value="₹10L - ₹50L">₹10L - ₹50L</option>
                    <option value="₹50L+">₹50L+ (Scaling)</option>
                  </select>
                </div>
              </div>

              <div className="pt-3">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-3.5 rounded-xl text-sm font-bold text-black bg-gradient-to-r from-brand-green via-brand-lime to-brand-gold hover:opacity-95 transition-all flex items-center justify-center gap-2 shadow-glow-green/50 disabled:opacity-50"
                >
                  <Download className="w-4 h-4" />
                  <span>
                    {isSubmitting
                      ? "Generating Executive Audit..."
                      : "Generate & Download Audit PDF"}
                  </span>
                </button>
              </div>

              <div className="flex items-center justify-center gap-2 text-[10px] text-neutral-500 pt-1">
                <Lock className="w-3 h-3 text-brand-green" />
                <span>100% Confidential. Instant download. Zero spam guaranteed.</span>
              </div>
            </form>
          </div>
        ) : (
          <div className="text-center py-6 space-y-4">
            <div className="w-16 h-16 rounded-full bg-brand-green/20 border border-brand-green text-brand-green flex items-center justify-center mx-auto shadow-glow-green">
              <CheckCircle2 className="w-8 h-8" />
            </div>

            <h3 className="text-2xl font-display font-bold text-white">
              Audit Report Downloaded!
            </h3>
            <p className="text-xs text-neutral-300 max-w-sm mx-auto leading-relaxed">
              Your personalized AI Business Audit PDF for{" "}
              <strong className="text-brand-green">
                {formData.businessName || "your company"}
              </strong>{" "}
              has been generated and saved to your device.
            </p>

            <div className="p-4 rounded-2xl bg-white/[0.03] border border-white/[0.08] text-left text-xs space-y-2">
              <div className="font-semibold text-white flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-brand-gold" />
                Next Step: 1-on-1 Strategy Walkthrough
              </div>
              <p className="text-[11px] text-neutral-400">
                Book a 20-minute consultation with Automataiz founder Debasish Kabi or our AI solutions engineering team to implement these recommendations.
              </p>
            </div>

            <div className="pt-2 flex flex-col sm:flex-row gap-3">
              <a
                href="/contact"
                className="flex-1 py-3 rounded-xl text-xs font-bold text-black bg-gradient-to-r from-brand-green to-brand-gold hover:opacity-95 transition-all text-center flex items-center justify-center gap-2"
              >
                <span>Book 1-on-1 Strategy Call</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </a>
              <button
                onClick={onClose}
                className="py-3 px-5 rounded-xl text-xs font-semibold text-neutral-400 hover:text-white bg-white/[0.05]"
              >
                Close
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
