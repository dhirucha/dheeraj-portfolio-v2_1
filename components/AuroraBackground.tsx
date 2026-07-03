"use client";

import { useEffect, useRef } from "react";

const ACCENTS = ["#4f46e5", "#ec4899", "#06b6d4", "#f59e0b", "#818cf8"];

export default function AuroraBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const isSmall = window.innerWidth < 760;
    if (prefersReducedMotion) return; // Leave a static, empty canvas — respect the user's setting.

    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);
    const count = isSmall ? 30 : 70;

    type P = { x: number; y: number; vx: number; vy: number; r: number; c: string; a: number };
    const particles: P[] = Array.from({ length: count }, () => ({
      x: Math.random() * width,
      y: Math.random() * height,
      vx: (Math.random() - 0.5) * 0.4,
      vy: (Math.random() - 0.5) * 0.4,
      r: Math.random() * 1.6 + 0.8,
      c: ACCENTS[Math.floor(Math.random() * ACCENTS.length)],
      a: Math.random() * 0.5 + 0.2,
    }));

    let raf = 0;
    const onResize = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };
    window.addEventListener("resize", onResize);

    const linkDist = 130;

    const draw = () => {
      ctx.clearRect(0, 0, width, height);

      for (const p of particles) {
        p.x += p.vx;
        p.y += p.vy;
        if (p.x < 0 || p.x > width) p.vx *= -1;
        if (p.y < 0 || p.y > height) p.vy *= -1;
      }

      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const d = Math.sqrt(dx * dx + dy * dy);
          if (d < linkDist) {
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.strokeStyle = particles[i].c;
            ctx.globalAlpha = (1 - d / linkDist) * 0.14;
            ctx.lineWidth = 0.7;
            ctx.stroke();
            ctx.globalAlpha = 1;
          }
        }
      }

      for (const p of particles) {
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = p.c;
        ctx.globalAlpha = p.a;
        ctx.fill();
        ctx.globalAlpha = 1;
      }

      raf = requestAnimationFrame(draw);
    };
    raf = requestAnimationFrame(draw);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", onResize);
    };
  }, []);

  return (
    <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
      {/* Ambient mesh-gradient blobs */}
      <div className="absolute -left-40 -top-40 h-[520px] w-[520px] rounded-full bg-[radial-gradient(circle,rgba(79,70,229,0.16),transparent_70%)] blur-3xl" />
      <div className="absolute -right-32 top-1/3 h-[460px] w-[460px] rounded-full bg-[radial-gradient(circle,rgba(236,72,153,0.14),transparent_70%)] blur-3xl" />
      <div className="absolute bottom-0 left-1/3 h-[420px] w-[420px] rounded-full bg-[radial-gradient(circle,rgba(6,182,212,0.12),transparent_70%)] blur-3xl" />

      <canvas ref={canvasRef} className="absolute inset-0 opacity-60" />
    </div>
  );
}
