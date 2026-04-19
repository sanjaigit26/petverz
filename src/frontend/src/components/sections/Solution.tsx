import { useInView } from "../../hooks/useInView";

// Flow diagram nodes
const FLOW_NODES = [
  {
    id: "card",
    label: "Card",
    sublabel: "Physical NFC+QR",
    icon: (
      <svg
        width="32"
        height="32"
        viewBox="0 0 32 32"
        fill="none"
        aria-hidden="true"
      >
        <rect
          x="2"
          y="7"
          width="28"
          height="18"
          rx="3"
          stroke="#00C6FF"
          strokeWidth="1.5"
        />
        <line
          x1="2"
          y1="13"
          x2="30"
          y2="13"
          stroke="#00C6FF"
          strokeWidth="1.5"
        />
        <rect
          x="6"
          y="17"
          width="8"
          height="4"
          rx="1"
          fill="#00C6FF"
          opacity="0.3"
        />
        <circle cx="24" cy="19" r="3" stroke="#00C6FF" strokeWidth="1.2" />
        <circle cx="24" cy="19" r="1.2" fill="#00C6FF" opacity="0.8" />
      </svg>
    ),
  },
  {
    id: "scan",
    label: "Scan",
    sublabel: "Instant QR Scan",
    icon: (
      <svg
        width="32"
        height="32"
        viewBox="0 0 32 32"
        fill="none"
        aria-hidden="true"
      >
        <rect
          x="4"
          y="4"
          width="9"
          height="9"
          rx="1.5"
          stroke="#00C6FF"
          strokeWidth="1.5"
        />
        <rect x="7" y="7" width="3" height="3" fill="#00C6FF" />
        <rect
          x="19"
          y="4"
          width="9"
          height="9"
          rx="1.5"
          stroke="#00C6FF"
          strokeWidth="1.5"
        />
        <rect x="22" y="7" width="3" height="3" fill="#00C6FF" />
        <rect
          x="4"
          y="19"
          width="9"
          height="9"
          rx="1.5"
          stroke="#00C6FF"
          strokeWidth="1.5"
        />
        <rect x="7" y="22" width="3" height="3" fill="#00C6FF" />
        <rect x="19" y="19" width="4" height="4" fill="#00C6FF" opacity="0.6" />
        <rect x="25" y="19" width="3" height="3" fill="#00C6FF" />
        <rect x="19" y="25" width="3" height="3" fill="#00C6FF" />
        <rect x="24" y="25" width="4" height="3" fill="#00C6FF" opacity="0.4" />
      </svg>
    ),
  },
  {
    id: "app",
    label: "App",
    sublabel: "Full Pet Profile",
    icon: (
      <svg
        width="32"
        height="32"
        viewBox="0 0 32 32"
        fill="none"
        aria-hidden="true"
      >
        <rect
          x="8"
          y="2"
          width="16"
          height="28"
          rx="3"
          stroke="#00C6FF"
          strokeWidth="1.5"
        />
        <circle cx="16" cy="27" r="1.5" fill="#00C6FF" opacity="0.5" />
        <rect
          x="12"
          y="7"
          width="8"
          height="5"
          rx="1"
          fill="#00C6FF"
          opacity="0.2"
        />
        <rect
          x="11"
          y="15"
          width="10"
          height="1.5"
          rx="0.75"
          fill="#00C6FF"
          opacity="0.4"
        />
        <rect
          x="11"
          y="19"
          width="7"
          height="1.5"
          rx="0.75"
          fill="#00C6FF"
          opacity="0.25"
        />
      </svg>
    ),
  },
];

