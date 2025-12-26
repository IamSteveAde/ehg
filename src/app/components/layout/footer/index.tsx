"use client";

import Link from "next/link";

export default function Footer() {
  return (
    <footer className="relative bg-black py-24 md:py-32 overflow-hidden">

      {/* Top Hairline Divider */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 h-[1px] w-[70%] bg-gradient-to-r from-transparent via-white/20 to-transparent" />

      <div className="relative z-10 container mx-auto px-6 lg:max-w-screen-xl">

        <div className="grid lg:grid-cols-12 gap-16 items-start">

          {/* Left — Identity */}
          <div className="lg:col-span-4 space-y-6">
            <span
              className="block text-sm tracking-[0.35em] uppercase text-white font-light"
              style={{ textShadow: "0 4px 20px rgba(0,0,0,0.35)" }}
            >
              DESIGNED
            </span>

            <p className="text-white/60 text-sm leading-relaxed max-w-sm">
              A magazine exploring experience, excellence, and expertise — where
              sound and technology are designed to disappear.
            </p>
          </div>

          {/* Center — Navigation */}
          <div className="lg:col-span-4 space-y-6">
            <span className="block text-[11px] tracking-[0.3em] uppercase text-white/40">
              Navigation
            </span>

            <ul className="space-y-3 text-sm">
              <li>
                <Link
                  href="/"
                  className="text-white/70 hover:text-white transition"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/issues"
                  className="text-white/70 hover:text-white transition"
                >
                  Issues
                </Link>
              </li>
              <li>
                <Link
                  href="/about-designed"
                  className="text-white/70 hover:text-white transition"
                >
                  About DESIGNED
                </Link>
              </li>
              <li>
                <a
                  href="https://www.ced.africa"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/70 hover:text-white transition"
                >
                  CED Africa
                </a>
              </li>
            </ul>
          </div>

          {/* Right — Publisher */}
          <div className="lg:col-span-4 space-y-6">
            <span className="block text-[11px] tracking-[0.3em] uppercase text-white/40">
              Publisher
            </span>

            <p className="text-white/70 text-sm leading-relaxed max-w-sm">
              DESIGNED is published by CED Africa, a specialist AV consulting and
              distribution group working at the highest level of the built
              environment.
            </p>

            <a
              href="https://www.ced.africa"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block text-[11px] tracking-[0.3em] uppercase text-white/80 border-b border-white/30 pb-1 hover:text-white hover:border-white transition"
            >
              Visit CED Africa
            </a>
          </div>

        </div>

        {/* Bottom Line */}
        <div className="mt-20 text-center text-white/40 text-xs tracking-wide">
          © {new Date().getFullYear()} DESIGNED. All rights reserved.
        </div>

      </div>
    </footer>
  );
}
