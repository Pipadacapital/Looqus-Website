import Link from "next/link";
import { NAV_LINKS } from "@/lib/constants";

function LinkedInIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6zM2 9h4v12H2z" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  );
}

function InstagramIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
    </svg>
  );
}

function XIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.746l7.73-8.835L1.254 2.25H8.08l4.253 5.622zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  );
}

function FacebookIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
    </svg>
  );
}

const SOCIAL_LINKS = [
  { icon: LinkedInIcon, label: "LinkedIn", href: "#" },
  { icon: InstagramIcon, label: "Instagram", href: "#" },
  { icon: XIcon, label: "X (Twitter)", href: "#" },
  { icon: FacebookIcon, label: "Facebook", href: "#" },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative bg-ink grain-overlay overflow-hidden">
      {/* Ember accent line at top */}
      <div className="h-[3px] w-full bg-ember" />

      <div className="max-w-content mx-auto px-6 md:px-10 pt-16 pb-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8 pb-12 border-b border-white/10">
          {/* Column 1: Logo + tagline + socials */}
          <div className="relative z-10">
            <Link href="/" className="inline-block mb-4">
              <span className="font-syne font-bold text-2xl text-white">
                Lo<span className="text-ember">o</span>qus
              </span>
            </Link>
            <p className="text-white/50 font-dm-sans text-sm leading-relaxed mb-6 max-w-xs">
              We Make Brands Impossible to Ignore. Performance advertising, creative strategy, and growth marketing.
            </p>
            <div className="flex items-center gap-4">
              {SOCIAL_LINKS.map(({ icon: Icon, label, href }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="w-9 h-9 rounded-full border border-white/20 flex items-center justify-center text-white/50 hover:text-ember hover:border-ember transition-colors duration-200"
                >
                  <Icon />
                </a>
              ))}
            </div>
          </div>

          {/* Column 2: Nav */}
          <div className="relative z-10">
            <p className="label-caps text-white/30 mb-5">Navigation</p>
            <nav className="flex flex-col gap-3">
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-white/60 hover:text-white font-dm-sans text-sm transition-colors duration-200"
                >
                  {link.label}
                </Link>
              ))}
              <Link
                href="/privacy-policy"
                className="text-white/60 hover:text-white font-dm-sans text-sm transition-colors duration-200"
              >
                Privacy Policy
              </Link>
            </nav>
          </div>

          {/* Column 3: Contact */}
          <div className="relative z-10">
            <p className="label-caps text-white/30 mb-5">Get In Touch</p>
            <div className="flex flex-col gap-3">
              <a
                href="mailto:accounts@looqus.com"
                className="text-white/60 hover:text-ember font-dm-sans text-sm transition-colors duration-200"
              >
                accounts@looqus.com
              </a>
              <a
                href="tel:+919987899897"
                className="text-white/60 hover:text-ember font-dm-sans text-sm transition-colors duration-200"
              >
                +91 99878 99897
              </a>
              <p className="text-white/40 font-dm-sans text-sm">
                Padbramha Savitri, Flat No 301, Plot No 49<br />
                Sector No 31A, Vashi, Navi Mumbai<br />
                Thane, Maharashtra 400706
              </p>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="relative z-10 flex flex-col sm:flex-row items-center justify-between gap-4 pt-8">
          <p className="text-white/30 font-dm-sans text-xs">
            &copy; {year} Looqus. All rights reserved.
          </p>
          <Link
            href="/privacy-policy"
            className="text-white/30 hover:text-white font-dm-sans text-xs transition-colors duration-200"
          >
            Privacy Policy
          </Link>
        </div>
      </div>
    </footer>
  );
}
