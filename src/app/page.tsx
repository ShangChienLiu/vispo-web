"use client";

import Header from "@/components/landing/Header";
import Hero from "@/components/landing/Hero";
import HowItWorks from "@/components/landing/HowItWorks";
import ParallaxZoom from "@/components/landing/ParallaxZoom";
import CompanionShowcase from "@/components/landing/CompanionShowcase";
import WhyVispo from "@/components/landing/WhyVispo";
import WaitlistCTA from "@/components/landing/WaitlistCTA";
import FAQ from "@/components/landing/FAQ";
import Footer from "@/components/landing/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#FDFCF9]">
      <Header />
      <Hero />
      <HowItWorks />
      <ParallaxZoom />
      <CompanionShowcase />
      <WhyVispo />
      <WaitlistCTA />
      <FAQ />
      <Footer />
    </div>
  );
}
