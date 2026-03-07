'use client';
import { motion, useScroll, useTransform } from 'motion/react';
import { useEffect, useState } from 'react';

import { portfolioContent } from '@/data/content';

export default function Hero() {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 1000], [0, 300]);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({
        x: (e.clientX / window.innerWidth - 0.5) * 30,
        y: (e.clientY / window.innerHeight - 0.5) * 30,
      });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const title = portfolioContent.hero.title;
  const letters = Array.from(title);

  const container = {
    hidden: { opacity: 0 },
    visible: (i = 1) => ({
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.2 * i },
    }),
  };

  const child = {
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: { type: 'spring' as const, damping: 12, stiffness: 100 },
    },
    hidden: {
      opacity: 0,
      scale: 0.8,
      y: 50,
      transition: { type: 'spring' as const, damping: 12, stiffness: 100 },
    },
  };

  return (
    <section className="relative h-screen w-full flex items-center justify-center overflow-hidden bg-dune-bg border-b border-dune-text/10">
      {/* Parallax Background */}
      <motion.div
        className="absolute inset-0 z-0 opacity-30"
        style={{
          x: mousePos.x,
          y: mousePos.y,
          backgroundImage: `url("${portfolioContent.hero.backgroundImage}")`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          scale: 1.05, // Prevent edges from showing during parallax
        }}
      />
      
      {/* Grain overlay */}
      <div className="absolute inset-0 z-0 opacity-20 pointer-events-none mix-blend-overlay" style={{ backgroundImage: 'url("https://www.transparenttextures.com/patterns/stardust.png")' }} />

      <motion.div style={{ y }} className="relative z-10 flex flex-col items-center">
        <motion.div
          className="flex overflow-hidden"
          variants={container}
          initial="hidden"
          animate="visible"
        >
          {letters.map((letter, index) => (
            <motion.span
              variants={child}
              key={index}
              className="font-display text-7xl md:text-[12vw] font-black tracking-[0.1em] text-dune-text uppercase leading-none drop-shadow-2xl"
            >
              {letter === " " ? "\u00A0" : letter}
            </motion.span>
          ))}
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2, duration: 1.5, ease: "easeOut" }}
          className="mt-12 flex items-center gap-6"
        >
          <div className="w-12 md:w-24 h-[1px] bg-dune-spice" />
          <p className="font-body text-xs md:text-sm tracking-[0.4em] uppercase text-dune-sand font-bold">
            {portfolioContent.hero.subtitle}
          </p>
          <div className="w-12 md:w-24 h-[1px] bg-dune-spice" />
        </motion.div>
      </motion.div>
    </section>
  );
}
