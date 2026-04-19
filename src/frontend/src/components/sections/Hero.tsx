import { useEffect, useRef, useState } from "react";
import { useInView } from "../../hooks/useInView";

function QRCodeSVG() {
  return (
    <svg
      width="72"
      height="72"
      viewBox="0 0 80 80"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <rect width="80" height="80" rx="6" fill="rgba(0,198,255,0.06)" />
      {/* Corner TL */}
      <rect
        x="6"
        y="6"
        width="22"
        height="22"
        rx="2"
        fill="none"
        stroke="#00C6FF"
        strokeWidth="2"
      />
      <rect
        x="10"
        y="10"
        width="14"
        height="14"
        rx="1"
        fill="#00C6FF"
        opacity="0.9"
      />
      {/* Corner TR */}
      <rect
        x="52"
        y="6"
        width="22"
        height="22"
        rx="2"
        fill="none"
        stroke="#00C6FF"
        strokeWidth="2"
      />
      <rect
        x="56"
        y="10"
        width="14"
        height="14"
        rx="1"
        fill="#00C6FF"
        opacity="0.9"
      />
      {/* Corner BL */}
      <rect
        x="6"
        y="52"
        width="22"
        height="22"
        rx="2"
        fill="none"
        stroke="#00C6FF"
        strokeWidth="2"
      />
      <rect
        x="10"
        y="56"
        width="14"
        height="14"
        rx="1"
        fill="#00C6FF"
        opacity="0.9"
      />
      {/* Data modules */}
      <rect x="34" y="6" width="6" height="6" fill="#00C6FF" opacity="0.8" />
      <rect x="42" y="6" width="6" height="6" fill="#00C6FF" opacity="0.4" />
      <rect x="34" y="14" width="6" height="6" fill="#00C6FF" opacity="0.7" />
      <rect x="6" y="34" width="6" height="6" fill="#00C6FF" opacity="0.6" />
      <rect x="14" y="34" width="6" height="6" fill="#00C6FF" opacity="0.9" />
      <rect x="6" y="42" width="6" height="6" fill="#00C6FF" opacity="0.4" />
      <rect x="34" y="34" width="6" height="6" fill="#00C6FF" />
      <rect x="42" y="34" width="6" height="6" fill="#00C6FF" opacity="0.5" />
      <rect x="50" y="34" width="6" height="6" fill="#00C6FF" opacity="0.9" />
      <rect x="58" y="34" width="6" height="6" fill="#00C6FF" opacity="0.3" />
      <rect x="66" y="34" width="6" height="6" fill="#00C6FF" opacity="0.7" />
      <rect x="34" y="42" width="6" height="6" fill="#00C6FF" opacity="0.6" />
      <rect x="50" y="42" width="6" height="6" fill="#00C6FF" opacity="0.85" />
      <rect x="66" y="42" width="6" height="6" fill="#00C6FF" opacity="0.4" />
      <rect x="34" y="50" width="6" height="6" fill="#00C6FF" opacity="0.75" />
      <rect x="42" y="50" width="6" height="6" fill="#00C6FF" opacity="0.3" />
      <rect x="58" y="50" width="6" height="6" fill="#00C6FF" />
      <rect x="34" y="58" width="6" height="6" fill="#00C6FF" opacity="0.5" />
      <rect x="50" y="58" width="6" height="6" fill="#00C6FF" opacity="0.7" />
      <rect x="66" y="58" width="6" height="6" fill="#00C6FF" opacity="0.9" />
      <rect x="42" y="66" width="6" height="6" fill="#00C6FF" opacity="0.4" />
      <rect x="58" y="66" width="6" height="6" fill="#00C6FF" opacity="0.8" />
      <rect x="66" y="66" width="6" height="6" fill="#00C6FF" opacity="0.3" />
    </svg>
  );
}

