"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setMobileOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 border-b border-[#E5E2DC] bg-[#FDFCF9]/95 backdrop-blur-sm">
      <div className="mx-auto flex h-[74px] max-w-[1440px] items-center justify-between px-6 md:px-16">
        <div className="flex items-center gap-8">
          <span className="font-playfair text-2xl font-bold tracking-[4px] text-[#1A1A1A]">
            VISPO
          </span>
          <nav className="hidden items-center gap-6 md:flex">
            <button
              onClick={() => scrollTo("hero")}
              className="text-[13px] font-semibold text-[#1A1A1A] transition-colors hover:text-black"
            >
              About
            </button>
            <button
              onClick={() => scrollTo("why-vispo")}
              className="text-[13px] text-[#777] transition-colors hover:text-[#1A1A1A]"
            >
              Platform
            </button>
            <button
              onClick={() => scrollTo("companions")}
              className="text-[13px] text-[#777] transition-colors hover:text-[#1A1A1A]"
            >
              Companions
            </button>
            <button
              onClick={() => scrollTo("faq")}
              className="text-[13px] text-[#777] transition-colors hover:text-[#1A1A1A]"
            >
              FAQ
            </button>
          </nav>
        </div>
        <div className="hidden md:block">
          <button
            onClick={() => scrollTo("waitlist")}
            className="bg-[#1A1A1A] px-6 py-2.5 text-[13px] font-semibold tracking-[1px] text-[#FDFCF9] transition-colors hover:bg-black"
          >
            JOIN WAITLIST
          </button>
        </div>
        <button
          className="md:hidden"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="#1A1A1A"
            strokeWidth="2"
          >
            {mobileOpen ? (
              <path d="M18 6L6 18M6 6l12 12" />
            ) : (
              <path d="M3 12h18M3 6h18M3 18h18" />
            )}
          </svg>
        </button>
      </div>
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="overflow-hidden border-t border-[#E5E2DC] bg-[#FDFCF9] md:hidden"
          >
            <div className="flex flex-col gap-4 px-6 py-6">
              <button onClick={() => scrollTo("hero")} className="text-left text-sm font-semibold text-[#1A1A1A]">About</button>
              <button onClick={() => scrollTo("why-vispo")} className="text-left text-sm text-[#777]">Platform</button>
              <button onClick={() => scrollTo("companions")} className="text-left text-sm text-[#777]">Companions</button>
              <button onClick={() => scrollTo("faq")} className="text-left text-sm text-[#777]">FAQ</button>
              <button onClick={() => scrollTo("waitlist")} className="mt-2 bg-[#1A1A1A] px-6 py-2.5 text-[13px] font-semibold tracking-[1px] text-[#FDFCF9]">JOIN WAITLIST</button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
