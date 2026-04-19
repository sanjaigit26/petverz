import { useInView } from "../../hooks/useInView";

const steps = [
  {
    icon: (
      <svg
        width="20"
        height="20"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <rect x="3" y="3" width="7" height="7" />
        <rect x="14" y="3" width="7" height="7" />
        <rect x="3" y="14" width="7" height="7" />
        <rect x="14" y="14" width="7" height="7" />
      </svg>
    ),
    label: "Scan QR",
    desc: "Hold your camera to the Petverz card",
  },
  {
    icon: (
      <svg
        width="20"
        height="20"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <circle cx="12" cy="8" r="4" />
        <path d="M4 20c0-4 3.6-7 8-7s8 3 8 7" />
      </svg>
    ),
    label: "Open pet profile",
    desc: "Full health records, identity & care history",
  },
  {
    icon: (
      <svg
        width="20"
        height="20"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
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
    label: "Access wallet",
    desc: "Manage rewards, payments & pet insurance",
  },
  {
    icon: (
      <svg
        width="20"
        height="20"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2Z" />
        <path d="M9 12l2 2 4-4" />
      </svg>
    ),
    label: "Book or pay",
    desc: "Vets, groomers, boarding — all in one tap",
  },
];

function PhoneQR() {
  return (
    <svg
      width="180"
      height="360"
      viewBox="0 0 180 360"
      fill="none"
      aria-hidden="true"
    >
      <rect
        x="4"
        y="4"
        width="172"
        height="352"
        rx="26"
        fill="#0D1220"
        stroke="#1e2a40"
        strokeWidth="2"
      />
      <rect x="10" y="10" width="160" height="340" rx="22" fill="#0B0F1A" />
      <rect x="65" y="12" width="50" height="8" rx="4" fill="#1a2236" />
      <text x="16" y="40" fill="#4a6080" fontSize="8" fontFamily="monospace">
        9:41
      </text>
      <text x="130" y="40" fill="#4a6080" fontSize="8" fontFamily="monospace">
        ●●●
      </text>
      <text
        x="90"
        y="65"
        fill="#00C6FF"
        fontSize="9"
        fontFamily="sans-serif"
        textAnchor="middle"
        letterSpacing="2"
      >
        QR SCANNER
      </text>
      <rect
        x="35"
        y="80"
        width="110"
        height="110"
        rx="4"
        fill="none"
        stroke="#1e2a40"
        strokeWidth="1"
      />
      <path
        d="M35 100 L35 80 L55 80"
        stroke="#00C6FF"
        strokeWidth="3"
        fill="none"
        strokeLinecap="round"
      />
      <path
        d="M145 100 L145 80 L125 80"
        stroke="#00C6FF"
        strokeWidth="3"
        fill="none"
        strokeLinecap="round"
      />
      <path
        d="M35 170 L35 190 L55 190"
        stroke="#00C6FF"
        strokeWidth="3"
        fill="none"
        strokeLinecap="round"
      />
      <path
        d="M145 170 L145 190 L125 190"
        stroke="#00C6FF"
        strokeWidth="3"
        fill="none"
        strokeLinecap="round"
      />
      <rect x="55" y="100" width="14" height="14" fill="#1a2a3a" />
      <rect x="73" y="100" width="6" height="6" fill="#2a3a4a" />
      <rect x="83" y="100" width="6" height="6" fill="#1a2a3a" />
      <rect x="73" y="110" width="6" height="6" fill="#1a2a3a" />
      <rect x="83" y="108" width="6" height="8" fill="#2a3a4a" />
      <rect x="95" y="100" width="14" height="14" fill="#1a2a3a" />
      <rect x="115" y="100" width="14" height="14" fill="#1a2a3a" />
      <rect x="55" y="118" width="6" height="6" fill="#2a3a4a" />
      <rect x="65" y="118" width="6" height="6" fill="#1a2a3a" />
      <rect x="75" y="120" width="8" height="6" fill="#2a3a4a" />
      <rect x="87" y="118" width="6" height="6" fill="#1a2a3a" />
      <rect x="97" y="118" width="14" height="6" fill="#2a3a4a" />
      <rect x="55" y="128" width="14" height="14" fill="#1a2a3a" />
      <rect x="75" y="130" width="6" height="6" fill="#2a3a4a" />
      <rect x="85" y="128" width="8" height="6" fill="#1a2a3a" />
      <rect x="95" y="128" width="6" height="10" fill="#2a3a4a" />
      <rect x="115" y="128" width="14" height="14" fill="#1a2a3a" />
      <rect x="55" y="148" width="6" height="6" fill="#2a3a4a" />
      <rect x="65" y="150" width="8" height="6" fill="#1a2a3a" />
      <rect x="77" y="148" width="6" height="8" fill="#2a3a4a" />
      <rect x="87" y="148" width="8" height="6" fill="#1a2a3a" />
      <rect x="115" y="148" width="6" height="8" fill="#2a3a4a" />
      <rect x="55" y="160" width="14" height="8" fill="#1a2a3a" />
      <rect x="83" y="160" width="8" height="8" fill="#1a2a3a" />
      <line
        x1="40"
        y1="135"
        x2="140"
        y2="135"
        stroke="#00C6FF"
        strokeWidth="1.5"
        opacity="0.6"
      />
      <rect
        x="55"
        y="205"
        width="70"
        height="18"
        rx="9"
        fill="rgba(0,198,255,0.12)"
      />
      <text
        x="90"
        y="217"
        fill="#00C6FF"
        fontSize="9"
        fontFamily="sans-serif"
        textAnchor="middle"
      >
        Scanning...
      </text>
      <rect x="30" y="310" width="120" height="28" rx="14" fill="#0D1220" />
      <text
        x="90"
        y="328"
        fill="#4a6080"
        fontSize="8"
        fontFamily="sans-serif"
        textAnchor="middle"
      >
        Point at Petverz Card
      </text>
      <rect x="65" y="350" width="50" height="4" rx="2" fill="#1e2a40" />
    </svg>
  );
}

function PhoneProfile() {
  return (
    <svg
      width="180"
      height="360"
      viewBox="0 0 180 360"
      fill="none"
      aria-hidden="true"
    >
      <rect
        x="4"
        y="4"
        width="172"
        height="352"
        rx="26"
        fill="#0D1220"
        stroke="#00C6FF"
        strokeWidth="1.5"
        strokeOpacity="0.4"
      />
      <rect x="10" y="10" width="160" height="340" rx="22" fill="#0B0F1A" />
      <rect x="65" y="12" width="50" height="8" rx="4" fill="#1a2236" />
      <text x="16" y="40" fill="#4a6080" fontSize="8" fontFamily="monospace">
        9:41
      </text>
      <text x="130" y="40" fill="#4a6080" fontSize="8" fontFamily="monospace">
        ●●●
      </text>
      <circle
        cx="90"
        cy="85"
        r="28"
        fill="#0D1220"
        stroke="#00C6FF"
        strokeWidth="1.5"
      />
      <circle cx="90" cy="82" r="16" fill="#c9a876" />
      <ellipse cx="81" cy="78" rx="5" ry="7" fill="#b8956a" />
      <ellipse cx="99" cy="78" rx="5" ry="7" fill="#b8956a" />
      <circle cx="84" cy="80" r="3" fill="#7a5230" />
      <circle cx="96" cy="80" r="3" fill="#7a5230" />
      <ellipse cx="90" cy="88" rx="5" ry="3" fill="#b8956a" />
      <circle cx="88" cy="88" r="1" fill="#7a5230" />
      <circle cx="92" cy="88" r="1" fill="#7a5230" />
      <text
        x="90"
        y="128"
        fill="#ffffff"
        fontSize="14"
        fontFamily="sans-serif"
        textAnchor="middle"
        fontWeight="bold"
      >
        MOCHI 🐕
      </text>
      <text
        x="90"
        y="142"
        fill="#00C6FF"
        fontSize="8"
        fontFamily="sans-serif"
        textAnchor="middle"
      >
        Pet ID: PV-2024-08291
      </text>
      <rect
        x="28"
        y="152"
        width="50"
        height="14"
        rx="7"
        fill="rgba(0,198,255,0.12)"
        stroke="rgba(0,198,255,0.3)"
        strokeWidth="1"
      />
      <text
        x="53"
        y="162"
        fill="#00C6FF"
        fontSize="7"
        fontFamily="sans-serif"
        textAnchor="middle"
      >
        Labrador
      </text>
      <rect
        x="82"
        y="152"
        width="36"
        height="14"
        rx="7"
        fill="rgba(0,198,255,0.08)"
        stroke="rgba(0,198,255,0.2)"
        strokeWidth="1"
      />
      <text
        x="100"
        y="162"
        fill="#7ab8d8"
        fontSize="7"
        fontFamily="sans-serif"
        textAnchor="middle"
      >
        3 yrs
      </text>
      <rect
        x="122"
        y="152"
        width="36"
        height="14"
        rx="7"
        fill="rgba(0,220,130,0.1)"
        stroke="rgba(0,220,130,0.25)"
        strokeWidth="1"
      />
      <text
        x="140"
        y="162"
        fill="#00dc82"
        fontSize="7"
        fontFamily="sans-serif"
        textAnchor="middle"
      >
        Healthy
      </text>
      <rect
        x="16"
        y="175"
        width="148"
        height="38"
        rx="8"
        fill="#0D1220"
        stroke="#1e2a40"
        strokeWidth="1"
      />
      <text x="28" y="190" fill="#6080a0" fontSize="7" fontFamily="sans-serif">
        Last Checkup
      </text>
      <text
        x="28"
        y="204"
        fill="#ffffff"
        fontSize="8"
        fontFamily="sans-serif"
        fontWeight="bold"
      >
        Dr. Priya Sharma — Mar 2024
      </text>
      <text
        x="148"
        y="197"
        fill="#00C6FF"
        fontSize="7"
        fontFamily="sans-serif"
        textAnchor="end"
      >
        ✓ All clear
      </text>
      <rect
        x="16"
        y="218"
        width="148"
        height="38"
        rx="8"
        fill="#0D1220"
        stroke="#1e2a40"
        strokeWidth="1"
      />
      <text x="28" y="233" fill="#6080a0" fontSize="7" fontFamily="sans-serif">
        Vaccinations
      </text>
      <text
        x="28"
        y="247"
        fill="#ffffff"
        fontSize="8"
        fontFamily="sans-serif"
        fontWeight="bold"
      >
        Rabies · DHPP · Bordetella
      </text>
      <text
        x="148"
        y="240"
        fill="#00dc82"
        fontSize="7"
        fontFamily="sans-serif"
        textAnchor="end"
      >
        Up to date
      </text>
      <rect
        x="16"
        y="261"
        width="148"
        height="38"
        rx="8"
        fill="#0D1220"
        stroke="#1e2a40"
        strokeWidth="1"
      />
      <text x="28" y="276" fill="#6080a0" fontSize="7" fontFamily="sans-serif">
        Insurance
      </text>
      <text
        x="28"
        y="290"
        fill="#ffffff"
        fontSize="8"
        fontFamily="sans-serif"
        fontWeight="bold"
      >
        Pawsafe Premium — Active
      </text>
      <text
        x="148"
        y="283"
        fill="#00C6FF"
        fontSize="7"
        fontFamily="sans-serif"
        textAnchor="end"
      >
        ₹500/mo
      </text>
      <rect x="65" y="350" width="50" height="4" rx="2" fill="#1e2a40" />
    </svg>
  );
}

function PhoneWallet() {
  return (
    <svg
      width="180"
      height="360"
      viewBox="0 0 180 360"
      fill="none"
      aria-hidden="true"
    >
      <defs>
        <linearGradient
          id="wg"
          x1="16"
          y1="52"
          x2="164"
          y2="124"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0%" stopColor="#00408a" />
          <stop offset="100%" stopColor="#002a55" />
        </linearGradient>
      </defs>
      <rect
        x="4"
        y="4"
        width="172"
        height="352"
        rx="26"
        fill="#0D1220"
        stroke="#1e2a40"
        strokeWidth="2"
      />
      <rect x="10" y="10" width="160" height="340" rx="22" fill="#0B0F1A" />
      <rect x="65" y="12" width="50" height="8" rx="4" fill="#1a2236" />
      <text x="16" y="40" fill="#4a6080" fontSize="8" fontFamily="monospace">
        9:41
      </text>
      <text x="130" y="40" fill="#4a6080" fontSize="8" fontFamily="monospace">
        ●●●
      </text>
      <rect x="16" y="52" width="148" height="72" rx="12" fill="url(#wg)" />
      <text
        x="28"
        y="72"
        fill="rgba(255,255,255,0.6)"
        fontSize="7"
        fontFamily="sans-serif"
      >
        Pet Wallet Balance
      </text>
      <text
        x="28"
        y="95"
        fill="#00C6FF"
        fontSize="22"
        fontFamily="sans-serif"
        fontWeight="bold"
      >
        ₹4,250
      </text>
      <text
        x="28"
        y="112"
        fill="rgba(255,255,255,0.4)"
        fontSize="7"
        fontFamily="sans-serif"
      >
        Mochi · PVWLT-82910
      </text>
      <text
        x="150"
        y="82"
        fill="rgba(255,255,255,0.2)"
        fontSize="18"
        fontFamily="sans-serif"
        textAnchor="end"
      >
        ⬡
      </text>
      <rect
        x="16"
        y="132"
        width="68"
        height="26"
        rx="8"
        fill="rgba(0,198,255,0.15)"
        stroke="rgba(0,198,255,0.3)"
        strokeWidth="1"
      />
      <text
        x="50"
        y="149"
        fill="#00C6FF"
        fontSize="8"
        fontFamily="sans-serif"
        textAnchor="middle"
      >
        + Add Money
      </text>
      <rect
        x="96"
        y="132"
        width="68"
        height="26"
        rx="8"
        fill="rgba(0,198,255,0.06)"
        stroke="#1e2a40"
        strokeWidth="1"
      />
      <text
        x="130"
        y="149"
        fill="#7ab8d8"
        fontSize="8"
        fontFamily="sans-serif"
        textAnchor="middle"
      >
        Pay Now
      </text>
      <text
        x="16"
        y="175"
        fill="#6080a0"
        fontSize="7"
        fontFamily="sans-serif"
        letterSpacing="1"
      >
        RECENT TRANSACTIONS
      </text>
      {[
        {
          name: "City Vet Clinic",
          date: "12 Apr",
          amount: "-₹850",
          color: "#ff6b6b",
          row: 0,
        },
        {
          name: "PetSmart Grooming",
          date: "08 Apr",
          amount: "-₹400",
          color: "#ff6b6b",
          row: 1,
        },
        {
          name: "Cashback Reward",
          date: "05 Apr",
          amount: "+₹125",
          color: "#00dc82",
          row: 2,
        },
        {
          name: "Dog Food Store",
          date: "02 Apr",
          amount: "-₹680",
          color: "#ff6b6b",
          row: 3,
        },
      ].map((tx) => (
        <g key={tx.name}>
          <circle
            cx="26"
            cy={196 + tx.row * 30}
            r="9"
            fill="#0D1220"
            stroke="#1e2a40"
            strokeWidth="1"
          />
          <text
            x="26"
            y={200 + tx.row * 30}
            fill="#4a6080"
            fontSize="7"
            textAnchor="middle"
            fontFamily="sans-serif"
          >
            {tx.name[0]}
          </text>
          <text
            x="42"
            y={193 + tx.row * 30}
            fill="#c0d0e0"
            fontSize="8"
            fontFamily="sans-serif"
          >
            {tx.name}
          </text>
          <text
            x="42"
            y={204 + tx.row * 30}
            fill="#4a6080"
            fontSize="7"
            fontFamily="sans-serif"
          >
            {tx.date}
          </text>
          <text
            x="158"
            y={200 + tx.row * 30}
            fill={tx.color}
            fontSize="8"
            fontFamily="sans-serif"
            textAnchor="end"
            fontWeight="bold"
          >
            {tx.amount}
          </text>
        </g>
      ))}
      <rect x="65" y="350" width="50" height="4" rx="2" fill="#1e2a40" />
    </svg>
  );
}

export default function ProductDemo() {
  const [sectionRef, inView] = useInView<HTMLDivElement>({ threshold: 0.1 });

  return (
    <section
      id="product-demo"
      ref={sectionRef}
      className="relative py-28 overflow-hidden"
      style={{
        background:
          "linear-gradient(180deg, #0B0F1A 0%, #0d1224 50%, #0B0F1A 100%)",
      }}
      data-ocid="product_demo.section"
    >
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 60% 40% at 50% 50%, rgba(0,198,255,0.05) 0%, transparent 70%)",
        }}
        aria-hidden="true"
      />

      <div className="relative mx-auto max-w-6xl px-6 lg:px-10">
        {/* Heading */}
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
            Product Flow
          </span>
          <h2
            className="font-display font-black text-foreground"
            style={{ fontSize: "clamp(2.5rem, 5vw, 4rem)", lineHeight: 1.05 }}
          >
            Scan.{" "}
            <span
              style={{
                background: "linear-gradient(135deg, #00C6FF 0%, #0080cc 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              Pay.
            </span>{" "}
            Care.
          </h2>
          <p className="mt-4 text-muted-foreground font-body text-lg max-w-md mx-auto">
            One card. One scan. Complete pet care at your fingertips.
          </p>
        </div>

        {/* Main content: timeline left + phones right */}
        <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-20">
          {/* Steps timeline */}
          <div
            className="flex-1 flex flex-col gap-0 min-w-0 max-w-sm w-full"
            data-ocid="product_demo.steps.list"
          >
            {steps.map((step, i) => (
              <div
                key={step.label}
                className="flex items-start gap-5 relative"
                style={{
                  opacity: inView ? 1 : 0,
                  transform: inView ? "translateX(0)" : "translateX(-30px)",
                  transition: `opacity 0.6s ease ${0.2 + i * 0.15}s, transform 0.6s ease ${0.2 + i * 0.15}s`,
                }}
                data-ocid={`product_demo.step.${i + 1}`}
              >
                {i < steps.length - 1 && (
                  <div
                    className="absolute left-[19px] top-[44px] w-[2px]"
                    style={{
                      height: "72px",
                      background:
                        "linear-gradient(180deg, rgba(0,198,255,0.5) 0%, rgba(0,198,255,0.1) 100%)",
                    }}
                    aria-hidden="true"
                  />
                )}
                <div
                  className="flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center font-display font-bold text-sm relative z-10"
                  style={{
                    background:
                      "linear-gradient(135deg, rgba(0,198,255,0.2) 0%, rgba(0,128,200,0.1) 100%)",
                    border: "1.5px solid rgba(0,198,255,0.5)",
                    color: "#00C6FF",
                    boxShadow: "0 0 14px rgba(0,198,255,0.2)",
                  }}
                >
                  {i + 1}
                </div>
                <div className="pb-10">
                  <div className="flex items-center gap-2 mb-1">
                    <span style={{ color: "#00C6FF" }}>{step.icon}</span>
                    <span className="font-display font-bold text-foreground text-lg">
                      {step.label}
                    </span>
                  </div>
                  <p className="text-muted-foreground font-body text-sm leading-relaxed">
                    {step.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Phone mockup stack */}
          <div
            className="flex-shrink-0 relative flex items-center justify-center"
            style={{
              opacity: inView ? 1 : 0,
              transform: inView ? "translateY(0)" : "translateY(40px)",
              transition: "opacity 0.8s ease 0.4s, transform 0.8s ease 0.4s",
            }}
            data-ocid="product_demo.phones"
          >
            <div
              className="relative flex items-center justify-center"
              style={{ width: "380px", height: "400px" }}
            >
              {/* Wallet — back right */}
              <div
                className="absolute"
                style={{
                  right: "0px",
                  top: "40px",
                  transform: "rotate(6deg) scale(0.88)",
                  transformOrigin: "bottom center",
                  opacity: 0.7,
                  filter: "drop-shadow(0 20px 40px rgba(0,0,0,0.7))",
                  zIndex: 1,
                }}
              >
                <PhoneWallet />
              </div>
              {/* QR Scan — back left */}
              <div
                className="absolute"
                style={{
                  left: "0px",
                  top: "40px",
                  transform: "rotate(-6deg) scale(0.88)",
                  transformOrigin: "bottom center",
                  opacity: 0.7,
                  filter: "drop-shadow(0 20px 40px rgba(0,0,0,0.7))",
                  zIndex: 1,
                }}
              >
                <PhoneQR />
              </div>
              {/* Profile — front center */}
              <div
                className="absolute"
                style={{
                  left: "50%",
                  top: "0px",
                  transform: "translateX(-50%)",
                  filter:
                    "drop-shadow(0 30px 60px rgba(0,198,255,0.2)) drop-shadow(0 20px 40px rgba(0,0,0,0.8))",
                  zIndex: 2,
                }}
              >
                <PhoneProfile />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
