import { useInView } from "../../hooks/useInView";

const revenueStreams = [
  {
    icon: (
      <svg
        width="26"
        height="26"
        viewBox="0 0 24 24"
        fill="none"
        stroke="#00C6FF"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <circle cx="12" cy="12" r="10" />
        <path d="M12 6v2M12 16v2M8.5 9.5l1.5 1M14 13.5l1.5 1M15.5 9.5l-1.5 1M10 13.5l-1.5 1M9 12h6" />
      </svg>
    ),
    title: "Transaction Fees",
    desc: "0.5–1.5% on every payment made through the Petverz wallet — vet bills, grooming, pet food delivery.",
    badge: "Core Revenue",
  },
  {
    icon: (
      <svg
        width="26"
        height="26"
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
    title: "Card Sales",
    desc: "Premium NFC-enabled Petverz identity cards sold at ₹299–₹599. Renewals every 3 years.",
    badge: "Hardware",
  },
  {
    icon: (
      <svg
        width="26"
        height="26"
        viewBox="0 0 24 24"
        fill="none"
        stroke="#00C6FF"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <circle cx="12" cy="5" r="2" />
        <circle cx="5" cy="19" r="2" />
        <circle cx="19" cy="19" r="2" />
        <path d="M12 7v4M8.5 17l3-4M15.5 17l-3-4" />
      </svg>
    ),
    title: "Service Commissions",
    desc: "15–20% commission on bookings made through the platform — vets, groomers, trainers, boarding.",
    badge: "Marketplace",
  },
  {
    icon: (
      <svg
        width="26"
        height="26"
        viewBox="0 0 24 24"
        fill="none"
        stroke="#00C6FF"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <path d="M10 3H6a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h4M14 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4M10 12h4" />
        <path d="M7 8h2M7 12h2M7 16h2M15 8h2M15 12h2M15 16h2" />
      </svg>
    ),
    title: "Partner Integrations",
    desc: "API access fees for pet insurance providers, pharmacies, and food brands integrating into the ecosystem.",
    badge: "B2B",
  },
];

const outerNodes = [
  { label: "Pets", sublabel: "Identity Layer", angle: -90 },
  { label: "Pet Owners", sublabel: "Wallet + Profile", angle: 0 },
  { label: "Service\nProviders", sublabel: "Commissions", angle: 90 },
  { label: "Financial\nPartners", sublabel: "API Fees", angle: 180 },
];

const arrowLabels = [
  "Identity + QR",
  "Payments + Rewards",
  "Bookings + Revenue",
  "APIs + Data",
];

const CX = 240;
const CY = 200;
const R_OUTER = 140;

function np(angle: number, r: number) {
  const rad = (angle * Math.PI) / 180;
  return { x: CX + r * Math.cos(rad), y: CY + r * Math.sin(rad) };
}

function FlowDiagram({ animate }: { animate: boolean }) {
  return (
    <svg
      viewBox="0 0 480 400"
      width="100%"
      style={{ maxWidth: 480 }}
      aria-label="Petverz platform business model flow diagram"
      role="img"
    >
      <defs>
        <filter id="gcf">
          <feGaussianBlur stdDeviation="6" result="blur" />
          <feMerge>
            <feMergeNode in="blur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
        <filter id="gnf">
          <feGaussianBlur stdDeviation="3" result="blur" />
          <feMerge>
            <feMergeNode in="blur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
        <marker
          id="arrowBM"
          markerWidth="6"
          markerHeight="6"
          refX="3"
          refY="3"
          orient="auto"
        >
          <path d="M0 0 L6 3 L0 6 Z" fill="rgba(0,198,255,0.7)" />
        </marker>
        <radialGradient id="cg" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#00608a" stopOpacity="0.9" />
          <stop offset="100%" stopColor="#003355" stopOpacity="0.7" />
        </radialGradient>
      </defs>

      {/* Orbit ring */}
      <circle
        cx={CX}
        cy={CY}
        r={R_OUTER}
        fill="none"
        stroke="rgba(0,198,255,0.06)"
        strokeWidth="1"
        strokeDasharray="4 6"
      />

      {outerNodes.map((node, i) => {
        const outer = np(node.angle, R_OUTER);
        const innerEdge = np(node.angle, 38);
        const outerEdge = np(node.angle, R_OUTER - 22);
        const mid = np(node.angle, R_OUTER * 0.54);
        const perpAngle = node.angle + 90;
        const perpRad = (perpAngle * Math.PI) / 180;

        return (
          <g key={node.label}>
            <line
              x1={innerEdge.x}
              y1={innerEdge.y}
              x2={outerEdge.x}
              y2={outerEdge.y}
              stroke="rgba(0,198,255,0.35)"
              strokeWidth="1.5"
              markerEnd="url(#arrowBM)"
            />
            {animate && (
              <text
                x={mid.x + Math.cos(perpRad) * 10}
                y={mid.y + Math.sin(perpRad) * 10}
                fill="rgba(0,198,255,0.6)"
                fontSize="8"
                textAnchor="middle"
                fontFamily="sans-serif"
              >
                {arrowLabels[i]}
              </text>
            )}
            <circle
              cx={outer.x}
              cy={outer.y}
              r={22}
              fill="rgba(13,18,36,0.95)"
              stroke="rgba(0,198,255,0.3)"
              strokeWidth="1.5"
              filter="url(#gnf)"
              style={{
                opacity: animate ? 1 : 0,
                transition: `opacity 0.5s ease ${0.3 + i * 0.15}s`,
              }}
            />
            <text
              x={outer.x}
              y={outer.y + (node.label.includes("\n") ? -5 : 3)}
              fill="#c0d8f0"
              fontSize="8"
              fontWeight="bold"
              textAnchor="middle"
              fontFamily="sans-serif"
              style={{
                opacity: animate ? 1 : 0,
                transition: `opacity 0.5s ease ${0.4 + i * 0.15}s`,
              }}
            >
              {node.label.split("\n").map((line, li) => (
                <tspan
                  key={`${node.label}-${li}`}
                  x={outer.x}
                  dy={li === 0 ? 0 : 11}
                >
                  {line}
                </tspan>
              ))}
            </text>
            <text
              x={outer.x}
              y={outer.y + (node.label.includes("\n") ? 16 : 13)}
              fill="rgba(0,198,255,0.5)"
              fontSize="6.5"
              textAnchor="middle"
              fontFamily="sans-serif"
              style={{
                opacity: animate ? 1 : 0,
                transition: `opacity 0.5s ease ${0.5 + i * 0.15}s`,
              }}
            >
              {node.sublabel}
            </text>
          </g>
        );
      })}

      {/* Center node */}
      <circle cx={CX} cy={CY} r={52} fill="url(#cg)" filter="url(#gcf)" />
      <circle
        cx={CX}
        cy={CY}
        r={52}
        fill="none"
        stroke="rgba(0,198,255,0.5)"
        strokeWidth="1.5"
      />
      <circle
        cx={CX}
        cy={CY}
        r={44}
        fill="none"
        stroke="rgba(0,198,255,0.1)"
        strokeWidth="1"
      />
      <circle
        cx={CX}
        cy={CY - 10}
        r={10}
        fill="none"
        stroke="#00C6FF"
        strokeWidth="1.5"
        opacity="0.7"
      />
      <circle cx={CX - 14} cy={CY - 16} r={4} fill="#00C6FF" opacity="0.5" />
      <circle cx={CX + 14} cy={CY - 16} r={4} fill="#00C6FF" opacity="0.5" />
      <circle cx={CX - 20} cy={CY - 6} r={3} fill="#00C6FF" opacity="0.4" />
      <circle cx={CX + 20} cy={CY - 6} r={3} fill="#00C6FF" opacity="0.4" />
      <text
        x={CX}
        y={CY + 12}
        fill="#00C6FF"
        fontSize="9"
        fontWeight="bold"
        textAnchor="middle"
        fontFamily="sans-serif"
        letterSpacing="1"
      >
        PETVERZ
      </text>
      <text
        x={CX}
        y={CY + 24}
        fill="rgba(0,198,255,0.5)"
        fontSize="7"
        textAnchor="middle"
        fontFamily="sans-serif"
      >
        Platform
      </text>
    </svg>
  );
}

export default function BusinessModel() {
  const [sectionRef, inView] = useInView<HTMLDivElement>({ threshold: 0.1 });
  const [diagramRef, diagramInView] = useInView<HTMLDivElement>({
    threshold: 0.2,
  });

  return (
    <section
      id="business-model"
      ref={sectionRef}
      className="relative py-28 overflow-hidden"
      style={{ background: "#0B0F1A" }}
      data-ocid="business_model.section"
    >
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 50% 40% at 50% 70%, rgba(0,198,255,0.04) 0%, transparent 70%)",
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
            Business Model
          </span>
          <h2
            className="font-display font-black text-foreground"
            style={{ fontSize: "clamp(2.5rem, 5vw, 4rem)", lineHeight: 1.05 }}
          >
            We monetize{" "}
            <span
              style={{
                background: "linear-gradient(135deg, #00C6FF 0%, #0080cc 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              the ecosystem.
            </span>
          </h2>
          <p className="mt-4 text-muted-foreground font-body text-lg max-w-lg mx-auto">
            Four interconnected revenue streams that compound as the network
            grows.
          </p>
        </div>

        {/* Revenue stream 2x2 grid */}
        <div
          className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-16"
          data-ocid="business_model.streams.list"
        >
          {revenueStreams.map((stream, i) => (
            <div
              key={stream.title}
              className="rounded-2xl p-8 flex gap-5 items-start relative overflow-hidden group"
              style={{
                background: "rgba(13,18,36,0.8)",
                border: "1px solid rgba(0,198,255,0.1)",
                opacity: inView ? 1 : 0,
                transform: inView ? "translateY(0)" : "translateY(30px)",
                transition: `opacity 0.6s ease ${0.1 + i * 0.12}s, transform 0.6s ease ${0.1 + i * 0.12}s`,
              }}
              data-ocid={`business_model.stream.${i + 1}`}
            >
              <div
                className="absolute inset-0 rounded-2xl pointer-events-none opacity-0 group-hover:opacity-100"
                style={{
                  background: "rgba(0,198,255,0.02)",
                  border: "1px solid rgba(0,198,255,0.2)",
                  transition: "opacity 0.3s ease",
                }}
                aria-hidden="true"
              />
              <div
                className="flex-shrink-0 w-12 h-12 rounded-xl flex items-center justify-center"
                style={{
                  background: "rgba(0,198,255,0.08)",
                  border: "1px solid rgba(0,198,255,0.18)",
                }}
              >
                {stream.icon}
              </div>
              <div className="min-w-0">
                <div className="flex items-center gap-2 mb-2 flex-wrap">
                  <h3 className="font-display font-bold text-foreground text-lg">
                    {stream.title}
                  </h3>
                  <span
                    className="text-xs font-display font-semibold px-2 py-0.5 rounded-full"
                    style={{
                      background: "rgba(0,198,255,0.1)",
                      color: "#00C6FF",
                      border: "1px solid rgba(0,198,255,0.2)",
                    }}
                  >
                    {stream.badge}
                  </span>
                </div>
                <p className="text-muted-foreground font-body text-sm leading-relaxed">
                  {stream.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Flow diagram */}
        <div
          ref={diagramRef}
          className="rounded-2xl p-8 md:p-12 flex flex-col lg:flex-row items-center gap-10"
          style={{
            background: "rgba(13,18,36,0.6)",
            border: "1px solid rgba(0,198,255,0.1)",
            opacity: inView ? 1 : 0,
            transition: "opacity 0.8s ease 0.5s",
          }}
          data-ocid="business_model.diagram"
        >
          <div className="flex-shrink-0 w-full" style={{ maxWidth: "420px" }}>
            <FlowDiagram animate={diagramInView} />
          </div>
          <div className="flex-1 min-w-0">
            <h3 className="font-display font-bold text-foreground text-2xl mb-4">
              Platform at the center
            </h3>
            <p className="text-muted-foreground font-body text-base leading-relaxed mb-6">
              Petverz sits at the intersection of every interaction — capturing
              value at each connection point between pets, owners, service
              providers, and financial partners.
            </p>
            <div className="flex flex-col gap-3">
              {[
                "Network effects strengthen defensibility",
                "Each new pet multiplies service demand",
                "Data flywheel improves personalization",
                "Partner ecosystem grows revenue per pet",
              ].map((point) => (
                <div key={point} className="flex items-start gap-3">
                  <div
                    className="w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5"
                    style={{
                      background: "rgba(0,198,255,0.15)",
                      border: "1px solid rgba(0,198,255,0.3)",
                    }}
                  >
                    <svg
                      width="10"
                      height="10"
                      viewBox="0 0 12 12"
                      fill="none"
                      aria-hidden="true"
                    >
                      <path
                        d="M2 6l3 3 5-5"
                        stroke="#00C6FF"
                        strokeWidth="1.8"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                  <span className="text-sm font-body text-muted-foreground leading-relaxed">
                    {point}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
