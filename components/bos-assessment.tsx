"use client";

import React, { useState } from "react";
import {
  CheckCircle2,
  Sparkles,
  ArrowRight,
  ShieldCheck,
  Zap,
  Activity,
  Layers,
  HelpCircle,
} from "lucide-react";
import Link from "next/link";

interface Question {
  id: number;
  category: "CRM" | "FollowUp" | "Finance" | "WhatsApp" | "AI" | "Journey";
  pillar: string;
  question: string;
  options: { label: string; points: number }[];
}

const ASSESSMENT_QUESTIONS: Question[] = [
  {
    id: 1,
    category: "CRM",
    pillar: "Sales OS",
    question: "Do you have a unified CRM that tracks every lead, call recording, and pipeline stage in one place?",
    options: [
      { label: "Yes, fully centralized in one platform", points: 100 },
      { label: "Partially, but data is spread across spreadsheets & apps", points: 45 },
      { label: "No, we rely on manual notes and memory", points: 10 },
    ],
  },
  {
    id: 2,
    category: "FollowUp",
    pillar: "Marketing OS",
    question: "How fast does your business follow up with new incoming leads?",
    options: [
      { label: "Instant & automated within 2 minutes via WhatsApp & Email", points: 100 },
      { label: "Manual follow-up within a few hours to 1 day", points: 50 },
      { label: "Irregular, many leads wait 24-48 hours or get missed", points: 15 },
    ],
  },
  {
    id: 3,
    category: "Finance",
    pillar: "Finance OS",
    question: "Do you track real-time CAC, customer LTV, and campaign ROI on a live dashboard?",
    options: [
      { label: "Yes, real-time single source of truth", points: 100 },
      { label: "We calculate monthly on spreadsheets", points: 50 },
      { label: "We don't track accurate ROI per lead channel", points: 20 },
    ],
  },
  {
    id: 4,
    category: "WhatsApp",
    pillar: "Operations OS",
    question: "Do you use official WhatsApp Business API (WABA) for automated journeys and broadcast campaigns?",
    options: [
      { label: "Yes, fully automated multi-step flows", points: 100 },
      { label: "Just standard WhatsApp app manually", points: 40 },
      { label: "No WhatsApp automation used", points: 10 },
    ],
  },
  {
    id: 5,
    category: "AI",
    pillar: "AI Intelligence Layer",
    question: "Do you deploy autonomous AI Agents (AI SDR, AI Content Creator, AI Support)?",
    options: [
      { label: "Yes, AI workforce is embedded in daily workflows", points: 100 },
      { label: "We occasionally use ChatGPT manually for copy", points: 45 },
      { label: "No AI adoption yet", points: 10 },
    ],
  },
  {
    id: 6,
    category: "Journey",
    pillar: "Operations OS",
    question: "Do you track the full customer journey from first ad click to member, repeat buyer, and advocate?",
    options: [
      { label: "End-to-end visible flywheel", points: 100 },
      { label: "Only track until first sale", points: 45 },
      { label: "Disconnected fragmented touchpoints", points: 15 },
    ],
  },
];

