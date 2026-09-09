"use client";

import React, { useRef, useState } from "react";
import { motion, useMotionValue, useSpring, useTransform, useMotionTemplate } from "framer-motion";

interface Card3DProps {
  children: React.ReactNode;
  className?: string;
  intensity?: number;
  glowColor?: "green" | "gold" | "lime" | "default";
}

export default function Card3D({
  children,
  className = "",
  intensity = 2.5,
  glowColor = "green",
}: Card3DProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);

  const mouseX = useMotionValue(0.5);
  const mouseY = useMotionValue(0.5);

  const rotateX = useSpring(
    useTransform(mouseY, [0, 1], [intensity, -intensity]),
    { stiffness: 140, damping: 35 }
  );
  const rotateY = useSpring(
    useTransform(mouseX, [0, 1], [-intensity, intensity]),
    { stiffness: 140, damping: 35 }
  );

  const lightX = useTransform(mouseX, [0, 1], ["0%", "100%"]);
  const lightY = useTransform(mouseY, [0, 1], ["0%", "100%"]);

  const glowRgba =
    glowColor === "gold"
      ? "rgba(244, 200, 0, 0.08)"
      : glowColor === "lime"
      ? "rgba(117, 184, 0, 0.08)"
      : glowColor === "default"
      ? "rgba(255, 255, 255, 0.04)"
      : "rgba(24, 179, 0, 0.08)";

  const specularBackground = useMotionTemplate`radial-gradient(circle 300px at ${lightX} ${lightY}, ${glowRgba} 0%, transparent 70%)`;

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width;
    const y = (e.clientY - rect.top) / rect.height;
    mouseX.set(x);
    mouseY.set(y);
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    mouseX.set(0.5);
    mouseY.set(0.5);
  };

  return (
    <div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className="perspective-1000 w-full"
    >
      <motion.div
        style={{
          rotateX,
          rotateY,
          transformStyle: "preserve-3d",
        }}
        animate={{
          scale: isHovered ? 1.006 : 1,
        }}
        transition={{ duration: 0.3, ease: "easeOut" }}
        className={`relative rounded-3xl overflow-hidden glass-panel transition-colors duration-300 ${className}`}
      >
        {/* Dynamic Subtle Specular Light Layer */}
        {isHovered && (
          <motion.div
            className="pointer-events-none absolute -inset-px rounded-3xl opacity-100 transition-opacity duration-300 z-10"
            style={{
              background: specularBackground,
            }}
          />
        )}

        {/* Card Content Container */}
        <div className="relative z-20">
          {children}
        </div>
      </motion.div>
    </div>
  );
}
