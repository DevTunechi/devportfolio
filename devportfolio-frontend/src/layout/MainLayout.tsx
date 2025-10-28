import { ReactNode } from "react";
import { motion } from "framer-motion";
import HeroSection from "../sections/HeroSection";
import Navbar from "../components/Navbar";

type Props = {
  children?: ReactNode;
};

export default function MainLayout({ children }: Props) {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-dark via-[#111] to-dark text-white">

      <nav className="w-full px-8 py-4 flex justify-between items-center border-b border-primary/30">
        <h1 className="font-heading text-2xl text-primary tracking-wide">
          dev<span className="text-accent">portfolio</span>
        </h1>
        <button className="bg-accent text-dark px-4 py-2 rounded-lg font-semibold hover:opacity-80 transition">
          Login with GitHub
        </button>
      </nav>

      <HeroSection />

      <motion.main
        className="flex-1"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        {children}
      </motion.main>
    </div>
  );
}
