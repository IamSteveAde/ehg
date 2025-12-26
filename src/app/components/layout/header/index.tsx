"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";

export default function Header() {
  const [onDark, setOnDark] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  /* --------------------------------------------------
     Detect dark sections SAFELY
  -------------------------------------------------- */
  useEffect(() => {
    const sections = document.querySelectorAll<HTMLElement>("section[data-dark]");
    if (!sections.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        // IMPORTANT: only true if ANY section is intersecting
        setOnDark(entries.some((entry) => entry.isIntersecting));
      },
      {
        rootMargin: "-80px 0px -70% 0px",
        threshold: 0,
      }
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  /* --------------------------------------------------
     Lock scroll only when menu is open
  -------------------------------------------------- */
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
  }, [menuOpen]);

  return (
    <>
      {/* ================= HEADER ================= */}
      <header
        className={`
          fixed top-0 left-0 w-full z-50
          backdrop-blur-xl
          bg-white
          transition-colors duration-300
          ${onDark ? "text-white" : "text-black"}
        `}
      >
        <div className="container mx-auto px-6 lg:max-w-screen-xl">
          <div className="flex items-center justify-between h-20">

            {/* LOGO */}
            <Link href="/" className="z-50">
              <span
                className="text-sm tracking-[0.35em] uppercase font-light"
                style={{
                  textShadow: onDark
                    ? "0 4px 20px rgba(0,0,0,0.45)"
                    : "0 4px 20px rgba(0,0,0,0.25)",
                }}
              >
                DESIGNED
              </span>
            </Link>

            {/* DESKTOP NAV */}
            <nav className="hidden md:flex items-center gap-10">
              <NavItem onDark={onDark} href="/">Home</NavItem>
              <NavItem onDark={onDark} href="/issues">Issues</NavItem>
              <NavItem onDark={onDark} href="/about-designed">About</NavItem>
              <NavItem onDark={onDark} href="https://www.ced.africa" external>
                CED Africa
              </NavItem>
            </nav>

            {/* MOBILE HAMBURGER */}
            <button
              aria-label="Open menu"
              onClick={() => setMenuOpen(true)}
              className="
                md:hidden z-50
                h-11 w-11
                rounded-full
                flex items-center justify-center
                backdrop-blur-xl
                bg-white/20
                border border-white/30
                shadow-[0_8px_30px_rgba(0,0,0,0.18)]
                transition hover:bg-white/30
              "
            >
              <Menu size={18} />
            </button>

          </div>
        </div>
      </header>

      {/* ================= MOBILE MENU ================= */}
      {menuOpen && (
        <div className="fixed inset-0 z-40 bg-black/90 backdrop-blur-2xl">

          {/* Close */}
          <button
            aria-label="Close menu"
            onClick={() => setMenuOpen(false)}
            className="
              absolute top-6 right-6
              h-11 w-11
              rounded-full
              flex items-center justify-center
              backdrop-blur-xl
              bg-white/10
              border border-white/20
            "
          >
            <X size={18} className="text-white" />
          </button>

          {/* Menu */}
          <nav className="h-full flex flex-col items-center justify-center">

            <MobileNavItem delay={0} href="/" onClick={() => setMenuOpen(false)}>
              Home
            </MobileNavItem>

            <Divider />

            <MobileNavItem delay={1} href="/issues" onClick={() => setMenuOpen(false)}>
              Issues
            </MobileNavItem>

            <Divider />

            <MobileNavItem delay={2} href="/about-designed" onClick={() => setMenuOpen(false)}>
              About
            </MobileNavItem>

            <Divider />

            <MobileNavItem
              delay={3}
              href="https://www.ced.africa"
              external
              onClick={() => setMenuOpen(false)}
            >
              CED Africa
            </MobileNavItem>

          </nav>
        </div>
      )}
    </>
  );
}

/* ======================================================
   DESKTOP NAV ITEM
====================================================== */
function NavItem({
  href,
  children,
  external = false,
  onDark,
}: {
  href: string;
  children: React.ReactNode;
  external?: boolean;
  onDark: boolean;
}) {
  const className = `
    text-[11px] tracking-[0.3em] uppercase
    transition-colors duration-300
    ${onDark ? "text-white/90 hover:text-white" : "text-black/85 hover:text-black"}
  `;

  const style = {
    textShadow: onDark
      ? "0 3px 18px rgba(0,0,0,0.6)"
      : "0 3px 18px rgba(0,0,0,0.25)",
  };

  if (external) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className={className} style={style}>
        {children}
      </a>
    );
  }

  return (
    <Link href={href} className={className} style={style}>
      {children}
    </Link>
  );
}

/* ======================================================
   MOBILE NAV ITEM
====================================================== */
function MobileNavItem({
  href,
  children,
  onClick,
  external = false,
  delay = 0,
}: {
  href: string;
  children: React.ReactNode;
  onClick: () => void;
  external?: boolean;
  delay?: number;
}) {
  return (
    <LinkOrAnchor
      href={href}
      external={external}
      onClick={onClick}
      style={{ animationDelay: `${delay * 90}ms` }}
      className="
        text-white/90
        text-sm
        tracking-[0.35em]
        uppercase
        py-4
        transition hover:opacity-70
      "
    >
      {children}
    </LinkOrAnchor>
  );
}

function LinkOrAnchor({
  href,
  external,
  onClick,
  className,
  style,
  children,
}: any) {
  if (external) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" onClick={onClick} className={className} style={style}>
        {children}
      </a>
    );
  }

  return (
    <Link href={href} onClick={onClick} className={className} style={style}>
      {children}
    </Link>
  );
}

/* ======================================================
   DIVIDER
====================================================== */
function Divider() {
  return (
    <div className="w-32 h-[1px] bg-gradient-to-r from-transparent via-white/20 to-transparent" />
  );
}
