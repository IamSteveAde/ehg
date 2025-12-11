"use client";

import Image from "next/image";
import { getImgPath } from "@/utils/pathUtils";

export default function Hero() {
  return (
    <section className="relative pt-36 pb-24 overflow-hidden bg-[#0b0e1a] dark:bg-[#050816]">

      {/* Background glow blobs */}
      <div className="pointer-events-none absolute -top-40 -left-32 h-96 w-96 rounded-full bg-primary/20 blur-[120px]" />
      <div className="pointer-events-none absolute bottom-[-150px] -right-10 h-80 w-80 rounded-full bg-sky-400/25 blur-[120px]" />

      <div className="relative z-10 container mx-auto lg:max-w-screen-xl md:max-w-screen-md px-4">
        <div className="grid lg:grid-cols-12 grid-cols-1 items-center gap-10">

          {/* LEFT — TEXT AREA */}
          <div className="col-span-6 flex flex-col justify-center space-y-6" data-aos="fade-right">

            <h1 className="md:text-[36px] text-xl font-bold leading-[1.15] text-white">
              Instant Insurance on Whatsapp,
              <br />
              Powered by AI.
            </h1>

            <p className="text-sm text-slate-300 max-w-md leading-relaxed">
              Get quotes, buy policies, file claims, and chat with your personal AI insurance assistant —
              all inside WhatsApp.
            </p>

            {/* CTA BUTTONS */}
            <div className="flex flex-wrap gap-4 mt-2">
              <button className="px-8 py-4 bg-primary/50 text-white rounded-xl text-sm font-medium hover:bg-primary/10 transition">
                Start on WhatsApp
              </button>

              <button className="px-8 py-4 border border-white/40 text-white rounded-xl text-sm font-medium bg-white/5 hover:bg-white/10 hover:border-primary transition">
                Learn More
              </button>
            </div>

          </div>

          {/* RIGHT — VISUAL AREA */}
          <div className="col-span-6 relative flex justify-center lg:justify-end" data-aos="fade-left">

            {/* WHATSAPP CHAT UI */}
            <Image
              src={getImgPath("/images/hero/heromoby.png")}
              alt="WhatsApp Chat Illustration"
              width={700}
              height={0}
              className="w-[85%] md:w-[70%] lg:w-[75%] object-contain "
            />

            {/* CHUKS AI CHARACTER */}
            <Image
              src={getImgPath("/images/hero/heromobz.png")}
              alt="Chuks AI Mascot"
              width={350}
              height={0}
              className="absolute bottom-[-20px] right-[-20px] w-[45%] md:w-[40%] lg:w-[38%] object-contain drop-shadow-[0_15px_40px_rgba(0,0,0,0.5)]"
            />

          </div>

        </div>
      </div>
    </section>
  );
}
