import { useEffect, useRef } from "react";
import { motion } from "framer-motion";

const FooterSection = () => {
  const footerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const x = (e.clientX / window.innerWidth - 0.5) * 8;
      const y = (e.clientY / window.innerHeight - 0.5) * 8;
      if (footerRef.current) {
        footerRef.current.style.transform = `translate(${x}px, ${y}px)`;
      }
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <footer
      ref={footerRef}
      className="py-10 px-6 bg-[#0a0a0a] text-gray-400 text-sm text-center transition-transform duration-300"
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="mb-4"
      >
        Contact us at <a href="mailto:support@devportfolio.ai" className="text-cyan-400 hover:text-purple-400">support@devportfolio.ai</a>
      </motion.div>

      <motion.div
        className="flex justify-center gap-6 text-lg"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.3, duration: 0.6 }}
      >
        <a href="https://twitter.com/devportfolio" target="_blank" rel="noopener noreferrer" className="hover:text-purple-400">🐦</a>
        <a href="https://github.com/devportfolio" target="_blank" rel="noopener noreferrer" className="hover:text-purple-400">💻</a>
        <a href="https://linkedin.com/company/devportfolio" target="_blank" rel="noopener noreferrer" className="hover:text-purple-400">🔗</a>
      </motion.div>

      <motion.div
        className="mt-6"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.5, duration: 0.6 }}
      >
        © {new Date().getFullYear()} DevPortfolio. All rights reserved.
      </motion.div>
    </footer>
  );
};

export default FooterSection;
