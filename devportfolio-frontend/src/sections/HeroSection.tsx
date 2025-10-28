import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";

const Particle = ({ delay }: { delay: number }) => {
  const top = useRef(`${Math.random() * 100}%`);
  const left = useRef(`${Math.random() * 100}%`);

  return (
    <motion.div
      className="absolute w-2 h-2 bg-cyan-400 rounded-full shadow-lg"
      style={{
        top: top.current,
        left: left.current,
        opacity: 0.6,
      }}
      animate={{
        y: [0, -20, 0],
        x: [0, 10, 0],
        opacity: [0.4, 1, 0.4],
      }}
      transition={{
        duration: 5 + Math.random() * 3,
        delay,
        repeat: Infinity,
        ease: "easeInOut",
      }}
    />
  );
};

const HeroSection = () => {
  const [soundOn, setSoundOn] = useState(true);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    if (audioRef.current) {
      if (soundOn) {
        audioRef.current.volume = 0.2;
        audioRef.current.play().catch(() => {});
      } else {
        audioRef.current.pause();
      }
    }
  }, [soundOn]);

  return (
    <section
      id="home"
      className="min-h-screen flex flex-col justify-center items-center text-center relative overflow-hidden bg-gradient-to-b from-black via-gray-900 to-black text-white px-6"
    >
      {/* Ambient Sound */}
      <audio ref={audioRef} loop src="/sounds/ambient-hum.mp3" />

      {/* Sound Toggle */}
      <motion.button
        aria-label="Toggle ambient sound"
        onClick={() => setSoundOn(!soundOn)}
        className="absolute top-6 right-6 text-cyan-400 hover:text-purple-400 transition-all z-50 text-sm uppercase"
        whileHover={{ scale: 1.1 }}
      >
        {soundOn ? "Mute" : "Unmute"}
      </motion.button>

      {/* Background Blobs */}
      <motion.div
        className="absolute -top-32 -left-32 w-96 h-96 bg-cyan-500/20 rounded-full blur-3xl"
        animate={{ y: [0, 30, 0], x: [0, 15, 0] }}
        transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-0 right-0 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl"
        animate={{ y: [0, -30, 0], x: [0, -15, 0] }}
        transition={{ repeat: Infinity, duration: 7, ease: "easeInOut" }}
      />

      {/* Floating Particles */}
      {[...Array(15)].map((_, i) => (
        <Particle key={i} delay={i * 0.3} />
      ))}

      {/* Hero Text */}
      <motion.h1
        className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-tight z-10"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, type: "spring", stiffness: 80 }}
      >
        Build Your <span className="text-cyan-400">AI-Powered</span> <br />
        <span className="text-purple-400">GitHub Portfolio</span>
      </motion.h1>

      <motion.p
        className="mt-6 text-base sm:text-lg md:text-xl text-gray-300 max-w-2xl z-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6, duration: 1 }}
      >
        Instantly generate a personalized portfolio with AI — no design skills needed.  
        Just connect your GitHub, describe your dream style, and watch it come alive.
      </motion.p>

      {/* CTA Buttons */}
      <motion.div
        className="mt-10 flex gap-6 flex-wrap justify-center z-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.8 }}
      >
        <motion.button
          aria-label="Generate your portfolio"
          whileHover={{ scale: 1.08, boxShadow: "0px 0px 12px #00ffff" }}
          whileTap={{ scale: 0.97 }}
          className="px-8 py-3 rounded-full bg-gradient-to-r from-cyan-500 to-purple-500 text-white font-semibold shadow-lg"
        >
          Generate My Portfolio
        </motion.button>
        <motion.button
          aria-label="Learn more about the platform"
          whileHover={{ scale: 1.08, boxShadow: "0px 0px 12px #7e22ce" }}
          whileTap={{ scale: 0.97 }}
          className="px-8 py-3 rounded-full border border-purple-500 text-purple-400 font-semibold"
        >
          Learn More
        </motion.button>
      </motion.div>
    </section>
  );
};

export default HeroSection;
