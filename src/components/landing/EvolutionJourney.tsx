"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useLanguage } from "@/i18n/LanguageContext";

const stages = [
  { key: 1, size: 120, mobileSize: 80, gradient: "from-purple-600/40 to-purple-900/60" },
  { key: 2, size: 150, mobileSize: 100, gradient: "from-purple-500/50 to-teal-700/50" },
  { key: 3, size: 180, mobileSize: 120, gradient: "from-teal-500/50 to-purple-500/50" },
  { key: 4, size: 220, mobileSize: 150, gradient: "from-teal-400/60 to-purple-400/60" },
  { key: 5, size: 260, mobileSize: 180, image: "/images/creature.png" },
];

function ChevronRight() {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="#555"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="hidden md:block"
    >
      <polyline points="9 18 15 12 9 6" />
    </svg>
  );
}

function ChevronDown() {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="#555"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="block md:hidden"
    >
      <polyline points="6 9 12 15 18 9" />
    </svg>
  );
}

export default function EvolutionJourney() {
  const { t } = useLanguage();

  return (
    <section className="bg-[#111111] px-6 py-20 md:px-16">
      <div className="mx-auto max-w-[1440px]">
        {/* Header */}
        <div className="mb-16 text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5 }}
            className="whitespace-pre-line font-playfair text-[32px] font-semibold italic tracking-[0.5px] text-white md:text-[42px]"
          >
            {t("evolutionJourney.title") as string}
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="mx-auto mt-4 max-w-[600px] font-inter text-base leading-[1.6] text-[#777]"
          >
            {t("evolutionJourney.subtitle") as string}
          </motion.p>
        </div>

        {/* Stages — horizontal on desktop, vertical on mobile */}
        <div className="flex flex-col items-center gap-6 md:flex-row md:justify-center md:gap-4 lg:gap-8">
          {stages.map((stage, i) => (
            <div key={stage.key} className="flex flex-col items-center gap-6 md:flex-row md:gap-4 lg:gap-8">
              <motion.div
                initial={{ opacity: 0, y: 40, scale: 0.8 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.5, delay: i * 0.15 }}
                className="flex flex-col items-center gap-3"
              >
                {/* Creature circle — mobile */}
                {stage.image ? (
                  <div
                    className="relative overflow-hidden rounded-full border-2 border-purple-400/30 md:hidden"
                    style={{ width: stage.mobileSize, height: stage.mobileSize }}
                  >
                    <Image src={stage.image} alt="Vispo" fill className="object-cover" />
                  </div>
                ) : (
                  <div
                    className={`rounded-full bg-gradient-to-br ${stage.gradient} border border-white/10 md:hidden`}
                    style={{ width: stage.mobileSize, height: stage.mobileSize }}
                  />
                )}

                {/* Creature circle — desktop */}
                {stage.image ? (
                  <div
                    className="relative hidden overflow-hidden rounded-full border-2 border-purple-400/30 md:block"
                    style={{ width: stage.size, height: stage.size }}
                  >
                    <Image src={stage.image} alt="Vispo" fill className="object-cover" />
                  </div>
                ) : (
                  <div
                    className={`hidden rounded-full bg-gradient-to-br ${stage.gradient} border border-white/10 md:block`}
                    style={{ width: stage.size, height: stage.size }}
                  />
                )}

                {/* Labels */}
                <span className="font-inter text-[11px] font-medium uppercase tracking-[1.5px] text-[#555]">
                  {t(`evolutionJourney.stage${stage.key}Label`) as string}
                </span>
                <span className="font-playfair text-lg font-semibold italic text-white">
                  {t(`evolutionJourney.stage${stage.key}Name`) as string}
                </span>
                <span className="font-inter text-[12px] text-[#555]">
                  {t(`evolutionJourney.stage${stage.key}Section`) as string}
                </span>
              </motion.div>

              {/* Arrow between stages */}
              {i < stages.length - 1 && (
                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true, margin: "-80px" }}
                  transition={{ duration: 0.3, delay: i * 0.15 + 0.1 }}
                  className="flex items-center justify-center"
                >
                  <ChevronRight />
                  <ChevronDown />
                </motion.div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
