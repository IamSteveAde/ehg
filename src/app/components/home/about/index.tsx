"use client";

import { ArrowRight } from "lucide-react";
import { motion, Variants } from "framer-motion";

/* -------------------------------------------------------
   EASING (typed — fixes TS issues)
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
    y: 24,
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

export default function DesignedPhilosophy() {
  return (
    <section className="relative py-32 md:py-40 bg-black overflow-hidden">

      {/* Editorial Divider */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 h-[1px] w-[65%] bg-gradient-to-r from-transparent via-white/20 to-transparent" />

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
              {splitText("DESIGNED")}
            </span>
          </motion.div>

          {/* EDITORIAL BODY */}
          <motion.div
            className="lg:col-span-7 space-y-12"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-120px" }}
            variants={container}
          >
            {/* HEADLINE — SINGLE LINE */}
            <h2 className="text-white font-light leading-tight text-3xl md:text-5xl whitespace-nowrap">
              <motion.div variants={container}>
                {splitText("Experience. Excellence. Expertise.")}
              </motion.div>
            </h2>

            {/* INTRO COPY */}
            <motion.p
              className="text-white/70 text-sm md:text-base leading-relaxed max-w-2xl"
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.7, ease: easeEditorial }}
              viewport={{ once: true }}
            >
              A luxury magazine dedicated to how sound and technology shape
              experience — quietly, intentionally, and with restraint.
            </motion.p>

            {/* STATEMENT BLOCK */}
            <motion.div
              className="space-y-2 text-white/85 text-sm md:text-base leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.85, duration: 0.7, ease: easeEditorial }}
              viewport={{ once: true }}
            >
              <p>DESIGNED explores AV as an invisible layer of luxury.</p>
              <p>Not what is seen.</p>
              <p>But what is felt.</p>
            </motion.div>

            {/* CTA */}
            <motion.div
              className="pt-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.1, duration: 0.6, ease: easeEditorial }}
              viewport={{ once: true }}
            >
              <a
                href="/issues"
                className="group inline-flex items-center gap-3 text-[11px] tracking-[0.3em] uppercase text-white/80 border-b border-white/30 pb-1 hover:text-white hover:border-white transition"
              >
                Explore the Issues
                <ArrowRight
                  size={14}
                  className="transition-transform group-hover:translate-x-1"
                />
              </a>
            </motion.div>

          </motion.div>
        </div>
      </div>
    </section>
  );
}
