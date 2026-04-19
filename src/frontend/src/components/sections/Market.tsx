import { useEffect, useRef } from "react";
import { useInView } from "../../hooks/useInView";

const stats = [
  {
    value: "₹20,000+ Cr",
    label: "Total Addressable Market",
    sublabel: "India pet care industry by 2026",
  },
  {
    value: "28% YoY",
    label: "Market Growth Rate",
    sublabel: "Fastest growing consumer segment",
  },
  {
    value: "No Leader",
    label: "Zero Dominant Player",
    sublabel: "No unified platform exists today",
  },
];

const barData = [
  { label: "India 2022", value: 8500, display: "₹8,500 Cr" },
  { label: "India 2024", value: 14000, display: "₹14,000 Cr" },
  { label: "India 2026", value: 22000, display: "₹22,000 Cr" },
  { label: "Global", value: 42000, display: "₹42,000 Cr" },
];

const MAX_BAR = 44000;
const BCHW = 560;
const BCHH = 220;
const BAR_BASE = 185;
const BAR_AREA = 155;
const BAR_W = 72;
const gap = (BCHW - barData.length * BAR_W) / (barData.length + 1);

function bx(i: number) {
  return gap + i * (BAR_W + gap);
}

function BarChart({ animate }: { animate: boolean }) {
  const rects = useRef<(SVGRectElement | null)[]>([]);

  useEffect(() => {
    rects.current.forEach((rect, i) => {
      if (!rect) return;
      const h = (barData[i].value / MAX_BAR) * BAR_AREA;
      if (animate) {
        rect.setAttribute("height", String(h));
        rect.setAttribute("y", String(BAR_BASE - h));
        rect.style.transition = `height 1s cubic-bezier(0.4,0,0.2,1) ${0.15 + i * 0.12}s`;
      } else {
        rect.setAttribute("height", "0");
        rect.setAttribute("y", String(BAR_BASE));
      }
    });
  }, [animate]);

  return (
    <svg
      viewBox={`0 0 ${BCHW} ${BCHH}`}
      width="100%"
      style={{ maxWidth: BCHW }}
      aria-label="India pet care market growth bar chart"
      role="img"
    >
      <defs>
        {barData.map((bd, i) => (
          <linearGradient
            key={`barGrad-${bd.label}`}
            id={`bg${i}`}
            x1="0"
            y1="0"
            x2="0"
            y2="1"
          >
            <stop
              offset="0%"
              stopColor="#00C6FF"
              stopOpacity={i === 3 ? "1" : "0.85"}
            />
            <stop offset="100%" stopColor="#003a6a" stopOpacity="0.8" />
          </linearGradient>
        ))}
      </defs>
      {[0.25, 0.5, 0.75, 1].map((frac) => {
        const y = BAR_BASE - frac * BAR_AREA;
        const label = `${Math.round((frac * MAX_BAR) / 1000)}K`;
        return (
          <g key={frac}>
            <line
              x1={32}
              y1={y}
              x2={BCHW - 8}
              y2={y}
              stroke="rgba(255,255,255,0.05)"
              strokeWidth="1"
            />
            <text
              x={28}
              y={y + 4}
              fill="#4a6080"
              fontSize="9"
              textAnchor="end"
              fontFamily="monospace"
            >
              {label}
            </text>
          </g>
        );
      })}
      <line
        x1={32}
        y1={BAR_BASE}
        x2={BCHW - 8}
        y2={BAR_BASE}
        stroke="rgba(255,255,255,0.1)"
        strokeWidth="1"
      />
      {barData.map((d, i) => {
        const x = bx(i);
        const h = (d.value / MAX_BAR) * BAR_AREA;
        return (
          <g key={d.label}>
            <rect
              ref={(el) => {
                rects.current[i] = el;
              }}
              x={x}
              y={BAR_BASE}
              width={BAR_W}
              height={0}
              rx={6}
              fill={`url(#bg${i})`}
            />
            {animate && (
              <text
                x={x + BAR_W / 2}
                y={BAR_BASE - h - 8}
                fill="#00C6FF"
                fontSize="9"
                textAnchor="middle"
                fontFamily="sans-serif"
                fontWeight="bold"
                style={{
                  opacity: animate ? 1 : 0,
                  transition: `opacity 0.3s ease ${0.8 + i * 0.12}s`,
                }}
              >
                {d.display}
              </text>
            )}
            <text
              x={x + BAR_W / 2}
              y={BAR_BASE + 14}
              fill="#4a6080"
              fontSize="9"
              textAnchor="middle"
              fontFamily="sans-serif"
            >
              {d.label}
            </text>
          </g>
        );
      })}
    </svg>
  );
}

