"use client";

// Note: add the following keyframes to your globals.css:
// @keyframes trace-ltr { from { left: -33% } to { left: 133% } }
// @keyframes trace-rtl { from { right: -33% } to { right: 133% } }

export function TraceLine({
  delay = 0,
  duration = 2.5,
  direction = 'ltr',
}: {
  delay?: number;
  duration?: number;
  direction?: 'ltr' | 'rtl';
}) {
  return (
    <div className="relative h-px w-full overflow-hidden">
      <div className="absolute inset-0 bg-[var(--color-border-subtle)]" />
      <div
        className="absolute inset-y-0 w-1/3"
        style={{
          background: `linear-gradient(to right, transparent, var(--color-accent), transparent)`,
          animation: `trace-${direction} ${duration}s ease-in-out ${delay}s infinite`,
        }}
      />
    </div>
  );
}
