"use client";

import { motion } from "framer-motion";
import {
  GitMerge,
  Activity,
  Coins,
  Rocket,
} from "lucide-react";

export default function IntegratedHealthcareAdvantage() {
  return (
    <section className="relative py-28 lg:py-36 overflow-hidden" id="advantage">
      {/* TRANSPARENT GRADIENT BACKGROUND */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#05273a]/90 via-[#05273a]/80 to-[#031c29]" />

      {/* ATMOSPHERIC ELEMENTS */}
      <div className="absolute -top-40 left-1/4 h-[600px] w-[600px] rounded-full bg-[#02a7e8]/10 blur-3xl" />
      <div className="absolute bottom-0 -right-40 h-[700px] w-[700px] rounded-full bg-[#03a8e4]/10 blur-3xl" />

      <div className="relative container mx-auto px-6 lg:max-w-screen-xl">
        {/* HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: "easeOut" }}
          viewport={{ once: true }}
          className="max-w-3xl mb-20"
        >
          <p className="text-[#02a7e8] tracking-[0.35em] uppercase text-xs mb-6">
            Integrated Healthcare Advantage
          </p>

          <h2 className="text-white text-4xl md:text-5xl font-light leading-tight">
            Designed as a System.
            <br />
            <span className="text-white/80">
              Delivering Impact at Every Level.
            </span>
          </h2>

          <p className="mt-8 text-white/70 text-lg leading-relaxed">
            Our vertically integrated healthcare model spans hospitals,
            diagnostics, vaccines, pharmaceuticals, and dental care — enabling
            seamless coordination, system-wide efficiency, and measurable
            outcomes at scale.
          </p>
        </motion.div>

        {/* SYSTEM FLOW */}
        <div className="relative grid lg:grid-cols-3 gap-12 items-stretch">
          {/* CONNECTING LINE (DESKTOP) */}
          <div className="hidden lg:block absolute inset-x-0 top-1/2 h-px bg-gradient-to-r from-transparent via-white/15 to-transparent" />

          {/* CARD 1 */}
          <AdvantageCard
            icon={Activity}
            title="Improved Clinical Outcomes"
            accent="#02a7e8"
            text="Continuity of care across platforms enables better diagnostics, coordinated treatment pathways, and improved patient outcomes."
          />

          {/* CARD 2 */}
          <AdvantageCard
            icon={Coins}
            title="Cost Efficiency at Scale"
            accent="#03a8e4"
            text="Vertical integration reduces duplication, strengthens supply chains, and delivers cost efficiencies across the healthcare value chain."
          />

          {/* CARD 3 */}
          <AdvantageCard
            icon={Rocket}
            title="Rapid Infrastructure Deployment"
            accent="#ffffff"
            text="Integrated capabilities allow faster deployment of healthcare infrastructure, from clinical facilities to life sciences and logistics."
          />
        </div>

        {/* INTEGRATION CORE */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.3, duration: 0.9 }}
          viewport={{ once: true }}
          className="mt-24 flex justify-center"
        >
          <div className="relative flex items-center gap-4 px-10 py-6 rounded-full bg-white/5 backdrop-blur-xl border border-white/15">
            <GitMerge className="text-[#02a7e8]" size={22} />
            <span className="text-white tracking-widest uppercase text-xs">
              One Integrated Healthcare Platform
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

/* ======================================================
   ADVANTAGE CARD
====================================================== */
function AdvantageCard({
  icon: Icon,
  title,
  text,
  accent,
}: {
  icon: any;
  title: string;
  text: string;
  accent: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      viewport={{ once: true }}
      className="relative p-10 rounded-3xl bg-white/5 backdrop-blur-xl border border-white/10"
    >
      {/* SOFT GRADIENT WASH */}
      <div
        className="absolute inset-0 rounded-3xl"
        style={{
          background: `linear-gradient(135deg, ${accent}22, transparent)`,
        }}
      />

      <div className="relative">
        <Icon size={30} style={{ color: accent }} className="mb-6" />
        <h3 className="text-white text-xl font-medium mb-4">
          {title}
        </h3>
        <p className="text-white/70 leading-relaxed">
          {text}
        </p>
      </div>
    </motion.div>
  );
}
