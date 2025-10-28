import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

const HomeSection = () => {
  const [soundOn, setSoundOn] = useState(true);
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const blobRef1 = useRef<HTMLDivElement>(null);
  const blobRef2 = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const x = (e.clientX / window.innerWidth - 0.5) * 30;
      const y = (e.clientY / window.innerHeight - 0.5) * 30;
      if (blobRef1.current) {
        blobRef1.current.style.transform = `translate(${x}px, ${y}px)`;
      }
      if (blobRef2.current) {
        blobRef2.current.style.transform = `translate(${-x}px, ${-y}px)`;
      }
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

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
      className="min-h-screen flex flex-col justify-center items-center text-center relative overflow-hidden bg-gradient-to-b from-[#0a0a0a] via-[#111] to-[#0a0a0a] text-white px-6"
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

      {/* Animated Background Blobs */}
      <motion.div
        ref={blobRef1}
        className="absolute top-0 left-0 w-72 h-72 bg-purple-500/20 rounded-full blur-3xl"
        animate={{ y: [0, 30, 0], x: [0, 15, 0] }}
        transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
      />
      <motion.div
        ref={blobRef2}
        className="absolute bottom-0 right-0 w-72 h-72 bg-cyan-500/20 rounded-full blur-3xl"
        animate={{ y: [0, -30, 0], x: [0, -15, 0] }}
        transition={{ repeat: Infinity, duration: 7, ease: "easeInOut" }}
      />

      {/* Headline & Subtext */}
      <motion.h1
        className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-tight z-10"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1, type: "spring", stiffness: 80 }}
      >
        Welcome to <span className="text-cyan-400">Dev</span>
        <span className="text-purple-400">Portfolio</span>
      </motion.h1>
      <motion.p
        className="mt-6 text-base sm:text-lg md:text-xl text-gray-300 max-w-2xl z-10"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.6, duration: 1 }}
      >
        Build your AI-powered portfolio straight from your GitHub — no code, no design, just creativity.
      </motion.p>

      {/* CTA Button */}
      <motion.button
        whileHover={{ scale: 1.08, boxShadow: "0px 0px 12px #00ffff" }}
        whileTap={{ scale: 0.97 }}
        className="mt-8 px-8 py-3 rounded-full bg-gradient-to-r from-cyan-500 to-purple-500 text-white font-semibold shadow-lg z-10"
      >
        Login with GitHub
      </motion.button>

      {/* Feature Boxes */}
      <motion.div
        className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8 z-10 max-w-5xl w-full"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 1.2, duration: 0.8 }}
      >
        {/* GitHub Integration */}
        <div className="bg-[#1a1a1a] border border-cyan-500/30 rounded-xl p-6 shadow-md hover:shadow-cyan-500/30 transition-all">
          <div className="text-2xl mb-2">🐙</div>
          <h3 className="text-lg font-semibold text-white mb-1">GitHub Integration</h3>
          <p className="text-sm text-gray-400">
            Pull projects and details directly from your GitHub.
          </p>
        </div>

        {/* AI Design */}
        <div className="bg-[#1a1a1a] border border-purple-500/30 rounded-xl p-6 shadow-md hover:shadow-purple-500/30 transition-all">
          <div className="text-2xl mb-2">🧠</div>
          <h3 className="text-lg font-semibold text-white mb-1">AI Design</h3>
          <p className="text-sm text-gray-400">
            AI-generated layouts and themes for a unique look.
          </p>
        </div>

        {/* Live Preview */}
        <div className="bg-[#1a1a1a] border border-blue-500/30 rounded-xl p-6 shadow-md hover:shadow-blue-500/30 transition-all">
          <div className="text-2xl mb-2">🖥️</div>
          <h3 className="text-lg font-semibold text-white mb-1">Live Preview</h3>
          <p className="text-sm text-gray-400">
            Instantly see how your portfolio looks.
          </p>
        </div>
      </motion.div>
    </section>
  );
};

export default HomeSection;
