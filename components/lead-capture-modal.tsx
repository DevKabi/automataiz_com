"use client";

import React, { useEffect } from "react";
import { X, Sparkles, ShieldCheck } from "lucide-react";
import LeadCaptureForm from "@/components/lead-capture-form";

interface LeadCaptureModalProps {
  isOpen: boolean;
  onClose: () => void;
  title?: string;
  subtitle?: string;
  planName?: string;
}

export default function LeadCaptureModal({
  isOpen,
  onClose,
  title,
  subtitle,
  planName,
}: LeadCaptureModalProps) {
  // Prevent body scroll when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  // Handle ESC key press
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    if (isOpen) window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/85 backdrop-blur-2xl animate-in fade-in duration-300">
      {/* Background click overlay */}
      <div
        className="absolute inset-0 z-0"
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Modal Card */}
      <div className="relative z-10 w-full max-w-2xl max-h-[92vh] overflow-y-auto rounded-3xl bg-[#090909] border border-white/[0.15] p-5 sm:p-8 shadow-2xl space-y-4 touch-scroll">
        {/* Glow ambient background effects */}
        <div className="absolute -top-24 -right-24 w-60 h-60 bg-brand-green/20 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute -bottom-24 -left-24 w-60 h-60 bg-brand-gold/15 rounded-full blur-3xl pointer-events-none" />

        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 sm:top-5 sm:right-5 p-2 rounded-full bg-white/[0.06] hover:bg-white/[0.12] text-neutral-400 hover:text-white transition-all z-20"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Dynamic header if plan/service specified */}
        {planName && (
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-brand-gold/15 border border-brand-gold/40 text-brand-gold text-xs font-mono font-bold">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Selected Plan // {planName}</span>
          </div>
        )}

        <LeadCaptureForm
          title={title || (planName ? `Get Started with ${planName}` : "Schedule Your Strategy Demo")}
          subtitle={
            subtitle ||
            "Submit your details below and our solutions architecture team will contact you within 15 minutes."
          }
          minHeight="600px"
        />
      </div>
    </div>
  );
}
