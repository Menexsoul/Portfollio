'use client';
import { motion } from 'motion/react';
import Image from 'next/image';

export default function About() {
  return (
    <section className="relative w-full min-h-screen flex flex-col md:flex-row bg-dune-bg border-t border-dune-text/10">
      {/* Left Side: Image/Pattern */}
      <div className="w-full md:w-1/2 h-[50vh] md:h-screen relative border-b md:border-b-0 md:border-r border-dune-text/10 overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1505533054827-1cb0ce0df100?q=80&w=2000&auto=format&fit=crop"
          alt="Bene Gesserit"
          fill
          className="object-cover grayscale opacity-40"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-dune-bg/40 mix-blend-multiply" />
        {/* Brutalist geometric accent */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 border-2 border-dune-spice/30 rotate-45 flex items-center justify-center">
          <div className="w-32 h-32 border border-dune-spice/50 rotate-45" />
        </div>
        
        <div className="absolute bottom-8 left-8 flex items-center gap-4">
          <div className="w-8 h-8 border border-dune-spice flex items-center justify-center">
            <div className="w-2 h-2 bg-dune-spice" />
          </div>
          <span className="font-display text-[10px] font-bold tracking-[0.4em] text-dune-spice uppercase">
            Secteur 04
          </span>
        </div>
      </div>

      {/* Right Side: Text */}
      <div className="w-full md:w-1/2 flex flex-col justify-center p-8 md:p-16 lg:p-24">
        <h2 className="font-display text-xs font-bold tracking-[0.5em] text-dune-spice uppercase mb-16 border-l-2 border-dune-spice pl-4">
          Le Bene Gesserit
        </h2>
        
        <div className="space-y-12 font-body text-base md:text-xl text-dune-sand leading-relaxed text-justify">
          <motion.div
            initial={{ clipPath: 'inset(0 100% 0 0)' }}
            whileInView={{ clipPath: 'inset(0 0% 0 0)' }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1.2, ease: [0.76, 0, 0.24, 1] }}
          >
            <p>
              Nous concevons des systèmes qui transcendent le temps. L'architecture numérique n'est pas qu'une question de pixels, c'est une manipulation de l'espace et de l'attention.
            </p>
          </motion.div>
          
          <motion.div
            initial={{ clipPath: 'inset(0 100% 0 0)' }}
            whileInView={{ clipPath: 'inset(0 0% 0 0)' }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1.2, ease: [0.76, 0, 0.24, 1], delay: 0.2 }}
          >
            <p>
              Chaque ligne de code est une directive stricte. Aucun ornement inutile. La forme suit la fonction avec une brutalité assumée, rappelant les monolithes de Caladan et les étendues arides d'Arrakis.
            </p>
          </motion.div>

          <motion.div
            initial={{ clipPath: 'inset(0 100% 0 0)' }}
            whileInView={{ clipPath: 'inset(0 0% 0 0)' }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1.2, ease: [0.76, 0, 0.24, 1], delay: 0.4 }}
          >
            <p className="font-display font-bold text-dune-text text-2xl md:text-3xl uppercase tracking-tight mt-8">
              La peur tue l'esprit. L'interface doit être maîtrisée.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