const FEATURES = [
  {
    icon: (
      <svg
        width="26"
        height="26"
        viewBox="0 0 24 24"
        fill="none"
        aria-hidden="true"
      >
        <rect
          x="3"
          y="3"
          width="8"
          height="8"
          rx="1.5"
          stroke="#00C6FF"
          strokeWidth="1.5"
        />
        <rect x="6" y="6" width="2" height="2" fill="#00C6FF" />
        <rect
          x="13"
          y="3"
          width="8"
          height="8"
          rx="1.5"
          stroke="#00C6FF"
          strokeWidth="1.5"
        />
        <rect x="16" y="6" width="2" height="2" fill="#00C6FF" />
        <rect
          x="3"
          y="13"
          width="8"
          height="8"
          rx="1.5"
          stroke="#00C6FF"
          strokeWidth="1.5"
        />
        <rect x="6" y="16" width="2" height="2" fill="#00C6FF" />
        <rect x="13" y="13" width="3" height="3" fill="#00C6FF" opacity="0.6" />
        <rect x="18" y="13" width="3" height="3" fill="#00C6FF" />
        <rect x="13" y="18" width="3" height="3" fill="#00C6FF" />
        <rect x="18" y="18" width="3" height="3" fill="#00C6FF" opacity="0.6" />
      </svg>
    ),
    title: "QR-based Pet Identity",
    desc: "Every pet gets a unique scannable identity — traceable, verifiable, permanent.",
  },
  {
    icon: (
      <svg
        width="26"
        height="26"
        viewBox="0 0 24 24"
        fill="none"
        aria-hidden="true"
      >
        <circle cx="12" cy="8" r="4" stroke="#00C6FF" strokeWidth="1.5" />
        <path
          d="M4 20c0-4 3.6-7 8-7s8 3 8 7"
          stroke="#00C6FF"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
        <path
          d="M18 5l1.5 1.5M18 11l1.5 1.5"
          stroke="#00C6FF"
          strokeWidth="1.2"
          strokeLinecap="round"
          opacity="0.5"
        />
      </svg>
    ),
    title: "Digital Pet Profile",
    desc: "Health records, vaccination history, breed info — accessible anywhere, instantly.",
  },
  {
    icon: (
      <svg
        width="26"
        height="26"
        viewBox="0 0 24 24"
        fill="none"
        aria-hidden="true"
      >
        <rect
          x="2"
          y="6"
          width="20"
          height="14"
          rx="2"
          stroke="#00C6FF"
          strokeWidth="1.5"
        />
        <path d="M2 10h20" stroke="#00C6FF" strokeWidth="1.5" />
        <circle cx="7" cy="15" r="1.5" fill="#00C6FF" opacity="0.8" />
        <rect
          x="11"
          y="13.5"
          width="8"
          height="3"
          rx="1"
          fill="#00C6FF"
          opacity="0.25"
        />
      </svg>
    ),
    title: "Wallet for Payments",
    desc: "Integrated pet wallet for vet bills, grooming, insurance, and rewards.",
  },
  {
    icon: (
      <svg
        width="26"
        height="26"
        viewBox="0 0 24 24"
        fill="none"
        aria-hidden="true"
      >
        <circle cx="12" cy="12" r="9" stroke="#00C6FF" strokeWidth="1.5" />
        <circle cx="5" cy="5" r="1.5" fill="#00C6FF" opacity="0.5" />
        <circle cx="19" cy="5" r="1.5" fill="#00C6FF" opacity="0.5" />
        <circle cx="5" cy="19" r="1.5" fill="#00C6FF" opacity="0.5" />
        <circle cx="19" cy="19" r="1.5" fill="#00C6FF" opacity="0.5" />
        <line
          x1="5"
          y1="5"
          x2="12"
          y2="12"
          stroke="#00C6FF"
          strokeWidth="1.2"
          opacity="0.4"
        />
        <line
          x1="19"
          y1="5"
          x2="12"
          y2="12"
          stroke="#00C6FF"
          strokeWidth="1.2"
          opacity="0.4"
        />
        <line
          x1="5"
          y1="19"
          x2="12"
          y2="12"
          stroke="#00C6FF"
          strokeWidth="1.2"
          opacity="0.4"
        />
        <line
          x1="19"
          y1="19"
          x2="12"
          y2="12"
          stroke="#00C6FF"
          strokeWidth="1.2"
          opacity="0.4"
        />
      </svg>
    ),
    title: "Service Ecosystem",
    desc: "One platform connecting vets, groomers, shelters, insurers, and pet stores.",
  },
];

