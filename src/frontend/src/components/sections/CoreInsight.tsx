import { useInView } from "../../hooks/useInView";

export default function CoreInsight() {
  const [ref, inView] = useInView<HTMLDivElement>({ threshold: 0.3 });

  return (
    <section
      id="core-insight"
      ref={ref}
      data-ocid="core_insight.section"
      className="relative py-44 flex items-center justify-center overflow-hidden"
      style={{ background: "#0B0F1A" }}
    >
      {/* Large ambient glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 70% 70% at 50% 50%, rgba(0,198,255,0.07) 0%, transparent 65%)",
        }}
      />

      {/* Decorative rings */}
      <div
        className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full pointer-events-none"
        style={{
          border: "1px solid rgba(0,198,255,0.04)",
          opacity: inView ? 1 : 0,
          transition: "opacity 1.5s ease-out 0.2s",
        }}
      />
      <div
        className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full pointer-events-none"
        style={{
          border: "1px solid rgba(0,198,255,0.02)",
          opacity: inView ? 1 : 0,
          transition: "opacity 1.5s ease-out 0.4s",
        }}
      />

      <div
        className="max-w-5xl mx-auto px-6 text-center"
        style={{
          opacity: inView ? 1 : 0,
          transform: inView
            ? "scale(1) translateY(0)"
            : "scale(0.94) translateY(20px)",
          transition: "opacity 1.1s ease-out, transform 1.1s ease-out",
        }}
      >
        {/* Label */}
        <div
          className="inline-block mb-8 px-5 py-2 rounded-full text-xs font-display font-semibold uppercase tracking-[0.3em]"
          style={{
            background: "rgba(0,198,255,0.07)",
            border: "1px solid rgba(0,198,255,0.18)",
            color: "#00C6FF",
          }}
        >
          Core Insight
        </div>

        {/* Main statement */}
        <h2
          className="font-display font-black leading-[1.0] tracking-tight"
          style={{ fontSize: "clamp(2.8rem, 8vw, 6rem)" }}
        >
          <span className="text-foreground">Every pet deserves</span>
          <br />
          <span className="text-gradient-primary">a digital identity.</span>
        </h2>

        {/* Supporting line */}
        <p
          className="mt-8 text-lg text-muted-foreground font-body max-w-xl mx-auto leading-relaxed"
          style={{
            opacity: inView ? 1 : 0,
            transition: "opacity 1.2s ease-out 0.4s",
          }}
        >
          Just like a passport or a bank account, every pet deserves an
          immutable, portable identity that travels with them through life.
        </p>

        {/* Decorative dot row */}
        <div className="mt-10 flex justify-center items-center gap-3">
          {(["sm", "md", "lg", "md", "sm"] as const).map((size, i) => (
            <div
              key={size + String(i)}
              className="rounded-full"
              style={{
                width: size === "lg" ? "36px" : size === "md" ? "10px" : "6px",
                height: size === "lg" ? "6px" : "6px",
                background:
                  size === "lg"
                    ? "linear-gradient(90deg, #00C6FF, #0099CC)"
                    : "rgba(0,198,255,0.2)",
                boxShadow:
                  size === "lg" ? "0 0 14px rgba(0,198,255,0.5)" : "none",
                opacity: inView ? 1 : 0,
                transition: `opacity 0.6s ease-out ${0.5 + i * 0.1}s`,
              }}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
