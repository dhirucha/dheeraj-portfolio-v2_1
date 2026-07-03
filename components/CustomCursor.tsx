"use client";

import { useEffect, useRef, useState } from "react";

export default function CustomCursor() {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);
  const [enabled, setEnabled] = useState(false);
  const [hovering, setHovering] = useState(false);

  useEffect(() => {
    const isTouch = window.matchMedia("(hover: none), (pointer: coarse)").matches;
    if (isTouch) return;
    setEnabled(true);

    let mx = 0,
      my = 0,
      rx = 0,
      ry = 0;
    let raf = 0;

    const onMove = (e: MouseEvent) => {
      mx = e.clientX;
      my = e.clientY;
      if (dotRef.current) {
        dotRef.current.style.left = `${mx}px`;
        dotRef.current.style.top = `${my}px`;
      }
    };

    const tick = () => {
      rx += (mx - rx) * 0.14;
      ry += (my - ry) * 0.14;
      if (ringRef.current) {
        ringRef.current.style.left = `${rx}px`;
        ringRef.current.style.top = `${ry}px`;
      }
      raf = requestAnimationFrame(tick);
    };

    const onOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      setHovering(!!target.closest("a, button, [data-hover]"));
    };

    window.addEventListener("mousemove", onMove);
    window.addEventListener("mouseover", onOver);
    raf = requestAnimationFrame(tick);

    return () => {
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mouseover", onOver);
      cancelAnimationFrame(raf);
    };
  }, []);

  if (!enabled) return null;

  return (
    <>
      <div
        ref={dotRef}
        className="cursor-dot pointer-events-none fixed z-[10000] h-2 w-2 -translate-x-1/2 -translate-y-1/2 rounded-full transition-[background,transform] duration-150"
        style={{
          background: hovering ? "var(--color-pink)" : "var(--color-cyan)",
          transform: `translate(-50%, -50%) scale(${hovering ? 1.6 : 1})`,
          boxShadow: `0 0 12px ${hovering ? "var(--color-pink)" : "var(--color-cyan)"}`,
        }}
      />
      <div
        ref={ringRef}
        className="cursor-ring pointer-events-none fixed z-[9999] -translate-x-1/2 -translate-y-1/2 rounded-full border transition-[width,height,border-color] duration-200"
        style={{
          width: hovering ? 56 : 36,
          height: hovering ? 56 : 36,
          borderColor: hovering ? "var(--color-pink)" : "rgba(99,102,241,0.7)",
        }}
      />
    </>
  );
}
