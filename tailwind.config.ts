import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "deep-space": "#0a0a0f",
        "cosmic-purple": "#1a0a2e",
        "nebula-pink": "#ff2d75",
        "electric-cyan": "#00f5ff",
        "cosmic-gold": "#ffd700",
        "starlight-gray": "#a0a0b0",
        "violet-glow": "#7b2cbf",
        "cyan-glow": "#00b4d8",
      },
      fontFamily: {
        orbitron: ["Orbitron", "sans-serif"],
        "space-mono": ["Space Mono", "monospace"],
      },
      animation: {
        "pulse-glow": "pulse-glow 2s ease-in-out infinite",
        "float": "float 6s ease-in-out infinite",
        "twinkle": "twinkle 3s ease-in-out infinite",
        "spin-slow": "spin 60s linear infinite",
        "orbit": "orbit 30s linear infinite",
      },
      keyframes: {
        "pulse-glow": {
          "0%, 100%": {
            boxShadow: "0 0 20px rgba(255, 45, 117, 0.5), 0 0 40px rgba(0, 245, 255, 0.3)",
          },
          "50%": {
            boxShadow: "0 0 30px rgba(255, 45, 117, 0.8), 0 0 60px rgba(0, 245, 255, 0.5)",
          },
        },
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-20px)" },
        },
        twinkle: {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0.3" },
        },
        orbit: {
          "0%": { transform: "rotate(0deg)" },
          "100%": { transform: "rotate(360deg)" },
        },
      },
      backgroundImage: {
        "cosmic-gradient": "linear-gradient(135deg, #7b2cbf 0%, #00b4d8 100%)",
        "dark-gradient": "linear-gradient(180deg, #0a0a0f 0%, #1a0a2e 100%)",
      },
    },
  },
  plugins: [],
};

export default config;
