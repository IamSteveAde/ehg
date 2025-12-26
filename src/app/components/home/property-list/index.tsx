"use client";

import { motion, Variants } from "framer-motion";

/* -------------------------------------------------------
   EASING (typed — safe for TS)
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
      delayChildren: 0.2,
    },
  },
};

const charVariant: Variants = {
  hidden: {
    y: 22,
    opacity: 0,
    filter: "blur(6px)",
  },
  visible: {
    y: 0,
    opacity: 1,
    filter: "blur(0px)",
    transition: {
      duration: 0.65,
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

export default function PublishedByCED() {
  return (
    <section className="relative py-32 md:py-40 bg-black overflow-hidden">

      {/* Subtle Horizontal Divider */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 h-[1px] w-[70%] bg-gradient-to-r from-transparent via-white/20 to-transparent" />

      <div className="relative z-10 container mx-auto px-6 lg:max-w-screen-xl">
        <div className="grid lg:grid-cols-12 gap-16 items-start">

          {/* LEFT AXIS LABEL */}
          <motion.div
            className="lg:col-span-3"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-120px" }}
            variants={container}
          >
            <span className="block text-[11px] tracking-[0.45em] uppercase text-white/40">
              {splitText("Published by")}
            </span>
          </motion.div>

          {/* EDITORIAL BODY */}
          <motion.div
            className="lg:col-span-7 space-y-10"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-120px" }}
            variants={container}
          >
            {/* TITLE */}
            <h3 className="text-white font-light text-2xl md:text-4xl leading-snug">
              <motion.span variants={container}>
                {splitText("CED Africa")}
              </motion.span>
            </h3>

            {/* DESCRIPTION */}
            <motion.p
              className="text-white/70 text-sm md:text-base leading-relaxed max-w-3xl"
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.7, ease: easeEditorial }}
              viewport={{ once: true }}
            >
              CED Africa is a specialist AV consulting and distribution group working at
              the highest level of the built environment.
            </motion.p>

            <motion.p
              className="text-white/60 text-sm md:text-base leading-relaxed max-w-3xl"
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.85, duration: 0.7, ease: easeEditorial }}
              viewport={{ once: true }}
            >
              Their work focuses on early-stage thinking, technical precision, and
              long-term performance — ensuring sound and technology are designed,
              not added.
            </motion.p>

            {/* CTA */}
            <motion.div
              className="pt-4"
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.1, duration: 0.6, ease: easeEditorial }}
              viewport={{ once: true }}
            >
              <a
                href="https://www.ced.africa"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block text-[11px] tracking-[0.3em] uppercase text-white/80 border-b border-white/30 pb-1 hover:text-white hover:border-white transition"
              >
                Visit CED Africa
              </a>
            </motion.div>

          </motion.div>
        </div>
      </div>
    </section>
  );
}
