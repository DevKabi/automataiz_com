"use client";

import React from "react";
import { motion, useScroll, useSpring } from "framer-motion";

export default function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <div className="fixed top-0 left-0 right-0 h-[3px] z-[100] pointer-events-none bg-transparent">
      {/* Background track */}
      <motion.div
        className="h-full bg-gradient-to-r from-brand-green via-brand-lime to-brand-gold origin-left shadow-[0_0_12px_#18B300,0_0_24px_#F4C800]"
        style={{ scaleX }}
      />
    </div>
  );
}
