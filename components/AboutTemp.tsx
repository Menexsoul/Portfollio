"use client";
import { motion } from "motion/react";
import Image from "next/image";
import { portfolioContent } from "@/data/content";

export default function About() {
  const {
    sectionSubtitle,
    title,
    role,
    image,
    imageLog,
    imageLoc,
    bio,
    philosophy,
    legacy,
    contactButton,
  } = portfolioContent.about;

  return (
    <section
      id="about"
      className="py-24 px-6 md:px-12 lg:px-24 bg-dune-bg border-t border-dune-text/10"
    >
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24">
        {/* Left: Image */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="lg:col-span-5 relative h-[60vh] lg:h-auto min-h-[600px] bg-dune-bg border border-dune-text/10"
        >
          <Image
            src={image}
            alt="Portrait"
            fill
            className="object-cover grayscale opacity-80"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-dune-bg via-dune-bg/20 to-transparent" />
          <div className="absolute bottom-6 left-6">
            <p className="font-display text-[10px] font-bold tracking-[0.3em] text-dune-spice uppercase mb-1">
              {imageLog}
            </p>
            <p className="font-body text-[8px] tracking-[0.2em] text-dune-sand/50 uppercase">
              {imageLoc}
            </p>
          </div>
        </motion.div>

        {/* Right: Content */}
        <div className="lg:col-span-7 flex flex-col justify-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          >
            <p className="font-display text-[10px] font-bold tracking-[0.4em] text-dune-spice uppercase mb-6">
              {sectionSubtitle}
            </p>
            <h2 className="font-display text-6xl md:text-8xl lg:text-[140px] font-black uppercase tracking-tighter text-dune-sand leading-[0.85] mb-8 whitespace-pre-line">
              {title}
            </h2>
            <div className="flex items-center gap-6 mb-16">
              <div className="w-16 md:w-24 h-[1px] bg-dune-text/20" />
              <p className="font-display text-[10px] md:text-xs font-bold tracking-[0.4em] text-dune-spice uppercase">
                {role}
              </p>
            </div>
          </motion.div>

          {/* Grid Boxes */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}
            className="flex flex-col"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 border border-dune-text/20">
              {/* Bio */}
              <div className="p-8 border-b md:border-b-0 md:border-r border-dune-text/20">
                <div className="flex justify-between items-center mb-6">
                  <h3 className="font-display text-[10px] font-bold tracking-[0.3em] text-dune-spice uppercase">
                    {bio.title}
                  </h3>
                  <div className="w-3 h-[1px] bg-dune-spice" />
                </div>
                <p className="font-body text-sm text-dune-sand/80 leading-relaxed">
                  {bio.text}
                </p>
              </div>
              {/* Philosophy */}
              <div className="p-8">
                <div className="flex justify-between items-center mb-6">
                  <h3 className="font-display text-[10px] font-bold tracking-[0.3em] text-dune-spice uppercase">
                    {philosophy.title}
                  </h3>
                  <div className="w-0 h-0 border-l-[4px] border-l-transparent border-r-[4px] border-r-transparent border-b-[6px] border-dune-spice" />
                </div>
                <p className="font-body text-sm text-dune-sand/80 leading-relaxed">
                  {philosophy.text}
                </p>
              </div>
            </div>

            {/* Legacy */}
            <div className="p-8 border-b border-l border-r border-dune-text/20">
              <div className="flex justify-between items-center mb-8">
                <h3 className="font-display text-[10px] font-bold tracking-[0.3em] text-dune-spice uppercase">
                  {legacy.title}
                </h3>
                <div className="flex gap-1">
                  <div className="w-1.5 h-1.5 rounded-full border border-dune-spice" />
                  <div className="w-1.5 h-1.5 rounded-full border border-dune-spice" />
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {legacy.items.map((item, idx) => (
                  <div key={idx}>
                    <h4 className="font-display text-[8px] font-bold tracking-[0.2em] text-dune-spice uppercase mb-3">
                      {item.title}
                    </h4>
                    <p className="font-body text-xs text-dune-sand/70 leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="mt-16"
          >
            <button
              onClick={() =>
                document
                  .getElementById("contact")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
              className="border border-dune-spice text-dune-spice px-8 py-4 font-display text-[10px] font-bold tracking-[0.3em] uppercase hover:bg-dune-spice hover:text-dune-bg transition-colors duration-300"
            >
              {contactButton}
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
