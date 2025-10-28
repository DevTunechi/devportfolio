import { ReactNode } from "react";
import { motion } from "framer-motion";

type Props = {
  children: ReactNode;
};

export default function MainLayout({ children }: Props) {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-dark via-[#111] to-dark">
      {/* Navbar */}
      <nav className="w-full px-8 py-4 flex justify-between items-center border-b border-primary/30">
        <h1 className="font-heading text-2xl text-primary tracking-wide">
          dev<span className="text-accent">portfolio</span>
        </h1>
        <button>Login with GitHub</button>
      </nav>

      {/* Page Content */}
      <motion.main
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="flex-1 container mx-auto px-6 py-12"
      >
        {children}
      </motion.main>

      {/* Footer */}
      <footer className="text-center py-4 text-sm text-offwhite/60 border-t border-primary/20">
        © {new Date().getFullYear()} devportfolio. Built by 💜DevTunechi
      </footer>
    </div>
  );
}