export default function Market() {
  const [sectionRef, inView] = useInView<HTMLDivElement>({ threshold: 0.1 });
  const [chartRef, chartInView] = useInView<HTMLDivElement>({ threshold: 0.2 });

  return (
    <section
      id="market"
      ref={sectionRef}
      className="relative py-28 overflow-hidden"
      style={{
        background:
          "linear-gradient(180deg, #0B0F1A 0%, #0d1325 50%, #0B0F1A 100%)",
      }}
      data-ocid="market.section"
    >
      <div
        className="absolute right-0 top-1/2 -translate-y-1/2 pointer-events-none"
        style={{
          width: "400px",
          height: "400px",
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
            Market Opportunity
          </span>
          <h2
            className="font-display font-black text-foreground"
            style={{ fontSize: "clamp(2.5rem, 5vw, 4rem)", lineHeight: 1.05 }}
          >
            A market ready{" "}
            <span
              style={{
                background: "linear-gradient(135deg, #00C6FF 0%, #0080cc 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              to be built.
            </span>
          </h2>
          <p className="mt-4 text-muted-foreground font-body text-lg max-w-lg mx-auto">
            A massive, fast-growing market with no infrastructure layer — yet.
          </p>
        </div>

        {/* Stat cards */}
        <div
          className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16"
          data-ocid="market.stats.list"
        >
          {stats.map((s, i) => (
            <div
              key={s.label}
              className="rounded-2xl p-8 text-center relative overflow-hidden"
              style={{
                background: "rgba(13,18,36,0.8)",
                border: "1px solid rgba(0,198,255,0.12)",
                opacity: inView ? 1 : 0,
                transform: inView ? "translateY(0)" : "translateY(30px)",
                transition: `opacity 0.6s ease ${0.15 + i * 0.15}s, transform 0.6s ease ${0.15 + i * 0.15}s`,
              }}
              data-ocid={`market.stat.${i + 1}`}
            >
              <div
                className="absolute top-0 left-1/2 -translate-x-1/2 pointer-events-none"
                style={{
                  width: "120px",
                  height: "1px",
                  background:
                    "linear-gradient(90deg, transparent, rgba(0,198,255,0.5), transparent)",
                }}
                aria-hidden="true"
              />
              <div
                className="font-display font-black leading-none mb-2"
                style={{
                  fontSize: "clamp(1.6rem, 3vw, 2.2rem)",
                  color: "#00C6FF",
                }}
              >
                {s.value}
              </div>
              <div className="font-display font-bold text-foreground text-base mb-1">
                {s.label}
              </div>
              <p className="text-muted-foreground font-body text-sm">
                {s.sublabel}
              </p>
            </div>
          ))}
        </div>

        {/* Bar chart */}
        <div
          ref={chartRef}
          className="rounded-2xl p-8 md:p-10"
          style={{
            background: "rgba(13,18,36,0.6)",
            border: "1px solid rgba(0,198,255,0.1)",
            opacity: inView ? 1 : 0,
            transition: "opacity 0.8s ease 0.5s",
          }}
          data-ocid="market.chart"
        >
          <div className="mb-6">
            <p className="text-xs font-display tracking-[0.15em] uppercase text-muted-foreground mb-1">
              Market Size (₹ Crore)
            </p>
            <h3 className="font-display font-bold text-foreground text-xl">
              India → Global: the growth trajectory
            </h3>
          </div>
          <BarChart animate={chartInView} />
          <p className="text-xs text-muted-foreground mt-3 font-body">
            Source: ASSOCHAM India, Grand View Research · 2026 and Global
            figures are projected
          </p>
        </div>
      </div>
    </section>
  );
}
