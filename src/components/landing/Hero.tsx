"use client";

import { motion } from "framer-motion";

export default function Hero() {
  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="hero" className="relative bg-[#1A1A1A] px-6 py-20 md:px-16 md:py-20">
      <div className="mx-auto flex max-w-[1440px] flex-col items-center gap-12 lg:flex-row lg:gap-12">
        <div className="flex flex-1 flex-col gap-8">
          <motion.div
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="flex w-fit items-center gap-2 border border-[#333] px-4 py-1.5"
          >
            <span className="h-2 w-2 rounded-full bg-[#22C55E]" />
            <span className="text-[11px] font-semibold tracking-[1px] text-[#999]">
              Global AI Tutoring Platform — Early Access 2026
            </span>
          </motion.div>

          <motion.h1
            initial={{ x: -40, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="font-playfair text-5xl leading-[1.05] font-medium italic tracking-[-2px] text-white md:text-7xl"
          >
            Learn. Grow.
            <br />
            Evolve Together.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="max-w-[520px] font-inter text-lg leading-[1.6] text-[#777]"
          >
            Vispo is a global AI tutoring platform where every student gets a
            personal creature companion. It learns with you, adapts to you, and
            evolves as you master new subjects — across every language and every
            discipline.
          </motion.p>

          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="flex items-center gap-4"
          >
            <button
              onClick={() => scrollTo("waitlist")}
              className="bg-[#FDFCF9] px-8 py-4 text-[13px] font-semibold tracking-[1px] text-[#1A1A1A] transition-colors hover:bg-white"
            >
              JOIN THE WAITLIST
            </button>
            <button
              onClick={() => scrollTo("how-it-works")}
              className="text-[13px] text-[#777] transition-colors hover:text-white"
            >
              Explore the platform ↓
            </button>
          </motion.div>
        </div>

        <motion.div
          initial={{ scale: 0.6, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative h-[360px] w-full max-w-[520px] overflow-hidden lg:h-[480px]"
        >
          <img
            src="/images/hero-creature.png"
            alt="Vispo creature companion"
            className="h-full w-full object-cover"
          />
        </motion.div>
      </div>
    </section>
  );
}
