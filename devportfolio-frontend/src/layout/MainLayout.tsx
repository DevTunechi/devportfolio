import type { ReactNode } from "react";
import { motion } from "framer-motion";
import Navbar from "../components/Navbar";
import FooterSection from "../components/FooterSection";
import HeroSection from "../sections/HeroSection";
import FeatureHighlights from "../sections/FeatureHighlights";
import HowItWorks from "../sections/HowItWorks";
import PricingSection from "../sections/PricingSection";
import TestimonialsSection from "../sections/TestimonialsSection";

type Props = {
  children?: ReactNode;
};

export default function MainLayout({ children }: Props) {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-dark via-[#111] to-dark text-white">
      <Navbar />

      <nav className="w-full px-8 py-4 flex justify-between items-center border-b border-primary/30">
        <h1 className="font-heading text-2xl text-primary tracking-wide">
          Dev<span className="text-accent">Portfolio</span>
        </h1>
        <button className="bg-accent text-dark px-4 py-2 rounded-lg font-semibold hover:opacity-80 transition">
          Login with GitHub
        </button>
      </nav>

      <HeroSection />
      <FeatureHighlights />
      <HowItWorks />
      <PricingSection />
      <TestimonialsSection />

      <motion.main
        className="flex-1"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        {children}
      </motion.main>

      <FooterSection />
    </div>
  );
}
