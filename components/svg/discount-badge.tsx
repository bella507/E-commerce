import * as React from 'react';

interface DiscountBadgeProps {
  percent: number;
  width?: number;
  height?: number;
  className?: string;
}

export default function DiscountBadge({
  percent,
  width: widthProp,
  height: heightProp,
  className,
}: DiscountBadgeProps) {
  const width = widthProp ?? 46.2;
  const height = heightProp ?? 22;
  const notchRadius = Math.min(4, height / 2);
  const cornerRadius = Math.min(4, height / 2);
  const id = React.useId().replace(/:/g, '');
  const gradientId = `discount-gradient-${id}`;
  const maskId = `discount-mask-${id}`;

  return (
    <svg
      className={className}
      width={width}
      height={height}
      viewBox={`0 0 ${width} ${height}`}
      role="img"
      aria-label={`ส่วนลด ${percent}%`}
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <linearGradient
          id={gradientId}
          x1="0"
          y1="22"
          x2="0"
          y2="0"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0%" stopColor="#C10007" />
          <stop offset="50.13%" stopColor="#E7000B" />
          <stop offset="100%" stopColor="#FB2C36" />
        </linearGradient>
        <mask id={maskId}>
          <rect width={width} height={height} rx={cornerRadius} fill="#fff" />
          <circle cx="0" cy={height / 2} r={notchRadius} fill="#000" />
          <circle cx={width} cy={height / 2} r={notchRadius} fill="#000" />
        </mask>
      </defs>
      <rect
        width={width}
        height={height}
        rx={cornerRadius}
        fill={`url(#${gradientId})`}
        mask={`url(#${maskId})`}
      />
      <text
        x={width / 2}
        y={height / 2}
        textAnchor="middle"
        dominantBaseline="middle"
        fontSize="13"
        fontWeight="700"
        fill="#FAFAFA"
      >
        -{percent}%
      </text>
    </svg>
  );
}
