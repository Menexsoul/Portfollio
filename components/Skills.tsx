"use client";
import { motion } from "motion/react";
import Image from "next/image";
import { portfolioContent } from "@/data/content";

export default function Skills() {
  const {
    sectionTitle,
    sectionSubtitle,
    description1,
    description2,
    quote,
    backgroundImage,
    items,
  } = portfolioContent.skills;

  return (
    <section className="relative w-full min-h-screen flex flex-col md:flex-row bg-dune-bg border-t border-dune-text/10">
      {/* Left Side: Image/Pattern & Floating Icons */}
      <div className="w-full md:w-1/2 h-[50vh] md:h-screen relative border-b md:border-b-0 md:border-r border-dune-text/10 overflow-hidden bg-dune-bg">
        {/* Base Desert Image (subtle) */}
        <Image
          src={backgroundImage}
          alt="Skills Background"
          fill
          className="object-cover grayscale opacity-20"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-dune-bg via-dune-bg/60 to-transparent mix-blend-multiply" />

        {/* Floating Technology Icons */}
        {items.map((skill, i) => {
          // Calculs déterministes basés sur l'index pour éviter les erreurs d'hydratation
          const sizeClass = i % 2 === 0 ? "w-16 h-16" : "w-24 h-24";
          const left = 15 + ((i * 27) % 70); // Position X (15% à 85%)
          const top = 10 + ((i * 41) % 80); // Position Y (10% à 90%)
          const duration = 15 + (i % 3) * 5; // Durée de l'animation (15s à 25s)
          const delay = (i % 5) * -2; // Délai négatif pour désynchroniser dès le départ

          return (
            <motion.div
              key={i}
              className="absolute"
              style={{ left: `${left}%`, top: `${top}%` }}
              animate={{
                y: [0, -40, 0],
                x: [0, 20, 0],
                rotate: [0, 15, -15, 0],
              }}
              transition={{
                duration: duration,
                repeat: Infinity,
                ease: "easeInOut",
                delay: delay,
              }}
            >
              <div className={`relative ${sizeClass} opacity-20 grayscale`}>
                {/* @ts-ignore */}
                {skill.image && (
                  <Image
                    // @ts-ignore
                    src={skill.image}
                    alt={skill.name}
                    fill
                    className="object-contain"
                    referrerPolicy="no-referrer"
                  />
                )}
              </div>
            </motion.div>
          );
        })}

        {/* Brutalist geometric accent */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 border-2 border-dune-spice/20 rotate-45 flex items-center justify-center backdrop-blur-sm bg-dune-bg/10">
          <div className="w-32 h-32 border border-dune-spice/40 rotate-45" />
        </div>

        <div className="absolute bottom-8 left-8 flex items-center gap-4 z-10">
          <div className="w-8 h-8 border border-dune-spice flex items-center justify-center bg-dune-bg/50 backdrop-blur-md">
            <div className="w-2 h-2 bg-dune-spice" />
          </div>
          <span className="font-display text-[10px] font-bold tracking-[0.4em] text-dune-spice uppercase">
            {sectionSubtitle}
          </span>
        </div>
      </div>

      {/* Right Side: Text & Skills */}
      <div className="w-full md:w-1/2 flex flex-col justify-center p-8 md:p-16 lg:p-24">
        <h2 className="font-display text-xs font-bold tracking-[0.5em] text-dune-spice uppercase mb-16 border-l-2 border-dune-spice pl-4">
          {sectionTitle}
        </h2>

        <div className="space-y-8 font-body text-base md:text-xl text-dune-sand leading-relaxed text-justify mb-16">
          <motion.div
            initial={{ clipPath: "inset(0 100% 0 0)" }}
            whileInView={{ clipPath: "inset(0 0% 0 0)" }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1.2, ease: [0.76, 0, 0.24, 1] }}
          >
            <p>{description1}</p>
          </motion.div>

          <motion.div
            initial={{ clipPath: "inset(0 100% 0 0)" }}
            whileInView={{ clipPath: "inset(0 0% 0 0)" }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1.2, ease: [0.76, 0, 0.24, 1], delay: 0.2 }}
          >
            <p>{description2}</p>
          </motion.div>

          <motion.div
            initial={{ clipPath: "inset(0 100% 0 0)" }}
            whileInView={{ clipPath: "inset(0 0% 0 0)" }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1.2, ease: [0.76, 0, 0.24, 1], delay: 0.4 }}
          >
            <p className="font-display font-bold text-dune-text text-2xl md:text-3xl uppercase tracking-tight mt-8">
              {quote}
            </p>
          </motion.div>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-4">
          {items.map((skill, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group flex flex-col items-center justify-center p-6 border border-dune-text/10 bg-dune-sand/5 hover:bg-dune-spice/10 hover:border-dune-spice/50 transition-colors duration-300"
            >
              <div className="relative w-12 h-12 mb-4 opacity-50 grayscale group-hover:opacity-100 group-hover:grayscale-0 transition-all duration-500">
                {/* @ts-ignore */}
                {skill.image && (
                  <Image
                    // @ts-ignore
                    src={skill.image}
                    alt={skill.name}
                    fill
                    className="object-contain"
                    referrerPolicy="no-referrer"
                  />
                )}
              </div>
              <h3 className="font-display text-sm font-bold uppercase tracking-widest text-dune-text text-center mb-1">
                {skill.name}
              </h3>
              {/* @ts-ignore - Allow missing level property if user forgets it */}
              {skill.level && (
                <span className="font-body text-[10px] uppercase tracking-widest text-dune-sand/60">
                  {/* @ts-ignore */}
                  {skill.level}
                </span>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
