/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#8B5CF6",
        accent: "#00C4FF",
        dark: "#0F0F10",
        softpink: "#F472B6",
        offwhite: "#F9FAFB",
      },
      fontFamily: {
        heading: ["Space Grotesk", "sans-serif"],
        body: ["Inter", "sans-serif"],
      },
      boxShadow: {
        glow: "0 0 15px rgba(139, 92, 246, 0.6)",
      },
    },
  },
  plugins: [],
};
