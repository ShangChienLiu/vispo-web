"use client";

import { motion } from "framer-motion";

const steps = [
  {
    num: "01",
    title: "Hatch Your Creature",
    desc: "Pick from a roster of unique AI creatures — each with different learning personalities, strengths, and teaching styles that match how you learn best.",
  },
  {
    num: "02",
    title: "Learn Together",
    desc: "Your creature asks questions, explains concepts, quizzes you, and adapts to your pace. It remembers what you struggle with, detects your mood, and celebrates your wins.",
  },
  {
    num: "03",
    title: "Evolve & Level Up",
    desc: "As you master subjects, your companion evolves — unlocking new forms, abilities, and knowledge. Earn XP, collect badges, and watch your creature transform.",
  },
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="px-6 py-20 md:px-16">
      <div className="mx-auto max-w-[1440px]">
        <div className="mb-12 border-t border-[#E5E2DC] pt-6">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5 }}
            className="font-playfair text-[22px] font-semibold italic tracking-[0.5px] text-[#1A1A1A]"
          >
            How It Works
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="mt-4 font-inter text-base leading-[1.6] text-[#777]"
          >
            From signup to mastery — your creature companion is with you at every step.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 gap-12 md:grid-cols-3 md:gap-12">
          {steps.map((step, i) => (
            <motion.div
              key={step.num}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: i * 0.2 }}
              className="flex flex-col gap-4"
            >
              <motion.span
                initial={{ scale: 0.3 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, delay: i * 0.2 }}
                className="font-playfair text-[42px] font-semibold italic tracking-[-2px] text-[#E5E2DC]"
              >
                {step.num}
              </motion.span>
              <h3 className="font-inter text-base font-semibold text-[#1A1A1A]">
                {step.title}
              </h3>
              <p className="font-inter text-sm leading-[1.6] text-[#777]">
                {step.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
