import { useEffect, useRef } from "react";
import { motion } from "framer-motion";

const testimonials = [
  {
    name: "Adunni from Lagos",
    quote: "DevPortfolio turned my GitHub into a stunning showcase. No design stress, just results.",
    emoji: "🌟",
  },
  {
    name: "James from London",
    quote: "I launched my portfolio in minutes. The AI nailed my style perfectly.",
    emoji: "🚀",
  },
  {
    name: "Sophie from Berlin",
    quote: "The live preview and customization tools are game-changers. Highly recommend.",
    emoji: "🎨",
  },
];

const TestimonialsSection = () => {
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
      id="testimonials"
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
        What Devs Are Saying
      </motion.h2>

      <motion.div
        className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.3, duration: 0.8 }}
      >
        {testimonials.map((t, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.03 }}
            className="bg-[#1a1a1a] border border-purple-500/30 rounded-xl p-6 shadow-md hover:shadow-purple-500/30 transition-all"
          >
            <div className="text-3xl mb-3">{t.emoji}</div>
            <p className="text-sm text-gray-300 italic mb-4">“{t.quote}”</p>
            <p className="text-sm text-purple-400 font-semibold">{t.name}</p>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default TestimonialsSection;
