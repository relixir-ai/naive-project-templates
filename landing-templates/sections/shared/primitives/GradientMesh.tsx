"use client";

import { useEffect, useState } from "react";

interface GradientMeshProps {
  /** Color scheme preset or custom colors */
  preset?: "purple-blue" | "sunset" | "ocean" | "emerald" | "custom";
  /** Custom colors when preset is 'custom' - array of HSL colors */
  colors?: string[];
  /** Animate the gradient slowly */
  animate?: boolean;
  /** Opacity of the mesh */
  opacity?: number;
  className?: string;
}

const presets: Record<string, string[]> = {
  "purple-blue": [
    "hsla(270, 85%, 55%, 0.4)",
    "hsla(210, 90%, 60%, 0.4)",
    "hsla(330, 80%, 50%, 0.25)",
  ],
  sunset: [
    "hsla(20, 90%, 55%, 0.4)",
    "hsla(340, 85%, 50%, 0.35)",
    "hsla(50, 90%, 60%, 0.3)",
  ],
  ocean: [
    "hsla(200, 90%, 50%, 0.4)",
    "hsla(180, 85%, 45%, 0.35)",
    "hsla(220, 80%, 55%, 0.3)",
  ],
  emerald: [
    "hsla(150, 80%, 45%, 0.4)",
    "hsla(170, 85%, 40%, 0.35)",
    "hsla(130, 75%, 50%, 0.3)",
  ],
};

export function GradientMesh({
  preset = "purple-blue",
  colors,
  animate = false,
  opacity = 1,
  className = "",
}: GradientMeshProps) {
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    setPrefersReducedMotion(mq.matches);
    const handler = (e: MediaQueryListEvent) => setPrefersReducedMotion(e.matches);
    mq.addEventListener("change", handler);
    return () => mq.removeEventListener("change", handler);
  }, []);

  const meshColors = preset === "custom" && colors ? colors : presets[preset];
  const shouldAnimate = animate && !prefersReducedMotion;

  const gradients = meshColors
    .map((color, i) => {
      const positions = [
        { x: 20, y: 30 },
        { x: 80, y: 15 },
        { x: 50, y: 80 },
        { x: 70, y: 50 },
      ];
      const pos = positions[i % positions.length];
      return `radial-gradient(ellipse at ${pos.x}% ${pos.y}%, ${color} 0, transparent 50%)`;
    })
    .join(", ");

  return (
    <div
      aria-hidden
      className={`pointer-events-none absolute inset-0 ${className}`.trim()}
      style={{
        backgroundImage: gradients,
        opacity,
        animation: shouldAnimate ? "mesh-drift 20s ease-in-out infinite" : undefined,
      }}
    >
      {shouldAnimate && (
        <style>{`
          @keyframes mesh-drift {
            0%, 100% { transform: translate(0, 0) scale(1); }
            25% { transform: translate(2%, -2%) scale(1.02); }
            50% { transform: translate(-1%, 2%) scale(0.98); }
            75% { transform: translate(1%, 1%) scale(1.01); }
          }
        `}</style>
      )}
    </div>
  );
}
