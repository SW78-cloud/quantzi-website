interface LogoProps {
  variant?: "light" | "dark";
  height?: number;
}

export function Logo({ variant = "light", height = 44 }: LogoProps) {
  const navy = variant === "light" ? "#ffffff" : "#0D1B40";
  const orange = "#E8620A";
  const textColor = variant === "light" ? "#ffffff" : "#0D1B40";

  return (
    <span className="flex items-center gap-3 select-none" aria-label="Quantzi">
      <svg
        viewBox="0 0 52 58"
        height={height}
        width={(52 / 58) * height}
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        {/* Axe shaft — vertical line, doubles as central meridian */}
        <line
          x1="26"
          y1="1"
          x2="26"
          y2="57"
          stroke={navy}
          strokeWidth="2.4"
          strokeLinecap="round"
        />

        {/* Axe head — orange blade to upper-left of shaft */}
        <path
          d="M26,3 L8,10 L15,22 L26,17 Z"
          fill={orange}
        />

        {/* Globe outer circle */}
        <circle
          cx="26"
          cy="33"
          r="22"
          fill="none"
          stroke={navy}
          strokeWidth="2"
        />

        {/* Equatorial ellipse */}
        <ellipse
          cx="26"
          cy="33"
          rx="22"
          ry="7.5"
          fill="none"
          stroke={navy}
          strokeWidth="1.2"
        />

        {/* Upper latitude arc — at y≈21, x spans ±18.4 from cx=26 */}
        <path
          d="M7.6,21 Q26,16 44.4,21"
          fill="none"
          stroke={navy}
          strokeWidth="1"
        />

        {/* Lower latitude arc — at y≈45 */}
        <path
          d="M7.6,45 Q26,50 44.4,45"
          fill="none"
          stroke={navy}
          strokeWidth="1"
        />

        {/* Left longitude arc */}
        <path
          d="M26,11 Q10,33 26,55"
          fill="none"
          stroke={navy}
          strokeWidth="1"
        />

        {/* Right longitude arc */}
        <path
          d="M26,11 Q42,33 26,55"
          fill="none"
          stroke={navy}
          strokeWidth="1"
        />
      </svg>

      <span
        style={{
          fontFamily: "'Inter', sans-serif",
          fontWeight: 800,
          fontSize: height * 0.48,
          letterSpacing: "0.18em",
          color: textColor,
          lineHeight: 1,
        }}
      >
        QUANTZI
      </span>
    </span>
  );
}
