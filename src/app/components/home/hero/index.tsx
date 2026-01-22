"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Link from "next/link";

const chapters = [
  {
    kicker: "Global Standards",
    title: "Measurable Impact at Scale",
    body:
      "Equity Health Group builds and operates world-class healthcare institutions designed to improve outcomes for millions across emerging and developed markets.",
  },
  {
    kicker: "Integrated Platform",
    title: "Continuity of Care",
    body:
      "Our vertically integrated model spans hospitals, diagnostics, vaccines, pharmaceuticals, and dental care — enabling efficiency, quality, and scale.",
  },
  {
    kicker: "Clinical Excellence",
    title: "Built on International Benchmarks",
    body:
      "From tertiary hospitals to advanced diagnostics, our facilities follow global protocols, modern infrastructure standards, and continuous quality improvement.",
  },
  {
    kicker: "Public Health",
    title: "Vaccines & Essential Medicines",
    body:
      "Through vaccines and pharmaceuticals, we strengthen national health systems, improve access, and support long-term population health resilience.",
  },
  {
    kicker: "Global Partnerships",
    title: "Scaling Healthcare Systems",
    body:
      "We collaborate with governments, insurers, DFIs, and global partners to deploy sustainable healthcare infrastructure at scale.",
  },
];

export default function Hero() {
  const [active, setActive] = useState(0);

  const next = () =>
    setActive((p) => (p + 1) % chapters.length);

  const prev = () =>
    setActive((p) => (p - 1 + chapters.length) % chapters.length);

  /* --------------------------------------------------
     AUTO ROTATION — EVERY 6 SECONDS
  -------------------------------------------------- */
  useEffect(() => {
    const interval = setInterval(() => {
      setActive((prev) => (prev + 1) % chapters.length);
    }, 6000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section
      data-dark
      className="relative h-screen w-full overflow-hidden bg-[#05273a]"
    >
      {/* BACKGROUND IMAGE — FAST, OBVIOUS CINEMATIC MOTION */}
      <motion.div
        className="absolute inset-0 bg-cover bg-center opacity-25"
        style={{ backgroundImage: "url('/images/hero/eh.jpeg')" }}
        animate={{
          scale: [1, 1.22, 1],
          x: [0, -30, 0],
        }}
        transition={{
          duration: 8,
          ease: "easeInOut",
          repeat: Infinity,
        }}
      />

      {/* DARK DEPTH */}
      <div className="absolute inset-0 bg-[#05273a]/90" />

      {/* SUBTLE ACCENT */}
      <div className="absolute inset-0 bg-gradient-to-br from-transparent via-[#02a7e8]/8 to-transparent" />

      {/* CONTENT */}
      <div className="relative z-10 h-full flex items-center">
        <div className="container mx-auto px-6 lg:max-w-screen-xl">
          <div className="grid lg:grid-cols-12 gap-16 items-center">
            {/* LEFT — CHAPTER CONTENT */}
            <div className="lg:col-span-7 space-y-10">
              <AnimatePresence mode="wait">
                <motion.div
                  key={active}
                  initial={{ opacity: 0, y: 40 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -40 }}
                  transition={{ duration: 0.9, ease: "easeOut" }}
                >
                  <p className="text-[#02a7e8] tracking-[0.35em] uppercase text-xs mb-6">
                    {chapters[active].kicker}
                  </p>

                  <h2 className="text-white text-4xl md:text-5xl lg:text-6xl font-light leading-tight max-w-2xl">
                    {chapters[active].title}
                  </h2>

                  <p className="mt-6 max-w-xl text-white/70 text-lg leading-relaxed">
                    {chapters[active].body}
                  </p>
                </motion.div>
              </AnimatePresence>

              {/* CTA */}
              <Link
                href="#about"
                className="group inline-flex items-center gap-6 text-white tracking-[0.35em] uppercase text-xs"
              >
                <span className="relative">
                  Explore Equity Health Group
                  <span className="absolute -bottom-2 left-0 h-px w-0 bg-[#02a7e8] group-hover:w-full transition-all duration-500" />
                </span>
              </Link>
            </div>

            {/* RIGHT — DESKTOP NAV */}
            <div className="hidden lg:flex lg:col-span-5 justify-end">
              <div className="flex flex-col gap-5">
                {chapters.map((c, i) => (
                  <button
                    key={i}
                    onClick={() => setActive(i)}
                    className={`text-left transition ${
                      i === active
                        ? "text-white"
                        : "text-white/40 hover:text-white/70"
                    }`}
                  >
                    <div className="flex items-center gap-4">
                      <div
                        className={`h-[2px] transition-all ${
                          i === active
                            ? "w-10 bg-[#02a7e8]"
                            : "w-4 bg-white/20"
                        }`}
                      />
                      <span className="text-sm tracking-wide">
                        {c.kicker}
                      </span>
                    </div>
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* MOBILE / TABLET CONTROLS */}
          <div className="mt-14 flex lg:hidden items-center justify-between">
            <button
              onClick={prev}
              className="h-11 w-11 border border-white/20 text-white/80 flex items-center justify-center"
            >
              <ChevronLeft size={18} />
            </button>

            <div className="text-white/50 text-xs tracking-widest">
              {active + 1} / {chapters.length}
            </div>

            <button
              onClick={next}
              className="h-11 w-11 border border-white/20 text-white/80 flex items-center justify-center"
            >
              <ChevronRight size={18} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
