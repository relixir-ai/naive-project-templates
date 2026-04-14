"use client";

import type React from "react";

export function NoiseOverlay({ opacity, blend }: { opacity?: number; blend?: React.CSSProperties["mixBlendMode"] }) {
  const noiseSvg = `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`;
  return (
    <div
      aria-hidden
      style={{
        position: 'absolute', inset: 0, zIndex: 10,
        pointerEvents: 'none',
        backgroundImage: noiseSvg,
        backgroundRepeat: 'repeat',
        backgroundSize: '256px 256px',
        opacity: opacity ?? undefined,
        mixBlendMode: blend ?? undefined,
      }}
      className="opacity-[var(--texture-opacity)]"
    />
  );
}
