"use client";

import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="relative bg-[#05273a] py-24 md:py-32 overflow-hidden">
      {/* Top Divider */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 h-[1px] w-[70%] bg-gradient-to-r from-transparent via-white/20 to-transparent" />

      {/* Subtle Background Atmosphere */}
      <div className="absolute -bottom-40 -right-40 h-[600px] w-[600px] rounded-full bg-[#02a7e8]/10 blur-3xl" />

      <div className="relative z-10 container mx-auto px-6 lg:max-w-screen-xl">
        <div className="grid lg:grid-cols-12 gap-16 items-start">
          {/* ================= BRAND ================= */}
          <div className="lg:col-span-4 space-y-6">
            <Image
              src="/images/logo/ehglogo.svg"
              alt="Equity Health Group"
              width={160}
              height={36}
              className="object-contain"
            />

            <p className="text-white/70 text-sm leading-relaxed max-w-sm">
              Equity Health Group is a premium, integrated healthcare group
              delivering world-class medical services across hospitals,
              diagnostics, vaccines, pharmaceuticals, and dental care — built to
              global standards with measurable impact.
            </p>
          </div>

          {/* ================= ORGANIZATION ================= */}
          <div className="lg:col-span-4 space-y-6">
            <span className="block text-[11px] tracking-[0.32em] uppercase text-white/40">
              Organization
            </span>

            <ul className="space-y-3 text-sm">
              <li>
                <Link
                  href="#about"
                  className="text-white/70 hover:text-white transition"
                >
                  About Equity Health Group
                </Link>
              </li>
              <li>
                <Link
                  href="#platforms"
                  className="text-white/70 hover:text-white transition"
                >
                  Healthcare Platforms
                </Link>
              </li>
              <li>
                <Link
                  href="#esg"
                  className="text-white/70 hover:text-white transition"
                >
                  ESG & Sustainability
                </Link>
              </li>
              <li>
                <Link
                  href="#partnerships"
                  className="text-white/70 hover:text-white transition"
                >
                  Partnerships & Global Expansion
                </Link>
              </li>
            </ul>
          </div>

          {/* ================= GOVERNANCE & CONTACT ================= */}
          <div className="lg:col-span-4 space-y-6">
            <span className="block text-[11px] tracking-[0.32em] uppercase text-white/40">
              Governance & Contact
            </span>

            <p className="text-white/70 text-sm leading-relaxed max-w-sm">
              Equity Health Group operates with robust governance, ethical
              standards, and international healthcare compliance frameworks —
              supporting sustainable health systems and long-term development.
            </p>

            <div className="space-y-3 text-sm">
              <a
  href="mailto:equityclinicsng@gmail.com"
  className="block text-white/70 hover:text-white transition"
>
  Contact Us
</a>

              
            </div>
          </div>
        </div>

        {/* ================= BOTTOM ================= */}
        <div className="mt-20 text-center text-white/40 text-xs tracking-wide">
          © {new Date().getFullYear()} Equity Health Group. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
