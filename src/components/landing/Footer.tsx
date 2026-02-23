"use client";

import { Twitter, Instagram, Github } from "lucide-react";

const productLinks = ["How It Works", "Companions", "Pricing", "FAQ"];
const companyLinks = ["About", "Blog", "Careers", "Contact"];
const legalLinks = ["Privacy", "Terms"];

export default function Footer() {
  return (
    <footer className="bg-[#1A1A1A] px-6 pb-8 pt-16 md:px-16">
      <div className="mx-auto max-w-[1440px]">
        <div className="flex flex-col justify-between gap-12 md:flex-row">
          <div className="flex max-w-[320px] flex-col gap-3">
            <span className="font-playfair text-2xl font-bold tracking-[4px] text-white">
              VISPO
            </span>
            <p className="font-inter text-[13px] leading-[1.6] text-[#666]">
              The global AI tutoring platform where you learn alongside a
              creature that grows with you.
            </p>
          </div>

          <div className="flex flex-wrap gap-16">
            <div className="flex flex-col gap-4">
              <span className="font-inter text-[11px] font-semibold tracking-[1px] text-white">Product</span>
              {productLinks.map((link) => (
                <a key={link} href="#" className="font-inter text-[13px] text-[#666] transition-colors hover:text-white">{link}</a>
              ))}
            </div>
            <div className="flex flex-col gap-4">
              <span className="font-inter text-[11px] font-semibold tracking-[1px] text-white">Company</span>
              {companyLinks.map((link) => (
                <a key={link} href="#" className="font-inter text-[13px] text-[#666] transition-colors hover:text-white">{link}</a>
              ))}
            </div>
            <div className="flex flex-col gap-4">
              <span className="font-inter text-[11px] font-semibold tracking-[1px] text-white">Legal</span>
              {legalLinks.map((link) => (
                <a key={link} href="#" className="font-inter text-[13px] text-[#666] transition-colors hover:text-white">{link}</a>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-12 flex items-center justify-between border-t border-[#333] pt-6">
          <span className="font-inter text-xs text-[#666]">&copy; 2026 Vispo LLC. All rights reserved.</span>
          <div className="flex items-center gap-4">
            <a href="#" className="text-[#666] transition-colors hover:text-white"><Twitter className="h-4 w-4" /></a>
            <a href="#" className="text-[#666] transition-colors hover:text-white"><Instagram className="h-4 w-4" /></a>
            <a href="#" className="text-[#666] transition-colors hover:text-white"><Github className="h-4 w-4" /></a>
          </div>
        </div>
      </div>
    </footer>
  );
}
