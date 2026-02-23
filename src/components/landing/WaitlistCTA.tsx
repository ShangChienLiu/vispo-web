"use client";

import { motion } from "framer-motion";
import { useState } from "react";

export default function WaitlistCTA() {
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
        setMessage(data.error || "Something went wrong");
        return;
      }

      setStatus("success");
      setMessage("You're on the list! We'll be in touch.");
      setName("");
      setEmail("");
    } catch {
      setStatus("error");
      setMessage("Network error. Please try again.");
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
          className="relative h-[200px] w-[200px] overflow-hidden"
        >
          <img src="/images/cta-creature.png" alt="Your creature is waiting" className="h-full w-full object-cover" />
        </motion.div>

        <div className="flex flex-col items-center gap-4">
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-center font-playfair text-4xl font-medium italic leading-[1.05] tracking-[-2px] text-white md:text-[64px]"
          >
            Your Creature
            <br />
            Is Waiting.
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="max-w-[520px] text-center font-inter text-base leading-[1.6] text-[#777]"
          >
            Join the waitlist for the world&apos;s first AI tutoring platform
            where you learn alongside a creature that grows with you.
            <br />
            Early supporters get exclusive creatures and lifetime perks.
          </motion.p>
        </div>

        <motion.form
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.5 }}
          onSubmit={handleSubmit}
          className="flex w-full max-w-[480px] flex-col gap-4"
        >
          <div className="flex flex-col gap-3 md:flex-row">
            <input
              type="text"
              placeholder="Your name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="h-12 flex-1 border border-[#333] bg-transparent px-4 font-inter text-[13px] text-white placeholder-[#666] outline-none transition-colors focus:border-[#666]"
              required
            />
            <input
              type="email"
              placeholder="you@email.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="h-12 flex-1 border border-[#333] bg-transparent px-4 font-inter text-[13px] text-white placeholder-[#666] outline-none transition-colors focus:border-[#666]"
              required
            />
          </div>
          <motion.button
            type="submit"
            disabled={status === "loading"}
            whileHover={{ scale: 1.01 }}
            animate={status === "idle" ? { scale: [1, 1.01, 1] } : {}}
            transition={status === "idle" ? { repeat: Infinity, duration: 2, ease: "easeInOut" } : {}}
            className="flex h-[52px] items-center justify-center bg-[#FDFCF9] font-inter text-[13px] font-semibold tracking-[1px] text-[#1A1A1A] transition-colors hover:bg-white disabled:opacity-50"
          >
            {status === "loading" ? "JOINING..." : "JOIN THE WAITLIST"}
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
            No spam. Unsubscribe anytime. 12,400+ already on the list.
          </p>
        </motion.form>
      </div>
    </section>
  );
}
