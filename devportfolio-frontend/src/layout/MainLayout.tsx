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
    <div className="relative min-h-screen flex flex-col overflow-hidden bg-gradient-to-b from-[#050510] via-[#090920] to-black text-white">
      {/* Glowing animated background */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 0.5, scale: 1 }}
          transition={{ duration: 2 }}
          className="absolute -top-32 -left-32 w-[450px] h-[450px] bg-blue-600/30 rounded-full blur-[120px]"
        />
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 0.4, scale: 1 }}
          transition={{ duration: 3 }}
          className="absolute bottom-[-100px] right-[-100px] w-[600px] h-[600px] bg-indigo-700/25 rounded-full blur-[140px]"
        />
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 0.25, y: 0 }}
          transition={{ duration: 3.5 }}
          className="absolute top-1/2 left-1/2 w-[500px] h-[500px] bg-cyan-500/15 rounded-full blur-[160px] -translate-x-1/2 -translate-y-1/2"
        />
      </div>

      {/* Main content */}
      <div className="relative z-10 flex flex-col min-h-screen">
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
    </div>
  );
}
