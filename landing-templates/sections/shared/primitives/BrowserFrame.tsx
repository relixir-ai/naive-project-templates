"use client";

import type { ReactNode } from "react";

interface BrowserFrameProps {
  children: ReactNode;
  /** URL to display in address bar */
  url?: string;
  /** Show traffic light buttons */
  showControls?: boolean;
  className?: string;
}

export function BrowserFrame({
  children,
  url,
  showControls = true,
  className = "",
}: BrowserFrameProps) {
  return (
    <div
      className={`overflow-hidden rounded-[var(--radius-lg)] border border-[var(--color-border)] bg-[var(--color-surface)] shadow-[var(--shadow-3)] ${className}`.trim()}
    >
      {/* Browser chrome */}
      <div className="flex items-center gap-3 border-b border-[var(--color-border-subtle)] bg-[var(--color-surface-2)] px-4 py-3">
        {showControls && (
          <div className="flex gap-1.5">
            <div className="h-3 w-3 rounded-full bg-[#ff5f57]" />
            <div className="h-3 w-3 rounded-full bg-[#febc2e]" />
            <div className="h-3 w-3 rounded-full bg-[#28c840]" />
          </div>
        )}
        {url && (
          <div className="flex-1 px-2">
            <div className="mx-auto max-w-md rounded-md bg-[var(--color-bg)] px-3 py-1.5 text-center text-xs text-[var(--color-muted)]">
              {url}
            </div>
          </div>
        )}
        {showControls && !url && <div className="flex-1" />}
      </div>
      {/* Content area */}
      <div className="relative">{children}</div>
    </div>
  );
}
