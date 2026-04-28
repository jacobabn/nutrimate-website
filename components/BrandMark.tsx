type Props = {
  size?: number;
  className?: string;
};

export function BrandMark({ size = 32, className = "" }: Props) {
  const stroke = Math.max(1.4, size / 18);
  return (
    <span
      className={`brand-mark grid place-items-center ${className}`}
      style={{ width: size, height: size }}
      aria-hidden="true"
    >
      <svg viewBox="0 0 32 32" width={size * 0.68} height={size * 0.68}>
        <g fill="none" stroke="#fff" strokeWidth={stroke} strokeLinecap="round">
          <circle cx="16" cy="16" r="10" />
          <circle cx="16" cy="16" r="6.5" />
        </g>
        <circle cx="16" cy="16" r="2.4" fill="#fff" />
      </svg>
    </span>
  );
}
