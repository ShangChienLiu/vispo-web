"use client";

import { motion } from "framer-motion";
import { useLanguage } from "@/i18n/LanguageContext";

export default function CompanionShowcase() {
  const { t } = useLanguage();

  const companions = [
    {
      name: t("companions.lumisName") as string,
      type: t("companions.lumisType") as string,
      desc: t("companions.lumisDesc") as string,
      image: "/images/lumis.png",
    },
    {
      name: t("companions.blazekName") as string,
      type: t("companions.blazekType") as string,
      desc: t("companions.blazekDesc") as string,
      image: "/images/blazek.png",
    },
    {
      name: t("companions.nuzzleName") as string,
      type: t("companions.nuzzleType") as string,
      desc: t("companions.nuzzleDesc") as string,
      image: "/images/nuzzle.png",
    },
  ];

  return (
    <section id="companions" className="bg-[#1A1A1A] px-6 py-20 md:px-16">
      <div className="mx-auto max-w-[1440px]">
        <div className="mb-12 border-t border-[#333] pt-6">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5 }}
            className="font-playfair text-[22px] font-semibold italic tracking-[0.5px] text-white"
          >
            {t("companions.title") as string}
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="mt-4 font-inter text-base leading-[1.6] text-[#777]"
          >
            {t("companions.subtitle") as string}
          </motion.p>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {companions.map((c, i) => (
            <motion.div
              key={c.name}
              initial={{ opacity: 0, y: 60, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: i * 0.3 }}
              className="flex flex-col"
            >
              <motion.div
                initial={{ scale: 0.7 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: i * 0.3 }}
                className="relative h-[280px] w-full overflow-hidden"
              >
                <img src={c.image} alt={c.name} className="h-full w-full object-cover" />
              </motion.div>
              <div className="flex flex-col gap-2 pt-6">
                <h3 className="font-playfair text-[22px] font-semibold italic text-white">{c.name}</h3>
                <span className="font-inter text-[13px] font-medium text-[#777]">{c.type}</span>
                <p className="mt-1 font-inter text-sm leading-[1.6] text-[#666]">{c.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
