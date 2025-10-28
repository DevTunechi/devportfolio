import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

const plans = {
  USD: [
    { name: "Free", price: "$0", features: ["Basic portfolio", "Limited customization"], stripeId: "price_usd_free" },
    { name: "Pro", price: "$9", features: ["AI layout", "Live preview", "Download ZIP"], stripeId: "price_usd_pro" },
    { name: "Premium", price: "$19", features: ["Hosting", "Custom domain", "Priority support"], stripeId: "price_usd_premium" },
  ],
  EUR: [
    { name: "Free", price: "€0", features: ["Basic portfolio", "Limited customization"], stripeId: "price_eur_free" },
    { name: "Pro", price: "€8", features: ["AI layout", "Live preview", "Download ZIP"], stripeId: "price_eur_pro" },
    { name: "Premium", price: "€17", features: ["Hosting", "Custom domain", "Priority support"], stripeId: "price_eur_premium" },
  ],
  GBP: [
    { name: "Free", price: "£0", features: ["Basic portfolio", "Limited customization"], stripeId: "price_gbp_free" },
    { name: "Pro", price: "£7", features: ["AI layout", "Live preview", "Download ZIP"], stripeId: "price_gbp_pro" },
    { name: "Premium", price: "£15", features: ["Hosting", "Custom domain", "Priority support"], stripeId: "price_gbp_premium" },
  ],
  NGN: [
    { name: "Free", price: "₦0", features: ["Basic portfolio", "Limited customization"], stripeId: "price_ngn_free" },
    { name: "Pro", price: "₦7000", features: ["AI layout", "Live preview", "Download ZIP"], stripeId: "price_ngn_pro" },
    { name: "Premium", price: "₦15000", features: ["Hosting", "Custom domain", "Priority support"], stripeId: "price_ngn_premium" },
  ],
};

const PricingSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [currency, setCurrency] = useState<keyof typeof plans>("USD");

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
      className="py-20 px-6 bg-gradient-to-b from-[#0a0a0a] via-[#111] to-[#0a0a0a] text-white transition-transform duration-300"
    >
      <motion.h2
        className="text-3xl md:text-4xl font-bold text-center mb-6"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        Pricing Plans
      </motion.h2>

      <motion.div
        className="flex justify-center gap-4 mb-12 flex-wrap"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.3, duration: 0.6 }}
      >
        {Object.keys(plans).map((cur) => (
          <button
            key={cur}
            onClick={() => setCurrency(cur as keyof typeof plans)}
            className={`px-4 py-2 rounded-full font-semibold border ${
              currency === cur ? "bg-purple-500 text-white" : "border-gray-500 text-gray-300"
            } transition`}
          >
            {cur}
          </button>
        ))}
      </motion.div>

      <motion.div
        className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.5, duration: 0.8 }}
      >
        {plans[currency].map((plan, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.05 }}
            className="bg-[#1a1a1a] border border-purple-500/30 rounded-xl p-6 shadow-md hover:shadow-purple-500/30 transition-all"
          >
            <h3 className="text-xl font-bold mb-2">{plan.name}</h3>
            <p className="text-2xl font-semibold text-purple-400 mb-4">{plan.price}</p>
            <ul className="text-sm text-gray-400 mb-6 space-y-2">
              {plan.features.map((feature, i) => (
                <li key={i}>• {feature}</li>
              ))}
            </ul>
            <button
              className="w-full py-2 rounded-full bg-gradient-to-r from-cyan-500 to-purple-500 text-white font-semibold shadow-md"
              onClick={() => {
                // Stripe checkout logic goes here
                console.log("Redirect to Stripe:", plan.stripeId);
              }}
            >
              {plan.name === "Free" ? "Get Started" : "Subscribe"}
            </button>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default PricingSection;
