"use client";

import React, { useState, useEffect } from "react";

interface TypewriterHeadlineProps {
  words?: string[];
  typingSpeed?: number;
  deletingSpeed?: number;
  pauseDuration?: number;
  className?: string;
}

export default function TypewriterHeadline({
  words = [
    "Automated.",
    "Unified.",
    "Autonomous.",
    "Predictable.",
    "Intelligent.",
  ],
  typingSpeed = 100,
  deletingSpeed = 55,
  pauseDuration = 2200,
  className = "",
}: TypewriterHeadlineProps) {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [currentText, setCurrentText] = useState(words[0]);
  const [isDeleting, setIsDeleting] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!mounted) return;

    const currentFullWord = words[currentWordIndex];

    if (isPaused) {
      const pauseTimer = setTimeout(() => {
        setIsPaused(false);
        setIsDeleting(true);
      }, pauseDuration);
      return () => clearTimeout(pauseTimer);
    }

    if (isDeleting) {
      if (currentText.length === 0) {
        setIsDeleting(false);
        setCurrentWordIndex((prev) => (prev + 1) % words.length);
        return;
      }

      const deleteTimer = setTimeout(() => {
        setCurrentText((prev) => prev.slice(0, -1));
      }, deletingSpeed);
      return () => clearTimeout(deleteTimer);
    } else {
      if (currentText === currentFullWord) {
        setIsPaused(true);
        return;
      }

      const typeTimer = setTimeout(() => {
        setCurrentText(currentFullWord.slice(0, currentText.length + 1));
      }, typingSpeed);
      return () => clearTimeout(typeTimer);
    }
  }, [
    currentText,
    isDeleting,
    isPaused,
    currentWordIndex,
    words,
    typingSpeed,
    deletingSpeed,
    pauseDuration,
    mounted,
  ]);

  return (
    <span className={`inline-flex items-baseline ${className}`}>
      <span className="text-gradient-green-gold font-black tracking-tight">
        {mounted ? currentText : words[0]}
      </span>
      <span
        aria-hidden="true"
        className="inline-block w-[3px] sm:w-[4px] h-[0.8em] sm:h-[0.85em] ml-1.5 bg-gradient-to-b from-brand-green via-brand-lime to-brand-gold align-middle rounded-full animate-pulse shadow-[0_0_10px_rgba(24,179,0,0.8)]"
      />
    </span>
  );
}
