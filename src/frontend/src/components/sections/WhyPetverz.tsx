import { useInView } from "../../hooks/useInView";

const advantages = [
  {
    title: "Identity layer is defensible",
    desc: "Pet identity is foundational infrastructure. Once embedded, switching costs are prohibitive — creating a data moat competitors cannot replicate.",
    icon: (
      <svg
        width="44"
        height="44"
        viewBox="0 0 44 44"
        fill="none"
        aria-hidden="true"
      >
        <path
          d="M22 4L8 10V22C8 30.5 14.1 38.4 22 40C29.9 38.4 36 30.5 36 22V10L22 4Z"
          stroke="#00C6FF"
          strokeWidth="1.5"
          fill="rgba(0,198,255,0.07)"
          strokeLinejoin="round"
        />
        <circle
          cx="22"
          cy="20"
          r="4"
          fill="none"
          stroke="#00C6FF"
          strokeWidth="1.5"
        />
        <line
          x1="22"
          y1="24"
          x2="22"
          y2="29"
          stroke="#00C6FF"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
        <circle cx="22" cy="29" r="1.5" fill="#00C6FF" />
      </svg>
    ),
    delay: 0,
  },
  {
    title: "Network effects from wallet + services",
    desc: "More owners → more vets and services join → stronger wallet usage. Every new participant multiplies value for all others in the ecosystem.",
    icon: (
      <svg
        width="44"
        height="44"
        viewBox="0 0 44 44"
        fill="none"
        aria-hidden="true"
      >
        <circle cx="22" cy="22" r="4" fill="#00C6FF" opacity="0.85" />
        <circle
          cx="8"
          cy="14"
          r="3.5"
          stroke="#00C6FF"
          strokeWidth="1.5"
          fill="rgba(0,198,255,0.1)"
        />
        <circle
          cx="36"
          cy="14"
          r="3.5"
          stroke="#00C6FF"
          strokeWidth="1.5"
          fill="rgba(0,198,255,0.1)"
        />
        <circle
          cx="8"
          cy="30"
          r="3.5"
          stroke="#00C6FF"
          strokeWidth="1.5"
          fill="rgba(0,198,255,0.1)"
        />
        <circle
          cx="36"
          cy="30"
          r="3.5"
          stroke="#00C6FF"
          strokeWidth="1.5"
          fill="rgba(0,198,255,0.1)"
        />
        <line
          x1="18"
          y1="22"
          x2="11.5"
          y2="16.5"
          stroke="#00C6FF"
          strokeWidth="1"
          opacity="0.45"
        />
        <line
          x1="26"
          y1="22"
          x2="32.5"
          y2="16.5"
          stroke="#00C6FF"
          strokeWidth="1"
          opacity="0.45"
        />
        <line
          x1="18"
          y1="22"
          x2="11.5"
          y2="27.5"
          stroke="#00C6FF"
          strokeWidth="1"
          opacity="0.45"
        />
        <line
          x1="26"
          y1="22"
          x2="32.5"
          y2="27.5"
          stroke="#00C6FF"
          strokeWidth="1"
          opacity="0.45"
        />
        <line
          x1="11.5"
          y1="16.5"
          x2="32.5"
          y2="16.5"
          stroke="#00C6FF"
          strokeWidth="0.5"
          opacity="0.2"
          strokeDasharray="3 3"
        />
        <line
          x1="11.5"
          y1="27.5"
          x2="32.5"
          y2="27.5"
          stroke="#00C6FF"
          strokeWidth="0.5"
          opacity="0.2"
          strokeDasharray="3 3"
        />
      </svg>
    ),
    delay: 120,
  },
  {
    title: "First mover advantage",
    desc: "No structured pet identity infrastructure exists in India. Petverz is building the category — capturing data, partners, and brand recall before any competitor.",
    icon: (
      <svg
        width="44"
        height="44"
        viewBox="0 0 44 44"
        fill="none"
        aria-hidden="true"
      >
        <path
          d="M22 6L25 15H34.5L27 20.5L29.5 30L22 24.5L14.5 30L17 20.5L9.5 15H19L22 6Z"
          stroke="#00C6FF"
          strokeWidth="1.5"
          fill="rgba(0,198,255,0.1)"
          strokeLinejoin="round"
        />
        <line
          x1="22"
          y1="33"
          x2="22"
          y2="39"
          stroke="#00C6FF"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
        <line
          x1="15"
          y1="39"
          x2="29"
          y2="39"
          stroke="#00C6FF"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
        <line
          x1="22"
          y1="39"
          x2="22"
          y2="39"
          stroke="#00C6FF"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
      </svg>
    ),
    delay: 240,
  },
];

const archLayers = [
  {
    label: "Partner Integrations",
    sub: "Insurers · Pharmacies · Breeders",
    opacity: 0.22,
    borderOpacity: 0.25,
    glow: false,
    height: "h-12",
  },
  {
    label: "Service Ecosystem Layer",
    sub: "Vets · Groomers · Trainers",
    opacity: 0.32,
    borderOpacity: 0.35,
    glow: false,
    height: "h-14",
  },
  {
    label: "Wallet & Payments Layer",
    sub: "Transactions · Rewards · Commissions",
    opacity: 0.48,
    borderOpacity: 0.5,
    glow: false,
    height: "h-14",
  },
  {
    label: "Pet Identity Layer",
    sub: "QR Identity · Pet Profile · Data",
    opacity: 0.7,
    borderOpacity: 0.75,
    glow: true,
    height: "h-16",
  },
];

