"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    q: "What exactly is Vispo?",
    a: "Vispo is a global AI tutoring platform where every student gets a personal creature companion. It's powered by the world's best AI models — GPT, Claude, Gemini — and works across desktop, web, and mobile. Your creature learns with you, adapts to your pace, and evolves as you grow.",
  },
  {
    q: "What can the creature actually do?",
    a: "Your creature is an AI tutor that chats, listens, watches you write, reads your handwriting, and draws on a whiteboard with you. It detects your mood, remembers your weak spots, and uses spaced repetition to help you retain knowledge. As you study, it earns XP and evolves into new forms.",
  },
  {
    q: "Is this for students only?",
    a: "No — Vispo serves both students and teachers. Students get AI creature companions for personalized learning. Teachers get exam creation tools, auto-grading, student monitoring, and learning analytics. It's a complete global education platform.",
  },
  {
    q: "Does it work offline?",
    a: "Yes. Vispo is offline-first — all your data is stored locally and syncs across devices when you reconnect. Desktop app (macOS), PWA web app, or mobile — your creature and progress are always with you, even without internet.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section id="faq" className="px-6 py-20 md:px-16">
      <div className="mx-auto max-w-[1440px]">
        <div className="mb-12 border-t border-[#E5E2DC] pt-6">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5 }}
            className="font-playfair text-[22px] font-semibold italic tracking-[0.5px] text-[#1A1A1A]"
          >
            Questions & Answers
          </motion.h2>
        </div>

        <div className="flex flex-col">
          {faqs.map((faq, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.4, delay: i * 0.15 }}
              className={i < faqs.length - 1 ? "border-b border-[#E5E2DC]" : ""}
            >
              <button
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="flex w-full items-center justify-between py-6"
              >
                <span className="text-left font-inter text-base font-semibold text-[#1A1A1A]">
                  {faq.q}
                </span>
                <motion.span animate={{ rotate: openIndex === i ? 180 : 0 }} transition={{ duration: 0.3 }}>
                  <ChevronDown className="h-5 w-5 flex-shrink-0 text-[#777]" />
                </motion.span>
              </button>
              <AnimatePresence>
                {openIndex === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <p className="pb-6 font-inter text-sm leading-[1.6] text-[#777]">{faq.a}</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
