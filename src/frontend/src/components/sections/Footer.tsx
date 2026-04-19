function PawLogo() {
  return (
    <svg
      width="22"
      height="22"
      viewBox="0 0 24 24"
      fill="none"
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

function XIcon() {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.746l7.73-8.835L1.254 2.25H8.08l4.253 5.622 5.912-5.622zm-1.161 17.52h1.833L7.084 4.126H5.117L17.083 19.77z"
        fill="currentColor"
      />
    </svg>
  );
}

function LinkedInIcon() {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
      <circle
        cx="4"
        cy="4"
        r="2"
        stroke="currentColor"
        strokeWidth="1.6"
        fill="none"
      />
    </svg>
  );
}

const NAV_LINKS = [
  { label: "About", href: "#why-petverz" },
  { label: "Product", href: "#product-demo" },
  { label: "Investors", href: "#vision" },
  { label: "Press", href: "mailto:press@petverz.com" },
];

export default function Footer() {
  const year = new Date().getFullYear();
  const hostname =
    typeof window !== "undefined"
      ? encodeURIComponent(window.location.hostname)
      : "petverz";

  const handleAnchor = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string,
  ) => {
    if (href.startsWith("#")) {
      e.preventDefault();
      document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer
      data-ocid="footer.section"
      className="relative"
      style={{
        background: "#0B0F1A",
        borderTop: "1px solid rgba(0,198,255,0.18)",
        boxShadow: "0 -1px 40px rgba(0,198,255,0.06)",
      }}
    >
      <div className="max-w-6xl mx-auto px-6 py-14">
        {/* Main row */}
        <div className="flex flex-col md:flex-row items-start justify-between gap-10 mb-10">
          {/* Left — brand + tagline */}
          <div className="flex flex-col gap-3 md:max-w-xs">
            <div className="flex items-center gap-2.5">
              <span style={{ color: "#00C6FF" }}>
                <PawLogo />
              </span>
              <span className="font-display font-bold text-xl text-foreground">
                Petverz
              </span>
            </div>
            <p className="text-sm text-muted-foreground font-body leading-relaxed">
              Pet identity infrastructure for the world.
            </p>
          </div>

          {/* Center — nav links */}
          <nav aria-label="Footer navigation">
            <ul className="flex flex-wrap gap-x-8 gap-y-3">
              {NAV_LINKS.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    onClick={(e) => handleAnchor(e, link.href)}
                    data-ocid={`footer.${link.label.toLowerCase()}_link`}
                    className="text-sm text-muted-foreground hover:text-foreground font-body transition-colors duration-200"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Right — social icons */}
          <div className="flex items-center gap-4">
            <a
              href="https://x.com/petverz"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Petverz on X (Twitter)"
              data-ocid="footer.twitter_link"
              className="flex items-center justify-center w-9 h-9 rounded-full transition-all duration-200 text-muted-foreground hover:text-foreground"
              style={{
                border: "1px solid rgba(0,198,255,0.15)",
                background: "rgba(0,198,255,0.04)",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLAnchorElement).style.boxShadow =
                  "0 0 12px rgba(0,198,255,0.35)";
                (e.currentTarget as HTMLAnchorElement).style.borderColor =
                  "rgba(0,198,255,0.45)";
                (e.currentTarget as HTMLAnchorElement).style.color = "#00C6FF";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLAnchorElement).style.boxShadow = "none";
                (e.currentTarget as HTMLAnchorElement).style.borderColor =
                  "rgba(0,198,255,0.15)";
                (e.currentTarget as HTMLAnchorElement).style.color = "";
              }}
            >
              <XIcon />
            </a>
            <a
              href="https://linkedin.com/company/petverz"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Petverz on LinkedIn"
              data-ocid="footer.linkedin_link"
              className="flex items-center justify-center w-9 h-9 rounded-full transition-all duration-200 text-muted-foreground hover:text-foreground"
              style={{
                border: "1px solid rgba(0,198,255,0.15)",
                background: "rgba(0,198,255,0.04)",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLAnchorElement).style.boxShadow =
                  "0 0 12px rgba(0,198,255,0.35)";
                (e.currentTarget as HTMLAnchorElement).style.borderColor =
                  "rgba(0,198,255,0.45)";
                (e.currentTarget as HTMLAnchorElement).style.color = "#00C6FF";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLAnchorElement).style.boxShadow = "none";
                (e.currentTarget as HTMLAnchorElement).style.borderColor =
                  "rgba(0,198,255,0.15)";
                (e.currentTarget as HTMLAnchorElement).style.color = "";
              }}
            >
              <LinkedInIcon />
            </a>
          </div>
        </div>

        {/* Divider */}
        <div
          className="w-full h-px mb-8"
          style={{
            background:
              "linear-gradient(90deg, transparent, rgba(0,198,255,0.12), transparent)",
          }}
          aria-hidden="true"
        />

        {/* Bottom row */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs text-muted-foreground font-body">
            © {year} Petverz Technologies Pvt. Ltd. All rights reserved.
          </p>
          <p className="text-xs text-muted-foreground font-body">
            Built with love using{" "}
            <a
              href={`https://caffeine.ai?utm_source=caffeine-footer&utm_medium=referral&utm_content=${hostname}`}
              target="_blank"
              rel="noopener noreferrer"
              className="transition-colors duration-200 hover:text-foreground"
              data-ocid="footer.caffeine_link"
            >
              caffeine.ai
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
