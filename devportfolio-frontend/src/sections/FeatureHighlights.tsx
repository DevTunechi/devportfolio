import { useEffect, useRef } from "react";
import { motion } from "framer-motion";

const features = [
  {
    icon: "🐙",
    title: "GitHub Integration",
    description: "Pulls projects and details directly from your GitHub.",
    border: "border-cyan-500/30",
    glow: "hover:shadow-cyan-500/30",
  },
  {
    icon: "🧠",
    title: "AI Design",
    description: "AI-generated layouts and themes for a unique look.",
    border: "border-purple-500/30",
    glow: "hover:shadow-purple-500/30",
  },
  {
    icon: "🖥️",
    title: "Live Preview",
    description: "Instantly see how your portfolio looks.",
    border: "border-blue-500/30",
    glow: "hover:shadow-blue-500/30",
  },
];

const FeatureHighlights = () => {
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
      id="features"
      ref={sectionRef}
      className="py-20 px-6 bg-gradient-to-b from-[#0a0a0a] via-[#111] to-[#0a0a0a] text-white transition-transform duration-300"
    >
      <motion.h2
        className="text-3xl md:text-4xl font-bold text-center mb-12"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        Feature Highlights
      </motion.h2>

      <motion.div
        className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.3, duration: 0.8 }}
      >
        {features.map((feature, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.05 }}
            className={`bg-[#1a1a1a] border ${feature.border} rounded-xl p-6 shadow-md ${feature.glow} transition-all`}
          >
            <div className="text-3xl mb-3">{feature.icon}</div>
            <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
            <p className="text-sm text-gray-400">{feature.description}</p>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default FeatureHighlights;
