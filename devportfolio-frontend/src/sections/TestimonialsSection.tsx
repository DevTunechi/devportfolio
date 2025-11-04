import { useEffect, useRef } from "react";
import { motion } from "framer-motion";

const testimonials = [
  {
    name: "Adunni from Lagos",
    quote: "DevPortfolio turned my GitHub into a stunning showcase. No design stress, just results.",
    emoji: "🌟",
    image: "/images/adunni.jpg",
  },
  {
    name: "James from London",
    quote: "I launched my portfolio in minutes. The AI nailed my style perfectly.",
    emoji: "🚀",
    image: "/images/james.jpg",
  },
  {
    name: "Sophie from Berlin",
    quote: "The live preview and customization tools are game-changers. Highly recommend.",
    emoji: "🎨",
    image: "/images/sophie.jpg",
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
            whileHover={{
              scale: 1.05,
              rotateX: 5,
              rotateY: -5,
              boxShadow: "0px 0px 25px rgba(168, 85, 247, 0.4)",
            }}
            transition={{ type: "spring", stiffness: 200, damping: 10 }}
            className="bg-[#1a1a1a] border border-purple-500/30 rounded-xl p-6 shadow-md hover:shadow-purple-500/30 transition-all flex flex-col items-center text-center"
          >
            <div className="relative w-20 h-20 mb-4">
              <img
                src={t.image}
                alt={t.name}
                loading="lazy"
                onError={(e) => (e.currentTarget.src = "/images/default-avatar.png")}
                className="w-20 h-20 object-cover rounded-full border border-purple-500/30 shadow-lg"
              />
              <span className="absolute -bottom-1 -right-1 text-lg">{t.emoji}</span>
            </div>
            <p className="text-sm text-gray-300 italic mb-4 max-w-xs">“{t.quote}”</p>
            <p className="text-sm text-purple-400 font-semibold">{t.name}</p>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default TestimonialsSection;
