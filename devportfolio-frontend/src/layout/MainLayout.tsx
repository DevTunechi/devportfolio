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
    <div className="relative min-h-screen flex flex-col overflow-hidden text-white bg-gradient-to-b from-[#050510] via-[#080820] to-[#0A0A15]">
      {/* Glowing gradient background blobs */}
      <div className="absolute inset-0 overflow-hidden -z-10">
        <div className="absolute w-[500px] h-[500px] bg-purple-600/40 rounded-full blur-[180px] top-[-100px] left-[-100px]" />
        <div className="absolute w-[400px] h-[400px] bg-blue-500/30 rounded-full blur-[150px] bottom-[10%] right-[10%]" />
        <div className="absolute w-[300px] h-[300px] bg-fuchsia-500/30 rounded-full blur-[160px] top-[40%] left-[30%]" />
      </div>

      <Navbar />

      <motion.main
        className="flex-1 flex flex-col items-center justify-center text-center px-6 md:px-12"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <HeroSection />

        <div className="w-full max-w-6xl mt-20 space-y-24">
          <FeatureHighlights />
          <HowItWorks />
          <PricingSection />
          <TestimonialsSection />
        </div>

        {children && (
          <div className="w-full mt-20">
            {children}
          </div>
        )}
      </motion.main>

      <FooterSection />
    </div>
  );
}
