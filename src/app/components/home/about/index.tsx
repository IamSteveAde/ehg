"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Target, Layers, HeartHandshake } from "lucide-react";

export default function AboutUs() {
  return (
    <section
      id="about"
      className="relative bg-white py-24 lg:py-32 overflow-hidden"
    >
      <div className="container mx-auto px-6 lg:max-w-screen-xl">
        {/* ================= INTRO ================= */}
        <div className="grid lg:grid-cols-12 gap-16 items-start">
          {/* TEXT */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: "easeOut" }}
            viewport={{ once: true }}
            className="lg:col-span-6"
          >
            <p className="text-[#02a7e8] tracking-[0.35em] uppercase text-xs mb-6">
              About Equity Health Group
            </p>

            <h2 className="text-[#05273a] text-4xl md:text-5xl font-light leading-tight">
              Global Standards in Healthcare.
              <br />
              <span className="font-normal">
                Measurable Impact at Scale.
              </span>
            </h2>

            <p className="mt-8 text-[#05273a]/70 text-lg leading-relaxed max-w-xl">
              Equity Health Group is a premium, integrated healthcare group
              committed to delivering world-class medical services across
              hospitals, diagnostics, pharmaceuticals, vaccines, and dental
              care.
            </p>

            <p className="mt-6 text-[#05273a]/70 text-lg leading-relaxed max-w-xl">
              Operating at the intersection of clinical excellence, innovation,
              and access, we build and operate healthcare institutions that meet
              international standards while addressing the real needs of
              emerging and developed markets.
            </p>

            <p className="mt-6 text-[#05273a]/70 text-lg leading-relaxed max-w-xl">
              Our platform is designed for scale, resilience, and impact —
              improving health outcomes for millions while supporting national
              healthcare systems and long-term economic development.
            </p>
          </motion.div>

          {/* IMAGES */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.9, ease: "easeOut" }}
            viewport={{ once: true }}
            className="lg:col-span-6 grid grid-cols-2 gap-6"
          >
            <ImageBlock src="/images/hero/1.jpeg" />
            <ImageBlock src="/images/hero/2.jpeg" offset />
            <ImageBlock src="/images/hero/3.jpeg" />
            <ImageBlock src="/images/hero/4.jpeg" offset />
          </motion.div>
        </div>

        {/* ================= DIVIDER ================= */}
        <div className="my-28 h-px w-full bg-gradient-to-r from-transparent via-[#05273a]/15 to-transparent" />

        {/* ================= VISION / MISSION / VALUES ================= */}
        <div className="relative grid md:grid-cols-3 gap-12">
          {/* Vertical separators (desktop) */}
          <div className="hidden md:block absolute inset-y-0 left-1/3 w-px bg-[#05273a]/10" />
          <div className="hidden md:block absolute inset-y-0 left-2/3 w-px bg-[#05273a]/10" />

          {/* VISION */}
          <ValueBlock
            icon={<Target className="h-7 w-7 text-[#02a7e8]" />}
            title="Vision"
            gradient="from-[#02a7e8]/12"
          >
            To be a globally respected healthcare group, setting benchmarks in
            clinical quality, patient outcomes, and sustainable healthcare
            delivery.
          </ValueBlock>

          {/* MISSION */}
          <ValueBlock
            icon={<Layers className="h-7 w-7 text-[#03a8e4]" />}
            title="Mission"
            gradient="from-[#03a8e4]/12"
          >
            <ul className="space-y-3">
              <li>Deliver consistently exceptional, patient-centered care</li>
              <li>Expand access through integrated infrastructure</li>
              <li>
                Strengthen health systems via technology, capacity building,
                and partnerships
              </li>
              <li>
                Advance public health through preventive care, vaccines, and
                reliable medicines
              </li>
            </ul>
          </ValueBlock>

          {/* VALUES */}
          <ValueBlock
            icon={<HeartHandshake className="h-7 w-7 text-[#05273a]" />}
            title="Values"
            gradient="from-[#05273a]/10"
          >
            <ul className="space-y-3">
              <li>
                <strong>Clinical Excellence:</strong> Global protocols and
                continuous quality improvement
              </li>
              <li>
                <strong>Integrity & Governance:</strong> Ethical practice,
                transparency, and accountability
              </li>
              <li>
                <strong>Innovation:</strong> Technology-enabled, data-driven
                decision-making
              </li>
              <li>
                <strong>Compassion & Dignity:</strong> Respect for every
                patient, every community
              </li>
            </ul>
          </ValueBlock>
        </div>
      </div>
    </section>
  );
}

/* ================= IMAGE BLOCK ================= */
function ImageBlock({
  src,
  offset = false,
}: {
  src: string;
  offset?: boolean;
}) {
  return (
    <div
      className={`relative h-72 rounded-2xl overflow-hidden ${
        offset ? "mt-10" : ""
      }`}
    >
      <Image src={src} alt="" fill className="object-cover" />
    </div>
  );
}

/* ================= VALUE BLOCK ================= */
function ValueBlock({
  icon,
  title,
  gradient,
  children,
}: {
  icon: React.ReactNode;
  title: string;
  gradient: string;
  children: React.ReactNode;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      viewport={{ once: true }}
      className="relative p-10 rounded-2xl overflow-hidden"
    >
      {/* Gradient wash */}
      <div
        className={`absolute inset-0 bg-gradient-to-br ${gradient} via-transparent to-transparent`}
      />

      <div className="relative">
        {icon}
        <h3 className="mt-6 mb-4 text-[#05273a] text-xl font-medium">
          {title}
        </h3>
        <div className="text-[#05273a]/70 leading-relaxed">
          {children}
        </div>
      </div>
    </motion.div>
  );
}
