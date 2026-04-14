"use client";

import { useEffect, useRef, useState } from "react";

interface CountUpProps {
  /** Target value to count up to */
  value: number;
  /** Duration in milliseconds */
  duration?: number;
  /** Prefix (e.g., "$") */
  prefix?: string;
  /** Suffix (e.g., "%", "M+", "k") */
  suffix?: string;
  /** Decimal places */
  decimals?: number;
  /** Separator for thousands */
  separator?: string;
  className?: string;
}

export function CountUp({
  value,
  duration = 2000,
  prefix = "",
  suffix = "",
  decimals = 0,
  separator = ",",
  className = "",
}: CountUpProps) {
  const [displayValue, setDisplayValue] = useState(0);
  const [hasAnimated, setHasAnimated] = useState(false);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);
  const elementRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    setPrefersReducedMotion(mq.matches);
    const handler = (e: MediaQueryListEvent) => setPrefersReducedMotion(e.matches);
    mq.addEventListener("change", handler);
    return () => mq.removeEventListener("change", handler);
  }, []);

  useEffect(() => {
    if (!elementRef.current) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (entry.isIntersecting && !hasAnimated) {
          setHasAnimated(true);

          if (prefersReducedMotion) {
            setDisplayValue(value);
            return;
          }

          const startTime = performance.now();
          const animate = (currentTime: number) => {
            const elapsed = currentTime - startTime;
            const progress = Math.min(elapsed / duration, 1);
            // Ease out cubic
            const eased = 1 - Math.pow(1 - progress, 3);
            setDisplayValue(eased * value);
            if (progress < 1) {
              requestAnimationFrame(animate);
            }
          };
          requestAnimationFrame(animate);
        }
      },
      { threshold: 0.2, rootMargin: "-50px" }
    );

    observer.observe(elementRef.current);
    return () => observer.disconnect();
  }, [value, duration, hasAnimated, prefersReducedMotion]);

  const formatNumber = (num: number): string => {
    const fixed = num.toFixed(decimals);
    const [whole, decimal] = fixed.split(".");
    const withSeparator = whole.replace(/\B(?=(\d{3})+(?!\d))/g, separator);
    return decimal ? `${withSeparator}.${decimal}` : withSeparator;
  };

  return (
    <span ref={elementRef} className={className}>
      {prefix}
      {formatNumber(displayValue)}
      {suffix}
    </span>
  );
}
