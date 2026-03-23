"use client";
import { motion } from "motion/react";
import Image from "next/image";

import { portfolioContent } from "@/data/content";

export default function Projects() {
  const { sectionTitle, sectionDescription, items } = portfolioContent.projects;

  return (
    <section className="py-32 px-6 md:px-12 lg:px-24 bg-dune-bg border-t border-dune-text/10">
      <div className="mb-32 flex flex-col md:flex-row md:items-end justify-between gap-8">
        <div>
          <h2 className="font-display text-5xl md:text-8xl font-black uppercase tracking-tighter text-dune-text leading-none whitespace-pre-line">
            {sectionTitle.split("\n").map((line, i) => (
              <span key={i}>
                {i === 1 ? (
                  <span className="text-dune-spice">{line}</span>
                ) : (
                  line
                )}
                {i === 0 && <br />}
              </span>
            ))}
          </h2>
        </div>
        <div className="max-w-xs">
          <p className="font-body text-xs tracking-[0.2em] text-dune-sand uppercase leading-relaxed">
            {sectionDescription}
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-8 lg:gap-12">
        {items.map((project, index) => (
          <motion.a
            href={project.link}
            key={project.id}
            initial={{ opacity: 0, y: 150 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{
              type: "spring",
              stiffness: 60,
              damping: 15,
              delay: index * 0.1,
            }}
            className="group relative flex flex-col cursor-pointer"
          >
            <div className="relative w-full aspect-[4/3] overflow-hidden bg-dune-sand/10 border border-dune-text/20">
              <Image
                src={project.image}
                alt={project.title}
                fill
                className="object-contain p-4 grayscale group-hover:grayscale-0 transition-all duration-700 ease-out group-hover:scale-110"
                referrerPolicy="no-referrer"
              />
              {/* Brutalist overlay shadow */}
              <div className="absolute inset-0 bg-gradient-to-t from-dune-bg/80 via-transparent to-transparent opacity-60" />
            </div>
            <div className="mt-6 flex justify-between items-end border-b-2 border-dune-text/20 pb-4 group-hover:border-dune-spice transition-colors duration-300">
              <div>
                <p className="font-body text-[10px] font-bold tracking-[0.3em] text-dune-spice uppercase mb-2">
                  {project.category}
                </p>
                <h3 className="font-display text-2xl md:text-4xl font-bold uppercase tracking-tight text-dune-text">
                  {project.title}
                </h3>
              </div>
              <span className="font-display text-lg font-bold text-dune-text/30 group-hover:text-dune-spice transition-colors duration-300">
                0{index + 1}
              </span>
            </div>
          </motion.a>
        ))}
      </div>
    </section>
  );
}
