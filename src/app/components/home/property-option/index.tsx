"use client";

import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { useState } from "react";
import {
  Hospital,
  Syringe,
  Pill,
  Smile,
  ChevronDown,
} from "lucide-react";

/* ======================================================
   DATA MODEL (CLEAN & SCALABLE)
====================================================== */
const PLATFORMS = [
  {
    title: "Equity Hospitals and Diagnostics Ltd",
    subtitle: "Tertiary Care. Advanced Diagnostics. International Standards.",
    description:
      "Equity Hospitals and Diagnostics Ltd forms the clinical core of Equity Health Group. Our hospitals and diagnostic centers are built to international specifications, delivering comprehensive, multidisciplinary care supported by advanced imaging, laboratories, and digital health systems.",
    image: "/images/hero/3.jpeg",
    accent: "#02a7e8",
    icon: Hospital,
    capabilities: [
      "Multispecialty tertiary and secondary care hospitals",
      "Emergency, trauma, and critical care units",
      "Advanced diagnostics: MRI, CT, digital radiology, molecular labs",
      "Preventive health checks and executive wellness programs",
    ],
    impact: [
      "500,000+ patients served annually across facilities",
      ">95% diagnostic accuracy benchmarks",
      "Reduced average time-to-diagnosis through integrated diagnostics",
    ],
  },
  {
    title: "Equity Vaccines Ltd",
    subtitle: "Strengthening Public Health. Securing the Future.",
    description:
      "Equity Vaccines Ltd improves population health through the manufacturing, procurement, and distribution of high-quality vaccines, partnering with governments and global health organizations.",
    image: "/images/hero/1.jpeg",
    accent: "#03a8e4",
    icon: Syringe,
    capabilities: [
      "Vaccine manufacturing and fill-finish capabilities",
      "National and regional immunization programs",
      "Cold-chain infrastructure and last-mile distribution",
      "Pandemic preparedness and response support",
    ],
    impact: [
      "Millions of vaccine doses supplied annually",
      "Expanded immunization coverage in underserved regions",
      "Resilient cold-chain and logistics systems",
    ],
    reverse: true,
  },
  {
    title: "Equity Pharmaceuticals Ltd",
    subtitle: "Reliable Medicines. Assured Quality. Scalable Supply.",
    description:
      "Equity Pharmaceuticals Ltd ensures consistent access to essential and specialty medicines through high-quality manufacturing, sourcing, and regulated distribution.",
    image: "/images/hero/eh.jpeg",
    accent: "#05273a",
    icon: Pill,
    capabilities: [
      "WHO-GMP aligned pharmaceutical operations",
      "Generic and branded therapeutics",
      "Hospital, retail, and institutional supply chains",
      "Pharmacovigilance and regulatory compliance",
    ],
    impact: [
      "Improved availability of essential medicines",
      "Reduced supply disruptions",
      "Cost efficiencies across healthcare systems",
    ],
  },
  {
    title: "Europe Dental Clinic",
    subtitle: "Advanced Dentistry. Global Expertise. Patient-Centered Care.",
    description:
      "Europe Dental Clinic is the premium dental care arm of Equity Health Group, delivering comprehensive oral healthcare in internationally benchmarked facilities.",
    image: "/images/hero/2.jpeg",
    accent: "#02a7e8",
    icon: Smile,
    capabilities: [
      "Preventive and restorative dentistry",
      "Cosmetic and aesthetic dental treatments",
      "Orthodontics and implantology",
      "Oral and maxillofacial procedures",
    ],
    impact: [
      "Advanced technology-enabled dental care",
      "Internationally trained professionals",
      "Patient-first clinical experience",
    ],
    reverse: true,
  },
];

