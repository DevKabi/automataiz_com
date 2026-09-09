"use client";

import React, { useEffect, useRef } from "react";

interface Node {
  x: number;
  y: number;
  z: number;
  vx: number;
  vy: number;
  vz: number;
  radius: number;
  color: string;
  glow: string;
  pulsePhase: number;
}

export default function NeuralBackground() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const mouse = {
      x: width / 2,
      y: height / 2,
      targetX: width / 2,
      targetY: height / 2,
      active: false,
    };

    interface Wave {
      x: number;
      y: number;
      radius: number;
      maxRadius: number;
      opacity: number;
    }
    const waves: Wave[] = [];

    const handleMouseMove = (e: MouseEvent) => {
      mouse.targetX = e.clientX;
      mouse.targetY = e.clientY;
      mouse.active = true;
    };

    const handleClick = (e: MouseEvent) => {
      waves.push({
        x: e.clientX,
        y: e.clientY,
        radius: 5,
        maxRadius: 280,
        opacity: 0.8,
      });
    };

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("click", handleClick);
    window.addEventListener("resize", handleResize);

    // Refined subtle color palette with gentle opacity
    const colors = [
      { color: "rgba(24, 179, 0, 0.4)", glow: "rgba(24, 179, 0, 0.15)" }, // Soft Green
      { color: "rgba(117, 184, 0, 0.35)", glow: "rgba(117, 184, 0, 0.12)" }, // Soft Lime
      { color: "rgba(244, 200, 0, 0.35)", glow: "rgba(244, 200, 0, 0.12)" }, // Soft Gold
    ];

    // Reduced node count for a cleaner, calmer background
    const nodeCount = Math.min(28, Math.max(12, Math.floor((width * height) / 60000)));
    const nodes: Node[] = [];

    for (let i = 0; i < nodeCount; i++) {
      const palette = colors[Math.floor(Math.random() * colors.length)];
      nodes.push({
        x: Math.random() * width,
        y: Math.random() * height,
        z: Math.random() * 200 + 100,
        vx: (Math.random() - 0.5) * 0.12, // Very slow, gentle drift
        vy: (Math.random() - 0.5) * 0.12,
        vz: (Math.random() - 0.5) * 0.05,
        radius: Math.random() * 1.5 + 0.8,
        color: palette.color,
        glow: palette.glow,
        pulsePhase: Math.random() * Math.PI * 2,
      });
    }

    let time = 0;
    const maxConnectionDistance = 110;

    const render = () => {
      time += 0.005; // Slower time step
      ctx.clearRect(0, 0, width, height);

      // Smooth mouse follow
      mouse.x += (mouse.targetX - mouse.x) * 0.02;
      mouse.y += (mouse.targetY - mouse.y) * 0.02;

      // Update and draw connections
      for (let i = 0; i < nodes.length; i++) {
        const n1 = nodes[i];

        // Move nodes slowly
        n1.x += n1.vx;
        n1.y += n1.vy;
        n1.z += n1.vz;

        // Bounce from bounds gently
        if (n1.x < 0 || n1.x > width) n1.vx *= -1;
        if (n1.y < 0 || n1.y > height) n1.vy *= -1;
        if (n1.z < 50 || n1.z > 300) n1.vz *= -1;

        // Connect nodes with subtle, faint lines
        for (let j = i + 1; j < nodes.length; j++) {
          const n2 = nodes[j];
          const dx = n1.x - n2.x;
          const dy = n1.y - n2.y;
          const dz = n1.z - n2.z;
          const dist3D = Math.sqrt(dx * dx + dy * dy + dz * dz);

          if (dist3D < maxConnectionDistance) {
            const alpha = (1 - dist3D / maxConnectionDistance) * 0.15;
            ctx.beginPath();
            ctx.moveTo(n1.x, n1.y);
            ctx.lineTo(n2.x, n2.y);
            ctx.strokeStyle = `rgba(255, 255, 255, ${alpha})`;
            ctx.lineWidth = 0.5;
            ctx.stroke();
          }
        }

        // Draw node with 3D scale
        const zScale = 200 / (n1.z + 100);
        const currentRadius = Math.max(0.6, n1.radius * zScale);

        ctx.beginPath();
        ctx.arc(n1.x, n1.y, currentRadius, 0, Math.PI * 2);
        ctx.fillStyle = n1.color;
        ctx.fill();
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("resize", handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-0 opacity-30"
      style={{ background: "transparent" }}
    />
  );
}
