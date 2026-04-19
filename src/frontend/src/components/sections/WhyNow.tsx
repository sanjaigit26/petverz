import { useEffect, useRef } from "react";
import { useInView } from "../../hooks/useInView";

const drivers = [
  {
    stat: "68M+",
    unit: "Pets in India",
    desc: "India's pet population is growing faster than any other consumer segment — outpacing traditional livestock ownership.",
    icon: (
      <svg
        width="28"
        height="28"
        viewBox="0 0 24 24"
        fill="none"
        stroke="#00C6FF"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <polyline points="23 6 13.5 15.5 8.5 10.5 1 18" />
        <polyline points="17 6 23 6 23 12" />
      </svg>
    ),
  },
  {
    stat: "₹7.7L Cr",
    unit: "Digital payments yearly",
    desc: "UPI transactions hit ₹7.7 Lakh Crore in 2024. India is digital-payment native — the infrastructure is already there.",
    icon: (
      <svg
        width="28"
        height="28"
        viewBox="0 0 24 24"
        fill="none"
        stroke="#00C6FF"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <rect x="2" y="6" width="20" height="13" rx="2" />
        <path d="M16 14a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z" />
        <path d="M6 10h4" />
        <path d="M6 14h2" />
      </svg>
    ),
  },
  {
    stat: "Zero",
    unit: "Infrastructure exists",
    desc: "No platform unifies pet identity, health records, and payments. This gap is the opportunity — wide open.",
    icon: (
      <svg
        width="28"
        height="28"
        viewBox="0 0 24 24"
        fill="none"
        stroke="#00C6FF"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <circle cx="12" cy="12" r="10" />
        <path d="M12 8v4l3 3" />
        <line x1="4.93" y1="4.93" x2="19.07" y2="19.07" />
      </svg>
    ),
  },
];

// Chart config
const chartPoints = [
  { year: "2018", value: 32 },
  { year: "2019", value: 36 },
  { year: "2020", value: 41 },
  { year: "2021", value: 47 },
  { year: "2022", value: 53 },
  { year: "2023", value: 60 },
  { year: "2024", value: 68 },
  { year: "2025", value: 77 },
  { year: "2026", value: 88 },
];
const CW = 560;
const CH = 180;
const PL = 48;
const PR = 24;
const PT = 20;
const PB = 36;
const plotW = CW - PL - PR;
const plotH = CH - PT - PB;
const MIN_V = 25;
const MAX_V = 95;

function xp(i: number) {
  return PL + (i / (chartPoints.length - 1)) * plotW;
}
function yp(v: number) {
  return PT + plotH - ((v - MIN_V) / (MAX_V - MIN_V)) * plotH;
}

const linePath = chartPoints
  .map(
    (d, i) =>
      `${i === 0 ? "M" : "L"} ${xp(i).toFixed(1)} ${yp(d.value).toFixed(1)}`,
  )
  .join(" ");
const areaPath = `${linePath} L ${xp(chartPoints.length - 1).toFixed(1)} ${(PT + plotH).toFixed(1)} L ${PL} ${(PT + plotH).toFixed(1)} Z`;

function GrowthChart({ animate }: { animate: boolean }) {
  const pathRef = useRef<SVGPathElement>(null);

  useEffect(() => {
    if (!pathRef.current) return;
    const len = pathRef.current.getTotalLength();
    if (animate) {
      pathRef.current.style.strokeDasharray = `${len}`;
      pathRef.current.style.strokeDashoffset = "0";
      pathRef.current.style.transition =
        "stroke-dashoffset 2s cubic-bezier(0.4,0,0.2,1) 0.3s";
    } else {
      pathRef.current.style.strokeDasharray = `${len}`;
      pathRef.current.style.strokeDashoffset = `${len}`;
    }
  }, [animate]);

  const lx = xp(chartPoints.length - 1);
  const ly = yp(chartPoints[chartPoints.length - 1].value);

  return (
    <svg
      viewBox={`0 0 ${CW} ${CH}`}
      width="100%"
      style={{ maxWidth: CW }}
      aria-label="India pet ownership growth chart 2018-2026"
      role="img"
    >
      <defs>
        <linearGradient id="areaGradWN" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#00C6FF" stopOpacity="0.18" />
          <stop offset="100%" stopColor="#00C6FF" stopOpacity="0" />
        </linearGradient>
        <filter id="glowDotWN">
          <feGaussianBlur stdDeviation="3" result="blur" />
          <feMerge>
            <feMergeNode in="blur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>
      {[35, 50, 65, 80].map((v) => (
        <g key={v}>
          <line
            x1={PL}
            y1={yp(v)}
            x2={CW - PR}
            y2={yp(v)}
            stroke="rgba(255,255,255,0.05)"
            strokeWidth="1"
          />
          <text
            x={PL - 8}
            y={yp(v) + 4}
            fill="#4a6080"
            fontSize="10"
            textAnchor="end"
            fontFamily="monospace"
          >
            {v}M
          </text>
        </g>
      ))}
      <path
        d={areaPath}
        fill="url(#areaGradWN)"
        opacity={animate ? 1 : 0}
        style={{ transition: "opacity 0.5s ease 1.5s" }}
      />
      <path
        ref={pathRef}
        d={linePath}
        fill="none"
        stroke="#00C6FF"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      {chartPoints.map((d, i) => (
        <text
          key={d.year}
          x={xp(i)}
          y={CH - 6}
          fill="#4a6080"
          fontSize="9"
          textAnchor="middle"
          fontFamily="monospace"
        >
          {d.year}
        </text>
      ))}
      {animate && (
        <>
          <circle
            cx={lx}
            cy={ly}
            r="10"
            fill="#00C6FF"
            opacity="0.12"
            filter="url(#glowDotWN)"
          />
          <circle cx={lx} cy={ly} r="5" fill="#00C6FF" opacity="0.4" />
          <circle cx={lx} cy={ly} r="3" fill="#00C6FF" />
          <text
            x={lx + 8}
            y={ly - 8}
            fill="#00C6FF"
            fontSize="10"
            fontFamily="sans-serif"
            fontWeight="bold"
          >
            88M
          </text>
        </>
      )}
      <line
        x1={PL}
        y1={PT}
        x2={PL}
        y2={PT + plotH}
        stroke="rgba(255,255,255,0.08)"
        strokeWidth="1"
      />
      <line
        x1={PL}
        y1={PT + plotH}
        x2={CW - PR}
        y2={PT + plotH}
        stroke="rgba(255,255,255,0.08)"
        strokeWidth="1"
      />
    </svg>
  );
}