function VerifiedBadge() {
  return (
    <div
      className="absolute -top-3 -right-3 flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-display font-bold uppercase tracking-wider z-10"
      style={{
        background:
          "linear-gradient(135deg, rgba(0,198,255,0.2) 0%, rgba(0,198,255,0.1) 100%)",
        border: "1px solid rgba(0,198,255,0.5)",
        color: "#00C6FF",
        boxShadow: "0 0 16px rgba(0,198,255,0.4), 0 0 32px rgba(0,198,255,0.1)",
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
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
      Verified
    </div>
  );
}

function PetCard() {
  const cardRef = useRef<HTMLDivElement>(null);
  const [tilt, setTilt] = useState({ rotX: 3, rotY: -6 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const el = cardRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const cx = rect.left + rect.width / 2;
    const cy = rect.top + rect.height / 2;
    const dx = (e.clientX - cx) / (rect.width / 2);
    const dy = (e.clientY - cy) / (rect.height / 2);
    setTilt({ rotX: -dy * 10, rotY: dx * 10 });
  };

  const handleMouseLeave = () => setTilt({ rotX: 3, rotY: -6 });

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="relative w-full max-w-sm mx-auto cursor-pointer"
      style={{ perspective: "1200px" }}
      data-ocid="hero.card"
    >
      {/* Background ambient glow */}
      <div
        className="absolute -inset-8 rounded-3xl blur-3xl pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 80% 70%, rgba(0,198,255,0.18) 0%, transparent 70%)",
        }}
      />

      {/* Floating particles */}
      <div className="absolute -top-2 right-8 w-1 h-1 rounded-full bg-primary opacity-60 animate-pulse" />
      <div
        className="absolute top-8 -left-2 w-1.5 h-1.5 rounded-full bg-primary opacity-40 animate-pulse"
        style={{ animationDelay: "0.8s" }}
      />
      <div
        className="absolute -bottom-4 right-16 w-1 h-1 rounded-full bg-primary opacity-50 animate-pulse"
        style={{ animationDelay: "1.4s" }}
      />

      {/* Verified badge */}
      <VerifiedBadge />

      {/* Card itself */}
      <div
        className="relative rounded-2xl overflow-hidden pulse-glow"
        style={{
          background:
            "linear-gradient(145deg, #0D1B2E 0%, #091422 40%, #0B1D35 100%)",
          border: "1px solid rgba(0,198,255,0.3)",
          transform: `rotateY(${tilt.rotY}deg) rotateX(${tilt.rotX}deg)`,
          transition: "transform 0.15s ease-out",
          boxShadow:
            "0 40px 80px rgba(0,0,0,0.6), 0 0 60px rgba(0,198,255,0.1)",
        }}
      >
        {/* Card shimmer overlay */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "linear-gradient(135deg, rgba(0,198,255,0.04) 0%, transparent 50%, rgba(0,198,255,0.02) 100%)",
          }}
        />

        <div className="p-7 relative">
          {/* Card header */}
          <div className="flex items-center justify-between mb-7">
            <div className="flex items-center gap-2.5">
              <div
                className="w-7 h-7 rounded-lg flex items-center justify-center"
                style={{
                  background: "rgba(0,198,255,0.15)",
                  border: "1px solid rgba(0,198,255,0.3)",
                }}
              >
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="none"
                  aria-hidden="true"
                >
                  <path
                    d="M12 14c-3.5 0-6 2.5-6 5.5 0 .8.7 1.5 1.5 1.5h9c.8 0 1.5-.7 1.5-1.5C18 16.5 15.5 14 12 14z"
                    fill="#00C6FF"
                  />
                  <circle cx="7" cy="10" r="2.2" fill="#00C6FF" />
                  <circle cx="17" cy="10" r="2.2" fill="#00C6FF" />
                  <circle cx="4.5" cy="6" r="1.8" fill="#00C6FF" />
                  <circle cx="19.5" cy="6" r="1.8" fill="#00C6FF" />
                </svg>
              </div>
              <span
                className="font-display font-black text-sm tracking-widest uppercase"
                style={{ color: "#00C6FF" }}
              >
                Petverz
              </span>
            </div>
            <div className="flex items-center gap-1.5">
              <div
                className="w-2 h-2 rounded-full animate-pulse"
                style={{ background: "#00C6FF" }}
              />
              <span
                className="text-xs font-mono"
                style={{ color: "rgba(0,198,255,0.5)" }}
              >
                ACTIVE
              </span>
            </div>
          </div>

          {/* Gold chip */}
          <div
            className="absolute top-8 right-28 w-9 h-7 rounded-sm opacity-60"
            style={{
              background:
                "linear-gradient(135deg, #C9A84C 0%, #E8C96A 40%, #C9A84C 100%)",
            }}
          />

          {/* Pet identity */}
          <div className="mb-7">
            <div className="text-xs text-muted-foreground font-body uppercase tracking-widest mb-1.5 opacity-60">
              Pet Identity
            </div>
            <div className="font-display font-black text-3xl text-foreground tracking-tight">
              MOCHI
            </div>
            <div
              className="text-sm font-body mt-1"
              style={{ color: "rgba(255,255,255,0.45)" }}
            >
              Shiba Inu · 2 yrs · Mumbai, India
            </div>
          </div>

          {/* Footer row */}
          <div className="flex items-end justify-between">
            <div>
              <div className="text-xs font-body uppercase tracking-widest opacity-50 text-muted-foreground mb-1">
                Digital Wallet
              </div>
              <div
                className="font-display font-bold text-lg"
                style={{ color: "#00C6FF" }}
              >
                ₹ 8,250
              </div>
            </div>

            {/* QR with glow */}
            <div
              className="p-2 rounded-xl relative"
              style={{
                background: "rgba(0,198,255,0.06)",
                border: "1px solid rgba(0,198,255,0.25)",
                boxShadow: "0 0 20px rgba(0,198,255,0.2)",
              }}
            >
              <QRCodeSVG />
              {/* QR glow ring */}
              <div
                className="absolute inset-0 rounded-xl pulse-glow pointer-events-none"
                style={{ border: "1px solid rgba(0,198,255,0.15)" }}
              />
            </div>
          </div>

          {/* Card footer */}
          <div
            className="mt-5 pt-4"
            style={{ borderTop: "1px solid rgba(0,198,255,0.1)" }}
          >
            <div className="flex items-center justify-between">
              <div
                className="text-xs font-mono"
                style={{ color: "rgba(0,198,255,0.35)" }}
              >
                #PVZ-2024-001
              </div>
              <div
                className="text-xs font-display font-semibold"
                style={{ color: "rgba(0,198,255,0.4)" }}
              >
                Premium Card
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Hero() {
  const [ref, inView] = useInView<HTMLDivElement>({ threshold: 0.05 });
  const [textVisible, setTextVisible] = useState(false);
  const [cardVisible, setCardVisible] = useState(false);

  useEffect(() => {
    if (inView) {
      const t1 = setTimeout(() => setTextVisible(true), 100);
      const t2 = setTimeout(() => setCardVisible(true), 350);
      return () => {
        clearTimeout(t1);
        clearTimeout(t2);
      };
    }
  }, [inView]);

  const handleCTA = () => {
    document.querySelector("#solution")?.scrollIntoView({ behavior: "smooth" });
  };

  const handleInvest = () => {
    document.querySelector("#vision")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="hero"
      ref={ref}
      data-ocid="hero.section"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Layered background glows */}
      <div className="absolute inset-0 bg-gradient-hero pointer-events-none" />
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[500px] rounded-full blur-[160px] opacity-[0.07] pointer-events-none"
        style={{ background: "#00C6FF" }}
      />
      <div
        className="absolute top-1/3 right-0 w-[400px] h-[400px] rounded-full blur-[120px] opacity-[0.04] pointer-events-none"
        style={{ background: "#00C6FF" }}
      />

      {/* Subtle grid texture */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.025]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(0,198,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(0,198,255,0.5) 1px, transparent 1px)",
          backgroundSize: "80px 80px",
        }}
      />

      <div className="max-w-7xl mx-auto px-6 pt-28 pb-20 grid lg:grid-cols-2 gap-16 items-center w-full">
        {/* Left: Copy */}
        <div
          className="space-y-8"
          style={{
            opacity: textVisible ? 1 : 0,
            transform: textVisible ? "translateY(0)" : "translateY(24px)",
            transition: "opacity 0.9s ease-out, transform 0.9s ease-out",
          }}
        >
          {/* Label pill */}
          <div
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-display font-semibold uppercase tracking-[0.2em]"
            style={{
              background: "rgba(0,198,255,0.08)",
              border: "1px solid rgba(0,198,255,0.2)",
              color: "#00C6FF",
            }}
          >
            <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
            Infrastructure for pet care
          </div>

          <h1
            className="font-display font-black leading-[0.92] tracking-tight text-foreground"
            style={{ fontSize: "clamp(3rem, 7vw, 5.5rem)" }}
          >
            Pets don&apos;t have
            <br />
            <span className="text-gradient-primary">an identity.</span>
          </h1>

          <p className="text-xl text-muted-foreground font-body max-w-md leading-relaxed">
            Petverz creates a digital identity, wallet, and care ecosystem for
            every pet — starting in India.
          </p>

          <div className="flex flex-wrap items-center gap-4">
            <button
              type="button"
              onClick={handleCTA}
              data-ocid="hero.primary_button"
              className="px-8 py-4 rounded-full font-display font-bold text-base transition-all duration-300 hover:scale-105"
              style={{
                background: "linear-gradient(135deg, #00C6FF 0%, #0099CC 100%)",
                color: "#0B0F1A",
                boxShadow:
                  "0 0 24px rgba(0,198,255,0.4), 0 8px 24px rgba(0,0,0,0.3)",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLButtonElement).style.boxShadow =
                  "0 0 40px rgba(0,198,255,0.6), 0 8px 32px rgba(0,0,0,0.4)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLButtonElement).style.boxShadow =
                  "0 0 24px rgba(0,198,255,0.4), 0 8px 24px rgba(0,0,0,0.3)";
              }}
            >
              Join the future of pet care
            </button>
            <button
              type="button"
              onClick={handleInvest}
              data-ocid="hero.secondary_button"
              className="px-8 py-4 rounded-full font-display font-semibold text-base text-foreground border border-border hover:border-primary/50 transition-all duration-300 hover:text-primary"
            >
              Invest Now →
            </button>
          </div>

          {/* Stats */}
          <div className="flex items-center gap-8 pt-6 border-t border-border/50">
            {[
              { v: "₹20K Cr", l: "Market Size" },
              { v: "500M+", l: "Pet Owners by 2030" },
              { v: "0", l: "Dominant Players" },
            ].map((s) => (
              <div key={s.l}>
                <div
                  className="font-display font-black text-2xl"
                  style={{ color: "#00C6FF" }}
                >
                  {s.v}
                </div>
                <div className="text-xs text-muted-foreground font-body mt-0.5">
                  {s.l}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right: Card */}
        <div
          style={{
            opacity: cardVisible ? 1 : 0,
            transform: cardVisible
              ? "translateX(0) scale(1)"
              : "translateX(40px) scale(0.96)",
            transition: "opacity 1s ease-out, transform 1s ease-out",
          }}
        >
          <PetCard />
        </div>
      </div>

      {/* Scroll indicator */}
      <div
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce"
        style={{ opacity: 0.45 }}
      >
        <span className="text-[10px] font-body tracking-[0.3em] uppercase text-muted-foreground">
          Scroll
        </span>
        <svg
          width="14"
          height="20"
          viewBox="0 0 14 20"
          fill="none"
          aria-hidden="true"
        >
          <rect
            x="1"
            y="1"
            width="12"
            height="18"
            rx="6"
            stroke="rgba(0,198,255,0.4)"
            strokeWidth="1.5"
          />
          <rect
            x="6"
            y="4"
            width="2"
            height="5"
            rx="1"
            fill="#00C6FF"
            className="animate-pulse"
          />
        </svg>
      </div>
    </section>
  );
}
