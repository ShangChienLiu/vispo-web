"use client";

import { Twitter, Instagram, Github } from "lucide-react";
import { useLanguage } from "@/i18n/LanguageContext";

export default function Footer() {
  const { t } = useLanguage();

  const productLinks = t("footer.productLinks") as string[];
  const companyLinks = t("footer.companyLinks") as string[];
  const legalLinks = t("footer.legalLinks") as string[];

  return (
    <footer className="bg-[#1A1A1A] px-6 pb-8 pt-16 md:px-16">
      <div className="mx-auto max-w-[1440px]">
        <div className="flex flex-col justify-between gap-12 md:flex-row">
          <div className="flex max-w-[320px] flex-col gap-3">
            <span className="font-playfair text-2xl font-bold tracking-[4px] text-white">
              VISPO
            </span>
            <p className="font-inter text-[13px] leading-[1.6] text-[#666]">
              {t("footer.description") as string}
            </p>
          </div>

          <div className="flex flex-wrap gap-16">
            <div className="flex flex-col gap-4">
              <span className="font-inter text-[11px] font-semibold tracking-[1px] text-white">{t("footer.product") as string}</span>
              {productLinks.map((link) => (
                <a key={link} href="#" className="font-inter text-[13px] text-[#666] transition-colors hover:text-white">{link}</a>
              ))}
            </div>
            <div className="flex flex-col gap-4">
              <span className="font-inter text-[11px] font-semibold tracking-[1px] text-white">{t("footer.company") as string}</span>
              {companyLinks.map((link) => (
                <a key={link} href="#" className="font-inter text-[13px] text-[#666] transition-colors hover:text-white">{link}</a>
              ))}
            </div>
            <div className="flex flex-col gap-4">
              <span className="font-inter text-[11px] font-semibold tracking-[1px] text-white">{t("footer.legal") as string}</span>
              {legalLinks.map((link) => (
                <a key={link} href="#" className="font-inter text-[13px] text-[#666] transition-colors hover:text-white">{link}</a>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-12 flex items-center justify-between border-t border-[#333] pt-6">
          <span className="font-inter text-xs text-[#666]">{t("footer.copyright") as string}</span>
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
