import { Metadata } from "next";

// Home sections
import Hero from "./components/home/hero";
import About from "./components/home/about";
import DiscoverProperties from "./components/home/property-option"; // mentor / platform section
import Listing from "./components/home/property-list";
import Testimonials from "./components/home/testimonial";
import History from "./components/home/history";


// Global components


/* -------------------------------------
   METADATA — EQUITY HEALTH GROUP
------------------------------------- */
export const metadata: Metadata = {
  metadataBase: new URL("https://equityhealthgroup.com"),

  title: {
    default: "Equity Health Group",
    template: "%s | Equity Health Group",
  },

  description:
    "Equity Health Group is a premium, integrated healthcare group delivering world-class medical services across hospitals, diagnostics, vaccines, pharmaceuticals, and dental care — built to global standards with measurable impact at scale.",

  keywords: [
    "Equity Health Group",
    "integrated healthcare group",
    "healthcare infrastructure Africa",
    "hospitals and diagnostics",
    "vaccines and pharmaceuticals",
    "healthcare ESG",
    "public health systems",
    "healthcare investment and development",
    "healthcare partnerships",
    "sustainable healthcare delivery",
  ],

  openGraph: {
    title: "Equity Health Group",
    description:
      "Delivering healthcare excellence at global standards — with measurable impact for patients, communities, and health systems.",
    url: "https://equityhealthgroup.com",
    siteName: "Equity Health Group",
    type: "website",
    images: [
      {
        url: "https://equityhealthgroup.com/og/og-cover.jpg",
        width: 1200,
        height: 630,
        alt: "Equity Health Group — Integrated Healthcare at Global Standards",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Equity Health Group",
    description:
      "An integrated healthcare group delivering hospitals, diagnostics, vaccines, pharmaceuticals, and dental care at global standards.",
    images: ["https://equityhealthgroup.com/og/og-cover.jpg"],
  },

  robots: {
    index: true,
    follow: true,
  },

  alternates: {
    canonical: "https://equityhealthgroup.com",
  },
};

/* -------------------------------------
   HOME PAGE
------------------------------------- */
export default function Home() {
  return (
    <main>
      {/* Audio welcome — brief, professional, plays once per visit */}
      

      {/* Core hero & positioning */}
      <Hero />
      <About />

      {/* Platform / WhatsApp / AI section */}
      <DiscoverProperties />

      {/* Workforce scope / industries / roles */}
      <Listing />

      {/* Trust & social proof */}
      <Testimonials />

      {/* Company journey, capability & infrastructure */}
      <History />
      
    </main>
  );
}
