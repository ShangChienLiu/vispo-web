"use client";

import {
  createContext,
  useContext,
  useState,
  useEffect,
  ReactNode,
} from "react";
import en from "./en.json";
import zhHant from "./zh-Hant.json";
import zhHans from "./zh-Hans.json";

type Language = "en" | "zh";
type ChineseVariant = "zh-Hans" | "zh-Hant";
type Dict = typeof en;

const dictionaries: Record<string, Dict> = {
  en,
  "zh-Hans": zhHans,
  "zh-Hant": zhHant,
};

/**
 * Detect Chinese variant from browser language.
 * zh-TW, zh-HK, zh-Hant → Traditional
 * zh-CN, zh-SG, zh-Hans, bare zh → Simplified
 */
function detectChineseVariant(): ChineseVariant {
  const langs = navigator.languages ?? [navigator.language ?? ""];
  for (const lang of langs) {
    const lower = lang.toLowerCase();
    if (lower === "zh-tw" || lower === "zh-hk" || lower.startsWith("zh-hant")) {
      return "zh-Hant";
    }
    if (lower === "zh-cn" || lower === "zh-sg" || lower.startsWith("zh-hans")) {
      return "zh-Hans";
    }
  }
  // bare "zh" or unknown → Simplified (larger user base)
  return "zh-Hans";
}

interface LanguageContextValue {
  lang: Language;
  setLang: (lang: Language) => void;
  t: (key: string) => string | string[];
}

const LanguageContext = createContext<LanguageContextValue | null>(null);

const STORAGE_KEY = "vispo-lang";

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Language>("en");
  const [zhVariant, setZhVariant] = useState<ChineseVariant>("zh-Hant");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const variant = detectChineseVariant();
    setZhVariant(variant);

    const stored = localStorage.getItem(STORAGE_KEY) as Language | null;
    if (stored === "en" || stored === "zh") {
      setLangState(stored);
    } else {
      const browserLang = navigator.language || "";
      if (browserLang.startsWith("zh")) {
        setLangState("zh");
      }
    }
    setMounted(true);
  }, []);

  useEffect(() => {
    document.documentElement.lang = lang === "zh" ? zhVariant : lang;
  }, [lang, zhVariant]);

  const setLang = (newLang: Language) => {
    setLangState(newLang);
    localStorage.setItem(STORAGE_KEY, newLang);
  };

  const t = (key: string): string | string[] => {
    const dictKey = lang === "zh" ? zhVariant : lang;
    const keys = key.split(".");
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    let value: any = dictionaries[dictKey];
    for (const k of keys) {
      value = value?.[k];
    }
    return value ?? key;
  };

  if (!mounted) return null;

  return (
    <LanguageContext.Provider value={{ lang, setLang, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error("useLanguage must be used within LanguageProvider");
  return ctx;
}

export function renderWithBreaks(text: string): React.ReactNode[] {
  const parts = text.split("\n");
  const result: React.ReactNode[] = [];
  parts.forEach((part, i) => {
    if (i > 0) result.push(<br key={i} />);
    result.push(part);
  });
  return result;
}
