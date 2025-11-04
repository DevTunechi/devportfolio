import { useEffect, useRef } from "react";
import { motion } from "framer-motion";

const features = [
  { icon: "💎", title: "AI Portfolio Builder", description: "Generate your entire portfolio with one click." },
  { icon: "⚙️", title: "Full Customization", description: "Edit layouts, colors, and styles effortlessly." },
  { icon: "🚀", title: "Instant Hosting", description: "Host your portfolio instantly with a single tap." },
];

const PricingSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const x = (e.clientX / window.innerWidth - 0.5) * 10;
      const y = (e.clientY / window.innerHeight - 0.5) * 10;
      if (sectionRef.current) {
        sectionRef.current.style.transform = `translate(${x}px, ${y}px)`;
      }
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <section
      id="pricing"
      ref={sectionRef}
      className="relative py-24 px-6 bg-gradient-to-b from-[#050505] via-[#0a0a0a] to-[#050505] text-white overflow-hidden"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(139,92,246,0.1)_0%,transparent_70%)] blur-3xl opacity-20"></div>

      <motion.h2
        className="text-3xl md:text-4xl font-bold text-center mb-8"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        100% Free to Use
      </motion.h2>

      <motion.p
        className="text-center text-gray-400 max-w-2xl mx-auto mb-16"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.3, duration: 0.8 }}
      >
        DevPortfolio is completely free — no subscriptions, no payments, no hidden costs.
        Just log in, build your AI-powered portfolio, and launch it effortlessly.
      </motion.p>

      <motion.div
        className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-6xl mx-auto"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.5, duration: 0.8 }}
      >
        {features.map((feature, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 200, damping: 15 }}
            className={`relative rounded-2xl p-[2px] bg-gradient-to-br from-purple-500/50 via-cyan-500/40 to-transparent shadow-[0_0_20px_-5px_rgba(139,92,246,0.4)]`}
          >
            <div className="bg-[#111] rounded-2xl p-8 h-full transition-all duration-500 hover:bg-[#181818] hover:shadow-[0_0_40px_-5px_rgba(255,255,255,0.1)]">
              <div className="text-4xl mb-3">{feature.icon}</div>
              <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
              <p className="text-gray-400 text-sm leading-relaxed">{feature.description}</p>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default PricingSection;
