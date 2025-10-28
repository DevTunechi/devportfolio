import { motion } from "framer-motion";

const HeroSection = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex flex-col justify-center items-center text-center relative overflow-hidden bg-gradient-to-b from-black via-gray-900 to-black text-white px-6"
    >
      {/* Background gradient orbs */}
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

      {/* Animated headline */}
      <motion.h1
        className="text-5xl md:text-6xl font-extrabold leading-tight"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, type: 'spring', stiffness: 80 }}
      >
        Build Your <span className="text-cyan-400">AI-Powered</span> <br />
        <span className="text-purple-400">GitHub Portfolio</span>
      </motion.h1>

      {/* Subtext */}
      <motion.p
        className="mt-6 text-lg md:text-xl text-gray-300 max-w-2xl"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6, duration: 1 }}
      >
        Instantly generate a personalized portfolio with AI — no design skills needed.  
        Just connect your GitHub, describe your dream style, and watch it come alive.
      </motion.p>

      {/* Buttons */}
      <motion.div
        className="mt-10 flex gap-6 flex-wrap justify-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.8 }}
      >
        <motion.button
          whileHover={{ scale: 1.08, boxShadow: "0px 0px 12px #00ffff" }}
          whileTap={{ scale: 0.97 }}
          className="px-8 py-3 rounded-full bg-gradient-to-r from-cyan-500 to-purple-500 text-white font-semibold shadow-lg"
        >
          Generate My Portfolio
        </motion.button>
        <motion.button
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