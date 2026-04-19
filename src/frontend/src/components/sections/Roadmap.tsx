import { useInView } from "../../hooks/useInView";

const PHASES = [
  {
    id: "phase-1",
    phase: "Phase 01",
    title: "MVP India",
    date: "Q3 2024",
    desc: "Core identity card + QR system + digital pet profile. Pilot in Bangalore.",
    items: [
      "Petverz card + QR identity",
      "Digital pet profile",
      "Basic vet payments wallet",
      "500 pilot pet owners",
    ],
    status: "active" as const,
  },
  {
    id: "phase-2",
    phase: "Phase 02",
    title: "Market Entry",
    date: "Q1 2025",
    desc: "Wallet and payments launch. Expanding to 3 major Indian cities.",
    items: [
      "Wallet + payments rollout",
      "3 cities expansion",
      "Vet clinic onboarding",
      "10,000 registered pets",
    ],
    status: "upcoming" as const,
  },
  {
    id: "phase-3",
    phase: "Phase 03",
    title: "Scale",
    date: "Q3 2025",
    desc: "Service marketplace goes live. 15 cities. 100,000 pets on platform.",
    items: [
      "Service marketplace",
      "15 cities",
      "Insurance integrations",
      "100k registered pets",
    ],
    status: "upcoming" as const,
  },
  {
    id: "phase-4",
    phase: "Phase 04",
    title: "Global",
    date: "2026+",
    desc: "International expansion starting with Southeast Asia and Middle East.",
    items: [
      "Southeast Asia entry",
      "Multi-currency support",
      "API for global partners",
      "1M+ pets globally",
    ],
    status: "upcoming" as const,
  },
];

export default function Roadmap() {
  const [sectionRef, inView] = useInView<HTMLElement>({ threshold: 0.06 });
  const [timelineRef, timelineInView] = useInView<HTMLDivElement>({
    threshold: 0.1,
  });

  return (
    <section
      ref={sectionRef}
      id="roadmap"
      data-ocid="roadmap.section"
      className="relative py-32 px-6 overflow-hidden"
      style={{ background: "oklch(0.068 0.005 220)" }}
    >
      {/* Top fade from previous section */}
      <div
        className="absolute inset-x-0 top-0 h-px pointer-events-none"
        style={{
          background:
            "linear-gradient(90deg, transparent, rgba(0,198,255,0.1), transparent)",
        }}
        aria-hidden="true"
      />

      <div className="relative max-w-6xl mx-auto">
        {/* Header */}
        <div
          style={{
            opacity: inView ? 1 : 0,
            transform: inView ? "translateY(0)" : "translateY(28px)",
            transition: "opacity 0.8s ease-out, transform 0.8s ease-out",
          }}
          className="mb-24"
        >
          <p className="text-xs font-mono tracking-[0.28em] uppercase text-gradient-primary mb-5">
            Roadmap
          </p>
          <h2 className="font-display font-black text-5xl md:text-7xl text-foreground leading-[0.93] tracking-tight">
            The journey
            <br />
            <span className="text-gradient-primary">ahead.</span>
          </h2>
        </div>

        {/* Horizontal timeline with progress connector */}
        <div ref={timelineRef} className="relative">
          {/* Progress connector line */}
          <div
            className="hidden lg:block absolute top-[22px] left-0 right-0 h-px z-0"
            style={{ background: "rgba(0,198,255,0.15)" }}
            aria-hidden="true"
          />
          {/* Active progress fill — phase 1 is active (25% of 4 phases) */}
          <div
            className="hidden lg:block absolute top-[22px] left-0 h-px z-0"
            style={{
              width: timelineInView ? "12.5%" : "0%",
              background:
                "linear-gradient(90deg, #00C6FF, rgba(0,198,255,0.5))",
              transition: "width 1.2s cubic-bezier(0.4,0,0.2,1) 200ms",
            }}
            aria-hidden="true"
          />

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {PHASES.map((phase, i) => {
              const delay = timelineInView ? i * 150 : 0;
              const isActive = phase.status === "active";
              return (
                <div
                  key={phase.id}
                  data-ocid={`roadmap.phase.${i + 1}`}
                  className="relative"
                  style={{
                    opacity: timelineInView ? 1 : 0,
                    transform: timelineInView
                      ? "translateY(0)"
                      : "translateY(24px)",
                    transition: `opacity 0.65s ease-out ${delay}ms, transform 0.65s ease-out ${delay}ms`,
                  }}
                >
                  {/* Phase node dot */}
                  <div className="hidden lg:flex justify-start mb-6 relative z-10">
                    {isActive ? (
                      <div
                        className="w-11 h-11 rounded-full flex items-center justify-center"
                        style={{
                          background: "#00C6FF",
                          boxShadow:
                            "0 0 20px rgba(0,198,255,0.6), 0 0 40px rgba(0,198,255,0.2)",
                        }}
                      >
                        <div className="w-3 h-3 rounded-full bg-white animate-pulse" />
                      </div>
                    ) : (
                      <div
                        className="w-11 h-11 rounded-full flex items-center justify-center"
                        style={{
                          background: "rgba(0,198,255,0.07)",
                          border: "1px solid rgba(0,198,255,0.25)",
                        }}
                      >
                        <div
                          className="w-3 h-3 rounded-full"
                          style={{ background: "rgba(0,198,255,0.35)" }}
                        />
                      </div>
                    )}
                  </div>

                  {/* Phase card */}
                  <div
                    className="rounded-2xl p-7 h-full"
                    style={
                      isActive
                        ? {
                            background: "rgba(0,198,255,0.06)",
                            border: "1px solid rgba(0,198,255,0.35)",
                            boxShadow: "0 0 32px rgba(0,198,255,0.08)",
                          }
                        : {
                            background: "rgba(0,198,255,0.02)",
                            border: "1px solid rgba(0,198,255,0.1)",
                          }
                    }
                  >
                    {isActive && (
                      <div
                        className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-display font-semibold mb-4"
                        style={{
                          background: "rgba(0,198,255,0.15)",
                          color: "#00C6FF",
                        }}
                      >
                        <div className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
                        In Progress
                      </div>
                    )}
                    <p
                      className="text-xs font-mono mb-1"
                      style={{ color: "rgba(0,198,255,0.55)" }}
                    >
                      {phase.phase}
                    </p>
                    <h3 className="font-display font-bold text-xl text-foreground mb-1">
                      {phase.title}
                    </h3>
                    <p
                      className="text-xs font-mono mb-4"
                      style={{
                        color: isActive ? "#00C6FF" : "rgba(0,198,255,0.45)",
                      }}
                    >
                      {phase.date}
                    </p>
                    <p className="text-sm text-muted-foreground font-body leading-relaxed mb-5">
                      {phase.desc}
                    </p>
                    <ul className="space-y-2">
                      {phase.items.map((item) => (
                        <li
                          key={item}
                          className="flex items-start gap-2 text-sm text-muted-foreground font-body"
                        >
                          <span
                            className="mt-0.5 shrink-0 text-xs"
                            style={{
                              color: isActive
                                ? "#00C6FF"
                                : "rgba(0,198,255,0.4)",
                            }}
                          >
                            →
                          </span>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
