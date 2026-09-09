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
  speed = 15,
  className = "",
}: ParallaxFloatProps) {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 1000], [0, -speed]);

  return (
    <motion.div
      style={{ y }}
      className={`pointer-events-none ${className}`}
    >
      {children}
    </motion.div>
  );
}
