"use client";

import { motion } from "framer-motion";
import { Brain, Trophy, BookOpen } from "lucide-react";

const features = [
  {
    icon: Brain,
    title: "Multi-AI Tutoring",
    desc: "Your creature learns your patterns — what confuses you, what clicks, and how fast you move. Powered by GPT, Claude, and Gemini, it adapts in real time.",
  },
  {
    icon: Trophy,
    title: "Creature Evolution",
    desc: "Earn XP, unlock creature evolutions, collect badges, and track streaks. Your creature transforms as you master new subjects. Progress feels tangible.",
  },
  {
    icon: BookOpen,
    title: "Every Subject, Every Language",
    desc: "From calculus to creative writing, chemistry to coding. Vispo covers every subject across every language — one global platform for all learners.",
  },
];

export default function WhyVispo() {
  return (
    <section id="why-vispo" className="px-6 py-20 md:px-16">
      <div className="mx-auto max-w-[1440px]">
        <div className="mb-12 border-t border-[#E5E2DC] pt-6">
          <div className="flex flex-col justify-between gap-2 md:flex-row md:items-end">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5 }}
              className="font-playfair text-[22px] font-semibold italic tracking-[0.5px] text-[#1A1A1A]"
            >
              Why Vispo
            </motion.h2>
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="font-inter text-[13px] text-[#777]"
            >
              A global platform built for how you actually learn
            </motion.p>
          </div>
        </div>

        <div className="grid grid-cols-1 bg-[#E5E2DC] md:grid-cols-3 md:gap-px">
          {features.map((f, i) => (
            <motion.div
              key={f.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              className="flex flex-col gap-4 bg-[#FDFCF9] p-6"
            >
              <f.icon className="h-7 w-7 text-[#1A1A1A]" strokeWidth={1.5} />
              <h3 className="font-inter text-base font-semibold text-[#1A1A1A]">{f.title}</h3>
              <p className="font-inter text-sm leading-[1.6] text-[#777]">{f.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
