"use client";

import React from "react";
import { motion, useScroll, useTransform } from "framer-motion";

interface ParallaxFloatProps {
  children?: React.ReactNode;
  speed?: number;
  className?: string;
}

export default function ParallaxFloat({
  children,
  speed = 40,
  className = "",
}: ParallaxFloatProps) {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 1000], [0, -speed]);
  const rotate = useTransform(scrollY, [0, 1000], [0, speed > 0 ? 8 : -8]);

  return (
    <motion.div
      style={{ y, rotate }}
      className={`pointer-events-none ${className}`}
    >
      {children}
    </motion.div>
  );
}
