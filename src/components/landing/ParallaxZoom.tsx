"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export default function ParallaxZoom() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const scale = useTransform(scrollYProgress, [0, 0.5], [1.3, 1]);
  const textOpacity = useTransform(scrollYProgress, [0.2, 0.4], [0, 1]);

  return (
    <section ref={ref} className="relative h-[560px] w-full overflow-hidden">
      <motion.div style={{ scale }} className="absolute inset-0 h-full w-full">
        <img
          src="/images/parallax-bg.svg"
          alt="Learning adventure"
          className="h-full w-full object-cover"
        />
      </motion.div>
      <motion.div
        style={{ opacity: textOpacity }}
        className="absolute inset-0 flex flex-col items-center justify-center gap-4 bg-[#0D0D0D99] px-6"
      >
        <h2 className="text-center font-playfair text-4xl font-medium italic leading-[1.05] tracking-[-2px] text-white md:text-[64px]">
          Learning Is an
          <br />
          Adventure.
        </h2>
        <p className="max-w-[520px] text-center font-inter text-base leading-[1.6] text-[#999]">
          Your companion remembers every lesson, celebrates every win, and never
          gives up on you.
        </p>
      </motion.div>
    </section>
  );
}
