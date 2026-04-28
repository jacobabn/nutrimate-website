"use client";

import { useId } from "react";

type Props = {
  size?: number;
  className?: string;
  /** Optional override for the title element. */
  title?: string;
};

/**
 * Renders the exact NutriMate app icon: hard-banded teal-to-coral gradient
 * background, two concentric white rings, and a centre dot. Matches
 * `~/Desktop/Projects/NutriMate/scripts/install-final-icon.sh` byte-for-byte.
 *
 * Proportions (1024-unit viewBox, scaled at render):
 *   outer ring r=338  stroke-width=46
 *   inner ring r=218  stroke-width=46
 *   centre dot r=80
 */
export function BrandMark({ size = 32, className = "", title }: Props) {
  const id = useId().replace(/:/g, "");
  const gid = `nm-bands-${id}`;
  const radius = Math.max(2, size * 0.22); // matches iOS app-icon corner radius
  return (
    <span
      className={`inline-block overflow-hidden ${className}`}
      style={{ width: size, height: size, borderRadius: radius, lineHeight: 0 }}
      aria-hidden={title ? undefined : "true"}
      role={title ? "img" : undefined}
      aria-label={title}
    >
      <svg viewBox="0 0 1024 1024" width={size} height={size}>
        {title ? <title>{title}</title> : null}
        <defs>
          <linearGradient id={gid} x1="50%" y1="0%" x2="50%" y2="100%">
            <stop offset="0.0000" stopColor="#8DD9D5" />
            <stop offset="0.1249" stopColor="#8DD9D5" />
            <stop offset="0.1250" stopColor="#A2DCD3" />
            <stop offset="0.2499" stopColor="#A2DCD3" />
            <stop offset="0.2500" stopColor="#C0DCC8" />
            <stop offset="0.3749" stopColor="#C0DCC8" />
            <stop offset="0.3750" stopColor="#D9D2BA" />
            <stop offset="0.4999" stopColor="#D9D2BA" />
            <stop offset="0.5000" stopColor="#EDC2AC" />
            <stop offset="0.6249" stopColor="#EDC2AC" />
            <stop offset="0.6250" stopColor="#F8AC9C" />
            <stop offset="0.7499" stopColor="#F8AC9C" />
            <stop offset="0.7500" stopColor="#FE9A8E" />
            <stop offset="0.8749" stopColor="#FE9A8E" />
            <stop offset="0.8750" stopColor="#FF8C82" />
            <stop offset="1.0000" stopColor="#FF8C82" />
          </linearGradient>
        </defs>
        <rect width="1024" height="1024" fill={`url(#${gid})`} />
        <g fill="none" stroke="#ffffff" strokeLinecap="round">
          <circle cx="512" cy="512" r="338" strokeWidth="46" />
          <circle cx="512" cy="512" r="218" strokeWidth="46" />
        </g>
        <circle cx="512" cy="512" r="80" fill="#ffffff" />
      </svg>
    </span>
  );
}
