
import { useState, useEffect } from "react";
import { motion } from "framer-motion";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <motion.nav
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{
        type: "spring",
        stiffness: 120,
        damping: 15,
        duration: 0.8,
      }}
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
        scrolled ? "bg-black/70 backdrop-blur-lg shadow-xl" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-4 text-white">
        {/* Logo */}
        <motion.div
          className="text-2xl font-bold tracking-wide"
          initial={{ textShadow: "0 0 0px #00ffff" }}
          animate={{ textShadow: "0 0 12px #00ffff" }}
          transition={{
            repeat: Infinity,
            repeatType: "mirror",
            duration: 2,
            ease: "easeInOut",
          }}
        >
          <span className="text-cyan-400">Dev</span>
          <span className="text-purple-400">Portfolio</span>
        </motion.div>

        {/* Navigation Links */}
        <div className="hidden md:flex gap-8 text-sm font-medium">
          {["home", "features", "pricing", "contact"].map((item) => (
            <motion.button
              key={item}
              onClick={() => scrollToSection(item)}
              whileHover={{
                scale: 1.1,
                textShadow: "0px 0px 8px #00ffff",
              }}
              transition={{ type: "spring", stiffness: 300 }}
              className="capitalize hover:text-cyan-400 transition-all duration-300 relative group"
            >
              {item}
              <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-gradient-to-r from-cyan-400 to-purple-500 transition-all duration-300 group-hover:w-full"></span>
            </motion.button>
          ))}
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;