export default function WhyPetverz() {
  const [sectionRef, inView] = useInView<HTMLElement>({ threshold: 0.08 });
  const [diagramRef, diagramInView] = useInView<HTMLDivElement>({
    threshold: 0.15,
  });

  return (
    <section
      ref={sectionRef}
      id="why-petverz"
      data-ocid="why_petverz.section"
      className="relative py-32 px-6 overflow-hidden"
      style={{ background: "#0B0F1A" }}
    >
      {/* Ambient background */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 70% 50% at 50% 100%, rgba(0,198,255,0.04) 0%, transparent 70%)",
        }}
        aria-hidden="true"
      />

      <div className="relative max-w-6xl mx-auto">
        {/* Section header */}
        <div
          style={{
            opacity: inView ? 1 : 0,
            transform: inView ? "translateY(0)" : "translateY(28px)",
            transition: "opacity 0.8s ease-out, transform 0.8s ease-out",
          }}
          className="mb-20"
        >
          <p className="text-xs font-mono tracking-[0.28em] uppercase text-gradient-primary mb-5">
            Competitive Advantage
          </p>
          <h2 className="font-display font-black text-5xl md:text-7xl text-foreground leading-[0.93] tracking-tight">
            Built to be
            <br />
            <span className="text-gradient-primary">defensible.</span>
          </h2>
        </div>

        {/* Advantage cards */}
        <div className="grid md:grid-cols-3 gap-5 mb-28">
          {advantages.map((item, i) => (
            <div
              key={item.title}
              data-ocid={`why_petverz.advantage.${i + 1}`}
              className="relative p-8 rounded-2xl overflow-hidden"
              style={{
                opacity: inView ? 1 : 0,
                transform: inView ? "translateY(0)" : "translateY(36px)",
                transition: `opacity 0.7s ease-out ${item.delay}ms, transform 0.7s ease-out ${item.delay}ms`,
                background: "rgba(0,198,255,0.025)",
                border: "1px solid rgba(0,198,255,0.14)",
              }}
            >
              {/* Top line accent */}
              <div
                className="absolute inset-x-0 top-0 h-px"
                style={{
                  background:
                    "linear-gradient(90deg, transparent 0%, rgba(0,198,255,0.5) 50%, transparent 100%)",
                }}
                aria-hidden="true"
              />
              <div className="mb-7">{item.icon}</div>
              <h3 className="font-display font-bold text-lg text-foreground mb-3 leading-snug">
                {item.title}
              </h3>
              <p className="text-sm text-muted-foreground font-body leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </div>

        {/* Architecture diagram */}
        <div
          ref={diagramRef}
          data-ocid="why_petverz.architecture_diagram"
          className="rounded-3xl p-10 md:p-14"
          style={{
            background: "rgba(0,198,255,0.02)",
            border: "1px solid rgba(0,198,255,0.1)",
          }}
        >
          <p className="text-xs font-mono tracking-[0.28em] uppercase text-gradient-primary mb-2">
            Platform Architecture
          </p>
          <h3 className="font-display font-bold text-2xl md:text-3xl text-foreground mb-12">
            A layered infrastructure platform
          </h3>

          <div className="space-y-3">
            {archLayers.map((layer, i) => {
              const reverseIdx = archLayers.length - 1 - i;
              const delay = diagramInView ? reverseIdx * 130 : 0;
              return (
                <div
                  key={`arch-layer-${layer.label}`}
                  data-ocid={`why_petverz.layer.${i + 1}`}
                  className="flex items-center gap-5 md:gap-8"
                  style={{
                    opacity: diagramInView ? 1 : 0,
                    transform: diagramInView
                      ? "translateX(0)"
                      : "translateX(-20px)",
                    transition: `opacity 0.6s ease-out ${delay}ms, transform 0.6s ease-out ${delay}ms`,
                  }}
                >
                  {/* Left label */}
                  <div className="w-44 flex-shrink-0 text-right hidden md:block">
                    <span
                      className="text-xs font-mono"
                      style={{
                        color: layer.glow ? "#00C6FF" : "rgba(255,255,255,0.4)",
                        fontWeight: layer.glow ? 600 : 400,
                      }}
                    >
                      {layer.sub}
                    </span>
                  </div>

                  {/* Layer bar */}
                  <div
                    className={`flex-1 rounded-xl flex items-center px-6 ${layer.height}`}
                    style={{
                      background: `rgba(0,198,255,${layer.opacity})`,
                      border: `1px solid rgba(0,198,255,${layer.borderOpacity})`,
                      boxShadow: layer.glow
                        ? "0 0 32px rgba(0,198,255,0.4), 0 0 80px rgba(0,198,255,0.12)"
                        : "none",
                    }}
                  >
                    <span
                      className="font-display font-semibold text-sm"
                      style={{
                        color: layer.glow ? "#fff" : "rgba(255,255,255,0.75)",
                      }}
                    >
                      {layer.label}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Foundation note */}
          <div
            className="mt-7 md:pl-52"
            style={{
              opacity: diagramInView ? 1 : 0,
              transition: "opacity 0.8s ease-out 620ms",
            }}
          >
            <p className="text-xs font-mono text-muted-foreground">
              ↑ Foundation — all services build on top of Pet Identity
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
