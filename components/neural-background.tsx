"use client";

import React, { useEffect, useRef } from "react";

interface GridPulse {
  gridX: number;
  gridY: number;
  dir: "horizontal" | "vertical";
  progress: number;
  speed: number;
  length: number;
  color: string;
}

export default function NeuralBackground() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d", { alpha: true });
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

    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    window.addEventListener("resize", handleResize, { passive: true });

    // Grid configuration
    const spacing = 52; // Square cell size in pixels
    let time = 0;

    // Moving tech pulses along the square lines
    const pulses: GridPulse[] = [];
    const maxPulses = 12;

    const pulseColors = [
      "rgba(24, 179, 0, 0.7)",   // Neon Green
      "rgba(117, 184, 0, 0.6)",  // Lime
      "rgba(244, 200, 0, 0.6)",  // Gold
    ];

    const spawnPulse = () => {
      const cols = Math.ceil(width / spacing);
      const rows = Math.ceil(height / spacing);
      const isHorizontal = Math.random() > 0.5;

      pulses.push({
        gridX: Math.floor(Math.random() * cols),
        gridY: Math.floor(Math.random() * rows),
        dir: isHorizontal ? "horizontal" : "vertical",
        progress: 0,
        speed: 0.008 + Math.random() * 0.012,
        length: 2 + Math.random() * 3,
        color: pulseColors[Math.floor(Math.random() * pulseColors.length)],
      });
    };

    // Initial pulses
    for (let i = 0; i < 6; i++) {
      spawnPulse();
    }

    const render = () => {
      time += 0.006;
      ctx.clearRect(0, 0, width, height);

      // Smooth mouse follow
      mouse.x += (mouse.targetX - mouse.x) * 0.03;
      mouse.y += (mouse.targetY - mouse.y) * 0.03;

      const cols = Math.ceil(width / spacing) + 2;
      const rows = Math.ceil(height / spacing) + 2;

      // Coordinate transformation with subtle spatial wave twist & mouse refraction
      const getWarpedPoint = (col: number, row: number) => {
        const baseX = (col - 1) * spacing;
        const baseY = (row - 1) * spacing;

        // Subtle fluid twist calculation
        const twistAngle = time * 0.35 + (baseX * 0.0012) + (baseY * 0.0016);
        const twistDistortion = Math.sin(twistAngle) * 10 + Math.cos(time * 0.25 + baseY * 0.002) * 8;
        const twistYDistortion = Math.cos(twistAngle * 1.1) * 9 + Math.sin(time * 0.28 + baseX * 0.002) * 7;

        // Gentle interactive mouse displacement
        let mouseDisplaceX = 0;
        let mouseDisplaceY = 0;
        if (mouse.active) {
          const dx = baseX - mouse.x;
          const dy = baseY - mouse.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          const maxDist = 260;
          if (dist < maxDist) {
            const factor = Math.cos((dist / maxDist) * (Math.PI / 2)) * 16;
            mouseDisplaceX = (dx / dist) * factor;
            mouseDisplaceY = (dy / dist) * factor;
          }
        }

        return {
          x: baseX + twistDistortion + mouseDisplaceX,
          y: baseY + twistYDistortion + mouseDisplaceY,
        };
      };

      // Compute warped grid point vertices
      const gridPoints: { x: number; y: number }[][] = [];
      for (let r = 0; r <= rows; r++) {
        gridPoints[r] = [];
        for (let c = 0; c <= cols; c++) {
          gridPoints[r][c] = getWarpedPoint(c, r);
        }
      }

      // 1. Draw Horizontal Square Lines
      ctx.lineWidth = 0.75;
      for (let r = 0; r <= rows; r++) {
        ctx.beginPath();
        for (let c = 0; c <= cols; c++) {
          const pt = gridPoints[r][c];
          if (c === 0) {
            ctx.moveTo(pt.x, pt.y);
          } else {
            ctx.lineTo(pt.x, pt.y);
          }
        }
        ctx.strokeStyle = "rgba(255, 255, 255, 0.038)";
        ctx.stroke();
      }

      // 2. Draw Vertical Square Lines
      for (let c = 0; c <= cols; c++) {
        ctx.beginPath();
        for (let r = 0; r <= rows; r++) {
          const pt = gridPoints[r][c];
          if (r === 0) {
            ctx.moveTo(pt.x, pt.y);
          } else {
            ctx.lineTo(pt.x, pt.y);
          }
        }
        ctx.strokeStyle = "rgba(255, 255, 255, 0.038)";
        ctx.stroke();
      }

      // 3. Draw Square Intersections (Tech Micro-Crosses & Glowing Nodes)
      for (let r = 0; r <= rows; r += 2) {
        for (let c = 0; c <= cols; c += 2) {
          const pt = gridPoints[r][c];
          if (pt.x < -20 || pt.x > width + 20 || pt.y < -20 || pt.y > height + 20) continue;

          // Pulse opacity based on position and time
          const phase = Math.sin(time * 0.8 + c * 0.3 + r * 0.4);
          const crossAlpha = 0.08 + Math.max(0, phase * 0.08);

          // Micro Cross (+)
          ctx.strokeStyle = `rgba(24, 179, 0, ${crossAlpha})`;
          ctx.lineWidth = 1;
          const crossSize = 3.5;

          ctx.beginPath();
          ctx.moveTo(pt.x - crossSize, pt.y);
          ctx.lineTo(pt.x + crossSize, pt.y);
          ctx.moveTo(pt.x, pt.y - crossSize);
          ctx.lineTo(pt.x, pt.y + crossSize);
          ctx.stroke();
        }
      }

      // 4. Update and Draw Moving Tech Data Pulses along Square Lines
      if (pulses.length < maxPulses && Math.random() < 0.04) {
        spawnPulse();
      }

      for (let i = pulses.length - 1; i >= 0; i--) {
        const p = pulses[i];
        p.progress += p.speed;

        if (p.progress > 1) {
          pulses.splice(i, 1);
          continue;
        }

        const startIdx = Math.floor(p.progress * (p.dir === "horizontal" ? cols : rows));
        const endIdx = Math.min(
          startIdx + Math.ceil(p.length),
          p.dir === "horizontal" ? cols : rows
        );

        ctx.beginPath();
        if (p.dir === "horizontal") {
          const r = Math.min(p.gridY, rows);
          if (gridPoints[r] && gridPoints[r][startIdx] && gridPoints[r][endIdx]) {
            const pStart = gridPoints[r][startIdx];
            const pEnd = gridPoints[r][endIdx];
            ctx.moveTo(pStart.x, pStart.y);
            ctx.lineTo(pEnd.x, pEnd.y);
          }
        } else {
          const c = Math.min(p.gridX, cols);
          if (
            gridPoints[startIdx] &&
            gridPoints[startIdx][c] &&
            gridPoints[endIdx] &&
            gridPoints[endIdx][c]
          ) {
            const pStart = gridPoints[startIdx][c];
            const pEnd = gridPoints[endIdx][c];
            ctx.moveTo(pStart.x, pStart.y);
            ctx.lineTo(pEnd.x, pEnd.y);
          }
        }

        // Fading tail effect
        const pulseAlpha = Math.sin(p.progress * Math.PI) * 0.35;
        ctx.strokeStyle = p.color.replace(/[\d.]+\)$/, `${pulseAlpha})`);
        ctx.lineWidth = 1.6;
        ctx.stroke();
      }

      // 5. Radial Vignette Overlay
      const grad = ctx.createRadialGradient(
        width / 2,
        height / 2,
        Math.min(width, height) * 0.25,
        width / 2,
        height / 2,
        Math.max(width, height) * 0.75
      );
      grad.addColorStop(0, "rgba(5, 5, 5, 0)");
      grad.addColorStop(1, "rgba(5, 5, 5, 0.65)");
      ctx.fillStyle = grad;
      ctx.fillRect(0, 0, width, height);

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
      className="fixed inset-0 pointer-events-none z-0 opacity-80"
      style={{ background: "#050505" }}
    />
  );
}
