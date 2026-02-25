"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { useLanguage, renderWithBreaks } from "@/i18n/LanguageContext";

export default function WaitlistCTA() {
  const { t } = useLanguage();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !email) return;

    setStatus("loading");
    try {
      const res = await fetch("/api/waitlist", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email }),
      });
      const data = await res.json();

      if (!res.ok) {
        setStatus("error");
        setMessage(data.error || (t("waitlist.errorDefault") as string));
        return;
      }

      setStatus("success");
      setMessage(t("waitlist.success") as string);
      setName("");
      setEmail("");
    } catch {
      setStatus("error");
      setMessage(t("waitlist.errorNetwork") as string);
    }
  };

  return (
    <section id="waitlist" className="bg-[#1A1A1A] px-6 py-24 md:px-16 md:py-[100px]">
      <div className="mx-auto flex max-w-[1440px] flex-col items-center gap-12">
        <motion.div
          initial={{ scale: 0.4, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, type: "spring", bounce: 0.3 }}
          className="relative h-[320px] w-[320px] overflow-hidden"
        >
          <img src="/images/creature.png" alt="Your creature is waiting" className="h-full w-full object-contain" />
        </motion.div>

        <div className="flex flex-col items-center gap-4">
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-center font-playfair text-4xl font-medium italic leading-[1.05] tracking-[-2px] text-white md:text-[64px]"
          >
            {renderWithBreaks(t("waitlist.title") as string)}
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="max-w-[520px] text-center font-inter text-base leading-[1.6] text-[#777]"
          >
            {renderWithBreaks(t("waitlist.description") as string)}
          </motion.p>
        </div>

        <motion.form
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.5 }}
          onSubmit={handleSubmit}
          className="flex w-full flex-col gap-4 md:max-w-[480px]"
        >
          <div className="flex flex-col gap-3">
            <input
              type="text"
              placeholder={t("waitlist.namePlaceholder") as string}
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="min-h-[52px] w-full rounded-lg border border-[#555] bg-[#2A2A2A] px-4 py-4 font-inter text-base text-gray-200 placeholder-gray-500 outline-none transition-colors duration-200 focus:border-[#7C3AED] focus:ring-2 focus:ring-[#7C3AED]/30 focus:ring-inset"
              required
            />
            <input
              type="email"
              placeholder={t("waitlist.emailPlaceholder") as string}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="min-h-[52px] w-full rounded-lg border border-[#555] bg-[#2A2A2A] px-4 py-4 font-inter text-base text-gray-200 placeholder-gray-500 outline-none transition-colors duration-200 focus:border-[#7C3AED] focus:ring-2 focus:ring-[#7C3AED]/30 focus:ring-inset"
              required
            />
          </div>
          <motion.button
            type="submit"
            disabled={status === "loading"}
            whileHover={{ scale: 1.01 }}
            animate={status === "idle" ? { scale: [1, 1.01, 1] } : {}}
            transition={status === "idle" ? { repeat: Infinity, duration: 2, ease: "easeInOut" } : {}}
            className="flex min-h-[52px] items-center justify-center rounded-lg bg-[#FDFCF9] py-4 font-inter text-base font-semibold tracking-[1px] text-[#1A1A1A] transition-colors hover:bg-white disabled:opacity-50"
          >
            {status === "loading" ? (t("waitlist.submitting") as string) : (t("waitlist.submit") as string)}
          </motion.button>

          {status === "success" && (
            <motion.p initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="text-center font-inter text-sm text-[#22C55E]">
              {message}
            </motion.p>
          )}
          {status === "error" && (
            <motion.p initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="text-center font-inter text-sm text-red-400">
              {message}
            </motion.p>
          )}

          <p className="text-center font-inter text-xs text-[#666]">
            {t("waitlist.disclaimer") as string}
          </p>
        </motion.form>
      </div>
    </section>
  );
}