export default function HealthcarePlatforms() {
  return (
    <section
      id="platforms"
      className="relative bg-[#f7f9fb] py-24 lg:py-32 overflow-hidden"
    >
      {/* BACKGROUND ATMOSPHERE */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-40 -left-40 h-[600px] w-[600px] rounded-full bg-[#02a7e8]/5" />
        <div className="absolute top-1/3 -right-40 h-[500px] w-[500px] rounded-full bg-[#03a8e4]/5" />
        <div className="absolute bottom-0 left-1/4 h-[700px] w-[700px] rounded-full bg-[#05273a]/5" />
      </div>

      <div className="relative container mx-auto px-6 lg:max-w-screen-xl">
        {/* HEADER */}
        <div className="max-w-3xl mb-24">
          <p className="text-[#02a7e8] tracking-[0.35em] uppercase text-xs mb-6">
            Our Healthcare Platforms
          </p>
          <h2 className="text-[#05273a] text-4xl md:text-5xl font-light leading-tight">
            Integrated Healthcare.
            <br />
            <span className="font-normal">
              Designed for Scale, Resilience, and Impact.
            </span>
          </h2>
        </div>

        {/* PLATFORMS */}
        <div className="space-y-32">
          {PLATFORMS.map((p, i) => (
            <PlatformBlock key={i} {...p} />
          ))}
        </div>
      </div>
    </section>
  );
}

/* ======================================================
   PLATFORM BLOCK
====================================================== */
function PlatformBlock({
  title,
  subtitle,
  description,
  image,
  accent,
  icon: Icon,
  capabilities,
  impact,
  reverse,
}: any) {
  const [open, setOpen] = useState<string | null>(null);

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.9, ease: "easeOut" }}
      viewport={{ once: true }}
      className={`grid lg:grid-cols-12 gap-16 items-center`}
    >
      {/* IMAGE */}
      <div
        className={`lg:col-span-5 relative h-[420px] rounded-3xl overflow-hidden ${
          reverse ? "lg:order-2" : ""
        }`}
      >
        <div
          className="absolute inset-0 z-10"
          style={{
            background: `linear-gradient(135deg, ${accent}33, transparent)`,
          }}
        />
        <Image src={image} alt={title} fill className="object-cover" />
      </div>

      {/* CONTENT */}
      <div
        className={`lg:col-span-7 ${reverse ? "lg:order-1" : ""}`}
      >
        <div className="flex items-center gap-4 mb-4">
          <Icon size={26} style={{ color: accent }} />
          <p
            className="uppercase text-xs tracking-widest"
            style={{ color: accent }}
          >
            {subtitle}
          </p>
        </div>

        <h3 className="text-[#05273a] text-3xl md:text-4xl font-light mb-6">
          {title}
        </h3>

        <p className="text-[#05273a]/70 text-lg max-w-2xl">
          {description}
        </p>

        {/* DROPDOWNS */}
        <div className="mt-10 space-y-4 max-w-xl">
          <Dropdown
            label="Capabilities"
            items={capabilities}
            open={open === "cap"}
            onClick={() => setOpen(open === "cap" ? null : "cap")}
            accent={accent}
          />
          <Dropdown
            label="Impact"
            items={impact}
            open={open === "impact"}
            onClick={() => setOpen(open === "impact" ? null : "impact")}
            accent={accent}
          />
        </div>
      </div>
    </motion.div>
  );
}

/* ======================================================
   DROPDOWN
====================================================== */
function Dropdown({
  label,
  items,
  open,
  onClick,
  accent,
}: any) {
  return (
    <div className="border-b border-[#05273a]/10 pb-4">
      <button
        onClick={onClick}
        className="w-full flex items-center justify-between text-left"
      >
        <span
          className="uppercase text-sm tracking-widest"
          style={{ color: accent }}
        >
          {label}
        </span>
        <ChevronDown
          className={`transition ${open ? "rotate-180" : ""}`}
          style={{ color: accent }}
        />
      </button>

      <AnimatePresence>
        {open && (
          <motion.ul
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            className="mt-4 space-y-3 text-[#05273a]/70 overflow-hidden"
          >
            {items.map((item: string, i: number) => (
              <li key={i}>• {item}</li>
            ))}
          </motion.ul>
        )}
      </AnimatePresence>
    </div>
  );
}
