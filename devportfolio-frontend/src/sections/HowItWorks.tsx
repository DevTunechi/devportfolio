import { useEffect, useRef } from "react";
import { motion } from "framer-motion";

const steps = [
  {
    icon: "🔐",
    title: "Login with GitHub",
    description: "Securely connect your GitHub to begin building your portfolio.",
    color: "cyan",
  },
  {
    icon: "🤖",
    title: "AI Analysis",
    description: "We analyze your repositories and generate content and layout ideas.",
    color: "purple",
  },
  {
    icon: "🧩",
    title: "Preview & Customize",
    description: "See your portfolio live and tweak sections to match your style.",
    color: "blue",
  },
  {
    icon: "🚀",
    title: "Export or Host",
    description: "Download your portfolio or host it instantly with DevPortfolio.",
    color: "green",
  },
];

const HowItWorks = () => {
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
      id="workflow"
      ref={sectionRef}
      className="relative py-24 px-6 text-white bg-gradient-to-b from-[#050505] via-[#0a0a0a] to-[#050505] overflow-hidden"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,255,255,0.1)_0%,transparent_70%)] blur-3xl opacity-20"></div>

      <motion.h2
        className="text-3xl md:text-4xl font-bold text-center mb-16"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        How It Works
      </motion.h2>

      <motion.div
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 max-w-7xl mx-auto"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.3, duration: 0.8 }}
      >
        {steps.map((step, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 200, damping: 15 }}
            className={`relative rounded-2xl p-[2px] bg-gradient-to-br from-${step.color}-500/50 via-${step.color}-600/30 to-transparent shadow-[0_0_20px_-5px_${step.color}-500/40]`}
          >
            <div className="bg-[#111] rounded-2xl p-8 h-full transition-all duration-500 hover:bg-[#181818] hover:shadow-[0_0_40px_-5px_rgba(255,255,255,0.1)]">
              <div className="text-4xl mb-3">{step.icon}</div>
              <h3 className="text-xl font-semibold mb-3">{step.title}</h3>
              <p className="text-gray-400 text-sm leading-relaxed">{step.description}</p>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default HowItWorks;