export default function BOSAssessment() {
  const [currentStep, setCurrentStep] = useState(0);
  const [answers, setAnswers] = useState<Record<number, number>>({});
  const [isCompleted, setIsCompleted] = useState(false);

  const handleSelectOption = (points: number) => {
    const nextAnswers = { ...answers, [currentStep]: points };
    setAnswers(nextAnswers);

    if (currentStep < ASSESSMENT_QUESTIONS.length - 1) {
      setCurrentStep(currentStep + 1);
    } else {
      setIsCompleted(true);
    }
  };

  const calculatedScores = React.useMemo(() => {
    const qValues = Object.values(answers);
    const avgScore =
      qValues.length > 0
        ? Math.round(qValues.reduce((a, b) => a + b, 0) / ASSESSMENT_QUESTIONS.length)
        : 45;

    return {
      overallScore: avgScore,
      marketingScore: Math.round(((answers[1] || 40) + (answers[5] || 40)) / 2),
      salesScore: Math.round(((answers[0] || 40) + (answers[1] || 40)) / 2),
      operationsScore: Math.round(((answers[3] || 40) + (answers[5] || 40)) / 2),
      financeScore: answers[2] || 40,
      aiReadinessScore: answers[4] || 35,
      automationScore: Math.round(((answers[1] || 40) + (answers[3] || 40) + (answers[4] || 40)) / 3),
    };
  }, [answers]);

  return (
    <section className="relative py-20 sm:py-28 bg-[#060606] overflow-hidden border-t border-white/[0.06]">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-gold/15 border border-brand-gold/30 text-brand-gold text-xs font-mono mb-3">
            <Activity className="w-3.5 h-3.5" />
            <span>60-Second Diagnostic</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-display font-bold text-white tracking-tight">
            Business Operating System Assessment™
          </h2>
          <p className="mt-2 text-xs sm:text-sm text-neutral-400">
            Diagnose your organization across Marketing, Sales, Operations, Finance, and AI Readiness in under 1 minute.
          </p>
        </div>

        {/* Assessment Card */}
        <div className="p-6 sm:p-10 rounded-3xl glass-panel border border-white/[0.12] bg-[#090909]/90 shadow-2xl relative overflow-hidden">
          {!isCompleted ? (
            <div className="space-y-8 animate-in fade-in duration-300">
              {/* Progress bar */}
              <div className="flex items-center justify-between text-xs font-mono text-neutral-400 mb-2">
                <span>
                  Question {currentStep + 1} of {ASSESSMENT_QUESTIONS.length}
                </span>
                <span className="text-brand-green">
                  Pillar: {ASSESSMENT_QUESTIONS[currentStep].pillar}
                </span>
              </div>
              <div className="w-full h-1.5 bg-white/10 rounded-full overflow-hidden">
                <div
                  className="h-full bg-gradient-to-r from-brand-green to-brand-gold transition-all duration-300 rounded-full"
                  style={{
                    width: `${((currentStep + 1) / ASSESSMENT_QUESTIONS.length) * 100}%`,
                  }}
                />
              </div>

              {/* Question Text */}
              <div>
                <h3 className="text-xl sm:text-2xl font-display font-semibold text-white leading-snug">
                  {ASSESSMENT_QUESTIONS[currentStep].question}
                </h3>
              </div>

              {/* Options */}
              <div className="space-y-3">
                {ASSESSMENT_QUESTIONS[currentStep].options.map((option, idx) => (
                  <button
                    key={idx}
                    onClick={() => handleSelectOption(option.points)}
                    className="w-full p-4 sm:p-5 rounded-2xl bg-white/[0.02] hover:bg-white/[0.06] border border-white/[0.08] hover:border-brand-green/50 text-left text-sm text-neutral-200 hover:text-white transition-all flex items-center justify-between group"
                  >
                    <span>{option.label}</span>
                    <ArrowRight className="w-4 h-4 text-neutral-500 group-hover:text-brand-green group-hover:translate-x-1 transition-all" />
                  </button>
                ))}
              </div>
            </div>
          ) : (
            /* Results Screen */
            <div className="space-y-8 animate-in fade-in duration-300">
              <div className="text-center space-y-2">
                <div className="w-16 h-16 rounded-full bg-brand-gold/20 border border-brand-gold text-brand-gold flex items-center justify-center mx-auto shadow-glow-gold">
                  <Sparkles className="w-8 h-8" />
                </div>
                <div className="text-xs font-mono uppercase tracking-widest text-neutral-400">
                  Assessment Complete
                </div>
                <h3 className="text-3xl font-display font-bold text-white">
                  Your Business OS Score:{" "}
                  <span className="text-gradient-green-gold">
                    {calculatedScores.overallScore}/100
                  </span>
                </h3>
                <p className="text-xs sm:text-sm text-neutral-300 max-w-lg mx-auto">
                  {calculatedScores.overallScore < 60
                    ? "Your business is suffering from heavy software fragmentation and slow follow-ups. Automataiz can streamline operations and recover lost revenue."
                    : "You have strong foundation, but significant revenue is still left on the table due to disconnected tools and lack of AI workforce automation."}
                </p>
              </div>

              {/* 6 Score Breakdown Cards */}
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                {[
                  { label: "Marketing OS", score: calculatedScores.marketingScore, color: "text-brand-green" },
                  { label: "Sales OS", score: calculatedScores.salesScore, color: "text-brand-gold" },
                  { label: "Operations OS", score: calculatedScores.operationsScore, color: "text-brand-lime" },
                  { label: "Finance OS", score: calculatedScores.financeScore, color: "text-neutral-200" },
                  { label: "AI Readiness", score: calculatedScores.aiReadinessScore, color: "text-brand-green" },
                  { label: "Automation Index", score: calculatedScores.automationScore, color: "text-brand-gold" },
                ].map((item, idx) => (
                  <div key={idx} className="p-4 rounded-2xl bg-white/[0.02] border border-white/[0.06]">
                    <div className="text-xs text-neutral-400">{item.label}</div>
                    <div className={`font-mono font-bold text-xl mt-1 ${item.color}`}>
                      {item.score} / 100
                    </div>
                    <div className="w-full h-1 bg-white/10 rounded-full mt-2 overflow-hidden">
                      <div
                        className="h-full bg-brand-green rounded-full"
                        style={{ width: `${item.score}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>

              {/* Final Conversion CTA */}
              <div className="p-6 rounded-2xl bg-gradient-to-r from-[#0d1e0c] via-black to-[#1c1806] border border-brand-green/40 flex flex-col sm:flex-row items-center justify-between gap-6">
                <div>
                  <h4 className="font-display font-bold text-lg text-white">
                    You Could Be Losing Lakhs Every Month Without Knowing It.
                  </h4>
                  <p className="text-xs text-neutral-300 mt-1">
                    See exactly how Automataiz can automate, optimize, and scale your business.
                  </p>
                </div>

                <div className="flex flex-col sm:flex-row gap-3 w-full sm:w-auto shrink-0">
                  <Link
                    href="/simulator"
                    className="px-5 py-3 rounded-xl text-xs font-bold text-black bg-gradient-to-r from-brand-green to-brand-gold hover:opacity-95 text-center shadow-glow-green/30"
                  >
                    Run Full ROI Simulator
                  </Link>
                  <Link
                    href="/contact"
                    className="px-5 py-3 rounded-xl text-xs font-semibold text-white bg-white/[0.08] hover:bg-white/[0.14] border border-white/[0.1] text-center"
                  >
                    Book Strategy Call
                  </Link>
                </div>
              </div>

              {/* Retake button */}
              <div className="text-center">
                <button
                  onClick={() => {
                    setCurrentStep(0);
                    setAnswers({});
                    setIsCompleted(false);
                  }}
                  className="text-xs font-mono text-neutral-500 hover:text-neutral-300 underline"
                >
                  Retake Assessment
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
