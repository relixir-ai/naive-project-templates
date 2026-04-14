"use client";

import { useRef, useEffect, useState } from "react";
import type { ReactNode } from "react";

interface MarqueeProps {
  children: ReactNode;
  /** Pixels per second */
  speed?: number;
  /** Scroll direction */
  direction?: "left" | "right";
  /** Pause on hover */
  pauseOnHover?: boolean;
  /** Gap between items in pixels */
  gap?: number;
  className?: string;
}

export function Marquee({
  children,
  speed = 40,
  direction = "left",
  pauseOnHover = true,
  gap = 32,
  className = "",
}: MarqueeProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [duration, setDuration] = useState(20);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    setPrefersReducedMotion(mq.matches);
    const handler = (e: MediaQueryListEvent) => setPrefersReducedMotion(e.matches);
    mq.addEventListener("change", handler);
    return () => mq.removeEventListener("change", handler);
  }, []);

  useEffect(() => {
    if (!containerRef.current) return;
    const contentWidth = containerRef.current.scrollWidth / 2;
    const calculatedDuration = contentWidth / speed;
    setDuration(calculatedDuration);
  }, [speed, children]);

  const animationName = direction === "left" ? "marquee-left" : "marquee-right";

  return (
    <div
      className={`relative overflow-hidden ${className}`.trim()}
      style={{
        maskImage: "linear-gradient(to right, transparent, black 5%, black 95%, transparent)",
        WebkitMaskImage: "linear-gradient(to right, transparent, black 5%, black 95%, transparent)",
      }}
    >
      <div
        ref={containerRef}
        className={`flex w-max ${pauseOnHover ? "hover:[animation-play-state:paused]" : ""}`}
        style={{
          gap: `${gap}px`,
          animation: prefersReducedMotion
            ? "none"
            : `${animationName} ${duration}s linear infinite`,
        }}
      >
        {children}
        {children}
      </div>
      <style>{`
        @keyframes marquee-left {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }
        @keyframes marquee-right {
          from { transform: translateX(-50%); }
          to { transform: translateX(0); }
        }
      `}</style>
    </div>
  );
}
