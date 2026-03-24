interface DividerProps {
  variant?: "wave" | "curve" | "diagonal" | "tilt";
  from?: string;
  to?: string;
  flip?: boolean;
  className?: string;
}

const paths = {
  wave: "M0,64 C320,120 640,0 960,64 C1280,128 1440,32 1440,32 L1440,0 L0,0 Z",
  curve: "M0,96 C480,0 960,0 1440,96 L1440,0 L0,0 Z",
  diagonal: "M0,0 L1440,96 L1440,0 L0,0 Z",
  tilt: "M0,48 Q360,96 720,48 Q1080,0 1440,48 L1440,0 L0,0 Z",
};

const SectionDivider = ({
  variant = "wave",
  from = "hsl(var(--background))",
  to,
  flip = false,
  className = "",
}: DividerProps) => {
  return (
    <div
      className={`relative w-full overflow-hidden leading-[0] pointer-events-none ${
        flip ? "rotate-180" : ""
      } ${className}`}
      style={{ marginTop: flip ? 0 : "-1px", marginBottom: flip ? "-1px" : 0 }}
      aria-hidden="true"
    >
      <svg
        viewBox="0 0 1440 96"
        preserveAspectRatio="none"
        className="w-full h-[48px] sm:h-[64px] lg:h-[80px] block"
        xmlns="http://www.w3.org/2000/svg"
      >
        {to && (
          <defs>
            <linearGradient id={`grad-${variant}-${flip}`} x1="0" y1="0" x2="1" y2="0">
              <stop offset="0%" stopColor={from} />
              <stop offset="100%" stopColor={to} />
            </linearGradient>
          </defs>
        )}
        <path
          d={paths[variant]}
          fill={to ? `url(#grad-${variant}-${flip})` : from}
        />
      </svg>
    </div>
  );
};

export default SectionDivider;
