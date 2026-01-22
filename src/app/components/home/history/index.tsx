"use client";

import { motion } from "framer-motion";
import {
  Globe,
  Building2,
  Network,
  Cpu,
} from "lucide-react";

export default function PartnershipsGlobalExpansion() {
  return (
    <section className="relative bg-white py-28 lg:py-36 overflow-hidden" id="partnerships">
      {/* ORBIT BACKGROUND */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Large orbit */}
        <div className="absolute -top-40 -left-40 h-[700px] w-[700px] rounded-full border border-[#02a7e8]/20" />
        {/* Medium orbit */}
        <div className="absolute top-1/3 -right-52 h-[500px] w-[500px] rounded-full border border-[#03a8e4]/20" />
        {/* Small orbit */}
        <div className="absolute bottom-0 left-1/4 h-[350px] w-[350px] rounded-full border border-[#05273a]/15" />

        {/* Soft fills */}
        <div className="absolute top-1/4 left-1/3 h-[220px] w-[220px] rounded-full bg-[#02a7e8]/5 blur-2xl" />
        <div className="absolute bottom-1/4 right-1/4 h-[260px] w-[260px] rounded-full bg-[#03a8e4]/5 blur-2xl" />
      </div>

      <div className="relative container mx-auto px-6 lg:max-w-screen-xl">
        {/* HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: "easeOut" }}
          viewport={{ once: true }}
          className="max-w-3xl mb-24"
        >
          <p className="text-[#02a7e8] tracking-[0.35em] uppercase text-xs mb-6">
            Partnerships & Global Expansion
          </p>

          <h2 className="text-[#05273a] text-4xl md:text-5xl font-light leading-tight">
            Building Healthcare Systems.
            <br />
            <span className="text-[#05273a]/70">
              Through Collaboration and Scale.
            </span>
          </h2>

          <p className="mt-8 text-[#05273a]/70 text-lg leading-relaxed">
            Equity Health Group collaborates with governments, insurers,
            development finance institutions, and global healthcare partners to
            develop and operate sustainable healthcare assets that strengthen
            national health systems and expand access to quality care.
          </p>
        </motion.div>

        {/* STRATEGY GRID */}
        <div className="grid md:grid-cols-3 gap-12 items-stretch">
          <StrategyCard
            icon={Building2}
            title="Strategic Acquisitions"
            text="Targeted acquisitions and hospital networks that expand clinical capacity, geographic reach, and system integration."
            accent="#02a7e8"
          />

          <StrategyCard
            icon={Network}
            title="Greenfield Development"
            text="Greenfield hospital and life sciences projects designed to international standards and tailored to local health needs."
            accent="#03a8e4"
          />

          <StrategyCard
            icon={Cpu}
            title="Technology-Enabled Care"
            text="Digital health platforms and technology-enabled healthcare delivery models that improve efficiency and outcomes."
            accent="#05273a"
          />
        </div>

        {/* GLOBAL STATEMENT */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.3, duration: 0.9 }}
          viewport={{ once: true }}
          className="mt-28 flex justify-center"
        >
          <div className="flex items-center gap-4 px-10 py-6 rounded-full border border-[#05273a]/15 bg-white">
            <Globe className="text-[#02a7e8]" size={22} />
            <span className="text-[#05273a] tracking-widest uppercase text-xs">
              Delivering Healthcare Excellence at Global Standards
            </span>
          </div>
        </motion.div>

        {/* CLOSING LINE */}
        <p className="mt-12 text-center text-[#05273a]/60 max-w-3xl mx-auto">
          Equity Health Group delivers healthcare excellence at global standards
          — with measurable impact for patients, communities, and health
          systems.
        </p>
      </div>
    </section>
  );
}

/* ======================================================
   STRATEGY CARD
====================================================== */
function StrategyCard({
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
      className="relative p-10 rounded-3xl border border-[#05273a]/10 bg-white"
    >
      {/* ACCENT GRADIENT */}
      <div
        className="absolute inset-0 rounded-3xl"
        style={{
          background: `linear-gradient(135deg, ${accent}12, transparent)`,
        }}
      />

      <div className="relative">
        <Icon size={28} style={{ color: accent }} className="mb-6" />
        <h3 className="text-[#05273a] text-xl font-medium mb-4">
          {title}
        </h3>
        <p className="text-[#05273a]/70 leading-relaxed">
          {text}
        </p>
      </div>
    </motion.div>
  );
}
