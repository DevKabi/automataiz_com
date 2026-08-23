"use client";

import React, { useState } from "react";
import Image from "next/image";
import {
  Sparkles,
  MapPin,
  Mail,
  Phone,
  MessageSquare,
  Calendar,
  Clock,
  CheckCircle2,
  Send,
  ShieldCheck,
  Building2,
} from "lucide-react";
import confetti from "canvas-confetti";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    industry: "Health & Fitness",
    message: "",
    preferredSlot: "Tomorrow Morning (10:00 AM - 1:00 PM)",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    confetti({
      particleCount: 80,
      spread: 60,
      origin: { y: 0.6 },
      colors: ["#18B300", "#75B800", "#F4C800"],
    });
    setIsSubmitted(true);
  };

  return (
    <div className="pt-28 pb-20 space-y-20">
      {/* Top Banner */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-green/10 border border-brand-green/30 text-brand-green text-xs font-mono mb-4">
          <Sparkles className="w-3.5 h-3.5" />
          <span>Executive Consultation &amp; Demos</span>
        </div>

        <h1 className="text-4xl sm:text-6xl font-display font-extrabold text-white tracking-tight max-w-4xl mx-auto leading-tight">
          Let’s Build Your Business{" "}
          <span className="text-gradient-green-gold">Operating System.</span>
        </h1>
        <p className="mt-4 text-base sm:text-lg text-neutral-300 max-w-2xl mx-auto">
          Schedule a personalized 1-on-1 strategy demonstration with our founder or solutions architecture team in Bhubaneswar.
        </p>
      </section>

      {/* Main 2-Column Booking & Contact Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          {/* Left: Contact Info & Headquarters (5 Cols) */}
          <div className="lg:col-span-5 space-y-6">
            {/* HQ Card */}
            <div className="p-5 sm:p-8 rounded-3xl glass-panel border border-brand-green/30 bg-gradient-to-br from-[#091608] via-[#080808] to-[#141205] space-y-6">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-black/60 border border-brand-green/40 flex items-center justify-center">
                  <Image
                    src="/images/ai-chip.png"
                    alt="Automataiz AI Chip"
                    width={24}
                    height={24}
                  />
                </div>
                <div>
                  <h3 className="font-display font-bold text-lg text-white">
                    Automataiz Global Headquarters
                  </h3>
                  <div className="text-xs text-brand-green font-mono">
                    Mancheswar, Bhubaneswar, India
                  </div>
                </div>
              </div>

              <div className="space-y-4 text-xs text-neutral-300">
                <div className="flex items-start gap-3 p-3.5 rounded-2xl bg-white/[0.02] border border-white/[0.06]">
                  <MapPin className="w-4 h-4 text-brand-gold shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-white block font-sans">Office Address:</strong>
                    Automataiz, Om City, Mancheswar, Bhubaneswar, Odisha – 751017, India
                  </div>
                </div>

                <div className="flex items-center gap-3 p-3.5 rounded-2xl bg-white/[0.02] border border-white/[0.06]">
                  <Mail className="w-4 h-4 text-brand-green shrink-0" />
                  <div>
                    <strong className="text-white block font-sans">Official Email:</strong>
                    <a href="mailto:hello@automataiz.com" className="text-brand-green hover:underline">
                      hello@automataiz.com
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-3 p-3.5 rounded-2xl bg-white/[0.02] border border-white/[0.06]">
                  <Phone className="w-4 h-4 text-brand-lime shrink-0" />
                  <div>
                    <strong className="text-white block font-sans">Direct Helpline:</strong>
                    <a href="tel:+918338091603" className="text-brand-lime hover:underline">
                      +91 8338091603
                    </a>
                  </div>
                </div>
              </div>

              {/* Direct WhatsApp Quick Chat */}
              <div className="pt-2">
                <a
                  href="https://wa.me/918338091603?text=Hello%20Automataiz%20Team%2C%20I%20would%20like%20to%20schedule%20a%20platform%20demo."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-3.5 px-4 rounded-2xl bg-[#25D366]/20 border border-[#25D366]/40 text-[#25D366] font-bold text-xs flex items-center justify-center gap-2.5 hover:bg-[#25D366]/30 transition-all shadow-lg"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>Chat Directly on WhatsApp</span>
                </a>
              </div>

              {/* Official Social Media Channels */}
              <div className="pt-3 border-t border-white/[0.08]">
                <div className="text-[11px] font-mono text-neutral-400 mb-2 uppercase tracking-wider">
                  Connect on Official Social Media
                </div>
                <div className="flex items-center gap-2 flex-wrap">
                  <a
                    href="https://www.linkedin.com/company/automataiz"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="LinkedIn"
                    className="flex-1 min-w-[70px] py-2 px-2.5 rounded-xl bg-white/[0.03] hover:bg-brand-green/20 border border-white/[0.08] hover:border-brand-green/40 text-neutral-300 hover:text-brand-green text-[11px] font-mono flex items-center justify-center gap-1.5 transition-all"
                  >
                    <svg className="w-3.5 h-3.5 fill-current shrink-0" viewBox="0 0 24 24">
                      <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z"/>
                    </svg>
                    <span>LinkedIn</span>
                  </a>
                  <a
                    href="https://x.com/Automataiz"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="X (Twitter)"
                    className="flex-1 min-w-[70px] py-2 px-2.5 rounded-xl bg-white/[0.03] hover:bg-brand-gold/20 border border-white/[0.08] hover:border-brand-gold/40 text-neutral-300 hover:text-brand-gold text-[11px] font-mono flex items-center justify-center gap-1.5 transition-all"
                  >
                    <svg className="w-3 h-3 fill-current shrink-0" viewBox="0 0 24 24">
                      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                    </svg>
                    <span>X</span>
                  </a>
                  <a
                    href="https://www.instagram.com/automataiz.saas/"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Instagram"
                    className="flex-1 min-w-[70px] py-2 px-2.5 rounded-xl bg-white/[0.03] hover:bg-pink-500/20 border border-white/[0.08] hover:border-pink-500/40 text-neutral-300 hover:text-pink-400 text-[11px] font-mono flex items-center justify-center gap-1.5 transition-all"
                  >
                    <svg className="w-3.5 h-3.5 fill-current shrink-0" viewBox="0 0 24 24">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                    </svg>
                    <span>Instagram</span>
                  </a>
                  <a
                    href="https://www.youtube.com/channel/UCzLu81z2ZEkQi4cWU3501CA"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="YouTube"
                    className="flex-1 min-w-[70px] py-2 px-2.5 rounded-xl bg-white/[0.03] hover:bg-red-500/20 border border-white/[0.08] hover:border-red-500/40 text-neutral-300 hover:text-red-400 text-[11px] font-mono flex items-center justify-center gap-1.5 transition-all"
                  >
                    <svg className="w-3.5 h-3.5 fill-current shrink-0" viewBox="0 0 24 24">
                      <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                    </svg>
                    <span>YouTube</span>
                  </a>
                  <a
                    href="https://www.facebook.com/automataiz"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Facebook"
                    className="flex-1 min-w-[70px] py-2 px-2.5 rounded-xl bg-white/[0.03] hover:bg-blue-600/20 border border-white/[0.08] hover:border-blue-600/40 text-neutral-300 hover:text-blue-400 text-[11px] font-mono flex items-center justify-center gap-1.5 transition-all"
                  >
                    <svg className="w-3.5 h-3.5 fill-current shrink-0" viewBox="0 0 24 24">
                      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                    </svg>
                    <span>Facebook</span>
                  </a>
                </div>
              </div>
            </div>

            {/* SLA Guarantee */}
            <div className="p-6 rounded-3xl glass-panel text-xs text-neutral-300 space-y-2">
              <div className="flex items-center gap-2 font-mono font-bold text-brand-green">
                <ShieldCheck className="w-4 h-4" />
                <span>Executive Response SLA Guarantee</span>
              </div>
              <p className="text-neutral-400 leading-relaxed">
                All platform demo and white-label reseller inquiries receive a response within 15 minutes during standard Indian business hours.
              </p>
            </div>
          </div>

          {/* Right: Booking Form (7 Cols) */}
          <div className="lg:col-span-7">
            <div className="p-5 sm:p-8 lg:p-10 rounded-3xl glass-panel border border-white/[0.12] bg-[#090909]/90 shadow-2xl relative overflow-hidden">
              {!isSubmitted ? (
                <form onSubmit={handleSubmit} className="space-y-4 text-xs">
                  <div className="mb-4">
                    <h3 className="text-2xl font-display font-bold text-white">
                      Book Your 1-on-1 Platform Tour
                    </h3>
                    <p className="text-xs text-neutral-400 mt-1">
                      See your exact business workflows, funnels, and AI SDR demonstrated live.
                    </p>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-neutral-300 font-medium mb-1">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="Debasish Kabi"
                        value={formData.name}
                        onChange={(e) =>
                          setFormData({ ...formData, name: e.target.value })
                        }
                        className="w-full px-4 py-3 rounded-xl bg-white/[0.04] border border-white/[0.1] focus:border-brand-green focus:outline-none text-white text-xs placeholder:text-neutral-600"
                      />
                    </div>

                    <div>
                      <label className="block text-neutral-300 font-medium mb-1">
                        Work Email *
                      </label>
                      <input
                        type="email"
                        required
                        placeholder="you@company.com"
                        value={formData.email}
                        onChange={(e) =>
                          setFormData({ ...formData, email: e.target.value })
                        }
                        className="w-full px-4 py-3 rounded-xl bg-white/[0.04] border border-white/[0.1] focus:border-brand-green focus:outline-none text-white text-xs placeholder:text-neutral-600"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-neutral-300 font-medium mb-1">
                        Phone / WhatsApp *
                      </label>
                      <input
                        type="tel"
                        required
                        placeholder="+91 8338091603"
                        value={formData.phone}
                        onChange={(e) =>
                          setFormData({ ...formData, phone: e.target.value })
                        }
                        className="w-full px-4 py-3 rounded-xl bg-white/[0.04] border border-white/[0.1] focus:border-brand-green focus:outline-none text-white text-xs placeholder:text-neutral-600"
                      />
                    </div>

                    <div>
                      <label className="block text-neutral-300 font-medium mb-1">
                        Company Name *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="Your Business Name"
                        value={formData.company}
                        onChange={(e) =>
                          setFormData({ ...formData, company: e.target.value })
                        }
                        className="w-full px-4 py-3 rounded-xl bg-white/[0.04] border border-white/[0.1] focus:border-brand-green focus:outline-none text-white text-xs placeholder:text-neutral-600"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-neutral-300 font-medium mb-1">
                        Industry Vertical
                      </label>
                      <select
                        value={formData.industry}
                        onChange={(e) =>
                          setFormData({ ...formData, industry: e.target.value })
                        }
                        className="w-full px-4 py-3 rounded-xl bg-[#121212] border border-white/[0.1] focus:border-brand-green focus:outline-none text-white text-xs"
                      >
                        <option value="Health & Fitness">Health &amp; Fitness</option>
                        <option value="Trainers & Coaches">Trainers &amp; Coaches</option>
                        <option value="Real Estate">Real Estate</option>
                        <option value="Schools & Institutes">Schools &amp; Institutes</option>
                        <option value="Insurance & Finance">Insurance &amp; Finance</option>
                        <option value="Agencies & MSMEs">Agencies &amp; MSMEs</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-neutral-300 font-medium mb-1">
                        Preferred Demo Window
                      </label>
                      <select
                        value={formData.preferredSlot}
                        onChange={(e) =>
                          setFormData({ ...formData, preferredSlot: e.target.value })
                        }
                        className="w-full px-4 py-3 rounded-xl bg-[#121212] border border-white/[0.1] focus:border-brand-green focus:outline-none text-white text-xs"
                      >
                        <option value="Today Afternoon (2:00 PM - 5:00 PM)">
                          Today Afternoon (2:00 PM - 5:00 PM)
                        </option>
                        <option value="Tomorrow Morning (10:00 AM - 1:00 PM)">
                          Tomorrow Morning (10:00 AM - 1:00 PM)
                        </option>
                        <option value="Tomorrow Evening (5:00 PM - 8:00 PM)">
                          Tomorrow Evening (5:00 PM - 8:00 PM)
                        </option>
                        <option value="Weekend Slot">Weekend Slot</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-neutral-300 font-medium mb-1">
                      What is your biggest current business bottleneck?
                    </label>
                    <textarea
                      rows={3}
                      placeholder="e.g. Slow lead follow-up, managing too many separate tools, lack of predictable sales pipeline..."
                      value={formData.message}
                      onChange={(e) =>
                        setFormData({ ...formData, message: e.target.value })
                      }
                      className="w-full px-4 py-3 rounded-xl bg-white/[0.04] border border-white/[0.1] focus:border-brand-green focus:outline-none text-white text-xs placeholder:text-neutral-600 resize-none"
                    />
                  </div>

                  <div className="pt-2">
                    <button
                      type="submit"
                      className="w-full py-4 rounded-xl text-xs font-bold text-black bg-gradient-to-r from-brand-green via-brand-lime to-brand-gold hover:opacity-95 transition-all flex items-center justify-center gap-2 shadow-glow-green/50"
                    >
                      <Send className="w-4 h-4" />
                      <span>Confirm &amp; Schedule Strategy Session</span>
                    </button>
                  </div>
                </form>
              ) : (
                <div className="text-center py-10 space-y-4 animate-in fade-in duration-300">
                  <div className="w-16 h-16 rounded-full bg-brand-green/20 border border-brand-green text-brand-green flex items-center justify-center mx-auto shadow-glow-green">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>

                  <h3 className="text-2xl font-display font-bold text-white">
                    Strategy Session Confirmed!
                  </h3>
                  <p className="text-xs text-neutral-300 max-w-md mx-auto leading-relaxed">
                    Thank you, <strong className="text-brand-green">{formData.name}</strong>. Our team has received your request for{" "}
                    <strong>{formData.company || "your business"}</strong>.
                  </p>

                  <div className="p-4 rounded-2xl bg-white/[0.03] border border-white/[0.08] text-xs text-neutral-300 space-y-1 text-left max-w-md mx-auto">
                    <div>
                      <strong className="text-brand-gold">Slot Booked:</strong> {formData.preferredSlot}
                    </div>
                    <div>
                      <strong className="text-brand-green">Selected Vertical:</strong> {formData.industry}
                    </div>
                    <div className="text-[11px] text-neutral-400 pt-1">
                      A calendar invite and WhatsApp confirmation have been dispatched to {formData.phone}.
                    </div>
                  </div>

                  <div className="pt-4">
                    <button
                      onClick={() => setIsSubmitted(false)}
                      className="text-xs font-mono text-neutral-400 hover:text-white underline"
                    >
                      Submit another inquiry
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
