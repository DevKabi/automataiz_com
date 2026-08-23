"use client";

import React, { useEffect, useRef } from "react";

interface Node {
  x: number;
  y: number;
  vx: number;
  vy: number;
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

    const handleMouseMove = (e: MouseEvent) => {
      mouse.targetX = e.clientX;
      mouse.targetY = e.clientY;
      mouse.active = true;
    };

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("resize", handleResize);

    // Color palette: AI Chip Green, Lime, and AI Gold
    const colors = [
      { color: "rgba(24, 179, 0, 0.8)", glow: "rgba(24, 179, 0, 0.4)" }, // Green
      { color: "rgba(117, 184, 0, 0.8)", glow: "rgba(117, 184, 0, 0.35)" }, // Lime
      { color: "rgba(244, 200, 0, 0.8)", glow: "rgba(244, 200, 0, 0.35)" }, // Gold
      { color: "rgba(255, 210, 0, 0.8)", glow: "rgba(255, 210, 0, 0.35)" }, // Yellow
    ];

    const nodeCount = Math.min(65, Math.floor((width * height) / 22000));
    const nodes: Node[] = [];

    for (let i = 0; i < nodeCount; i++) {
      const palette = colors[Math.floor(Math.random() * colors.length)];
      nodes.push({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.45,
        vy: (Math.random() - 0.5) * 0.45,
        radius: Math.random() * 2 + 1.2,
        color: palette.color,
        glow: palette.glow,
        pulsePhase: Math.random() * Math.PI * 2,
      });
    }

    let time = 0;
    const maxConnectionDistance = 140;

    const render = () => {
      time += 0.015;
      ctx.clearRect(0, 0, width, height);

      // Smooth mouse follow
      mouse.x += (mouse.targetX - mouse.x) * 0.05;
      mouse.y += (mouse.targetY - mouse.y) * 0.05;

      // Draw subtle mouse ambient glow
      if (mouse.active) {
        const mouseGradient = ctx.createRadialGradient(
          mouse.x,
          mouse.y,
          0,
          mouse.x,
          mouse.y,
          240
        );
        mouseGradient.addColorStop(0, "rgba(24, 179, 0, 0.07)");
        mouseGradient.addColorStop(0.5, "rgba(244, 200, 0, 0.03)");
        mouseGradient.addColorStop(1, "transparent");
        ctx.fillStyle = mouseGradient;
        ctx.fillRect(0, 0, width, height);
      }

      // Update and draw connections
      for (let i = 0; i < nodes.length; i++) {
        const n1 = nodes[i];

        // Move nodes
        n1.x += n1.vx;
        n1.y += n1.vy;

        // Bounce from walls
        if (n1.x < 0 || n1.x > width) n1.vx *= -1;
        if (n1.y < 0 || n1.y > height) n1.vy *= -1;

        // Mouse gentle interaction
        if (mouse.active) {
          const dx = mouse.x - n1.x;
          const dy = mouse.y - n1.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 180 && dist > 10) {
            const force = (180 - dist) / 180;
            n1.x += (dx / dist) * force * 0.6;
            n1.y += (dy / dist) * force * 0.6;
          }
        }

        // Connect nodes
        for (let j = i + 1; j < nodes.length; j++) {
          const n2 = nodes[j];
          const dx = n1.x - n2.x;
          const dy = n1.y - n2.y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < maxConnectionDistance) {
            const alpha = (1 - dist / maxConnectionDistance) * 0.28;
            ctx.beginPath();
            ctx.moveTo(n1.x, n1.y);
            ctx.lineTo(n2.x, n2.y);
            // Gradient stroke between nodes
            const lineGrad = ctx.createLinearGradient(n1.x, n1.y, n2.x, n2.y);
            lineGrad.addColorStop(0, n1.color.replace("0.8", `${alpha}`));
            lineGrad.addColorStop(1, n2.color.replace("0.8", `${alpha}`));
            ctx.strokeStyle = lineGrad;
            ctx.lineWidth = 0.85;
            ctx.stroke();
          }
        }

        // Draw node
        const pulse = Math.sin(time * 2 + n1.pulsePhase) * 0.5 + 1;
        const currentRadius = n1.radius * (0.8 + pulse * 0.2);

        ctx.beginPath();
        ctx.arc(n1.x, n1.y, currentRadius, 0, Math.PI * 2);
        ctx.fillStyle = n1.color;
        ctx.fill();

        // Node halo
        ctx.beginPath();
        ctx.arc(n1.x, n1.y, currentRadius * 3, 0, Math.PI * 2);
        ctx.fillStyle = n1.glow;
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
      className="fixed inset-0 pointer-events-none z-0 opacity-65"
      style={{ background: "transparent" }}
    />
  );
}
