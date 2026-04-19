import { useInView } from "../../hooks/useInView";

// CSS-only star field particles
const STARS = Array.from({ length: 60 }, (_, i) => ({
  id: `star-${i}`,
  top: `${(i * 13.7 + 7) % 100}%`,
  left: `${(i * 17.3 + 3) % 100}%`,
  size: i % 5 === 0 ? 2.5 : i % 3 === 0 ? 2 : 1.5,
  opacity: 0.08 + (i % 7) * 0.05,
  delay: `${(i * 0.4) % 3.5}s`,
  duration: `${3 + (i % 4)}s`,
}));

export default function Vision() {
  const [ref, inView] = useInView<HTMLElement>({ threshold: 0.18 });

  return (
    <section
      ref={ref}
      id="vision"
      data-ocid="vision.section"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{ background: "#0B0F1A" }}
    >
      {/* Star field */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        {STARS.map((star) => (
          <div
            key={star.id}
            className="absolute rounded-full"
            style={{
              top: star.top,
              left: star.left,
              width: star.size,
              height: star.size,
              background: "#00C6FF",
              opacity: star.opacity,
              animation: `visionPulse ${star.duration} ${star.delay} ease-in-out infinite alternate`,
            }}
          />
        ))}
      </div>

      {/* Radial glow background */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 75% 65% at 50% 50%, rgba(0,198,255,0.09) 0%, rgba(0,198,255,0.03) 40%, transparent 70%)",
        }}
        aria-hidden="true"
      />
      {/* Secondary deep glow */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none"
        style={{
          width: "800px",
          height: "800px",
          background:
            "radial-gradient(circle, rgba(0,198,255,0.06) 0%, transparent 60%)",
          filter: "blur(60px)",
        }}
        aria-hidden="true"
      />

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center py-32">
        {/* Label */}
        <div
          className="inline-flex items-center gap-2 mb-10 px-5 py-2 rounded-full text-xs font-display font-semibold uppercase tracking-[0.28em]"
          style={{
            background: "rgba(0,198,255,0.08)",
            border: "1px solid rgba(0,198,255,0.22)",
            color: "#00C6FF",
            opacity: inView ? 1 : 0,
            transform: inView ? "translateY(0)" : "translateY(16px)",
            transition: "opacity 0.7s ease-out, transform 0.7s ease-out",
          }}
        >
          <div className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
          Our Vision
        </div>

        {/* Main headline */}
        <div
          style={{
            opacity: inView ? 1 : 0,
            transform: inView ? "translateY(0)" : "translateY(32px)",
            transition:
              "opacity 0.85s ease-out 100ms, transform 0.85s ease-out 100ms",
          }}
        >
          <h2 className="font-display font-black leading-[0.9] tracking-tight mb-4">
            <span
              className="block text-foreground"
              style={{ fontSize: "clamp(3rem, 8vw, 7rem)" }}
            >
              Building the
            </span>
            <span
              className="block text-gradient-primary"
              style={{ fontSize: "clamp(3rem, 8vw, 7rem)" }}
            >
              infrastructure
            </span>
            <span
              className="block text-foreground"
              style={{ fontSize: "clamp(3rem, 8vw, 7rem)" }}
            >
              for pet care.
            </span>
          </h2>
        </div>

        {/* Second line */}
        <div
          style={{
            opacity: inView ? 1 : 0,
            transform: inView ? "translateY(0)" : "translateY(24px)",
            transition:
              "opacity 0.8s ease-out 260ms, transform 0.8s ease-out 260ms",
          }}
          className="mb-14"
        >
          <p
            className="font-display font-bold text-gradient-primary"
            style={{ fontSize: "clamp(1.5rem, 3.5vw, 2.5rem)" }}
          >
            From India to the world.
          </p>
        </div>

        {/* CTA button */}
        <div
          style={{
            opacity: inView ? 1 : 0,
            transform: inView
              ? "translateY(0) scale(1)"
              : "translateY(20px) scale(0.96)",
            transition:
              "opacity 0.75s ease-out 400ms, transform 0.75s ease-out 400ms",
          }}
          className="mb-20"
        >
          <button
            type="button"
            data-ocid="vision.invest_button"
            onClick={() => window.open("mailto:invest@petverz.com", "_blank")}
            className="inline-flex items-center gap-3 px-12 py-5 rounded-full font-display font-bold text-xl transition-all duration-300 hover:scale-105"
            style={{
              background: "linear-gradient(135deg, #00C6FF 0%, #0099dd 100%)",
              color: "#0B0F1A",
              boxShadow:
                "0 0 32px rgba(0,198,255,0.45), 0 0 80px rgba(0,198,255,0.15), 0 8px 32px rgba(0,0,0,0.3)",
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLButtonElement).style.boxShadow =
                "0 0 48px rgba(0,198,255,0.65), 0 0 100px rgba(0,198,255,0.25), 0 8px 32px rgba(0,0,0,0.3)";
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLButtonElement).style.boxShadow =
                "0 0 32px rgba(0,198,255,0.45), 0 0 80px rgba(0,198,255,0.15), 0 8px 32px rgba(0,0,0,0.3)";
            }}
          >
            <span>Invest in Petverz</span>
            <svg
              width="18"
              height="18"
              viewBox="0 0 18 18"
              fill="none"
              aria-hidden="true"
            >
              <path
                d="M3 9H15M10 4l5 5-5 5"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        </div>

        {/* Trust badges */}
        <div
          className="flex flex-col sm:flex-row items-center justify-center gap-12 pt-8"
          style={{
            borderTop: "1px solid rgba(0,198,255,0.1)",
            opacity: inView ? 1 : 0,
            transition: "opacity 0.9s ease-out 600ms",
          }}
        >
          {[
            { label: "Seed Round", value: "Open" },
            { label: "Founders", value: "Ex-Zomato · IIT" },
            { label: "HQ", value: "Bangalore, India" },
          ].map((badge) => (
            <div key={badge.label} className="text-center">
              <div className="font-display font-bold text-xl text-foreground mb-1">
                {badge.value}
              </div>
              <div className="text-xs font-mono text-muted-foreground tracking-widest uppercase">
                {badge.label}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Keyframe definition via style tag */}
      <style>{`
        @keyframes visionPulse {
          from { opacity: var(--star-from, 0.04); }
          to { opacity: var(--star-to, 0.2); }
        }
      `}</style>
    </section>
  );
}