export default function WhyNow() {
  const [sectionRef, inView] = useInView<HTMLDivElement>({ threshold: 0.1 });
  const [chartRef, chartInView] = useInView<HTMLDivElement>({ threshold: 0.2 });

  return (
    <section
      id="why-now"
      ref={sectionRef}
      className="relative py-28"
      style={{ background: "#0B0F1A" }}
      data-ocid="why_now.section"
    >
      <div
        className="absolute left-0 top-1/2 -translate-y-1/2 pointer-events-none"
        style={{
          width: "300px",
          height: "300px",
          background:
            "radial-gradient(ellipse, rgba(0,198,255,0.04) 0%, transparent 70%)",
        }}
        aria-hidden="true"
      />

      <div className="relative mx-auto max-w-6xl px-6 lg:px-10">
        <div
          className="text-center mb-16"
          style={{
            opacity: inView ? 1 : 0,
            transform: inView ? "translateY(0)" : "translateY(20px)",
            transition: "opacity 0.7s ease, transform 0.7s ease",
          }}
        >
          <span
            className="inline-block text-xs font-display tracking-[0.2em] uppercase mb-4"
            style={{ color: "#00C6FF" }}
          >
            Why Now
          </span>
          <h2
            className="font-display font-black text-foreground"
            style={{ fontSize: "clamp(2.5rem, 5vw, 4rem)", lineHeight: 1.05 }}
          >
            The timing is{" "}
            <span
              style={{
                background: "linear-gradient(135deg, #00C6FF 0%, #0080cc 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              perfect.
            </span>
          </h2>
          <p className="mt-4 text-muted-foreground font-body text-lg max-w-lg mx-auto">
            Three converging forces are creating a once-in-a-decade window.
          </p>
        </div>

        {/* Driver cards */}
        <div
          className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16"
          data-ocid="why_now.drivers.list"
        >
          {drivers.map((d, i) => (
            <div
              key={d.unit}
              className="rounded-2xl p-8 flex flex-col gap-4"
              style={{
                background: "rgba(13,18,36,0.8)",
                border: "1px solid rgba(0,198,255,0.12)",
                opacity: inView ? 1 : 0,
                transform: inView ? "translateY(0)" : "translateY(30px)",
                transition: `opacity 0.6s ease ${0.1 + i * 0.15}s, transform 0.6s ease ${0.1 + i * 0.15}s`,
              }}
              data-ocid={`why_now.driver.${i + 1}`}
            >
              <div
                className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0"
                style={{
                  background: "rgba(0,198,255,0.08)",
                  border: "1px solid rgba(0,198,255,0.2)",
                }}
              >
                {d.icon}
              </div>
              <div>
                <div
                  className="font-display font-black leading-none mb-1"
                  style={{ fontSize: "2rem", color: "#00C6FF" }}
                >
                  {d.stat}
                </div>
                <div className="font-display font-bold text-foreground text-base mb-2">
                  {d.unit}
                </div>
                <p className="text-muted-foreground font-body text-sm leading-relaxed">
                  {d.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Growth chart */}
        <div
          ref={chartRef}
          className="rounded-2xl p-8 md:p-10"
          style={{
            background: "rgba(13,18,36,0.6)",
            border: "1px solid rgba(0,198,255,0.1)",
            opacity: inView ? 1 : 0,
            transition: "opacity 0.8s ease 0.5s",
          }}
          data-ocid="why_now.chart"
        >
          <div className="mb-6">
            <p className="text-xs font-display tracking-[0.15em] uppercase text-muted-foreground mb-1">
              India Pet Population (Millions)
            </p>
            <h3 className="font-display font-bold text-foreground text-xl">
              Consistent growth — every single year
            </h3>
          </div>
          <GrowthChart animate={chartInView} />
          <p className="text-xs text-muted-foreground mt-3 font-body">
            Source: ASSOCHAM India Pet Industry Report · 2026 figure projected
          </p>
        </div>
      </div>
    </section>
  );
}
