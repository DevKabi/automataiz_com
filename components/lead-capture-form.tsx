"use client";

import React, { useState } from "react";
import { Sparkles, Loader2, ShieldCheck, Lock } from "lucide-react";

interface LeadCaptureFormProps {
  title?: string;
  subtitle?: string;
  className?: string;
  minHeight?: string;
}

export default function LeadCaptureForm({
  title = "Book Your 1-on-1 Platform Tour",
  subtitle = "Fill in your details below to schedule a live strategy walkthrough & demo with our team.",
  className = "",
  minHeight = "640px",
}: LeadCaptureFormProps) {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <div className={`w-full flex flex-col ${className}`}>
      {title && (
        <div className="mb-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-green/10 border border-brand-green/30 text-brand-green text-xs font-mono mb-2">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Automataiz Direct CRM Connection</span>
          </div>
          <h3 className="text-2xl sm:text-3xl font-display font-bold text-white tracking-tight">
            {title}
          </h3>
          {subtitle && (
            <p className="text-xs sm:text-sm text-neutral-300 mt-1 leading-relaxed">
              {subtitle}
            </p>
          )}
        </div>
      )}

      {/* Form Container with Loading State */}
      <div className="relative w-full rounded-2xl overflow-hidden bg-black/40 border border-white/[0.08] shadow-inner">
        {isLoading && (
          <div className="absolute inset-0 flex flex-col items-center justify-center bg-[#090909] z-10 space-y-3 p-6">
            <Loader2 className="w-8 h-8 text-brand-green animate-spin" />
            <div className="text-xs font-mono text-neutral-400 animate-pulse">
              Loading Secure Lead Capture Form...
            </div>
          </div>
        )}

        <iframe
          src="https://login.automataiz.com/form/automataiz-lead-capture-form-mu30ncl2"
          width="100%"
          height="640"
          frameBorder="0"
          style={{ border: "none", minHeight }}
          title="Automataiz Lead Capture Form"
          onLoad={() => setIsLoading(false)}
          className="w-full relative z-0 transition-opacity duration-300"
          allow="camera; microphone; autoplay; encrypted-media; fullscreen"
        />
      </div>

      {/* Trust & Privacy Guarantee Bar */}
      <div className="mt-3 flex items-center justify-between text-[11px] font-mono text-neutral-400 px-1">
        <div className="flex items-center gap-1.5">
          <Lock className="w-3.5 h-3.5 text-brand-green" />
          <span>256-bit Encrypted Transmission</span>
        </div>
        <div className="flex items-center gap-1.5">
          <ShieldCheck className="w-3.5 h-3.5 text-brand-gold" />
          <span>15-Min Response SLA</span>
        </div>
      </div>
    </div>
  );
}
