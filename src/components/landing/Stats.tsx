"use client";

import { motion, useInView } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { useLanguage } from "@/i18n/LanguageContext";

function CountUp({
  end,
  suffix = "",
  duration = 2,
}: {
  end: number;
  suffix?: string;
  duration?: number;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isInView) return;
    let startTime: number;
    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / (duration * 1000), 1);
      setCount(Math.floor(progress * end));
      if (progress < 1) requestAnimationFrame(animate);
    };
    requestAnimationFrame(animate);
  }, [isInView, end, duration]);

  return (
    <span ref={ref}>
      {count.toLocaleString()}
      {suffix}
    </span>
  );
}

export default function Stats() {
  const { t } = useLanguage();

  const stats = [
    { value: 12400, suffix: "+", label: t("stats.waitlistSignups") as string },
    { value: 50, suffix: "+", label: t("stats.subjects") as string },
    { value: 15, suffix: "", label: t("stats.creatures") as string },
    { value: 3, suffix: "x", label: t("stats.retention") as string },
  ];

  return (
    <section className="border-y border-[#E5E2DC] bg-[#E5E2DC]">
      <div className="mx-auto grid max-w-[1440px] grid-cols-2 gap-px md:grid-cols-4">
        {stats.map((stat, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, scale: 1 }}
            whileInView={{ opacity: 1, scale: [1, 1.05, 1] }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: i * 0.15 }}
            className="flex flex-col items-center gap-2 bg-[#FDFCF9] px-8 py-6"
          >
            <span className="font-playfair text-[42px] font-semibold italic tracking-[-2px] text-[#1A1A1A]">
              <CountUp end={stat.value} suffix={stat.suffix} />
            </span>
            <span className="text-center font-inter text-[13px] text-[#777]">
              {stat.label}
            </span>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
