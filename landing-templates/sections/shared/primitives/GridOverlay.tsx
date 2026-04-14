export function GridOverlay({ opacity, size = 28 }: { opacity?: number; size?: number }) {
  return (
    <div
      aria-hidden
      style={{
        position: 'absolute', inset: 0, zIndex: 1,
        pointerEvents: 'none',
        backgroundImage: `radial-gradient(circle, var(--color-border) 1px, transparent 1px)`,
        backgroundSize: `${size}px ${size}px`,
        opacity: opacity ?? undefined,
      }}
      className="opacity-[var(--grid-opacity)]"
    />
  );
}