function FlowDiagram({ inView }: { inView: boolean }) {
  return (
    <div
      className="rounded-2xl p-8 relative"
      style={{
        background: "rgba(11,18,35,0.7)",
        border: "1px solid rgba(0,198,255,0.1)",
      }}
    >
      <div className="text-center mb-8">
        <span className="text-xs font-display font-semibold uppercase tracking-[0.2em] text-muted-foreground opacity-40">
          Product Flow
        </span>
      </div>

      <div className="flex items-center justify-between gap-4">
        {FLOW_NODES.map((node, i) => (
          <div key={node.id} className="flex items-center gap-4 flex-1">
            {/* Node */}
            <div
              className="flex-1 flex flex-col items-center gap-3"
              style={{
                opacity: inView ? 1 : 0,
                transform: inView ? "translateY(0)" : "translateY(16px)",
                transition: `opacity 0.6s ease-out ${0.2 + i * 0.2}s, transform 0.6s ease-out ${0.2 + i * 0.2}s`,
              }}
              data-ocid={`solution.flow.${i + 1}`}
            >
              <div
                className="w-18 h-18 rounded-2xl flex items-center justify-center p-4"
                style={{
                  width: "72px",
                  height: "72px",
                  background: "rgba(0,198,255,0.07)",
                  border: "1px solid rgba(0,198,255,0.25)",
                  boxShadow: inView ? "0 0 20px rgba(0,198,255,0.1)" : "none",
                  transition: "box-shadow 0.6s ease-out",
                }}
              >
                {node.icon}
              </div>
              <div className="text-center">
                <div className="font-display font-bold text-foreground text-sm">
                  {node.label}
                </div>
                <div className="text-xs text-muted-foreground font-body mt-0.5">
                  {node.sublabel}
                </div>
              </div>
            </div>

            {/* Arrow between nodes (not after last) */}
            {i < FLOW_NODES.length - 1 && (
              <div
                className="flex flex-col items-center shrink-0"
                style={{
                  opacity: inView ? 1 : 0,
                  transition: `opacity 0.5s ease-out ${0.4 + i * 0.25}s`,
                }}
              >
                <svg
                  width="40"
                  height="16"
                  viewBox="0 0 40 16"
                  fill="none"
                  aria-hidden="true"
                >
                  <line
                    x1="0"
                    y1="8"
                    x2="32"
                    y2="8"
                    stroke="#00C6FF"
                    strokeWidth="1.5"
                    strokeDasharray="120"
                    strokeDashoffset="0"
                    opacity="0.6"
                  />
                  <path
                    d="M30 4l6 4-6 4"
                    stroke="#00C6FF"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    opacity="0.9"
                  />
                </svg>
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Step labels */}
      <div className="mt-8 flex justify-between px-2">
        {["Scan Card", "Identify Pet", "Open Wallet"].map((step, i) => (
          <div
            key={step}
            className="text-center flex-1"
            style={{
              opacity: inView ? 1 : 0,
              transition: `opacity 0.6s ease-out ${0.7 + i * 0.1}s`,
            }}
          >
            <div className="flex items-center justify-center gap-1.5 mb-1">
              <div
                className="w-4 h-4 rounded-full flex items-center justify-center text-[8px] font-display font-black"
                style={{ background: "rgba(0,198,255,0.15)", color: "#00C6FF" }}
              >
                {i + 1}
              </div>
              <span
                className="text-xs font-display font-semibold"
                style={{ color: "rgba(0,198,255,0.7)" }}
              >
                {step}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default function Solution() {
  const [ref, inView] = useInView<HTMLDivElement>({ threshold: 0.1 });

  return (
    <section
      id="solution"
      ref={ref}
      data-ocid="solution.section"
      className="py-32 relative"
      style={{ background: "rgba(9,14,25,0.98)" }}
    >
      {/* Top accent line */}
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
          className="text-center mb-20"
          style={{
            opacity: inView ? 1 : 0,
            transform: inView ? "translateY(0)" : "translateY(20px)",
            transition: "opacity 0.8s ease-out, transform 0.8s ease-out",
          }}
        >
          <span
            className="text-xs font-display font-semibold uppercase tracking-[0.25em] block mb-4"
            style={{ color: "#00C6FF" }}
          >
            The Solution
          </span>
          <h2
            className="font-display font-black text-foreground leading-tight"
            style={{ fontSize: "clamp(2.5rem, 6vw, 4.5rem)" }}
          >
            Petverz is the
            <br />
            <span className="text-gradient-primary">
              identity layer for pets.
            </span>
          </h2>
        </div>

        {/* Flow diagram */}
        <div
          className="mb-16"
          style={{
            opacity: inView ? 1 : 0,
            transform: inView ? "translateY(0)" : "translateY(24px)",
            transition:
              "opacity 0.9s ease-out 0.2s, transform 0.9s ease-out 0.2s",
          }}
        >
          <FlowDiagram inView={inView} />
        </div>

        {/* Feature grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
          {FEATURES.map((feat, i) => (
            <div
              key={feat.title}
              className="p-6 rounded-2xl group"
              style={{
                background: "rgba(11,18,35,0.8)",
                border: "1px solid rgba(0,198,255,0.1)",
                opacity: inView ? 1 : 0,
                transform: inView ? "translateY(0)" : "translateY(20px)",
                transition: `opacity 0.7s ease-out ${0.4 + i * 0.1}s, transform 0.7s ease-out ${0.4 + i * 0.1}s`,
              }}
              data-ocid={`solution.feature.${i + 1}`}
            >
              <div
                className="w-12 h-12 rounded-xl flex items-center justify-center mb-4 transition-all duration-300"
                style={{
                  background: "rgba(0,198,255,0.07)",
                  border: "1px solid rgba(0,198,255,0.15)",
                }}
              >
                {feat.icon}
              </div>

              {/* Neon checkmark + title row */}
              <div className="flex items-start gap-2 mb-2">
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  className="shrink-0 mt-0.5"
                  aria-hidden="true"
                >
                  <circle
                    cx="8"
                    cy="8"
                    r="7"
                    stroke="#00C6FF"
                    strokeWidth="1.2"
                    opacity="0.4"
                  />
                  <path
                    d="M5 8l2 2 4-4"
                    stroke="#00C6FF"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                <h3 className="font-display font-bold text-base text-foreground leading-tight">
                  {feat.title}
                </h3>
              </div>

              <p className="text-sm text-muted-foreground font-body leading-relaxed pl-6">
                {feat.desc}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom accent line */}
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
