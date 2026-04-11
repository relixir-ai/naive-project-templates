import type React from "react";

export function GlowEdge({ edge = 'top' }: { edge?: 'top' | 'bottom' | 'left' | 'right' }) {
  const edgeStyles: Record<string, React.CSSProperties> = {
    top:    { top: 0, left: 0, right: 0, height: '1px' },
    bottom: { bottom: 0, left: 0, right: 0, height: '1px' },
    left:   { left: 0, top: 0, bottom: 0, width: '1px' },
    right:  { right: 0, top: 0, bottom: 0, width: '1px' },
  };
  const isHorizontal = edge === 'top' || edge === 'bottom';
  return (
    <div
      aria-hidden
      style={{
        position: 'absolute',
        ...edgeStyles[edge],
        background: isHorizontal
          ? 'linear-gradient(to right, transparent, var(--color-accent), transparent)'
          : 'linear-gradient(to bottom, transparent, var(--color-accent), transparent)',
        opacity: 0.5,
        pointerEvents: 'none',
      }}
    />
  );
}
