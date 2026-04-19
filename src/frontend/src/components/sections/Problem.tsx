import { useEffect, useRef } from "react";
import { useInView } from "../../hooks/useInView";

// Service nodes placed to look scattered/disconnected — no center hub
const CHAOS_NODES = [
  { label: "Vets", icon: "🩺", x: 80, y: 70 },
  { label: "Groomers", icon: "✂️", x: 310, y: 40 },
  { label: "Insurers", icon: "🛡️", x: 490, y: 90 },
  { label: "Pet Stores", icon: "🐾", x: 140, y: 230 },
  { label: "Trainers", icon: "🏋️", x: 420, y: 220 },
  { label: "Pharmacy", icon: "💊", x: 260, y: 310 },
];

const FRAG_LINES = [
  { id: "f1", x1: 80, y1: 110, x2: 130, y2: 160 },
  { id: "f2", x1: 310, y1: 80, x2: 270, y2: 160 },
  { id: "f3", x1: 490, y1: 130, x2: 440, y2: 190 },
  { id: "f4", x1: 140, y1: 200, x2: 200, y2: 240 },
  { id: "f5", x1: 420, y1: 200, x2: 360, y2: 260 },
  { id: "f6", x1: 260, y1: 280, x2: 310, y2: 230 },
];

const CROSSES = [
  { id: "c1", cx: 195, cy: 145 },
  { id: "c2", cx: 390, cy: 160 },
  { id: "c3", cx: 290, cy: 200 },
];

function FragmentedDiagram({ animate }: { animate: boolean }) {
  const shakeRefs = useRef<(SVGGElement | null)[]>([]);

  useEffect(() => {
    if (!animate) return;
    const timers: ReturnType<typeof setTimeout>[] = [];
    shakeRefs.current.forEach((el, i) => {
      if (!el) return;
      const delay = i * 120;
      const timer = setTimeout(() => {
        el.style.animation = "none";
        void (el as unknown as HTMLElement).offsetWidth;
        el.style.animation = "nodeShake 0.5s ease-in-out";
      }, delay);
      timers.push(timer);
    });
    return () => timers.forEach(clearTimeout);
  }, [animate]);

  return (
    <svg
      viewBox="0 0 580 380"
      className="w-full"
      role="img"
      aria-label="Fragmented pet care ecosystem — disconnected services"
    >
      <defs>
        <filter id="node-glow" x="-30%" y="-30%" width="160%" height="160%">
          <feGaussianBlur stdDeviation="4" result="blur" />
          <feMerge>
            <feMergeNode in="blur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
        <filter id="red-glow" x="-40%" y="-40%" width="180%" height="180%">
          <feGaussianBlur stdDeviation="6" result="blur" />
          <feMerge>
            <feMergeNode in="blur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>

      {/* Scattered broken stubs going nowhere */}
      {FRAG_LINES.map((line) => (
        <line
          key={line.id}
          x1={line.x1}
          y1={line.y1}
          x2={line.x2}
          y2={line.y2}
          stroke="rgba(255,80,80,0.15)"
          strokeWidth="1.5"
          strokeDasharray="3 8"
        />
      ))}

      {/* Missing link X crosses */}
      {CROSSES.map((cross) => (
        <g key={cross.id} filter="url(#red-glow)">
          <line
            x1={cross.cx - 7}
            y1={cross.cy - 7}
            x2={cross.cx + 7}
            y2={cross.cy + 7}
            stroke="rgba(255,80,80,0.5)"
            strokeWidth="1.5"
            strokeLinecap="round"
          />
          <line
            x1={cross.cx + 7}
            y1={cross.cy - 7}
            x2={cross.cx - 7}
            y2={cross.cy + 7}
            stroke="rgba(255,80,80,0.5)"
            strokeWidth="1.5"
            strokeLinecap="round"
          />
        </g>
      ))}

      {/* Isolated service nodes */}
      {CHAOS_NODES.map((node, i) => (
        <g
          key={node.label}
          ref={(el) => {
            shakeRefs.current[i] = el;
          }}
          filter="url(#node-glow)"
          style={{ transformOrigin: `${node.x}px ${node.y}px` }}
        >
          {/* Outer dashed ring — incomplete */}
          <circle
            cx={node.x}
            cy={node.y}
            r="42"
            fill="none"
            stroke="rgba(0,198,255,0.08)"
            strokeWidth="1"
            strokeDasharray="4 9"
          />
          {/* Node body */}
          <circle
            cx={node.x}
            cy={node.y}
            r="32"
            fill="rgba(10,16,30,0.95)"
            stroke="rgba(0,198,255,0.2)"
            strokeWidth="1.5"
          />
          {/* Icon */}
          <text
            x={node.x}
            y={node.y}
            textAnchor="middle"
            dominantBaseline="central"
            fontSize="15"
          >
            {node.icon}
          </text>
          {/* Label */}
          <text
            x={node.x}
            y={node.y + 48}
            textAnchor="middle"
            fontSize="10"
            fontFamily="var(--font-body), sans-serif"
            fill="rgba(255,255,255,0.3)"
            fontWeight="500"
          >
            {node.label}
          </text>
        </g>
      ))}

      {/* No core layer label */}
      <text
        x="290"
        y="185"
        textAnchor="middle"
        fontSize="11"
        fontFamily="var(--font-body), sans-serif"
        fill="rgba(255,80,80,0.25)"
        fontWeight="600"
        letterSpacing="0.12em"
      >
        NO CORE LAYER
      </text>
    </svg>
  );
}

