import { useEffect, useState } from "react";

const NAV_LINKS = [
  { label: "Product", href: "#solution" },
  { label: "Why Now", href: "#why-now" },
  { label: "Market", href: "#market" },
  { label: "Roadmap", href: "#roadmap" },
];

function PawIcon() {
  return (
    <svg
      width="22"
      height="22"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <path
        d="M12 14c-3.5 0-6 2.5-6 5.5 0 .8.7 1.5 1.5 1.5h9c.8 0 1.5-.7 1.5-1.5C18 16.5 15.5 14 12 14z"
        fill="currentColor"
      />
      <circle cx="7" cy="10" r="2.2" fill="currentColor" />
      <circle cx="17" cy="10" r="2.2" fill="currentColor" />
      <circle cx="4.5" cy="6" r="1.8" fill="currentColor" />
      <circle cx="19.5" cy="6" r="1.8" fill="currentColor" />
    </svg>
  );
}

export default function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleNavClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string,
  ) => {
    if (href.startsWith("#")) {
      e.preventDefault();
      const el = document.querySelector(href);
      el?.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <header
      data-ocid="header"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-[#0B0F1A]/80 backdrop-blur-xl border-b border-[oklch(0.71_0.18_223/0.12)]"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <button
          type="button"
          onClick={() =>
            document
              .querySelector("#hero")
              ?.scrollIntoView({ behavior: "smooth" })
          }
          className="flex items-center gap-2 group"
          data-ocid="header.logo_link"
        >
          <span className="text-primary group-hover:drop-shadow-[0_0_8px_oklch(0.71_0.18_223/0.8)] transition-all duration-300">
            <PawIcon />
          </span>
          <span className="font-display font-bold text-xl text-primary tracking-tight">
            Petverz
          </span>
        </button>

        {/* Nav */}
        <nav
          className="hidden md:flex items-center gap-8"
          data-ocid="header.nav"
        >
          {NAV_LINKS.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={(e) => handleNavClick(e, link.href)}
              className="text-sm font-body text-muted-foreground hover:text-foreground transition-colors duration-200"
              data-ocid={`header.nav.${link.label.toLowerCase().replace(/\s+/g, "_")}_link`}
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* CTA */}
        <button
          type="button"
          onClick={(e) => {
            e.preventDefault();
            document
              .querySelector("#vision")
              ?.scrollIntoView({ behavior: "smooth" });
          }}
          data-ocid="header.invest_button"
          className="px-5 py-2 rounded-full text-sm font-display font-semibold bg-primary text-primary-foreground glow-primary-sm hover:glow-primary transition-all duration-300 hover:scale-105"
        >
          Invest Now
        </button>
      </div>
    </header>
  );
}
