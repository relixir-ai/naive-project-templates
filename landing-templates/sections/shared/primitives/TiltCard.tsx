"use client";

import { useRef, useState, useEffect, type ReactNode } from "react";

interface TiltCardProps {
  children: ReactNode;
  /** Maximum tilt angle in degrees */
  maxTilt?: number;
  /** Perspective distance */
  perspective?: number;
  /** Transition speed in ms */
  transitionSpeed?: number;
  /** Glare effect */
  glare?: boolean;
  /** Max glare opacity */
  maxGlare?: number;
  className?: string;
}

export function TiltCard({
  children,
  maxTilt = 15,
  perspective = 800,
  transitionSpeed = 300,
  glare = false,
  maxGlare = 0.3,
  className = "",
}: TiltCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [rotation, setRotation] = useState({ x: 0, y: 0 });
  const [glarePosition, setGlarePosition] = useState({ x: 50, y: 50 });
  const [isHovering, setIsHovering] = useState(false);
  const [isTouchDevice, setIsTouchDevice] = useState(false);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  useEffect(() => {
    setIsTouchDevice("ontouchstart" in window || navigator.maxTouchPoints > 0);
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    setPrefersReducedMotion(mq.matches);
    const handler = (e: MediaQueryListEvent) => setPrefersReducedMotion(e.matches);
    mq.addEventListener("change", handler);
    return () => mq.removeEventListener("change", handler);
  }, []);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (isTouchDevice || prefersReducedMotion || !cardRef.current) return;

    const rect = cardRef.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    const mouseX = e.clientX - centerX;
    const mouseY = e.clientY - centerY;
    const normalizedX = mouseX / (rect.width / 2);
    const normalizedY = mouseY / (rect.height / 2);

    setRotation({
      x: -normalizedY * maxTilt,
      y: normalizedX * maxTilt,
    });

    if (glare) {
      setGlarePosition({
        x: ((e.clientX - rect.left) / rect.width) * 100,
        y: ((e.clientY - rect.top) / rect.height) * 100,
      });
    }
  };

  const handleMouseEnter = () => {
    if (!isTouchDevice && !prefersReducedMotion) {
      setIsHovering(true);
    }
  };

  const handleMouseLeave = () => {
    setIsHovering(false);
    setRotation({ x: 0, y: 0 });
    setGlarePosition({ x: 50, y: 50 });
  };

  const transformStyle = isHovering
    ? `perspective(${perspective}px) rotateX(${rotation.x}deg) rotateY(${rotation.y}deg)`
    : `perspective(${perspective}px) rotateX(0deg) rotateY(0deg)`;

  return (
    <div
      ref={cardRef}
      className={`relative ${className}`.trim()}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      style={{
        transform: transformStyle,
        transition: `transform ${transitionSpeed}ms ease-out`,
        transformStyle: "preserve-3d",
      }}
    >
      {children}
      {glare && isHovering && (
        <div
          className="pointer-events-none absolute inset-0"
          style={{
            background: `radial-gradient(circle at ${glarePosition.x}% ${glarePosition.y}%, rgba(255,255,255,${maxGlare}), transparent 60%)`,
            borderRadius: "inherit",
          }}
        />
      )}
    </div>
  );
}