const PAIN_POINTS = [
  {
    text: "No identity for pets",
    sub: "No universal ID — no traceability across services",
  },
  {
    text: "No unified data",
    sub: "Health records scattered across disconnected silos",
  },
  {
    text: "No connected ecosystem",
    sub: "Every service operates in complete isolation",
  },
  {
    text: "Everything is manual and scattered",
    sub: "Paper-based, error-prone, painfully slow",
  },
];

export default function Problem() {
  const [ref, inView] = useInView<HTMLDivElement>({ threshold: 0.1 });

  return (
    <section
      id="problem"
      ref={ref}
      data-ocid="problem.section"
      className="py-32 relative"
      style={{ background: "rgba(8,12,22,0.98)" }}
    >
      {/* Top separator */}
      <div
        className="absolute top-0 left-0 right-0 h-px pointer-events-none"
        style={{
          background:
            "linear-gradient(90deg, transparent, rgba(0,198,255,0.15), transparent)",
        }}
      />

      <div className="max-w-7xl mx-auto px-6">
        {/* Section heading */}
        <div
          style={{
            opacity: inView ? 1 : 0,
            transform: inView ? "translateY(0)" : "translateY(20px)",
            transition: "opacity 0.8s ease-out, transform 0.8s ease-out",
          }}
          className="mb-20"
        >
          <span
            className="text-xs font-display font-semibold uppercase tracking-[0.25em] block mb-4"
            style={{ color: "#00C6FF" }}
          >
            The Problem
          </span>
          <h2
            className="font-display font-black text-foreground leading-tight"
            style={{ fontSize: "clamp(2.5rem, 6vw, 4.5rem)" }}
          >
            Pet care today is
            <br />
            <span className="text-gradient-primary">fragmented.</span>
          </h2>
          <p className="mt-5 text-lg text-muted-foreground font-body max-w-lg leading-relaxed">
            Every pet service operates in a silo. No shared data. No unified
            identity. Owners piece it all together manually.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Pain points */}
          <div className="space-y-3">
            {PAIN_POINTS.map((point, i) => (
              <div
                key={point.text}
                className="flex items-start gap-4 p-5 rounded-xl"
                style={{
                  background: "rgba(11,18,35,0.8)",
                  border: "1px solid rgba(255,80,80,0.1)",
                  opacity: inView ? 1 : 0,
                  transform: inView ? "translateX(0)" : "translateX(-24px)",
                  transition: `opacity 0.7s ease-out ${i * 120}ms, transform 0.7s ease-out ${i * 120}ms`,
                }}
                data-ocid={`problem.item.${i + 1}`}
              >
                <div className="mt-1.5 shrink-0">
                  <div
                    className="w-2 h-2 rounded-full"
                    style={{
                      background: "rgba(255,80,80,0.8)",
                      boxShadow: "0 0 6px rgba(255,80,80,0.4)",
                    }}
                  />
                </div>
                <div>
                  <div className="font-display font-semibold text-foreground text-base">
                    {point.text}
                  </div>
                  <div className="text-sm text-muted-foreground font-body mt-0.5 leading-relaxed">
                    {point.sub}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Fragmented diagram */}
          <div
            style={{
              opacity: inView ? 1 : 0,
              transform: inView ? "scale(1)" : "scale(0.92)",
              transition:
                "opacity 1s ease-out 0.3s, transform 1s ease-out 0.3s",
            }}
          >
            <div
              className="rounded-2xl p-6"
              style={{
                background: "rgba(11,18,35,0.6)",
                border: "1px solid rgba(0,198,255,0.08)",
              }}
            >
              <div className="text-center mb-4">
                <span className="text-xs font-display font-semibold uppercase tracking-[0.2em] text-muted-foreground opacity-40">
                  Current State
                </span>
              </div>
              <FragmentedDiagram animate={inView} />
            </div>
          </div>
        </div>
      </div>

      {/* Bottom separator */}
      <div
        className="absolute bottom-0 left-0 right-0 h-px pointer-events-none"
        style={{
          background:
            "linear-gradient(90deg, transparent, rgba(0,198,255,0.1), transparent)",
        }}
      />
    </section>
  );
}
