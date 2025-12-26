"use client";

import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { motion, Variants } from "framer-motion";
import { getImgPath } from "@/utils/pathUtils";

/* -------------------------------------------------------
   EASING — explicitly typed (fixes TS error permanently)
------------------------------------------------------- */
const easeEditorial: [number, number, number, number] = [0.22, 1, 0.36, 1];

/* -------------------------------------------------------
   VARIANTS
------------------------------------------------------- */
const container: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.03,
      delayChildren: 0.4,
    },
  },
};

const charVariant: Variants = {
  hidden: {
    y: 28,
    opacity: 0,
    filter: "blur(6px)",
  },
  visible: {
    y: 0,
    opacity: 1,
    filter: "blur(0px)",
    transition: {
      duration: 0.7,
      ease: easeEditorial,
    },
  },
};

/* -------------------------------------------------------
   TEXT SPLITTER
------------------------------------------------------- */
const splitText = (text: string) =>
  text.split("").map((char, index) => (
    <motion.span
      key={index}
      variants={charVariant}
      className="inline-block"
    >
      {char === " " ? "\u00A0" : char}
    </motion.span>
  ));

export default function Hero() {
  return (
    <section className="relative pt-24 md:pt-44 pb-32 overflow-hidden bg-[#f5f6f8]">

      {/* Grain Overlay */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="silver-grain opacity-[0.35]" />
      </div>

      {/* Light Fades */}
      <div className="absolute -top-64 -left-64 h-[620px] w-[620px] rounded-full bg-white blur-[220px]" />
      <div className="absolute bottom-[-260px] -right-52 h-[520px] w-[520px] rounded-full bg-slate-200 blur-[240px]" />

      <div className="relative z-10 container mx-auto px-6 lg:max-w-screen-xl">
        <div className="grid lg:grid-cols-12 items-center gap-16">

          {/* LEFT — EDITORIAL */}
          <motion.div
            className="col-span-6 space-y-8"
            initial="hidden"
            animate="visible"
            variants={container}
          >
            <motion.span
              variants={charVariant}
              className="inline-block text-[11px] tracking-[0.35em] uppercase text-black/50"
            >
              Current Issue
            </motion.span>

            <h1 className="text-black font-light leading-tight text-4xl md:text-6xl">
              <motion.div variants={container} className="block">
                {splitText("DESIGNED")}
              </motion.div>

              <motion.div
                variants={container}
                className="block font-extralight bg-gradient-to-r from-black via-neutral-600 to-black bg-clip-text text-black"
              >
                {splitText("TO DISAPPEAR")}
              </motion.div>
            </h1>

            <motion.p
              className="text-black/70 text-sm md:text-base max-w-md leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.15, duration: 0.8, ease: easeEditorial }}
            >
              Technology, when designed early, leaves no trace.
            </motion.p>

            <motion.div
              className="pt-2"
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.35, duration: 0.7, ease: easeEditorial }}
            >
              <a
                href="/issues/issue-01"
                className="group inline-flex items-center gap-3 px-8 py-4 border border-black/30 text-black rounded-xl text-xs tracking-[0.25em] uppercase bg-black/5 hover:bg-black/10 transition-all"
              >
                Read the Issue
                <ArrowRight
                  size={16}
                  className="transition-transform group-hover:translate-x-1"
                />
              </a>
            </motion.div>
          </motion.div>

          {/* RIGHT — IMAGE */}
          <motion.div
            className="col-span-6 relative flex justify-center lg:justify-end"
            initial={{ opacity: 0, y: 60, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{
              delay: 0.6,
              duration: 1.2,
              ease: easeEditorial,
            }}
          >
            <div className="relative w-[85%] md:w-[70%] lg:w-[78%] shadow-[0_80px_200px_rgba(0,0,0,0.35)]">
              <Image
                src={getImgPath("/images/issue/DTD.webp")}
                alt="DESIGNED — Issue 01 Cover"
                width={700}
                height={900}
                priority
                className="w-full h-auto object-cover rounded-2xl"
              />

              <div className="absolute inset-0 rounded-2xl border border-black/10 pointer-events-none" />
            </div>
          </motion.div>

        </div>
      </div>

      {/* GLOBAL STYLES */}
      <style jsx global>{`
        .silver-grain {
          position: absolute;
          width: 200%;
          height: 200%;
          background: radial-gradient(rgba(0,0,0,0.08) 1px, transparent 1px);
          background-size: 3px 3px;
          animation: moveGrain 45s linear infinite;
        }

        @keyframes moveGrain {
          0% { transform: translate(0, 0); }
          100% { transform: translate(-15%, -15%); }
        }
      `}</style>

    </section>
  );
}
