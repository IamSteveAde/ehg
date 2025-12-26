"use client";

export default function AboutDesigned() {
  return (
    <main className="relative min-h-screen bg-black overflow-hidden">

      {/* Subtle Editorial Divider */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 h-[1px] w-[70%] bg-gradient-to-r from-transparent via-white/20 to-transparent" />

      <div className="relative z-10 container mx-auto px-6 lg:max-w-screen-xl pt-40 pb-36">

        <div className="grid lg:grid-cols-12 gap-20 items-start">

          {/* Left Axis */}
          <div className="lg:col-span-3">
            <span className="block text-[11px] tracking-[0.45em] uppercase text-white/40">
              About
            </span>
          </div>

          {/* Editorial Body */}
          <div className="lg:col-span-7 space-y-20">

            {/* INTRO */}
            <section className="space-y-6">
              <h1 className="text-white font-light text-3xl md:text-5xl leading-tight">
                DESIGNED
              </h1>

              <p className="text-white/70 text-sm md:text-base leading-relaxed max-w-2xl">
                DESIGNED is a luxury editorial platform exploring experience,
                excellence, and expertise — through the lens of sound and
                technology.
              </p>
            </section>

            {/* CORE STATEMENT */}
            <section className="space-y-4">
              <p className="text-white font-light text-2xl md:text-4xl leading-snug">
                Great spaces are not defined by what they show.
              </p>
              <p className="text-white/80 text-base md:text-lg leading-relaxed">
                They are defined by how they feel.
              </p>
            </section>

            {/* MANIFESTO */}
            <section className="space-y-3 text-white/70 text-sm md:text-base leading-relaxed">
              <p>Sound that belongs.</p>
              <p>Technology that disappears.</p>
              <p>Control that feels effortless.</p>
            </section>

            {/* POSITIONING */}
            <section className="space-y-4 text-white/65 text-sm md:text-base leading-relaxed max-w-2xl">
              <p>
                DESIGNED exists to examine the quiet decisions that shape the
                experience of a space long after construction is complete.
              </p>
              <p>
                When AV is considered early, it supports intent. When it is not,
                intent is interrupted.
              </p>
            </section>

            {/* PUBLISHER */}
            <section className="space-y-6 pt-8">
              <span className="block text-[11px] tracking-[0.3em] uppercase text-white/40">
                Published by
              </span>

              <p className="text-white/70 text-sm md:text-base leading-relaxed max-w-2xl">
                DESIGNED is published by CED Africa, a specialist AV consulting and
                distribution group working at the highest level of the built
                environment.
              </p>

              <a
                href="https://www.ced.africa"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block text-[11px] tracking-[0.3em] uppercase text-white/80 border-b border-white/30 pb-1 hover:text-white hover:border-white transition"
              >
                Visit CED Africa
              </a>
            </section>

          </div>

        </div>
      </div>
    </main>
  );
}
