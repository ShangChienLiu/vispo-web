"use client";

import { motion } from "framer-motion";
import { useLanguage, renderWithBreaks } from "@/i18n/LanguageContext";

export default function Hero() {
  const { t } = useLanguage();

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
              {t("hero.badge") as string}
            </span>
          </motion.div>

          <motion.h1
            initial={{ x: -40, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="font-playfair text-5xl leading-[1.05] font-medium italic tracking-[-2px] text-white md:text-7xl"
          >
            {renderWithBreaks(t("hero.title") as string)}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="max-w-[520px] font-inter text-lg leading-[1.6] text-[#777]"
          >
            {t("hero.description") as string}
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
              {t("hero.joinWaitlist") as string}
            </button>
            <button
              onClick={() => scrollTo("how-it-works")}
              className="text-[13px] text-[#777] transition-colors hover:text-white"
            >
              {t("hero.explore") as string}
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
            src="/icon.png"
            alt="Vispo creature companion"
            className="h-full w-full object-contain"
          />
        </motion.div>
      </div>
    </section>
  );
}
